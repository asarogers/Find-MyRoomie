# Find MyRoomie

Bay Area roommate finder — free to message, verified profiles, no paywall. Pre-launch.

**Live site:** https://findmyroomy.com
**Beta signup:** https://forms.gle/qJQXtqEgHb45Y2Y8A
**Repo:** https://github.com/asarogers/Find-MyRoomie

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Output:** Static export (`next export`) — no SSR, no API routes at runtime
- **Styling:** Tailwind CSS
- **Hosting:** GitHub Pages / static CDN
- **Analytics:** GA4

## Project Structure

```
src/app/
├── page.tsx                          # Homepage
├── apartments/
│   ├── page.tsx                      # /apartments/ hub index
│   ├── [city]/page.tsx               # Dynamic city pages (77 cities via cities.json)
│   ├── [complex-slug]/               # Static apartment complex reviews (20+)
│   └── roommates-near-[employer]/    # Employer proximity pages (12)
├── roommates/[city]/page.tsx         # Dynamic roommate city pages
├── pets/[city]/page.tsx              # Pet-friendly city pages
├── blogs/[slug]/page.tsx             # Dynamic blog posts
├── neighborhoods/
│   ├── [slug]/page.tsx               # Dynamic neighborhood fallback
│   └── [static-slug]/               # Static neighborhood guides (3)
├── how-to/[guide]/                   # How-to content pages (10)
├── data/sf-rent-prices/              # SF Rent Tracker (Dataset schema)
├── tools/rent-split-calculator/      # Rent split tool
└── [competitor]-alternative/         # Attack pages (13)
```

## Page Architecture

Every page uses a **server + client split**:

- `page.tsx` — Server Component only. Exports `metadata` and JSON-LD `<script>` tags. No UI logic.
- `[Name]Content.tsx` — Client Component (`"use client"`). All rendering, state, Navbar, Footer, ContactUs.

```tsx
// page.tsx pattern
export const metadata: Metadata = { ... }
export default function Page() {
  return <PageContent />
}

// [Name]Content.tsx pattern
"use client"
export default function PageContent() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Navbar setIsOpen={setIsOpen} />
      {/* content */}
      <Footer setIsOpen={setIsOpen} />
    </>
  )
}
```

## Build

```bash
npm install
npm run build       # Outputs to /out/ (static HTML)
npm run dev         # Dev server on localhost:3000
```

**WSL2 note:** `experimental: { cpus: 1 }` in `next.config.ts` prevents ENOTEMPTY race conditions on Windows NTFS via WSL2.

## Key Config

```ts
// next.config.ts
const nextConfig: NextConfig = {
  output: 'export',        // Static export
  trailingSlash: true,     // All URLs end with /
  images: { unoptimized: true },
  experimental: { cpus: 1 },  // WSL2 fix
}
```

## Git Workflow

Always commit and push after every change:

```bash
git add [changed-files]
git commit -m "description"
git push origin main
```

Remote: `https://github.com/asarogers/Find-MyRoomie.git` (HTTPS)

## Page Count (as of 2026-03-09)

| Route type | Count |
|-----------|-------|
| Static page.tsx files | 99 |
| Dynamic city pages (roommates + apartments + pets) | 224 |
| Blog posts | 156 |
| **Total exports** | **479** |
