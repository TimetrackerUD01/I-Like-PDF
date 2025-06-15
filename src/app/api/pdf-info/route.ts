import { NextRequest, NextResponse } from 'next/server'
import { PDFDocument } from 'pdf-lib'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const action = formData.get('action') as string

    if (!file) {
      return NextResponse.json({ error: 'ไม่พบไฟล์', success: false }, { status: 400 })
    }

    if (file.type !== 'application/pdf') {
      return NextResponse.json({ error: 'ไฟล์ต้องเป็น PDF เท่านั้น', success: false }, { status: 400 })
    }

    const arrayBuffer = await file.arrayBuffer()
    
    try {
      const pdfDoc = await PDFDocument.load(arrayBuffer)

      if (action === 'getPageCount') {
        return NextResponse.json({ 
          pageCount: pdfDoc.getPageCount(),
          success: true 
        })
      }

      return NextResponse.json({ error: 'Invalid action', success: false }, { status: 400 })
    } catch (pdfError) {
      console.error('PDF parsing error:', pdfError)
      return NextResponse.json({ error: 'ไฟล์ PDF เสียหายหรือไม่สามารถอ่านได้', success: false }, { status: 400 })
    }

  } catch (error) {
    console.error('Error processing PDF info:', error)
    return NextResponse.json({ error: 'เกิดข้อผิดพลาดในการประมวลผล PDF', success: false }, { status: 500 })
  }
}
