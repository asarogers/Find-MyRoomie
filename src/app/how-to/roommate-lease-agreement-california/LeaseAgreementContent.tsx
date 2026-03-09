"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const REQUIRED_TERMS = [
  { term: "Names of all roommates", why: "Establishes who is party to the agreement. Include full legal names as they appear on IDs." },
  { term: "Property address", why: "Specifies which premises the agreement covers." },
  { term: "Move-in date", why: "Establishes the start date of the shared tenancy." },
  { term: "Monthly rent — total and each person's share", why: "The most important term. Be specific: not 'we split equally' but '$4,200 total, $2,100 each, paid by the 1st.'" },
  { term: "How rent is paid", why: "Who pays the landlord (one check or two), when, and what happens if one person is late." },
];

const RECOMMENDED_TERMS = [
  { term: "Utilities split", detail: "List each utility by name (electricity, gas, water, internet). Specify who pays and who reimburses. Monthly reimbursement is cleaner than yearly reconciliation." },
  { term: "Guest policy", detail: "How many consecutive nights can a guest stay? What triggers 'effectively moved in'? This is the most common roommate dispute trigger — address it explicitly." },
  { term: "Quiet hours", detail: "Specific times work better than 'reasonable.' For example: 'No amplified music above 60 decibels between 10pm and 7am' rather than 'be reasonable about noise.'" },
  { term: "Shared space cleaning", detail: "Who cleans kitchen, bathroom, living room and how often. Weekly rotation works better than 'as needed' — vagueness creates disputes." },
  { term: "Notice period for move-out", detail: "California law is silent on roommate-to-roommate notice. 30 days is standard. 60 is better for expensive markets where finding a replacement takes time." },
  { term: "What happens if one person can't pay", detail: "This is the uncomfortable one most people skip. Who covers in the short term? What's the timeline for finding a replacement? How is reimbursement handled?" },
  { term: "Dispute resolution process", detail: "Agree on a process before a dispute. Example: 'We will discuss any conflict directly within 48 hours of it arising. If unresolved, we will use a neutral third party (friend, mediator) before involving legal action.'" },
];

const COMMON_MISTAKES = [
  { mistake: "Verbal-only agreement", fix: "Verbal agreements are nearly impossible to enforce. Email confirmation of key terms is the minimum viable documentation." },
  { mistake: "Thinking the roommate agreement overrides the main lease", fix: "It doesn't. Every tenant on the primary lease is jointly and severally liable to the landlord. Your roommate agreement is only between the two of you." },
  { mistake: "Not documenting move-in condition", fix: "Walk the space together on move-in day and photograph everything. This protects both parties from false damage claims at move-out." },
  { mistake: "Vague split language ('we'll figure it out')", fix: "Specify exact amounts and dates. 'Split equally' requires math every month. '$2,100 each by the 1st' doesn't." },
  { mistake: "Not including a notice period", fix: "Without an agreed notice period, your roommate can technically leave immediately with no recourse. 30 days minimum protects you both." },
];

export default function LeaseAgreementContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-400 mb-3">California · Updated March 2026</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              California Roommate Lease Agreement — What You Must Have
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              A roommate agreement in California doesn't need a lawyer, notarization, or special forms.
              It needs to cover the right terms in writing. This is the complete checklist — what's
              legally required, what's strongly recommended, and what to avoid.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
              <strong>Key California rule:</strong> A roommate agreement is a contract between roommates —
              it does not affect your obligations to your landlord. All tenants on the primary lease
              remain jointly liable to the landlord regardless of the roommate agreement.
            </div>
          </div>
        </section>

        {/* ── Required terms ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Required Terms (The Non-Negotiables)</h2>
            <p className="text-gray-600 mb-6">
              A California roommate agreement is enforceable as a contract with these minimum elements:
            </p>
            <div className="space-y-3">
              {REQUIRED_TERMS.map((item, i) => (
                <div key={i} className="flex gap-4 p-4 border border-green-200 bg-green-50 rounded-xl">
                  <span className="flex-shrink-0 w-7 h-7 bg-green-600 text-white rounded-full text-xs font-bold flex items-center justify-center">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-green-800 mb-1">{item.term}</p>
                    <p className="text-gray-600 text-sm">{item.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Recommended terms ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Strongly Recommended Terms</h2>
            <p className="text-gray-600 mb-6">
              These aren't legally required, but they prevent the disputes that end roommate situations.
              In the Bay Area, where a bad roommate situation costs $2,000+/month to exit, these are worth 20 minutes to discuss and document.
            </p>
            <div className="space-y-4">
              {RECOMMENDED_TERMS.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4 bg-white">
                  <p className="font-semibold mb-2">{item.term}</p>
                  <p className="text-gray-600 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Common mistakes ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">5 Roommate Agreement Mistakes That Cause Problems</h2>
            <div className="space-y-4">
              {COMMON_MISTAKES.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4 bg-white">
                  <p className="text-red-600 font-semibold text-sm mb-1">✗ {item.mistake}</p>
                  <p className="text-green-700 text-sm">✓ Fix: {item.fix}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-12 px-4 bg-white border-t border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Is a roommate agreement legally binding in California?",
                  a: "A written roommate agreement is legally enforceable as a contract in California, even if it's informal. It doesn't need to be notarized. The key requirements: both parties must agree, it must be in writing, and it must cover the key terms (rent split, utilities, notice period).",
                },
                {
                  q: "Can a roommate agreement override the main lease in California?",
                  a: "No. A roommate agreement governs the relationship between roommates — it cannot override the terms of the primary lease with the landlord. All tenants on the primary lease remain jointly and severally liable to the landlord regardless of what the roommate agreement says.",
                },
                {
                  q: "What should a California roommate agreement include?",
                  a: "Required at minimum: names of all parties, address, move-in date, rent amount and how it's split, utilities split, notice period for move-out. Strongly recommended: guest policy, quiet hours, shared space cleaning responsibilities, process for resolving disputes, what happens if one person can't pay.",
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
              <Link href="/how-to/roommate-red-flags/" className="text-purple-700 border border-purple-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-purple-50 transition-colors">23 roommate red flags →</Link>
              <Link href="/how-to/find-roommate-30-days/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Find a roommate in 30 days</Link>
              <Link href="/free-roommate-app-no-subscription/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Free roommate app</Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find the Roommate First. Then Draft the Agreement.</h2>
            <p className="text-purple-200 mb-8">
              Find MyRoomie connects you with verified Bay Area roommates — free, no subscription, no paywall.
              Once you've found your match, you'll have someone worth drafting an agreement with.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Verified Bay Area Roommates Free →
            </a>
            <p className="text-sm text-purple-300 mt-3">No credit card · No subscription · Verified profiles</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
