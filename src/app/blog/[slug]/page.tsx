import { BlogDetailsPage } from "@/components/templates/BlogDetailsPage/BlogDetailsPage";
import { blogService } from "@/services/blogService";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 60; // Revalidate every 60 seconds

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = await blogService.getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const plainContent = (post.description as string) || "";

  return {
    title: post.title as string,
    description: plainContent,
    alternates: {
      canonical: `https://mentera.ai/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title as string,
      description: plainContent,
      images: [
        {
          url: post.image as string,
          width: 1200,
          height: 630,
          alt: post.title as string,
        },
      ],
      type: "article",
      publishedTime: post.date as string,
      authors: [post.author as string],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const post = await blogService.getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Get other posts for related section
  const allPosts = await blogService.getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
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
    description: post.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogDetailsPage post={post as any} relatedPosts={relatedPosts} />
    </>
  );
}
