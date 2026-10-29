import { useNavigate } from "react-router-dom";
import infinitySuite from "../../assets/rooms/cove-infinity-suites.jpg";
import crescentRoom from "../../assets/rooms/crescent-cove-rooms.jpg";
import verdantRoom from "../../assets/rooms/verdant-cove-rooms.jpg";
import sunsetRoom from "../../assets/rooms/sunset-rooms.jpg";
import coveRoom from "../../assets/rooms/cove-rooms.jpg";

const roomCategories = [
  {
    id: "cove-infinity-suites",
    title: "Cove Infinity Suites",
    subtitle: "Private infinity pool • Panoramic sea view",
    image: infinitySuite,
  },
  {
    id: "crescent-cove-rooms",
    title: "Crescent Cove Rooms",
    subtitle: "C-shaped balcony • Sea & valley views",
    image: crescentRoom,
  },
  {
    id: "verdant-cove-rooms",
    title: "Verdant Cove Rooms",
    subtitle: "Lush valley & greenery views",
    image: verdantRoom,
  },
  {
    id: "sunset-rooms",
    title: "Sunset Rooms",
    subtitle: "Golden sunset-facing rooms",
    image: sunsetRoom,
  },
  {
    id: "cove-rooms",
    title: "Cove Rooms",
    subtitle: "Elegant comfort • Cozy villa stay",
    image: coveRoom,
  },
];

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <section
      id="room-categories"
      className="w-full bg-[#f4f4ea] py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1780px] px-4 sm:px-6 md:px-8 lg:px-[50px]">
        <div className="mb-10 text-center sm:mb-14 lg:mb-20">
          <p className="mb-4 font-[Inter] text-[12px] uppercase tracking-[0.28em] text-[#8B7A6B]">
            Accommodation
          </p>

          <h2 className="font-[Cormorant] text-[clamp(2.45rem,6.5vw,3.75rem)] font-medium leading-[0.98] tracking-[-0.03em] text-[#26180f] sm:text-[60px] md:text-[72px] lg:text-[86px]">
            Discover our room categories
          </h2>

          <p className="mx-auto mt-4 max-w-[680px] font-[Inter] text-[14px] leading-[1.8] text-[#514941] sm:mt-6 sm:text-[16px]">
            Every room at The Sunset Cove offers a unique experience—from
            infinity pool suites overlooking the sea to cozy rooms surrounded by
            lush greenery. Click any category to explore amenities, views, and
            room details.
          </p>
        </div>

        {/* Mobile: one column. Tablet: two columns with the fifth card centered.
            Desktop: preserve the existing three-card top row and two centered below. */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 xl:grid-cols-6 xl:gap-6">
          {roomCategories.map((room, index) => {
            const isFifthCard = index === 4;
            const isFourthOrFifth = index >= 3;

            return (
              <button
                key={room.id}
                type="button"
                onClick={() =>
                  navigate(`/rooms/${room.id}`, {
                    state: { fromGallery: true },
                  })
                }
                className={`room-card group relative min-w-0 overflow-hidden text-left xl:col-span-2 ${
                  isFifthCard
                    ? "sm:col-span-2 sm:justify-self-center sm:w-[calc(50%-0.875rem)] xl:col-start-4 xl:w-full"
                    : "sm:col-span-1"
                } ${index === 3 ? "xl:col-start-2" : ""}`}
              >
                <div className="relative h-[390px] overflow-hidden sm:h-[430px] md:h-[460px] lg:h-[500px]">
                  <img
                    src={room.image}
                    alt={room.title}
                    loading={index < 2 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#26180f]/90 via-[#26180f]/30 to-transparent transition duration-500 group-hover:from-[#26180f]/80" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-7">
                    <p className="mb-2 font-[Inter] text-[10px] uppercase tracking-[0.22em] text-[#FDD17C] sm:text-[11px]">
                      Room Category
                    </p>

                    <h3 className="font-[Cormorant] text-[32px] font-medium leading-[1] text-[#F4F4EA] sm:text-[34px] lg:text-[38px]">
                      {room.title}
                    </h3>

                    <p className="mt-3 font-[Inter] text-[13px] leading-[1.6] text-[#EBE7DC] sm:text-[14px]">
                      {room.subtitle}
                    </p>

                    <div className="mt-5 flex items-center gap-2 font-[Inter] text-[10px] uppercase tracking-[0.2em] text-[#FDD17C] sm:mt-6 sm:text-[11px]">
                      <span>Click to explore</span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="m13 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute inset-0 border border-transparent transition duration-500 group-hover:border-[#FDD17C]/70" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
