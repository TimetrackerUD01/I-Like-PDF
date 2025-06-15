'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import UploadSection from '@/components/UploadSection'
import Breadcrumb from '@/components/Breadcrumb'
import { HeaderAd, InContentAd, BetweenContentAd, MobileAd, DesktopAd } from '@/components/GoogleAdSense'

export default function ConvertPage() {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <Breadcrumb />
      
      {/* Header Ad */}
      <div className="bg-white py-2">
        <HeaderAd />
      </div>      {/* Hero Section with SEO content */}
      <section className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.convertPdf}
          </h1>
          <p className="text-xl opacity-90 mb-6">
            Convert PDF files to Word, Excel, PowerPoint, and more formats easily and securely online for free.
          </p>
          
          {/* SEO-optimized feature list */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg opacity-95 mb-4">
              <strong>Professional PDF Conversion:</strong> Transform your PDF documents into editable formats instantly
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <h3 className="font-semibold mb-1">PDF to Word</h3>
                <p className="opacity-90">DOCX format</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <h3 className="font-semibold mb-1">PDF to Excel</h3>
                <p className="opacity-90">XLSX format</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <h3 className="font-semibold mb-1">PDF to PowerPoint</h3>
                <p className="opacity-90">PPTX format</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <h3 className="font-semibold mb-1">PDF to Images</h3>
                <p className="opacity-90">PNG, JPG format</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Ad */}
      <MobileAd />

      {/* Upload Section */}
      <div id="upload">
        <UploadSection />
      </div>

      {/* Between Content Ad */}
      <BetweenContentAd />

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Supported Conversion Formats
            </h2>
            <p className="text-xl text-gray-600">
              Convert your PDF files to multiple formats with high quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 14H4V5h12v12z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">PDF to Word</h3>
              <p className="text-gray-600">Convert PDF to editable Word documents (.docx)</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">PDF to Excel</h3>
              <p className="text-gray-600">Convert PDF to Excel spreadsheets (.xlsx)</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">PDF to PowerPoint</h3>
              <p className="text-gray-600">Convert PDF to presentation slides (.pptx)</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">PDF to Images</h3>
              <p className="text-gray-600">Convert PDF pages to PNG or JPG images</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">PDF to Text</h3>
              <p className="text-gray-600">Extract text content from PDF files (.txt)</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>              <h3 className="text-lg font-semibold text-gray-900 mb-2">High Quality</h3>
              <p className="text-gray-600">Maintain document quality during conversion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Ad */}
      <DesktopAd />

      {/* In Content Ad */}
      <div className="py-8 bg-gray-50">
        <InContentAd />
      </div>
    </div>
  )
}
