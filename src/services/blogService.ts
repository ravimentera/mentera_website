import { BlogPost } from "@/data/blogPosts";
import { client, previewClient } from "@/lib/contentful";
import { Document } from "@contentful/rich-text-types";
import { EntrySkeletonType } from "contentful";

export interface ContentfulBlogFields extends EntrySkeletonType {
  contentTypeId: "blogPost";
  fields: {
    title: { "en-US": string } | string;
    slug: { "en-US": string } | string;
    category:
      | { "en-US": "Guides" | "Industry" | "Company" }
      | "Guides"
      | "Industry"
      | "Company";
    date: { "en-US": string } | string;
    author: { "en-US": string } | string;
    image:
      | {
          "en-US": {
            sys: { id: string };
            fields: {
              file: {
                url: string;
              };
            };
          };
        }
      | {
          fields: {
            file: {
              url: string;
            };
          };
        };
    description: { "en-US": string } | string;
    content: { "en-US": Document } | Document;
  };
}

const normalizeSlug = (slug: string) => {
  if (!slug) return "";
  // Remove leading slashes and any "/blog/" or "blog/" prefix
  return slug.replace(/^\/+/, "").replace(/^blog\/+/, "");
};

/**
 * Generates a stable image path based on the entry ID.
 * This ensures that a specific blog post is always tied to the same image,
 * even as new posts are added and indices change.
 */
const getStableImage = (id: string) => {
  if (!id) return "/images/blog-medspa-01.jpg";

  // Simple deterministic hash of the ID string
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    const char = id.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }

  // Map hash to 1-10 for our med spa themed placeholder images
  const imageIndex = (Math.abs(hash) % 10) + 1;
  return `/images/blog-medspa-${imageIndex.toString().padStart(2, "0")}.jpg`;
};

export const blogService = {
  async getAllPosts(): Promise<BlogPost[]> {
    try {
      // Use previewClient by default if token is available to show draft posts
      const fetchClient = process.env.CONTENTFUL_PREVIEW_TOKEN
        ? previewClient
        : client;

      const response = await fetchClient.getEntries<any>({
        content_type: "pageBlogPost",
        order: ["-fields.publishedDate"],
        include: 2,
      });

      return response.items.map((item: any, index: number) => {
        // Try to get image from Contentful first
        let imageUrl = null;

        if (item.fields.featuredImage) {
          const imageField = item.fields.featuredImage as any;
          // Handle both localized and non-localized field formats
          if (imageField?.fields?.file?.url) {
            imageUrl = `https:${imageField.fields.file.url}`;
          } else if (imageField?.["en-US"]?.fields?.file?.url) {
            imageUrl = `https:${imageField["en-US"].fields.file.url}`;
          }
        }

        // Fallback to placeholder images if no Contentful image (cycle through 10 images)
        if (!imageUrl) {
          const placeholderIndex = (index % 10) + 1;
          imageUrl = `/images/blog-medspa-${placeholderIndex
            .toString()
            .padStart(2, "0")}.jpg`;
        }

        return {
          id: item.sys.id,
          title: item.fields.title as any,
          slug: normalizeSlug(item.fields.slug as any),
          category: "Guides",
          date: new Date(item.fields.publishedDate as any).toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          ),
          author: (item.fields.author as any)?.fields?.name || "Mentera Team",
          image: imageUrl,
          description: (item.fields.shortDescription as any) || "",
        };
      });
    } catch (error) {
      console.error("Error fetching blog posts from Contentful:", error);
      return [];
    }
  },

  async getPostBySlug(slug: string) {
    try {
      const fetchClient = process.env.CONTENTFUL_PREVIEW_TOKEN
        ? previewClient
        : client;
      const cleanTargetSlug = normalizeSlug(slug);

      // Fetch entries to find the match
      const response = await fetchClient.getEntries<any>({
        content_type: "pageBlogPost",
        include: 2,
      });

      // Find the item manually to handle inconsistent slug formats in Contentful
      const item = response.items.find(
        (entry: any) =>
          normalizeSlug(entry.fields.slug as any) === cleanTargetSlug
      );

      if (!item) return null;

      // Try to get image from Contentful first
      let imageUrl = null;

      if (item.fields.featuredImage) {
        const imageField = item.fields.featuredImage as any;
        // Handle both localized and non-localized field formats
        if (imageField?.fields?.file?.url) {
          imageUrl = `https:${imageField.fields.file.url}`;
        } else if (imageField?.["en-US"]?.fields?.file?.url) {
          imageUrl = `https:${imageField["en-US"].fields.file.url}`;
        }
      }

      // Fallback to a placeholder image if no Contentful image
      if (!imageUrl) {
        // Use a stable hash-based approach for single posts
        imageUrl = getStableImage(item.sys.id);
      }

      return {
        id: item.sys.id,
        title: item.fields.title as any,
        slug: normalizeSlug(item.fields.slug as any),
        category: "Guides" as const,
        date: new Date(item.fields.publishedDate as any).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        ),
        author: (item.fields.author as any)?.fields?.name || "Mentera Team",
        image: imageUrl,
        description: (item.fields.shortDescription as any) || "",
        content: item.fields.content as any,
      };
    } catch (error) {
      console.error(`Error fetching post with slug ${slug}:`, error);
      return null;
    }
  },
};
