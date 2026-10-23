

// import React from "react";

// const Footer = () => {
//   const brandIcon =
//     "https://framerusercontent.com/images/rCmcA1kDLtltS2UUPQYqztQEaY.svg?width=80&height=80";

//   const footerLogo =
//     "https://framerusercontent.com/images/eLGz0Nx7PSBpSF2iwtEGDBQLIYY.svg?width=1723&height=354";

//   const socials = [
//     {
//       name: "Facebook",
//       icon: "https://framerusercontent.com/images/Z88GKfSf2uOgJiC2Q37bEW5Pjs8.svg?width=18&height=19",
//       href: "#",
//     },
//     {
//       name: "Instagram",
//       icon: "https://framerusercontent.com/images/6XvM4qg6OetjKEC2gAgeDw6LnZk.svg?width=18&height=19",
//       href: "#",
//     },
//     {
//       name: "Linkedin",
//       icon: "https://framerusercontent.com/images/3Za7nbXTEmGwcM0b4PHa3Jy1U.svg?width=18&height=19",
//       href: "#",
//     },
//     {
//       name: "Twitter",
//       icon: "https://framerusercontent.com/images/oLxMJicFu2jpqqqx3OwApNiNZfI.svg?width=18&height=19",
//       href: "#",
//     },
//     {
//       name: "Youtube",
//       icon: "https://framerusercontent.com/images/OLQZfZ9AWmeqRFizSWGqkjNmCo.svg?width=20&height=21",
//       href: "#",
//     },
//   ];

//   const pagesLeft = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Activity", href: "/activity" },
//     { name: "Blog", href: "/blog" },
//     { name: "Gallery", href: "/gallery" },
//   ];

//   const pagesRight = [
//     { name: "Contact", href: "/contact" },
//     { name: "Error 404", href: "/404" },
//   ];

//   // Resolved from the shared Google Maps link (Neware, Maharashtra 415620)
//   const mapEmbedSrc =
//     "https://www.google.com/maps?q=17.1045364,73.2906199&z=14&output=embed";

//   return (
//     <footer className="relative w-full overflow-hidden bg-[#26180f] text-[#ebe7dc] pt-20">

//       {/* =========================================================
//           MAIN FOOTER CONTENT
//       ========================================================= */}
//       <main
//         className="
//           relative
//     z-10
//     mx-auto
//     grid
//     w-full
//     max-w-[1600px]

//     grid-cols-1

//     px-[30px]
//     pb-[100px]
//     gap-y-[60px]

//     md:grid-cols-2
//     md:px-[50px]
//     md:gap-x-[70px]
//     md:gap-y-[80px]

//     lg:grid-cols-[1.15fr_0.9fr_0.9fr_0.8fr_1fr]
//     lg:gap-x-[50px]
//     lg:gap-y-0
//         "
//       >

//         {/* =====================================================
//             COLUMN 1 — BRAND
//         ===================================================== */}
//         <div className="flex flex-col">

//           {/* Brand Icon */}
//           <img
//             src={brandIcon}
//             alt="VillaBliss"
//             className="
//               mb-[48px]
//               h-[80px]
//               w-[80px]
//               object-contain
//             "
//           />

//           {/* Heading */}
//           <h2
//             className="
//               max-w-[390px]
//               font-['Cormorant_Garamond']
//               text-[30px]
//               font-medium
//               leading-[1.15]
//               tracking-[-0.02em]

//               md:text-[31px]

//               lg:text-[32px]
//             "
//           >
//             Your luxurious getaway awaits
//           </h2>

//           {/* CTA */}
//           <a
//             href="/contact"
//             className="
//               mt-[32px]
//               flex
//               h-[58px]
//               w-fit
//               min-w-[275px]
//               items-center
//               justify-center
//               rounded-full
//               border
//               border-[#fdd17c]
//               px-[30px]
//               font-['Inter']
//               text-[16px]
//               font-medium
//               text-[#fdd17c]
//               transition-all
//               duration-300
//               hover:bg-[#fdd17c]
//               hover:text-[#26180f]
//             "
//           >
//             Book your stay now
//           </a>

//           {/* Copyright */}
//           <p
//             className="
//               mt-[55px]
//               font-['Inter']
//               text-[15px]
//               leading-[1.5]
//               text-[#ebe7dc]
//             "
//           >
//             Designed by{" "}
//             <a
//               href="#"
//               className="
//                 text-[#fdd17c]
//                 underline
//                 underline-offset-[3px]
//               "
//             >
//               Webestica
//             </a>
//             , Powered by{" "}
//             <a
//               href="#"
//               className="
//                 text-[#fdd17c]
//                 underline
//                 underline-offset-[3px]
//               "
//             >
//               Framer
//             </a>
//           </p>
//         </div>


