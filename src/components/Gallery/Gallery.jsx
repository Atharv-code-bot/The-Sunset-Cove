// // // // components/Gallery/Gallery.jsx
// // // import { useRef } from "react";
// // // import { useGSAP } from "@gsap/react";
// // // import gsap from "gsap";

// // // const images = ["/images/gallery-1.jpg", "/images/gallery-2.jpg", "/images/gallery-3.jpg", "/images/gallery-4.jpg"];

// // // const Gallery = () => {
// // //   const ref = useRef(null);

// // //   useGSAP(() => {
// // //     const imgs = ref.current.querySelectorAll("img");
// // //     imgs.forEach((img) => {
// // //       gsap.from(img, {
// // //         scale: 1.25,
// // //         duration: 1.4,
// // //         ease: "power2.out",
// // //         scrollTrigger: { trigger: img, start: "top 85%" },
// // //       });
// // //     });
// // //   }, { scope: ref });

// // //   return (
// // //     <section ref={ref} className="grid grid-cols-1 gap-4 bg-[#f4f4ea] p-4 md:grid-cols-2 md:p-8">
// // //       {images.map((src, i) => (
// // //         <div key={i} className="h-[60vh] overflow-hidden">
// // //           <img src={src} alt={`Gallery ${i + 1}`} className="h-full w-full object-cover" />
// // //         </div>
// // //       ))}
// // //     </section>
// // //   );
// // // };

// // // export default Gallery;

// // import { useEffect, useRef } from "react";
// // import gsap from "gsap";

// // const images = [
// //   {
// //     title: "Bedroom",
// //     size: "40m2",
// //     image: "/images/bedroom.jpg",
// //     height: "h-[392px]",
// //   },
// //   {
// //     title: "Work station",
// //     size: "in every bedroom",
// //     image: "/images/workstation.jpg",
// //     height: "h-[308px]",
// //   },
// //   {
// //     title: "Living area",
// //     size: "100m2",
// //     image: "/images/living.jpg",
// //     height: "h-[500px]",
// //   },
// //   {
// //     title: "Dining area",
// //     size: "500m2",
// //     image: "/images/dining.jpg",
// //     height: "h-[308px]",
// //   },
// //   {
// //     title: "Bedroom",
// //     size: "40m2",
// //     image: "/images/bedroom.jpg",
// //     height: "h-[392px]",
// //   },
// //   {
// //     title: "Work station",
// //     size: "in every bedroom",
// //     image: "/images/workstation.jpg",
// //     height: "h-[308px]",
// //   },
// //   {
// //     title: "Living area",
// //     size: "100m2",
// //     image: "/images/living.jpg",
// //     height: "h-[500px]",
// //   },
// //   {
// //     title: "Dining area",
// //     size: "500m2",
// //     image: "/images/dining.jpg",
// //     height: "h-[308px]",
// //   },
// // ];

// // const Gallery = () => {
// //   const trackRef = useRef(null);
// //   const animationRef = useRef(null);

// //   const moveNext = () => {
// //     if (!trackRef.current) return;

// //     // Don't start another animation while one is running
// //     if (animationRef.current?.isActive()) return;

// //     const track = trackRef.current;
// //     const cards = track.children;

// //     if (!cards.length) return;

// //     const cardWidth = cards[0].offsetWidth;
// //     const gap = 24;
// //     const distance = cardWidth + gap;

// //     animationRef.current = gsap.to(track, {
// //       x: -distance,
// //       duration: 1.2,
// //       ease: "power3.inOut",

// //       onComplete: () => {
// //         // Move first card to the end
// //         track.appendChild(track.firstElementChild);

// //         // Reset track WITHOUT animation
// //         gsap.set(track, {
// //           x: 0,
// //         });

// //         animationRef.current = null;
// //       },
// //     });
// //   };

// //   const movePrevious = () => {
// //     if (!trackRef.current) return;

// //     if (animationRef.current?.isActive()) return;

// //     const track = trackRef.current;
// //     const cards = track.children;

// //     if (!cards.length) return;

// //     const cardWidth = cards[0].offsetWidth;
// //     const gap = 24;
// //     const distance = cardWidth + gap;

// //     // Put last card before first
// //     track.insertBefore(
// //       track.lastElementChild,
// //       track.firstElementChild
// //     );

