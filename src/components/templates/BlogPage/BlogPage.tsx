"use client";

import { Footer } from "@/components/organisms/Footer/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { BlogPost } from "@/data/blogPosts";

// const categories = ["All", "Guides", "Industry", "Company"];

interface BlogPageProps {
  posts: BlogPost[];
}

export const BlogPage = ({ posts }: BlogPageProps) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <main className="relative bg-white min-h-screen pt-14 sm:pt-16 md:pt-20 lg:pt-24 font-satoshi">
      {/* Background Gradients (Consistent with other pages) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-blog-hero-gradient" />
      </div>
      <div className="absolute inset-0 opacity-60 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full opacity-40 bg-blog-blob-purple blur-huge top-[10%] left-[20%]" />
        <div className="absolute w-96 h-96 rounded-full opacity-40 bg-blog-blob-green blur-huge top-[30%] right-[20%]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-medium text-zinc-900 mb-6"
          >
            Welcome to Mentera's Blogs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto"
          >
            Stories, insights, and updates from the team shaping the future of
            patient care.
          </motion.p>

          {/* Filters - Hidden for now */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mt-8 sm:mt-10"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeCategory === category
                    ? "bg-blog-filter-active-bg border-blog-filter-active-bg text-blog-filter-active-text" // Active: Light Purple bg, Dark Purple text
                    : "bg-white border-gray-200 text-zinc-600 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div> */}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post, index) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.id}
              className="block group"
            >
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full cursor-pointer"
              >
                {/* Image */}
                <div className="aspect-blog relative overflow-hidden rounded-xl bg-gray-100 mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  {/* Category Tag - Hidden for now */}
                  {/* <div className="mb-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase ${
                        post.category === "Guides"
                          ? "bg-blog-guides-bg text-blog-guides-text" // Yellow
                          : post.category === "Industry"
                          ? "bg-blog-industry-bg text-blog-industry-text" // Green
                          : "bg-blog-company-bg text-blog-company-text" // Blue (Company)
                      }`}
                    >
                      {post.category}
                    </span>
                  </div> */}

                  {/* Title */}
                  <h3 className="text-xl font-medium text-zinc-900 mb-3 line-clamp-2 group-hover:text-purple transition-colors">
                    {post.title}
                  </h3>

                  {/* Meta */}
                  <div className="mt-auto pt-2 flex items-center text-xs text-zinc-500 font-medium">
                    <span>{post.date}</span>
                    {/* <span className="mx-2">•</span>
                    <span>By {post.author}</span> */}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
};
