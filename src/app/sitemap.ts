import type { MetadataRoute } from 'next';

const BASE = 'https://slowread.xyz';

// Real last-modified dates (from git history). Avoid `new Date()` here: a
// build-time "now" stamps every URL as freshly modified on each regeneration,
// which trains Google to ignore <lastmod> as noise.
const HOME = new Date('2026-04-23');
const PRIVACY = new Date('2026-05-08');
const TERMS = new Date('2026-03-06');
const FAQ = new Date('2026-04-23');
const DELETE_ACCOUNT = new Date('2026-05-03');
const BLOG = new Date('2026-04-23');
const POST = new Date('2026-04-23');
const TAO_TE_CHING = new Date('2026-06-27');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: HOME,
      alternates: { languages: { 'zh-Hant': `${BASE}/zh`, ja: `${BASE}/ja` } },
    },
    {
      url: `${BASE}/zh`,
      lastModified: HOME,
      alternates: { languages: { en: BASE, ja: `${BASE}/ja` } },
    },
    {
      url: `${BASE}/ja`,
      lastModified: HOME,
      alternates: { languages: { en: BASE, 'zh-Hant': `${BASE}/zh` } },
    },
    {
      url: `${BASE}/privacy`,
      lastModified: PRIVACY,
      alternates: { languages: { 'zh-Hant': `${BASE}/zh/privacy`, ja: `${BASE}/ja/privacy` } },
    },
    {
      url: `${BASE}/zh/privacy`,
      lastModified: PRIVACY,
      alternates: { languages: { en: `${BASE}/privacy`, ja: `${BASE}/ja/privacy` } },
    },
    {
      url: `${BASE}/ja/privacy`,
      lastModified: PRIVACY,
      alternates: { languages: { en: `${BASE}/privacy`, 'zh-Hant': `${BASE}/zh/privacy` } },
    },
    {
      url: `${BASE}/terms`,
      lastModified: TERMS,
      alternates: { languages: { 'zh-Hant': `${BASE}/zh/terms`, ja: `${BASE}/ja/terms` } },
    },
    {
      url: `${BASE}/zh/terms`,
      lastModified: TERMS,
      alternates: { languages: { en: `${BASE}/terms`, ja: `${BASE}/ja/terms` } },
    },
    {
      url: `${BASE}/ja/terms`,
      lastModified: TERMS,
      alternates: { languages: { en: `${BASE}/terms`, 'zh-Hant': `${BASE}/zh/terms` } },
    },
    {
      url: `${BASE}/faq`,
      lastModified: FAQ,
      alternates: { languages: { 'zh-Hant': `${BASE}/zh/faq`, ja: `${BASE}/ja/faq` } },
    },
    {
      url: `${BASE}/zh/faq`,
      lastModified: FAQ,
      alternates: { languages: { en: `${BASE}/faq`, ja: `${BASE}/ja/faq` } },
    },
    {
      url: `${BASE}/ja/faq`,
      lastModified: FAQ,
      alternates: { languages: { en: `${BASE}/faq`, 'zh-Hant': `${BASE}/zh/faq` } },
    },
    {
      url: `${BASE}/delete-account`,
      lastModified: DELETE_ACCOUNT,
      alternates: { languages: { 'zh-Hant': `${BASE}/zh/delete-account`, ja: `${BASE}/ja/delete-account` } },
    },
    {
      url: `${BASE}/zh/delete-account`,
      lastModified: DELETE_ACCOUNT,
      alternates: { languages: { en: `${BASE}/delete-account`, ja: `${BASE}/ja/delete-account` } },
    },
    {
      url: `${BASE}/ja/delete-account`,
      lastModified: DELETE_ACCOUNT,
      alternates: { languages: { en: `${BASE}/delete-account`, 'zh-Hant': `${BASE}/zh/delete-account` } },
    },
    {
      url: `${BASE}/blog`,
      lastModified: BLOG,
      alternates: { languages: { 'zh-Hant': `${BASE}/zh/blog`, ja: `${BASE}/ja/blog` } },
    },
    {
      url: `${BASE}/zh/blog`,
      lastModified: BLOG,
      alternates: { languages: { en: `${BASE}/blog`, ja: `${BASE}/ja/blog` } },
    },
    {
      url: `${BASE}/ja/blog`,
      lastModified: BLOG,
      alternates: { languages: { en: `${BASE}/blog`, 'zh-Hant': `${BASE}/zh/blog` } },
    },
    {
      url: `${BASE}/blog/how-to-read-tao-te-ching`,
      lastModified: TAO_TE_CHING,
      alternates: {
        languages: {
          'zh-Hant': `${BASE}/zh/blog/dao-de-jing-81-days`,
          ja: `${BASE}/ja/blog/roshi-tao-te-ching`,
        },
      },
    },
    {
      url: `${BASE}/zh/blog/dao-de-jing-81-days`,
      lastModified: TAO_TE_CHING,
      alternates: {
        languages: {
          en: `${BASE}/blog/how-to-read-tao-te-ching`,
          ja: `${BASE}/ja/blog/roshi-tao-te-ching`,
        },
      },
    },
    {
      url: `${BASE}/ja/blog/roshi-tao-te-ching`,
      lastModified: TAO_TE_CHING,
      alternates: {
        languages: {
          en: `${BASE}/blog/how-to-read-tao-te-ching`,
          'zh-Hant': `${BASE}/zh/blog/dao-de-jing-81-days`,
        },
      },
    },
    {
      url: `${BASE}/blog/how-to-read-meditations-daily`,
      lastModified: POST,
    },
    {
      url: `${BASE}/zh/blog/hong-lou-meng-262-days`,
      lastModified: POST,
    },
    {
      url: `${BASE}/ja/blog/kokoro-slow-reading`,
      lastModified: POST,
    },
  ];
}
