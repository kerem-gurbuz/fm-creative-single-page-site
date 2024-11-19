'use client';

import { useEffect, useState } from 'react';

import { DynamicImage } from '@/components/common';
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel as EmblaCarousel,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { PORTFOLIO_DATA } from '../constants';

export function Carousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <EmblaCarousel setApi={setApi}>
      {/* Carousel Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Slide Container */}
        <div className="md:order-last md:ml-[-54px] lg:ml-[-175px]">
          <CarouselContent>
            {PORTFOLIO_DATA.slides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className="relative">
                  {/* Multi-Source Image */}
                  <DynamicImage imageConfig={slide.imageConfig} />
                  {/* Image Overlay */}
                  <div className="absolute inset-x-0 bottom-0 z-10 h-[200px] bg-gradient-to-t from-black" />
                  {/* Slide Info */}
                  <div
                    className={cn(
                      'absolute z-20',
                      'bottom-[35px] md:bottom-[45px] lg:bottom-[68px]',
                      'right-[32px] md:right-[39.5px] xl:left-[730px] xl:right-auto xl:-translate-x-full',
                      'text-nowrap text-right',
                    )}
                  >
                    <p className="text-[15px] font-extrabold leading-[20px] lg:text-[20px] lg:leading-[32px]">
                      {slide.description}
                    </p>
                    <p className="text-[15px] font-normal leading-[20px] lg:text-[18px] lg:leading-[32px]">
                      {slide.projectYear + ' Project'}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        {/* Carousel Controls */}
        <div
          className={cn(
            'relative z-10 bg-obsidian md:self-start',
            'md:mr-[-6px] lg:mr-[-15px]',
            'py-[64px] md:py-[100px] lg:py-[152px]',
            'px-6 md:pl-[39.5px] md:pr-[70px] lg:pr-[125px]',
          )}
        >
          <div className="flex justify-center md:justify-start lg:justify-end">
            <div className="max-w-[327px] md:max-w-[281px] lg:max-w-[405.5px] xl:max-w-[445px]">
              <h2
                className={cn(
                  'text-preset-h2 text-center md:text-left lg:min-h-[133px]',
                  'mb-6 md:mb-8 lg:mb-[51px]',
                )}
              >
                {PORTFOLIO_DATA.slides[current].title}
              </h2>
              <div className="relative mx-auto h-[40px] w-[96px] md:mx-0">
                <CarouselPrevious
                  variant="default"
                  className="absolute left-0 top-0"
                />
                <CarouselNext
                  variant="default"
                  className="absolute right-0 top-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </EmblaCarousel>
  );
}
