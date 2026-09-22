// // // import { useEffect, useRef, useState } from "react";
// // // import gsap from "gsap";

// // // const testimonials = [
// // //   {
// // //     title: "Luxury Redefined",
// // //     text: "Our stay at the villa was nothing short of magical. From the stunning views to the impeccable service, every moment felt like a dream. Highly recommend!",
// // //     name: "Sophia M.",
// // //     image:
// // //       "https://framerusercontent.com/images/dUPOCQhI18b6xOT7J8X7ydkewA.jpg?width=500&height=500",
// // //   },
// // //   {
// // //     title: "Paradise Found",
// // //     text: "This villa is a slice of heaven. The design is stunning, the location is unbeatable, and the tranquility is unparalleled. We've already booked our next stay.",
// // //     name: "Lina R.",
// // //     image:
// // //       "https://framerusercontent.com/images/xzjs7YXP70pNUFUjpY4tA4YaU.jpg?width=400&height=400",
// // //   },
// // //   {
// // //     title: "Seamless Hospitality",
// // //     text: "From the moment we arrived, we were treated like royalty. The concierge arranged everything we needed, including excursions and private dining. A five-star experience!",
// // //     name: "Jason L.",
// // //     image:
// // //       "https://framerusercontent.com/images/4rY33TF8y63rbxPfNpWmDHAFdus.jpg?width=500&height=500",
// // //   },
// // //   {
// // //     title: "Perfect for families",
// // //     text: "The villa was the perfect getaway for our family. The spacious rooms, private pool, and kid-friendly amenities made our vacation unforgettable.",
// // //     name: "Rahul K.",
// // //     image:
// // //       "https://framerusercontent.com/images/Z4eMSee9nA5FzExlLQyNEHBPA.jpg?width=400&height=400",
// // //   },
// // //   {
// // //     title: "A memorable family getaway!",
// // //     text: "We stayed at the villa for a family reunion, and it was perfect. Spacious rooms, modern amenities, and close to everything we needed. Everyone had a fantastic time!",
// // //     name: "Sara K.",
// // //     image:
// // //       "https://framerusercontent.com/images/tB6gOY1Poqvqoc4q8Qwi72vdU90.jpg?width=500&height=500",
// // //   },
// // //   {
// // //     title: "Unparalleled comfort and style!",
// // //     text: "From the moment we arrived, we felt like royalty. The villa's location is stunning, and every detail is thoughtfully curated. We can't wait to return!",
// // //     name: "Mark T.",
// // //     image:
// // //       "https://framerusercontent.com/images/rLZPVYnXQTE1Uhr8fZdBC8vQYpA.jpg?width=200&height=200",
// // //   },
// // //   {
// // //     title: "A perfect escape!",
// // //     text: "This villa exceeded all our expectations! The interiors are luxurious, the pool is breathtaking, and the staff went above and beyond to ensure our stay was unforgettable. Highly recommend!",
// // //     name: "Jessica M.",
// // //     image:
// // //       "https://framerusercontent.com/images/MeRDDIKMt5sob2i5SNEptAcFdmc.jpg?width=500&height=500",
// // //   },
// // // ];

// // // const Testimonial = () => {
// // //   const trackRef = useRef(null);
// // //   const [currentGroup, setCurrentGroup] = useState(0);

// // //   const totalGroups = Math.ceil(testimonials.length / 3);

// // //   useEffect(() => {
// // //     if (!trackRef.current) return;

// // //     const distance = currentGroup * 100;

// // //     gsap.to(trackRef.current, {
// // //       xPercent: -distance,
// // //       duration: 0.8,
// // //       ease: "power3.inOut",
// // //     });
// // //   }, [currentGroup]);

// // //   const nextSlide = () => {
// // //     setCurrentGroup((prev) => (prev + 1) % totalGroups);
// // //   };

// // //   const previousSlide = () => {
// // //     setCurrentGroup((prev) => (prev - 1 + totalGroups) % totalGroups);
// // //   };

// // //   return (
// // //     <section className="relative w-full overflow-hidden">
// // //       {/* BACKGROUND IMAGE */}
// // //       <div className="absolute inset-0">
// // //         <img
// // //           src="https://framerusercontent.com/images/8YDnvTEvxwlV3DE9jz1tFL0lXc.jpg?width=1920&height=900"
// // //           alt=""
// // //           className="h-full w-full object-cover"
// // //         />

// // //         {/* Dark overlay */}
// // //         <div className="absolute inset-0 bg-[#26180f]/25" />
// // //       </div>

// // //       {/* CONTENT */}
// // //       <div className="relative z-10 flex min-h-[750px] items-center justify-center px-[25px] py-[100px] md:px-[50px] lg:px-[80px]">
// // //         {/* WHITE TESTIMONIAL BOX */}
// // //         <div className="w-full max-w-[1500px] overflow-hidden bg-white">
// // //           {/* REVIEWS */}
// // //           <div className="overflow-hidden px-[30px] py-[60px] md:px-[55px] md:py-[75px] lg:px-[80px]">
// // //             <div
// // //               ref={trackRef}
// // //               className="flex w-full"
// // //             >
// // //               {testimonials.map((testimonial, index) => (
// // //                 <article
// // //                   key={index}
// // //                   className="
// // //                     w-full
// // //                     shrink-0
// // //                     px-0
// // //                     md:w-1/3
// // //                     md:px-[25px]
// // //                   "
// // //                 >
// // //                   {/* TITLE */}
// // //                   <h3 className="font-serif text-[27px] leading-[1.15] text-[#26180f] md:text-[29px] lg:text-[32px]">
// // //                     {testimonial.title}
// // //                   </h3>

// // //                   {/* REVIEW */}
// // //                   <p className="mt-[24px] max-w-[390px] font-sans text-[14px] leading-[1.7] text-[#514941] lg:text-[15px]">
// // //                     {testimonial.text}
// // //                   </p>

