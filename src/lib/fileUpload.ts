export interface FileProcessingOptions {
  action: 'convert' | 'compress'
  convertTo?: string
  quality?: number
}

export interface ProcessingResult {
  success: boolean
  downloadUrl?: string
  error?: string
  originalFileName: string
  processedFileName: string
}

export async function uploadFile(
  file: File, 
  action: 'convert' | 'compress', 
  convertTo?: string
): Promise<ProcessingResult> {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('action', action)
  if (convertTo) {
    formData.append('convertTo', convertTo)
  }

  try {
    const response = await fetch('/api/process', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error('Upload error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      originalFileName: file.name,
      processedFileName: ''
    }
  }
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

export function getFileExtension(filename: string): string {
  return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2)
}

export function isValidFileType(file: File, allowedTypes: string[]): boolean {
  const fileExtension = getFileExtension(file.name).toLowerCase()
  return allowedTypes.includes(fileExtension)
}

export const ALLOWED_FILE_TYPES = {
  pdf: ['pdf'],
  images: ['jpg', 'jpeg', 'png', 'gif', 'bmp'],
  documents: ['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx'],
  all: ['pdf', 'jpg', 'jpeg', 'png', 'gif', 'bmp', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx']
}

export const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
