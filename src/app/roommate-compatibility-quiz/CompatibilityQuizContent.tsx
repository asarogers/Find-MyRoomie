"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

type Answer = string | null;

interface Question {
  id: number;
  text: string;
  options: { label: string; tag: string }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "When do you typically go to sleep?",
    options: [
      { label: "Before 10pm", tag: "Early Bird" },
      { label: "10pm–midnight", tag: "Standard" },
      { label: "Midnight–2am", tag: "Night Owl" },
      { label: "After 2am", tag: "Extreme Night Owl" },
    ],
  },
  {
    id: 2,
    text: "How would you describe your cleanliness standards?",
    options: [
      { label: "Spotless — I clean up immediately and expect the same", tag: "High" },
      { label: "Tidy — I clean regularly but I'm not rigid about it", tag: "Medium-High" },
      { label: "Casual — I clean when it starts to bother me", tag: "Medium" },
      { label: "Relaxed — I'm comfortable with more lived-in spaces", tag: "Low" },
    ],
  },
  {
    id: 3,
    text: "How often do you have guests over?",
    options: [
      { label: "Rarely (a few times a year)", tag: "Rare" },
      { label: "Occasionally (once or twice a month)", tag: "Occasional" },
      { label: "Regularly (weekly)", tag: "Regular" },
      { label: "Frequently (multiple times a week)", tag: "Frequent" },
    ],
  },
  {
    id: 4,
    text: "How often do you cook at home?",
    options: [
      { label: "Daily — I cook most meals", tag: "Daily Cook" },
      { label: "A few times a week", tag: "Occasional Cook" },
      { label: "Rarely — mostly delivery or eating out", tag: "Rare Cook" },
      { label: "Almost never", tag: "Non-Cook" },
    ],
  },
  {
    id: 5,
    text: "Do you work from home?",
    options: [
      { label: "Yes, full-time remote", tag: "Full Remote" },
      { label: "Yes, hybrid (some days home, some in office)", tag: "Hybrid" },
      { label: "No, I'm in the office/campus daily", tag: "In-Office" },
      { label: "Variable / freelance", tag: "Variable" },
    ],
  },
  {
    id: 6,
    text: "How important is financial reliability to you in a roommate?",
    options: [
      { label: "Critical — I need a background check and employment verification", tag: "Critical" },
      { label: "Very important — I want references and proof of income", tag: "High" },
      { label: "Important — I'd like to have a conversation about it", tag: "Medium" },
      { label: "It matters but I'm flexible", tag: "Flexible" },
    ],
  },
];

interface ProfileResult {
  type: string;
  priorities: string[];
  description: string;
  insight: string;
}

