
// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// gsap.registerPlugin(useGSAP);

// /* Runs `callback` once when `el` scrolls into view.
//    `bottomPercent` = how far above the bottom edge of the screen it must be
//    (15 means "when the top of the element reaches 85% of the screen height").
//    IntersectionObserver is used instead of ScrollTrigger here because it
//    reads the real position on screen and cannot be thrown off by refreshes. */
// const onceVisible = (el, bottomPercent, callback) => {
//   if (!el) return () => {};
//   const observer = new IntersectionObserver(
//     (entries) => {
//       if (entries.some((entry) => entry.isIntersecting)) {
//         observer.disconnect();
//         callback();
//       }
//     },
//     { rootMargin: `0px 0px -${bottomPercent}% 0px`, threshold: 0 }
//   );
//   observer.observe(el);
//   return () => observer.disconnect();
// };

// const Welcome = () => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const heroImgRef = useRef(null);
//   const row2Ref = useRef(null);
//   const welcomeImgRef = useRef(null);
//   const textContentRef = useRef(null);
//   const buttonRef = useRef(null);

//   useGSAP(
//     () => {
//       const mm = gsap.matchMedia();

//       // Row 1 (title + top image): slides up on page load / refresh.
//       const row1Items = () => [titleRef.current, heroImgRef.current];

//       // Row 2 (second image + paragraph + button): slides up on scroll.
//       const row2Items = () => [
//         welcomeImgRef.current,
//         textContentRef.current,
//         buttonRef.current,
//       ];

//       const reveal = {
//         y: 0,
//         autoAlpha: 1,
//         duration: 1.2,
//         ease: "power3.out",
//         force3D: true,
//       };

//       const build = ({ desktop }) => {
//         // Everything starts hidden, below its final position
//         gsap.set([...row1Items(), ...row2Items()], { y: 70, autoAlpha: 0 });

//         // ---------- ROW 1: plays on page load / refresh ----------
//         gsap
//           .timeline({ delay: 0.25 })
//           .to(titleRef.current, reveal)
//           .to(heroImgRef.current, reveal, "-=0.9");

//         // ---------- ROW 2: plays when scrolled into view ----------
//         const stops = [];

//         if (desktop) {
//           // Image, then paragraph, then button: one sequence
//           stops.push(
//             onceVisible(row2Ref.current, 15, () => {
//               gsap
//                 .timeline()
//                 .to(welcomeImgRef.current, reveal)
//                 .to(textContentRef.current, reveal, "-=1")
//                 .to(buttonRef.current, { ...reveal, duration: 0.9 }, "-=0.8");
//             })
//           );
//         } else {
//           // Mobile: image first...
//           stops.push(
//             onceVisible(welcomeImgRef.current, 15, () => {
//               gsap.to(welcomeImgRef.current, reveal);
//             })
//           );
//           // ...paragraph + button when THEY reach the screen
//           stops.push(
//             onceVisible(textContentRef.current, 8, () => {
//               gsap
//                 .timeline()
//                 .to(textContentRef.current, reveal)
//                 .to(buttonRef.current, { ...reveal, duration: 0.9 }, "-=0.8");
//             })
//           );
//         }

//         // Cleanup when the screen size class changes or the page unmounts
//         return () => stops.forEach((stop) => stop());
//       };

//       // Three queries that never overlap, so exactly one runs on any device
//       mm.add(
//         "(prefers-reduced-motion: no-preference) and (min-width: 810px)",
//         () => build({ desktop: true })
//       );
//       mm.add(
//         "(prefers-reduced-motion: no-preference) and (max-width: 809.98px)",
//         () => build({ desktop: false })
//       );
//       mm.add("(prefers-reduced-motion: reduce)", () => {
//         gsap.set([...row1Items(), ...row2Items()], { autoAlpha: 1, y: 0 });
//       });