// // //                   {/* USER */}
// // //                   <div className="mt-[40px] flex items-center gap-[15px]">
// // //                     <div className="h-[52px] w-[52px] shrink-0 overflow-hidden rounded-full">
// // //                       <img
// // //                         src={testimonial.image}
// // //                         alt={testimonial.name}
// // //                         className="h-full w-full object-cover"
// // //                       />
// // //                     </div>

// // //                     <p className="font-sans text-[14px] text-[#514941]">
// // //                       {testimonial.name}
// // //                     </p>
// // //                   </div>
// // //                 </article>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* BOTTOM NAVIGATION */}
// // //           <div className="flex items-center justify-between border-t border-[#d6d4c9] px-[30px] py-[25px] md:px-[55px] lg:px-[80px]">
// // //             {/* SLIDE NUMBER */}
// // //             <p className="font-sans text-[13px] text-[#514941]">
// // //               0{currentGroup + 1} / 0{totalGroups}
// // //             </p>

// // //             {/* ARROWS */}
// // //             <div className="flex items-center gap-[10px]">
// // //               <button
// // //                 onClick={previousSlide}
// // //                 aria-label="Previous reviews"
// // //                 className="
// // //                   flex
// // //                   h-[48px]
// // //                   w-[48px]
// // //                   items-center
// // //                   justify-center
// // //                   rounded-full
// // //                   border
// // //                   border-[#26180f]
// // //                   text-[20px]
// // //                   text-[#26180f]
// // //                   transition-all
// // //                   duration-300
// // //                   hover:bg-[#26180f]
// // //                   hover:text-white
// // //                 "
// // //               >
// // //                 ←
// // //               </button>

// // //               <button
// // //                 onClick={nextSlide}
// // //                 aria-label="Next reviews"
// // //                 className="
// // //                   flex
// // //                   h-[48px]
// // //                   w-[48px]
// // //                   items-center
// // //                   justify-center
// // //                   rounded-full
// // //                   border
// // //                   border-[#26180f]
// // //                   text-[20px]
// // //                   text-[#26180f]
// // //                   transition-all
// // //                   duration-300
// // //                   hover:bg-[#26180f]
// // //                   hover:text-white
// // //                 "
// // //               >
// // //                 →
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Testimonial;

// // import { useEffect, useRef, useState } from "react";
// // import gsap from "gsap";

// // const testimonials = [
// //   {
// //     title: "Luxury Redefined",
// //     text: "Our stay at the villa was nothing short of magical. From the stunning views to the impeccable service, every moment felt like a dream. Highly recommend!",
// //     name: "Sophia M.",
// //     image:
// //       "https://framerusercontent.com/images/dUPOCQhI18b6xOT7J8X7ydkewA.jpg?width=500&height=500",
// //   },
// //   {
// //     title: "Paradise Found",
// //     text: "This villa is a slice of heaven. The design is stunning, the location is unbeatable, and the tranquility is unparalleled. We've already booked our next stay.",
// //     name: "Lina R.",
// //     image:
// //       "https://framerusercontent.com/images/xzjs7YXP70pNUFUjpY4tA4YaU.jpg?width=400&height=400",
// //   },
// //   {
// //     title: "Seamless Hospitality",
// //     text: "From the moment we arrived, we were treated like royalty. The concierge arranged everything we needed, including excursions and private dining. A five-star experience!",
// //     name: "Jason L.",
// //     image:
// //       "https://framerusercontent.com/images/4rY33TF8y63rbxPfNpWmDHAFdus.jpg?width=500&height=500",
// //   },
// //   {
// //     title: "Perfect for families",
// //     text: "The villa was the perfect getaway for our family. The spacious rooms, private pool, and kid-friendly amenities made our vacation unforgettable.",
// //     name: "Rahul K.",
// //     image:
// //       "https://framerusercontent.com/images/Z4eMSee9nA5FzExlLQyNEHBPA.jpg?width=400&height=400",
// //   },
// //   {
// //     title: "A memorable family getaway!",
// //     text: "We stayed at the villa for a family reunion, and it was perfect. Spacious rooms, modern amenities, and close to everything we needed. Everyone had a fantastic time!",
// //     name: "Sara K.",
// //     image:
// //       "https://framerusercontent.com/images/tB6gOY1Poqvqoc4q8Qwi72vdU90.jpg?width=500&height=500",
// //   },
// //   {
// //     title: "Unparalleled comfort and style!",
// //     text: "From the moment we arrived, we felt like royalty. The villa's location is stunning, and every detail is thoughtfully curated. We can't wait to return!",
// //     name: "Mark T.",
// //     image:
// //       "https://framerusercontent.com/images/rLZPVYnXQTE1Uhr8fZdBC8vQYpA.jpg?width=200&height=200",
// //   },
// //   {
// //     title: "A perfect escape!",
// //     text: "This villa exceeded all our expectations! The interiors are luxurious, the pool is breathtaking, and the staff went above and beyond to ensure our stay was unforgettable. Highly recommend!",
// //     name: "Jessica M.",
// //     image:
// //       "https://framerusercontent.com/images/MeRDDIKMt5sob2i5SNEptAcFdmc.jpg?width=500&height=500",
// //   },
// // ];

// // // How many cards visible at once on desktop
// // const VISIBLE = 3;
// // const BASE = testimonials.length;

// // // Triple the array so we can slide infinitely in either direction
// // // and always snap back into the middle copy without a visible jump.
// // const extended = [...testimonials, ...testimonials, ...testimonials];

// // const Testimonial = () => {
// //   const containerRef = useRef(null);
// //   const trackRef = useRef(null);
// //   // Start in the middle copy so we can go left or right freely
// //   const [index, setIndex] = useState(BASE);
// //   const isAnimating = useRef(false);

// //   const getItemWidth = () => {
// //     if (!containerRef.current) return 0;
// //     const isDesktop = window.innerWidth >= 768;
// //     return containerRef.current.offsetWidth / (isDesktop ? VISIBLE : 1);
// //   };

