"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const NEIGHBORHOODS = [
  { name: "Warm Springs", rent: "Higher — newest stock", desc: "Most premium of Fremont's districts. Closest to BART station and Tesla. Heavy tech worker concentration. Newer construction. Walk to BART is real — no car required for the commute." },
  { name: "Irvington", rent: "Better value than Warm Springs", desc: "The established South Asian cultural heart of Fremont. India Cash & Carry, countless South Indian restaurants, the Fremont Hindu Temple, South Asian grocers on every other block." },
  { name: "Mission San Jose", rent: "Higher — school district premium", desc: "Quiet, well-maintained, strong Indian-American professional community. The school-district premium zone — if you don't have kids, you're paying for schools you don't use, but the neighborhood is excellent." },
  { name: "Centerville", rent: "Mid-range", desc: "Central Fremont location with good transit access. More mixed housing stock, accessible rents, convenient to both BART lines." },
  { name: "Niles", rent: "Significantly more affordable", desc: "Historic downtown feel, good walkability on the main corridor, significantly cheaper than the other neighborhoods. Worth serious consideration if you're not dependent on the BART station." },
];

const COMMUTE_OPTIONS = [
  { route: "Warm Springs BART", detail: "Direct to Milpitas, Berryessa (San Jose). Peak commute to downtown San Jose: ~30 minutes." },
  { route: "ACE Train from Fremont station", detail: "Connects to Pleasanton, Livermore, Stockton. Saves 45+ minutes vs. driving Highway 84 at rush hour." },
  { route: "Highway 680/880", detail: "To Santa Clara, Sunnyvale, Mountain View in 35–55 minutes (traffic-dependent)." },
  { route: "Tesla & Lam Research shuttles", detail: "Both have internal shuttle services from BART stations." },
];

const FAQS = [
  {
    q: "What is the South Asian community like in Fremont?",
    a: "Fremont has the highest concentration of Indian-American residents of any US city. In zip codes 94538 and 94539, South Asian residents make up 47% or more of the population. The Irvington neighborhood is the cultural heart — with India Cash & Carry, South Indian restaurants, the Fremont Hindu Temple, and South Asian grocery stores on every other block.",
  },
  {
    q: "Is Fremont close to Silicon Valley tech companies?",
    a: "Yes. Warm Springs BART connects directly to Milpitas and Berryessa (San Jose) — peak commute to downtown San Jose is about 30 minutes. Highway 680/880 reaches Santa Clara, Sunnyvale, and Mountain View in 35–55 minutes. Tesla's Gigafactory and Lam Research are headquartered in Fremont itself.",
  },
  {
    q: "How much can I save with a roommate in Fremont?",
    a: "Fremont 2BR apartments run $2,600–$3,200/month. With one roommate, you pay $1,300–$1,600/person — versus $1,900–$2,400 for a 1BR solo. The gap is $300–$800/month, or $3,600–$9,600/year. Over a three-year tech stint, that's $10,000–$30,000 in net take-home pay.",
  },
];

const RELATED_CITIES = [
  { name: "Cupertino, CA", slug: "cupertino-ca", desc: "Near Apple Park. Majority Asian-American. 2BR $3,200–$3,800/mo." },
  { name: "Santa Clara, CA", slug: "santa-clara-ca", desc: "Intel, Nvidia, AMD HQs. The heart of Silicon Valley's tech corridor." },
  { name: "Sunnyvale, CA", slug: "sunnyvale-ca", desc: "LinkedIn HQ, Apple/Google access. The quiet achiever of Silicon Valley." },
  { name: "Oakland, CA", slug: "oakland-ca", desc: "East Bay alternative. 40% lower rent than SF with direct BART access." },
];

