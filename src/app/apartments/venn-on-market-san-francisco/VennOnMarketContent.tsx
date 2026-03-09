"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FAQS = [
  {
    q: "How much does Venn on Market cost?",
    a: "In January 2026, Venn on Market was rated best value in the Mission area at $4.15 per square foot, with rents starting at $2,447/month.",
  },
  {
    q: "Why is Venn on Market cheaper than the Mission District?",
    a: "Venn sits in the Van Ness/Market corridor — just outside the Mission zip code that commands premium pricing. Two to three blocks of distance translates to $500–$1,000/month in savings.",
  },
  {
    q: "What do you give up by living at Venn instead of in the Mission?",
    a: "The precise 'Mission' address designation. Immediate Dolores Park access. What you gain: $500–$1,000/month, a newer building, better transit connectivity, $6,000–$12,000/year in savings.",
  },
];

const RELATED = [
  { slug: 'ansel-hayes-valley-sf', name: 'Ansel Hayes Valley SF', desc: 'Hayes Valley luxury. Higher price point.' },
  { slug: 'rooms-for-rent-san-francisco', name: 'Rooms for Rent in SF', desc: 'Affordable SF shared housing options.' },
  { slug: 'san-francisco-ca', name: 'San Francisco City Guide', desc: 'Full SF roommate market overview.' },
  { slug: 'soma-788-san-francisco', name: 'SOMA 788', desc: 'Caltrain access. One block from station.' },
];

export default function VennOnMarketContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-16 px-4 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-sm font-semibold text-green-700">Best Value — Mission Area 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Venn on Market SF — The $12,000/Year Arbitrage Two Blocks From the Mission
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Same coffee shops. Same bar on Valencia. $6,000–$12,000/year difference. The geography of the price cliff explained.
            </p>
          </div>
        </section>

        {/* ── Stat box ── */}
        <section className="py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-extrabold text-green-700">$4.15</div>
                  <div className="text-gray-600 text-sm mt-1">per sqft at Venn on Market</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-red-600">$8–10+</div>
                  <div className="text-gray-600 text-sm mt-1">per sqft two blocks into the Mission</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-purple-700">$12,000</div>
                  <div className="text-gray-600 text-sm mt-1">annual savings potential</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Geography of the Price Cliff ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Geography of the Price Cliff</h2>
            <p className="text-gray-600 mb-4">
              Venn on Market sits in the Van Ness/Market corridor — the boundary zone between Hayes Valley, Upper Market, and the Mission edge. This is where SF's pricing geography does something unusual: the price cliff is not gradual. It drops in 2–3 blocks.
            </p>
            <p className="text-gray-600 mb-4">
              Cross into the Mission zip code and you're paying for the address designation, the Dolores Park proximity, and the cultural cachet of "I live in the Mission." That premium is real — but Venn is newer construction with more amenities, and the effective price-per-square-foot is dramatically lower.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-gray-700 font-medium">
                The math is simple: $500–$1,000/month saved at Venn vs Mission District addresses = $6,000–$12,000/year. Over a two-year tenancy, that is $12,000–$24,000 — enough to matter.
              </p>
            </div>
          </div>
        </section>

        {/* ── What Venn Offers ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What Venn on Market Actually Offers</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { label: "Transit", value: "14, 49, F-Market, Church Street MUNI Metro" },
                { label: "Tech proximity", value: "Civic Center, Market Street offices, Caltrain connections" },
                { label: "Walkability", value: "High — bars, restaurants, grocery within blocks" },
                { label: "Unit types", value: "Studios, 1BRs, select 2BRs, contemporary finishes" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="text-gray-500 text-sm mb-1">{item.label}</div>
                  <div className="font-semibold text-gray-900">{item.value}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-600">
              Transit access is a genuine differentiator. The Van Ness/Market intersection puts you on multiple MUNI lines — faster downtown connections than most Mission addresses, and Caltrain-accessible if you commute south.
            </p>
          </div>
        </section>

        {/* ── Mission Context ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Mission Context</h2>
            <p className="text-gray-600 mb-4">
              The Mission is genuinely compelling. The food culture, the independent bookstores, the bars on Valencia, the murals — it has survived sustained gentrification pressure while retaining a character most SF neighborhoods have lost. The premium is not irrational.
            </p>
            <p className="text-gray-600 mb-4">
              But if you work remotely, or commute south to the Peninsula or South Bay via Caltrain, the arbitrage strongly favors Venn. You are 3 minutes from everything the Mission offers on foot. You are paying for access, not the address.
            </p>
          </div>
        </section>

        {/* ── What You Give Up / Gain ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What You Give Up and What You Gain</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="font-bold text-red-800 mb-3">What You Give Up</h3>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>"Mission" address designation</li>
                  <li>Immediate Dolores Park access</li>
                  <li>That specific neighborhood identity</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-bold text-green-800 mb-3">What You Gain</h3>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>$500–$1,000/month in your pocket</li>
                  <li>Newer building with more amenities</li>
                  <li>Better MUNI transit connectivity</li>
                  <li>$6,000–$12,000/year in savings</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Roommate Market ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Roommate Market at Venn on Market</h2>
            <p className="text-gray-600 mb-4">
              The Market/Mission corridor has the highest roommate-seeker density in San Francisco. Two-bedroom units at Venn split between compatible co-tenants bring costs to $1,400–$1,800/person — among the most competitive per-person rates in central SF.
            </p>
            <p className="text-gray-600 mb-6">
              Compatibility matters more in this building than in sprawling complexes. Smaller units, high building density, shared hallways — you will interact with your roommate and your neighbors more than in a larger property. The screening process for a co-tenant matters.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-purple-900 font-semibold mb-4">
                Find verified roommates near Venn on Market or in the Mission
              </p>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
              >
                Find Roommates in the Mission / Upper Market →
              </a>
              <p className="text-sm text-purple-400 mt-3">Free · No subscription · Verified profiles</p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
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

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Save $12,000/Year With the Right Roommate</h2>
            <p className="text-purple-200 mb-8">
              Venn on Market already gives you the Mission arbitrage. A verified roommate on a shared 2BR brings per-person costs to $1,400–$1,800/month — among the best deals in central San Francisco.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Roommates in San Francisco →
            </a>
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
