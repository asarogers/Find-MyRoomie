// const fs = require("fs");
// const path = require("path");
// const { createClient } = require("@sanity/client");
// require("dotenv").config();

// // ========== Setup ==========
// const baseUrl = "https://findmyroomy.com";
// const outputPath = path.join(__dirname, "../public/sitemap.xml");

// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   apiVersion: "2023-05-03",
//   useCdn: false,
// });

// // ========== Static Pages ==========
// const staticRoutes = [
//   { path: "/", priority: 1.0, changefreq: "weekly" },
//   { path: "/roommates", priority: 0.9, changefreq: "daily" },
//   { path: "/blogs", priority: 0.8, changefreq: "weekly" },
//   { path: "/apartments", priority: 0.9, changefreq: "daily" },
//   { path: "/careers", priority: 0.5, changefreq: "monthly" },
//   { path: "/cookies-policy", priority: 0.3, changefreq: "yearly" },
//   { path: "/downloadApp", priority: 0.6, changefreq: "monthly" },
//   { path: "/pets", priority: 0.7, changefreq: "weekly" },
//   { path: "/privacy", priority: 0.4, changefreq: "yearly" },
// ];

// // ========== Load City Data ==========
// const cities = JSON.parse(
//   fs.readFileSync(path.join(__dirname, "../src/components/_data/cities.json"), "utf-8")
// );

// // Prioritize major metro slugs
// const majorMetros = [
//   "new-york-ny", "los-angeles-ca", "chicago-il", "houston-tx", "phoenix-az",
//   "philadelphia-pa", "san-antonio-tx", "san-diego-ca", "dallas-tx", "san-jose-ca",
//   "austin-tx", "jacksonville-fl", "fort-worth-tx", "columbus-oh", "charlotte-nc",
//   "san-francisco-ca", "indianapolis-in", "seattle-wa", "denver-co", "washington-dc",
//   "boston-ma", "nashville-tn", "orlando-fl", "tampa-fl", "miami-fl", "atlanta-ga"
// ];

// // ========== Generate <url> Entry ==========
// function createUrl({ path, lastmod = null, changefreq = "monthly", priority = 0.5 }) {
//   const mod = lastmod || new Date().toISOString().split("T")[0];
//   return `  <url>
//     <loc>${baseUrl}${path}</loc>
//     <lastmod>${mod}</lastmod>
//     <changefreq>${changefreq}</changefreq>
//     <priority>${priority.toFixed(1)}</priority>
//   </url>`;
// }

// // ========== Main Function ==========
// async function generateSitemap() {
//   const today = new Date().toISOString().split("T")[0];

//   try {
//     // Fetch dynamic content from Sanity
//     const [blogPosts, apartments, pets] = await Promise.all([
//       // Blog posts
//       client.fetch(`*[_type == "blog"] | order(_updatedAt desc){
//         "slug": slug.current,
//         _updatedAt
//       }`),
      
//       // Apartments (assuming you have an apartments content type)
//       client.fetch(`*[_type == "apartment"] | order(_updatedAt desc){
//         "slug": slug.current,
//         _updatedAt
//       }`).catch(() => []), // Fallback to empty array if no apartments content type
      
//       // Pets (assuming you have a pets content type)
//       client.fetch(`*[_type == "pet"] | order(_updatedAt desc){
//         "slug": slug.current,
//         _updatedAt
//       }`).catch(() => []) // Fallback to empty array if no pets content type
//     ]);

//     // Blog routes
//     const blogRoutes = blogPosts.map((post, i) =>
//       createUrl({
//         path: `/blogs/${post.slug}`,
//         lastmod: post._updatedAt?.split("T")[0],
//         changefreq: "monthly",
//         priority: Math.max(0.4, 0.8 - i * 0.02), // More gradual priority decrease
//       })
//     );

//     // Apartment routes (city-based)
//     const apartmentRoutes = cities.map((city) => {
//       const isMajor = majorMetros.includes(city.slug);
//       const lastmod = new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000)
//         .toISOString()
//         .split("T")[0];
      
