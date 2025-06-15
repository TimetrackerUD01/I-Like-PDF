import { NextRequest, NextResponse } from 'next/server'
import { PDFDocument, rgb } from 'pdf-lib'
import fs from 'fs/promises'
import path from 'path'

const MAX_FILE_SIZE = 30 * 1024 * 1024 // 30MB per file
const MAX_FILES = 20 // Maximum 20 files
const MAX_TOTAL_SIZE = 200 * 1024 * 1024 // 200MB total
const UPLOAD_DIR = path.join(process.cwd(), 'uploads')

// Ensure upload directory exists
async function ensureUploadDir() {
  try {
    await fs.access(UPLOAD_DIR)
  } catch {
    await fs.mkdir(UPLOAD_DIR, { recursive: true })
  }
}

// Add page numbers to PDF
async function addPageNumbersToPDF(pdfDoc: PDFDocument): Promise<void> {
  const pages = pdfDoc.getPages()
  const totalPages = pages.length
  
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i]
    const { width, height } = page.getSize()
      // Add page number at bottom right
    page.drawText(`${i + 1}/${totalPages}`, {
      x: width - 60,
      y: 20,
      size: 10,
      color: rgb(0.5, 0.5, 0.5)
    })
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureUploadDir()
    
    const formData = await request.formData()
    
    // Handle both old and new API formats
    let files: File[] = []
    
    // New format: files array
    const filesArray = formData.getAll('files') as File[]
    if (filesArray.length > 0) {
      files = filesArray
    } else {
      // Old format: file0, file1, file2...
      const fileCount = parseInt(formData.get('fileCount') as string) || 0
      for (let i = 0; i < fileCount; i++) {
        const file = formData.get(`file${i}`) as File
        if (file) files.push(file)
      }
    }
    
    const addPageNumbers = formData.get('addPageNumbers') === 'true'
    const optimizeSize = formData.get('optimizeSize') !== 'false'
    const pageOrder = (formData.get('pageOrder') as string) || 'original'
    const customOrder = formData.get('customOrder') ? 
      JSON.parse(formData.get('customOrder') as string) : undefined
    
    // Validate files
    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: 'ไม่พบไฟล์ที่อัปโหลด', code: 'NO_FILES', success: false },
        { status: 400 }
      )
    }

    if (files.length < 2) {
      return NextResponse.json(
        { error: 'ต้องมีไฟล์อย่างน้อย 2 ไฟล์', code: 'INSUFFICIENT_FILES', success: false },
        { status: 400 }
      )
    }

    if (files.length > MAX_FILES) {
      return NextResponse.json(
        { error: `รองรับได้สูงสุด ${MAX_FILES} ไฟล์`, code: 'TOO_MANY_FILES', success: false },
        { status: 400 }
      )
    }

    // Check total size
    const totalSize = files.reduce((sum, file) => sum + file.size, 0)
    if (totalSize > MAX_TOTAL_SIZE) {
      return NextResponse.json(
        { error: `ขนาดไฟล์รวมเกิน ${MAX_TOTAL_SIZE / 1024 / 1024}MB`, code: 'TOTAL_SIZE_TOO_LARGE', success: false },
        { status: 400 }
      )
    }

    // Validate each file
    for (const file of files) {
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: `ไฟล์ ${file.name} มีขนาดเกิน ${MAX_FILE_SIZE / 1024 / 1024}MB`, code: 'FILE_TOO_LARGE', success: false },
          { status: 400 }
        )
      }

      if (file.type !== 'application/pdf') {
        return NextResponse.json(
          { error: `ไฟล์ ${file.name} ไม่ใช่ไฟล์ PDF`, code: 'INVALID_FILE_TYPE', success: false },
          { status: 400 }
        )
      }
    }

    // Sort files based on page order
    let orderedFiles = [...files]
    if (pageOrder === 'reverse') {
      orderedFiles.reverse()
    } else if (pageOrder === 'custom' && customOrder) {
      orderedFiles = customOrder.map((index: number) => files[index]).filter(Boolean)
    }

    // Create merged PDF
    const mergedPdf = await PDFDocument.create()
    let totalPages = 0
    const fileInfo: Array<{name: string, pages: number, startPage: number}> = []

    for (const file of orderedFiles) {
      try {
        const bytes = await file.arrayBuffer()
        const pdf = await PDFDocument.load(bytes)
        const pageIndices = pdf.getPageIndices()
        
        const startPage = totalPages + 1
        const pages = await mergedPdf.copyPages(pdf, pageIndices)
        pages.forEach((page) => mergedPdf.addPage(page))
        
        fileInfo.push({
          name: file.name,
          pages: pageIndices.length,
          startPage: startPage
        })
        
        totalPages += pageIndices.length
      } catch (error) {
        console.error(`Error processing file ${file.name}:`, error)
        return NextResponse.json(
          { error: `ไม่สามารถประมวลผลไฟล์ ${file.name} ได้`, code: 'FILE_PROCESSING_ERROR', success: false },
          { status: 400 }
        )
      }
    }

    // Add page numbers if requested
    if (addPageNumbers) {
      await addPageNumbersToPDF(mergedPdf)
    }

    // Set metadata
    mergedPdf.setTitle(`Merged PDF - ${files.length} files`)
    mergedPdf.setAuthor('I Like PDF ❤️')
    mergedPdf.setSubject(`รวม ${files.length} ไฟล์ PDF เป็น ${totalPages} หน้า`)
    mergedPdf.setCreationDate(new Date())

    // Save PDF with optimization
    const saveOptions = optimizeSize ? {
      useObjectStreams: true,
      addDefaultPage: false,
      objectsPerTick: 50,
    } : {}

    const pdfBytes = await mergedPdf.save(saveOptions)
    
    // Generate filename
    const timestamp = Date.now()
    const outputFilename = `merged_${files.length}files_${totalPages}pages_${timestamp}.pdf`
    const outputPath = path.join(UPLOAD_DIR, outputFilename)

    await fs.writeFile(outputPath, pdfBytes)

    // Auto cleanup after 2 hours
    setTimeout(async () => {
      try {
        await fs.unlink(outputPath)
        console.log(`Auto-cleaned: ${outputFilename}`)
      } catch (error) {
        console.error('Cleanup failed:', error)
      }
    }, 2 * 60 * 60 * 1000)

    return NextResponse.json({
      success: true,
      filename: outputFilename,
      totalFiles: files.length,
      totalPages: totalPages,
      size: Math.round(pdfBytes.length / 1024), // KB
      fileInfo: fileInfo,
      downloadUrl: `/api/download/${outputFilename}`,
      options: {
        addPageNumbers,
        optimizeSize,
        pageOrder
      },
      expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString()
    })

  } catch (error) {
    console.error('Merge error:', error)
    return NextResponse.json(
      { 
        error: 'เกิดข้อผิดพลาดในการรวมไฟล์', 
        code: 'MERGE_FAILED',
        success: false,
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}