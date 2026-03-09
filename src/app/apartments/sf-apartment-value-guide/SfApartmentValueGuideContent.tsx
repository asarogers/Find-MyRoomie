"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const NEIGHBORHOODS = [
  { name: "SOMA", psf: "$8–10", oneBR: "$4,500", walk: 95, transit: "Excellent", pool: "High",   score: "7/10",   note: "Central location premium; high density reduces quality of life" },
  { name: "Hayes Valley", psf: "$7–9", oneBR: "$4,200", walk: 92, transit: "Excellent", pool: "Medium", score: "7.5/10", note: "Boutique neighborhood with genuine street character" },
  { name: "Mission", psf: "$7–9", oneBR: "$4,100", walk: 90, transit: "Good",      pool: "High",   score: "7.5/10", note: "Best roommate pool in SF; vibrant nightlife and food scene" },
  { name: "Castro", psf: "$7–8", oneBR: "$4,000", walk: 98, transit: "Excellent", pool: "High",   score: "8/10",   note: "Highest walkability in SF; strong LGBTQ+ community infrastructure" },
  { name: "Inner Richmond", psf: "$5.50–7", oneBR: "$3,600", walk: 85, transit: "Good", pool: "Medium", score: "8.5/10", note: "Best value in central SF; Clement St food scene" },
  { name: "Inner Sunset", psf: "$5–6.50", oneBR: "$3,400", walk: 80, transit: "Good", pool: "Medium", score: "8.5/10", note: "Family-oriented, near UCSF; fog keeps it cool" },
  { name: "Outer Sunset", psf: "$4.50–6", oneBR: "$3,000", walk: 70, transit: "Moderate", pool: "Low", score: "9/10", note: "Best pure $/sqft value in SF; beach access" },
  { name: "Noe Valley", psf: "$8–10", oneBR: "$4,400", walk: 88, transit: "Good", pool: "Low", score: "6.5/10", note: "Premium for quiet residential feel; low roommate density" },
  { name: "Pacific Heights", psf: "$9–12", oneBR: "$5,200", walk: 85, transit: "Moderate", pool: "Low", score: "5/10", note: "Highest $/sqft in SF; prestige address, lowest value score" },
  { name: "Tenderloin", psf: "$4–5", oneBR: "$2,800", walk: 90, transit: "Excellent", pool: "High", score: "6/10*", note: "*Safety risk offset the price advantage for most renters" },
];

const SCORE_COLORS: Record<string, string> = {
  "9/10": "text-green-700 bg-green-50",
  "8.5/10": "text-green-700 bg-green-50",
  "8/10": "text-blue-700 bg-blue-50",
  "7.5/10": "text-blue-700 bg-blue-50",
  "7/10": "text-gray-700 bg-gray-100",
  "6.5/10": "text-orange-700 bg-orange-50",
  "6/10*": "text-orange-700 bg-orange-50",
  "5/10": "text-red-700 bg-red-50",
};

const FAQS = [
  {
    q: "Which SF neighborhood has the best value for renters?",
    a: "Inner Richmond and the Sunset District consistently rank highest for value in 2026. Inner Richmond averages $5.50-$7/sqft with an 8.5/10 value score. The Outer Sunset reaches 9/10 value at $4.50-$6/sqft — the best pure dollar-per-square-foot value in San Francisco.",
  },
  {
    q: "What is the price per sqft in SOMA?",
    a: "SOMA averages $8-10/sqft/month in 2026. A typical 500 sqft studio runs approximately $4,000-$5,000/month. SOMA scores 7/10 on the value index — high walkability (95) and transit partially offset the premium pricing.",
  },
  {
    q: "Is the Sunset District cheaper than SOMA?",
    a: "Yes, significantly. The Inner Sunset averages $5-6.50/sqft versus SOMA's $8-10/sqft — a 30-40% discount. A 700 sqft 1BR in the Inner Sunset typically runs $3,400/month versus $4,500+ in SOMA. The trade-off is slightly longer transit commutes to the Financial District.",
  },
  {
    q: "Where does my rent dollar go furthest in San Francisco?",
    a: "For solo renters: the Outer Sunset ($4.50-$6/sqft, 9/10 value score) and Inner Richmond ($5.50-$7/sqft, 8.5/10) offer the most square footage per dollar. For roommate arrangements: the Castro and Mission offer the best combination of roommate pool density, walkability, and reasonable $/sqft.",
  },
];

export default function SfApartmentValueGuideContent() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <span className="text-sm font-semibold text-blue-700">2026 SF Neighborhood Value Analysis</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              SF Apartment Value Score — Where Your Dollar Goes Furthest in 2026
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Price-per-sqft analysis across every major SF neighborhood. The data you need before signing a lease.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-500">
              <span className="bg-gray-100 px-3 py-1 rounded-full">10 neighborhoods scored</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">$/sqft · walkability · transit · roommate pool</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">Median rent: $3,545/mo (Dec 2025)</span>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h2 className="font-bold text-blue-900 mb-2">How the Value Score Is Calculated</h2>
              <p className="text-blue-800 text-sm leading-relaxed">
                Value Score (1-10) weights four factors: <strong>price-per-sqft</strong> (40% of score — lower is better),
                <strong> walkability</strong> (25%), <strong>transit quality</strong> (20%), and <strong>roommate pool density</strong> (15%).
                Safety incidents and management quality subtract from raw scores. A 10/10 would be the cheapest, most walkable,
                transit-rich neighborhood in SF with the largest roommate pool. Pacific Heights scores 5/10 because the $/sqft premium
                overwhelms its walkability advantages.
              </p>
            </div>
          </div>
        </section>

        {/* Data Table */}
        <section className="py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">SF Neighborhood Value Index — 2026</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Neighborhood</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">$/sqft</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">1BR Avg</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Walk</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Transit</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Roommate Pool</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Value Score</th>
                  </tr>
                </thead>
                <tbody>
                  {NEIGHBORHOODS.map((n, i) => {
                    const scoreClass = SCORE_COLORS[n.score] || "text-gray-700 bg-gray-100";
                    return (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3">
                          <div className="font-semibold text-gray-900">{n.name}</div>
                          <div className="text-xs text-gray-400 mt-0.5">{n.note}</div>
                        </td>
                        <td className="px-4 py-3 text-right font-medium text-gray-700">{n.psf}</td>
                        <td className="px-4 py-3 text-right text-gray-600">{n.oneBR}</td>
                        <td className="px-4 py-3 text-right text-gray-600">{n.walk}</td>
                        <td className="px-4 py-3 text-center text-gray-600">{n.transit}</td>
                        <td className="px-4 py-3 text-center text-gray-600">{n.pool}</td>
                        <td className="px-4 py-3 text-center">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${scoreClass}`}>{n.score}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 text-xs mt-3">
              $/sqft = monthly rent per square foot. Walk = Walk Score (0-100). Data reflects Dec 2025 – Mar 2026 market averages.
            </p>
          </div>
        </section>

        {/* Roommate Multiplier */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Roommate Multiplier</h2>
            <p className="text-gray-600 mb-6">
              Adding a roommate doesn't just cut costs — it changes which neighborhoods are accessible.
              Here's how a roommate reshuffles the value equation across SF.
            </p>

            <div className="space-y-5">
              {[
                {
                  name: "SOMA (7/10 solo)",
                  solo: "$4,500/month",
                  split: "~$2,800/person (2BR at $5,600)",
                  verdict: "With a roommate, SOMA becomes genuinely competitive vs the Sunset on a per-person basis — and you get the 95 Walk Score.",
                  badge: "Improves to 8.5/10 with roommate",
                  badgeColor: "text-green-700 bg-green-100",
                },
                {
                  name: "Mission (7.5/10 solo)",
                  solo: "$4,100/month",
                  split: "~$2,400/person (2BR at $4,800)",
                  verdict: "The Mission has the largest roommate pool in SF. A 2BR split here combines the highest roommate pool density with the city's best food and nightlife at $2,400/person.",
                  badge: "Best roommate market in SF",
                  badgeColor: "text-blue-700 bg-blue-100",
                },
                {
                  name: "Pacific Heights (5/10 solo)",
                  solo: "$5,200/month",
                  split: "~$3,400/person (2BR at $6,800)",
                  verdict: "Even split, Pacific Heights remains the worst value in SF. The premium is prestige, not utility. The low roommate pool makes it harder to find a co-tenant here.",
                  badge: "Stays low value with roommate",
                  badgeColor: "text-red-700 bg-red-100",
                },
                {
                  name: "Outer Sunset (9/10 solo)",
                  solo: "$3,000/month",
                  split: "~$1,800/person (2BR at $3,600)",
                  verdict: "The Outer Sunset with a roommate at $1,800/person is the single most affordable quality-of-life option in San Francisco. Beach access, MUNI access, and some of the city's best Asian food.",
                  badge: "Lowest cost/person in SF",
                  badgeColor: "text-green-700 bg-green-100",
                },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${item.badgeColor}`}>{item.badge}</span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 mb-3 text-sm">
                    <div className="bg-white rounded-lg px-3 py-2">
                      <div className="text-xs text-gray-400 mb-0.5">Solo 1BR</div>
                      <div className="font-semibold text-gray-700">{item.solo}</div>
                    </div>
                    <div className="bg-white rounded-lg px-3 py-2">
                      <div className="text-xs text-gray-400 mb-0.5">2BR split</div>
                      <div className="font-semibold text-green-700">{item.split}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.verdict}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-purple-900 font-semibold mb-3">
                SF median rent requires $142K/year solo. With a roommate: $68K/year.
              </p>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Find Verified Roommates in SF →
              </a>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Related SF Renter Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/apartments/most-overrated-sf-apartments/" className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-purple-300 hover:shadow-sm transition-all">
                <div className="text-sm font-bold text-orange-700 mb-1">Avoid These Buildings</div>
                <div className="font-semibold text-gray-900">10 Most Overrated SF Apartments</div>
                <div className="text-sm text-gray-500 mt-1">Which buildings charge premium for below-average value</div>
              </Link>
              <Link href="/apartments/san-jose-foreclosure-tracker/" className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-purple-300 hover:shadow-sm transition-all">
                <div className="text-sm font-bold text-red-700 mb-1">Bay Area Distress Tracker</div>
                <div className="font-semibold text-gray-900">San Jose Foreclosure Tracker</div>
                <div className="text-sm text-gray-500 mt-1">Which buildings are financially stable right now</div>
              </Link>
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
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find a Verified Roommate in Any SF Neighborhood</h2>
            <p className="text-purple-200 mb-8">
              Free messaging. Government ID verification. Bay Area-specific. No subscription, no paywall.
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
