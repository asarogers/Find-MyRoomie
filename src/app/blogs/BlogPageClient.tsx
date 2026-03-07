'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  Share2,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  Calendar,
  ArrowRight,
  Shield,
  MessageCircle,
  Users,
  X,
} from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ContactUs from '../../components/ContactUs'
import { BlogPost } from '@/components/_data/blogs'
import cityList from '@/components/_data/cities.json'

// ── Types ─────────────────────────────────────────────────────────────────────
type TemplateType = 'competitor' | 'advice'
type FaqItem = { q: string; a: string }

// ── Helpers ───────────────────────────────────────────────────────────────────
function getCityName(slug: string): string {
  const citySlug = slug
    .replace('free-roommate-finder-', '')
    .replace('how-to-find-a-roommate-', '')
  const city = (cityList as { slug: string; name: string }[]).find(c => c.slug === citySlug)
  return city?.name ?? citySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

function getTemplateType(slug: string): TemplateType {
  return slug.startsWith('free-roommate-finder-') ? 'competitor' : 'advice'
}

function getCitySlug(slug: string): string {
  return slug.replace('free-roommate-finder-', '').replace('how-to-find-a-roommate-', '')
}

// ── Trust Strip ───────────────────────────────────────────────────────────────
function TrustStrip() {
  return (
    <div className="flex flex-wrap gap-2 mt-4 mb-2">
      {['Free messaging', 'No paywall', 'Bay Area focused', 'Beta access open'].map(item => (
        <span
          key={item}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full"
        >
          <CheckCircle className="w-3 h-3 flex-shrink-0" />
          {item}
        </span>
      ))}
    </div>
  )
}

// ── Quick Summary Card ────────────────────────────────────────────────────────
function QuickSummaryCard({
  templateType,
  city,
}: {
  templateType: TemplateType
  city: string
}) {
  const rows =
    templateType === 'competitor'
      ? [
          {
            label: 'Quick verdict',
            value: `FindMyRoomy is free to message — always. Roomster charges $29.99/mo the moment you try to contact anyone in ${city}.`,
          },
          { label: 'Free messaging', value: 'Yes — founding beta members lock this in permanently, even after full launch' },
          { label: 'vs Roomster', value: '$29.99/mo paywall, unverified profiles, no lifestyle filters, dated UX' },
          { label: 'Best for', value: `Active roommate seekers in ${city} tired of paywalls and scam-heavy listings` },
          { label: 'Beta access', value: 'Open now — sign up free, founding members keep free messaging forever' },
        ]
      : [
          {
            label: 'Short answer',
            value: `Use a verified, free platform. Post a detailed profile. Ask the right questions upfront. Avoid paywalled apps where you can't even read a reply.`,
          },
          {
            label: 'Best first step',
            value: `Sign up on a verified platform and complete your full profile before searching in ${city}`,
          },
          {
            label: 'Biggest mistake',
            value: 'Messaging on Roomster or similar apps only to hit a $29.99/mo paywall after building your profile',
          },
          {
            label: 'What to do next',
            value: 'Join the FindMyRoomy beta — free messaging, verified profiles, built for Bay Area renters',
          },
        ]

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
        Quick Summary
      </div>
      <dl className="divide-y divide-slate-200">
        {rows.map(({ label, value }) => (
          <div key={label} className="py-2.5 sm:grid sm:grid-cols-[150px_1fr] gap-4 text-sm">
            <dt className="font-semibold text-slate-700 mb-1 sm:mb-0">{label}</dt>
            <dd className="text-slate-600 leading-relaxed">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

// ── Mobile TOC ────────────────────────────────────────────────────────────────
function MobileTOC({ sections }: { sections: BlogPost['sections'] }) {
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

// ── Desktop Right Rail ────────────────────────────────────────────────────────
function RightRail({
  sections,
  activeIndex,
}: {
  sections: BlogPost['sections']
  activeIndex: number
}) {
  return (
    <aside className="hidden lg:flex flex-col gap-4 w-64 shrink-0 self-start sticky top-24">
      {/* TOC */}
      <nav className="bg-white border border-slate-200 rounded-xl p-4">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
          On this page
        </div>
        <ol className="space-y-1.5">
          {sections.map((s, i) => (
            <li key={i}>
              <a
                href={`#section-${i}`}
                className={`block text-sm leading-snug py-0.5 transition-colors ${
                  activeIndex === i
                    ? 'text-blue-600 font-semibold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {s.subtitle}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Beta card */}
      <div className="bg-blue-600 text-white rounded-xl p-5">
        <div className="text-sm font-bold mb-2">Join the Bay Area beta</div>
        <p className="text-xs text-blue-100 leading-relaxed mb-4">
          Free messaging forever for founding members. No paywall — ever.
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
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
          Why FindMyRoomy
        </div>
        <ul className="space-y-2.5">
          {[
            { icon: MessageCircle, text: 'Free messaging — always' },
            { icon: Shield, text: 'Verified profiles' },
            { icon: Users, text: 'Bay Area focused' },
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
function MidPageCTA({
  city,
  templateType,
}: {
  city: string
  templateType: TemplateType
}) {
  const copy =
    templateType === 'competitor'
      ? `Looking for a roommate in ${city} without the Roomster paywall?`
      : `Ready to find a verified roommate in ${city}?`

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-10 not-prose">
      <p className="text-blue-800 font-semibold text-sm mb-1">{copy}</p>
      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
        Join the FindMyRoomy beta — free messaging, verified profiles, built for Bay Area renters.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/downloadApp"
          className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Join Beta
        </Link>
        <Link
          href="/"
          className="inline-block bg-white text-blue-600 text-sm font-medium px-5 py-2.5 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors"
        >
          Learn how it works
        </Link>
      </div>
    </div>
  )
}

// ── Trust Module ──────────────────────────────────────────────────────────────
function TrustModule() {
  return (
    <div className="border border-slate-200 rounded-xl p-6 my-10 bg-white not-prose">
      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
        Why Find MyRoomy exists
      </div>
      <p className="text-slate-600 text-sm leading-relaxed mb-5">
        We built FindMyRoomy for Bay Area renters tired of digging through scattered Craigslist
        posts, paywalled apps, and vague listings. The goal is simple: free messaging, better trust
        signals, and real local relevance — without the $29.99/month gate.
      </p>
      <div className="grid grid-cols-3 gap-3 text-center">
        {[
          { icon: MessageCircle, label: 'Free messaging', sub: 'No paywall, ever' },
          { icon: Shield, label: 'Verified profiles', sub: 'Trust built in' },
          { icon: Users, label: 'Bay Area first', sub: 'Local relevance' },
        ].map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex flex-col items-center gap-1 p-2">
            <Icon className="w-5 h-5 text-blue-600" />
            <span className="text-xs font-semibold text-slate-700">{label}</span>
            <span className="text-xs text-slate-500">{sub}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── FAQ Accordion ─────────────────────────────────────────────────────────────
function FAQSection({ faqItems }: { faqItems: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  return (
    <div className="my-10 not-prose">
      <h2 className="text-xl font-bold mb-5 text-slate-900">Frequently Asked Questions</h2>
      <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
        {faqItems.map((faq, i) => (
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

// ── Related Cluster ───────────────────────────────────────────────────────────
function RelatedCluster({ slug, city }: { slug: string; city: string }) {
  const citySlug = getCitySlug(slug)
  const partnerSlug = slug.startsWith('free-roommate-finder-')
    ? slug.replace('free-roommate-finder-', 'how-to-find-a-roommate-')
    : slug.replace('how-to-find-a-roommate-', 'free-roommate-finder-')

  const allLinks = [
    {
      href: `/blogs/${partnerSlug}`,
      label: slug.startsWith('free-roommate-finder-')
        ? `How to Find a Roommate in ${city} (2026 Guide)`
        : `Free Roommate Finder in ${city} — No Paywall`,
    },
    { href: `/apartments/${citySlug}`, label: `Shared Apartments in ${city}` },
    { href: `/roommates/${citySlug}`, label: `Roommate Finder — ${city}` },
    { href: '/roomster-alternative', label: 'Roomster Alternative — Full Comparison' },
    { href: '/blogs/free-roommate-finder-san-francisco-ca', label: 'Free Roommate Finder San Francisco' },
  ].filter(l => !l.href.endsWith(slug))

  return (
    <div className="my-10 not-prose">
      <h2 className="text-lg font-bold mb-4 text-slate-900">Related guides</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {allLinks.slice(0, 4).map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-3 p-3.5 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all group"
          >
            <ArrowRight className="w-4 h-4 text-blue-400 shrink-0 group-hover:translate-x-0.5 transition-transform" />
            <span className="text-sm text-slate-700 font-medium group-hover:text-blue-600 transition-colors">
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

// ── End CTA Block ─────────────────────────────────────────────────────────────
function EndCTABlock({ city, templateType }: { city: string; templateType: TemplateType }) {
  const headline =
    templateType === 'competitor'
      ? `Ready to find a roommate in ${city} without the paywall?`
      : `Ready to find a verified roommate in ${city}?`

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 my-10 not-prose">
      <h2 className="text-2xl font-bold mb-3">{headline}</h2>
      <p className="text-blue-100 leading-relaxed mb-6 max-w-lg">
        Join the FindMyRoomy beta for free and get early access to a roommate finder built around
        trust, local relevance, and free messaging. Bay Area focused. No paywall.
      </p>
      <div className="flex flex-wrap gap-3 mb-4">
        <Link
          href="/downloadApp"
          className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
        >
          Join Beta — It&apos;s Free
        </Link>
        <Link
          href="/"
          className="inline-block bg-blue-500/50 text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-500/70 transition-colors"
        >
          Learn how it works
        </Link>
      </div>
      <p className="text-blue-200 text-sm">
        No paywall. No spam. Founding members get free messaging forever.
      </p>
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function BlogPageClient({
  blog,
  faqItems,
}: {
  blog: BlogPost
  faqItems: FaqItem[]
}) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const [showMobileCTA, setShowMobileCTA] = useState(false)
  const [mobileCTADismissed, setMobileCTADismissed] = useState(false)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  const templateType = getTemplateType(blog.slug)
  const city = getCityName(blog.slug)

  // Sticky mobile CTA — appear after 25% scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollRatio =
        window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1)
      if (scrollRatio > 0.25 && !mobileCTADismissed) {
        setShowMobileCTA(true)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mobileCTADismissed])

  // TOC section tracking via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute('data-section-idx') ?? '0', 10)
            setActiveSection(idx)
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
        await navigator.share({ title: blog.title, text: blog.excerpt, url: window.location.href })
      } else {
        await navigator.clipboard.writeText(window.location.href)
      }
    } catch {
      // share cancelled or unsupported
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar setIsOpen={setIsOpen} />
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <div className="max-w-3xl mb-8">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
            <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-slate-600 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-slate-600 truncate">{city}</span>
          </nav>

          {/* Category */}
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {blog.category}
          </span>

          {/* H1 — mirrors search query for featured snippet capture */}
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4 text-slate-900">
            {blog.title}
          </h1>

          {/* Value subheading */}
          <p className="text-lg text-slate-600 leading-relaxed mb-4">{blog.excerpt}</p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {blog.readTime}
            </span>
            <span className="text-slate-300">•</span>
            <span>{blog.author}</span>
          </div>

          {/* Trust strip */}
          <TrustStrip />

          {/* Hero CTA */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="/downloadApp"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Join Beta — It&apos;s Free
            </Link>
            <span className="text-sm text-slate-500">
              Be first to access FindMyRoomy when it launches.
            </span>
          </div>
        </div>

        {/* ── Quick Summary Card ───────────────────────────────────────────── */}
        <div className="max-w-3xl">
          <QuickSummaryCard templateType={templateType} city={city} />
        </div>

        {/* ── Mobile TOC ───────────────────────────────────────────────────── */}
        <div className="max-w-3xl">
          <MobileTOC sections={blog.sections} />
        </div>

        {/* ── Two-column layout ────────────────────────────────────────────── */}
        <div className="flex gap-10 items-start">

          {/* Article body */}
          <div className="flex-1 min-w-0 max-w-3xl">

            {/* Tags */}
            {blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {blog.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Intro block — direct answer, 40-60 words for featured snippet */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 mb-8 rounded-r-xl">
              <p className="text-slate-700 leading-relaxed">{blog.introText}</p>
            </div>

            {/* Article sections */}
            <div className="prose prose-slate prose-lg max-w-none">
              {blog.sections.map((section, i) => (
                <section
                  key={i}
                  id={`section-${i}`}
                  data-section-idx={String(i)}
                  ref={el => { sectionRefs.current[i] = el }}
                  className="mb-12"
                >
                  {/* H2 mirrors likely search query fragments */}
                  <h2 className="text-2xl font-bold mb-5 text-slate-900 not-prose">
                    {section.subtitle}
                  </h2>

                  {section.contentType === 'list' && section.listContent ? (
                    <div className="space-y-3 not-prose">
                      {section.listContent.map((item, j) => (
                        <div
                          key={j}
                          className="bg-slate-50 border-l-4 border-blue-400 p-4 rounded-r-lg"
                        >
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

                  {/* Mid-page CTA injected after section 1 */}
                  {i === 1 && <MidPageCTA city={city} templateType={templateType} />}
                </section>
              ))}
            </div>

            {/* Trust module */}
            <TrustModule />

            {/* FAQ — also rendered as FAQPage schema in page.tsx */}
            <FAQSection faqItems={faqItems} />

            {/* Related content cluster */}
            <RelatedCluster slug={blog.slug} city={city} />

            {/* End CTA — strongest conversion block */}
            <EndCTABlock city={city} templateType={templateType} />

            {/* Bottom nav */}
            <div className="flex justify-between items-center pt-8 border-t border-slate-200 mt-8">
              <Link
                href="/blogs"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                All Posts
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
          <RightRail sections={blog.sections} activeIndex={activeSection} />
        </div>
      </main>

      <Footer setIsOpen={setIsOpen} />

      {/* Sticky mobile CTA bar — appears after 25% scroll, dismissible */}
      {showMobileCTA && !mobileCTADismissed && (
        <div
          className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-2xl px-4 py-3 flex items-center justify-between z-50"
          style={{ transform: 'translateY(0)', transition: 'transform 0.3s ease' }}
        >
          <span className="text-sm font-semibold text-slate-800">Join the Bay Area beta</span>
          <div className="flex items-center gap-2">
            <Link
              href="/downloadApp"
              className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Join Free
            </Link>
            <button
              onClick={() => {
                setMobileCTADismissed(true)
                setShowMobileCTA(false)
              }}
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
