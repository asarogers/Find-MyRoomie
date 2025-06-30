// // src/app/blogs/page.tsx - Smart Caching
// import React from "react";
// import { client, blogQueries, SanityBlogPost } from "@/lib/sanity";
// import BlogListClient from "./BlogListClient";

// // ✅ Different behavior for dev vs production
// export const dynamic = process.env.NEXT_NODE_ENV === 'development' ? 'force-dynamic' : 'force-static'
// export const revalidate = process.env.NEXT_NODE_ENV === 'development' ? 0 : 1800 // 30 min in prod

// export const metadata = {
//   title: "MyRoomy Blog • Verified Roommate Advice & Insights",
//   description:
//     "Get expert roommate tips, industry insights, and safety advice from MyRoomy. Discover featured stories and real-life experiences from our community.",
// };

// async function getBlogPosts(): Promise<SanityBlogPost[]> {
//   try {
//     const cacheOption = process.env.NEXT_NODE_ENV === 'development' 
//       ? { cache: 'no-store' as const } // Always fresh in development
//       : { next: { revalidate: 1800 } }; // ISR in production

//     const posts = await client.fetch(
//       blogQueries.getAllBlogs,
//       {},
//       cacheOption
//     )
//     console.log("Fetched posts:", posts);
//     return posts;
//   } catch (error) {
//     console.error("Error fetching blog posts:", error);
//     return [];
//   }
// }

// export default async function BlogListPage() {
//   const blogPosts = await getBlogPosts();
  
//   return <BlogListClient blogPosts={blogPosts} />;
// }

// src/app/blogs/page.tsx
import React from "react";
import { client, blogQueries, SanityBlogPost } from "@/lib/sanity";
import BlogListClient from "./BlogListClient";

// ✅ Static config only — required!
export const revalidate = 1800 // 30 minutes for ISR
// ❌ Don't use "dynamic" here unless you hardcode it as a literal string

export const metadata = {
  title: "MyRoomy Blog • Verified Roommate Advice & Insights",
  description:
    "Get expert roommate tips, industry insights, and safety advice from MyRoomy. Discover featured stories and real-life experiences from our community.",
};

async function getBlogPosts(): Promise<SanityBlogPost[]> {
  try {
    const posts = await client.fetch(blogQueries.getAllBlogs, {}, {
      next: { revalidate: 1800 } // ISR
    });
    console.log("Fetched posts:", posts);
    return posts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export default async function BlogListPage() {
  const blogPosts = await getBlogPosts();
  return <BlogListClient blogPosts={blogPosts} />;
}
