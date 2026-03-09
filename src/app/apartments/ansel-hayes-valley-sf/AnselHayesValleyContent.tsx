"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FAQS = [
  {
    q: "How much is rent at Ansel Hayes Valley?",
    a: "Ansel at 30 Oak Street, Hayes Valley SF: Studios $3,800-$4,500/month. 1BR $4,800-$5,800/month. 2BR $6,200-$7,200/month. Completed 2023. Among the most expensive new apartment buildings in SF.",
  },
  {
    q: "Is Ansel Hayes Valley worth the price?",
    a: "Ansel offers genuinely exceptional finishes and walkability (99/100). The building was designed by David Baker Architects and features top-floor bay views, a rooftop deck, and co-working space. Whether the premium is worth it depends on your budget — but the quality is real, not just marketing.",
  },
  {
    q: "What is the neighborhood like around Ansel at 30 Oak Street?",
    a: "Ansel at 30 Oak Street sits across from the SF Symphony, one block from Civic Center BART, and near multiple Muni lines (F, J, K, L, M). The Hayes Valley neighborhood is walkable, restaurant-dense, and culturally active — one of SF's most central locations.",
  },
  {
    q: "How much do I save sharing a 2BR at Ansel?",
    a: "A 2BR at Ansel runs $6,200-$7,200/month. Split two ways: $3,100-$3,600/person. Compare that to a 1BR at $4,800-$5,800/month solo. Sharing saves $1,200-$2,200/month per person — between $14,400 and $26,400/year.",
  },
];

const RELATED = [
  { slug: 'venn-on-market-san-francisco', name: 'Venn on Market SF', desc: 'Mission border value. Cheaper than Hayes Valley.' },
  { slug: 'soma-788-san-francisco', name: 'SOMA 788', desc: 'Caltrain access. One of SoMa\'s best-managed towers.' },
  { slug: 'san-francisco-ca', name: 'San Francisco Roommates — City Guide', desc: 'Full SF roommate market overview.' },
  { slug: 'rooms-for-rent-san-francisco', name: 'Rooms for Rent in San Francisco', desc: 'Affordable SF shared housing options.' },
];

