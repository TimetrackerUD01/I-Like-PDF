import { NextRequest, NextResponse } from 'next/server'
import { PDFDocument } from 'pdf-lib'
import fs from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const rangesStr = formData.get('ranges') as string

    if (!file || !rangesStr) {
      return NextResponse.json({ error: 'ข้อมูลไม่ครบถ้วน', success: false }, { status: 400 })
    }

    if (file.type !== 'application/pdf') {
      return NextResponse.json({ error: 'ไฟล์ต้องเป็น PDF เท่านั้น', success: false }, { status: 400 })
    }

    const ranges = JSON.parse(rangesStr)
    const arrayBuffer = await file.arrayBuffer()
    
    let pdfDoc: PDFDocument
    try {
      pdfDoc = await PDFDocument.load(arrayBuffer)
    } catch (error) {
      return NextResponse.json({ error: 'ไฟล์ PDF เสียหายหรือไม่สามารถอ่านได้', success: false }, { status: 400 })
    }

    const uploadsDir = path.join(process.cwd(), 'uploads')
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true })
    }

    const resultFiles: string[] = []

    for (const range of ranges) {
      try {
        const newPdf = await PDFDocument.create()
        
        // Validate range
        if (range.start < 1 || range.end > pdfDoc.getPageCount() || range.start > range.end) {
          throw new Error(`Invalid range: ${range.start}-${range.end}`)
        }
        
        // Copy pages from original PDF
        const pageIndices = []
        for (let i = range.start - 1; i < range.end; i++) {
          if (i < pdfDoc.getPageCount()) {
            pageIndices.push(i)
          }
        }
        
        const pages = await newPdf.copyPages(pdfDoc, pageIndices)
        pages.forEach(page => newPdf.addPage(page))

        // Save the split PDF
        const pdfBytes = await newPdf.save()
        const timestamp = Date.now()
        const safeName = range.name.replace(/[^a-zA-Z0-9ก-๙\s]/g, '_').replace(/\s+/g, '_')
        const filename = `${safeName}_${timestamp}.pdf`
        const filepath = path.join(uploadsDir, filename)
        
        fs.writeFileSync(filepath, pdfBytes)
        resultFiles.push(filename)
      } catch (error) {
        console.error(`Error processing range ${range.name}:`, error)
        continue
      }
    }

    if (resultFiles.length === 0) {
      return NextResponse.json({ error: 'ไม่สามารถแยกไฟล์ได้', success: false }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      files: resultFiles
    })

  } catch (error) {
    console.error('Error splitting PDF:', error)
    return NextResponse.json({ error: 'เกิดข้อผิดพลาดในการแยก PDF', success: false }, { status: 500 })
  }
}
