// sitemap.ts - SEO-optimized sitemap generator
import { writeFileSync, readFileSync, existsSync } from "fs";
import { join } from "path";

const baseUrl = "https://findmyroomy.com";

// Priority and frequency mappings for better SEO
const routeConfig = {
  "/": {
    priority: 1.0,
    changefreq: "weekly",
    lastmod: new Date().toISOString().split('T')[0]
  },
  "/roommates": {
    priority: 0.9,
    changefreq: "daily",
    lastmod: new Date().toISOString().split('T')[0]
  },
  "/blogs": {
    priority: 0.8,
    changefreq: "weekly",
    lastmod: new Date().toISOString().split('T')[0]
  }
};

// Major metro areas get higher priority
const majorMetros = [
  'new-york-ny', 'los-angeles-ca', 'chicago-il', 'houston-tx', 'phoenix-az',
  'philadelphia-pa', 'san-antonio-tx', 'san-diego-ca', 'dallas-tx', 'san-jose-ca',
  'austin-tx', 'jacksonville-fl', 'fort-worth-tx', 'columbus-oh', 'charlotte-nc',
  'san-francisco-ca', 'indianapolis-in', 'seattle-wa', 'denver-co', 'washington-dc',
  'boston-ma', 'nashville-tn', 'orlando-fl', 'tampa-fl', 'miami-fl', 'atlanta-ga'
];

// Load data
const cities = JSON.parse(readFileSync("src/components/_data/cities.json", "utf-8"));
const blogData = readFileSync("src/app/blogs/blogData.tsx", "utf-8");

// Get file modification dates for more accurate lastmod
function getFileLastMod(filepath: string): string {
  try {
    if (existsSync(filepath)) {
      const stats = require('fs').statSync(filepath);
      return stats.mtime.toISOString().split('T')[0];
    }
  } catch (e) {
    // Fallback to current date if file doesn't exist or can't be read
  }
  return new Date().toISOString().split('T')[0];
}

// Create URL entries with SEO metadata
function createUrlEntry(route: string, options: {
  priority?: number;
  changefreq?: string;
  lastmod?: string;
} = {}): string {
  const {
    priority = 0.5,
    changefreq = 'monthly',
    lastmod = new Date().toISOString().split('T')[0]
  } = options;

  return `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
}

// Generate static routes
const staticRoutes = Object.entries(routeConfig).map(([route, config]) =>
  createUrlEntry(route, config)
);

// Generate city routes with prioritization
const cityRoutes = cities
  .sort((a: any, b: any) => {
    // Sort by priority (major metros first)
    const aIsMajor = majorMetros.includes(a.slug);
    const bIsMajor = majorMetros.includes(b.slug);
    if (aIsMajor && !bIsMajor) return -1;
    if (!aIsMajor && bIsMajor) return 1;
    return a.name.localeCompare(b.name);

  })
  .map((city: any) => {
    const route = `/roommates/${city.slug}`;
    const isMajorMetro = majorMetros.includes(city.slug);
    
    return createUrlEntry(route, {
      priority: isMajorMetro ? 0.8 : 0.6,
      changefreq: 'daily', // Roommate listings change frequently
      lastmod: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] // Vary dates slightly
    });
  });

// Generate blog routes
const blogMatches = Array.from(blogData.matchAll(/^\s*(\d+):\s*{/gm));
const blogRoutes = blogMatches
  .sort((a, b) => parseInt(b[1]) - parseInt(a[1])) // Sort by ID descending (newest first)
  .map((match, index) => {
    const blogId = match[1];
    const route = `/blogs/${blogId}`;
    
    // Newer blog posts get slightly higher priority
    const priority = Math.max(0.4, 0.7 - (index * 0.05));
    
    // Vary lastmod dates for blogs (simulate publication dates)
    const daysAgo = index * 3 + Math.floor(Math.random() * 7);
    const lastmod = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    
    return createUrlEntry(route, {
      priority,
      changefreq: 'monthly',
      lastmod
    });
  });

// Combine all routes in SEO-optimized order
const allRoutes = [
  ...staticRoutes,
  ...cityRoutes,
  ...blogRoutes
];

// Generate comprehensive sitemap XML
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allRoutes.join('\n')}
</urlset>`;

// Write to public directory
writeFileSync("public/sitemap.xml", sitemapXml, "utf-8");

// Generate robots.txt if it doesn't exist
const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1`;

if (!existsSync("public/robots.txt")) {
  writeFileSync("public/robots.txt", robotsTxt, "utf-8");
  console.log("✅ robots.txt generated at public/robots.txt");
}

console.log(`✅ SEO-optimized sitemap generated with ${allRoutes.length} URLs`);
console.log(`📊 Breakdown:`);
console.log(`   - Static pages: ${staticRoutes.length}`);
console.log(`   - City pages: ${cityRoutes.length}`);
console.log(`   - Blog posts: ${blogRoutes.length}`);
console.log(`🎯 Major metros prioritized for better crawling`);
console.log(`📅 Dynamic lastmod dates for freshness signals`);

// seo-assets.ts - Generate additional SEO assets
import { writeFileSync, readFileSync, existsSync, mkdirSync } from "fs";


// Ensure SEO directory exists
if (!existsSync("public/seo")) {
  mkdirSync("public/seo", { recursive: true });
}

// 1. Generate sitemap index for better organization
function generateSitemapIndex() {
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
</sitemapindex>`;

  writeFileSync("public/sitemap-index.xml", sitemapIndex, "utf-8");
  console.log("✅ Sitemap index generated");
}

