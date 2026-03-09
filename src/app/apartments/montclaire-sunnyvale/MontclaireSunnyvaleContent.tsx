"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FAQS = [
  {
    q: "Does Montclaire Sunnyvale have central AC?",
    a: "Yes. Montclaire at Sunnyvale includes central AC in all units — unlike some older Sunnyvale complexes that rely on window units or have no cooling at all. This is a meaningful differentiator during Bay Area heat waves.",
  },
  {
    q: "Is Montclaire near the Sunnyvale Caltrain?",
    a: "Yes. Montclaire at Sunnyvale is walking distance from the Sunnyvale Caltrain station, making it well-suited for commuters to San Francisco or San Jose. It is also approximately 2 miles from LinkedIn and 4 miles from Apple via Lawrence Expressway.",
  },
  {
    q: "What is rent at Montclaire Sunnyvale?",
    a: "Montclaire at Sunnyvale: 1BR $2,600-$3,000/month, 2BR $3,400-$3,900/month. Amenities include pool, gym, and assigned parking. A 2BR roommate split lands at $1,700-$1,950/person — one of Sunnyvale's more balanced price-to-value options.",
  },
  {
    q: "Is Montclaire Sunnyvale good for tech workers?",
    a: "Yes, particularly for tech workers who commute via Caltrain or company shuttle. Montclaire offers central AC, a walkable location, and responsive management. The main noted downsides are thin walls in some buildings and no dedicated pet area.",
  },
];

const RELATED = [
  { slug: 'the-crossings-sunnyvale', name: 'The Crossings Sunnyvale', desc: 'Near LinkedIn. Best Sunnyvale roommate value.' },
  { slug: 'mission-pointe-sunnyvale', name: 'Mission Pointe Sunnyvale', desc: 'New construction near Apple Park.' },
  { slug: 'roommates-near-apple', name: 'Roommates Near Apple Park', desc: 'Find roommates near Apple headquarters.' },
  { slug: 'sunnyvale-ca', name: 'Sunnyvale City Guide', desc: 'Full Sunnyvale roommate market overview.' },
];

export default function MontclaireSunnyvaleContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* Hero */}
        <section className="pt-28 pb-16 px-4 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-sm font-semibold text-green-700">Central AC Included · Walk to Caltrain</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Montclaire at Sunnyvale — Honest Review for Tech Workers (2026)
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              One of Sunnyvale's most balanced mid-tier options. Walk to Caltrain, central AC included, 2 miles from LinkedIn. Here is what residents actually say.
            </p>
          </div>
        </section>

        {/* Fact box */}
        <section className="py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-amber-900 font-semibold text-lg leading-relaxed">
                Montclaire at Sunnyvale — near downtown Sunnyvale and Caltrain station. 1BR: $2,600-$3,000/month. 2BR: $3,400-$3,900/month. Central AC included. Roommate split: $1,700-$1,950/person. Pool, gym, assigned parking.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Montclaire Different */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What Makes Montclaire Stand Out in Sunnyvale</h2>
            <p className="text-gray-600 mb-4">
              In a market full of mid-tier complexes with similar price points, Montclaire has two concrete differentiators: central AC (not universal in Sunnyvale's older building stock) and walking distance to the Sunnyvale Caltrain station.
            </p>
            <p className="text-gray-600 mb-4">
              Bay Area summers now regularly hit 95-100°F inland. A complex without central AC means window units, inconsistent cooling, and a real quality-of-life hit. Montclaire avoids that entirely.
            </p>
            <div className="space-y-3 mt-6">
              {[
                { label: "Distance to Sunnyvale Caltrain", value: "Walking distance" },
                { label: "Distance to LinkedIn HQ", value: "~2 miles" },
                { label: "Distance to Apple (Lawrence Expy)", value: "~4 miles" },
                { label: "Central AC", value: "Yes — all units" },
                { label: "1BR rent range", value: "$2,600–$3,000/month" },
                { label: "2BR rent range", value: "$3,400–$3,900/month" },
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">{row.label}</span>
                  <span className="font-semibold text-gray-900">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Residents Say */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What Residents Actually Report</h2>
            <p className="text-gray-600 mb-6">
              Across review platforms, Montclaire residents are consistent on a few key points:
            </p>
            <div className="space-y-4">
              {[
                { icon: "✓", color: "text-green-600", heading: "Responsive management.", detail: "Maintenance requests are handled within a reasonable window — above average for Sunnyvale mid-tier." },
                { icon: "✓", color: "text-green-600", heading: "Clean common areas.", detail: "Pool, gym, and hallways are consistently reported as well-maintained." },
                { icon: "!", color: "text-amber-500", heading: "Thin walls in some buildings.", detail: "Not every building in the complex is equal. Ask specifically about the building and floor before signing." },
                { icon: "!", color: "text-amber-500", heading: "No dedicated pet area.", detail: "Dog owners are limited to sidewalk and street walking — no grass area. A notable gap for pet owners." },
                { icon: "✓", color: "text-green-600", heading: "Assigned parking.", detail: "Parking is assigned, not a fight for spots. Important for a complex of this density." },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <span className={`${item.color} font-bold mt-0.5 flex-shrink-0`}>{item.icon}</span>
                  <div>
                    <span className="font-semibold">{item.heading}</span>{" "}
                    <span className="text-gray-600">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roommate Math */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Roommate Math at Montclaire</h2>
            <p className="text-gray-600 mb-6">
              Montclaire's 2BR range of $3,400-$3,900/month puts it in one of Sunnyvale's most accessible price brackets for shared living. Here is the comparison:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="font-bold text-red-900 mb-4 text-lg">Solo — 1BR</h3>
                <div className="space-y-2 text-red-800">
                  <div className="flex justify-between"><span>Monthly rent</span><span className="font-bold">$2,600–$3,000</span></div>
                  <div className="flex justify-between"><span>Annual</span><span className="font-bold">$31,200–$36,000</span></div>
                  <div className="flex justify-between"><span>Income required (3x)</span><span className="font-bold">$104K–$120K/yr</span></div>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-900 mb-4 text-lg">Shared — 2BR split</h3>
                <div className="space-y-2 text-green-800">
                  <div className="flex justify-between"><span>Per-person monthly</span><span className="font-bold">$1,700–$1,950</span></div>
                  <div className="flex justify-between"><span>Per-person annual</span><span className="font-bold">$20,400–$23,400</span></div>
                  <div className="flex justify-between"><span>Income required (3x)</span><span className="font-bold">$68K–$78K/yr</span></div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
              <p className="text-green-900 font-bold text-xl">$1,700/person — among Sunnyvale's most affordable shared options</p>
              <p className="text-green-700 mt-1">With central AC and Caltrain access included.</p>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Who Montclaire Is Best For</h2>
            <ul className="space-y-3 text-gray-700">
              {[
                "Caltrain commuters — the station is walkable, making SF and San Jose commutes practical without a car",
                "Company shuttle riders — Sunnyvale is on the LinkedIn, Google, and Apple shuttle networks",
                "Tech workers who prioritize reliability over luxury — Montclaire isn't flashy but delivers on core requirements",
                "Roommate pairs looking for a cost-effective Sunnyvale 2BR — $1,700-$1,950/person is hard to beat at this quality level",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-green-600 font-bold mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-purple-900 font-semibold mb-4">
                Find a verified Montclaire roommate — free, no subscription
              </p>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
              >
                Find Roommates Near Montclaire →
              </a>
              <p className="text-sm text-purple-400 mt-3">Free · No subscription · Verified profiles</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full text-left p-5 font-semibold text-gray-900 hover:bg-gray-50 transition-colors flex justify-between items-center"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <span className="text-gray-400 ml-4">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-gray-600">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find Verified Roommates Near Montclaire Sunnyvale</h2>
            <p className="text-purple-200 mb-8">
              $1,700-$1,950/person in a central-AC building walking distance from Caltrain. Find MyRoomie connects you with verified Sunnyvale roommates for free — no subscription, no paywall.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Roommates in Sunnyvale →
            </a>
            <p className="text-purple-300 mt-4 text-sm">Free messaging. No subscription. Ever.</p>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">More Bay Area Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {RELATED.map((c, i) => (
                <Link
                  key={i}
                  href={`/apartments/${c.slug}/`}
                  className="block p-5 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-colors"
                >
                  <div className="font-bold mb-1">{c.name}</div>
                  <div className="text-gray-500 text-sm">{c.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
