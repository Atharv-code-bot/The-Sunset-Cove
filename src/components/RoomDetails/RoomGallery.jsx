import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RoomGallery = ({ room }) => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Float-up animation for the whole gallery section
      gsap.from(sectionRef.current, {
        y: 45,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // Infinite marquee animation
      const totalWidth = trackRef.current.scrollWidth / 2;

      gsap.to(trackRef.current, {
        x: -totalWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [room]);

  const images = [...room.gallery, ...room.gallery];

  return (
    <section
      ref={sectionRef}
      className="bg-[#F4F0E8] py-10 overflow-hidden"
    >
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex w-max gap-4 px-4 md:gap-6 md:px-8"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="group h-[520px] w-[340px] flex-shrink-0 overflow-hidden rounded-[28px] md:w-[390px] lg:h-[520px] lg:w-[400px]"
            >
              <img
                src={image}
                alt={`${room.title} ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomGallery;