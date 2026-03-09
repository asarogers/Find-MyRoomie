"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const COMMUTE_TABLE = [
  { location: "Cupertino", solo: "$2,950", split: "$2,100", commute: "0–10 min" },
  { location: "Sunnyvale", solo: "$2,750", split: "$1,700", commute: "10–15 min" },
  { location: "Santa Clara", solo: "$2,600", split: "$1,650", commute: "15–20 min" },
  { location: "San Jose (West)", solo: "$2,500", split: "$1,600", commute: "20–25 min" },
  { location: "Fremont", solo: "$2,200", split: "$1,400", commute: "35–45 min" },
];

const FAQS = [
  {
    q: "What's the cheapest place to live near Apple Park?",
    a: "Sunnyvale ($1,600–$1,900/person shared 2BR, 10–15 min to Apple Park), Santa Clara ($1,500–$1,800/person, 15–20 min), San Jose North ($1,400–$1,600/person, 25–30 min). Cupertino itself is expensive ($1,900–$2,300/person shared 2BR).",
  },
  {
    q: "Is Cupertino expensive for Apple employees?",
    a: "Yes. Cupertino is the most expensive city in the South Bay tech corridor. Solo 1BR runs $2,700–$3,200/month. A 2BR roommate split brings per-person costs to $1,900–$2,300/month — still one of the pricier South Bay options.",
  },
  {
    q: "Do Apple H-1B employees struggle to find housing?",
    a: "Yes — especially for first-time arrivals. No US credit history, unfamiliar neighborhood geography, and a compressed timeline (start date already set) make the standard search process very difficult. Verified profiles solve the trust gap before the first in-person meeting.",
  },
  {
    q: "How does Find MyRoomie help Apple contractors?",
    a: "Free messaging, verified profiles, and Bay Area-specific context (commute times, neighborhood guides). Apple contractors on shorter contracts particularly benefit from finding compatible roommates quickly — without paying $29.99/month to Roomster before knowing if anyone in Cupertino is available.",
  },
];

const RELATED_CITIES = [
  { name: "Roommates Near Google", slug: "roommates-near-google", desc: "Google Mountain View campus — full commute + cost map for Googlers." },
  { name: "San Jose, CA", slug: "san-jose-ca", desc: "Silicon Valley's most livable city. 20–25 min to Apple Park from West SJ." },
  { name: "Fremont, CA", slug: "fremont-ca", desc: "Lowest per-person Bay Area cost. Strong South Asian community. BART access." },
  { name: "San Francisco, CA", slug: "san-francisco-ca", desc: "60–75 min to Apple via Caltrain + shuttle. SF median rent $3,545 — use a roommate." },
];

export default function RoommatesNearAppleContent() {
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
              <span className="text-sm font-semibold text-amber-700">Apple Park — Cupertino</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Roommates Near Apple Cupertino — Free Verified Matching
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Cupertino 1BR: $2,950/month. A verified roommate split saves <strong>$10,800/year</strong> — without adding commute time if you pick the right neighborhood.
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
            <h2 className="text-3xl font-bold mb-4">Apple Park Commute + Cost Map</h2>
            <p className="text-gray-600 mb-8">
              Cupertino is walkable to Apple Park but commands a price premium. Sunnyvale and Santa Clara offer the best balance of commute and cost. North San Jose is the budget play — 20–25 min by car, meaningfully cheaper per person.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Location</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Solo 1BR</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">2BR Split/Person</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Apple Park Commute</th>
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

        {/* The Cupertino Roommate Reality */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Cupertino Roommate Reality</h2>
            <p className="text-gray-600 mb-6">
              Cupertino is majority Asian-American with a heavy South Asian and East Asian tech worker mix. The roommate search here runs through Sulekha, Bay Area Desi Facebook groups, and word of mouth from existing Apple employees. None of these have verification.
            </p>
            <p className="text-gray-600 mb-6">
              The result: you are relying on social trust in a network you may have only just joined. For a Cupertino apartment situation — where you are sharing a kitchen, a living room, and potentially a bathroom — that is not enough.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <p className="font-semibold text-purple-900">Find MyRoomie adds the verification layer the Cupertino market has been missing.</p>
              <ul className="mt-4 space-y-2 text-sm text-purple-800">
                <li>✓ Real identity verified before you can be contacted</li>
                <li>✓ Free messaging — no $29.99/month subscription</li>
                <li>✓ Bay Area neighborhood guides built in</li>
                <li>✓ Background-check option at flat-rate transparent pricing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* H-1B and L-1 First Arrivals at Apple */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">H-1B and L-1 First Arrivals at Apple</h2>
            <p className="text-gray-600 mb-6">
              Apple recruits globally. A significant portion of new hires arrive on H-1B or L-1 visas with no prior US rental history, no established local network, and a start date already set. The compressed timeline — often 4–6 weeks from offer to first day — makes the Cupertino roommate search particularly stressful.
            </p>
            <p className="text-gray-600 mb-6">
              The specific challenge: which Cupertino address is walking distance to which Apple shuttle stop? Where is the BART access for days you need it? Which Sunnyvale streets are in the Apple shuttle corridor? This is local knowledge that does not exist on Craigslist or Roomster.
            </p>
            <p className="text-gray-600">
              Verified profiles with Bay Area context — commute times, neighborhood notes, proximity to transit — is exactly what this market needs. That is what Find MyRoomie is built to provide.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find your verified Apple-area roommate — free</h2>
            <p className="text-purple-200 mb-4">
              Find MyRoomie is pre-launch. Members who join now get first access to verified listings in Cupertino, Sunnyvale, Santa Clara, and the full Apple commute corridor — before the platform opens to the public.
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
