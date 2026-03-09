"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FAQS = [
  {
    q: "How much does Crescent Village San Jose cost?",
    a: "Studio units start around $2,000–$2,300/month. One-bedrooms run $2,400–$2,900. Two-bedrooms split between verified roommates bring individual costs to $1,300–$1,600/month — some of the lowest per-person rates in the Bay Area tech corridor.",
  },
  {
    q: "Is Crescent Village near BART?",
    a: "Yes. The Berryessa BART extension opened a station near North San Jose, providing direct rail access to the East Bay, Downtown Oakland, and BART connections throughout the region.",
  },
  {
    q: "Why is Crescent Village cheaper than Cupertino or Santa Clara?",
    a: "North San Jose / Berryessa has lower rents than the western Silicon Valley corridor while remaining close to major tech employers via the 101 and 880. The BART extension has made the corridor more transit-accessible than it was before 2020.",
  },
];

const RELATED = [
  { slug: 'roommates-near-cisco', name: 'Roommates Near Cisco', desc: 'North SJ guide for Cisco commuters.' },
  { slug: 'miro-san-jose', name: 'Miro San Jose', desc: 'Downtown alternative with Diridon access.' },
  { slug: 'san-jose-ca', name: 'San Jose Roommates — City Guide', desc: 'Full San Jose roommate market overview.' },
  { slug: 'santa-clara-ca', name: 'Santa Clara Roommates', desc: 'Nearby Santa Clara shared housing options.' },
];

export default function CrescentVillageContent() {
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
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Crescent Village San Jose — Rent Guide and Roommate Market Near Berryessa
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              900+ units in North San Jose. Studios from $2,000. Near Berryessa BART. Some of the lowest per-person costs in the Bay Area tech corridor.
            </p>
          </div>
        </section>

        {/* ── The Property ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Property</h2>
            <p className="text-gray-600 mb-4">
              Crescent Village is a 900+ unit master-planned apartment community in North San Jose — the largest apartment community of its type in North SJ. Multiple phases, amenity-rich, with pool, gym, and community spaces designed for a large residential population.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { label: "Studios", value: "$2,000–$2,300/mo" },
                { label: "1-Bedrooms", value: "$2,400–$2,900/mo" },
                { label: "2BR per person (shared)", value: "$1,300–$1,600/mo" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 text-lg">{item.value}</div>
                  <div className="text-gray-500 text-sm mt-1">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="text-green-800 font-medium">
                At $1,300–$1,600/person on a shared 2BR, Crescent Village offers some of the lowest per-person rates in the Bay Area tech corridor — meaningfully below comparable arrangements in Sunnyvale, Santa Clara, or downtown San Jose.
              </p>
            </div>
          </div>
        </section>

        {/* ── Location ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Location</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Berryessa BART Extension",
                  desc: "The Berryessa/North San Jose BART station provides direct rail access to the East Bay, Downtown Oakland, and the full BART system. This fundamentally changed the transit calculus for the North SJ corridor — it opened in 2020.",
                },
                {
                  title: "101 / 880 Access",
                  desc: "Highway access to Silicon Valley tech campuses: Intel and Cisco in North SJ, Apple (Cupertino via 101), and the South Bay corridor generally. Morning commute runs 15–35 minutes depending on destination.",
                },
                {
                  title: "North San Jose Tech Employers",
                  desc: "Intel, Cisco, Brocade, and dozens of smaller tech and semiconductor firms are located in the immediate North SJ corridor — closer to Crescent Village than to most SF or Peninsula addresses.",
                },
              ].map((item, i) => (
                <div key={i} className="p-5 border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Rent Math ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Rent Math</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Scenario</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Monthly</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Annual</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="p-3 border border-gray-200">Solo 1BR in SOMA SF</td>
                    <td className="p-3 border border-gray-200 text-red-600 font-medium">~$3,000/month</td>
                    <td className="p-3 border border-gray-200 text-red-600 font-medium">$36,000/year</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200">Share 2BR at Crescent Village</td>
                    <td className="p-3 border border-gray-200 text-green-600 font-medium">$1,300–$1,600/person</td>
                    <td className="p-3 border border-gray-200 text-green-600 font-medium">$15,600–$19,200/year</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 border border-gray-200 font-semibold">Annual savings vs solo SF</td>
                    <td className="p-3 border border-gray-200" colSpan={2}>
                      <span className="font-bold text-purple-700 text-lg">$16,800–$20,400/year</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Desi Community Context ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Berryessa Community Context</h2>
            <p className="text-gray-600 mb-4">
              The Berryessa district is one of the most culturally complete South Asian communities in the Bay Area. Indian grocery stores, restaurants, temples, and community organizations are established infrastructure — not scattered outposts. Crescent Village sits adjacent to this community.
            </p>
            <p className="text-gray-600 mb-4">
              For Indian tech workers arriving in the Bay Area on H-1B visas — a significant portion of the North San Jose tech workforce — this neighborhood offers community infrastructure, BART transit access, and meaningfully lower rents than the western Silicon Valley corridor (Cupertino, Sunnyvale, Santa Clara).
            </p>
            <p className="text-gray-600">
              The combination makes Crescent Village one of the most practical landing zones in the Bay Area for new arrivals who want community support, transit access, and cost efficiency simultaneously.
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-purple-900 font-semibold mb-4">
                Find verified roommates at Crescent Village or nearby in North San Jose
              </p>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
              >
                Find Roommates Near Crescent Village →
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
            <h2 className="text-3xl font-bold mb-4">Find Verified Roommates in North San Jose</h2>
            <p className="text-purple-200 mb-8">
              Crescent Village's 2BR split brings per-person costs to $1,300–$1,600/month — among the lowest in the Bay Area tech corridor. Find a verified roommate through Find MyRoomie.
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

        {/* Related Links */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">More Bay Area Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {RELATED.map((c, i) => (
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
