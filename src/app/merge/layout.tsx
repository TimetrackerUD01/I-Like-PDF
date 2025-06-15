import { Metadata } from 'next'
import { seoMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  const seo = seoMetadata.en.merge
  
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
      url: 'https://i-like-pdf.onrender.com/merge',
      siteName: 'I Like PDF ❤️',
      images: [
        {
          url: '/og-merge.jpg',
          width: 1200,
          height: 630,
          alt: 'Merge PDF Files Online - I Like PDF',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: ['/og-merge.jpg'],
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
      canonical: 'https://i-like-pdf.onrender.com/merge',
      languages: {
        'en': 'https://i-like-pdf.onrender.com/merge',
        'th': 'https://i-like-pdf.onrender.com/th/merge',
        'zh': 'https://i-like-pdf.onrender.com/zh/merge',
        'ja': 'https://i-like-pdf.onrender.com/ja/merge',
        'ko': 'https://i-like-pdf.onrender.com/ko/merge',
        'es': 'https://i-like-pdf.onrender.com/es/merge',
        'fr': 'https://i-like-pdf.onrender.com/fr/merge',
        'de': 'https://i-like-pdf.onrender.com/de/merge',
      },
    },
  }
}

export default function MergeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PDF Merger - I Like PDF",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "url": "https://i-like-pdf.onrender.com/merge",
    "description": "Merge multiple PDF files into one document online for free. Combine PDF files quickly and securely. No registration required.",
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
      "Merge multiple PDF files",
      "Combine PDF documents",
      "Preserve PDF quality",
      "Fast merging process",
      "No file quantity limit",
      "Secure file handling"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "9856"
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