// //   const animateTo = (nextIndex, instant = false) => {
// //     const itemWidth = getItemWidth();
// //     isAnimating.current = true;
// //     gsap.to(trackRef.current, {
// //       x: -itemWidth * nextIndex,
// //       duration: instant ? 0 : 0.8,
// //       ease: "power3.inOut",
// //       onComplete: () => {
// //         isAnimating.current = false;
// //       },
// //     });
// //   };

// //   useEffect(() => {
// //     animateTo(index);

// //     // Seamless wrap: once we've fully scrolled past one full set,
// //     // silently jump back into the middle copy (no animation).
// //     if (index >= BASE * 2) {
// //       const resetIndex = index - BASE;
// //       const t = setTimeout(() => {
// //         setIndex(resetIndex);
// //         requestAnimationFrame(() => animateTo(resetIndex, true));
// //       }, 800);
// //       return () => clearTimeout(t);
// //     }
// //     if (index < BASE) {
// //       const resetIndex = index + BASE;
// //       const t = setTimeout(() => {
// //         setIndex(resetIndex);
// //         requestAnimationFrame(() => animateTo(resetIndex, true));
// //       }, 800);
// //       return () => clearTimeout(t);
// //     }
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [index]);

// //   useEffect(() => {
// //     const handleResize = () => animateTo(index, true);
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, []);

// //   const nextSlide = () => {
// //     if (isAnimating.current) return;
// //     setIndex((prev) => prev + 1);
// //   };

// //   const previousSlide = () => {
// //     if (isAnimating.current) return;
// //     setIndex((prev) => prev - 1);
// //   };

// //   // Real (non-extended) slide number for display, 1-indexed
// //   const displayNumber = ((index % BASE) + BASE) % BASE;

// //   return (
// //     <section className="relative w-full overflow-hidden">
// //       {/* BACKGROUND IMAGE */}
// //       <div className="absolute inset-0">
// //         <img
// //           src="https://framerusercontent.com/images/8YDnvTEvxwlV3DE9jz1tFL0lXc.jpg?width=1920&height=900"
// //           alt=""
// //           className="h-full w-full object-cover"
// //         />
// //         <div className="absolute inset-0 bg-[#26180f]/25" />
// //       </div>

// //       {/* CONTENT */}
// //       <div className="relative z-10 flex min-h-[750px] items-center justify-center px-[25px] py-[100px] md:px-[50px] lg:px-[80px]">
// //         {/* WRAPPER so arrows can sit outside the white card */}
// //         <div className="relative w-full max-w-[1500px]">
// //           {/* LEFT ARROW - floats outside/over the edge of the card */}
// //           <button
// //             onClick={previousSlide}
// //             aria-label="Previous reviews"
// //             className="
// //               absolute
// //               left-[-24px]
// //               top-1/2
// //               z-20
// //               flex
// //               h-[56px]
// //               w-[56px]
// //               -translate-y-1/2
// //               items-center
// //               justify-center
// //               rounded-full
// //               bg-white
// //               text-[22px]
// //               text-[#26180f]
// //               shadow-md
// //               transition-all
// //               duration-300
// //               hover:bg-[#26180f]
// //               hover:text-white
// //             "
// //           >
// //             ←
// //           </button>

// //           {/* RIGHT ARROW */}
// //           <button
// //             onClick={nextSlide}
// //             aria-label="Next reviews"
// //             className="
// //               absolute
// //               right-[-24px]
// //               top-1/2
// //               z-20
// //               flex
// //               h-[56px]
// //               w-[56px]
// //               -translate-y-1/2
// //               items-center
// //               justify-center
// //               rounded-full
// //               bg-white
// //               text-[22px]
// //               text-[#26180f]
// //               shadow-md
// //               transition-all
// //               duration-300
// //               hover:bg-[#26180f]
// //               hover:text-white
// //             "
// //           >
// //             →
// //           </button>

// //           {/* WHITE TESTIMONIAL BOX */}
// //           <div
// //             ref={containerRef}
// //             className="w-full overflow-hidden bg-white"
// //           >
// //             <div className="overflow-hidden px-[30px] py-[60px] md:px-[55px] md:py-[75px] lg:px-[80px]">
// //               <div ref={trackRef} className="flex w-full">
// //                 {extended.map((testimonial, i) => (
// //                   <article
// //                     key={i}
// //                     className="w-full shrink-0 px-0 md:w-1/3 md:px-[25px]"
// //                   >
// //                     {/* TITLE */}
// //                     <h3 className="font-serif text-[27px] leading-[1.15] text-[#26180f] md:text-[29px] lg:text-[32px]">
// //                       {testimonial.title}
// //                     </h3>

// //                     {/* REVIEW */}
// //                     <p className="mt-[24px] max-w-[390px] font-sans text-[14px] leading-[1.7] text-[#514941] lg:text-[15px]">
// //                       {testimonial.text}
// //                     </p>