// //     // Start from shifted position
// //     gsap.set(track, {
// //       x: -distance,
// //     });

// //     animationRef.current = gsap.to(track, {
// //       x: 0,
// //       duration: 1.2,
// //       ease: "power3.inOut",

// //       onComplete: () => {
// //         animationRef.current = null;
// //       },
// //     });
// //   };

// //   // Auto movement every 2 seconds
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       moveNext();
// //     }, 2000);

// //     return () => {
// //       clearInterval(interval);
// //       animationRef.current?.kill();
// //     };
// //   }, []);

// //   return (
// //     <section className="w-full overflow-hidden bg-[#f4f4ea] py-[70px]">

// //       <div className="mx-auto max-w-[1780px] px-[50px]">

// //         {/* ================= HEADER ================= */}

// //         <div className="mb-[40px] flex items-center justify-between">

// //           <h2 className="font-cormorant text-[55px] leading-none text-[#26180f]">
// //             Spacious and cozy
// //           </h2>

// //           <div className="flex items-center gap-[10px]">

// //             <button
// //               type="button"
// //               onClick={movePrevious}
// //               className="flex h-[40px] w-[30px] items-center justify-center"
// //             >
// //               <span className="font-light text-[38px] leading-none text-[#26180f]">
// //                 ‹
// //               </span>
// //             </button>

// //             <button
// //               type="button"
// //               onClick={moveNext}
// //               className="flex h-[40px] w-[30px] items-center justify-center"
// //             >
// //               <span className="font-light text-[38px] leading-none text-[#26180f]">
// //                 ›
// //               </span>
// //             </button>

// //           </div>

// //         </div>

// //         {/* ================= RAILWAY TRACK ================= */}

// //         <div className="overflow-hidden">

// //           <div
// //             ref={trackRef}
// //             className="flex items-start gap-[24px] will-change-transform"
// //           >

// //             {images.map((item, index) => (
// //               <div
// //                 key={`${item.title}-${index}`}
// //                 className={`
// //                   gallery-card
// //                   relative
// //                   w-[calc((100%-72px)/4)]
// //                   min-w-[calc((100%-72px)/4)]
// //                   overflow-hidden
// //                   ${item.height}
// //                 `}
// //               >

// //                 {/* IMAGE */}

// //                 <img
// //                   src={item.image}
// //                   alt={item.title}
// //                   className="absolute inset-0 h-full w-full object-cover"
// //                 />

// //                 {/* DARK GRADIENT */}

// //                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#26180f]/85 via-[#26180f]/10 to-transparent" />

// //                 {/* TEXT */}

// //                 <div className="absolute bottom-[25px] left-[25px] right-[25px] flex items-end justify-between gap-[15px] text-white">

// //                   <h3 className="font-cormorant text-[25px] leading-none">
// //                     {item.title}
// //                   </h3>

// //                   <span className="shrink-0 text-[14px] leading-none">
// //                     {item.size}
// //                   </span>

// //                 </div>

// //               </div>
// //             ))}

// //           </div>

// //         </div>

// //       </div>

// //     </section>
// //   );
// // };

// // export default Gallery;


// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const images = [
//   {
//     title: "Bedroom",
//     size: "40m2",
//     image: "/images/bedroom.jpg",
//     height: "h-[392px]",
//   },
//   {
//     title: "Work station",
//     size: "in every bedroom",
//     image: "/images/workstation.jpg",
//     height: "h-[308px]",
//   },
//   {
//     title: "Living area",
//     size: "100m2",
//     image: "/images/living.jpg",
//     height: "h-[500px]",
//   },
//   {
//     title: "Dining area",
//     size: "500m2",
//     image: "/images/dining.jpg",
//     height: "h-[308px]",
//   },
//   {
//     title: "Bedroom",
//     size: "40m2",
//     image: "/images/bedroom.jpg",
//     height: "h-[392px]",
//   },
//   {
//     title: "Work station",
//     size: "in every bedroom",
//     image: "/images/workstation.jpg",
//     height: "h-[308px]",
//   },
//   {
//     title: "Living area",
//     size: "100m2",
//     image: "/images/living.jpg",
//     height: "h-[500px]",
//   },
//   {
//     title: "Dining area",
//     size: "500m2",
//     image: "/images/dining.jpg",
//     height: "h-[308px]",
//   },
// ];

