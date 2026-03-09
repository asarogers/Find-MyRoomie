"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const COMMUTE_TABLE = [
  { location: "Redwood City", solo: "$2,800", split: "$1,850", commute: "0–10 min" },
  { location: "San Carlos", solo: "$2,700", split: "$1,750", commute: "10–15 min" },
  { location: "East Palo Alto", solo: "$2,100", split: "$1,400", commute: "10–15 min" },
  { location: "Menlo Park", solo: "$3,000", split: "$2,100", commute: "10–15 min" },
  { location: "Palo Alto", solo: "$3,100", split: "$2,300", commute: "15–20 min" },
];

const FAQS = [
  {
    q: "What's the best neighborhood near Oracle HQ Redwood City?",
    a: "Redwood City itself offers the shortest commute (0–10 min, $1,700–$2,000/person shared 2BR). San Carlos (10–15 min north, $1,600–$1,900/person) and East Palo Alto (10–15 min south, $1,300–$1,600/person) are the best budget options.",
  },
  {
    q: "Is Oracle's Redwood City campus expensive to live near?",
    a: "Redwood City is mid-range for the Peninsula. Solo 1BR runs $2,500–$3,000/month. A 2BR roommate split brings per-person costs to $1,700–$2,000 — substantially less than Palo Alto or Menlo Park.",
  },
  {
    q: "Does Oracle hire many H-1B workers?",
    a: "Yes. Oracle is one of the largest H-1B petition filers in the US, particularly for database engineering, cloud infrastructure, and consulting roles. First-time arrivals from India and China face the same pre-arrival housing challenge: no US rental history, no local network, compressed timeline.",
  },
  {
    q: "How does Find MyRoomie help Oracle employees?",
    a: "Free messaging, verified profiles, and Peninsula-specific context including commute times from San Carlos, East Palo Alto, and Menlo Park to Oracle campus. No subscription — search for verified roommates without paying Roomster first.",
  },
];

const RELATED_CITIES = [
  { name: "Roommates Near Meta", slug: "roommates-near-meta", desc: "Meta Menlo Park — 10 min from Oracle campus. Same Peninsula corridor." },
  { name: "Roommates Near Stanford", slug: "roommates-near-stanford", desc: "Stanford is 15 min south. Many Oracle employees have Stanford ties." },
  { name: "Palo Alto, CA", slug: "palo-alto-ca", desc: "15–20 min to Oracle campus. High cost, high prestige." },
  { name: "Indian Tech Worker Guide", slug: "indian-roommate-finder-bay-area", desc: "H1B and H4 roommate guide — Peninsula section covers Oracle corridor." },
];

export default function RoommatesNearOracleContent() {
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
              <span className="text-sm font-semibold text-amber-700">Oracle HQ — Redwood City</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Roommates Near Oracle Redwood City — Free Verified Matching
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Redwood City solo 1BR: $2,800/month. A verified roommate split saves <strong>$11,400/year</strong>. East Palo Alto offers the same commute time at $1,400/person.
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
            <h2 className="text-3xl font-bold mb-4">Oracle Redwood City Commute + Cost Map</h2>
            <p className="text-gray-600 mb-8">
              Oracle Park (500 Oracle Pkwy) sits in Redwood Shores — a planned waterfront district east of US-101. Redwood City proper and San Carlos offer good cost-commute balance. East Palo Alto is the budget play directly to the south — same 10–15 min commute at $450/month less per person.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Location</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Solo 1BR</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">2BR Split/Person</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Oracle Campus Commute</th>
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

        {/* The Redwood City Roommate Reality */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Redwood City Roommate Reality</h2>
            <p className="text-gray-600 mb-6">
              Redwood City is on the Peninsula between San Jose and San Francisco — a commute corridor that has become increasingly expensive as tech company presence grew. The Oracle campus in Redwood Shores is a car-dependent suburban environment. The roommate market here runs through LinkedIn connections, local Indian community networks, and occasional Craigslist posts.
            </p>
            <p className="text-gray-600 mb-6">
              East Palo Alto is directly south of the Oracle campus and significantly underpriced. At $1,300–$1,600/person shared 2BR vs. $1,700–$2,000 in Redwood City proper, the savings are real. Local knowledge — knowing which EPA neighborhoods are walkable vs. not — is what most roommate searchers lack.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <p className="font-semibold text-purple-900">Find MyRoomie solves the Peninsula verification gap.</p>
              <ul className="mt-4 space-y-2 text-sm text-purple-800">
                <li>✓ Government ID verified profiles</li>
                <li>✓ Free messaging, no $30/month</li>
                <li>✓ EPA and Redwood City listings</li>
                <li>✓ Caltrain proximity filtering</li>
              </ul>
            </div>
          </div>
        </section>

        {/* H-1B First Arrivals at Oracle */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">H-1B First Arrivals at Oracle</h2>
            <p className="text-gray-600 mb-6">
              Oracle has filed H-1B petitions for thousands of employees annually over the past decade. New international hires — primarily in software engineering, database administration, and cloud consulting — arrive with a set start date and a compressed pre-arrival window. The Redwood Shores campus is relatively isolated, making local neighborhood knowledge particularly valuable.
            </p>
            <p className="text-gray-600 mb-6">
              The Redwood City specific challenge: the Oracle campus is in Redwood Shores (east of US-101), a mostly car-dependent area. Without a car, you need a roommate who drives or a Caltrain-accessible address in San Carlos or Redwood City proper. This level of transit-specific detail doesn't exist in any current roommate platform.
            </p>
            <p className="text-gray-600">
              Find MyRoomie is built to provide exactly this — verified, trustworthy roommate matching with real commute and transit context for international Oracle employees arriving in the Bay Area.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find your verified Oracle-area roommate — free</h2>
            <p className="text-purple-200 mb-4">
              Find MyRoomie is pre-launch. Members who join now get first access to verified listings in Redwood City, San Carlos, East Palo Alto, and the full Oracle commute corridor.
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
            <h2 className="text-2xl font-bold mb-6">Find Roommates Near Other Bay Area Tech Campuses</h2>
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
