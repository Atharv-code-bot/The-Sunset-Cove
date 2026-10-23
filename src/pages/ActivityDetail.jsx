// import { useParams, Link } from "react-router-dom";
// import Navbar from "../components/Navbar/Navbar";
// import Testimonial from "../components/Testimonial/Testimonial";
// import InstagramMarquee from "../components/InstagramMarquee/InstagramMarquee";
// import Footer from "../components/Footer/Footer";
// import ActivityCTA from "../components/ActivityCTA/ActivityCTA";
// import AnimatedSection from "../components/AnimatedSection/AnimatedSection";
// import { activitiesData } from "../data/activitiesData";

// const ActivityDetail = () => {
//   const { slug } = useParams();
//   const activity = activitiesData[slug];

//   // Unknown / mistyped slug — friendly fallback instead of a blank page
//   if (!activity) {
//     return (
//       <main className="relative min-h-screen bg-[#f4f4ea]">
//         <Navbar />
//         <div className="flex min-h-screen flex-col items-center justify-center px-[24px] pt-[120px] text-center">
//           <h1 className="font-['Cormorant_Garamond'] text-[40px] text-[#26180f] md:text-[52px]">
//             Activity not found
//           </h1>
//           <p className="mt-[16px] max-w-[420px] font-['Inter'] text-[16px] text-[#514941]">
//             The activity you're looking for doesn't exist or may have been
//             moved.
//           </p>
//           <Link
//             to="/"
//             className="
//               mt-[36px]
//               flex
//               h-[54px]
//               w-fit
//               items-center
//               justify-center
//               rounded-full
//               border
//               border-[#26180f]
//               px-[30px]
//               font-['Inter']
//               text-[16px]
//               font-medium
//               text-[#26180f]
//               transition-all
//               duration-300
//               hover:bg-[#26180f]
//               hover:text-white
//             "
//           >
//             Back to home
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="relative bg-[#f4f4ea]">
//       <Navbar />

//       {/* =====================================================
//           TITLE + DESCRIPTION
//       ===================================================== */}
//       <section
//         className="
//           mx-auto
//           w-full
//           max-w-[1000px]
//           px-[24px]
//           pb-[50px]
//           pt-[120px]
//           text-center
//           md:px-[50px]
//           md:pt-[140px]
//         "
//       >
//         <h1
//           className="
//             font-['Cormorant_Garamond']
//             text-[46px]
//             leading-[1.1]
//             tracking-[-0.02em]
//             text-[#26180f]
//             md:text-[60px]
//             lg:text-[66px]
//           "
//         >
//           {activity.title}
//         </h1>

//         <p
//           className="
//             mx-auto
//             mt-[24px]
//             max-w-[820px]
//             font-['Inter']
//             text-[16px]
//             leading-[1.75]
//             text-[#514941]
//             md:text-[18px]
//           "
//         >
//           {activity.description}
//         </p>
//       </section>

//       {/* =====================================================
//           HERO IMAGE
//       ===================================================== */}
//       <section className="mx-auto w-full max-w-[1780px] px-[20px] md:px-[50px]">
//         <div className="w-full overflow-hidden rounded-[6px] bg-[#e9e7dc]">
//           <img
//             src={activity.heroImage}
//             alt={activity.title}
//             className="block max-h-[760px] w-full object-cover"
//           />
//         </div>
//       </section>

//       {/* =====================================================
//           TIPS LIST
//       ===================================================== */}
//       <section
//         className="
//           mx-auto
//           w-full
//           max-w-[900px]
//           px-[24px]
//           py-[80px]
//           md:px-[50px]
//         "
//       >
//         <ul className="flex flex-col gap-[18px]">
//           {activity.tips.map((tip) => (
//             <li
//               key={tip.label}
//               className="
//                 relative
//                 pl-[22px]
//                 font-['Inter']
//                 text-[16px]
//                 leading-[1.7]
//                 text-[#514941]
//                 md:text-[17px]
//               "
//             >
//               <span
//                 className="
//                   absolute
//                   left-0
//                   top-[10px]
//                   h-[5px]
//                   w-[5px]
//                   rounded-full
//                   bg-[#26180f]
//                 "
//               />
//               <span className="font-semibold text-[#26180f]">
//                 {tip.label}:
//               </span>{" "}
//               {tip.text}
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* =====================================================
//           3-IMAGE GALLERY
//       ===================================================== */}
//       <section
//         id="activity-gallery"
//         className="
//           mx-auto
//           w-full
//           max-w-[1780px]
//           px-[20px]
//           pb-[120px]
//           md:px-[50px]
//         "
//       >
//         <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3">
//           {activity.gallery.map((img, i) => (
//             <div
//               key={i}
//               className="aspect-[4/5] w-full overflow-hidden rounded-[4px] bg-[#e9e7dc]"
//             >
//               <img
//                 src={img}
//                 alt=""
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* =====================================================
//           SHARED SECTIONS
//       ===================================================== */}
//       <AnimatedSection>
//         <Testimonial />
//       </AnimatedSection>

