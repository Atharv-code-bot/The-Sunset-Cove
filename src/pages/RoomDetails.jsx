import { useLayoutEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { roomData } from "../data/roomData";
import RoomHero from "../components/RoomDetails/RoomHero";
import RoomGallery from "../components/RoomDetails/RoomGallery";
import RoomAbout from "../components/RoomDetails/RoomAbout";
import RoomAmenities from "../components/RoomDetails/RoomAmenities";

// Replace with the property's WhatsApp number, including country code.
// Example for India: "919876543210" (no +, spaces, or dashes).
const WHATSAPP_NUMBER = "91XXXXXXXXXX";

const RoomDetails = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const room = roomData[roomId];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [roomId]);

  if (!room) {
    return (
      <div className="flex min-h-screen flex-col bg-[#F4F0E8] text-[#26180F]">
        <Navbar />
        <main className="flex flex-1 items-center justify-center px-6 py-20 text-center">
          <div>
            <p className="mb-4 font-[Inter] text-[11px] uppercase tracking-[0.3em] text-[#A68652]">
              Sunset Cove
            </p>
            <h1 className="font-[Cormorant] text-4xl sm:text-5xl">
              Room Category Not Found
            </h1>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="mt-8 rounded-full border border-[#26180F] px-7 py-3 font-[Inter] text-sm transition-colors duration-300 hover:bg-[#26180F] hover:text-[#F4F0E8]"
            >
              Return Home
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const whatsappMessage = `Hello Sunset Cove, I'm interested in booking the ${room.title}. Could you please share the availability, pricing, and booking details for this room category?`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const WhatsAppIcon = () => (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-5.3A8.4 8.4 0 1 1 21 11.5Z" />
      <path d="M8.5 8.5c.3 1.8 2.2 3.7 4 4l1.2-1.2 2 .9-.2 1.7c-.1.6-.7 1-1.3.9-3.7-.6-6.4-3.3-7-7-.1-.6.3-1.2.9-1.3l1.7-.2.9 2-1.2 1.2Z" />
    </svg>
  );

  const bookingButtonClass =
    "inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-3 rounded-full border border-[#26180F] bg-[#26180F] px-7 py-3.5 font-[Inter] text-sm text-[#F4F0E8] transition-all duration-300 hover:border-[#A66B2E] hover:bg-[#A66B2E] sm:w-auto sm:min-w-[190px]";

  return (
    <div className="min-h-screen overflow-x-clip bg-[#F4F0E8] text-[#26180F]">
      <Navbar />

      {/* Back to room categories */}
      <section className="mx-auto w-full max-w-7xl px-5 pt-6 sm:px-8 sm:pt-8 lg:px-10 lg:pt-10">
        <button
          type="button"
          onClick={() =>
            navigate("/", {
              state: { scrollToGallery: true },
            })
          }
          aria-label="Back to all room categories"
          className="group flex max-w-full items-center gap-3 text-left transition-colors duration-300 hover:text-[#A66B2E]"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D7CEC3] transition-all duration-300 group-hover:-translate-x-1 group-hover:border-[#A66B2E] sm:h-11 sm:w-11">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
          </span>
          <span className="min-w-0">
            <span className="block font-[Inter] text-[10px] uppercase tracking-[0.22em] text-[#A66B2E] sm:text-[11px]">
              Back
            </span>
            <span className="mt-1 block font-[Cormorant] text-xl leading-tight sm:text-2xl">
              All Room Categories
            </span>
          </span>
        </button>
      </section>

      <main>
        <RoomHero room={room} />
        <RoomGallery room={room} />

        {/* Compact booking action directly below the gallery */}
        <section className="bg-[#F4F0E8] px-5 py-5 sm:py-7 lg:py-8">
          <div className="mx-auto flex max-w-7xl justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Book ${room.title} on WhatsApp`}
              className={bookingButtonClass}
            >
              <WhatsAppIcon />
              Book Now on WhatsApp
            </a>
          </div>
        </section>

        <RoomAbout room={room} />
        <RoomAmenities room={room} />

        {/* Final booking section */}
        <section
          aria-labelledby="room-booking-title"
          className="bg-[#EAE4D8] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-24"
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
            <p className="mb-4 font-[Inter] text-[10px] uppercase tracking-[0.28em] text-[#A68652] sm:text-xs sm:tracking-[0.3em]">
              Your Stay at Sunset Cove
            </p>
            <h2
              id="room-booking-title"
              className="max-w-4xl font-[Cormorant] text-4xl leading-[1.02] text-[#26180F] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Ready to experience {room.title}?
            </h2>
            <p className="mt-4 max-w-2xl font-[Inter] text-sm leading-7 text-[#514941] sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
              Make your stay memorable. Message us on WhatsApp to ask about
              availability, pricing, and booking details for this room category.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Book ${room.title} on WhatsApp`}
              className={`${bookingButtonClass} mt-7 sm:mt-9`}
            >
              <WhatsAppIcon />
              Book Now on WhatsApp
            </a>
            <p className="mt-3 max-w-md font-[Inter] text-xs leading-6 text-[#7C6652]">
              Your message will include the {room.title} category so our team
              knows which room you are enquiring about.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RoomDetails;
