import Link from 'next/link';

import { DynamicImage, RedWavePattern } from '@/components/common';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { IMAGE_CONFIG, SECTION_HEADING_ID, SECTION_ID } from './constants';

export function StrategySection() {
  return (
    <section
      id={SECTION_ID}
      aria-labelledby={SECTION_HEADING_ID}
      className="relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Images */}
        <div className="md:mr-[6px] lg:mr-[-15px]">
          <DynamicImage imageConfig={IMAGE_CONFIG} />
        </div>
        {/* Content */}
        <div className="md:ml-[-6px] lg:ml-[15px]">
          <div
            className={cn(
              'flex h-full flex-col items-center md:items-start',
              'px-[24px] py-[72px]',
              'md:py-[120px] md:pl-[69.5px] md:pr-[39.5px]',
              'lg:py-[200px] lg:pl-[154px] lg:pr-[106px]',
              'bg-obsidian text-center text-white md:text-left',
            )}
          >
            <div className="max-w-[327px] md:max-w-[281px] lg:max-w-[445px]">
              <h2
                id={SECTION_HEADING_ID}
                className="text-preset-h2 mb-[24px] md:mb-[32px] lg:mb-[43px] lg:h-[133px]"
              >
                <span className="text-coral-red">Design</span> is{' '}
                <br className="hidden md:inline-block" /> strategic.
              </h2>
              <p className="text-preset-body mb-[40px] md:mb-[32px] lg:mb-[48px]">
                “A well-crafted design strategy consistently produces desired
                outcomes and brand awareness. We are firm believers that success
                lies in creative collaboration with our clients.”
              </p>
              <Button
                className={cn(
                  'h-[29px] w-[103px] lg:h-[32px] lg:w-[124px]',
                  'text-[15px] font-extrabold leading-[18px] text-coral-red hover:text-coral-blush lg:text-[18px] lg:leading-[22px]',
                  'border-b-2 border-coral-red hover:border-coral-blush',
                  'transition-all duration-300',
                )}
                asChild
              >
                <Link
                  href="#" // > href={STATIC_ROUTES.SCHEDULE_CALL}
                >
                  Schedule a Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative Pattern */}
      <RedWavePattern
        className={cn(
          'absolute z-10 h-[29px] w-[63px] lg:h-[61px] lg:w-[135px]',
          'left-[24px] top-[200px] -translate-y-1/2',
          'md:left-[calc(50%-6px)] md:top-[145px] md:-translate-x-1/2 md:translate-y-0',
          'lg:left-[calc(50%+15px)] lg:top-[234px]',
        )}
      />
    </section>
  );
}
