import { useRef } from "react";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

const amenities = [
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

const Amenities = () => {
  const ref = useRef(null);

  useRevealOnScroll(ref, { stagger: 0.15, y: 40 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#26180f] text-white"
    >
      {/* Background image */}
      <img
        src="/images/amenities-bg.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(38,24,15,0.18),rgba(38,24,15,0.88))]" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1780px] px-[20px] py-[180px] md:px-[30px] md:py-[220px] lg:py-[250px]">
        <div className="grid grid-cols-1 gap-y-[72px] md:grid-cols-2 md:gap-x-[44px] lg:grid-cols-4">
          {amenities.map((item) => (
            <div
              key={item.title}
              data-reveal
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
                className="max-w-[315px] text-[16px] font-normal leading-[1.65] tracking-[-0.01em] text-[#ebe7dc]"
                style={{ fontFamily: "Outfit" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;