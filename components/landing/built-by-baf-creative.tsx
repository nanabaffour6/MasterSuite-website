import { Mail, MessageCircle, Phone } from 'lucide-react';

import { BAFCreativeLogo } from '@/components/landing/logo';
import { buttonVariants } from '@/components/ui/button';
import {
  MASTER_SUITE_SUPPORT_EMAIL,
  MASTER_SUITE_SUPPORT_MAILTO,
  MASTER_SUITE_SUPPORT_PHONE,
  MASTER_SUITE_SUPPORT_TEL,
  MASTER_SUITE_WHATSAPP_URL,
} from '@/lib/site-config';
import { cn } from '@/lib/utils';

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

        <div id="support" className="scroll-mt-24 rounded-[8px] bg-[#F5FAFF] p-5">
          <div className="flex flex-col gap-4 sm:flex-row">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#DCEFFF] text-[#073762]">
              <Mail aria-hidden="true" className="size-6" />
            </span>
            <div>
              <h2 className="text-lg font-extrabold text-[#062B55]">
                Need Help with MasterSuite?
              </h2>
              <p className="mt-1 text-sm leading-6 text-[#526B85]">
                Our support team is available to help schools with
                installation, activation and general support.
              </p>
              <dl className="mt-3 grid gap-1 text-sm leading-6 text-[#526B85]">
                <div>
                  <dt className="inline font-extrabold text-[#062B55]">
                    Email:{' '}
                  </dt>
                  <dd className="inline">
                    <a
                      href={MASTER_SUITE_SUPPORT_MAILTO}
                      className="font-extrabold text-[#087DE2] outline-none hover:underline focus-visible:rounded-[4px] focus-visible:ring-3 focus-visible:ring-[#1688E8]/35"
                    >
                      {MASTER_SUITE_SUPPORT_EMAIL}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="inline font-extrabold text-[#062B55]">
                    Call:{' '}
                  </dt>
                  <dd className="inline">{MASTER_SUITE_SUPPORT_PHONE}</dd>
                </div>
                <div>
                  <dt className="inline font-extrabold text-[#062B55]">
                    WhatsApp:{' '}
                  </dt>
                  <dd className="inline">{MASTER_SUITE_SUPPORT_PHONE}</dd>
                </div>
              </dl>
              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                <a
                  href={MASTER_SUITE_SUPPORT_MAILTO}
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'h-11 rounded-[8px] border-[#A9BED4] bg-white text-sm font-bold text-[#062B55] hover:bg-[#EFF8FF] focus-visible:ring-[#1688E8]',
                  )}
                >
                  <Mail aria-hidden="true" />
                  Email Support
                </a>
                <a
                  href={MASTER_SUITE_SUPPORT_TEL}
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'h-11 rounded-[8px] border-[#A9BED4] bg-white text-sm font-bold text-[#062B55] hover:bg-[#EFF8FF] focus-visible:ring-[#1688E8]',
                  )}
                >
                  <Phone aria-hidden="true" />
                  Call Us
                </a>
                <a
                  href={MASTER_SUITE_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'h-11 rounded-[8px] border-[#062B55] bg-[#062B55] text-sm font-bold text-white hover:bg-[#0B3F75] focus-visible:ring-[#1688E8]',
                  )}
                >
                  <MessageCircle aria-hidden="true" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
