"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const RED_FLAGS = [
  {
    title: "They claim to be overseas",
    detail:
      "A landlord or prospective roommate who is 'out of the country' and cannot meet in person is one of the oldest rental scams in the book. They will ask you to wire a deposit to 'secure the room' while they arrange travel. The property does not exist or does not belong to them.",
  },
  {
    title: "They ask for a deposit before you meet",
    detail:
      "No legitimate landlord or roommate needs a deposit before you have toured the property in person and signed paperwork. Any request for Venmo, Zelle, CashApp, or wire transfer before a physical visit is a scam.",
  },
  {
    title: "They refuse to video call",
    detail:
      "A five-minute video call confirms the person is real and looks like their photos. Scammers use stolen photos and fabricated identities — they cannot video call as the person they are pretending to be. If someone repeatedly avoids or cancels video calls, treat that as disqualifying.",
  },
  {
    title: "The listing photos appear elsewhere online",
    detail:
      "Scammers routinely steal photos from Zillow, Redfin, Airbnb, and other rental sites. Paste any listing photo into Google Images or TinEye. If those photos appear on a different address or listing, the post is fraudulent.",
  },
  {
    title: "The price is significantly below market",
    detail:
      "A $800/month room in San Francisco or $700/month in Manhattan is bait. Scammers post below-market listings specifically because they attract desperate, fast-moving renters who skip due diligence. If it looks too good to be true, it is.",
  },
  {
    title: "Pressure to decide within 24 hours",
    detail:
      "Urgency is a manipulation tactic. 'I have three other people interested' or 'I need an answer by tonight' is designed to stop you from thinking carefully or doing research. Legitimate roommates and landlords will give you time to review.",
  },
  {
    title: "Vague or evasive answers about employment or income",
    detail:
      "If a prospective roommate cannot give a clear answer about where they work or how they pay rent, that is a red flag for financial reliability. A potential roommate who cannot pay their share will create immediate legal and financial problems for you.",
  },
];

const HOW_TO_STEPS = [
  {
    step: 1,
    title: "Choose a verified platform",
    detail:
      "Use a roommate platform that requires government ID verification before users can contact each other. FindMyRoomy verifies ID before anyone can message. Craigslist and Facebook Marketplace have zero identity verification — anyone can post anything.",
  },
  {
    step: 2,
    title: "Complete your own profile fully",
    detail:
      "A complete profile with a real photo, verified ID, and honest information about your lifestyle signals good faith and filters out low-effort or fraudulent inquiries. You attract what you project.",
  },
  {
    step: 3,
    title: "Vet profiles before messaging",
    detail:
      "Before reaching out: reverse image search their profile photo (Google Images, TinEye). Google their full name. Look for a LinkedIn profile or other professional presence. Real people have a verifiable online footprint. Verify any rental property address on the county assessor's website.",
  },
  {
    step: 4,
    title: "Video call before meeting in person",
    detail:
      "A real person will agree to a short video call. This confirms they look like their photos and are who they claim to be. Anyone who refuses, cancels repeatedly, or insists on audio-only should be immediately disqualified.",
  },
  {
    step: 5,
    title: "Meet in a public place first",
    detail:
      "Your first in-person meeting should be at a coffee shop, park, or other public location — not the rental unit and not their home. This is standard practice and any reasonable person will understand.",
  },
  {
    step: 6,
    title: "Visit the property together before any money changes hands",
    detail:
      "Tour the actual rental unit in person before any deposit, application fee, or payment of any kind. If you cannot physically enter the property before paying, do not pay. This rule alone prevents the vast majority of rental scams.",
  },
  {
    step: 7,
    title: "Sign a roommate agreement",
    detail:
      "Before moving in, sign a written roommate agreement covering rent split, utilities, guests policy, quiet hours, cleaning responsibilities, and the process for one roommate leaving. This is not paranoia — it protects both parties and prevents the majority of roommate disputes.",
  },
];

