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

export default function SomaResidencesSfContent() {
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
              <span className="text-sm font-semibold text-green-700">Best Value in SoMa — $5-6/sqft vs $8-10 at Newer Towers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              SOMA Residences SF — Best Value in SoMa at $5–$6/sqft (2026)
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Newer SoMa towers charge $8-10/sqft. SOMA Residences delivers the same location at 30-40% lower cost. Here is what you trade, and what you keep.
            </p>
          </div>
        </section>

        {/* Fact box */}
        <section className="py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-amber-900 font-semibold text-lg leading-relaxed">
                SOMA Residences — 7th Street corridor SF, near South Van Ness Ave. 2000s construction. Studios: $2,800-$3,400/month. 1BR: $3,500-$4,200/month. 2BR: $4,800-$5,600/month. $5-6/sqft pricing. 2BR roommate split: $2,400-$2,800/person — SoMa&apos;s most affordable shared-living option.
              </p>
            </div>
          </div>
        </section>

        {/* The Value Case */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Value Case — Why $5-6/sqft Matters</h2>
            <p className="text-gray-600 mb-4">
              In SoMa, most 2017+ construction (SOMA 788, One Henry Adams, similar) runs $8-10/sqft. SOMA Residences runs $5-6/sqft for comparable square footage in the same ZIP codes. That difference — 30-40% — is not a small discount. On a $5,000/month 2BR, you&apos;re paying $1,500-$2,000/month less for the same neighborhood.
            </p>
            <p className="text-gray-600 mb-4">
              What explains the gap? Construction vintage. SOMA Residences is 2000s construction — it does not have a rooftop pool, and some units have aging appliances. That is the entire trade-off. The location, the BART access, the Market Street walkability — identical.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-bold text-green-900 mb-3">SOMA Residences</h3>
                <div className="space-y-2 text-green-800 text-sm">
                  <div className="flex justify-between"><span>Price per sqft</span><span className="font-bold">$5–$6/sqft</span></div>
                  <div className="flex justify-between"><span>Studio from</span><span className="font-bold">$2,800/mo</span></div>
                  <div className="flex justify-between"><span>1BR from</span><span className="font-bold">$3,500/mo</span></div>
                  <div className="flex justify-between"><span>2BR from</span><span className="font-bold">$4,800/mo</span></div>
                  <div className="flex justify-between"><span>Construction</span><span className="font-bold">2000s</span></div>
                  <div className="flex justify-between"><span>Rooftop pool</span><span className="font-bold">No</span></div>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-3">Newer SoMa Towers (avg)</h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div className="flex justify-between"><span>Price per sqft</span><span className="font-bold">$8–$10/sqft</span></div>
                  <div className="flex justify-between"><span>Studio from</span><span className="font-bold">$3,400/mo</span></div>
                  <div className="flex justify-between"><span>1BR from</span><span className="font-bold">$4,200/mo</span></div>
                  <div className="flex justify-between"><span>2BR from</span><span className="font-bold">$5,800/mo</span></div>
                  <div className="flex justify-between"><span>Construction</span><span className="font-bold">2015–2023</span></div>
                  <div className="flex justify-between"><span>Rooftop pool</span><span className="font-bold">Usually yes</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Residents Say */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What Residents Actually Report</h2>
            <div className="space-y-4">
              {[
                { icon: "✓", color: "text-green-600", heading: "Location is the main selling point — and it delivers.", detail: "Market Street, Civic Center, and BART are all within easy walking distance. The 7th Street corridor places you centrally in SoMa without the extreme prices of Harrison Street luxury towers." },
                { icon: "✓", color: "text-green-600", heading: "Decent management.", detail: "Residents describe management as functional — not exceptional, but responsive to maintenance requests. Steady rather than outstanding." },
                { icon: "!", color: "text-amber-500", heading: "Aging appliances in some units.", detail: "2000s construction means dishwashers, refrigerators, and in-unit laundry are older-generation. Some units have been updated; others have not. Ask specifically." },
                { icon: "!", color: "text-amber-500", heading: "Dated finishes.", detail: "Countertops, flooring, and fixtures reflect their era. This is the honest trade for the price point — not a defect, just a gap from 2020s luxury standards." },
                { icon: "✓", color: "text-green-600", heading: "Functional amenities — no frills.", detail: "Gym, parking, and basic common areas are present and maintained. No rooftop pool, no co-working lounge — but the basics work." },
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
            <h2 className="text-3xl font-bold mb-6">The Roommate Math — Why SOMA Residences Is SoMa&apos;s Best Shared Value</h2>
            <p className="text-gray-600 mb-6">
              SF median rent hit $3,545/month (December 2025, +12% YoY). SOMA Residences sits below that median for some units. With a roommate, the per-person cost becomes genuinely manageable for SoMa:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="font-bold text-red-900 mb-4 text-lg">Solo — 1BR</h3>
                <div className="space-y-2 text-red-800">
                  <div className="flex justify-between"><span>Monthly rent</span><span className="font-bold">$3,500–$4,200</span></div>
                  <div className="flex justify-between"><span>Annual</span><span className="font-bold">$42,000–$50,400</span></div>
                  <div className="flex justify-between"><span>Income required (3x)</span><span className="font-bold">$140K–$168K/yr</span></div>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-900 mb-4 text-lg">Shared — 2BR split</h3>
                <div className="space-y-2 text-green-800">
                  <div className="flex justify-between"><span>Per-person monthly</span><span className="font-bold">$2,400–$2,800</span></div>
                  <div className="flex justify-between"><span>Per-person annual</span><span className="font-bold">$28,800–$33,600</span></div>
                  <div className="flex justify-between"><span>Income required (3x)</span><span className="font-bold">$96K–$112K/yr</span></div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
              <p className="text-green-900 font-bold text-xl">$2,400–$2,800/person — SoMa&apos;s most affordable shared-living option</p>
              <p className="text-green-700 mt-1">Same neighborhood as buildings charging $3,500+/person shared.</p>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Who SOMA Residences Is Best For</h2>
            <ul className="space-y-3 text-gray-700">
              {[
                "SoMa-location-first renters — you want the neighborhood, transit access, and Market Street walkability without the luxury-tower premium",
                "Tech workers who prioritize budget over amenities — Salesforce, GitHub, Dropbox, and Twitter/X are all within walking or biking distance",
                "Roommate pairs maximizing value — $2,400-$2,800/person in SoMa is a genuinely strong outcome",
                "Short-to-medium-term renters — the lower entry price reduces the cost of a 12-month commitment if your situation may change",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-green-600 font-bold mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-900 mb-2">Also Consider</h3>
              <p className="text-blue-800 text-sm">
                If your budget allows $3,500+/person shared, <Link href="/apartments/soma-788-san-francisco/" className="underline font-semibold">SOMA 788 at 788 Harrison Street</Link> steps up the amenity package significantly (rooftop pool, EV charging, consistently-praised management) for $500-$800 more per person per month.
              </p>
            </div>
          </div>
        </section>

        {/* CTA mid-page */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-purple-900 font-semibold mb-2 text-lg">
                SoMa&apos;s best value at $2,400-$2,800/person shared
              </p>
              <p className="text-purple-700 mb-5">
                Find a verified roommate for SOMA Residences. Free, no subscription, no paywall.
              </p>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
              >
                Find Roommates at SOMA Residences →
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
            <h2 className="text-3xl font-bold mb-4">Find Verified Roommates in SoMa SF</h2>
            <p className="text-purple-200 mb-8">
              SOMA Residences is SoMa&apos;s best price-to-location ratio. With a roommate, per-person cost drops to $2,400-$2,800/month — among the city&apos;s most affordable shared-living options for this neighborhood. Find MyRoomie is free — no Roomster paywall, no subscription.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Roommates in SoMa SF →
            </a>
            <p className="text-purple-300 mt-4 text-sm">Free messaging. No subscription. Ever.</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
