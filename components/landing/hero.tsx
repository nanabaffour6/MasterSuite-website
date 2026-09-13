import { CheckCircle2 } from 'lucide-react';

import { ActionButtons } from '@/components/landing/action-buttons';

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
      <div className="mx-auto w-full max-w-[1180px] px-4 py-10 sm:px-6 sm:py-14 lg:grid lg:min-h-[520px] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-9 lg:px-8">
        <div className="hidden lg:block">
          <p className="mb-4 inline-flex rounded-full bg-[#EFF8FF] px-4 py-2 text-sm font-extrabold uppercase text-[#1688E8]">
            Free School Management Software
          </p>
          <h1 className="max-w-[560px] text-5xl font-black leading-[1.08] text-[#062B55]">
            MasterSuite — Complete School Management.{' '}
            <span className="text-[#087DE2]">Completely Free.</span>
          </h1>
          <p className="mt-5 max-w-[560px] text-lg leading-8 text-[#4C647F]">
            Manage students, fees, attendance, assessment, reports, payroll,
            timetables and SMS in one powerful offline system designed for
            schools.
          </p>
          <ActionButtons className="mt-7" />
          <div className="mt-6">
            <TrustIndicators />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="relative ml-auto max-w-[590px]">
            <img
              src="/assets/master-suite-hero-laptop.webp"
              alt="MasterSuite desktop application shown on a laptop"
              width="495"
              height="310"
              className="w-full rounded-[10px] object-contain drop-shadow-[0_24px_34px_rgb(6_43_85/18%)]"
              fetchPriority="high"
            />
          </figure>
        </div>

        <div className="lg:hidden">
          <div className="grid items-start gap-5 md:grid-cols-[minmax(0,1fr)_minmax(220px,32vw)]">
            <div>
              <p className="mb-3 inline-flex rounded-full bg-[#EFF8FF] px-3 py-1.5 text-xs font-extrabold uppercase text-[#1688E8]">
                Free School Management Software
              </p>
              <h1 className="text-[2.18rem] font-black leading-[1.08] text-[#062B55] min-[390px]:text-[2.45rem]">
                MasterSuite — Complete School Management.{' '}
                <span className="text-[#087DE2]">Completely Free.</span>
              </h1>
              <p className="mt-4 text-base leading-7 text-[#4C647F]">
                Manage students, fees, attendance, assessment, reports, payroll,
                timetables and SMS in one powerful offline system designed for
                schools.
              </p>
            </div>
            <figure className="mx-auto w-full max-w-[230px] md:mt-7">
              <img
                src="/assets/master-suite-mobile-phone.webp"
                alt="MasterSuite mobile reference showing school management modules"
                width="245"
                height="385"
                className="w-full rounded-[12px] object-contain drop-shadow-[0_16px_24px_rgb(6_43_85/22%)]"
                fetchPriority="high"
              />
            </figure>
          </div>
          <ActionButtons
            className="mt-6"
            fullWidth
            downloadLabel="Download MasterSuite"
          />
          <div className="mt-5">
            <TrustIndicators />
          </div>
        </div>
      </div>
    </section>
  );
}
