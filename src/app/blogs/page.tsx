// src/app/blogs/page.tsx
import React from "react";
import { client, blogQueries, SanityBlogPost } from "../../lib/sanity";
import BlogListClient from "./BlogListClient";

export const metadata = {
  title: "MyRoomy Blog • Verified Roommate Advice & Insights",
  description:
    "Get expert roommate tips, industry insights, and safety advice from MyRoomy. Discover featured stories and real-life experiences from our community.",
};

async function getBlogPosts(): Promise<SanityBlogPost[]> {
  try {
    const posts = await client.fetch(blogQueries.getAllBlogs);
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