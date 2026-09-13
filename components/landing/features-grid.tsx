import {
  CalendarCheck2,
  CalendarDays,
  CreditCard,
  Database,
  FileText,
  MessageSquareText,
  UserRound,
  UsersRound,
} from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    title: 'Students',
    body: 'Manage student records, admissions, classes and related information.',
    icon: UserRound,
    tone: 'text-[#073762] bg-[#EDF7FF]',
  },
  {
    title: 'Fees & Finance',
    body: 'Track fees, payments, balances, receipts and financial records.',
    icon: CreditCard,
    tone: 'text-[#089B72] bg-[#E6FAF2]',
  },
  {
    title: 'Attendance',
    body: 'Manage student and staff attendance.',
    icon: CalendarCheck2,
    tone: 'text-[#087DE2] bg-[#EDF7FF]',
  },
  {
    title: 'Assessment & Reports',
    body: 'Record scores, generate results, report cards and academic reports.',
    icon: FileText,
    tone: 'text-[#087DE2] bg-[#EDF7FF]',
  },
  {
    title: 'Timetable',
    body: 'Create and manage school timetables.',
    icon: CalendarDays,
    tone: 'text-[#0A9D69] bg-[#E8FAF2]',
  },
  {
    title: 'SMS & Communication',
    body: 'Send SMS and important communication to parents and other recipients.',
    icon: MessageSquareText,
    tone: 'text-[#087DE2] bg-[#EDF7FF]',
  },
  {
    title: 'Staff & Payroll',
    body: 'Manage staff records, salaries and payroll.',
    icon: UsersRound,
    tone: 'text-[#3C5BEF] bg-[#F0F2FF]',
  },
  {
    title: 'Backup & Restore',
    body: 'Protect school data with backup and restore tools.',
    icon: Database,
    tone: 'text-[#073762] bg-[#EDF7FF]',
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="scroll-mt-24 bg-white py-14 sm:py-18">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase text-[#1688E8]">
            Everything Your School Needs
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[#062B55] sm:text-4xl">
            Powerful Features, All in One Place
          </h2>
          <p className="mt-3 text-base leading-7 text-[#526B85] sm:text-lg">
            MasterSuite gives schools the tools they need to run efficiently,
            even without constant internet access.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="rounded-[8px] border border-[#DCE8F3] bg-white py-0 shadow-[0_12px_28px_rgb(6_43_85/5%)] ring-0"
              >
                <CardContent className="flex min-h-36 gap-4 p-5">
                  <span
                    className={`grid size-12 shrink-0 place-items-center rounded-full ${feature.tone}`}
                  >
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-extrabold text-[#062B55]">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#526B85]">
                      {feature.body}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
