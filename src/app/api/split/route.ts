import { NextRequest, NextResponse } from 'next/server'
import { PDFDocument } from 'pdf-lib'
import fs from 'fs/promises'
import path from 'path'
import JSZip from 'jszip'

const MAX_FILE_SIZE = 50 * 1024 * 1024 // 50MB
const UPLOAD_DIR = path.join(process.cwd(), 'uploads')

// Ensure upload directory exists
async function ensureUploadDir() {
  try {
    await fs.access(UPLOAD_DIR)
  } catch {
    await fs.mkdir(UPLOAD_DIR, { recursive: true })
  }
}

// Parse page numbers string like "1,3,5-8,10"
function parsePageNumbers(pageNumbersStr: string, totalPages: number): number[] {
  const pages: number[] = []
  const ranges = pageNumbersStr.split(',')
  
  for (const range of ranges) {
    const trimmed = range.trim()
    if (trimmed.includes('-')) {
      const [start, end] = trimmed.split('-').map(n => parseInt(n.trim()))
      if (start >= 1 && end <= totalPages && start <= end) {
        for (let i = start; i <= end; i++) {
          pages.push(i - 1) // Convert to 0-based index
        }
      }
    } else {
      const pageNum = parseInt(trimmed)
      if (pageNum >= 1 && pageNum <= totalPages) {
        pages.push(pageNum - 1) // Convert to 0-based index
      }
    }
  }
  
  return Array.from(new Set(pages)).sort((a, b) => a - b) // Remove duplicates and sort
}

// Split PDF into multiple documents
async function splitPDFByPages(pdfDoc: PDFDocument, pageGroups: number[][]): Promise<Buffer[]> {
  const splitPDFs: Buffer[] = []
  
  for (const pageGroup of pageGroups) {
    const newPdf = await PDFDocument.create()
    const pages = await newPdf.copyPages(pdfDoc, pageGroup)
    pages.forEach((page) => newPdf.addPage(page))
    
    // Set metadata
    newPdf.setAuthor('I Like PDF ❤️')
    newPdf.setCreationDate(new Date())
    
    const pdfBytes = await newPdf.save()
    splitPDFs.push(Buffer.from(pdfBytes))
  }
  
  return splitPDFs
}

// Split PDF into single pages
async function splitPDFIntoPages(pdfDoc: PDFDocument): Promise<Buffer[]> {
  const totalPages = pdfDoc.getPageCount()
  const pageGroups: number[][] = []
  
  for (let i = 0; i < totalPages; i++) {
    pageGroups.push([i])
  }
  
  return await splitPDFByPages(pdfDoc, pageGroups)
}

// Split PDF by every N pages
async function splitPDFByInterval(pdfDoc: PDFDocument, interval: number): Promise<Buffer[]> {
  const totalPages = pdfDoc.getPageCount()
  const pageGroups: number[][] = []
  
  for (let i = 0; i < totalPages; i += interval) {
    const group: number[] = []
    for (let j = i; j < Math.min(i + interval, totalPages); j++) {
      group.push(j)
    }
    pageGroups.push(group)
  }
  
  return await splitPDFByPages(pdfDoc, pageGroups)
}

