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
  ];
}
