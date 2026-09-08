// // components/Footer/Footer.jsx

// const Footer = () => {
//   const pagesLeft = [
//     { label: "Home", href: "/" },
//     { label: "About", href: "/about" },
//     { label: "Activity", href: "/activity" },
//     { label: "Blog", href: "/blog" },
//     { label: "Gallery", href: "/gallery" },
//   ];

//   const pagesRight = [
//     { label: "Contact", href: "/contact" },
//     { label: "Error 404", href: "/404" },
//   ];

//   const socials = [
//     {
//       name: "Facebook",
//       href: "https://www.facebook.com/",
//       icon: "https://framerusercontent.com/images/Z88GKfSf2uOgJiC2Q37bEW5Pjs8.svg?width=18&height=19",
//     },
//     {
//       name: "Instagram",
//       href: "https://www.instagram.com/",
//       icon: "https://framerusercontent.com/images/6XvM4qg6OetjKEC2gAgeDw6LnZk.svg?width=18&height=19",
//     },
//     {
//       name: "Linkedin",
//       href: "https://in.linkedin.com/",
//       icon: "https://framerusercontent.com/images/3Za7nbXTEmGwcM0b4PHa3Jy1U.svg?width=18&height=19",
//     },
//     {
//       name: "Twitter",
//       href: "https://x.com/",
//       icon: "https://framerusercontent.com/images/oLxMJicFu2jpqqqx3OwApNiNZfI.svg?width=18&height=19",
//     },
//     {
//       name: "Youtube",
//       href: "https://www.youtube.com/",
//       icon: "https://framerusercontent.com/images/OLQZfZ9AWmeqRFizSWGqkjNmCo.svg?width=20&height=21",
//     },
//   ];

//   return (
//     <footer className="relative w-full overflow-hidden bg-[#26180f] text-[#ebe7dc]">
      
//       {/* ================= MAIN FOOTER CONTENT ================= */}
//       <div className="relative z-10 mx-auto max-w-[1530px] px-[35px] pb-[105px] pt-[145px] md:px-[55px] lg:px-[70px]">
        
//         <div className="grid grid-cols-1 gap-[70px] md:grid-cols-2 lg:grid-cols-[1.55fr_1fr_1.1fr_0.85fr] lg:gap-[70px]">

//           {/* ================= BRAND ================= */}
//           <div className="flex flex-col">
            
//             {/* Brand Icon */}
//             <a
//               href="/"
//               className="mb-[55px] block h-[80px] w-[80px]"
//             >
//               <img
//                 src="/images/brand-icon.png"
//                 alt="VillaBliss"
//                 className="h-full w-full object-contain"
//               />
//             </a>

//             {/* Heading */}
//             <h2 className="max-w-[390px] font-cormorant text-[30px] leading-[1.05] tracking-[-0.02em] text-white md:text-[31px] lg:text-[32px]">
//               Your luxurious getaway awaits
//             </h2>

//             {/* Button */}
//             <a
//               href="/contact"
//               className="mt-[32px] flex h-[57px] w-[275px] items-center justify-center rounded-full border border-[#fdd17c] font-inter text-[16px] font-medium text-[#fdd17c] transition-all duration-300 hover:bg-[#fdd17c] hover:text-[#26180f]"
//             >
//               Book your stay now
//             </a>

//             {/* Copyright */}
//             <p className="mt-[55px] font-inter text-[14px] leading-[1.5] text-[#ebe7dc]">
//               Designed by{" "}
//               <a
//                 href="https://www.webestica.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-[#fdd17c] underline underline-offset-[2px]"
//               >
//                 Webestica
//               </a>
//               , Powered by{" "}
//               <a
//                 href="https://framer.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-[#fdd17c] underline underline-offset-[2px]"
//               >
//                 Framer
//               </a>
//             </p>
//           </div>

//           {/* ================= PAGES ================= */}
//           <div>
//             <h3 className="mb-[58px] font-cormorant text-[25px] leading-none text-white">
//               Pages
//             </h3>

//             <div className="grid grid-cols-2 gap-x-[65px]">
              
