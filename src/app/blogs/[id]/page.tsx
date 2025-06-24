// src/app/blogs/[id]/page.tsx
import { blogData } from "../blogData";
import { notFound } from "next/navigation";
import BlogPageClient from "../BlogPageClient";
import { Metadata } from "next";

// ✅ Updated type for async params
type Props = {
  params: Promise<{
    id: string;
  }>;
};

// For static generation of paths like /blogs/1, /blogs/2, etc.
export async function generateStaticParams() {
  return Object.keys(blogData).map((id) => ({ id }));
}

// For dynamic metadata (SEO) - now with async params
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params; // ✅ Await the params
  const blog = blogData[Number(id)];
  
  if (!blog) return { title: "Not Found" };
  
  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

// Blog page component - now with async params
export default async function BlogPost({ params }: Props) {
  const { id } = await params; // ✅ Await the params
  const blog = blogData[Number(id)];
  
  if (!blog) return notFound();
  
  return <BlogPageClient blog={blog} />;
}