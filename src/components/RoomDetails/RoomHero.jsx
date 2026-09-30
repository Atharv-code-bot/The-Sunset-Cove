import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RoomHero = ({ room }) => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // Category label
      tl.from(titleRef.current.children[0], {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })

        // Heading
        .from(
          titleRef.current.children[1],
          {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.45"
        )

        // Description
        .from(
          textRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.35"
        );
    }, heroRef);

    return () => ctx.revert();
  }, [room]);

  return (
    <section
      ref={heroRef}
      className="bg-[#F4F0E8] px-6 pt-10 pb-16 lg:px-12 lg:pt-16 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Hero Content */}
        <div
          ref={titleRef}
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
        >
          <p className="mb-4 font-[Inter] text-[12px] uppercase tracking-[0.32em] text-[#B98B32]">
            {room.title}
          </p>

          <h1 className="font-[Cormorant] text-[56px] leading-[0.95] text-[#26180F] md:text-[88px] lg:text-[104px]">
            {room.hero.title}
          </h1>

          <p
            ref={textRef}
            className="mt-8 max-w-3xl font-[Inter] text-[17px] leading-8 text-[#514941]"
          >
            {room.hero.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoomHero;