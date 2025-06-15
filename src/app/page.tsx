import { Metadata } from 'next'
import Hero from '@/components/Hero'
import FeatureSection from '@/components/FeatureSection'
import UploadSection from '@/components/UploadSection'
import { HeaderAd, InContentAd, FooterAd } from '@/components/GoogleAdSense'
import { seoMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  const seo = seoMetadata.en.home
  
  return {
    metadataBase: new URL('https://i-like-pdf.onrender.com'),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords.join(', '),
    authors: [{ name: 'I Like PDF' }],
    creator: 'I Like PDF Team',
    publisher: 'I Like PDF',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: 'https://i-like-pdf.onrender.com',
      siteName: 'I Like PDF ❤️',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'I Like PDF - Free Online PDF Tools',
        },
      ],
      locale: 'en_US',
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
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: 'https://i-like-pdf.onrender.com',
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

export default function Home() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "I Like PDF",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "Any",
        "url": "https://i-like-pdf.onrender.com",
        "description": "Free online PDF converter and tools. Convert PDF to Word, Excel, PowerPoint, images. Compress, merge, split PDF files.",
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
          "PDF compression",
          "PDF merging",
          "PDF splitting",
          "PDF to image conversion"
        ]
      },
      {
        "@type": "WebSite",
        "name": "I Like PDF",
        "url": "https://i-like-pdf.onrender.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://i-like-pdf.onrender.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "inLanguage": ["en", "th", "zh", "ja", "ko", "es", "fr", "de"]
      },
      {
        "@type": "Organization",
        "name": "I Like PDF",
        "url": "https://i-like-pdf.onrender.com",
        "logo": "https://i-like-pdf.onrender.com/logo.png",
        "sameAs": [
          "https://twitter.com/ilikepdf",
          "https://facebook.com/ilikepdf"
        ]
      }
    ]
  }

  return (
    <div className="bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Hero />
      <HeaderAd />
      <FeatureSection />
      <InContentAd />
      <UploadSection />
      <FooterAd />
    </div>
  )
}
