import { Analytics, type BeforeSend } from '@vercel/analytics/react';

import { BenefitStrip } from '@/components/landing/benefit-strip';
import { BuiltByBAFCreative } from '@/components/landing/built-by-baf-creative';
import { FeaturesGrid } from '@/components/landing/features-grid';
import { FinalCTA } from '@/components/landing/final-cta';
import { Footer } from '@/components/landing/footer';
import { Hero } from '@/components/landing/hero';
import { Navbar } from '@/components/landing/navbar';
import { ScreenshotGallery } from '@/components/landing/screenshot-gallery';
import { WhyMasterSuite } from '@/components/landing/why-master-suite';
import { CompanionSection } from '@/components/landing/companion-section';
import { CompanionSetup } from '@/components/landing/companion-setup';

const novemberUpdates = [
  { title: 'Smarter Teacher Assignments', description: 'Easily assign teachers to their classes and subjects. Teachers can record marks for the subjects they teach, keeping assessments organised.' },
  { title: 'Improved MasterSuite Companion Experience', description: 'Teachers can access their assigned classes, record supported assessments and stay connected to their school’s MasterSuite Host using their phones.' },
  { title: 'Easier Student Data Export', description: 'Download student records for the entire school, a particular class or each class separately for easier reporting and record keeping.' },
  { title: 'More Convenient Assessment Management', description: 'Keep class exercises, homework, tests and examination marks organised in your school’s configured assessment system.' },
  { title: 'Better Staff and Class Organisation', description: 'See which teachers are responsible for each class and subject, making academic supervision and staff coordination simpler.' },
];

function WhatsNew() {
  return (
    <section id="whats-new" aria-labelledby="whats-new-heading" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">November 2026 Update</p>
        <h2 id="whats-new-heading" className="mt-2 text-3xl font-bold tracking-tight">What’s New in MasterSuite</h2>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">Practical improvements to make everyday school management easier.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {novemberUpdates.map((item, index) => (
          <article key={item.title} className="rounded-2xl border p-6">
            <p className="mb-2 text-sm font-semibold text-blue-600">{String(index + 1).padStart(2, '0')}</p>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

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
