// src/pages/SingleBlog.tsx
"use client"
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Avatar,
  Chip,
  Divider,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { useParams } from "next/navigation"; // or get it from the `params` prop
import Link from "next/link"; // built-in
import { useRouter } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
} from "lucide-react";
import BlogSidebar from "../../../components/BlogSidebar";
import { blogData } from "../blogData";
import Footer from "../../../components/Footer";
import ContactUs from "../../../components/ContactUs";
import Navbar from "@/components/Navbar";

export default function BlogPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;
  const [isOpen, setIsOpen] = useState(false);

  const blog = blogData[Number(id)];

  const [shareSnackbar, setShareSnackbar] = useState(false);
  const [bookmarkSnackbar, setBookmarkSnackbar] = useState(false);

  useEffect(() => {
    if (!blog) {
      // Redirect or handle not found
    }
  }, [blog]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
        <div>
          <div className="text-5xl mb-4">📝</div>
          <h2 className="text-xl font-semibold text-red-500 mb-2">
            Blog post not found.
          </h2>
          <Link href="/blog" className="text-blue-600 underline">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  const shareArticle = () => {
    const shareData = {
      title: blog.title,
      text: blog.excerpt,
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else {
      navigator.clipboard.writeText(shareData.url).then(() => {
        setShareSnackbar(true);
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar setIsOpen={setIsOpen} />
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}

      <main className="max-w-4xl mx-auto px-6 py-20">
      <button
  onClick={() => router.back()}
  className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-800 cursor-pointer"
>

          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="bg-blue-100 inline-block px-4 py-1 rounded-full text-sm font-medium text-blue-800 mb-4">
          {blog.category}
        </div>

        <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

        <div className="flex items-center text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-2 mr-6">
            <Calendar className="w-4 h-4" />
            {new Date(blog.date).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {blog.readTime}
          </div>
        </div>

        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="rounded-xl mb-8 w-full max-h-[400px] object-cover"
          />
        )}

        <p className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 text-gray-700 font-medium">
          {blog.introText}
        </p>

        <div className="mb-6">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs mr-2"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="prose prose-lg max-w-none">
          {blog.sections.map((section, i) => (
            <section key={i} className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{section.subtitle}</h2>
              {Array.isArray(section.content) ? (
                <ul className="list-disc pl-5">
                  {section.content.map((item, j) => (
                    <li key={j} className="mb-2">
                      <strong>{item.label}:</strong> {item.text}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 whitespace-pre-line">
                  {section.content}
                </p>
              )}
              {section.image && (
                <img
                  src={section.image}
                  className="rounded-xl my-6 max-h-[400px] object-cover"
                />
              )}
              {section.video && (
                <video
                  src={section.video}
                  className="rounded-xl my-6 w-full"
                  controls
                />
              )}
            </section>
          ))}
        </div>

        <div className="flex justify-between items-center mt-12 border-t pt-6">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            All Posts
          </Link>
          <button
            onClick={shareArticle}
            className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>
      </main>

      <Footer setIsOpen={setIsOpen} />
    </div>
  );
}