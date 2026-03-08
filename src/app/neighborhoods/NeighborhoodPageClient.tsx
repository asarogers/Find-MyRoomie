'use client'
// src/app/neighborhoods/NeighborhoodPageClient.tsx
// Design improvements over BlogPageClient:
//  1. Reading progress bar (top of viewport)
//  2. Rent comparison callout (solo vs shared vs savings — visual, prominent)
//  3. Neighborhood stat strip (data-driven, not generic trust badges)
//  4. Type-A QuickSummaryCard (7 neighborhood-specific fields)
//  5. 3-level breadcrumb (Home → Neighborhoods → City → Neighborhood)
//  6. Related neighborhoods cluster (not random guides)
//  7. Employer proximity section in right rail

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Share2,
  ChevronDown,
  ChevronUp,
  Train,
  Building2,
  MapPin,
  Briefcase,
  DollarSign,
  Shield,
  MessageCircle,
  Users,
  X,
  TrendingDown,
} from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ContactUs from '../../components/ContactUs'
import { Neighborhood, getAllNeighborhoods } from '@/components/_data/neighborhoods'

// ── Reading Progress Bar (IMPROVEMENT 1) ─────────────────────────────────────
// Not present in BlogPageClient — standard pattern from NYT, Medium
function ReadingProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY
      const total = Math.max(document.body.scrollHeight - window.innerHeight, 1)
      setProgress(Math.min(100, (scrolled / total) * 100))
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-slate-100">
      <div
        className="h-full bg-blue-500 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

// ── Neighborhood Stat Strip (IMPROVEMENT 3) ───────────────────────────────────
// Replaces generic trust badges with data-driven stats per neighborhood
function NeighborhoodStatStrip({ n }: { n: Neighborhood }) {
  const stats = [
    { icon: DollarSign, label: 'Shared room', value: n.roomRent, color: 'text-green-600 bg-green-50 border-green-100' },
    { icon: Train, label: 'Transit', value: n.transit.split('—')[0].trim(), color: 'text-blue-600 bg-blue-50 border-blue-100' },
    { icon: Users, label: 'Best for', value: n.bestFor.split(',')[0], color: 'text-purple-600 bg-purple-50 border-purple-100' },
    { icon: Briefcase, label: 'Employers', value: n.employers.split(',')[0], color: 'text-slate-600 bg-slate-50 border-slate-100' },
  ]

  return (
    <div className="flex flex-wrap gap-2 mt-4 mb-2">
      {stats.map(({ icon: Icon, label, value, color }) => (
        <div
          key={label}
          className={`inline-flex items-center gap-2 text-xs font-medium border px-3 py-1.5 rounded-full ${color}`}
        >
          <Icon className="w-3 h-3 flex-shrink-0" />
          <span className="font-semibold">{label}:</span>
          <span className="truncate max-w-[120px]">{value}</span>
        </div>
      ))}
    </div>
  )
}

// ── Rent Comparison Callout (IMPROVEMENT 2) ───────────────────────────────────
// Not in BlogPageClient — makes the financial case visually and immediately
function RentComparisonCallout({ n }: { n: Neighborhood }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-8 not-prose">
      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">
        Rent Reality in {n.neighborhood}
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="text-center p-3 bg-red-50 rounded-xl border border-red-100">
          <div className="text-xs text-red-600 font-semibold mb-1">Solo 1BR</div>
          <div className="text-lg font-bold text-slate-900 leading-tight">{n.soloRent}</div>
          <div className="text-xs text-slate-400 mt-1">per month</div>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-xl border border-green-200">
          <div className="text-xs text-green-700 font-semibold mb-1">Shared room</div>
          <div className="text-lg font-bold text-green-800 leading-tight">{n.roomRent}</div>
          <div className="text-xs text-slate-400 mt-1">per month</div>
        </div>
        <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-100">
          <div className="flex items-center justify-center gap-1 mb-1">
            <TrendingDown className="w-3 h-3 text-blue-600" />
            <span className="text-xs text-blue-600 font-semibold">You save</span>
          </div>
          <div className="text-base font-bold text-blue-800 leading-tight">{n.savings.replace('Save ', '')}</div>
          <div className="text-xs text-slate-400 mt-1">per month</div>
        </div>
      </div>
    </div>
  )
}

