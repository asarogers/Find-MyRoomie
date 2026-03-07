'use client'
// src/app/blogs/BlogListClient.tsx
import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { Heart, MessageCircle, TrendingUp, ArrowRight, Search } from 'lucide-react'
import { BlogPost } from '@/components/_data/blogs'
import cityList from '@/components/_data/cities.json'
import Navbar from '../../components/Navbar'
import ContactUs from '../../components/ContactUs'

interface BlogListClientProps {
  blogPosts: BlogPost[]
}

type Tab = 'all' | 'finder' | 'guide'

const PAGE_SIZE = 12

// High-value cities to surface first
const PRIORITY_CITIES = [
  'san-francisco-ca',
  'chicago-il',
  'los-angeles-ca',
  'miami-fl',
  'houston-tx',
  'oakland-ca',
  'san-jose-ca',
]

function getCityName(slug: string): string {
  const citySlug = slug
    .replace('free-roommate-finder-', '')
    .replace('how-to-find-a-roommate-', '')
  const city = (cityList as { slug: string; name: string }[]).find(c => c.slug === citySlug)
  return city?.name ?? citySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

function getCitySlug(slug: string): string {
  return slug.replace('free-roommate-finder-', '').replace('how-to-find-a-roommate-', '')
}

function isPriority(slug: string): boolean {
  const cs = getCitySlug(slug)
  return PRIORITY_CITIES.includes(cs)
}

function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  const city = getCityName(post.slug)
  const isFinderPost = post.slug.startsWith('free-roommate-finder-')

  return (
    <article
      className={`group bg-white rounded-2xl border transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
        featured
          ? 'border-blue-200 shadow-lg hover:shadow-xl'
          : 'border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100'
      }`}
    >
      <Link href={`/blogs/${post.slug}`} className="block h-full">
        {/* Category header strip */}
        <div
          className={`px-5 py-2.5 text-xs font-semibold flex items-center justify-between ${
            isFinderPost
              ? 'bg-blue-600 text-white'
              : 'bg-slate-800 text-white'
          }`}
        >
          <span>{isFinderPost ? 'Free Finder' : 'How-To Guide'}</span>
          {featured && (
            <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-xs">
              Featured
            </span>
          )}
        </div>

        <div className="p-5">
          {/* City badge */}
          <span className="inline-block bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-lg mb-3">
            {city}
          </span>

          <h3
            className={`font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug ${
              featured ? 'text-lg' : 'text-base'
            }`}
          >
            {post.title}
          </h3>

          <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>

          {/* Tags */}
          {post.tags.slice(0, 2).map(tag => (
            <span
              key={tag}
              className="inline-block bg-slate-50 text-slate-400 text-xs px-2 py-0.5 rounded mr-1.5 mb-2"
            >
              #{tag}
            </span>
          ))}

          {/* Footer row */}
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Heart className="w-3 h-3" />
                {post.likes}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle className="w-3 h-3" />
                {post.comments}
              </span>
              <span>{post.readTime}</span>
            </div>
            <span className="text-xs text-blue-500 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              Read <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default function BlogListClient({ blogPosts }: BlogListClientProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<Tab>('all')
  const [page, setPage] = useState(1)

  // Sort: priority cities first, then rest
  const sorted = useMemo(() => {
    return [...blogPosts].sort((a, b) => {
      const ap = isPriority(a.slug) ? 0 : 1
      const bp = isPriority(b.slug) ? 0 : 1
      return ap - bp
    })
  }, [blogPosts])

  const filtered = useMemo(() => {
    if (activeTab === 'finder') return sorted.filter(p => p.slug.startsWith('free-roommate-finder-'))
    if (activeTab === 'guide') return sorted.filter(p => p.slug.startsWith('how-to-find-a-roommate-'))
    return sorted
  }, [sorted, activeTab])

  // Priority posts (top cities) shown as "Featured" — first 6 of current filter
  const priorityPosts = filtered.filter(p => isPriority(p.slug)).slice(0, 6)
  const regularPosts = filtered.filter(p => !isPriority(p.slug))

  // Pagination on regular posts only
  const visibleRegular = regularPosts.slice(0, page * PAGE_SIZE)
  const hasMore = visibleRegular.length < regularPosts.length

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab)
    setPage(1)
  }

  const tabs: { id: Tab; label: string; count: number }[] = [
    { id: 'all', label: 'All Guides', count: blogPosts.length },
    {
      id: 'finder',
      label: 'Free Finder Guides',
      count: blogPosts.filter(p => p.slug.startsWith('free-roommate-finder-')).length,
    },
    {
      id: 'guide',
      label: 'How-To Guides',
      count: blogPosts.filter(p => p.slug.startsWith('how-to-find-a-roommate-')).length,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar setIsOpen={setIsOpen} />
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 px-4 py-2 rounded-full mb-5">
            <TrendingUp className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-semibold text-blue-800">
              {blogPosts.length} local guides across {blogPosts.length / 2} cities
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900">
            The MyRoomy Blog
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            City-specific roommate guides, free finder comparisons, and housing advice built for
            Bay Area renters and beyond.
          </p>

          {/* Hero CTA */}
          <div className="mt-6">
            <Link
              href="/downloadApp"
              className="inline-block bg-blue-600 text-white font-semibold px-7 py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Join the Beta — Free Messaging
            </Link>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 mb-10 border-b border-slate-200 pb-px overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 -mb-px transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              {tab.label}
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  activeTab === tab.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Featured / priority city posts */}
        {priorityPosts.length > 0 && (
          <div className="mb-14">
            <h2 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2">
              <span className="bg-blue-600 text-white text-xs px-2.5 py-1 rounded-lg">
                Top Cities
              </span>
              High-traffic markets
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {priorityPosts.map(post => (
                <BlogCard key={post.slug} post={post} featured />
              ))}
            </div>
          </div>
        )}

        {/* All other posts */}
        {visibleRegular.length > 0 && (
          <div className="mb-10">
            <h2 className="text-lg font-bold text-slate-800 mb-5">
              {activeTab === 'all' ? 'All cities' : tabs.find(t => t.id === activeTab)?.label}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {visibleRegular.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        )}

        {/* Load more */}
        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={() => setPage(p => p + 1)}
              className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-medium px-8 py-3 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all"
            >
              <Search className="w-4 h-4" />
              Load more guides ({regularPosts.length - visibleRegular.length} remaining)
            </button>
          </div>
        )}

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">No guides found</h3>
            <p className="text-slate-500">Try a different filter.</p>
          </div>
        )}

        {/* Bottom conversion block */}
        <div className="mt-16 bg-blue-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to find your roommate?</h2>
          <p className="text-blue-100 mb-6 max-w-lg mx-auto">
            Every guide on this blog leads to the same conclusion: you need a verified platform
            with free messaging. That&apos;s exactly what we&apos;re building.
          </p>
          <Link
            href="/downloadApp"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Join the Beta — It&apos;s Free
          </Link>
          <p className="text-blue-200 text-sm mt-3">
            No paywall. No spam. Founding members get free messaging forever.
          </p>
        </div>
      </main>
    </div>
  )
}
