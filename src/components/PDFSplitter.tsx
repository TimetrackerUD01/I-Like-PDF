'use client'

import { useState, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface ProcessedFile {
  success: boolean
  message: string
  downloadUrl?: string
  processedName?: string
}

interface SplitOptions {
  type: 'pages' | 'range' | 'every'
  pageNumbers?: string
  rangeStart?: number
  rangeEnd?: number
  everyNPages?: number
}

export default function PDFSplitter() {
  const { t } = useLanguage()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [processedFiles, setProcessedFiles] = useState<ProcessedFile[]>([])
  const [dragActive, setDragActive] = useState(false)
  const [splitOptions, setSplitOptions] = useState<SplitOptions>({
    type: 'pages'
  })
  const [totalPages, setTotalPages] = useState<number | null>(null)

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
    const pdfFile = droppedFiles.find(file => file.type === 'application/pdf')
    
    if (!pdfFile) {
      alert('Please upload a PDF file')
      return
    }
    
    setFile(pdfFile)
    getPageCount(pdfFile)
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      getPageCount(selectedFile)
    }
  }

  const getPageCount = async (pdfFile: File) => {
    try {
      const formData = new FormData()
      formData.append('file', pdfFile)
      formData.append('operation', 'getPageCount')

      const response = await fetch('/api/process', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()
      if (result.pageCount) {
        setTotalPages(result.pageCount)
      }
    } catch (error) {
      console.error('Error getting page count:', error)
    }
  }

  const splitPDF = async () => {
    if (!file) {
      alert('Please select a PDF file to split')
      return
    }

    setIsProcessing(true)
    setProcessedFiles([])

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('operation', 'split')
      formData.append('splitType', splitOptions.type)
      
      if (splitOptions.type === 'pages' && splitOptions.pageNumbers) {
        formData.append('pageNumbers', splitOptions.pageNumbers)
      } else if (splitOptions.type === 'range') {
        formData.append('rangeStart', splitOptions.rangeStart?.toString() || '1')
        formData.append('rangeEnd', splitOptions.rangeEnd?.toString() || totalPages?.toString() || '1')
      } else if (splitOptions.type === 'every' && splitOptions.everyNPages) {
        formData.append('everyNPages', splitOptions.everyNPages.toString())
      }

      const response = await fetch('/api/process', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (response.ok && result.files) {
        setProcessedFiles(result.files.map((fileInfo: any) => ({
          success: true,
          message: `Split successful: ${fileInfo.name}`,
          downloadUrl: fileInfo.downloadUrl,
          processedName: fileInfo.name
        })))
      } else {
        setProcessedFiles([{
          success: false,
          message: result.message || 'Failed to split PDF'
        }])
      }
    } catch (error) {
      console.error('Split error:', error)
      setProcessedFiles([{
        success: false,
        message: 'An error occurred while splitting PDF'
      }])
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
            ? 'border-red-400 bg-red-50' 
            : 'border-gray-300 hover:border-red-400'
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
            Drop PDF file here
          </p>
          <p className="text-gray-600 mb-4">or</p>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
          >
            Choose PDF File
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Supports PDF files (Max 10MB)
          </p>
        </div>
        
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>

      {/* File Info */}
      {file && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Selected File</h3>
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.588a1 1 0 01.707.293L13.707 4.707a1 1 0 01.293.707V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">{file.name}</p>
              <p className="text-sm text-gray-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB
                {totalPages && ` • ${totalPages} pages`}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Split Options */}
      {file && totalPages && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Split Options</h3>
          
          <div className="space-y-4">
            {/* Split by specific pages */}
            <div className="border rounded-lg p-4">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="splitType"
                  value="pages"
                  checked={splitOptions.type === 'pages'}
                  onChange={(e) => setSplitOptions({...splitOptions, type: 'pages'})}
                  className="w-4 h-4 text-red-600"
                />
                <span className="font-medium">Extract specific pages</span>
              </label>
              <p className="text-sm text-gray-500 mt-1">
                Enter page numbers separated by commas (e.g., 1,3,5-8)
              </p>
              {splitOptions.type === 'pages' && (
                <input
                  type="text"
                  placeholder="e.g., 1,3,5-8"
                  value={splitOptions.pageNumbers || ''}
                  onChange={(e) => setSplitOptions({...splitOptions, pageNumbers: e.target.value})}
                  className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              )}
            </div>

            {/* Split by range */}
            <div className="border rounded-lg p-4">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="splitType"
                  value="range"
                  checked={splitOptions.type === 'range'}
                  onChange={(e) => setSplitOptions({...splitOptions, type: 'range'})}
                  className="w-4 h-4 text-red-600"
                />
                <span className="font-medium">Extract page range</span>
              </label>
              <p className="text-sm text-gray-500 mt-1">
                Extract pages from start to end
              </p>
              {splitOptions.type === 'range' && (
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">From page</label>
                    <input
                      type="number"
                      min="1"
                      max={totalPages}
                      value={splitOptions.rangeStart || 1}
                      onChange={(e) => setSplitOptions({...splitOptions, rangeStart: parseInt(e.target.value)})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">To page</label>
                    <input
                      type="number"
                      min="1"
                      max={totalPages}
                      value={splitOptions.rangeEnd || totalPages}
                      onChange={(e) => setSplitOptions({...splitOptions, rangeEnd: parseInt(e.target.value)})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Split every N pages */}
            <div className="border rounded-lg p-4">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="splitType"
                  value="every"
                  checked={splitOptions.type === 'every'}
                  onChange={(e) => setSplitOptions({...splitOptions, type: 'every'})}
                  className="w-4 h-4 text-red-600"
                />
                <span className="font-medium">Split every N pages</span>
              </label>
              <p className="text-sm text-gray-500 mt-1">
                Create separate files for every N pages
              </p>
              {splitOptions.type === 'every' && (
                <div className="mt-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pages per file</label>
                  <input
                    type="number"
                    min="1"
                    max={totalPages}
                    value={splitOptions.everyNPages || 1}
                    onChange={(e) => setSplitOptions({...splitOptions, everyNPages: parseInt(e.target.value)})}
                    className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={splitPDF}
              disabled={isProcessing}
              className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isProcessing ? 'Splitting PDF...' : 'Split PDF'}
            </button>
          </div>
        </div>
      )}

      {/* Processing Results */}
      {processedFiles.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Split Results</h3>
          <div className="space-y-3">
            {processedFiles.map((file, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-l-4 ${
                  file.success ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                      file.success ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {file.success ? (
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                        </svg>
                      )}
                    </div>
                    <span className={`font-medium ${file.success ? 'text-green-800' : 'text-red-800'}`}>
                      {file.message}
                    </span>
                  </div>
                  {file.success && file.downloadUrl && (
                    <a
                      href={file.downloadUrl}
                      download={file.processedName}
                      className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                      Download
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
