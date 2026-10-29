import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Restaurant", href: "/restaurant" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f4f4ea]">
      <div className="relative mx-auto flex h-[100px] w-full max-w-[1780px] items-center justify-between px-[20px] sm:px-[30px] md:px-[50px]">
        <nav className="hidden flex-1 items-center gap-[40px] md:flex">
          {navLinks.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link key={link.label} to={link.href} className={`group relative pb-[4px] text-[15px] leading-none ${active ? "text-[#26180f]" : "text-[#49382c]"}`}>
                {link.label}
                <span className={`absolute bottom-0 left-0 h-[1px] bg-[#26180f] transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            );
          })}
        </nav>

        {/* Mobile logo */}
        <a href="/" aria-label="VillaBliss Home" className="relative z-10 block h-[60px] w-[60px] shrink-0 md:hidden">
          <img src="/images/brand-icon.png" alt="VillaBliss" className="block h-full w-full object-contain" />
        </a>

        {/* Desktop centered logo */}
        <a href="/" aria-label="VillaBliss Home" className="absolute left-1/2 top-1/2 z-10 hidden h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 md:block">
          <img src="/images/brand-icon.png" alt="VillaBliss" className="block h-full w-full object-contain" />
        </a>

        {/* Desktop booking button */}
        <div className="hidden flex-1 justify-end md:flex">
          <a href="/contact" className="rounded-full border border-[#26180f] px-[25px] py-[12px] text-[15px] text-[#26180f] transition-all duration-300 hover:bg-[#26180f] hover:text-[#f4f4ea]">
            Book now
          </a>
        </div>

        {/* Keep the same mobile hamburger on every page */}
        <button type="button" onClick={() => setMenuOpen((prev) => !prev)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} className="relative z-20 flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#fdd17c] md:hidden">
          <div className="relative h-[14px] w-[18px]">
            <span className={`absolute left-0 h-[1.5px] w-full rounded-full bg-[#26180f] transition-all duration-300 ${menuOpen ? "top-[6px] rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-[1.5px] w-full rounded-full bg-[#26180f] transition-all duration-300 ${menuOpen ? "bottom-[6px] -rotate-45" : "bottom-0"}`} />
          </div>
        </button>
      </div>

      {/* Same expandable mobile menu on every page */}
      <div className={`overflow-hidden bg-[#f4f4ea] transition-[max-height] duration-500 ease-in-out md:hidden ${menuOpen ? "max-h-[500px]" : "max-h-0"}`}>
        <nav className="flex flex-col px-[20px] pb-[30px] sm:px-[30px]">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.href} onClick={() => setMenuOpen(false)} className={`border-b border-[#49382c]/20 py-[18px] text-[18px] ${location.pathname === link.href ? "font-medium text-[#26180f]" : "text-[#49382c]"}`}>
              {link.label}
            </Link>
          ))}
          <a href="/contact" onClick={() => setMenuOpen(false)} className="mt-[25px] rounded-full border border-[#26180f] px-[25px] py-[13px] text-center text-[15px] text-[#26180f]">
            Book now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
