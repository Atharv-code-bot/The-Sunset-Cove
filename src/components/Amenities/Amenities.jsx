// components/Amenities/Amenities.jsx
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
    <section ref={ref} className="relative bg-[#26180f] px-6 py-28 text-[#ebe7dc] md:px-[7vw] md:py-36">
      {/* optional bg image behind, like your screenshot's blurred room shot */}
      <img
        src="/images/amenities-bg.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />

      <div className="relative grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-4">
        {amenities.map((a) => (
          <div key={a.title} data-reveal className="flex flex-col gap-5">
            <img src={a.icon} alt="" className="h-10 w-10" />
            <h3 className="text-[26px] leading-tight text-[#ebe7dc]">{a.title}</h3>
            <p className="text-[15px] leading-7 text-[#ebe7dc]/70">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;