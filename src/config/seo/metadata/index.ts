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
    'We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.',
  keywords: [
    'creative agency',
    'branding agency',
    'digital agency',
    'website design',
    'brand strategy',
    'web development',
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
        alt: 'Creative Agency',
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
  publisher: 'Vercel',
};
