import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://i-like-pdf.onrender.com'),
  title: 'Help & FAQ - I Like PDF ❤️ | How to Use PDF Tools Online',
  description: 'Get help with I Like PDF tools. Learn how to convert, compress, merge, and split PDF files online. Frequently asked questions and tutorials.',
  keywords: [
    'pdf help', 'pdf tutorial', 'how to convert pdf', 'pdf faq',
    'pdf tools guide', 'convert pdf help', 'compress pdf guide',
    'merge pdf tutorial', 'split pdf help', 'pdf converter guide'
  ].join(', '),
  authors: [{ name: 'I Like PDF' }],
  creator: 'I Like PDF Team',
  publisher: 'I Like PDF',
  openGraph: {
    title: 'Help & FAQ - I Like PDF ❤️',
    description: 'Get help with I Like PDF tools. Learn how to convert, compress, merge, and split PDF files online.',
    url: 'https://i-like-pdf.onrender.com/help',
    siteName: 'I Like PDF ❤️',
    images: [
      {
        url: '/og-help.jpg',
        width: 1200,
        height: 630,
        alt: 'Help & FAQ - I Like PDF',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Help & FAQ - I Like PDF ❤️',
    description: 'Get help with I Like PDF tools. Learn how to convert, compress, merge, and split PDF files online.',
    images: ['/og-help.jpg'],
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
    canonical: 'https://i-like-pdf.onrender.com/help',
    languages: {
      'en': 'https://i-like-pdf.onrender.com/help',
      'th': 'https://i-like-pdf.onrender.com/th/help',
      'zh': 'https://i-like-pdf.onrender.com/zh/help',
      'ja': 'https://i-like-pdf.onrender.com/ja/help',
      'ko': 'https://i-like-pdf.onrender.com/ko/help',
      'es': 'https://i-like-pdf.onrender.com/es/help',
      'fr': 'https://i-like-pdf.onrender.com/fr/help',
      'de': 'https://i-like-pdf.onrender.com/de/help',
    },
  },
}

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const faqSchemaMarkup = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I convert PDF to Word?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply upload your PDF file, select Word format, and click convert. Your file will be processed and ready for download in seconds."
        }
      },
      {
        "@type": "Question", 
        "name": "Is it safe to upload my files?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all files are processed securely and automatically deleted from our servers after processing to protect your privacy."
        }
      },
      {
        "@type": "Question",
        "name": "What file formats are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support conversion to Word (DOCX), Excel (XLSX), PowerPoint (PPTX), and various image formats (PNG, JPG)."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a file size limit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The maximum file size is 10MB per file to ensure fast processing and optimal performance."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to register an account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No registration required! All tools are completely free to use without creating an account."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaMarkup) }}
      />
      {children}
    </>
  )
}
