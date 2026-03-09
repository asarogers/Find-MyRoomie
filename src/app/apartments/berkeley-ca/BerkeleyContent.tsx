"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const NEIGHBORHOODS = [
  { name: "Southside", rent: "Rooms $1,400–$1,800/mo", desc: "Highest-demand neighborhood. Walking distance to everything UC Berkeley — libraries, labs, department buildings, student union. Fastest turnover, highest competition. Best for first-year grad students." },
  { name: "Northside", rent: "Rooms $1,200–$1,600/mo", desc: "Quieter, hillside location. Higher proportion of long-term grad students and postdocs. Less competitive than Southside. Best for returning students, postdocs, and researchers." },
  { name: "Elmwood", rent: "Rooms $1,200–$1,500/mo", desc: "Residential, family-oriented, established neighborhood character. Walkable to Elmwood commercial district. Longer average tenancy than Southside. Best for grad students who want to live like a resident." },
  { name: "Downtown Berkeley", rent: "Rooms $1,100–$1,500/mo", desc: "BART station makes it the best-connected part of Berkeley. Denser, more commercial. Best for students splitting time between Berkeley and SF, or professionals working at LBNL." },
  { name: "West Berkeley", rent: "Rooms under $1,000/mo", desc: "Industrial edge, lower density, more affordable. Further from campus — BART is the lifeline. Best for cost-first renters, artists, people who don't need to be near campus daily." },
];

const RENT_TABLE = [
  { scenario: "Solo studio near campus", monthly: "$2,200–$2,600", annual: "$26,400–$31,200" },
  { scenario: "Room in shared house (unverified Craigslist)", monthly: "$1,400–$1,800", annual: "$16,800–$21,600" },
  { scenario: "Room in shared house (verified, Find MyRoomie)", monthly: "$1,200–$1,600", annual: "$14,400–$19,200" },
  { scenario: "Savings vs. solo studio", monthly: "$600–$1,400", annual: "$7,200–$16,800" },
];

const FAQS = [
  {
    q: "Is Find MyRoomie good for UC Berkeley students?",
    a: "Yes. Find MyRoomie is built specifically for verified roommate matching — which is what Berkeley students need most. WhatsApp groups and Craigslist have no verification. Roomster charges $29.99/month, which is not reasonable on a graduate stipend. Find MyRoomie is free, verified, and designed for the March-April search window when Berkeley roommate groups actually form.",
  },
  {
    q: "When should I start my Berkeley roommate search?",
    a: "March and April are the peak window. Groups that form in this period lock in housing by June. People who start searching in July are competing for what is left — often paying 15–20% more for lower-quality options. If you're starting a program in Fall 2026, start now.",
  },
  {
    q: "How much can I save with a roommate near UC Berkeley?",
    a: "A solo studio near campus runs $2,200–$2,600/month. A verified room in a shared house via Find MyRoomie runs $1,200–$1,600/month. That's $600–$1,400/month in savings — or $7,200–$16,800/year. On a graduate stipend, that difference determines financial stability.",
  },
];

const RELATED_CITIES = [
  { name: "Oakland, CA", slug: "oakland-ca", desc: "40% lower rent than SF. Direct BART access. The smart East Bay alternative." },
  { name: "San Francisco, CA", slug: "san-francisco-ca", desc: "SF median rent $3,545/mo — split it with a verified roommate and save $21K/year." },
  { name: "Fremont, CA", slug: "fremont-ca", desc: "The Bay Area's largest South Asian community. Warm Springs BART to Silicon Valley." },
  { name: "Palo Alto, CA", slug: "palo-alto-ca", desc: "Stanford, Sand Hill Road, Caltrain. The most expensive South Bay zip." },
];

