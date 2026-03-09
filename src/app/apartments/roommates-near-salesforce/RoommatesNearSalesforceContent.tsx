"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const COMMUTE_TABLE = [
  { location: "Rincon Hill (SF)", solo: "$3,900", split: "$2,300", commute: "5–10 min walk" },
  { location: "SOMA (SF)", solo: "$3,800", split: "$2,200", commute: "10–15 min walk" },
  { location: "Mission District (SF)", solo: "$3,400", split: "$1,950", commute: "20–25 min" },
  { location: "Oakland", solo: "$2,600", split: "$1,500", commute: "30 min BART" },
  { location: "Berkeley", solo: "$2,800", split: "$1,700", commute: "35 min BART" },
];

const FAQS = [
  {
    q: "Where do Salesforce employees live in SF?",
    a: "SOMA and Rincon Hill (walking distance, $2,000–$2,400/person split), Mission District ($1,700–$2,000/person, 20 min), Oakland ($1,300–$1,600/person, 30 min BART), and Berkeley ($1,500–$1,800/person, 35 min BART).",
  },
  {
    q: "Is Salesforce Tower expensive to live near?",
    a: "Yes. Salesforce Tower is in SF's Financial District/SOMA. Solo 1BR within a 15-min walk runs $3,500–$4,200/month. A roommate split brings that to $2,000–$2,400/person — still expensive. Oakland via BART cuts that nearly in half.",
  },
  {
    q: "Do Salesforce Ohana relocations include housing help?",
    a: "Salesforce offers relocation packages for some hires but no direct housing placement. International employees still face the same SF housing gauntlet: no US credit history, income requirements, and a competitive rental market. Verified roommate matching solves the first-mover problem.",
  },
  {
    q: "How does Find MyRoomie work for Salesforce Tower commuters?",
    a: "Free messaging, verified profiles, and Bay Area-specific context including BART route times from Oakland and Berkeley to Salesforce Tower. No subscription. No Roomster paywall.",
  },
];

const RELATED_CITIES = [
  { name: "Roommates Near Stripe", slug: "roommates-near-stripe", desc: "Stripe SOMA — 10 min from Salesforce Tower, same tech hub ecosystem." },
  { name: "Roommates Near Airbnb", slug: "roommates-near-airbnb", desc: "Airbnb HQ SOMA — another major SF tech employer in the same corridor." },
  { name: "Oakland, CA", slug: "oakland-ca", desc: "30 min BART to Salesforce Tower. 40% cheaper rent. Growing tech scene." },
  { name: "Hayes Valley Guide", slug: "ansel-hayes-valley-sf", desc: "SF neighborhood 25 min from Salesforce Tower. High satisfaction scores." },
];

export default function RoommatesNearSalesforceContent() {
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
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="text-sm font-semibold text-amber-700">Salesforce Tower — SOMA San Francisco</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Roommates Near Salesforce Tower SF — Free Verified Matching
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Rincon Hill solo 1BR: $3,900/month. A verified roommate split saves <strong>$1,600/month</strong> — $19,200/year. Oakland via BART saves $2,400/year more.
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

        {/* Commute + Cost Map */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Salesforce Tower Commute + Cost Map</h2>
            <p className="text-gray-600 mb-8">
              Salesforce Tower at 415 Mission St is the tallest building in San Francisco. Nearby Rincon Hill and SOMA offer the shortest commutes. The Oakland BART corridor — including the Lake Merritt and 19th St stations — gives the best rent savings for a 30-minute commute.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Location</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Solo 1BR</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">2BR Split/Person</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Salesforce Tower Commute</th>
                  </tr>
                </thead>
                <tbody>
                  {COMMUTE_TABLE.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium">{row.location}</td>
                      <td className="p-3 border border-gray-200">{row.solo}</td>
                      <td className="p-3 border border-gray-200 font-semibold text-purple-700">{row.split}</td>
                      <td className="p-3 border border-gray-200 text-gray-500">{row.commute}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* The Salesforce Tower Roommate Reality */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Salesforce Tower Roommate Reality</h2>
            <p className="text-gray-600 mb-6">
              Salesforce Tower is in the heart of SF&apos;s most expensive rental market. The building is flanked by SOMA to the south and the Financial District to the north — both premium areas. The roommate market here is competitive and dominated by corporate relocation packages that don&apos;t include actual roommate placement.
            </p>
            <p className="text-gray-600 mb-6">
              For a Salesforce employee deciding where to live, the real question is whether proximity to the office justifies the SF premium. The answer: only if you value walkability and spontaneous post-work social life. Remote-capable Salesforce roles increasingly choose Oakland — a BART ride gives you Salesforce Tower access without the SF rent burden.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <p className="font-semibold text-purple-900">Find MyRoomie solves the SF trust gap.</p>
              <ul className="mt-4 space-y-2 text-sm text-purple-800">
                <li>✓ Government ID verified — real people only</li>
                <li>✓ Free messaging, no subscription</li>
                <li>✓ SF and East Bay in one search</li>
                <li>✓ BART time-to-tower calculations built in</li>
              </ul>
            </div>
          </div>
        </section>

        {/* H-1B Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Salesforce International Hires — Pre-Arrival Housing</h2>
            <p className="text-gray-600 mb-6">
              Salesforce employs a significant international workforce across its SF headquarters. H-1B and L-1 visa holders face a compressed pre-arrival window — typically 4–6 weeks from offer acceptance to first day — during which they must find housing in one of the most competitive rental markets in the US.
            </p>
            <p className="text-gray-600 mb-6">
              SF&apos;s income requirements compound the problem. Typical landlord requirement: 3x monthly rent in verified income. For a Rincon Hill 1BR at $3,900/month, that&apos;s $11,700/month. A roommate split reduces both the rent and the income threshold — making the apartment search feasible for a new hire.
            </p>
            <p className="text-gray-600">
              Find MyRoomie provides verified, trustworthy roommate matching for international Salesforce employees before they arrive — free messaging, no subscription, and real Bay Area context.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find your verified Salesforce-area roommate — free</h2>
            <p className="text-purple-200 mb-4">
              Find MyRoomie is pre-launch. Members now get first access to verified listings near Salesforce Tower — SOMA, Rincon Hill, Mission, and East Bay — before public launch.
            </p>
            <ul className="text-purple-200 text-sm mb-8 space-y-1">
              <li>✓ Priority matching before the platform goes public</li>
              <li>✓ Free messaging — permanently, no subscription tier required</li>
              <li>✓ Set commute radius and compatibility filters now</li>
            </ul>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Join the Verified Waitlist — Free →
            </a>
            <p className="text-purple-300 text-sm mt-3">Free messaging · Verified profiles · No subscription · No fake listings</p>
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

        {/* Related links */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Find Roommates Near Other SF Tech Employers</h2>
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
