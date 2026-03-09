"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const COMMUTE_TABLE = [
  { location: "East Palo Alto", solo: "$2,100", split: "$1,450", commute: "5–10 min" },
  { location: "Menlo Park", solo: "$3,000", split: "$2,200", commute: "0–5 min" },
  { location: "Redwood City", solo: "$2,700", split: "$1,800", commute: "10–15 min" },
  { location: "Palo Alto", solo: "$3,100", split: "$2,300", commute: "5–10 min" },
  { location: "San Francisco", solo: "$3,545", split: "$2,100", commute: "35–45 min" },
];

const FAQS = [
  {
    q: "What's the cheapest neighborhood near Meta Menlo Park?",
    a: "East Palo Alto ($1,300–$1,600/person shared 2BR, 5–10 min to Meta) and Redwood City ($1,700–$1,900/person, 10–15 min) offer the best cost-to-commute ratio. Menlo Park itself runs $2,000–$2,400/person shared 2BR.",
  },
  {
    q: "Do Meta H-1B employees face housing challenges?",
    a: "Yes — Meta recruits globally and many first arrivals have no US rental history, no local network, and a compressed timeline. The pre-arrival window (4–6 weeks from offer to start) is when verified roommate matching matters most.",
  },
  {
    q: "Is Menlo Park walkable from Meta HQ?",
    a: "Yes. The Meta campus is in Menlo Park and several walkable neighborhoods exist within 1–2 miles. However, most Meta employees live in Menlo Park, Redwood City, or Palo Alto and commute by shuttle, bike, or car.",
  },
  {
    q: "How does Find MyRoomie work for Meta employees?",
    a: "Free messaging, verified profiles, and proximity-based search. No $30/month subscription like Roomster. Meta contractors and full-time employees can filter by neighborhood and commute time to the Menlo Park campus.",
  },
];

const RELATED_CITIES = [
  { name: "Roommates Near Apple", slug: "roommates-near-apple", desc: "Apple Park Cupertino — South Bay's biggest tech campus commute map." },
  { name: "Roommates Near Stripe", slug: "roommates-near-stripe", desc: "Stripe SOMA SF — remote-first company, but SF office requires verified matching too." },
  { name: "Palo Alto, CA", slug: "palo-alto-ca", desc: "Stanford and VC Row neighbor. 5–10 min to Meta campus." },
  { name: "Redwood City", slug: "roommates-near-oracle", desc: "Oracle HQ is also here. Balanced cost + commute corridor for Peninsula employers." },
];

export default function RoommatesNearMetaContent() {
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
              <span className="text-sm font-semibold text-amber-700">Meta HQ — Menlo Park</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Roommates Near Meta Menlo Park — Free Verified Matching
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Menlo Park 1BR: $3,000/month. A verified roommate split cuts your rent by <strong>$800/month minimum</strong> — $9,600/year saved without adding a minute to your commute.
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
            <h2 className="text-3xl font-bold mb-4">Meta Menlo Park Commute + Cost Map</h2>
            <p className="text-gray-600 mb-8">
              East Palo Alto is the budget play — 5–10 min to Meta at $600/month less per person than Menlo Park. Redwood City is the balanced choice. Palo Alto is premium proximity. SF requires Meta shuttle or Caltrain.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Location</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Solo 1BR</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">2BR Split/Person</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Meta Commute</th>
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

        {/* The Menlo Park Roommate Reality */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Menlo Park Roommate Reality</h2>
            <p className="text-gray-600 mb-6">
              Menlo Park is one of the most expensive towns in the Bay Area. The roommate market here runs largely through Facebook groups, the Meta internal network, and word of mouth from existing employees. For a first-time arrival with no local network, none of these channels are accessible.
            </p>
            <p className="text-gray-600 mb-6">
              East Palo Alto — directly adjacent to Menlo Park — is dramatically more affordable but requires local knowledge to navigate safely. Most relocation guides don&apos;t mention it. This is the kind of information a verified local roommate provides that no app currently surfaces.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <p className="font-semibold text-purple-900">Find MyRoomie adds the verification layer the Menlo Park market has been missing.</p>
              <ul className="mt-4 space-y-2 text-sm text-purple-800">
                <li>✓ Real identity verified before contact</li>
                <li>✓ Free messaging — no $30/month subscription</li>
                <li>✓ Proximity search by commute time</li>
                <li>✓ East Palo Alto and Redwood City options included</li>
              </ul>
            </div>
          </div>
        </section>

        {/* H-1B and L-1 First Arrivals at Meta */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">H-1B and L-1 First Arrivals at Meta</h2>
            <p className="text-gray-600 mb-6">
              Meta recruits globally. The Menlo Park campus employs a significant international workforce on H-1B and L-1 visas. Many arrive with no US credit history, no established local contacts, and a start date set 4–6 weeks out. The standard Bay Area roommate search process — Craigslist, Facebook groups, Roomster — works poorly for this segment.
            </p>
            <p className="text-gray-600 mb-6">
              The Menlo Park-specific challenge: knowing which neighborhoods feed the Meta shuttle network, which BART stations are viable for car-free living, and which East Palo Alto streets are acceptable versus not. This is local knowledge that only a verified local network can provide.
            </p>
            <p className="text-gray-600">
              Find MyRoomie is designed for exactly this transition — international tech professionals arriving in the Bay Area who need verified, trustworthy roommate matching without spending $30/month to find out if anyone is available.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find your verified Meta-area roommate — free</h2>
            <p className="text-purple-200 mb-4">
              Find MyRoomie is pre-launch. Members who join now get first access to verified listings in Menlo Park, East Palo Alto, Redwood City, and Palo Alto — before the platform opens to the public.
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
