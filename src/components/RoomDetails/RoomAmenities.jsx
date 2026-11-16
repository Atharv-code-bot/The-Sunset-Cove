import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  LuWifi,
  LuCoffee,
  LuBath,
  LuBedDouble,
  LuTv,
  LuRefrigerator,
  LuWaves,
  LuSun,
  LuTrees,
  LuMountain,
  LuFan,
  LuBookOpen,
  LuShirt,
  LuLaptop,
  LuCheck,
} from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  "Private Infinity Pool": LuWaves,
  "Ocean-facing Balcony": LuSun,
  "Sea & Valley View": LuMountain,
  "Sunset Balcony": LuSun,
  "Garden & Valley View": LuTrees,
  "Courtyard View": LuTrees,
  "King Size Bed": LuBedDouble,
  "Queen Size Bed": LuBedDouble,
  "Luxury Bathtub": LuBath,
  "Rain Shower": LuBath,
  "Premium Bathroom": LuBath,
  "Coffee & Tea Station": LuCoffee,
  "Coffee Station": LuCoffee,
  "Coffee Machine": LuCoffee,
  "Mini Bar": LuCoffee,
  "Mini Refrigerator": LuRefrigerator,
  "Smart TV": LuTv,
  "High-Speed Wi-Fi": LuWifi,
  "Wi-Fi": LuWifi,
  Workspace: LuLaptop,
  Wardrobe: LuShirt,
  "Reading Corner": LuBookOpen,
  "Breakfast Included": LuCoffee,
  "Air Conditioning": LuFan,
};

const RoomAmenities = ({ room }) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const headingItems = headingRef.current?.children;

      if (headingItems?.length) {
        gsap.fromTo(
          headingItems,
          { y: 18, opacity: 0.7 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.08,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 88%",
              once: true,
            },
          }
        );
      }

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { y: 18, opacity: 0.7 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: index * 0.035,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: card,
              start: "top 94%",
              once: true,
            },
          }
        );
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, sectionRef);

    return () => ctx.revert();
  }, [room]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F4F0E8] px-5 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-[1750px]">
        <div ref={headingRef} className="mb-9 max-w-5xl sm:mb-11 lg:mb-12">
          <p className="mb-3 font-[Inter] text-[10px] uppercase tracking-[0.28em] text-[#A68652] sm:mb-4 sm:text-[12px] sm:tracking-[0.30em]">
            Included Amenities
          </p>
          <h2 className="font-[Cormorant] text-[40px] leading-[0.98] text-[#26180F] sm:text-[52px] md:text-[64px] lg:text-[72px]">
            Everything Included In Your Stay
          </h2>
          <p className="mt-4 max-w-3xl font-[Inter] text-[14px] leading-[1.8] text-[#514941] sm:mt-5 sm:text-[16px] sm:leading-[1.85] lg:text-[17px]">
            Every room category at Sunset Cove is thoughtfully designed with
            premium comforts, curated experiences, and modern amenities for a
            relaxing coastal getaway.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-5">
          {room.amenities.map((amenity, index) => {
            const title = typeof amenity === "string" ? amenity : amenity.title;
            const Icon = iconMap[title] || LuCheck;

            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group rounded-[18px] border border-[#DDD4C6] bg-[#F7F4ED] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#B98B32]/70 hover:bg-[#FBF8F2] sm:rounded-[22px] sm:p-5 lg:rounded-[24px] lg:p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#EEE7DA] text-[#A68652] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#FDD17C]/20 sm:mb-5 sm:h-12 sm:w-12 lg:mb-6 lg:h-14 lg:w-14">
                  <Icon size={25} strokeWidth={1.8} />
                </div>
                <p className="font-[Inter] text-[13px] font-medium leading-6 text-[#26180F] sm:text-[14px] lg:text-[15px] lg:leading-7">
                  {title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoomAmenities;
