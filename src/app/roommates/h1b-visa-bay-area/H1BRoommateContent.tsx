"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const TECH_CORRIDORS = [
  {
    city: "Fremont",
    why: "47% South Asian in some zip codes — the highest Indian-American concentration in the US. Warm Springs BART connects to Silicon Valley. Tesla, Meta, Western Digital.",
    rent: "$1,400–$1,800/room (2BR split)",
    slug: "fremont-ca",
  },
  {
    city: "Cupertino",
    why: "Apple Park headquarters. Majority Asian-American city. 10 miles from Fremont via Highway 880/237. Dense tech employer cluster.",
    rent: "$2,100–$2,500/room (2BR split)",
    slug: "cupertino-ca",
  },
  {
    city: "Santa Clara",
    why: "Intel, Nvidia, AMD — all headquartered here within 2 miles. Diridon Station for Caltrain/future BART access. Strong South Asian community.",
    rent: "$1,700–$2,100/room (2BR split)",
    slug: "santa-clara-ca",
  },
  {
    city: "Sunnyvale",
    why: "LinkedIn, Lockheed Martin, Google (adjacent). Sunnyvale Caltrain station. Strong Indian-American residential community.",
    rent: "$1,600–$2,000/room (2BR split)",
    slug: "sunnyvale-ca",
  },
  {
    city: "San Jose (Berryessa/North)",
    why: "Most affordable major tech corridor. Cisco, Brocade, North First St startup cluster. Berryessa BART station (2020). Strong South Asian neighborhood infrastructure.",
    rent: "$1,300–$1,700/room (2BR split)",
    slug: "san-jose-ca",
  },
];

const ARRIVAL_CHALLENGES = [
  {
    challenge: "No US credit history",
    solution: "Many Bay Area landlords working with tech workers accept employment verification letters + offer letter as substitute for credit history. A verified roommate on an established lease can also add you as a co-tenant.",
  },
  {
    challenge: "Need an address before start date",
    solution: "Find MyRoomie works fully remotely. Start your search 8–10 weeks before your start date. Most Bay Area leases can be signed remotely — and a verified roommate provides a local anchor.",
  },
  {
    challenge: "Don't know Bay Area geography",
    solution: "The tech corridor is linear: Fremont → Milpitas → San Jose → Santa Clara → Sunnyvale → Mountain View → Palo Alto. Proximity to your employer's specific campus matters for commute time — we can help you target the right cities.",
  },
  {
    challenge: "Scam risk on Craigslist and unverified platforms",
    solution: "H-1B arrivals are specifically targeted by Bay Area housing scams — culturally familiar fake listings, advance deposit requests, no recourse. Find MyRoomie verifies every profile before you see it.",
  },
];

export default function H1BRoommateContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-400 mb-3">Bay Area · H1B / L1 Arrivals · Updated March 2026</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              H1B Visa Roommate Finder Bay Area — Verified, Free, No Scams
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Arriving on H-1B or L-1 in the Bay Area? You need a verified roommate before your start date,
              without a US credit history, without a local network, and without Craigslist scam risk.
              Find MyRoomie is built for exactly this — free, fully remote, verified Bay Area profiles.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-6">
              <strong>Start 8–10 weeks early:</strong> The best Bay Area roommate situations are signed 2 months
              before move-in. If your start date is June, start searching in April. The verified
              roommates who form in April sign leases before you arrive in June.
            </div>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Find Verified Bay Area Roommates Free →
            </a>
            <p className="text-sm text-gray-400 mt-3">Works before arrival · No credit history required · No subscription</p>
          </div>
        </section>

        {/* ── Tech corridor guide ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Bay Area Tech Corridor — Where H-1B Workers Live</h2>
            <p className="text-gray-600 mb-8">
              The Silicon Valley tech corridor runs from Fremont through San Jose to Sunnyvale. Here's where to look based on your employer's location.
            </p>
            <div className="space-y-4">
              {TECH_CORRIDORS.map((c, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="font-bold">{c.city}</h3>
                    <span className="text-sm font-semibold text-purple-700">{c.rent}</span>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-gray-600 text-sm mb-3">{c.why}</p>
                    <Link href={`/roommates/${c.slug}/`} className="text-sm text-purple-700 font-medium hover:underline">
                      Browse {c.city} roommates →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Arrival challenges ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">H-1B Arrival Challenges — Solved</h2>
            <div className="space-y-4">
              {ARRIVAL_CHALLENGES.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4 bg-white">
                  <p className="font-semibold text-red-700 mb-2 text-sm">Challenge: {item.challenge}</p>
                  <p className="text-gray-700 text-sm"><span className="text-green-700 font-semibold">Solution: </span>{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why not Craigslist ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Why Craigslist Is Dangerous for H-1B Arrivals</h2>
            <p className="text-gray-600 mb-6">
              H-1B arrivals are among the most-targeted groups for Bay Area housing scams:
            </p>
            <div className="space-y-3 mb-6">
              {[
                "You're time-pressured (need an address before your start date)",
                "You have money to send (deposit) and can't easily recover it from abroad",
                "You're unfamiliar with SF/San Jose market prices — you can't spot a too-good listing",
                "Scam operators specifically post 'H1B-friendly' or 'Indian-friendly' listings as targeting bait",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <span className="text-red-600 font-bold">✗</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="font-semibold text-green-800 mb-2">Find MyRoomie: verified before you see the listing</p>
              <p className="text-sm text-green-700">
                Every profile is verified before going live. Scam operators can't post.
                You're messaging a real, identified person with a confirmed Bay Area address.
                And it's completely free — no $29/month Roomster paywall on top of your moving costs.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-12 px-4 bg-white border-t border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How do I find a roommate in the Bay Area on an H1B visa?",
                  a: "Find MyRoomie is a verified Bay Area roommate platform that works fully remotely — you can verify your identity, browse listings, and contact verified roommates before you arrive. The platform is free, which matters when you're starting a new job without a US credit history or local network.",
                },
                {
                  q: "What neighborhoods are best for H1B workers in the Bay Area?",
                  a: "Fremont (47% South Asian in some zip codes, Tesla/Meta employers, Warm Springs BART), Cupertino (Apple HQ, majority Asian-American), Santa Clara (Intel/Nvidia HQ), and Sunnyvale (LinkedIn, Google) are the top tech worker neighborhoods.",
                },
                {
                  q: "Can I find a roommate before I arrive in the US?",
                  a: "Yes — Find MyRoomie's entire process works remotely. Identity verification accepts international documents. You can contact verified listings, communicate, and coordinate a lease before your arrival date.",
                },
              ].map((faq, i) => (
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
              <Link href="/indian-roommate-finder-bay-area/" className="text-purple-700 border border-purple-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-purple-50 transition-colors">Indian roommate finder →</Link>
              <Link href="/apartments/fremont-ca/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Fremont guide</Link>
              <Link href="/roommate-finder-international-students-bay-area/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">International students</Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Your H-1B Start Date Is Set. Your Housing Shouldn't Be the Risk.</h2>
            <p className="text-purple-200 mb-8">
              Find MyRoomie connects H-1B and L-1 arrivals with verified Bay Area roommates — free,
              works remotely, no Craigslist scam risk. Start your search 8 weeks before you land.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Verified Bay Area Roommates Free →
            </a>
            <p className="text-sm text-purple-300 mt-3">No credit history required · Works remotely · Free forever</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
