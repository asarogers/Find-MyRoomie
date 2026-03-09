"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const COMMUTE_TABLE = [
  { location: "Mission Bay (SF)", solo: "$3,800", split: "$2,200", commute: "0–5 min walk" },
  { location: "Potrero Hill (SF)", solo: "$3,500", split: "$2,000", commute: "10–15 min" },
  { location: "Mission District (SF)", solo: "$3,400", split: "$1,950", commute: "15–20 min" },
  { location: "SOMA (SF)", solo: "$3,800", split: "$2,200", commute: "10–15 min" },
  { location: "Oakland", solo: "$2,600", split: "$1,500", commute: "30–35 min BART" },
];

const FAQS = [
  {
    q: "Where do Uber employees typically live in SF?",
    a: "Mission Bay and SOMA (walking distance, $2,000–$2,400/person split), Mission District ($1,700–$2,000/person, 15–20 min bike or BART), Potrero Hill ($1,900–$2,200/person, 10–15 min), and Oakland ($1,300–$1,600/person, 30–35 min BART).",
  },
  {
    q: "Is Uber's Mission Bay HQ expensive to live near?",
    a: "Mission Bay is one of SF's newer and pricier districts. Solo 1BR runs $3,500–$4,000/month. A roommate split brings that to $2,000–$2,400/person. The Mission District or Oakland via BART can cut that by 25–40%.",
  },
  {
    q: "What about international Uber employees needing housing?",
    a: "Uber employs a significant international workforce across engineering, data science, and product roles. H-1B arrivals face SF's income requirements (3x rent) and competitive market. Verified roommate matching is the fastest path to a viable living situation.",
  },
  {
    q: "How does Find MyRoomie work for Uber's Mission Bay?",
    a: "Free messaging, verified profiles, and SF neighborhood context including Mission Bay, Potrero Hill, and Mission District commute times. No subscription — no Roomster paywall.",
  },
];

const RELATED_CITIES = [
  { name: "Roommates Near Airbnb", slug: "roommates-near-airbnb", desc: "Airbnb SOMA — 5 min from Uber HQ. Same Mission Bay ecosystem." },
  { name: "Roommates Near Stripe", slug: "roommates-near-stripe", desc: "Stripe SOMA — 10 min from Uber HQ via 3rd St." },
  { name: "Mission District Guide", slug: "mission-district-san-francisco", desc: "SF's most vibrant neighborhood — 15 min from Uber HQ, real savings." },
  { name: "Oakland, CA", slug: "oakland-ca", desc: "30 min BART to Mission Bay. 40% cheaper rent than SOMA." },
];

export default function RoommatesNearUberContent() {
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
              <span className="text-sm font-semibold text-amber-700">Uber HQ — Mission Bay, SF</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Roommates Near Uber Mission Bay — Free Verified Matching
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Mission Bay solo 1BR: $3,800/month. A verified roommate split saves <strong>$1,600/month — $19,200/year</strong>. Oakland via BART cuts your monthly rent nearly in half.
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
            <h2 className="text-3xl font-bold mb-4">Uber Mission Bay Commute + Cost Map</h2>
            <p className="text-gray-600 mb-8">
              Uber HQ at 1515 3rd St is in Mission Bay — SF's newest tech neighborhood, also home to Chase Center and UCSF's hospital. Potrero Hill to the south is quieter and slightly cheaper. Mission District offers genuine character and savings at 15–20 min. Oakland on BART is the budget play.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Location</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Solo 1BR</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">2BR Split/Person</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Uber HQ Commute</th>
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

        {/* The Mission Bay Roommate Reality */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Mission Bay Roommate Reality</h2>
            <p className="text-gray-600 mb-6">
              Mission Bay is one of SF's most recently developed neighborhoods — dense, modern, and expensive. The roommate market here is relatively thin because most units are newer 1BR apartments designed for solo occupancy at premium prices. Finding a true 2BR roommate split in Mission Bay requires either local connections or a platform with real Mission Bay listings.
            </p>
            <p className="text-gray-600 mb-6">
              Potrero Hill, directly south of Mission Bay, is frequently overlooked by Uber employees and offers meaningfully lower rents in an established SF neighborhood. The 10–15 min commute by bike or rideshare makes it a genuine alternative. Mission District at 15–20 min adds authentic SF character with real cost savings.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <p className="font-semibold text-purple-900">Find MyRoomie solves the Mission Bay search problem.</p>
              <ul className="mt-4 space-y-2 text-sm text-purple-800">
                <li>✓ Government ID verified — no fake listings</li>
                <li>✓ Free messaging, no $30/month</li>
                <li>✓ Mission Bay, Potrero, Mission, and Oakland</li>
                <li>✓ Bike commute + BART options</li>
              </ul>
            </div>
          </div>
        </section>

        {/* International Uber Employees */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">International Uber Employees — Pre-Arrival Housing</h2>
            <p className="text-gray-600 mb-6">
              Uber employs engineers, data scientists, and product managers across dozens of countries. New SF office hires on H-1B and L-1 visas navigate the same SF housing gauntlet: 3x monthly rent income verification, competitive market, and unfamiliar neighborhoods. A Mission Bay 1BR at $3,800/month requires $11,400/month verified income.
            </p>
            <p className="text-gray-600 mb-6">
              The Mission Bay-specific challenge: the neighborhood is almost entirely new construction with limited character. International employees often discover post-arrival that Potrero Hill or the Mission District would have been better fits — but they signed a lease before arriving. Verified pre-arrival matching with real neighborhood context prevents this.
            </p>
            <p className="text-gray-600">
              Find MyRoomie is built for pre-arrival matching — international Uber employees can find verified, compatible roommates before landing in SF, with real information about Mission Bay alternatives.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find your verified Uber-area roommate — free</h2>
            <p className="text-purple-200 mb-4">
              Find MyRoomie is pre-launch. Members now get first access to verified listings near Uber HQ — Mission Bay, Potrero Hill, Mission District, and Oakland — before public launch.
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
            <h2 className="text-2xl font-bold mb-6">Find Roommates Near Other SF Tech Campuses</h2>
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
