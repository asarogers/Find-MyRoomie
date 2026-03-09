// scripts/generate-og-images.js
// Generates all OG images for findmyroomy.com as 1200x630 JPGs.
// Uses Sharp (already a Next.js dependency) to rasterize SVG templates.
//
// Run: node scripts/generate-og-images.js
//
// Output:
//   public/og-preview.jpg                         (default site)
//   public/social-preview.png                     (Twitter card)
//   public/og-images/blog-default.jpg             (all blog posts)
//   public/og-images/roommates-{slug}.jpg         (77 city roommate pages)
//   public/og-images/apartment-{slug}.jpg         (77 city apartment pages)
//   public/og-images/pets-{slug}.jpg              (77 city pet pages)
//   public/og-images/neighborhood-{slug}.jpg      (neighborhood guide pages)

const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const cities = require('../src/components/_data/cities.json')

// Load neighborhood slugs via require — strip TS and pull the export
// neighborhoods.ts exports getAllNeighborhoods() but we need plain JS slugs.
// Easier: hardcode the 6 current slugs (update when new neighborhoods added).
const neighborhoodSlugs = [
  { slug: 'soma-san-francisco',           neighborhood: 'SoMa',            city: 'San Francisco' },
  { slug: 'mission-district-san-francisco', neighborhood: 'Mission District', city: 'San Francisco' },
  { slug: 'hayes-valley-san-francisco',   neighborhood: 'Hayes Valley',     city: 'San Francisco' },
  { slug: 'rockridge-oakland',            neighborhood: 'Rockridge',        city: 'Oakland' },
  { slug: 'temescal-oakland',             neighborhood: 'Temescal',         city: 'Oakland' },
  { slug: 'north-san-jose',               neighborhood: 'North San Jose',   city: 'San Jose' },
]

// ── Brand tokens ─────────────────────────────────────────────────────────────
const BG        = '#FDFBF7'   // cream background
const BLACK     = '#111111'
const GREEN     = '#16A34A'   // green-600
const GREEN_LIGHT = '#DCFCE7' // green-100
const GRAY      = '#6B7280'   // gray-500
const WHITE     = '#FFFFFF'

const W = 1200
const H = 630

// ── SVG helpers ───────────────────────────────────────────────────────────────

/**
 * Escape special XML characters in text content so the SVG stays valid.
 */
function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/**
 * Wrap text into multiple <tspan> lines, each max `maxChars` characters.
 * Returns an array of { text, dy } objects for SVG rendering.
 */
function wrapText(text, maxChars) {
  const words = text.split(' ')
  const lines = []
  let current = ''
  for (const word of words) {
    if ((current + ' ' + word).trim().length > maxChars) {
      if (current) lines.push(current.trim())
      current = word
    } else {
      current = (current + ' ' + word).trim()
    }
  }
  if (current) lines.push(current.trim())
  return lines
}

// ── Template: Default site / Twitter card ────────────────────────────────────

