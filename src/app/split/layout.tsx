import { Metadata } from 'next'
import { seoMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  const seo = seoMetadata.en.split
  
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
      url: 'https://i-like-pdf.onrender.com/split',
      siteName: 'I Like PDF ❤️',
      images: [
        {
          url: '/og-split.jpg',
          width: 1200,
          height: 630,
          alt: 'Split PDF Files Online - I Like PDF',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: ['/og-split.jpg'],
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
      canonical: 'https://i-like-pdf.onrender.com/split',
      languages: {
        'en': 'https://i-like-pdf.onrender.com/split',
        'th': 'https://i-like-pdf.onrender.com/th/split',
        'zh': 'https://i-like-pdf.onrender.com/zh/split',
        'ja': 'https://i-like-pdf.onrender.com/ja/split',
        'ko': 'https://i-like-pdf.onrender.com/ko/split',
        'es': 'https://i-like-pdf.onrender.com/es/split',
        'fr': 'https://i-like-pdf.onrender.com/fr/split',
        'de': 'https://i-like-pdf.onrender.com/de/split',
      },
    },
  }
}

export default function SplitLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PDF Splitter - I Like PDF",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "url": "https://i-like-pdf.onrender.com/split",
    "description": "Split PDF files online for free. Extract specific pages or split PDF into multiple documents. Fast and secure PDF splitting tool.",
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
      "Split PDF into multiple files",
      "Extract specific PDF pages",
      "Separate PDF documents",
      "Custom page ranges",
      "Batch PDF splitting",
      "Preserve original quality"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "reviewCount": "7234"
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
