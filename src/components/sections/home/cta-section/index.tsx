import Link from 'next/link';

import { RedWavePattern } from '@/components/common';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SECTION_HEADING_ID, SECTION_ID } from './constants';

export function CtaSection() {
  return (
    <section
      id={SECTION_ID}
      aria-labelledby={SECTION_HEADING_ID}
      className="relative py-[100px] md:pb-[101px] md:pt-[70px] lg:pb-[115px] lg:pt-[120px]"
    >
      {/* Content */}
      <div className="container max-w-[1110px] px-6 md:px-[39.5px] xl:px-0">
        <div
          className={cn(
            'flex flex-col items-center gap-[47px]',
            'md:flex-row md:justify-between',
          )}
        >
          <h2
            id={SECTION_HEADING_ID}
            className="text-preset-h2 w-full text-center md:max-w-[398px] md:text-left lg:min-h-[133px] lg:max-w-[635px]"
          >
            Let&apos;s build something <br /> great together.
          </h2>
          <Button
            className="h-[64px] w-[199px] bg-coral-red text-[16px] font-extrabold leading-[20px] text-white hover:bg-coral-blush"
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
      {/* Decorative Pattern */}
      <RedWavePattern
        className={cn(
          'absolute hidden h-[60px] w-[134px] xl:block',
          'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
        )}
      />
    </section>
  );
}
