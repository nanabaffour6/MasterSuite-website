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
        Latest {MASTER_SUITE_CHANNEL} Build
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
        Windows · Test candidate · Public release pending
      </p>
    </div>
  );
}

export function UpgradeNotice() {
  return (
    <div className="mx-auto mt-5 max-w-2xl rounded-[8px] border border-white/15 bg-white/6 px-4 py-3 text-left sm:text-center">
      <p className="text-sm font-extrabold text-white">
        Existing MasterSuite users — do not upgrade yet
      </p>
      <p className="mt-1 text-sm leading-6 text-[#DCEFFF]">
        Build {MASTER_SUITE_BUILD} is a verified test candidate, not an approved public release.
        Do not install it on a production school computer or upgrade your existing
        MasterSuite installation. Keep your current application and backups unchanged.
      </p>
      <p className="mt-2 text-sm leading-6 text-[#DCEFFF]">
        Windows clean-install, upgrade, licence, Host/LAN, shortcut and data-preservation
        acceptance remains outstanding, along with a security-advisory disposition.
        The installer is unsigned. Use only an authorised disposable Windows test
        environment with synthetic school data; do not bypass Windows security warnings.
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
