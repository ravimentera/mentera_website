import { Document } from "@contentful/rich-text-types";

export interface BlogPost {
  id: string | number;
  title: string;
  slug: string;
  category: "Guides" | "Industry" | "Company";
  date: string;
  author: string;
  image: string;
  description: string;
  content?: Document | string; // HTML content or Contentful Rich Text
}

export const blogPosts: BlogPost[] = [];