// const Gallery = () => {
//   const trackRef = useRef(null);
//   const animationRef = useRef(null);

//   const moveNext = () => {
//     if (!trackRef.current) return;

//     if (animationRef.current?.isActive()) return;

//     const track = trackRef.current;
//     const cards = track.children;

//     if (!cards.length) return;

//     const cardWidth = cards[0].offsetWidth;
//     const gap = 24;
//     const distance = cardWidth + gap;

//     animationRef.current = gsap.to(track, {
//       x: -distance,
//       duration: 2,
//       ease: "power3.inOut",

//       onComplete: () => {
//         track.appendChild(track.firstElementChild);

//         gsap.set(track, {
//           x: 0,
//         });

//         animationRef.current = null;
//       },
//     });
//   };

//   const movePrevious = () => {
//     if (!trackRef.current) return;

//     if (animationRef.current?.isActive()) return;

//     const track = trackRef.current;
//     const cards = track.children;

//     if (!cards.length) return;

//     const cardWidth = cards[0].offsetWidth;
//     const gap = 24;
//     const distance = cardWidth + gap;

//     track.insertBefore(
//       track.lastElementChild,
//       track.firstElementChild
//     );

//     gsap.set(track, {
//       x: -distance,
//     });

//     animationRef.current = gsap.to(track, {
//       x: 0,
//       duration: 1.2,
//       ease: "power3.inOut",

//       onComplete: () => {
//         animationRef.current = null;
//       },
//     });
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       moveNext();
//     }, 2000);

//     return () => {
//       clearInterval(interval);
//       animationRef.current?.kill();
//     };
//   }, []);

//   return (
//     <section className="w-full overflow-hidden bg-[#f4f4ea] pt-[110px] pb-[90px]">

//       <div className="mx-auto max-w-[1780px] px-[70px]">

//         {/* ================= HEADER ================= */}

//         <div className="mb-[60px] flex items-center justify-between">

//           <h2 className="font-cormorant text-[55px] leading-none text-[#26180f]">
//             Spacious and cozy
//           </h2>

//           <div className="flex items-center gap-[10px]">

//             <button
//               type="button"
//               onClick={movePrevious}
//               className="flex h-[40px] w-[30px] items-center justify-center"
//             >
//               <span className="font-light text-[38px] leading-none text-[#26180f]">
//                 ‹
//               </span>
//             </button>

//             <button
//               type="button"
//               onClick={moveNext}
//               className="flex h-[40px] w-[30px] items-center justify-center"
//             >
//               <span className="font-light text-[38px] leading-none text-[#26180f]">
//                 ›
//               </span>
//             </button>

//           </div>

//         </div>

//         {/* ================= RAILWAY TRACK ================= */}

//         <div className="overflow-hidden">

//           <div
//             ref={trackRef}
//             className="flex items-start gap-[24px] will-change-transform"
//           >

//             {images.map((item, index) => (
//               <div
//                 key={`${item.title}-${index}`}
//                 className={`
//                   gallery-card
//                   relative
//                   w-[calc((100%-72px)/4)]
//                   min-w-[calc((100%-72px)/4)]
//                   overflow-hidden
//                   ${item.height}
//                 `}
//               >

//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="absolute inset-0 h-full w-full object-cover"
//                 />

//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#26180f]/85 via-[#26180f]/10 to-transparent" />

//                 <div className="absolute bottom-[25px] left-[25px] right-[25px] flex items-end justify-between gap-[15px] text-white">

//                   <h3 className="font-cormorant text-[25px] leading-none">
//                     {item.title}
//                   </h3>

//                   <span className="shrink-0 text-[14px] leading-none">
//                     {item.size}
//                   </span>

//                 </div>

