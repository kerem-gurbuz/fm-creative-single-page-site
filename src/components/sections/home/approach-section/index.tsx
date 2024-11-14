import { cn } from '@/lib/utils';
import { ApproachStepCard } from './approach-step-card';
import { APPROACH_DATA, SECTION_HEADING_ID, SECTION_ID } from './constants';

export function ApproachSection() {
  return (
    <section
      id={SECTION_ID}
      aria-labelledby={SECTION_HEADING_ID}
      className="relative py-[96px] md:pb-[120px] md:pt-0 lg:pb-[200px]"
    >
      {/* Background-Color */}
      <div
        className={cn(
          'absolute z-10 bg-coral-red',
          'inset-0 md:left-[calc(50%-54px)] md:right-0 md:top-[-120px] lg:left-[calc(50%-175px)] lg:top-[-200px]',
        )}
      />
      {/* Content */}
      <div
        className={cn(
          'container relative z-20 max-w-[1100px]',
          'px-6 md:px-[39.5px] xl:px-0',
        )}
      >
        <div className="grid grid-cols-[327px] justify-center gap-[49px] md:grid-cols-[1fr_355px] md:gap-[53px] lg:grid-cols-[1fr_504px] xl:gap-0">
          {/* Left side - Title */}
          <div
            className={cn(
              'md:justify-self-start',
              'md:max-w-[281px] lg:max-w-[540px]',
              'md:pt-[126px] lg:pt-[200px]',
            )}
          >
            <h2
              id={SECTION_HEADING_ID}
              className="text-preset-h2 text-center text-white md:text-left md:text-black"
            >
              Our approach for creating a winning brand
            </h2>
          </div>
          {/* Right side - Steps */}
          <div
            className={cn(
              'space-y-[40px] lg:space-y-[56px]',
              'xl:ml-[69px] xl:mr-[-69px]',
            )}
          >
            {APPROACH_DATA.steps.map((step) => (
              <ApproachStepCard
                key={step.id}
                step={step}
                className="text-left text-white"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
