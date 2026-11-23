import { ShieldCheck, Users, FileSpreadsheet, LayoutDashboard, KeyRound, ListFilter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { MASTER_SUITE_BUILD } from '@/lib/site-config';

const releaseHighlights = [
  {
    title: 'Improved User Account Management',
    body: 'Administrators can safely delete eligible user accounts while preserving historical records, audit information and important security protections.',
    icon: ShieldCheck,
  },
  {
    title: 'Improved Staff Record Management',
    body: 'Eligible staff records can be deleted safely without losing historical payroll and attendance information. Outstanding financial obligations remain protected.',
    icon: Users,
  },
  {
    title: 'Enhanced Terminal Broadsheets',
    body: 'Improved terminal broadsheets display Class Assessment marks, Examination marks and Grades, with Excel export and A3 landscape PDF support for printing.',
    icon: FileSpreadsheet,
  },
  {
    title: 'More Accurate Dashboard Student Counts',
    body: 'The dashboard displays the number of active students for the selected academic year and updates when relevant student records change.',
    icon: LayoutDashboard,
  },
  {
    title: 'Secure Administrator Account Recovery',
    body: 'Administrators can securely configure recovery codes to regain access to their accounts when needed, with additional account-security protections.',
    icon: KeyRound,
  },
  {
    title: 'Improved Staff Status Filtering',
    body: 'The Staff module opens with All Staff selected by default. Administrators can filter staff by Active, Inactive, On Leave and any separately supported Exited status.',
    icon: ListFilter,
  },
] as const;

export function WhatsNew() {
  return (
    <section id="whats-new" aria-labelledby="whats-new-heading" className="bg-[#F5FAFF] py-14 sm:py-18">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase text-[#1688E8]">MasterSuite Desktop · Latest Update</p>
          <h2 id="whats-new-heading" className="mt-3 text-3xl font-black leading-tight text-[#062B55] sm:text-4xl">
            What&apos;s New in Build {MASTER_SUITE_BUILD}
          </h2>
        </div>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {releaseHighlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <Card data-release-highlight key={highlight.title} className="rounded-[8px] border border-[#DCE8F3] bg-white py-0 shadow-[0_12px_28px_rgb(6_43_85/5%)] ring-0">
                <CardContent className="min-h-56 p-6">
                  <span className="grid size-14 place-items-center rounded-xl bg-gradient-to-br from-[#E4F4FF] to-[#D9E9FF] text-[#087DE2] shadow-sm ring-1 ring-[#C8E2F7]">
                    <Icon aria-hidden="true" className="size-7" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 text-base font-extrabold text-[#062B55]">{highlight.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#526B85]">{highlight.body}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
