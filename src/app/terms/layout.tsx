import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://i-like-pdf.onrender.com'),
  title: 'Terms of Service - I Like PDF ❤️ | Terms & Conditions',
  description: 'Read our terms of service and conditions for using I Like PDF free online PDF tools. Understand your rights and responsibilities.',
  keywords: [
    'terms of service', 'terms and conditions', 'user agreement', 'service terms',
    'legal terms', 'usage policy', 'pdf tools terms', 'service agreement'
  ].join(', '),
  authors: [{ name: 'I Like PDF' }],
  creator: 'I Like PDF Team',
  publisher: 'I Like PDF',
  openGraph: {
    title: 'Terms of Service - I Like PDF ❤️',
    description: 'Read our terms of service and conditions for using I Like PDF free online PDF tools.',
    url: 'https://i-like-pdf.onrender.com/terms',
    siteName: 'I Like PDF ❤️',
    images: [
      {
        url: '/og-terms.jpg',
        width: 1200,
        height: 630,
        alt: 'Terms of Service - I Like PDF',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service - I Like PDF ❤️',
    description: 'Read our terms of service and conditions for using I Like PDF free online PDF tools.',
    images: ['/og-terms.jpg'],
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
    canonical: 'https://i-like-pdf.onrender.com/terms',
    languages: {
      'en': 'https://i-like-pdf.onrender.com/terms',
      'th': 'https://i-like-pdf.onrender.com/th/terms',
      'zh': 'https://i-like-pdf.onrender.com/zh/terms',
      'ja': 'https://i-like-pdf.onrender.com/ja/terms',
      'ko': 'https://i-like-pdf.onrender.com/ko/terms',
      'es': 'https://i-like-pdf.onrender.com/es/terms',
      'fr': 'https://i-like-pdf.onrender.com/fr/terms',
      'de': 'https://i-like-pdf.onrender.com/de/terms',
    },
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
