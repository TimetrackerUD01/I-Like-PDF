import { NextRequest, NextResponse } from 'next/server'
import { fromBuffer } from 'pdf2pic'
import fs from 'fs/promises'
import path from 'path'
import JSZip from 'jszip'
import sharp from 'sharp'

const MAX_FILE_SIZE = 50 * 1024 * 1024
const UPLOAD_DIR = path.join(process.cwd(), 'uploads')

// Ensure upload directory exists
async function ensureUploadDir() {
  try {
    await fs.access(UPLOAD_DIR)
  } catch {
    await fs.mkdir(UPLOAD_DIR, { recursive: true })
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureUploadDir()
    
    const formData = await request.formData()
    const file = formData.get('file') as File
    const format = (formData.get('format') as string) || 'png'
    const quality = parseInt(formData.get('quality') as string) || 90
    const density = parseInt(formData.get('density') as string) || 150
    const width = formData.get('width') ? parseInt(formData.get('width') as string) : undefined
    const height = formData.get('height') ? parseInt(formData.get('height') as string) : undefined
    const pages = (formData.get('pages') as string) || 'all'
    const startPage = parseInt(formData.get('startPage') as string) || 1
    const endPage = parseInt(formData.get('endPage') as string) || 0

    if (!file || file.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'รองรับเฉพาะไฟล์ PDF เท่านั้น', code: 'INVALID_FILE_TYPE' },
        { status: 400 }
      )
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'ขนาดไฟล์เกินกำหนด', code: 'FILE_TOO_LARGE' },
        { status: 400 }
      )
    }

    // Validate format
    if (!['png', 'jpg', 'jpeg', 'webp', 'tiff'].includes(format.toLowerCase())) {
      return NextResponse.json(
        { error: 'รูปแบบภาพไม่รองรับ', code: 'UNSUPPORTED_FORMAT' },
        { status: 400 }
      )
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const timestamp = Date.now()
    const originalName = file.name.replace(/\.[^/.]+$/, "")
    
    // Setup conversion options
    const convertOptions = {
      density: density,
      saveFilename: "page",
      savePath: UPLOAD_DIR,
      format: format.toLowerCase() === 'jpg' ? 'jpeg' : format.toLowerCase() as any,
      width: width,
      height: height,
      quality: format.toLowerCase() === 'png' ? undefined : quality
    }

    // Convert PDF to images
    const convert = fromBuffer(buffer, convertOptions)
    
    let results: any[]
    
    switch (pages) {
      case 'all':
        results = await convert.bulk(-1, { responseType: "buffer" })
        break
      case 'first':
        results = [await convert(1, { responseType: "buffer" })]
        break
      case 'range':
        const end = endPage || startPage
        results = []
        for (let i = startPage; i <= end; i++) {
          try {
            const result = await convert(i, { responseType: "buffer" })
            results.push(result)
          } catch (error) {
            console.log(`Page ${i} conversion failed:`, error)
          }
        }
        break
      default:
        results = await convert.bulk(-1, { responseType: "buffer" })
    }

    if (results.length === 0) {
      return NextResponse.json(
        { error: 'ไม่สามารถแปลงไฟล์ได้', code: 'CONVERSION_FAILED' },
        { status: 500 }
      )
    }

    // Process results
    if (results.length === 1) {
      // Single image
      const result = results[0]
      let imageBuffer = result.buffer
      
      // Apply additional processing with Sharp if needed
      if (width || height || format === 'webp') {
        const sharpImage = sharp(result.buffer)
        
        if (width || height) {
          sharpImage.resize(width, height, { 
            fit: 'inside', 
            withoutEnlargement: true 
          })
        }
        
        if (format === 'webp') {
          sharpImage.webp({ quality: quality })
        } else if (format === 'jpg' || format === 'jpeg') {
          sharpImage.jpeg({ quality: quality })
        } else if (format === 'png') {
          sharpImage.png({ quality: quality })
        }
        
        imageBuffer = await sharpImage.toBuffer()
      }
      
      const imageFilename = `${originalName}_page_1_${timestamp}.${format}`
      const imagePath = path.join(UPLOAD_DIR, imageFilename)
      
      await fs.writeFile(imagePath, imageBuffer)
      
      // Auto cleanup
      setTimeout(async () => {
        try {
          await fs.unlink(imagePath)
        } catch (error) {
          console.error('Cleanup failed:', error)
        }
      }, 2 * 60 * 60 * 1000)
      
      return NextResponse.json({
        success: true,
        filename: imageFilename,
        format: format,
        pages: 1,
        downloadUrl: `/api/download/${imageFilename}`,
        size: Math.round(imageBuffer.length / 1024),
        dimensions: width && height ? { width, height } : null,
        expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString()
      })
      
    } else {
      // Multiple images - create ZIP
      const zip = new JSZip()
      
      for (let i = 0; i < results.length; i++) {
        const result = results[i]
        if (result.buffer) {
          let imageBuffer = result.buffer
          
          // Apply additional processing with Sharp
          if (width || height || format === 'webp') {
            const sharpImage = sharp(result.buffer)
            
            if (width || height) {
              sharpImage.resize(width, height, { 
                fit: 'inside', 
                withoutEnlargement: true 
              })
            }
            
            if (format === 'webp') {
              sharpImage.webp({ quality: quality })
            } else if (format === 'jpg' || format === 'jpeg') {
              sharpImage.jpeg({ quality: quality })
            } else if (format === 'png') {
              sharpImage.png({ quality: quality })
            }
            
            imageBuffer = await sharpImage.toBuffer()
          }
          
          zip.file(`${originalName}_page_${i + 1}.${format}`, imageBuffer)
        }
      }
      
      const zipBuffer = await zip.generateAsync({ 
        type: "nodebuffer",
        compression: "DEFLATE",
        compressionOptions: { level: 6 }
      })
      const zipFilename = `${originalName}_images_${results.length}pages_${timestamp}.zip`
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
        format: 'zip',
        pages: results.length,
        downloadUrl: `/api/download/${zipFilename}`,
        size: Math.round(zipBuffer.length / 1024),
        imageFormat: format,
        dimensions: width && height ? { width, height } : null,
        fileList: results.map((_, index) => `${originalName}_page_${index + 1}.${format}`),
        expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString()
      })
    }

  } catch (error) {
    console.error('PDF to Image conversion error:', error)
    return NextResponse.json(
      { 
        error: 'เกิดข้อผิดพลาดในการแปลงไฟล์', 
        code: 'CONVERSION_FAILED',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
