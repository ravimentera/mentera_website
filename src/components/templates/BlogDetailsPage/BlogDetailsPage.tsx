"use client";

import { Footer } from "@/components/organisms/Footer/Footer";
import { BlogPost } from "@/data/blogPosts";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { motion } from "framer-motion";
import Link from "next/link";

interface BlogDetailsPageProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export const BlogDetailsPage = ({
  post,
  relatedPosts,
}: BlogDetailsPageProps) => {
  return (
    <main className="bg-white min-h-screen pt-24 sm:pt-28 md:pt-32 font-satoshi">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          {/* Category Tag - Hidden for now */}
          {/* <div className="mb-6 sm:mb-8">
            <span
              className={`inline-block px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase ${
                post.category === "Guides"
                  ? "bg-blog-guides-bg text-blog-guides-text"
                  : post.category === "Industry"
                  ? "bg-blog-industry-bg text-blog-industry-text"
                  : "bg-blog-company-bg text-blog-company-text"
              }`}
            >
              {post.category}
            </span>
          </div> */}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-zinc-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center text-sm text-zinc-500 font-medium">
            <span>By {post.author}</span>
            <span className="mx-3">•</span>
            <span>{post.date}</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-zinc-600 prose-headings:font-medium prose-headings:text-zinc-900 prose-p:leading-relaxed prose-li:marker:text-zinc-400">
          {post.content && typeof post.content !== "string"
            ? documentToReactComponents(post.content as Document)
            : post.content && (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              )}
        </div>
      </article>

      {/* Keep Reading Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-zinc-900 mb-12">
            Keep Reading
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <Link
                href={`/blog/${relatedPost.slug}`}
                key={relatedPost.id}
                className="block group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                >
                  <div className="aspect-blog relative overflow-hidden rounded-xl bg-gray-100 mb-4">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex flex-col flex-grow">
                    {/* Category Tag - Hidden for now */}
                    {/* <div className="mb-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase ${
                          relatedPost.category === "Guides"
                            ? "bg-blog-guides-bg text-blog-guides-text"
                            : relatedPost.category === "Industry"
                            ? "bg-blog-industry-bg text-blog-industry-text"
                            : "bg-blog-company-bg text-blog-company-text"
                        }`}
                      >
                        {relatedPost.category}
                      </span>
                    </div> */}

                    <h3 className="text-xl font-medium text-zinc-900 mb-3 line-clamp-2 group-hover:text-purple transition-colors">
                      {relatedPost.title}
                    </h3>

                    <div className="mt-auto pt-2 flex items-center text-xs text-zinc-500 font-medium">
                      <span>{relatedPost.date}</span>
                      {/* <span className="mx-2">•</span>
                      <span>By {relatedPost.author}</span> */}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};