//       return createUrl({
//         path: `/apartments/${city.slug}`,
//         lastmod,
//         changefreq: "daily",
//         priority: isMajor ? 0.8 : 0.6,
//       });
//     });

//     // Individual apartment listings (if you have them)
//     const individualApartmentRoutes = apartments.map((apartment, i) =>
//       createUrl({
//         path: `/apartments/listing/${apartment.slug}`, // Adjust path as needed
//         lastmod: apartment._updatedAt?.split("T")[0],
//         changefreq: "weekly",
//         priority: Math.max(0.3, 0.6 - i * 0.01),
//       })
//     );

//     // Pet routes (city-based)
//     const petCityRoutes = cities.map((city) => {
//       const isMajor = majorMetros.includes(city.slug);
//       const lastmod = new Date(Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000)
//         .toISOString()
//         .split("T")[0];
      
//       return createUrl({
//         path: `/pets/${city.slug}`,
//         lastmod,
//         changefreq: "weekly",
//         priority: isMajor ? 0.7 : 0.5,
//       });
//     });

//     // Individual pet listings (if you have them)
//     const individualPetRoutes = pets.map((pet, i) =>
//       createUrl({
//         path: `/pets/listing/${pet.slug}`, // Adjust path as needed
//         lastmod: pet._updatedAt?.split("T")[0],
//         changefreq: "weekly",
//         priority: Math.max(0.3, 0.5 - i * 0.01),
//       })
//     );

//     // Roommate routes (city-based)
//     const roommateRoutes = cities.map((city) => {
//       const isMajor = majorMetros.includes(city.slug);
//       const lastmod = new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000)
//         .toISOString()
//         .split("T")[0];
      
//       return createUrl({
//         path: `/roommates/${city.slug}`,
//         lastmod,
//         changefreq: "daily",
//         priority: isMajor ? 0.8 : 0.6,
//       });
//     });

//     // Static routes
//     const staticXml = staticRoutes.map((r) =>
//       createUrl({
//         path: r.path,
//         priority: r.priority,
//         changefreq: r.changefreq,
//         lastmod: today,
//       })
//     );

//     // Combine all routes
//     const allRoutes = [
//       ...staticXml,
//       ...roommateRoutes,
//       ...apartmentRoutes,
//       ...individualApartmentRoutes,
//       ...petCityRoutes,
//       ...individualPetRoutes,
//       ...blogRoutes,
//     ];

//     // Check for sitemap size limit (Google recommends max 50,000 URLs)
//     if (allRoutes.length > 50000) {
//       console.warn(`⚠️  Warning: Sitemap has ${allRoutes.length} URLs (>50,000). Consider using sitemap index files.`);
//     }

//     // Generate sitemap XML
//     const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
// ${allRoutes.join("\n")}
// </urlset>`;

//     // Ensure output directory exists
//     const publicDir = path.join(__dirname, "../public");
//     if (!fs.existsSync(publicDir)) {
//       fs.mkdirSync(publicDir, { recursive: true });
//     }

//     // Write sitemap file
//     fs.writeFileSync(outputPath, sitemapXml, "utf-8");

//     // Log success
//     console.log(`✅ Sitemap generated at: ${outputPath}`);
//     console.log(`🔗 Total URLs: ${allRoutes.length}`);
//     console.log(`📊 Breakdown:`);
//     console.log(`   - Static pages: ${staticXml.length}`);
//     console.log(`   - Roommate pages: ${roommateRoutes.length}`);
//     console.log(`   - Apartment city pages: ${apartmentRoutes.length}`);
//     console.log(`   - Individual apartments: ${individualApartmentRoutes.length}`);
//     console.log(`   - Pet city pages: ${petCityRoutes.length}`);
//     console.log(`   - Individual pets: ${individualPetRoutes.length}`);
//     console.log(`   - Blog posts: ${blogRoutes.length}`);

//   } catch (error) {
//     console.error("❌ Error generating sitemap:", error.message);
//     throw error;
//   }
// }

// // ========== Run ==========
// generateSitemap().catch((err) => {
//   console.error("❌ Fatal error:", err.message);
//   process.exit(1);
// });