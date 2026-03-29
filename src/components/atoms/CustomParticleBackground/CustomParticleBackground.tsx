"use client";

import { useCallback, useEffect, useRef } from "react";

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

const defaultParticles: ParticleConfig[] = [
  // Top section
  {
    color: "#6EF1BB",
    opacity: 0.2,
    size: 691,
    blur: 108,
    position: { top: "0", right: "0" },
    transform: { x: 0, y: -0.3 },
  },
  {
    color: "#bc5ac7",
    opacity: 0.2,
    size: 500,
    blur: 108,
    position: { top: "18.75rem", right: "0" },
    transform: { x: 0.12, y: -0.27 },
  },
  {
    color: "#6EF1BB",
    opacity: 0.25,
    size: 500,
    blur: 108,
    position: { top: "28.125rem", right: "25rem" },
    transform: { x: -0.21, y: -0.18 },
  },
  {
    color: "#aa3db6",
    opacity: 0.15,
    size: 400,
    blur: 90,
    position: { top: "9.375rem", left: "12.5rem" },
    transform: { x: -0.24, y: 0.21 },
  },
  // Middle section
  {
    color: "#6EF1BB",
    opacity: 0.18,
    size: 650,
    blur: 110,
    position: { top: "75rem", right: "10rem" },
    transform: { x: -0.15, y: 0.2 },
  },
  {
    color: "#abeed2",
    opacity: 0.12,
    size: 600,
    blur: 105,
    position: { top: "110rem", right: "20rem" },
    transform: { x: -0.2, y: 0.15 },
  },
  // Lower section
  {
    color: "#a1f1d0",
    opacity: 0.2,
    size: 700,
    blur: 115,
    position: { top: "150rem", right: "5rem" },
    transform: { x: -0.25, y: 0.12 },
  },
  {
    color: "#8F03A0",
    opacity: 0.1,
    size: 580,
    blur: 102,
    position: { top: "190rem", right: "15rem" },
    transform: { x: -0.17, y: 0.19 },
  },
];

export const CustomParticleBackground = ({
  particles = defaultParticles,
  className = "fixed inset-0 -z-10",
}: CustomParticleBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particleRefs = useRef<(HTMLDivElement | null)[]>([]);

  const applyTransforms = useCallback(
    (scrollY: number) => {
      particles.forEach((particle, index) => {
        const el = particleRefs.current[index];
        if (!el) return;
        const tx = scrollY * particle.transform.x;
        const ty = scrollY * particle.transform.y;
        const flip = index % 3 === 0 ? " scale(-1, 1)" : "";
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0)${flip}`;
      });
    },
    [particles]
  );

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          applyTransforms(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    applyTransforms(window.scrollY);
    return () => window.removeEventListener("scroll", onScroll);
  }, [applyTransforms]);

  const getPositionStyles = (position: ParticleConfig["position"]) => {
    const styles: Record<string, string> = {};
    if (position.top) styles.top = position.top;
    if (position.bottom) styles.bottom = position.bottom;
    if (position.left) styles.left = position.left;
    if (position.right) styles.right = position.right;
    return styles;
  };

  return (
    <div
      ref={containerRef}
      className={`${className} overflow-hidden pointer-events-none`}
    >
      {particles.map((particle, index) => (
        <div
          key={index}
          ref={(el) => {
            particleRefs.current[index] = el;
          }}
          className="absolute rounded-full will-change-transform"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `linear-gradient(to left, ${particle.color}, transparent)`,
            opacity: particle.opacity,
            filter: `blur(${particle.blur}px)`,
            ...getPositionStyles(particle.position),
          }}
        />
      ))}
    </div>
  );
};
