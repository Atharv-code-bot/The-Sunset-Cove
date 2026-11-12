// // // // // // // // import { ChevronDown } from "lucide-react"; // or swap for your own svg chevron

// // // // // // // // const navLinks = [
// // // // // // // //   { label: "Home", href: "/" },
// // // // // // // //   { label: "Activities", href: "/activities" },
// // // // // // // //   { label: "Contact", href: "/contact" },
// // // // // // // // ];

// // // // // // // // const Navbar = () => {
// // // // // // // //   return (
// // // // // // // //     <header className="fixed inset-x-0 top-0 z-50 w-full bg-transparent">
// // // // // // // //       <div className="flex items-center justify-between px-6 py-6 md:px-10">

// // // // // // // //         {/* Left nav — desktop only */}
// // // // // // // //         <nav className="hidden items-center gap-10 md:flex">
// // // // // // // //           {navLinks.map((link) => (
// // // // // // // //             <a
// // // // // // // //               key={link.label}
// // // // // // // //               href={link.href}
// // // // // // // //               className="text-sm text-[#26180f] underline-offset-4 hover:underline"
// // // // // // // //             >
// // // // // // // //               {link.label}
// // // // // // // //             </a>
// // // // // // // //           ))}
// // // // // // // //           <button className="flex items-center gap-1 text-sm text-[#26180f]">
// // // // // // // //             Pages <ChevronDown size={14} />
// // // // // // // //           </button>
// // // // // // // //         </nav>

// // // // // // // //         {/* Mobile hamburger */}
// // // // // // // //         <button
// // // // // // // //           className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fdd17c] md:hidden"
// // // // // // // //         >
// // // // // // // //           <span className="relative block h-4 w-5">
// // // // // // // //             <span className="absolute left-0 top-0 h-[2px] w-5 bg-[#26180f]" />
// // // // // // // //             <span className="absolute bottom-0 left-0 h-[2px] w-5 bg-[#26180f]" />
// // // // // // // //           </span>
// // // // // // // //         </button>

// // // // // // // //         {/* Center brand mark */}
// // // // // // // //         <a href="/" className="absolute left-1/2 top-1/2 h-[52px] w-[52px] -translate-x-1/2 -translate-y-1/2">
// // // // // // // //           <img src="/images/brand-icon.png" alt="VillaBliss" className="h-full w-full object-contain" />
// // // // // // // //         </a>

// // // // // // // //         {/* Book now */}
// // // // // // // //         <a
// // // // // // // //           href="#book"
// // // // // // // //           className="rounded-full border border-[#26180f] px-7 py-3 text-sm text-[#26180f] transition-colors duration-300 hover:bg-[#26180f] hover:text-[#f4f4ea]"
// // // // // // // //         >
// // // // // // // //           Book now
// // // // // // // //         </a>

// // // // // // // //       </div>
// // // // // // // //     </header>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Navbar;



// // // // // // // import { ChevronDown } from "lucide-react"; // or swap for your own svg chevron

// // // // // // // const navLinks = [
// // // // // // //   { label: "Home", href: "/" },
// // // // // // //   { label: "Activities", href: "/activities" },
// // // // // // //   { label: "Contact", href: "/contact" },
// // // // // // // ];

// // // // // // // const Navbar = ({ visible }) => {
// // // // // // //   return (
// // // // // // //      <header
// // // // // // //       className={`fixed inset-x-0 top-0 z-50 w-full bg-[#f4f4ea] transition-opacity duration-300 ${
// // // // // // //         visible ? "opacity-100" : "pointer-events-none opacity-0"
// // // // // // //       }`}
// // // // // // //     >
// // // // // // //       <div className="flex items-center justify-between px-6 py-6 md:px-10">

// // // // // // //         {/* Left nav — desktop only */}
// // // // // // //         <nav className="hidden items-center gap-10 md:flex">
// // // // // // //           {navLinks.map((link) => (
// // // // // // //             <a
// // // // // // //               key={link.label}
// // // // // // //               href={link.href}
// // // // // // //               className="text-sm text-[#26180f] underline-offset-4 hover:underline"
// // // // // // //             >
// // // // // // //               {link.label}
// // // // // // //             </a>
// // // // // // //           ))}
// // // // // // //           <button className="flex items-center gap-1 text-sm text-[#26180f]">
// // // // // // //             Pages <ChevronDown size={14} />
// // // // // // //           </button>
// // // // // // //         </nav>

// // // // // // //         {/* Mobile hamburger */}
// // // // // // //         <button
// // // // // // //           className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fdd17c] md:hidden"
// // // // // // //         >
// // // // // // //           <span className="relative block h-4 w-5">
// // // // // // //             <span className="absolute left-0 top-0 h-[2px] w-5 bg-[#26180f]" />
// // // // // // //             <span className="absolute bottom-0 left-0 h-[2px] w-5 bg-[#26180f]" />
// // // // // // //           </span>
// // // // // // //         </button>

// // // // // // //         {/* Center brand mark */}
// // // // // // //         <a href="/" className="absolute left-1/2 top-1/2 h-[52px] w-[52px] -translate-x-1/2 -translate-y-1/2">
// // // // // // //           <img src="/images/brand-icon.png" alt="VillaBliss" className="h-full w-full object-contain" />
// // // // // // //         </a>

// // // // // // //         {/* Book now */}
// // // // // // //         <a
// // // // // // //           href="#book"
// // // // // // //           className="rounded-full border border-[#26180f] px-7 py-3 text-sm text-[#26180f] transition-colors duration-300 hover:bg-[#26180f] hover:text-[#f4f4ea]"
// // // // // // //         >
// // // // // // //           Book now
// // // // // // //         </a>

// // // // // // //       </div>
// // // // // // //     </header>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Navbar;

// // // // // // import { useState } from "react";
// // // // // // import { ChevronDown } from "lucide-react";

// // // // // // const navLinks = [
// // // // // //   { label: "Home", href: "/" },
// // // // // //   { label: "Activities", href: "/activities" },
// // // // // //   { label: "Contact", href: "/contact" },
// // // // // // ];

// // // // // // const Navbar = () => {
// // // // // //   const [menuOpen, setMenuOpen] = useState(false);

// // // // // //   return (
// // // // // //     <header className="sticky top-0 z-50 w-full bg-[#f4f4ea]">
// // // // // //       <div
// // // // // //         className="
// // // // // //           relative
// // // // // //           mx-auto
// // // // // //           flex
// // // // // //           h-[100px]
// // // // // //           w-full
// // // // // //           max-w-[1780px]
// // // // // //           items-center
// // // // // //           justify-between
// // // // // //           px-[20px]
// // // // // //           sm:px-[30px]
// // // // // //           md:px-[50px]
// // // // // //         "
// // // // // //       >
// // // // // //         {/* ================= DESKTOP LEFT NAV ================= */}
// // // // // //         <nav className="hidden flex-1 items-center gap-[40px] md:flex">
// // // // // //           {navLinks.map((link, index) => (
// // // // // //             <a
// // // // // //               key={link.label}
// // // // // //               href={link.href}
// // // // // //               className={`
// // // // // //                 group
// // // // // //                 relative
// // // // // //                 pb-[4px]
// // // // // //                 text-[15px]
// // // // // //                 leading-none
// // // // // //                 ${
// // // // // //                   index === 0
// // // // // //                     ? "text-[#26180f]"
// // // // // //                     : "text-[#49382c]"
// // // // // //                 }
// // // // // //               `}
// // // // // //             >
// // // // // //               {link.label}

// // // // // //               <span
// // // // // //                 className={`
// // // // // //                   absolute
// // // // // //                   bottom-0
// // // // // //                   left-0
// // // // // //                   h-[1px]
// // // // // //                   bg-[#26180f]
// // // // // //                   transition-all
// // // // // //                   duration-300
// // // // // //                   ${
// // // // // //                     index === 0
// // // // // //                       ? "w-full"
// // // // // //                       : "w-0 group-hover:w-full"
// // // // // //                   }
// // // // // //                 `}
// // // // // //               />
// // // // // //             </a>
// // // // // //           ))}

// // // // // //           <button
// // // // // //             type="button"
// // // // // //             className="
// // // // // //               group
// // // // // //               relative
// // // // // //               flex
// // // // // //               items-center
// // // // // //               gap-[5px]
// // // // // //               pb-[4px]
// // // // // //               text-[15px]
// // // // // //               text-[#49382c]
// // // // // //             "
// // // // // //           >
// // // // // //             Pages

// // // // // //             <ChevronDown
// // // // // //               size={16}
// // // // // //               strokeWidth={1.4}
// // // // // //             />

// // // // // //             <span
// // // // // //               className="
// // // // // //                 absolute
// // // // // //                 bottom-0
// // // // // //                 left-0
// // // // // //                 h-[1px]
// // // // // //                 w-0
// // // // // //                 bg-[#26180f]
// // // // // //                 transition-all
// // // // // //                 duration-300
// // // // // //                 group-hover:w-full
// // // // // //               "
// // // // // //             />
// // // // // //           </button>
// // // // // //         </nav>

// // // // // //         {/* ================= MOBILE LOGO ================= */}
// // // // // //         <a
// // // // // //           href="/"
// // // // // //           aria-label="VillaBliss Home"
// // // // // //           className="
// // // // // //             relative
// // // // // //             z-10
// // // // // //             block
// // // // // //             h-[60px]
// // // // // //             w-[60px]
// // // // // //             shrink-0
// // // // // //             md:hidden
// // // // // //           "
// // // // // //         >
// // // // // //           <img
// // // // // //             src="/images/brand-icon.png"
// // // // // //             alt="VillaBliss"
// // // // // //             width={70}
// // // // // //             height={70}
// // // // // //             className="
// // // // // //               block
// // // // // //               h-full
// // // // // //               w-full
// // // // // //               object-contain
// // // // // //             "
// // // // // //           />
// // // // // //         </a>

// // // // // //         {/* ================= DESKTOP CENTER LOGO ================= */}
// // // // // //         <a
// // // // // //           href="/"
// // // // // //           aria-label="VillaBliss Home"
// // // // // //           className="
// // // // // //             absolute
// // // // // //             left-1/2
// // // // // //             top-1/2
// // // // // //             hidden
// // // // // //             h-[70px]
// // // // // //             w-[70px]
// // // // // //             -translate-x-1/2
// // // // // //             -translate-y-1/2
// // // // // //             md:block
// // // // // //           "
// // // // // //         >
// // // // // //           <img
// // // // // //             src="/images/brand-icon.png"
// // // // // //             alt="VillaBliss"
// // // // // //             width={70}
// // // // // //             height={70}
// // // // // //             className="
// // // // // //               block
// // // // // //               h-full
// // // // // //               w-full
// // // // // //               object-contain
// // // // // //             "
// // // // // //           />
// // // // // //         </a>

// // // // // //         {/* ================= DESKTOP BOOK BUTTON ================= */}
// // // // // //         <div className="hidden flex-1 justify-end md:flex">
// // // // // //           <a
// // // // // //             href="/contact"
// // // // // //             className="
// // // // // //               rounded-full
// // // // // //               border
// // // // // //               border-[#26180f]
// // // // // //               px-[25px]
// // // // // //               py-[12px]
// // // // // //               text-[15px]
// // // // // //               text-[#26180f]
// // // // // //               transition-all
// // // // // //               duration-300
// // // // // //               hover:bg-[#26180f]
// // // // // //               hover:text-[#f4f4ea]
// // // // // //             "
// // // // // //           >
// // // // // //             Book now
// // // // // //           </a>
// // // // // //         </div>

