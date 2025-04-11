// hooks/useSyncedHeight.ts
import { useEffect, useState } from "react";

export const useSyncedHeight = (ref: React.RefObject<HTMLElement>) => {
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      if (entry && entry.contentRect) {
        setHeight(entry.contentRect.height);
      }
    });

    resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect();
  }, [ref]);

  return height;
};
