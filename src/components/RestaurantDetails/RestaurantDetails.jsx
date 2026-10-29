const restaurantDetails = [
  ["Dining options", "Buffet & pre-order meals"],
  ["Meal timings", "Contact us for current timings"],
  ["Pre-booking", "Available via WhatsApp"],
  ["Food gallery", "Explore restaurant photos"],
];

const RestaurantDetails = () => {
  return (
    <section className="w-full overflow-hidden bg-[#F4F4EA] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1780px] px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(260px,0.78fr)_1px_minmax(0,1.22fr)] md:gap-x-7 lg:gap-x-12 xl:gap-x-16">
          {/* Left column */}
          <div className="flex min-w-0 flex-col">
            {/* Mobile: title first, then image. Desktop: image first, title below. */}
            <div className="order-1 mb-5 md:order-2 md:mb-0 md:mt-5">
              <p className="mb-3 font-[Inter] text-[10px] uppercase tracking-[0.28em] text-[#A68652] sm:text-[11px] sm:tracking-[0.3em]">
                Dining at Sunset Cove
              </p>
              <h2 className="max-w-[560px] font-[Cormorant] text-[clamp(2.35rem,7vw,3.25rem)] leading-[0.98] tracking-[-0.025em] text-[#26180F] sm:text-[52px] md:text-[42px] lg:text-[48px] xl:text-[54px]">
                Discover our restaurant
              </h2>
              <p className="mt-3 max-w-lg font-[Inter] text-[14px] leading-7 text-[#514941] sm:text-[15px] sm:leading-7">
                Explore our dining options and contact us to plan your meal at
                Sunset Cove.
              </p>
            </div>

            <div className="order-2 overflow-hidden rounded-[14px] bg-[#EAE4D8] md:order-1 md:rounded-none">
              <img
                src="/images/restaurant-details.jpg"
                alt="Restaurant and dining space at Sunset Cove"
                loading="lazy"
                className="aspect-[1.42/1] w-full object-cover transition-transform duration-700 hover:scale-[1.02] sm:aspect-[1.65/1] md:aspect-[1.4/1]"
              />
            </div>

            <div className="order-3 mt-6 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap md:mt-8 md:flex-col md:items-start lg:flex-row">
              <a
                href="/restaurant"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#26180F] px-6 py-3 font-[Inter] text-[12px] text-[#26180F] transition-colors duration-300 hover:bg-[#26180F] hover:text-[#F4F4EA] sm:w-auto"
              >
                Explore Restaurant
                <svg
                  className="ml-2"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Divider on medium and larger screens */}
          <div className="hidden w-px bg-[#D6D4C9] md:block" />

          {/* Restaurant details */}
          <div className="min-w-0 md:pt-0">
            <p className="mb-3 font-[Inter] text-[10px] uppercase tracking-[0.28em] text-[#A68652] sm:text-[11px] sm:tracking-[0.3em]">
              Plan Your Visit
            </p>
            <h2 className="mb-6 max-w-[620px] font-[Cormorant] text-[clamp(2.1rem,6vw,3rem)] leading-[1.02] tracking-[-0.025em] text-[#26180F] sm:mb-8 sm:text-[48px] lg:mb-10 lg:text-[56px]">
              Restaurant details at a glance
            </h2>

            <div className="border-t border-[#D6D4C9]">
              {restaurantDetails.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-start gap-3 border-b border-[#D6D4C9] py-4 sm:items-center sm:py-[18px]"
                >
                  <p className="font-[Inter] text-[12px] leading-[1.5] text-[#514941] sm:text-[14px]">
                    {label}
                  </p>
                  <p className="break-words text-right font-[Inter] text-[12px] leading-[1.5] text-[#26180F] sm:text-[14px]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantDetails;
