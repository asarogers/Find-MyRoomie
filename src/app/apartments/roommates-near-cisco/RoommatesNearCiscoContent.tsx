"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const COMMUTE_TABLE = [
  { location: "North San Jose", solo: "$2,400", split: "$1,550", commute: "0–10 min" },
  { location: "Milpitas", solo: "$2,300", split: "$1,450", commute: "10–15 min" },
  { location: "Sunnyvale", solo: "$2,750", split: "$1,700", commute: "15–20 min" },
  { location: "Santa Clara", solo: "$2,700", split: "$1,650", commute: "15–20 min" },
  { location: "Fremont", solo: "$2,200", split: "$1,400", commute: "25–30 min" },
];

const FAQS = [
  {
    q: "Where is the best neighborhood for Cisco employees?",
    a: "North San Jose is directly adjacent to the Cisco campus (0–10 min, $1,500–$1,700/person shared 2BR). Sunnyvale (15–20 min, $1,600–$1,800/person) has better walkability. Milpitas (10–15 min, $1,400–$1,600/person) is the lowest-cost option with BART access.",
  },
  {
    q: "Is Cisco HQ in San Jose expensive to live near?",
    a: "North San Jose is among the more affordable Bay Area tech corridors. Solo 1BR runs $2,200–$2,600/month. A 2BR roommate split brings per-person costs to $1,400–$1,700 — significantly less than SF or Menlo Park.",
  },
  {
    q: "Does Cisco hire many H-1B employees?",
    a: "Yes. Cisco has historically been one of the top H-1B petition filers in the US. Many employees arrive from India, China, and Europe with no US rental history and a compressed pre-arrival timeline. Verified roommate matching is essential for this segment.",
  },
  {
    q: "How does Find MyRoomie help near Cisco?",
    a: "Free messaging, verified profiles, proximity filtering near the North San Jose campus, and South Bay neighborhood context. No $30/month subscription required.",
  },
];

const RELATED_CITIES = [
  { name: "Roommates Near Nvidia", slug: "roommates-near-nvidia", desc: "Nvidia Santa Clara campus — 15 min from Cisco HQ via US-101." },
  { name: "Roommates Near Apple", slug: "roommates-near-apple", desc: "Apple Park is 20 min from Cisco campus. Shuttle corridors overlap." },
  { name: "North San Jose Guide", slug: "north-san-jose-vs-downtown", desc: "North SJ vs Downtown SJ — the full comparison for Cisco employees." },
  { name: "Fremont, CA", slug: "fremont-ca", desc: "Budget play for Cisco commuters — BART access, South Asian community hub." },
];

export default function RoommatesNearCiscoContent() {
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
              <span className="text-sm font-semibold text-amber-700">Cisco HQ — North San Jose</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Roommates Near Cisco San Jose — Free Verified Matching
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              North San Jose solo 1BR: $2,400/month. A verified roommate split saves <strong>$15,600/year</strong> — with zero extra commute time to the Cisco campus.
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
            <h2 className="text-3xl font-bold mb-4">Cisco North San Jose Commute + Cost Map</h2>
            <p className="text-gray-600 mb-8">
              Cisco's campus at 170 W Tasman Drive is in North San Jose — one of the most affordable tech corridors in the Bay Area. North San Jose and Milpitas offer the best rent-to-commute ratio. Fremont is the budget play with BART access.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Location</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Solo 1BR</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">2BR Split/Person</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Cisco Campus Commute</th>
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

        {/* The North San Jose Roommate Reality */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The North San Jose Roommate Reality</h2>
            <p className="text-gray-600 mb-6">
              North San Jose is home to Cisco, Broadcom, and dozens of semiconductor and networking companies. The roommate market here is dominated by South Asian tech workers and runs through Sulekha, local Indian community Facebook groups, and word of mouth. Verification is rarely built into these channels.
            </p>
            <p className="text-gray-600 mb-6">
              Milpitas — directly north of the Cisco campus — is frequently overlooked but offers BART access (Milpitas Station on the Orange Line) and meaningfully lower rents than Sunnyvale or Santa Clara. For Cisco employees who want both cost savings and transit flexibility, Milpitas is underrated.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <p className="font-semibold text-purple-900">Find MyRoomie solves the North San Jose trust problem.</p>
              <ul className="mt-4 space-y-2 text-sm text-purple-800">
                <li>✓ Government ID verified</li>
                <li>✓ Free messaging, no $30/month</li>
                <li>✓ North SJ and Milpitas listings</li>
                <li>✓ BART proximity filtering</li>
              </ul>
            </div>
          </div>
        </section>

        {/* H-1B Arrivals at Cisco */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">H-1B Arrivals at Cisco — The Pre-Arrival Window</h2>
            <p className="text-gray-600 mb-6">
              Cisco files H-1B petitions for hundreds of employees annually, consistently ranking among the top US tech company filers. New international hires face a well-documented challenge: the October 1 start date cluster means thousands of H-1B workers enter the Bay Area rental market simultaneously in September, driving competition for verified listings.
            </p>
            <p className="text-gray-600 mb-6">
              The North San Jose specific challenge: understanding the difference between the Alviso/North First St corridor (industrial, not walkable) versus the newer mixed-use areas near Cisco's campus that offer genuine amenities. This is local knowledge most relocation packages don't include.
            </p>
            <p className="text-gray-600">
              Find MyRoomie is built for the H-1B first-arrival use case. Verified profiles, free messaging, and pre-arrival matching — so Cisco's international hires can confirm housing before they land.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find your verified Cisco-area roommate — free</h2>
            <p className="text-purple-200 mb-4">
              Find MyRoomie is pre-launch. Members who join now get first access to verified listings in North San Jose, Milpitas, Sunnyvale, and the Cisco commute corridor.
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
