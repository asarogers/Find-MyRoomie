"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const TIMELINE = [
  { period: "March–April", status: "now", desc: "Students receive offers. Verified profiles get matched first. This is the window." },
  { period: "May–June", status: "closing", desc: "Groups solidify. Good units identified. Late movers are choosing from the remainder." },
  { period: "July", status: "late", desc: "Leases signed. Best units gone. University housing already full." },
  { period: "August", status: "too-late", desc: "You arrive. Premium for short-term sublet. Scramble with whoever is left." },
];

const UNIVERSITIES = [
  {
    name: "UC Berkeley",
    neighborhoods: "Southside, Northside, Downtown Berkeley, Elmwood, Rockridge",
    notes: "BART-accessible from multiple neighborhoods. Start date pressure is real — off-campus housing moves fast.",
  },
  {
    name: "Stanford / Palo Alto",
    neighborhoods: "Campus edge, Caltrain-accessible corridors, Menlo Park",
    notes: "Limited on-campus housing for graduate students. Palo Alto is expensive — verified roommates are essential for cost-sharing.",
  },
  {
    name: "UCSF",
    neighborhoods: "Mission Bay, Inner Sunset, Cole Valley, Noe Valley",
    notes: "Multiple campuses. Med and grad students often need verified profiles fast — program start dates don't flex.",
  },
  {
    name: "USF",
    neighborhoods: "Haight-Ashbury, Inner Richmond, Panhandle",
    notes: "Close to Golden Gate Park. Private university — limited housing support. Early verified matching is critical.",
  },
  {
    name: "San Jose State",
    neighborhoods: "Downtown SJ, Rose Garden, Willow Glen",
    notes: "Silicon Valley adjacent. Many international students from India and China. Lower cost than SF but still competitive.",
  },
];

const FAQS = [
  {
    q: "Do I need to pay anything?",
    a: "No. Messaging is free. Creating a verified profile is free. There is no subscription and no trial period that converts to a charge.",
  },
  {
    q: "I'm not in the US yet — can I still create a profile?",
    a: "Yes. The entire process works remotely. You can verify your identity, create your profile, and message potential roommates before you arrive.",
  },
  {
    q: "What if I don't find a match before I land?",
    a: "Your profile stays active. But students who start in March have consistently better options than students who start in July — because the people who found each other in March are signing leases before you arrive.",
  },
  {
    q: "Is this specific to the Bay Area?",
    a: "Yes. We are a Bay Area specialist. This is not a national platform that happens to include San Francisco. Every feature, every neighborhood guide, and every active user is Bay Area-focused.",
  },
];