function getProfile(answers: Answer[]): ProfileResult {
  const sleep = answers[0];
  const clean = answers[1];
  const guests = answers[2];
  const cook = answers[3];
  const wfh = answers[4];
  const finance = answers[5];

  // Determine profile type based on dominant traits
  const isEarly = sleep === "Before 10pm" || sleep === "10pm–midnight";
  const isHighClean = clean === "Spotless — I clean up immediately and expect the same" || clean === "Tidy — I clean regularly but I'm not rigid about it";
  const isLowGuests = guests === "Rarely (a few times a year)" || guests === "Occasionally (once or twice a month)";
  const isRemote = wfh === "Yes, full-time remote" || wfh === "Yes, hybrid (some days home, some in office)";
  const isHighFinance = finance === "Critical — I need a background check and employment verification" || finance === "Very important — I want references and proof of income";

  let type = "";
  let description = "";
  let insight = "";

  if (isHighClean && isEarly && isLowGuests) {
    type = "The Professional";
    description = "Early-to-bed, high cleanliness standards, low guest traffic. You run a tight ship and need a roommate who respects shared spaces without being reminded.";
    insight = "High-cleanliness + early sleep schedule = you likely have a structured daily routine. Cleanliness standards are the #1 source of roommate conflict according to r/roommates. Getting this filter right matters more than almost anything else.";
  } else if (isRemote && isHighClean) {
    type = "The Remote Professional";
    description = "Home most of the day, high standards for shared spaces. You spend more time at home than the average renter — cleanliness and quiet hours are non-negotiable.";
    insight = "High-cleanliness + full-time remote = you'll spend more time at home than most renters. Cleanliness standards are the #1 source of roommate conflict according to r/roommates. Getting this filter right matters more than almost anything else.";
  } else if (!isLowGuests && !isEarly) {
    type = "The Social Renter";
    description = "Night owl schedule, active social life, guests are a regular part of your living situation. You need a roommate who's fine with energy in the apartment.";
    insight = "High guest frequency + late sleep schedule = your ideal roommate is someone equally social or explicitly comfortable with it. Misaligned expectations on guests are the #2 source of roommate conflicts.";
  } else if (isHighFinance && isHighClean) {
    type = "The Structured Renter";
    description = "High standards on both finances and cleanliness. You want documented agreements and clear expectations before move-in — not assumptions.";
    insight = "High financial standards + high cleanliness = you're looking for a roommate who approaches shared living as a formal arrangement. This significantly narrows the pool — but it also protects you from the most common sources of conflict.";
  } else if (!isHighClean && !isHighFinance) {
    type = "The Flexible Renter";
    description = "Relaxed on cleanliness and financial formality. You prioritize vibe and personality fit over strict standards — and you're easy to live with.";
    insight = "Flexible standards on cleanliness and finances = you have a wide compatible pool. The risk: you may underscreen. Ask about cleanliness expectations explicitly even if you don't enforce them, because your roommate might.";
  } else {
    type = "The Balanced Renter";
    description = "Middle-of-the-road on most compatibility dimensions. You're adaptable and generally easy to live with — but you know where your limits are.";
    insight = "Balanced compatibility profile = most renters can work with you. Focus your search on matching sleep schedules first — it's the hardest thing to negotiate after move-in.";
  }

  const priorities: string[] = [];
  if (isHighClean) priorities.push("Cleanliness standards");
  if (isHighFinance) priorities.push("Financial reliability");
  if (!isLowGuests) priorities.push("Guest/social compatibility");
  if (isRemote) priorities.push("Work-from-home quiet hours");
  if (cook === "Daily — I cook most meals") priorities.push("Kitchen etiquette");
  if (!isEarly) priorities.push("Sleep schedule alignment");
  if (priorities.length === 0) priorities.push("Overall vibe", "Communication style", "Lifestyle flexibility");

  return { type, priorities: priorities.slice(0, 3), description, insight };
}

const FAQS = [
  {
    q: "What does the roommate compatibility quiz test?",
    a: "The quiz covers 6 dimensions that actually cause roommate conflicts: sleep schedule, cleanliness standards, guest frequency, kitchen use, work-from-home habits, and financial reliability expectations. These are the factors Reddit's r/roommates community identifies as the top sources of roommate disputes.",
  },
  {
    q: "Is the roommate compatibility quiz free?",
    a: "Yes. The quiz is completely free. No email required to see your results. If you want to find verified roommates who match your profile, that's also free — no subscription, no paywall.",
  },
  {
    q: "What are the most common roommate compatibility issues?",
    a: "Per Reddit r/roommates (773K members): cleanliness standards (#1), guests/overnight visitors, rent and bill splitting disputes, kitchen etiquette, noise/quiet hours, and work-from-home schedule overlap. The quiz scores you on all 6 to identify potential friction points before you commit.",
  },
];

