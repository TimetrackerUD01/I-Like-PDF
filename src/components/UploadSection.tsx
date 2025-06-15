'use client'

import { useState, useRef } from 'react'
import { uploadFile } from '@/lib/fileUpload'
import { useLanguage } from '@/contexts/LanguageContext'

export default function UploadSection() {
  const [isDragging, setIsDragging] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [selectedAction, setSelectedAction] = useState<'convert' | 'compress'>('convert')
  const [convertTo, setConvertTo] = useState('word')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { t } = useLanguage()

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFiles = Array.from(e.dataTransfer.files)
    setFiles(prev => [...prev, ...droppedFiles])
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      setFiles(prev => [...prev, ...selectedFiles])
    }
  }

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleProcess = async () => {
    if (files.length === 0) return
    
    setIsProcessing(true)
    try {
      // Process files here
      for (const file of files) {
        await uploadFile(file, selectedAction, convertTo)
      }      // Handle success
      alert(t.processingCompleted)
    } catch (error) {
      console.error('Error processing files:', error)
      alert(t.processingError)
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.uploadTitle}
          </h2>
          <p className="text-xl text-gray-600">
            {t.uploadSubtitle}
          </p>
        </div>

        {/* Action Selection */}
        <div className="mb-8">
          <div className="flex justify-center space-x-4 mb-6">            <button
              onClick={() => setSelectedAction('convert')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedAction === 'convert'
                  ? 'bg-red-500 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}            >
              {t.convertFiles}
            </button>
            <button
              onClick={() => setSelectedAction('compress')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedAction === 'compress'
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {t.compressFiles}
            </button>
          </div>

          {selectedAction === 'convert' && (
            <div className="flex justify-center">              <select
                value={convertTo}
                onChange={(e) => setConvertTo(e.target.value)}                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="word">{t.convertToWord}</option>
                <option value="excel">{t.convertToExcel}</option>
                <option value="powerpoint">{t.convertToPowerPoint}</option>
                <option value="image">{t.convertToImage}</option>
                <option value="text">{t.convertToText}</option>
              </select>
            </div>
          )}
        </div>

        {/* Upload Area */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-12 text-center transition ${
            isDragging
              ? 'border-blue-400 bg-blue-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
        >
          <div className="max-w-md mx-auto">
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
            </svg>            <p className="text-xl font-semibold text-gray-900 mb-2">
              {t.dragFiles}
            </p>
            <p className="text-gray-600 mb-4">{t.or}</p>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              {t.chooseFiles}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
              onChange={handleFileSelect}
              className="hidden"
            />
            <p className="text-sm text-gray-500 mt-4">
              {t.supportedFiles}
            </p>
          </div>
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div className="mt-8">            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {t.selectedFiles} ({files.length})
            </h3>
            <div className="space-y-2">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 14H4V5h12v12z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{file.name}</p>
                      <p className="text-sm text-gray-500">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    className="text-red-500 hover:text-red-700 p-1"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Process Button */}
        {files.length > 0 && (
          <div className="mt-8 text-center">            <button
              onClick={handleProcess}
              disabled={isProcessing}
              className={`px-8 py-4 rounded-lg font-semibold transition ${
                isProcessing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : selectedAction === 'convert'
                  ? 'bg-blue-500 hover:bg-blue-600 text-white'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}            >
              {isProcessing ? t.processing : 
               selectedAction === 'convert' ? t.startConverting : t.startCompressing}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