// ── Type-A Quick Summary Card (IMPROVEMENT 4) ─────────────────────────────────
// BlogPageClient has 2 template types with generic data
// Here: 7 neighborhood-specific fields per BLOG_METHODOLOGY.md §5 Type A
function QuickSummaryCard({ n }: { n: Neighborhood }) {
  const rows = [
    { label: 'Rent range', value: `${n.roomRent} for a shared room · ${n.soloRent} solo 1BR` },
    { label: 'Vibe', value: n.vibe },
    { label: 'Transit', value: n.transit },
    { label: 'Who it\'s best for', value: n.bestFor },
    { label: 'Nearby employers', value: n.employers },
    { label: 'Roommate angle', value: n.roommateAngle },
    { label: 'Quick verdict', value: n.quickVerdict },
  ]

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
        Quick Summary — {n.neighborhood}
      </div>
      <dl className="divide-y divide-slate-200">
        {rows.map(({ label, value }) => (
          <div key={label} className="py-2.5 sm:grid sm:grid-cols-[160px_1fr] gap-4 text-sm">
            <dt className="font-semibold text-slate-700 mb-1 sm:mb-0">{label}</dt>
            <dd className="text-slate-600 leading-relaxed">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

// ── Mobile TOC ────────────────────────────────────────────────────────────────
function MobileTOC({ sections }: { sections: Neighborhood['sections'] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="lg:hidden border border-slate-200 rounded-xl mb-6 overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-700 bg-white"
      >
        <span>On this page</span>
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {open && (
        <ol className="px-4 pb-4 space-y-2 border-t border-slate-100 pt-3 bg-white">
          {sections.map((s, i) => (
            <li key={i}>
              <a
                href={`#section-${i}`}
                onClick={() => setOpen(false)}
                className="block text-sm text-slate-600 hover:text-blue-600 transition-colors py-0.5"
              >
                {s.subtitle}
              </a>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

// ── Desktop Right Rail (IMPROVEMENT 7: employer proximity) ────────────────────
function RightRail({
  n,
  sections,
  activeIndex,
}: {
  n: Neighborhood
  sections: Neighborhood['sections']
  activeIndex: number
}) {
  return (
    <aside className="hidden lg:flex flex-col gap-4 w-64 shrink-0 self-start sticky top-24">
      {/* TOC */}
      <nav className="bg-white border border-slate-200 rounded-xl p-4">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">On this page</div>
        <ol className="space-y-1.5">
          {sections.map((s, i) => (
            <li key={i}>
              <a
                href={`#section-${i}`}
                className={`block text-sm leading-snug py-0.5 transition-colors ${
                  activeIndex === i ? 'text-blue-600 font-semibold' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {s.subtitle}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Rent snapshot (IMPROVEMENT 7: useful data in rail, not just CTA) */}
      <div className="bg-white border border-slate-200 rounded-xl p-4">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
          {n.neighborhood} at a glance
        </div>
        <div className="space-y-2.5">
          {[
            { icon: DollarSign, label: 'Shared room', value: n.roomRent },
            { icon: Building2, label: 'Solo 1BR', value: n.soloRent },
            { icon: Train, label: 'Transit', value: n.transit.split('—')[0].trim() },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-2.5 text-xs text-slate-600">
              <Icon className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-700">{label}: </span>
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Beta card */}
      <div className="bg-blue-600 text-white rounded-xl p-5">
        <div className="text-sm font-bold mb-2">Find a roommate in {n.neighborhood}</div>
        <p className="text-xs text-blue-100 leading-relaxed mb-4">
          Verified profiles. Free messaging. No Roomster paywall — ever.
        </p>
        <Link
          href="/downloadApp"
          className="block w-full text-center text-sm font-semibold bg-white text-blue-600 rounded-lg py-2.5 hover:bg-blue-50 transition-colors"
        >
          Join Beta →
        </Link>
        <p className="text-xs text-blue-200 mt-2 text-center">No spam. No credit card.</p>
      </div>

      {/* Trust card */}
      <div className="bg-white border border-slate-200 rounded-xl p-4">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Why FindMyRoomy</div>
        <ul className="space-y-2.5">
          {[
            { icon: MessageCircle, text: 'Free messaging — always' },
            { icon: Shield, text: 'Verified profiles' },
            { icon: MapPin, text: 'Bay Area focused' },
          ].map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2.5 text-xs text-slate-600">
              <Icon className="w-4 h-4 text-blue-500 shrink-0" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

// ── Mid-Page CTA ──────────────────────────────────────────────────────────────
function MidPageCTA({ n }: { n: Neighborhood }) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-10 not-prose">
      <p className="text-blue-800 font-semibold text-sm mb-1">
        Looking for a verified roommate in {n.neighborhood}?
      </p>
      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
        FindMyRoomy has verified profiles in {n.city}. Free messaging, government ID verification on
        every account — no $29.99/month paywall.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/downloadApp"
          className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Join Beta — Free
        </Link>
        <Link
          href={`/roommates/${n.citySlug}`}
          className="inline-block bg-white text-blue-600 text-sm font-medium px-5 py-2.5 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors"
        >
          Browse {n.city} roommates
        </Link>
      </div>
    </div>
  )
}

// ── FAQ Accordion ─────────────────────────────────────────────────────────────
function FAQSection({ faqs }: { faqs: Neighborhood['faqs'] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  return (
    <div className="my-10 not-prose">
      <h2 className="text-xl font-bold mb-5 text-slate-900">Frequently Asked Questions</h2>
      <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
        {faqs.map((faq, i) => (
          <div key={i}>
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
              aria-expanded={openIdx === i}
            >
              <span className="pr-4">{faq.q}</span>
              {openIdx === i ? (
                <ChevronUp className="w-4 h-4 shrink-0 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 shrink-0 text-slate-400" />
              )}
            </button>
            {openIdx === i && (
              <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed bg-slate-50">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Related Neighborhoods (IMPROVEMENT 6) ────────────────────────────────────
// BlogPageClient shows generic related guides; here we show related neighborhoods
function RelatedNeighborhoods({ current, relatedSlugs }: { current: Neighborhood; relatedSlugs: string[] }) {
  const all = getAllNeighborhoods()
  const related = relatedSlugs
    .map(s => all.find(n => n.slug === s))
    .filter(Boolean) as Neighborhood[]

  if (related.length === 0) return null

  return (
    <div className="my-10 not-prose">
      <h2 className="text-lg font-bold mb-4 text-slate-900">Compare other Bay Area neighborhoods</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {related.slice(0, 4).map(n => (
          <Link
            key={n.slug}
            href={`/neighborhoods/${n.slug}`}
            className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all group"
          >
            <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                {n.neighborhood}, {n.city}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">{n.roomRent} · {n.vibe.split(',')[0]}</div>
            </div>
            <ArrowRight className="w-4 h-4 text-blue-400 shrink-0 ml-auto self-center group-hover:translate-x-0.5 transition-transform" />
          </Link>
        ))}
      </div>
      {/* Also link to city page + blogs */}
      <div className="mt-3 grid sm:grid-cols-2 gap-3">
        <Link
          href={`/roommates/${current.citySlug}`}
          className="flex items-center gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-300 transition-all group text-sm"
        >
          <Users className="w-4 h-4 text-blue-400 shrink-0" />
          <span className="font-medium text-slate-700 group-hover:text-blue-600">
            Browse all {current.city} roommates
          </span>
        </Link>
        <Link
          href={`/blogs/free-roommate-finder-${current.citySlug}`}
          className="flex items-center gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-300 transition-all group text-sm"
        >
          <ArrowRight className="w-4 h-4 text-blue-400 shrink-0" />
          <span className="font-medium text-slate-700 group-hover:text-blue-600">
            Free roommate finder — {current.city}
          </span>
        </Link>
      </div>
    </div>
  )
}

// ── End CTA Block ─────────────────────────────────────────────────────────────
function EndCTABlock({ n }: { n: Neighborhood }) {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 my-10 not-prose">
      <h2 className="text-2xl font-bold mb-3">
        Ready to find a verified roommate in {n.neighborhood}?
      </h2>
      <p className="text-blue-100 leading-relaxed mb-2 max-w-lg">
        Shared rooms run {n.roomRent}. {n.savings}. FindMyRoomy verifies every profile with
        government ID — and messaging is always free.
      </p>
      <p className="text-blue-200 text-sm mb-6">No Roomster $29.99/month paywall. No fake profiles.</p>
      <div className="flex flex-wrap gap-3 mb-4">
        <Link
          href="/downloadApp"
          className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
        >
          Join Beta — It&apos;s Free
        </Link>
        <Link
          href={`/roommates/${n.citySlug}`}
          className="inline-block bg-blue-500/50 text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-500/70 transition-colors"
        >
          Browse {n.city} roommates
        </Link>
      </div>
      <p className="text-blue-200 text-sm">No spam. No credit card. Founding members get free messaging forever.</p>
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function NeighborhoodPageClient({ neighborhood: n }: { neighborhood: Neighborhood }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const [showMobileCTA, setShowMobileCTA] = useState(false)
  const [mobileCTADismissed, setMobileCTADismissed] = useState(false)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  // Sticky mobile CTA after 25% scroll
  useEffect(() => {
    const handleScroll = () => {
      const ratio = window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1)
      if (ratio > 0.25 && !mobileCTADismissed) setShowMobileCTA(true)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mobileCTADismissed])

  // TOC active section via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(parseInt(entry.target.getAttribute('data-section-idx') ?? '0', 10))
          }
        })
      },
      { rootMargin: '-15% 0px -65% 0px' }
    )
    sectionRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const shareArticle = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: n.name, text: n.quickVerdict, url: window.location.href })
      } else {
        await navigator.clipboard.writeText(window.location.href)
      }
    } catch { /* cancelled or unsupported */ }
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* IMPROVEMENT 1: Reading progress bar */}
      <ReadingProgressBar />

      <Navbar setIsOpen={setIsOpen} />
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <div className="max-w-3xl mb-8">
          {/* IMPROVEMENT 5: 3-level breadcrumb */}
          <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 mb-4 flex-wrap">
            <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/neighborhoods" className="hover:text-slate-600 transition-colors">Neighborhoods</Link>
            <span>/</span>
            <Link href={`/roommates/${n.citySlug}`} className="hover:text-slate-600 transition-colors">{n.city}</Link>
            <span>/</span>
            <span className="text-slate-600">{n.neighborhood}</span>
          </nav>

          {/* Category tag */}
          <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <MapPin className="w-3 h-3" />
            Neighborhood Guide
          </span>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4 text-slate-900">
            {n.neighborhood}, {n.city}: Roommate Guide (2026)
          </h1>

          {/* Quick verdict */}
          <p className="text-lg text-slate-600 leading-relaxed mb-4">{n.quickVerdict}</p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-4">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" />
              {n.city}, {n.state}
            </span>
            <span>{n.readTime}</span>
            <span className="text-slate-300">•</span>
            <span>Updated 2026</span>
          </div>

          {/* IMPROVEMENT 3: Neighborhood stat strip */}
          <NeighborhoodStatStrip n={n} />

          {/* Hero CTA */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="/downloadApp"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Find a Roommate in {n.neighborhood} — Free
            </Link>
            <span className="text-sm text-slate-500">Verified profiles · No paywall</span>
          </div>
        </div>

        {/* IMPROVEMENT 2: Rent comparison callout */}
        <div className="max-w-3xl">
          <RentComparisonCallout n={n} />
        </div>

        {/* IMPROVEMENT 4: Type-A Quick Summary Card */}
        <div className="max-w-3xl">
          <QuickSummaryCard n={n} />
        </div>

        {/* Mobile TOC */}
        <div className="max-w-3xl">
          <MobileTOC sections={n.sections} />
        </div>

        {/* ── Two-column layout ────────────────────────────────────────────── */}
        <div className="flex gap-10 items-start">

          {/* Article body */}
          <div className="flex-1 min-w-0 max-w-3xl">

            {/* Tags */}
            {n.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {n.tags.map(tag => (
                  <span key={tag} className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Intro — direct answer for featured snippet */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 mb-8 rounded-r-xl">
              <p className="text-slate-700 leading-relaxed">{n.intro}</p>
            </div>

            {/* Article sections */}
            <div className="prose prose-slate prose-lg max-w-none">
              {n.sections.map((section, i) => (
                <section
                  key={i}
                  id={`section-${i}`}
                  data-section-idx={String(i)}
                  ref={el => { sectionRefs.current[i] = el }}
                  className="mb-12"
                >
                  <h2 className="text-2xl font-bold mb-5 text-slate-900 not-prose">
                    {section.subtitle}
                  </h2>

                  {section.contentType === 'list' && section.listContent ? (
                    <div className="space-y-3 not-prose">
                      {section.listContent.map((item, j) => (
                        <div key={j} className="bg-slate-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                          <h4 className="font-semibold text-slate-800 mb-1 text-sm">{item.label}</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                      {section.textContent}
                    </div>
                  )}

                  {/* Mid-page CTA after section 1 */}
                  {i === 1 && <MidPageCTA n={n} />}
                </section>
              ))}
            </div>

            {/* FAQ */}
            <FAQSection faqs={n.faqs} />

            {/* IMPROVEMENT 6: Related neighborhoods (not random guides) */}
            <RelatedNeighborhoods current={n} relatedSlugs={n.relatedSlugs} />

            {/* End CTA */}
            <EndCTABlock n={n} />

            {/* Bottom nav */}
            <div className="flex justify-between items-center pt-8 border-t border-slate-200 mt-8">
              <Link
                href="/neighborhoods"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                All Neighborhoods
              </Link>
              <button
                onClick={shareArticle}
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>

          {/* Right rail */}
          <RightRail n={n} sections={n.sections} activeIndex={activeSection} />
        </div>
      </main>

      <Footer setIsOpen={setIsOpen} />

      {/* Sticky mobile CTA */}
      {showMobileCTA && !mobileCTADismissed && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-2xl px-4 py-3 flex items-center justify-between z-50">
          <div>
            <span className="text-sm font-semibold text-slate-800">{n.neighborhood}</span>
            <span className="text-xs text-slate-500 ml-2">{n.roomRent}</span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/downloadApp"
              className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Find Roommate — Free
            </Link>
            <button
              onClick={() => { setMobileCTADismissed(true); setShowMobileCTA(false) }}
              aria-label="Dismiss"
              className="text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
