import { useEffect, useState } from "react";

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<
    "xs" | "sm" | "xsm" | "md" | "lg" | "xl" | "2xl"
  >("xs");

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= 1536) setBreakpoint("2xl");
      else if (width >= 1280) setBreakpoint("xl");
      else if (width >= 1024) setBreakpoint("lg");
      else if (width >= 768) setBreakpoint("md");
      else if (width >= 640) setBreakpoint("sm");
      else if (width >= 430) setBreakpoint("xsm");
      else setBreakpoint("xs");
    };

    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);
    return () => window.removeEventListener("resize", checkBreakpoint);
  }, []);

  return breakpoint;
};
