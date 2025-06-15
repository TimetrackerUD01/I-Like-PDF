import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://i-like-pdf.onrender.com'),
  title: 'Privacy Policy - I Like PDF ❤️ | Your Data Security & Privacy',
  description: 'Read our privacy policy to understand how I Like PDF protects your data and ensures your privacy when using our free PDF tools online.',
  keywords: [
    'privacy policy', 'data protection', 'file security', 'pdf privacy',
    'data safety', 'privacy statement', 'security policy', 'user privacy'
  ].join(', '),
  authors: [{ name: 'I Like PDF' }],
  creator: 'I Like PDF Team',
  publisher: 'I Like PDF',
  openGraph: {
    title: 'Privacy Policy - I Like PDF ❤️',
    description: 'Read our privacy policy to understand how I Like PDF protects your data and ensures your privacy.',
    url: 'https://i-like-pdf.onrender.com/privacy',
    siteName: 'I Like PDF ❤️',
    images: [
      {
        url: '/og-privacy.jpg',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy - I Like PDF',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - I Like PDF ❤️',
    description: 'Read our privacy policy to understand how I Like PDF protects your data and ensures your privacy.',
    images: ['/og-privacy.jpg'],
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
    canonical: 'https://i-like-pdf.onrender.com/privacy',
    languages: {
      'en': 'https://i-like-pdf.onrender.com/privacy',
      'th': 'https://i-like-pdf.onrender.com/th/privacy',
      'zh': 'https://i-like-pdf.onrender.com/zh/privacy',
      'ja': 'https://i-like-pdf.onrender.com/ja/privacy',
      'ko': 'https://i-like-pdf.onrender.com/ko/privacy',
      'es': 'https://i-like-pdf.onrender.com/es/privacy',
      'fr': 'https://i-like-pdf.onrender.com/fr/privacy',
      'de': 'https://i-like-pdf.onrender.com/de/privacy',
    },
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
