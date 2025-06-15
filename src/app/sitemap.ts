import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://i-like-pdf.onrender.com'
  const languages = ['en', 'th', 'zh', 'ja', 'ko', 'es', 'fr', 'de']
  const pages = ['', 'convert', 'compress', 'merge', 'split', 'help', 'privacy', 'terms']
  
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  // Add main pages for each language
  for (const lang of languages) {
    for (const page of pages) {
      const url = lang === 'en' 
        ? `${baseUrl}${page ? `/${page}` : ''}`
        : `${baseUrl}/${lang}${page ? `/${page}` : ''}`
      
      sitemapEntries.push({
        url,
        lastModified: new Date('2025-06-15'),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : page === 'convert' || page === 'compress' ? 0.9 : 0.8,
      })
    }
  }

  return sitemapEntries
}
