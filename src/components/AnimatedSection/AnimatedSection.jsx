// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// /*
// --------------------------------------------------
// ANIMATED SECTION
// --------------------------------------------------
// Wraps any section/component and eases it upward
// into place — slow, heavily-decelerating, "settles
// into position" feel rather than a quick snap.

// Props:
// - y          how far below (px) it starts, default 50
// - scale      starting scale, default 0.98 (adds depth,
//              makes the motion read as smooth rather than
//              a flat block sliding)
// - duration   animation duration in seconds, default 1.6
//              (longer = softer/buttery, shorter = snappier)
// - delay      delay before it starts, default 0
// - start      ScrollTrigger start position, default "top 88%"
// - once       if true, animation plays only the first time
//              (default false — it replays each time you scroll
//              back up to it, like most professional sites)
// --------------------------------------------------
// */
// const AnimatedSection = ({
//   children,
//   className = "",
//   y = 50,
//   scale = 0.98,
//   duration = 1.6,
//   delay = 0,
//   start = "top 88%",
//   once = false,
// }) => {
//   const sectionRef = useRef(null);

//   useGSAP(
//     () => {
//       const el = sectionRef.current;
//       if (!el) return;

//       // GPU-accelerated, avoids janky/flat-looking transforms
//       gsap.set(el, {
//         willChange: "transform, opacity",
//         force3D: true,
//         transformPerspective: 800,
//       });

//       gsap.fromTo(
//         el,
//         { autoAlpha: 0, y, scale },
//         {
//           autoAlpha: 1,
//           y: 0,
//           scale: 1,
//           duration,
//           delay,
//           // strong, long deceleration curve = the "butter" feel
//           ease: "power4.out",
//           overwrite: "auto",
//           scrollTrigger: {
//             trigger: el,
//             start,
//             toggleActions: once
//               ? "play none none none"
//               : "play none none reverse",
//           },
//         }
//       );
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <div ref={sectionRef} className={className}>
//       {children}
//     </div>
//   );
// };

// export default AnimatedSection;

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AnimatedSection = ({
  children,
  className = "",
  y = 60,
  duration = 1.4,
  stagger = 0.12,
  start = "top 85%",
  once = true,
}) => {
  const ref = useRef(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const items = el.querySelectorAll("[data-reveal]");
      const targets = items.length ? items : el;

      gsap.set(targets, { y, autoAlpha: 0 });

      gsap.to(targets, {
        y: 0,
        autoAlpha: 1,
        duration,
        stagger: items.length ? stagger : 0,
        ease: "power3.out",
        force3D: true,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: once
            ? "play none none none"
            : "play none none reverse",
        },
      });

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      return () => window.removeEventListener("load", refresh);
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default AnimatedSection;