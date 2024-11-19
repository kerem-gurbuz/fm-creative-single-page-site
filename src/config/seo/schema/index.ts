import type { Graph } from 'schema-dts';

import { env } from '@/config/env';

export const jsonLd: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${env.SITE_URL}/#organization`,
      name: 'Creative Agency',
      url: env.SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${env.SITE_URL}/assets/images/seo/logo.jpg`,
        width: '161',
        height: '30',
      },
      description:
        'A branding & website design agency specializing in visual storytelling for small businesses.',
      sameAs: [
        'https://instagram.com/creativeagency',
        'https://twitter.com/creativeagency',
        'https://linkedin.com/company/creative-agency',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-XXX-XXX-XXXX',
        contactType: 'customer service',
        email: 'contact@creativeagency.com',
        areaServed: 'Worldwide',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${env.SITE_URL}/#website`,
      url: env.SITE_URL,
      name: 'Creative Agency',
      description:
        'We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses.',
      publisher: { '@id': `${env.SITE_URL}/#organization` },
    },
    {
      '@type': 'WebPage',
      '@id': `${env.SITE_URL}/#webpage`,
      url: env.SITE_URL,
      name: 'Creative Agency | Branding & Website Design',
      description:
        'We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses.',
      isPartOf: { '@id': `${env.SITE_URL}/#website` },
      about: { '@id': `${env.SITE_URL}/#organization` },
    },
    {
      '@type': 'Service',
      '@id': `${env.SITE_URL}/#service`,
      name: 'Brand & Website Design Services',
      provider: { '@id': `${env.SITE_URL}/#organization` },
      areaServed: 'Worldwide',
      serviceType: ['Brand Strategy', 'Website Design', 'Brand Identity'],
      description:
        'Professional branding and website design services for small businesses',
    },
  ],
};
