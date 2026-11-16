
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Hero = () => {
  const rootRef = useRef(null);
  const logoRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Skipped entirely for visitors who prefer reduced motion
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const root = rootRef.current;

        // 1. Logo rises in on page load
        gsap.fromTo(
          logoRef.current,
          { y: 150, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.8, delay: 0.3, ease: "power3.out" }
        );

        // 2. While the Welcome layer slides over the hero (scroll 0 -> hero height):
        //    the hero drifts up slightly and darkens, which adds depth.
        gsap
          .timeline({
            scrollTrigger: {
              trigger: root,
              start: 0,
              end: () => root.offsetHeight,
              scrub: true,
              invalidateOnRefresh: true,
              // Hidden once fully covered (saves rendering work)
              onLeave: () => gsap.set(root, { visibility: "hidden" }),
              onEnterBack: () => gsap.set(root, { visibility: "visible" }),
            },
          })
          .to("[data-hero-inner]", { yPercent: -8, ease: "none" }, 0)
          .to("[data-hero-dim]", { opacity: 0.55, ease: "none" }, 0);
      });

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef} className="absolute inset-0 overflow-hidden">
      <div data-hero-inner className="absolute inset-0 will-change-transform">
        {/* Hero Image */}
        <img
          src="/images/hero2.png"
          alt="The Sunset Cove"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Base dark overlay */}
        <div className="absolute inset-0 bg-[#26180f]/35" />

        {/* Extra dim that fades in as the page slides over */}
        <div
          data-hero-dim
          className="absolute inset-0 bg-[#26180f] opacity-0"
        />

        {/* LOGO */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-center pb-2">
          <img
            ref={logoRef}
            src="/images/Logo_new_bold.svg"
            alt="The Sunset Cove"
            className="h-[30svh] w-auto object-contain md:h-[44vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;