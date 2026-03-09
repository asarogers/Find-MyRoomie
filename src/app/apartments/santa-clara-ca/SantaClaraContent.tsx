"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const NEIGHBORHOODS = [
  { name: "Central Santa Clara / Intel Campus", desc: "1BR $3,000–$3,400/mo", detail: "Closest residential area to Intel HQ. Walking/biking distance for Intel and Applied Materials employees. Highest demand in the city — roommate turnover is consistent and fast." },
  { name: "Rivermark", desc: "1BR $3,100–$3,600/mo", detail: "Newer development near Great America Pkwy. Popular with Nvidia employees (HQ is nearby). More modern apartment stock, slightly higher prices. Active roommate community." },
  { name: "Diridon / Downtown Santa Clara", desc: "Transit-forward pricing", detail: "Best public transit access in the South Bay. Caltrain, ACE, and Amtrak at Diridon Station. Walking distance to Santa Clara University. Future BART connection will make this neighborhood even more valuable." },
  { name: "Old Quad / Santa Clara University Area", desc: "Student-adjacent pricing", detail: "SCU's student population creates a consistent roommate market. Prices are lower than tech-adjacent zones. Good for renters who prioritize walkability and community over proximity to tech campuses." },
  { name: "Lawrence Expressway Corridor", desc: "1BR $2,900–$3,300/mo", detail: "Central access corridor connecting Santa Clara to Sunnyvale and San Jose. Car-dependent but well-positioned for multiple employer hubs. Lower rents than campus-adjacent areas." },
];

const RENT_TABLE = [
  { scenario: "1BR in Santa Clara, alone", monthly: "$2,900–$3,400", annual: "$34,800–$40,800" },
  { scenario: "Share a 2BR, split evenly", monthly: "$1,600–$1,900", annual: "$19,200–$22,800" },
  { scenario: "Annual savings", monthly: "—", annual: "$12,000–$18,000" },
];

const FAQS = [
  {
    q: "Why is Santa Clara a good location for tech workers?",
    a: "Santa Clara has the highest concentration of major chip company headquarters of any city in the world. Intel HQ, Nvidia HQ, and AMD HQ are all within a two-mile radius. Add in Applied Materials, Palo Alto Networks, and ServiceNow, and Santa Clara is effectively the semiconductor capital of Silicon Valley.",
  },
  {
    q: "How much can I save with a roommate in Santa Clara?",
    a: "Santa Clara 1BR runs $2,900–$3,400/month. A 2BR split brings your cost to $1,600–$1,900/person — saving $1,000–$1,500/month versus living alone. Over a year, that's $12,000–$18,000 in additional take-home.",
  },
  {
    q: "Is Diridon Station useful for commuters in Santa Clara?",
    a: "Yes. Diridon is Santa Clara's main transit hub — Caltrain, ACE (Altamont Corridor Express), and Amtrak Capitol Corridor all converge there. Future BART extension will add direct connections to San Jose, Oakland, and San Francisco. Living near Diridon is the smartest commuter decision in the South Bay for anyone who doesn't drive.",
  },
  {
    q: "How much does Find MyRoomie cost?",
    a: "Find MyRoomie is completely free. No subscription, no credit card, no paywall to message anyone. Unlike Roomster, which charges $29.99/month to access messaging, Find MyRoomie is free to browse, post, and contact verified roommates.",
  },
];

const RELATED_CITIES = [
  { name: "Sunnyvale, CA", slug: "sunnyvale-ca", desc: "LinkedIn HQ corridor. Caltrain access. Adjacent to Santa Clara." },
  { name: "Cupertino, CA", slug: "cupertino-ca", desc: "Apple Park. Higher rents but two miles from Intel/Nvidia." },
  { name: "Palo Alto, CA", slug: "palo-alto-ca", desc: "Stanford, Sand Hill Road. The most expensive Peninsula zip." },
  { name: "Fremont, CA", slug: "fremont-ca", desc: "South Asian community hub. Tesla Gigafactory. Warm Springs BART." },
];