//               {/* Left */}
//               <div className="flex flex-col gap-[20px]">
//                 {pagesLeft.map((page, index) => (
//                   <a
//                     key={page.label}
//                     href={page.href}
//                     className={`font-inter text-[16px] leading-none transition-colors duration-300 hover:text-[#fdd17c] ${
//                       index === 0 ? "text-[#fdd17c]" : "text-[#ebe7dc]"
//                     }`}
//                   >
//                     {page.label}
//                   </a>
//                 ))}
//               </div>

//               {/* Right */}
//               <div className="flex flex-col gap-[20px]">
//                 {pagesRight.map((page) => (
//                   <a
//                     key={page.label}
//                     href={page.href}
//                     className="font-inter text-[16px] leading-none text-[#ebe7dc] transition-colors duration-300 hover:text-[#fdd17c]"
//                   >
//                     {page.label}
//                   </a>
//                 ))}
//               </div>

//             </div>
//           </div>

//           {/* ================= CONTACT ================= */}
//           <div>
//             <h3 className="mb-[58px] font-cormorant text-[25px] leading-none text-white">
//               Contact info
//             </h3>

//             {/* Phone + Email */}
//             <div className="font-inter text-[16px] leading-none">
              
//               <div className="flex flex-wrap gap-x-[28px] gap-y-[18px]">
//                 <a
//                   href="tel:+2518546308"
//                   className="underline underline-offset-[3px] transition-colors hover:text-[#fdd17c]"
//                 >
//                   +(251) 854-6308
//                 </a>

//                 <a
//                   href="tel:+4695372410"
//                   className="underline underline-offset-[3px] transition-colors hover:text-[#fdd17c]"
//                 >
//                   +(469) 537-2410
//                 </a>
//               </div>

//               <a
//                 href="mailto:hello@example.com"
//                 className="mt-[28px] block w-fit underline underline-offset-[3px] transition-colors hover:text-[#fdd17c]"
//               >
//                 hello@example.com
//               </a>
//             </div>

//             {/* Address */}
//             <div className="mt-[43px]">
//               <p className="font-inter text-[16px] leading-none text-[#fdd17c]">
//                 VillaBliss
//               </p>

//               <a
//                 href="https://www.google.com/maps/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-[13px] block max-w-[330px] font-inter text-[16px] leading-[1.45] text-[#ebe7dc] transition-colors hover:text-[#fdd17c]"
//               >
//                 123 Seaside Retreat Lane, Palm Cove, FL 33140,
//                 <br />
//                 United States
//               </a>
//             </div>
//           </div>

//           {/* ================= SOCIAL ================= */}
//           <div>
//             <h3 className="mb-[58px] font-cormorant text-[25px] leading-none text-white">
//               Follow us on
//             </h3>

//             <div className="flex flex-col gap-[20px]">
//               {socials.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group flex items-center gap-[13px] font-inter text-[16px] leading-none text-[#ebe7dc] transition-colors duration-300 hover:text-[#fdd17c]"
//                 >
//                   <div className="flex h-[20px] w-[20px] items-center justify-center">
//                     <img
//                       src={social.icon}
//                       alt=""
//                       className="max-h-[20px] max-w-[20px] object-contain brightness-0 invert"
//                     />
//                   </div>

