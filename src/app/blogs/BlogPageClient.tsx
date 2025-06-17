'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
import Image from "next/image";
import { BlogPost } from "./blogData";


export default function BlogPageClient({ blog }: { blog: BlogPost }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const shareArticle = () => {
    const shareData = {
      title: blog.title,
      text: blog.excerpt,
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else {
      navigator.clipboard.writeText(shareData.url);
      // Optional: add custom snackbar later
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar setIsOpen={setIsOpen} />
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}

      <main className="max-w-4xl mx-auto px-6 py-20">
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-800"
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
          <Image
            src={blog.image}
            alt={blog.title}
            width={800}
            height={400}
            className="rounded-xl mb-8 w-full object-cover max-h-[400px]"
            unoptimized
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
                <Image
                  src={section.image}
                  alt={`Image for ${section.subtitle}`}
                  width={800}
                  height={400}
                  className="rounded-xl my-6 w-full object-cover max-h-[400px]"
                  unoptimized
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
            href="/blogs"
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
