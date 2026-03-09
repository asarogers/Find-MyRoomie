"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const NEIGHBORHOODS = [
  { name: "Noe Valley", note: "Quiet, family-adjacent, safe streets. Strong women's community. Higher rents ($2,200–$2,800/room) but lower density = more space." },
  { name: "Cole Valley / Inner Sunset", note: "Walkable, near UCSF. Young professional women heavily concentrated here. Good N-Judah access." },
  { name: "Castro", note: "Historically safe, LGBTQ+ affirming neighborhood. Good walkability. Strong community culture." },
  { name: "Haight-Ashbury", note: "Arts and music-forward. Mix of house shares and smaller apartments. Good Western Addition access." },
  { name: "Bernal Heights", note: "Neighborhood safety reputation is excellent. Active women's community. Slightly off-grid transit-wise but strong community vibe." },
  { name: "Richmond / Sunset", note: "Most affordable SF neighborhoods. Quieter streets. Golden Gate Park access. Good for remote workers." },
];

const RISKS_ON_GENERIC_PLATFORMS = [
  {
    platform: "Craigslist",
    issue: "No gender filtering. No verification. Your listing is visible to any anonymous user worldwide. Multiple documented cases of safety incidents originating from Craigslist SF roommate listings.",
  },
  {
    platform: "Roomster",
    issue: "FTC settled with Roomster in 2023 for $1.6M over fake listings. On a platform with documented fake profiles, there is no way to verify the gender or identity of who you're contacting — before or after paying $29/month.",
  },
  {
    platform: "Facebook Groups",
    issue: "Your housing search is public. Your full name is attached. You have no control over who sees your post or who contacts you.",
  },
];

export default function FemaleRoommateContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-400 mb-3">San Francisco · Updated March 2026</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Female Roommates San Francisco — Women-Only, Verified & Free
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Finding a women-only roommate in SF shouldn't require putting your housing search on
              Craigslist or paying $29/month for Roomster. Find MyRoomie has verified profiles,
              gender preference filters, and free messaging — permanently.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-sm text-purple-800 mb-6">
              <strong>How the filter works:</strong> You can set your search to show only female roommates
              and set your profile to be discoverable only to verified women searchers. Identity is
              controlled visibility — not a public broadcast.
            </div>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Find Women-Only Roommates Free →
            </a>
            <p className="text-sm text-gray-400 mt-3">No credit card · No subscription · Verified profiles</p>
          </div>
        </section>

        {/* ── Why generic platforms fail ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Why Generic Platforms Don't Work for Women-Only Searches</h2>
            <div className="space-y-4 mb-8">
              {RISKS_ON_GENERIC_PLATFORMS.map((item, i) => (
                <div key={i} className="border-l-4 border-red-300 bg-red-50 pl-4 py-3 pr-4 rounded-r-lg">
                  <p className="font-semibold text-gray-800 mb-1">{item.platform}</p>
                  <p className="text-gray-700 text-sm">{item.issue}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SF neighborhoods for women ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Best SF Neighborhoods for Women Seeking Roommates</h2>
            <div className="space-y-4">
              {NEIGHBORHOODS.map((n, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4 bg-white">
                  <h3 className="font-bold mb-2">{n.name}</h3>
                  <p className="text-gray-600 text-sm">{n.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What verified means ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What Verification Means Here</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Identity verified before listing", desc: "Every profile is reviewed before going live. No anonymous posting. You know who you're talking to." },
                { title: "Gender preference filters", desc: "Search specifically for women and set your profile to be discoverable only to verified women seekers." },
                { title: "Controlled visibility", desc: "Your contact information, address, and identity details are never shared automatically. You control what's visible." },
                { title: "Free — always", desc: "No subscription, no credit card, no monthly fee. Safety should not cost extra." },
              ].map((item, i) => (
                <div key={i} className="p-5 border border-gray-200 rounded-xl">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                    <span className="text-purple-700 font-bold text-sm">✓</span>
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Legal note ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Is It Legal to Look for a Female-Only Roommate?</h2>
            <p className="text-gray-600 mb-4">
              Yes. California's Fair Employment and Housing Act includes a specific exemption for
              shared living situations. Selecting a roommate based on gender is permitted because
              you share common living spaces (kitchen, bathroom, living room). This is legally
              distinct from housing discrimination in multi-unit rental properties.
            </p>
            <p className="text-gray-600 text-sm">
              This applies to roommate selection — not to landlord decisions about tenants, which
              remain covered by FEHA in full.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How do I find female-only roommates in San Francisco?",
                  a: "Find MyRoomie supports gender-preference filters — you can search for and be found by women-only roommate listings. All profiles are verified before going live, which eliminates the fake profile risk that Craigslist and unverified platforms have.",
                },
                {
                  q: "Is it legal to look for a female-only roommate in California?",
                  a: "Yes. California's Fair Employment and Housing Act includes an exemption for shared living situations — selecting a roommate based on gender is permitted because you share common living spaces. This is different from housing discrimination in multi-unit rentals.",
                },
                {
                  q: "Is Find MyRoomie free for women?",
                  a: "Yes — completely free. No subscription, no credit card, no messaging fee. Find MyRoomie believes the people who need the most safety should face the fewest financial barriers.",
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
            <p className="text-sm font-semibold text-gray-500 mb-3">Related pages</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/lgbtq-roommate-bay-area/" className="text-purple-700 border border-purple-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-purple-50 transition-colors">LGBTQ+ roommate finder →</Link>
              <Link href="/how-to/avoid-roommate-scams-san-francisco/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Avoid SF scams</Link>
              <Link href="/roommates/san-francisco-ca/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">All SF roommates</Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Women-Only. Verified. Free.</h2>
            <p className="text-purple-200 mb-8">
              Find MyRoomie is the only Bay Area roommate platform with verified identity + gender filters
              + free messaging. The people who need the most protection should face the fewest barriers.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Women-Only Roommates Free →
            </a>
            <p className="text-sm text-purple-300 mt-3">No credit card · No subscription · Controlled visibility</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
