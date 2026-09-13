'use client';

import * as React from 'react';
import { Download, Menu } from 'lucide-react';

import { MasterSuiteLogo } from '@/components/landing/logo';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { MASTER_SUITE_DOWNLOAD_URL, navItems } from '@/lib/site-config';

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#DCE8F3] bg-white/95 backdrop-blur">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 w-full max-w-[1180px] items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:px-8"
      >
        <a
          href="#home"
          aria-label="MasterSuite home"
          className="rounded-[8px] outline-none focus-visible:ring-3 focus-visible:ring-[#1688E8]/35"
        >
          <MasterSuiteLogo textClassName="text-[1.2rem] sm:text-[1.35rem]" />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[6px] px-1 py-2 text-sm font-semibold text-[#35516F] outline-none transition hover:text-[#087DE2] focus-visible:ring-3 focus-visible:ring-[#1688E8]/35"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={MASTER_SUITE_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ size: 'lg' }),
            'hidden h-11 rounded-[8px] border-[#062B55] bg-[#062B55] px-4 text-sm font-bold text-white shadow-[0_12px_24px_rgb(6_43_85/14%)] hover:bg-[#0B3F75] focus-visible:ring-[#1688E8] lg:inline-flex',
          )}
        >
          <Download aria-hidden="true" />
          Download MasterSuite
        </a>

        <Button
          type="button"
          variant="ghost"
          size="icon-lg"
          aria-label="Open navigation menu"
          className="rounded-[8px] text-[#062B55] focus-visible:ring-[#1688E8] lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu aria-hidden="true" />
        </Button>
      </nav>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-[min(86vw,330px)] gap-0 border-[#DCE8F3] bg-white p-0"
        >
          <SheetHeader className="border-b border-[#E4EEF7] p-5">
            <SheetTitle>
              <MasterSuiteLogo textClassName="text-[1.18rem]" />
            </SheetTitle>
            <SheetDescription className="sr-only">
              MasterSuite mobile navigation
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-1 flex-col gap-2 p-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-[8px] px-3 py-3 text-base font-semibold text-[#062B55] outline-none transition hover:bg-[#EFF8FF] focus-visible:ring-3 focus-visible:ring-[#1688E8]/35"
              >
                {item.label}
              </a>
            ))}
            <a
              href={MASTER_SUITE_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className={cn(
                buttonVariants({ size: 'lg' }),
                'mt-4 h-12 rounded-[8px] border-[#062B55] bg-[#062B55] text-base font-bold text-white hover:bg-[#0B3F75] focus-visible:ring-[#1688E8]',
              )}
            >
              <Download aria-hidden="true" />
              Download MasterSuite
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
