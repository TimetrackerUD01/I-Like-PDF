'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative bg-gradient-to-br from-red-50 via-pink-50 to-purple-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-red-200 rounded-full blur-xl opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-200 rounded-full blur-xl opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              {t.heroTitle}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-700 mb-4 font-medium">
            {t.heroSubtitle}
          </p>
            {/* Description with SEO keywords */}
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.heroDescription}
          </p>
          
          {/* SEO-optimized features list */}
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-gray-700 text-base mb-4">
              <strong>Free PDF Tools Online:</strong> Convert PDF to Word, Excel, PowerPoint • Compress PDF files • Merge multiple PDFs • Split PDF pages • 100% secure & no registration required
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-600">
              <span className="bg-blue-50 px-3 py-1 rounded-full border border-blue-200">PDF to Word Converter</span>
              <span className="bg-green-50 px-3 py-1 rounded-full border border-green-200">PDF Compressor</span>
              <span className="bg-purple-50 px-3 py-1 rounded-full border border-purple-200">PDF Merger</span>
              <span className="bg-orange-50 px-3 py-1 rounded-full border border-orange-200">PDF Splitter</span>
              <span className="bg-pink-50 px-3 py-1 rounded-full border border-pink-200">PDF to Excel</span>
              <span className="bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">PDF to PowerPoint</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#upload"
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {t.getStarted}
            </Link>
            <Link
              href="/help"
              className="bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-300 hover:border-red-300 hover:text-red-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {t.help}
            </Link>
          </div>
          
          {/* Feature highlights */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.freeTitle}</h3>
              <p className="text-gray-600">{t.freeDesc}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.secureTitle}</h3>
              <p className="text-gray-600">{t.secureDesc}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast & Easy</h3>
              <p className="text-gray-600">Process files quickly with our optimized tools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}