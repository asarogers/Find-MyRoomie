"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FAQS = [
  {
    q: "Which SF apartments are overpriced?",
    a: "Buildings consistently flagged as overpriced relative to value in 2026 include The Infinity (Folsom/Beale), NEMA SF, 8 Octavia, 33 Tehama, and Noe Valley luxury buildings. These command location premiums that don't align with unit quality, noise levels, or management performance.",
  },
  {
    q: "How do I know if an SF apartment is overrated?",
    a: "Key signals: price-per-sqft above $8/sqft in a non-top-tier location, management complaints on Yelp or Google Reviews, building age above 15 years without documented renovation, and amenity lists that look impressive but carry deferred maintenance.",
  },
  {
    q: "What is the price per sqft for luxury SF apartments?",
    a: "Luxury SF apartments typically range from $7-12/sqft/month depending on neighborhood. SOMA runs $8-10/sqft. Pacific Heights reaches $9-12/sqft. The Sunset District offers comparable quality at $5-6.50/sqft — a 40-60% discount for accepting a longer commute.",
  },
  {
    q: "Should I pay for SF luxury apartments or use a roommate?",
    a: "With a roommate, a 2BR in a mid-tier SF building often lands at $1,800-$2,200/person — well below any luxury 1BR. San Francisco's median rent is $3,545/month (Dec 2025), requiring a $142K income as a solo renter. With a roommate that drops to $68K/year. The math overwhelmingly favors roommate arrangements in every neighborhood.",
  },
];

const OVERRATED = [
  {
    rank: "1",
    name: "The Infinity (Folsom/Beale, SOMA)",
    issue: "High vacancy, aging amenities",
    price: "$4,500–$6,000/mo 1BR",
    verdict: "Premium pricing for a 2007-era building with deferred maintenance and reported management issues. The Embarcadero location doesn't justify the $/sqft.",
  },
  {
    rank: "2",
    name: "NEMA SF (Market Street)",
    issue: "Overcrowded, overpriced gym",
    price: "$3,800–$5,500/mo 1BR",
    verdict: "Amenities are heavily marketed but overcrowded. Units are small for the price. Market Street noise is constant. The building's social media presence oversells the reality.",
  },
  {
    rank: "3",
    name: "8 Octavia (Hayes Valley)",
    issue: "Management complaints widespread",
    price: "$4,200–$5,800/mo 1BR",
    verdict: "Sits near Ansel, which offers genuinely better quality at similar price. 8 Octavia's management has consistent negative reviews across Yelp and Google.",
  },
  {
    rank: "4",
    name: "33 Tehama (SOMA)",
    issue: "Overpriced for unit quality",
    price: "$4,000–$5,200/mo 1BR",
    verdict: "Premium pricing with finishes that don't match the ask. The 2017 construction doesn't show the quality expected at this price point. Concessions have been running for 18+ months.",
  },
  {
    rank: "5",
    name: "Noe Valley Luxury Stock",
    issue: "Location premium not matched by value",
    price: "$4,500–$6,500/mo 1BR",
    verdict: "Noe Valley is a great neighborhood. But the luxury buildings here charge Pacific Heights pricing for a transit-limited location. The 24th Street Muni is not BART.",
  },
  {
    rank: "6",
    name: "The Exchange on 16th (Mission Bay)",
    issue: "Isolated, limited walkability",
    price: "$3,800–$5,000/mo 1BR",
    verdict: "Mission Bay is still developing. The Exchange charges a premium for a neighborhood that lacks the density and walkability its pricing implies. Chase Center events help on weekends but don't fix the weekday dead zones.",
  },
  {
    rank: "7",
    name: "Pacific Heights Boutique Buildings",
    issue: "Maximum price, minimum value",
    price: "$5,000–$8,000/mo 1BR",
    verdict: "Pacific Heights is beautiful. It is also among SF's least transit-connected neighborhoods. You're paying for the address and the view. The dollar-per-livability calculation is poor.",
  },
  {
    rank: "8",
    name: "Nob Hill Luxury Rentals",
    issue: "Overpriced for actual amenities",
    price: "$4,800–$7,000/mo 1BR",
    verdict: "Cable car proximity is a tourist draw, not a commuter benefit. Nob Hill luxury rentals consistently show a 30–40% premium over comparable Tenderloin-adjacent buildings with better transit and the same unit quality.",
  },
  {
    rank: "9",
    name: "South Beach Marina District Towers",
    issue: "Marketing vs. reality gap",
    price: "$4,200–$6,000/mo 1BR",
    verdict: "The 'waterfront lifestyle' marketing is strong. The reality: ATT Park events create significant noise and traffic. The 'walkability' is to the ballpark — not to restaurants or grocery stores.",
  },
  {
    rank: "10",
    name: "Rincon Hill Glass Towers",
    issue: "Wind, noise, poor street activation",
    price: "$4,000–$5,500/mo 1BR",
    verdict: "The views are real. Everything else is problematic: extreme Bay wind, limited ground-floor retail, freeway noise, and proximity to the Bay Bridge creates constant sound. Buildings here have run concessions for multiple years.",
  },
];

