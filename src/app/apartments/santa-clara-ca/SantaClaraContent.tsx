"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const EMPLOYERS = [
  { name: "Intel HQ", detail: "Robert Noyce Blvd, Santa Clara. Still one of the largest single-site tech employers in the country." },
  { name: "Nvidia HQ", detail: "Voyager campus, Santa Clara. 12,000+ employees and expanding." },
  { name: "AMD", detail: "Santa Clara HQ, a few miles from Intel." },
  { name: "Palo Alto Networks", detail: "Santa Clara campus. One of the fastest-growing security companies in the world." },
  { name: "Santa Clara University", detail: "5,500+ undergraduates plus grad school, all competing for the same rental stock." },
];

const COMMUTE_OPTIONS = [
  { route: "Lawrence Caltrain station", time: "SF 55 min · Mountain View 8 min · Sunnyvale 5 min · San Jose 12 min" },
  { route: "Great America / Levi's Stadium area", time: "Walkable neighborhoods with newer apartment stock" },
  { route: "Highway 101/280/237", time: "Most major campuses 10–20 minutes by car in light traffic" },
  { route: "VTA light rail", time: "Connects to downtown San Jose; useful for SCU students" },
];

const RENT_TABLE = [
  { scenario: "2BR apartment, total", monthly: "$2,800–$3,400", annual: "$33,600–$40,800" },
  { scenario: "2BR split with roommate", monthly: "$1,400–$1,700/person", annual: "$16,800–$20,400/person" },
  { scenario: "1BR solo", monthly: "$2,000–$2,500", annual: "$24,000–$30,000" },
  { scenario: "Savings vs. 1BR solo", monthly: "$600–$800", annual: "$7,200–$9,600" },
];

const FAQS = [
  {
    q: "What tech companies are in Santa Clara?",
    a: "Santa Clara hosts Intel HQ (Robert Noyce Blvd), Nvidia HQ (Voyager campus, 12,000+ employees), AMD headquarters, Palo Alto Networks, and Santa Clara University — all within five miles of each other. No other city in Silicon Valley has this density of major employer campuses in such a compact footprint.",
  },
  {
    q: "How does Santa Clara compare to San Jose for renters?",
    a: "Santa Clara is typically $200–$400/month more expensive than comparable San Jose neighborhoods, but offers better proximity to the major tech campuses on the 101/280 corridor. The Lawrence Caltrain station provides access to San Francisco (55 min), Mountain View (8 min), and Sunnyvale (5 min) — making it one of the most commute-flexible bases in the valley.",
  },
  {
    q: "How much can I save with a roommate in Santa Clara?",
    a: "Santa Clara 2BR apartments run $2,800–$3,400/month. Split with one roommate: $1,400–$1,700/person versus $2,000–$2,500 for a 1BR solo. Savings: $600–$800/month. Over a two-year H-1B stint or new hire contract, that's $14,400–$19,200 back in your pocket.",
  },
];

const RELATED_CITIES = [
  { name: "Cupertino, CA", slug: "cupertino-ca", desc: "Near Apple Park. Majority Asian-American. 2BR $3,200–$3,800/mo." },
  { name: "Sunnyvale, CA", slug: "sunnyvale-ca", desc: "LinkedIn HQ, Apple/Google access. The quiet achiever of Silicon Valley." },
  { name: "Fremont, CA", slug: "fremont-ca", desc: "The Bay Area's largest South Asian community. Warm Springs BART to Silicon Valley." },
  { name: "Palo Alto, CA", slug: "palo-alto-ca", desc: "Stanford, Sand Hill Road, Caltrain. The most expensive South Bay zip." },
];