export async function POST(request: NextRequest) {
  try {
    await ensureUploadDir()
    
    const formData = await request.formData()
    const file = formData.get('file') as File
    const splitType = formData.get('splitType') as string || 'range'
    const startPage = parseInt(formData.get('startPage') as string || '1')
    const endPage = parseInt(formData.get('endPage') as string || '0')
    const pageNumbers = formData.get('pageNumbers') as string
    const rangesStr = formData.get('ranges') as string // For backward compatibility
    const everyNPages = parseInt(formData.get('everyNPages') as string || '1')
    
    if (!file) {
      return NextResponse.json(
        { error: 'ไม่พบไฟล์ที่อัปโหลด', code: 'NO_FILE', success: false },
        { status: 400 }
      )
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: `ขนาดไฟล์เกิน ${MAX_FILE_SIZE / 1024 / 1024}MB`, code: 'FILE_TOO_LARGE', success: false },
        { status: 400 }
      )
    }

    if (file.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'รองรับเฉพาะไฟล์ PDF เท่านั้น', code: 'INVALID_FILE_TYPE', success: false },
        { status: 400 }
      )
    }

    // Read PDF file
    const bytes = await file.arrayBuffer()
    const pdfDoc = await PDFDocument.load(bytes)
    const totalPages = pdfDoc.getPageCount()

    let splitPDFs: Buffer[]
    let splitInfo: string

    switch (splitType) {
      case 'all':
        // Split into individual pages
        splitPDFs = await splitPDFIntoPages(pdfDoc)
        splitInfo = `แยกเป็น ${totalPages} หน้าแยกกัน`
        break
        
      case 'range':
        // Split by page range
        const end = endPage || totalPages
        if (startPage < 1 || startPage > totalPages || end < startPage || end > totalPages) {
          return NextResponse.json(
            { error: 'ช่วงหน้าไม่ถูกต้อง', code: 'INVALID_RANGE', success: false },
            { status: 400 }
          )
        }
        
        const rangePages: number[] = []
        for (let i = startPage - 1; i < end; i++) {
          rangePages.push(i)
        }
        splitPDFs = await splitPDFByPages(pdfDoc, [rangePages])
        splitInfo = `แยกหน้า ${startPage}-${end}`
        break
        
      case 'pages':
        // Split by specific page numbers
        const pageNumbersToSplit = pageNumbers || rangesStr // Backward compatibility
        if (!pageNumbersToSplit) {
          return NextResponse.json(
            { error: 'ไม่พบหมายเลขหน้าที่ต้องการแยก', code: 'NO_PAGE_NUMBERS', success: false },
            { status: 400 }
          )
        }
        
        let pagesToExtract: number[]
        
        if (rangesStr) {
          // Old format: JSON array
          try {
            const ranges = JSON.parse(rangesStr)
            pagesToExtract = []
            for (const range of ranges) {
              for (let i = range.start - 1; i < range.end; i++) {
                if (i >= 0 && i < totalPages) {
                  pagesToExtract.push(i)
                }
              }
            }
          } catch (error) {
            return NextResponse.json(
              { error: 'รูปแบบข้อมูลช่วงหน้าไม่ถูกต้อง', code: 'INVALID_RANGES_FORMAT', success: false },
              { status: 400 }
            )
          }
        } else {
          // New format: "1,3,5-8"
          pagesToExtract = parsePageNumbers(pageNumbersToSplit, totalPages)
        }
        
        if (pagesToExtract.length === 0) {
          return NextResponse.json(
            { error: 'ไม่พบหน้าที่ต้องการแยก', code: 'NO_VALID_PAGES', success: false },
            { status: 400 }
          )
        }
        
        splitPDFs = await splitPDFByPages(pdfDoc, [pagesToExtract])
        splitInfo = `แยก ${pagesToExtract.length} หน้าที่เลือก`
        break
        
      case 'interval':
        // Split every N pages
        if (everyNPages < 1) {
          return NextResponse.json(
            { error: 'จำนวนหน้าต่อไฟล์ต้องมากกว่า 0', code: 'INVALID_INTERVAL', success: false },
            { status: 400 }
          )
        }
        
        splitPDFs = await splitPDFByInterval(pdfDoc, everyNPages)
        splitInfo = `แยกทุก ${everyNPages} หน้า เป็น ${splitPDFs.length} ไฟล์`
        break
        
      default:
        return NextResponse.json(
          { error: 'รูปแบบการแยกไม่ถูกต้อง', code: 'INVALID_SPLIT_TYPE', success: false },
          { status: 400 }
        )
    }

    if (splitPDFs.length === 0) {
      return NextResponse.json(
        { error: 'ไม่สามารถแยกไฟล์ได้', code: 'SPLIT_FAILED', success: false },
        { status: 500 }
      )
    }

    const timestamp = Date.now()
    const originalName = file.name.replace(/\.[^/.]+$/, "")
    
    if (splitPDFs.length === 1) {
      // Single file output
      const outputFilename = `${originalName}_split_${timestamp}.pdf`
      const outputPath = path.join(UPLOAD_DIR, outputFilename)
      
      await fs.writeFile(outputPath, splitPDFs[0])
      
      // Auto cleanup
      setTimeout(async () => {
        try {
          await fs.unlink(outputPath)
        } catch (error) {
          console.error('Cleanup failed:', error)
        }
      }, 2 * 60 * 60 * 1000)
      
      return NextResponse.json({
        success: true,
        filename: outputFilename,
        originalPages: totalPages,
        splitFiles: 1,
        splitInfo: splitInfo,
        size: Math.round(splitPDFs[0].length / 1024),
        downloadUrl: `/api/download/${outputFilename}`,
        expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString()
      })
      
    } else {
      // Multiple files - create ZIP
      const zip = new JSZip()
      
      splitPDFs.forEach((pdfBuffer, index) => {
        const filename = `${originalName}_part_${index + 1}.pdf`
        zip.file(filename, pdfBuffer)
      })
      
      const zipBuffer = await zip.generateAsync({ type: "nodebuffer" })
      const zipFilename = `${originalName}_split_${splitPDFs.length}files_${timestamp}.zip`
      const zipPath = path.join(UPLOAD_DIR, zipFilename)
      
      await fs.writeFile(zipPath, zipBuffer)
      
      // Auto cleanup
      setTimeout(async () => {
        try {
          await fs.unlink(zipPath)
        } catch (error) {
          console.error('Cleanup failed:', error)
        }
      }, 2 * 60 * 60 * 1000)
      
      return NextResponse.json({
        success: true,
        filename: zipFilename,
        originalPages: totalPages,
        splitFiles: splitPDFs.length,
        splitInfo: splitInfo,
        size: Math.round(zipBuffer.length / 1024),
        downloadUrl: `/api/download/${zipFilename}`,
        fileList: splitPDFs.map((_, index) => `${originalName}_part_${index + 1}.pdf`),
        expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString()
      })
    }

  } catch (error) {
    console.error('Split error:', error)
    return NextResponse.json(
      { 
        error: 'เกิดข้อผิดพลาดในการแยกไฟล์', 
        code: 'SPLIT_FAILED',
        success: false,
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}