//       <AnimatedSection>
//         <ActivityCTA />
//       </AnimatedSection>

//       <AnimatedSection>
//         <InstagramMarquee />
//       </AnimatedSection>

//       <Footer />
//     </main>
//   );
// };

// export default ActivityDetail;

import { useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar/Navbar";
import Testimonial from "../components/Testimonial/Testimonial";
import InstagramMarquee from "../components/InstagramMarquee/InstagramMarquee";
import Footer from "../components/Footer/Footer";
import ActivityCTA from "../components/ActivityCTA/ActivityCTA";
import AnimatedSection from "../components/AnimatedSection/AnimatedSection";
import { activitiesData } from "../data/activitiesData";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ActivityDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const pageRef = useRef(null);
  const isLeaving = useRef(false);

  const activity = activitiesData[slug];

  /* ==========================================================
     ANIMATIONS
     1. Page-load intro: back button -> title -> description
     2. Hero image: curtain reveal + slow zoom-out on scroll
     3. Tips: rise one by one
     4. Gallery: rise one by one, images settle from a zoom
     ========================================================== */
  useGSAP(
    () => {
      if (!activity) return;

      // Always start a new activity at the top
      if (window.lenis) window.lenis.scrollTo(0, { immediate: true });
      else window.scrollTo(0, 0);

      isLeaving.current = false;

      const mm = gsap.matchMedia();

      mm.add(
        {
          normal: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          if (context.conditions.reduce) {
            gsap.set(
              "[data-intro], [data-hero], [data-tip], [data-gallery-item]",
              { autoAlpha: 1, y: 0, clearProps: "clipPath" }
            );
            return;
          }

          // ---------- 1. Intro ----------
          gsap.set("[data-intro]", { y: 50, autoAlpha: 0 });

          gsap
            .timeline({ defaults: { ease: "power3.out", force3D: true } })
            .to("[data-intro]", {
              y: 0,
              autoAlpha: 1,
              duration: 1.3,
              stagger: 0.14,
              delay: 0.1,
            });

          // ---------- 2. Hero image ----------
          const hero = pageRef.current.querySelector("[data-hero]");
          const heroImg = pageRef.current.querySelector("[data-hero-img]");

          if (hero && heroImg) {
            // Starts fully hidden below; the frame opens upward from the
            // bottom edge while the image slides up inside it.
            gsap.set(hero, { clipPath: "inset(100% 0 0 0)" });
            gsap.set(heroImg, { yPercent: 25 });

            gsap
              .timeline({
                defaults: { force3D: true },
                scrollTrigger: {
                  trigger: hero,
                  start: "top 92%",
                  once: true,
                },
              })
              .to(hero, {
                clipPath: "inset(0% 0 0 0)",
                duration: 1.7,
                ease: "power3.out",
              })
              .to(
                heroImg,
                { yPercent: 0, duration: 1.7, ease: "power3.out" },
                0
              );
          }

          // ---------- 3. Tips ----------
          const tips = gsap.utils.toArray("[data-tip]");
          gsap.set(tips, { y: 35, autoAlpha: 0 });

          ScrollTrigger.batch(tips, {
            start: "top 92%",
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                y: 0,
                autoAlpha: 1,
                duration: 1.1,
                ease: "power3.out",
                stagger: 0.1,
                overwrite: true,
                force3D: true,
              }),
          });

          // ---------- 4. Gallery ----------
          const items = gsap.utils.toArray("[data-gallery-item]");

          // Photos start well below and only travel upward
          gsap.set(items, { y: 140, autoAlpha: 0 });

          ScrollTrigger.batch(items, {
            start: "top 95%",
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                y: 0,
                autoAlpha: 1,
                duration: 1.6,
                ease: "power3.out",
                stagger: 0.18,
                overwrite: true,
                force3D: true,
              }),
          });
        }
      );

      // Images load late and shift positions: recalc triggers
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);

      return () => {
        window.removeEventListener("load", refresh);
        mm.revert();
      };
    },
    { scope: pageRef, dependencies: [slug], revertOnUpdate: true }
  );

  /* ==========================================================
     BACK BUTTON: fade the page out, then navigate home
     and tell Home to scroll back to the Activity section
     ========================================================== */
  const handleBack = () => {
    if (isLeaving.current) return;
    isLeaving.current = true;

    gsap.to(pageRef.current, {
      autoAlpha: 0,
      y: -20,
      duration: 0.55,
      ease: "power2.inOut",
      onComplete: () =>
        navigate("/", { state: { scrollToActivity: true } }),
    });
  };

  // Unknown / mistyped slug: friendly fallback
  if (!activity) {
    return (
      <main className="relative min-h-screen bg-[#f4f4ea]">
        <Navbar />
        <div className="flex min-h-screen flex-col items-center justify-center px-[24px] pt-[120px] text-center">
          <h1 className="font-['Cormorant_Garamond'] text-[40px] text-[#26180f] md:text-[52px]">
            Activity not found
          </h1>
          <p className="mt-[16px] max-w-[420px] font-['Inter'] text-[16px] text-[#514941]">
            The activity you're looking for doesn't exist or may have been
            moved.
          </p>
          <Link
            to="/"
            className="
              mt-[36px]
              flex
              h-[54px]
              w-fit
              items-center
              justify-center
              rounded-full
              border
              border-[#26180f]
              px-[30px]
              font-['Inter']
              text-[16px]
              font-medium
              text-[#26180f]
              transition-all
              duration-300
              hover:bg-[#26180f]
              hover:text-white
            "
          >
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main ref={pageRef} className="relative bg-[#f4f4ea]">
      <Navbar />

      {/* =====================================================
          BACK BUTTON
      ===================================================== */}
      <section className="mx-auto w-full max-w-[1780px] px-[24px] pt-[110px] md:px-[50px] md:pt-[130px]">
        <button
          data-intro
          type="button"
          onClick={handleBack}
          className="group flex items-center gap-3 text-[#26180f] transition-colors duration-300 hover:text-[#a66b2e]"
        >
          <span
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-[#d7cec3]
              transition-all
              duration-500
              ease-out
              group-hover:-translate-x-1
              group-hover:border-[#a66b2e]
            "
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
          </span>

          <span className="text-left">
            <span className="block font-['Inter'] text-[11px] tracking-[0.22em] text-[#a66b2e]">
              Back
            </span>
            <span className="block font-['Cormorant_Garamond'] text-[24px] leading-none">
              All activities
            </span>
          </span>
        </button>
      </section>

      {/* =====================================================
          TITLE + DESCRIPTION
      ===================================================== */}
      <section
        className="
          mx-auto
          w-full
          max-w-[1000px]
          px-[24px]
          pb-[50px]
          pt-[50px]
          text-center
          md:px-[50px]
          md:pt-[40px]
        "
      >
        <h1
          data-intro
          className="
            font-['Cormorant_Garamond']
            text-[46px]
            leading-[1.1]
            tracking-[-0.02em]
            text-[#26180f]
            md:text-[60px]
            lg:text-[66px]
          "
        >
          {activity.title}
        </h1>

        <p
          data-intro
          className="
            mx-auto
            mt-[24px]
            max-w-[820px]
            font-['Inter']
            text-[16px]
            leading-[1.75]
            text-[#514941]
            md:text-[18px]
          "
        >
          {activity.description}
        </p>
      </section>

      {/* =====================================================
          HERO IMAGE
      ===================================================== */}
      <section className="mx-auto w-full max-w-[1780px] px-[20px] md:px-[50px]">
        <div
          data-hero
          className="w-full overflow-hidden rounded-[6px] bg-[#e9e7dc]"
        >
          <img
            data-hero-img
            src={activity.heroImage}
            alt={activity.title}
            className="block max-h-[760px] w-full object-cover will-change-transform"
          />
        </div>
      </section>

      {/* =====================================================
          TIPS LIST
      ===================================================== */}
      <section
        className="
          mx-auto
          w-full
          max-w-[900px]
          px-[24px]
          py-[80px]
          md:px-[50px]
        "
      >
        <ul className="flex flex-col gap-[18px]">
          {activity.tips.map((tip) => (
            <li
              data-tip
              key={tip.label}
              className="
                relative
                pl-[22px]
                font-['Inter']
                text-[16px]
                leading-[1.7]
                text-[#514941]
                md:text-[17px]
              "
            >
              <span className="absolute left-0 top-[10px] h-[5px] w-[5px] rounded-full bg-[#26180f]" />
              <span className="font-semibold text-[#26180f]">
                {tip.label}:
              </span>{" "}
              {tip.text}
            </li>
          ))}
        </ul>
      </section>

      {/* =====================================================
          3-IMAGE GALLERY
      ===================================================== */}
      <section
        id="activity-gallery"
        className="
          mx-auto
          w-full
          max-w-[1780px]
          px-[20px]
          pb-[120px]
          md:px-[50px]
        "
      >
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3">
          {activity.gallery.map((img, i) => (
            <div
              data-gallery-item
              key={i}
              className="aspect-[4/5] w-full overflow-hidden rounded-[4px] bg-[#e9e7dc]"
            >
              <img
                data-gallery-img
                src={img}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover will-change-transform"
              />
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          SHARED SECTIONS
      ===================================================== */}
      <AnimatedSection>
        <Testimonial />
      </AnimatedSection>

      <AnimatedSection>
        <ActivityCTA />
      </AnimatedSection>

      <AnimatedSection>
        <InstagramMarquee />
      </AnimatedSection>

      <Footer />
    </main>
  );
};

export default ActivityDetail;