function svgDefault({ tagline = 'Free Roommate Finder — No Paywall', badge = 'Beta open · Free forever' } = {}) {
  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F0FDF4"/>
      <stop offset="100%" stop-color="${BG}"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- Top accent bar -->
  <rect width="${W}" height="8" fill="${GREEN}"/>

  <!-- Green badge -->
  <rect x="60" y="60" width="320" height="44" rx="22" fill="${GREEN_LIGHT}" stroke="#BBF7D0" stroke-width="1.5"/>
  <circle cx="88" cy="82" r="7" fill="${GREEN}"/>
  <text x="104" y="88" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="600" fill="${GREEN}">${esc(badge)}</text>

  <!-- Logo wordmark -->
  <text x="60" y="210" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="800" fill="${BLACK}" letter-spacing="-2">Find<tspan fill="${GREEN}">My</tspan>Roomy</text>

  <!-- Tagline -->
  <text x="60" y="278" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="400" fill="${GRAY}">${esc(tagline)}</text>

  <!-- Divider -->
  <rect x="60" y="320" width="120" height="5" rx="2.5" fill="${GREEN}"/>

  <!-- Feature bullets -->
  <circle cx="76" cy="390" r="6" fill="${GREEN}"/>
  <text x="96" y="396" font-family="system-ui, -apple-system, sans-serif" font-size="24" fill="${BLACK}">Verified profiles · No fake listings</text>

  <circle cx="76" cy="440" r="6" fill="${GREEN}"/>
  <text x="96" y="446" font-family="system-ui, -apple-system, sans-serif" font-size="24" fill="${BLACK}">Free messaging — no $29.99/mo paywall</text>

  <circle cx="76" cy="490" r="6" fill="${GREEN}"/>
  <text x="96" y="496" font-family="system-ui, -apple-system, sans-serif" font-size="24" fill="${BLACK}">Bay Area · Texas · Florida · Nationwide</text>

  <!-- URL -->
  <text x="60" y="580" font-family="system-ui, -apple-system, sans-serif" font-size="22" fill="${GRAY}" font-weight="500">findmyroomy.com</text>

  <!-- Right illustration: large circle accent -->
  <circle cx="980" cy="315" r="240" fill="${GREEN}" opacity="0.07"/>
  <circle cx="980" cy="315" r="160" fill="${GREEN}" opacity="0.08"/>
  <circle cx="980" cy="315" r="80"  fill="${GREEN}" opacity="0.10"/>

  <!-- House icon (simplified) -->
  <polygon points="980,120 1100,220 860,220" fill="${GREEN}" opacity="0.25"/>
  <rect x="920" y="220" width="120" height="90" rx="4" fill="${GREEN}" opacity="0.20"/>
  <rect x="960" y="255" width="40" height="55" rx="3" fill="${GREEN}" opacity="0.35"/>
</svg>`
}

// ── Template: City page (roommates / apartments / pets) ───────────────────────

function svgCity({ cityName, type = 'roommates', slug = '' }) {
  const typeConfig = {
    roommates: { label: 'Roommate Finder',   color: GREEN,    emoji: '🏠', sub: 'Find verified roommates · Free messaging always' },
    apartment: { label: 'Shared Apartments', color: '#2563EB', emoji: '🏢', sub: 'Split rent 30-50% · No credit card required' },
    pets:      { label: 'Pet-Friendly',      color: '#7C3AED', emoji: '🐾', sub: 'Dog & cat-friendly roommates · Verified listings' },
  }
  const cfg = typeConfig[type] || typeConfig.roommates
  const lines = wrapText(cityName, 22)
  const cityFontSize = cityName.length > 22 ? 60 : 72

  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F0FDF4"/>
      <stop offset="100%" stop-color="${BG}"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="8" fill="${cfg.color}"/>

  <!-- Type label badge -->
  <rect x="60" y="60" width="${cfg.label.length * 14 + 60}" height="44" rx="22" fill="${GREEN_LIGHT}" stroke="#BBF7D0" stroke-width="1.5"/>
  <text x="84" y="88" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700" fill="${cfg.color}">${esc(cfg.emoji)}  ${esc(cfg.label)}</text>

  <!-- "in" connector -->
  <text x="60" y="178" font-family="system-ui, -apple-system, sans-serif" font-size="32" fill="${GRAY}" font-weight="400">Roommates in</text>

  <!-- City name (wrapped) -->
  ${lines.map((line, i) =>
    `<text x="60" y="${240 + i * (cityFontSize + 8)}" font-family="system-ui, -apple-system, sans-serif" font-size="${cityFontSize}" font-weight="800" fill="${BLACK}" letter-spacing="-1">${esc(line)}</text>`
  ).join('\n  ')}

  <!-- Sub text -->
  <text x="60" y="${240 + lines.length * (cityFontSize + 8) + 20}" font-family="system-ui, -apple-system, sans-serif" font-size="26" fill="${GRAY}">${esc(cfg.sub)}</text>

  <!-- Divider -->
  <rect x="60" y="${240 + lines.length * (cityFontSize + 8) + 50}" width="100" height="5" rx="2.5" fill="${cfg.color}"/>

  <!-- Free badge -->
  <rect x="60" y="${240 + lines.length * (cityFontSize + 8) + 78}" width="280" height="50" rx="25" fill="${BLACK}"/>
  <text x="170" y="${240 + lines.length * (cityFontSize + 8) + 112}" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="700" fill="${WHITE}" text-anchor="middle">Free · No Credit Card</text>

  <!-- URL -->
  <text x="60" y="590" font-family="system-ui, -apple-system, sans-serif" font-size="20" fill="${GRAY}">findmyroomy.com/${type === 'roommates' ? 'roommates' : type === 'apartment' ? 'apartments' : 'pets'}/${esc(slug)}/</text>

  <!-- Right accent -->
  <circle cx="990" cy="315" r="250" fill="${cfg.color}" opacity="0.06"/>
  <circle cx="990" cy="315" r="170" fill="${cfg.color}" opacity="0.07"/>
  <circle cx="990" cy="315" r="90"  fill="${cfg.color}" opacity="0.09"/>
  <text x="990" y="340" font-family="system-ui, -apple-system, sans-serif" font-size="120" text-anchor="middle" opacity="0.18">${cfg.emoji}</text>
</svg>`
}

