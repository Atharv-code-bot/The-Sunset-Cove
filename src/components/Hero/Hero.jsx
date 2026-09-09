import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const logoRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoRef.current,
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.8,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Hero Image */}
      <img
        src="/images/hero2.png"
        alt="The Sunset Cove"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#26180f]/35" />

      {/* LOGO - Match VillaBliss */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex justify-center items-end pb-2">
        <img
          ref={logoRef}
          src="/images/Logo_new_bold.svg"
          alt="The Sunset Cove"
          className="h-[44vh] w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;