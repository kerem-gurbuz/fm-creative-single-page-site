/* -------------------------------------------------------------------------- */
/*                           Hero Section Constants                           */
/* -------------------------------------------------------------------------- */

import type { ImageSourceMap } from '@/lib/types';

import imageSrcDesktop from 'public/assets/images/desktop/image-hero.jpg';
import imageSrcMobile from 'public/assets/images/mobile/image-hero.jpg';
import imageSrcTablet from 'public/assets/images/tablet/image-hero.jpg';

const imageAlt =
  'Two people working at computers in a bright office space. One person wearing a grey sweater and glasses is in the foreground, while another person in a dark sweater sits at a desk in the background. Both are focused on their computer screens in what appears to be a modern workspace with natural lighting from windows.';

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
    wrapperClassName: 'hidden h-[606px] w-[438px] md:block lg:hidden',
    className: 'object-center',
    sizes: '(min-width: 768px) and (max-width: 1024px) 438px',
    quality: 85,
  },
  desktop: {
    src: imageSrcDesktop,
    alt: imageAlt,
    wrapperClassName: 'hidden h-[800px] w-[895px] lg:block',
    className: 'object-center',
    sizes: '(min-width: 1024px) 895px',
    quality: 85,
    priority: true,
  },
};
