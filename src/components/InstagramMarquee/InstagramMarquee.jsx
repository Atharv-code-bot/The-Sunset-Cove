// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import instagramPosts from "../../data/instagramPosts";

// /* ==========================================================
//    DUMMY IMAGES (shown only when the owner's image is missing)
//    Safe to delete once the real images are in place.
// ========================================================== */
// const placeholderImages = [
//   "https://framerusercontent.com/images/jWaU2kCrAS9rTFO9zlJ62IL4cU.jpg?width=600&height=600",
//   "https://framerusercontent.com/images/cZNYMFOfZ0xA8LNsC3CgPqqsfc0.jpg?width=600&height=600",
//   "https://framerusercontent.com/images/dSfrsda1bsCQAiTmI6Z2v7IjM.jpg?width=600&height=600",
//   "https://framerusercontent.com/images/XArd8miMeAhKx6IXqBoU3vUc.jpg?width=600&height=600",
//   "https://framerusercontent.com/images/w4DyPIPlY77NsssF3gdBUueZEU.jpg?width=600&height=600",
//   "https://framerusercontent.com/images/2Y5N2vfO78qfxdy87NpbvGpBhrs.jpg?width=600&height=600",
// ];

// const InstagramCard = ({ item }) => {
//   const overlayRef = useRef(null);
//   const iconRef = useRef(null);
//   const imageRef = useRef(null);

//   const handleEnter = () => {
//     gsap.killTweensOf([
//       overlayRef.current,
//       iconRef.current,
//       imageRef.current,
//     ]);

//     gsap.to(overlayRef.current, {
//       opacity: 0.45,
//       duration: 0.35,
//       ease: "power2.out",
//     });

//     gsap.to(iconRef.current, {
//       opacity: 1,
//       scale: 1,
//       duration: 0.4,
//       ease: "back.out(1.7)",
//     });

//     gsap.to(imageRef.current, {
//       scale: 1.05,
//       duration: 0.6,
//       ease: "power3.out",
//     });
//   };

//   const handleLeave = () => {
//     gsap.to(overlayRef.current, {
//       opacity: 0,
//       duration: 0.3,
//       ease: "power2.out",
//     });

//     gsap.to(iconRef.current, {
//       opacity: 0,
//       scale: 0.5,
//       duration: 0.25,
//       ease: "power2.in",
//     });

//     gsap.to(imageRef.current, {
//       scale: 1,
//       duration: 0.5,
//       ease: "power3.out",
//     });
//   };

//   // If the owner's image fails to load, switch to the dummy image
//   const handleImageError = (e) => {
//     e.currentTarget.onerror = null; // prevent infinite loop
//     e.currentTarget.src = item.fallback;
//   };

//   return (
//     <a
//       href={item.reel || "https://www.instagram.com/"}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label="Open Instagram reel"
//       className="
//         group
//         relative
//         block
//         h-[380px]
//         w-[260px]
//         shrink-0
//         overflow-hidden
//         md:h-[400px]
//         md:w-[350px]
//       "
//       onMouseEnter={handleEnter}
//       onMouseLeave={handleLeave}
//     >
//       {/* Image: owner's image first, dummy image as fallback */}
//       <img
//         ref={imageRef}
//         src={item.image || item.fallback}
//         onError={handleImageError}
//         alt="VillaBliss Instagram"
//         loading="lazy"
//         className="h-full w-full object-cover"
//       />

//       {/* Dark overlay */}
//       <div
//         ref={overlayRef}
//         className="pointer-events-none absolute inset-0 z-10 bg-[#26180f] opacity-0"
//       />

//       {/* Instagram icon */}
//       <div
//         ref={iconRef}
//         className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center opacity-0"
//         style={{ transform: "scale(0.5)" }}
//       >
//         <img
//           src="https://framerusercontent.com/images/6XvM4qg6OetjKEC2gAgeDw6LnZk.svg?width=18&height=19"
//           alt=""
//           className="h-[30px] w-[30px] object-contain brightness-0 invert"
//         />
//       </div>
//     </a>
//   );
// };

// const InstagramMarquee = () => {
//   const trackRef = useRef(null);

//   useGSAP(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     const distance = track.scrollWidth / 2;

//     gsap.to(track, {
//       x: -distance,
//       duration: 25,
//       ease: "none",
//       repeat: -1,
//     });
//   }, []);

//   // Attach a dummy fallback image to every post
//   const posts = instagramPosts.map((post, i) => ({
//     ...post,
//     fallback: placeholderImages[i % placeholderImages.length],
//   }));