//         {/* =====================================================
//             COLUMN 2 — PAGES
//         ===================================================== */}
//         <div className="flex flex-col">

//           <h3
//             className="
//               font-['Cormorant_Garamond']
//               text-[28px]
//               font-medium
//               leading-none
//             "
//           >
//             Pages
//           </h3>

//           {/* Page Links */}
//           <div
//             className="
//               mt-[62px]
//               grid
//               grid-cols-2
//               gap-x-[65px]
//             "
//           >

//             {/* Left */}
//             <div className="flex flex-col gap-[24px]">

//               {pagesLeft.map((page) => (
//                 <a
//                   key={page.name}
//                   href={page.href}
//                   className="
//                     w-fit
//                     font-['Inter']
//                     text-[16px]
//                     leading-[1.3]
//                     transition-colors
//                     duration-300
//                     hover:text-[#fdd17c]
//                   "
//                 >
//                   {page.name}
//                 </a>
//               ))}

//             </div>

//             {/* Right */}
//             <div className="flex flex-col gap-[24px]">

//               {pagesRight.map((page) => (
//                 <a
//                   key={page.name}
//                   href={page.href}
//                   className="
//                     w-fit
//                     font-['Inter']
//                     text-[16px]
//                     leading-[1.3]
//                     transition-colors
//                     duration-300
//                     hover:text-[#fdd17c]
//                   "
//                 >
//                   {page.name}
//                 </a>
//               ))}

//             </div>

//           </div>
//         </div>


//         {/* =====================================================
//             COLUMN 3 — CONTACT
//         ===================================================== */}
//         <div className="flex flex-col">

//           <h3
//             className="
//               font-['Cormorant_Garamond']
//               text-[28px]
//               font-medium
//               leading-none
//             "
//           >
//             Contact info
//           </h3>

//           {/* Contact Details */}
//           <div className="mt-[62px]">

//             {/* Phone Numbers */}
//             <div
//               className="
//                 flex
//                 flex-wrap
//                 gap-x-[25px]
//                 gap-y-[10px]
//               "
//             >
//               <a
//                 href="tel:+2518546308"
//                 className="
//                   font-['Inter']
//                   text-[16px]
//                   underline
//                   underline-offset-[4px]
//                   transition-colors
//                   duration-300
//                   hover:text-[#fdd17c]
//                 "
//               >
//                 +(251) 854-6308
//               </a>

//               <a
//                 href="tel:+4695372410"
//                 className="
//                   font-['Inter']
//                   text-[16px]
//                   underline
//                   underline-offset-[4px]
//                   transition-colors
//                   duration-300
//                   hover:text-[#fdd17c]
//                 "
//               >
//                 +(469) 537-2410
//               </a>
//             </div>

//             {/* Email */}
//             <a
//               href="mailto:hello@example.com"
//               className="
//                 mt-[27px]
//                 block
//                 w-fit
//                 font-['Inter']
//                 text-[16px]
//                 underline
//                 underline-offset-[4px]
//                 transition-colors
//                 duration-300
//                 hover:text-[#fdd17c]
//               "
//             >
//               hello@example.com
//             </a>

//             {/* Address */}
//             <div className="mt-[42px]">

//               <p
//                 className="
//                   font-['Inter']
//                   text-[16px]
//                   font-medium
//                   leading-[1.4]
//                   text-[#fdd17c]
//                 "
//               >
//                 VillaBliss
//               </p>

//               <p
//                 className="
//                   mt-[8px]
//                   max-w-[330px]
//                   font-['Inter']
//                   text-[16px]
//                   leading-[1.45]
//                   text-[#ebe7dc]
//                 "
//               >
//                 123 Seaside Retreat Lane, Palm Cove,
//                 FL 33140, United States
//               </p>

//             </div>
//           </div>
//         </div>


//         {/* =====================================================
//             COLUMN 4 — SOCIAL
//         ===================================================== */}
//         <div className="flex flex-col">

//           <h3
//             className="
//               font-['Cormorant_Garamond']
//               text-[28px]
//               font-medium
//               leading-none
//             "
//           >
//             Follow us on
//           </h3>

//           {/* Social Links */}
//           <div className="mt-[62px] flex flex-col gap-[25px]">

//             {socials.map((social) => (
//               <a
//                 key={social.name}
//                 href={social.href}
//                 className="
//                   flex
//                   w-fit
//                   items-center
//                   gap-[14px]
//                   font-['Inter']
//                   text-[16px]
//                   transition-colors
//                   duration-300
//                   hover:text-[#fdd17c]
//                 "
//               >

