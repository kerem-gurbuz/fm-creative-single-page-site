import { cn } from '@/lib/utils';
import type { ApproachStep } from '../types';

type ApproachStepCardProps = {
  className?: string;
  step: ApproachStep;
};

export function ApproachStepCard({
  className,
  step: { id, number, title, description },
}: ApproachStepCardProps) {
  return (
    <article
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn('pl-[16px] pt-[44px] lg:pl-[59px]', className)}
    >
      <div className="space-y-[15px] lg:space-y-[24px]">
        <h3 id={`${id}-title`} className="relative">
          <span className="text-preset-h3">{title}</span>
          <span
            className={cn(
              'absolute -z-10 h-[88px] w-[92px]',
              'flex items-center justify-center',
              'left-[-16px] top-[-44px] lg:left-[-59px]',
              'text-center text-[80px] font-extrabold leading-[88px] opacity-25',
            )}
          >
            {number.toString().padStart(2, '0')}
          </span>
        </h3>
        <p className="text-preset-body">{description}</p>
      </div>
    </article>
  );
}
