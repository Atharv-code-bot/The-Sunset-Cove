// // import { useLayoutEffect, useRef } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // import Hero from "../Hero/Hero";
// // import Welcome from "../Welcome/Welcome";

// // gsap.registerPlugin(ScrollTrigger);

// // const VillaScroll = () => {
// //   const sectionRef = useRef(null);
// //   const sceneRef = useRef(null);
// //   const welcomeRef = useRef(null);

// //   useLayoutEffect(() => {
// //     const ctx = gsap.context(() => {

// //       // Welcome starts below the screen
// //       gsap.set(welcomeRef.current, {
// //         yPercent: 100,
// //       });

// //       // Scroll-controlled animation
// //       gsap.to(welcomeRef.current, {
// //         yPercent: 0,

// //         ease: "none",

// //         scrollTrigger: {
// //           trigger: sectionRef.current,

// //           start: "top top",

// //           end: "bottom bottom",

// //           scrub: 1,

// //           pin: sceneRef.current,

// //           anticipatePin: 1,
// //         },
// //       });

// //     }, sectionRef);

// //     return () => ctx.revert();
// //   }, []);

// //   return (
// //     <section
// //       ref={sectionRef}
// //       className="relative h-[200vh]"
// //     >

// //       <div
// //         ref={sceneRef}
// //         className="relative h-screen w-full overflow-hidden"
// //       >

// //         {/* Hero */}
// //         <Hero />

// //         {/* Welcome sliding from bottom */}
// //         <div
// //           ref={welcomeRef}
// //           className="absolute inset-0 z-20"
// //         >
// //           <Welcome />
// //         </div>

// //       </div>

// //     </section>
// //   );
// // };

// // export default VillaScroll;

// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Hero from "../Hero/Hero";
// import Welcome from "../Welcome/Welcome";

// gsap.registerPlugin(ScrollTrigger);

// const VillaScroll = ({ onLeaveLanding, onEnterLanding }) => {
//   const sectionRef = useRef(null);
//   const sceneRef = useRef(null);
//   const welcomeRef = useRef(null);

//   useLayoutEffect(() => {
//      console.log("effect running", sectionRef.current);
//     const ctx = gsap.context(() => {
//       gsap.set(welcomeRef.current, { yPercent: 100 });

//       gsap.to(welcomeRef.current, {
//         yPercent: 0,
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "bottom bottom",
//           scrub: 1,
//           pin: sceneRef.current,
//           anticipatePin: 1,
//           onUpdate: (self) => {
//             console.log("scroll progress:", self.progress);
//             if (self.progress > 0.87) {
//               onLeaveLanding?.();
//             } else {
//               onEnterLanding?.();
//             }
//           },
//           onLeaveBack: () => onEnterLanding?.(),
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, [onLeaveLanding, onEnterLanding]);

//   return (
//     <section ref={sectionRef} className="relative h-[200vh]">
//       <div ref={sceneRef} className="relative h-screen w-full overflow-hidden">
//         <Hero />
//         <div ref={welcomeRef} className="absolute inset-0 z-20">
//           <Welcome />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VillaScroll;


import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const logoRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoRef.current,
        {
          y: 180,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.8,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="absolute inset-0">
      {/* HERO IMAGE */}

      <img
        src="/images/hero.jpg"
        alt="VillaBliss villa"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-[#26180f]/25" />

      {/* VILLABLISS LOGO */}

      <div
        ref={logoRef}
        className="
          absolute
          inset-x-[15px]
          bottom-[12vh]
          z-10

          md:bottom-[10vh]
        "
      >
        <img
          src="/images/logo.svg"
          alt="VillaBliss"
          className="
            h-auto
            w-full
            object-contain
          "
        />
      </div>
    </div>
  );
};

export default Hero;