//               </div>
//             ))}

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default Gallery;

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// const images = [
//   {
//     title: "Bedroom",
//     size: "40m2",
//     image: "/images/bedroom.jpg",
//     height: "h-[392px]",
//   },
//   {
//     title: "Work station",
//     size: "in every bedroom",
//     image: "/images/workstation.jpg",
//     height: "h-[308px]",
//   },
//   {
//     title: "Living area",
//     size: "100m2",
//     image: "/images/living.jpg",
//     height: "h-[500px]",
//   },
//   {
//     title: "Dining area",
//     size: "500m2",
//     image: "/images/dining.jpg",
//     height: "h-[308px]",
//   },
//   {
//     title: "Bedroom",
//     size: "40m2",
//     image: "/images/bedroom.jpg",
//     height: "h-[392px]",
//   },
//   {
//     title: "Work station",
//     size: "in every bedroom",
//     image: "/images/workstation.jpg",
//     height: "h-[308px]",
//   },
//   {
//     title: "Living area",
//     size: "100m2",
//     image: "/images/living.jpg",
//     height: "h-[500px]",
//   },
//   {
//     title: "Dining area",
//     size: "500m2",
//     image: "/images/dining.jpg",
//     height: "h-[308px]",
//   },
// ];

// const Gallery = () => {
//   const trackRef = useRef(null);
//   const animationRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);

//   // Track viewport size — carousel only runs on desktop/tablet-up
//   useEffect(() => {
//     const mql = window.matchMedia("(max-width: 767px)");

//     const handleChange = (e) => setIsMobile(e.matches);
//     handleChange(mql); // set initial value

//     mql.addEventListener("change", handleChange);
//     return () => mql.removeEventListener("change", handleChange);
//   }, []);

//   const moveNext = () => {
//     if (!trackRef.current) return;

//     if (animationRef.current?.isActive()) return;

//     const track = trackRef.current;
//     const cards = track.children;

//     if (!cards.length) return;

//     const cardWidth = cards[0].offsetWidth;
//     const gap = 24;
//     const distance = cardWidth + gap;

//     animationRef.current = gsap.to(track, {
//       x: -distance,
//       duration: 1.2,
//       ease: "power3.inOut",

//       onComplete: () => {
//         track.appendChild(track.firstElementChild);

//         gsap.set(track, {
//           x: 0,
//         });

//         animationRef.current = null;
//       },
//     });
//   };

//   const movePrevious = () => {
//     if (!trackRef.current) return;

//     if (animationRef.current?.isActive()) return;

//     const track = trackRef.current;
//     const cards = track.children;

//     if (!cards.length) return;

//     const cardWidth = cards[0].offsetWidth;
//     const gap = 24;
//     const distance = cardWidth + gap;

//     track.insertBefore(
//       track.lastElementChild,
//       track.firstElementChild
//     );

//     gsap.set(track, {
//       x: -distance,
//     });

//     animationRef.current = gsap.to(track, {
//       x: 0,
//       duration: 1.2,
//       ease: "power3.inOut",

//       onComplete: () => {
//         animationRef.current = null;
//       },
//     });
//   };

//   // Auto movement every 2 seconds — desktop/tablet only
//   useEffect(() => {
//     if (isMobile) return;

//     const interval = setInterval(() => {
//       moveNext();
//     }, 2000);

//     return () => {
//       clearInterval(interval);
//       animationRef.current?.kill();
//     };
//   }, [isMobile]);

//   return (
//     <section className="w-full overflow-hidden bg-[#f4f4ea] pt-[110px] pb-[90px]">

//       <div className="mx-auto max-w-[1780px] px-[24px] md:px-[70px]">

//         {/* ================= HEADER ================= */}

//         <div className="mb-[60px] flex items-center justify-between">

//           <h2 className="font-cormorant text-[40px] leading-none text-[#26180f] md:text-[55px]">
//             Spacious and cozy
//           </h2>

//           {/* Arrows — desktop/tablet only, carousel doesn't exist on mobile */}
//           {!isMobile && (
//             <div className="flex items-center gap-[10px]">

//               <button
//                 type="button"
//                 onClick={movePrevious}
//                 className="flex h-[40px] w-[30px] items-center justify-center"
//               >
//                 <span className="font-light text-[38px] leading-none text-[#26180f]">
//                   ‹
//                 </span>
//               </button>

//               <button
//                 type="button"
//                 onClick={moveNext}
//                 className="flex h-[40px] w-[30px] items-center justify-center"
//               >
//                 <span className="font-light text-[38px] leading-none text-[#26180f]">
//                   ›
//                 </span>
//               </button>

//             </div>
//           )}

//         </div>

