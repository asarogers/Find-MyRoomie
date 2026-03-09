"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const NEIGHBORHOODS = [
  { name: "Downtown SJ (near Diridon)", desc: "1BR $2,400–$2,900", detail: "SAP Center, Caltrain, Google Downtown West (under construction). Best for: commuters, remote workers wanting urban amenity access." },
  { name: "North San Jose / Berryessa", desc: "1BR $2,100–$2,500", detail: "BART Berryessa station, Intel/Cisco campus proximity. Best for: tech workers, established Indian-American community." },
  { name: "Willow Glen", desc: "1BR $2,300–$2,700", detail: "Tree-lined streets, local restaurants, quiet. Best for: renters wanting neighborhood character over transit access." },
  { name: "Rose Garden", desc: "1BR $2,200–$2,600", detail: "Established, walkable to downtown, mix of older and newer units. Best for: value-seeking renters who want central access." },
  { name: "Almaden Valley (South SJ)", desc: "1BR $2,000–$2,400", detail: "Quieter, car-dependent, strong school district. Best for: families, long-term stability over urban access." },
];

const CITY_COMPARISON = [
  { city: "San Francisco", solo: "$3,545/month", split: "$1,772/person", savings: "—" },
  { city: "San Jose", solo: "$2,400/month", split: "$1,500/person", savings: "$24,540/year vs SF solo" },
  { city: "Fremont", solo: "$2,200/month", split: "$1,400/person", savings: "$27,540/year vs SF solo" },
];

const RENT_TABLE = [
  { scenario: "Solo 1BR in San Jose", monthly: "$2,400", annual: "$28,800" },
  { scenario: "Share a 2BR, split", monthly: "$1,500", annual: "$18,000" },
  { scenario: "Annual savings", monthly: "—", annual: "$10,800" },
];

const FAQS = [
  {
    q: "Is San Jose cheaper than San Francisco for renters?",
    a: "Yes. San Jose median 1BR runs $2,200–$2,700/month vs SF's $3,545 median. A 2BR split in San Jose brings per-person costs to $1,400–$1,700/month — among the lowest in the Bay Area tech corridor.",
  },
  {
    q: "What neighborhoods are best for tech workers in San Jose?",
    a: "Downtown SJ (near Diridon/SAP Center), North San Jose/Berryessa (near Intel, Cisco, BART), Willow Glen (family-friendly, lower density), and Rose Garden (walkable, established). Each has a distinct renter profile and price point.",
  },
  {
    q: "Is the Indian community large in San Jose?",
    a: "Yes. San Jose's Berryessa district and surrounding North San Jose neighborhoods have one of the most established Indian-American communities in the Bay Area — second only to Fremont in density. Many H-1B and L-1 workers at Intel, Cisco, and Nvidia live here.",
  },
  {
    q: "How much can I save with a roommate in San Jose?",
    a: "Solo 1BR in San Jose: ~$2,400/month ($28,800/year). Share a 2BR: ~$1,500/person ($18,000/year). Annual savings: $10,800 — plus the flexibility to live in a better location than your solo budget would allow.",
  },
];

const RELATED_CITIES = [
  { name: "Fremont, CA", slug: "fremont-ca", desc: "Bay Area's largest South Asian community. Warm Springs BART to Silicon Valley." },
  { name: "Cupertino, CA", slug: "roommates-near-apple", desc: "Apple Park neighborhood. South Bay's most expensive tech city." },
  { name: "Santa Clara, CA", slug: "santa-clara-ca", desc: "Central Silicon Valley location. Close to Intel, Nvidia, and Levi's Stadium." },
  { name: "Sunnyvale, CA", slug: "sunnyvale-ca", desc: "Midpoint between Apple and Google. Strong South Asian community presence." },
  { name: "Mountain View, CA", slug: "roommates-near-google", desc: "Google campus city. Walking distance to Caltrain and Castro Street." },
];

