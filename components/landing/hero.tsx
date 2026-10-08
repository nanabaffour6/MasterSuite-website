import { CheckCircle2 } from 'lucide-react';

import { ActionButtons } from '@/components/landing/action-buttons';
import { ReleaseLine } from '@/components/landing/release-info';

const trustItems = [
  '100% Free',
  'No Internet Required',
  'Safe & Secure',
  'Built for Schools',
];

function TrustIndicators() {
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#41607E]">
      {trustItems.map((item) => (
        <li key={item} className="inline-flex items-center gap-1.5">
          <CheckCircle2 aria-hidden="true" className="size-4 text-[#087DE2]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[linear-gradient(120deg,#FFFFFF_0%,#FFFFFF_54%,#EFF8FF_100%)]"
    >
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-[46%] bg-[linear-gradient(155deg,#EEF8FF_0%,#FFFFFF_60%)] lg:block" />
      <div className="mx-auto w-full max-w-[1180px] px-4 py-10 sm:px-6 sm:py-14 lg:min-h-[520px] lg:px-8">
        <div className="grid items-start gap-5 md:grid-cols-[minmax(0,1fr)_minmax(260px,36vw)] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-9">
          <div className="min-w-0">
            <p className="mb-3 inline-flex rounded-full bg-[#EFF8FF] px-3 py-1.5 text-xs font-extrabold uppercase text-[#1688E8] lg:mb-4 lg:px-4 lg:py-2 lg:text-sm">
              Free School Management Software
            </p>
            <h1 className="max-w-[560px] text-[2.18rem] font-black leading-[1.08] text-[#062B55] min-[390px]:text-[2.45rem] lg:text-5xl">
              MasterSuite — Complete School Management.{' '}
              <span className="text-[#087DE2]">Completely Free.</span>
            </h1>
            <p className="mt-4 max-w-[560px] text-base leading-7 text-[#4C647F] lg:mt-5 lg:text-lg lg:leading-8">
              MasterSuite is 100% free offline school management software for
              schools and private schools. Manage students, attendance, fees,
              staff, payroll, assessments, reports, timetables and SMS on your
              Windows computer.
            </p>
            <div className="hidden lg:block">
              <ActionButtons className="mt-7" />
              <ReleaseLine className="mt-3" />
              <div className="mt-6">
                <TrustIndicators />
              </div>
            </div>
          </div>
          <HeroProductImage className="md:mt-7 lg:mt-0" />
        </div>
        <div className="lg:hidden">
          <ActionButtons className="mt-6" fullWidth />
          <ReleaseLine className="mt-3" />
          <div className="mt-5">
            <TrustIndicators />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroProductImage({ className }: { className?: string }) {
  return (
    <figure className={className}>
      <div className="relative mx-auto max-w-[590px] rounded-[18px] border border-[#DCE8F3] bg-white p-3 shadow-[0_24px_46px_rgb(6_43_85/13%)]">
        <div className="overflow-hidden rounded-[10px] border border-[#DCE8F3] bg-[#F8FBFF]">
          <img
            src="/assets/mastersuite-module-launcher.webp"
            alt="MasterSuite Module Launcher showing available school management modules"
            width="1907"
            height="841"
            className="w-full object-contain"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div
          aria-hidden="true"
          className="mx-auto mt-2 h-1.5 w-24 rounded-full bg-[#A9BED4]"
        />
      </div>
    </figure>
  );
}
