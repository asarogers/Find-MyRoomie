import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Client configuration
export const client = createClient({
  projectId: 'zt5tih1k', // Your project ID
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
})

// Image URL builder
const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)

// Blog post type definition
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

// GROQ queries
export const blogQueries = {
  getAllBlogs: `*[_type == "blog"] | order(publishedAt desc) {
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

  getBlogBySlug: `*[_type == "blog" && slug.current == $slug][0] {
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
      listContent[]{
        label,
        text
      },
      sectionImage,
      sectionVideo
    }
  }`,

  getFeaturedBlogs: `*[_type == "blog" && featured == true] | order(publishedAt desc) {
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
