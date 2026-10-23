import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: "https://framerusercontent.com/images/L8s7ycgueSR21ZLRbhWWh29Lnw.svg",
    title: "Private pool & garden",
    description:
      "Immerse yourself in ultimate relaxation with a private pool surrounded by lush, manicured gardens. Perfect for morning swims, sunbathing, or peaceful evenings by the water.",
  },
  {
    icon: "https://framerusercontent.com/images/dhNqjniGA02utcNo5OgPKJmllo.svg?width=50&height=50",
    title: "Luxurious interiors",
    description:
      "Step inside and experience thoughtfully designed spaces featuring elegant decor, and high-quality furnishings.",
  },
  {
    icon: "https://framerusercontent.com/images/by5XTlarbMD0izFZpWYX9A7amY.svg?width=50&height=50",
    title: "Spacious living areas",
    description:
      "Relax with family or friends in open-concept living spaces designed for socializing, featuring plenty of natural light.",
  },
  {
    icon: "https://framerusercontent.com/images/YElUxluUeUo0IgXWXUvvzEfQpI.svg?width=50&height=50",
    title: "Entertainment space",
    description:
      "Host gatherings or enjoy quiet nights under the stars in a spacious outdoor area equipped with seating.",
  },
];

const FeatureSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const featureAreaRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ------------------------------------------
      // INITIAL STATES
      // ------------------------------------------

      // Heading starts slightly below its final position
      gsap.set(headingRef.current, {
        y: 80,
        opacity: 0,
      });

      // Entire feature group starts below the viewport
      gsap.set(featureAreaRef.current, {
        y: 350,
        opacity: 0,
      });

      // ------------------------------------------
      // SCROLL ANIMATION
      // ------------------------------------------

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,

          // Start when the section starts entering viewport
          start: "top bottom",

          // Long animation range
          end: "bottom top",

          // Slow movement following scroll
          scrub: 2.5,

          // Uncomment while adjusting animation
          // markers: true,
        },
      });

      // Heading animation
      tl.to(
        headingRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
        },
        0
      );

      // All features move upward TOGETHER
      tl.to(
        featureAreaRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 4,
          ease: "power2.out",
        },
        0.4
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#26180f]
      "
    >
      {/* ==================================================
          VIDEO BACKGROUND
      ================================================== */}

      <video
        src="https://framerusercontent.com/assets/K96ZT7zMM5njm7snvAr5dcHXmDQ.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      {/* ==================================================
          DARK OVERLAY
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-[#26180f]/45
        "
      />

      {/* ==================================================
          MAIN CONTENT
      ================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          min-h-screen
          w-full
          max-w-[1780px]
          px-[20px]
          py-[25px]

          sm:px-[30px]

          md:px-[50px]
          md:py-[20px]
        "
      >
        {/* ==================================================
            HEADING
        ================================================== */}

        <div
          ref={headingRef}
          className="
            max-w-[900px]
          "
        >
          <h2
            className="
              font-cormorant
              text-[13vw]
              font-medium
              leading-[0.88]
              tracking-[-0.045em]
              text-white

              sm:text-[9vw]

              md:text-[6.3vw]
            "
          >
            Discover the exceptional features that make our villa truly
            unforgettable
          </h2>
        </div>

        {/* ==================================================
            FEATURE AREA
        ================================================== */}

        <div
          ref={featureAreaRef}
          className="
            absolute
            bottom-[20px]
            left-[20px]
            right-[20px]

            sm:left-[30px]
            sm:right-[30px]

            md:left-[50px]
            md:right-[50px]
          "
        >
          {/* ==================================================
              FEATURE GRID
          ================================================== */}

          <div
            className="
              grid
              grid-cols-1

              sm:grid-cols-2

              md:grid-cols-4
            "
          >
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`
                  flex
                  min-h-[240px]
                  flex-col
                  justify-start

                  py-[30px]

                  md:min-h-[225px]
                  md:px-[30px]
                  md:py-0

                  ${
                    index !== 0
                      ? `
                        md:border-l
                        md:border-white/30
                      `
                      : ""
                  }
                `}
              >
                {/* ==================================================
                    ICON
                ================================================== */}

                <div
                  className="
                    mb-[28px]
                    h-[50px]
                    w-[50px]
                    shrink-0
                  "
                >
                  <img
                    src={feature.icon}
                    alt=""
                    className="
                      h-full
                      w-full
                      object-contain
                    "
                  />
                </div>

                {/* ==================================================
                    TITLE
                ================================================== */}

                <h3
                  className="
                    max-w-[280px]
                    font-cormorant
                    text-[27px]
                    font-medium
                    leading-[1]
                    tracking-[-0.02em]
                    text-white
                  "
                >
                  {feature.title}
                </h3>

                {/* ==================================================
                    DESCRIPTION
                ================================================== */}

                <p
                  className="
                    mt-[24px]
                    max-w-[330px]
                    text-[14px]
                    font-normal
                    leading-[1.5]
                    text-[#ebe7dc]
                  "
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;