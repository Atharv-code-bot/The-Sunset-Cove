import { useLayoutEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import gsap from "gsap";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { roomData } from "../data/roomData";
import RoomHero from "../components/RoomDetails/RoomHero";
import RoomGallery from "../components/RoomDetails/RoomGallery";
import RoomAbout from "../components/RoomDetails/RoomAbout";
import RoomAmenities from "../components/RoomDetails/RoomAmenities";

const RoomDetails = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const room = roomData[roomId];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    gsap.from(".hero-animation", {
      y: 60,
      opacity: 0,
      duration: 1.2,
      stagger: 0.18,
      ease: "power3.out",
    });
  }, [roomId]);

  if (!room) {
    return (
      <>
        <Navbar />

        <div className="flex min-h-screen items-center justify-center bg-[#F4F4EA]">
          <h2 className="font-[Cormorant] text-5xl text-[#26180F]">
            Room Category Not Found
          </h2>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <div className="bg-[#F4F4EA] text-[#26180F]">
      <Navbar />

      {/* ---------------- Back Button ---------------- */}

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-10">
        <button
          onClick={() =>
            navigate("/", {
              state: { scrollToGallery: true },
            })
          }
          className="group flex items-center gap-3 transition-all duration-300 hover:text-[#A66B2E]"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D7CEC3] transition-all duration-300 group-hover:border-[#A66B2E] group-hover:-translate-x-1">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
          </span>

          <div className="text-left">
            <p className="font-[Inter] text-[11px] uppercase tracking-[0.22em] text-[#A66B2E]">
              Back
            </p>

            <p className="font-[Cormorant] text-[24px] leading-none">
              All Room Categories
            </p>
          </div>
        </button>
      </section>

      {/* ---------------- Hero Section ---------------- */}

      <RoomHero room={room} />

      {/* ---------------- Gallery Placeholder ---------------- */}

      <RoomGallery room={room} />

      <RoomAbout room={room} />

      <RoomAmenities room={room} />

      <Footer />
    </div>
  );
};

export default RoomDetails;