"use client";

import { useEffect, useRef } from "react";

const SvgatorAnimation = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const objectRef = useRef<HTMLObjectElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const obj = objectRef.current;
    if (!wrapper || !obj) return;

    const initPlayer = () => {
      const svgDoc = obj.contentDocument;
      // if contentDocument is HTML (404) or not ready, bail early
      if (!svgDoc || !svgDoc.querySelector("svg")) {
        console.warn("SVG not ready, retrying…");
        setTimeout(initPlayer, 300); // retry in 300ms
        return;
      }

      // grab the real <svg> by its ID
      const svgEl = svgDoc.getElementById("eNczs9ftLCx1") as any; // update ID if animation is SVG file is changed or updated
      if (!svgEl || !svgEl.svgatorPlayer) {
        console.warn("↻ SVG stub not injected yet, retrying…");
        setTimeout(initPlayer, 300);
        return;
      }

      // register for the full player
      svgEl.svgatorPlayer.ready((player: any) => {
        player.seekTo(0);

        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              player.restart();
            } else {
              player.seekTo(0);
            }
          },
          { threshold: 0.5 }
        );
        obs.observe(wrapper);
      });
    };

    // once <object> has loaded any document (SVG or HTML),
    // start our retry‑aware init
    if (obj.contentDocument) {
      initPlayer();
    } else {
      obj.addEventListener("load", initPlayer);
    }

    return () => {
      obj.removeEventListener("load", initPlayer);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full max-w-xl mx-auto">
      <object
        ref={objectRef}
        type="image/svg+xml"
        data="/animations/IntelligentAnimation.svg"
        className="w-full h-auto"
        aria-label="Scroll‑triggered SVG animation"
      />
    </div>
  );
};

export default SvgatorAnimation;
