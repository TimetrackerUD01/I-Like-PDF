'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { languages } from '@/lib/i18n'

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.nativeName}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
            <div className="py-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code)
                    setIsOpen(false)
                  }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-red-50 hover:text-red-600 transition-colors duration-200 flex items-center space-x-3 ${
                    language === lang.code ? 'bg-red-50 text-red-600' : 'text-gray-700'
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <div>
                    <div className="font-medium">{lang.nativeName}</div>
                    <div className="text-xs text-gray-500">{lang.name}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
