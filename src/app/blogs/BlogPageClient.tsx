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
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactUs from "../../components/ContactUs";
import Image from "next/image";
import { SanityBlogPost, urlFor } from "@/lib/sanity";



export default function BlogPageClient({ blog }: { blog: SanityBlogPost }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const shareArticle = async () => {
    const shareData = {
      title: blog.title,
      text: blog.excerpt,
      url: window.location.href,
    };
    console.log('🔍 SITE LOADED - VERSION 3.0')
    console.log('🔍 Window location:', window.location.href)

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        // You could add a toast notification here
        console.log('URL copied to clipboard');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar setIsOpen={setIsOpen} />
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}

      <main className="max-w-4xl mx-auto px-6 py-20">
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="bg-blue-100 inline-block px-4 py-1 rounded-full text-sm font-medium text-blue-800 mb-4">
          {blog.category}
        </div>

        <h1 className="text-4xl font-bold mb-6 leading-tight">{blog.title}</h1>

        <div className="flex items-center text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-2 mr-6">
            <Calendar className="w-4 h-4" />
            {new Date(blog.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {blog.readTime}
          </div>
        </div>

        {blog.mainImage && (
          <div className="relative mb-8">
            <Image
              src={urlFor(blog.mainImage).width(800).height(400).url()}
              alt={blog.title}
              width={800}
              height={400}
              className="rounded-xl w-full object-cover max-h-[400px]"
              priority
            />
          </div>
        )}

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
          <p className="text-gray-700 font-medium leading-relaxed">
            {blog.introText}
          </p>
        </div>

        {blog.tags && blog.tags.length > 0 && (
          <div className="mb-8">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm mr-2 mb-2"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          {blog.sections?.map((section, i) => (
            <section key={i} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                {section.subtitle}
              </h2>
              
              {section.contentType === 'list' && section.listContent ? (
                <div className="space-y-4">
                  {section.listContent.map((item, j) => (
                    <div key={j} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {item.label}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.textContent}
                </div>
              )}
              
              {section.sectionImage && (
                <div className="my-8">
                  <Image
                    src={urlFor(section.sectionImage).width(800).height(400).url()}
                    alt={`Image for ${section.subtitle}`}
                    width={800}
                    height={400}
                    className="rounded-xl w-full object-cover max-h-[400px]"
                  />
                </div>
              )}
              
              {section.sectionVideo && (
                <div className="my-8">
                  <video
                    src={section.sectionVideo}
                    className="rounded-xl w-full"
                    controls
                    preload="metadata"
                  />
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/blogs"
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Posts
          </Link>
          <button
            onClick={shareArticle}
            className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2 transition-colors"
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