import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WebVitals from '@/components/WebVitals'
import { LanguageProvider } from '@/contexts/LanguageContext'
import Script from 'next/script'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://i-like-pdf.onrender.com'),
  title: {
    default: 'I Like PDF ❤️ - Free Online PDF Converter & Tools',
    template: '%s | I Like PDF ❤️'
  },
  description: 'Free online PDF tools to convert, compress, merge, split PDF files. I Like PDF ❤️ - Your go-to solution for all PDF needs with 100% security.',
  keywords: [
    'PDF converter online free', 'convert PDF to Word', 'PDF compressor', 'merge PDF files',
    'split PDF pages', 'PDF to Excel', 'PDF to PowerPoint', 'free PDF tools online',
    'I Like PDF', 'PDF editor online', 'compress PDF without losing quality'
  ].join(', '),
  authors: [{ name: 'I Like PDF Team' }],
  creator: 'I Like PDF',
  publisher: 'I Like PDF',
  applicationName: 'I Like PDF',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' }
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'I Like PDF ❤️ - Free Online PDF Converter & Tools',
    description: 'Free online PDF tools to convert, compress, merge, split PDF files. 100% secure, no registration required.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['th_TH', 'zh_CN', 'ja_JP', 'ko_KR', 'es_ES', 'fr_FR', 'de_DE'],
    url: 'https://i-like-pdf.onrender.com',
    siteName: 'I Like PDF ❤️',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'I Like PDF ❤️ - Free Online PDF Tools',
        type: 'image/png',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ilikepdf',
    creator: '@ilikepdf',
    title: 'I Like PDF ❤️ - Free Online PDF Converter & Tools',
    description: 'Free online PDF tools to convert, compress, merge, split PDF files. 100% secure, no registration required.',    images: ['/og-image.png']
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
  },  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",  
    "name": "I Like PDF",
    "url": "https://i-like-pdf.onrender.com",
    "logo": "https://i-like-pdf.onrender.com/icon-512.png",
    "description": "Free online PDF tools to convert, compress, merge, split PDF files",
    "foundingDate": "2025",
    "sameAs": [
      "https://twitter.com/ilikepdf",
      "https://facebook.com/ilikepdf"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "availableLanguage": ["English", "Thai", "Chinese", "Japanese", "Korean", "Spanish", "French", "German"]
    }
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google AdSense */}
        <meta name="google-adsense-account" content="ca-pub-1797172064583364" />
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1797172064583364"
          crossOrigin="anonymous"
        ></script>
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        
        {/* Resource hints for better performance */}
        <link rel="prefetch" href="/convert" />
        <link rel="prefetch" href="/compress" />
        <link rel="prefetch" href="/merge" />
        <link rel="prefetch" href="/split" />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50`}>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>        <LanguageProvider>
          <WebVitals />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
