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

// Amenity → Icon Mapping
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
      // Heading
      gsap.from(headingRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
        immediateRender: false,
      });

      // Amenity Cards
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: 35,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
            },
            immediateRender: false,
          },
        );
      });

      // Refresh after images/layout settle
      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F4F0E8] py-24 lg:py-32">
      <div className="mx-auto max-w-[1750px] px-6 md:px-[30px]">
        {/* Heading */}
        <div ref={headingRef} className="mb-16 max-w-5xl">
          <p className="mb-4 font-[Inter] text-[12px] uppercase tracking-[0.30em] text-[#A68652]">
            Included Amenities
          </p>

          <h2 className="font-[Cormorant] text-[52px] leading-[0.96] text-[#26180F] md:text-[72px]">
            Everything Included In Your Stay
          </h2>

          <p className="mt-6 max-w-3xl font-[Inter] text-[17px] leading-[1.85] text-[#514941]">
            Every room category at Sunset Cove is thoughtfully designed with
            premium comforts, curated experiences, and modern amenities for a
            relaxing coastal getaway.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-5">
          {room.amenities.map((amenity, index) => {
            const title = typeof amenity === "string" ? amenity : amenity.title;

            const Icon = iconMap[title] || LuCheck;

            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group rounded-[24px] border border-[#DDD4C6] bg-[#F7F4ED] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B98B32]/70 hover:bg-[#FBF8F2]"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#EEE7DA] text-[#A68652] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#FDD17C]/20">
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                {/* Amenity Name */}
                <p className="font-[Inter] text-[15px] font-medium leading-7 text-[#26180F]">
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