//                   <span>{social.name}</span>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ================= HUGE BACKGROUND LOGO ================= */}
//       <div className="pointer-events-none relative z-0 -mt-[5px] flex w-full justify-center overflow-hidden">
//         <img
//           src="https://framerusercontent.com/images/eLGz0Nx7PSBpSF2iwtEGDBQLIYY.svg?width=1723&height=354"
//           alt=""
//           className="block h-auto w-[calc(100%-100px)] max-w-[1723px] object-contain opacity-[0.05] md:w-[calc(100%-140px)] lg:w-[calc(100%-170px)]"
//         />
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
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

  return (
    <footer className="relative w-full overflow-hidden bg-[#26180f] text-[#ebe7dc] pt-[110px]">

      {/* =========================================================
          MAIN FOOTER CONTENT
      ========================================================= */}
      <main
        className="
          relative
    z-10
    mx-auto
    grid
    w-full
    max-w-[1450px]

    grid-cols-1

    px-[30px]
    pb-[100px]

    md:grid-cols-2
    md:px-[50px]
    md:gap-x-[70px]
    md:gap-y-[80px]

    lg:grid-cols-[1.25fr_1fr_1fr_0.85fr]
    lg:gap-x-[70px]
    lg:gap-y-0
        "
      >

        {/* =====================================================
            COLUMN 1 — BRAND
        ===================================================== */}
        <div className="flex flex-col">

          {/* Brand Icon */}
          <img
            src={brandIcon}
            alt="VillaBliss"
            className="
              mb-[48px]
              h-[80px]
              w-[80px]
              object-contain
            "
          />

          {/* Heading */}
          <h2
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

          {/* CTA */}
          <a
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
              transition-all
              duration-300
              hover:bg-[#fdd17c]
              hover:text-[#26180f]
            "
          >
            Book your stay now
          </a>

          {/* Copyright */}
          <p
            className="
              mt-[55px]
              font-['Inter']
              text-[15px]
              leading-[1.5]
              text-[#ebe7dc]
            "
          >
            Designed by{" "}
            <a
              href="#"
              className="
                text-[#fdd17c]
                underline
                underline-offset-[3px]
              "
            >
              Webestica
            </a>
            , Powered by{" "}
            <a
              href="#"
              className="
                text-[#fdd17c]
                underline
                underline-offset-[3px]
              "
            >
              Framer
            </a>
          </p>
        </div>


        {/* =====================================================
            COLUMN 2 — PAGES
        ===================================================== */}
        <div className="flex flex-col">

          <h3
            className="
              font-['Cormorant_Garamond']
              text-[28px]
              font-medium
              leading-none
            "
          >
            Pages
          </h3>

          {/* Page Links */}
          <div
            className="
              mt-[62px]
              grid
              grid-cols-2
              gap-x-[65px]
            "
          >

            {/* Left */}
            <div className="flex flex-col gap-[24px]">

              {pagesLeft.map((page) => (
                <a
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
        <div className="flex flex-col">

          <h3
            className="
              font-['Cormorant_Garamond']
              text-[28px]
              font-medium
              leading-none
            "
          >
            Contact info
          </h3>

          {/* Contact Details */}
          <div className="mt-[62px]">

            {/* Phone Numbers */}
            <div
              className="
                flex
                flex-wrap
                gap-x-[25px]
                gap-y-[10px]
              "
            >
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
            <div className="mt-[42px]">

              <p
                className="
                  font-['Inter']
                  text-[16px]
                  font-medium
                  leading-[1.4]
                  text-[#fdd17c]
                "
              >
                VillaBliss
              </p>

              <p
                className="
                  mt-[8px]
                  max-w-[330px]
                  font-['Inter']
                  text-[16px]
                  leading-[1.45]
                  text-[#ebe7dc]
                "
              >
                123 Seaside Retreat Lane, Palm Cove,
                FL 33140, United States
              </p>

            </div>
          </div>
        </div>


        {/* =====================================================
            COLUMN 4 — SOCIAL
        ===================================================== */}
        <div className="flex flex-col">

          <h3
            className="
              font-['Cormorant_Garamond']
              text-[28px]
              font-medium
              leading-none
            "
          >
            Follow us on
          </h3>

          {/* Social Links */}
          <div className="mt-[62px] flex flex-col gap-[25px]">

            {socials.map((social) => (
              <a
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
                  className="
                    h-[19px]
                    w-[19px]
                    shrink-0
                    object-contain
                  "
                />

                <span>{social.name}</span>

              </a>
            ))}

          </div>
        </div>

      </main>


      {/* =========================================================
          GIANT VILLABLISS WATERMARK
      ========================================================= */}
      <div
        className="
          relative
          z-0
          -mt-[20px]
          w-full
          overflow-hidden
        "
      >
        <img
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