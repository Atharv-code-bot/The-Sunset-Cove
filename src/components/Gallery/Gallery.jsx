import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import infinitySuite from "../../assets/rooms/cove-infinity-suites.jpg";
import crescentRoom from "../../assets/rooms/crescent-cove-rooms.jpg";
import verdantRoom from "../../assets/rooms/verdant-cove-rooms.jpg";
import sunsetRoom from "../../assets/rooms/sunset-rooms.jpg";
import coveRoom from "../../assets/rooms/cove-rooms.jpg";

gsap.registerPlugin(ScrollTrigger);

const roomCategories = [
  {
    id: "cove-infinity-suites",
    title: "Cove Infinity Suites",
    subtitle: "Private infinity pool • Panoramic sea view",
    image: infinitySuite,
  },
  {
    id: "crescent-cove-rooms",
    title: "Crescent Cove Rooms",
    subtitle: "C-shaped balcony • Sea & valley views",
    image: crescentRoom,
  },
  {
    id: "verdant-cove-rooms",
    title: "Verdant Cove Rooms",
    subtitle: "Lush valley & greenery views",
    image: verdantRoom,
  },
  {
    id: "sunset-rooms",
    title: "Sunset Rooms",
    subtitle: "Golden sunset-facing rooms",
    image: sunsetRoom,
  },
  {
    id: "cove-rooms",
    title: "Cove Rooms",
    subtitle: "Elegant comfort • Cozy villa stay",
    image: coveRoom,
  },
];

const Gallery = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, ...cardsRef.current], {
        opacity: 0,
        y: 50,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }).to(
        cardsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
        },
        "-=0.5",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="room-categories"
      ref={sectionRef}
      className="w-full bg-[#f4f4ea] pt-36 pb-36"
    >
      <div className="mx-auto w-full max-w-[1780px] px-[20px] sm:px-[30px] md:px-[50px]">
        {/* Heading */}
        <div ref={titleRef} className="mb-20 text-center">
          <p className="mb-4 font-[Inter] text-[12px] uppercase tracking-[0.28em] text-[#8B7A6B]">
            Accommodation
          </p>

          <h2 className="font-[Cormorant] text-[46px] font-medium leading-[0.95] tracking-[-0.03em] text-[#26180f] sm:text-[60px] md:text-[72px] lg:text-[86px]">
            Discover our room categories
          </h2>

          <p className="mx-auto mt-6 max-w-[680px] font-[Inter] text-[16px] leading-[1.8] text-[#514941]">
            Every room at The Sunset Cove offers a unique experience—from
            infinity pool suites overlooking the sea to cozy rooms surrounded by
            lush greenery. Click any category to explore amenities, views, and
            room details.
          </p>
        </div>

        {/* Gallery Grid */}
        <>
          {/* ---------- Top Row : First 3 Cards ---------- */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {roomCategories.slice(0, 3).map((room, index) => (
              <button
                key={room.id}
                ref={(el) => (cardsRef.current[index] = el)}
                onClick={() =>
                  navigate(`/rooms/${room.id}`, {
                    state: { fromGallery: true },
                  })
                }
                className="room-card group relative overflow-hidden text-left"
              >
                {/* Image */}
                <div className="relative h-[520px] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#26180f]/90 via-[#26180f]/30 to-transparent transition duration-500 group-hover:from-[#26180f]/80" />

                  {/* Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="mb-2 font-[Inter] text-[11px] uppercase tracking-[0.22em] text-[#FDD17C]">
                      Room Category
                    </p>

                    <h3 className="font-[Cormorant] text-[38px] font-medium leading-[1] text-[#F4F4EA]">
                      {room.title}
                    </h3>

                    <p className="mt-3 font-[Inter] text-[14px] leading-[1.6] text-[#EBE7DC]">
                      {room.subtitle}
                    </p>

                    <div className="mt-7 flex items-center gap-2 font-[Inter] text-[12px] uppercase tracking-[0.2em] text-[#FDD17C]">
                      <span>Click to explore</span>

                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m13 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Hover Border */}
                  <div className="absolute inset-0 border border-transparent transition duration-500 group-hover:border-[#FDD17C]/70" />
                </div>
              </button>
            ))}
          </div>

          {/* ---------- Bottom Row : Last 2 Cards (Centered) ---------- */}
          <div className="mt-8 flex flex-col items-center gap-8 xl:flex-row xl:justify-center">
            {roomCategories.slice(3).map((room, index) => (
              <button
                key={room.id}
                ref={(el) => (cardsRef.current[index + 3] = el)}
                onClick={() =>
                  navigate(`/rooms/${room.id}`, {
                    state: { fromGallery: true },
                  })
                }
                className="room-card group relative w-full max-w-[390px] overflow-hidden text-left xl:w-[390px]"
              >
                {/* Image */}
                <div className="relative h-[520px] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#26180f]/90 via-[#26180f]/30 to-transparent transition duration-500 group-hover:from-[#26180f]/80" />

                  {/* Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="mb-2 font-[Inter] text-[11px] uppercase tracking-[0.22em] text-[#FDD17C]">
                      Room Category
                    </p>

                    <h3 className="font-[Cormorant] text-[38px] font-medium leading-[1] text-[#F4F4EA]">
                      {room.title}
                    </h3>

                    <p className="mt-3 font-[Inter] text-[14px] leading-[1.6] text-[#EBE7DC]">
                      {room.subtitle}
                    </p>

                    <div className="mt-7 flex items-center gap-2 font-[Inter] text-[12px] uppercase tracking-[0.2em] text-[#FDD17C]">
                      <span>Click to explore</span>

                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m13 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Hover Border */}
                  <div className="absolute inset-0 border border-transparent transition duration-500 group-hover:border-[#FDD17C]/70" />
                </div>
              </button>
            ))}
          </div>
        </>
      </div>
    </section>
  );
};

export default Gallery;
