import { ShieldCheck, BookOpenCheck, Users, GraduationCap, DatabaseBackup, Wallet } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { MASTER_SUITE_BUILD } from '@/lib/site-config';

const releaseHighlights = [
  {
    title: 'Improved Teacher Access and Permissions',
    body: 'Teachers can securely access the features and information relevant to their responsibilities, helping schools maintain better control over staff access and protect important records.',
    icon: ShieldCheck,
  },
  {
    title: 'Smarter Class and Subject Assignments',
    body: 'School administrators can assign teachers to their respective classes and subjects more efficiently, making academic coordination, assessment recording and supervision easier.',
    icon: BookOpenCheck,
  },
  {
    title: 'Safer Staff and User Account Management',
    body: 'Improved account management helps administrators organise staff records, manage system access and reduce the risk of accidental changes to important information.',
    icon: Users,
  },
  {
    title: 'Stronger Protection for Mock Examination Records',
    body: 'Enhanced access controls help safeguard mock examination results and historical assessment records, supporting more reliable academic reporting and performance tracking.',
    icon: GraduationCap,
  },
  {
    title: 'Safer Backup and Recovery',
    body: 'Improved backup and recovery safeguards help protect school information, making it safer to preserve important records and restore data when needed.',
    icon: DatabaseBackup,
  },
  {
    title: 'Improved Staff Loans and Advances',
    body: 'Schools can manage staff loans and salary advances more conveniently, with improved controls for maintaining accurate financial records and tracking staff obligations.',
    icon: Wallet,
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