//   const duplicatedImages = [...posts, ...posts];

//   return (
//     <section className="w-full overflow-hidden bg-[#f4f4ea]">
//       <div ref={trackRef} className="flex w-max gap-0">
//         {duplicatedImages.map((item, index) => (
//           <InstagramCard key={`${item.image}-${index}`} item={item} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default InstagramMarquee;


import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import instagramPosts from "../../data/instagramPosts";

const placeholderImages = [
  "https://framerusercontent.com/images/jWaU2kCrAS9rTFO9zlJ62IL4cU.jpg?width=600&height=600",
  "https://framerusercontent.com/images/cZNYMFOfZ0xA8LNsC3CgPqqsfc0.jpg?width=600&height=600",
  "https://framerusercontent.com/images/dSfrsda1bsCQAiTmI6Z2v7IjM.jpg?width=600&height=600",
  "https://framerusercontent.com/images/XArd8miMeAhKx6IXqBoU3vUc.jpg?width=600&height=600",
  "https://framerusercontent.com/images/w4DyPIPlY77NsssF3gdBUueZEU.jpg?width=600&height=600",
  "https://framerusercontent.com/images/2Y5N2vfO78qfxdy87NpbvGpBhrs.jpg?width=600&height=600",
];

const InstagramCard = ({ item, className = "" }) => {
  const overlayRef = useRef(null);
  const iconRef = useRef(null);
  const imageRef = useRef(null);

  const handleEnter = () => {
    gsap.killTweensOf([overlayRef.current, iconRef.current, imageRef.current]);
    gsap.to(overlayRef.current, { opacity: 0.45, duration: 0.35, ease: "power2.out" });
    gsap.to(iconRef.current, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" });
    gsap.to(imageRef.current, { scale: 1.05, duration: 0.6, ease: "power3.out" });
  };

  const handleLeave = () => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, ease: "power2.out" });
    gsap.to(iconRef.current, { opacity: 0, scale: 0.5, duration: 0.25, ease: "power2.in" });
    gsap.to(imageRef.current, { scale: 1, duration: 0.5, ease: "power3.out" });
  };

  const handleImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = item.fallback;
  };

  return (
    <a
      href={item.reel || "https://www.instagram.com/"}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Instagram reel"
      className={`group relative block overflow-hidden ${className}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <img
        ref={imageRef}
        src={item.image || item.fallback}
        onError={handleImageError}
        alt="VillaBliss Instagram"
        loading="lazy"
        className="h-full w-full object-cover"
      />

      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 z-10 bg-[#26180f] opacity-0"
      />

      <div
        ref={iconRef}
        className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center opacity-0"
        style={{ transform: "scale(0.5)" }}
      >
        <img
          src="https://framerusercontent.com/images/6XvM4qg6OetjKEC2gAgeDw6LnZk.svg?width=18&height=19"
          alt=""
          className="h-[30px] w-[30px] object-contain brightness-0 invert"
        />
      </div>
    </a>
  );
};

const InstagramMarquee = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  // Marquee only runs on desktop (md and up)
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const track = trackRef.current;
        if (!track) return;

        const distance = track.scrollWidth / 2;
        const tween = gsap.to(track, {
          x: -distance,
          duration: 25,
          ease: "none",
          repeat: -1,
        });

        return () => {
          tween.kill();
          gsap.set(track, { clearProps: "transform" });
        };
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  const posts = instagramPosts.map((post, i) => ({
    ...post,
    fallback: placeholderImages[i % placeholderImages.length],
  }));

  const duplicatedImages = [...posts, ...posts];

  return (
    <section ref={sectionRef} className="w-full overflow-hidden bg-[#f4f4ea]">
     {/* MOBILE: 2-column square grid */}
<div className="grid grid-cols-2 gap-[15px] px-[15px] pt-0 pb-[40px] md:hidden">
  {posts.slice(0, 6).map((item, index) => (
    <InstagramCard
      key={`mobile-${item.image}-${index}`}
      item={item}
      className="aspect-square w-full"
    />
  ))}
</div>

      {/* DESKTOP: scrolling marquee (unchanged) */}
      <div ref={trackRef} className="hidden w-max gap-0 md:flex">
        {duplicatedImages.map((item, index) => (
          <InstagramCard
            key={`desktop-${item.image}-${index}`}
            item={item}
            className="h-[400px] w-[350px] shrink-0"
          />
        ))}
      </div>
    </section>
  );
};

export default InstagramMarquee;