const QUESTIONS_TO_ASK = [
  {
    question: "What are your typical hours home on weekdays?",
    why: "Conflicting schedules — one person home all day while another works nights — can create noise and space conflicts that feel minor until you live with them daily.",
  },
  {
    question: "What is your sleep schedule?",
    why: "A 10 PM bedtime and a midnight-to-2-AM social life are incompatible in a shared apartment. Surface this early.",
  },
  {
    question: "How often do you have guests, and how long do they typically stay?",
    why: "A partner who stays five nights a week is effectively an unpaid third roommate. Define the guest policy in writing before signing anything.",
  },
  {
    question: "How would you describe your cleanliness standard?",
    why: "\"Clean\" means something different to everyone. Ask them to describe their standard concretely: dishes in the sink, bathroom schedule, vacuuming frequency. Then decide if it matches yours.",
  },
  {
    question: "How do you think cleaning responsibilities should be divided?",
    why: "This surfaces both their expectations and their communication style. Someone who says 'I don't really think about it' is telling you something important.",
  },
  {
    question: "Do you have any pets, or are you planning to get one?",
    why: "Undisclosed pets and surprise pet acquisitions are among the most common sources of roommate conflict. Cover this explicitly.",
  },
  {
    question: "Do you have any allergies I should know about?",
    why: "Relevant if you cook strong-smelling food, have a pet, or use certain cleaning products. Worth clearing up before move-in.",
  },
  {
    question: "Have you had roommate conflicts before, and what happened?",
    why: "How someone answers this question tells you a great deal. A thoughtful honest answer — including what they would do differently — signals self-awareness. Blame with no reflection is a warning sign.",
  },
];

const FAQS = [
  {
    q: "How do I know if a roommate listing is a scam?",
    a: "Common scam signals: landlord or roommate claims to be overseas, asks for a deposit before meeting in person, won't do a video call, listing photos are stolen from other sites (reverse image search them), price is significantly below market. Rule: never send money before you have visited the property in person.",
  },
  {
    q: "What should I check before meeting a potential roommate?",
    a: "Reverse image search their profile photo. Google their name. Ask for their LinkedIn or workplace. Verify any rental property on the county assessor's website. Real people have a verifiable online footprint.",
  },
  {
    q: "What are the biggest red flags when finding a roommate?",
    a: "Pressure to decide within 24 hours. Reluctance to video call or meet in a public place. Asking for Venmo/Zelle deposit before you've signed anything. Vague answers about income or employment. Listing photos that match other rentals online.",
  },
  {
    q: "What should I ask a potential roommate before moving in?",
    a: "Work schedule and typical hours home. Sleep schedule and noise tolerance. Guests — how often, how long. Cleanliness standard and how cleaning gets divided. Pets or allergies. Whether they've had roommate conflicts before and what happened.",
  },
  {
    q: "Is it safe to find roommates online?",
    a: "Yes, if you use a platform with identity verification. FindMyRoomy verifies government ID before anyone can contact other users. Craigslist and Facebook have no verification — anyone can post. Platforms like Roomster were fined by the FTC for fake reviews and fake profiles.",
  },
];

