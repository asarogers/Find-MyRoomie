"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const SCAM_TYPES = [
  {
    name: "Advance deposit theft",
    risk: "Critical",
    how: "Poster claims to be unavailable to show the unit — sends photos, asks you to send $2,000–$4,000 deposit to 'hold' the room. You send money. There is no room. Poster disappears.",
    frequency: "#1 reported housing fraud type nationally (FTC advance-fee fraud data)",
  },
  {
    name: "Photo theft / stolen listings",
    risk: "Critical",
    how: "Real Zillow or Craigslist photos reposted with a different address and lower price. The building exists. The listing doesn't. You show up and meet a confused actual resident.",
    frequency: "Common in SF's high-demand neighborhoods (Mission, SOMA, Hayes Valley)",
  },
  {
    name: "Culturally targeted bait",
    risk: "High",
    how: "Listings specifically marked 'Indian-friendly,' 'H1B-friendly,' 'vegetarian household' to attract time-pressured visa arrivals who are less familiar with market prices.",
    frequency: "Bay Area-specific targeting pattern; most active April–June during H-1B start window",
  },
  {
    name: "Bait-and-switch room",
    risk: "Medium",
    how: "The listing shows a nice room. You arrive and are told 'that room was just taken' and shown a smaller/worse room at the same price. Deposit already sent or pressure applied.",
    frequency: "More common in multi-room houses than dedicated apartment buildings",
  },
];

const RULES = [
  { rule: "Never send money before seeing the room in person", why: "No legitimate landlord or roommate requires an advance deposit before a viewing. Any request to 'hold' a room with money before you've visited is a scam — no exceptions." },
  { rule: "Never wire transfer or Zelle to someone you haven't met", why: "Zelle, Cash App, and Venmo are irreversible. Once sent, money cannot be recovered even if the listing is fraudulent." },
  { rule: "Video call before any transaction", why: "A 5-minute video call verifies the person exists. It doesn't verify the listing — but it eliminates the 'I'm traveling and can't show you the room' excuse." },
  { rule: "Verify the address on Google Street View", why: "Paste the address into Google Street View before visiting. Stolen listings often use real addresses with photos from a different unit." },
  { rule: "Use a verified platform", why: "Find MyRoomie verifies government IDs before profiles go live. You cannot post a fake listing without a real, verified identity on the other end." },
];

export default function CraigslistAlternativeSfContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-400 mb-3">San Francisco · Roommate Safety · Updated March 2026</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Craigslist Roommates San Francisco — Why It's Dangerous & What to Use Instead
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Craigslist SF roommate listings have no identity verification, active scam campaigns targeting
              new arrivals, and zero recourse when things go wrong. SF's $3,545/month median rent makes
              advance deposit theft more lucrative here than almost anywhere else in the US.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-800 mb-6">
              <strong>FTC data:</strong> Advance-fee fraud (the category covering "send deposit to hold the room" scams)
              is the #1 reported fraud type for housing nationally. SF's high rents make deposit amounts larger and the
              fraud more lucrative. The FBI's IC3 consistently ranks SF among the highest-scam-density cities for housing fraud.
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

        {/* ── Scam types ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">4 Active Craigslist SF Roommate Scam Types</h2>
            <p className="text-gray-600 mb-8">
              These aren't hypothetical. Each is actively reported in SF's Bay Area housing forums and documented in FTC filings:
            </p>
            <div className="space-y-4">
              {SCAM_TYPES.map((s, i) => (
                <div key={i} className="border border-red-200 rounded-xl overflow-hidden">
                  <div className="bg-red-50 px-5 py-3 border-b border-red-200 flex justify-between items-center">
                    <h3 className="font-bold text-red-800 text-sm">{s.name}</h3>
                    <span className={`text-xs font-bold px-2 py-1 rounded ${s.risk === 'Critical' ? 'bg-red-600 text-white' : 'bg-orange-500 text-white'}`}>{s.risk}</span>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-gray-700 text-sm mb-2">{s.how}</p>
                    <p className="text-gray-500 text-xs italic">{s.frequency}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5 Rules ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">5 Rules That Prevent Most SF Roommate Scams</h2>
            <div className="space-y-4">
              {RULES.map((item, i) => (
                <div key={i} className="flex gap-4 p-4 border border-green-200 bg-green-50 rounded-xl">
                  <span className="flex-shrink-0 w-7 h-7 bg-green-600 text-white rounded-full text-xs font-bold flex items-center justify-center">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-green-800 mb-1">{item.rule}</p>
                    <p className="text-gray-600 text-sm">{item.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Find MyRoomie ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Craigslist Fails vs Find MyRoomie</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Feature</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Craigslist</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Find MyRoomie</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Identity verification", "None", "Government ID required"],
                    ["Cost", "Free to post", "Free for everyone"],
                    ["Fake listing protection", "None", "Profile verified before live"],
                    ["Dispute resolution", "None", "Platform accountability"],
                    ["Scam recourse", "None", "Real identity on file"],
                    ["Bay Area focus", "General classifieds", "Bay Area-specific"],
                  ].map(([feature, cl, fmr], i) => (
                    <tr key={i} className="bg-white">
                      <td className="p-3 border border-gray-200 font-medium">{feature}</td>
                      <td className="p-3 border border-gray-200 text-red-600">{cl}</td>
                      <td className="p-3 border border-gray-200 text-green-700 font-medium">{fmr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                  q: "Is Craigslist safe for finding roommates in San Francisco?",
                  a: "Craigslist has no identity verification for posters, no deposit escrow, and no dispute resolution. Common scams include advance deposit theft ($2,000–$4,000 sent before viewing), photo theft (real apartments in fake listings), and ghost listings. SF's high housing demand makes it a particularly active target for these scams.",
                },
                {
                  q: "What is the safest way to find a roommate in San Francisco?",
                  a: "Use a platform with identity verification on both sides. Find MyRoomie verifies government IDs, requires no advance deposit through the platform, and is Bay Area-specific. The key rules: never send money before an in-person visit, always video call before any transaction, and verify addresses on Google Street View before visiting.",
                },
                {
                  q: "How do I avoid roommate scams in the Bay Area?",
                  a: "Five rules: (1) Never send money before seeing a room in person. (2) Never wire-transfer or Zelle to someone you haven't met. (3) Video call before any transaction. (4) Verify the address on Google Street View. (5) Use a verified platform — Find MyRoomie for Bay Area searches.",
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
              <Link href="/how-to/avoid-roommate-scams-san-francisco/" className="text-purple-700 border border-purple-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-purple-50 transition-colors">SF scam guide →</Link>
              <Link href="/how-to/roommate-red-flags/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">23 red flags</Link>
              <Link href="/free-roommate-app-no-subscription/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Free roommate app</Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find Verified SF Roommates. No Craigslist Risk.</h2>
            <p className="text-purple-200 mb-8">
              Find MyRoomie is the verified, free alternative to Craigslist for SF roommate searches.
              Government ID verification, free messaging, zero subscription — and no advance deposit scams.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Verified SF Roommates Free →
            </a>
            <p className="text-sm text-purple-300 mt-3">No credit card · No subscription · Verified profiles</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
