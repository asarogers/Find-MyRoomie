"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const PAYWALL_TABLE = [
  { app: "Roomster", cost: "$29.99/month", notes: "FTC enforcement action 2023 for fake listings" },
  { app: "Roomi", cost: "$20–30/month", notes: "Paid tier required for unlimited messaging" },
  { app: "SpareRoom", cost: "Message limits on free tier", notes: "UK-origin, limited Bay Area presence" },
  { app: "Find MyRoomie", cost: "$0 — always", notes: "No credit card. No trial. No expiration." },
];

const FAQS = [
  {
    q: "Is the messaging actually free — no catch?",
    a: "Yes. There is no catch, no hidden tier, and no credit card required. You can browse, message, and connect with verified roommates at no charge.",
  },
  {
    q: "Do I need to verify my identity to message people?",
    a: "Yes — basic profile verification is required before you can contact listings. This protects both parties. Verification does not require payment.",
  },
  {
    q: "Is Find MyRoomie only for San Francisco?",
    a: "Find MyRoomie is built for the Bay Area specifically — San Francisco, San Jose, Oakland, Berkeley, Fremont, Cupertino, Sunnyvale, and surrounding cities.",
  },
  {
    q: "What if I already paid for Roomster or another app?",
    a: "We can't get that money back for you. What we can do is make sure you never have to pay again. Join Find MyRoomie free and start messaging verified listings today.",
  },
  {
    q: "Why do other roommate apps charge for messaging?",
    a: "The paywall is not an accident. These apps show you real-looking profiles, let you get excited about a match, and then extract a monthly fee at the exact moment you are most willing to pay. Find MyRoomie's business model is different.",
  },
];

const CITY_LINKS = [
  { city: "San Francisco, CA", slug: "san-francisco-ca" },
  { city: "Oakland, CA", slug: "oakland-ca" },
  { city: "Berkeley, CA", slug: "berkeley-ca" },
  { city: "Fremont, CA", slug: "fremont-ca" },
  { city: "Cupertino, CA", slug: "cupertino-ca" },
  { city: "Santa Clara, CA", slug: "santa-clara-ca" },
  { city: "Sunnyvale, CA", slug: "sunnyvale-ca" },
  { city: "Palo Alto, CA", slug: "palo-alto-ca" },
];

export default function NoPaywallContent() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              <span className="text-sm font-semibold text-purple-700">100% Free — No Paywall</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              The Roommate App That Doesn&apos;t Lock Your Messages Behind a Paywall
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Most roommate apps charge $20–30/month just to send one message. Find MyRoomie doesn&apos;t.
              Free messaging is not a trial. It&apos;s the product.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Message Verified Roommates Free →
            </a>
            <p className="text-sm text-gray-400 mt-3">No credit card · No subscription · No auto-renewal</p>
          </div>
        </section>

        {/* ── Paywall Landscape Table ── */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Roommate App Paywall Landscape</h2>
            <p className="text-gray-600 mb-8">
              Every major roommate platform uses messaging as the monetization lever. You browse for free. The moment you want to connect with someone, the paywall appears. This is by design.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">App</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Messaging Cost</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {PAYWALL_TABLE.map((row, i) => (
                    <tr
                      key={i}
                      className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} ${row.app === "Find MyRoomie" ? "bg-green-50" : ""}`}
                    >
                      <td className={`p-3 border border-gray-200 font-medium ${row.app === "Find MyRoomie" ? "text-green-700 font-bold" : ""}`}>
                        {row.app}
                      </td>
                      <td className={`p-3 border border-gray-200 ${row.app === "Find MyRoomie" ? "text-green-700 font-bold" : "text-red-700"}`}>
                        {row.cost}
                      </td>
                      <td className="p-3 border border-gray-200 text-gray-600">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Bay Area Math ── */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Bay Area Math</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-extrabold text-amber-700">$3,545</div>
                  <div className="text-gray-600 text-sm mt-1">SF median rent / month</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-amber-700">$1,700–$2,100</div>
                  <div className="text-gray-600 text-sm mt-1">Your share of a 2BR</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-red-600">$30/mo</div>
                  <div className="text-gray-600 text-sm mt-1">Roomster charges to message</div>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-lg">
              Every week on a platform that charges you to look — then shows you bots — is a week closer to missing your window. The Bay Area rental market does not wait for you to figure out a paywall.
            </p>
          </div>
        </section>

        {/* ── What Verified Means ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">What &quot;Verified&quot; Means Here</h2>
            <p className="text-gray-600 mb-6">
              Profiles are reviewed before going live — not because you paid, but because fake profiles harm everyone.
              Verification is baseline, not a premium feature. You do not unlock verified listings by subscribing.
              They are the only kind of listing that exists on Find MyRoomie.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <p className="text-purple-800 font-medium">
                On platforms with paywalls, verification is theater. They surface fake profiles to maximize the moment you hit the paywall.
                Real verification means bad actors never make it to the listing stage.
              </p>
            </div>
          </div>
        </section>

        {/* ── What We Give You Instead ── */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What We Give You Instead</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Free messaging, always",
                  desc: "No subscription. No credits. No monthly fee. Message any verified listing from day one.",
                },
                {
                  title: "Verified profiles",
                  desc: "Every listing is reviewed before you can contact it. The signal-to-noise is higher because we screen before you see.",
                },
                {
                  title: "Bay Area neighborhoods you actually know",
                  desc: "SOMA, Mission, Hayes Valley, Oakland, Berkeley, Fremont, Cupertino, Sunnyvale — not a national grid with 8 SF results.",
                },
                {
                  title: "No auto-renewal trap",
                  desc: "We don't collect payment information. There is no trial that converts to a charge. There is nothing to cancel.",
                },
              ].map((item, i) => (
                <div key={i} className="p-5 border border-gray-200 rounded-xl">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-3">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── City Links ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Search the Bay Area — No Paywall Required</h2>
            <p className="text-gray-600 mb-8">
              Find MyRoomie has active listings across the Bay Area. Contact any listing for free.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {CITY_LINKS.map((c, i) => (
                <Link
                  key={i}
                  href={`/apartments/${c.slug}/`}
                  className="block p-4 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-colors text-center"
                >
                  <div className="font-semibold text-sm">{c.city}</div>
                </Link>
              ))}
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
                    className="w-full text-left p-5 font-bold flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <span className="text-gray-400 text-xl ml-4">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-gray-600 border-t border-gray-100">
                      <p className="pt-4">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Also See ── */}
        <section className="py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-500 text-sm mb-3">Also see:</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/roomster-alternative/" className="text-purple-700 underline hover:text-purple-900 text-sm font-medium">
                Roomster Alternative
              </Link>
              <Link href="/spareroom-alternative/" className="text-purple-700 underline hover:text-purple-900 text-sm font-medium">
                SpareRoom Alternative
              </Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The paywall you just hit is by design. Ours isn&apos;t.</h2>
            <p className="text-purple-200 mb-8">
              Find MyRoomie&apos;s business model does not depend on extracting a subscription at the moment you&apos;re most emotionally invested.
              Free messaging is not a promotion. It is the product.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Start Messaging Verified Roommates Free →
            </a>
            <p className="text-purple-300 text-sm mt-3">No credit card · No subscription · No expiration</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
