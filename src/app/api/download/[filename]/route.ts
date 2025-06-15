import { NextRequest, NextResponse } from 'next/server'
import { readFile, stat, unlink } from 'fs/promises'
import { join } from 'path'

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ filename: string }> }
) {
  try {
    const params = await context.params
    const { filename } = params
      if (!filename) {
      return NextResponse.json(
        { error: 'Filename not found' },
        { status: 400 }
      )
    }

    // Security check: prevent directory traversal
    if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
      return NextResponse.json(
        { error: 'Invalid filename' },
        { status: 400 }
      )
    }

    const filePath = join(process.cwd(), 'uploads', filename)

    try {
      // Check if file exists
      await stat(filePath)
      
      // Read file
      const fileBuffer = await readFile(filePath)
      
      // Determine content type based on file extension
      const extension = filename.split('.').pop()?.toLowerCase()
      let contentType = 'application/octet-stream'
      
      switch (extension) {
        case 'pdf':
          contentType = 'application/pdf'
          break
        case 'docx':
          contentType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
          break
        case 'xlsx':
          contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
          break
        case 'pptx':
          contentType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
          break
        case 'png':
          contentType = 'image/png'
          break
        case 'jpg':
        case 'jpeg':
          contentType = 'image/jpeg'
          break
        case 'txt':
          contentType = 'text/plain'
          break
        case 'zip':
          contentType = 'application/zip'
          break
        default:
          contentType = 'application/octet-stream'
      }

      // Create response with file
      const response = new NextResponse(fileBuffer, {
        status: 200,
        headers: {
          'Content-Type': contentType,
          'Content-Disposition': `attachment; filename="${encodeURIComponent(filename)}"`,
          'Content-Length': fileBuffer.length.toString(),
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      })

      // Schedule file deletion after 5 minutes
      setTimeout(async () => {
        try {
          await unlink(filePath)
          console.log(`Cleaned up file: ${filename}`)
        } catch (error) {
          console.warn(`Failed to clean up file ${filename}:`, error)
        }
      }, 5 * 60 * 1000) // 5 minutes

      return response    } catch (fileError) {
      console.error('File access error:', fileError)
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      )
    }

  } catch (error) {
    console.error('Download API error:', error)
    return NextResponse.json(
      { error: 'Download error occurred' },
      { status: 500 }
    )
  }
}
