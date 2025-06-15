import Hero from '@/components/Hero'
import FeatureSection from '@/components/FeatureSection'
import UploadSection from '@/components/UploadSection'
import { HeaderAd, InContentAd, FooterAd } from '@/components/GoogleAdSense'

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <HeaderAd />
      <FeatureSection />
      <InContentAd />
      <UploadSection />
      <FooterAd />
    </div>
  )
}
