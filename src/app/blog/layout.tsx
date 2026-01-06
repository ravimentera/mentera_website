import { ContentfulPreviewProvider } from "@/components/features/contentful/ContentfulPreviewProvider";
import { draftMode } from "next/headers";

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled: preview } = draftMode();

  return (
    <ContentfulPreviewProvider
      enableInspectorMode={preview}
      enableLiveUpdates={preview}
    >
      {children}
    </ContentfulPreviewProvider>
  );
}
