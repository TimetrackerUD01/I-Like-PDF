import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/uploads/',
          '/_next/',
          '/admin/',
          '/*.pdf$',
          '/*.docx$',
          '/*.xlsx$',
          '/*.pptx$'
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/uploads/',
          '/admin/'
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/uploads/',
          '/admin/'
        ],
        crawlDelay: 2,
      }
    ],
    sitemap: 'https://i-like-pdf.onrender.com/sitemap.xml',
  }
}