export default function FremontContent() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full" />
              <span className="text-sm font-semibold text-orange-700">47% South Asian in some zip codes — highest in the US</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Fremont Roommate Finder — Find Verified Roommates in the Bay Area's Desi Capital
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              No other city in the United States has a higher concentration of Indian-American residents than Fremont. 2BR apartments run $2,600–$3,200/month — split to <strong>$1,300–$1,600/person</strong>. Free messaging. No subscription.
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

        {/* Tech worker reality */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Fremont Tech Worker Reality</h2>
            <p className="text-gray-600 mb-6">
              Fremont sits at the junction of South Bay and East Bay access, which makes it unusually strategic. Tesla's Gigafactory in south Fremont employs thousands of engineers and production workers. Lam Research, one of the world's largest semiconductor equipment manufacturers, has its headquarters here. And the BART Warm Springs extension connects directly to Silicon Valley without a car.
            </p>
            <p className="text-gray-600 mb-8">
              If you're working at any employer along the tech corridor — Apple, Google, Intel, Nvidia, Meta — Fremont is a legitimate base with real transit options. You're not paying for the San Jose address. You're not fighting the Sunnyvale rent premium. And you're living in the Bay Area's most culturally grounded South Asian community. Find MyRoomie's{" "}
              <Link href="/indian-roommate-finder-bay-area/" className="text-purple-700 underline hover:text-purple-900">Indian roommate finder for the Bay Area</Link>{" "}
              is built specifically for this community.
            </p>

            <h3 className="text-xl font-bold mb-4">Commute options from Fremont:</h3>
            <div className="space-y-3 mb-8">
              {COMMUTE_OPTIONS.map((c, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="font-semibold mb-1">{c.route}</div>
                  <div className="text-gray-600 text-sm">{c.detail}</div>
                </div>
              ))}
            </div>

            {/* Rent reality */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-purple-900 mb-3">Rent Reality: What Two Incomes Change</h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-700">$2,600–$3,200</div>
                  <div className="text-sm text-gray-600 mt-1">2BR apartment/month</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">$1,300–$1,600</div>
                  <div className="text-sm text-gray-600 mt-1">Per person with roommate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-600">$10K–$30K</div>
                  <div className="text-sm text-gray-600 mt-1">Saved over 3-year tech stint</div>
                </div>
              </div>
            </div>

            {/* Neighborhoods */}
            <h3 className="text-2xl font-bold mb-6">Fremont's Neighborhoods: Where You Actually Want to Live</h3>
            <div className="space-y-4">
              {NEIGHBORHOODS.map((n, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
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

        {/* Sulekha problem */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Sulekha Problem</h2>
            <p className="text-gray-600 mb-6">
              If you've searched for roommates in Fremont the way most Desi tech workers do — Sulekha, South Asian Bay Area Facebook groups, WhatsApp chains — you've encountered the same problem: listings with no verification. People you can't confirm are who they say they are. Scammers who specifically target the Desi community with fake listings, fake identities, and fake urgency. H-1B workers on compressed timelines are especially vulnerable — our{" "}
              <Link href="/how-to/h1b-visa-bay-area-housing/" className="text-purple-700 underline hover:text-purple-900">H-1B Bay Area housing guide</Link>{" "}
              covers the specific risks and how to avoid them.
            </p>
            <p className="text-gray-600 mb-6">
              The Desi roommate search in Fremont is almost entirely informal. That works until it doesn't. And when it doesn't, you've either wired a deposit to someone who doesn't exist, or you've moved in with someone whose habits are nothing like what they described.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-bold text-amber-900 mb-3">Cultural Compatibility Isn't Picky — It's Practical</h3>
              <p className="text-amber-800 text-sm mb-3">
                Sharing a kitchen with a non-vegetarian when you keep a strict vegetarian household is not a minor inconvenience. Waking up for morning prayers when your roommate keeps a 2am gaming schedule is not a "personal preference."
              </p>
              <p className="text-amber-800 text-sm">
                Find MyRoomie builds in cultural compatibility filters — not as a novelty feature, but because vegetarian households, prayer schedules, guest preferences, and festival observances are real factors that determine whether a living situation works. These filters aren't judgment. They're clarity.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Get Early Access — Free</h2>
            <p className="text-purple-200 mb-4">
              Find MyRoomie is free to use. Free to message. No subscription, no paywall. The platform launches first for Bay Area users who sign up before launch.
            </p>
            <p className="text-purple-200 mb-8">
              The verified roommate network you've been looking for in Fremont doesn't exist yet. We're building it. Join before launch and help us get it right.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Join the Fremont Waitlist — Free →
            </a>
            <p className="text-purple-300 text-sm mt-3">Free · Takes 30 seconds · No subscription, ever</p>
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
