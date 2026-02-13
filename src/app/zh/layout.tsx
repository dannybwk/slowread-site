import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/zh',
    languages: { en: '/' },
  },
};

export default function ZhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
