"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FAQS = [
  {
    q: "Is Craigslist safe for finding roommates in San Francisco?",
    a: "Craigslist has no identity verification for posters, no deposit escrow, and no dispute resolution. Common scams include advance deposit theft ($2,000-$4,000 sent before viewing), photo theft (real apartments in fake listings), and ghost listings (address doesn't exist). San Francisco's high housing demand makes it a particularly active target for these scams.",
  },
  {
    q: "How common are Craigslist roommate scams in SF?",
    a: "Advance-fee fraud — the category covering 'send deposit to hold the room' scams — is the #1 reported fraud type for housing searches nationally per FTC data. SF's high rents ($3,545/month median in Dec 2025) make advance deposit amounts larger and scams more lucrative. The FBI's Internet Crime Complaint Center (IC3) consistently ranks SF among the highest-scam-density cities for housing fraud.",
  },
  {
    q: "What is the safest way to find a roommate in San Francisco?",
    a: "Use a platform with identity verification on both sides. Find MyRoomie verifies government IDs, requires no advance deposit through the platform, and is Bay Area-specific. The key rules: never send money before an in-person visit, always video call before any transaction, and verify addresses on Google Street View before visiting.",
  },
  {
    q: "How do I avoid roommate scams in the Bay Area?",
    a: "Five rules: (1) Never send money before seeing a room in person. (2) Never wire-transfer or Zelle to someone you haven't met. (3) Video call before any transaction. (4) Verify the address on Google Street View. (5) Use a verified platform — Find MyRoomie for Bay Area searches.",
  },
];

