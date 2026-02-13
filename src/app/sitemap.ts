import type { MetadataRoute } from 'next';

const BASE = 'https://slowread.xyz';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      alternates: { languages: { 'zh-Hant': `${BASE}/zh` } },
    },
    {
      url: `${BASE}/zh`,
      lastModified: new Date(),
      alternates: { languages: { en: BASE } },
    },
    {
      url: `${BASE}/privacy`,
      lastModified: new Date(),
      alternates: { languages: { 'zh-Hant': `${BASE}/zh/privacy` } },
    },
    {
      url: `${BASE}/zh/privacy`,
      lastModified: new Date(),
      alternates: { languages: { en: `${BASE}/privacy` } },
    },
    {
      url: `${BASE}/terms`,
      lastModified: new Date(),
      alternates: { languages: { 'zh-Hant': `${BASE}/zh/terms` } },
    },
    {
      url: `${BASE}/zh/terms`,
      lastModified: new Date(),
      alternates: { languages: { en: `${BASE}/terms` } },
    },
  ];
}
