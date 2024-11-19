import type { NextConfig } from 'next';

/* 
  Content Security Policy (CSP) configuration
  ------------------------------------------------------------------------
  https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy

  Content Security Policy (CSP) is important to guard your Next.js application against various security threats such as cross-site scripting (XSS), clickjacking, and other code injection attacks.

  By using CSP, developers can specify which origins are permissible for content sources, scripts, stylesheets, images, fonts, objects, media (audio, video), iframes, and more.
 */
const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

/* 
  Security Headers
  ------------------------------------------------------------------------
  https://nextjs.org/docs/app/api-reference/next-config-js/headers
  
  - X-DNS-Prefetch-Control: Enables DNS prefetching for faster page loads
  - Strict-Transport-Security (HSTS): Forces HTTPS connections
  - X-Frame-Options: Prevents clickjacking attacks
  - Permissions-Policy: Restricts access to sensitive browser features
  - X-Content-Type-Options: Prevents MIME type sniffing
  - Referrer-Policy: Controls how much referrer information is shared
 */

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
