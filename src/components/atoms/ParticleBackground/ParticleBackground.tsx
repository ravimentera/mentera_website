"use client";

import { useEffect, useRef, useState } from "react";

export const ParticleBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      // Update state only when needed to avoid unnecessary renders
      if (Math.abs(window.scrollY - scrollY) > 5) {
        setScrollY(window.scrollY);
      }
    };

    // Handle scroll with throttling
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    return () => window.removeEventListener("scroll", scrollListener);
  }, [scrollY]);

  // Parallax animation loop using requestAnimationFrame for smoother performance
  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      // Animation logic here if needed
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute top-0 right-0 w-[691px] h-[580px] bg-gradient-to-l from-[#6EF1BB] to-transparent opacity-40 rounded-full blur-[108px] will-change-transform"
        style={{
          transform: `translate3d(0, ${scrollY * -0.2}px, 0) scale(-1, 1)`,
        }}
      ></div>
      <div
        className="absolute top-[389px] right-0 w-[691px] h-[580px] bg-gradient-to-l from-[#8F03A0] to-transparent opacity-40 rounded-full blur-[108px] will-change-transform"
        style={{
          transform: `translate3d(${scrollY * 0.16}px, ${scrollY * -0.1}px, 0)`,
        }}
      ></div>
      <div
        className="absolute top-[498px] left-[537px] w-[691px] h-[580px] bg-gradient-to-l from-[#abeed2] to-transparent opacity-20 rounded-full blur-[100px] will-change-transform"
        style={{
          transform: `translate3d(${scrollY * -0.12}px, ${
            scrollY * -0.16
          }px, 0) scale(-1, 1)`,
        }}
      ></div>
      <div
        className="absolute top-[300px] right-0 w-[500px] h-[500px] bg-gradient-to-l from-[#bc5ac7] to-transparent opacity-40 rounded-full blur-[108px] will-change-transform"
        style={{
          transform: `translate3d(${scrollY * 0.08}px, ${
            scrollY * -0.18
          }px, 0) scale(-1, 1)`,
        }}
      ></div>
      <div
        className="absolute top-[450px] right-[400px] w-[500px] h-[500px] bg-gradient-to-l from-[#6EF1BB] to-transparent opacity-50 rounded-full blur-[108px] will-change-transform"
        style={{
          transform: `translate3d(${scrollY * -0.14}px, ${
            scrollY * -0.12
          }px, 0)`,
        }}
      ></div>
      <div
        className="absolute bottom-[100px] left-[100px] w-[600px] h-[600px] bg-gradient-to-r from-[#a1f1d0] to-transparent opacity-30 rounded-full blur-[120px] will-change-transform"
        style={{
          transform: `translate3d(${scrollY * 0.18}px, ${scrollY * 0.08}px, 0)`,
        }}
      ></div>
      <div
        className="absolute top-[150px] left-[200px] w-[400px] h-[400px] bg-gradient-to-tr from-[#aa3db6] to-transparent opacity-25 rounded-full blur-[90px] will-change-transform"
        style={{
          transform: `translate3d(${scrollY * -0.16}px, ${
            scrollY * 0.14
          }px, 0)`,
        }}
      ></div>
    </div>
  );
};
