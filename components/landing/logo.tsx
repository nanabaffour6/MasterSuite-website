import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  showText?: boolean;
};

export function MasterSuiteLogo({
  className,
  markClassName,
  textClassName,
  showText = true,
}: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg
        aria-hidden="true"
        viewBox="0 0 48 44"
        className={cn('h-9 w-10 shrink-0', markClassName)}
      >
        <path d="M4 7.5 21.2 2v31.6L4 41.2V7.5Z" fill="#0C72B8" />
        <path d="M27 2 44 7.5v33.7l-17-7.6V2Z" fill="#003B70" />
        <path d="M8.4 13.9 21.2 10v10.5L8.4 25.6V13.9Z" fill="#48AEEA" />
        <path d="M27 10 39.8 13.9v11.7L27 20.5V10Z" fill="#0D8CDC" />
        <path d="M7.6 29.7 20.8 24v10L7.6 40v-10.3Z" fill="#F5BC24" />
        <path d="M27.4 24 40.6 29.7V40l-13.2-6V24Z" fill="#0784CF" />
      </svg>
      {showText ? (
        <span
          className={cn(
            'text-[1.35rem] font-extrabold leading-none text-[#062B55]',
            textClassName,
          )}
        >
          MasterSuite
        </span>
      ) : null}
    </span>
  );
}

export function BAFCreativeLogo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <span className="grid h-14 w-16 place-items-center rounded-[8px] bg-[#062B55] text-white shadow-sm">
        <span className="text-center text-xl font-black leading-none">
          B<span className="text-[#F5BC24]">A</span>F
        </span>
      </span>
      <span className="text-sm font-black uppercase leading-tight text-[#062B55]">
        Creative
      </span>
    </span>
  );
}
