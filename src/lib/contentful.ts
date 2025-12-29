import { createClient } from "contentful";

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  console.warn(
    "Contentful Space ID or Access Token is missing. Please check your .env.local file."
  );
}

export const client = createClient({
  space: spaceId || "",
  accessToken: accessToken || "",
});

export const previewClient = createClient({
  space: spaceId || "",
  accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN || "",
  host: "preview.contentful.com",
});
