import { BlogPage } from "@/components/templates/BlogPage/BlogPage";
import { blogService } from "@/services/blogService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Insights & Updates | Mentera",
  description:
    "Stories, insights, and updates from the Mentera team shaping the future of patient care and med spa management.",
  openGraph: {
    title: "Blog - Insights & Updates | Mentera",
    description:
      "Stories, insights, and updates from the Mentera team shaping the future of patient care and med spa management.",
  },
};

export default async function Page() {
  const posts = await blogService.getAllPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Mentera Blog",
    description:
      "Stories, insights, and updates from the Mentera team shaping the future of patient care.",
    url: "https://mentera.ai/blog",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPage posts={posts} />
    </>
  );
}