export default function SanJoseContent() {
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
              <span className="text-sm font-semibold text-amber-700">Silicon Valley&apos;s Most Livable City</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              San Jose Roommate Finder — Find Verified Roommates in Silicon Valley&apos;s Affordable Hub
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              San Jose median 1BR: $2,400/month. Split a 2BR with a verified roommate: <strong>$1,400–$1,700/person</strong>. That&apos;s $10,800/year back in your pocket.
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

        {/* The San Jose Rental Reality */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The San Jose Rental Reality</h2>
            <p className="text-gray-600 mb-6">
              San Jose is the 10th largest city in the United States and the economic capital of Silicon Valley. Median 1BR runs $2,200–$2,700/month. A 2BR runs $2,800–$3,400/month. These are not San Francisco prices — but they are not affordable without a plan.
            </p>
            <p className="text-gray-600 mb-8">
              The plan most San Jose renters use: a roommate. A verified roommate in a shared 2BR brings your monthly cost to $1,400–$1,700/person — well below what you would spend on a solo 1BR in Sunnyvale, Mountain View, or Palo Alto.
            </p>

            <h3 className="text-2xl font-bold mb-6">Neighborhoods We Cover</h3>
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

        {/* Why San Jose, Not San Francisco */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Why San Jose, Not San Francisco</h2>
            <p className="text-gray-600 mb-8">
              San Jose&apos;s advantage: closer to Silicon Valley employers than SF, better parking than SF, lower cost than SF, and an established South Asian community infrastructure that makes the transition significantly easier for international arrivals.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">City</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Solo 1BR</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">2BR Split</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Annual Savings vs SF Solo</th>
                  </tr>
                </thead>
                <tbody>
                  {CITY_COMPARISON.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium">{row.city}</td>
                      <td className="p-3 border border-gray-200">{row.solo}</td>
                      <td className="p-3 border border-gray-200">{row.split}</td>
                      <td className={`p-3 border border-gray-200 ${i > 0 ? "text-green-700 font-semibold" : ""}`}>{row.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* The Desi Community in San Jose */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Desi Community in San Jose</h2>
            <p className="text-gray-600 mb-6">
              Berryessa district is one of the Bay Area&apos;s most established Indian-American neighborhoods. Temples, Indian grocery stores, and restaurants are within walking distance of apartment complexes where H-1B workers at Intel, Cisco, Nvidia, and AMD frequently settle.
            </p>
            <p className="text-gray-600 mb-6">
              For arrivals from India navigating the Bay Area rental market for the first time — no US credit history, unfamiliar geography, compressed timeline — the community infrastructure in North San Jose makes the transition significantly easier than any other Silicon Valley city.
            </p>
            <p className="text-gray-600">
              The roommate search in this community runs through WhatsApp groups, Sulekha, and word of mouth. None of these have verification. Find MyRoomie adds the verification layer this community has always needed.
            </p>
          </div>
        </section>

        {/* The Craigslist and Roomster Problem */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Craigslist and Roomster Problem in San Jose</h2>
            <p className="text-gray-600 mb-6">
              Downtown SJ luxury vacancies create an active fake listing problem. Operators run listings at below-market prices targeting tech workers who don&apos;t know the local market. You respond, they ask for a deposit via Venmo before a showing, the listing disappears.
            </p>
            <p className="text-gray-600 mb-6">
              Roomster charges $29.99/month — you pay before knowing if San Jose has real listings. Reddit&apos;s roommate communities have documented this repeatedly. The &quot;Roomster scam&quot; keyword cluster exists because it reflects actual user experience.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <p className="font-semibold text-purple-900">Find MyRoomie does this differently.</p>
              <ul className="mt-4 space-y-2 text-sm text-purple-800">
                <li>✓ Profile verification — real identity confirmed before any contact</li>
                <li>✓ Free messaging — contact any verified member without a subscription</li>
                <li>✓ No deposit requests before showing — every listing is accountable</li>
                <li>✓ Background-check ready — available at transparent, flat-rate pricing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Rent Math */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The San Jose Roommate Math</h2>
            <p className="text-gray-600 mb-8">
              Let us be specific about what finding the right roommate is worth in San Jose.
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
              $10,800 per year. In San Jose, that is the difference between renting alone and renting smart. The only question is whether you find your roommate through a platform with verified profiles and free messaging, or through a process that exposes you to scammers and a $29.99/month paywall.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find your verified San Jose roommate — free. No subscription.</h2>
            <p className="text-purple-200 mb-4">
              Find MyRoomie is pre-launch. Members who join now get first access to verified listings in Downtown SJ, Berryessa, Willow Glen, and every San Jose neighborhood — before the platform opens to the public.
            </p>
            <ul className="text-purple-200 text-sm mb-8 space-y-1">
              <li>✓ Priority matching before the platform goes public</li>
              <li>✓ Free messaging — permanently, no subscription tier required</li>
              <li>✓ Set neighborhood preferences and compatibility filters now</li>
            </ul>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Join the Verified San Jose Waitlist — Free →
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