export default function CompatibilityQuizContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>(Array(QUESTIONS.length).fill(null));
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers(Array(QUESTIONS.length).fill(null));
    setIsComplete(false);
  };

  const progress = isComplete ? 100 : Math.round((currentQuestion / QUESTIONS.length) * 100);
  const profile = isComplete ? getProfile(answers) : null;

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Roommate Compatibility Quiz
            </h1>
            <p className="text-xl text-gray-600 mb-3 max-w-xl mx-auto">
              6 questions. 2 minutes. Discover your compatibility profile — and find verified roommates who actually fit.
            </p>
            <p className="text-sm text-gray-400">Free · No email required · Results shown instantly</p>
          </div>
        </section>

        {/* ── Quiz ── */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto">

            {!isComplete ? (
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                {/* Progress bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Question {currentQuestion + 1} of {QUESTIONS.length}</span>
                    <span>{progress}% complete</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <h2 className="text-2xl font-bold mb-8 text-gray-900">
                  {QUESTIONS[currentQuestion].text}
                </h2>

                {/* Options */}
                <div className="space-y-3">
                  {QUESTIONS[currentQuestion].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt.label)}
                      className="w-full text-left p-4 border border-gray-200 rounded-xl hover:border-purple-400 hover:bg-purple-50 transition-colors font-medium text-gray-800"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                {/* Back button */}
                {currentQuestion > 0 && (
                  <button
                    onClick={handleBack}
                    className="mt-6 text-sm text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    ← Back
                  </button>
                )}
              </div>
            ) : profile ? (
              <div>
                {/* Results card */}
                <div className="bg-white border border-purple-200 rounded-2xl p-8 shadow-sm mb-8">
                  <div className="text-center mb-8">
                    <div className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                      Your Compatibility Profile
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-3">{profile.type}</h2>
                    <p className="text-gray-600 text-lg">{profile.description}</p>
                  </div>

                  {/* Top priorities */}
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h3 className="font-bold text-gray-900 mb-4">Your Top Compatibility Priorities</h3>
                    <div className="space-y-2">
                      {profile.priorities.map((p, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span className="w-6 h-6 bg-purple-600 text-white rounded-full text-xs flex items-center justify-center font-bold flex-shrink-0">
                            {i + 1}
                          </span>
                          <span className="text-gray-800 font-medium">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Insight */}
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
                    <h3 className="font-bold text-blue-900 mb-2">What this means for your search</h3>
                    <p className="text-blue-800 text-sm">{profile.insight}</p>
                  </div>

                  {/* CTA */}
                  <div className="text-center">
                    <a
                      href={BETA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors w-full justify-center"
                    >
                      Find Verified Roommates Who Match Your Profile — Free →
                    </a>
                    <p className="text-sm text-gray-400 mt-3">No credit card · No subscription · Verified profiles only</p>
                  </div>
                </div>

                {/* Answers summary */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
                  <h3 className="font-bold text-lg mb-4">Your Answers</h3>
                  <div className="space-y-3">
                    {QUESTIONS.map((q, i) => (
                      <div key={i} className="flex gap-3 text-sm">
                        <span className="text-gray-400 font-medium w-4 flex-shrink-0">Q{i + 1}</span>
                        <div>
                          <div className="text-gray-500">{q.text}</div>
                          <div className="font-medium text-gray-900">{answers[i]}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={handleRestart}
                    className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
                  >
                    Retake the quiz →
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </section>

        {/* ── Why these 6 questions ── */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Why These 6 Dimensions?</h2>
            <p className="text-gray-600 mb-8">
              Reddit's r/roommates community (773K members) tracks the same conflicts over and over. These 6 dimensions account for the overwhelming majority of reported disputes.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { rank: "#1", label: "Cleanliness standards", note: "Most frequently cited in conflict threads" },
                { rank: "#2", label: "Guests / overnight visitors", note: "Especially work-from-home vs. in-office schedules" },
                { rank: "#3", label: "Rent and bill splitting", note: "Reliability, not amount — who pays on time" },
                { rank: "#4", label: "Kitchen etiquette", note: "Food ownership, smell, shared storage" },
                { rank: "#5", label: "Noise / quiet hours", note: "Sleep schedule misalignment compounds this" },
                { rank: "#6", label: "WFH schedule overlap", note: "Post-2020 conflict category — video calls, quiet zones" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 border border-gray-200 rounded-xl">
                  <span className="text-purple-600 font-bold text-sm w-8 flex-shrink-0">{item.rank}</span>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">{item.label}</div>
                    <div className="text-gray-500 text-sm">{item.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {FAQS.map((faq, i) => (
                <div key={i}>
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Know Your Profile. Find Your Match.</h2>
            <p className="text-purple-200 mb-8">
              Verified Bay Area roommates filtered by the things that actually matter. Free messaging. No subscription.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Verified Roommates — Free →
            </a>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