export default function BerkeleyContent() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-blue-700">Fall 2026 cohorts forming now — March/April is the window</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Berkeley Renters: Find a Verified Roommate Near Campus — Free
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              UC Berkeley: 45,000+ students, 50%+ international grad students, median 2BR $2,800–$3,400/mo. With a verified roommate, you land in the <strong>$800–$1,100/month range</strong> — livable on a graduate stipend.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Get Early Access — Free →
            </a>
            <p className="text-sm text-gray-400 mt-3">No credit card · No subscription · Fall 2026 cohorts forming now</p>
          </div>
        </section>

        {/* Cohort timing */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Fall 2026 Cohorts Are Forming Now</h2>
            <p className="text-gray-600 mb-6">
              If you are starting a graduate program at UC Berkeley in Fall 2026, or beginning a postdoc at LBNL, or returning to Berkeley for another year — the housing search is happening in March and April.
            </p>
            <p className="text-gray-600 mb-6">
              This is not an estimate. People who start searching in March and April lock in housing by June. People who start searching in July are competing for what is left — often paying 15–20% more for lower-quality options.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-blue-900 mb-3">The Berkeley search season:</h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li><strong>March–April:</strong> Peak search. Groups form. Best options appear and fill.</li>
                <li><strong>May–June:</strong> Late search. Fewer options, higher prices for what remains.</li>
                <li><strong>July–August:</strong> Scramble. Whatever is left, often at a premium.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* International student problem */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The International Student Problem</h2>
            <p className="text-gray-600 mb-6">
              Berkeley accepts thousands of international students each year across its graduate programs. Many will arrive in August without having visited Berkeley in person. The informal solutions — WhatsApp groups, department mailing lists, Facebook groups — have no verification layer. You are trusting that the person on the other end is who they say they are. There is no mechanism to confirm any of it.
            </p>
            <p className="text-gray-600 mb-8">
              Find MyRoomie's verification system is specifically designed to solve this. Verified identity. Real photos. Profile information that has been confirmed, not just typed. International students can search, screen, and connect with Berkeley roommates before they board their flight — with confidence that the person they are meeting at the airport is the person they vetted online.
            </p>

            {/* Neighborhoods */}
            <h3 className="text-2xl font-bold mb-6">Berkeley Neighborhoods: Where to Live and Why</h3>
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

        {/* Why search is broken */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Why the Current Berkeley Roommate Search Is Broken</h2>
            <div className="space-y-4">
              {[
                { title: "The WhatsApp group problem", desc: "Department WhatsApp groups have real value but no verification, no filtering, no profiles, and no accountability. Being admitted to the same program does not tell you whether someone is reliable, clean, or honest about their living habits." },
                { title: "Craigslist Berkeley", desc: "High scam rate targeting students — specifically targeting students arriving from overseas who cannot verify listings in person. The 'pay a deposit to hold the apartment' scam is documented in Berkeley student housing forums annually." },
                { title: "Roomster", desc: "$29.99/month paywall before you can message anyone. Graduate student stipends in California average $28,000–$42,000/year. Spending $360/year on a messaging subscription to find a roommate is not a reasonable ask." },
                { title: "Off-campus housing boards", desc: "UC Berkeley's official housing resources list available rooms but have no compatibility matching, no profile verification, and no messaging system. They are a bulletin board, not a platform." },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-purple-300 pl-4 py-2">
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rent math */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Berkeley Rent Math</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Scenario</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Monthly cost</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Annual cost</th>
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
            <p className="text-gray-600">
              On a graduate stipend, $600–$1,400/month is the difference between financial stress and financial stability. It is the difference between taking a summer research trip and not being able to afford one.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Get Early Access — Free</h2>
            <p className="text-purple-200 mb-4">
              Berkeley verified roommate matching is live. Members who join now get first access to verified profiles across Southside, Northside, Elmwood, Downtown, and West Berkeley.
            </p>
            <ul className="text-purple-200 text-sm mb-8 space-y-1">
              <li>✓ Priority matching within Fall 2026 cohort groups</li>
              <li>✓ Free messaging — permanently, no subscription required</li>
              <li>✓ International-student-ready verification</li>
              <li>✓ Compatibility filtering for grad student-specific factors</li>
            </ul>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Join the Berkeley Waitlist — Free →
            </a>
            <p className="text-purple-300 text-sm mt-3">Free messaging · Verified profiles · No subscription · Don't lose the window</p>
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
            <h2 className="text-2xl font-bold mb-6">Find Roommates Across the Bay Area</h2>
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
