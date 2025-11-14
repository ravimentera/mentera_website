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

const defaultParticles: ParticleConfig[] = [
  {
    color: "#6EF1BB",
    opacity: 0.2,
    size: 691,
    blur: 108,
    position: { top: "0", right: "0" },
    transform: { x: 0, y: -0.3 }
  },
  {
    color: "#8F03A0", 
    opacity: 0.2,
    size: 691,
    blur: 108,
    position: { top: "389px", right: "0" },
    transform: { x: 0.24, y: -0.15 }
  },
  {
    color: "#abeed2",
    opacity: 0.1,
    size: 691,
    blur: 100,
    position: { top: "498px", left: "537px" },
    transform: { x: -0.18, y: -0.24 }
  },
  {
    color: "#bc5ac7",
    opacity: 0.2,
    size: 500,
    blur: 108,
    position: { top: "300px", right: "0" },
    transform: { x: 0.12, y: -0.27 }
  },
  {
    color: "#6EF1BB",
    opacity: 0.25,
    size: 500,
    blur: 108,
    position: { top: "450px", right: "400px" },
    transform: { x: -0.21, y: -0.18 }
  },
  {
    color: "#a1f1d0",
    opacity: 0.15,
    size: 600,
    blur: 120,
    position: { bottom: "100px", left: "100px" },
    transform: { x: 0.27, y: 0.12 }
  },
  {
    color: "#aa3db6",
    opacity: 0.15,
    size: 400,
    blur: 90,
    position: { top: "150px", left: "200px" },
    transform: { x: -0.24, y: 0.21 }
  }
];

export const CustomParticleBackground = ({ 
  particles = defaultParticles, 
  className = "fixed inset-0 -z-10"
}: CustomParticleBackgroundProps) => {
  const [scrollY, setScrollY] = useState(0);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      if (Math.abs(window.scrollY - scrollY) > 5) {
        setScrollY(window.scrollY);
      }
    };

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

  const getPositionStyles = (position: ParticleConfig['position']) => {
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
            transform: `translate3d(${scrollY * particle.transform.x}px, ${scrollY * particle.transform.y}px, 0) ${index === 0 || index === 2 || index === 3 || index === 6 ? 'scale(-1, 1)' : ''}`,
            ...getPositionStyles(particle.position)
          }}
        />
      ))}
    </div>
  );
};
