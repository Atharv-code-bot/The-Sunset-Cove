// // components/InstagramMarquee/InstagramMarquee.jsx
// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// const images = ["/images/insta-1.jpg", "/images/insta-2.jpg", "/images/insta-3.jpg", "/images/insta-4.jpg"];

// const InstagramMarquee = () => {
//   const trackRef = useRef(null);

//   useGSAP(() => {
//     const track = trackRef.current;
//     const width = track.scrollWidth / 2; // because content is duplicated below

//     gsap.to(track, {
//       x: -width,
//       duration: 25,
//       ease: "none",
//       repeat: -1,
//     });
//   }, { scope: trackRef });

//   return (
//     <section className="overflow-hidden bg-[#f4f4ea] py-16">
//       <div ref={trackRef} className="flex w-max gap-4">
//         {[...images, ...images].map((src, i) => (
//           <img key={i} src={src} alt="" className="h-[220px] w-[280px] object-cover" />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default InstagramMarquee;

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const images = [
  {
    image:
      "https://framerusercontent.com/images/jWaU2kCrAS9rTFO9zlJ62IL4cU.jpg?width=600&height=600",
    reel: "https://www.instagram.com/",
  },
  {
    image:
      "https://framerusercontent.com/images/cZNYMFOfZ0xA8LNsC3CgPqqsfc0.jpg?width=600&height=600",
    reel: "https://www.instagram.com/",
  },
  {
    image:
      "https://framerusercontent.com/images/dSfrsda1bsCQAiTmI6Z2v7IjM.jpg?width=600&height=600",
    reel: "https://www.instagram.com/",
  },
  {
    image:
      "https://framerusercontent.com/images/XArd8miMeAhKx6IXqBoU3vUc.jpg?width=600&height=600",
    reel: "https://www.instagram.com/",
  },
  {
    image:
      "https://framerusercontent.com/images/w4DyPIPlY77NsssF3gdBUueZEU.jpg?width=600&height=600",
    reel: "https://www.instagram.com/",
  },
  {
    image:
      "https://framerusercontent.com/images/2Y5N2vfO78qfxdy87NpbvGpBhrs.jpg?width=600&height=600",
    reel: "https://www.instagram.com/",
  },
];

const InstagramCard = ({ item }) => {
  const overlayRef = useRef(null);
  const iconRef = useRef(null);
  const imageRef = useRef(null);

  const handleEnter = () => {
    gsap.killTweensOf([
      overlayRef.current,
      iconRef.current,
      imageRef.current,
    ]);

    gsap.to(overlayRef.current, {
      opacity: 0.45,
      duration: 0.35,
      ease: "power2.out",
    });

    gsap.to(iconRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: "back.out(1.7)",
    });

    gsap.to(imageRef.current, {
      scale: 1.05,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(iconRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 0.25,
      ease: "power2.in",
    });

    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <a
      href={item.reel}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-[300px] w-[300px] shrink-0 overflow-hidden"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Image */}
      <img
        ref={imageRef}
        src={item.image}
        alt=""
        className="h-full w-full object-cover"
      />

      {/* Framer-style dark overlay */}
      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 z-10 bg-[#26180f] opacity-0"
      />

      {/* Instagram icon */}
      <div
        ref={iconRef}
        className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center opacity-0"
        style={{ transform: "scale(0.5)" }}
      >
        <img
          src="https://framerusercontent.com/images/6XvM4qg6OetjKEC2gAgeDw6LnZk.svg?width=18&height=19"
          alt="Instagram"
          className="h-[30px] w-[30px] object-contain brightness-0 invert"
        />
      </div>
    </a>
  );
};

const InstagramMarquee = () => {
  const trackRef = useRef(null);

  useGSAP(() => {
    const track = trackRef.current;

    if (!track) return;

    const distance = track.scrollWidth / 2;

    gsap.to(track, {
      x: -distance,
      duration: 25,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const duplicatedImages = [...images, ...images];

  return (
    <section className="w-full overflow-hidden bg-[#f4f4ea] py-[80px]">
      <div
        ref={trackRef}
        className="flex w-max gap-0"
      >
        {duplicatedImages.map((item, index) => (
          <InstagramCard
            key={`${item.image}-${index}`}
            item={item}
          />
        ))}
      </div>
    </section>
  );
};

export default InstagramMarquee;