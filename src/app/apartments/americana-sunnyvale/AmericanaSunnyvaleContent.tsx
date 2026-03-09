"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FAQS = [
  {
    q: "Is Americana at Sunnyvale age-restricted?",
    a: "Yes. Americana at Sunnyvale is a 55+ age-restricted senior community. At least one resident per unit must be 55 or older. This is a legal requirement under federal housing law, not a preference.",
  },
  {
    q: "Can tech workers live at Americana Sunnyvale?",
    a: "No — not unless they are 55 or older. Americana at Sunnyvale is a legal 55+ community. Tech workers in their 20s-40s are ineligible regardless of income. If you're looking for Sunnyvale apartments near LinkedIn or Apple, see Mission Pointe, The Crossings, or Montclaire instead.",
  },
  {
    q: "What is the rent at Americana Sunnyvale?",
    a: "Americana at Sunnyvale offers below-market pricing due to its age restrictions: 1BR units typically run $1,800-$2,400/month — significantly less than comparable non-restricted Sunnyvale apartments. The trade-off is the 55+ residency requirement.",
  },
  {
    q: "What Sunnyvale apartments are actually for tech workers?",
    a: "Tech workers in Sunnyvale should look at: The Crossings at 450 West Maude Ave (near LinkedIn/Yahoo), Montclaire at Sunnyvale (near Caltrain), or Mission Pointe (newer construction near Apple). All are general-occupancy without age restrictions.",
  },
];

export default function AmericanaSunnyvaleContent() {
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
              Americana at Sunnyvale — Who It's Actually For (Honest Review 2026)
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Americana at Sunnyvale is a 55+ age-restricted senior community near LinkedIn HQ. Most renters searching for it don't qualify. Here's who does — and what Sunnyvale alternatives exist for everyone else.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
            >
              Find Roommates in Sunnyvale →
            </a>
          </div>
        </section>

        {/* ── The Building ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What Americana at Sunnyvale Actually Is</h2>
            <p className="text-gray-600 mb-4">
              Americana at Sunnyvale is a federally compliant 55+ senior community. At least one resident per unit must be 55 years or older — this is a legal requirement under the Housing for Older Persons Act (HOPA), not a soft preference. Management will enforce it.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-amber-900 mb-3">Important: Not for Tech Workers Under 55</h3>
              <p className="text-amber-800 text-sm">
                If you're a tech employee at LinkedIn, Apple, Google, or any other Bay Area employer and you're under 55, you are ineligible to live at Americana. Income doesn't override the age requirement. This is commonly misunderstood — the "Americana" brand is used by multiple non-age-restricted properties elsewhere in the country.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { label: "1-Bedrooms", value: "$1,800–$2,400/mo" },
                { label: "Age Requirement", value: "55+ (one resident)" },
                { label: "Location", value: "Near LinkedIn HQ" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 text-lg">{item.value}</div>
                  <div className="text-gray-500 text-sm mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Alternatives ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Sunnyvale Alternatives for Tech Workers</h2>
            <p className="text-gray-600 mb-5">
              If you're searching for Sunnyvale apartments near LinkedIn, Apple, or the Caltrain — these general-occupancy options are what you're actually looking for:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "The Crossings at 450 West Maude Ave",
                  desc: "Walking distance from LinkedIn HQ and Yahoo. General occupancy, no age restrictions. 1BR typically $2,400–$2,900/month. Some units lack central AC — confirm before signing.",
                },
                {
                  title: "Montclaire at Sunnyvale",
                  desc: "Walking distance from Sunnyvale Caltrain. Central AC included. 2BR runs $3,400–$3,900/month — splits to $1,700–$1,950/person with a roommate.",
                },
                {
                  title: "Mission Pointe by Windsor",
                  desc: "Newer construction near Apple. Full amenity package. Note: no central AC confirmed through resident reports. Ask specifically about cooling before signing.",
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

        {/* ── Roommate Math ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Roommate Math in Sunnyvale</h2>
            <p className="text-gray-600 mb-5">
              For tech workers who qualify for general-occupancy buildings, the roommate calculation in Sunnyvale is compelling. Find MyRoomie is free — no $29/month Roomster paywall, no subscription required.
            </p>
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
                    <td className="p-3 border border-gray-200">Solo 1BR (Crossings/Montclaire)</td>
                    <td className="p-3 border border-gray-200 text-red-600 font-medium">~$2,700/month</td>
                    <td className="p-3 border border-gray-200 text-red-600 font-medium">$32,400/year</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200">Share 2BR with verified roommate</td>
                    <td className="p-3 border border-gray-200 text-green-600 font-medium">$1,700–$2,000/person</td>
                    <td className="p-3 border border-gray-200 text-green-600 font-medium">$20,400–$24,000/year</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 border border-gray-200 font-semibold">Annual savings</td>
                    <td className="p-3 border border-gray-200" colSpan={2}>
                      <span className="font-bold text-purple-700 text-lg">$8,400–$12,000/year</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-purple-900 font-semibold mb-4">
                Find verified roommates in Sunnyvale — free, no subscription
              </p>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
              >
                Find Roommates in Sunnyvale →
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
            <h2 className="text-3xl font-bold mb-4">Find Verified Roommates Near LinkedIn in Sunnyvale</h2>
            <p className="text-purple-200 mb-8">
              The Sunnyvale 2BR split lands at $1,700–$2,000/person — well below solo 1BR pricing. Find My Roomie is free. No $29/month paywall, no subscription.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Roommates in Sunnyvale →
            </a>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
