import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RoomAbout = ({ room }) => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const animatedItems = sectionRef.current?.querySelectorAll(
        ".about-label, .about-heading, .about-text, .stat-card"
      );

      if (!animatedItems?.length) return;

      // Keep the content visible on first paint; animation is an enhancement only.
      gsap.fromTo(
        animatedItems,
        { y: 18, opacity: 0.7 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.06,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            once: true,
          },
        }
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
    <section
      ref={sectionRef}
      className="bg-[#F4F0E8] px-5 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1780px]">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="about-label mb-4 font-[Inter] text-[10px] uppercase tracking-[0.26em] text-[#A68652] sm:text-[12px] sm:tracking-[0.28em]">
              About This Category
            </p>
            <h2 className="about-heading font-[Cormorant_Garamond] text-[42px] font-medium leading-[0.98] tracking-[-0.03em] text-[#26180F] sm:text-[52px] md:text-[64px] lg:text-[72px]">
              {room.about.heading}
            </h2>
          </div>

          <div className="space-y-5 text-[#514941] sm:space-y-6">
            {room.about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="about-text font-[Inter] text-[14px] leading-[1.85] sm:text-[16px] sm:leading-[1.9] lg:text-[17px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* One-column stats on phones, matching the reference's stacked metrics. */}
        <div className="mt-10 border-t border-[#D8D1C6] pt-2 sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 sm:border-t-0 sm:pt-0 lg:mt-16 lg:grid-cols-4 lg:gap-x-10">
          {stats.map((item) => (
            <div
              key={item.label}
              className="stat-card border-b border-[#D8D1C6] py-5 last:border-b-0 sm:border-b-0 sm:border-t sm:py-5 lg:py-6"
            >
              <h3 className="font-[Cormorant_Garamond] text-[36px] font-medium leading-none tracking-[-0.03em] text-[#26180F] sm:text-[42px] md:text-[48px]">
                {item.value}
              </h3>
              <p className="mt-3 font-[Inter] text-[13px] leading-6 text-[#6F665E] sm:text-[14px]">
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