export default function MostOverratedSfContent() {
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
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              10 Most Overrated SF Apartments in 2026 — What the Reviews Don't Tell You
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              These San Francisco apartment buildings charge premium prices for below-average value. Real data from SF rent reports, resident reviews, and price-per-sqft analysis.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
            >
              Skip Overpriced — Find a Roommate Instead →
            </a>
          </div>
        </section>

        {/* ── The List ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The List</h2>
            <p className="text-gray-600 mb-6">
              These buildings aren't necessarily bad — some are genuinely nice. What makes them overrated is the gap between what they charge and what you actually get. Price-per-sqft data, vacancy trends, and management quality all factor in.
            </p>
            <div className="space-y-4">
              {OVERRATED.map((item, i) => (
                <div key={i} className="p-5 border border-gray-200 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 rounded-lg w-10 h-10 flex items-center justify-center font-bold text-gray-600 flex-shrink-0">
                      {item.rank}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
                      <div className="flex gap-3 mb-2">
                        <span className="text-xs bg-red-50 text-red-700 px-2 py-0.5 rounded-full">{item.issue}</span>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.verdict}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── The Alternative ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Alternative to Overpriced SF Apartments</h2>
            <p className="text-gray-600 mb-4">
              The alternative to overpriced SF apartments is a verified roommate. With a compatible roommate found through Find MyRoomie, a mid-tier SF 2BR splits to $1,800–$2,200/person — well below any solo apartment on this overrated list. Find MyRoomie is free. No $29/month Roomster paywall, no subscription.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-green-900 mb-3">The Roommate Math vs. SF Luxury</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="text-left p-3 border border-green-200 font-semibold">Option</th>
                      <th className="text-left p-3 border border-green-200 font-semibold">Monthly Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="p-3 border border-green-200">Solo 1BR at NEMA SF</td>
                      <td className="p-3 border border-green-200 text-red-600 font-medium">$4,600+/month</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="p-3 border border-green-200">2BR split with verified roommate (Castro)</td>
                      <td className="p-3 border border-green-200 text-green-700 font-medium">$1,900–$2,200/person</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 border border-green-200 font-semibold">Annual savings</td>
                      <td className="p-3 border border-green-200">
                        <span className="font-bold text-purple-700">$28,800–$32,400/year</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-purple-900 font-semibold mb-4">
                Find verified roommates in SF — free, no subscription
              </p>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
              >
                Find a Roommate in San Francisco →
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
            <h2 className="text-3xl font-bold mb-4">Stop Overpaying for SF Apartments</h2>
            <p className="text-purple-200 mb-8">
              The alternative to overpriced SF apartments is a verified roommate. Find My Roomie is free — no $29/month Roomster paywall. SF median rent requires $142K income solo. With a roommate: $68K.
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

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
