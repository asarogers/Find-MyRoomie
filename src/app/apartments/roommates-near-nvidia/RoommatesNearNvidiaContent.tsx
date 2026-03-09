"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const COMMUTE_TABLE = [
  { location: "Santa Clara", solo: "$2,700", split: "$1,650", commute: "0–10 min" },
  { location: "Sunnyvale", solo: "$2,750", split: "$1,700", commute: "10–15 min" },
  { location: "San Jose (North)", solo: "$2,400", split: "$1,550", commute: "15–20 min" },
  { location: "San Jose (West)", solo: "$2,500", split: "$1,600", commute: "20–25 min" },
  { location: "Milpitas", solo: "$2,300", split: "$1,450", commute: "15–20 min" },
];

const FAQS = [
  {
    q: "What's the best neighborhood for Nvidia employees?",
    a: "Santa Clara (0–10 min to HQ, $1,550–$1,800/person shared 2BR) and Sunnyvale (10–15 min, $1,600–$1,900/person) offer the best cost-commute ratio. San Jose North (20–25 min, $1,400–$1,600/person) is the budget option.",
  },
  {
    q: "Is Nvidia HQ in Santa Clara expensive to live near?",
    a: "Santa Clara is mid-range for the Bay Area. Solo 1BR runs $2,500–$2,900/month. A 2BR roommate split brings per-person cost to $1,550–$1,800 — significantly below SF or Menlo Park.",
  },
  {
    q: "Do Nvidia H-1B employees struggle with Bay Area housing?",
    a: "Yes. Nvidia has one of the highest H-1B filing rates of any tech company. First arrivals face no US rental history, a compressed timeline, and a competitive market for rooms near the Santa Clara campus.",
  },
  {
    q: "How does Find MyRoomie help Nvidia employees?",
    a: "Free messaging, verified profiles, and Bay Area-specific context including proximity to the Nvidia campus corridors. No subscription fee — search for verified roommates near Santa Clara without paying Roomster $30/month first.",
  },
];

const RELATED_CITIES = [
  { name: "Roommates Near Apple", slug: "roommates-near-apple", desc: "Apple Park Cupertino — 15 min south of Nvidia HQ." },
  { name: "Roommates Near Google", slug: "roommates-near-google", desc: "Google Mountain View — Nvidia-to-Google is 15 min via US-101." },
  { name: "Santa Clara, CA", slug: "santa-clara-ca", desc: "Intel, Nvidia, Broadcom — the most tech-dense city in Silicon Valley." },
  { name: "San Jose, CA", slug: "san-jose-ca", desc: "North San Jose is the budget corridor for Nvidia commuters." },
];

export default function RoommatesNearNvidiaContent() {
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
              <span className="text-sm font-semibold text-amber-700">Nvidia HQ — Santa Clara</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Roommates Near Nvidia Santa Clara — Free Verified Matching
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Santa Clara solo 1BR: $2,700/month. A verified roommate split saves <strong>$1,200/month</strong> — $14,400/year — while staying within 10 minutes of Nvidia HQ.
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
            <h2 className="text-3xl font-bold mb-4">Nvidia Santa Clara Commute + Cost Map</h2>
            <p className="text-gray-600 mb-8">
              Santa Clara is directly walkable to Nvidia HQ and sits in the sweet spot of South Bay costs. Sunnyvale adds a small premium with marginally better amenities. Milpitas is the lowest-cost option with a short 15–20 min drive.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Location</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Solo 1BR</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">2BR Split/Person</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Nvidia Commute</th>
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

        {/* The Santa Clara Roommate Reality */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Santa Clara Roommate Reality</h2>
            <p className="text-gray-600 mb-6">
              Santa Clara is home to a high concentration of tech workers — Intel, Nvidia, and Broadcom all have major presence here. The roommate market runs through South Asian community networks, LinkedIn, and Facebook groups. Verification is not a built-in feature of any of these.
            </p>
            <p className="text-gray-600 mb-6">
              The Nvidia campus at 2788 San Tomas Expy is in a relatively quiet, car-dependent area. Knowing which specific apartment complexes are nearest to the Nvidia campus vs. closer to central Santa Clara or Sunnyvale is the kind of local knowledge that speeds up the search.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <p className="font-semibold text-purple-900">Find MyRoomie solves the Santa Clara verification problem.</p>
              <ul className="mt-4 space-y-2 text-sm text-purple-800">
                <li>✓ Government ID verified profiles</li>
                <li>✓ Free messaging — no $30/month</li>
                <li>✓ Campus proximity filtering</li>
                <li>✓ South Bay neighborhood guides</li>
              </ul>
            </div>
          </div>
        </section>

        {/* H-1B First Arrivals at Nvidia */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">H-1B First Arrivals at Nvidia</h2>
            <p className="text-gray-600 mb-6">
              Nvidia has consistently ranked among the top H-1B petition filers in the US. A significant portion of new campus hires arrive internationally — particularly from India, China, and Taiwan — with no prior US rental history and a start date already confirmed.
            </p>
            <p className="text-gray-600 mb-6">
              The Santa Clara specific challenge: the tech campus area is car-dependent, transit coverage is limited, and the roommate market is fragmented across ethnic community groups that are difficult to access as a newcomer. Getting a verified, compatible roommate before arrival — when you cannot visit in person — requires a platform built for that use case.
            </p>
            <p className="text-gray-600">
              Find MyRoomie is that platform. Verified profiles, free messaging, and Bay Area-specific context let international Nvidia hires find compatible roommates before they land at SFO.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find your verified Nvidia-area roommate — free</h2>
            <p className="text-purple-200 mb-4">
              Find MyRoomie is pre-launch. Members who join now get first access to verified listings in Santa Clara, Sunnyvale, North San Jose, and the full Nvidia commute corridor — before the platform opens to the public.
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
