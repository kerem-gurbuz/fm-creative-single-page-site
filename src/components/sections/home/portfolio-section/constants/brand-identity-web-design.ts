/* -------------------------------------------------------------------------- */
/*                         Brand Identity & Web Design                        */
/* -------------------------------------------------------------------------- */

import type { ImageSourceMap } from '@/lib/types';
import type { PortfolioSlide } from '../types';

import imageSrcDesktop from 'public/assets/images/desktop/image-slide-3.jpg';
import imageSrcMobile from 'public/assets/images/mobile/image-slide-3.jpg';
import imageSrcTablet from 'public/assets/images/tablet/image-slide-3.jpg';

const imageAlt =
  "A close-up of a dark-themed digital dashboard interface with a crypto wallet design, showing account balances in various cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), and USD. The screen includes options for 'Deposit' and 'Withdraw' and displays a wallet deposit address.";

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

export const BRAND_IDENTITY_WEB_DESIGN_SLIDE: PortfolioSlide = {
  id: 'brand-identity-web-design',
  title: 'Brand identity & web design',
  description: 'Crypto Dashboard',
  projectYear: 2016,
  imageConfig,
};
