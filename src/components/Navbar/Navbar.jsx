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
  { label: "Restaurant", to: "/restaurant", match: ["/restaurant"] },
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