// ── Template: Blog post ───────────────────────────────────────────────────────

function svgBlog({ title = 'Roommate Guide', cityName = '', isAdvice = false } = {}) {
  const categoryLabel = isAdvice ? 'How-To Guide · 2026' : 'Free Roommate Finder'
  const lines = wrapText(title, 38)
  const fontSize = title.length > 60 ? 36 : title.length > 40 ? 42 : 48

  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F0FDF4"/>
      <stop offset="100%" stop-color="${BG}"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="8" fill="${GREEN}"/>

  <!-- Category badge -->
  <rect x="60" y="60" width="${categoryLabel.length * 13 + 40}" height="40" rx="20" fill="${GREEN_LIGHT}" stroke="#BBF7D0" stroke-width="1.5"/>
  <text x="80" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="600" fill="${GREEN}">${esc(categoryLabel)}</text>

  <!-- Blog title (wrapped) -->
  ${lines.map((line, i) =>
    `<text x="60" y="${160 + i * (fontSize + 10)}" font-family="system-ui, -apple-system, sans-serif" font-size="${fontSize}" font-weight="800" fill="${BLACK}" letter-spacing="-0.5">${esc(line)}</text>`
  ).join('\n  ')}

  <!-- Author + source -->
  <text x="60" y="${160 + lines.length * (fontSize + 10) + 30}" font-family="system-ui, -apple-system, sans-serif" font-size="22" fill="${GRAY}">By The MyRoomy Team · findmyroomy.com</text>

  <!-- Divider -->
  <rect x="60" y="${160 + lines.length * (fontSize + 10) + 60}" width="80" height="4" rx="2" fill="${GREEN}"/>

  <!-- Key points -->
  <circle cx="76" cy="${160 + lines.length * (fontSize + 10) + 110}" r="5" fill="${GREEN}"/>
  <text x="96" y="${160 + lines.length * (fontSize + 10) + 116}" font-family="system-ui, -apple-system, sans-serif" font-size="22" fill="${BLACK}">Free messaging — no paywall</text>

  <circle cx="76" cy="${160 + lines.length * (fontSize + 10) + 155}" r="5" fill="${GREEN}"/>
  <text x="96" y="${160 + lines.length * (fontSize + 10) + 161}" font-family="system-ui, -apple-system, sans-serif" font-size="22" fill="${BLACK}">Verified profiles · No scams</text>

  <!-- Logo bottom right -->
  <text x="1140" y="590" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700" fill="${GRAY}" text-anchor="end">FindMyRoomy</text>

  <!-- Right accent circle -->
  <circle cx="1000" cy="300" r="260" fill="${GREEN}" opacity="0.05"/>
  <circle cx="1000" cy="300" r="160" fill="${GREEN}" opacity="0.07"/>
  <text x="1000" y="330" font-family="system-ui, -apple-system, sans-serif" font-size="140" text-anchor="middle" opacity="0.12">📝</text>
</svg>`
}

// ── Template: Neighborhood guide ─────────────────────────────────────────────

function svgNeighborhood({ neighborhood, city, slug }) {
  const lines = wrapText(`${neighborhood}, ${city}`, 24)
  const nameFontSize = (neighborhood + city).length > 24 ? 56 : 66

  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F0FDF4"/>
      <stop offset="100%" stop-color="${BG}"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="8" fill="${GREEN}"/>

  <!-- Badge -->
  <rect x="60" y="60" width="280" height="40" rx="20" fill="${GREEN_LIGHT}" stroke="#BBF7D0" stroke-width="1.5"/>
  <text x="80" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="600" fill="${GREEN}">🗺  Neighborhood Guide · 2026</text>

  <!-- "Roommate Finder in" -->
  <text x="60" y="175" font-family="system-ui, -apple-system, sans-serif" font-size="30" fill="${GRAY}" font-weight="400">Roommate Finder in</text>

  <!-- Neighborhood + city name -->
  ${lines.map((line, i) =>
    `<text x="60" y="${232 + i * (nameFontSize + 8)}" font-family="system-ui, -apple-system, sans-serif" font-size="${nameFontSize}" font-weight="800" fill="${BLACK}" letter-spacing="-1">${esc(line)}</text>`
  ).join('\n  ')}

  <!-- Stats row -->
  <text x="60" y="${232 + lines.length * (nameFontSize + 8) + 24}" font-family="system-ui, -apple-system, sans-serif" font-size="24" fill="${GRAY}">Rent · Transit · Employers · Verified Matches</text>

  <!-- Divider -->
  <rect x="60" y="${232 + lines.length * (nameFontSize + 8) + 54}" width="90" height="5" rx="2.5" fill="${GREEN}"/>

  <!-- Free badge pill -->
  <rect x="60" y="${232 + lines.length * (nameFontSize + 8) + 76}" width="270" height="48" rx="24" fill="${BLACK}"/>
  <text x="195" y="${232 + lines.length * (nameFontSize + 8) + 108}" font-family="system-ui, -apple-system, sans-serif" font-size="21" font-weight="700" fill="${WHITE}" text-anchor="middle">Free · No Credit Card</text>

  <!-- URL -->
  <text x="60" y="592" font-family="system-ui, -apple-system, sans-serif" font-size="19" fill="${GRAY}">findmyroomy.com/neighborhoods/${esc(slug)}/</text>

  <!-- Right accent -->
  <circle cx="985" cy="315" r="250" fill="${GREEN}" opacity="0.06"/>
  <circle cx="985" cy="315" r="165" fill="${GREEN}" opacity="0.08"/>
  <circle cx="985" cy="315" r="80"  fill="${GREEN}" opacity="0.10"/>
  <text x="985" y="345" font-family="system-ui, -apple-system, sans-serif" font-size="110" text-anchor="middle" opacity="0.15">📍</text>
</svg>`
}

