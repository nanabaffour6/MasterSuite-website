import {
  Calculator,
  CheckCircle2,
  FileText,
  Landmark,
  ShieldCheck,
  Wrench,
  BookOpen,
  Wallet,
} from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { MASTER_SUITE_BUILD } from '@/lib/site-config';

const releaseHighlights = [
  {
    title: 'Mock Total Raw Score',
    body: 'Corrected the six-subject original-mark total, including additional core classifications and clear missing-mark explanations.',
    icon: Calculator,
  },
  {
    title: 'Loans & Advances',
    body: 'Corrected eligible loan and advance deletion with confirmation, permission checks and audit safeguards.',
    icon: Wallet,
  },
  {
    title: 'School Bank Details',
    body: 'Protected school bank account settings with authorised access and multi-account selection.',
    icon: Landmark,
  },
  {
    title: 'Bank Advice',
    body: 'Improved the approved bank-manager letter and employee payment summaries in PDF and Excel.',
    icon: FileText,
  },
  {
    title: 'Document Attribution',
    body: 'Consistent MasterSuite developer attribution on supported printable documents and generated PDFs.',
    icon: ShieldCheck,
  },
  {
    title: 'Help & Smart Assistance',
    body: 'Updated existing guidance for Mock marks, bank advice and loan or advance management.',
    icon: BookOpen,
  },
  {
    title: "What's New",
    body: 'Improved one-time acknowledgement while preserving existing user preferences.',
    icon: CheckCircle2,
  },
  {
    title: 'Regression Corrections',
    body: 'Reported 104 of 104 automated regression commands passed; installed-Windows acceptance remains outstanding.',
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
            Build 2026.10.31.01 · Verified test candidate
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
