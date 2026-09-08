// components/ActivityList/ActivityList.jsx
import { useState, useRef } from "react";
import gsap from "gsap";

const activities = [
  { name: "Scuba Diving", image: "/images/activities/scuba.jpg" },
  { name: "Sunset Sailing", image: "/images/activities/sailing.jpg" },
  { name: "Private Chef Dinner", image: "/images/activities/chef.jpg" },
  { name: "Spa & Wellness", image: "/images/activities/spa.jpg" },
];

const ActivityList = () => {
  const [active, setActive] = useState(0);
  const imgRef = useRef(null);

  const handleHover = (i) => {
    if (i === active) return;
    gsap.to(imgRef.current, {
      opacity: 0,
      scale: 1.05,
      duration: 0.25,
      onComplete: () => {
        setActive(i);
        gsap.fromTo(
          imgRef.current,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
        );
      },
    });
  };

  return (
    <section className="grid grid-cols-1 gap-10 bg-[#f4f4ea] px-6 py-24 md:grid-cols-2 md:px-[7vw]">
      <div className="flex flex-col justify-center">
        {activities.map((a, i) => (
          <button
            key={a.name}
            onMouseEnter={() => handleHover(i)}
            className={`border-b border-[#26180f]/20 py-6 text-left text-[7vw] tracking-[-0.03em] transition-colors duration-300 md:text-[3vw] ${
              active === i ? "text-[#26180f]" : "text-[#26180f]/35"
            }`}
          >
            {a.name}
          </button>
        ))}
      </div>

      <div className="h-[50vh] overflow-hidden rounded-xl md:h-[60vh]">
        <img
          ref={imgRef}
          src={activities[active].image}
          alt={activities[active].name}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default ActivityList;