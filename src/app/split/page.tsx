'use client'

import React, { useState } from 'react'
import { Upload, FileText, Download, Scissors, AlertCircle } from 'lucide-react'
import { HeaderAd, InContentAd, BetweenContentAd, MobileAd, DesktopAd } from '@/components/GoogleAdSense'

interface SplitRange {
  start: number
  end: number
  name: string
}

const SplitPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [splitRanges, setSplitRanges] = useState<SplitRange[]>([])
  const [processing, setProcessing] = useState(false)
  const [results, setResults] = useState<string[]>([])
  const [isDragOver, setIsDragOver] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loadingPageCount, setLoadingPageCount] = useState(false)

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

  const handleFileUpload = async (uploadedFile: File) => {
    if (!validateFile(uploadedFile)) return

    setFile(uploadedFile)
    setResults([])
    setError(null)
    setLoadingPageCount(true)
    
    // Get total pages from PDF
    const formData = new FormData()
    formData.append('file', uploadedFile)
    formData.append('action', 'getPageCount')

    try {
      const response = await fetch('/api/pdf-info', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      
      if (data.success) {
        setTotalPages(data.pageCount)
      } else {
        setError(data.error || 'ไม่สามารถอ่านไฟล์ PDF ได้')
      }
    } catch (error) {
      console.error('Error getting page count:', error)
      setError('เกิดข้อผิดพลาดในการอ่านไฟล์ PDF')
    } finally {
      setLoadingPageCount(false)
    }
  }

  // Drag & Drop functionality
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

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragOver(false)
    
    const droppedFiles = e.dataTransfer.files
    if (droppedFiles.length > 0) {
      handleFileUpload(droppedFiles[0])
    }
  }

  const addSplitRange = () => {
    setSplitRanges([...splitRanges, { start: 1, end: totalPages, name: `ส่วนที่ ${splitRanges.length + 1}` }])
  }

  const updateSplitRange = (index: number, field: keyof SplitRange, value: string | number) => {
    const updated = [...splitRanges]
    updated[index] = { ...updated[index], [field]: value }
    setSplitRanges(updated)
  }

  const removeSplitRange = (index: number) => {
    setSplitRanges(splitRanges.filter((_, i) => i !== index))
  }

  const validateRanges = (): boolean => {
    for (const range of splitRanges) {
      if (range.start < 1 || range.end > totalPages || range.start > range.end) {
        setError(`ช่วงหน้าไม่ถูกต้อง: ${range.name}`)
        return false
      }
    }
    return true
  }

  const handleSplit = async () => {
    if (!file || splitRanges.length === 0) {
      setError('กรุณาเพิ่มช่วงหน้าที่ต้องการแยก')
      return
    }

    if (!validateRanges()) return

    setProcessing(true)
    setError(null)
    
    const formData = new FormData()
    formData.append('file', file)
    formData.append('ranges', JSON.stringify(splitRanges))

    try {
      const response = await fetch('/api/split', {
        method: 'POST',
        body: formData,
      })
      
      const data = await response.json()
      if (data.success) {
        setResults(data.files)
      } else {
        setError(data.error || 'เกิดข้อผิดพลาดในการแยกไฟล์')
      }
    } catch (error) {
      console.error('Error splitting PDF:', error)
      setError('เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์')
    } finally {
      setProcessing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      {/* Header Ad */}
      <div className="bg-white py-2">
        <HeaderAd />
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <Scissors className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">แยก PDF</h1>
          <p className="text-gray-600">แยกไฟล์ PDF เป็นหลายส่วนตามต้องการ</p>
        </div>        {/* Error Message */}
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
              isDragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
            }`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg mb-2">คลิกเพื่อเลือกไฟล์ PDF หรือลากไฟล์มาวาง</p>
              <p className="text-sm text-gray-500">ขนาดไฟล์สูงสุด 10MB</p>
            </label>
          </div>
          
          {file && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-medium">{file.name}</span>
                <span className="ml-auto text-sm text-gray-500">
                  {loadingPageCount ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                      กำลังโหลด...
                    </div>
                  ) : (
                    `${totalPages} หน้า`
                  )}
                </span>
              </div>
            </div>          )}
        </div>

        {/* Mobile Ad */}
        <div className="my-6">
          <MobileAd />
        </div>

        {/* Split Ranges */}
        {file && totalPages > 0 && !loadingPageCount && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">กำหนดการแยกหน้า</h2>
              <button
                onClick={addSplitRange}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                เพิ่มช่วงหน้า
              </button>
            </div>

            {splitRanges.map((range, index) => (
              <div key={index} className="border rounded-lg p-4 mb-4 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">ชื่อไฟล์</label>
                    <input
                      type="text"
                      value={range.name}
                      onChange={(e) => updateSplitRange(index, 'name', e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">หน้าเริ่มต้น</label>
                    <input
                      type="number"
                      min="1"
                      max={totalPages}
                      value={range.start}
                      onChange={(e) => updateSplitRange(index, 'start', parseInt(e.target.value) || 1)}
                      className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">หน้าสุดท้าย</label>
                    <input
                      type="number"
                      min="1"
                      max={totalPages}
                      value={range.end}
                      onChange={(e) => updateSplitRange(index, 'end', parseInt(e.target.value) || totalPages)}
                      className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="flex items-end">
                    <button
                      onClick={() => removeSplitRange(index)}
                      className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 w-full transition-colors"
                    >
                      ลบ
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {splitRanges.length > 0 && (
              <button
                onClick={handleSplit}
                disabled={processing}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {processing ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    กำลังแยกไฟล์...
                  </div>
                ) : (
                  'แยก PDF'
                )}
              </button>            )}
          </div>
        )}

        {/* BetweenContent Ad */}
        <div className="my-6">
          <BetweenContentAd />
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">ไฟล์ที่แยกแล้ว</h2>
            <div className="space-y-2">
              {results.map((filename, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">{filename}</span>
                  <a
                    href={`/api/download/${filename}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center transition-colors"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    ดาวน์โหลด
                  </a>
                </div>
              ))}
            </div>
          </div>        )}

        {/* Desktop Ad */}
        <div className="my-6 hidden md:block">
          <DesktopAd />
        </div>

        {/* InContent Ad */}
        <div className="my-6">
          <InContentAd />
        </div>
      </div>
    </div>
  )
}

export default SplitPage
