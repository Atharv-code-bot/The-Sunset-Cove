
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FooterMap from "./FooterMap";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Footer = () => {
  const footerRef = useRef(null);

  const brandIcon = "/images/footer_logo.png";

  const footerLogo = "/images/The_Sunset_Cove_footer.png";

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

  // useGSAP(
  //   () => {
  //     const mm = gsap.matchMedia();

  //     mm.add(
  //       {
  //         isDesktop: "(min-width: 1024px)",
  //         reduceMotion: "(prefers-reduced-motion: reduce)",
  //       },
  //       (context) => {
  //         const { isDesktop, reduceMotion } = context.conditions;

  //         if (reduceMotion) {
  //           gsap.set("[data-row]", { autoAlpha: 1, y: 0 });
  //           gsap.set("[data-watermark]", {
  //             yPercent: 0,
  //             opacity: 0.08,
  //           });
  //           return;
  //         }

  //         if (isDesktop) {
  //           const cols = gsap.utils.toArray("[data-col]");

  //           cols.forEach((col) => {
  //             gsap.set(col.querySelectorAll("[data-row]"), {
  //               y: 45,
  //               autoAlpha: 0,
  //             });
  //           });

  //           const tl = gsap.timeline({
  //             scrollTrigger: {
  //               trigger: "[data-grid]",
  //               start: "top 88%",
  //               once: true,
  //             },
  //           });

  //           cols.forEach((col, i) => {
  //             tl.to(
  //               col.querySelectorAll("[data-row]"),
  //               {
  //                 y: 0,
  //                 autoAlpha: 1,
  //                 duration: 1.3,
  //                 ease: "power3.out",
  //                 stagger: 0.1,
  //                 force3D: true,
  //               },
  //               i * 0.15
  //             );
  //           });
  //         } else {
  //           gsap.utils.toArray("[data-col]").forEach((col) => {
  //             const rows = col.querySelectorAll("[data-row]");

  //             gsap.set(rows, { y: 35, autoAlpha: 0 });

  //             gsap.to(rows, {
  //               y: 0,
  //               autoAlpha: 1,
  //               duration: 1.2,
  //               ease: "power3.out",
  //               stagger: 0.08,
  //               force3D: true,
  //               scrollTrigger: {
  //                 trigger: col,
  //                 start: "top 92%",
  //                 once: true,
  //               },
  //             });
  //           });
  //         }

  //         gsap.fromTo(
  //           "[data-watermark]",
  //           { yPercent: 100, opacity: 0 },
  //           {
  //             yPercent: 0,
  //             opacity: 0.08,
  //             duration: 1.8,
  //             ease: "power4.out",
  //             force3D: true,
  //             scrollTrigger: {
  //               trigger: footerRef.current,
  //               start: "top 98%",
  //               once: true,
  //             },
  //           }
  //         );
  //       }
  //     );

  //     const refresh = () => ScrollTrigger.refresh();
  //     window.addEventListener("load", refresh);

  //     return () => {
  //       window.removeEventListener("load", refresh);
  //       mm.revert();
  //     };
  //   },
  //   { scope: footerRef }
  // );
useGSAP(
  () => {
    const root = footerRef.current;
    if (!root) return;

    // Respect reduced motion: leave everything visible
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    const cols = Array.from(root.querySelectorAll("[data-col]"));
    const grid = root.querySelector("[data-grid]");
    const watermark = root.querySelector("[data-watermark]");
    const watermarkWrap = root.querySelector("[data-watermark-wrap]");
    const rowsOf = (col) => Array.from(col.querySelectorAll("[data-row]"));

    // Hidden starting state
    cols.forEach((col) =>
      gsap.set(rowsOf(col), { y: isDesktop ? 45 : 35, autoAlpha: 0 })
    );
    if (watermark) gsap.set(watermark, { yPercent: 100, opacity: 0 });

    const observers = [];
    const onEnter = (el, callback, rootMargin = "0px 0px -5% 0px") => {
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            io.disconnect();
            callback();
          }
        },
        { rootMargin, threshold: 0 }
      );
      io.observe(el);
      observers.push(io);
    };

    const playCol = (col, delay = 0) =>
      gsap.to(rowsOf(col), {
        y: 0,
        autoAlpha: 1,
        duration: isDesktop ? 1.3 : 1,
        ease: "power3.out",
        stagger: isDesktop ? 0.1 : 0.08,
        delay,
        force3D: true,
      });

    if (isDesktop) {
      // All columns together, staggered left to right
      onEnter(grid, () => cols.forEach((col, i) => playCol(col, i * 0.15)));
    } else {
      // Mobile/tablet: each column animates when it scrolls into view
      cols.forEach((col) => onEnter(col, () => playCol(col)));
    }

    onEnter(
      watermarkWrap,
      () =>
        gsap.to(watermark, {
          yPercent: 0,
          opacity: 0.08,
          duration: 1.8,
          ease: "power4.out",
          force3D: true,
        }),
      "0px"
    );

    return () => observers.forEach((io) => io.disconnect());
  },
  { scope: footerRef }
);
  return (
    <footer
      ref={footerRef}
      className="
        relative isolate w-full overflow-hidden
        bg-[#26180f] pt-8 text-[#ebe7dc]
        md:pt-20
      "
    >
      {/* MAIN FOOTER CONTENT */}
      <main
        data-grid
        className="
          relative z-10 mx-auto grid w-full max-w-[1600px]
          grid-cols-1 gap-y-[32px]
          px-[22px] pb-[24px]

          md:grid-cols-2 md:gap-x-[70px] md:gap-y-[80px]
          md:px-[50px]

          lg:grid-cols-[1.1fr_0.85fr_0.9fr_0.75fr_1.4fr]
          lg:gap-x-[50px] lg:gap-y-0
        "
      >
        {/* COLUMN 1 — BRAND */}
        <div data-col className="flex flex-col">
          <img
            data-row
            src={brandIcon}
            alt="The Sunset Cove"
            className="
              mb-[20px] h-[60px] w-[60px] object-contain
              md:mb-[48px] md:h-[140px] md:w-[140px]
            "
          />

          <h2
            data-row
            className="
              max-w-[390px] font-['Cormorant_Garamond']
              text-[25px] font-medium leading-[1.15]
              tracking-[-0.02em]
              md:text-[31px] lg:text-[32px]
            "
          >
            Your luxurious getaway awaits
          </h2>

          <a
            data-row
            href="/contact"
            className="
              mt-[18px] flex h-[42px] w-fit min-w-[205px]
              items-center justify-center rounded-full
              border border-[#fdd17c] px-[22px]
              font-['Inter'] text-[14px] font-medium
              text-[#fdd17c] transition-colors duration-300
              hover:bg-[#fdd17c] hover:text-[#26180f]

              md:mt-[32px] md:h-[58px] md:min-w-[275px]
              md:px-[30px] md:text-[16px]
            "
          >
            Book your stay now
          </a>

          <p
  data-row
  className="
    mt-[25px] font-['Inter'] text-[14px]
    leading-[1.6] text-[#ebe7dc]
    md:mt-[55px] md:text-[15px] md:leading-[1.5]
  "
>
  © {new Date().getFullYear()}{" "}
  <span className="text-[#fdd17c]">The Sunset Cove</span>.
  All Rights Reserved.
</p>
        </div>

        {/* COLUMN 2 — PAGES */}
        <div data-col className="flex flex-col">
          <h3
            data-row
            className="
              font-['Cormorant_Garamond'] text-[25px]
              font-medium leading-none
              md:text-[28px]
            "
          >
            Pages
          </h3>

          <div
            className="
              mt-[22px] grid grid-cols-2 gap-x-[35px]
              md:mt-[62px] md:gap-x-[65px]
            "
          >
            <div className="flex flex-col gap-[12px] md:gap-[24px]">
              {pagesLeft.map((page) => (
                <a
                  data-row
                  key={page.name}
                  href={page.href}
                  className="
                    w-fit font-['Inter'] text-[14px]
                    leading-[1.3] transition-colors duration-300
                    hover:text-[#fdd17c]
                    md:text-[16px]
                  "
                >
                  {page.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-[12px] md:gap-[24px]">
              {pagesRight.map((page) => (
                <a
                  data-row
                  key={page.name}
                  href={page.href}
                  className="
                    w-fit font-['Inter'] text-[14px]
                    leading-[1.3] transition-colors duration-300
                    hover:text-[#fdd17c]
                    md:text-[16px]
                  "
                >
                  {page.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* COLUMN 3 — CONTACT */}
        <div data-col className="flex flex-col">
          <h3
            data-row
            className="
              font-['Cormorant_Garamond'] text-[25px]
              font-medium leading-none
              md:text-[28px]
            "
          >
            Contact info
          </h3>

          <div className="mt-[22px] md:mt-[62px]">
            <div
              data-row
              className="
                flex flex-wrap gap-x-[18px] gap-y-[8px]
                md:gap-x-[25px] md:gap-y-[10px]
              "
            >
              <a
                href="tel:+2518546308"
                className="
                  font-['Inter'] text-[14px] underline
                  underline-offset-[4px] transition-colors
                  duration-300 hover:text-[#fdd17c]
                  md:text-[16px]
                "
              >
                +(251) 854-6308
              </a>

              <a
                href="tel:+4695372410"
                className="
                  font-['Inter'] text-[14px] underline
                  underline-offset-[4px] transition-colors
                  duration-300 hover:text-[#fdd17c]
                  md:text-[16px]
                "
              >
                +(469) 537-2410
              </a>
            </div>

            <a
              data-row
              href="mailto:hello@example.com"
              className="
                mt-[14px] block w-fit font-['Inter']
                text-[14px] underline underline-offset-[4px]
                transition-colors duration-300 hover:text-[#fdd17c]
                md:mt-[27px] md:text-[16px]
              "
            >
              hello@example.com
            </a>

            <div data-row className="mt-[22px] md:mt-[42px]">
              <p
                className="
                  font-['Inter'] text-[14px] font-medium
                  leading-[1.4] text-[#fdd17c]
                  md:text-[16px]
                "
              >
                The Sunset Cove
              </p>

              {/* Update this address so it matches the map location (Neware, Maharashtra) */}
              <p
                className="
                  mt-[6px] max-w-[330px] font-['Inter']
                  text-[14px] leading-[1.5] text-[#ebe7dc]
                  md:mt-[8px] md:text-[16px] md:leading-[1.45]
                "
              >
                123 Seaside Retreat Lane, Palm Cove, FL 33140, United States
              </p>
            </div>
          </div>
        </div>

        {/* COLUMN 4 — SOCIAL
            Mobile/tablet: after the map (order-5)
            Desktop (lg+): 4th column (lg:order-4) */}
        <div data-col className="order-5 flex flex-col lg:order-4">
          <h3
            data-row
            className="
              font-['Cormorant_Garamond'] text-[25px]
              font-medium leading-none
              md:text-[28px]
            "
          >
            Follow us on
          </h3>

          <div
            className="
              mt-[22px] flex flex-col gap-[14px]
              md:mt-[62px] md:gap-[25px]
            "
          >
            {socials.map((social) => (
              <a
                data-row
                key={social.name}
                href={social.href}
                className="
                  flex w-fit items-center gap-[11px]
                  font-['Inter'] text-[14px]
                  transition-colors duration-300
                  hover:text-[#fdd17c]
                  md:gap-[14px] md:text-[16px]
                "
              >
                <img
                  src={social.icon}
                  alt=""
                  className="
                    h-[18px] w-[18px] shrink-0 object-contain
                    md:h-[19px] md:w-[19px]
                  "
                />
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* COLUMN 5 — MAP
            Mobile/tablet: before social (order-4)
            Desktop (lg+): last, widest column (lg:order-5) */}
        <div data-col className="order-4 flex flex-col lg:order-5">
          <h3
            data-row
            className="
              font-['Cormorant_Garamond'] text-[25px]
              font-medium leading-none
              md:text-[28px]
            "
          >
            Find us
          </h3>

          <div
            data-row
            className="
              mt-[22px] w-full max-w-[440px]
              md:mt-[62px]
            "
          >
            <FooterMap />
          </div>
        </div>
      </main>

      {/* BOTTOM WATERMARK */}
      <div
        data-watermark-wrap
        className="
          pointer-events-none relative z-0 mt-[5px]
          h-[85px] w-full overflow-hidden
          sm:h-[110px]
          md:mt-[10px] md:h-[250px]
          lg:h-[320px]
        "
      >
        <img
          data-watermark
          src={footerLogo}
          alt="The Sunset Cove"
          className="
            absolute bottom-0 left-1/2 block
            h-auto w-[110%] max-w-none
            -translate-x-1/2 object-contain
            opacity-[0.08]
            md:w-[115%]
          "
        />
      </div>
    </footer>
  );
};

export default Footer;