// src/app/blogs/page.tsx
import React from 'react'
import { getAllBlogs } from '@/components/_data/blogs'
import BlogListClient from './BlogListClient'

export const dynamic = 'force-static'

export const metadata = {
  title: 'MyRoomy Blog • Verified Roommate Advice & Insights',
  description:
    'Get expert roommate tips, industry insights, and safety advice from MyRoomy. Discover featured stories and real-life experiences from our community.',
}

export default function BlogListPage() {
  const blogPosts = getAllBlogs()
  return <BlogListClient blogPosts={blogPosts} />
}
