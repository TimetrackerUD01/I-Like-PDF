'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function TermsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">{t.termsTitle}</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p>
                By using I Love PDF, you agree to be bound by these terms of service. If you do not 
                agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Description</h2>
              <p>
                I Love PDF provides free online tools for PDF file manipulation including conversion, 
                compression, merging, and splitting. Our services are provided "as is" without any 
                warranties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Use our services only for lawful purposes</li>
                <li>Not upload copyrighted material without permission</li>
                <li>Not attempt to abuse or exploit our systems</li>
                <li>Respect the file size limits and usage guidelines</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">File Limitations</h2>
              <p>
                Files must be under 10MB in size and in supported formats. We reserve the right to 
                refuse processing of any file that violates our terms or poses security risks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
              <p>
                You retain all rights to your uploaded files. We do not claim ownership of any 
                content you process through our services. Our website design and functionality 
                are protected by copyright.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p>
                I Love PDF shall not be liable for any direct, indirect, incidental, or consequential 
                damages arising from the use of our services. Use our tools at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Availability</h2>
              <p>
                While we strive for 100% uptime, we cannot guarantee uninterrupted service. 
                Maintenance and technical issues may occasionally affect availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of our 
                services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
              <p>
                These terms shall be governed by and interpreted in accordance with applicable 
                international laws for online services.
              </p>
            </section>
          </div>

          <div className="mt-8 p-4 bg-red-50 rounded-lg">
            <p className="text-sm text-red-800">
              <strong>Last updated:</strong> December 2024. Please review these terms regularly 
              as they may be updated to reflect changes in our services or legal requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
