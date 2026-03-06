import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/ja',
    languages: { en: '/', 'zh-Hant': '/zh' },
  },
};

export default function JaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
