"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FAQS = [
  {
    q: "What is the rent at SOMA Residences on 7th Street?",
    a: "SOMA Residences, 7th Street corridor SF: Studios $2,800-$3,400/month. 1BR $3,500-$4,200/month. 2BR $4,800-$5,600/month. Pricing reflects 2000s construction — older building, better value than newer SoMa towers.",
  },
  {
    q: "How does SOMA Residences compare to newer SoMa buildings?",
    a: "SOMA Residences runs $5-6/sqft vs $8-10/sqft at newer SoMa towers like SOMA 788. The tradeoff: older appliances in some units and no rooftop pool. The upside: SoMa location at 30-40% lower cost with functional amenities and walkable access to BART and Market Street.",
  },
  {
    q: "Is SOMA Residences good value for SF?",
    a: "Yes — SOMA Residences is one of the better value options in SoMa. Residents note decent management, walkable location near Civic Center and Market Street, and BART access. The aging appliances and dated finishes are real, but the price-to-location ratio is strong.",
  },
  {
    q: "What is the best value apartment in SoMa?",
    a: "For pure price-per-sqft value, SOMA Residences is one of SoMa's strongest options — $5-6/sqft vs $8-10 at newer towers. With a roommate on a 2BR, per-person cost drops to $2,400-$2,800/month — among SoMa's most affordable shared-living arrangements.",
  },
];

const RELATED = [
  { slug: 'soma-788-san-francisco', name: 'SOMA 788', desc: 'Premium SoMa comparison. Rooftop pool.' },
  { slug: 'rooms-for-rent-san-francisco', name: 'Rooms for Rent in SF', desc: 'Affordable SF shared housing options.' },
  { slug: 'san-francisco-ca', name: 'San Francisco City Guide', desc: 'Full SF roommate market overview.' },
  { slug: 'ansel-hayes-valley-sf', name: 'Ansel Hayes Valley', desc: 'Hayes Valley luxury option for comparison.' },
];

