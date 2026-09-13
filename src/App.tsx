import { BenefitStrip } from '@/components/landing/benefit-strip';
import { BuiltByBAFCreative } from '@/components/landing/built-by-baf-creative';
import { FeaturesGrid } from '@/components/landing/features-grid';
import { FinalCTA } from '@/components/landing/final-cta';
import { Footer } from '@/components/landing/footer';
import { Hero } from '@/components/landing/hero';
import { Navbar } from '@/components/landing/navbar';
import { ScreenshotGallery } from '@/components/landing/screenshot-gallery';
import { WhyMasterSuite } from '@/components/landing/why-master-suite';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BenefitStrip />
        <FeaturesGrid />
        <ScreenshotGallery />
        <WhyMasterSuite />
        <BuiltByBAFCreative />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
