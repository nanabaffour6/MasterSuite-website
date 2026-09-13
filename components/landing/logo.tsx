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
      <img
        src="/assets/mastersuite-logo.png"
        alt=""
        aria-hidden="true"
        width={512}
        height={512}
        className={cn('h-9 w-10 shrink-0 object-contain', markClassName)}
      />
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
