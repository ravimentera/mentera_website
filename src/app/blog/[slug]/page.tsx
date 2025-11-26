import { BlogDetailsPage } from "@/components/templates/BlogDetailsPage/BlogDetailsPage";
import { blogPosts } from "@/data/blogPosts";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.content
      ? post.content.substring(0, 160).replace(/<[^>]*>?/gm, "")
      : `Read ${post.title} on Mentera Blog.`,
    openGraph: {
      title: post.title,
      description: post.content
        ? post.content.substring(0, 160).replace(/<[^>]*>?/gm, "")
        : `Read ${post.title} on Mentera Blog.`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function Page({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Get 3 random related posts (excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Mentera",
      logo: {
        "@type": "ImageObject",
        url: "https://mentera.ai/flogo.svg",
      },
    },
    description: post.content
      ? post.content.substring(0, 160).replace(/<[^>]*>?/gm, "")
      : `Read ${post.title} on Mentera Blog.`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogDetailsPage post={post} relatedPosts={relatedPosts} />
    </>
  );
}
