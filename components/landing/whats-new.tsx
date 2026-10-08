import {
  Calculator,
  CalendarDays,
  CheckCircle2,
  Monitor,
  ShieldCheck,
  SlidersHorizontal,
  Wrench,
} from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { MASTER_SUITE_BUILD } from '@/lib/site-config';

const releaseHighlights = [
  {
    title: 'Automatic Ghana PAYE',
    body: 'Automatic Ghana PAYE calculation with the latest statutory rates.',
    icon: Calculator,
  },
  {
    title: 'Optional Manual PAYE',
    body: 'Optional Manual PAYE mode for customised tax schedules.',
    icon: SlidersHorizontal,
  },
  {
    title: 'Academic Year Editing',
    body: 'Improved Academic Year editing.',
    icon: CalendarDays,
  },
  {
    title: 'Desktop Security',
    body: 'Stronger desktop security and safer navigation.',
    icon: ShieldCheck,
  },
  {
    title: 'Windows Branding & Icons',
    body: 'Improved Windows application branding and icons.',
    icon: Monitor,
  },
  {
    title: 'Stability & Reliability',
    body: 'Better stability and reliability.',
    icon: CheckCircle2,
  },
  {
    title: 'Fixes & Performance',
    body: 'General bug fixes and performance improvements.',
    icon: Wrench,
  },
] as const;

export function WhatsNew() {
  return (
    <section
      id="whats-new"
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
                data-release-highlight
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