//                 <img
//                   src={social.icon}
//                   alt=""
//                   className="
//                     h-[19px]
//                     w-[19px]
//                     shrink-0
//                     object-contain
//                   "
//                 />

//                 <span>{social.name}</span>

//               </a>
//             ))}

//           </div>
//         </div>


//         {/* =====================================================
//             COLUMN 5 — MAP (new, medium-size box on the right)
//         ===================================================== */}
//         <div className="flex flex-col">

//           <h3
//             className="
//               font-['Cormorant_Garamond']
//               text-[28px]
//               font-medium
//               leading-none
//             "
//           >
//             Find us
//           </h3>

//           <div
//             className="
//               mt-[62px]
//               h-[280px]
//               w-full
//               max-w-[360px]
//               overflow-hidden
//               rounded-2xl
//               border
//               border-[#fdd17c]/30
//               shadow-[0_10px_30px_rgba(0,0,0,0.25)]
//             "
//           >
//             <iframe
//               title="VillaBliss location map"
//               src={mapEmbedSrc}
//               className="h-full w-full border-0"
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               allowFullScreen
//             />
//           </div>

//           <a
//             href="https://maps.app.goo.gl/ff5A7VGERWYg4MZr6?g_st=aw"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="
//               mt-[16px]
//               w-fit
//               font-['Inter']
//               text-[15px]
//               underline
//               underline-offset-[4px]
//               transition-colors
//               duration-300
//               hover:text-[#fdd17c]
//             "
//           >
//             Get directions
//           </a>

//         </div>

//       </main>


//       {/* =========================================================
//           GIANT VILLABLISS WATERMARK
//       ========================================================= */}
//       <div
//         className="
//           relative
//           z-0
//           -mt-[20px]
//           w-full
//           overflow-hidden
//         "
//       >
//         <img
//           src={footerLogo}
//           alt="VillaBliss"
//           className="
//             mx-auto
//             block
//             w-[calc(100%-60px)]
//             min-w-[900px]
//             max-w-[1723px]
//             opacity-[0.05]
//           "
//         />
//       </div>

//     </footer>
//   );
// };

