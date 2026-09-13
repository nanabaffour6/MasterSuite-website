import { MasterSuiteLogo } from '@/components/landing/logo';
import {
  MASTER_SUITE_SUPPORT_EMAIL,
  MASTER_SUITE_SUPPORT_MAILTO,
  MASTER_SUITE_SUPPORT_PHONE,
  MASTER_SUITE_SUPPORT_TEL,
  MASTER_SUITE_WHATSAPP_URL,
  navItems,
} from '@/lib/site-config';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="mx-auto grid w-full max-w-[1180px] gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:px-8">
        <a
          href="#home"
          aria-label="MasterSuite home"
          className="justify-self-start rounded-[8px] outline-none focus-visible:ring-3 focus-visible:ring-[#1688E8]/35"
        >
          <MasterSuiteLogo textClassName="text-[1.1rem]" />
        </a>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-[#526B85]"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[4px] outline-none hover:text-[#087DE2] focus-visible:ring-3 focus-visible:ring-[#1688E8]/35"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="text-sm leading-6 text-[#526B85] lg:text-right">
          <p>
            Built by{' '}
            <span className="font-extrabold text-[#062B55]">BAF Creative</span>
          </p>
          <a
            href={MASTER_SUITE_SUPPORT_MAILTO}
            className="font-semibold text-[#087DE2] outline-none hover:underline focus-visible:rounded-[4px] focus-visible:ring-3 focus-visible:ring-[#1688E8]/35"
          >
            {MASTER_SUITE_SUPPORT_EMAIL}
          </a>
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 lg:justify-end">
            <a
              href={MASTER_SUITE_SUPPORT_TEL}
              className="font-semibold text-[#062B55] outline-none hover:text-[#087DE2] focus-visible:rounded-[4px] focus-visible:ring-3 focus-visible:ring-[#1688E8]/35"
            >
              Call {MASTER_SUITE_SUPPORT_PHONE}
            </a>
            <a
              href={MASTER_SUITE_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#062B55] outline-none hover:text-[#087DE2] focus-visible:rounded-[4px] focus-visible:ring-3 focus-visible:ring-[#1688E8]/35"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#DCE8F3] px-4 py-4 text-center text-sm text-[#526B85]">
        © {year} MasterSuite. Built by BAF Creative. All rights reserved.
      </div>
    </footer>
  );
}
