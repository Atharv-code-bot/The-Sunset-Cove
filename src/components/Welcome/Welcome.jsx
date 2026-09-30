import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Welcome = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const heroImgRef = useRef(null);
  const welcomeImgRef = useRef(null);
  const textContentRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          titleRef.current,
          heroImgRef.current,
          welcomeImgRef.current,
          textContentRef.current,
          buttonRef.current,
        ],
        { y: 70, opacity: 0 }
      );

      const firstAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      firstAnimation
        .to(titleRef.current, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        })
        .to(
          heroImgRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.9"
        );

      const secondAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: welcomeImgRef.current,
          start: "top 85%",
          once: true,
        },
      });

      secondAnimation
        .to(welcomeImgRef.current, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        })
        .to(
          textContentRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.9"
        )
        .to(
          buttonRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.8"
        );

      const images = sectionRef.current.querySelectorAll("img");
      images.forEach((img) => {
        if (!img.complete) {
          img.addEventListener("load", () => ScrollTrigger.refresh());
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#f4f4ea]"
    >
      <div className="welcome-container">
        {/* ---------- Row 1 ---------- */}
        <div className="welcome-top">
          <div ref={titleRef}>
            <h1 className="welcome-title">
              Welcome to a villa where every detail inspires relaxation
            </h1>
          </div>

          <div ref={heroImgRef} className="welcome-hero-image">
            <img
              src="/images/hero.jpg"
              alt="Villa exterior"
              className="welcome-image"
            />
          </div>
        </div>

        {/* ---------- Row 2 ---------- */}
        <div className="welcome-bottom">
          <div ref={welcomeImgRef} className="welcome-main-image">
            <img
              src="/images/welcome.jpg"
              alt="Villa interior"
              className="welcome-image"
            />
          </div>

          <div ref={textContentRef} className="welcome-content">
            <p className="welcome-text">
              Nestled in the heart of tranquility, our villa offers a perfect
              escape from the ordinary. Designed with elegance and comfort in
              mind, it features luxurious interiors, breathtaking views, and
              top-tier amenities to make your stay unforgettable. Whether you are
              seeking a serene getaway or a place to celebrate life's special
              moments, our villa is your ultimate destination.
            </p>

            <a
              ref={buttonRef}
              href="/gallery"
              className="welcome-button"
            >
              View Image Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;