export default function CraigslistAlternativeSfContent() {
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
              <span className="text-sm font-semibold text-red-700">No ID Verification · Active Scam Campaigns · 2026 Data</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Craigslist Roommates San Francisco — Why It&apos;s Dangerous &amp; What to Use Instead
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              FTC-documented fraud patterns, SF-specific scam playbooks, and a five-rule safe search checklist.
            </p>
          </div>
        </section>

        {/* ── Fact box ── */}
        <section className="py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <p className="text-red-900 font-semibold text-lg leading-relaxed">
                The FTC documents advance-fee housing fraud as the #1 reported housing search fraud type nationally. Craigslist&apos;s lack of identity verification enables this entire category of scam. FindMyRoomie&apos;s government ID verification eliminates it.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 1: The Craigslist SF Roommate Problem ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Craigslist SF Roommate Problem</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Craigslist remains the most-used roommate search tool in SF despite being the most dangerous. Here is what makes it structurally broken for SF housing searches:
            </p>
            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "No identity verification — anyone posts anything",
                  body: "There is no account verification, no ID check, no phone number requirement tied to a real person. A scammer posting from an overseas IP faces zero friction.",
                },
                {
                  num: "2",
                  title: "Advance deposit scams — send first+last+deposit to hold the room",
                  body: "\"Send first + last + deposit to hold the room\" before showing is the most common SF Craigslist scam. The listing looks real, photos are stolen, and by the time you realize the room doesn't exist you've wired $2,000–$4,000 to someone unreachable.",
                },
                {
                  num: "3",
                  title: "Ghost listings — address doesn't exist or isn't available",
                  body: "The address doesn't exist, is in a commercial zone, or is an occupied unit not actually available. The listing evaporates after the deposit is sent.",
                },
                {
                  num: "4",
                  title: "Photo theft — real apartments in fake listings",
                  body: "Real apartments photographed from legitimate listings are reused in fake Craigslist posts. The photos are real — the listing is fraudulent. Reverse image search is your only defense.",
                },
                {
                  num: "5",
                  title: "Bait-and-switch — room exists but is different from photos",
                  body: "The room exists but is materially different from the photos — smaller, in worse condition, in a different part of the building. By the time you see it in person, you've already given up other leads.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-4 border border-red-100 bg-red-50 rounded-xl p-5">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center shrink-0 text-sm">
                    {item.num}
                  </div>
                  <div>
                    <div className="font-bold text-red-900 mb-1">{item.title}</div>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 2: SF-Specific Scam Patterns ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">SF-Specific Scam Patterns in 2025–2026</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              These patterns appear repeatedly in SF Tenants Union resources and IC3 (Internet Crime Complaint Center) reports. They are not hypothetical — they are documented SF-specific tactics.
            </p>
            <div className="space-y-5">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-2">The Castro Housing Scam</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A listing appears for a Castro or Noe Valley flat at below-market rent. The photos are professional-quality (stolen from a real listing). The &quot;landlord&quot; responds quickly, asks for a deposit request for a real-looking listing, claims to be abroad or unable to show in person. After the deposit is sent, contact ceases.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-2">The Mission Sublet Scam</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Real address, fake availability. An occupied Mission District apartment appears as available for sublet. The &quot;tenant&quot; posting claims to be traveling for work. Viewing is offered via FaceTime. Deposit is sent. The actual occupant has no idea the listing was created.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-2">The &quot;Overseas Landlord&quot; Pattern</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A consistent tell: the landlord or lister claims to be abroad — on a work assignment, mission, or family emergency — and cannot show the unit in person. They offer to mail keys after deposit. This pattern is documented in FTC guidance as a primary advance-fee housing fraud indicator.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 3: Safe Roommate Checklist ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Safe Roommate Search Checklist</h2>
            <p className="text-gray-700 mb-6">Five rules that eliminate the most common SF roommate search fraud:</p>
            <div className="space-y-3">
              {[
                { rule: "Never send money before seeing the room in person", detail: "No exceptions. 'Hold fee,' 'good faith deposit,' 'application fee' sent before an in-person visit = scam." },
                { rule: "Never wire / Zelle / PayPal to someone you haven't met", detail: "These payment methods have no chargeback. Once sent, the money is gone. A legitimate landlord or roommate will accept payment after an in-person meeting." },
                { rule: "Always do a video call before meeting in person", detail: "Scammers often refuse video calls. A live video call with the person in the actual space confirms they have physical access to the unit." },
                { rule: "Check the address on Google Street View before visiting", detail: "Verify the address exists, is residential, matches the listing photos, and is in the neighborhood claimed. Ghost listings fail this check immediately." },
                { rule: "Use a platform with government ID verification", detail: "This is the systemic fix. When both sides have verified IDs on the platform, the anonymous-scammer category is eliminated entirely." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-green-50 border border-green-200 rounded-xl p-5">
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-bold text-green-900 mb-1">{item.rule}</div>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 4: FindMyRoomie vs Craigslist ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">FindMyRoomie vs Craigslist</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="border border-red-200 rounded-xl p-6 bg-red-50">
                <div className="font-bold text-red-800 text-lg mb-4">Craigslist</div>
                <div className="space-y-2 text-sm">
                  {[
                    { label: "Identity", val: "Anonymous" },
                    { label: "Verification", val: "None" },
                    { label: "Scam-prone", val: "Yes" },
                    { label: "Cost", val: "Free" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between">
                      <span className="text-gray-600">{row.label}</span>
                      <span className="text-red-700 font-medium">{row.val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-purple-200 rounded-xl p-6 bg-purple-50">
                <div className="font-bold text-purple-800 text-lg mb-4">FindMyRoomie</div>
                <div className="space-y-2 text-sm">
                  {[
                    { label: "Identity", val: "Gov ID verified" },
                    { label: "Verification", val: "Required — both sides" },
                    { label: "Scam-impossible", val: "No anonymous profiles" },
                    { label: "Cost", val: "Free" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between">
                      <span className="text-gray-600">{row.label}</span>
                      <span className="text-purple-700 font-medium">{row.val}</span>
                    </div>
                  ))}
                </div>
              </div>
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
                    <div className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find a verified SF roommate — free. No Craigslist risk.</h2>
            <p className="text-purple-200 mb-8">
              Government ID verification on every profile. Free messaging. Bay Area-specific search. Zero anonymous listings.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Verified Roommates →
            </a>
            <p className="text-sm text-purple-400 mt-3">Free · No subscription · Verified profiles</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
