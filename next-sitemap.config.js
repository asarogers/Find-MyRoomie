/** @type {import('next-sitemap').IConfig} */
const cityList = require('./src/components/_data/cities.json');

module.exports = {
  siteUrl: 'https://findmyroomy.com',
  generateRobotsTxt: true,
  exclude: ['/api/*'],

  // Inject custom dynamic routes
  additionalPaths: async (config) => {
    const paths = [];

    for (const city of cityList) {
      paths.push({ loc: `/apartments/${city.slug}` });
      paths.push({ loc: `/roommates/${city.slug}` });
      paths.push({ loc: `/pets/${city.slug}` });
    }

    return paths;
  },
};