// // // // // //         {/* ================= MOBILE HAMBURGER ================= */}
// // // // // //         <button
// // // // // //           type="button"
// // // // // //           onClick={() => setMenuOpen((prev) => !prev)}
// // // // // //           aria-label={menuOpen ? "Close menu" : "Open menu"}
// // // // // //           aria-expanded={menuOpen}
// // // // // //           className="
// // // // // //             relative
// // // // // //             z-20
// // // // // //             flex
// // // // // //             h-[48px]
// // // // // //             w-[48px]
// // // // // //             shrink-0
// // // // // //             items-center
// // // // // //             justify-center
// // // // // //             rounded-full
// // // // // //             bg-[#fdd17c]
// // // // // //             md:hidden
// // // // // //           "
// // // // // //         >
// // // // // //           <div className="relative h-[14px] w-[18px]">
// // // // // //             {/* TOP LINE */}
// // // // // //             <span
// // // // // //               className={`
// // // // // //                 absolute
// // // // // //                 left-0
// // // // // //                 h-[1.5px]
// // // // // //                 w-full
// // // // // //                 rounded-[10px]
// // // // // //                 bg-[#26180f]
// // // // // //                 transition-all
// // // // // //                 duration-[400ms]
// // // // // //                 ease-[cubic-bezier(0.76,0,0.24,1)]
// // // // // //                 ${
// // // // // //                   menuOpen
// // // // // //                     ? "top-[6px] rotate-45"
// // // // // //                     : "top-0 rotate-0"
// // // // // //                 }
// // // // // //               `}
// // // // // //             />

// // // // // //             {/* BOTTOM LINE */}
// // // // // //             <span
// // // // // //               className={`
// // // // // //                 absolute
// // // // // //                 left-0
// // // // // //                 h-[1.5px]
// // // // // //                 w-full
// // // // // //                 rounded-[10px]
// // // // // //                 bg-[#26180f]
// // // // // //                 transition-all
// // // // // //                 duration-[400ms]
// // // // // //                 ease-[cubic-bezier(0.76,0,0.24,1)]
// // // // // //                 ${
// // // // // //                   menuOpen
// // // // // //                     ? "bottom-[6px] -rotate-45"
// // // // // //                     : "bottom-0 rotate-0"
// // // // // //                 }
// // // // // //               `}
// // // // // //             />
// // // // // //           </div>
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {/* ================= MOBILE MENU ================= */}
// // // // // //       <div
// // // // // //         className={`
// // // // // //           overflow-hidden
// // // // // //           bg-[#f4f4ea]
// // // // // //           transition-[max-height]
// // // // // //           duration-500
// // // // // //           ease-in-out
// // // // // //           md:hidden
// // // // // //           ${
// // // // // //             menuOpen
// // // // // //               ? "max-h-[500px]"
// // // // // //               : "max-h-0"
// // // // // //           }
// // // // // //         `}
// // // // // //       >
// // // // // //         <nav className="flex flex-col px-[20px] pb-[30px] sm:px-[30px]">
// // // // // //           {navLinks.map((link) => (
// // // // // //             <a
// // // // // //               key={link.label}
// // // // // //               href={link.href}
// // // // // //               onClick={() => setMenuOpen(false)}
// // // // // //               className="
// // // // // //                 border-b
// // // // // //                 border-[#49382c]/20
// // // // // //                 py-[18px]
// // // // // //                 text-[18px]
// // // // // //                 text-[#26180f]
// // // // // //               "
// // // // // //             >
// // // // // //               {link.label}
// // // // // //             </a>
// // // // // //           ))}

// // // // // //           <button
// // // // // //             type="button"
// // // // // //             className="
// // // // // //               flex
// // // // // //               items-center
// // // // // //               justify-between
// // // // // //               border-b
// // // // // //               border-[#49382c]/20
// // // // // //               py-[18px]
// // // // // //               text-[18px]
// // // // // //               text-[#26180f]
// // // // // //             "
// // // // // //           >
// // // // // //             Pages

// // // // // //             <ChevronDown
// // // // // //               size={18}
// // // // // //               strokeWidth={1.4}
// // // // // //             />
// // // // // //           </button>

// // // // // //           <a
// // // // // //             href="/contact"
// // // // // //             onClick={() => setMenuOpen(false)}
// // // // // //             className="
// // // // // //               mt-[25px]
// // // // // //               rounded-full
// // // // // //               border
// // // // // //               border-[#26180f]
// // // // // //               px-[25px]
// // // // // //               py-[13px]
// // // // // //               text-center
// // // // // //               text-[15px]
// // // // // //               text-[#26180f]
// // // // // //             "
// // // // // //           >
// // // // // //             Book now
// // // // // //           </a>
// // // // // //         </nav>
// // // // // //       </div>
// // // // // //     </header>
// // // // // //   );
// // // // // // };

// // // // // // export default Navbar;


// // // // // import { useLayoutEffect, useRef, useState } from "react";
// // // // // import gsap from "gsap";
// // // // // import { ChevronDown } from "lucide-react";

// // // // // const navLinks = [
// // // // //   { label: "Home", href: "/" },
// // // // //   { label: "Activities", href: "/activities" },
// // // // //   { label: "Contact", href: "/contact" },
// // // // // ];

// // // // // const Navbar = () => {
// // // // //   const navbarRef = useRef(null);
// // // // //   const [menuOpen, setMenuOpen] = useState(false);

// // // // //   useLayoutEffect(() => {
// // // // //     const ctx = gsap.context(() => {
// // // // //       gsap.fromTo(
// // // // //         navbarRef.current,
// // // // //         {
// // // // //           y: 100,
// // // // //           opacity: 0,
// // // // //         },
// // // // //         {
// // // // //           y: 0,
// // // // //           opacity: 1,
// // // // //           duration: 1.2,
// // // // //           delay: 0.1,
// // // // //           ease: "power3.out",
// // // // //         }
// // // // //       );
// // // // //     }, navbarRef);

// // // // //     return () => ctx.revert();
// // // // //   }, []);

// // // // //   return (
// // // // //     <header
// // // // //       ref={navbarRef}
// // // // //       className="sticky top-0 z-50 w-full bg-[#f4f4ea]"
// // // // //     >
// // // // //       <div
// // // // //         className="
// // // // //           relative
// // // // //           mx-auto
// // // // //           flex
// // // // //           h-[100px]
// // // // //           w-full
// // // // //           max-w-[1780px]
// // // // //           items-center
// // // // //           justify-between
// // // // //           px-[20px]
// // // // //           sm:px-[30px]
// // // // //           md:px-[50px]
// // // // //         "
// // // // //       >
// // // // //         {/* ==================================================
// // // // //             DESKTOP LEFT NAV
// // // // //         ================================================== */}

// // // // //         <nav className="hidden flex-1 items-center gap-[40px] md:flex">
// // // // //           {navLinks.map((link, index) => (
// // // // //             <a
// // // // //               key={link.label}
// // // // //               href={link.href}
// // // // //               className={`
// // // // //                 group
// // // // //                 relative
// // // // //                 pb-[4px]
// // // // //                 text-[15px]
// // // // //                 leading-none
// // // // //                 ${
// // // // //                   index === 0
// // // // //                     ? "text-[#26180f]"
// // // // //                     : "text-[#49382c]"
// // // // //                 }
// // // // //               `}
// // // // //             >
// // // // //               {link.label}

// // // // //               <span
// // // // //                 className={`
// // // // //                   absolute
// // // // //                   bottom-0
// // // // //                   left-0
// // // // //                   h-[1px]
// // // // //                   bg-[#26180f]
// // // // //                   transition-all
// // // // //                   duration-300
// // // // //                   ${
// // // // //                     index === 0
// // // // //                       ? "w-full"
// // // // //                       : "w-0 group-hover:w-full"
// // // // //                   }
// // // // //                 `}
// // // // //               />
// // // // //             </a>
// // // // //           ))}

// // // // //           {/* PAGES */}

// // // // //           <button
// // // // //             type="button"
// // // // //             className="
// // // // //               group
// // // // //               relative
// // // // //               flex
// // // // //               items-center
// // // // //               gap-[5px]
// // // // //               pb-[4px]
// // // // //               text-[15px]
// // // // //               text-[#49382c]
// // // // //             "
// // // // //           >
// // // // //             Pages

// // // // //             <ChevronDown
// // // // //               size={16}
// // // // //               strokeWidth={1.4}
// // // // //             />

// // // // //             <span
// // // // //               className="
// // // // //                 absolute
// // // // //                 bottom-0
// // // // //                 left-0
// // // // //                 h-[1px]
// // // // //                 w-0
// // // // //                 bg-[#26180f]
// // // // //                 transition-all
// // // // //                 duration-300
// // // // //                 group-hover:w-full
// // // // //               "
// // // // //             />
// // // // //           </button>
// // // // //         </nav>

// // // // //         {/* ==================================================
// // // // //             MOBILE LOGO
// // // // //         ================================================== */}

// // // // //         <a
// // // // //           href="/"
// // // // //           aria-label="VillaBliss Home"
// // // // //           className="
// // // // //             relative
// // // // //             z-10
// // // // //             block
// // // // //             h-[60px]
// // // // //             w-[60px]
// // // // //             shrink-0
// // // // //             md:hidden
// // // // //           "
// // // // //         >
// // // // //           <img
// // // // //             src="/images/brand-icon.png"
// // // // //             alt="VillaBliss"
// // // // //             className="
// // // // //               block
// // // // //               h-full
// // // // //               w-full
// // // // //               object-contain
// // // // //             "
// // // // //           />
// // // // //         </a>

// // // // //         {/* ==================================================
// // // // //             DESKTOP CENTER LOGO
// // // // //         ================================================== */}

// // // // //         <a
// // // // //           href="/"
// // // // //           aria-label="VillaBliss Home"
// // // // //           className="
// // // // //             absolute
// // // // //             left-1/2
// // // // //             top-1/2
// // // // //             z-10
// // // // //             hidden
// // // // //             h-[70px]
// // // // //             w-[70px]
// // // // //             -translate-x-1/2
// // // // //             -translate-y-1/2
// // // // //             md:block
// // // // //           "
// // // // //         >
// // // // //           <img
// // // // //             src="/images/brand-icon.png"
// // // // //             alt="VillaBliss"
// // // // //             className="
// // // // //               block
// // // // //               h-full
// // // // //               w-full
// // // // //               object-contain
// // // // //             "
// // // // //           />
// // // // //         </a>

// // // // //         {/* ==================================================
// // // // //             DESKTOP BOOK NOW
// // // // //         ================================================== */}

// // // // //         <div className="hidden flex-1 justify-end md:flex">
// // // // //           <a
// // // // //             href="/contact"
// // // // //             className="
// // // // //               rounded-full
// // // // //               border
// // // // //               border-[#26180f]
// // // // //               px-[25px]
// // // // //               py-[12px]
// // // // //               text-[15px]
// // // // //               text-[#26180f]
// // // // //               transition-all
// // // // //               duration-300
// // // // //               hover:bg-[#26180f]
// // // // //               hover:text-[#f4f4ea]
// // // // //             "
// // // // //           >
// // // // //             Book now
// // // // //           </a>
// // // // //         </div>

// // // // //         {/* ==================================================
// // // // //             MOBILE MENU BUTTON
// // // // //         ================================================== */}

// // // // //         <button
// // // // //           type="button"
// // // // //           onClick={() => setMenuOpen((prev) => !prev)}
// // // // //           aria-label={
// // // // //             menuOpen
// // // // //               ? "Close menu"
// // // // //               : "Open menu"
// // // // //           }
// // // // //           aria-expanded={menuOpen}
// // // // //           className="
// // // // //             relative
// // // // //             z-20
// // // // //             flex
// // // // //             h-[48px]
// // // // //             w-[48px]
// // // // //             shrink-0
// // // // //             items-center
// // // // //             justify-center
// // // // //             rounded-full
// // // // //             bg-[#fdd17c]
// // // // //             md:hidden
// // // // //           "
// // // // //         >
// // // // //           <div className="relative h-[14px] w-[18px]">
// // // // //             {/* TOP LINE */}

