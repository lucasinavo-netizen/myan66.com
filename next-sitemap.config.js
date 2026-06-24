/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://myan66.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: ['/go/'] },
    ],
  },
  alternateRefs: [
    { href: 'https://myan66.com/my', hreflang: 'my' },
    { href: 'https://myan66.com/en', hreflang: 'en' },
  ],
  transform: async (config, path) => {
    // Higher priority for important pages
    const highPriority = [
      '/',
      '/joy-shan-koe-mee',
      '/m9-shan-koe-mee-login',
      '/shan-koe-mee-apk-download',
      '/m9-shan-koe-mee-apk',
    ];
    const isHigh = highPriority.some(p => path.endsWith(p));
    return {
      loc: path,
      changefreq: isHigh ? 'daily' : 'weekly',
      priority: isHigh ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
