// // const Hero = () => {
// //   return (
// //     <div className="absolute inset-0">

// //       {/* Hero image */}
// //       <img
// //         src="/images/hero.jpg"
// //         alt="VillaBliss villa"
// //         className="absolute inset-0 h-full w-full object-cover"
// //       />

// //       {/* Original-style dark overlay */}
// //       <div className="absolute inset-0 bg-[#26180f]/25" />

// //       {/* Hero logo */}
// //       <div className="absolute inset-x-[15px] bottom-[12vh] z-10 md:bottom-[10vh]">
// //         <img
// //           src="/images/logo.svg"
// //           alt="VillaBliss"
// //           className="h-auto w-full object-contain"
// //         />
// //       </div>

// //     </div>
// //   );
// // };

// // export default Hero;


// const Hero = () => {
//   return (
//     <div className="absolute inset-0">

//       {/* Hero Image */}
//       <img
//         src="/images/hero.jpg"
//         alt="VillaBliss villa"
//         className="
//           absolute
//           inset-0
//           h-full
//           w-full
//           object-cover
//           object-center
//         "
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-[#26180f]/25" />

//       {/* VillaBliss Logo */}
//       <div
//         className="
//           absolute
//           inset-x-[15px]
//           bottom-[12vh]
//           z-10
//           md:bottom-[10vh]
//         "
//       >
//         <img
//           src="/images/logo.svg"
//           alt="VillaBliss"
//           className="h-auto w-full object-contain"
//         />
//       </div>

//     </div>
//   );
// };

// export default Hero;


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