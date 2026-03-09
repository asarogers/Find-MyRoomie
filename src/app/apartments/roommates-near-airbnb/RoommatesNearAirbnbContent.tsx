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
  { location: "Potrero Hill (SF)", solo: "$3,500", split: "$2,000", commute: "15–20 min" },
  { location: "Oakland", solo: "$2,600", split: "$1,500", commute: "30 min BART" },
];

const FAQS = [
  {
    q: "Where do Airbnb employees live in SF?",
    a: "SOMA (walking distance, $2,000–$2,300/person split), Mission District ($1,700–$2,000/person, 20 min bike or BART), Hayes Valley ($1,900–$2,200/person, 20–25 min), and Oakland ($1,300–$1,600/person, 30 min BART).",
  },
  {
    q: "Is Airbnb's SOMA office expensive to live near?",
    a: "SOMA at 888 Brannan St has high density and premium rents. Solo 1BR runs $3,600–$4,200/month. A roommate split brings that to $2,000–$2,400/person. Oakland via BART or Mission District saves $400–$700/month per person.",
  },
  {
    q: "Does Airbnb have international employees who need housing?",
    a: "Yes. Airbnb's global workforce includes significant international hiring for engineering and product roles. H-1B and L-1 arrivals face SF's income requirements and need verified roommate matching — particularly because Airbnb's culture makes international employees more likely to have roommates who work in hospitality or tech.",
  },
  {
    q: "Is it ironic to use Find MyRoomie if you work at Airbnb?",
    a: "Only slightly. Airbnb is a great platform for short-term stays but not designed for long-term roommate matching in SF. Find MyRoomie adds the verification layer — government ID confirmed — that long-term roommate relationships require.",
  },
];

const RELATED_CITIES = [
  { name: "Roommates Near Stripe", slug: "roommates-near-stripe", desc: "Stripe SOMA — 5 min from Airbnb HQ at 888 Brannan." },
  { name: "Roommates Near Uber", slug: "roommates-near-uber", desc: "Uber Mission Bay — 10 min from Airbnb HQ. Same tech corridor." },
  { name: "SOMA Neighborhood Guide", slug: "soma-788-san-francisco", desc: "SOMA rent reality — is the premium over Mission worth it?" },
  { name: "Hayes Valley Guide", slug: "ansel-hayes-valley-sf", desc: "20–25 min from Airbnb HQ. SF's most livable neighborhood for tech workers." },
];

export default function RoommatesNearAirbnbContent() {
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
              <span className="text-sm font-semibold text-amber-700">Airbnb HQ — SOMA, SF</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Roommates Near Airbnb SOMA — Free Verified Matching
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              SOMA solo 1BR: $3,800/month. A verified roommate split saves <strong>$1,600/month — $19,200/year</strong>. Or save $700/month more by commuting from Oakland on BART.
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
            <h2 className="text-3xl font-bold mb-4">Airbnb SOMA Commute + Cost Map</h2>
            <p className="text-gray-600 mb-8">
              Airbnb HQ at 888 Brannan St is in the heart of SOMA — surrounded by tech companies and premium apartments. The Mission District at 15–20 min offers the best SF-resident alternative. Oakland saves the most with a 30-min BART commute.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Location</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Solo 1BR</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">2BR Split/Person</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Airbnb HQ Commute</th>
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
            <h2 className="text-3xl font-bold mb-4">The SOMA Roommate Reality (Airbnb Edition)</h2>
            <p className="text-gray-600 mb-6">
              SOMA at 888 Brannan St is surrounded by some of SF's newest and most expensive apartment buildings. The roommate market here is competitive — most units are modern 1BR designed for solo occupancy, and landlords set income requirements at 3x monthly rent. For a $3,800/month apartment, that's $11,400/month verified income requirement just to apply.
            </p>
            <p className="text-gray-600 mb-6">
              There's an irony in Airbnb employees needing help finding permanent roommates — but it's real. Airbnb works for short-term stays; it has no verified long-term roommate matching product for its own employees' permanent housing needs. Find MyRoomie fills that gap.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <p className="font-semibold text-purple-900">Find MyRoomie: what Airbnb doesn't offer its own employees.</p>
              <ul className="mt-4 space-y-2 text-sm text-purple-800">
                <li>✓ Government ID verified, not just social profile</li>
                <li>✓ Free messaging, no subscription</li>
                <li>✓ Long-term roommate matching, not short-term rental</li>
                <li>✓ SF and East Bay options</li>
              </ul>
            </div>
          </div>
        </section>

        {/* International Airbnb Employees */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">International Airbnb Employees — Pre-Arrival Matching</h2>
            <p className="text-gray-600 mb-6">
              Airbnb hires globally. Engineering, design, and product roles recruit internationally, and many new SF office hires arrive on H-1B or O-1 visas with a set start date and no prior US housing history. The SOMA rental market's income verification requirements create an immediate barrier.
            </p>
            <p className="text-gray-600 mb-6">
              The SOMA challenge: 888 Brannan St is surrounded by expensive new construction. The best alternatives — Mission District and Hayes Valley — require knowing which specific blocks are right for each person's lifestyle and commute preferences. This is local knowledge a verified local roommate provides.
            </p>
            <p className="text-gray-600">
              Find MyRoomie provides pre-arrival verified roommate matching for international Airbnb employees — free messaging, real Bay Area context, and no subscription.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find your verified Airbnb-area roommate — free</h2>
            <p className="text-purple-200 mb-4">
              Find MyRoomie is pre-launch. Members now get first access to verified listings near Airbnb HQ — SOMA, Mission, Hayes Valley, and Oakland — before public launch.
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