// //                     {/* USER */}
// //                     <div className="mt-[40px] flex items-center gap-[15px]">
// //                       <div className="h-[52px] w-[52px] shrink-0 overflow-hidden rounded-full">
// //                         <img
// //                           src={testimonial.image}
// //                           alt={testimonial.name}
// //                           className="h-full w-full object-cover"
// //                         />
// //                       </div>
// //                       <p className="font-sans text-[14px] text-[#514941]">
// //                         {testimonial.name}
// //                       </p>
// //                     </div>
// //                   </article>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Testimonial;

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// const testimonials = [
//   {
//     title: "Luxury Redefined",
//     text: "Our stay at the villa was nothing short of magical. From the stunning views to the impeccable service, every moment felt like a dream. Highly recommend!",
//     name: "Sophia M.",
//     image:
//       "https://framerusercontent.com/images/dUPOCQhI18b6xOT7J8X7ydkewA.jpg?width=500&height=500",
//   },
//   {
//     title: "Paradise Found",
//     text: "This villa is a slice of heaven. The design is stunning, the location is unbeatable, and the tranquility is unparalleled. We've already booked our next stay.",
//     name: "Lina R.",
//     image:
//       "https://framerusercontent.com/images/xzjs7YXP70pNUFUjpY4tA4YaU.jpg?width=400&height=400",
//   },
//   {
//     title: "Seamless Hospitality",
//     text: "From the moment we arrived, we were treated like royalty. The concierge arranged everything we needed, including excursions and private dining. A five-star experience!",
//     name: "Jason L.",
//     image:
//       "https://framerusercontent.com/images/4rY33TF8y63rbxPfNpWmDHAFdus.jpg?width=500&height=500",
//   },
//   {
//     title: "Perfect for families",
//     text: "The villa was the perfect getaway for our family. The spacious rooms, private pool, and kid-friendly amenities made our vacation unforgettable.",
//     name: "Rahul K.",
//     image:
//       "https://framerusercontent.com/images/Z4eMSee9nA5FzExlLQyNEHBPA.jpg?width=400&height=400",
//   },
//   {
//     title: "A memorable family getaway!",
//     text: "We stayed at the villa for a family reunion, and it was perfect. Spacious rooms, modern amenities, and close to everything we needed. Everyone had a fantastic time!",
//     name: "Sara K.",
//     image:
//       "https://framerusercontent.com/images/tB6gOY1Poqvqoc4q8Qwi72vdU90.jpg?width=500&height=500",
//   },
//   {
//     title: "Unparalleled comfort and style!",
//     text: "From the moment we arrived, we felt like royalty. The villa's location is stunning, and every detail is thoughtfully curated. We can't wait to return!",
//     name: "Mark T.",
//     image:
//       "https://framerusercontent.com/images/rLZPVYnXQTE1Uhr8fZdBC8vQYpA.jpg?width=200&height=200",
//   },
//   {
//     title: "A perfect escape!",
//     text: "This villa exceeded all our expectations! The interiors are luxurious, the pool is breathtaking, and the staff went above and beyond to ensure our stay was unforgettable. Highly recommend!",
//     name: "Jessica M.",
//     image:
//       "https://framerusercontent.com/images/MeRDDIKMt5sob2i5SNEptAcFdmc.jpg?width=500&height=500",
//   },
// ];

// // How many cards visible at once on desktop
// const VISIBLE = 3;
// const BASE = testimonials.length;

// // Triple the array so we can slide infinitely in either direction
// // and always snap back into the middle copy without a visible jump.
// const extended = [...testimonials, ...testimonials, ...testimonials];

// const AUTOPLAY_MS = 4000;

// const Testimonial = () => {
//   const containerRef = useRef(null);
//   const trackRef = useRef(null);
//   // Start in the middle copy so we can go left or right freely
//   const [index, setIndex] = useState(BASE);
//   const isAnimating = useRef(false);
//   const autoplayRef = useRef(null);

//   const getItemWidth = () => {
//     if (!containerRef.current) return 0;
//     const isDesktop = window.innerWidth >= 768;
//     return containerRef.current.offsetWidth / (isDesktop ? VISIBLE : 1);
//   };

//   const animateTo = (nextIndex, instant = false) => {
//     const itemWidth = getItemWidth();
//     isAnimating.current = true;
//     gsap.to(trackRef.current, {
//       x: -itemWidth * nextIndex,
//       duration: instant ? 0 : 0.8,
//       ease: "power3.inOut",
//       onComplete: () => {
//         isAnimating.current = false;
//       },
//     });
//   };

//   useEffect(() => {
//     animateTo(index);

//     // Seamless wrap: once we've fully scrolled past one full set,
//     // silently jump back into the middle copy (no animation).
//     if (index >= BASE * 2) {
//       const resetIndex = index - BASE;
//       const t = setTimeout(() => {
//         setIndex(resetIndex);
//         requestAnimationFrame(() => animateTo(resetIndex, true));
//       }, 800);
//       return () => clearTimeout(t);
//     }
//     if (index < BASE) {
//       const resetIndex = index + BASE;
//       const t = setTimeout(() => {
//         setIndex(resetIndex);
//         requestAnimationFrame(() => animateTo(resetIndex, true));
//       }, 800);
//       return () => clearTimeout(t);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [index]);

//   useEffect(() => {
//     const handleResize = () => animateTo(index, true);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const nextSlide = () => {
//     if (isAnimating.current) return;
//     setIndex((prev) => prev + 1);
//   };

//   const previousSlide = () => {
//     if (isAnimating.current) return;
//     setIndex((prev) => prev - 1);
//   };

//   const startAutoplay = () => {
//     if (autoplayRef.current) clearInterval(autoplayRef.current);
//     autoplayRef.current = setInterval(() => {
//       setIndex((prev) => (isAnimating.current ? prev : prev + 1));
//     }, AUTOPLAY_MS);
//   };

//   useEffect(() => {
//     startAutoplay();
//     return () => clearInterval(autoplayRef.current);
//   }, []);

//   const handleManualNext = () => {
//     nextSlide();
//     startAutoplay(); // reset the timer so it doesn't double up right after a click
//   };

//   const handleManualPrev = () => {
//     previousSlide();
//     startAutoplay();
//   };

//   return (
//     <section className="relative w-full overflow-hidden">
//       {/* BACKGROUND IMAGE */}
//       <div className="absolute inset-0">
//         <img
//           src="https://framerusercontent.com/images/8YDnvTEvxwlV3DE9jz1tFL0lXc.jpg?width=1920&height=900"
//           alt=""
//           className="h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 bg-[#26180f]/25" />
//       </div>

