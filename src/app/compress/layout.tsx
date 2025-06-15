import { Metadata } from 'next'
import { seoMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  const seo = seoMetadata.en.compress
  
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
      url: 'https://i-like-pdf.onrender.com/compress',
      siteName: 'I Like PDF ❤️',
      images: [
        {
          url: '/og-compress.jpg',
          width: 1200,
          height: 630,
          alt: 'Compress PDF Files Online - I Like PDF',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: ['/og-compress.jpg'],
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
      canonical: 'https://i-like-pdf.onrender.com/compress',
      languages: {
        'en': 'https://i-like-pdf.onrender.com/compress',
        'th': 'https://i-like-pdf.onrender.com/th/compress',
        'zh': 'https://i-like-pdf.onrender.com/zh/compress',
        'ja': 'https://i-like-pdf.onrender.com/ja/compress',
        'ko': 'https://i-like-pdf.onrender.com/ko/compress',
        'es': 'https://i-like-pdf.onrender.com/es/compress',
        'fr': 'https://i-like-pdf.onrender.com/fr/compress',
        'de': 'https://i-like-pdf.onrender.com/de/compress',
      },
    },
  }
}

export default function CompressLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PDF Compressor - I Like PDF",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "url": "https://i-like-pdf.onrender.com/compress",
    "description": "Compress PDF files online for free. Reduce PDF file size while maintaining quality. Fast compression, no registration required.",
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
      "Reduce PDF file size",
      "Maintain PDF quality",
      "Batch PDF compression",
      "Fast compression speed",
      "No file size limit",
      "Secure compression"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "18739"
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