export default function SantaClaraContent() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="text-sm font-semibold text-amber-700">Intel, Nvidia, AMD — three chip giants, one city</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Find a Roommate in Santa Clara — Intel, Nvidia, AMD Hub
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Santa Clara's 1BR averages $2,900–$3,400/month. Split a 2BR with a verified roommate and you're paying <strong>$1,600–$1,900/month</strong> — saving $12,000–$18,000/year while living minutes from the three largest semiconductor companies in the world.
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

        {/* Santa Clara Rental Reality */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Santa Clara Rental Reality</h2>
            <p className="text-gray-600 mb-6">
              Santa Clara is the semiconductor capital of the world. Intel's global headquarters, Nvidia's global headquarters, and AMD's global headquarters are all located within a two-mile radius of each other in central Santa Clara. Add in Applied Materials, Palo Alto Networks, ServiceNow, and Broadcom — and you have the highest concentration of chip and infrastructure software companies of any city on earth.
            </p>
            <p className="text-gray-600 mb-6">
              That density of employers means a high-density, high-turnover roommate market. Engineers arrive for new-hire cohorts in January and September. Teams relocate when projects move. The roommate search cycle in Santa Clara is faster and more competitive than in most Bay Area cities.
            </p>
            <p className="text-gray-600 mb-8">
              Diridon Station — Santa Clara's main transit hub — is undergoing one of the largest transit infrastructure investments in California. Caltrain, ACE, and Amtrak already converge there. Future BART connection will add direct service to San Jose, Oakland, and San Francisco. For car-free or car-light commuters, the area around Diridon is the best-value transit location in the South Bay.
            </p>

            <h3 className="text-2xl font-bold mb-6">Santa Clara Neighborhoods</h3>
            <div className="space-y-4">
              {NEIGHBORHOODS.map((n, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-lg">{n.name}</h4>
                    <span className="text-sm font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full">{n.desc}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{n.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why platforms are failing SC renters */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Why Roomster and Craigslist Fail Santa Clara Renters</h2>
            <p className="text-gray-600 mb-6">
              The Santa Clara roommate market moves fast. By the time you've paid Roomster's $29.99/month to access messaging — a platform the FTC and New York AG fined $1.6M in 2023 for fake listings — the unit you were targeting has already been rented. Craigslist South Bay is plagued by scam listings specifically designed to catch newly relocated tech workers unfamiliar with local market pricing.
            </p>
            <p className="text-gray-600 mb-6">
              Intel, Nvidia, and AMD bring large incoming cohorts of engineers from abroad every quarter. These renters — often on H-1B visas, often without a US credit history — are primary targets for fraudulent listing operations on unverified platforms. Wire-transfer deposit requests, phantom apartments, and identity-harvesting contact forms are documented problems on both Craigslist and unvetted Facebook roommate groups.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <p className="font-semibold text-purple-900">Find MyRoomie is free — no $29/month Roomster paywall.</p>
              <ul className="mt-4 space-y-2 text-sm text-purple-800">
                <li>✓ Profile verification — real identity, real photo, confirmed contact information</li>
                <li>✓ Free messaging — contact any verified member without a subscription or credit card</li>
                <li>✓ No auto-renew traps — we do not charge you without consent</li>
                <li>✓ Background-check ready — available at transparent, flat-rate pricing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Rent math */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Santa Clara Rent Math</h2>
            <p className="text-gray-600 mb-8">
              What a verified roommate is worth near Intel, Nvidia, and AMD.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Living situation</th>
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
              $12,000–$18,000/year. For an engineer in the early vesting years of an RSU grant, keeping that capital in-hand rather than in rent has compounding value. Santa Clara's roommate market is one of the most cost-effective decisions available to incoming tech workers.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Get Early Access — Free</h2>
            <p className="text-purple-200 mb-4">
              Find MyRoomie is pre-launch. Members who join now get first access to verified roommate listings in Santa Clara — near Intel, Nvidia, AMD, Diridon Station, and SCU — before the platform opens to the public.
            </p>
            <ul className="text-purple-200 text-sm mb-8 space-y-1">
              <li>✓ Priority matching before the platform goes public</li>
              <li>✓ Free messaging — permanently, no subscription tier required</li>
              <li>✓ Set employer proximity and compatibility filters now</li>
            </ul>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Join the Verified Santa Clara Waitlist — Free →
            </a>
            <p className="text-purple-300 text-sm mt-3">Free messaging · Verified profiles · No subscription · No fake listings</p>
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

        {/* Related city links */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Find Roommates Across Silicon Valley</h2>
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
