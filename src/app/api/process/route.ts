import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { PDFProcessor, DocumentConverter, FileCompressor } from '@/lib/fileProcessor'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const action = formData.get('action') as string
    const convertTo = formData.get('convertTo') as string

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file uploaded' },
        { status: 400 }
      )
    }

    // Validate file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, error: 'File is too large (max 10MB)' },
        { status: 400 }
      )
    }

    // Create uploads directory if it doesn't exist
    const uploadsDir = join(process.cwd(), 'uploads')
    try {
      await mkdir(uploadsDir, { recursive: true })
    } catch (error) {
      // Directory already exists
    }

    // Save uploaded file
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    const originalFileName = file.name
    const timestamp = Date.now()
    const fileExtension = originalFileName.split('.').pop()
    const tempFileName = `temp_${timestamp}.${fileExtension}`
    const tempFilePath = join(uploadsDir, tempFileName)
    
    await writeFile(tempFilePath, buffer)

    let processedBuffer: Buffer
    let processedFileName: string
    let downloadUrl: string

    try {
      if (action === 'convert') {
        // Handle file conversion
        if (fileExtension !== 'pdf') {        return NextResponse.json(
          { success: false, error: 'File conversion only supports PDF files' },
          { status: 400 }
        )
        }

        const conversionOptions = {
          format: convertTo as 'word' | 'excel' | 'powerpoint' | 'image' | 'text',
          quality: 0.8
        }

        processedBuffer = await DocumentConverter.convertPDF(buffer, conversionOptions)
        
        // Set output filename based on conversion type
        const baseFileName = originalFileName.replace(/\.[^/.]+$/, '')
        switch (convertTo) {
          case 'word':
            processedFileName = `${baseFileName}.docx`
            break
          case 'excel':
            processedFileName = `${baseFileName}.xlsx`
            break
          case 'powerpoint':
            processedFileName = `${baseFileName}.pptx`
            break
          case 'image':
            processedFileName = `${baseFileName}.png`
            break
          case 'text':
            processedFileName = `${baseFileName}.txt`
            break
          default:
            processedFileName = `${baseFileName}_converted.${fileExtension}`
        }

      } else if (action === 'compress') {
        // Handle file compression
        if (fileExtension === 'pdf') {
          processedBuffer = await PDFProcessor.compressPDF(buffer, 0.8)
        } else {
          // For other file types, use general compression
          processedBuffer = await FileCompressor.compressImages(buffer, 0.8)
        }
        
        const baseFileName = originalFileName.replace(/\.[^/.]+$/, '')
        processedFileName = `${baseFileName}_compressed.${fileExtension}`
      } else {
        return NextResponse.json(
          { success: false, error: 'การดำเนินการไม่ถูกต้อง' },
          { status: 400 }
        )
      }

      // Save processed file
      const processedFilePath = join(uploadsDir, processedFileName)
      await writeFile(processedFilePath, processedBuffer)

      // Create download URL
      downloadUrl = `/api/download/${processedFileName}`

      // Clean up temp file
      try {
        await import('fs').then(fs => fs.unlinkSync(tempFilePath))
      } catch (error) {
        console.warn('Failed to clean up temp file:', error)
      }

      return NextResponse.json({
        success: true,
        downloadUrl,
        originalFileName,
        processedFileName,
        message: action === 'convert' ? 'File conversion completed' : 'File compression completed'
      })

    } catch (processingError) {
      console.error('Processing error:', processingError)
      
      // Clean up temp file
      try {
        await import('fs').then(fs => fs.unlinkSync(tempFilePath))
      } catch (error) {
        console.warn('Failed to clean up temp file:', error)
      }      return NextResponse.json(
        { 
          success: false, 
          error: `Processing error: ${processingError instanceof Error ? processingError.message : 'Unknown error'}`,
          originalFileName,
          processedFileName: ''
        },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'System error occurred',
        originalFileName: '',
        processedFileName: ''
      },
      { status: 500 }
    )
  }
}

// Handle preflight OPTIONS request for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
