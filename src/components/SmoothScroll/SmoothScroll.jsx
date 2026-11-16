import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // lower = smoother/slower (0.05–0.12 is the sweet spot)
      smoothWheel: true,
    });

    window.lenis = lenis; // so pages can call lenis.scrollTo(0, { immediate: true })

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return null;
};

export default SmoothScroll;