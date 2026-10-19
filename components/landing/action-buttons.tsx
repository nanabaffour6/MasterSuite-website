import { Download, PlayCircle, Smartphone } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  MASTER_SUITE_DEMO_URL,
  MASTER_SUITE_DOWNLOAD_URL,
  MASTER_SUITE_COMPANION_DOWNLOAD_URL,
} from '@/lib/site-config';

type ActionButtonsProps = {
  className?: string;
  fullWidth?: boolean;
  tone?: 'light' | 'dark';
  downloadLabel?: string;
};

export function ActionButtons({
  className,
  fullWidth = false,
  tone = 'light',
  downloadLabel = 'Download for Windows',
}: ActionButtonsProps) {
  const downloadClasses =
    tone === 'dark'
      ? 'border-white bg-white text-[#062B55] hover:bg-[#EFF8FF]'
      : 'border-[#062B55] bg-[#062B55] text-white hover:bg-[#0B3F75]';

  const demoClasses =
    tone === 'dark'
      ? 'border-white/70 bg-transparent text-white hover:bg-white/10'
      : 'border-[#A9BED4] bg-white text-[#062B55] hover:bg-[#EFF8FF]';

  return (
    <div
      className={cn(
        'flex flex-col items-start gap-3',
        fullWidth && 'w-full sm:w-auto',
        className,
      )}
    >
      <div
        className={cn(
          'flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap',
          fullWidth && 'w-full',
        )}
      >
        <a
          href={MASTER_SUITE_DOWNLOAD_URL}
          data-download-platform="windows"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ size: 'lg' }),
            'h-auto min-h-12 min-w-0 shrink rounded-[8px] px-3 py-3 text-sm leading-5 whitespace-normal font-bold shadow-[0_14px_28px_rgb(6_43_85/18%)] focus-visible:ring-[#1688E8] sm:px-5',
            downloadClasses,
            fullWidth && 'w-full',
          )}
        >
          <Download aria-hidden="true" />
          <span className="min-w-0 text-center">{downloadLabel}</span>
        </a>
        <a
          href={MASTER_SUITE_COMPANION_DOWNLOAD_URL}
          data-download-platform="android"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: 'outline', size: 'lg' }),
            'h-auto min-h-12 min-w-0 shrink rounded-[8px] px-3 py-3 text-sm leading-5 whitespace-normal font-bold focus-visible:ring-[#1688E8] sm:px-5',
            demoClasses,
            fullWidth && 'w-full sm:w-auto',
          )}
        >
          <Smartphone aria-hidden="true" />
          <span className="min-w-0 text-center">Download for Android</span>
        </a>
      </div>
      <a
        href={MASTER_SUITE_DEMO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ variant: 'outline', size: 'lg' }),
          'h-11 rounded-[8px] px-3 text-sm font-bold focus-visible:ring-[#1688E8]',
          demoClasses,
          fullWidth && 'w-full',
        )}
      >
        <PlayCircle aria-hidden="true" />
        Watch Demo
      </a>
    </div>
  );
}
