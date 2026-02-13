import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/privacy.html', destination: '/privacy', permanent: true },
      { source: '/terms.html', destination: '/terms', permanent: true },
      { source: '/zh/privacy.html', destination: '/zh/privacy', permanent: true },
      { source: '/zh/terms.html', destination: '/zh/terms', permanent: true },
    ];
  },
};

export default nextConfig;
