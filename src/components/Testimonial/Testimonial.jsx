import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const testimonials = [
  {
    title: "Luxury Redefined",
    text: "Our stay at the villa was nothing short of magical. From the stunning views to the impeccable service, every moment felt like a dream. Highly recommend!",
    name: "Sophia M",
    image:
      "https://framerusercontent.com/images/dUPOCQhI18b6xOT7J8X7ydkewA.jpg?width=500&height=500",
  },
  {
    title: "Paradise Found",
    text: "This villa is a slice of heaven. The design is stunning, the location is unbeatable, and the tranquility is unparalleled. We've already booked our next stay.",
    name: "Lina R",
    image:
      "https://framerusercontent.com/images/xzjs7YXP70pNUFUjpY4tA4YaU.jpg?width=400&height=400",
  },
  {
    title: "Seamless Hospitality",
    text: "From the moment we arrived, we were treated like royalty. The concierge arranged everything we needed, including excursions and private dining. A five-star experience!",
    name: "Jason L",
    image:
      "https://framerusercontent.com/images/4rY33TF8y63rbxPfNpWmDHAFdus.jpg?width=500&height=500",
  },
  {
    title: "Perfect for families",
    text: "The villa was the perfect getaway for our family. The spacious rooms, private pool, and kid-friendly amenities made our vacation unforgettable.",
    name: "Rahul K",
    image:
      "https://framerusercontent.com/images/Z4eMSee9nA5FzExlLQyNEHBPA.jpg?width=400&height=400",
  },
  {
    title: "A memorable family getaway!",
    text: "We stayed at the villa for a family reunion, and it was perfect. Spacious rooms, modern amenities, and close to everything we needed. Everyone had a fantastic time!",
    name: "Sara K, Sydney",
    image:
      "https://framerusercontent.com/images/tB6gOY1Poqvqoc4q8Qwi72vdU90.jpg?width=500&height=500",
  },
  {
    title: "Unparalleled comfort and style!",
    text: "From the moment we arrived, we felt like royalty. The villa's location is stunning, and every detail is thoughtfully curated. We can't wait to return!",
    name: "Mark T, London",
    image:
      "https://framerusercontent.com/images/rLZPVYnXQTE1Uhr8fZdBC8vQYpA.jpg?width=200&height=200",
  },
  {
    title: "A perfect escape!",
    text: "This villa exceeded all our expectations! The interiors are luxurious, the pool is breathtaking, and the staff went above and beyond to ensure our stay was unforgettable. Highly recommend!",
    name: "Jessica M",
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
  const trackRef = useRef(null);
  const [index, setIndex] = useState(BASE);

  const isAnimating = useRef(false);
  const autoplayRef = useRef(null);

  // Get desktop card width
  const getItemWidth = () => {
    if (!trackRef.current) return 0;

    const firstItem = trackRef.current.children[0];

    if (!firstItem) return 0;

    return firstItem.getBoundingClientRect().width;
  };

  // Animate desktop slider
  const animateTo = (nextIndex, instant = false) => {
    if (!trackRef.current) return;

    const itemWidth = getItemWidth();

    if (!itemWidth) return;

    gsap.to(trackRef.current, {
      x: -itemWidth * nextIndex,
      duration: instant ? 0 : 0.8,
      ease: "power3.inOut",
      overwrite: true,
      onStart: () => {
        isAnimating.current = !instant;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  };

  // Handle desktop slider index
  useEffect(() => {
    const timer = setTimeout(() => {
      animateTo(index);
    }, 0);

    // Infinite loop: reset forward
    if (index >= BASE * 2) {
      const timeout = setTimeout(() => {
        const resetIndex = index - BASE;

        setIndex(resetIndex);

        requestAnimationFrame(() => {
          animateTo(resetIndex, true);
        });
      }, 850);

      return () => {
        clearTimeout(timer);
        clearTimeout(timeout);
      };
    }

    // Infinite loop: reset backward
    if (index < BASE) {
      const timeout = setTimeout(() => {
        const resetIndex = index + BASE;

        setIndex(resetIndex);

        requestAnimationFrame(() => {
          animateTo(resetIndex, true);
        });
      }, 850);

      return () => {
        clearTimeout(timer);
        clearTimeout(timeout);
      };
    }

    return () => clearTimeout(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // Responsive resize
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

  // Next slide
  const nextSlide = () => {
    if (isAnimating.current) return;

    setIndex((previous) => previous + 1);
  };

  // Previous slide
  const previousSlide = () => {
    if (isAnimating.current) return;

    setIndex((previous) => previous - 1);
  };

  // Autoplay
  const startAutoplay = () => {
    clearInterval(autoplayRef.current);

    autoplayRef.current = setInterval(() => {
      if (!isAnimating.current) {
        setIndex((previous) => previous + 1);
      }
    }, AUTOPLAY_MS);
  };

  useEffect(() => {
    startAutoplay();

    return () => {
      clearInterval(autoplayRef.current);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

    {/* ===================================== */}
    
{/* MOBILE VIEW */}
<div className="md:hidden w-full">

  {/* Villa Background Image */}
  <div className="w-full aspect-[16/9] overflow-hidden">
    <img
      src="https://framerusercontent.com/images/8YDnvTEvxwlV3DE9jz1tFL0lXc.jpg?width=1920&height=900"
      alt="Villa"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Framer-style Testimonial Container */}
  <div className="w-full bg-[#f4f4ea] px-[15px] py-[15px]">

    {/* Testimonial List */}
    <div className="grid grid-cols-1 gap-[40px] w-full">

      {testimonials.slice().reverse().map((testimonial, itemIndex) => (
        <article
          key={itemIndex}
          className="flex flex-col w-full"
        >

          {/* First Content Block: Title + Review */}
          <div className="flex flex-col gap-[10px]">

            <h3 className="text-[20px] leading-[1.25] font-normal text-[#26180f]">
              {testimonial.title}
            </h3>

            <p className="text-[14px] leading-[1.5] font-normal text-[#514941]">
              {testimonial.text}
            </p>

          </div>

          {/* Second Content Block: Avatar + Name */}
          <div className="flex items-center gap-[12px] mt-[14px]">

            <div className="w-[24px] h-[24px] shrink-0 overflow-hidden">
              <img
                src={testimonial.image}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-[13px] leading-[1.4] text-[#514941]">
              {testimonial.name}
            </p>

          </div>

        </article>
      ))}

    </div>
  </div>
</div>



    {/* ===================================== */}
    {/* DESKTOP VIEW - ORIGINAL DESIGN */}
    {/* ===================================== */}
    <div className="relative hidden w-full overflow-hidden md:block">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://framerusercontent.com/images/8YDnvTEvxwlV3DE9jz1tFL0lXc.jpg?width=1920&height=900"
          alt="Villa background"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#26180f]/25" />
      </div>

      {/* Main Section */}
      <div className="relative z-10 flex min-h-[700px] items-center justify-center px-[50px] py-[50px]">

        {/* White Review Container */}
        <div className="relative w-full max-w-[1575px] translate-y-[100px] bg-white">

          {/* Slider Viewport */}
          <div className="relative overflow-hidden border-y border-[#d6d4c9]">

            {/* Previous Button */}
            <div className="absolute left-0 top-0 z-20 flex h-full w-[68px] items-center justify-center border-r border-[#d6d4c9] bg-white">
              <button
                type="button"
                onClick={handlePrevious}
                aria-label="Previous reviews"
                className="flex h-[40px] w-[40px] items-center justify-center text-[#26180f] transition-opacity hover:opacity-50"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
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

            {/* Next Button */}
            <div className="absolute right-0 top-0 z-20 flex h-full w-[68px] items-center justify-center border-l border-[#d6d4c9] bg-white">
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next reviews"
                className="flex h-[40px] w-[40px] items-center justify-center text-[#26180f] transition-opacity hover:opacity-50"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
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

            {/* Desktop Reviews */}
            <div className="mx-[68px] overflow-hidden">
              <div ref={trackRef} className="flex">

                {extendedTestimonials.map((testimonial, itemIndex) => (
                  <article
                    key={`${testimonial.name}-${itemIndex}`}
                    className="w-1/3 shrink-0 px-[29px] py-[70px] lg:py-[80px]"
                  >

                    <h3 className="text-[27px] leading-[1.2] text-[#26180f] lg:text-[29px]">
                      {testimonial.title}
                    </h3>

                    <p className="mt-[20px] max-w-[400px] text-[15px] leading-[1.7] text-[#514941]">
                      {testimonial.text}
                    </p>

                    <div className="mt-[46px] flex items-center gap-[14px]">

                      <div className="h-[30px] w-[30px] shrink-0 overflow-hidden rounded-full">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <span className="text-[14px] text-[#514941]">
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
    </div>

  </section>
);
}

export default Testimonial;
