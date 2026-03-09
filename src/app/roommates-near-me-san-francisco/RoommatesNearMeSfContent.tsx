"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const NEIGHBORHOODS = [
  {
    name: "SOMA",
    range: "$1,600–$2,200/room",
    profile: "Tech workers, night owls, startup crowd.",
    slug: "san-francisco-ca",
  },
  {
    name: "Mission",
    range: "$1,500–$2,000/room",
    profile: "Culture-seekers, food people, creatives.",
    slug: "san-francisco-ca",
  },
  {
    name: "Castro",
    range: "$1,600–$2,100/room",
    profile: "LGBTQ+ community, active social scene.",
    slug: "san-francisco-ca",
  },
  {
    name: "Hayes Valley",
    range: "$1,700–$2,300/room",
    profile: "Design-minded renters, walkable, central.",
    slug: "san-francisco-ca",
  },
  {
    name: "Nob Hill",
    range: "$1,400–$1,900/room",
    profile: "Quieter pace, views, older building stock.",
    slug: "san-francisco-ca",
  },
  {
    name: "Richmond",
    range: "$1,300–$1,700/room",
    profile: "Quiet, spacious, near GG Park, family-friendly.",
    slug: "san-francisco-ca",
  },
  {
    name: "Sunset",
    range: "$1,200–$1,600/room",
    profile: "Affordable SF, beach access, relaxed pace.",
    slug: "san-francisco-ca",
  },
  {
    name: "Tenderloin",
    range: "$1,100–$1,500/room",
    profile: "Budget-first, highest price variance.",
    slug: "san-francisco-ca",
  },
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Create verified profile",
    desc: "Takes 5 minutes. Free. Sets the foundation for matched results — not random scrolling.",
  },
  {
    step: "2",
    title: "Set neighborhood + move-in timeline",
    desc: "Tell us where you already live, where you want to be, and when. We surface compatible matches nearby.",
  },
  {
    step: "3",
    title: "Message compatible matches directly",
    desc: "Free, unlimited. No subscription needed to start a conversation with any verified listing.",
  },
];

const FAQS = [
  {
    q: "How do I find roommates near me in San Francisco?",
    a: "Create a verified profile on Find MyRoomie and set your target neighborhoods. You can search by SF neighborhood — SOMA, Mission, Castro, Hayes Valley, Nob Hill, Richmond, Sunset — and message compatible matches directly. Free messaging, no subscription.",
  },
  {
    q: "What SF neighborhoods have the most roommate listings?",
    a: "SOMA has the highest renter turnover and most active roommate listings due to its proximity to tech offices and transit. Mission and Castro have large active roommate communities. Richmond and Sunset have lower density but more affordable options.",
  },
  {
    q: "How quickly can I find a roommate in San Francisco?",
    a: "Timing depends on your neighborhood and budget. SOMA and Mission have active listing rotation — new profiles appear daily. Spring (March–May) is peak roommate season when lease cycles align with student arrivals and tech hire relocations.",
  },
];

export default function RoommatesNearMeSfContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-16 px-4 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Roommates Near You in San Francisco — Find Verified Matches in Your Neighborhood
            </h1>
            <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
              Tell us your SF neighborhood and we'll match you with verified roommates already looking there.
            </p>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
              Free to message. Free to list. No subscription, no paywall.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Set your neighborhood → find matches →
            </a>
            <p className="text-sm text-gray-400 mt-3">No credit card · No subscription · Verified profiles only</p>
          </div>
        </section>

        {/* ── Neighborhood Cards ── */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find Roommates by SF Neighborhood</h2>
            <p className="text-gray-600 mb-8">
              Each neighborhood has a different renter profile. Find matches where you already live — or where you want to be.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {NEIGHBORHOODS.map((n, i) => (
                <Link
                  key={i}
                  href={`/apartments/${n.slug}/`}
                  className="block p-5 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-bold text-lg text-gray-900">{n.name}</span>
                    <span className="text-purple-600 font-semibold text-sm whitespace-nowrap ml-2">{n.range}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{n.profile}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">How It Works</h2>
            <div className="space-y-6">
              {HOW_IT_WORKS.map((step, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-700 text-white font-bold flex items-center justify-center text-lg flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
              >
                Start Free →
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {FAQS.map((faq, i) => (
                <div key={i}>
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Roommates You're Looking For Are Already Near You</h2>
            <p className="text-purple-200 mb-8">
              Verified profiles. Neighborhood-matched. Free to message — no subscription, no paywall, no credit card ever.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Roommates Near Me in SF →
            </a>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