//       {/* CONTENT */}
//       <div className="relative z-10 flex min-h-[750px] items-center justify-center px-[25px] py-[100px] md:px-[50px] lg:px-[80px]">
//         {/* WRAPPER so arrows can sit outside the white card */}
//         <div className="relative w-full max-w-[1500px]">
//           {/* LEFT ARROW - plain chevron, floats over the background image */}
//           <button
//             onClick={handleManualPrev}
//             aria-label="Previous reviews"
//             className="
//               absolute
//               left-[-64px]
//               top-1/2
//               z-20
//               flex
//               h-[24px]
//               w-[24px]
//               -translate-y-1/2
//               items-center
//               justify-center
//               text-white
//               opacity-90
//               transition-opacity
//               duration-300
//               hover:opacity-60
//               [filter:drop-shadow(0_1px_3px_rgba(0,0,0,0.5))]
//             "
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M15 5L8 12L15 19"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>

//           {/* RIGHT ARROW */}
//           <button
//             onClick={handleManualNext}
//             aria-label="Next reviews"
//             className="
//               absolute
//               right-[-64px]
//               top-1/2
//               z-20
//               flex
//               h-[24px]
//               w-[24px]
//               -translate-y-1/2
//               items-center
//               justify-center
//               text-white
//               opacity-90
//               transition-opacity
//               duration-300
//               hover:opacity-60
//               [filter:drop-shadow(0_1px_3px_rgba(0,0,0,0.5))]
//             "
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M9 5L16 12L9 19"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>

//           {/* WHITE TESTIMONIAL BOX */}
//           <div
//             ref={containerRef}
//             className="w-full overflow-hidden bg-white"
//           >
//             <div className="overflow-hidden px-[30px] py-[60px] md:px-[55px] md:py-[75px] lg:px-[80px]">
//               <div ref={trackRef} className="flex w-full">
//                 {extended.map((testimonial, i) => (
//                   <article
//                     key={i}
//                     className="w-full shrink-0 px-0 md:w-1/3 md:px-[25px]"
//                   >
//                     {/* TITLE */}
//                     <h3 className="font-serif text-[27px] leading-[1.15] text-[#26180f] md:text-[29px] lg:text-[32px]">
//                       {testimonial.title}
//                     </h3>

//                     {/* REVIEW */}
//                     <p className="mt-[24px] max-w-[390px] font-sans text-[14px] leading-[1.7] text-[#514941] lg:text-[15px]">
//                       {testimonial.text}
//                     </p>

//                     {/* USER */}
//                     <div className="mt-[40px] flex items-center gap-[15px]">
//                       <div className="h-[52px] w-[52px] shrink-0 overflow-hidden rounded-full">
//                         <img
//                           src={testimonial.image}
//                           alt={testimonial.name}
//                           className="h-full w-full object-cover"
//                         />
//                       </div>
//                       <p className="font-sans text-[14px] text-[#514941]">
//                         {testimonial.name}
//                       </p>
//                     </div>
//                   </article>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;


// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// const testimonials = [
//   {
//     title: "Luxury Redefined",
//     text: "Our stay at the villa was nothing short of magical. From the stunning views to the impeccable service, every moment felt like a dream. Highly recommend!",
//     name: "Sophia M.",
//     image:
//       "https://framerusercontent.com/images/dUPOCQhI18b6xOT7J8X7ydkewA.jpg?width=500&height=500",
//   },
//   {
//     title: "Paradise Found",
//     text: "This villa is a slice of heaven. The design is stunning, the location is unbeatable, and the tranquility is unparalleled. We've already booked our next stay.",
//     name: "Lina R.",
//     image:
//       "https://framerusercontent.com/images/xzjs7YXP70pNUFUjpY4tA4YaU.jpg?width=400&height=400",
//   },
//   {
//     title: "Seamless Hospitality",
//     text: "From the moment we arrived, we were treated like royalty. The concierge arranged everything we needed, including excursions and private dining. A five-star experience!",
//     name: "Jason L.",
//     image:
//       "https://framerusercontent.com/images/4rY33TF8y63rbxPfNpWmDHAFdus.jpg?width=500&height=500",
//   },
//   {
//     title: "Perfect for families",
//     text: "The villa was the perfect getaway for our family. The spacious rooms, private pool, and kid-friendly amenities made our vacation unforgettable.",
//     name: "Rahul K.",
//     image:
//       "https://framerusercontent.com/images/Z4eMSee9nA5FzExlLQyNEHBPA.jpg?width=400&height=400",
//   },
//   {
//     title: "A memorable family getaway!",
//     text: "We stayed at the villa for a family reunion, and it was perfect. Spacious rooms, modern amenities, and close to everything we needed. Everyone had a fantastic time!",
//     name: "Sara K.",
//     image:
//       "https://framerusercontent.com/images/tB6gOY1Poqvqoc4q8Qwi72vdU90.jpg?width=500&height=500",
//   },
//   {
//     title: "Unparalleled comfort and style!",
//     text: "From the moment we arrived, we felt like royalty. The villa's location is stunning, and every detail is thoughtfully curated. We can't wait to return!",
//     name: "Mark T.",
//     image:
//       "https://framerusercontent.com/images/rLZPVYnXQTE1Uhr8fZdBC8vQYpA.jpg?width=200&height=200",
//   },
//   {
//     title: "A perfect escape!",
//     text: "This villa exceeded all our expectations! The interiors are luxurious, the pool is breathtaking, and the staff went above and beyond to ensure our stay was unforgettable. Highly recommend!",
//     name: "Jessica M.",
//     image:
//       "https://framerusercontent.com/images/MeRDDIKMt5sob2i5SNEptAcFdmc.jpg?width=500&height=500",
//   },
// ];

// const VISIBLE_DESKTOP = 3;
// const BASE = testimonials.length;
// const extended = [...testimonials, ...testimonials, ...testimonials];

// const AUTOPLAY_MS = 3000;

// const Testimonial = () => {
//   const viewportRef = useRef(null);
//   const trackRef = useRef(null);

//   const [index, setIndex] = useState(BASE);

