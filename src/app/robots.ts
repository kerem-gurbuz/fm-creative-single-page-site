import type { MetadataRoute } from 'next';

import { env } from '@/config/env';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${env.SITE_URL}/sitemap.xml`,
  };
}
