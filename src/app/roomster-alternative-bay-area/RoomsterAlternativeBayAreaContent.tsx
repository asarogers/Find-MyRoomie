"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const ROOMSTER_TIMELINE = [
  { year: "2012", event: "Roomster founded as peer-to-peer roommate platform." },
  { year: "2015–2020", event: "Grew to millions of users via aggressive marketing." },
  { year: "2020–2022", event: "FTC investigation begins into fake listing complaints." },
  { year: "October 2023", event: "FTC files and settles complaint. Roomster pays $1.4 million. Roomster acknowledges deceptive practices in settlement." },
  { year: "March 2026", event: "Trustpilot rating sits at 1.6/5 based on 4,000+ reviews. Top complaints: fake bot messages, auto-renewal billing, no customer service response, listings that don't exist." },
  { year: "March 2026", event: "Basic subscription still $30/month. Paywall on all messaging." },
];

const COMPARISON = [
  { feature: "Messaging", roomster: "$30/month paywall", us: "Free forever" },
  { feature: "Bay Area listings", roomster: "National platform, thin local depth", us: "Bay Area-first" },
  { feature: "ID verification", roomster: "No", us: "Government ID" },
  { feature: "FTC record", roomster: "$1.4M settlement (2023)", us: "No regulatory issues" },
  { feature: "Fake profiles", roomster: "Documented in FTC complaint", us: "ID verification prevents" },
  { feature: "Customer service", roomster: "Documented non-response", us: "Direct founder access" },
];

const FAQS = [
  {
    q: "Why is Roomster banned in some states?",
    a: "Roomster settled with the FTC in 2023 over deceptive practices including fake listings and false endorsements — paying a $1.4 million settlement. The settlement required Roomster to stop its deceptive practices, but the platform still operates with paid subscriptions.",
  },
  {
    q: "What does Roomster charge in 2026?",
    a: "As of March 2026, Roomster's basic subscription starts at approximately $30/month, auto-renewing from an $11.99 7-day trial unless manually cancelled. Users cannot message listings or read messages without an active subscription.",
  },
  {
    q: "Does FindMyRoomie work in San Francisco?",
    a: "Yes. FindMyRoomie is built specifically for Bay Area roommate seekers. Verified listings in San Francisco, San Jose, Oakland, Berkeley, Sunnyvale, and all major Bay Area cities. Free messaging, no subscription, no credit card required.",
  },
  {
    q: "Is FindMyRoomie safe?",
    a: "Government ID verification on every profile. No advance deposit transactions via platform. Free messaging means you can screen potential roommates thoroughly before committing. Unlike Craigslist or Roomster's unverified listings.",
  },
  {
    q: "Why did the FTC sue Roomster?",
    a: "In 2023, the FTC alleged that Roomster bought fake reviews, posted fake listings to make the platform appear more active, and deceived consumers. The $1.4 million settlement required them to stop these practices.",
  },
];

const BAY_AREA_CITIES = [
  { city: "San Francisco, CA", slug: "san-francisco-ca" },
  { city: "San Jose, CA", slug: "san-jose-ca" },
  { city: "Oakland, CA", slug: "oakland-ca" },
  { city: "Berkeley, CA", slug: "berkeley-ca" },
  { city: "Sunnyvale, CA", slug: "sunnyvale-ca" },
  { city: "Mountain View, CA", slug: "mountain-view-ca" },
];

