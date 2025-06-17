// src/app/blogs/[id]/page.tsx
import { blogData } from "../blogData";
import { notFound } from "next/navigation";
import BlogPageClient from "../BlogPageClient";

// For static generation of paths like /blogs/1, /blogs/2, etc.
export async function generateStaticParams() {
  return Object.keys(blogData).map((id) => ({ id }));
}

// For dynamic metadata (SEO)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = blogData[Number(id)];
  
  if (!blog) return { title: "Not Found" };
  
  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

// Blog page component
export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = blogData[Number(id)];
  
  if (!blog) return notFound();
  
  return <BlogPageClient blog={blog} />;
}