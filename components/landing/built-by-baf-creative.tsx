import { Mail } from 'lucide-react';

import { BAFCreativeLogo } from '@/components/landing/logo';
import { SUPPORT_EMAIL, SUPPORT_MAILTO } from '@/lib/site-config';

export function BuiltByBAFCreative() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-y border-[#DCE8F3] bg-white"
    >
      <div className="mx-auto grid w-full max-w-[1180px] gap-8 px-4 py-9 sm:px-6 lg:grid-cols-[1fr_auto_0.9fr] lg:items-center lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <BAFCreativeLogo />
          <div>
            <h2 className="text-lg font-extrabold text-[#062B55]">
              Built by BAF Creative
            </h2>
            <p className="mt-1 max-w-2xl text-base leading-7 text-[#526B85]">
              MasterSuite is developed and continuously improved based on
              feedback from schools using it in real working environments.
            </p>
          </div>
        </div>

        <div className="hidden h-20 w-px bg-[#DCE8F3] lg:block" />

        <div
          id="support"
          className="scroll-mt-24 rounded-[8px] bg-[#F5FAFF] p-5"
        >
          <div className="flex gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#DCEFFF] text-[#073762]">
              <Mail aria-hidden="true" className="size-6" />
            </span>
            <div>
              <h2 className="text-lg font-extrabold text-[#062B55]">
                Need Support?
              </h2>
              <p className="mt-1 text-sm leading-6 text-[#526B85]">
                Send us an email at{' '}
                <a
                  href={SUPPORT_MAILTO}
                  className="font-extrabold text-[#087DE2] outline-none hover:underline focus-visible:rounded-[4px] focus-visible:ring-3 focus-visible:ring-[#1688E8]/35"
                >
                  {SUPPORT_EMAIL}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
