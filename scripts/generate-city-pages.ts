import fs from 'fs';
import path from 'path';
import cities from '../src/components/_data/cities.json';

const outputBase = path.join(process.cwd(), 'src/app/roommates');

function createPageTSX(city: { name: string; slug: string }) {
  return `// AUTO-GENERATED FILE for ${city.name}

import { Metadata } from 'next';
import CityClientShell from '../[city]/CityClientShell';

export const metadata: Metadata = {
  title: 'Find Roommates in ${city.name} | Verified & Pet-Friendly – MyRoomie',
  description: 'Find verified roommates in ${city.name} who match your lifestyle. Pet-friendly options, zero scams, and shared apartment listings.',
  alternates: {
    canonical: 'https://findmyroomy.com/roommates/${city.slug}',
  },
};

export default function RoommatesIn${city.name.replace(/[^a-zA-Z]/g, '')}Page() {
  return (
    <CityClientShell>
      <main className="bg-[#FDFBF7] text-gray-900 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Find Roommates in ${city.name}</h1>
          <p className="text-center text-lg text-gray-700 mb-8">
            Discover safe, verified roommates in ${city.name} who match your vibe and lifestyle.
          </p>
          <h2 className="text-xl font-semibold mb-6">Why Use MyRoomie?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Verified roommate profiles with lifestyle compatibility</li>
            <li>Pet-friendly and budget-aware options</li>
            <li>Zero scam listings, no hidden fees</li>
          </ul>
        </div>
      </main>
    </CityClientShell>
  );
}
`;
}

function ensureDirExists(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function generateTSXPages() {
  for (const city of cities) {
    const cityDir = path.join(outputBase, city.slug);
    ensureDirExists(cityDir);

    const filePath = path.join(cityDir, 'page.tsx');
    const pageContent = createPageTSX(city);
    fs.writeFileSync(filePath, pageContent, 'utf-8');

    // console.log(`✅ Generated: app/roommates/${city.slug}/page.tsx`);
  }
}

generateTSXPages();