// export default Footer;

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FooterMap from "./FooterMap";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Footer = () => {
  const footerRef = useRef(null);

  const brandIcon =
    "https://framerusercontent.com/images/rCmcA1kDLtltS2UUPQYqztQEaY.svg?width=80&height=80";

  const footerLogo =
    "https://framerusercontent.com/images/eLGz0Nx7PSBpSF2iwtEGDBQLIYY.svg?width=1723&height=354";

  const socials = [
    {
      name: "Facebook",
      icon: "https://framerusercontent.com/images/Z88GKfSf2uOgJiC2Q37bEW5Pjs8.svg?width=18&height=19",
      href: "#",
    },
    {
      name: "Instagram",
      icon: "https://framerusercontent.com/images/6XvM4qg6OetjKEC2gAgeDw6LnZk.svg?width=18&height=19",
      href: "#",
    },
    {
      name: "Linkedin",
      icon: "https://framerusercontent.com/images/3Za7nbXTEmGwcM0b4PHa3Jy1U.svg?width=18&height=19",
      href: "#",
    },
    {
      name: "Twitter",
      icon: "https://framerusercontent.com/images/oLxMJicFu2jpqqqx3OwApNiNZfI.svg?width=18&height=19",
      href: "#",
    },
    {
      name: "Youtube",
      icon: "https://framerusercontent.com/images/OLQZfZ9AWmeqRFizSWGqkjNmCo.svg?width=20&height=21",
      href: "#",
    },
  ];

  const pagesLeft = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Activity", href: "/activity" },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
  ];

  const pagesRight = [
    { name: "Contact", href: "/contact" },
    { name: "Error 404", href: "/404" },
  ];

  /* ==========================================================
     SCROLL ANIMATIONS
     - Each column's rows rise one by one (stagger)
     - On desktop, columns cascade left -> right
     - Watermark rises from below its clipping wrapper
     ========================================================== */
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions;

          // Respect users who prefer reduced motion: show everything.
          if (reduceMotion) {
            gsap.set("[data-row]", { autoAlpha: 1, y: 0 });
            gsap.set("[data-watermark]", { yPercent: 0, opacity: 0.05 });
            return;
          }

          // ---------- Columns ----------
          if (isDesktop) {
            // One timeline for the whole grid so columns cascade together.
            const cols = gsap.utils.toArray("[data-col]");

            cols.forEach((col) => {
              gsap.set(col.querySelectorAll("[data-row]"), {
                y: 45,
                autoAlpha: 0,
              });
            });

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: "[data-grid]",
                start: "top 88%",
                once: true,
              },
            });

            cols.forEach((col, i) => {
              tl.to(
                col.querySelectorAll("[data-row]"),
                {
                  y: 0,
                  autoAlpha: 1,
                  duration: 1.3,
                  ease: "power3.out",
                  stagger: 0.1,
                  force3D: true,
                },
                i * 0.15
              );
            });
          } else {
            // Mobile / tablet: columns stack, so each triggers on its own.
            gsap.utils.toArray("[data-col]").forEach((col) => {
              const rows = col.querySelectorAll("[data-row]");

              gsap.set(rows, { y: 45, autoAlpha: 0 });

              gsap.to(rows, {
                y: 0,
                autoAlpha: 1,
                duration: 1.2,
                ease: "power3.out",
                stagger: 0.1,
                force3D: true,
                scrollTrigger: {
                  trigger: col,
                  start: "top 92%",
                  once: true,
                },
              });
            });
          }

          // ---------- Watermark rises from below ----------
          gsap.fromTo(
            "[data-watermark]",
            { yPercent: 100, opacity: 0 },
            {
              yPercent: 0,
              opacity: 0.05,
              duration: 1.8,
              ease: "power4.out",
              force3D: true,
              scrollTrigger: {
                trigger: "[data-watermark-wrap]",
                start: "top 98%",
                once: true,
              },
            }
          );
        }
      );

      // Images / map can change footer height after load.
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);

      return () => {
        window.removeEventListener("load", refresh);
        mm.revert();
      };
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="relative w-full overflow-hidden bg-[#26180f] pt-20 text-[#ebe7dc]"
    >
      {/* =========================================================
          MAIN FOOTER CONTENT
      ========================================================= */}
      <main
        data-grid
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[1600px]
          grid-cols-1
          gap-y-[60px]
          px-[30px]
          pb-[100px]

          md:grid-cols-2
          md:gap-x-[70px]
          md:gap-y-[80px]
          md:px-[50px]

          lg:grid-cols-[1.15fr_0.9fr_0.9fr_0.8fr_1fr]
          lg:gap-x-[50px]
          lg:gap-y-0
        "
      >
        {/* =====================================================
            COLUMN 1 — BRAND
        ===================================================== */}
        <div data-col className="flex flex-col">
          <img
            data-row
            src={brandIcon}
            alt="VillaBliss"
            className="mb-[48px] h-[80px] w-[80px] object-contain"
          />

          <h2
            data-row
            className="
              max-w-[390px]
              font-['Cormorant_Garamond']
              text-[30px]
              font-medium
              leading-[1.15]
              tracking-[-0.02em]
              md:text-[31px]
              lg:text-[32px]
            "
          >
            Your luxurious getaway awaits
          </h2>

          <a
            data-row
            href="/contact"
            className="
              mt-[32px]
              flex
              h-[58px]
              w-fit
              min-w-[275px]
              items-center
              justify-center
              rounded-full
              border
              border-[#fdd17c]
              px-[30px]
              font-['Inter']
              text-[16px]
              font-medium
              text-[#fdd17c]
              transition-colors
              duration-300
              hover:bg-[#fdd17c]
              hover:text-[#26180f]
            "
          >
            Book your stay now
          </a>

          <p
            data-row
            className="mt-[55px] font-['Inter'] text-[15px] leading-[1.5] text-[#ebe7dc]"
          >
            Designed by{" "}
            <a href="#" className="text-[#fdd17c] underline underline-offset-[3px]">
              Webestica
            </a>
            , Powered by{" "}
            <a href="#" className="text-[#fdd17c] underline underline-offset-[3px]">
              Framer
            </a>
          </p>
        </div>

        {/* =====================================================
            COLUMN 2 — PAGES
        ===================================================== */}
        <div data-col className="flex flex-col">
          <h3
            data-row
            className="font-['Cormorant_Garamond'] text-[28px] font-medium leading-none"
          >
            Pages
          </h3>

          <div className="mt-[62px] grid grid-cols-2 gap-x-[65px]">
            {/* Left */}
            <div className="flex flex-col gap-[24px]">
              {pagesLeft.map((page) => (
                <a
                  data-row
                  key={page.name}
                  href={page.href}
                  className="
                    w-fit
                    font-['Inter']
                    text-[16px]
                    leading-[1.3]
                    transition-colors
                    duration-300
                    hover:text-[#fdd17c]
                  "
                >
                  {page.name}
                </a>
              ))}
            </div>

            {/* Right */}
            <div className="flex flex-col gap-[24px]">
              {pagesRight.map((page) => (
                <a
                  data-row
                  key={page.name}
                  href={page.href}
                  className="
                    w-fit
                    font-['Inter']
                    text-[16px]
                    leading-[1.3]
                    transition-colors
                    duration-300
                    hover:text-[#fdd17c]
                  "
                >
                  {page.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            COLUMN 3 — CONTACT
        ===================================================== */}
        <div data-col className="flex flex-col">
          <h3
            data-row
            className="font-['Cormorant_Garamond'] text-[28px] font-medium leading-none"
          >
            Contact info
          </h3>

          <div className="mt-[62px]">
            {/* Phone numbers */}
            <div data-row className="flex flex-wrap gap-x-[25px] gap-y-[10px]">
              <a
                href="tel:+2518546308"
                className="
                  font-['Inter']
                  text-[16px]
                  underline
                  underline-offset-[4px]
                  transition-colors
                  duration-300
                  hover:text-[#fdd17c]
                "
              >
                +(251) 854-6308
              </a>

              <a
                href="tel:+4695372410"
                className="
                  font-['Inter']
                  text-[16px]
                  underline
                  underline-offset-[4px]
                  transition-colors
                  duration-300
                  hover:text-[#fdd17c]
                "
              >
                +(469) 537-2410
              </a>
            </div>

            {/* Email */}
            <a
              data-row
              href="mailto:hello@example.com"
              className="
                mt-[27px]
                block
                w-fit
                font-['Inter']
                text-[16px]
                underline
                underline-offset-[4px]
                transition-colors
                duration-300
                hover:text-[#fdd17c]
              "
            >
              hello@example.com
            </a>

            {/* Address */}
            <div data-row className="mt-[42px]">
              <p className="font-['Inter'] text-[16px] font-medium leading-[1.4] text-[#fdd17c]">
                VillaBliss
              </p>

              <p className="mt-[8px] max-w-[330px] font-['Inter'] text-[16px] leading-[1.45] text-[#ebe7dc]">
                123 Seaside Retreat Lane, Palm Cove, FL 33140, United States
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            COLUMN 4 — SOCIAL
        ===================================================== */}
        <div data-col className="flex flex-col">
          <h3
            data-row
            className="font-['Cormorant_Garamond'] text-[28px] font-medium leading-none"
          >
            Follow us on
          </h3>

          <div className="mt-[62px] flex flex-col gap-[25px]">
            {socials.map((social) => (
              <a
                data-row
                key={social.name}
                href={social.href}
                className="
                  flex
                  w-fit
                  items-center
                  gap-[14px]
                  font-['Inter']
                  text-[16px]
                  transition-colors
                  duration-300
                  hover:text-[#fdd17c]
                "
              >
                <img
                  src={social.icon}
                  alt=""
                  className="h-[19px] w-[19px] shrink-0 object-contain"
                />
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* =====================================================
            COLUMN 5 — MAP
        ===================================================== */}
        <div data-col className="flex flex-col">
          <h3
            data-row
            className="font-['Cormorant_Garamond'] text-[28px] font-medium leading-none"
          >
            Find us
          </h3>

          <div
            data-row
            className="
              relative
              mt-[62px]
              h-[280px]
              w-full
              max-w-[360px]
              overflow-hidden
              rounded-2xl
              border
              border-[#fdd17c]/30
              shadow-[0_10px_30px_rgba(0,0,0,0.25)]
            "
          >
            <FooterMap />
          </div>

          <p
            data-row
            className="mt-[10px] font-['Inter'] text-[11px] text-[#ebe7dc]/50"
          >
            © OpenStreetMap contributors © CARTO
          </p>

          <a
            data-row
            href="https://maps.app.goo.gl/ff5A7VGERWYg4MZr6?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-[10px]
              w-fit
              font-['Inter']
              text-[15px]
              underline
              underline-offset-[4px]
              transition-colors
              duration-300
              hover:text-[#fdd17c]
            "
          >
            Get directions
          </a>
        </div>
      </main>

      {/* =========================================================
          GIANT VILLABLISS WATERMARK
      ========================================================= */}
      <div
        data-watermark-wrap
        className="relative z-0 -mt-[20px] w-full overflow-hidden"
      >
        <img
          data-watermark
          src={footerLogo}
          alt="VillaBliss"
          className="
            mx-auto
            block
            w-[calc(100%-60px)]
            min-w-[900px]
            max-w-[1723px]
            opacity-[0.05]
          "
        />
      </div>
    </footer>
  );
};

export default Footer;