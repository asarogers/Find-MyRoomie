// src/app/blogs/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { client, blogQueries, SanityBlogPost } from '@/lib/sanity'
import BlogPageClient from '../BlogPageClient'

interface Props {
  params: {
    slug: string
  }
}

async function getBlogPost(slug: string): Promise<SanityBlogPost | null> {
  try {
    return await client.fetch(blogQueries.getBlogBySlug, { slug })
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

// Required for static export - generates all possible slug paths at build time
export async function generateStaticParams() {
  try {
    // Fetch all blog posts to get their slugs
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

export async function generateMetadata({ params }: Props) {
  const blog = await getBlogPost(params.slug)
  
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

export default async function BlogPage({ params }: Props) {
  const blog = await getBlogPost(params.slug)
  
  if (!blog) {
    notFound()
  }
  
  return <BlogPageClient blog={blog} />
}