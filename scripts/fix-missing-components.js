const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  try {
    fs.readdirSync(dir).forEach(f => {
      const full = path.join(dir, f);
      try {
        if (fs.statSync(full).isDirectory()) results = results.concat(walk(full));
        else results.push(full);
      } catch (e) {}
    });
  } catch (e) {}
  return results;
}

const appDir = path.join(__dirname, '..', 'src', 'app');
const pages = walk(appDir).filter(f => f.endsWith('page.tsx') && !f.includes('['));

let created = 0;
pages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const match = content.match(/import\s+(\w+)\s+from\s+'\.\/(\w+)'/);
  if (match) {
    const compPath = path.join(path.dirname(p), match[2] + '.tsx');
    if (!fs.existsSync(compPath)) {
      const name = match[2];
      const template = `"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

export default function ${name}() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />
      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">
        <section className="pt-28 pb-16 px-4 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold mb-5">Page Coming Soon</h1>
            <p className="text-xl text-gray-600 mb-8">This page is under construction.</p>
            <a href={BETA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors">Get Early Access &rarr;</a>
          </div>
        </section>
      </main>
      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
`;
      fs.writeFileSync(compPath, template);
      console.log('CREATED:', compPath);
      created++;
    }
  }
});

if (created === 0) console.log('No missing components found!');
else console.log(`\nCreated ${created} missing component(s).`);
