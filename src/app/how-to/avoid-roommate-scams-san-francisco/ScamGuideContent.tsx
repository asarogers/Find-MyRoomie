"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const RED_FLAGS = [
  {
    flag: "Advance deposit before viewing",
    risk: "Critical",
    detail: "Any request for deposit, security payment, or holding fee before you have physically seen the room is a scam. No legitimate landlord or roommate needs money before a viewing.",
    color: "red",
  },
  {
    flag: "Landlord is 'traveling' or 'out of the country'",
    risk: "Critical",
    detail: "The classic SF roommate scam pattern. The listing is real (often a scraped photo of an actual SF apartment), but the 'landlord' can't show it because they're 'in London' or 'on a job site.' They'll offer to mail you a key if you pay first. Don't.",
    color: "red",
  },
  {
    flag: "Price significantly below market for the neighborhood",
    risk: "High",
    detail: "A SOMA studio at $1,200/month or a Mission 1BR at $1,000 in 2026 doesn't exist legitimately. Scammers use below-market prices to attract desperate searchers. If it's 30%+ below comparable listings, it's almost certainly fake.",
    color: "red",
  },
  {
    flag: "Photos that don't match the building exterior",
    risk: "High",
    detail: "Do a reverse image search on the listing photos. Many SF scam listings use photos from legitimate listings in other cities or countries. If the interior looks nothing like the neighborhood, verify the address on Google Street View.",
    color: "red",
  },
  {
    flag: "Payment via wire transfer, Zelle, Venmo, or gift cards",
    risk: "Critical",
    detail: "Legitimate transactions use checks, bank transfers with paper trails, or in-person cash for deposits. Wire transfer and gift card requests are irreversible and untraceable — that's why scammers use them.",
    color: "red",
  },
  {
    flag: "Pressure to decide immediately ('another person is interested')",
    risk: "Medium",
    detail: "Real rooms do get competitive. But artificial urgency — 'decide by tonight or I give it to someone else' — is designed to bypass your rational screening process. Legitimate landlords give you time to do due diligence.",
    color: "amber",
  },
  {
    flag: "Request for personal information before a signed lease",
    risk: "High",
    detail: "Any request for your Social Security number, bank account information, or passport copy before you have a signed, legitimate lease document is identity theft setup. Verify the landlord's identity first.",
    color: "red",
  },
];

const SAFE_PRACTICES = [
  "Always meet in person (or video call) before paying anything",
  "Verify the lister's identity independently — not just through their profile",
  "Google the exact address and cross-reference with public records",
  "Do a reverse image search on listing photos before visiting",
  "Never pay via wire transfer, Zelle, Venmo, or gift cards for housing deposits",
  "Get every agreement in writing — even informal ones",
  "Check the building's property records at the SF Assessor-Recorder's office",
  "Use only verified platforms where profiles are screened before going live",
];

