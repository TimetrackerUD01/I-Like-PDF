'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function SplitPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.splitPdf}
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Split PDF files into separate pages or extract specific page ranges.
          </p>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upload PDF File to Split
            </h2>
            <p className="text-xl text-gray-600">
              Select a PDF file and choose how you want to split it
            </p>
          </div>

          {/* File Upload Area */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-dashed border-gray-300 hover:border-red-400 transition-colors">
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
              <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition">
                Choose PDF File
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Supports PDF files (Max 10MB)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Split Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Split Options
            </h2>
            <p className="text-xl text-gray-600">
              Choose how you want to split your PDF
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 14H4V5h12v12z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Split by Pages</h3>
              <p className="text-gray-600">Extract specific pages (e.g., pages 1-5, 10-15)</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Split into Pages</h3>
              <p className="text-gray-600">Split each page into separate PDF files</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 0v8h12V6H4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Split by Size</h3>
              <p className="text-gray-600">Split into smaller files of specified size</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How PDF Splitting Works
            </h2>
            <p className="text-xl text-gray-600">
              Easy steps to split your PDF files
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload</h3>
              <p className="text-gray-600">Select your PDF file</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose</h3>
              <p className="text-gray-600">Select split method</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Process</h3>
              <p className="text-gray-600">Split automatically</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Download</h3>
              <p className="text-gray-600">Get split files</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
