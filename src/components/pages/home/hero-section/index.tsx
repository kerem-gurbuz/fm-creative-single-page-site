import Link from 'next/link';

import { ResponsiveImage } from '@/components/common';
import { Button } from '@/components/ui/button';
import { IMAGE_CONFIG, STRATEGY_LINK } from './constants';

export function HeroSection() {
  return (
    <section
      id="hero-section"
      aria-labelledby="hero-heading"
      className="relative"
    >
      {/* Mobile Image */}
      <ResponsiveImage imageSource={IMAGE_CONFIG.mobile} />
      {/* Tablet & Desktop Background Images */}
      <div className="absolute right-0 top-0 -z-10">
        <ResponsiveImage imageSource={IMAGE_CONFIG.tablet} />
        <ResponsiveImage imageSource={IMAGE_CONFIG.desktop} />
      </div>
      {/* Content */}
      <div className="pb-[96px] pt-[56px] md:pb-[150px] md:pt-[77px] lg:pb-[160px] lg:pt-[112px]">
        <div className="container max-w-[1110px] px-6 md:px-[39.5px] xl:px-0">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h1
              id="hero-heading"
              className="text-preset-h1 mb-[15px] h-[129px] max-w-[327px] md:mb-[19px] md:h-[181px] md:max-w-[398px] lg:mb-[39px] lg:h-[273px] lg:max-w-[730px]"
            >
              Branding & <br /> website design agency
            </h1>
            <p className="text-preset-body mb-[40px] max-w-[327px] md:mb-[32px] md:max-w-[398px] lg:mb-[48px] lg:max-w-[540px]">
              We specialize in visual storytelling by creating cohesive brand
              and website design solutions for small businesses, giving lasting
              impressions to audiences in a digital world.
            </p>
            <Button
              className="h-[72px] w-[177px] bg-coral-red text-[18px] font-extrabold leading-[22px] text-white hover:bg-coral-blush"
              asChild
            >
              <Link href={STRATEGY_LINK}>Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
