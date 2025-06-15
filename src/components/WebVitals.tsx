'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: any
  }
}

export default function WebVitals() {
  useEffect(() => {
    // Track Core Web Vitals
    const reportWebVitals = (metric: any) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          custom_parameter_1: metric.value,
          custom_parameter_2: metric.id,
          custom_parameter_3: metric.name,
        })
      }
    }

    // Largest Contentful Paint (LCP)
    const observeLCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const lcp = entry as any
            reportWebVitals({
              name: 'LCP',
              value: lcp.startTime,
              id: 'lcp-' + Date.now()
            })
          }
        })
        
        try {
          observer.observe({ type: 'largest-contentful-paint', buffered: true })
        } catch (e) {
          // LCP not supported
        }
      }
    }

    // First Input Delay (FID)
    const observeFID = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const fid = entry as any
            reportWebVitals({
              name: 'FID',
              value: fid.processingStart - fid.startTime,
              id: 'fid-' + Date.now()
            })
          }
        })
        
        try {
          observer.observe({ type: 'first-input', buffered: true })
        } catch (e) {
          // FID not supported
        }
      }
    }

    // Cumulative Layout Shift (CLS)
    const observeCLS = () => {
      if ('PerformanceObserver' in window) {
        let clsValue = 0
        let clsEntries: any[] = []
        
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              const firstSessionEntry = clsEntries[0]
              const lastSessionEntry = clsEntries[clsEntries.length - 1]
              
              if (!firstSessionEntry || 
                  (entry.startTime - lastSessionEntry.startTime < 1000 &&
                   entry.startTime - firstSessionEntry.startTime < 5000)) {
                clsEntries.push(entry)
                clsValue += (entry as any).value
              } else {
                clsEntries = [entry]
                clsValue = (entry as any).value
              }
            }
          }
          
          reportWebVitals({
            name: 'CLS',
            value: clsValue,
            id: 'cls-' + Date.now()
          })
        })
        
        try {
          observer.observe({ type: 'layout-shift', buffered: true })
        } catch (e) {
          // CLS not supported
        }
      }
    }

    // Time to First Byte (TTFB)
    const observeTTFB = () => {
      if ('performance' in window && 'getEntriesByType' in performance) {
        const [navigationEntry] = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[]
        if (navigationEntry) {
          const ttfb = navigationEntry.responseStart - navigationEntry.requestStart
          reportWebVitals({
            name: 'TTFB',
            value: ttfb,
            id: 'ttfb-' + Date.now()
          })
        }
      }
    }

    // Initialize observers
    observeLCP()
    observeFID() 
    observeCLS()
    observeTTFB()

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalUrls = [
        '/api/process',
        '/convert',
        '/compress',
        '/merge',
        '/split'
      ]
      
      criticalUrls.forEach(url => {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = url
        document.head.appendChild(link)
      })
    }

    // Lazy load non-critical resources
    const lazyLoadResources = () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          preloadCriticalResources()
        })
      } else {
        setTimeout(preloadCriticalResources, 100)
      }
    }

    lazyLoadResources()

  }, [])

  return null
}