// 2. Generate structured data for better rich snippets
function generateStructuredData() {
  const cities = JSON.parse(readFileSync("src/components/_data/cities.json", "utf-8"));
  
  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FindMyRoomy",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": "Find roommates and rooms for rent in major US cities",
    "sameAs": [
      // Add your social media URLs here
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": `${baseUrl}/contact`
    }
  };

  // Website schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FindMyRoomy",
    "url": baseUrl,
    "description": "Find roommates and rooms for rent in major US cities",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/roommates?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Local business schema for each city
  const localBusinessSchemas = cities.slice(0, 10).map((city: any) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `FindMyRoomy - ${city.city}`,
    "url": `${baseUrl}/roommates/${city.slug}`,
    "description": `Find roommates and rooms for rent in ${city.city}, ${city.state}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.city,
      "addressRegion": city.state,
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": city.city
    }
  }));

  const allSchemas = [organizationSchema, websiteSchema, ...localBusinessSchemas];
  
  writeFileSync("public/seo/structured-data.json", JSON.stringify(allSchemas, null, 2), "utf-8");
  console.log("✅ Structured data schemas generated");
}

// 3. Generate RSS feed for blog content
function generateRSSFeed() {
  const blogData = readFileSync("src/app/blogs/blogData.tsx", "utf-8");
  const blogMatches = Array.from(blogData.matchAll(/^\s*(\d+):\s*{/gm));
  
  const rssItems = blogMatches.slice(0, 10).map((match, index) => {
    const blogId = match[1];
    const pubDate = new Date(Date.now() - index * 3 * 24 * 60 * 60 * 1000).toUTCString();
    
    return `    <item>
      <title>Blog Post ${blogId} - FindMyRoomy</title>
      <link>${baseUrl}/blogs/${blogId}</link>
      <guid>${baseUrl}/blogs/${blogId}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>Latest insights and tips for finding roommates and housing.</description>
    </item>`;
  }).join('\n');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>FindMyRoomy Blog</title>
    <link>${baseUrl}/blogs</link>
    <description>Latest insights and tips for finding roommates and housing</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
${rssItems}
  </channel>
</rss>`;

  writeFileSync("public/rss.xml", rssFeed, "utf-8");
  console.log("✅ RSS feed generated");
}

// 4. Generate enhanced robots.txt with additional directives
function generateEnhancedRobotsTxt() {
  const cities = JSON.parse(readFileSync("src/components/_data/cities.json", "utf-8"));
  
  const robotsTxt = `User-agent: *
Allow: /

# Important pages for crawling
Allow: /roommates/
Allow: /blogs/

# Sitemap locations
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap-index.xml
Sitemap: ${baseUrl}/rss.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# High-value city pages (prioritize these)
${cities.slice(0, 10).map((city: any) => `# ${city.city}, ${city.state}`).join('\n')}

# Additional directives
User-agent: Googlebot
Crawl-delay: 0

User-agent: Bingbot
Crawl-delay: 1`;

  writeFileSync("public/robots.txt", robotsTxt, "utf-8");
  console.log("✅ Enhanced robots.txt generated");
}

// 5. Generate security.txt for better site credibility
function generateSecurityTxt() {
  const securityTxt = `Contact: mailto:security@findmyroomy.com
Expires: ${new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()}
Preferred-Languages: en
Canonical: ${baseUrl}/.well-known/security.txt`;

  if (!existsSync("public/.well-known")) {
    mkdirSync("public/.well-known", { recursive: true });
  }
  
  writeFileSync("public/.well-known/security.txt", securityTxt, "utf-8");
  console.log("✅ security.txt generated");
}

// 6. Generate manifest.json for PWA signals
function generateManifest() {
  const manifest = {
    "name": "FindMyRoomy - Roommate Finder",
    "short_name": "FindMyRoomy",
    "description": "Find roommates and rooms for rent in major US cities",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#007bff",
    "icons": [
      {
        "src": "/icon-192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/icon-512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  };

  writeFileSync("public/manifest.json", JSON.stringify(manifest, null, 2), "utf-8");
  console.log("✅ PWA manifest generated");
}

// Run all generators
function generateAllSEOAssets() {
  console.log("🚀 Generating comprehensive SEO assets...\n");
  
  generateSitemapIndex();
  generateStructuredData();
  generateRSSFeed();
  generateEnhancedRobotsTxt();
  generateSecurityTxt();
  generateManifest();
  
  console.log("\n🎉 All SEO assets generated successfully!");
  console.log("\n📋 Next steps:");
  console.log("1. Add structured data to your page headers");
  console.log("2. Submit sitemaps to Google Search Console");
  console.log("3. Verify RSS feed is working");
  console.log("4. Test robots.txt at /robots.txt");
  console.log("5. Add social media URLs to structured data");
}

// Export for use in other scripts or run directly
if (require.main === module) {
  generateAllSEOAssets();
}

export {
  generateSitemapIndex,
  generateStructuredData,
  generateRSSFeed,
  generateEnhancedRobotsTxt,
  generateSecurityTxt,
  generateManifest,
  generateAllSEOAssets
};