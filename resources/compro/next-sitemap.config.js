/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://yourdomain.com", // 🔁 replace with your actual domain
  generateRobotsTxt: true, // ⬅️ auto-creates robots.txt
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
};
