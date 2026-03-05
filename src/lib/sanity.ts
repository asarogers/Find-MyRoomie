// src/lib/sanity.ts
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// ✅ Sanity Client Configuration
export const client = createClient({
  projectId: 'zt5tih1k', // Replace with your project ID
  dataset: 'production',
  useCdn: false, // ✅ Already set to false - good!
  apiVersion: '2023-05-03',
  // Add these for force refresh:
  ignoreBrowserTokenWarning: true,
  perspective: 'published', // Only get published content
})

// ✅ Helper function to fetch with cache busting
export const fetchWithRefresh = async (query: string, params = {}) => {
  try {
    // Add timestamp to force fresh data
    const result = await client.fetch(query, {
      ...params,
      _cacheBust: Date.now() // Cache busting parameter
    }, {
      // Additional fetch options
      cache: 'no-store', // Prevent caching
    })
    return result
  } catch (error) {
    console.error('Sanity fetch error:', error)
    throw error
  }
}

// ✅ Image URL Builder
const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)

// ✅ Blog Post Type Definition
export interface SanityBlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  introText: string
  mainImage: any
  author: string
  publishedAt: string
  category: string
  featured: boolean
  readTime: string
  likes: number
  comments: number
  tags?: string[]
  sections?: Array<{
    subtitle: string
    contentType: 'text' | 'list'
    textContent?: string
    listContent?: Array<{
      label: string
      text: string
    }>
    sectionImage?: any
    sectionVideo?: string
  }>
}

// ✅ GROQ Queries with cache busting
export const blogQueries = {
  getAllBlogs: `*[_type == "blog" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    introText,
    mainImage,
    author,
    publishedAt,
    category,
    featured,
    readTime,
    likes,
    comments,
    tags
  }`,
  
  getBlogBySlug: `*[_type == "blog" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    title,
    slug,
    excerpt,
    introText,
    mainImage,
    author,
    publishedAt,
    category,
    featured,
    readTime,
    likes,
    comments,
    tags,
    sections[] {
      subtitle,
      contentType,
      textContent,
      listContent[] {
        label,
        text
      },
      sectionImage,
      sectionVideo
    }
  }`,
  
  getFeaturedBlogs: `*[_type == "blog" && featured == true && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    introText,
    mainImage,
    author,
    publishedAt,
    category,
    featured,
    readTime,
    likes,
    comments,
    tags
  }`
}

// ✅ Quick refresh function for testing
export const refreshBlogData = async () => {
  console.log('🔄 Forcing fresh blog data...')
  return await fetchWithRefresh(blogQueries.getAllBlogs)
}