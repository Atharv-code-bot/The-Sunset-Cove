import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const restaurantDetails = [
  ["Location", "Beverly Hills, California"],
  ["Total area", "4,500 sq ft"],
  ["Living space", "3,200 sq ft"],
  ["Floors", "2 Floors"],
  ["Built-in year", "2018"],
  ["Bathrooms", "4 Modern Bathrooms"],
  ["Bedrooms", "5 Luxurious Bedrooms"],
  ["Private pool", "Infinity Pool (15 × 30 ft)"],
  ["Outdoor space", "1,200 sq ft of garden and patio areas"],
];

const RestaurantDetails = () => {
  const sectionRef = useRef(null);

  const imageRef = useRef(null);
  const leftTitleRef = useRef(null);
  const buttonRef = useRef(null);
  const headingRef = useRef(null);

  const rowsRef = useRef([]);
  rowsRef.current = [];

  const addRow = (el) => {
    if (el && !rowsRef.current.includes(el)) {
      rowsRef.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          imageRef.current,
          leftTitleRef.current,
          buttonRef.current,
          headingRef.current,
          ...rowsRef.current,
        ],
        {
          opacity: 0,
          y: 55,
        }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      tl.to(imageRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      })
        .to(
          leftTitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.55"
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .to(
          headingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
          },
          "-=0.55"
        )
        .to(
          rowsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.45"
        );

      const images = sectionRef.current.querySelectorAll("img");
      images.forEach((img) => {
        if (!img.complete) {
          img.addEventListener("load", () => ScrollTrigger.refresh(), {
            once: true,
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f4f4ea] pt-[140px] pb-[165px] md:pt-[150px] md:pb-[175px] lg:pt-[165px] lg:pb-[185px]"
    >
      <div className="mx-auto w-full max-w-[1780px] px-[20px] md:px-[30px]">
        <div className="grid grid-cols-1 gap-y-[70px] md:grid-cols-[560px_1px_minmax(0,1fr)] md:gap-x-[48px]">
          {/* LEFT COLUMN */}
          <div className="flex flex-col">
            <div ref={imageRef} className="overflow-hidden">
              <img
                src="/images/restaurant-details.jpg"
                alt="Restaurant"
                className="aspect-[1.414/1] w-full object-cover"
              />
            </div>

            <h3
              ref={leftTitleRef}
              className="mt-[18px] max-w-[360px] text-[31px] font-semibold leading-[1.06] tracking-[-0.025em] text-[#26180f]"
              style={{ fontFamily: "Cormorant" }}
            >
              Discover the unique features of your perfect getaway
            </h3>

            <a
              ref={buttonRef}
              href="/contact"
              className="mt-[108px] inline-flex w-fit items-center justify-center rounded-full border border-[#26180f] px-[31px] py-[13px] text-[14px] font-medium text-[#26180f] transition-all duration-300 hover:bg-[#26180f] hover:text-[#f4f4ea]"
              style={{ fontFamily: "Outfit" }}
            >
              Reserve your stay
            </a>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-[#d6d4c9]" />

          {/* RIGHT COLUMN */}
          <div className="mt-[70px] min-w-0 md:mt-0">
            <h2
              ref={headingRef}
              className="mb-[56px] max-w-[620px] text-[42px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#26180f] md:text-[50px] lg:text-[58px]"
              style={{ fontFamily: "Cormorant" }}
            >
              Restaurant details at a glance
            </h2>

            <div className="border-t border-[#d6d4c9]">
              {restaurantDetails.map(([label, value]) => (
                <div
                  key={label}
                  ref={addRow}
                  className="grid grid-cols-[1fr_auto] items-center border-b border-[#d6d4c9] py-[18px]"
                >
                  <p
                    className="text-[15px] leading-[1.45] text-[#514941]"
                    style={{ fontFamily: "Outfit" }}
                  >
                    {label}
                  </p>

                  <p
                    className="text-right text-[15px] leading-[1.45] text-[#26180f]"
                    style={{ fontFamily: "Outfit" }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantDetails;