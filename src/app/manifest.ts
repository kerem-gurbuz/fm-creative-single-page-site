import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Creative Agency',
    short_name: 'Creative Agency',
    description:
      'Transform your business with our award-winning branding and website design services. We create stunning visual identities and high-converting websites that help small businesses stand out in the digital world.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
