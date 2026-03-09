"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const NEIGHBORHOODS = [
  {
    name: "Castro, SF",
    desc: "Historic heart of LGBTQ+ San Francisco. Premium rent, unmatched community density, institutions that have been here for decades.",
  },
  {
    name: "Mission District, SF",
    desc: "Lower rent than Castro, high cultural density, more housing inventory. Strong queer arts and nightlife presence.",
  },
  {
    name: "Haight-Ashbury, SF",
    desc: "Historically queer-positive, arts-forward neighborhood. Victorian housing stock, close proximity to Castro and Panhandle.",
  },
  {
    name: "Oakland (Telegraph + Grand Ave)",
    desc: "Meaningfully more affordable than SF. Active and growing LGBTQ+ community. Strong local queer institutions.",
  },
  {
    name: "Berkeley",
    desc: "Strongly inclusive, especially near campus. LGBTQ+ student and faculty community with deep institutional roots.",
  },
  {
    name: "San Jose",
    desc: "Growing LGBTQ+ community, lower cost than SF. Willow Glen and downtown corridors have active affirming spaces.",
  },
];

const FAQS = [
  {
    q: "Does Find MyRoomie have LGBTQ+ identity filters?",
    a: "Yes. You can search for and be found by people who have explicitly indicated they're LGBTQ+ or LGBTQ+ affirming — with controlled visibility so you decide who sees what about you.",
  },
  {
    q: "Is Find MyRoomie free for LGBTQ+ renters?",
    a: "Yes. No subscription, no credits system, no monthly fee. The platform is free because we believe the people who need the most protection should face the fewest financial barriers.",
  },
  {
    q: "Which Bay Area neighborhoods have the most LGBTQ+ renters?",
    a: "Castro (historic LGBTQ+ SF), Mission District, Haight-Ashbury, Oakland's Telegraph and Grand Ave corridors, Berkeley, and growing communities in San Jose.",
  },
  {
    q: "How does Find MyRoomie protect my privacy?",
    a: "Your address and current neighborhood are never shared automatically. Identity visibility is a controlled setting — you decide who can find you and what they see.",
  },
];

export default function LGBTQRoommateContent() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
              style={{ background: "linear-gradient(to right, #fef3c7, #fce7f3, #ede9fe)", borderColor: "#e5e7eb" }}>
              <span className="text-sm font-semibold text-gray-700">LGBTQ+ Identity Filters</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Bay Area LGBTQ+ Roommate Finder — Find Someone Who Gets It
            </h1>
            <blockquote className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8 text-left max-w-2xl mx-auto">
              <p className="text-gray-700 italic text-base">
                &quot;We&apos;d all identify as part LGBT — we&apos;d rather have another LGBT person due to past experiences.&quot;
              </p>
              <cite className="text-sm text-gray-400 mt-2 block not-italic">— r/roommates</cite>
            </blockquote>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Identity filters. Verified profiles. Free messaging. No $30/month paywall. Built for the Bay Area.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Find LGBTQ+ Verified Roommates →
            </a>
            <p className="text-sm text-gray-400 mt-3">No credit card · No subscription · Identity-controlled visibility</p>
          </div>
        </section>

        {/* ── What Generic Platforms Are Actually Asking ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What Generic Platforms Are Actually Asking You to Do</h2>
            <p className="text-gray-600 mb-8">
              No identity filtering exists on mainstream roommate platforms. You are asked to search blind, message strangers,
              and hope the person you contact is affirming. The platforms that charge $30/month add insult to injury —
              you are paying for the process of being screened out.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-red-300 bg-red-50 pl-5 py-4 pr-4 rounded-r-xl">
                <h3 className="font-bold mb-2">Roomster ($30/month paywall)</h3>
                <p className="text-gray-700 text-sm">
                  You pay to unlock messaging. You discover whether the person is affirming after you&apos;ve paid.
                  The FTC settlement in 2023 documented fake listings — the profiles you paid to message may not be real.
                </p>
              </div>
              <div className="border-l-4 border-red-300 bg-red-50 pl-5 py-4 pr-4 rounded-r-xl">
                <h3 className="font-bold mb-2">Craigslist SF</h3>
                <p className="text-gray-700 text-sm">
                  Documented discrimination. No identity filters. No verification. Listings expose you to anyone
                  who responds, with no information about whether they are safe to engage with.
                </p>
              </div>
              <div className="border-l-4 border-orange-300 bg-orange-50 pl-5 py-4 pr-4 rounded-r-xl">
                <h3 className="font-bold mb-2">WhatsApp Groups</h3>
                <p className="text-gray-700 text-sm">
                  Public group with no privacy controls. No moderation. No verification.
                  Your identity, your search, your contact information — visible to everyone in the group.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Bay Area LGBTQ+ Neighborhoods ── */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Bay Area LGBTQ+ Neighborhoods</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {NEIGHBORHOODS.map((n, i) => (
                <div key={i} className="p-5 border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">{n.name}</h3>
                  <p className="text-gray-600 text-sm">{n.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mid CTA ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Get Early Access — Free →
            </a>
            <p className="text-sm text-gray-400 mt-3">Identity filters · Verified profiles · Free messaging</p>
          </div>
        </section>

        {/* ── What Identity Filters Actually Mean ── */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What Identity Filters Actually Mean</h2>
            <p className="text-gray-600 mb-6">
              Not a checkbox that broadcasts your identity to everyone. A controlled visibility setting.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <ul className="space-y-3">
                {[
                  "You show up in searches from people already looking for what you are",
                  "You control who sees your identity information — it is not a public declaration",
                  "You can filter your own search to show only LGBTQ+ affirming profiles",
                  "The filter works both ways: you find them, they find you, on your terms",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold mt-0.5">→</span>
                    <span className="text-purple-800">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Safety as Feature ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Safety Is a Feature, Not an Afterthought</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Verified profiles",
                  desc: "Real person, confirmed identity. You are not messaging an anonymous stranger or a bot that someone paid to generate.",
                },
                {
                  title: "No automatic location disclosure",
                  desc: "Your address and current neighborhood are never shared automatically. You control what location information is visible.",
                },
                {
                  title: "Report and block built in",
                  desc: "Immediate action on bad actors. No appeals process that takes three business days while you continue being harassed.",
                },
                {
                  title: "Free to use",
                  desc: "No billing cycle that pressures you into faster decisions. You can take the time to verify a match is actually safe before committing.",
                },
              ].map((item, i) => (
                <div key={i} className="p-5 border border-gray-200 rounded-xl">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                    <span className="text-purple-600 font-bold text-sm">✓</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
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

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Get early access — free. Be the first verified LGBTQ+ member listed in your neighborhood.
            </h2>
            <p className="text-purple-200 mb-8">
              The people who need the most protection should face the fewest financial barriers.
              No subscription. No paywall. No monthly fee that pressures faster decisions.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Join Free — Get Early Access →
            </a>
            <p className="text-purple-300 text-sm mt-3">Identity filters · Verified profiles · Free messaging always</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
