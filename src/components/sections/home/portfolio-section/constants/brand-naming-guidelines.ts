/* -------------------------------------------------------------------------- */
/*                          Brand Naming & Guidelines                         */
/* -------------------------------------------------------------------------- */

import type { ImageSourceMap } from '@/lib/types';
import type { PortfolioSlide } from '../types';

import imageSrcDesktop from 'public/assets/images/desktop/image-slide-1.jpg';
import imageSrcMobile from 'public/assets/images/mobile/image-slide-1.jpg';
import imageSrcTablet from 'public/assets/images/tablet/image-slide-1.jpg';

const imageAlt =
  "A person holding an open book displaying an article on the 'Minimum Desirable Product' concept, along with a circular flow diagram representing steps like 'Ideas', 'Build', 'Product' and 'Measure'. Text on the opposite page describes the Minimum Viable Product (MVP) strategy and key takeaways.";

const imageConfig: ImageSourceMap = {
  mobile: {
    src: imageSrcMobile,
    alt: imageAlt,
    wrapperClassName: 'block h-[404px] md:hidden',
    className: 'object-center',
    sizes: '(max-width: 768px) 100vw',
    quality: 100,
  },
  tablet: {
    src: imageSrcTablet,
    alt: imageAlt,
    wrapperClassName: 'hidden h-[472px] md:block lg:hidden',
    className: 'object-center',
    sizes: '(min-width: 768px) and (max-width: 1024px) 50vw',
    quality: 100,
  },
  desktop: {
    src: imageSrcDesktop,
    alt: imageAlt,
    wrapperClassName: 'hidden h-[728px] lg:block',
    className: 'object-right',
    sizes: '(min-width: 1024px) 50vw',
    quality: 100,
  },
};

export const BRAND_NAMING_GUIDELINES_SLIDE: PortfolioSlide = {
  id: 'brand-naming-guidelines',
  title: 'Brand naming & guidelines',
  description: 'Lean Product Roadmap',
  projectYear: 2019,
  imageConfig,
};
