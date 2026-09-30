import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RoomAbout = ({ room }) => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      tl.from(".about-label", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".about-heading",
          {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .from(
          ".about-text",
          {
            y: 35,
            opacity: 0,
            duration: 0.7,
            stagger: 0.18,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .from(
          ".stat-card",
          {
            y: 35,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [room]);

  const stats = [
    { value: room.stats.rooms, label: "Rooms in this Category" },
    { value: room.stats.size, label: "Room Size" },
    { value: room.stats.occupancy, label: "Maximum Occupancy" },
    { value: room.stats.view, label: "Signature View" },
  ];

  return (
    <section ref={sectionRef} className="bg-[#F4F0E8] py-28 md:py-36">
      <div className="mx-auto max-w-[1780px] px-6 md:px-[30px]">
        {/* Heading */}
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="about-label mb-4 font-[Inter] text-[12px] uppercase tracking-[0.28em] text-[#A68652]">
              About This Category
            </p>

            <h2 className="about-heading font-[Cormorant_Garamond] text-[52px] font-medium leading-[0.96] tracking-[-0.03em] text-[#26180F] md:text-[72px]">
              {room.about.heading}
            </h2>
          </div>

          <div className="space-y-7 text-[#514941]">
            {room.about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="about-text font-[Inter] text-[17px] leading-[1.9]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 gap-x-10 gap-y-12 border-t border-[#D8D1C6] pt-16 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="stat-card">
              <h3 className="font-[Cormorant_Garamond] text-[44px] font-medium leading-none tracking-[-0.03em] text-[#26180F] md:text-[54px]">
                {item.value}
              </h3>

              <div className="mt-5 h-px w-full bg-[#D8D1C6]" />

              <p className="mt-5 font-[Inter] text-[13px] uppercase tracking-[0.18em] text-[#6F665E]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomAbout;