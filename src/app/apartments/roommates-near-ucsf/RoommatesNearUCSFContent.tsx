"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const COMMUTE_TABLE = [
  { location: "Inner Sunset (SF)", solo: "$3,200", split: "$1,900", commute: "10 min to Parnassus" },
  { location: "Cole Valley (SF)", solo: "$3,500", split: "$2,100", commute: "5 min to Parnassus" },
  { location: "Mission Bay (SF)", solo: "$3,800", split: "$2,200", commute: "Walk to MB campus" },
  { location: "Mission District (SF)", solo: "$3,400", split: "$1,950", commute: "20 min to both" },
  { location: "Oakland", solo: "$2,600", split: "$1,500", commute: "35 min BART to MB" },
];

const FAQS = [
  {
    q: "Where do UCSF residents and students live?",
    a: "Inner Sunset ($1,700–$2,100/person split, 10 min to Parnassus), Cole Valley ($1,900–$2,200/person, 5–10 min to Parnassus), Mission Bay ($2,000–$2,400/person, walking to Mission Bay campus), and SOMA ($2,000–$2,300/person, 10–15 min to Mission Bay).",
  },
  {
    q: "What's the cheapest neighborhood near UCSF?",
    a: "Inner Sunset offers the best value near the Parnassus campus — 10–15 min uphill, significantly cheaper than Cole Valley or SOMA. For the Mission Bay campus, the Mission District ($1,700–$2,000/person, 20 min) and Oakland ($1,300–$1,600/person, 30–35 min BART) are the budget options.",
  },
  {
    q: "Do UCSF international medical students struggle with housing?",
    a: "Yes. UCSF enrolls students from over 50 countries in its PhD, MD, and professional programs. International students on F-1 visas have no US credit history and face the same SF income verification requirements as all renters. Verified roommate matching is essential for pre-arrival housing.",
  },
  {
    q: "How does Find MyRoomie help near UCSF?",
    a: "Free messaging, verified profiles, and SF neighborhood context for both UCSF campuses — Parnassus and Mission Bay. No subscription — search for verified UCSF roommates without paying Roomster $30/month first.",
  },
];

const RELATED_CITIES = [
  { name: "Roommates Near Airbnb", slug: "roommates-near-airbnb", desc: "Airbnb SOMA — 10 min from UCSF Mission Bay. Same neighborhood." },
  { name: "Roommates Near Uber", slug: "roommates-near-uber", desc: "Uber Mission Bay — same campus cluster as UCSF Medical Center." },
  { name: "Inner Sunset SF", slug: "sunset-san-francisco", desc: "UCSF Parnassus neighborhood guide — who lives here and why." },
  { name: "UCSF Student Roommate Guide", slug: "ucsf-students", desc: "Dedicated guide for UCSF students with campus-specific housing strategy." },
];

export default function RoommatesNearUCSFContent() {
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
              <span className="text-sm font-semibold text-amber-700">UCSF — Parnassus &amp; Mission Bay</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Roommates Near UCSF — Free Verified Matching
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              UCSF residents are earning $60,000–$75,000/year in one of the world's most expensive cities. A verified roommate split saves <strong>$800–$1,400/month</strong> — $10,000–$16,800/year on a resident's salary.
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
            <h2 className="text-3xl font-bold mb-4">UCSF Campus Commute + Cost Map (Parnassus + Mission Bay)</h2>
            <p className="text-gray-600 mb-8">
              UCSF has two main campuses: Parnassus in the Inner Sunset (medical school, main research buildings) and Mission Bay (hospital, research labs). Inner Sunset offers the best Parnassus access with meaningful savings over Cole Valley. For Mission Bay, the Mission District and SOMA are the closest affordable options.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Location</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Solo 1BR</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">2BR Split/Person</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">UCSF Commute</th>
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

        {/* The UCSF Housing Reality */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The UCSF Housing Reality</h2>
            <p className="text-gray-600 mb-6">
              UCSF residency programs are among the most competitive in the US — and the worst-compensated relative to local rents. A PGY-1 resident earns approximately $68,000/year before taxes: roughly $4,700/month take-home. A solo Inner Sunset 1BR at $3,200/month consumes 68% of take-home pay. This is not sustainable without a roommate.
            </p>
            <p className="text-gray-600 mb-6">
              The UCSF housing board, the unofficial UCSF Facebook group, and word of mouth through rotations are the current channels. None have verification. UCSF residents are sharing apartments, managing stressful schedules, and trusting unverified strangers with their personal space. There is no verified platform built specifically for the UCSF community.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <p className="font-semibold text-purple-900">Find MyRoomie: the verified roommate platform UCSF residents actually need.</p>
              <ul className="mt-4 space-y-2 text-sm text-purple-800">
                <li>✓ Government ID verified — real identity</li>
                <li>✓ Free messaging, no subscription</li>
                <li>✓ Parnassus AND Mission Bay proximity</li>
                <li>✓ Background-check option at transparent pricing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* International UCSF Students and Researchers */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">International UCSF Students and Researchers</h2>
            <p className="text-gray-600 mb-6">
              UCSF's graduate, professional, and research programs attract international students and postdocs from over 50 countries. F-1 and J-1 visa holders have no US credit history and face SF's 3x-income verification requirements for apartments. A solo Inner Sunset 1BR at $3,200/month requires $9,600/month verified income — impossible for most stipend-paid researchers.
            </p>
            <p className="text-gray-600 mb-6">
              The UCSF-specific challenge: Parnassus is isolated on a hill in the Inner Sunset — accessible by N Judah Muni or shuttle from Mission Bay. First-time SF residents need to know which Inner Sunset streets are walkable, which have parking, and how the Muni N Judah schedule affects late-night returns from the hospital. A verified UCSF roommate network surfaces this knowledge.
            </p>
            <p className="text-gray-600">
              Find MyRoomie provides verified roommate matching for UCSF's international community — free messaging, SF neighborhood context, and no subscription required.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find your verified UCSF-area roommate — free</h2>
            <p className="text-purple-200 mb-4">
              Find MyRoomie is pre-launch. UCSF students and residents who join now get first access to verified listings near both Parnassus and Mission Bay campuses — before the platform opens to the public.
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
            <h2 className="text-2xl font-bold mb-6">Find Roommates Near Other SF Employers and Campuses</h2>
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
