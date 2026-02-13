import type { Metadata } from 'next';
import { Literata, IBM_Plex_Mono, Noto_Serif_TC } from 'next/font/google';
import '@/styles/globals.css';

const literata = Literata({
  subsets: ['latin'],
  variable: '--font-literata',
  display: 'swap',
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
});

const notoSerifTC = Noto_Serif_TC({
  subsets: ['latin'],
  variable: '--font-noto-serif-tc',
  display: 'swap',
  weight: ['300', '400', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://slowread.xyz'),
  title: { default: 'SlowRead', template: '%s — SlowRead' },
  description:
    'Daily passages from classic literature with AI-powered reading companion. Bilingual reading, smart scheduling, and reading streaks. Free to start.',
  icons: { icon: '/images/favicon.svg' },
  openGraph: {
    siteName: 'SlowRead',
    type: 'website',
    locale: 'en',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'SlowRead — Daily classic literature reading' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: '/',
    languages: { 'zh-Hant': '/zh' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${literata.variable} ${ibmPlexMono.variable} ${notoSerifTC.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
