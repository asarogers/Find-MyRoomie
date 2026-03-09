"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

export default function CancelContent() {
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
              How to Cancel Your Roomster Subscription (and Get a Free Alternative)
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Roomster makes cancellation intentionally confusing — especially if you signed up through the App Store.
              This is the complete step-by-step guide, plus what to do if they charged you anyway.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
              <strong>Important:</strong> If you signed up via the App Store or Google Play, you CANNOT cancel through Roomster's website.
              You must cancel through Apple or Google directly — Roomster's own help center confirms this.
            </div>
          </div>
        </section>

        {/* ── Step-by-step cancel ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Step-by-Step: Cancel Roomster</h2>

            <div className="space-y-6">
              {/* Web */}
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h3 className="text-xl font-bold">Option A: Cancel via Roomster Website</h3>
                  <p className="text-sm text-gray-500 mt-1">Only works if you subscribed directly on roomster.com</p>
                </div>
                <div className="px-6 py-5">
                  <ol className="space-y-3">
                    {[
                      "Log in to roomster.com",
                      "Click your profile photo → Account",
                      "Click Settings",
                      "Click Subscription",
                      "Click \"Cancel my Subscription\"",
                      "Screenshot the confirmation page — Roomster has been known to deny cancellations they already confirmed",
                    ].map((step, i) => (
                      <li key={i} className="flex gap-3 text-gray-700">
                        <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-700 rounded-full text-sm font-bold flex items-center justify-center">{i + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* iOS */}
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h3 className="text-xl font-bold">Option B: Cancel via iPhone / Apple (iOS)</h3>
                  <p className="text-sm text-gray-500 mt-1">Required if you subscribed through the App Store</p>
                </div>
                <div className="px-6 py-5">
                  <ol className="space-y-3">
                    {[
                      "Open Settings on your iPhone",
                      "Tap your Apple ID (your name at the top)",
                      "Tap Subscriptions",
                      "Find Roomster in the list",
                      "Tap Cancel Subscription",
                    ].map((step, i) => (
                      <li key={i} className="flex gap-3 text-gray-700">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-sm font-bold flex items-center justify-center">{i + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Android */}
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h3 className="text-xl font-bold">Option C: Cancel via Android / Google Play</h3>
                  <p className="text-sm text-gray-500 mt-1">Required if you subscribed through Google Play</p>
                </div>
                <div className="px-6 py-5">
                  <ol className="space-y-3">
                    {[
                      "Open the Google Play Store app",
                      "Tap your profile icon → Payments & subscriptions",
                      "Tap Subscriptions",
                      "Find Roomster, tap it",
                      "Tap Cancel subscription",
                    ].map((step, i) => (
                      <li key={i} className="flex gap-3 text-gray-700">
                        <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-700 rounded-full text-sm font-bold flex items-center justify-center">{i + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── What Roomster won't tell you ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What Roomster Won't Tell You About Cancellation</h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "The 7-day trial auto-charges $29/month",
                  desc: "If you sign up for the \"7-day trial\" and don't cancel before it ends, you're automatically billed $29/month. Roomster considers this disclosed in their Terms of Use. Users call it a trap.",
                },
                {
                  title: "Cancellation doesn't always stop charges",
                  desc: "Multiple Trustpilot reviewers (2025–2026) report being charged even after canceling. Take a screenshot of your cancellation confirmation and check your next billing cycle.",
                },
                {
                  title: "No refunds if you've used any feature",
                  desc: "Per Roomster's terms: refunds are only available if \"no Services\" were rendered — which includes posting a profile, browsing messages, or using their ID check system. In practice, almost no one qualifies.",
                },
                {
                  title: "Customer support may not respond",
                  desc: "help@roomster.com and their listed phone number (646) 862-2841 are documented to have long response delays. Your most reliable option if overcharged: dispute through your credit card issuer.",
                },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-amber-400 bg-amber-50 pl-4 py-3 pr-4 rounded-r-lg">
                  <p className="font-semibold text-gray-800 mb-1">{item.title}</p>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="font-semibold text-red-800 mb-2">FTC settlement context</p>
              <p className="text-sm text-red-700">
                In 2023, the NY Attorney General and FTC settled a case against Roomster for $1.6 million.
                The settlement covered deceptive listing practices and fake reviews. The billing complaints you're
                reading about are separate from that settlement — and have continued since.
              </p>
            </div>
          </div>
        </section>

        {/* ── Still got charged? ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Still Got Charged After Canceling?</h2>
            <p className="text-gray-600 mb-6">
              If Roomster charged you after you cancelled (or without your explicit consent), you have options:
            </p>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  action: "Document everything",
                  detail: "Screenshot your cancellation confirmation, billing statements, and any email correspondence with Roomster.",
                },
                {
                  step: "2",
                  action: "Contact your bank or credit card issuer",
                  detail: "File a chargeback for \"unauthorized charges\" or \"service not received.\" Most card issuers have a 60-120 day window. The FTC settlement provides useful context that this is a pattern of behavior.",
                },
                {
                  step: "3",
                  action: "Report to the FTC",
                  detail: "File a complaint at reportfraud.ftc.gov. The FTC has already taken action against Roomster once — additional complaints feed future enforcement.",
                },
                {
                  step: "4",
                  action: "Leave a Trustpilot review",
                  detail: "Detailed, factual reviews help other renters avoid the same trap. Roomster has a 1.3/5 on Trustpilot — your experience matters.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 border border-gray-200 rounded-xl bg-white">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full text-sm font-bold flex items-center justify-center">{item.step}</span>
                  <div>
                    <p className="font-semibold mb-1">{item.action}</p>
                    <p className="text-gray-600 text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── The free alternative ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Once You're Out: A Free Alternative That Doesn't Pull This
            </h2>
            <p className="text-gray-600 mb-6">
              Find MyRoomie is a Bay Area-focused roommate platform where messaging is free — permanently.
              No trial. No credit card. No auto-renewal trap. No $29/month charge waiting for you to forget to cancel.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                ["Message anyone", "Free — always"],
                ["Post a listing", "Free"],
                ["Credit card required?", "No"],
                ["Auto-renewal risk", "None — no subscription exists"],
                ["Trial that converts to paid?", "No"],
                ["Cancel subscription", "Nothing to cancel"],
              ].map(([label, val], i) => (
                <div key={i} className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="text-green-700 font-bold text-sm">{val}</div>
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
                Find Roommates Free — No Roomster Games →
              </a>
              <p className="text-sm text-gray-400 mt-3">Bay Area · Verified profiles · Free forever</p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How do I cancel Roomster on iPhone?",
                  a: "Go to iPhone Settings → your Apple ID → Subscriptions → Roomster → Cancel Subscription. This is the only way to cancel if you originally subscribed through the App Store.",
                },
                {
                  q: "Does canceling Roomster give me a refund?",
                  a: "Rarely. Roomster's refund policy states no refunds are available if any services were rendered — including posting a profile, browsing listings, or sending messages. To dispute an unauthorized charge, contact your credit card issuer directly.",
                },
                {
                  q: "Why did Roomster charge me without warning?",
                  a: "The 7-day trial automatically converts to a $29/month subscription unless you cancel before the trial ends. This is disclosed in their Terms of Use but presented in a way many users find deceptive. The FTC settled with Roomster in 2023 for $1.6 million over similar deceptive practices.",
                },
                {
                  q: "What if Roomster keeps charging me after I cancel?",
                  a: "Document your cancellation confirmation (screenshot), then file a chargeback with your credit card issuer as an unauthorized charge. You can also file a complaint at reportfraud.ftc.gov.",
                },
                {
                  q: "What's the best free roommate finder after Roomster?",
                  a: "Find MyRoomie (findmyroomy.com) has completely free messaging — no trial, no subscription, no credit card required. Bay Area-focused with verified profiles.",
                },
              ].map((faq, i) => (
                <div key={i}>
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related links ── */}
        <section className="py-8 px-4 bg-gray-50 border-t border-gray-200">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-gray-500 mb-3">Related guides</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/roomster-alternative/" className="text-purple-700 border border-purple-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-purple-50 transition-colors">Best Roomster alternatives →</Link>
              <Link href="/roommate-apps/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">All roommate apps ranked</Link>
              <Link href="/roomi-alternative/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Roomi alternative</Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Done With Roomster Forever?</h2>
            <p className="text-purple-200 mb-8">
              Find MyRoomie is the opposite of Roomster. Free messaging. No subscription to cancel.
              No credit card to worry about. Verified Bay Area roommates, waiting for you right now.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Get Free Beta Access — No Card Required →
            </a>
            <p className="text-sm text-purple-300 mt-3">No subscription · No auto-renewal · No Roomster games</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
