import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'I Love PDF - Free Online PDF Tools & File Converter',
  description: 'Free online PDF tools to convert, compress, merge, split PDF files. I Love PDF - Your go-to solution for all PDF needs.',
  keywords: 'PDF converter, PDF tools, convert PDF, compress PDF, merge PDF, I Love PDF, free PDF tools',
  authors: [{ name: 'I Love PDF Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'I Love PDF - Free Online PDF Tools',
    description: 'Free online PDF tools to convert, compress, merge, split PDF files',
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com', // คุณสามารถเปลี่ยน URL นี้ได้
    siteName: 'I Love PDF',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'I Love PDF - Free Online PDF Tools'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'I Love PDF - Free Online PDF Tools',
    description: 'Free online PDF tools to convert, compress, merge, split PDF files',
    images: ['/og-image.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  return (    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-adsense-account" content="ca-pub-1797172064583364" />
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1797172064583364"
          crossOrigin="anonymous"
        ></script>
      </head>      <body className={`${inter.className} antialiased bg-gray-50`}>
        <LanguageProvider>
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