export default function ScamGuideContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-400 mb-3">San Francisco · Updated March 2026</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              7 Roommate Scam Red Flags in San Francisco
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              SF's $3,545 median rent creates desperate searchers — and scammers who target them.
              These are the specific patterns that cost Bay Area renters thousands of dollars
              every year, and exactly how to spot each one.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-800">
              <strong>The number one rule:</strong> Never pay anything — deposit, holding fee, first month, anything —
              before you have physically seen the room and verified the identity of the person you're dealing with.
              This single rule eliminates 90% of SF roommate scams.
            </div>
          </div>
        </section>

        {/* ── Red flags ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">The 7 Red Flags</h2>
            <div className="space-y-4">
              {RED_FLAGS.map((item, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden ${
                  item.color === 'red' ? 'border-red-200' : 'border-amber-200'
                }`}>
                  <div className={`px-5 py-4 border-b flex items-center justify-between ${
                    item.color === 'red' ? 'bg-red-50 border-red-200' : 'bg-amber-50 border-amber-200'
                  }`}>
                    <h3 className="font-bold">{i + 1}. {item.flag}</h3>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                      item.risk === 'Critical' ? 'bg-red-200 text-red-800' :
                      item.risk === 'High' ? 'bg-orange-200 text-orange-800' : 'bg-amber-200 text-amber-800'
                    }`}>{item.risk}</span>
                  </div>
                  <div className="px-5 py-4 bg-white">
                    <p className="text-gray-700 text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Safe practices ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Safe Practice Checklist</h2>
            <p className="text-gray-600 mb-6">
              Use this checklist for every search, regardless of how legitimate the listing looks.
            </p>
            <div className="space-y-3">
              {SAFE_PRACTICES.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl bg-white">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-700 rounded-full text-xs font-bold flex items-center justify-center mt-0.5">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Craigslist is high risk ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Craigslist is the Highest-Risk Platform in SF</h2>
            <p className="text-gray-600 mb-6">
              Craigslist has no identity verification, no accountability layer for repeat offenders, and
              no recourse when something goes wrong. Scam operators know this — SF's Craigslist housing section
              has documented scam rings that have operated for years without consequence.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
              <h3 className="font-semibold text-amber-800 mb-2">Specific targeting patterns to know</h3>
              <ul className="space-y-2 text-sm text-amber-700">
                <li>• "International student friendly" listings specifically target newcomers unfamiliar with SF prices</li>
                <li>• South Asian community Facebook groups are scraped and targeted with culturally familiar-seeming fake listings</li>
                <li>• "UCSF-adjacent" and "UC Berkeley-adjacent" listings target new grad students arriving without local networks</li>
              </ul>
            </div>
            <p className="text-gray-600 text-sm">
              Verified platforms like Find MyRoomie require identity verification before a profile goes live.
              This eliminates the anonymous scam operator problem entirely — you cannot contact a fake profile
              because fake profiles don't make it onto the platform.
            </p>
          </div>
        </section>

        {/* ── What verified means ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Why Find MyRoomie Is Safer — And Free</h2>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                ["Identity verification", "Required — profiles reviewed before going live"],
                ["Scam operators", "Screened out before you see them"],
                ["Advance deposit requests", "Impossible from unverified users"],
                ["Platform cost to you", "$0 — free messaging, no subscription"],
              ].map(([label, val], i) => (
                <div key={i} className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="font-bold text-green-800 text-sm">{val}</div>
                  <div className="text-gray-500 text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Find Verified SF Roommates Free →
            </a>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How do I avoid roommate scams in San Francisco?",
                  a: "Use verified platforms only. Never pay a deposit before viewing the room in person or via a verified video call. Any listing that asks for payment via wire transfer, Zelle, or gift cards is a scam. Verify the landlord or lister's identity before sending any money.",
                },
                {
                  q: "Is Craigslist safe for finding roommates in San Francisco?",
                  a: "Craigslist has no identity verification, no accountability for repeat scammers, and documented scam rings targeting SF newcomers. It is usable with extreme caution — verify in-person before paying anything. Verified platforms like Find MyRoomie eliminate this risk.",
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
            <p className="text-sm font-semibold text-gray-500 mb-3">Related guides</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/how-to/roommate-red-flags/" className="text-purple-700 border border-purple-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-purple-50 transition-colors">23 roommate red flags →</Link>
              <Link href="/how-to/find-roommate-30-days/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Find a roommate in 30 days</Link>
              <Link href="/free-roommate-app-no-subscription/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Free roommate app</Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Skip Craigslist. Find Verified SF Roommates for Free.</h2>
            <p className="text-purple-200 mb-8">
              Every profile on Find MyRoomie is verified before going live. You can't message a scammer
              because scammers can't create a listing. And it's completely free — no Roomster paywall, no subscription.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Verified Roommates — No Scam Risk →
            </a>
            <p className="text-sm text-purple-300 mt-3">No credit card · No subscription · Verified profiles only</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