// // // // //             <span
// // // // //               className={`
// // // // //                 absolute
// // // // //                 left-0
// // // // //                 h-[1.5px]
// // // // //                 w-full
// // // // //                 rounded-full
// // // // //                 bg-[#26180f]
// // // // //                 transition-all
// // // // //                 duration-300
// // // // //                 ${
// // // // //                   menuOpen
// // // // //                     ? "top-[6px] rotate-45"
// // // // //                     : "top-0"
// // // // //                 }
// // // // //               `}
// // // // //             />

// // // // //             {/* BOTTOM LINE */}

// // // // //             <span
// // // // //               className={`
// // // // //                 absolute
// // // // //                 left-0
// // // // //                 h-[1.5px]
// // // // //                 w-full
// // // // //                 rounded-full
// // // // //                 bg-[#26180f]
// // // // //                 transition-all
// // // // //                 duration-300
// // // // //                 ${
// // // // //                   menuOpen
// // // // //                     ? "bottom-[6px] -rotate-45"
// // // // //                     : "bottom-0"
// // // // //                 }
// // // // //               `}
// // // // //             />
// // // // //           </div>
// // // // //         </button>
// // // // //       </div>

// // // // //       {/* ==================================================
// // // // //           MOBILE MENU
// // // // //       ================================================== */}

// // // // //       <div
// // // // //         className={`
// // // // //           overflow-hidden
// // // // //           bg-[#f4f4ea]
// // // // //           transition-[max-height]
// // // // //           duration-500
// // // // //           ease-in-out
// // // // //           md:hidden
// // // // //           ${
// // // // //             menuOpen
// // // // //               ? "max-h-[500px]"
// // // // //               : "max-h-0"
// // // // //           }
// // // // //         `}
// // // // //       >
// // // // //         <nav
// // // // //           className="
// // // // //             flex
// // // // //             flex-col
// // // // //             px-[20px]
// // // // //             pb-[30px]
// // // // //             sm:px-[30px]
// // // // //           "
// // // // //         >
// // // // //           {navLinks.map((link) => (
// // // // //             <a
// // // // //               key={link.label}
// // // // //               href={link.href}
// // // // //               onClick={() => setMenuOpen(false)}
// // // // //               className="
// // // // //                 border-b
// // // // //                 border-[#49382c]/20
// // // // //                 py-[18px]
// // // // //                 text-[18px]
// // // // //                 text-[#26180f]
// // // // //               "
// // // // //             >
// // // // //               {link.label}
// // // // //             </a>
// // // // //           ))}

// // // // //           {/* PAGES */}

// // // // //           <button
// // // // //             type="button"
// // // // //             className="
// // // // //               flex
// // // // //               items-center
// // // // //               justify-between
// // // // //               border-b
// // // // //               border-[#49382c]/20
// // // // //               py-[18px]
// // // // //               text-[18px]
// // // // //               text-[#26180f]
// // // // //             "
// // // // //           >
// // // // //             Pages

// // // // //             <ChevronDown
// // // // //               size={18}
// // // // //               strokeWidth={1.4}
// // // // //             />
// // // // //           </button>

// // // // //           {/* BOOK NOW */}

// // // // //           <a
// // // // //             href="/contact"
// // // // //             onClick={() => setMenuOpen(false)}
// // // // //             className="
// // // // //               mt-[25px]
// // // // //               rounded-full
// // // // //               border
// // // // //               border-[#26180f]
// // // // //               px-[25px]
// // // // //               py-[13px]
// // // // //               text-center
// // // // //               text-[15px]
// // // // //               text-[#26180f]
// // // // //             "
// // // // //           >
// // // // //             Book now
// // // // //           </a>
// // // // //         </nav>
// // // // //       </div>
// // // // //     </header>
// // // // //   );
// // // // // };

// // // // // export default Navbar;

// // // // import { useState } from "react";
// // // // import { ChevronDown } from "lucide-react";

// // // // const navLinks = [
// // // //   { label: "Home", href: "/" },
// // // //   { label: "Activities", href: "/activities" },
// // // //   { label: "Contact", href: "/contact" },
// // // // ];

// // // // const Navbar = () => {
// // // //   const [menuOpen, setMenuOpen] = useState(false);

// // // //   return (
// // // //     <header className="sticky top-0 z-50 w-full bg-[#f4f4ea]">
// // // //       <div
// // // //         className="
// // // //           relative
// // // //           mx-auto
// // // //           flex
// // // //           h-[100px]
// // // //           w-full
// // // //           max-w-[1780px]
// // // //           items-center
// // // //           justify-between
// // // //           px-[20px]
// // // //           sm:px-[30px]
// // // //           md:px-[50px]
// // // //         "
// // // //       >
// // // //         {/* ==================================================
// // // //             DESKTOP LEFT NAV
// // // //         ================================================== */}

// // // //         <nav className="hidden flex-1 items-center gap-[40px] md:flex">
// // // //           {navLinks.map((link, index) => (
// // // //             <a
// // // //               key={link.label}
// // // //               href={link.href}
// // // //               className={`
// // // //                 group
// // // //                 relative
// // // //                 pb-[4px]
// // // //                 text-[15px]
// // // //                 leading-none
// // // //                 ${
// // // //                   index === 0
// // // //                     ? "text-[#26180f]"
// // // //                     : "text-[#49382c]"
// // // //                 }
// // // //               `}
// // // //             >
// // // //               {link.label}

// // // //               <span
// // // //                 className={`
// // // //                   absolute
// // // //                   bottom-0
// // // //                   left-0
// // // //                   h-[1px]
// // // //                   bg-[#26180f]
// // // //                   transition-all
// // // //                   duration-300
// // // //                   ${
// // // //                     index === 0
// // // //                       ? "w-full"
// // // //                       : "w-0 group-hover:w-full"
// // // //                   }
// // // //                 `}
// // // //               />
// // // //             </a>
// // // //           ))}

// // // //           {/* PAGES */}

// // // //           <button
// // // //             type="button"
// // // //             className="
// // // //               group
// // // //               relative
// // // //               flex
// // // //               items-center
// // // //               gap-[5px]
// // // //               pb-[4px]
// // // //               text-[15px]
// // // //               text-[#49382c]
// // // //             "
// // // //           >
// // // //             Pages

// // // //             <ChevronDown
// // // //               size={16}
// // // //               strokeWidth={1.4}
// // // //             />

// // // //             <span
// // // //               className="
// // // //                 absolute
// // // //                 bottom-0
// // // //                 left-0
// // // //                 h-[1px]
// // // //                 w-0
// // // //                 bg-[#26180f]
// // // //                 transition-all
// // // //                 duration-300
// // // //                 group-hover:w-full
// // // //               "
// // // //             />
// // // //           </button>
// // // //         </nav>

// // // //         {/* ==================================================
// // // //             MOBILE LOGO
// // // //         ================================================== */}

// // // //         <a
// // // //           href="/"
// // // //           aria-label="VillaBliss Home"
// // // //           className="
// // // //             relative
// // // //             z-10
// // // //             block
// // // //             h-[60px]
// // // //             w-[60px]
// // // //             shrink-0
// // // //             md:hidden
// // // //           "
// // // //         >
// // // //           <img
// // // //             src="/images/brand-icon.png"
// // // //             alt="VillaBliss"
// // // //             className="
// // // //               block
// // // //               h-full
// // // //               w-full
// // // //               object-contain
// // // //             "
// // // //           />
// // // //         </a>

// // // //         {/* ==================================================
// // // //             DESKTOP CENTER LOGO
// // // //         ================================================== */}

// // // //         <a
// // // //           href="/"
// // // //           aria-label="VillaBliss Home"
// // // //           className="
// // // //             absolute
// // // //             left-1/2
// // // //             top-1/2
// // // //             z-10
// // // //             hidden
// // // //             h-[70px]
// // // //             w-[70px]
// // // //             -translate-x-1/2
// // // //             -translate-y-1/2
// // // //             md:block
// // // //           "
// // // //         >
// // // //           <img
// // // //             src="/images/brand-icon.png"
// // // //             alt="VillaBliss"
// // // //             className="
// // // //               block
// // // //               h-full
// // // //               w-full
// // // //               object-contain
// // // //             "
// // // //           />
// // // //         </a>

// // // //         {/* ==================================================
// // // //             DESKTOP BOOK NOW
// // // //         ================================================== */}

// // // //         <div className="hidden flex-1 justify-end md:flex">
// // // //           <a
// // // //             href="/contact"
// // // //             className="
// // // //               rounded-full
// // // //               border
// // // //               border-[#26180f]
// // // //               px-[25px]
// // // //               py-[12px]
// // // //               text-[15px]
// // // //               text-[#26180f]
// // // //               transition-all
// // // //               duration-300
// // // //               hover:bg-[#26180f]
// // // //               hover:text-[#f4f4ea]
// // // //             "
// // // //           >
// // // //             Book now
// // // //           </a>
// // // //         </div>

// // // //         {/* ==================================================
// // // //             MOBILE MENU BUTTON
// // // //         ================================================== */}

// // // //         <button
// // // //           type="button"
// // // //           onClick={() => setMenuOpen((prev) => !prev)}
// // // //           aria-label={
// // // //             menuOpen
// // // //               ? "Close menu"
// // // //               : "Open menu"
// // // //           }
// // // //           aria-expanded={menuOpen}
// // // //           className="
// // // //             relative
// // // //             z-20
// // // //             flex
// // // //             h-[48px]
// // // //             w-[48px]
// // // //             shrink-0
// // // //             items-center
// // // //             justify-center
// // // //             rounded-full
// // // //             bg-[#fdd17c]
// // // //             md:hidden
// // // //           "
// // // //         >
// // // //           <div className="relative h-[14px] w-[18px]">
// // // //             {/* TOP LINE */}

// // // //             <span
// // // //               className={`
// // // //                 absolute
// // // //                 left-0
// // // //                 h-[1.5px]
// // // //                 w-full
// // // //                 rounded-full
// // // //                 bg-[#26180f]
// // // //                 transition-all
// // // //                 duration-300
// // // //                 ${
// // // //                   menuOpen
// // // //                     ? "top-[6px] rotate-45"
// // // //                     : "top-0"
// // // //                 }
// // // //               `}
// // // //             />

// // // //             {/* BOTTOM LINE */}

// // // //             <span
// // // //               className={`
// // // //                 absolute
// // // //                 left-0
// // // //                 h-[1.5px]
// // // //                 w-full
// // // //                 rounded-full
// // // //                 bg-[#26180f]
// // // //                 transition-all
// // // //                 duration-300
// // // //                 ${
// // // //                   menuOpen
// // // //                     ? "bottom-[6px] -rotate-45"
// // // //                     : "bottom-0"
// // // //                 }
// // // //               `}
// // // //             />
// // // //           </div>
// // // //         </button>
// // // //       </div>

// // // //       {/* ==================================================
// // // //           MOBILE MENU
// // // //       ================================================== */}

// // // //       <div
// // // //         className={`
// // // //           overflow-hidden
// // // //           bg-[#f4f4ea]
// // // //           transition-[max-height]
// // // //           duration-500
// // // //           ease-in-out
// // // //           md:hidden
// // // //           ${
// // // //             menuOpen
// // // //               ? "max-h-[500px]"
// // // //               : "max-h-0"
// // // //           }
// // // //         `}
// // // //       >
// // // //         <nav
// // // //           className="
// // // //             flex
// // // //             flex-col
// // // //             px-[20px]
// // // //             pb-[30px]
// // // //             sm:px-[30px]
// // // //           "
// // // //         >
// // // //           {navLinks.map((link) => (
// // // //             <a
// // // //               key={link.label}
// // // //               href={link.href}
// // // //               onClick={() => setMenuOpen(false)}
// // // //               className="
// // // //                 border-b
// // // //                 border-[#49382c]/20
// // // //                 py-[18px]
// // // //                 text-[18px]
// // // //                 text-[#26180f]
// // // //               "
// // // //             >
// // // //               {link.label}
// // // //             </a>
// // // //           ))}

// // // //           {/* PAGES */}

