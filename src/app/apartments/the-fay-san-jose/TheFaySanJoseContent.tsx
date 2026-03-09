"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FAQS = [
  {
    q: "Is The Fay San Jose in foreclosure?",
    a: "Yes. The Fay at 600 S. First Street entered active foreclosure proceedings in January 2026. The building is approximately 60% vacant. Ownership is in legal dispute.",
  },
  {
    q: "What happens to my lease if The Fay changes ownership?",
    a: "Under California law, existing leases survive a foreclosure sale — the new owner is bound by them. However, lease renewals and month-to-month arrangements may not be honored by incoming ownership.",
  },
  {
    q: "Are there good deals available at The Fay right now?",
    a: "Buildings at 60% vacancy are actively negotiating. You may be able to secure below-market rent, free months, or reduced deposits — in exchange for taking on the risk of ownership transition during your lease term.",
  },
];

export default function TheFaySanJoseContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-16 px-4 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-red-700">Active Foreclosure — Jan 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              The Fay San Jose — What the Foreclosure Filing Means for Current and Future Renters
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              The leasing office will not volunteer this. Here is what the public record shows.
            </p>
          </div>
        </section>

        {/* ── Fact box ── */}
        <section className="py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-amber-900 font-semibold text-lg leading-relaxed">
                The Fay, 600 S. First Street, San Jose — 336 units, approximately 60% vacant, active foreclosure January 2026. This is what the leasing office will not volunteer.
              </p>
            </div>
          </div>
        </section>

        {/* ── What Foreclosure Means ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What Foreclosure Actually Means for Renters</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <div>
                  <span className="font-semibold">California law: existing leases survive the sale.</span> If you have a signed lease, the new owner inherits it and is bound by its terms through the end of the lease period.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-500 font-bold mt-0.5">!</span>
                <div>
                  <span className="font-semibold">Management may change — a court receiver may be appointed.</span> During foreclosure proceedings, a court can appoint a receiver to manage the property. Day-to-day operations, maintenance requests, and rent collection may shift hands with little notice.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-500 font-bold mt-0.5">!</span>
                <div>
                  <span className="font-semibold">Renewal uncertainty during transition.</span> Month-to-month arrangements and lease renewals are not guaranteed by the incoming ownership. Plan accordingly if your lease expires during the transition window.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-red-500 font-bold mt-0.5">!</span>
                <div>
                  <span className="font-semibold">Amenities and staffing may decline.</span> A building generating 40% of expected revenue defers maintenance. Expect reduced staffing, slower repairs, and inconsistent amenity availability during the ownership transition.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── What The Fay Offers ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What The Fay Actually Offers</h2>
            <p className="text-gray-600 mb-4">
              The building itself is a modern high-rise on the S. First Street corridor — walkable to Caltrain's Diridon Station and SAP Center, with spacious units and contemporary finishes. The location is genuinely strong.
            </p>
            <p className="text-gray-600 mb-4">
              At peak occupancy, studios listed for $2,200–$2,600/month and one-bedrooms for $2,800–$3,400/month. Those figures are negotiable now.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-blue-900 mb-2">The Foreclosure Opportunity</h3>
              <p className="text-blue-800">
                A building at 60% vacancy is actively negotiating. Free months, below-market rent, reduced deposits — all are on the table. You are being compensated, in the form of concessions, for taking on the risk of ownership transition during your lease term. Whether that trade-off makes sense depends on your timeline and risk tolerance.
              </p>
            </div>
          </div>
        </section>

        {/* ── What to Watch For ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What to Watch For Before Signing</h2>
            <p className="text-gray-600 mb-6">Ask these questions before you sign anything — and get the answers in writing:</p>
            <ul className="space-y-3 text-gray-700">
              {[
                "Who is the current building manager — a court-appointed receiver, a property management company, or the original ownership?",
                "Is there an active receivership order? Ask to see the court filing.",
                "What happens to my lease if ownership transfers during my lease term?",
                "What is the current occupancy rate and when did it last change significantly?",
                "Are there any pending liens or additional legal actions beyond the foreclosure filing?",
              ].map((q, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">→</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-500 text-sm font-semibold">Get every answer in writing before signing.</p>
          </div>
        </section>

        {/* ── Roommate Angle ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Roommate Angle at The Fay</h2>
            <p className="text-gray-600 mb-4">
              The tenant base at The Fay skews toward tech workers, SJSU students, and remote workers. Two-bedroom layouts are well-suited to roommate arrangements, and the building's common areas — rooftop deck, coworking spaces — were designed for neighbor-to-neighbor contact.
            </p>
            <p className="text-gray-600 mb-6">
              At 60% vacancy, there are more open units than usual — which means more people actively looking to fill rooms. If you're open to a roommate arrangement, the building's current situation creates unusual opportunity: concessions from management plus cost-sharing with a compatible co-tenant can bring effective per-person costs well below typical downtown San Jose rates.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-purple-900 font-semibold mb-4">
                Find verified roommates at The Fay or nearby in downtown San Jose
              </p>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
              >
                Find Roommates Near The Fay →
              </a>
              <p className="text-sm text-purple-400 mt-3">Free · No subscription · Verified profiles</p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 px-4 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full text-left p-5 font-semibold text-gray-900 hover:bg-gray-50 transition-colors flex justify-between items-center"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <span className="text-gray-400 ml-4">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-gray-600">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find Verified Roommates in Downtown San Jose</h2>
            <p className="text-purple-200 mb-8">
              Whether you're at The Fay or looking nearby, Find MyRoomie connects you with verified roommates in downtown San Jose. Free — no subscription, no paywall.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Roommates in San Jose →
            </a>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
