import type { Graph } from 'schema-dts';

import { env } from '@/config/env';

export const jsonLd: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    /* ------------------------- Organization Schema ------------------------ */
    {
      '@type': 'Organization',
      '@id': `${env.SITE_URL}/#organization`,
      name: 'Creative Agency',
      url: env.SITE_URL,
      logo: {
        '@type': 'ImageObject',
        caption: 'Creative Agency Logo',
        url: `${env.SITE_URL}/assets/images/seo/logo.jpg`,
        width: '161',
        height: '30',
      },
      description:
        'A branding & website design agency specializing in visual storytelling for small businesses.',
      slogan: 'Design is strategic',
      sameAs: [
        'https://twitter.com/creativeagency',
        'https://linkedin.com/company/creativeagency',
        'https://instagram.com/creativeagency',
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+1-XXX-XXX-XXXX',
          contactType: 'customer service',
          email: 'hello@creativeagency.com',
          areaServed: 'US',
          availableLanguage: ['English'],
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:00',
          },
        },
        {
          '@type': 'ContactPoint',
          telephone: '+1-XXX-XXX-XXXX',
          contactType: 'sales',
          email: 'sales@creativeagency.com',
          areaServed: 'US',
          availableLanguage: ['English'],
        },
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Street',
        addressLocality: 'City',
        addressRegion: 'State',
        postalCode: 'ZIP',
        addressCountry: 'US',
      },
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 'LATITUDE',
          longitude: 'LONGITUDE',
        },
        geoRadius: '50000',
      },
    },
    /* ------------------------- WebSite Schema ---------------------------- */
    {
      '@type': 'WebSite',
      '@id': `${env.SITE_URL}/#website`,
      url: env.SITE_URL,
      name: 'Creative Agency',
      description:
        'We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses.',
      inLanguage: 'en-US',
      creator: { '@id': `${env.SITE_URL}/#organization` },
      publisher: { '@id': `${env.SITE_URL}/#organization` },
      copyrightYear: new Date().getFullYear(),
    },
    /* ------------------------- WebPage Schema ---------------------------- */
    {
      '@type': 'WebPage',
      '@id': `${env.SITE_URL}/#webpage`,
      url: env.SITE_URL,
      name: 'Creative Agency | Branding & Website Design',
      description:
        'We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses.',
      inLanguage: 'en-US',
      isPartOf: { '@id': `${env.SITE_URL}/#website` },
      about: { '@id': `${env.SITE_URL}/#organization` },
    },
    /* ------------------------- Service Schema ---------------------------- */
    {
      '@type': 'Service',
      '@id': `${env.SITE_URL}/#branding-service`,
      name: 'Brand Strategy & Design',
      description:
        'Comprehensive brand strategy and visual identity design services for businesses.',
      provider: { '@id': `${env.SITE_URL}/#organization` },
      areaServed: 'US',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Branding Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Brand Strategy',
              description:
                'Strategic brand positioning and identity development',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Visual Identity Design',
              description: 'Logo design and visual branding elements',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Brand Guidelines',
              description:
                'Comprehensive brand style guides and usage documentation',
            },
          },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': `${env.SITE_URL}/#webdesign-service`,
      name: 'Website Design & Development',
      description:
        'Custom website design and development services focused on user experience and conversion.',
      provider: { '@id': `${env.SITE_URL}/#organization` },
      areaServed: 'US',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Design Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Website Design',
              description: 'Unique, responsive website designs',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'UI/UX Design',
              description: 'User interface and experience design',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Website Development',
              description: 'Frontend and backend development services',
            },
          },
        ],
      },
    },
    /* ------------------------- Breadcrumb Schema ------------------------- */
    {
      '@type': 'BreadcrumbList',
      '@id': `${env.SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: env.SITE_URL,
        },
      ],
    },
  ],
};
