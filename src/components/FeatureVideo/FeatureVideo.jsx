// components/FeatureVideo/FeatureVideo.jsx
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureVideo = () => {
  const sectionRef = useRef(null);
  const sceneRef = useRef(null);
  const revealRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(revealRef.current, { yPercent: 100 });

      gsap.to(revealRef.current, {
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: sceneRef.current,
          anticipatePin: 1,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[200vh]">
      <div ref={sceneRef} className="relative h-screen w-full overflow-hidden">
        <video
          src="/videos/villa-feature.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-x-0 bottom-[15vh] z-10 px-6 text-center md:px-[10vw]">
          <h2 className="text-[8vw] leading-[0.95] tracking-[-0.04em] text-[#f4f4ea] md:text-[3.2vw]">
            Discover the exceptional features that make our villa truly unforgettable
          </h2>
        </div>

        {/* whatever section should slide up next — pass as children or import directly */}
        <div ref={revealRef} className="absolute inset-0 z-20">
          <Amenities />
        </div>
      </div>
    </section>
  );
};

export default FeatureVideo;