export default function SantaClaraContent() {
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
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-sm font-semibold text-blue-700">Intel · Nvidia · AMD · Palo Alto Networks — all within 5 miles</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Santa Clara Roommate Finder — Find Verified Roommates in Silicon Valley's Tech Corridor
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Santa Clara has more Fortune 500 tech HQs per square mile than anywhere in the US. 2BR apartments run $2,800–$3,400/month — split to <strong>$1,400–$1,700/person</strong>. Free messaging. No subscription. No scammers.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Get Early Access — Free →
            </a>
            <p className="text-sm text-gray-400 mt-3">No credit card · No subscription · Verified profiles only</p>
          </div>
        </section>

        {/* Employer concentration */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Employer Concentration That Changes the Math</h2>
            <p className="text-gray-600 mb-6">
              No other city in Silicon Valley has this density of major employer campuses in such a compact footprint. This concentration means Santa Clara has no soft rental season. Every spring brings a new cohort of interns, new hires, and international transfers. Every fall brings another wave of SCU students. Vacancy sits low. Prices don't drop.
            </p>
            <div className="space-y-3 mb-8">
              {EMPLOYERS.map((e, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="font-bold mb-1">{e.name}</div>
                  <div className="text-gray-600 text-sm">{e.detail}</div>
                </div>
              ))}
            </div>

            {/* Rent table */}
            <h3 className="text-2xl font-bold mb-4">Rent Reality: What the Split Changes</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Scenario</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Monthly</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Annual</th>
                  </tr>
                </thead>
                <tbody>
                  {RENT_TABLE.map((row, i) => (
                    <tr key={i} className={i === RENT_TABLE.length - 1 ? "bg-green-50 font-bold" : i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200">{row.scenario}</td>
                      <td className="p-3 border border-gray-200">{row.monthly}</td>
                      <td className={`p-3 border border-gray-200 ${i === RENT_TABLE.length - 1 ? "text-green-700" : ""}`}>{row.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-sm">Tech salary doesn't mean you want to pay $3,000/month to live alone in a city you're barely awake to enjoy. Most people who do the math choose a roommate.</p>
          </div>
        </section>

        {/* International workers */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">International Tech Workers: Your First Bay Area Housing Is the Hardest</h2>
            <p className="text-gray-600 mb-6">
              A significant share of Santa Clara's tech workforce arrives on L-1 or H-1B visas, transferred from international offices or hired directly from abroad. For these workers, the first Bay Area housing search is the hardest: no credit history, no local network, unfamiliar with neighborhood quality differences, and under pressure to get settled before the first day of work.
            </p>
            <p className="text-gray-600 mb-8">
              National platforms don't help. They have listings in Santa Clara, but they don't know the difference between the Caltrain-accessible blocks near Lawrence Expressway and the car-dependent complexes that will add 40 minutes to your commute. They don't verify the people you're about to meet. And most charge you before you can even send a message.
            </p>

            {/* Commute hub */}
            <h3 className="text-2xl font-bold mb-4">Santa Clara as a Commute Hub</h3>
            <div className="space-y-3">
              {COMMUTE_OPTIONS.map((c, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="font-semibold mb-1">{c.route}</div>
                  <div className="text-gray-600 text-sm">{c.time}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Verification section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Verified Roommates, Not Listings</h2>
            <p className="text-gray-600 mb-6">
              The roommate search in Santa Clara runs through the usual broken channels: Craigslist (active scam risk for the South Asian community in particular), generic national platforms with no Bay Area context, and informal internal channels at major employers. None of these verify anyone. None let you filter for cultural compatibility, dietary preferences, or schedule alignment before you invest time in a showing.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <p className="font-semibold text-purple-900 mb-2">Find MyRoomie is the verification layer that Santa Clara's roommate market is missing.</p>
              <ul className="space-y-2 text-sm text-purple-800">
                <li>✓ Real profiles, verified identities</li>
                <li>✓ Cultural compatibility and dietary preference filters</li>
                <li>✓ Free messaging — no paywall to contact anyone</li>
                <li>✓ Built for Bay Area tech corridor renters, not national generic use</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find Your Verified Roommate in the Heart of Silicon Valley</h2>
            <p className="text-purple-200 mb-8">
              Before launch, before everyone else. Free to use. Always.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Join the Santa Clara Waitlist — Free →
            </a>
            <p className="text-purple-300 text-sm mt-3">No subscription · No paywall · Ever</p>
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
            <h2 className="text-2xl font-bold mb-6">Find Roommates Across the Bay Area Tech Corridor</h2>
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
