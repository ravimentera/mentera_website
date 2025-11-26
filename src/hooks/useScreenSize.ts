import { useEffect, useState } from "react";

export type ScreenSize = "mobile" | "tablet" | "desktop";

export interface UseScreenSizeReturn {
  screenSize: ScreenSize;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
}

/**
 * Custom hook to detect screen size (mobile, tablet, desktop)
 * Based on Tailwind breakpoints:
 * - Mobile: < 640px (sm)
 * - Tablet: >= 640px and < 1024px (sm to lg)
 * - Desktop: >= 1024px (lg)
 */
export const useScreenSize = (): UseScreenSizeReturn => {
  const [screenSize, setScreenSize] = useState<ScreenSize>("desktop");
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const updateScreenSize = () => {
      const windowWidth = window.innerWidth;
      setWidth(windowWidth);

      if (windowWidth < 640) {
        // Mobile: < 640px
        setScreenSize("mobile");
      } else if (windowWidth < 1024) {
        // Tablet: >= 640px and < 1024px
        setScreenSize("tablet");
      } else {
        // Desktop: >= 1024px
        setScreenSize("desktop");
      }
    };

    // Set initial value
    updateScreenSize();

    // Add event listener
    window.addEventListener("resize", updateScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return {
    screenSize,
    isMobile: screenSize === "mobile",
    isTablet: screenSize === "tablet",
    isDesktop: screenSize === "desktop",
    width,
  };
};

