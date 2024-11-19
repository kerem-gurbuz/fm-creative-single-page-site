import type { Metadata } from 'next';

import { env } from '@/config/env';

// TODO: Add verification codes

export const metadata: Metadata = {
  metadataBase: new URL(env.SITE_URL),
  title: {
    default: 'Creative Agency | Branding & Website Design',
    template: '%s | Creative Agency',
  },
  description:
    'Transform your business with our award-winning branding and website design services. We create stunning visual identities and high-converting websites that help small businesses stand out in the digital world.',
  category: 'Design & Technology',
  keywords: [
    'branding agency',
    'website design',
    'digital agency',
    'brand strategy',
    'creative agency',
    'web development',
    'brand identity',
    'visual design',
    'UI/UX design',
    'logo design',
    'brand guidelines',
    'digital marketing',
    'responsive web design',
    'user experience',
    'small business branding',
    'corporate identity',
    'graphic design',
    'web solutions',
    'digital transformation',
    'brand consulting',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: env.SITE_URL,
    siteName: 'Creative Agency',
    title: 'Creative Agency | Branding & Website Design',
    description:
      'We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses.',
    images: [
      {
        url: '/assets/images/seo/creative-agency.jpg',
        width: 1200,
        height: 630,
        alt: 'Creative Agency - Branding & Website Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@creativeagency',
    title: 'Creative Agency | Branding & Website Design',
    description:
      'We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses.',
    images: ['/assets/images/seo/creative-agency.jpg'],
  },
  alternates: {
    canonical: env.SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  creator: 'Kerem GURBUZ',
  authors: [
    {
      name: 'Kerem GURBUZ',
      url: 'https://www.linkedin.com/in/gurbuz-kerem/',
    },
  ],
};
