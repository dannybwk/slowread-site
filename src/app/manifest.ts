import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SlowRead',
    short_name: 'SlowRead',
    description: 'Daily passages from classic literature',
    start_url: '/',
    display: 'browser',
    background_color: '#F5F0E8',
    theme_color: '#F5F0E8',
    icons: [
      {
        src: '/images/favicon.svg',
        type: 'image/svg+xml',
        sizes: 'any',
      },
    ],
  };
}
