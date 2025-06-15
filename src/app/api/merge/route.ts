import { NextRequest, NextResponse } from 'next/server'
import { PDFDocument } from 'pdf-lib'
import fs from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const fileCount = parseInt(formData.get('fileCount') as string)

    if (!fileCount || fileCount < 2) {
      return NextResponse.json({ error: 'ต้องมีไฟล์อย่างน้อย 2 ไฟล์', success: false }, { status: 400 })
    }

    const mergedPdf = await PDFDocument.create()
    let processedFiles = 0

    // Process files in order
    for (let i = 0; i < fileCount; i++) {
      const file = formData.get(`file${i}`) as File
      if (!file) continue

      if (file.type !== 'application/pdf') {
        continue
      }

      try {
        const arrayBuffer = await file.arrayBuffer()
        const pdfDoc = await PDFDocument.load(arrayBuffer)
        
        // Copy all pages from this PDF
        const pageCount = pdfDoc.getPageCount()
        const pageIndices = Array.from({ length: pageCount }, (_, i) => i)
        const pages = await mergedPdf.copyPages(pdfDoc, pageIndices)
        
        pages.forEach(page => mergedPdf.addPage(page))
        processedFiles++
      } catch (error) {
        console.error(`Error processing file ${i}:`, error)
        continue
      }
    }

    if (processedFiles < 2) {
      return NextResponse.json({ error: 'ต้องมีไฟล์ PDF ที่ถูกต้องอย่างน้อย 2 ไฟล์', success: false }, { status: 400 })
    }

    // Save merged PDF
    const pdfBytes = await mergedPdf.save()
    const timestamp = Date.now()
    const filename = `merged_pdf_${timestamp}.pdf`
    
    const uploadsDir = path.join(process.cwd(), 'uploads')
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true })
    }
    
    const filepath = path.join(uploadsDir, filename)
    fs.writeFileSync(filepath, pdfBytes)

    return NextResponse.json({
      success: true,
      filename: filename
    })

  } catch (error) {
    console.error('Error merging PDFs:', error)
    return NextResponse.json({ error: 'เกิดข้อผิดพลาดในการรวม PDF', success: false }, { status: 500 })
  }
}