// ── Write helpers ─────────────────────────────────────────────────────────────

async function writeSvgAsJpg(svgStr, outPath, quality = 90) {
  await sharp(Buffer.from(svgStr))
    .jpeg({ quality, mozjpeg: true })
    .toFile(outPath)
}

async function writeSvgAsPng(svgStr, outPath) {
  await sharp(Buffer.from(svgStr))
    .png({ compressionLevel: 9 })
    .toFile(outPath)
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  const publicDir   = path.join(__dirname, '..', 'public')
  const ogImagesDir = path.join(publicDir, 'og-images')

  fs.mkdirSync(ogImagesDir, { recursive: true })

  console.log('Generating OG images...\n')

  // 1. Default site OG image
  await writeSvgAsJpg(svgDefault(), path.join(publicDir, 'og-preview.jpg'))
  console.log('✓ og-preview.jpg')

  // 2. Twitter / social preview (PNG for better Twitter rendering)
  await writeSvgAsPng(svgDefault({ badge: 'Free forever · No credit card' }), path.join(publicDir, 'social-preview.png'))
  console.log('✓ social-preview.png')

  // 3. Blog default
  await writeSvgAsJpg(svgBlog({ title: 'Roommate Guides & Free Finder Tools | MyRoomy Blog' }), path.join(ogImagesDir, 'blog-default.jpg'))
  console.log('✓ og-images/blog-default.jpg')

  // 4. City pages — roommates, apartments, pets
  for (const city of cities) {
    const base = `${city.slug}`

    await writeSvgAsJpg(
      svgCity({ cityName: city.name, type: 'roommates', slug: city.slug }),
      path.join(ogImagesDir, `roommates-${base}.jpg`)
    )

    await writeSvgAsJpg(
      svgCity({ cityName: city.name, type: 'apartment', slug: city.slug }),
      path.join(ogImagesDir, `apartment-${base}.jpg`)
    )

    await writeSvgAsJpg(
      svgCity({ cityName: city.name, type: 'pets', slug: city.slug }),
      path.join(ogImagesDir, `pets-${base}.jpg`)
    )

    process.stdout.write(`  ✓ ${city.slug}\r`)
  }

  console.log(`\n✓ ${cities.length * 3} city images (roommates + apartments + pets)`)

  // 5. Neighborhood guide pages
  for (const n of neighborhoodSlugs) {
    await writeSvgAsJpg(
      svgNeighborhood({ neighborhood: n.neighborhood, city: n.city, slug: n.slug }),
      path.join(ogImagesDir, `neighborhood-${n.slug}.jpg`)
    )
    process.stdout.write(`  ✓ neighborhood-${n.slug}\r`)
  }

  console.log(`\n✓ ${neighborhoodSlugs.length} neighborhood images`)
  console.log(`\nDone. Total: ${3 + cities.length * 3 + neighborhoodSlugs.length} images in public/ and public/og-images/`)
}

main().catch(err => {
  console.error('Error:', err)
  process.exit(1)
})
