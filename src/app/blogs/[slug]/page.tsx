// src/app/blogs/[slug]/page.tsx

import { notFound } from 'next/navigation'
import { getBlogBySlug, getAllBlogs } from '@/components/_data/blogs'
import BlogPageClient from '../BlogPageClient'

export async function generateStaticParams() {
  return getAllBlogs().map((blog) => ({ slug: blog.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)

  if (!blog) return { title: 'Blog Post Not Found' }

  return {
    title: `${blog.title} | MyRoomy Blog`,
    description: blog.excerpt,
  }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)

  if (!blog) notFound()

  return <BlogPageClient blog={blog!} />
}
