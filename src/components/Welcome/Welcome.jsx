// const Welcome = () => {
//   return (
//     <section className="grid min-h-screen grid-cols-1 bg-[#f4f4ea] md:grid-cols-2">

//       {/* Text */}
//       <div className="flex flex-col justify-center px-8 py-20 md:px-[7vw]">

//         <h2
//           className="
//             max-w-3xl
//             text-[16vw]
//             font-medium
//             leading-[0.85]
//             tracking-[-0.045em]
//             text-[#26180f]
//             md:text-[7vw]
//           "
//         >
//           Welcome to a villa where every detail inspires relaxation
//         </h2>

//         <div className="mt-10 max-w-lg">

//           <p className="text-[15px] leading-7 text-[#514941]">
//             Nestled in the heart of tranquility, our villa offers a
//             perfect escape from the ordinary. Designed with elegance
//             and comfort in mind, it features luxurious interiors,
//             breathtaking views, and top-tier amenities to make your
//             stay unforgettable.
//           </p>

//           <button
//             className="
//               mt-8
//               rounded-full
//               border
//               border-[#26180f]
//               px-6
//               py-3
//               text-sm
//               text-[#26180f]
//               transition-all
//               duration-300
//               hover:bg-[#26180f]
//               hover:text-[#f4f4ea]
//             "
//           >
//             View Image Gallery
//           </button>

//         </div>

//       </div>

//       {/* Image */}
//       <div className="min-h-[70vh] p-4 md:min-h-screen md:p-8">

//         <img
//           src="/images/welcome.jpg"
//           alt="Villa interior"
//           className="h-full w-full object-cover"
//         />

//       </div>

//     </section>
//   );
// };

// export default Welcome;


// const Welcome = () => {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#f4f4ea]">

//       {/* =====================================================
//           HERO IMAGE - TOP RIGHT
//           ===================================================== */}
//       <div
//         className="
//           absolute
//           right-0
//           top-0
//           z-0

//           h-[300px]
//           w-[50%]

//           sm:h-[350px]

//           md:h-[380px]

//           lg:h-[435px]
//           lg:w-[43%]
//         "
//       >
//         <img
//           src="/images/hero.jpg"
//           alt="Villa"
//           className="
//             block
//             h-full
//             w-full
//             object-cover
//             object-center
//           "
//         />
//       </div>


//       {/* =====================================================
//           MAIN CONTAINER
//           ===================================================== */}
//       <div
//         className="
//           relative
//           z-10
//           mx-auto
//           w-full
//           max-w-[1780px]
//           px-[27px]
//           pb-[100px]
//           pt-0

//           md:px-[50px]

//           lg:px-[27px]
//         "
//       >

//         {/* =================================================
//             TITLE
//             ================================================= */}
//         <div
//           className="
//             relative
//             z-20
//             w-[55%]

//             sm:w-[52%]

//             md:w-[52%]

//             lg:w-[43%]
//           "
//         >
//           <h1
//             className="
//               font-[Cormorant]
//               text-[48px]
//               font-medium
//               leading-[0.9]
//               tracking-[-0.045em]
//               text-[#26180f]

//               sm:text-[58px]

//               md:text-[68px]

//               lg:text-[76px]

//               xl:text-[82px]
//             "
//           >
//             Welcome to a villa where every detail inspires relaxation
//           </h1>
//         </div>


//         {/* =================================================
//             CONTENT GRID
//             ================================================= */}
//         <div
//           className="
//             relative
//             mt-[100px]
//             grid
//             grid-cols-1

//             md:grid-cols-2
//           "
//         >

//           {/* ===============================================
//               WELCOME IMAGE - BOTTOM LEFT
//               =============================================== */}
//           <div
//             className="
//               relative
//               h-[520px]
//               w-full

//               sm:h-[600px]

//               md:h-[650px]

//               lg:h-[720px]
//             "
//           >
//             <img
//               src="/images/welcome.jpg"
//               alt="Villa interior"
//               className="
//                 block
//                 h-full
//                 w-full
//                 object-cover
//                 object-center
//               "
//             />
//           </div>


//           {/* ===============================================
//               TEXT CONTENT - RIGHT
//               =============================================== */}
//           <div
//             className="
//               flex
//               flex-col
//               justify-end
//               px-0
//               pb-[40px]

//               md:pl-[50px]

//               lg:pl-[120px]
//               lg:pb-[50px]
//             "
//           >
//             <p
//               className="
//                 max-w-[620px]
//                 font-[Inter]
//                 text-[14px]
//                 leading-[1.7]
//                 text-[#514941]

//                 md:text-[15px]
//               "
//             >
//               Nestled in the heart of tranquility, our villa offers a
//               perfect escape from the ordinary. Designed with elegance
//               and comfort in mind, it features luxurious interiors,
//               breathtaking views, and top-tier amenities to make your
//               stay unforgettable. Whether you are seeking a serene
//               getaway or a place to celebrate life's special moments,
//               our villa is your ultimate destination.
//             </p>

