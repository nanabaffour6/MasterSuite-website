import {
  CalendarCheck2,
  ClipboardCheck,
  Bell,
  UsersRound,
  ContactRound,
  Wallet,
  Smartphone,
  ShieldCheck,
  Monitor,
  ArrowRight,
} from 'lucide-react';

import { MasterSuiteLogo } from '@/components/landing/logo';
import { buttonVariants } from '@/components/ui/button';
import {
  MASTER_SUITE_COMPANION_CHANNEL,
  MASTER_SUITE_COMPANION_DOWNLOAD_URL,
  MASTER_SUITE_COMPANION_VERSION,
} from '@/lib/site-config';
import { cn } from '@/lib/utils';

const capabilities = [
  {
    title: 'Attendance',
    access: 'Permission-based updates',
    icon: CalendarCheck2,
    body: 'Record attendance for assigned classes. Authorised management users can make supported attendance corrections.',
  },
  {
    title: 'Assessments',
    access: 'Supported workflows',
    icon: ClipboardCheck,
    body: 'Work with supported scores and assessment tasks for your assigned classes and subjects, as permitted by the school.',
  },
  {
    title: 'School Notices',
    access: 'Read and authorised publishing',
    icon: Bell,
    body: 'Read school notices. Users with the appropriate management permission can prepare notices for publishing on sync.',
  },
  {
    title: 'Student Information',
    access: 'Read only',
    icon: UsersRound,
    body: 'View the student information available to your account. General student record editing remains on Desktop.',
  },
  {
    title: 'Staff Information',
    access: 'Read only',
    icon: ContactRound,
    body: 'View permitted staff information. Staff records and payroll processing remain on Desktop.',
  },
  {
    title: 'Fees & Finance',
    access: 'Read only',
    icon: Wallet,
    body: 'Authorised users can view supported financial information. Mobile fee collection and payment processing are not included.',
  },
  {
    title: 'Device Pairing & Management',
    access: 'Authorised roles',
    icon: Smartphone,
    body: 'Pair through the school Desktop Host. Permitted management users can review devices and request supported access changes.',
  },
  {
    title: 'Role-Based Access',
    access: 'School-controlled permissions',
    icon: ShieldCheck,
    body: 'The Host controls which information and actions each account can access. A mobile sign-in does not grant unrestricted administration.',
  },
] as const;

export function CompanionSection() {
  return (
    <section
      id="companion"
      aria-labelledby="companion-heading"
      className="scroll-mt-24 border-y border-[#DCE8F3] bg-[#F5FAFF] py-14 sm:py-18"
    >
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <MasterSuiteLogo showText={false} markClassName="h-12 w-12" />
              <p className="text-sm font-extrabold uppercase text-[#35516F]">
                For Android · {MASTER_SUITE_COMPANION_CHANNEL}
              </p>
            </div>
            <h2
              id="companion-heading"
              className="text-3xl font-black leading-tight text-[#062B55] sm:text-4xl"
            >
              MasterSuite Companion
            </h2>
            <p className="mt-3 text-base leading-7 text-[#526B85] sm:text-lg">
              Your school&apos;s supported tasks and information, on your
              Android phone. Connect to an authorised MasterSuite Desktop Host
              and work within the permissions assigned to your account.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href={MASTER_SUITE_COMPANION_DOWNLOAD_URL}
              data-download-platform="android"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'min-h-12 rounded-[8px] border-[#062B55] bg-[#062B55] px-5 text-sm font-bold text-white hover:bg-[#0B3F75] focus-visible:ring-[#1688E8]',
              )}
            >
              <Smartphone aria-hidden="true" />
              Download for Android
            </a>
            <p className="mt-2 text-sm text-[#526B85]">
              APK · Version {MASTER_SUITE_COMPANION_VERSION}
            </p>
          </div>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ title, access, icon: Icon, body }) => (
            <article
              key={title}
              data-companion-feature
              className="rounded-[8px] border border-[#DCE8F3] bg-white p-5 shadow-[0_12px_28px_rgb(6_43_85/5%)]"
            >
              <Icon aria-hidden="true" className="mb-4 size-6 text-[#087DE2]" />
              <h3 className="text-base font-extrabold text-[#062B55]">
                {title}
              </h3>
              <p className="mt-1 text-xs font-bold text-[#35516F]">{access}</p>
              <p className="mt-2 text-sm leading-6 text-[#526B85]">{body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 border-t border-[#DCE8F3] pt-8">
          <h3 className="text-xl font-extrabold text-[#062B55]">
            One school Host. Connected, authorised users.
          </h3>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-bold text-[#062B55]">
            <span className="inline-flex items-center gap-2">
              <Monitor aria-hidden="true" className="size-5" />
              Desktop Host
            </span>
            <ArrowRight aria-hidden="true" className="size-4 text-[#526B85]" />
            <span className="inline-flex items-center gap-2">
              <ShieldCheck aria-hidden="true" className="size-5" />
              Pair &amp; sign in
            </span>
            <ArrowRight aria-hidden="true" className="size-4 text-[#526B85]" />
            <span className="inline-flex items-center gap-2">
              <Smartphone aria-hidden="true" className="size-5" />
              Companion
            </span>
          </div>
          <div className="mt-5 grid gap-5 text-sm leading-7 text-[#526B85] md:grid-cols-2">
            <p>
              Desktop is the primary Host and source of school records. Pairing,
              authentication and current permissions are required. Connect
              through the school&apos;s authorised network; this is not a
              cloud-hosting service or a promise of worldwide access.
            </p>
            <p>
              Current online-only management information needs a connection to
              the Host. Supported attendance and assessment changes can be
              queued while your local session remains valid. Reconnect, use Sync
              Now and resolve any conflicts; offline work does not bypass Host
              permissions.
            </p>
          </div>
          <a
            href="#companion-setup"
            className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-[4px] text-sm font-bold text-[#35516F] outline-none hover:underline focus-visible:ring-3 focus-visible:ring-[#1688E8]/35"
          >
            Installation &amp; pairing guide
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
