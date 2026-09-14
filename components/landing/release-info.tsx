import {
  MASTER_SUITE_BUILD,
  MASTER_SUITE_CHANNEL,
  MASTER_SUITE_VERSION,
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
      <span>MasterSuite {MASTER_SUITE_VERSION}</span>
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
        Current Release
      </p>
      <p className="mt-1 text-xl font-black text-white">
        MasterSuite {MASTER_SUITE_VERSION}
      </p>
      <p className="mt-1 text-sm font-semibold text-[#DCEFFF]">
        Build {MASTER_SUITE_BUILD} • {MASTER_SUITE_CHANNEL}
      </p>
      <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.08em] text-white/75">
        Free Download
      </p>
    </div>
  );
}
