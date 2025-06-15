'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { HeaderAd, InContentAd, BetweenContentAd, MobileAd, DesktopAd } from '@/components/GoogleAdSense'

export default function PrivacyPage() {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Ad */}
      <div className="bg-white py-2">
        <HeaderAd />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8">          <h1 className="text-3xl font-bold text-gray-900 mb-8">{t.privacyTitle}</h1>
          
          {/* Mobile Ad */}
          <div className="mb-6">
            <MobileAd />
          </div>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <p>We collect minimal information to provide our services. This includes:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Files you upload for processing</li>
                <li>Basic usage analytics (anonymized)</li>
                <li>Technical information about your browser and device</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p>Your information is used solely to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Process your PDF files as requested</li>
                <li>Improve our services and user experience</li>
                <li>Ensure security and prevent abuse</li>              </ul>
            </section>

            {/* BetweenContent Ad */}
            <div className="my-6">
              <BetweenContentAd />
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">File Security</h2>
              <p>
                All uploaded files are processed securely and are automatically deleted from our servers 
                within 1 hour of upload. We use industry-standard encryption to protect your files during 
                processing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties. 
                Your files and data remain private and are never shared with anyone.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies</h2>
              <p>
                We use essential cookies to remember your language preference and ensure proper 
                functionality of our website. No tracking cookies are used.
              </p>            </section>

            {/* Desktop Ad */}
            <div className="my-6 hidden md:block">
              <DesktopAd />
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this privacy policy, please contact us through our 
                support channels. We are committed to protecting your privacy and will respond to 
                your inquiries promptly.
              </p>
            </section>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Last updated:</strong> December 2024. We may update this privacy policy from 
              time to time. Any changes will be posted on this page.
            </p>          </div>
        </div>

        {/* InContent Ad */}
        <div className="mt-8">
          <InContentAd />
        </div>
      </div>
    </div>
  )
}
