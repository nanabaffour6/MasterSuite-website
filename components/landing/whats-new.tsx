import {
  BarChart3,
  Calculator,
  FileSpreadsheet,
  Landmark,
  FileText,
  Wallet,
  ClipboardList,
  BookOpen,
} from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { MASTER_SUITE_BUILD } from '@/lib/site-config';

const releaseHighlights = [
  {
    title: 'Improved Mock Grading & Analysis',
    body: 'Clearer Standard and Stanine grading, individual performance insights and progress comparisons across mock examinations.',
    icon: BarChart3,
  },
  {
    title: 'Improved Mock Result Slips',
    body: 'A cleaner result slip with more accurate Total Raw Score calculations using four compulsory subjects and the two best eligible electives.',
    icon: Calculator,
  },
  {
    title: 'School Bank Details',
    body: 'Authorised administrators can securely manage school bank accounts and choose the right account for financial documents.',
    icon: Landmark,
  },
  {
    title: 'Students CSV Import',
    body: 'Import student records more confidently with improved date checks, clear previews and safeguards against duplicate entries.',
    icon: FileSpreadsheet,
  },
  {
    title: 'Improved Bank Advice',
    body: 'Prepare professional bank advice letters with organised staff payment details, departmental totals and PDF or Excel export.',
    icon: FileText,
  },
  {
    title: 'Loans & Advances',
    body: 'Manage staff loans and salary advances more easily, including improved confirmation and deletion of eligible records.',
    icon: Wallet,
  },
  {
    title: 'Staff & Payroll Reports',
    body: 'Clearer payroll summaries, salary registers and staff attendance or leave reports for everyday administration.',
    icon: ClipboardList,
  },
  {
    title: 'Help Centre & Smart Assistance',
    body: 'Updated in-app guidance makes it easier to find answers and use key MasterSuite features.',
    icon: BookOpen,
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
            MasterSuite Desktop · Stable Release
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
