'use client'

import React, { useState } from 'react'
import { Upload, FileText, Download, Combine, X, GripVertical, AlertCircle } from 'lucide-react'
import { HeaderAd, InContentAd, BetweenContentAd, MobileAd, DesktopAd } from '@/components/GoogleAdSense'

interface FileItem {
  file: File
  id: string
}

const MergePage: React.FC = () => {
  const [files, setFiles] = useState<FileItem[]>([])
  const [processing, setProcessing] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const validateFile = (file: File): boolean => {
    if (file.type !== 'application/pdf') {
      setError('กรุณาเลือกไฟล์ PDF เท่านั้น')
      return false
    }
    if (file.size > 10 * 1024 * 1024) { // 10MB
      setError('ขนาดไฟล์ต้องไม่เกิน 10MB')
      return false
    }
    return true
  }

  const handleFileUpload = (uploadedFiles: FileList | null) => {
    if (!uploadedFiles) return
    
    setError(null)
    const validFiles: FileItem[] = []

    Array.from(uploadedFiles).forEach(file => {
      if (validateFile(file)) {
        validFiles.push({
          file,
          id: Math.random().toString(36).substring(7)
        })
      }
    })

    if (validFiles.length > 0) {
      setFiles(prev => [...prev, ...validFiles])
      setResult(null)
    }
  }

  // Drag & Drop for file upload
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragOver(false)
  }

  const handleDragOverUpload = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDropUpload = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragOver(false)
    
    const droppedFiles = e.dataTransfer.files
    handleFileUpload(droppedFiles)
  }

  const removeFile = (id: string) => {
    setFiles(files.filter(item => item.id !== id))
    setError(null)
  }

  // Drag & Drop for reordering
  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault()
    
    if (draggedIndex === null || draggedIndex === dropIndex) return

    const newFiles = [...files]
    const draggedFile = newFiles[draggedIndex]
    
    newFiles.splice(draggedIndex, 1)
    newFiles.splice(dropIndex, 0, draggedFile)
    
    setFiles(newFiles)
    setDraggedIndex(null)
  }

  const handleMerge = async () => {
    if (files.length < 2) {
      setError('ต้องมีไฟล์อย่างน้อย 2 ไฟล์')
      return
    }

    setProcessing(true)
    setError(null)
    
    const formData = new FormData()
    
    files.forEach((item, index) => {
      formData.append(`file${index}`, item.file)
    })
    
    formData.append('fileCount', files.length.toString())

    try {
      const response = await fetch('/api/merge', {
        method: 'POST',
        body: formData,
      })
      
      const data = await response.json()
      if (data.success) {
        setResult(data.filename)
      } else {
        setError(data.error || 'เกิดข้อผิดพลาดในการรวมไฟล์')
      }
    } catch (error) {
      console.error('Error merging PDFs:', error)
      setError('เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์')
    } finally {
      setProcessing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8">
      {/* Header Ad */}
      <div className="bg-white py-2">
        <HeaderAd />
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <Combine className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">รวม PDF</h1>
          <p className="text-gray-600">รวมไฟล์ PDF หลายไฟล์เป็นไฟล์เดียว</p>
        </div>

        {/* Mobile Ad */}
        <MobileAd />

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
              <span className="text-red-700">{error}</span>
            </div>
          </div>
        )}

        {/* File Upload */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div 
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              isDragOver ? 'border-green-500 bg-green-50' : 'border-gray-300'
            }`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOverUpload}
            onDrop={handleDropUpload}
          >
            <input
              type="file"
              accept=".pdf"
              multiple
              onChange={(e) => handleFileUpload(e.target.files)}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg mb-2">คลิกเพื่อเลือกไฟล์ PDF หรือลากไฟล์มาวาง</p>
              <p className="text-sm text-gray-500">สามารถเลือกหลายไฟล์พร้อมกันได้ (สูงสุด 10MB ต่อไฟล์)</p>
            </label>
          </div>
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">ไฟล์ที่จะรวม ({files.length} ไฟล์)</h2>
              <p className="text-sm text-gray-500">ลากเพื่อเรียงลำดับ</p>
            </div>

            <div className="space-y-2">
              {files.map((item, index) => (
                <div
                  key={item.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, index)}
                  className={`flex items-center p-4 bg-gray-50 rounded-lg border cursor-move hover:bg-gray-100 transition-colors ${
                    draggedIndex === index ? 'opacity-50' : ''
                  }`}
                >
                  <GripVertical className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-3">
                    {index + 1}
                  </span>
                  <FileText className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="flex-1 font-medium">{item.file.name}</span>
                  <span className="text-sm text-gray-500 mr-3">
                    {(item.file.size / 1024 / 1024).toFixed(2)} MB
                  </span>
                  <button
                    onClick={() => removeFile(item.id)}
                    className="text-red-500 hover:text-red-700 p-1 rounded transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Between Content Ad */}
            <BetweenContentAd />

            <div className="mt-6">
              <button
                onClick={handleMerge}
                disabled={files.length < 2 || processing}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {processing ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    กำลังรวมไฟล์...
                  </div>
                ) : (
                  `รวม PDF ${files.length} ไฟล์`
                )}
              </button>
            </div>
          </div>
        )}

        {/* Result */}
        {result && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">รวมไฟล์สำเร็จ</h2>
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-green-600 mr-3" />
                <span className="font-medium">{result}</span>
              </div>
              <a
                href={`/api/download/${result}`}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 flex items-center transition-colors"
              >
                <Download className="h-4 w-4 mr-2" />
                ดาวน์โหลด
              </a>
            </div>
          </div>
        )}

        {/* Content Section - Below the fold */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">ทำไมต้องรวมไฟล์ PDF?</h2>
          <p className="text-gray-700 mb-4">
            การรวมไฟล์ PDF เป็นไฟล์เดียวช่วยให้การจัดการเอกสารของคุณง่ายขึ้น
            ไม่ว่าจะเป็นการส่งทางอีเมล แชร์ออนไลน์ หรือเก็บรักษา
            คุณสามารถรวมไฟล์ใบเสนอราคา รายงาน หรือเอกสารต่างๆ เข้าด้วยกัน
            เพียงแค่ลากไฟล์มาที่นี่และรอให้ระบบทำงาน
          </p>
          <InContentAd />
        </div>

        {/* Ads Section - Between content */}
        <div className="my-8">
          <BetweenContentAd />
        </div>

        {/* Desktop Ad - Responsive */}
        <div className="hidden md:block mb-8">
          <DesktopAd />
        </div>

        {/* In Content Ad */}
        <div className="py-8">
          <InContentAd />
        </div>
      </div>
    </div>
  )
}

export default MergePage
