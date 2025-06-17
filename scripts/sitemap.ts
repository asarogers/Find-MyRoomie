// sitemap.ts (run with tsx or node+ts-node if needed)
import { writeFileSync, readFileSync } from "fs";
import { join } from "path";

const baseUrl = "https://findmyroomy.com";
const cities = JSON.parse(readFileSync("src/components/_data/cities.json", "utf-8"));
const blogData = readFileSync("src/app/blogs/blogData.tsx", "utf-8");

// Extract city slugs
const cityPaths = cities.map((c: any) => `/roommates/${c.slug}`);

// Extract blog IDs (basic regex to match keys like `1:` or `5:`)
const blogPaths = Array.from(blogData.matchAll(/^\s*(\d+):\s*{/gm)).map(
  (m) => `/blogs/${m[1]}`
);

// Combine all static routes
const staticRoutes = ["/", "/blogs", "/roommates"];
const allRoutes = [...staticRoutes, ...cityPaths, ...blogPaths];

// Generate sitemap XML
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route}</loc>
  </url>`
  )
  .join("\n")}
</urlset>`;

// Write to public directory
writeFileSync("public/sitemap.xml", sitemapXml, "utf-8");
console.log("✅ Sitemap generated at public/sitemap.xml");