//         {/* ================= MOBILE: STATIC 2-COLUMN GRID ================= */}

//         {isMobile ? (
//           <div className="grid grid-cols-2 gap-[16px]">

//             {images.map((item, index) => (
//               <div
//                 key={`${item.title}-${index}`}
//                 className={`
//                   gallery-card
//                   relative
//                   w-full
//                   overflow-hidden
//                   ${item.height}
//                 `}
//               >

//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="absolute inset-0 h-full w-full object-cover"
//                 />

//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#26180f]/85 via-[#26180f]/10 to-transparent" />

//                 <div className="absolute bottom-[15px] left-[15px] right-[15px] flex items-end justify-between gap-[10px] text-white">

//                   <h3 className="font-cormorant text-[18px] leading-none">
//                     {item.title}
//                   </h3>

//                   <span className="shrink-0 text-[11px] leading-none">
//                     {item.size}
//                   </span>

//                 </div>

//               </div>
//             ))}

//           </div>
//         ) : (

//           /* ================= DESKTOP/TABLET: CAROUSEL TRACK ================= */

//           <div className="overflow-hidden">

//             <div
//               ref={trackRef}
//               className="flex items-start gap-[24px] will-change-transform"
//             >

//               {images.map((item, index) => (
//                 <div
//                   key={`${item.title}-${index}`}
//                   className={`
//                     gallery-card
//                     relative
//                     w-[calc((100%-72px)/4)]
//                     min-w-[calc((100%-72px)/4)]
//                     overflow-hidden
//                     ${item.height}
//                   `}
//                 >

//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="absolute inset-0 h-full w-full object-cover"
//                   />

//                   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#26180f]/85 via-[#26180f]/10 to-transparent" />

//                   <div className="absolute bottom-[25px] left-[25px] right-[25px] flex items-end justify-between gap-[15px] text-white">

//                     <h3 className="font-cormorant text-[25px] leading-none">
//                       {item.title}
//                     </h3>

//                     <span className="shrink-0 text-[14px] leading-none">
//                       {item.size}
//                     </span>

//                   </div>

//                 </div>
//               ))}

//             </div>

//           </div>
//         )}

//       </div>

//     </section>
//   );
// };

// export default Gallery;
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const images = [
  {
    title: "Bedroom",
    size: "40m2",
    image: "/images/bedroom.jpg",
    height: "h-[392px]",
  },
  {
    title: "Work station",
    size: "in every bedroom",
    image: "/images/workstation.jpg",
    height: "h-[308px]",
  },
  {
    title: "Living area",
    size: "100m2",
    image: "/images/living.jpg",
    height: "h-[500px]",
  },
  {
    title: "Dining area",
    size: "500m2",
    image: "/images/dining.jpg",
    height: "h-[308px]",
  },
  {
    title: "Bedroom",
    size: "40m2",
    image: "/images/bedroom.jpg",
    height: "h-[392px]",
  },
  {
    title: "Work station",
    size: "in every bedroom",
    image: "/images/workstation.jpg",
    height: "h-[308px]",
  },
  {
    title: "Living area",
    size: "100m2",
    image: "/images/living.jpg",
    height: "h-[500px]",
  },
  {
    title: "Dining area",
    size: "500m2",
    image: "/images/dining.jpg",
    height: "h-[308px]",
  },
];

