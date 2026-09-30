import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Amenities from "../Amenities/Amenities";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: "/images/icons/pool.svg",
    title: "Private pool & garden",
    desc: "Immerse yourself in ultimate relaxation with a private pool surrounded by lush, manicured gardens. Perfect for morning swims, sunbathing, or peaceful evenings by the water.",
  },
  {
    icon: "/images/icons/chandelier.svg",
    title: "Luxurious interiors",
    desc: "Step inside and experience thoughtfully designed spaces featuring elegant decor, and high-quality furnishings.",
  },
  {
    icon: "/images/icons/sofa.svg",
    title: "Spacious living areas",
    desc: "Relax with family or friends in open-concept living spaces designed for socializing, featuring plenty of natural light.",
  },
  {
    icon: "/images/icons/diamond.svg",
    title: "Entertainment space",
    desc: "Host gatherings or enjoy quiet nights under the stars in a spacious outdoor area equipped with seating.",
  },
];

const FeatureVideo = () => {
  const sectionRef = useRef(null);
  const sceneRef = useRef(null);
  const revealRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=140%",
        pin: sceneRef.current,
        scrub: true,
        anticipatePin: 1,
      });

      gsap.fromTo(
        revealRef.current,
        { yPercent: 100 },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=140%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[240vh] w-full bg-[#26180f]">
      <div ref={sceneRef} className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          src="/videos/villa-feature.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Warm brown overlay */}
        <div className="absolute inset-0 bg-[rgba(38,24,15,0.60)]" />

        {/* Bottom Feature Cards */}
        <div className="absolute inset-0 z-10 flex items-end justify-center">
          <div className="w-full max-w-[1780px] px-[20px] pb-[130px] md:px-[30px] md:pb-[150px] lg:pb-[170px]">
            <div className="grid grid-cols-1 gap-y-[56px] md:grid-cols-2 md:gap-x-[44px] lg:grid-cols-4">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-start border-l border-white/15 pl-5 first:border-l-0 first:pl-0"
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="mb-7 h-[50px] w-[50px] object-contain"
                  />

                  <h3
                    className="mb-[18px] text-[26px] font-semibold leading-[1.08] tracking-[-0.02em] text-white"
                    style={{ fontFamily: "Cormorant" }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-[16px] font-normal leading-[1.65] tracking-[-0.01em] text-[#ebe7dc]"
                    style={{ fontFamily: "Outfit" }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reveal next section */}
        <div ref={revealRef} className="absolute inset-0 z-20">
          <Amenities />
        </div>
      </div>
    </section>
  );
};

export default FeatureVideo;