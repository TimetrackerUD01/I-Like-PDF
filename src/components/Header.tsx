'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSelector from './LanguageSelector'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 14H4V5h12v12z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                I Love PDF
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Free PDF Tools</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-red-600 font-medium transition">
              {t.home}
            </Link>
            <Link href="/convert" className="text-gray-700 hover:text-red-600 font-medium transition">
              {t.convertPdf}
            </Link>
            <Link href="/compress" className="text-gray-700 hover:text-red-600 font-medium transition">
              {t.compressPdf}
            </Link>
            <Link href="/merge" className="text-gray-700 hover:text-red-600 font-medium transition">
              {t.mergePdf}
            </Link>
            <Link href="/split" className="text-gray-700 hover:text-red-600 font-medium transition">
              {t.splitPdf}
            </Link>
            <Link href="/help" className="text-gray-700 hover:text-red-600 font-medium transition">
              {t.help}
            </Link>
          </nav>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-gray-200">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.home}
            </Link>
            <Link
              href="/convert"
              className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.convertPdf}
            </Link>
            <Link
              href="/compress"
              className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.compressPdf}
            </Link>
            <Link
              href="/merge"
              className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.mergePdf}
            </Link>
            <Link
              href="/split"
              className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.splitPdf}
            </Link>
            <Link
              href="/help"
              className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.help}
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}