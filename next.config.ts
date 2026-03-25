import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://connect.facebook.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://www.facebook.com https://www.google-analytics.com; font-src 'self'; connect-src 'self' https://*.supabase.co https://www.google-analytics.com https://region1.google-analytics.com; frame-src 'none';",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/privacy.html', destination: '/privacy', permanent: true },
      { source: '/terms.html', destination: '/terms', permanent: true },
      { source: '/zh/privacy.html', destination: '/zh/privacy', permanent: true },
      { source: '/zh/terms.html', destination: '/zh/terms', permanent: true },
      { source: '/ja/privacy.html', destination: '/ja/privacy', permanent: true },
      { source: '/ja/terms.html', destination: '/ja/terms', permanent: true },
    ];
  },
};

export default nextConfig;
