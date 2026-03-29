"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface LazyLoadProps {
  children: ReactNode;
  rootMargin?: string;
  minHeight?: string;
}

export function LazyLoad({
  children,
  rootMargin = "200px",
  minHeight = "50vh",
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return <div ref={ref}>{isVisible ? children : <div style={{ minHeight }} />}</div>;
}
