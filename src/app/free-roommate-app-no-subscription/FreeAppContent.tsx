"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const COMPARISON = [
  { label: "Messaging fee", findMyRoomie: "Free — forever", competitors: "$15–30/month" },
  { label: "Subscription required?", findMyRoomie: "No", competitors: "Yes — usually required to contact anyone" },
  { label: "Credit card required?", findMyRoomie: "No", competitors: "Required to start 'free' trial" },
  { label: "Auto-renewing trial", findMyRoomie: "No trial needed", competitors: "7-day trial converts to paid" },
  { label: "Cancel risk", findMyRoomie: "Nothing to cancel", competitors: "Users report charges after canceling" },
  { label: "Verified profiles", findMyRoomie: "Yes — mandatory", competitors: "Often pay-to-verify or skipped" },
  { label: "Bay Area focus", findMyRoomie: "Yes — built for Bay Area", competitors: "National platform, sparse Bay Area results" },
];

const WHY_PAY_APPS_CHARGE = [
  {
    title: "The emotional hostage moment",
    desc: "Paid apps let you browse free until you find someone you want to message. Then the paywall appears at exactly the moment you're most willing to pay. It's deliberately timed friction.",
  },
  {
    title: "The 'free trial' trap",
    desc: "Roomster's 7-day trial auto-converts to $29/month. The FTC fined Roomster $1.6 million in 2023 for this pattern. Users who missed the cancellation window report hundreds of dollars in unexpected charges.",
  },
  {
    title: "Fake listings extend subscriptions",
    desc: "If you can't find a roommate, you keep paying. The FTC found Roomster purchased 20,000+ fake reviews. More fake listings = more searches = longer subscriptions. The incentives don't align with yours.",
  },
];

export default function FreeAppContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-400 mb-3">Last updated: March 2026</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Free Roommate App — No Subscription, No Fees, No Paywall
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Most roommate apps are free to browse and $20–30/month to actually use. Find MyRoomie
              is different: browse, message, and connect with verified Bay Area roommates at zero cost.
              Permanently.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-800 mb-6">
              <strong>What free means here:</strong> No credit card. No trial that converts to a charge.
              No message limit. No "unlock more listings" upsell. Free is the whole product.
            </div>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Find Roommates Free — No Subscription →
            </a>
            <p className="text-sm text-gray-400 mt-3">Bay Area · Verified profiles · No card required</p>
          </div>
        </section>

        {/* ── Why paid apps charge ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Why Other Roommate Apps Charge — And Why It Hurts You</h2>
            <div className="space-y-4 mb-8">
              {WHY_PAY_APPS_CHARGE.map((item, i) => (
                <div key={i} className="border-l-4 border-red-300 bg-red-50 pl-4 py-3 pr-4 rounded-r-lg">
                  <p className="font-semibold text-gray-800 mb-1">{item.title}</p>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
              <strong>FTC enforcement note:</strong> In August 2023, Roomster paid $1.6 million to settle with the NY Attorney General and FTC
              over deceptive billing and fake listings. Despite the settlement, Trustpilot reviews through 2026 continue to report unauthorized charges.
            </div>
          </div>
        </section>

        {/* ── Comparison table ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Find MyRoomie vs. Apps That Charge You</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700 w-2/5"></th>
                    <th className="text-center p-3 border border-gray-200 font-semibold text-purple-700">Find MyRoomie</th>
                    <th className="text-center p-3 border border-gray-200 font-semibold text-gray-600">Roomster / Roomi / Others</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-3 border border-gray-200 text-gray-700 font-medium">{row.label}</td>
                      <td className="p-3 border border-gray-200 text-center text-green-700 font-bold">{row.findMyRoomie}</td>
                      <td className="p-3 border border-gray-200 text-center text-red-600">{row.competitors}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Where we operate ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Bay Area Roommate Search — Free Everywhere</h2>
            <p className="text-gray-600 mb-8">
              The $3,545/month SF median rent means every week without a roommate costs you money.
              Find MyRoomie has verified listings across the Bay Area — all free to contact.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {[
                { city: "San Francisco", slug: "san-francisco-ca" },
                { city: "Oakland", slug: "oakland-ca" },
                { city: "Berkeley", slug: "berkeley-ca" },
                { city: "San Jose", slug: "san-jose-ca" },
                { city: "Fremont", slug: "fremont-ca" },
                { city: "Cupertino", slug: "cupertino-ca" },
                { city: "Sunnyvale", slug: "sunnyvale-ca" },
                { city: "Palo Alto", slug: "palo-alto-ca" },
                { city: "Santa Clara", slug: "santa-clara-ca" },
              ].map((c, i) => (
                <Link
                  key={i}
                  href={`/roommates/${c.slug}/`}
                  className="block p-3 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors text-center text-sm font-medium text-gray-700"
                >
                  {c.city}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── What you get ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What You Get — For Free</h2>
            <div className="space-y-3">
              {[
                "Browse all verified Bay Area roommate listings",
                "Message any listing — no limit, no unlock required",
                "Post your own listing visible to all users",
                "Profile visible without paying to boost",
                "No auto-renewing trial or hidden billing",
                "No credit card ever required",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 border border-green-200 bg-green-50 rounded-lg">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full text-xs font-bold flex items-center justify-center">✓</span>
                  <span className="text-gray-800 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Is there really a free roommate app with no subscription?",
                  a: "Yes — Find MyRoomie is completely free with no subscription, no messaging fees, and no credit card required. You can browse and message verified Bay Area roommate listings at no cost.",
                },
                {
                  q: "What's the catch with free roommate apps?",
                  a: "Most 'free' roommate apps are free to browse but charge $15–30/month to send messages. Find MyRoomie has no such paywall — messaging is genuinely free, permanently.",
                },
                {
                  q: "Why did Roomster charge me after a free trial?",
                  a: "Roomster's 7-day trial auto-converts to a $29/month subscription unless you cancel. The FTC settled with Roomster in 2023 for $1.6 million over deceptive billing practices. Find MyRoomie has no trial, no subscription, and no auto-charge.",
                },
                {
                  q: "Does Find MyRoomie cover the Bay Area?",
                  a: "Yes — Find MyRoomie is Bay Area-focused with verified listings in San Francisco, Oakland, Berkeley, San Jose, Fremont, Cupertino, Sunnyvale, Palo Alto, and surrounding cities.",
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
              <Link href="/roommate-app-no-paywall/" className="text-purple-700 border border-purple-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-purple-50 transition-colors">Roommate app with no paywall →</Link>
              <Link href="/roomster-alternative/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Roomster alternatives</Link>
              <Link href="/roomster-cancel-subscription/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Cancel Roomster</Link>
              <Link href="/roommate-apps/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">All roommate apps ranked</Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Done Paying to Say Hello?</h2>
            <p className="text-purple-200 mb-8">
              Find MyRoomie is the only Bay Area roommate app where free messaging is the whole product —
              not a trial, not a limited tier, not bait. Join free and contact verified listings today.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Get Free Access — No Subscription Ever →
            </a>
            <p className="text-sm text-purple-300 mt-3">No credit card · No trial · No subscription · Bay Area verified</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
