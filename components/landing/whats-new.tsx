import { ShieldCheck, DatabaseBackup, Smartphone, Wifi, FolderCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { MASTER_SUITE_BUILD } from '@/lib/site-config';

const releaseHighlights = [
  {
    title: 'Safer School Backups',
    body: 'Portable backups now include supported school-managed attachments while preventing unrelated files on the host computer from being collected.',
    icon: ShieldCheck,
  },
  {
    title: 'Improved Backup and Restore',
    body: 'Memory-backed backup snapshots and more carefully restricted restore staging help protect school information during backup and recovery.',
    icon: DatabaseBackup,
  },
  {
    title: 'More Reliable Companion Connections',
    body: 'Improved connection messages help distinguish network problems from genuine host identity changes, making troubleshooting clearer.',
    icon: Smartphone,
  },
  {
    title: 'Better Local Network Detection',
    body: 'MasterSuite prioritises the active local network address over unrelated virtual adapters when connecting phones to the school host.',
    icon: Wifi,
  },
  {
    title: 'Preserved School Records and Settings',
    body: 'The update is designed to retain existing school records, licence information and approved device connections during supported upgrades.',
    icon: FolderCheck,
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
