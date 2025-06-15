'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import UploadSection from '@/components/UploadSection'
import { HeaderAd, InContentAd, BetweenContentAd, MobileAd, DesktopAd } from '@/components/GoogleAdSense'

export default function CompressPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Ad */}
      <div className="bg-white py-2">
        <HeaderAd />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.compressPdf}
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Reduce PDF file size while maintaining quality for easier sharing and storage.
          </p>
        </div>
      </section>

      {/* Mobile Ad */}
      <div className="py-4">
        <MobileAd />
      </div>

      {/* Upload Section */}
      <div id="upload">
        <UploadSection />
      </div>

      {/* Between Content Ad */}
      <div className="py-6">
        <BetweenContentAd />
      </div>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Compress Your PDFs?
            </h2>
            <p className="text-xl text-gray-600">
              Smaller files, faster uploads, easier sharing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reduce File Size</h3>
              <p className="text-gray-600">Compress large PDF files by up to 90% without losing quality</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1zm7-1a1 1 0 000 2h4a1 1 0 100-2h-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Faster Uploads</h3>
              <p className="text-gray-600">Upload and share files faster with reduced file sizes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Save Storage</h3>
              <p className="text-gray-600">Free up storage space on your devices and cloud storage</p>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compression Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Low Compression</h4>
                  <p className="text-gray-600 text-sm">Maintains highest quality with minimal size reduction</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Medium Compression</h4>
                  <p className="text-gray-600 text-sm">Balanced quality and file size reduction</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">High Compression</h4>
                  <p className="text-gray-600 text-sm">Maximum size reduction for web and email</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Ad */}
      <div className="py-6 hidden md:block">
        <DesktopAd />
      </div>

      {/* In Content Ad */}
      <div className="py-8 bg-gray-50">
        <InContentAd />
      </div>
    </div>
  )
}
