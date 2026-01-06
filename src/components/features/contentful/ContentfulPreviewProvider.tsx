"use client";

import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";

interface ContentfulPreviewProviderProps {
  children: React.ReactNode;
  enableInspectorMode?: boolean;
  enableLiveUpdates?: boolean;
}

export function ContentfulPreviewProvider({
  children,
  enableInspectorMode = false,
  enableLiveUpdates = false,
}: ContentfulPreviewProviderProps) {
  return (
    <ContentfulLivePreviewProvider
      locale="en-US"
      enableInspectorMode={enableInspectorMode}
      enableLiveUpdates={enableLiveUpdates}
    >
      {children}
    </ContentfulLivePreviewProvider>
  );
}