export default function RoomsterAlternativeBayAreaContent() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              <span className="text-sm font-semibold text-red-700">FTC-Settled 2023 · Trustpilot 1.6/5 · $30/Month</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Bay Area Roomster Alternative — The Platform That Was FTC-Fined Is Still Charging You
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              In 2023, the FTC fined Roomster $1.4 million for fake listings and deceptive reviews. They still operate. They still charge $30/month. FindMyRoomie is free, verified, and Bay Area-focused.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Find a Bay Area Roommate — Free →
            </a>
            <p className="text-sm text-gray-400 mt-3">No FTC-fined paywall · No subscription · Free messaging forever</p>
          </div>
        </section>

        {/* Stat strip */}
        <section className="py-10 px-4 bg-gray-50 border-b border-gray-100">
          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "$1.4M", label: "FTC fine (2023)" },
              { value: "1.6/5", label: "Trustpilot (March 2026)" },
              { value: "$30/mo", label: "Roomster paywall" },
              { value: "$0", label: "FindMyRoomie forever" },
            ].map((stat, i) => (
              <div key={i}>
                <div className={`text-2xl font-extrabold ${i < 3 ? "text-red-600" : "text-green-600"}`}>{stat.value}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Key fact box */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-red-900 mb-3 text-lg">Settled fact, not allegation</h3>
              <p className="text-red-800 text-sm leading-relaxed">
                The FTC's complaint against Roomster states the company "posted fake listings... and deceived consumers with false endorsements." The $1.4 million settlement is public record. This is not allegation — it is settled fact.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1 - Timeline */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">The Roomster Timeline (What Actually Happened)</h2>
            <div className="space-y-4">
              {ROOMSTER_TIMELINE.map((item, i) => (
                <div key={i} className="border-l-4 border-red-300 pl-4 py-2">
                  <h4 className="font-bold mb-1">{item.year}</h4>
                  <p className="text-gray-600 text-sm">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 - What Bay Area renters encounter */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What Bay Area Renters Actually Encounter on Roomster</h2>
            <div className="space-y-4">
              {[
                { title: "Fake messages", desc: "Automated bot messages appearing to be interested parties — a documented pattern in 2025–2026 Trustpilot reviews. Paying subscribers report receiving responses that turn out to be automated." },
                { title: "SF median rent $3,545/month", desc: "Paying $30 to look for a roommate is adding 0.85% to your housing cost before you've found anyone. In the Bay Area's cost context, the Roomster fee is small but symbolically backwards — you're paying for a broken tool." },
                { title: "No local focus", desc: "Roomster's Bay Area listings are thin. The platform's strength is national volume, not Bay Area depth. Searching for roommates near Google, UCSF, or Stanford returns national noise." },
                { title: "Auto-renewal trap", desc: "Multiple Trustpilot reviews in 2026 document charges continuing after cancellation. The $11.99 7-day trial auto-converts to $30/month unless you cancel — and cancellation confirmation is not always sent." },
                { title: "Response rate reality", desc: "Paying subscribers finding nobody responding — because the responses ARE bots. The platform's response rate problem is documented in FTC filings and current Trustpilot reviews." },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-purple-300 pl-4 py-2">
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 - Comparison table */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">FindMyRoomie vs Roomster (Bay Area Specific)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Feature</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-red-600">Roomster</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-green-600">FindMyRoomie</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium">{row.feature}</td>
                      <td className="p-3 border border-gray-200 text-red-700">{row.roomster}</td>
                      <td className="p-3 border border-gray-200 text-green-700 font-medium">{row.us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4 - SF Math */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The SF Roommate Math With and Without Roomster</h2>
            <div className="space-y-3 mb-6">
              {[
                { label: "SF median 1BR", value: "$3,545/month" },
                { label: "Solo income needed (3x rule)", value: "$127,620/year" },
                { label: "With verified roommate via FindMyRoomie (free)", value: "$1,900/month → income needed: $68,400/year" },
                { label: "With roommate found on Roomster ($30 + $1,900/month)", value: "First month cost: $1,930" },
                { label: "12-month platform cost: FindMyRoomie", value: "$0" },
                { label: "12-month platform cost: Roomster", value: "$360" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-start gap-4 py-3 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">{item.label}</span>
                  <span className={`font-bold text-sm text-right ${item.label.includes("FindMyRoomie") && item.value === "$0" ? "text-green-600" : item.label.includes("Roomster") ? "text-red-600" : "text-gray-900"}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 - Active cities */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Bay Area Cities Where FindMyRoomie Is Active</h2>
            <p className="text-gray-600 mb-8">
              Verified listings across all major Bay Area cities. Free to message anyone. No Roomster-style paywall to contact a listing.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {BAY_AREA_CITIES.map((c, i) => (
                <Link
                  key={i}
                  href={`/apartments/${c.slug}/`}
                  className="block p-4 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-colors text-center"
                >
                  <div className="font-bold text-sm">{c.city}</div>
                </Link>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-4">Also active in: Cupertino, Santa Clara, Fremont, Palo Alto, Milpitas, and surrounding cities.</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find a Bay Area roommate — free</h2>
            <p className="text-purple-200 mb-8">
              No FTC-fined paywall. No subscription. Verified Bay Area profiles — free messaging forever.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find a Bay Area Roommate — Free →
            </a>
            <p className="text-purple-300 text-sm mt-3">Free messaging · Verified profiles · No subscription · No auto-renewal</p>
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

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