//   const isAnimating = useRef(false);
//   const autoplayRef = useRef(null);

//   /* -----------------------------------------
//      GET ONE REVIEW WIDTH
//   ----------------------------------------- */
//   const getItemWidth = () => {
//     if (!viewportRef.current) return 0;

//     const isDesktop = window.innerWidth >= 768;

//     return (
//       viewportRef.current.offsetWidth /
//       (isDesktop ? VISIBLE_DESKTOP : 1)
//     );
//   };

//   /* -----------------------------------------
//      MOVE SLIDER
//   ----------------------------------------- */
//   const animateTo = (nextIndex, instant = false) => {
//     const itemWidth = getItemWidth();

//     if (!trackRef.current || !itemWidth) return;

//     isAnimating.current = true;

//     gsap.to(trackRef.current, {
//       x: -itemWidth * nextIndex,
//       duration: instant ? 0 : 0.8,
//       ease: "power3.inOut",

//       onComplete: () => {
//         isAnimating.current = false;
//       },
//     });
//   };

//   /* -----------------------------------------
//      SLIDE WHEN INDEX CHANGES
//   ----------------------------------------- */
//   useEffect(() => {
//     animateTo(index);

//     // Infinite loop reset
//     if (index >= BASE * 2) {
//       const resetIndex = index - BASE;

//       const timeout = setTimeout(() => {
//         setIndex(resetIndex);

//         requestAnimationFrame(() => {
//           animateTo(resetIndex, true);
//         });
//       }, 800);

//       return () => clearTimeout(timeout);
//     }

//     if (index < BASE) {
//       const resetIndex = index + BASE;

//       const timeout = setTimeout(() => {
//         setIndex(resetIndex);

//         requestAnimationFrame(() => {
//           animateTo(resetIndex, true);
//         });
//       }, 800);

//       return () => clearTimeout(timeout);
//     }

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [index]);

//   /* -----------------------------------------
//      RESPONSIVE
//   ----------------------------------------- */
//   useEffect(() => {
//     const handleResize = () => {
//       animateTo(index, true);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   /* -----------------------------------------
//      NEXT
//   ----------------------------------------- */
//   const nextSlide = () => {
//     if (isAnimating.current) return;

//     setIndex((prev) => prev + 1);
//   };

//   /* -----------------------------------------
//      PREVIOUS
//   ----------------------------------------- */
//   const previousSlide = () => {
//     if (isAnimating.current) return;

//     setIndex((prev) => prev - 1);
//   };

//   /* -----------------------------------------
//      AUTOPLAY
//   ----------------------------------------- */
//   const startAutoplay = () => {
//     if (autoplayRef.current) {
//       clearInterval(autoplayRef.current);
//     }

//     autoplayRef.current = setInterval(() => {
//       if (!isAnimating.current) {
//         setIndex((prev) => prev + 1);
//       }
//     }, AUTOPLAY_MS);
//   };

//   useEffect(() => {
//     startAutoplay();

//     return () => {
//       clearInterval(autoplayRef.current);
//     };
//   }, []);

//   /* -----------------------------------------
//      MANUAL BUTTONS
//   ----------------------------------------- */
//   const handleNext = () => {
//     nextSlide();
//     startAutoplay();
//   };

//   const handlePrevious = () => {
//     previousSlide();
//     startAutoplay();
//   };

//   return (
//     <section className="relative w-full overflow-hidden">
//       {/* =========================================
//           BACKGROUND IMAGE
//       ========================================== */}
//       <div className="absolute inset-0">
//         <img
//           src="https://framerusercontent.com/images/8YDnvTEvxwlV3DE9jz1tFL0lXc.jpg?width=1920&height=900"
//           alt=""
//           className="h-full w-full object-cover"
//         />

//         <div className="absolute inset-0 bg-[#26180f]/25" />
//       </div>

//       {/* =========================================
//           MAIN SECTION
//       ========================================== */}
// {/* Increased min-h-[800px] and lg:min-h-[900px] */}
// <div className="relative z-10 flex min-h-[800px] items-center justify-center px-[30px] py-[90px] md:px-[50px] lg:min-h-[900px] lg:px-[30px]">        {/* =========================================
//             WHITE CARD
//         ========================================== */}
//         <div className="relative w-full max-w-[1575px] bg-white">
//           {/* =======================================
//               SLIDER VIEWPORT
//           ======================================== */}
//           <div
//             ref={viewportRef}
//             className="
//               relative
//               overflow-hidden
//               border-y
//               border-[#d6d4c9]
//             "
//           >
//             {/* =====================================
//                 LEFT ARROW AREA
//             ====================================== */}
//             <div
//               className="
//                 absolute
//                 left-0
//                 top-0
//                 z-20
//                 flex
//                 h-full
//                 w-[68px]
//                 items-center
//                 justify-center
//                 border-r
//                 border-[#d6d4c9]
//                 bg-white
//               "
//             >
//               <button
//                 type="button"
//                 onClick={handlePrevious}
//                 aria-label="Previous reviews"
//                 className="
//                   flex
//                   h-[40px]
//                   w-[40px]
//                   items-center
//                   justify-center
//                   text-[#26180f]
//                   transition-opacity
//                   duration-300
//                   hover:opacity-50
//                 "
//               >
//                 <svg
//                   width="28"
//                   height="28"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                 >
//                   <path
//                     d="M15 5L8 12L15 19"
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* =====================================
//                 RIGHT ARROW AREA
//             ====================================== */}
//             <div
//               className="
//                 absolute
//                 right-0
//                 top-0
//                 z-20
//                 flex
//                 h-full
//                 w-[68px]
//                 items-center
//                 justify-center
//                 border-l
//                 border-[#d6d4c9]
//                 bg-white
//               "
//             >
//               <button
//                 type="button"
//                 onClick={handleNext}
//                 aria-label="Next reviews"
//                 className="
//                   flex
//                   h-[40px]
//                   w-[40px]
//                   items-center
//                   justify-center
//                   text-[#26180f]
//                   transition-opacity
//                   duration-300
//                   hover:opacity-50
//                 "
//               >
//                 <svg
//                   width="28"
//                   height="28"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                 >
//                   <path
//                     d="M9 5L16 12L9 19"
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* =====================================
//                 REVIEWS
//             ====================================== */}
//             <div
//               className="
//                 mx-[68px]
//                 overflow-hidden
//               "
//             >
//               <div
//                 ref={trackRef}
//                 className="flex"
//               >
//                 {extended.map((testimonial, i) => (
//                   <article
//                     key={`${testimonial.name}-${i}`}
//                     className="
//                       w-full
//                       shrink-0
//                       px-[29px]
//                       py-[100px]    /* Increased from 48px */
//                       md:w-1/3
//                       md:px-[29px]
//                       md:py-[100px] /* Increased from 48px */
//                       lg:py-[120px] /* Increased from 50px */
//                     "
//                   >
//                     {/* TITLE */}
//                     <h3
//                       className="
//                         font-serif
//                         text-[25px]
//                         leading-[1.2]
//                         text-[#26180f]
//                         md:text-[27px]
//                         lg:text-[29px]
//                       "
//                     >
//                       {testimonial.title}
//                     </h3>

