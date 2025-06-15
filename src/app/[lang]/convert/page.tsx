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

  const seo = seoMetadata[lang]?.convert || seoMetadata.en.convert
  
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
      url: `https://i-like-pdf.onrender.com/${lang}/convert`,
      siteName: 'I Like PDF ❤️',
      images: [
        {
          url: '/og-convert.jpg',
          width: 1200,
          height: 630,
          alt: 'Convert PDF Files Online - I Like PDF',
        },
      ],
      locale: getLocale(lang),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: ['/og-convert.jpg'],
      creator: '@ilikepdf',
      site: '@ilikepdf',
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://i-like-pdf.onrender.com/${lang}/convert`,
      languages: {
        'en': 'https://i-like-pdf.onrender.com/convert',
        'th': 'https://i-like-pdf.onrender.com/th/convert',
        'zh': 'https://i-like-pdf.onrender.com/zh/convert',
        'ja': 'https://i-like-pdf.onrender.com/ja/convert',
        'ko': 'https://i-like-pdf.onrender.com/ko/convert',
        'es': 'https://i-like-pdf.onrender.com/es/convert',
        'fr': 'https://i-like-pdf.onrender.com/fr/convert',
        'de': 'https://i-like-pdf.onrender.com/de/convert',
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

export default async function ConvertPage({ params }: Props) {
  const { lang } = await params
  
  if (!supportedLanguages.includes(lang)) {
    notFound()
  }

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": `PDF Converter - I Like PDF (${getLanguageName(lang)})`,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "url": `https://i-like-pdf.onrender.com/${lang}/convert`,
    "description": seoMetadata[lang]?.convert?.description || seoMetadata.en.convert.description,
    "inLanguage": lang,
    "softwareVersion": "1.0",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "I Like PDF Team"
    },
    "featureList": [
      "PDF to Word conversion",
      "PDF to Excel conversion", 
      "PDF to PowerPoint conversion",
      "PDF to image conversion",
      "Batch conversion",
      "High-quality output"
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Convert PDF Files Online - {getLanguageName(lang)}
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Convert PDF to Word, Excel, PowerPoint, and images in {getLanguageName(lang)}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">PDF to Word</h3>
              <p className="text-gray-600">Convert to editable DOCX format</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">PDF to Excel</h3>
              <p className="text-gray-600">Extract data to XLSX spreadsheet</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">PDF to PowerPoint</h3>
              <p className="text-gray-600">Convert to PPTX presentation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">PDF to Images</h3>
              <p className="text-gray-600">Extract as PNG or JPG images</p>
            </div>
          </div>
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
