'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

interface GoogleAdProps {
  slot: string
  className?: string
  format?: 'auto' | 'rectangle' | 'vertical' | 'horizontal'
}

export function GoogleAd({ slot, className = '', format = 'auto' }: GoogleAdProps) {
  const adRef = useRef<HTMLModElement>(null)
  const isLoaded = useRef(false)

  useEffect(() => {
    // Skip ads in development mode to avoid TagError
    if (process.env.NODE_ENV === 'development') {
      return
    }

    if (isLoaded.current) return
    
    const timer = setTimeout(() => {
      try {
        if (typeof window !== 'undefined' && window.adsbygoogle && adRef.current) {
          if (!adRef.current.hasAttribute('data-adsbygoogle-status')) {
            window.adsbygoogle.push({})
            isLoaded.current = true
          }
        }
      } catch (error) {
        console.warn('AdSense initialization skipped')
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [slot])

  // Show placeholder in development
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className={`w-full flex justify-center my-4 ${className}`}>
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-500 w-full max-w-lg">
          <div className="text-sm">
            📢 Google Ad Placeholder<br />
            <span className="text-xs">Slot: {slot}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`w-full flex justify-center my-4 ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1797172064583364"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}

// Bottom Ad Component for consistent placement
export function BottomAd() {
  return (
    <div className="w-full bg-gray-100 py-8 mt-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-4">
          <span className="text-sm text-gray-500">Advertisement</span>
        </div>
        <GoogleAd 
          slot="1234567890"
          className="min-h-[250px]"
          format="auto"
        />
      </div>
    </div>
  )
}

// Side Ad Component
export function SideAd() {
  return (
    <div className="hidden lg:block">
      <div className="text-center mb-2">
        <span className="text-xs text-gray-500">Advertisement</span>
      </div>
      <GoogleAd 
        slot="0987654321"
        className="min-h-[600px] w-[300px]"
        format="vertical"
      />
    </div>
  )
}

// Inline Ad Component
export function InlineAd() {
  return (
    <div className="w-full my-8">
      <div className="text-center mb-2">
        <span className="text-xs text-gray-500">Advertisement</span>
      </div>
      <GoogleAd 
        slot="1122334455"
        className="min-h-[200px]"
        format="horizontal"
      />
    </div>
  )
}
