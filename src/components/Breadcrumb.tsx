'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'

interface BreadcrumbItem {
  label: string
  href: string
  current?: boolean
}

export default function Breadcrumb() {
  const pathname = usePathname()
  const { t, language } = useLanguage()
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const segments = pathname.split('/').filter(segment => segment !== '')
    const breadcrumbs: BreadcrumbItem[] = [
      { label: t.home, href: language === 'en' ? '/' : `/${language}` }
    ]
    
    let currentPath = language === 'en' ? '' : `/${language}`
    
    segments.forEach((segment, index) => {
      // Skip language segment for non-English languages
      if (language !== 'en' && index === 0 && segment === language) {
        return
      }
      
      currentPath += `/${segment}`
      const isLast = index === segments.length - 1
      
      let label = segment
      switch (segment) {
        case 'convert':
          label = t.convertPdf
          break
        case 'compress':
          label = t.compressPdf
          break
        case 'merge':
          label = t.mergePdf
          break
        case 'split':
          label = t.splitPdf
          break
        case 'help':
          label = t.help
          break
        case 'privacy':
          label = 'Privacy Policy'
          break
        case 'terms':
          label = 'Terms of Service'
          break
        default:
          label = segment.charAt(0).toUpperCase() + segment.slice(1)
      }
      
      breadcrumbs.push({
        label,
        href: currentPath,
        current: isLast
      })
    })
    
    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()
  
  // Don't show breadcrumbs on home page
  if (breadcrumbs.length <= 1) {
    return null
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://i-like-pdf.onrender.com${item.href}`
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <nav 
        className="flex items-center space-x-2 text-sm text-gray-600 py-3 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center space-x-2 max-w-7xl mx-auto w-full">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <svg
                  className="flex-shrink-0 h-4 w-4 text-gray-400 mx-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              
              {item.current ? (
                <span 
                  className="text-gray-900 font-medium"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
