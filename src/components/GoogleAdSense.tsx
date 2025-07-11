'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

interface GoogleAdSenseProps {
  adSlot: string
  adFormat?: string
  fullWidth?: boolean
  style?: React.CSSProperties
  className?: string
}

export default function GoogleAdSense({ 
  adSlot, 
  adFormat = 'auto', 
  fullWidth = false,
  style,
  className = ''
}: GoogleAdSenseProps) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [])

  return (
    <div className={`adsense-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ 
          display: 'block',
          textAlign: 'center',
          ...style
        }}
        data-ad-client="ca-pub-1797172064583364"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidth.toString()}
      />
    </div>
  )
}

// Different ad components for different placements
export function HeaderAd() {
  return (
    <GoogleAdSense
      adSlot="1234567890" // Replace with actual ad slot
      adFormat="horizontal"
      fullWidth={true}
      className="w-full max-w-6xl mx-auto my-4"
      style={{ minHeight: '90px' }}
    />
  )
}

export function SidebarAd() {
  return (
    <GoogleAdSense
      adSlot="0987654321" // Replace with actual ad slot
      adFormat="rectangle"
      className="w-full max-w-xs mx-auto my-4"
      style={{ minHeight: '250px' }}
    />
  )
}

export function FooterAd() {
  return (
    <GoogleAdSense
      adSlot="1122334455" // Replace with actual ad slot
      adFormat="horizontal"
      fullWidth={true}
      className="w-full max-w-6xl mx-auto my-4"
      style={{ minHeight: '90px' }}
    />
  )
}

export function InContentAd() {
  return (
    <GoogleAdSense
      adSlot="5566778899" // Replace with actual ad slot
      adFormat="fluid"
      fullWidth={true}
      className="w-full max-w-4xl mx-auto my-6"
      style={{ minHeight: '200px' }}
    />
  )
}

export function MobileAd() {
  return (
    <div className="block md:hidden">
      <GoogleAdSense
        adSlot="6677889900" // Replace with actual ad slot
        adFormat="banner"
        fullWidth={true}
        className="w-full max-w-sm mx-auto my-4"
        style={{ minHeight: '100px' }}
      />
    </div>
  )
}

export function DesktopAd() {
  return (
    <div className="hidden md:block">
      <GoogleAdSense
        adSlot="7788990011" // Replace with actual ad slot
        adFormat="leaderboard"
        fullWidth={true}
        className="w-full max-w-5xl mx-auto my-4"
        style={{ minHeight: '120px' }}
      />
    </div>
  )
}

export function SquareAd() {
  return (
    <GoogleAdSense
      adSlot="8899001122" // Replace with actual ad slot
      adFormat="rectangle"
      className="w-full max-w-xs mx-auto my-4"
      style={{ width: '300px', height: '250px' }}
    />
  )
}

export function BetweenContentAd() {
  return (
    <div className="my-8 py-4 border-t border-b border-gray-200">
      <div className="text-center text-xs text-gray-400 mb-2">Advertisement</div>
      <GoogleAdSense
        adSlot="9900112233" // Replace with actual ad slot
        adFormat="fluid"
        fullWidth={true}
        className="w-full max-w-3xl mx-auto"
        style={{ minHeight: '150px' }}
      />
    </div>
  )
}