export default function SomaResidencesSfContent() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="text-sm font-semibold text-amber-700">Best Value SoMa · $5-6/sqft vs $8-10/sqft Market</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              SOMA Residences SF — Best Value in SoMa at $5–$6/sqft (2026)
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Real pricing, honest trade-offs, and the roommate math on SoMa&apos;s most cost-efficient building.
            </p>
          </div>
        </section>

        {/* ── Fact box ── */}
        <section className="py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-amber-900 font-semibold text-lg leading-relaxed">
                SOMA Residences charges $5–$6/sqft while comparable new SoMa towers charge $8–$10/sqft. On a 700sqft 1BR, that&apos;s $700/month in savings — just from choosing the right building on the right block.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 1: The Value Proposition ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Value Proposition</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              SOMA Residences is a 2000s-era building in the 7th Street corridor, close to Civic Center and within three blocks of BART. It is not a new-construction luxury tower — and that is precisely why the price-per-sqft works.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The location is genuinely walkable: Market Street is nearby, the Civic Center BART station puts downtown SF and the Mission within minutes, and the building sits in a dense SoMa block that gives you transit-first living without paying the premium of newer towers on Folsom or Harrison.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {[
                { label: "Studios", price: "$2,800–$3,400/mo" },
                { label: "1 Bedrooms", price: "$3,500–$4,200/mo" },
                { label: "2 Bedrooms", price: "$4,800–$5,600/mo" },
              ].map((tier) => (
                <div key={tier.label} className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-center">
                  <div className="text-gray-500 text-sm font-medium mb-1">{tier.label}</div>
                  <div className="text-xl font-bold text-gray-900">{tier.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 2: What You're Trading Off ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What You&apos;re Trading Off</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              SOMA Residences is not pretending to be a luxury tower. These trade-offs are real — weigh them against the rent difference.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3 text-lg">The downsides</h3>
                <div className="space-y-3">
                  {[
                    "Aging appliances in some units — not the stainless-and-quartz finishes of newer buildings",
                    "No rooftop pool or sky lounge — functional amenities, not aspirational ones",
                    "Dated finishes in common areas compared to 2020s-era construction",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-amber-500 font-bold mt-0.5">!</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3 text-lg">What you keep</h3>
                <div className="space-y-3">
                  {[
                    "Responsive management — residents report maintenance requests handled",
                    "Very walkable location — Market Street proximity, Civic Center corridor",
                    "BART 3 blocks away — one of SoMa's best transit positions",
                    "$700+/month in your pocket vs comparable newer towers",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 3: Roommate Math Table ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Roommate Math Table</h2>
            <p className="text-gray-700 mb-6">
              SOMA Residences 2BR arrangements are among SoMa&apos;s most affordable shared-living options. Here is what the numbers look like:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border border-gray-200">Scenario</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700 border border-gray-200">Monthly Rent</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700 border border-gray-200">Income Needed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border border-gray-200 text-gray-700">Solo 1BR (avg)</td>
                    <td className="px-4 py-3 border border-gray-200 text-right font-medium">$3,850</td>
                    <td className="px-4 py-3 border border-gray-200 text-right">$138,600/yr</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-4 py-3 border border-gray-200 text-gray-700">2BR split with roommate</td>
                    <td className="px-4 py-3 border border-gray-200 text-right font-medium text-green-700">$2,600/person</td>
                    <td className="px-4 py-3 border border-gray-200 text-right text-green-700">$93,600/yr</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="px-4 py-3 border border-gray-200 font-semibold text-amber-800">Annual savings with roommate</td>
                    <td className="px-4 py-3 border border-gray-200 text-right font-bold text-amber-800" colSpan={2}>$15,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs mt-3">Income needed calculated at 30% of gross income standard. Rent figures based on mid-range 2BR pricing.</p>
          </div>
        </section>

        {/* ── Section 4: SOMA Residences vs 788 Harrison ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">SOMA Residences vs 788 Harrison</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Both buildings are walkable SoMa options with similar BART access. The decision is purely about what you value.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="border border-gray-200 rounded-xl p-6">
                <div className="font-bold text-gray-800 text-lg mb-4">SOMA Residences</div>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between"><span>1BR range</span><span className="font-medium">$3,500–$4,200</span></div>
                  <div className="flex justify-between"><span>Price/sqft</span><span className="font-medium text-green-700">$5–$6</span></div>
                  <div className="flex justify-between"><span>Rooftop pool</span><span>No</span></div>
                  <div className="flex justify-between"><span>Building era</span><span>2000s</span></div>
                  <div className="flex justify-between"><span>Management</span><span>Responsive</span></div>
                </div>
                <div className="mt-4 bg-green-50 rounded-lg p-3 text-sm text-green-800 font-medium">
                  Choose this if budget matters most
                </div>
              </div>
              <div className="border border-blue-200 rounded-xl p-6 bg-blue-50">
                <div className="font-bold text-gray-800 text-lg mb-4">788 Harrison</div>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between"><span>1BR range</span><span className="font-medium">$4,200–$5,500</span></div>
                  <div className="flex justify-between"><span>Price/sqft</span><span className="font-medium text-blue-700">$8–$10</span></div>
                  <div className="flex justify-between"><span>Rooftop pool</span><span>Yes</span></div>
                  <div className="flex justify-between"><span>Building era</span><span>2020s</span></div>
                  <div className="flex justify-between"><span>Management</span><span>Top-rated</span></div>
                </div>
                <div className="mt-4 bg-blue-100 rounded-lg p-3 text-sm text-blue-800 font-medium">
                  Choose this if you want best-in-class amenities
                </div>
              </div>
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
                    <div className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find a SOMA roommate — free</h2>
            <p className="text-purple-200 mb-8">
              Split a 2BR at SOMA Residences and save $15,000/year vs going solo. Find MyRoomie connects you with verified roommates in SoMa. Free — no subscription, no paywall.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find a SOMA Roommate →
            </a>
            <p className="text-sm text-purple-400 mt-3">Free · No subscription · Verified profiles</p>
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
