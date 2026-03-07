// src/lib/sanity.ts — Sanity removed. Re-exports from local blog data.
export type { BlogPost as SanityBlogPost } from '@/components/_data/blogs'
export { getBlogBySlug, getAllBlogs, getFeaturedBlogs } from '@/components/_data/blogs'

// No-op urlFor — images are not used in the file-based blog system
export const urlFor = (_source: unknown) => ({
  width: () => ({ height: () => ({ url: () => '/placeholder.png' }) }),
})
