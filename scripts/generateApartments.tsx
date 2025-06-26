// import fs from 'fs';
// import path from 'path';
// import cities from '../src/components/_data/cities.json';

// const outputDir = path.join(__dirname, '../src/app/roommates'); // Adjust if needed

// function createHTML(city) {
//   return `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <title>Find Roommates in ${city.name} | Verified & Pet-Friendly – MyRoomie</title>
//   <meta name="description" content="Find verified roommates in ${city.name} who match your lifestyle. Pet-friendly options, zero scams, and shared apartment listings.">
//   <link rel="canonical" href="https://findmyroomy.com/roommates/${city.slug}" />
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// </head>
// <body>
//   <main>
//     <h1>Find Roommates in ${city.name}</h1>
//     <p>Discover safe, verified roommates in ${city.name} who match your vibe and lifestyle.</p>
//     <ul>
//       <li>Verified roommate profiles with lifestyle compatibility</li>
//       <li>Pet-friendly and budget-aware options</li>
//       <li>Zero scam listings, no hidden fees</li>
//     </ul>
//   </main>
// </body>
// </html>
// `;
// }

// function ensureDirExists(dir) {
//   if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
// }

// function generatePages() {
//   ensureDirExists(outputDir);

//   for (const city of cities) {
//     const cityDir = path.join(outputDir, city.slug);
//     ensureDirExists(cityDir);

//     const filePath = path.join(cityDir, 'index.html');
//     const html = createHTML(city);
//     fs.writeFileSync(filePath, html, 'utf-8');
//     // console.log(`Generated: /roommates/${city.slug}/index.html`);
//   }
// }

// generatePages();