export default function InternationalStudentsContent() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-red-700">Fall 2026 Cohorts Forming Now</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              International Students: Find a Verified Bay Area Roommate Before You Land — Free
            </h1>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6 text-left max-w-2xl mx-auto">
              <p className="text-amber-800 font-medium">
                Your future roommate is searching right now. Most who find each other in March–April are signing leases before you land. July arrivals are paying premium for short-term sublets with whoever is left.
              </p>
            </div>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Create Your Verified Profile Now — Free →
            </a>
            <p className="text-sm text-gray-400 mt-3">Works remotely · No credit card · No subscription</p>
          </div>
        </section>

        {/* ── Why This Is Harder Than It Should Be ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why This Is Harder Than It Should Be</h2>
            <p className="text-gray-600 mb-8">
              International students face a specific combination of problems that domestic students don&apos;t:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-red-300 bg-red-50 pl-5 py-4 pr-4 rounded-r-xl">
                <h3 className="font-bold mb-2">Can&apos;t visit before you commit</h3>
                <p className="text-gray-700 text-sm">
                  You are making a decision about a physical space you cannot walk through. Every platform that shows you
                  unverified listings is asking you to wire money to an address that may not be what it claims.
                </p>
              </div>
              <div className="border-l-4 border-red-300 bg-red-50 pl-5 py-4 pr-4 rounded-r-xl">
                <h3 className="font-bold mb-2">Craigslist deposit scams targeting international students</h3>
                <p className="text-gray-700 text-sm">
                  Wire transfer. Listing disappears. Ghost. This is not hypothetical — it is documented and recurring.
                  International students are specifically targeted because the combination of urgency, distance, and
                  unfamiliarity makes them higher-yield targets.
                </p>
              </div>
              <div className="border-l-4 border-orange-300 bg-orange-50 pl-5 py-4 pr-4 rounded-r-xl">
                <h3 className="font-bold mb-2">Roomster: $30/month — $90 before first semester</h3>
                <p className="text-gray-700 text-sm">
                  Three months of subscription before classes start. No guarantee of a match.
                  No refund when the profile you paid to message turns out to be a bot.
                </p>
              </div>
              <div className="border-l-4 border-orange-300 bg-orange-50 pl-5 py-4 pr-4 rounded-r-xl">
                <h3 className="font-bold mb-2">University housing fills in March/April</h3>
                <p className="text-gray-700 text-sm">
                  By the time you receive your acceptance, on-campus priority may already be gone.
                  Off-campus matching must begin immediately — not in June.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Window Is Closing — This Isn&apos;t Hype</h2>
            <p className="text-gray-600 mb-8">
              The Bay Area rental market operates on a timeline that does not accommodate late movers. This is the actual sequence:
            </p>
            <div className="space-y-4">
              {TIMELINE.map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-4 p-4 rounded-xl border ${
                    item.status === "now"
                      ? "bg-green-50 border-green-200"
                      : item.status === "closing"
                      ? "bg-amber-50 border-amber-200"
                      : item.status === "late"
                      ? "bg-orange-50 border-orange-200"
                      : "bg-red-50 border-red-200"
                  }`}
                >
                  <div className="min-w-[100px]">
                    <span
                      className={`font-bold text-sm ${
                        item.status === "now"
                          ? "text-green-700"
                          : item.status === "closing"
                          ? "text-amber-700"
                          : item.status === "late"
                          ? "text-orange-700"
                          : "text-red-700"
                      }`}
                    >
                      {item.period}
                    </span>
                    {item.status === "now" && (
                      <div className="text-xs text-green-600 font-medium mt-0.5">NOW</div>
                    )}
                  </div>
                  <p
                    className={`text-sm ${
                      item.status === "now"
                        ? "text-green-800"
                        : item.status === "closing"
                        ? "text-amber-800"
                        : item.status === "late"
                        ? "text-orange-800"
                        : "text-red-800"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What Verified Means Remote ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What Verified Means When You Can&apos;t Visit in Person</h2>
            <p className="text-gray-600 mb-8">
              Verification is not a feature for in-person renters. It is a requirement for remote ones.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "Photo ID verification", desc: "The person you are messaging is a real person with a confirmed identity. Not an AI-generated listing. Not a scam operator." },
                { label: "Video messaging", desc: "Replaces the in-person tour. See the space, meet the person, confirm the address exists — before you commit to anything." },
                { label: "No payment to message", desc: "You do not pay to find out if a verified listing is right for you. That discovery is free." },
                { label: "Bay Area neighborhood context", desc: "We tell you which BART line, what the commute looks like, and what move-in timelines are realistic for each neighborhood." },
              ].map((item, i) => (
                <div key={i} className="p-4 border border-gray-200 rounded-xl bg-white">
                  <div className="font-bold mb-1">{item.label}</div>
                  <div className="text-gray-500 text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Universities ── */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Bay Area Universities We Serve</h2>
            <div className="space-y-4">
              {UNIVERSITIES.map((u, i) => (
                <div key={i} className="p-5 border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-lg mb-1">{u.name}</h3>
                  <p className="text-purple-700 text-sm font-medium mb-2">{u.neighborhoods}</p>
                  <p className="text-gray-500 text-sm">{u.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mid CTA ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Your cohort is forming right now.</h2>
            <p className="text-gray-600 mb-6">
              The students who start their profile in March have first access to the verified listings that come online in April.
              Late movers choose from what remains.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Start Your Verified Profile — Free →
            </a>
            <p className="text-sm text-gray-400 mt-3">Works from anywhere · No credit card · No subscription</p>
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
              Get early access — free. Be the first verified international student listed in your city.
            </h2>
            <p className="text-purple-200 mb-3">
              No credit card. No subscription. No trial that converts to a charge.
            </p>
            <p className="text-purple-300 font-medium mb-8">
              Fall 2026 cohorts forming now. Window closes June.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Create Your Verified Profile Now →
            </a>
            <p className="text-purple-300 text-sm mt-3">Works from anywhere · Free messaging · Bay Area focused</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
