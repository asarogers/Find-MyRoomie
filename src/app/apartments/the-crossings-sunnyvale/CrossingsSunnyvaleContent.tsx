"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FAQS = [
  {
    q: "Is The Crossings near LinkedIn?",
    a: "Yes. The Crossings at 450 West Maude Ave, Sunnyvale is 1.2 miles from LinkedIn HQ and 0.8 miles from Yahoo. Google's main campus is approximately 3 miles away.",
  },
  {
    q: "Does The Crossings Sunnyvale have AC?",
    a: "Some units at The Crossings do not have central AC — a common issue in older Sunnyvale apartment construction. Confirm your specific unit's cooling situation before signing. Window units may be permitted but are not standard.",
  },
  {
    q: "What is rent at The Crossings Sunnyvale?",
    a: "The Crossings Sunnyvale: 1BR $2,800-$3,200/month, 2BR $3,600-$4,200/month. Parking: 1 spot included, second spot $75/month. A 2BR roommate split lands at $1,800-$2,100/person/month.",
  },
  {
    q: "Is it worth renting at The Crossings with a roommate?",
    a: "At $1,800-$2,100/person on a 2BR split, The Crossings offers a reasonable price-to-location ratio for tech workers at LinkedIn or Yahoo. The main tradeoffs: dated finishes and thin walls in some buildings. Maintenance response is generally noted as positive.",
  },
];

const HONEST_REVIEW = [
  { label: "Location", rating: "Strong", detail: "1.2 miles from LinkedIn HQ. VTA bus access. Caltrain at Sunnyvale station (1.5 miles)." },
  { label: "Unit quality", rating: "Mixed", detail: "Older construction. Some units have been updated; others show their age. Check finishes before committing." },
  { label: "AC situation", rating: "Check first", detail: "Not all units have central AC. Confirm before signing if this matters to you." },
  { label: "Noise", rating: "Moderate", detail: "Thin walls in some buildings — common resident note. Ground-floor units get more foot traffic." },
  { label: "Maintenance", rating: "Generally positive", detail: "Most resident reviews note responsive maintenance team, which is above average for mid-tier Bay Area complexes." },
  { label: "Roommate value", rating: "Good", detail: "$1,800-$2,100/person on a 2BR. Competitive for the LinkedIn corridor. Better location math than going further south." },
];

export default function CrossingsSunnyvaleContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-400 mb-3">Sunnyvale, CA · Updated March 2026</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              The Crossings Sunnyvale — What Renters Say vs What the Listing Shows
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              1.2 miles from LinkedIn HQ. 2BR at $3,600–$4,200/month. A roommate split brings that to
              $1,800–$2,100/person — reasonable for the LinkedIn corridor. Here's the honest breakdown.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                ["2BR total", "$3,600–$4,200/mo"],
                ["Your share (2BR split)", "$1,800–$2,100/mo"],
                ["Distance to LinkedIn HQ", "1.2 miles"],
                ["Find a roommate here", "$0 — free on Find MyRoomie"],
              ].map(([label, val], i) => (
                <div key={i} className={`rounded-xl p-4 border ${i === 3 ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                  <div className={`text-lg font-extrabold ${i === 3 ? 'text-green-700' : 'text-gray-900'}`}>{val}</div>
                  <div className="text-xs text-gray-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Find a Crossings Roommate Free →
            </a>
          </div>
        </section>

        {/* ── Honest review ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Honest Review: What to Know Before Signing</h2>
            <div className="space-y-3">
              {HONEST_REVIEW.map((item, i) => (
                <div key={i} className="flex gap-4 p-4 border border-gray-200 rounded-xl bg-white">
                  <div className="flex-shrink-0 w-24">
                    <div className="font-bold text-sm text-gray-800">{item.label}</div>
                    <div className={`text-xs font-semibold mt-1 ${
                      item.rating === 'Strong' || item.rating === 'Good' || item.rating === 'Generally positive' ? 'text-green-600' :
                      item.rating === 'Mixed' || item.rating === 'Moderate' ? 'text-amber-600' : 'text-red-600'
                    }`}>{item.rating}</div>
                  </div>
                  <p className="text-gray-600 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-12 px-4 bg-white border-t border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {FAQS.map((faq, i) => (
                <div key={i}>
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related ── */}
        <section className="py-8 px-4 bg-gray-50 border-t border-gray-200">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-gray-500 mb-3">Related pages</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/apartments/sunnyvale-ca/" className="text-purple-700 border border-purple-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-purple-50 transition-colors">Sunnyvale roommate guide →</Link>
              <Link href="/apartments/mission-pointe-sunnyvale/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Mission Pointe Sunnyvale</Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find a Crossings Roommate — Free</h2>
            <p className="text-purple-200 mb-8">
              LinkedIn corridor, $1,800–$2,100/person. Find MyRoomie connects you with verified
              Sunnyvale roommates at no cost — no paywall, no subscription.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Sunnyvale Roommates Free →
            </a>
            <p className="text-sm text-purple-300 mt-3">No credit card · No subscription · Verified profiles</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
