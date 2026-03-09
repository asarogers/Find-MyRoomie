"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const RENTER_GROUPS = [
  { title: "Apple employees — new transfers and incoming engineers", desc: "The largest cohort. Many arrive from out of state or internationally, have no local network, and need a verified connection quickly. The company shuttle runs from Cupertino to Apple Park — proximity matters, but the exact address is flexible." },
  { title: "De Anza College students", desc: "One of the most competitive community college transfer pipelines in the state — a stepping stone to UC Berkeley, UCLA, and UCSD. Students here are serious, often international, and cost-conscious. They want stable housing without chaos." },
  { title: "Monta Vista families subletting rooms", desc: "The Monta Vista High School district commands some of the highest property values in Cupertino. Homeowners frequently sublet spare rooms to young professionals — quieter, financially stable tenants. One of the best-value pockets in the city." },
];

const COMMUTE_OPTIONS = [
  { dest: "Apple Park (campus)", time: "5–15 min bike ride or company shuttle from throughout Cupertino" },
  { dest: "Google (Mountain View)", time: "15–20 minutes by bike along Stevens Creek corridor, or 12 minutes by car" },
  { dest: "Intel / Nvidia (Santa Clara)", time: "15 minutes by car on 280" },
  { dest: "Caltrain (Sunnyvale station)", time: "10 minutes by car — access to the entire Peninsula corridor" },
];

const RENT_TABLE = [
  { scenario: "1BR apartment, solo", monthly: "$2,400–$2,800", annual: "$28,800–$33,600" },
  { scenario: "2BR apartment, total", monthly: "$3,200–$3,800", annual: "$38,400–$45,600" },
  { scenario: "2BR split with roommate", monthly: "$1,600–$1,900/person", annual: "$19,200–$22,800/person" },
  { scenario: "Annual savings vs. 1BR solo", monthly: "—", annual: "$9,600–$14,400" },
];

const FAQS = [
  {
    q: "Is Cupertino affordable for Apple employees?",
    a: "Not solo. A 1BR near Apple Park runs $2,400–$2,800/month. A 2BR runs $3,200–$3,800. Even on a $200K+ total comp package, engineers run the math and share — paying $1,600–$1,900/person on a 2BR instead of $2,800 alone. The two-mile proximity premium to Apple Park is real and unavoidable if you want to walk or bike to campus.",
  },
  {
    q: "What neighborhoods are near Apple Park in Cupertino?",
    a: "The South De Anza corridor and areas near Wolfe Road are closest to Apple Park with a 5–15 minute bike ride. Homestead has slightly lower rents. Monta Vista commands the highest prices due to the school district premium. Most Apple employees use the internal shuttle network, so exact proximity matters less than being on a shuttle route.",
  },
  {
    q: "Who are the typical roommates in Cupertino?",
    a: "Three groups: Apple employees — especially new transfers and incoming engineers from abroad who have no local network. De Anza College students — serious, often international, cost-conscious, using De Anza as a transfer pipeline to UC schools. And Monta Vista homeowners subletting rooms to working professionals, which is one of the best-value pockets in the city.",
  },
];

const RELATED_CITIES = [
  { name: "Fremont, CA", slug: "fremont-ca", desc: "The Bay Area's largest South Asian community. Warm Springs BART to Silicon Valley." },
  { name: "Santa Clara, CA", slug: "santa-clara-ca", desc: "Intel, Nvidia, AMD HQs. The heart of Silicon Valley's tech corridor." },
  { name: "Sunnyvale, CA", slug: "sunnyvale-ca", desc: "LinkedIn HQ, Apple/Google access. Lower rents than Cupertino." },
  { name: "Palo Alto, CA", slug: "palo-alto-ca", desc: "Stanford, Sand Hill Road, Caltrain. The most expensive South Bay zip." },
];

