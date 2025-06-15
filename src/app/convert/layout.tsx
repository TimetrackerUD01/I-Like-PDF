import { Metadata } from 'next'
import { seoMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  const seo = seoMetadata.en.convert
  
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
      url: 'https://i-like-pdf.onrender.com/convert',
      siteName: 'I Like PDF ❤️',
      images: [
        {
          url: '/og-convert.jpg',
          width: 1200,
          height: 630,
          alt: 'Convert PDF Files Online - I Like PDF',
        },
      ],
      locale: 'en_US',
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
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: 'https://i-like-pdf.onrender.com/convert',
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

export default function ConvertLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PDF Converter - I Like PDF",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "url": "https://i-like-pdf.onrender.com/convert",
    "description": "Convert PDF files to Word (DOCX), Excel (XLSX), PowerPoint (PPTX), and images online for free. Fast, secure, and no registration required.",
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
      "PDF to Word (DOCX) conversion",
      "PDF to Excel (XLSX) conversion", 
      "PDF to PowerPoint (PPTX) conversion",
      "PDF to image conversion",
      "Batch PDF conversion",
      "High-quality conversion"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "12456"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      {children}
    </>
  )
}
