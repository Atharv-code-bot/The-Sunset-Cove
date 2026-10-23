import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const testimonials = [
  {
    title: "Luxury Redefined",
    text: "Our stay at the villa was nothing short of magical. From the stunning views to the impeccable service, every moment felt like a dream. Highly recommend!",
    name: "Sophia M.",
    image:
      "https://framerusercontent.com/images/dUPOCQhI18b6xOT7J8X7ydkewA.jpg?width=500&height=500",
  },
  {
    title: "Paradise Found",
    text: "This villa is a slice of heaven. The design is stunning, the location is unbeatable, and the tranquility is unparalleled. We've already booked our next stay.",
    name: "Lina R.",
    image:
      "https://framerusercontent.com/images/xzjs7YXP70pNUFUjpY4tA4YaU.jpg?width=400&height=400",
  },
  {
    title: "Seamless Hospitality",
    text: "From the moment we arrived, we were treated like royalty. The concierge arranged everything we needed, including excursions and private dining. A five-star experience!",
    name: "Jason L.",
    image:
      "https://framerusercontent.com/images/4rY33TF8y63rbxPfNpWmDHAFdus.jpg?width=500&height=500",
  },
  {
    title: "Perfect for families",
    text: "The villa was the perfect getaway for our family. The spacious rooms, private pool, and kid-friendly amenities made our vacation unforgettable.",
    name: "Rahul K.",
    image:
      "https://framerusercontent.com/images/Z4eMSee9nA5FzExlLQyNEHBPA.jpg?width=400&height=400",
  },
  {
    title: "A memorable family getaway!",
    text: "We stayed at the villa for a family reunion, and it was perfect. Spacious rooms, modern amenities, and close to everything we needed. Everyone had a fantastic time!",
    name: "Sara K.",
    image:
      "https://framerusercontent.com/images/tB6gOY1Poqvqoc4q8Qwi72vdU90.jpg?width=500&height=500",
  },
  {
    title: "Unparalleled comfort and style!",
    text: "From the moment we arrived, we felt like royalty. The villa's location is stunning, and every detail is thoughtfully curated. We can't wait to return!",
    name: "Mark T.",
    image:
      "https://framerusercontent.com/images/rLZPVYnXQTE1Uhr8fZdBC8vQYpA.jpg?width=200&height=200",
  },
  {
    title: "A perfect escape!",
    text: "This villa exceeded all our expectations! The interiors are luxurious, the pool is breathtaking, and the staff went above and beyond to ensure our stay was unforgettable. Highly recommend!",
    name: "Jessica M.",
    image:
      "https://framerusercontent.com/images/MeRDDIKMt5sob2i5SNEptAcFdmc.jpg?width=500&height=500",
  },
];

const BASE = testimonials.length;
const extendedTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

const AUTOPLAY_MS = 3000;

