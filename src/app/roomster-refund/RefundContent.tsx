"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const REVIEWS = [
  { quote: "Signed up for a one-week trial, kept getting charged on my debit card, deleted my profile, and still got charged until I canceled my debit card entirely.", source: "Trustpilot, 2025" },
  { quote: "They offered a 1-year subscription for $49.99 but charged $49.99 per week — that's over $1,100 in charges.", source: "Trustpilot, 2025" },
  { quote: "Joined for 7 day trial and was charged $29 without being aware. Customer service is a joke.", source: "Trustpilot, February 2026" },
  { quote: "Even after canceling my subscription, Roomster claimed I did not cancel and continued to charge my account.", source: "Trustpilot, 2026" },
];

export default function RefundContent() {
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
              Roomster Charged Me — How to Get Your Money Back
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Roomster's billing practices generated a $1.6 million FTC settlement in 2023. If you were charged
              without warning, after canceling, or more than you agreed to — here's exactly what to do.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-800">
              <strong>Quick answer:</strong> Roomster itself rarely issues refunds. Your fastest path is a credit card
              chargeback — not contacting Roomster support.
            </div>
          </div>
        </section>

        {/* ── What happened to others ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">You're Not Alone — Actual Roomster Billing Complaints</h2>
            <div className="space-y-4 mb-8">
              {REVIEWS.map((r, i) => (
                <blockquote key={i} className="border-l-4 border-red-300 bg-red-50 pl-4 py-3 pr-4 rounded-r-lg">
                  <p className="text-gray-700 italic text-sm">"{r.quote}"</p>
                  <cite className="text-xs text-gray-400 mt-2 block not-italic">— {r.source}</cite>
                </blockquote>
              ))}
            </div>
            <p className="text-gray-600 text-sm">
              In 2023, the New York AG and FTC secured a $1.6 million settlement from Roomster for deceptive practices.
              The billing complaints you see on Trustpilot are a continuation of the same pattern.
            </p>
          </div>
        </section>

        {/* ── How to get a refund ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">How to Get Your Money Back — In Order of Effectiveness</h2>

            <div className="space-y-6">
              {[
                {
                  rank: "Best",
                  color: "green",
                  title: "Credit card chargeback",
                  timeframe: "2–4 weeks for credit",
                  steps: [
                    "Call the number on the back of your credit card (or open the app)",
                    "Say: \"I need to dispute a charge from Roomster as unauthorized\"",
                    "Provide the charge date and amount",
                    "Mention: Roomster has a 2023 FTC settlement for deceptive billing practices",
                    "Upload your cancellation screenshot and any email evidence if asked",
                  ],
                  note: "Most credit card issuers have a 60–120 day window from the charge date. Act fast.",
                },
                {
                  rank: "Backup",
                  color: "blue",
                  title: "Apple / Google Play refund request",
                  timeframe: "3–7 business days",
                  steps: [
                    "If you subscribed through the App Store: reportaproblem.apple.com → find the Roomster charge → Request a refund",
                    "If you subscribed through Google Play: play.google.com/store/account/subscriptions → Roomster → Report a problem",
                    "Select reason: \"I was charged the wrong amount\" or \"I didn't authorize this purchase\"",
                  ],
                  note: "Apple and Google have independent refund policies that don't depend on Roomster's cooperation.",
                },
                {
                  rank: "Slow",
                  color: "amber",
                  title: "Contact Roomster directly",
                  timeframe: "Days to weeks — if they respond at all",
                  steps: [
                    "Email: help@roomster.com",
                    "Phone: (646) 862-2841",
                    "State: the specific charge date, amount, and that you had already cancelled",
                    "Attach: screenshots of your cancellation confirmation",
                  ],
                  note: "Users report long delays and form-letter denials. Do this in parallel with the chargeback — not instead of it.",
                },
                {
                  rank: "For the record",
                  color: "purple",
                  title: "File an FTC complaint",
                  timeframe: "Doesn't get your money back directly",
                  steps: [
                    "Go to reportfraud.ftc.gov",
                    "Select: \"Online Shopping or Negative Option Subscriptions\"",
                    "Describe exactly what happened — amounts, dates, Roomster's response",
                  ],
                  note: "The FTC already settled with Roomster once. Your complaint contributes to the record for future enforcement.",
                },
              ].map((method, i) => (
                <div key={i} className={`border border-gray-200 rounded-xl overflow-hidden`}>
                  <div className={`px-6 py-4 flex items-center justify-between border-b border-gray-200 ${
                    method.color === 'green' ? 'bg-green-50' :
                    method.color === 'blue' ? 'bg-blue-50' :
                    method.color === 'amber' ? 'bg-amber-50' : 'bg-purple-50'
                  }`}>
                    <h3 className="font-bold text-lg">{method.title}</h3>
                    <div className="text-right">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                        method.color === 'green' ? 'bg-green-200 text-green-800' :
                        method.color === 'blue' ? 'bg-blue-200 text-blue-800' :
                        method.color === 'amber' ? 'bg-amber-200 text-amber-800' : 'bg-purple-200 text-purple-800'
                      }`}>{method.rank}</span>
                      <p className="text-xs text-gray-500 mt-1">{method.timeframe}</p>
                    </div>
                  </div>
                  <div className="px-6 py-5">
                    <ol className="space-y-2 mb-4">
                      {method.steps.map((step, j) => (
                        <li key={j} className="flex gap-2 text-gray-700 text-sm">
                          <span className="flex-shrink-0 text-gray-400">{j + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                    <p className="text-xs text-gray-500 italic">{method.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── The free alternative ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">After Roomster: A Free Alternative That Doesn't Charge You</h2>
            <p className="text-gray-600 mb-6">
              Find MyRoomie has no subscription, no credit card requirement, and no auto-renewal.
              You can message any verified Bay Area roommate listing for free — permanently.
              There is nothing to cancel.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                ["Subscription required?", "None"],
                ["Credit card required?", "No"],
                ["Auto-renewing trial?", "No"],
                ["Messaging fee?", "$0"],
                ["Refund risk?", "Zero — nothing charged"],
                ["FTC settlement?", "None"],
              ].map(([label, val], i) => (
                <div key={i} className={`rounded-lg p-3 border ${
                  val === "None" || val === "No" || val === "$0" || val === "Zero — nothing charged"
                    ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="font-bold text-sm text-green-700">{val}</div>
                  <div className="text-gray-500 text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
              >
                Find Roommates Free — No Billing Surprises →
              </a>
              <p className="text-sm text-gray-400 mt-3">Bay Area focused · Verified listings · Free messaging forever</p>
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
                  q: "Will Roomster give me a refund?",
                  a: "Roomster's policy allows refunds only when \"no services were rendered\" — which means if you've browsed listings, sent any messages, or posted a profile, they consider you ineligible. In practice, most users report being denied. A credit card chargeback is more effective.",
                },
                {
                  q: "How do I dispute a Roomster charge?",
                  a: "Call the number on the back of your credit card and file a dispute as an unauthorized charge or billing error. Reference the 2023 FTC settlement ($1.6M) as context for a pattern of deceptive billing. Apple and Google Play also have independent refund processes if you subscribed through their stores.",
                },
                {
                  q: "What was the Roomster FTC settlement for?",
                  a: "In August 2023, the NY AG and FTC secured $1.6 million from Roomster for allegedly defrauding renters through fake listings and deceptive practices. Roomster CEO and CTO were found to have purchased over 20,000 fake reviews. The settlement required them to stop deceptive practices, but billing complaints have continued.",
                },
                {
                  q: "Can I report Roomster to the FTC?",
                  a: "Yes — file a complaint at reportfraud.ftc.gov under 'Online Shopping or Negative Option Subscriptions.' This contributes to ongoing enforcement records.",
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
              <Link href="/roomster-cancel-subscription/" className="text-purple-700 border border-purple-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-purple-50 transition-colors">How to cancel Roomster →</Link>
              <Link href="/roomster-alternative/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Best Roomster alternatives</Link>
              <Link href="/roommate-apps/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">All roommate apps ranked</Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Never Pay for a Roommate App Again</h2>
            <p className="text-purple-200 mb-8">
              Find MyRoomie is the opposite of Roomster. Completely free. No subscription. No charge to dispute.
              Verified Bay Area roommates — ready to connect with you right now.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Get Free Beta Access — No Card, No Subscription →
            </a>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
