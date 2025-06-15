import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { seoMetadata } from '@/lib/seo'

interface Props {
  params: Promise<{ lang: string }>
}

const supportedLanguages = ['th', 'zh', 'ja', 'ko', 'es', 'fr', 'de']

export async function generateStaticParams() {
  return supportedLanguages.map((lang) => ({
    lang: lang,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  
  if (!supportedLanguages.includes(lang)) {
    return {}
  }

  const seo = seoMetadata[lang]?.home || seoMetadata.en.home
  
  return {
    metadataBase: new URL('https://i-like-pdf.onrender.com'),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords.join(', '),
    authors: [{ name: 'I Like PDF' }],
    creator: 'I Like PDF Team',
    publisher: 'I Like PDF',
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `https://i-like-pdf.onrender.com/${lang}`,
      siteName: 'I Like PDF ❤️',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'I Like PDF - Free Online PDF Tools',
        },
      ],
      locale: getLocale(lang),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: ['/og-image.jpg'],
      creator: '@ilikepdf',
      site: '@ilikepdf',
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://i-like-pdf.onrender.com/${lang}`,
      languages: {
        'en': 'https://i-like-pdf.onrender.com',
        'th': 'https://i-like-pdf.onrender.com/th',
        'zh': 'https://i-like-pdf.onrender.com/zh',
        'ja': 'https://i-like-pdf.onrender.com/ja',
        'ko': 'https://i-like-pdf.onrender.com/ko',
        'es': 'https://i-like-pdf.onrender.com/es',
        'fr': 'https://i-like-pdf.onrender.com/fr',
        'de': 'https://i-like-pdf.onrender.com/de',
      },
    },
  }
}

function getLocale(lang: string): string {
  const localeMap: Record<string, string> = {
    'th': 'th_TH',
    'zh': 'zh_CN',
    'ja': 'ja_JP',
    'ko': 'ko_KR',
    'es': 'es_ES',
    'fr': 'fr_FR',
    'de': 'de_DE',
  }
  return localeMap[lang] || 'en_US'
}

export default async function LanguagePage({ params }: Props) {
  const { lang } = await params
  
  if (!supportedLanguages.includes(lang)) {
    notFound()
  }

  return (
    <div className="bg-gray-50">
      {/* This will be handled by the LanguageContext */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          I Like PDF ❤️ - {getLanguageName(lang)}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Free online PDF tools in your language
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a href={`/${lang}/convert`} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Convert PDF</h3>
            <p className="text-gray-600">Convert to Word, Excel, PowerPoint</p>
          </a>
          <a href={`/${lang}/compress`} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Compress PDF</h3>
            <p className="text-gray-600">Reduce file size</p>
          </a>
          <a href={`/${lang}/merge`} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Merge PDF</h3>
            <p className="text-gray-600">Combine multiple files</p>
          </a>
          <a href={`/${lang}/split`} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Split PDF</h3>
            <p className="text-gray-600">Extract pages</p>
          </a>
        </div>
      </div>
    </div>
  )
}

function getLanguageName(lang: string): string {
  const names: Record<string, string> = {
    'th': 'ไทย',
    'zh': '中文',
    'ja': '日本語',
    'ko': '한국어',
    'es': 'Español',
    'fr': 'Français',
    'de': 'Deutsch',
  }
  return names[lang] || lang
}
