

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const AnimatedSection = ({
  children,
  className = "",
  y = 60,
  duration = 1.2,
  stagger = 0.12,
  once = true,
}) => {
  const ref = useRef(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      // Reduced motion: leave everything visible
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const items = Array.from(el.querySelectorAll("[data-reveal]"));
      const targets = items.length ? items : [el];

      gsap.set(targets, { y, autoAlpha: 0 });

      const io = new IntersectionObserver(
        (entries) => {
          const entering = entries
            .filter((e) => e.isIntersecting)
            .map((e) => e.target);

          if (!entering.length) return;

          if (once) entering.forEach((t) => io.unobserve(t));

          gsap.to(entering, {
            y: 0,
            autoAlpha: 1,
            duration,
            stagger,
            ease: "power3.out",
            force3D: true,
            overwrite: true,
            clearProps: "transform",
          });
        },
        // fires when the element is 8% inside the bottom of the screen
        { rootMargin: "0px 0px -8% 0px", threshold: 0 }
      );

      targets.forEach((t) => io.observe(t));

      return () => io.disconnect();
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