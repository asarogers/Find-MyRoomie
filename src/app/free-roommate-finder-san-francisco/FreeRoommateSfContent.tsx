"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FREE_FEATURES = [
  { label: "Browse verified listings", value: "Free" },
  { label: "Message any listing", value: "Free" },
  { label: "List your room or profile", value: "Free" },
  { label: "Set compatibility filters", value: "Free" },
];

const COMPETITORS = [
  {
    name: "Roomster",
    cost: "$29.99/month",
    note: "You pay before knowing if the listings near you are real.",
  },
  {
    name: "Roomi",
    cost: "$20–30/month",
    note: "88% 1-star on Trustpilot.",
  },
  {
    name: "SpareRoom",
    cost: "UK pricing",
    note: "Limited US coverage.",
  },
  {
    name: "Craigslist",
    cost: '"Free"',
    note: "Fake listing scams are a documented, active problem in SF.",
  },
];

const SF_NEIGHBORHOODS = [
  { name: "SOMA", slug: "san-francisco-ca", range: "$1,600–$2,200/mo" },
  { name: "Mission", slug: "san-francisco-ca", range: "$1,500–$2,000/mo" },
  { name: "Castro", slug: "san-francisco-ca", range: "$1,600–$2,100/mo" },
  { name: "Hayes Valley", slug: "san-francisco-ca", range: "$1,700–$2,300/mo" },
  { name: "Nob Hill", slug: "san-francisco-ca", range: "$1,400–$1,900/mo" },
  { name: "Richmond", slug: "san-francisco-ca", range: "$1,300–$1,700/mo" },
  { name: "Sunset", slug: "san-francisco-ca", range: "$1,200–$1,600/mo" },
  { name: "Tenderloin", slug: "san-francisco-ca", range: "$1,100–$1,500/mo" },
];

const FAQS = [
  {
    q: "Is there a truly free roommate finder in San Francisco?",
    a: "Yes — Find MyRoomie is completely free. No subscription to message, no trial period, no credit card required. Roomster charges $29.99/month. Roomi charges $20–30/month. Find MyRoomie charges $0, permanently.",
  },
  {
    q: "How do I find a roommate in San Francisco for free?",
    a: "Create a verified profile on Find MyRoomie, add your move-in timeline and neighborhood preferences, and message compatible verified listings directly — all free. You can also post that you're looking for a room, and verified room-listers can contact you.",
  },
  {
    q: "What makes Find MyRoomie different from Craigslist for SF roommates?",
    a: "Craigslist has zero profile verification — you have no way of knowing who you're messaging until you meet them, and SF has a documented fake-listing scam problem. Find MyRoomie verifies every profile before it's contactable. Both are free, but Find MyRoomie removes the scam risk.",
  },
];

export default function FreeRoommateSfContent() {
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
              San Francisco Roommates — 100% Free to Find, Message, and Match
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Stop paying $30/month just to say hello to a listing. Find MyRoomie is free. Every feature. Forever.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Find SF Roommates Free →
            </a>
            <p className="text-sm text-gray-400 mt-3">No credit card · No subscription · No auto-renewal</p>
          </div>
        </section>

        {/* ── The Math — savings first ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Math on Finding a Roommate in SF</h2>
            <p className="text-gray-600 mb-8">
              If you find the right roommate in San Francisco this month:
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-green-100 pb-4">
                  <span className="text-gray-700 font-medium">You save vs. living alone</span>
                  <span className="text-2xl font-extrabold text-green-700">$1,772/month</span>
                </div>
                <div className="flex justify-between items-center border-b border-green-100 pb-4">
                  <span className="text-gray-700 font-medium">That's this year</span>
                  <span className="text-2xl font-extrabold text-green-700">$21,264</span>
                </div>
                <div className="flex justify-between items-center border-b border-green-100 pb-4">
                  <span className="text-gray-700 font-medium">Over 3 years in the same apartment</span>
                  <span className="text-2xl font-extrabold text-green-700">$63,792</span>
                </div>
                <p className="text-gray-500 text-sm pt-2">
                  That's the cost of a car. A year of business school. Five international trips.
                </p>
              </div>
            </div>
            <p className="text-gray-700 text-lg font-medium">
              The roommate search shouldn't cost $30/month. We made it free.
            </p>
          </div>
        </section>

        {/* ── What free actually means ── */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What "Free" Actually Means Here</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {FREE_FEATURES.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-5 border border-gray-200 rounded-xl">
                  <span className="font-medium text-gray-800">{item.label}</span>
                  <span className="text-green-600 font-bold text-lg">{item.value}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-500 text-sm">
              Not "free to browse, pay to contact." Not "free trial." Free — permanently, for everything.
            </p>
          </div>
        </section>

        {/* ── Why everyone else charges ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Why Every Other Platform Charges</h2>
            <div className="space-y-4">
              {COMPETITORS.map((c, i) => (
                <div key={i} className="flex items-start gap-4 p-5 border border-gray-200 rounded-xl bg-white">
                  <div className="min-w-[120px]">
                    <div className="font-bold text-gray-900">{c.name}</div>
                    <div className="text-red-600 font-semibold text-sm">{c.cost}</div>
                  </div>
                  <p className="text-gray-600 text-sm">{c.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SF Neighborhoods ── */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Search by SF Neighborhood</h2>
            <p className="text-gray-600 mb-8">
              Browse verified roommate listings in every San Francisco neighborhood — free to message anyone.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {SF_NEIGHBORHOODS.map((n, i) => (
                <Link
                  key={i}
                  href={`/apartments/${n.slug}/`}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{n.name}</span>
                  <span className="text-gray-500 text-sm">{n.range}</span>
                </Link>
              ))}
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
            <h2 className="text-3xl font-bold mb-4">The Free Roommate Finder San Francisco Actually Needed</h2>
            <p className="text-purple-200 mb-8">
              Verified profiles. Free messaging. No subscription. No credit card. No auto-renewal. Ever.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Roommates Free in San Francisco →
            </a>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
