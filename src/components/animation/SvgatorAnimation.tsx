// "use client";

// import { useEffect, useRef } from "react";

// const SvgatorAnimation = () => {
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const objectRef = useRef<HTMLObjectElement>(null);
//   let observer: IntersectionObserver;

//   useEffect(() => {
//     const svgWrapper = wrapperRef.current;
//     const svgObject = objectRef.current;

//     if (!svgWrapper || !svgObject) return;

//     observer = new IntersectionObserver(
//       ([entry]) => {
//         const svgDoc = svgObject.contentDocument;

//         if (!svgDoc) return;

//         const player =
//           svgDoc?.defaultView?.SVGatorPlayer || svgDoc?.defaultView?.player;

//         if (entry.isIntersecting) {
//           player?.play?.(true); // play from start
//         } else {
//           player?.goToAndStop?.(0, true); // reset
//         }
//       },
//       {
//         threshold: 0.5,
//       }
//     );

//     observer.observe(svgWrapper);

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <div ref={wrapperRef} className="w-full max-w-xl mx-auto">
//       <object
//         ref={objectRef}
//         type="image/svg+xml"
//         data="/animations/Animation.svg"
//         className="w-full"
//       />
//     </div>
//   );
// };

// export default SvgatorAnimation;

// "use client";

// import { useEffect, useRef } from "react";

// const SvgatorAnimation = () => {
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const objectRef = useRef<HTMLObjectElement>(null);

//   useEffect(() => {
//     const svgWrapper = wrapperRef.current;
//     const svgObject = objectRef.current;

//     if (!svgWrapper || !svgObject) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         const svgDoc = svgObject.contentDocument;
//         if (!svgDoc) return;

//         const player =
//           svgDoc?.defaultView?.SVGatorPlayer || svgDoc?.defaultView?.player;

//         if (!player) return;

//         if (entry.isIntersecting) {
//           // Play from beginning
//           player?.goToAndStop?.(0, true);
//           setTimeout(() => {
//             player?.play?.(true);
//           }, 100);
//         } else {
//           // Reset if out of view
//           player?.goToAndStop?.(0, true);
//         }
//       },
//       {
//         threshold: 0.5,
//       }
//     );

//     svgObject.addEventListener("load", () => {
//       const svgDoc = svgObject.contentDocument;
//       const player =
//         svgDoc?.defaultView?.SVGatorPlayer || svgDoc?.defaultView?.player;

//       if (player) {
//         player.goToAndStop?.(0, true); // ensure it's paused on load
//         observer.observe(svgWrapper);
//       }
//     });
//   }, []);

//   return (
//     <div ref={wrapperRef} className="w-full max-w-xl mx-auto">
//       <object
//         ref={objectRef}
//         type="image/svg+xml"
//         data="/animations/IntelligentAnimation.svg"
//         className="w-full"
//       />
//     </div>
//   );
// };

// export default SvgatorAnimation;

// "use client";

// import { useEffect, useRef } from "react";

// const SvgatorAnimation = () => {
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const objectRef = useRef<HTMLObjectElement>(null);

//   useEffect(() => {
//     const wrapper = wrapperRef.current;
//     const obj = objectRef.current;

//     console.log("🚀 wrapper and obj refs:", { wrapper, obj });

//     if (!wrapper || !obj) return;

//     const handleLoad = () => {
//       console.log("✅ handleLoad called");

//       const svgDoc = obj.contentDocument;
//       if (!svgDoc) {
//         console.warn("⚠️ SVG not fully loaded yet");
//         return;
//       }

//       const SVGatorPlayer = svgDoc.defaultView?.__SVGATOR_PLAYER__;
//       console.log("🎯 SVGatorPlayer:", SVGatorPlayer);

//       if (!SVGatorPlayer) {
//         console.warn("⚠️ SVGator player not found");
//         return;
//       }

//       const player = SVGatorPlayer["91c80d77"];
//       console.log("🎬 Player instance:", player);

//       if (!player || typeof player.ready !== "function") {
//         console.warn("⚠️ Player not ready or missing .ready()");
//         return;
//       }

//       player.ready(() => {
//         console.log("🔥 Player ready");

//         player.goToAndStop(0, true);

//         const observer = new IntersectionObserver(
//           ([entry]) => {
//             console.log("👁️ Intersection entry:", entry);

//             if (entry.isIntersecting) {
//               console.log("▶️ In view: playing animation");
//               player.goToAndStop(0, true);
//               player.play();
//             } else {
//               console.log("⏹️ Out of view: resetting animation");
//               player.goToAndStop(0, true);
//             }
//           },
//           { threshold: 0.5 }
//         );

//         observer.observe(wrapper);
//       });
//     };

//     // 👇 Fallback for fast load
//     if (obj.contentDocument) {
//       console.log(
//         "⚡ contentDocument already loaded, calling handleLoad directly"
//       );
//       handleLoad();
//     } else {
//       console.log("🕒 Waiting for load event on <object>");
//       obj.addEventListener("load", handleLoad);
//     }

//     return () => {
//       obj.removeEventListener("load", handleLoad);
//     };
//   }, []);

//   return (
//     <div ref={wrapperRef} className="w-full max-w-xl mx-auto">
//       <object
//         ref={objectRef}
//         type="image/svg+xml"
//         data="/animations/IntelligentAnimation.svg"
//         className="w-full h-auto"
//         aria-label="Animated Graphic"
//       />
//     </div>
//   );
// };

// export default SvgatorAnimation;

"use client";

import { useEffect, useRef } from "react";

const SvgatorAnimation = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const objectRef = useRef<HTMLObjectElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const obj = objectRef.current;
    if (!wrapper || !obj) return;

    const onLoad = () => {
      const svgDoc = obj.contentDocument;
      if (!svgDoc) return console.warn("SVG not loaded");

      const svgEl = svgDoc.getElementById("eS5U3aFYpZ81") as any;
      if (!svgEl) return console.warn("SVG root not found");

      const stub = svgEl.svgatorPlayer;
      if (!stub || typeof stub.ready !== "function")
        return console.warn("svgatorPlayer.ready() missing");

      stub.ready((player: any) => {
        // 1️⃣ Sit on frame 0
        player.seekTo(0);

        // 2️⃣ Set up scroll observer
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              // ▶️ Play from start
              player.restart();
            } else {
              // 🔄 Rewind
              player.seekTo(0);
            }
          },
          { threshold: 0.5 }
        );
        obs.observe(wrapper);
      });
    };

    // attach or fire immediately if loaded
    if (obj.contentDocument) {
      onLoad();
    } else {
      obj.addEventListener("load", onLoad);
    }
    return () => obj.removeEventListener("load", onLoad);
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
