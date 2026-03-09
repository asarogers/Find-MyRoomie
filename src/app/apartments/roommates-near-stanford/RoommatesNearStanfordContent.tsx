"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const COMMUTE_TABLE = [
  { location: "Palo Alto", solo: "$3,100", split: "$2,300", commute: "0–15 min bike" },
  { location: "Menlo Park", solo: "$3,000", split: "$2,100", commute: "5–15 min" },
  { location: "East Palo Alto", solo: "$2,100", split: "$1,400", commute: "10–15 min" },
  { location: "Redwood City", solo: "$2,800", split: "$1,850", commute: "15–20 min" },
  { location: "Mountain View", solo: "$2,900", split: "$1,800", commute: "20–25 min" },
];

const FAQS = [
  {
    q: "What's the cheapest place to live near Stanford?",
    a: "East Palo Alto ($1,300–$1,600/person shared 2BR, 10 min to campus) is the lowest-cost option near Stanford. Redwood City ($1,700–$1,900/person, 15–20 min) and Menlo Park ($2,000–$2,400/person, 5–10 min) offer progressively higher cost and convenience.",
  },
  {
    q: "Is Palo Alto too expensive for graduate students?",
    a: "Yes, for most. Palo Alto 2BR splits run $2,000–$2,500/person. Stanford Housing Office waitlists are long. Most PhD students and postdocs end up in Menlo Park, East Palo Alto, or Redwood City where roommate splits bring costs to $1,300–$1,900/person.",
  },
  {
    q: "How do international Stanford students find roommates?",
    a: "Many use Stanford's off-campus housing board or Facebook groups — neither has verification. International students on F-1 or J-1 visas face no US rental history, no US credit, and a narrow pre-arrival window. Verified matching is especially valuable for first-year admits arriving from abroad.",
  },
  {
    q: "How does Find MyRoomie work for Stanford?",
    a: "Free messaging, verified profiles, and Peninsula-specific context including East Palo Alto, Menlo Park, and Redwood City proximity to campus. No subscription — search for verified roommates without paying Roomster first.",
  },
];

const RELATED_CITIES = [
  { name: "Roommates Near Meta", slug: "roommates-near-meta", desc: "Meta Menlo Park campus — 10 min from Stanford. Many researchers have offers at both." },
  { name: "Roommates Near Oracle", slug: "roommates-near-oracle", desc: "Oracle Redwood City — 20 min from Stanford. Same Peninsula corridor." },
  { name: "Palo Alto, CA", slug: "palo-alto-ca", desc: "Stanford's home city — most expensive Peninsula option." },
  { name: "International Student Guide", slug: "roommate-finder-international-students-bay-area", desc: "F1 visa housing guide with Peninsula section for Stanford students." },
];

export default function RoommatesNearStanfordContent() {
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
              <span className="text-sm font-semibold text-amber-700">Stanford University — Palo Alto</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Roommates Near Stanford University — Free Verified Matching
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Palo Alto solo 1BR: $3,100/month. A verified roommate split saves <strong>$800/month</strong>. East Palo Alto — 10 min from campus — costs $1,400/person. $900/month difference. That's $10,800/year for grad students on stipends.
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
            <h2 className="text-3xl font-bold mb-4">Stanford Campus Commute + Cost Map</h2>
            <p className="text-gray-600 mb-8">
              Stanford's campus is at the intersection of Palo Alto and Menlo Park. Palo Alto proper commands the highest rents on the Peninsula. East Palo Alto directly to the east is dramatically cheaper with the same 10–15 min commute. Redwood City to the north offers a middle ground with Caltrain access.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Location</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Solo 1BR</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">2BR Split/Person</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Stanford Commute</th>
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

        {/* The Stanford Roommate Reality */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Stanford Roommate Reality</h2>
            <p className="text-gray-600 mb-6">
              Stanford's off-campus housing market is one of the most expensive in the US. PhD stipends average $36,000–$42,000/year — roughly $3,000–$3,500/month before taxes. A solo Palo Alto 1BR at $3,100/month is simply not viable on a fellowship. The Stanford Housing Office waitlist runs 6–18 months for many programs. Roommate matching is not optional — it is essential.
            </p>
            <p className="text-gray-600 mb-6">
              East Palo Alto is the open secret of the Stanford grad student community. It is directly adjacent to campus — separated only by US-101 — and costs 40–50% less than Palo Alto proper. The neighborhoods near the Flea Market and University Ave are well-established and house a large student and post-doc population. Most relocation guides skip it entirely.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <p className="font-semibold text-purple-900">Find MyRoomie adds the verification layer Stanford's housing board is missing.</p>
              <ul className="mt-4 space-y-2 text-sm text-purple-800">
                <li>✓ Government ID verified — real identity confirmed</li>
                <li>✓ Free messaging, no $30/month</li>
                <li>✓ East Palo Alto and Menlo Park listings</li>
                <li>✓ Bike commute distance filtering</li>
              </ul>
            </div>
          </div>
        </section>

        {/* International Students and Postdocs at Stanford */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">International Students and Postdocs at Stanford</h2>
            <p className="text-gray-600 mb-6">
              Stanford admits hundreds of international PhD students annually, plus postdocs and visiting scholars from over 60 countries. F-1 visa students have no US rental history, no Social Security Number for credit checks, and a compressed timeline — many arrive 1–2 weeks before the quarter starts. For these students, the standard rental market is nearly inaccessible without a roommate or guarantor.
            </p>
            <p className="text-gray-600 mb-6">
              The Stanford-specific challenge: knowing which EPA neighborhoods are safe vs. not, which Menlo Park apartments accept international students without US credit, and which Palo Alto landlords require a US co-signer. This local knowledge is what a verified student roommate network provides — and what no current platform surfaces.
            </p>
            <p className="text-gray-600">
              Find MyRoomie provides verified roommate matching for Stanford's international community — free messaging, real local knowledge, and no subscription required.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find your verified Stanford-area roommate — free</h2>
            <p className="text-purple-200 mb-4">
              Find MyRoomie is pre-launch. Members who join now get first access to verified listings near Stanford — Palo Alto, Menlo Park, East Palo Alto, and Redwood City — before the platform opens to the public.
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
            <h2 className="text-2xl font-bold mb-6">Find Roommates Near Other Bay Area Campuses</h2>
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
