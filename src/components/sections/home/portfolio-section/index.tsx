import { WhiteWavePattern } from '@/components/common';
import { cn } from '@/lib/utils';
import { Carousel } from './carousel';
import { SECTION_ID } from './constants';

export function PortfolioSection() {
  return (
    <section
      id={SECTION_ID}
      aria-label="Portfolio Section"
      className="relative text-white"
    >
      {/* Embla Carousel */}
      <Carousel />
      {/* Decorative Pattern */}
      <WhiteWavePattern
        className={cn(
          'absolute z-20 hidden md:block',
          'h-[29px] w-[63px] lg:h-[60px] lg:w-[134px]',
          'left-[calc(50%+6px)] -translate-x-1/2 lg:left-[calc(50%+15px)]',
          'top-[126px] lg:top-[186px]',
        )}
      />
    </section>
  );
}