//                     {/* REVIEW */}
//                     <p
//                       className="
//                         mt-[20px]
//                         max-w-[400px]
//                         font-sans
//                         text-[14px]
//                         leading-[1.7]
//                         text-[#514941]
//                         md:text-[15px]
//                       "
//                     >
//                       {testimonial.text}
//                     </p>

//                     {/* =================================
//                         LARGE SPACE BEFORE USER
//                     ================================= */}
//                     <div
//                       className="
//                         mt-[46px]
//                         flex
//                         items-center
//                         gap-[14px]
//                       "
//                     >
//                       {/* AVATAR */}
//                       <div
//                         className="
//                           h-[30px]
//                           w-[30px]
//                           shrink-0
//                           overflow-hidden
//                         "
//                       >
//                         <img
//                           src={testimonial.image}
//                           alt={testimonial.name}
//                           className="
//                             h-full
//                             w-full
//                             object-cover
//                           "
//                         />
//                       </div>

//                       {/* NAME */}
//                       <span
//                         className="
//                           font-sans
//                           text-[14px]
//                           text-[#514941]
//                         "
//                       >
//                         {testimonial.name}
//                       </span>
//                     </div>
//                   </article>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;


import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const testimonials = [
  {
    title: "Luxury Redefined",
    text: "Our stay at the villa was nothing short of magical. From the stunning views to the impeccable service, every moment felt like a dream. Highly recommend!",
    name: "Sophia M.",
    image:
      "https://framerusercontent.com/images/dUPOCQhI18b6xOT7J8X7ydkewA.jpg?width=500&height=500",
  },
  {
    title: "Paradise Found",
    text: "This villa is a slice of heaven. The design is stunning, the location is unbeatable, and the tranquility is unparalleled. We've already booked our next stay.",
    name: "Lina R.",
    image:
      "https://framerusercontent.com/images/xzjs7YXP70pNUFUjpY4tA4YaU.jpg?width=400&height=400",
  },
  {
    title: "Seamless Hospitality",
    text: "From the moment we arrived, we were treated like royalty. The concierge arranged everything we needed, including excursions and private dining. A five-star experience!",
    name: "Jason L.",
    image:
      "https://framerusercontent.com/images/4rY33TF8y63rbxPfNpWmDHAFdus.jpg?width=500&height=500",
  },
  {
    title: "Perfect for families",
    text: "The villa was the perfect getaway for our family. The spacious rooms, private pool, and kid-friendly amenities made our vacation unforgettable.",
    name: "Rahul K.",
    image:
      "https://framerusercontent.com/images/Z4eMSee9nA5FzExlLQyNEHBPA.jpg?width=400&height=400",
  },
  {
    title: "A memorable family getaway!",
    text: "We stayed at the villa for a family reunion, and it was perfect. Spacious rooms, modern amenities, and close to everything we needed. Everyone had a fantastic time!",
    name: "Sara K.",
    image:
      "https://framerusercontent.com/images/tB6gOY1Poqvqoc4q8Qwi72vdU90.jpg?width=500&height=500",
  },
  {
    title: "Unparalleled comfort and style!",
    text: "From the moment we arrived, we felt like royalty. The villa's location is stunning, and every detail is thoughtfully curated. We can't wait to return!",
    name: "Mark T.",
    image:
      "https://framerusercontent.com/images/rLZPVYnXQTE1Uhr8fZdBC8vQYpA.jpg?width=200&height=200",
  },
  {
    title: "A perfect escape!",
    text: "This villa exceeded all our expectations! The interiors are luxurious, the pool is breathtaking, and the staff went above and beyond to ensure our stay was unforgettable. Highly recommend!",
    name: "Jessica M.",
    image:
      "https://framerusercontent.com/images/MeRDDIKMt5sob2i5SNEptAcFdmc.jpg?width=500&height=500",
  },
];

const BASE = testimonials.length;
const extendedTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

const AUTOPLAY_MS = 3000;