//             <div className="mt-[28px]">
//               <a
//                 href="/gallery"
//                 className="
//                   inline-flex
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-[#26180f]
//                   px-[24px]
//                   py-[11px]
//                   font-[Inter]
//                   text-[13px]
//                   text-[#26180f]
//                   transition-all
//                   duration-300
//                   hover:bg-[#26180f]
//                   hover:text-[#f4f4ea]
//                 "
//               >
//                 View Image Gallery
//               </a>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Welcome;

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Welcome = () => {
  const sectionRef = useRef(null);

  const heroImgRef = useRef(null);
  const titleRef = useRef(null);

  const welcomeImgRef = useRef(null);
  const textContentRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // ==========================================
      // INITIAL STATE
      // ==========================================

      gsap.set(
        [
          titleRef.current,
          heroImgRef.current,
          welcomeImgRef.current,
          textContentRef.current,
          buttonRef.current,
        ],
        {
          y: 70,
          opacity: 0,
        }
      );

      // ==========================================
      // 1. TITLE + TOP RIGHT IMAGE
      // ==========================================

      const firstAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      firstAnimation.to(
        titleRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      );

      firstAnimation.to(
        heroImgRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.9"
      );

      // ==========================================
      // 2. BOTTOM IMAGE + TEXT
      // ==========================================

      const secondAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: welcomeImgRef.current,
          start: "top 85%",
          once: true,
        },
      });

      secondAnimation.to(
        welcomeImgRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      );

      secondAnimation.to(
        textContentRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.9"
      );

      secondAnimation.to(
        buttonRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.8"
      );

      // ==========================================
      // REFRESH AFTER IMAGES LOAD
      // ==========================================

      const images = sectionRef.current.querySelectorAll("img");

      images.forEach((img) => {
        if (!img.complete) {
          img.addEventListener("load", () => {
            ScrollTrigger.refresh();
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#f4f4ea]"
    >

      {/* =====================================================
          HERO IMAGE - TOP RIGHT
          ===================================================== */}

      <div
        ref={heroImgRef}
        className="
          absolute
          right-0
          top-0
          z-0

          h-[300px]
          w-[50%]

          sm:h-[350px]

          md:h-[380px]

          lg:h-[435px]
          lg:w-[43%]
        "
      >
        <img
          src="/images/hero.jpg"
          alt="Villa"
          className="
            block
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </div>


      {/* =====================================================
          MAIN CONTAINER
          ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1780px]
          px-[27px]
          pb-[100px]
          pt-0

          md:px-[50px]

          lg:px-[27px]
        "
      >

        {/* =================================================
            TITLE
            ================================================= */}

        <div
          ref={titleRef}
          className="
            relative
            z-20
            w-[55%]

            sm:w-[52%]

            md:w-[52%]

            lg:w-[43%]
          "
        >
          <h1
            className="
              font-[Cormorant]
              text-[48px]
              font-medium
              leading-[0.9]
              tracking-[-0.045em]
              text-[#26180f]

              sm:text-[58px]

              md:text-[68px]

              lg:text-[76px]

              xl:text-[82px]
            "
          >
            Welcome to a villa where every detail inspires relaxation
          </h1>
        </div>


        {/* =================================================
            CONTENT GRID
            ================================================= */}

        <div
          className="
            relative
            mt-[100px]
            grid
            grid-cols-1

            md:grid-cols-2
          "
        >

          {/* ===============================================
              WELCOME IMAGE - BOTTOM LEFT
              =============================================== */}

          <div
            ref={welcomeImgRef}
            className="
              relative
              h-[520px]
              w-full

              sm:h-[600px]

              md:h-[650px]

              lg:h-[720px]
            "
          >
            <img
              src="/images/welcome.jpg"
              alt="Villa interior"
              className="
                block
                h-full
                w-full
                object-cover
                object-center
              "
            />
          </div>


          {/* ===============================================
              TEXT CONTENT - RIGHT
              =============================================== */}

          <div
            ref={textContentRef}
            className="
              flex
              flex-col
              justify-end
              px-0
              pb-[40px]

              md:pl-[50px]

              lg:pl-[120px]
              lg:pb-[50px]
            "
          >

            <p
              className="
                max-w-[620px]
                font-[Inter]
                text-[14px]
                leading-[1.7]
                text-[#514941]

                md:text-[15px]
              "
            >
              Nestled in the heart of tranquility, our villa offers a
              perfect escape from the ordinary. Designed with elegance
              and comfort in mind, it features luxurious interiors,
              breathtaking views, and top-tier amenities to make your
              stay unforgettable. Whether you are seeking a serene
              getaway or a place to celebrate life's special moments,
              our villa is your ultimate destination.
            </p>


            <div className="mt-[28px]">

              <a
                ref={buttonRef}
                href="/gallery"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#26180f]
                  px-[24px]
                  py-[11px]
                  font-[Inter]
                  text-[13px]
                  text-[#26180f]
                  transition-all
                  duration-300
                  hover:bg-[#26180f]
                  hover:text-[#f4f4ea]
                "
              >
                View Image Gallery
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Welcome;