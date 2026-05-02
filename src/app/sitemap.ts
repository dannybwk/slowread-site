import type { MetadataRoute } from 'next';

const BASE = 'https://slowread.xyz';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      alternates: { languages: { 'zh-Hant': `${BASE}/zh`, ja: `${BASE}/ja` } },
    },
    {
      url: `${BASE}/zh`,
      lastModified: new Date(),
      alternates: { languages: { en: BASE, ja: `${BASE}/ja` } },
    },
    {
      url: `${BASE}/ja`,
      lastModified: new Date(),
      alternates: { languages: { en: BASE, 'zh-Hant': `${BASE}/zh` } },
    },
    {
      url: `${BASE}/privacy`,
      lastModified: new Date(),
      alternates: { languages: { 'zh-Hant': `${BASE}/zh/privacy`, ja: `${BASE}/ja/privacy` } },
    },
    {
      url: `${BASE}/zh/privacy`,
      lastModified: new Date(),
      alternates: { languages: { en: `${BASE}/privacy`, ja: `${BASE}/ja/privacy` } },
    },
    {
      url: `${BASE}/ja/privacy`,
      lastModified: new Date(),
      alternates: { languages: { en: `${BASE}/privacy`, 'zh-Hant': `${BASE}/zh/privacy` } },
    },
    {
      url: `${BASE}/terms`,
      lastModified: new Date(),
      alternates: { languages: { 'zh-Hant': `${BASE}/zh/terms`, ja: `${BASE}/ja/terms` } },
    },
    {
      url: `${BASE}/zh/terms`,
      lastModified: new Date(),
      alternates: { languages: { en: `${BASE}/terms`, ja: `${BASE}/ja/terms` } },
    },
    {
      url: `${BASE}/ja/terms`,
      lastModified: new Date(),
      alternates: { languages: { en: `${BASE}/terms`, 'zh-Hant': `${BASE}/zh/terms` } },
    },
    {
      url: `${BASE}/faq`,
      lastModified: new Date(),
      alternates: { languages: { 'zh-Hant': `${BASE}/zh/faq`, ja: `${BASE}/ja/faq` } },
    },
    {
      url: `${BASE}/zh/faq`,
      lastModified: new Date(),
      alternates: { languages: { en: `${BASE}/faq`, ja: `${BASE}/ja/faq` } },
    },
    {
      url: `${BASE}/ja/faq`,
      lastModified: new Date(),
      alternates: { languages: { en: `${BASE}/faq`, 'zh-Hant': `${BASE}/zh/faq` } },
    },
    {
      url: `${BASE}/delete-account`,
      lastModified: new Date(),
      alternates: { languages: { 'zh-Hant': `${BASE}/zh/delete-account`, ja: `${BASE}/ja/delete-account` } },
    },
    {
      url: `${BASE}/zh/delete-account`,
      lastModified: new Date(),
      alternates: { languages: { en: `${BASE}/delete-account`, ja: `${BASE}/ja/delete-account` } },
    },
    {
      url: `${BASE}/ja/delete-account`,
      lastModified: new Date(),
      alternates: { languages: { en: `${BASE}/delete-account`, 'zh-Hant': `${BASE}/zh/delete-account` } },
    },
    {
      url: `${BASE}/blog`,
      lastModified: new Date(),
      alternates: { languages: { 'zh-Hant': `${BASE}/zh/blog`, ja: `${BASE}/ja/blog` } },
    },
    {
      url: `${BASE}/zh/blog`,
      lastModified: new Date(),
      alternates: { languages: { en: `${BASE}/blog`, ja: `${BASE}/ja/blog` } },
    },
    {
      url: `${BASE}/ja/blog`,
      lastModified: new Date(),
      alternates: { languages: { en: `${BASE}/blog`, 'zh-Hant': `${BASE}/zh/blog` } },
    },
    {
      url: `${BASE}/blog/how-to-read-meditations-daily`,
      lastModified: new Date('2026-04-23'),
    },
    {
      url: `${BASE}/zh/blog/hong-lou-meng-262-days`,
      lastModified: new Date('2026-04-23'),
    },
    {
      url: `${BASE}/ja/blog/kokoro-slow-reading`,
      lastModified: new Date('2026-04-23'),
    },
  ];
}
