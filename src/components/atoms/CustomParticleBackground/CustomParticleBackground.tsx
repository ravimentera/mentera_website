"use client";

import { useEffect, useRef, useState } from "react";

interface ParticleConfig {
  color: string;
  opacity: number;
  size: number;
  blur: number;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  transform: {
    x: number;
    y: number;
  };
}

interface CustomParticleBackgroundProps {
  particles?: ParticleConfig[];
  className?: string;
}

// Note: Colors are defined as hex strings for use in inline styles
// These correspond to Tailwind config colors: secondary, purple-500, teal-200, purple-particleAlt, etc.
const defaultParticles: ParticleConfig[] = [
  {
    color: "#6EF1BB", // secondary.DEFAULT
    opacity: 0.2,
    size: 691,
    blur: 108,
    position: { top: "0", right: "0" },
    transform: { x: 0, y: -0.3 },
  },
  {
    color: "#8F03A0", // purple-500
    opacity: 0.05,
    size: 691,
    blur: 108,
    position: { top: "24.3125rem", right: "0" },
    transform: { x: 0.24, y: -0.15 },
  },
  {
    color: "#abeed2", // teal-200
    opacity: 0.1,
    size: 691,
    blur: 100,
    position: { top: "31.125rem", left: "33.5625rem" },
    transform: { x: -0.18, y: -0.24 },
  },
  {
    color: "#bc5ac7", // purple-particleAlt
    opacity: 0.2,
    size: 500,
    blur: 108,
    position: { top: "18.75rem", right: "0" },
    transform: { x: 0.12, y: -0.27 },
  },
  {
    color: "#6EF1BB", // secondary.DEFAULT
    opacity: 0.25,
    size: 500,
    blur: 108,
    position: { top: "28.125rem", right: "25rem" },
    transform: { x: -0.21, y: -0.18 },
  },
  {
    color: "#a1f1d0", // teal-300
    opacity: 0.15,
    size: 600,
    blur: 120,
    position: { bottom: "6.25rem", left: "6.25rem" },
    transform: { x: 0.27, y: 0.12 },
  },
  {
    color: "#aa3db6", // purple-particleAlt2
    opacity: 0.15,
    size: 400,
    blur: 90,
    position: { top: "9.375rem", left: "12.5rem" },
    transform: { x: -0.24, y: 0.21 },
  },
];

export const CustomParticleBackground = ({
  particles = defaultParticles,
  className = "fixed inset-0 -z-10",
}: CustomParticleBackgroundProps) => {
  const [scrollY, setScrollY] = useState(0);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  useEffect(() => {
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const newScrollY = window.scrollY;
          // Only update if change is significant (throttle updates)
          if (Math.abs(newScrollY - scrollY) > 5) {
            setScrollY(newScrollY);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    return () => window.removeEventListener("scroll", scrollListener);
  }, [scrollY]);

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

  const getPositionStyles = (position: ParticleConfig["position"]) => {
    const styles: Record<string, string> = {};
    if (position.top) styles.top = position.top;
    if (position.bottom) styles.bottom = position.bottom;
    if (position.left) styles.left = position.left;
    if (position.right) styles.right = position.right;
    return styles;
  };

  return (
    <div className={`${className} overflow-hidden pointer-events-none`}>
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute rounded-full will-change-transform"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `linear-gradient(to left, ${particle.color}, transparent)`,
            opacity: particle.opacity,
            filter: `blur(${particle.blur}px)`,
            transform: `translate3d(${scrollY * particle.transform.x}px, ${
              scrollY * particle.transform.y
            }px, 0) ${
              index === 0 || index === 2 || index === 3 || index === 6
                ? "scale(-1, 1)"
                : ""
            }`,
            ...getPositionStyles(particle.position),
          }}
        />
      ))}
    </div>
  );
};
