import {
  Building2,
  Calculator,
  CalendarClock,
  Landmark,
  Network,
  ShieldCheck,
  UsersRound,
  WalletCards,
} from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { MASTER_SUITE_BUILD } from '@/lib/site-config';

const releaseHighlights = [
  {
    title: 'Updated Ghana PAYE',
    body: 'Updated Ghana PAYE calculations for the 2026 tax changes effective from 1 September 2026.',
    icon: Calculator,
  },
  {
    title: 'Historical Payroll Protection',
    body: 'Previous payroll periods continue to use the tax rules that applied at the time they were processed.',
    icon: ShieldCheck,
  },
  {
    title: 'Finance Improvements',
    body: 'Improved fees, payments, balances, family accounts, discounts, scholarships, feeding and reversal workflows.',
    icon: WalletCards,
  },
  {
    title: 'Timetable Improvements',
    body: 'Improved timetable setup, generation, conflict handling, period management and printing.',
    icon: CalendarClock,
  },
  {
    title: 'Family & Guardian Improvements',
    body: 'Improved parent and guardian management, duplicate detection and family linking.',
    icon: UsersRound,
  },
  {
    title: 'Staff & Payroll Improvements',
    body: 'Improved payroll, bank advice, staff birthdays, leave and appraisal workflows.',
    icon: Landmark,
  },
  {
    title: 'Host/Client Reliability',
    body: 'Improved local-network connection recovery and session reliability.',
    icon: Network,
  },
  {
    title: 'Stability & Security',
    body: 'Additional security, database integrity, licensing and usability improvements across MasterSuite.',
    icon: Building2,
  },
] as const;

export function WhatsNew() {
  return (
    <section
      aria-labelledby="whats-new-heading"
      className="bg-[#F5FAFF] py-14 sm:py-18"
    >
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase text-[#1688E8]">
            Latest Stable Release
          </p>
          <h2
            id="whats-new-heading"
            className="mt-3 text-3xl font-black leading-tight text-[#062B55] sm:text-4xl"
          >
            What&apos;s New in Build {MASTER_SUITE_BUILD}
          </h2>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {releaseHighlights.map((highlight) => {
            const Icon = highlight.icon;

            return (
              <Card
                key={highlight.title}
                className="rounded-[8px] border border-[#DCE8F3] bg-white py-0 shadow-[0_12px_28px_rgb(6_43_85/5%)] ring-0"
              >
                <CardContent className="min-h-52 p-5">
                  <span className="grid size-11 place-items-center rounded-full bg-[#EDF7FF] text-[#087DE2]">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-extrabold text-[#062B55]">
                    {highlight.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#526B85]">
                    {highlight.body}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
