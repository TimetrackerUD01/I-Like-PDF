export interface FileUploadResponse {
  success: boolean
  downloadUrl?: string
  error?: string
  originalFileName: string
  processedFileName: string
  message?: string
}

export interface FileProcessingOptions {
  action: 'convert' | 'compress'
  convertTo?: 'word' | 'excel' | 'powerpoint' | 'image' | 'text'
  quality?: number
}

export interface ProcessedFile {
  id: string
  originalName: string
  processedName: string
  size: number
  type: string
  downloadUrl: string
  createdAt: Date
  expiresAt: Date
}

export interface ConversionFormat {
  id: string
  name: string
  extension: string
  mimeType: string
  description: string
}

export const CONVERSION_FORMATS: ConversionFormat[] = [
  {
    id: 'word',
    name: 'Microsoft Word',
    extension: 'docx',
    mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    description: 'แปลงเป็นเอกสาร Word'
  },
  {
    id: 'excel',
    name: 'Microsoft Excel',
    extension: 'xlsx',
    mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    description: 'แปลงเป็นสเปรดชีต Excel'
  },
  {
    id: 'powerpoint',
    name: 'Microsoft PowerPoint',
    extension: 'pptx',
    mimeType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    description: 'แปลงเป็นงานนำเสนอ PowerPoint'
  },
  {
    id: 'image',
    name: 'PNG Image',
    extension: 'png',
    mimeType: 'image/png',
    description: 'แปลงเป็นรูปภาพ PNG'
  },
  {
    id: 'text',
    name: 'Plain Text',
    extension: 'txt',
    mimeType: 'text/plain',
    description: 'แปลงเป็นข้อความธรรมดา'
  }
]