//       return () => mm.revert();
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full overflow-hidden bg-[#f4f4ea]"
//     >
//       {/* ---------- Container ---------- */}
//       <div
//         className="
//           mx-auto w-full max-w-[1780px]
//           px-[20px] pb-[50px] pt-[70px]
//           min-[810px]:px-[30px] min-[810px]:pb-[60px] min-[810px]:pt-[80px]
//           min-[1200px]:px-[60px] min-[1200px]:pb-[70px] min-[1200px]:pt-[100px]
//         "
//       >
//         {/* ---------- Row 1: slides up on page load ---------- */}
//         <div
//           className="
//             grid grid-cols-1 items-start gap-[36px]
//             min-[810px]:grid-cols-2 min-[810px]:gap-[48px]
//             min-[1200px]:gap-[72px]
//           "
//         >
//           <div ref={titleRef}>
//             <h1
//               className="
//                 max-w-full pt-[8px]
//                 font-['Cormorant'] text-[40px] font-semibold
//                 leading-[1] tracking-[-0.04em] text-[#26180f]
//                 min-[810px]:max-w-[520px] min-[810px]:text-[56px] min-[810px]:leading-[0.92]
//                 min-[1200px]:max-w-[650px] min-[1200px]:text-[72px]
//               "
//             >
//               Welcome to a villa where every detail inspires relaxation
//             </h1>
//           </div>

//           <div
//             ref={heroImgRef}
//             className="
//               h-[300px] w-full overflow-hidden
//               min-[810px]:h-[380px]
//               min-[1200px]:h-[435px]
//             "
//           >
//             <img
//               src="/images/hero.jpg"
//               alt="Villa exterior"
//               className="block h-full w-full object-cover object-center"
//             />
//           </div>
//         </div>

//         {/* ---------- Row 2: REVEALS ON SCROLL ---------- */}
//         <div
//           ref={row2Ref}
//           className="
//             mt-[80px] grid grid-cols-1 items-center gap-[36px]
//             min-[810px]:mt-[108px] min-[810px]:grid-cols-2 min-[810px]:gap-[48px]
//             min-[1200px]:gap-[72px]
//           "
//         >
//           <div
//             ref={welcomeImgRef}
//             className="
//               h-[500px] w-full overflow-hidden bg-[#e9e7dc]
//               min-[810px]:h-[620px]
//               min-[1200px]:h-[720px]
//             "
//           >
//             <img
//               src="/images/welcome.jpg"
//               alt="Villa interior"
//               loading="eager"
//               decoding="async"
//               onError={(e) => {
//                 // welcome.jpg was not found: log it and show a temporary image
//                 console.warn("Missing image: /images/welcome.jpg");
//                 e.currentTarget.onerror = null;
//                 e.currentTarget.src = "/images/hero.jpg";
//               }}
//               className="block h-full w-full object-cover object-center"
//             />
//           </div>

//           <div
//             ref={textContentRef}
//             className="
//               flex flex-col items-start justify-center self-center
//               pl-0 min-[810px]:pl-[8px]
//             "
//           >
//             <p
//               className="
//                 max-w-full text-[15px] font-normal leading-[1.7]
//                 tracking-[-0.01em] text-[#514941]
//                 min-[810px]:max-w-[560px] min-[810px]:text-[16px]
//               "
//             >
//               Nestled in the heart of tranquility, our villa offers a perfect
//               escape from the ordinary. Designed with elegance and comfort in
//               mind, it features luxurious interiors, breathtaking views, and
//               top-tier amenities to make your stay unforgettable. Whether you are
//               seeking a serene getaway or a place to celebrate life's special
//               moments, our villa is your ultimate destination.
//             </p>

//             <a
//               ref={buttonRef}
//               href="/gallery"
//               className="
//                 mt-[36px] inline-flex h-[52px] w-[240px]
//                 items-center justify-center rounded-full
//                 border border-[#26180f] bg-transparent
//                 text-[15px] font-normal text-[#26180f]
//                 transition-all duration-300
//                 hover:bg-[#26180f] hover:text-[#f4f4ea]
//                 min-[810px]:mt-[52px] min-[810px]:h-[56px] min-[810px]:w-[280px]
//               "
//             >
//               View Image Gallery
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Welcome;


import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

/* Runs `callback` once when `el` scrolls into view.
   `bottomPercent` = how far above the bottom edge of the screen it must be
   (15 means "when the top of the element reaches 85% of the screen height").
   IntersectionObserver is used instead of ScrollTrigger here because it
   reads the real position on screen and cannot be thrown off by refreshes. */
const onceVisible = (el, bottomPercent, callback) => {
  if (!el) return () => {};
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        observer.disconnect();
        callback();
      }
    },
    { rootMargin: `0px 0px -${bottomPercent}% 0px`, threshold: 0 }
  );
  observer.observe(el);
  return () => observer.disconnect();
};

