import React from "react";

// TODO: replace with your real WhatsApp number, country code first, no + or spaces
// e.g. "919876543210"
const WHATSAPP_NUMBER = "911234567890";

const ActivityCTA = () => {
  const scrollToGallery = () => {
    const gallery = document.getElementById("activity-gallery");
    if (gallery) {
      gallery.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi! I'd like to book my stay at VillaBliss."
  )}`;

  return (
    <section className="w-full bg-[#f4f4ea] px-[20px] py-[60px] md:px-[50px]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1400px]
          flex-col
          items-center
          justify-center
          gap-[40px]
          bg-[#e9e7dc]
          px-[30px]
          py-[100px]
          text-center
          md:py-[150px]
        "
      >
        <h2
          className="
            max-w-[900px]
            font-['Cormorant_Garamond']
            text-[36px]
            font-medium
            leading-[1.15]
            tracking-[-0.02em]
            text-[#26180f]
            md:text-[50px]
            lg:text-[54px]
          "
        >
          Ready to experience the ultimate villa retreat?
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-[16px]">
          <button
            type="button"
            onClick={scrollToGallery}
            className="
              flex
              h-[58px]
              min-w-[190px]
              items-center
              justify-center
              rounded-full
              bg-[#26180f]
              px-[30px]
              font-['Inter']
              text-[16px]
              font-medium
              text-white
              transition-all
              duration-300
              hover:opacity-85
            "
          >
            View Gallery
          </button>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              h-[58px]
              min-w-[190px]
              items-center
              justify-center
              rounded-full
              border
              border-[#26180f]
              px-[30px]
              font-['Inter']
              text-[16px]
              font-medium
              text-[#26180f]
              transition-all
              duration-300
              hover:bg-[#26180f]
              hover:text-white
            "
          >
            Book your stay
          </a>
        </div>
      </div>
    </section>
  );
};

export default ActivityCTA;