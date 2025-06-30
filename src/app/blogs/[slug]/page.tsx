// src/app/blogs/[slug]/page.tsx

import { notFound } from 'next/navigation'
import { client, blogQueries, SanityBlogPost } from '@/lib/sanity'
import BlogPageClient from '../BlogPageClient'

// Helper to fetch a single blog post by slug
async function getBlogPost(slug: string): Promise<SanityBlogPost | null> {
  try {
    return await client.fetch(blogQueries.getBlogBySlug, { slug })
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

// ✅ Required for static export — generates all dynamic slug paths
export async function generateStaticParams() {
  try {
    const blogs = await client.fetch(`
      *[_type == "blog" && defined(slug.current)] {
        "slug": slug.current
      }
    `)

    return blogs.map((blog: { slug: string }) => ({
      slug: blog.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

// ✅ Enforce static-only rendering


// ✅ SEO metadata generation
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const blog = await getBlogPost(slug)

  if (!blog) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return {
    title: `${blog.title} | MyRoomy Blog`,
    description: blog.excerpt,
  }
}

// ✅ Main page render
export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const blog = await getBlogPost(slug)

  if (!blog) {
    notFound()
  }

  return <BlogPageClient blog={blog} />
}