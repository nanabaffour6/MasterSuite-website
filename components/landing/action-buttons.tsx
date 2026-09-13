import { Download, PlayCircle } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  MASTER_SUITE_DEMO_URL,
  MASTER_SUITE_DOWNLOAD_URL,
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
  downloadLabel = 'Download MasterSuite',
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
        'flex flex-col gap-3 sm:flex-row',
        fullWidth && 'w-full sm:w-auto',
        className,
      )}
    >
      <a
        href={MASTER_SUITE_DOWNLOAD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ size: 'lg' }),
          'h-12 rounded-[8px] px-5 text-base font-bold shadow-[0_14px_28px_rgb(6_43_85/18%)] focus-visible:ring-[#1688E8]',
          downloadClasses,
          fullWidth && 'w-full',
        )}
      >
        <Download aria-hidden="true" />
        {downloadLabel}
      </a>
      <a
        href={MASTER_SUITE_DEMO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ variant: 'outline', size: 'lg' }),
          'h-12 rounded-[8px] px-5 text-base font-bold focus-visible:ring-[#1688E8]',
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
