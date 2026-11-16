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
      const category = titleRef.current?.children[0];
      const heading = titleRef.current?.children[1];

      if (!category || !heading || !textRef.current) return;

      // Keep content visible by default; animate it only when the hero enters view.
      gsap.fromTo(
        [category, heading, textRef.current],
        { y: 28, opacity: 0.65 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 82%",
            once: true,
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [room]);

  return (
    <section
      ref={heroRef}
      className="bg-[#F4F0E8] px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-10 lg:px-12 lg:pb-24 lg:pt-16"
    >
      <div className="mx-auto max-w-7xl">
        <div
          ref={titleRef}
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
        >
          {/* Category label: elevated with a subtle gold treatment, without competing with the main tagline. */}
          <p className="mb-5 inline-flex max-w-full items-center justify-center rounded-full border border-[#B98B32]/40 bg-[#FDD17C]/20 px-4 py-2 font-[Inter] text-[10px] font-semibold uppercase leading-relaxed tracking-[0.22em] text-[#8D6424] shadow-[0_2px_10px_rgba(185,139,50,0.08)] sm:mb-5 sm:px-5 sm:text-[11px] sm:tracking-[0.28em] md:text-[12px]">
            {room.title}
          </p>

          {/* Keep the existing tagline style; only scale it responsively for smaller screens. */}
          <h1 className="max-w-full break-words font-[Cormorant] text-[clamp(2.45rem,8.5vw,3.5rem)] leading-[0.98] text-[#26180F] sm:text-[clamp(3.5rem,7vw,5.5rem)] lg:text-[104px] lg:leading-[0.95]">
            {room.hero.title}
          </h1>

          <p
            ref={textRef}
            className="mt-5 max-w-3xl font-[Inter] text-[14px] leading-7 text-[#514941] sm:mt-7 sm:text-[16px] sm:leading-8 lg:mt-8 lg:text-[17px]"
          >
            {room.hero.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoomHero;