// // // //           <button
// // // //             type="button"
// // // //             className="
// // // //               flex
// // // //               items-center
// // // //               justify-between
// // // //               border-b
// // // //               border-[#49382c]/20
// // // //               py-[18px]
// // // //               text-[18px]
// // // //               text-[#26180f]
// // // //             "
// // // //           >
// // // //             Pages

// // // //             <ChevronDown
// // // //               size={18}
// // // //               strokeWidth={1.4}
// // // //             />
// // // //           </button>

// // // //           {/* BOOK NOW */}

// // // //           <a
// // // //             href="/contact"
// // // //             onClick={() => setMenuOpen(false)}
// // // //             className="
// // // //               mt-[25px]
// // // //               rounded-full
// // // //               border
// // // //               border-[#26180f]
// // // //               px-[25px]
// // // //               py-[13px]
// // // //               text-center
// // // //               text-[15px]
// // // //               text-[#26180f]
// // // //             "
// // // //           >
// // // //             Book now
// // // //           </a>
// // // //         </nav>
// // // //       </div>
// // // //     </header>
// // // //   );
// // // // };

// // // // export default Navbar;


// // // import { useState } from "react";

// // // const navLinks = [
// // //   { label: "Home", href: "/" },
// // //   { label: "Activities", href: "/activities" },
// // //   { label: "Contact", href: "/contact" },
// // // ];

// // // const Navbar = () => {
// // //   const [menuOpen, setMenuOpen] = useState(false);

// // //   return (
// // //     <header className="sticky top-0 z-50 w-full bg-[#f4f4ea]">
// // //       <div
// // //         className="
// // //           relative
// // //           mx-auto
// // //           flex
// // //           h-[120px]
// // //           w-full
// // //           max-w-[1780px]
// // //           items-center
// // //           justify-between
// // //           px-[20px]
// // //           sm:px-[30px]
// // //           md:px-[50px]
// // //         "
// // //       >
// // //         {/* ==================================================
// // //             DESKTOP LEFT NAV
// // //         ================================================== */}

// // //         <nav className="hidden flex-1 items-center gap-[40px] md:flex">
// // //           {navLinks.map((link, index) => (
// // //             <a
// // //               key={link.label}
// // //               href={link.href}
// // //               className={`
// // //                 group
// // //                 relative
// // //                 pb-[4px]
// // //                 font-outfit
// // //                 text-[18px]
// // //                 font-medium
// // //                 not-italic
// // //                 leading-[120%]
// // //                 tracking-[0em]
// // //                 ${index === 0 ? "text-[#26180f]" : "text-[#49382c]"}
// // //               `}
// // //             >
// // //               {link.label}

// // //               <span
// // //                 className={`
// // //                   absolute
// // //                   bottom-0
// // //                   left-0
// // //                   h-[1px]
// // //                   bg-[#26180f]
// // //                   transition-all
// // //                   duration-300
// // //                   ${index === 0 ? "w-full" : "w-0 group-hover:w-full"}
// // //                 `}
// // //               />
// // //             </a>
// // //           ))}
// // //         </nav>

// // //         {/* ==================================================
// // //             MOBILE LOGO
// // //         ================================================== */}

// // //         <a
// // //           href="/"
// // //           aria-label="VillaBliss Home"
// // //           className="
// // //             relative
// // //             z-10
// // //             block
// // //             h-[110px]
// // //             w-[110px]
// // //             shrink-0
// // //             md:hidden
// // //           "
// // //         >
// // //           <img
// // //             src="/images/brand-icon.png"
// // //             alt="VillaBliss"
// // //             className="
// // //               block
// // //               h-full
// // //               w-full
// // //               object-contain
// // //             "
// // //           />
// // //         </a>

// // //         {/* ==================================================
// // //             DESKTOP CENTER LOGO
// // //         ================================================== */}

// // //         <a
// // //           href="/"
// // //           aria-label="VillaBliss Home"
// // //           className="
// // //             absolute
// // //             left-1/2
// // //             top-1/2
// // //             z-10
// // //             hidden
// // //             h-[120px]
// // //             w-[120px]
// // //             -translate-x-1/2
// // //             -translate-y-1/2
// // //             md:block
// // //           "
// // //         >
// // //           <img
// // //             src="/images/brand-icon.png"
// // //             alt="VillaBliss"
// // //             className="
// // //               block
// // //               h-full
// // //               w-full
// // //               object-contain
// // //             "
// // //           />
// // //         </a>

// // //         {/* ==================================================
// // //             DESKTOP BOOK NOW
// // //         ================================================== */}

// // //         <div className="hidden flex-1 justify-end md:flex">
// // //           <a
// // //             href="/contact"
// // //             className="
// // //               rounded-full
// // //               border
// // //               border-[#26180f]
// // //               px-[50px]
// // //               py-[17px]
// // //               text-[17px]
// // //               font-semibold
// // //               text-[#26180f]
// // //               transition-all
// // //               duration-300
// // //               hover:bg-[#26180f]
// // //               hover:text-[#f4f4ea]
// // //             "
// // //           >
// // //             Book now
// // //           </a>
// // //         </div>

// // //         {/* ==================================================
// // //             MOBILE MENU BUTTON
// // //         ================================================== */}

// // //         <button
// // //           type="button"
// // //           onClick={() => setMenuOpen((prev) => !prev)}
// // //           aria-label={menuOpen ? "Close menu" : "Open menu"}
// // //           aria-expanded={menuOpen}
// // //           className="
// // //             relative
// // //             z-20
// // //             flex
// // //             h-[48px]
// // //             w-[48px]
// // //             shrink-0
// // //             items-center
// // //             justify-center
// // //             rounded-full
// // //             bg-[#fdd17c]
// // //             md:hidden
// // //           "
// // //         >
// // //           <div className="relative h-[14px] w-[18px]">
// // //             {/* TOP LINE */}
// // //             <span
// // //               className={`
// // //                 absolute
// // //                 left-0
// // //                 h-[1.5px]
// // //                 w-full
// // //                 rounded-full
// // //                 bg-[#26180f]
// // //                 transition-all
// // //                 duration-300
// // //                 ${menuOpen ? "top-[6px] rotate-45" : "top-0"}
// // //               `}
// // //             />

// // //             {/* BOTTOM LINE */}
// // //             <span
// // //               className={`
// // //                 absolute
// // //                 left-0
// // //                 h-[1.5px]
// // //                 w-full
// // //                 rounded-full
// // //                 bg-[#26180f]
// // //                 transition-all
// // //                 duration-300
// // //                 ${menuOpen ? "bottom-[6px] -rotate-45" : "bottom-0"}
// // //               `}
// // //             />
// // //           </div>
// // //         </button>
// // //       </div>

// // //       {/* ==================================================
// // //           MOBILE MENU
// // //       ================================================== */}

// // //       <div
// // //         className={`
// // //           overflow-hidden
// // //           bg-[#f4f4ea]
// // //           transition-[max-height]
// // //           duration-500
// // //           ease-in-out
// // //           md:hidden
// // //           ${menuOpen ? "max-h-[500px]" : "max-h-0"}
// // //         `}
// // //       >
// // //         <nav
// // //           className="
// // //             flex
// // //             flex-col
// // //             px-[20px]
// // //             pb-[30px]
// // //             sm:px-[30px]
// // //           "
// // //         >
// // //           {navLinks.map((link) => (
// // //             <a
// // //               key={link.label}
// // //               href={link.href}
// // //               onClick={() => setMenuOpen(false)}
// // //               className="
// // //                 border-b
// // //                 border-[#49382c]/20
// // //                 py-[18px]
// // //                 font-outfit
// // //                 text-[25px]
// // //                 font-medium
// // //                 not-italic
// // //                 leading-[120%]
// // //                 tracking-[0.03em]
// // //                 text-[#26180f]
// // //               "
// // //             >
// // //               {link.label}
// // //             </a>
// // //           ))}

// // //           {/* BOOK NOW */}
// // //           <a
// // //             href="/contact"
// // //             onClick={() => setMenuOpen(false)}
// // //             className="
// // //               mt-[25px]
// // //               rounded-full
// // //               border
// // //               border-[#26180f]
// // //               px-[25px]
// // //               py-[13px]
// // //               text-center
// // //               text-[15px]
// // //               text-[#26180f]
// // //             "
// // //           >
// // //             Book now
// // //           </a>
// // //         </nav>
// // //       </div>
// // //     </header>
// // //   );
// // // };

// // // export default Navbar;




// // // import { useState } from "react";

// // // const navLinks = [
// // //   { label: "Home", href: "/" },
// // //   { label: "Activities", href: "/activities" },
// // //   { label: "Contact", href: "/contact" },
// // // ];

// // // const Navbar = () => {
// // //   const [menuOpen, setMenuOpen] = useState(false);

// // //   return (
// // //     <header className="sticky top-0 z-50 w-full bg-[#f4f4ea]">
// // //       <div
// // //         className="
// // //           relative mx-auto flex h-[120px] w-full
// // //           max-w-[1780px] items-center justify-between
// // //           px-[20px] sm:px-[30px] md:px-[50px]
// // //         "
// // //       >
// // //         {/* DESKTOP LEFT NAV */}
// // //         <nav className="hidden flex-1 items-center gap-[50px] md:flex">
// // //           {navLinks.map((link, index) => (
// // //             <a
// // //               key={link.label}
// // //               href={link.href}
// // //               className={`
// // //                 group relative pb-[5px]
// // //                 font-outfit text-[20px] font-medium
// // //                 not-italic leading-[120%] tracking-[0.02em]
// // //                 ${
// // //                   index === 0
// // //                     ? "text-[#26180f]"
// // //                     : "text-[#49382c]"
// // //                 }
// // //               `}
// // //             >
// // //               {link.label}

// // //               <span
// // //                 className={`
// // //                   absolute bottom-0 left-0 h-[1.5px]
// // //                   bg-[#26180f] transition-all duration-300
// // //                   ${
// // //                     index === 0
// // //                       ? "w-full"
// // //                       : "w-0 group-hover:w-full"
// // //                   }
// // //                 `}
// // //               />
// // //             </a>
// // //           ))}
// // //         </nav>

// // //         {/* MOBILE LOGO */}
// // //         <a
// // //           href="/"
// // //           aria-label="VillaBliss Home"
// // //           className="
// // //             relative z-10 block h-[110px] w-[110px]
// // //             shrink-0 md:hidden
// // //           "
// // //         >
// // //           <img
// // //             src="/images/brand-icon.png"
// // //             alt="VillaBliss"
// // //             className="block h-full w-full object-contain"
// // //           />
// // //         </a>

// // //         {/* DESKTOP CENTER LOGO */}
// // //         <a
// // //           href="/"
// // //           aria-label="VillaBliss Home"
// // //           className="
// // //             absolute left-1/2 top-1/2 z-10 hidden
// // //             h-[120px] w-[120px]
// // //             -translate-x-1/2 -translate-y-1/2
// // //             md:block
// // //           "
// // //         >
// // //           <img
// // //             src="/images/brand-icon.png"
// // //             alt="VillaBliss"
// // //             className="block h-full w-full object-contain"
// // //           />
// // //         </a>

// // //         {/* DESKTOP BOOK NOW */}
// // //         <div className="hidden flex-1 justify-end md:flex">
// // //           <a
// // //             href="/contact"
// // //             className="
// // //               rounded-full
// // //               border-[1.5px] border-[#26180f]
// // //               px-[55px] py-[18px]
// // //               font-outfit text-[20px] font-medium
// // //               leading-[120%] tracking-[0.02em]
// // //               text-[#26180f]
// // //               transition-all duration-300
// // //               hover:bg-[#26180f]
// // //               hover:text-[#f4f4ea]
// // //             "
// // //           >
// // //             Book now
// // //           </a>
// // //         </div>

// // //         {/* MOBILE MENU BUTTON */}
// // //         <button
// // //           type="button"
// // //           onClick={() => setMenuOpen((prev) => !prev)}
// // //           aria-label={menuOpen ? "Close menu" : "Open menu"}
// // //           aria-expanded={menuOpen}
// // //           className="
// // //             relative z-20 flex h-[48px] w-[48px]
// // //             shrink-0 items-center justify-center
// // //             rounded-full bg-[#fdd17c] md:hidden
// // //           "
// // //         >
// // //           <div className="relative h-[14px] w-[18px]">
// // //             {/* TOP LINE */}
// // //             <span
// // //               className={`
// // //                 absolute left-0 h-[1.5px] w-full
// // //                 rounded-full bg-[#26180f]
// // //                 transition-all duration-300
// // //                 ${
// // //                   menuOpen
// // //                     ? "top-[6px] rotate-45"
// // //                     : "top-0"
// // //                 }
// // //               `}
// // //             />

// // //             {/* BOTTOM LINE */}
// // //             <span
// // //               className={`
// // //                 absolute left-0 h-[1.5px] w-full
// // //                 rounded-full bg-[#26180f]
// // //                 transition-all duration-300
// // //                 ${
// // //                   menuOpen
// // //                     ? "bottom-[6px] -rotate-45"
// // //                     : "bottom-0"
// // //                 }
// // //               `}
// // //             />
// // //           </div>
// // //         </button>
// // //       </div>

// // //       {/* MOBILE MENU */}
// // //       <div
// // //         className={`
// // //           overflow-hidden bg-[#f4f4ea]
// // //           transition-[max-height] duration-500 ease-in-out
// // //           md:hidden
// // //           ${menuOpen ? "max-h-[500px]" : "max-h-0"}
// // //         `}
// // //       >
// // //         <nav
// // //           className="
// // //             flex flex-col px-[20px] pb-[30px]
// // //             sm:px-[30px]
// // //           "
// // //         >
// // //           {navLinks.map((link) => (
// // //             <a
// // //               key={link.label}
// // //               href={link.href}
// // //               onClick={() => setMenuOpen(false)}
// // //               className="
// // //                 border-b border-[#49382c]/20
// // //                 py-[18px]
// // //                 font-outfit text-[18px] font-medium
// // //                 leading-[120%] tracking-[0.01em]
// // //                 text-[#26180f]
// // //               "
// // //             >
// // //               {link.label}
// // //             </a>
// // //           ))}

// // //           {/* MOBILE BOOK NOW */}
// // //           <a
// // //             href="/contact"
// // //             onClick={() => setMenuOpen(false)}
// // //             className="
// // //               mt-[25px] rounded-full
// // //               border-[1.5px] border-[#26180f]
// // //               px-[30px] py-[15px]
// // //               text-center
// // //               font-outfit text-[16px] font-semibold
// // //               leading-[120%] tracking-[0.01em]
// // //               text-[#26180f]
// // //               transition-all duration-300
// // //               hover:bg-[#26180f]
// // //               hover:text-[#f4f4ea]
// // //             "
// // //           >
// // //             Book now
// // //           </a>
// // //         </nav>
// // //       </div>
// // //     </header>
// // //   );
// // // };

// // // export default Navbar;



// // // // import { useState } from "react";

// // // // const navLinks = [
// // // //   { label: "Home", href: "/" },
// // // //   { label: "Activities", href: "/activities" },
// // // //   { label: "Contact", href: "/contact" },
// // // // ];

// // // // const Navbar = () => {
// // // //   const [menuOpen, setMenuOpen] = useState(false);

// // // //   return (
// // // //     <header className="sticky top-0 z-50 w-full bg-[#f4f4ea]">
// // // //       <div
// // // //         className="
// // // //           relative mx-auto flex h-[75px] w-full
// // // //           max-w-[1780px] items-center justify-between
// // // //           px-[18px] sm:px-[30px] md:h-[120px] md:px-[50px]
// // // //         "
// // // //       >
// // // //         {/* DESKTOP LEFT NAV */}
// // // //         <nav className="hidden flex-1 items-center gap-[50px] md:flex">
// // // //           {navLinks.map((link, index) => (
// // // //             <a
// // // //               key={link.label}
// // // //               href={link.href}
// // // //               className={`
// // // //                 group relative pb-[5px]
// // // //                 font-outfit text-[20px] font-medium
// // // //                 not-italic leading-[120%] tracking-[0.02em]
// // // //                 ${
// // // //                   index === 0
// // // //                     ? "text-[#26180f]"
// // // //                     : "text-[#49382c]"
// // // //                 }
// // // //               `}
// // // //             >
// // // //               {link.label}

// // // //               <span
// // // //                 className={`
// // // //                   absolute bottom-0 left-0 h-[1.5px]
// // // //                   bg-[#26180f] transition-all duration-300
// // // //                   ${
// // // //                     index === 0
// // // //                       ? "w-full"
// // // //                       : "w-0 group-hover:w-full"
// // // //                   }
// // // //                 `}
// // // //               />
// // // //             </a>
// // // //           ))}
// // // //         </nav>

// // // //         {/* MOBILE LOGO */}
// // // //         <a
// // // //           href="/"
// // // //           aria-label="VillaBliss Home"
// // // //           className="
// // // //             relative z-10 block h-[68px] w-[68px]
// // // //             shrink-0 md:hidden
// // // //           "
// // // //         >
// // // //           <img
// // // //             src="/images/brand-icon.png"
// // // //             alt="VillaBliss"
// // // //             className="block h-full w-full object-contain"
// // // //           />
// // // //         </a>

// // // //         {/* DESKTOP CENTER LOGO */}
// // // //         <a
// // // //           href="/"
// // // //           aria-label="VillaBliss Home"
// // // //           className="
// // // //             absolute left-1/2 top-1/2 z-10 hidden
// // // //             h-[120px] w-[120px]
// // // //             -translate-x-1/2 -translate-y-1/2
// // // //             md:block
// // // //           "
// // // //         >
// // // //           <img
// // // //             src="/images/brand-icon.png"
// // // //             alt="VillaBliss"
// // // //             className="block h-full w-full object-contain"
// // // //           />
// // // //         </a>

// // // //         {/* DESKTOP BOOK NOW */}
// // // //         <div className="hidden flex-1 justify-end md:flex">
// // // //           <a
// // // //             href="/contact"
// // // //             className="
// // // //               rounded-full
// // // //               border-[1.5px] border-[#26180f]
// // // //               px-[55px] py-[18px]
// // // //               font-outfit text-[20px] font-medium
// // // //               leading-[120%] tracking-[0.02em]
// // // //               text-[#26180f]
// // // //               transition-all duration-300
// // // //               hover:bg-[#26180f]
// // // //               hover:text-[#f4f4ea]
// // // //             "
// // // //           >
// // // //             Book now
// // // //           </a>
// // // //         </div>

// // // //         {/* MOBILE MENU BUTTON */}
// // // //         <button
// // // //           type="button"
// // // //           onClick={() => setMenuOpen((prev) => !prev)}
// // // //           aria-label={menuOpen ? "Close menu" : "Open menu"}
// // // //           aria-expanded={menuOpen}
// // // //           className="
// // // //             relative z-20 flex h-[42px] w-[42px]
// // // //             shrink-0 items-center justify-center
// // // //             rounded-full bg-[#fdd17c] md:hidden
// // // //           "
// // // //         >
// // // //           <div className="relative h-[14px] w-[18px]">
// // // //             <span
// // // //               className={`
// // // //                 absolute left-0 h-[1.5px] w-full
// // // //                 rounded-full bg-[#26180f]
// // // //                 transition-all duration-300
// // // //                 ${
// // // //                   menuOpen
// // // //                     ? "top-[6px] rotate-45"
// // // //                     : "top-0"
// // // //                 }
// // // //               `}
// // // //             />

// // // //             <span
// // // //               className={`
// // // //                 absolute left-0 h-[1.5px] w-full
// // // //                 rounded-full bg-[#26180f]
// // // //                 transition-all duration-300
// // // //                 ${
// // // //                   menuOpen
// // // //                     ? "bottom-[6px] -rotate-45"
// // // //                     : "bottom-0"
// // // //                 }
// // // //               `}
// // // //             />
// // // //           </div>
// // // //         </button>
// // // //       </div>

// // // //       {/* MOBILE MENU */}
// // // //       <div
// // // //         className={`
// // // //           overflow-hidden bg-[#f4f4ea]
// // // //           transition-[max-height] duration-500 ease-in-out
// // // //           md:hidden
// // // //           ${menuOpen ? "max-h-[500px]" : "max-h-0"}
// // // //         `}
// // // //       >
// // // //         <nav
// // // //           className="
// // // //             flex flex-col px-[20px] pb-[25px]
// // // //             sm:px-[30px]
// // // //           "
// // // //         >
// // // //           {navLinks.map((link) => (
// // // //             <a
// // // //               key={link.label}
// // // //               href={link.href}
// // // //               onClick={() => setMenuOpen(false)}
// // // //               className="
// // // //                 border-b border-[#49382c]/20
// // // //                 py-[15px]
// // // //                 font-outfit text-[18px] font-medium
// // // //                 leading-[120%] tracking-[0.01em]
// // // //                 text-[#26180f]
// // // //               "
// // // //             >
// // // //               {link.label}
// // // //             </a>
// // // //           ))}

// // // //           {/* MOBILE BOOK NOW */}
// // // //           <a
// // // //             href="/contact"
// // // //             onClick={() => setMenuOpen(false)}
// // // //             className="
// // // //               mt-[20px] rounded-full
// // // //               border-[1.5px] border-[#26180f]
// // // //               px-[30px] py-[13px]
// // // //               text-center
// // // //               font-outfit text-[16px] font-semibold
// // // //               leading-[120%] tracking-[0.01em]
// // // //               text-[#26180f]
// // // //               transition-all duration-300
// // // //               hover:bg-[#26180f]
// // // //               hover:text-[#f4f4ea]
// // // //             "
// // // //           >
// // // //             Book now
// // // //           </a>
// // // //         </nav>
// // // //       </div>
// // // //     </header>
// // // //   );
// // // // };

// // // // export default Navbar;









// // // // import { useState } from "react";

// // // // const navLinks = [
// // // //   { label: "Home", href: "/" },
// // // //   { label: "Activities", href: "/activities" },
// // // //   { label: "Contact", href: "/contact" },
// // // // ];

// // // // const Navbar = () => {
// // // //   const [menuOpen, setMenuOpen] = useState(false);

// // // //   return (
// // // //     <header className="sticky top-0 z-50 w-full bg-[#f4f4ea]">
// // // //       <div
// // // //         className="
// // // //           relative mx-auto flex h-[75px] w-full
// // // //           max-w-[1780px] items-center justify-between
// // // //           px-[18px] sm:px-[30px] md:h-[80px] md:px-[50px]
// // // //         "
// // // //       >
// // // //         {/* DESKTOP LEFT NAV */}
// // // //         <nav className="hidden flex-1 items-center gap-[50px] md:flex">
// // // //           {navLinks.map((link, index) => (
// // // //             <a
// // // //               key={link.label}
// // // //               href={link.href}
// // // //               className={`
// // // //                 group relative pb-[5px]
// // // //                 font-outfit text-[20px] font-medium
// // // //                 not-italic leading-[120%] tracking-[0.02em]
// // // //                 ${index === 0 ? "text-[#26180f]" : "text-[#49382c]"}
// // // //               `}
// // // //             >
// // // //               {link.label}

// // // //               <span
// // // //                 className={`
// // // //                   absolute bottom-0 left-0 h-[1.5px]
// // // //                   bg-[#26180f] transition-all duration-300
// // // //                   ${index === 0 ? "w-full" : "w-0 group-hover:w-full"}
// // // //                 `}
// // // //               />
// // // //             </a>
// // // //           ))}
// // // //         </nav>

// // // //         {/* MOBILE LOGO */}
// // // //         <a
// // // //           href="/"
// // // //           aria-label="VillaBliss Home"
// // // //           className="
// // // //             relative z-10 block h-[64px] w-[96px]
// // // //             shrink-0 md:hidden
// // // //           "
// // // //         >
// // // //           <img
// // // //             src="/images/brand-icon.png"
// // // //             alt="VillaBliss"
// // // //             className="block h-full w-full object-cover mix-blend-multiply"
// // // //           />
// // // //         </a>

        
// // // //         {/* DESKTOP CENTER LOGO */}
// // // // <a
// // // //   href="/"
// // // //   aria-label="VillaBliss Home"
// // // //   className="
// // // //     absolute left-1/2 top-1/2 z-10 hidden
// // // //     h-[80px] w-[150px]
// // // //     -translate-x-1/2 -translate-y-1/2
// // // //     md:block
// // // //   "
// // // // >
// // // //   <img
// // // //     src="/images/brand-icon.png"
// // // //     alt="VillaBliss"
// // // //     className="block h-full w-full object-contain"
// // // //   />
// // // // </a>

// // // //         {/* DESKTOP BOOK NOW */}
// // // //         <div className="hidden flex-1 justify-end md:flex">
// // // //           <a
// // // //             href="/contact"
// // // //             className="
// // // //               rounded-full
// // // //               border-[1.5px] border-[#26180f]
// // // //               px-[55px] py-[18px]
// // // //               font-outfit text-[20px] font-medium
// // // //               leading-[120%] tracking-[0.02em]
// // // //               text-[#26180f]
// // // //               transition-all duration-300
// // // //               hover:bg-[#26180f]
// // // //               hover:text-[#f4f4ea]
// // // //             "
// // // //           >
// // // //             Book now
// // // //           </a>
// // // //         </div>

// // // //         {/* MOBILE MENU BUTTON */}
// // // //         <button
// // // //           type="button"
// // // //           onClick={() => setMenuOpen((prev) => !prev)}
// // // //           aria-label={menuOpen ? "Close menu" : "Open menu"}
// // // //           aria-expanded={menuOpen}
// // // //           className="
// // // //             relative z-20 flex h-[42px] w-[42px]
// // // //             shrink-0 items-center justify-center
// // // //             rounded-full bg-[#fdd17c] md:hidden
// // // //           "
// // // //         >
// // // //           <div className="relative h-[14px] w-[18px]">
// // // //             <span
// // // //               className={`
// // // //                 absolute left-0 h-[1.5px] w-full
// // // //                 rounded-full bg-[#26180f]
// // // //                 transition-all duration-300
// // // //                 ${menuOpen ? "top-[6px] rotate-45" : "top-0"}
// // // //               `}
// // // //             />

// // // //             <span
// // // //               className={`
// // // //                 absolute left-0 h-[1.5px] w-full
// // // //                 rounded-full bg-[#26180f]
// // // //                 transition-all duration-300
// // // //                 ${menuOpen ? "bottom-[6px] -rotate-45" : "bottom-0"}
// // // //               `}
// // // //             />
// // // //           </div>
// // // //         </button>
// // // //       </div>

// // // //       {/* MOBILE MENU */}
// // // //       <div
// // // //         className={`
// // // //           overflow-hidden bg-[#f4f4ea]
// // // //           transition-[max-height] duration-500 ease-in-out
// // // //           md:hidden
// // // //           ${menuOpen ? "max-h-[500px]" : "max-h-0"}
// // // //         `}
// // // //       >
// // // //         <nav
// // // //           className="
// // // //             flex flex-col px-[20px] pb-[25px]
// // // //             sm:px-[30px]
// // // //           "
// // // //         >
// // // //           {navLinks.map((link) => (
// // // //             <a
// // // //               key={link.label}
// // // //               href={link.href}
// // // //               onClick={() => setMenuOpen(false)}
// // // //               className="
// // // //                 border-b border-[#49382c]/20
// // // //                 py-[15px]
// // // //                 font-outfit text-[18px] font-medium
// // // //                 leading-[120%] tracking-[0.01em]
// // // //                 text-[#26180f]
// // // //               "
// // // //             >
// // // //               {link.label}
// // // //             </a>
// // // //           ))}

// // // //           {/* MOBILE BOOK NOW */}
// // // //           <a
// // // //             href="/contact"
// // // //             onClick={() => setMenuOpen(false)}
// // // //             className="
// // // //               mt-[20px] rounded-full
// // // //               border-[1.5px] border-[#26180f]
// // // //               px-[30px] py-[13px]
// // // //               text-center
// // // //               font-outfit text-[16px] font-semibold
// // // //               leading-[120%] tracking-[0.01em]
// // // //               text-[#26180f]
// // // //               transition-all duration-300
// // // //               hover:bg-[#26180f]
// // // //               hover:text-[#f4f4ea]
// // // //             "
// // // //           >
// // // //             Book now
// // // //           </a>
// // // //         </nav>
// // // //       </div>
// // // //     </header>
// // // //   );
// // // // };

// // // // export default Navbar;

// // // import { useEffect, useState } from "react";
// // // import { Link, useLocation } from "react-router-dom";

// // // const navLinks = [
// // //   { label: "Home", href: "/", match: ["/"] },
// // //   // Activities stays highlighted on /activities and /activity/some-slug
// // //   { label: "Activities", href: "/activities", match: ["/activities", "/activity"] },
// // //   { label: "Contact", href: "/contact", match: ["/contact"] },
// // // ];

// // // const isActivePath = (link, pathname) =>
// // //   link.href === "/"
// // //     ? pathname === "/"
// // //     : link.match.some(
// // //         (m) => pathname === m || pathname.startsWith(`${m}/`)
// // //       );

// // // const Navbar = () => {
// // //   const [menuOpen, setMenuOpen] = useState(false);
// // //   const [ready, setReady] = useState(false);
// // //   const { pathname } = useLocation();

// // //   // Re-run the underline draw-in every time the page changes
// // //   useEffect(() => {
// // //     setReady(false);
// // //     const id = requestAnimationFrame(() =>
// // //       requestAnimationFrame(() => setReady(true))
// // //     );
// // //     return () => cancelAnimationFrame(id);
// // //   }, [pathname]);

// // //   return (
// // //     <header className="sticky top-0 z-50 w-full bg-[#f4f4ea]">
// // //       <div
// // //         className="
// // //           relative mx-auto flex h-[75px] w-full
// // //           max-w-[1780px] items-center justify-between
// // //           px-[18px] sm:px-[30px] md:h-[80px] md:px-[50px]
// // //         "
// // //       >
// // //         {/* DESKTOP LEFT NAV */}
// // //         <nav className="hidden flex-1 items-center gap-[50px] md:flex">
// // //           {navLinks.map((link) => {
// // //             const active = isActivePath(link, pathname);

// // //             return (
// // //               <Link
// // //                 key={link.label}
// // //                 to={link.href}
// // //                 aria-current={active ? "page" : undefined}
// // //                 className={`
// // //                   group relative pb-[5px]
// // //                   font-outfit text-[20px] font-medium
// // //                   not-italic leading-[120%] tracking-[0.02em]
// // //                   transition-colors duration-300
// // //                   ${active ? "text-[#26180f]" : "text-[#49382c]"}
// // //                 `}
// // //               >
// // //                 {link.label}

// // //                 <span
// // //                   className={`
// // //                     absolute bottom-0 left-0 h-[1.5px] w-full
// // //                     origin-left bg-[#26180f]
// // //                     transition-transform duration-500 ease-out
// // //                     ${
// // //                       active
// // //                         ? ready
// // //                           ? "scale-x-100"
// // //                           : "scale-x-0"
// // //                         : "scale-x-0 group-hover:scale-x-100"
// // //                     }
// // //                   `}
// // //                 />
// // //               </Link>
// // //             );
// // //           })}
// // //         </nav>

// // //         {/* MOBILE LOGO */}
// // //         <Link
// // //           to="/"
// // //           aria-label="VillaBliss Home"
// // //           className="
// // //             relative z-10 block h-[64px] w-[96px]
// // //             shrink-0 md:hidden
// // //           "
// // //         >
// // //           <img
// // //             src="/images/brand-icon.png"
// // //             alt="VillaBliss"
// // //             className="block h-full w-full object-cover mix-blend-multiply"
// // //           />
// // //         </Link>

// // //         {/* DESKTOP CENTER LOGO */}
// // //         <Link
// // //           to="/"
// // //           aria-label="VillaBliss Home"
// // //           className="
// // //             absolute left-1/2 top-1/2 z-10 hidden
// // //             h-[80px] w-[150px]
// // //             -translate-x-1/2 -translate-y-1/2
// // //             md:block
// // //           "
// // //         >
// // //           <img
// // //             src="/images/brand-icon.png"
// // //             alt="VillaBliss"
// // //             className="block h-full w-full object-contain"
// // //           />
// // //         </Link>

// // //         {/* DESKTOP BOOK NOW */}
// // //         <div className="hidden flex-1 justify-end md:flex">
// // //           <Link
// // //             to="/contact"
// // //             className="
// // //               rounded-full
// // //               border-[1.5px] border-[#26180f]
// // //               px-[55px] py-[18px]
// // //               font-outfit text-[20px] font-medium
// // //               leading-[120%] tracking-[0.02em]
// // //               text-[#26180f]
// // //               transition-all duration-300
// // //               hover:bg-[#26180f]
// // //               hover:text-[#f4f4ea]
// // //             "
// // //           >
// // //             Book now
// // //           </Link>
// // //         </div>

// // //         {/* MOBILE MENU BUTTON */}
// // //         <button
// // //           type="button"
// // //           onClick={() => setMenuOpen((prev) => !prev)}
// // //           aria-label={menuOpen ? "Close menu" : "Open menu"}
// // //           aria-expanded={menuOpen}
// // //           className="
// // //             relative z-20 flex h-[42px] w-[42px]
// // //             shrink-0 items-center justify-center
// // //             rounded-full bg-[#fdd17c] md:hidden
// // //           "
// // //         >
// // //           <div className="relative h-[14px] w-[18px]">
// // //             <span
// // //               className={`
// // //                 absolute left-0 h-[1.5px] w-full
// // //                 rounded-full bg-[#26180f]
// // //                 transition-all duration-300
// // //                 ${menuOpen ? "top-[6px] rotate-45" : "top-0"}
// // //               `}
// // //             />

// // //             <span
// // //               className={`
// // //                 absolute left-0 h-[1.5px] w-full
// // //                 rounded-full bg-[#26180f]
// // //                 transition-all duration-300
// // //                 ${menuOpen ? "bottom-[6px] -rotate-45" : "bottom-0"}
// // //               `}
// // //             />
// // //           </div>
// // //         </button>
// // //       </div>

// // //       {/* MOBILE MENU */}
// // //       <div
// // //         className={`
// // //           overflow-hidden bg-[#f4f4ea]
// // //           transition-[max-height] duration-500 ease-in-out
// // //           md:hidden
// // //           ${menuOpen ? "max-h-[500px]" : "max-h-0"}
// // //         `}
// // //       >
// // //         <nav
// // //           className="
// // //             flex flex-col px-[20px] pb-[25px]
// // //             sm:px-[30px]
// // //           "
// // //         >
// // //           {navLinks.map((link) => {
// // //             const active = isActivePath(link, pathname);

// // //             return (
// // //               <Link
// // //                 key={link.label}
// // //                 to={link.href}
// // //                 aria-current={active ? "page" : undefined}
// // //                 onClick={() => setMenuOpen(false)}
// // //                 className={`
// // //                   border-b border-[#49382c]/20
// // //                   py-[15px]
// // //                   font-outfit text-[18px] font-medium
// // //                   leading-[120%] tracking-[0.01em]
// // //                   transition-colors duration-300
// // //                   ${active ? "text-[#26180f]" : "text-[#49382c]"}
// // //                 `}
// // //               >
// // //                 {link.label}
// // //               </Link>
// // //             );
// // //           })}

// // //           {/* MOBILE BOOK NOW */}
// // //           <Link
// // //             to="/contact"
// // //             onClick={() => setMenuOpen(false)}
// // //             className="
// // //               mt-[20px] rounded-full
// // //               border-[1.5px] border-[#26180f]
// // //               px-[30px] py-[13px]
// // //               text-center
// // //               font-outfit text-[16px] font-semibold
// // //               leading-[120%] tracking-[0.01em]
// // //               text-[#26180f]
// // //               transition-all duration-300
// // //               hover:bg-[#26180f]
// // //               hover:text-[#f4f4ea]
// // //             "
// // //           >
// // //             Book now
// // //           </Link>
// // //         </nav>
// // //       </div>
// // //     </header>
// // //   );
// // // };

// // // export default Navbar;

// // import { useEffect, useRef, useState } from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import { useGSAP } from "@gsap/react";
// // import gsap from "gsap";

// // gsap.registerPlugin(useGSAP);

// // /* Plays the slide-up intro only once per full page load / refresh.
// //    Moving between pages does NOT replay it. It is set to true only when
// //    the animation finishes, so React dev-mode double mounting can't skip it. */
// // let introPlayed = false;

// // const navLinks = [
// //   { label: "Home", href: "/", match: ["/"] },
// //   // Activities stays highlighted on /activities and /activity/some-slug
// //   { label: "Activities", href: "/activities", match: ["/activities", "/activity"] },
// //   { label: "Contact", href: "/contact", match: ["/contact"] },
// // ];

// // const isActivePath = (link, pathname) =>
// //   link.href === "/"
// //     ? pathname === "/"
// //     : link.match.some((m) => pathname === m || pathname.startsWith(`${m}/`));

// // const Navbar = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [ready, setReady] = useState(false);
// //   const { pathname } = useLocation();
// //   const headerRef = useRef(null);
// //   const barRef = useRef(null);

// //   // Re-run the underline draw-in every time the page changes
// //   useEffect(() => {
// //     setReady(false);
// //     const id = requestAnimationFrame(() =>
// //       requestAnimationFrame(() => setReady(true))
// //     );
// //     return () => cancelAnimationFrame(id);
// //   }, [pathname]);

// //   // Intro: the bar slides up from below and fades in (like the Welcome title)
// //   useGSAP(
// //     () => {
// //       if (introPlayed) return;

// //       const mm = gsap.matchMedia();

// //       mm.add("(prefers-reduced-motion: no-preference)", () => {
// //         gsap.fromTo(
// //           barRef.current,
// //           { y: 80, autoAlpha: 0 },
// //           {
// //             y: 0,
// //             autoAlpha: 1,
// //             duration: 1.2,
// //             delay: 0.15,
// //             ease: "power3.out",
// //             force3D: true,
// //             clearProps: "all",
// //             onComplete: () => {
// //               introPlayed = true;
// //             },
// //           }
// //         );
// //       });

// //       return () => mm.revert();
// //     },
// //     { scope: headerRef }
// //   );

// //   return (
// //     // overflow-hidden clips the bar while it slides up, so it appears
// //     // to rise out of the bottom edge of the header
// //     <header
// //       ref={headerRef}
// //       className="sticky top-0 z-50 w-full overflow-hidden bg-[#f4f4ea]"
// //     >
// //       <div
// //         ref={barRef}
// //         className="
// //           relative mx-auto flex h-[75px] w-full
// //           max-w-[1780px] items-center justify-between
// //           px-[18px] sm:px-[30px] md:h-[80px] md:px-[50px]
// //         "
// //       >
// //         {/* DESKTOP LEFT NAV */}
// //         <nav className="hidden flex-1 items-center gap-[50px] md:flex">
// //           {navLinks.map((link) => {
// //             const active = isActivePath(link, pathname);

// //             return (
// //               <Link
// //                 key={link.label}
// //                 to={link.href}
// //                 aria-current={active ? "page" : undefined}
// //                 className={`
// //                   group relative pb-[5px]
// //                   font-outfit text-[20px] font-medium
// //                   not-italic leading-[120%] tracking-[0.02em]
// //                   transition-colors duration-300
// //                   ${active ? "text-[#26180f]" : "text-[#49382c]"}
// //                 `}
// //               >
// //                 {link.label}

// //                 <span
// //                   className={`
// //                     absolute bottom-0 left-0 h-[1.5px] w-full
// //                     origin-left bg-[#26180f]
// //                     transition-transform duration-500 ease-out
// //                     ${
// //                       active
// //                         ? ready
// //                           ? "scale-x-100"
// //                           : "scale-x-0"
// //                         : "scale-x-0 group-hover:scale-x-100"
// //                     }
// //                   `}
// //                 />
// //               </Link>
// //             );
// //           })}
// //         </nav>

// //         {/* MOBILE LOGO */}
// //         <Link
// //           to="/"
// //           aria-label="VillaBliss Home"
// //           className="
// //             relative z-10 block h-[64px] w-[96px]
// //             shrink-0 md:hidden
// //           "
// //         >
// //           <img
// //             src="/images/brand-icon.png"
// //             alt="VillaBliss"
// //             className="block h-full w-full object-cover mix-blend-multiply"
// //           />
// //         </Link>

// //         {/* DESKTOP CENTER LOGO */}
// //         <Link
// //           to="/"
// //           aria-label="VillaBliss Home"
// //           className="
// //             absolute left-1/2 top-1/2 z-10 hidden
// //             h-[80px] w-[150px]
// //             -translate-x-1/2 -translate-y-1/2
// //             md:block
// //           "
// //         >
// //           <img
// //             src="/images/brand-icon.png"
// //             alt="VillaBliss"
// //             className="block h-full w-full object-contain"
// //           />
// //         </Link>

// //         {/* DESKTOP BOOK NOW */}
// //         <div className="hidden flex-1 justify-end md:flex">
// //           <Link
// //             to="/contact"
// //             className="
// //               rounded-full
// //               border-[1.5px] border-[#26180f]
// //               px-[55px] py-[18px]
// //               font-outfit text-[20px] font-medium
// //               leading-[120%] tracking-[0.02em]
// //               text-[#26180f]
// //               transition-colors duration-300
// //               hover:bg-[#26180f]
// //               hover:text-[#f4f4ea]
// //             "
// //           >
// //             Book now
// //           </Link>
// //         </div>

// //         {/* MOBILE MENU BUTTON */}
// //         <button
// //           type="button"
// //           onClick={() => setMenuOpen((prev) => !prev)}
// //           aria-label={menuOpen ? "Close menu" : "Open menu"}
// //           aria-expanded={menuOpen}
// //           className="
// //             relative z-20 flex h-[42px] w-[42px]
// //             shrink-0 items-center justify-center
// //             rounded-full bg-[#fdd17c] md:hidden
// //           "
// //         >
// //           <div className="relative h-[14px] w-[18px]">
// //             <span
// //               className={`
// //                 absolute left-0 h-[1.5px] w-full
// //                 rounded-full bg-[#26180f]
// //                 transition-all duration-300
// //                 ${menuOpen ? "top-[6px] rotate-45" : "top-0"}
// //               `}
// //             />

// //             <span
// //               className={`
// //                 absolute left-0 h-[1.5px] w-full
// //                 rounded-full bg-[#26180f]
// //                 transition-all duration-300
// //                 ${menuOpen ? "bottom-[6px] -rotate-45" : "bottom-0"}
// //               `}
// //             />
// //           </div>
// //         </button>
// //       </div>

// //       {/* MOBILE MENU */}
// //       <div
// //         className={`
// //           overflow-hidden bg-[#f4f4ea]
// //           transition-[max-height] duration-500 ease-in-out
// //           md:hidden
// //           ${menuOpen ? "max-h-[500px]" : "max-h-0"}
// //         `}
// //       >
// //         <nav
// //           className="
// //             flex flex-col px-[20px] pb-[25px]
// //             sm:px-[30px]
// //           "
// //         >
// //           {navLinks.map((link) => {
// //             const active = isActivePath(link, pathname);

// //             return (
// //               <Link
// //                 key={link.label}
// //                 to={link.href}
// //                 aria-current={active ? "page" : undefined}
// //                 onClick={() => setMenuOpen(false)}
// //                 className={`
// //                   border-b border-[#49382c]/20
// //                   py-[15px]
// //                   font-outfit text-[18px] font-medium
// //                   leading-[120%] tracking-[0.01em]
// //                   transition-colors duration-300
// //                   ${active ? "text-[#26180f]" : "text-[#49382c]"}
// //                 `}
// //               >
// //                 {link.label}
// //               </Link>
// //             );
// //           })}

// //           {/* MOBILE BOOK NOW */}
// //           <Link
// //             to="/contact"
// //             onClick={() => setMenuOpen(false)}
// //             className="
// //               mt-[20px] rounded-full
// //               border-[1.5px] border-[#26180f]
// //               px-[30px] py-[13px]
// //               text-center
// //               font-outfit text-[16px] font-semibold
// //               leading-[120%] tracking-[0.01em]
// //               text-[#26180f]
// //               transition-colors duration-300
// //               hover:bg-[#26180f]
// //               hover:text-[#f4f4ea]
// //             "
// //           >
// //             Book now
// //           </Link>
// //         </nav>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Navbar;


// import { useEffect, useRef, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// gsap.registerPlugin(useGSAP);

// /* Plays the slide-up intro only once per full page load / refresh.
//    Moving between pages does NOT replay it. It is set to true only when
//    the animation finishes, so React dev-mode double mounting can't skip it. */
// let introPlayed = false;

// /* "Activities" has no page of its own: it goes to the Home page and
//    scrolls to the Activity section (Home.jsx reads state.scrollToActivity).
//    It is highlighted while you are on an activity detail page (/activity/...). */
// const navLinks = [
//   { label: "Home", to: "/", exact: true },
//   {
//     label: "Activities",
//     to: "/",
//     state: { scrollToActivity: true },
//     match: ["/activity"],
//   },
//   { label: "Contact", to: "/contact", match: ["/contact"] },
// ];

// const isActivePath = (link, pathname) =>
//   link.exact
//     ? pathname === "/"
//     : link.match.some((m) => pathname === m || pathname.startsWith(`${m}/`));

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [ready, setReady] = useState(false);
//   const { pathname } = useLocation();
//   const headerRef = useRef(null);
//   const barRef = useRef(null);

//   // Re-run the underline draw-in every time the page changes
//   useEffect(() => {
//     setReady(false);
//     const id = requestAnimationFrame(() =>
//       requestAnimationFrame(() => setReady(true))
//     );
//     return () => cancelAnimationFrame(id);
//   }, [pathname]);

//   // Intro: the bar slides up from below and fades in (like the Welcome title)
//   useGSAP(
//     () => {
//       if (introPlayed) return;

//       const mm = gsap.matchMedia();

//       mm.add("(prefers-reduced-motion: no-preference)", () => {
//         gsap.fromTo(
//           barRef.current,
//           { y: 80, autoAlpha: 0 },
//           {
//             y: 0,
//             autoAlpha: 1,
//             duration: 1.2,
//             delay: 0.15,
//             ease: "power3.out",
//             force3D: true,
//             clearProps: "all",
//             onComplete: () => {
//               introPlayed = true;
//             },
//           }
//         );
//       });

//       return () => mm.revert();
//     },
//     { scope: headerRef }
//   );

//   return (
//     // overflow-hidden clips the bar while it slides up, so it appears
//     // to rise out of the bottom edge of the header
//     <header
//       ref={headerRef}
//       className="sticky top-0 z-50 w-full overflow-hidden bg-[#f4f4ea]"
//     >
//       <div
//         ref={barRef}
//         className="
//           relative mx-auto flex h-[75px] w-full
//           max-w-[1780px] items-center justify-between
//           px-[18px] sm:px-[30px] md:h-[80px] md:px-[50px]
//         "
//       >
//         {/* DESKTOP LEFT NAV */}
//         <nav className="hidden flex-1 items-center gap-[50px] md:flex">
//           {navLinks.map((link) => {
//             const active = isActivePath(link, pathname);