export default function AnselHayesValleyContent() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-indigo-500 rounded-full" />
              <span className="text-sm font-semibold text-indigo-700">SF&#39;s Highest-Design New Building · Walkability 99/100</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Ansel Hayes Valley SF — High Design, Real Resident Data &amp; Roommate Math
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              198 units at 30 Oak Street, designed by David Baker Architects. Studios from $3,800/month. The design quality is genuine — so is the price. Here is the honest breakdown.
            </p>
          </div>
        </section>

        {/* Fact box */}
        <section className="py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-amber-900 font-semibold text-lg leading-relaxed">
                Ansel — 198 units, 30 Oak Street, Hayes Valley SF. Completed 2023. Architect: David Baker Architects. Studios: $3,800-$4,500/month. 1BR: $4,800-$5,800/month. 2BR: $6,200-$7,200/month. Walkability 99/100. One block from Civic Center BART.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Ansel Different */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What Actually Makes Ansel Worth Talking About</h2>
            <p className="text-gray-600 mb-4">
              Most &quot;luxury&quot; apartment marketing is interchangeable. Ansel is different in a specific way: David Baker Architects is one of the most respected residential design firms in the country. Their work is recognizable — the kind of building that feels designed rather than assembled.
            </p>
            <p className="text-gray-600 mb-4">
              The 2023 completion matters too. Ansel was built after the pandemic, incorporating co-working spaces, better soundproofing standards, and rooftop amenities as baseline expectations rather than add-ons.
            </p>
            <div className="space-y-3 mt-6">
              {[
                { label: "Address", value: "30 Oak Street, Hayes Valley SF" },
                { label: "Architect", value: "David Baker Architects" },
                { label: "Year completed", value: "2023" },
                { label: "Total units", value: "198" },
                { label: "Walk Score", value: "99/100" },
                { label: "Transit access", value: "Muni F, J, K, L, M within 1 block · BART Civic Center 1 block" },
                { label: "Pet policy", value: "Pet-friendly — $75/month per pet" },
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">{row.label}</span>
                  <span className="font-semibold text-gray-900 text-right ml-4">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Residents Say */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What Residents Actually Report</h2>
            <div className="space-y-4">
              {[
                { icon: "✓", color: "text-green-600", heading: "Exceptional finishes — not exaggerated.", detail: "Resident reviews consistently note that unit quality exceeds the marketing photos. Counters, fixtures, and flooring are above-average for new SF construction." },
                { icon: "✓", color: "text-green-600", heading: "Responsive management — genuinely.", detail: "Multiple residents flag management as unusually responsive. In a city where this is rare, it is worth noting." },
                { icon: "✓", color: "text-green-600", heading: "Top-floor views are real.", detail: "Upper floors face the bay or SF city skyline. This is not marketing — confirmed by resident photos." },
                { icon: "!", color: "text-amber-500", heading: "Some soundproofing concerns.", detail: "Despite 2023 construction, a subset of residents note noise from adjacent units in certain building sections. Ask about your specific unit location." },
                { icon: "!", color: "text-amber-500", heading: "Price is the real barrier.", detail: "Even at the top of what SF new construction offers, Ansel is expensive by any standard. The quality justifies the premium — whether your budget supports it is a separate question." },
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
            <h2 className="text-3xl font-bold mb-6">The Roommate Math at Ansel — Even Shared, It&#39;s Premium</h2>
            <p className="text-gray-600 mb-6">
              Ansel is among SF&apos;s most expensive buildings. A roommate meaningfully reduces the burden — but the baseline is high. Here is the honest comparison:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="font-bold text-red-900 mb-4 text-lg">Solo — 1BR</h3>
                <div className="space-y-2 text-red-800">
                  <div className="flex justify-between"><span>Monthly rent</span><span className="font-bold">$4,800–$5,800</span></div>
                  <div className="flex justify-between"><span>Annual</span><span className="font-bold">$57,600–$69,600</span></div>
                  <div className="flex justify-between"><span>Income required (3x)</span><span className="font-bold">$192K–$232K/yr</span></div>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-900 mb-4 text-lg">Shared — 2BR split</h3>
                <div className="space-y-2 text-green-800">
                  <div className="flex justify-between"><span>Per-person monthly</span><span className="font-bold">$3,100–$3,600</span></div>
                  <div className="flex justify-between"><span>Per-person annual</span><span className="font-bold">$37,200–$43,200</span></div>
                  <div className="flex justify-between"><span>Income required (3x)</span><span className="font-bold">$124K–$144K/yr</span></div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
              <p className="text-green-900 font-bold text-xl">$1,200–$2,200 saved per month with a roommate</p>
              <p className="text-green-700 mt-1">$14,400–$26,400 per year — at a building that actually delivers on design quality.</p>
            </div>
          </div>
        </section>

        {/* Neighborhood */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Hayes Valley Location — Why It Matters</h2>
            <p className="text-gray-600 mb-4">
              30 Oak Street puts you at the intersection of Hayes Valley, Civic Center, and the Tenderloin edge — an area that has changed significantly since 2020. Hayes Valley proper is one of SF&apos;s most walkable restaurant and retail corridors. Civic Center gives you immediate BART and Muni access.
            </p>
            <p className="text-gray-600 mb-4">
              The SF Symphony is across the street. Twitter/X HQ (when occupied), the federal building, and several large tech offices are within three blocks. For anyone working in SF&apos;s civic or tech sector, the walkability score of 99/100 is functional, not decorative.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-blue-900 mb-2">One Note on the Street</h3>
              <p className="text-blue-800 text-sm">
                Civic Center has real urban challenges — unhoused population density, street-level noise, and a neighborhood character that differs from SoMa or the Marina. If you need quiet, serene surroundings, Hayes Valley at this price point may not be the right fit. If you value walkability, transit, and cultural density, it excels.
              </p>
            </div>
          </div>
        </section>

        {/* CTA mid-page */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-purple-900 font-semibold mb-2 text-lg">
                $4,800/month 1BR solo — or $3,100/person shared
              </p>
              <p className="text-purple-700 mb-5">
                Find a verified roommate for Ansel Hayes Valley. Free, no subscription.
              </p>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
              >
                Find Roommates at Ansel Hayes Valley →
              </a>
              <p className="text-sm text-purple-400 mt-3">Free · No subscription · Verified profiles</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-[#FDFBF7] border-t border-gray-100">
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
            <h2 className="text-3xl font-bold mb-4">Find Verified Roommates in Hayes Valley SF</h2>
            <p className="text-purple-200 mb-8">
              Ansel delivers real design quality and a genuine walkability score. With a roommate, the per-person cost drops to $3,100-$3,600/month. Find MyRoomie connects you with verified SF roommates for free — no subscription, no paywall.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Roommates in SF →
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