export default function RoommateSafetyContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Roommate Safety Guide 2026: How to Find a Roommate Without Getting Scammed
            </h1>
            <p className="text-sm text-gray-400 mb-6">
              Updated March 2026 &middot; 5 min read &middot; FindMyRoomy Research Team
            </p>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl">
              Rental scams have increased every year since 2020. This guide covers the exact warning signs,
              the right questions to ask, and how to verify a stranger's identity before handing over a deposit
              or moving into a shared home.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
              <strong>Key rule:</strong> Never send money — deposit, first month, application fee — before you have
              physically visited the property and signed paperwork. This single rule prevents the majority of
              roommate and rental scams.
            </div>
          </div>
        </section>

        {/* ── Section 1: Scam Warning Signs ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">The 7 Roommate Scam Warning Signs</h2>
            <p className="text-gray-600 mb-8">
              These are the patterns that appear in the overwhelming majority of roommate and rental scams.
              Knowing them in advance is the fastest protection you have.
            </p>
            <div className="space-y-6">
              {RED_FLAGS.map((flag, i) => (
                <div key={i} className="border border-gray-200 rounded-xl bg-white overflow-hidden">
                  <div className="flex items-start gap-4 p-5">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-700 font-bold text-sm flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{flag.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{flag.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 2: How to Vet a Stranger ── */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">How to Vet a Stranger Before Moving In</h2>
            <p className="text-gray-600 mb-10">
              Follow these seven steps in order. Each step adds a layer of verification that filters out
              scammers, unreliable people, and serious incompatibilities before they become your problem.
            </p>
            <ol className="space-y-8">
              {HOW_TO_STEPS.map((s) => (
                <li key={s.step} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-extrabold text-lg flex items-center justify-center">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Section 3: What to Ask ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">What to Ask Before Signing Anything</h2>
            <p className="text-gray-600 mb-10">
              Most roommate disasters are not scams — they are compatibility mismatches that were never
              surfaced because nobody asked the right questions. Here are eight questions to ask every
              potential roommate, with the reason each one matters.
            </p>
            <div className="space-y-5">
              {QUESTIONS_TO_ASK.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl bg-white p-5">
                  <h3 className="font-semibold text-base mb-2">{item.question}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    <span className="font-semibold text-gray-700">Why it matters: </span>
                    {item.why}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 4: How Verification Platforms Change the Equation ── */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How Verification Platforms Change the Equation</h2>
            <p className="text-gray-600 mb-5 leading-relaxed">
              The platform you use to search for a roommate is itself a safety variable. On Craigslist and
              Facebook Marketplace, anyone can post — no identity check, no account verification, no history.
              This is why the FBI reports that real estate fraud (including fake rental listings) costs
              Americans hundreds of millions of dollars annually.
            </p>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Roomster, one of the largest roommate platforms by listing count, was{" "}
              <strong>fined by the FTC in 2023</strong> for using fake reviews and fake profiles to inflate
              the appearance of its user base. Their 1.3/5 Trustpilot rating and thousands of complaints
              about bots and billing fraud reflect what unverified platforms look like in practice.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              FindMyRoomy requires government ID verification before any user can contact another user.
              This means every person who messages you has passed an identity check — their face, name,
              and government ID have been confirmed. It does not make every person a good roommate match,
              but it eliminates the anonymous scammer and the fake profile entirely.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Platform</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Identity Verification</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Trust Issues</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["FindMyRoomy", "Government ID required to message", "None known"],
                    ["Craigslist", "None", "No account required to post"],
                    ["Facebook Marketplace", "None", "Anyone with a Facebook account can post"],
                    ["Roomster", "Minimal (no ID)", "FTC-fined for fake profiles (2023)"],
                    ["Roomi", "GlobalID (claimed)", "Scam listings reported despite verification"],
                  ].map(([platform, verification, trust], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-semibold">{platform}</td>
                      <td className="p-3 border border-gray-200">{verification}</td>
                      <td className="p-3 border border-gray-200 text-gray-600">{trust}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mt-5">
              See our full comparison of{" "}
              <Link href="/roommate-apps/" className="text-purple-700 hover:underline font-medium">
                roommate apps ranked by safety and price
              </Link>
              {" "}or read the{" "}
              <Link href="/roomster-alternative/" className="text-purple-700 hover:underline font-medium">
                Roomster alternative guide
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ── Section 5: FAQ ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">FAQ</h2>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl bg-white overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-base pr-4">{faq.q}</span>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-500 text-lg font-bold flex items-center justify-center leading-none">
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Internal links ── */}
        <section className="py-12 px-4 bg-gray-50 border-t border-gray-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold mb-4">More roommate guides</h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/roommate-apps/"
                className="text-purple-700 border border-purple-200 px-4 py-2 rounded-lg text-sm hover:bg-purple-50 transition-colors"
              >
                Best roommate apps 2026 →
              </Link>
              <Link
                href="/roomster-alternative/"
                className="text-gray-700 border border-gray-200 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors"
              >
                Roomster alternative
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find verified roommates on FindMyRoomy — free</h2>
            <p className="text-purple-200 mb-8">
              Every user on FindMyRoomy has passed a government ID check before they can contact you.
              No anonymous posts. No fake profiles. No subscription required.
            </p>
            <Link
              href="/downloadApp"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find verified roommates free →
            </Link>
            <p className="text-sm text-purple-300 mt-3">No credit card · No subscription · Identity verified</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
