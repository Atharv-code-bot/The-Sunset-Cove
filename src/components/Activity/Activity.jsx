        

import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const activities = [
  {
    title: "Snorkeling & diving",
    href: "/activity/snorkeling-diving",
    icon:
      "https://framerusercontent.com/images/EDHhUIwcjNOPrJHwgsMkYokJok.svg",
    image:
      "https://framerusercontent.com/images/6EIi6F5gjj9wxExArDL0ioBtYFk.jpg",
  },
  {
    title: "Outdoor adventures",
    href: "/activity/outdoor-adventures",
    icon:
      "https://framerusercontent.com/images/BiOLkTfuqYDTQbCVgW24bMeLCI.svg",
    image:
      "https://framerusercontent.com/images/oMA6rge3jPefW6S9JjyhyoUDJM.jpg",
  },
  {
    title: "Wellness & spas",
    href: "/activity/wellness-spas",
    icon:
      "https://framerusercontent.com/images/axuu8EhLqdY2sxExbj8kFC0A5yw.svg",
    image:
      "https://framerusercontent.com/images/FLPtebCA02AfgwzIKDRjEW25ebo.jpg",
  },
  {
    title: "Shopping & dining",
    href: "/activity/shopping-dining",
    icon:
      "https://framerusercontent.com/images/SlO9iK8uSL1Xe9wo1xcgUAZYg.svg",
    image:
      "https://framerusercontent.com/images/T6GB0GXPx4wrN4L9aCtR13iYUA.jpg",
  },
  {
    title: "Cultural landmarks",
    href: "/activity/cultural-landmarks",
    icon:
      "https://framerusercontent.com/images/MULLa2hjgbohOxnYf8KU0ZvAg.svg",
    image:
      "https://framerusercontent.com/images/fNFOmMViVQ81WNJggmQ1qYs7Rg.jpg",
  },
  {
    title: "Sunset cruises",
    href: "/activity/sunset-cruises",
    icon:
      "https://framerusercontent.com/images/YyegI4OIlIEjw14QNLxYXQGHs.svg",
    image:
      "https://framerusercontent.com/images/ZH40O4EB5UwsltVxgNdgFyIdlU.jpg",
  },
];

const ActivityItem = ({ activity, index }) => {
  const imageRef = useRef(null);

  const handleEnter = () => {
    if (!imageRef.current) return;
    gsap.killTweensOf(imageRef.current);
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.85, rotate: -10, y: 25 },
      {
        opacity: 1,
        scale: 1,
        rotate: index % 2 === 0 ? -10 : 10,
        y: 0,
        duration: 0.45,
        ease: "power3.out",
      }
    );
  };

  const handleLeave = () => {
    if (!imageRef.current) return;
    gsap.killTweensOf(imageRef.current);
    gsap.to(imageRef.current, {
      opacity: 0,
      scale: 0.9,
      y: 15,
      duration: 0.25,
      ease: "power2.in",
    });
  };

  return (
    <div className="w-full">
      {/* MOBILE — unchanged */}
      <Link to={activity.href} className="block w-full md:hidden">
        <div className="w-full overflow-hidden rounded-[4px] bg-[#e9e7dc]">
          <img
            src={activity.image}
            alt={activity.title}
            className="block aspect-[7/9] w-full object-cover"
          />
        </div>
        <div className="flex items-center gap-[16px] pb-[6px] pt-[22px]">
          <div className="flex w-[42px] shrink-0 items-center justify-center">
            <img
              src={activity.icon}
              alt=""
              className="block max-h-[44px] max-w-[44px] object-contain"
            />
          </div>
          <h3 className="font-cormorant text-[30px] leading-none tracking-[-0.02em] text-[#26180f]">
            {activity.title}
          </h3>
        </div>
      </Link>

      {/* DESKTOP / TABLET — divider now hugs the text */}
      <div className="relative hidden h-[155px] w-full items-center justify-center md:flex">
        <Link
          to={activity.href}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className="group relative flex h-full w-full items-center justify-center"
        >
          {/* Hover Image */}
          <div
            ref={imageRef}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-30
              w-[155px]
              -translate-x-1/2
              -translate-y-1/2
              overflow-hidden
              opacity-0
              shadow-[0_18px_40px_rgba(38,24,15,0.20)]
              md:w-[165px]
              lg:w-[175px]
            "
          >
            <img
              src={activity.image}
              alt=""
              className="block aspect-[7/9] w-full object-cover"
            />
          </div>

          {/* Icon + Title + Divider — all in one flex row now */}
          <div className="flex items-center justify-center">
            <div className="mr-[14px] flex w-[58px] shrink-0 items-center justify-center md:mr-[16px] md:w-[62px]">
              <img
                src={activity.icon}
                alt=""
                className="block max-h-[60px] max-w-[60px] object-contain md:max-h-[64px] md:max-w-[64px]"
              />
            </div>

            <h3
              className="
                whitespace-nowrap
                font-cormorant
                text-[44px]
                leading-none
                tracking-[-0.025em]
                text-[#26180f]
                md:text-[50px]
                lg:text-[54px]
                xl:text-[56px]
              "
            >
              {activity.title}
            </h3>

            {/* Divider — now hugs the text directly */}
            <span
              className="
                ml-[18px]
                h-[82px]
                w-[2px]
                shrink-0
                rotate-[12deg]
                bg-[#fdd17c]
                md:ml-[20px]
                md:h-[88px]
                lg:ml-[24px]
                lg:h-[92px]
              "
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

const Activity = () => {
  return (
    <section className="w-full bg-[#f4f4ea]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1780px]
          px-[20px]
          pb-[100px]
          pt-[90px]
          sm:px-[24px]
          sm:pb-[120px]
          sm:pt-[100px]
          md:px-[50px]
          md:pb-[170px]
          md:pt-[145px]
          lg:px-[70px]
          lg:pb-[190px]
          lg:pt-[155px]
        "
      >
        {/* Section Heading */}
        <h2
          className="
            mb-[55px]
            text-center
            font-inter
            text-[19px]
            font-medium
            leading-[1.2]
            tracking-[-0.025em]
            text-[#26180f]
            sm:mb-[65px]
            sm:text-[21px]
            md:mb-[20px]
            md:text-[25px]
            lg:mb-[20px]
            lg:text-[27px]
          "
        >
          Discover nearby treasures and hidden gems
        </h2>

        {/* ROW 1 — TWO ITEMS */}
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1350px]
            grid-cols-1
            gap-y-[40px]
            lg:grid-cols-2
            lg:gap-x-[10px]
            lg:gap-y-0
            xl:translate-x-[50px]
          "
        >
          {activities.slice(0, 2).map((activity, index) => (
            <ActivityItem
              key={activity.title}
              activity={activity}
              index={index}
            />
          ))}
        </div>

        {/* ROW 2 — THREE ITEMS */}
        <div
          className="
            mx-auto
            mt-[40px]
            grid
            w-full
            max-w-[1500px]
            grid-cols-1
            gap-y-[40px]
            lg:mt-[5px]
            lg:grid-cols-3
            lg:gap-x-[5px]
            lg:gap-y-0
            xl:translate-x-[10px]
          "
        >
          {activities.slice(2, 5).map((activity, index) => (
            <ActivityItem
              key={activity.title}
              activity={activity}
              index={index + 2}
            />
          ))}
        </div>

        {/* ROW 3 — ONE CENTERED ITEM */}
        <div
          className="
            mx-auto
            mt-[40px]
            flex
            w-full
            justify-center
            lg:mt-[5px]
          "
        >
          <div className="w-full lg:w-[520px]">
            <ActivityItem activity={activities[5]} index={5} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;