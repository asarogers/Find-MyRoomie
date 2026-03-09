"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const NEIGHBORHOODS = [
  { name: "Inner Richmond", rent: "Shared $1,900–$2,300/mo", desc: "Residential, quiet, low-crime, Clement Street walking distance, large female professional population. One of SF's safest neighborhoods — strong community fabric." },
  { name: "Noe Valley", rent: "Shared $2,400–$2,800/mo", desc: "Family-oriented, very safe, higher prices. Strong sense of neighborhood permanence — low turnover means finding availability requires early action." },
  { name: "Castro", rent: "Shared $1,800–$2,400/mo", desc: "LGBTQ+-inclusive, strong community, walkable. Female and non-binary household demand is high here. Waitlists for good listings are common." },
  { name: "Inner Sunset", rent: "Shared $1,700–$2,200/mo", desc: "UCSF-adjacent, strong healthcare worker community — many single professional women, nurses, residents. More affordable than Noe Valley with similar residential feel." },
];

const SAFETY_CHECKLIST = [
  "First meeting: coffee shop or public place — not the apartment.",
  "Video call before any in-person meeting. See the person on screen before you see them in person.",
  "Never send a deposit before seeing the room in person and signing a lease.",
  "Government ID verification: ask directly if the platform provides this, or verify independently.",
  "Check the address on Google Street View before visiting — confirm the building exists as described.",
  "Let someone know your schedule for apartment viewings — time, address, expected return.",
];

const FAQS = [
  {
    q: "Can I find a female-only roommate in San Francisco?",
    a: "Yes. FindMyRoomie allows filtering for female-only households. Government ID verification on every profile means you're not relying on self-reported gender. Bay Area-specific listings including SF, Oakland, Berkeley, and South Bay.",
  },
  {
    q: "Is it legal to advertise for female-only roommates?",
    a: "In California, the Unruh Civil Rights Act generally prohibits housing discrimination. However, an exception exists for shared living situations where tenants share common spaces — a shared apartment with shared kitchen and bathroom typically qualifies. Consult a California tenant attorney for specifics.",
  },
  {
    q: "How do I screen a female roommate safely?",
    a: "Always: video call before in-person meeting. Meet first in a public place. Never send deposits before in-person apartment visit. Use a platform with ID verification. FindMyRoomie's verification means every profile has been government ID-checked — eliminating anonymous listings.",
  },
  {
    q: "What is the average rent for a shared room in a female household in SF?",
    a: "Female-only listings in SF typically run $2,000-$2,800/month for a shared room — slightly above SF average due to higher demand. Most are in walkable SF neighborhoods (Mission, Castro, Inner Richmond, Sunset). Waitlists for well-priced female households are common.",
  },
];

const RELATED_CITIES = [
  { name: "Oakland, CA", slug: "oakland-ca", desc: "East Bay female-friendly neighborhoods. 40% lower rent than SF." },
  { name: "Berkeley, CA", slug: "berkeley-ca", desc: "UC Berkeley area. Strong graduate and professional women's community." },
  { name: "Sunnyvale, CA", slug: "sunnyvale-ca", desc: "South Bay option. Safe residential neighborhoods, Google/Apple proximity." },
  { name: "San Jose, CA", slug: "san-jose-ca", desc: "Largest South Bay city. More inventory, lower prices than SF." },
];

export default function FemaleRoommateSfContent() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-purple-700">Gov ID Verified · Female-Friendly · Free to Message</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Female Roommate Finder San Francisco — Verified Profiles, Safety-First
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Stop scrolling Craigslist roommate ads with no verification. Find a female roommate in SF with government ID-verified profiles and free messaging.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Find My SF Female Roommate — Free →
            </a>
            <p className="text-sm text-gray-400 mt-3">No credit card · No subscription · Government ID verified profiles</p>
          </div>
        </section>

        {/* Section 1 - The Problem */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Problem With Female Roommate Searches in SF</h2>
            <p className="text-gray-600 mb-6">
              Anonymous listing platforms — Craigslist, Facebook groups — have a specific safety gap for women searching for female-only roommates: there is no verification that the person you're meeting is who they claim to be.
            </p>
            <p className="text-gray-600 mb-6">
              The Castro housing scam of March 2025 specifically targeted women — a deposit-advance scam using a female profile, documented in SF Queer Housing discussions. The scam worked because the platform had no verification. The profile looked right. The person did not exist.
            </p>
            <p className="text-gray-600">
              Government ID verification eliminates this category of risk entirely. When every profile is tied to a verified identity, the anonymous-profile scam has no surface to operate on.
            </p>
          </div>
        </section>

        {/* Section 2 - Neighborhoods */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Female-Friendly SF Neighborhoods</h2>
            <div className="space-y-4">
              {NEIGHBORHOODS.map((n, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-lg">{n.name}</h4>
                    <span className="text-sm font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full">{n.rent}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{n.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 - Safety checklist */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Safety Checklist for Female Roommate Searches in SF</h2>
            <p className="text-gray-600 mb-6">
              These steps apply regardless of which platform you use. If the platform provides ID verification, steps 1–3 become lower risk — but they are never skippable.
            </p>
            <div className="space-y-3">
              {SAFETY_CHECKLIST.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl bg-gray-50">
                  <span className="flex-shrink-0 w-7 h-7 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</span>
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 - What FindMyRoomie does differently */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What FindMyRoomie Does Differently</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Government ID verification on every profile", desc: "Not self-reported. Not optional. Every profile on FindMyRoomie has been tied to a verified government ID — which means the person exists and is who they say they are." },
                { title: "Free messaging — no financial pressure", desc: "Free messaging means you can screen potential roommates thoroughly before committing. No paywall forcing a rushed decision because your subscription is running out." },
                { title: "Bay Area-specific listings", desc: "SF, Oakland, Berkeley, South Bay. Not a national platform with 10 SF results buried under Chicago. Built for Bay Area renters." },
                { title: "Female household filter", desc: "Filter directly for female-only households. No need to scroll through listings that don't match. The filter works on verified data, not self-reported preferences." },
              ].map((item, i) => (
                <div key={i} className="p-5 border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find your SF female roommate — free</h2>
            <p className="text-purple-200 mb-8">
              Government ID-verified profiles. Female household filter. Free messaging — no subscription, no credit card, no anonymous listings.
            </p>
            <ul className="text-purple-200 text-sm mb-8 space-y-1">
              <li>Government ID verification on every profile</li>
              <li>Female-only household filter</li>
              <li>Free messaging — permanently, no subscription required</li>
              <li>Bay Area-specific: SF, Oakland, Berkeley, South Bay</li>
            </ul>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find My SF Female Roommate — Free →
            </a>
            <p className="text-purple-300 text-sm mt-3">Free messaging · Verified profiles · No subscription</p>
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

        {/* Related cities */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Find Female Roommates Across the Bay Area</h2>
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
