// // // import { ChevronDown } from "lucide-react"; // or swap for your own svg chevron

// // // const navLinks = [
// // //   { label: "Home", href: "/" },
// // //   { label: "Activities", href: "/activities" },
// // //   { label: "Contact", href: "/contact" },
// // // ];

// // // const Navbar = () => {
// // //   return (
// // //     <header className="fixed inset-x-0 top-0 z-50 w-full bg-transparent">
// // //       <div className="flex items-center justify-between px-6 py-6 md:px-10">

// // //         {/* Left nav — desktop only */}
// // //         <nav className="hidden items-center gap-10 md:flex">
// // //           {navLinks.map((link) => (
// // //             <a
// // //               key={link.label}
// // //               href={link.href}
// // //               className="text-sm text-[#26180f] underline-offset-4 hover:underline"
// // //             >
// // //               {link.label}
// // //             </a>
// // //           ))}
// // //           <button className="flex items-center gap-1 text-sm text-[#26180f]">
// // //             Pages <ChevronDown size={14} />
// // //           </button>
// // //         </nav>

// // //         {/* Mobile hamburger */}
// // //         <button
// // //           className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fdd17c] md:hidden"
// // //         >
// // //           <span className="relative block h-4 w-5">
// // //             <span className="absolute left-0 top-0 h-[2px] w-5 bg-[#26180f]" />
// // //             <span className="absolute bottom-0 left-0 h-[2px] w-5 bg-[#26180f]" />
// // //           </span>
// // //         </button>

// // //         {/* Center brand mark */}
// // //         <a href="/" className="absolute left-1/2 top-1/2 h-[52px] w-[52px] -translate-x-1/2 -translate-y-1/2">
// // //           <img src="/images/brand-icon.png" alt="VillaBliss" className="h-full w-full object-contain" />
// // //         </a>

// // //         {/* Book now */}
// // //         <a
// // //           href="#book"
// // //           className="rounded-full border border-[#26180f] px-7 py-3 text-sm text-[#26180f] transition-colors duration-300 hover:bg-[#26180f] hover:text-[#f4f4ea]"
// // //         >
// // //           Book now
// // //         </a>

// // //       </div>
// // //     </header>
// // //   );
// // // };

// // // export default Navbar;



// // import { ChevronDown } from "lucide-react"; // or swap for your own svg chevron

// // const navLinks = [
// //   { label: "Home", href: "/" },
// //   { label: "Activities", href: "/activities" },
// //   { label: "Contact", href: "/contact" },
// // ];

// // const Navbar = ({ visible }) => {
// //   return (
// //      <header
// //       className={`fixed inset-x-0 top-0 z-50 w-full bg-[#f4f4ea] transition-opacity duration-300 ${
// //         visible ? "opacity-100" : "pointer-events-none opacity-0"
// //       }`}
// //     >
// //       <div className="flex items-center justify-between px-6 py-6 md:px-10">

// //         {/* Left nav — desktop only */}
// //         <nav className="hidden items-center gap-10 md:flex">
// //           {navLinks.map((link) => (
// //             <a
// //               key={link.label}
// //               href={link.href}
// //               className="text-sm text-[#26180f] underline-offset-4 hover:underline"
// //             >
// //               {link.label}
// //             </a>
// //           ))}
// //           <button className="flex items-center gap-1 text-sm text-[#26180f]">
// //             Pages <ChevronDown size={14} />
// //           </button>
// //         </nav>

// //         {/* Mobile hamburger */}
// //         <button
// //           className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fdd17c] md:hidden"
// //         >
// //           <span className="relative block h-4 w-5">
// //             <span className="absolute left-0 top-0 h-[2px] w-5 bg-[#26180f]" />
// //             <span className="absolute bottom-0 left-0 h-[2px] w-5 bg-[#26180f]" />
// //           </span>
// //         </button>

// //         {/* Center brand mark */}
// //         <a href="/" className="absolute left-1/2 top-1/2 h-[52px] w-[52px] -translate-x-1/2 -translate-y-1/2">
// //           <img src="/images/brand-icon.png" alt="VillaBliss" className="h-full w-full object-contain" />
// //         </a>

