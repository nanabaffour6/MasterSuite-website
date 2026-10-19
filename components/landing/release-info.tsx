import {
  MASTER_SUITE_BUILD,
  MASTER_SUITE_CHANNEL,
  MASTER_SUITE_RELEASE_DATE,
  MASTER_SUITE_VERSION,
  MASTER_SUITE_INSTALLER_FILENAME,
  MASTER_SUITE_INSTALLER_SHA256,
} from '@/lib/site-config';
import { cn } from '@/lib/utils';

type ReleaseLineProps = {
  className?: string;
  tone?: 'light' | 'dark';
};

export function ReleaseLine({ className, tone = 'light' }: ReleaseLineProps) {
  return (
    <p
      className={cn(
        'flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold',
        tone === 'dark' ? 'justify-center text-[#DCEFFF]' : 'text-[#526B85]',
        className,
      )}
    >
      <span>MasterSuite Desktop {MASTER_SUITE_VERSION}</span>
      <span aria-hidden="true">•</span>
      <span>Build {MASTER_SUITE_BUILD}</span>
      <span aria-hidden="true">•</span>
      <span>{MASTER_SUITE_CHANNEL}</span>
    </p>
  );
}

export function CurrentReleaseCard() {
  return (
    <div className="mx-auto mt-6 w-full max-w-sm rounded-[8px] border border-white/18 bg-white/8 px-4 py-3 text-center shadow-[0_14px_30px_rgb(0_0_0/10%)]">
      <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#8FCBFF]">
        Latest {MASTER_SUITE_CHANNEL} Release
      </p>
      <p className="mt-1 text-xl font-black text-white">
        MasterSuite Desktop {MASTER_SUITE_VERSION}
      </p>
      <p className="mt-1 text-sm font-semibold text-[#DCEFFF]">
        Build {MASTER_SUITE_BUILD} • {MASTER_SUITE_CHANNEL}
      </p>
      <p className="mt-1 text-sm text-[#DCEFFF]">
        Build date {MASTER_SUITE_RELEASE_DATE}
      </p>
      <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.08em] text-white/75">
        Windows · 100% Free Download
      </p>
    </div>
  );
}

export function UpgradeNotice() {
  return (
    <div className="mx-auto mt-5 max-w-2xl rounded-[8px] border border-white/15 bg-white/6 px-4 py-3 text-left sm:text-center">
      <p className="text-sm font-extrabold text-white">
        Already using MasterSuite?
      </p>
      <p className="mt-1 text-sm leading-6 text-[#DCEFFF]">
        Back up your school data before upgrading to Build {MASTER_SUITE_BUILD}.
        Keep the existing installation and its data; do not uninstall
        MasterSuite or delete school records as part of a normal upgrade.
      </p>
      <p className="mt-2 text-sm leading-6 text-[#DCEFFF]">
        This Windows installer is not digitally signed. Use the official
        download and contact support if Windows reports a security concern; do
        not disable your security protections. Ask support to confirm
        compatibility with your computer.
      </p>
      <details className="mt-3 text-left text-sm text-[#DCEFFF]">
        <summary className="cursor-pointer rounded-[4px] py-2 font-bold outline-none focus-visible:ring-3 focus-visible:ring-[#8FCBFF]">
          Verify the Windows installer
        </summary>
        <p className="mt-2 break-all">{MASTER_SUITE_INSTALLER_FILENAME}</p>
        <p className="mt-2">SHA-256:</p>
        <code className="mt-1 block break-all text-xs leading-6">
          {MASTER_SUITE_INSTALLER_SHA256}
        </code>
      </details>
    </div>
  );
}
