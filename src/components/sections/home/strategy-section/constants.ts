/* -------------------------------------------------------------------------- */
/*                         Strategy Section Constants                         */
/* -------------------------------------------------------------------------- */

import type { ImageSourceMap } from '@/lib/types';

import imageSrcDesktop from 'public/assets/images/desktop/image-strategic.jpg';
import imageSrcMobile from 'public/assets/images/mobile/image-strategic.jpg';
import imageSrcTablet from 'public/assets/images/tablet/image-strategic.jpg';

export const SECTION_ID = 'strategy-section';
export const SECTION_HEADING_ID = 'strategy-heading';

const imageAlt =
  "A workspace setup on a wooden table with a MacBook, iPhone, coffee cup with latte art, and a sketchpad where a hand is drawing the words 'Creativity is Contagious, Pass it On' in a decorative script. There's also a magazine visible with 'Yohji Yamamoto' on its cover. The scene is photographed from above in a lifestyle composition.";

export const IMAGE_CONFIG: ImageSourceMap = {
  mobile: {
    src: imageSrcMobile,
    alt: imageAlt,
    wrapperClassName: 'block h-[200px] md:hidden',
    className: 'object-center',
    sizes: '(max-width: 768px) 100vw',
    quality: 100,
  },
  tablet: {
    src: imageSrcTablet,
    alt: imageAlt,
    wrapperClassName: 'hidden h-[658px] md:block lg:hidden',
    className: 'object-bottom',
    sizes: '(min-width: 768px) and (max-width: 1024px) 50vw',
    quality: 100,
  },
  desktop: {
    src: imageSrcDesktop,
    alt: imageAlt,
    wrapperClassName: 'hidden h-[984px] lg:block',
    className: 'object-center',
    sizes: '(min-width: 1024px) 50vw',
    quality: 100,
    priority: true,
  },
};