// //         {/* Book now */}
// //         <a
// //           href="#book"
// //           className="rounded-full border border-[#26180f] px-7 py-3 text-sm text-[#26180f] transition-colors duration-300 hover:bg-[#26180f] hover:text-[#f4f4ea]"
// //         >
// //           Book now
// //         </a>

// //       </div>
// //     </header>
// //   );
// // };

// // export default Navbar;

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// const navLinks = [
//   { label: "Home", href: "/" },
//   { label: "Activities", href: "/activities" },
//   { label: "Contact", href: "/contact" },
// ];

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 w-full bg-[#f4f4ea]">
//       <div
//         className="
//           relative
//           mx-auto
//           flex
//           h-[100px]
//           w-full
//           max-w-[1780px]
//           items-center
//           justify-between
//           px-[20px]
//           sm:px-[30px]
//           md:px-[50px]
//         "
//       >
//         {/* ================= DESKTOP LEFT NAV ================= */}
//         <nav className="hidden flex-1 items-center gap-[40px] md:flex">
//           {navLinks.map((link, index) => (
//             <a
//               key={link.label}
//               href={link.href}
//               className={`
//                 group
//                 relative
//                 pb-[4px]
//                 text-[15px]
//                 leading-none
//                 ${
//                   index === 0
//                     ? "text-[#26180f]"
//                     : "text-[#49382c]"
//                 }
//               `}
//             >
//               {link.label}

//               <span
//                 className={`
//                   absolute
//                   bottom-0
//                   left-0
//                   h-[1px]
//                   bg-[#26180f]
//                   transition-all
//                   duration-300
//                   ${
//                     index === 0
//                       ? "w-full"
//                       : "w-0 group-hover:w-full"
//                   }
//                 `}
//               />
//             </a>
//           ))}

//           <button
//             type="button"
//             className="
//               group
//               relative
//               flex
//               items-center
//               gap-[5px]
//               pb-[4px]
//               text-[15px]
//               text-[#49382c]
//             "
//           >
//             Pages

//             <ChevronDown
//               size={16}
//               strokeWidth={1.4}
//             />

//             <span
//               className="
//                 absolute
//                 bottom-0
//                 left-0
//                 h-[1px]
//                 w-0
//                 bg-[#26180f]
//                 transition-all
//                 duration-300
//                 group-hover:w-full
//               "
//             />
//           </button>
//         </nav>

//         {/* ================= MOBILE LOGO ================= */}
//         <a
//           href="/"
//           aria-label="VillaBliss Home"
//           className="
//             relative
//             z-10
//             block
//             h-[60px]
//             w-[60px]
//             shrink-0
//             md:hidden
//           "
//         >
//           <img
//             src="/images/brand-icon.png"
//             alt="VillaBliss"
//             width={70}
//             height={70}
//             className="
//               block
//               h-full
//               w-full
//               object-contain
//             "
//           />
//         </a>

//         {/* ================= DESKTOP CENTER LOGO ================= */}
//         <a
//           href="/"
//           aria-label="VillaBliss Home"
//           className="
//             absolute
//             left-1/2
//             top-1/2
//             hidden
//             h-[70px]
//             w-[70px]
//             -translate-x-1/2
//             -translate-y-1/2
//             md:block
//           "
//         >
//           <img
//             src="/images/brand-icon.png"
//             alt="VillaBliss"
//             width={70}
//             height={70}
//             className="
//               block
//               h-full
//               w-full
//               object-contain
//             "
//           />
//         </a>

//         {/* ================= DESKTOP BOOK BUTTON ================= */}
//         <div className="hidden flex-1 justify-end md:flex">
//           <a
//             href="/contact"
//             className="
//               rounded-full
//               border
//               border-[#26180f]
//               px-[25px]
//               py-[12px]
//               text-[15px]
//               text-[#26180f]
//               transition-all
//               duration-300
//               hover:bg-[#26180f]
//               hover:text-[#f4f4ea]
//             "
//           >
//             Book now
//           </a>
//         </div>

//         {/* ================= MOBILE HAMBURGER ================= */}
//         <button
//           type="button"
//           onClick={() => setMenuOpen((prev) => !prev)}
//           aria-label={menuOpen ? "Close menu" : "Open menu"}
//           aria-expanded={menuOpen}
//           className="
//             relative
//             z-20
//             flex
//             h-[48px]
//             w-[48px]
//             shrink-0
//             items-center
//             justify-center
//             rounded-full
//             bg-[#fdd17c]
//             md:hidden
//           "
//         >
//           <div className="relative h-[14px] w-[18px]">
//             {/* TOP LINE */}
//             <span
//               className={`
//                 absolute
//                 left-0
//                 h-[1.5px]
//                 w-full
//                 rounded-[10px]
//                 bg-[#26180f]
//                 transition-all
//                 duration-[400ms]
//                 ease-[cubic-bezier(0.76,0,0.24,1)]
//                 ${
//                   menuOpen
//                     ? "top-[6px] rotate-45"
//                     : "top-0 rotate-0"
//                 }
//               `}
//             />

//             {/* BOTTOM LINE */}
//             <span
//               className={`
//                 absolute
//                 left-0
//                 h-[1.5px]
//                 w-full
//                 rounded-[10px]
//                 bg-[#26180f]
//                 transition-all
//                 duration-[400ms]
//                 ease-[cubic-bezier(0.76,0,0.24,1)]
//                 ${
//                   menuOpen
//                     ? "bottom-[6px] -rotate-45"
//                     : "bottom-0 rotate-0"
//                 }
//               `}
//             />
//           </div>
//         </button>
//       </div>

//       {/* ================= MOBILE MENU ================= */}
//       <div
//         className={`
//           overflow-hidden
//           bg-[#f4f4ea]
//           transition-[max-height]
//           duration-500
//           ease-in-out
//           md:hidden
//           ${
//             menuOpen
//               ? "max-h-[500px]"
//               : "max-h-0"
//           }
//         `}
//       >
//         <nav className="flex flex-col px-[20px] pb-[30px] sm:px-[30px]">
//           {navLinks.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               onClick={() => setMenuOpen(false)}
//               className="
//                 border-b
//                 border-[#49382c]/20
//                 py-[18px]
//                 text-[18px]
//                 text-[#26180f]
//               "
//             >
//               {link.label}
//             </a>
//           ))}

//           <button
//             type="button"
//             className="
//               flex
//               items-center
//               justify-between
//               border-b
//               border-[#49382c]/20
//               py-[18px]
//               text-[18px]
//               text-[#26180f]
//             "
//           >
//             Pages

//             <ChevronDown
//               size={18}
//               strokeWidth={1.4}
//             />
//           </button>

//           <a
//             href="/contact"
//             onClick={() => setMenuOpen(false)}
//             className="
//               mt-[25px]
//               rounded-full
//               border
//               border-[#26180f]
//               px-[25px]
//               py-[13px]
//               text-center
//               text-[15px]
//               text-[#26180f]
//             "
//           >
//             Book now
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Activities", href: "/activities" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const navbarRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navbarRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.1,
          ease: "power3.out",
        }
      );
    }, navbarRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={navbarRef}
      className="sticky top-0 z-50 w-full bg-[#f4f4ea]"
    >
      <div
        className="
          relative
          mx-auto
          flex
          h-[100px]
          w-full
          max-w-[1780px]
          items-center
          justify-between
          px-[20px]
          sm:px-[30px]
          md:px-[50px]
        "
      >
        {/* ==================================================
            DESKTOP LEFT NAV
        ================================================== */}

        <nav className="hidden flex-1 items-center gap-[40px] md:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`
                group
                relative
                pb-[4px]
                text-[15px]
                leading-none
                ${
                  index === 0
                    ? "text-[#26180f]"
                    : "text-[#49382c]"
                }
              `}
            >
              {link.label}

              <span
                className={`
                  absolute
                  bottom-0
                  left-0
                  h-[1px]
                  bg-[#26180f]
                  transition-all
                  duration-300
                  ${
                    index === 0
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </a>
          ))}

          {/* PAGES */}

          <button
            type="button"
            className="
              group
              relative
              flex
              items-center
              gap-[5px]
              pb-[4px]
              text-[15px]
              text-[#49382c]
            "
          >
            Pages

            <ChevronDown
              size={16}
              strokeWidth={1.4}
            />

            <span
              className="
                absolute
                bottom-0
                left-0
                h-[1px]
                w-0
                bg-[#26180f]
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </button>
        </nav>

        {/* ==================================================
            MOBILE LOGO
        ================================================== */}

        <a
          href="/"
          aria-label="VillaBliss Home"
          className="
            relative
            z-10
            block
            h-[60px]
            w-[60px]
            shrink-0
            md:hidden
          "
        >
          <img
            src="/images/brand-icon.png"
            alt="VillaBliss"
            className="
              block
              h-full
              w-full
              object-contain
            "
          />
        </a>

        {/* ==================================================
            DESKTOP CENTER LOGO
        ================================================== */}

        <a
          href="/"
          aria-label="VillaBliss Home"
          className="
            absolute
            left-1/2
            top-1/2
            z-10
            hidden
            h-[70px]
            w-[70px]
            -translate-x-1/2
            -translate-y-1/2
            md:block
          "
        >
          <img
            src="/images/brand-icon.png"
            alt="VillaBliss"
            className="
              block
              h-full
              w-full
              object-contain
            "
          />
        </a>

        {/* ==================================================
            DESKTOP BOOK NOW
        ================================================== */}

        <div className="hidden flex-1 justify-end md:flex">
          <a
            href="/contact"
            className="
              rounded-full
              border
              border-[#26180f]
              px-[25px]
              py-[12px]
              text-[15px]
              text-[#26180f]
              transition-all
              duration-300
              hover:bg-[#26180f]
              hover:text-[#f4f4ea]
            "
          >
            Book now
          </a>
        </div>

        {/* ==================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={menuOpen}
          className="
            relative
            z-20
            flex
            h-[48px]
            w-[48px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#fdd17c]
            md:hidden
          "
        >
          <div className="relative h-[14px] w-[18px]">
            {/* TOP LINE */}

            <span
              className={`
                absolute
                left-0
                h-[1.5px]
                w-full
                rounded-full
                bg-[#26180f]
                transition-all
                duration-300
                ${
                  menuOpen
                    ? "top-[6px] rotate-45"
                    : "top-0"
                }
              `}
            />

            {/* BOTTOM LINE */}

            <span
              className={`
                absolute
                left-0
                h-[1.5px]
                w-full
                rounded-full
                bg-[#26180f]
                transition-all
                duration-300
                ${
                  menuOpen
                    ? "bottom-[6px] -rotate-45"
                    : "bottom-0"
                }
              `}
            />
          </div>
        </button>
      </div>

      {/* ==================================================
          MOBILE MENU
      ================================================== */}

      <div
        className={`
          overflow-hidden
          bg-[#f4f4ea]
          transition-[max-height]
          duration-500
          ease-in-out
          md:hidden
          ${
            menuOpen
              ? "max-h-[500px]"
              : "max-h-0"
          }
        `}
      >
        <nav
          className="
            flex
            flex-col
            px-[20px]
            pb-[30px]
            sm:px-[30px]
          "
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="
                border-b
                border-[#49382c]/20
                py-[18px]
                text-[18px]
                text-[#26180f]
              "
            >
              {link.label}
            </a>
          ))}

          {/* PAGES */}

          <button
            type="button"
            className="
              flex
              items-center
              justify-between
              border-b
              border-[#49382c]/20
              py-[18px]
              text-[18px]
              text-[#26180f]
            "
          >
            Pages

            <ChevronDown
              size={18}
              strokeWidth={1.4}
            />
          </button>

          {/* BOOK NOW */}

          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="
              mt-[25px]
              rounded-full
              border
              border-[#26180f]
              px-[25px]
              py-[13px]
              text-center
              text-[15px]
              text-[#26180f]
            "
          >
            Book now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;