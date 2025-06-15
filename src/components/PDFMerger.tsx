'use client'

import { useState, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'

interface ProcessedFile {
  success: boolean
  message: string
  downloadUrl?: string
  processedName?: string
}

interface FileItem {
  file: File
  id: string
  preview?: string
}

export default function PDFMerger() {
  const { t } = useLanguage()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<FileItem[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [processedFile, setProcessedFile] = useState<ProcessedFile | null>(null)
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    const droppedFiles = Array.from(e.dataTransfer.files)
    const pdfFiles = droppedFiles.filter(file => file.type === 'application/pdf')
    
    if (pdfFiles.length !== droppedFiles.length) {
      alert('Please upload only PDF files')
      return
    }
    
    addFiles(pdfFiles)
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || [])
    addFiles(selectedFiles)
  }

  const addFiles = (newFiles: File[]) => {
    const newFileItems: FileItem[] = newFiles.map(file => ({
      file,
      id: Math.random().toString(36).substr(2, 9),
      preview: undefined
    }))
    
    setFiles(prev => [...prev, ...newFileItems])
  }

  const removeFile = (id: string) => {
    setFiles(prev => prev.filter(file => file.id !== id))
  }

  const moveFile = (fromIndex: number, toIndex: number) => {
    const newFiles = [...files]
    const [movedFile] = newFiles.splice(fromIndex, 1)
    newFiles.splice(toIndex, 0, movedFile)
    setFiles(newFiles)
  }

  const mergePDFs = async () => {
    if (files.length < 2) {
      alert('Please select at least 2 PDF files to merge')
      return
    }

    setIsProcessing(true)
    setProcessedFile(null)

    try {
      const formData = new FormData()
      files.forEach((fileItem, index) => {
        formData.append(`file_${index}`, fileItem.file)
      })
      formData.append('operation', 'merge')

      const response = await fetch('/api/process', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      setProcessedFile({
        success: response.ok,
        message: result.message || (response.ok ? 'PDF merged successfully!' : 'Failed to merge PDFs'),
        downloadUrl: result.downloadUrl,
        processedName: result.filename
      })
    } catch (error) {
      console.error('Merge error:', error)
      setProcessedFile({
        success: false,
        message: 'An error occurred while merging PDFs'
      })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* File Upload Area */}
      <div
        className={`bg-white rounded-xl shadow-lg p-8 border-2 border-dashed transition-all duration-300 ${
          dragActive 
            ? 'border-purple-400 bg-purple-50' 
            : 'border-gray-300 hover:border-purple-400'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="text-center">
          <svg
            className="mx-auto h-16 w-16 text-gray-400 mb-4"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-xl font-semibold text-gray-900 mb-2">
            Drop PDF files here
          </p>
          <p className="text-gray-600 mb-4">or</p>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
          >
            Choose PDF Files
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Supports multiple PDF files (Max 10MB each)
          </p>
        </div>
        
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Files to Merge ({files.length})
          </h3>
          <div className="space-y-3">
            {files.map((fileItem, index) => (
              <div
                key={fileItem.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border hover:shadow-sm transition-shadow"
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData('text/plain', index.toString())
                }}
                onDragOver={(e) => {
                  e.preventDefault()
                }}
                onDrop={(e) => {
                  e.preventDefault()
                  const fromIndex = parseInt(e.dataTransfer.getData('text/plain'))
                  if (fromIndex !== index) {
                    moveFile(fromIndex, index)
                  }
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.588a1 1 0 01.707.293L13.707 4.707a1 1 0 01.293.707V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{fileItem.file.name}</p>
                    <p className="text-sm text-gray-500">
                      {(fileItem.file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => moveFile(index, Math.max(0, index - 1))}
                    disabled={index === 0}
                    className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                  >
                    ↑
                  </button>
                  <button
                    onClick={() => moveFile(index, Math.min(files.length - 1, index + 1))}
                    disabled={index === files.length - 1}
                    className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                  >
                    ↓
                  </button>
                  <button
                    onClick={() => removeFile(fileItem.id)}
                    className="p-2 text-red-400 hover:text-red-600"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <button
              onClick={mergePDFs}
              disabled={isProcessing || files.length < 2}
              className="bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isProcessing ? 'Merging PDFs...' : `Merge ${files.length} PDFs`}
            </button>
          </div>
        </div>
      )}

      {/* Processing Result */}
      {processedFile && (
        <div className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${
          processedFile.success ? 'border-green-500' : 'border-red-500'
        }`}>
          <div className="flex items-start">
            <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
              processedFile.success ? 'bg-green-100' : 'bg-red-100'
            }`}>
              {processedFile.success ? (
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              ) : (
                <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              )}
            </div>
            <div className="ml-3 flex-1">
              <p className={`font-medium ${processedFile.success ? 'text-green-800' : 'text-red-800'}`}>
                {processedFile.message}
              </p>
              {processedFile.success && processedFile.downloadUrl && (
                <div className="mt-4">
                  <a
                    href={processedFile.downloadUrl}
                    download={processedFile.processedName}
                    className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    Download Merged PDF
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
