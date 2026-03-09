"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const NEIGHBORHOODS = [
  { name: "Castro Street area (downtown MV)", rent: "Shared $2,100–$2,500/mo", desc: "Most walkable, highest restaurant density, Caltrain access. 0.5 miles to Google. Best for those who want to walk everywhere and pay for the privilege." },
  { name: "North Whisman (near Google campus)", rent: "Shared $1,800–$2,300/mo", desc: "Quietest, suburban feel, direct walking/biking distance to Googleplex. Parking included usually. Best for engineers who want to skip the commute entirely." },
  { name: "Old Middlefield Way (east MV near 101)", rent: "Shared $1,600–$1,900/mo", desc: "Less desirable address, industrial adjacency. Google shuttle accessible. Best for cost-first renters willing to trade address prestige for $400/month in savings." },
  { name: "San Antonio area (MV/Los Altos border)", rent: "Shared $2,000–$2,400/mo", desc: "Quietest, most family-oriented. Close to San Antonio Caltrain. Slightly longer to Google campus. Best for those who value residential calm over proximity." },
];

const RENT_TABLE = [
  { scenario: "1BR solo (median)", monthly: "$3,100", annual: "$37,200", income: "$111,600" },
  { scenario: "2BR split (Reserve at MV)", monthly: "$2,100", annual: "$25,200", income: "$75,600" },
  { scenario: "2BR split (budget area)", monthly: "$1,750", annual: "$21,000", income: "$63,000" },
];

const COMPARISON = [
  { city: "Mountain View", summary: "Closest to Google, most walkable, most expensive, 7.9% YoY growth" },
  { city: "Sunnyvale", summary: "Google shuttle distance (3-5 mi), 15-20% cheaper, more apartment inventory" },
  { city: "Palo Alto", summary: "Stanford proximity, VC Row energy, MOST expensive ($3,800+ 1BR), CalTrain hub" },
];

const FAQS = [
  {
    q: "How much does a shared room cost in Mountain View?",
    a: "$1,600-$2,400/month for a shared room near Google in Mountain View, depending on proximity to Castro Street and exact neighborhood. The Reserve at Mountain View runs $2,100/person when sharing a 2BR. More affordable areas near Old Middlefield Way run $1,600-$1,900.",
  },
  {
    q: "Is Mountain View near Google headquarters?",
    a: "Yes. Google's Googleplex HQ is at 1600 Amphitheatre Pkwy, Mountain View. Many Mountain View apartments are within 0.5-2 miles of the main campus. Google operates a free shuttle network that covers Mountain View, Sunnyvale, and surrounding cities.",
  },
  {
    q: "Why is Mountain View rent growing so fast?",
    a: "Mountain View has the Bay Area's highest YoY rent growth at 7.9% (Zumper Q4 2025 data). The combination of Google HQ proximity, limited new supply, and continued tech hiring pressure has outpaced all other Bay Area cities including San Francisco.",
  },
  {
    q: "Can I afford Mountain View on a Google salary?",
    a: "Google L4 median base: $200K+. Mountain View 1BR solo: $3,100/month = $37,200/year = 19% of gross. Manageable solo. For L3 or new grad roles ($160K-$180K base), a roommate at $2,100/month keeps housing under 16% of gross. Efficient.",
  },
  {
    q: "Is it better to live in Mountain View or Sunnyvale for Google?",
    a: "Mountain View puts you on Google's doorstep (0.5-2 miles vs Sunnyvale's 3-5 miles). But Mountain View is 15-20% more expensive. Sunnyvale is the tradeoff: slightly longer commute (Google shuttle covers it), meaningfully lower rent. If you walk/bike to work: Mountain View. If you take the shuttle: Sunnyvale.",
  },
];

const RELATED_CITIES = [
  { name: "Sunnyvale, CA", slug: "sunnyvale-ca", desc: "Google shuttle distance, 15-20% cheaper rent, more inventory than Mountain View." },
  { name: "Palo Alto, CA", slug: "palo-alto-ca", desc: "Stanford, Sand Hill Road, Caltrain. The most expensive South Bay zip." },
  { name: "San Jose, CA", slug: "san-jose-ca", desc: "Silicon Valley's largest city. More affordable, direct Caltrain access." },
  { name: "Berkeley, CA", slug: "berkeley-ca", desc: "East Bay alternative. UC Berkeley, LBNL, BART connected." },
];

