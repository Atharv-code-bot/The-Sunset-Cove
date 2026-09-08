// src/hooks/useRevealOnScroll.js
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Generic "fade+rise in as it enters viewport" for any ref
export const useRevealOnScroll = (ref, opts = {}) => {
  useGSAP(() => {
    if (!ref.current) return;
    const targets = ref.current.querySelectorAll("[data-reveal]");
    gsap.from(targets, {
      y: opts.y ?? 60,
      opacity: 0,
      duration: opts.duration ?? 1,
      stagger: opts.stagger ?? 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  }, { scope: ref });
};