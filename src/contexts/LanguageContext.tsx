'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { getTranslation, getBrowserLanguage, type Translations } from '@/lib/i18n'

interface LanguageContextType {
  language: string
  setLanguage: (lang: string) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get language from localStorage or browser
    const savedLang = localStorage.getItem('i-love-pdf-language')
    const initialLang = savedLang || getBrowserLanguage()
    setLanguageState(initialLang)
    setMounted(true)
  }, [])

  const setLanguage = (lang: string) => {
    setLanguageState(lang)
    localStorage.setItem('i-love-pdf-language', lang)
  }

  const t = getTranslation(language)

  if (!mounted) {
    return <div className="min-h-screen bg-gray-50"></div>
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
