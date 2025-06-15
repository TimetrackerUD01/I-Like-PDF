'use client'

import { useState, useEffect } from 'react'

interface AdBannerProps {
  position: 'top' | 'bottom' | 'sidebar'
}

export default function AdBanner({ position }: AdBannerProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [currentAd, setCurrentAd] = useState(0)

  const ads = [
    {
      title: "บริการดิจิทัล อบต.ข่าใหญ่",
      description: "ติดตามข่าวสารและบริการต่างๆ ของ อบต.ข่าใหญ่",
      image: "https://via.placeholder.com/400x100/0F4C81/FFFFFF?text=Digital+Services",
      link: "#services"
    },
    {
      title: "ข้อมูลข่าวสาร",
      description: "อัปเดตข้อมูลข่าวสารและประกาศสำคัญ",
      image: "https://via.placeholder.com/400x100/FFD700/000000?text=News+Updates",
      link: "#news"
    },
    {
      title: "ติดต่อ อบต.ข่าใหญ่",
      description: "ช่องทางการติดต่อและสอบถามข้อมูล",
      image: "https://via.placeholder.com/400x100/FF0000/FFFFFF?text=Contact+Us",
      link: "#contact"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length)
    }, 5000) // เปลี่ยนโฆษณาทุก 5 วินาที

    return () => clearInterval(interval)
  }, [ads.length])

  if (!isVisible) return null

  const getAdStyles = () => {
    switch (position) {
      case 'top':
        return 'w-full max-w-4xl mx-auto mb-8'
      case 'bottom':
        return 'w-full max-w-4xl mx-auto mt-8'
      case 'sidebar':
        return 'w-full max-w-xs'
      default:
        return 'w-full max-w-4xl mx-auto'
    }
  }

  const currentAdData = ads[currentAd]

  return (
    <div className={`${getAdStyles()} px-4`}>
      <div className="relative bg-gradient-to-r from-blue-50 to-yellow-50 rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 z-10 w-6 h-6 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 shadow-sm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
          </svg>
        </button>

        <a 
          href={currentAdData.link}
          className="block p-4 hover:bg-gradient-to-r hover:from-blue-100 hover:to-yellow-100 transition-colors"
        >
          <div className="flex items-center space-x-4">
            {/* Ad Image/Icon */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-r from-thai-blue to-thai-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">อ</span>
              </div>
            </div>

            {/* Ad Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 font-thai mb-1">
                {currentAdData.title}
              </h3>
              <p className="text-sm text-gray-600 font-thai line-clamp-2">
                {currentAdData.description}
              </p>
            </div>

            {/* Arrow */}
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>

        {/* Ad Indicators */}
        {ads.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {ads.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAd(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentAd ? 'bg-thai-blue' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}

        {/* Sponsored Label */}
        <div className="absolute top-2 left-2">
          <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded font-thai">
            ข้อมูลจาก อบต.
          </span>
        </div>
      </div>
    </div>
  )
}
