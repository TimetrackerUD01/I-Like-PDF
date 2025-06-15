'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

export default function HelpPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.helpTitle}
          </h1>
          <p className="text-xl opacity-90 mb-8">
            {t.helpContent}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about I Love PDF
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Is I Love PDF really free to use?
              </h3>
              <p className="text-gray-600">
                Yes! All our PDF tools are completely free to use. There are no hidden charges, 
                subscription fees, or limitations on the number of files you can process.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Are my files safe and secure?
              </h3>
              <p className="text-gray-600">
                Absolutely. We take your privacy seriously. All uploaded files are automatically 
                deleted from our servers after processing. We use SSL encryption to protect your 
                data during transfer.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What file formats do you support?
              </h3>
              <p className="text-gray-600">
                We support PDF files as input and can convert to various formats including Word (.docx), 
                Excel (.xlsx), PowerPoint (.pptx), Images (PNG, JPG), and Text (.txt) files.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What&apos;s the maximum file size I can upload?
              </h3>
              <p className="text-gray-600">
                The maximum file size for each upload is 10MB. This limit ensures fast processing 
                and optimal performance for all users.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How long does processing take?
              </h3>
              <p className="text-gray-600">
                Processing time depends on file size and complexity. Most files are processed within 
                seconds to a few minutes. Larger files may take slightly longer.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do I need to create an account?
              </h3>
              <p className="text-gray-600">
                No account registration is required. You can use all our tools immediately without 
                signing up or providing any personal information.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I use I Love PDF on mobile devices?
              </h3>
              <p className="text-gray-600">
                Yes! Our website is fully responsive and works on all devices including smartphones, 
                tablets, and desktop computers. No app download required.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What languages do you support?
              </h3>
              <p className="text-gray-600">
                I Love PDF supports multiple languages including English, Thai, Chinese, Japanese, 
                Korean, Spanish, French, and German. Use the language selector in the header to switch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available Tools
            </h2>
            <p className="text-xl text-gray-600">
              All the PDF tools you need in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/convert" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Convert PDF</h3>
              <p className="text-gray-600 text-sm">Convert PDF to Word, Excel, PowerPoint, and more</p>
            </Link>

            <Link href="/compress" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Compress PDF</h3>
              <p className="text-gray-600 text-sm">Reduce PDF file size while maintaining quality</p>
            </Link>

            <Link href="/merge" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H5.5z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Merge PDF</h3>
              <p className="text-gray-600 text-sm">Combine multiple PDF files into one document</p>
            </Link>

            <Link href="/split" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Split PDF</h3>
              <p className="text-gray-600 text-sm">Split PDF into separate pages or page ranges</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need More Help?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Can&apos;t find what you&apos;re looking for? Contact our support team
          </p>
          <div className="bg-blue-50 rounded-lg p-8">
            <p className="text-gray-600 mb-4">
              For additional support, feature requests, or bug reports, please contact us:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:support@ilovepdf.com"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Email Support
              </a>
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50 transition"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
