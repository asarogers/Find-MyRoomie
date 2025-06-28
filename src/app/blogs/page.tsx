// src/app/blogs/[id]/page.tsx
import { sanity } from "@/lib/sanity";
import { notFound } from "next/navigation";
import BlogPageClient from "./BlogPageClient";
import { Metadata } from "next";

export async function generateStaticParams() {
  const posts = await sanity.fetch(`*[_type == "post"]{slug}`);
  return posts.map((post: any) => ({
    id: post.slug.current,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = await sanity.fetch(
    `*[_type == "post" && slug.current == $id][0]`,
    { id: params.id }
  );

  if (!post) return { title: "Not Found" };

  return {
    title: post.title,
    description: post.excerpt || "",
  };
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await sanity.fetch(
    `*[_type == "post" && slug.current == $id][0]`,
    { id: params.id }
  );

  if (!post) return notFound();

  return <BlogPageClient blog={post} />;
}
