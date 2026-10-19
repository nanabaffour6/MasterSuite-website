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

export function BAFCreativeLogo({
  className,
  decorative = false,
}: {
  className?: string;
  decorative?: boolean;
}) {
  return (
    <img
      src="/assets/baf-creative-logo.png"
      alt={decorative ? '' : 'BAF Creative'}
      aria-hidden={decorative ? true : undefined}
      width={1356}
      height={1160}
      loading="lazy"
      decoding="async"
      className={cn('h-9 w-auto shrink-0 object-contain lg:h-11', className)}
    />
  );
}