const Welcome = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const heroImgRef = useRef(null);
  const row2Ref = useRef(null);
  const welcomeImgRef = useRef(null);
  const textContentRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Row 1 (title + top image): slides up on page load / refresh.
      const row1Items = () => [titleRef.current, heroImgRef.current];

      // Row 2 (second image + paragraph + button): slides up on scroll.
      const row2Items = () => [
        welcomeImgRef.current,
        textContentRef.current,
        buttonRef.current,
      ];

      const reveal = {
        y: 0,
        autoAlpha: 1,
        duration: 1.2,
        ease: "power3.out",
        force3D: true,
      };

      const buttonReveal = {
        y: 0,
        autoAlpha: 1,
        duration: 0.9,
        ease: "power3.out",
        force3D: true,
      };

      const build = ({ desktop }) => {
        // Everything starts hidden, below its final position
        gsap.set(
          [
            titleRef.current,
            heroImgRef.current,
            welcomeImgRef.current,
            textContentRef.current,
          ],
          { y: 70, autoAlpha: 0 }
        );
        // The button lives inside the paragraph block, which already slides
        // up, so it only needs a small extra offset of its own.
        gsap.set(buttonRef.current, { y: 25, autoAlpha: 0 });

        // ---------- ROW 1: plays on page load / refresh ----------
        gsap
          .timeline({ delay: 0.25 })
          .to(titleRef.current, reveal)
          .to(heroImgRef.current, reveal, "-=0.9");

        // ---------- ROW 2: plays when scrolled into view ----------
        const stops = [];

        if (desktop) {
          // Image, then paragraph, then button: one sequence
          stops.push(
            onceVisible(row2Ref.current, 15, () => {
              gsap
                .timeline()
                .to(welcomeImgRef.current, reveal)
                .to(textContentRef.current, reveal, "-=1")
                .to(buttonRef.current, buttonReveal, "-=0.8");
            })
          );
        } else {
          // Mobile: image first...
          stops.push(
            onceVisible(welcomeImgRef.current, 15, () => {
              gsap.to(welcomeImgRef.current, reveal);
            })
          );
          // ...paragraph + button when THEY reach the screen
          stops.push(
            onceVisible(textContentRef.current, 8, () => {
              gsap
                .timeline()
                .to(textContentRef.current, reveal)
                .to(buttonRef.current, buttonReveal, "-=0.8");
            })
          );
        }

        // Cleanup when the screen size class changes or the page unmounts
        return () => stops.forEach((stop) => stop());
      };

      // Three queries that never overlap, so exactly one runs on any device
      mm.add(
        "(prefers-reduced-motion: no-preference) and (min-width: 810px)",
        () => build({ desktop: true })
      );
      mm.add(
        "(prefers-reduced-motion: no-preference) and (max-width: 809.98px)",
        () => build({ desktop: false })
      );
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([...row1Items(), ...row2Items()], { autoAlpha: 1, y: 0 });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#f4f4ea]"
    >
      {/* ---------- Container ---------- */}
      <div
        className="
          mx-auto w-full max-w-[1780px]
          px-[20px] pb-[50px] pt-[70px]
          min-[810px]:px-[30px] min-[810px]:pb-[60px] min-[810px]:pt-[80px]
          min-[1200px]:px-[60px] min-[1200px]:pb-[70px] min-[1200px]:pt-[100px]
        "
      >
        {/* ---------- Row 1: slides up on page load ---------- */}
        <div
          className="
            grid grid-cols-1 items-start gap-[36px]
            min-[810px]:grid-cols-2 min-[810px]:gap-[48px]
            min-[1200px]:gap-[72px]
          "
        >
          <div ref={titleRef}>
            <h1
              className="
                max-w-full pt-[8px]
                font-['Cormorant'] text-[40px] font-semibold
                leading-[1] tracking-[-0.04em] text-[#26180f]
                min-[810px]:max-w-[520px] min-[810px]:text-[56px] min-[810px]:leading-[0.92]
                min-[1200px]:max-w-[650px] min-[1200px]:text-[72px]
              "
            >
              Welcome to a villa where every detail inspires relaxation
            </h1>
          </div>

          <div
            ref={heroImgRef}
            className="
              h-[300px] w-full overflow-hidden
              min-[810px]:h-[380px]
              min-[1200px]:h-[435px]
            "
          >
            <img
              src="/images/hero.jpg"
              alt="Villa exterior"
              className="block h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* ---------- Row 2: REVEALS ON SCROLL ---------- */}
        <div
          ref={row2Ref}
          className="
            mt-[80px] grid grid-cols-1 items-center gap-[36px]
            min-[810px]:mt-[108px] min-[810px]:grid-cols-2 min-[810px]:gap-[48px]
            min-[1200px]:gap-[72px]
          "
        >
          <div
            ref={welcomeImgRef}
            className="
              h-[500px] w-full overflow-hidden bg-[#e9e7dc]
              min-[810px]:h-[620px]
              min-[1200px]:h-[720px]
            "
          >
            <img
              src="/images/welcome.jpg"
              alt="Villa interior"
              loading="eager"
              decoding="async"
              onError={(e) => {
                // welcome.jpg was not found: log it and show a temporary image
                console.warn("Missing image: /images/welcome.jpg");
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/images/hero.jpg";
              }}
              className="block h-full w-full object-cover object-center"
            />
          </div>

          <div
            ref={textContentRef}
            className="
              flex flex-col items-start justify-center self-center
              pl-0 min-[810px]:pl-[8px]
            "
          >
            <p
              className="
                max-w-full text-[15px] font-normal leading-[1.7]
                tracking-[-0.01em] text-[#514941]
                min-[810px]:max-w-[560px] min-[810px]:text-[16px]
              "
            >
              Nestled in the heart of tranquility, our villa offers a perfect
              escape from the ordinary. Designed with elegance and comfort in
              mind, it features luxurious interiors, breathtaking views, and
              top-tier amenities to make your stay unforgettable. Whether you are
              seeking a serene getaway or a place to celebrate life's special
              moments, our villa is your ultimate destination.
            </p>

            <a
              ref={buttonRef}
              href="/gallery"
              className="
                mt-[36px] inline-flex h-[52px] w-[240px]
                items-center justify-center rounded-full
                border border-[#26180f] bg-transparent
                text-[15px] font-normal text-[#26180f]
                transition-colors duration-300
                hover:bg-[#26180f] hover:text-[#f4f4ea]
                min-[810px]:mt-[52px] min-[810px]:h-[56px] min-[810px]:w-[280px]
              "
            >
              View Image Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;