const Testimonial = () => {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const [index, setIndex] = useState(BASE);

  const isAnimating = useRef(false);
  const autoplayRef = useRef(null);

  /*
  --------------------------------------------------
  GET ACTUAL RENDERED CARD WIDTH
  --------------------------------------------------
  This measures the first article directly.

  It automatically accounts for:
  - left arrow area
  - right arrow area
  - mx-[68px]
  - md:w-1/3
  - padding
  - fractional widths
  --------------------------------------------------
  */
  const getItemWidth = () => {
    if (!trackRef.current) return 0;

    const firstItem = trackRef.current.children[0];

    if (!firstItem) return 0;

    return firstItem.getBoundingClientRect().width;
  };

  /*
  --------------------------------------------------
  MOVE SLIDER
  --------------------------------------------------
  */
  const animateTo = (nextIndex, instant = false) => {
    const itemWidth = getItemWidth();

    if (!trackRef.current || !itemWidth) return;

    isAnimating.current = true;

    gsap.to(trackRef.current, {
      x: -itemWidth * nextIndex,
      duration: instant ? 0 : 0.8,
      ease: "power3.inOut",

      onComplete: () => {
        isAnimating.current = false;
      },
    });
  };

  /*
  --------------------------------------------------
  SLIDE WHEN INDEX CHANGES
  --------------------------------------------------
  */
  useEffect(() => {
    animateTo(index);

    /*
    Infinite loop reset when moving too far forward
    */
    if (index >= BASE * 2) {
      const resetIndex = index - BASE;

      const timeout = setTimeout(() => {
        setIndex(resetIndex);

        requestAnimationFrame(() => {
          animateTo(resetIndex, true);
        });
      }, 800);

      return () => clearTimeout(timeout);
    }

    /*
    Infinite loop reset when moving too far backward
    */
    if (index < BASE) {
      const resetIndex = index + BASE;

      const timeout = setTimeout(() => {
        setIndex(resetIndex);

        requestAnimationFrame(() => {
          animateTo(resetIndex, true);
        });
      }, 800);

      return () => clearTimeout(timeout);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  /*
  --------------------------------------------------
  RESPONSIVE RESIZE
  --------------------------------------------------
  */
  useEffect(() => {
    const handleResize = () => {
      requestAnimationFrame(() => {
        animateTo(index, true);
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  /*
  --------------------------------------------------
  NEXT SLIDE
  --------------------------------------------------
  */
  const nextSlide = () => {
    if (isAnimating.current) return;

    setIndex((previousIndex) => previousIndex + 1);
  };

  /*
  --------------------------------------------------
  PREVIOUS SLIDE
  --------------------------------------------------
  */
  const previousSlide = () => {
    if (isAnimating.current) return;

    setIndex((previousIndex) => previousIndex - 1);
  };

  /*
  --------------------------------------------------
  AUTOPLAY
  --------------------------------------------------
  */
  const startAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }

    autoplayRef.current = setInterval(() => {
      if (!isAnimating.current) {
        setIndex((previousIndex) => previousIndex + 1);
      }
    }, AUTOPLAY_MS);
  };

  useEffect(() => {
    startAutoplay();

    return () => {
      clearInterval(autoplayRef.current);
    };
  }, []);

  /*
  --------------------------------------------------
  MANUAL BUTTONS
  --------------------------------------------------
  */
  const handleNext = () => {
    nextSlide();
    startAutoplay();
  };

  const handlePrevious = () => {
    previousSlide();
    startAutoplay();
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://framerusercontent.com/images/8YDnvTEvxwlV3DE9jz1tFL0lXc.jpg?width=1920&height=900"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#26180f]/25" />
      </div>

      {/* Main Section */}
      <div className="relative z-10 flex min-h-[800px] items-center justify-center px-[30px] py-[90px] md:px-[50px] lg:min-h-[900px] lg:px-[30px]">
        {/* White Review Card */}
        <div className="relative w-full max-w-[1575px] translate-y-[100px] bg-white">
          {/* Slider Viewport */}
          <div
            ref={viewportRef}
            className="
              relative
              overflow-hidden
              border-y
              border-[#d6d4c9]
            "
          >
            {/* Left Arrow Area */}
            <div
              className="
                absolute
                left-0
                top-0
                z-20
                flex
                h-full
                w-[68px]
                items-center
                justify-center
                border-r
                border-[#d6d4c9]
                bg-white
              "
            >
              <button
                type="button"
                onClick={handlePrevious}
                aria-label="Previous reviews"
                className="
                  flex
                  h-[40px]
                  w-[40px]
                  items-center
                  justify-center
                  text-[#26180f]
                  transition-opacity
                  duration-300
                  hover:opacity-50
                "
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15 5L8 12L15 19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Right Arrow Area */}
            <div
              className="
                absolute
                right-0
                top-0
                z-20
                flex
                h-full
                w-[68px]
                items-center
                justify-center
                border-l
                border-[#d6d4c9]
                bg-white
              "
            >
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next reviews"
                className="
                  flex
                  h-[40px]
                  w-[40px]
                  items-center
                  justify-center
                  text-[#26180f]
                  transition-opacity
                  duration-300
                  hover:opacity-50
                "
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 5L16 12L9 19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Reviews */}
            <div className="mx-[68px] overflow-hidden">
              <div ref={trackRef} className="flex">
                {extendedTestimonials.map((testimonial, itemIndex) => (
                  <article
                    key={`${testimonial.name}-${itemIndex}`}
                    className="
                      w-full
                      shrink-0
                      px-[29px]
                      py-[100px]
                      md:w-1/3
                      md:px-[29px]
                      md:py-[70px]
                      lg:py-[80px]
                    "
                  >
                    {/* Review Title */}
                    <h3
                      className="
                        font-serif
                        text-[25px]
                        leading-[1.2]
                        text-[#26180f]
                        md:text-[27px]
                        lg:text-[29px]
                      "
                    >
                      {testimonial.title}
                    </h3>

                    {/* Review Text */}
                    <p
                      className="
                        mt-[20px]
                        max-w-[400px]
                        font-sans
                        text-[14px]
                        leading-[1.7]
                        text-[#514941]
                        md:text-[15px]
                      "
                    >
                      {testimonial.text}
                    </p>

                    {/* Reviewer Information */}
                    <div className="mt-[46px] flex items-center gap-[14px]">
                      {/* Avatar */}
                      <div className="h-[30px] w-[30px] shrink-0 overflow-hidden rounded-full">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Name */}
                      <span
                        className="
                          font-sans
                          text-[14px]
                          text-[#514941]
                        "
                      >
                        {testimonial.name}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;