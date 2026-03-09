"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const COMMUTE_TABLE = [
  { location: "SOMA (SF)", solo: "$3,800", split: "$2,200", commute: "0–10 min walk" },
  { location: "Mission District (SF)", solo: "$3,400", split: "$1,950", commute: "15–20 min" },
  { location: "Hayes Valley (SF)", solo: "$3,600", split: "$2,100", commute: "20–25 min" },
  { location: "Oakland", solo: "$2,600", split: "$1,500", commute: "30–35 min BART" },
  { location: "Berkeley", solo: "$2,800", split: "$1,700", commute: "35–40 min BART" },
];

const FAQS = [
  {
    q: "Where do most Stripe employees live in SF?",
    a: "SOMA (walking distance, $2,000–$2,300/person split), Mission District ($1,700–$2,000/person, 15 min by BART or bike), Hayes Valley ($1,900–$2,200/person, 20 min), and Oakland ($1,300–$1,600/person via BART, 30–35 min to office).",
  },
  {
    q: "Is it worth paying SOMA rent to be near Stripe?",
    a: "Only if you're in the office daily. SOMA 2BR split runs $2,000–$2,300/person. Oakland via BART saves $500–$700/month per person. Most Stripe employees who work hybrid prefer Mission or Hayes Valley as a middle ground.",
  },
  {
    q: "Does Stripe have H-1B employees who need housing?",
    a: "Yes. Stripe is a global fintech company with significant international hiring. First arrivals on H-1B or L-1 visas face the same Bay Area housing challenges: no US rental history, no local network, and a compressed pre-arrival timeline.",
  },
  {
    q: "How does Find MyRoomie help in SOMA?",
    a: "Verified profiles, free messaging, and the ability to find verified roommates in SOMA, Mission, Hayes Valley, and East Bay — in one place, for free, without Roomster's $30/month paywall.",
  },
];

const RELATED_CITIES = [
  { name: "Roommates Near Salesforce", slug: "roommates-near-salesforce", desc: "Salesforce Tower — 10 min walk from Stripe HQ, same SOMA ecosystem." },
  { name: "Roommates Near Airbnb", slug: "roommates-near-airbnb", desc: "Airbnb HQ is also SOMA — 888 Brannan St, 5 min from Stripe." },
  { name: "SOMA Neighborhood Guide", slug: "soma-788-san-francisco", desc: "SOMA rent reality, top buildings, and whether it's worth the premium." },
  { name: "Oakland, CA", slug: "oakland-ca", desc: "30–35 min BART to SOMA. Half the rent. Growing tech presence." },
];

export default function RoommatesNearStripeContent() {
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
              <span className="text-sm font-semibold text-amber-700">Stripe HQ — SOMA San Francisco</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Roommates Near Stripe SOMA — Free Verified Matching
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              SOMA solo 1BR: $3,800/month. A verified roommate split saves <strong>$1,600/month</strong> — $19,200/year. The Oakland BART option cuts your rent nearly in half.
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
            <h2 className="text-3xl font-bold mb-4">Stripe SOMA Commute + Cost Map</h2>
            <p className="text-gray-600 mb-8">
              SOMA is walkable to Stripe HQ at 510 Townsend St but commands SF&apos;s highest rents. Mission District offers the best balance — 15–20 min by BART or bike, $250/month less per person. Oakland cuts rent nearly in half with a 30–35 min BART commute.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Location</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Solo 1BR</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">2BR Split/Person</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Stripe HQ Commute</th>
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

        {/* The SOMA Roommate Reality */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The SOMA Roommate Reality</h2>
            <p className="text-gray-600 mb-6">
              SOMA is the densest tech-employer corridor in San Francisco. Stripe, GitHub, Twitter (now X), and dozens of YC-backed startups all have SOMA offices. The roommate market here is competitive, fragmented, and runs through Craigslist, Facebook groups, and word of mouth from existing employees.
            </p>
            <p className="text-gray-600 mb-6">
              For SOMA specifically, the biggest decision is SF vs. East Bay. Oakland at $1,500/person saves $700/month compared to SOMA and is 30–35 min on BART. The tradeoff: you lose walkability and flexibility on late nights. Verified roommate matching works for both options — the key is finding someone whose commute preferences align with yours.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <p className="font-semibold text-purple-900">Find MyRoomie solves the SOMA trust problem.</p>
              <ul className="mt-4 space-y-2 text-sm text-purple-800">
                <li>✓ Government ID verified — no fake listings</li>
                <li>✓ Free messaging, no $30/month</li>
                <li>✓ SF and East Bay listings in one place</li>
                <li>✓ Commute-time filtering by neighborhood</li>
              </ul>
            </div>
          </div>
        </section>

        {/* H-1B Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">International Stripe Employees — Housing Before You Arrive</h2>
            <p className="text-gray-600 mb-6">
              Stripe hires globally and operates in over 50 countries. Many employees arrive at the SF office on H-1B or TN visas with no US rental history. SF landlords have some of the strictest income requirements in the US — typically 3x monthly rent. For a $3,800/month SOMA apartment, that&apos;s $11,400/month verified income. Roommate splits halve this requirement.
            </p>
            <p className="text-gray-600 mb-6">
              The SOMA-specific challenge: understanding the neighborhood well enough to choose between SOMA, Mission, and Hayes Valley as a first-time SF resident. Each has dramatically different character, safety considerations, and social dynamics that don&apos;t appear in any relocation package.
            </p>
            <p className="text-gray-600">
              Find MyRoomie gives international Stripe employees a verified, trustworthy way to find a compatible roommate before arriving in SF — free, without a subscription, with real Bay Area context built in.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find your verified Stripe-area roommate — free</h2>
            <p className="text-purple-200 mb-4">
              Find MyRoomie is pre-launch. Members who join now get first access to verified listings in SOMA, Mission, Hayes Valley, and Oakland — before the platform opens to the public.
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
