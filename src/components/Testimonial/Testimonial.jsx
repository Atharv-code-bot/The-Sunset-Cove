// components/Testimonial/Testimonial.jsx
import { useRef } from "react";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

const testimonials = [
  { name: "Sarah M.", quote: "The most relaxing stay we've ever had — every detail was thought through." },
  { name: "James R.", quote: "Stunning villa, incredible service, would book again in a heartbeat." },
];

const Testimonial = () => {
  const ref = useRef(null);
  useRevealOnScroll(ref, { stagger: 0.2 });

  return (
    <section ref={ref} className="bg-[#f4f4ea] px-6 py-24 md:px-[7vw]">
      <h2 data-reveal className="text-[9vw] leading-[0.9] tracking-[-0.05em] text-[#26180f] md:text-[4vw]">
        What our guests say
      </h2>

      <div className="mt-14 flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory">
        {testimonials.map((t) => (
          <div key={t.name} data-reveal className="min-w-[300px] flex-1 snap-start rounded-2xl bg-white p-8 md:min-w-[400px]">
            <p className="text-lg leading-7 text-[#26180f]">"{t.quote}"</p>
            <span className="mt-6 block text-sm text-[#514941]">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;