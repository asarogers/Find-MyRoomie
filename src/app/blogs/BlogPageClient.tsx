// src/app/blogs/BlogPageClient.tsx
export default function BlogPageClient({ blog }: { blog: any }) {
  return (
    <article>
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-sm text-gray-500">{blog.publishedAt}</p>
      <div className="prose mt-6">{blog.body}</div>
    </article>
  );
}