//             return (
//               <Link
//                 key={link.label}
//                 to={link.to}
//                 state={link.state}
//                 aria-current={active ? "page" : undefined}
//                 className={`
//                   group relative pb-[5px]
//                   font-outfit text-[20px] font-medium
//                   not-italic leading-[120%] tracking-[0.02em]
//                   transition-colors duration-300
//                   ${active ? "text-[#26180f]" : "text-[#49382c]"}
//                 `}
//               >
//                 {link.label}

//                 <span
//                   className={`
//                     absolute bottom-0 left-0 h-[1.5px] w-full
//                     origin-left bg-[#26180f]
//                     transition-transform duration-500 ease-out
//                     ${
//                       active
//                         ? ready
//                           ? "scale-x-100"
//                           : "scale-x-0"
//                         : "scale-x-0 group-hover:scale-x-100"
//                     }
//                   `}
//                 />
//               </Link>
//             );
//           })}
//         </nav>

//         {/* MOBILE LOGO */}
//         <Link
//           to="/"
//           aria-label="VillaBliss Home"
//           className="
//             relative z-10 block h-[64px] w-[96px]
//             shrink-0 md:hidden
//           "
//         >
//           <img
//             src="/images/brand-icon.png"
//             alt="VillaBliss"
//             className="block h-full w-full object-cover mix-blend-multiply"
//           />
//         </Link>

//         {/* DESKTOP CENTER LOGO */}
//         <Link
//           to="/"
//           aria-label="VillaBliss Home"
//           className="
//             absolute left-1/2 top-1/2 z-10 hidden
//             h-[80px] w-[150px]
//             -translate-x-1/2 -translate-y-1/2
//             md:block
//           "
//         >
//           <img
//             src="/images/brand-icon.png"
//             alt="VillaBliss"
//             className="block h-full w-full object-contain"
//           />
//         </Link>

//         {/* DESKTOP BOOK NOW */}
//         <div className="hidden flex-1 justify-end md:flex">
//           <Link
//             to="/contact"
//             className="
//               rounded-full
//               border-[1.5px] border-[#26180f]
//               px-[55px] py-[18px]
//               font-outfit text-[20px] font-medium
//               leading-[120%] tracking-[0.02em]
//               text-[#26180f]
//               transition-colors duration-300
//               hover:bg-[#26180f]
//               hover:text-[#f4f4ea]
//             "
//           >
//             Book now
//           </Link>
//         </div>

//         {/* MOBILE MENU BUTTON */}
//         <button
//           type="button"
//           onClick={() => setMenuOpen((prev) => !prev)}
//           aria-label={menuOpen ? "Close menu" : "Open menu"}
//           aria-expanded={menuOpen}
//           className="
//             relative z-20 flex h-[42px] w-[42px]
//             shrink-0 items-center justify-center
//             rounded-full bg-[#fdd17c] md:hidden
//           "
//         >
//           <div className="relative h-[14px] w-[18px]">
//             <span
//               className={`
//                 absolute left-0 h-[1.5px] w-full
//                 rounded-full bg-[#26180f]
//                 transition-all duration-300
//                 ${menuOpen ? "top-[6px] rotate-45" : "top-0"}
//               `}
//             />

//             <span
//               className={`
//                 absolute left-0 h-[1.5px] w-full
//                 rounded-full bg-[#26180f]
//                 transition-all duration-300
//                 ${menuOpen ? "bottom-[6px] -rotate-45" : "bottom-0"}
//               `}
//             />
//           </div>
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       <div
//         className={`
//           overflow-hidden bg-[#f4f4ea]
//           transition-[max-height] duration-500 ease-in-out
//           md:hidden
//           ${menuOpen ? "max-h-[500px]" : "max-h-0"}
//         `}
//       >
//         <nav
//           className="
//             flex flex-col px-[20px] pb-[25px]
//             sm:px-[30px]
//           "
//         >
//           {navLinks.map((link) => {
//             const active = isActivePath(link, pathname);

//             return (
//               <Link
//                 key={link.label}
//                 to={link.to}
//                 state={link.state}
//                 aria-current={active ? "page" : undefined}
//                 onClick={() => setMenuOpen(false)}
//                 className={`
//                   border-b border-[#49382c]/20
//                   py-[15px]
//                   font-outfit text-[18px] font-medium
//                   leading-[120%] tracking-[0.01em]
//                   transition-colors duration-300
//                   ${active ? "text-[#26180f]" : "text-[#49382c]"}
//                 `}
//               >
//                 {link.label}
//               </Link>
//             );
//           })}

//           {/* MOBILE BOOK NOW */}
//           <Link
//             to="/contact"
//             onClick={() => setMenuOpen(false)}
//             className="
//               mt-[20px] rounded-full
//               border-[1.5px] border-[#26180f]
//               px-[30px] py-[13px]
//               text-center
//               font-outfit text-[16px] font-semibold
//               leading-[120%] tracking-[0.01em]
//               text-[#26180f]
//               transition-colors duration-300
//               hover:bg-[#26180f]
//               hover:text-[#f4f4ea]
//             "
//           >
//             Book now
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

/* Plays the slide-up intro only once per full page load / refresh.
   Moving between pages does NOT replay it. It is set to true only when
   the animation finishes, so React dev-mode double mounting can't skip it. */
let introPlayed = false;

/* "Activities" has no page of its own: it goes to the Home page and
   scrolls to the Activity section (Home.jsx reads state.scrollToActivity).
   It is highlighted while you are on an activity detail page (/activity/...). */
const navLinks = [
  { label: "Home", to: "/", exact: true },
  {
    label: "Activities",
    to: "/",
    state: { scrollToActivity: true },
    match: ["/activity"],
  },
  { label: "Contact", to: "/contact", match: ["/contact"] },
];

/* On the Home page, "Activities" is active while the Activity section is on
   screen, and "Home" is active the rest of the time.
   On /activity/... detail pages "Activities" is always active. */
const isActivePath = (link, pathname, homeSection) => {
  if (link.exact) return pathname === "/" && homeSection !== "activity";

  if (link.label === "Activities") {
    return (
      pathname.startsWith("/activity") ||
      (pathname === "/" && homeSection === "activity")
    );
  }

  return link.match.some((m) => pathname === m || pathname.startsWith(`${m}/`));
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [homeSection, setHomeSection] = useState("home"); // "home" | "activity"
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const barRef = useRef(null);

  // Re-run the underline draw-in every time the page changes
  useEffect(() => {
    setReady(false);
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setReady(true))
    );
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  // On the Home page, watch the Activity section (id="activity").
  // While it crosses the middle of the screen, the underline moves to "Activities".
  useEffect(() => {
    setHomeSection("home");
    if (pathname !== "/") return;

    let observer;
    let retry;

    const attach = () => {
      const el = document.getElementById("activity");
      if (!el) return false;

      observer = new IntersectionObserver(
        (entries) => {
          const last = entries[entries.length - 1];
          setHomeSection(last.isIntersecting ? "activity" : "home");
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
      );
      observer.observe(el);
      return true;
    };

    // The section may not exist yet on the first frame: try again shortly
    if (!attach()) retry = setTimeout(attach, 600);

    return () => {
      observer?.disconnect();
      clearTimeout(retry);
    };
  }, [pathname]);

  // Intro: the bar slides up from below and fades in (like the Welcome title)
  useGSAP(
    () => {
      if (introPlayed) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          barRef.current,
          { y: 80, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.2,
            delay: 0.15,
            ease: "power3.out",
            force3D: true,
            clearProps: "all",
            onComplete: () => {
              introPlayed = true;
            },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: headerRef }
  );

  return (
    // overflow-hidden clips the bar while it slides up, so it appears
    // to rise out of the bottom edge of the header
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full overflow-hidden bg-[#f4f4ea]"
    >
      <div
        ref={barRef}
        className="
          relative mx-auto flex h-[75px] w-full
          max-w-[1780px] items-center justify-between
          px-[18px] sm:px-[30px] md:h-[80px] md:px-[50px]
        "
      >
        {/* DESKTOP LEFT NAV */}
        <nav className="hidden flex-1 items-center gap-[50px] md:flex">
          {navLinks.map((link) => {
            const active = isActivePath(link, pathname, homeSection);

            return (
              <Link
                key={link.label}
                to={link.to}
                state={link.state}
                aria-current={active ? "page" : undefined}
                className={`
                  group relative pb-[6px]
                  font-outfit text-[20px] font-medium
                  not-italic leading-[120%] tracking-[0.02em]
                  transition-colors duration-300
                  ${active ? "text-[#26180f]" : "text-[#49382c]"}
                `}
              >
                {link.label}

                <span
                  className={`
                    absolute bottom-0 left-0 h-[1.5px] w-full
                    origin-left bg-[#26180f]
                    transition-transform duration-500 ease-out
                    ${
                      active
                        ? ready
                          ? "scale-x-100"
                          : "scale-x-0"
                        : "scale-x-0 group-hover:scale-x-100"
                    }
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* MOBILE LOGO */}
        <Link
          to="/"
          aria-label="VillaBliss Home"
          className="
            relative z-10 block h-[64px] w-[96px]
            shrink-0 md:hidden
          "
        >
          <img
            src="/images/brand-icon.png"
            alt="VillaBliss"
            className="block h-full w-full object-cover mix-blend-multiply"
          />
        </Link>

        {/* DESKTOP CENTER LOGO */}
        <Link
          to="/"
          aria-label="VillaBliss Home"
          className="
            absolute left-1/2 top-1/2 z-10 hidden
            h-[80px] w-[150px]
            -translate-x-1/2 -translate-y-1/2
            md:block
          "
        >
          <img
            src="/images/brand-icon.png"
            alt="VillaBliss"
            className="block h-full w-full object-contain"
          />
        </Link>

        {/* DESKTOP BOOK NOW */}
        <div className="hidden flex-1 justify-end md:flex">
          <Link
            to="/contact"
            className="
              rounded-full
              border-[1.5px] border-[#26180f]
              px-[55px] py-[18px]
              font-outfit text-[20px] font-medium
              leading-[120%] tracking-[0.02em]
              text-[#26180f]
              transition-colors duration-300
              hover:bg-[#26180f]
              hover:text-[#f4f4ea]
            "
          >
            Book now
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="
            relative z-20 flex h-[42px] w-[42px]
            shrink-0 items-center justify-center
            rounded-full bg-[#fdd17c] md:hidden
          "
        >
          <div className="relative h-[14px] w-[18px]">
            <span
              className={`
                absolute left-0 h-[1.5px] w-full
                rounded-full bg-[#26180f]
                transition-all duration-300
                ${menuOpen ? "top-[6px] rotate-45" : "top-0"}
              `}
            />

            <span
              className={`
                absolute left-0 h-[1.5px] w-full
                rounded-full bg-[#26180f]
                transition-all duration-300
                ${menuOpen ? "bottom-[6px] -rotate-45" : "bottom-0"}
              `}
            />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          overflow-hidden bg-[#f4f4ea]
          transition-[max-height] duration-500 ease-in-out
          md:hidden
          ${menuOpen ? "max-h-[500px]" : "max-h-0"}
        `}
      >
        <nav
          className="
            flex flex-col px-[20px] pb-[25px]
            sm:px-[30px]
          "
        >
          {navLinks.map((link) => {
            const active = isActivePath(link, pathname, homeSection);

            return (
              <Link
                key={link.label}
                to={link.to}
                state={link.state}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`
                  border-b border-[#49382c]/20
                  py-[15px]
                  font-outfit text-[18px] font-medium
                  leading-[120%] tracking-[0.01em]
                  transition-colors duration-300
                  ${active ? "text-[#26180f]" : "text-[#49382c]"}
                `}
              >
                {link.label}
              </Link>
            );
          })}

          {/* MOBILE BOOK NOW */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="
              mt-[20px] rounded-full
              border-[1.5px] border-[#26180f]
              px-[30px] py-[13px]
              text-center
              font-outfit text-[16px] font-semibold
              leading-[120%] tracking-[0.01em]
              text-[#26180f]
              transition-colors duration-300
              hover:bg-[#26180f]
              hover:text-[#f4f4ea]
            "
          >
            Book now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
