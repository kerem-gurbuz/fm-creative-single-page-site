/* -------------------------------------------------------------------------- */
/*                        Brand Identity & Merchandise                        */
/* -------------------------------------------------------------------------- */

import type { ImageSourceMap } from '@/lib/types';
import type { PortfolioSlide } from '../types';

import imageSrcDesktop from 'public/assets/images/desktop/image-slide-2.jpg';
import imageSrcMobile from 'public/assets/images/mobile/image-slide-2.jpg';
import imageSrcTablet from 'public/assets/images/tablet/image-slide-2.jpg';

const imageAlt =
  "A flat lay of various objects on a white background, including a black tote bag with 'New Majestic Hotel' branding, a MacBook with a marble cover, a white wireless mouse, a smartphone, earbuds, and pens, presenting a neatly arranged and minimalist setup.";

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

export const BRAND_IDENTITY_MERCHANDISE_SLIDE: PortfolioSlide = {
  id: 'brand-identity-merchandise',
  title: 'Brand identity & merchandise',
  description: 'New Majestic Hotel',
  projectYear: 2018,
  imageConfig,
};