export default function CupertinoContent() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-full mb-6">
              <span className="w-2 h-2 bg-gray-700 rounded-full" />
              <span className="text-sm font-semibold text-gray-700">Apple Park employs 12,000+ — majority searching for roommates</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Cupertino Roommate Finder — Find Verified Roommates Near Apple HQ, Free
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Apple Park's gravitational pull drives Cupertino rents to $3,200–$3,800/month for a 2BR. Split that with a verified roommate and you're paying <strong>$1,600–$1,900/person</strong>. Even engineers on $200K+ total comp run this math. They share.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Get Early Access — Free →
            </a>
            <p className="text-sm text-gray-400 mt-3">No credit card · No subscription · Verified profiles only</p>
          </div>
        </section>

        {/* Apple Effect */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Apple Effect on Cupertino Rent</h2>
            <p className="text-gray-600 mb-6">
              Cupertino has some of the highest residential rents in Silicon Valley — a direct result of Apple Park's gravitational pull. Every apartment within two miles of the campus commands a premium: typically $200–$400/month above comparable units in Sunnyvale or Santa Clara.
            </p>
            <p className="text-gray-600 mb-8">
              The two-mile proximity premium is real. If you can walk, bike, or take the Apple shuttle to campus, you're paying for that convenience. The question is whether you pay for it alone or with a roommate.
            </p>

            {/* Rent table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Scenario</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Monthly</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Annual</th>
                  </tr>
                </thead>
                <tbody>
                  {RENT_TABLE.map((row, i) => (
                    <tr key={i} className={i === RENT_TABLE.length - 1 ? "bg-green-50 font-bold" : i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200">{row.scenario}</td>
                      <td className="p-3 border border-gray-200">{row.monthly}</td>
                      <td className={`p-3 border border-gray-200 ${i === RENT_TABLE.length - 1 ? "text-green-700" : ""}`}>{row.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Who's looking */}
            <h3 className="text-2xl font-bold mb-6">Who's Looking for Roommates in Cupertino</h3>
            <div className="space-y-4 mb-8">
              {RENTER_GROUPS.map((g, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                  <h4 className="font-bold mb-2">{g.title}</h4>
                  <p className="text-gray-600 text-sm">{g.desc}</p>
                </div>
              ))}
            </div>

            {/* Commute */}
            <h3 className="text-2xl font-bold mb-4">Commute Reality from Cupertino</h3>
            <div className="space-y-3">
              {COMMUTE_OPTIONS.map((c, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-start gap-4">
                  <div className="font-semibold text-sm">{c.dest}</div>
                  <div className="text-gray-600 text-sm text-right">{c.time}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-3">Cupertino has no BART access. If BART is essential for your commute, Sunnyvale or Santa Clara are better bases.</p>
          </div>
        </section>

        {/* Cultural mix + platform failures */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Cultural Mix in Cupertino</h2>
            <p className="text-gray-600 mb-6">
              Cupertino's population is majority Asian-American — a mix of South Asian and East Asian residents that is among the densest in any suburban city in the country. This matters for roommate matching in practical ways: dietary preferences in shared kitchens, household schedules, noise norms, guests.
            </p>
            <p className="text-gray-600 mb-8">
              Finding a culturally compatible roommate in Cupertino through Craigslist or a generic national platform is inefficient. The community exists. The matching layer doesn't — until now.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h3 className="font-bold text-purple-900 mb-3">No Fake Listings. No Paywall. No Scammers.</h3>
              <p className="text-purple-800 text-sm">
                The Cupertino roommate search is dominated by informal channels — word of mouth through Apple's internal Slack groups, posts in South Asian Facebook communities, Craigslist. None of these verify the person you're about to meet. None let you filter by lifestyle compatibility before you invest time in a conversation. We do both. And we're free.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Your Verified Roommate Near Apple Park Is Already Searching</h2>
            <p className="text-purple-200 mb-8">
              Join the Cupertino waitlist — free, takes 30 seconds. Find them before launch.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Join the Cupertino Waitlist — Free →
            </a>
            <p className="text-purple-300 text-sm mt-3">No subscription · No paywall · Ever</p>
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
            <h2 className="text-2xl font-bold mb-6">Find Roommates Across the Bay Area Tech Corridor</h2>
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
