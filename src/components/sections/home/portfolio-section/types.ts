import type { ImageSourceMap } from '@/lib/types';

type PortfolioSlide = {
  id: string;
  title: string;
  description: string;
  projectYear: number;
  imageConfig: ImageSourceMap;
};

type PortfolioData = {
  slides: PortfolioSlide[];
};

export type { PortfolioData, PortfolioSlide };