const Gallery = () => {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  /* =========================================================
     RESPONSIVE BREAKPOINT — carousel only runs desktop/tablet up
  ========================================================= */

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");

    const handleChange = (e) => setIsMobile(e.matches);
    handleChange(mql); // set initial value

    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  /* =========================================================
     NEXT
  ========================================================= */

  const moveNext = () => {
    if (!trackRef.current) return;

    if (animationRef.current?.isActive()) return;

    const track = trackRef.current;
    const cards = track.children;

    if (!cards.length) return;

    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(track).gap) || 24;
    const distance = cardWidth + gap;

    animationRef.current = gsap.to(track, {
      x: -distance,
      duration: 1.2,
      ease: "power3.inOut",

      onComplete: () => {
        track.appendChild(track.firstElementChild);

        gsap.set(track, {
          x: 0,
        });

        animationRef.current = null;
      },
    });
  };

  /* =========================================================
     PREVIOUS
  ========================================================= */

  const movePrevious = () => {
    if (!trackRef.current) return;

    if (animationRef.current?.isActive()) return;

    const track = trackRef.current;
    const cards = track.children;

    if (!cards.length) return;

    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(track).gap) || 24;
    const distance = cardWidth + gap;

    track.insertBefore(
      track.lastElementChild,
      track.firstElementChild
    );

    gsap.set(track, {
      x: -distance,
    });

    animationRef.current = gsap.to(track, {
      x: 0,
      duration: 1.2,
      ease: "power3.inOut",

      onComplete: () => {
        animationRef.current = null;
      },
    });
  };

  /* =========================================================
     AUTO CAROUSEL — desktop/tablet only
  ========================================================= */

  useEffect(() => {
    if (isMobile) return;

    const interval = setInterval(() => {
      moveNext();
    }, 2000);

    return () => {
      clearInterval(interval);
      animationRef.current?.kill();
    };
  }, [isMobile]);

  /* =========================================================
     RESIZE CLEANUP — prevents a stuck/broken animation
     mid-flight if the viewport crosses the breakpoint or
     the window is resized while a tween is running
  ========================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (animationRef.current?.isActive()) {
        animationRef.current.kill();
        animationRef.current = null;

        if (trackRef.current) {
          gsap.set(trackRef.current, {
            x: 0,
          });
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full overflow-hidden bg-[#f4f4ea] pt-[110px] pb-[90px]">

      <div className="mx-auto max-w-[1780px] px-[24px] md:px-[70px]">

        {/* ================= HEADER ================= */}

        <div className="mb-[60px] flex items-center justify-between">

          <h2 className="font-cormorant text-[40px] leading-none text-[#26180f] md:text-[55px]">
            Spacious and cozy
          </h2>

          {!isMobile && (
            <div className="flex items-center gap-[10px]">

              <button
                type="button"
                onClick={movePrevious}
                className="flex h-[40px] w-[30px] items-center justify-center"
                aria-label="Previous"
              >
                <span className="font-light text-[38px] leading-none text-[#26180f]">
                  ‹
                </span>
              </button>

              <button
                type="button"
                onClick={moveNext}
                className="flex h-[40px] w-[30px] items-center justify-center"
                aria-label="Next"
              >
                <span className="font-light text-[38px] leading-none text-[#26180f]">
                  ›
                </span>
              </button>

            </div>
          )}

        </div>

        {/* =====================================================
            MOBILE — static 2-column grid, ALL images shown,
            EVERY card the same uniform size via aspect ratio
            (no fixed per-item height, so no mismatched sizes)
        ====================================================== */}

        {isMobile ? (
          <div className="grid grid-cols-2 gap-[16px]">

            {images.map((item, index) => (
              <div
                key={`${item.title}-mobile-${index}`}
                className="relative aspect-[4/5] w-full overflow-hidden"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#26180f]/85 via-[#26180f]/10 to-transparent" />

                <div className="absolute bottom-[15px] left-[15px] right-[15px] flex items-end justify-between gap-[10px] text-white">

                  <h3 className="font-cormorant text-[18px] leading-none">
                    {item.title}
                  </h3>

                  <span className="shrink-0 text-[11px] leading-none">
                    {item.size}
                  </span>

                </div>

              </div>
            ))}

          </div>
        ) : (

          /* ================= DESKTOP/TABLET: CAROUSEL TRACK ================= */

          <div className="overflow-hidden">

            <div
              ref={trackRef}
              className="flex items-start gap-[24px] will-change-transform"
            >

              {images.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className={`
                    gallery-card
                    relative
                    w-[calc((100%-72px)/4)]
                    min-w-[calc((100%-72px)/4)]
                    overflow-hidden
                    ${item.height}
                  `}
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#26180f]/85 via-[#26180f]/10 to-transparent" />

                  <div className="absolute bottom-[25px] left-[25px] right-[25px] flex items-end justify-between gap-[15px] text-white">

                    <h3 className="font-cormorant text-[25px] leading-none">
                      {item.title}
                    </h3>

                    <span className="shrink-0 text-[14px] leading-none">
                      {item.size}
                    </span>

                  </div>

                </div>
              ))}

            </div>

          </div>
        )}

      </div>

    </section>
  );
};

export default Gallery;