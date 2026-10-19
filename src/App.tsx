import { Analytics, type BeforeSend } from '@vercel/analytics/react';

import { BenefitStrip } from '@/components/landing/benefit-strip';
import { BuiltByBAFCreative } from '@/components/landing/built-by-baf-creative';
import { FeaturesGrid } from '@/components/landing/features-grid';
import { FinalCTA } from '@/components/landing/final-cta';
import { Footer } from '@/components/landing/footer';
import { Hero } from '@/components/landing/hero';
import { Navbar } from '@/components/landing/navbar';
import { ScreenshotGallery } from '@/components/landing/screenshot-gallery';
import { WhatsNew } from '@/components/landing/whats-new';
import { WhyMasterSuite } from '@/components/landing/why-master-suite';
import { CompanionSection } from '@/components/landing/companion-section';
import { CompanionSetup } from '@/components/landing/companion-setup';

const redactAnalyticsUrl: BeforeSend = (event) => {
  const url = new URL(event.url);
  url.search = '';
  url.hash = '';
  return { ...event, url: url.toString() };
};

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BenefitStrip />
        <FeaturesGrid />
        <CompanionSection />
        <CompanionSetup />
        <WhatsNew />
        <ScreenshotGallery />
        <WhyMasterSuite />
        <BuiltByBAFCreative />
        <FinalCTA />
      </main>
      <Footer />
      <Analytics
        mode={import.meta.env.DEV ? 'development' : 'production'}
        beforeSend={redactAnalyticsUrl}
      />
    </>
  );
}