const Testimonial = () => {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const [index, setIndex] = useState(BASE);

  const isAnimating = useRef(false);
  const autoplayRef = useRef(null);

  /*
  --------------------------------------------------
  GET ACTUAL RENDERED CARD WIDTH
  --------------------------------------------------
  This measures the first article directly.

  It automatically accounts for:
  - left arrow area
  - right arrow area
  - mx-[68px]
  - md:w-1/3
  - padding
  - fractional widths
  --------------------------------------------------
  */
  const getItemWidth = () => {
    if (!trackRef.current) return 0;

    const firstItem = trackRef.current.children[0];

    if (!firstItem) return 0;

    return firstItem.getBoundingClientRect().width;
  };

  /*
  --------------------------------------------------
  MOVE SLIDER
  --------------------------------------------------
  */
  const animateTo = (nextIndex, instant = false) => {
    const itemWidth = getItemWidth();

    if (!trackRef.current || !itemWidth) return;

    isAnimating.current = true;

    gsap.to(trackRef.current, {
      x: -itemWidth * nextIndex,
      duration: instant ? 0 : 0.8,
      ease: "power3.inOut",

      onComplete: () => {
        isAnimating.current = false;
      },
    });
  };

  /*
  --------------------------------------------------
  SLIDE WHEN INDEX CHANGES
  --------------------------------------------------
  */
  useEffect(() => {
    animateTo(index);

    /*
    Infinite loop reset when moving too far forward
    */
    if (index >= BASE * 2) {
      const resetIndex = index - BASE;

      const timeout = setTimeout(() => {
        setIndex(resetIndex);

        requestAnimationFrame(() => {
          animateTo(resetIndex, true);
        });
      }, 800);

      return () => clearTimeout(timeout);
    }

    /*
    Infinite loop reset when moving too far backward
    */
    if (index < BASE) {
      const resetIndex = index + BASE;

      const timeout = setTimeout(() => {
        setIndex(resetIndex);

        requestAnimationFrame(() => {
          animateTo(resetIndex, true);
        });
      }, 800);

      return () => clearTimeout(timeout);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  /*
  --------------------------------------------------
  RESPONSIVE RESIZE
  --------------------------------------------------
  */
  useEffect(() => {
    const handleResize = () => {
      requestAnimationFrame(() => {
        animateTo(index, true);
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  /*
  --------------------------------------------------
  NEXT SLIDE
  --------------------------------------------------
  */
  const nextSlide = () => {
    if (isAnimating.current) return;

    setIndex((previousIndex) => previousIndex + 1);
  };

  /*
  --------------------------------------------------
  PREVIOUS SLIDE
  --------------------------------------------------
  */
  const previousSlide = () => {
    if (isAnimating.current) return;

    setIndex((previousIndex) => previousIndex - 1);
  };

  /*
  --------------------------------------------------
  AUTOPLAY
  --------------------------------------------------
  */
  const startAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }

    autoplayRef.current = setInterval(() => {
      if (!isAnimating.current) {
        setIndex((previousIndex) => previousIndex + 1);
      }
    }, AUTOPLAY_MS);
  };

  useEffect(() => {
    startAutoplay();

    return () => {
      clearInterval(autoplayRef.current);
    };
  }, []);

  /*
  --------------------------------------------------
  MANUAL BUTTONS
  --------------------------------------------------
  */
  const handleNext = () => {
    nextSlide();
    startAutoplay();
  };

  const handlePrevious = () => {
    previousSlide();
    startAutoplay();
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://framerusercontent.com/images/8YDnvTEvxwlV3DE9jz1tFL0lXc.jpg?width=1920&height=900"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#26180f]/25" />
      </div>

      {/* Main Section */}
      <div className="relative z-10 flex min-h-[800px] items-center justify-center px-[30px] py-[90px] md:px-[50px] lg:min-h-[900px] lg:px-[30px]">
        {/* White Review Card */}
        <div className="relative w-full max-w-[1575px] translate-y-[100px] bg-white">
          {/* Slider Viewport */}
          <div
            ref={viewportRef}
            className="
              relative
              overflow-hidden
              border-y
              border-[#d6d4c9]
            "
          >
            {/* Left Arrow Area */}
            <div
              className="
                absolute
                left-0
                top-0
                z-20
                flex
                h-full
                w-[68px]
                items-center
                justify-center
                border-r
                border-[#d6d4c9]
                bg-white
              "
            >
              <button
                type="button"
                onClick={handlePrevious}
                aria-label="Previous reviews"
                className="
                  flex
                  h-[40px]
                  w-[40px]
                  items-center
                  justify-center
                  text-[#26180f]
                  transition-opacity
                  duration-300
                  hover:opacity-50
                "
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15 5L8 12L15 19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Right Arrow Area */}
            <div
              className="
                absolute
                right-0
                top-0
                z-20
                flex
                h-full
                w-[68px]
                items-center
                justify-center
                border-l
                border-[#d6d4c9]
                bg-white
              "
            >
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next reviews"
                className="
                  flex
                  h-[40px]
                  w-[40px]
                  items-center
                  justify-center
                  text-[#26180f]
                  transition-opacity
                  duration-300
                  hover:opacity-50
                "
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 5L16 12L9 19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Reviews */}
            <div className="mx-[68px] overflow-hidden">
              <div ref={trackRef} className="flex">
                {extendedTestimonials.map((testimonial, itemIndex) => (
                  <article
                    key={`${testimonial.name}-${itemIndex}`}
                    className="
                      w-full
                      shrink-0
                      px-[29px]
                      py-[100px]
                      md:w-1/3
                      md:px-[29px]
                      md:py-[70px]
                      lg:py-[80px]
                    "
                  >
                    {/* Review Title */}
                    <h3
                      className="
                        font-serif
                        text-[25px]
                        leading-[1.2]
                        text-[#26180f]
                        md:text-[27px]
                        lg:text-[29px]
                      "
                    >
                      {testimonial.title}
                    </h3>

                    {/* Review Text */}
                    <p
                      className="
                        mt-[20px]
                        max-w-[400px]
                        font-sans
                        text-[14px]
                        leading-[1.7]
                        text-[#514941]
                        md:text-[15px]
                      "
                    >
                      {testimonial.text}
                    </p>

                    {/* Reviewer Information */}
                    <div className="mt-[46px] flex items-center gap-[14px]">
                      {/* Avatar */}
                      <div className="h-[30px] w-[30px] shrink-0 overflow-hidden rounded-full">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Name */}
                      <span
                        className="
                          font-sans
                          text-[14px]
                          text-[#514941]
                        "
                      >
                        {testimonial.name}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;