export default function MountainViewContent() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-amber-700">7.9% YoY — Fastest Bay Area Rent Growth</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Mountain View Roommate Finder — Near Google HQ, Rent Growing Fast
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Reserve at Mountain View: $4,200/month for a 2BR. Split it: <strong>$2,100/person</strong>. Find a verified roommate for free — no Roomster paywall.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Find My Mountain View Roommate — Free →
            </a>
            <p className="text-sm text-gray-400 mt-3">No credit card · No subscription · Free messaging forever</p>
          </div>
        </section>

        {/* Stat strip */}
        <section className="py-10 px-4 bg-gray-50 border-b border-gray-100">
          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "$3,100/mo", label: "median 1BR solo" },
              { value: "$2,100/mo", label: "with roommate" },
              { value: "7.9% YoY", label: "rent growth" },
              { value: "0.6 mi", label: "to Google HQ" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-extrabold text-purple-700">{stat.value}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Key fact box */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-bold text-amber-900 mb-3 text-lg">The Mountain View rent acceleration fact</h3>
              <p className="text-amber-800 text-sm leading-relaxed">
                Mountain View has the Bay Area's fastest rent growth at 7.9% year-over-year (Zumper Q4 2025). A 1BR that cost $2,870 in 2024 costs $3,096 in 2025. The income required solo: $111,456/year. With a roommate: $75,600/year.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1 - Rent Reality */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Mountain View Rent Reality in 2026</h2>
            <p className="text-gray-600 mb-6">
              Mountain View is the most expensive mid-peninsula city for renters in 2026. The Reserve at Mountain View, the city's benchmark luxury complex (near Google, fitness center, resort pool), has a median 2BR at $4,200/month. Solo 1BRs at similar quality run $3,100–$3,600/month.
            </p>
            <p className="text-gray-600 mb-6">
              The 7.9% YoY growth rate means a 2BR that would have been $3,890/month in 2024 is $4,200/month in 2025. Projecting forward at the same rate: $4,534 in 2026. For a new Google hire relying on a 2026 offer letter rent estimate, the number may already be outdated.
            </p>
          </div>
        </section>

        {/* Section 2 - Neighborhoods */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Castro Street vs Old Middlefield — Where to Live in Mountain View</h2>
            <div className="space-y-4">
              {NEIGHBORHOODS.map((n, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-lg">{n.name}</h4>
                    <span className="text-sm font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full">{n.rent}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{n.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 - Roommate Math */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Roommate Math</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Scenario</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Monthly</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Annual</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Income Needed (3x)</th>
                  </tr>
                </thead>
                <tbody>
                  {RENT_TABLE.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200">{row.scenario}</td>
                      <td className="p-3 border border-gray-200">{row.monthly}</td>
                      <td className="p-3 border border-gray-200">{row.annual}</td>
                      <td className="p-3 border border-gray-200">{row.income}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600">
              The roommate move saves $12,000–$16,200/year in Mountain View. At Bay Area investment returns, that's the down payment on a different future.
            </p>
          </div>
        </section>

        {/* Section 4 - City comparison */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Mountain View vs Sunnyvale vs Palo Alto</h2>
            <div className="space-y-4">
              {COMPARISON.map((c, i) => (
                <div key={i} className="border-l-4 border-purple-300 pl-4 py-2">
                  <h4 className="font-bold mb-1">{c.city}</h4>
                  <p className="text-gray-600 text-sm">{c.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find your Mountain View roommate — free</h2>
            <p className="text-purple-200 mb-8">
              No Roomster paywall. No subscription. Verified profiles near Google HQ — free messaging forever.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find My Mountain View Roommate — Free →
            </a>
            <p className="text-purple-300 text-sm mt-3">Free messaging · Verified profiles · No subscription</p>
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
                    className="w-full text-left p-5 font-bold flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <span className="text-purple-600 ml-4">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-gray-600">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related cities */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Find Roommates Across the Bay Area</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {RELATED_CITIES.map((c, i) => (
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
