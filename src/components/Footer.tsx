'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 14H4V5h12v12z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">I Love PDF</h3>
                <p className="text-gray-300 text-sm">Free Online PDF Tools</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              The complete solution for all your PDF needs. Convert, compress, merge, and split PDF files 
              quickly and securely. 100% free to use with no registration required.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition">{t.home}</Link></li>
              <li><Link href="/convert" className="text-gray-300 hover:text-white transition">{t.convertPdf}</Link></li>
              <li><Link href="/compress" className="text-gray-300 hover:text-white transition">{t.compressPdf}</Link></li>
              <li><Link href="/merge" className="text-gray-300 hover:text-white transition">{t.mergePdf}</Link></li>
              <li><Link href="/help" className="text-gray-300 hover:text-white transition">{t.help}</Link></li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.pdfTools}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>🔄 PDF Converter</li>
              <li>🗜️ PDF Compressor</li>
              <li>📄 PDF Merger</li>
              <li>✂️ PDF Splitter</li>
              <li>📷 PDF to Images</li>
              <li>🔒 Password Protect</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 I Love PDF. {t.allRightsReserved} | <Link href="/privacy" className="hover:text-white">{t.privacyPolicy}</Link> | <Link href="/terms" className="hover:text-white">{t.termsOfService}</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}