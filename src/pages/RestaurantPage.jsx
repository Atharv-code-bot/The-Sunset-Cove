import { useState } from "react";
import { ArrowUpRight, CalendarDays, Clock3, UtensilsCrossed, X } from "lucide-react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AnimatedSection from "../components/AnimatedSection/AnimatedSection";

// Save the restaurant photos using the filenames listed in the handoff message.
// Vite automatically includes every image placed inside restaurant_gallery.
const restaurantGalleryModules = import.meta.glob(
  "../assets/restaurant/restaurant_gallery/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, query: "?url", import: "default" }
);

const restaurantAssetModules = import.meta.glob(
  "../assets/restaurant/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, query: "?url", import: "default" }
);

const galleryImages = Object.entries(restaurantGalleryModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({
    src,
    alt: path.split("/").pop().replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
  }));

const WHATSAPP_NUMBER = "91XXXXXXXXXX"; // Replace with the restaurant's WhatsApp number.

const whatsappUrl = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

function WhatsAppButton({ message, children, className = "" }) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#26180F] px-6 py-3 text-sm text-[#F4F0E8] transition-colors duration-300 hover:bg-[#A66B2E] focus:outline-none focus:ring-2 focus:ring-[#A66B2E] focus:ring-offset-2 ${className}`}
    >
      <span aria-hidden="true">◉</span>
      {children}
      <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  );
}

function LocalImage({ name, alt, className = "", loading = "lazy" }) {
  const match = Object.entries(restaurantAssetModules).find(([path]) =>
    path.endsWith(`/${name}`)
  );
  if (!match) {
    return (
      <div
        role="img"
        aria-label={`${alt} — add ${name} to src/assets/restaurant`}
        className={`flex items-center justify-center bg-[#E6DDCE] p-4 text-center text-sm text-[#75685A] ${className}`}
      >
        Add <code className="mx-1">{name}</code> to <code>src/assets/restaurant/</code>
      </div>
    );
  }
  return <img src={match[1]} alt={alt} className={className} loading={loading} />;
}

export default function RestaurantPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const introImage = "restaurant-interior.jpg";
  const heroImage = "restaurant-hero.jpg";
  const buffetImage = "buffet-meals.jpg";
  const preOrderImage = "pre-order-meals.jpg";
  const ctaImage = "restaurant-evening.jpg";

  const hasGallery = galleryImages.length > 0;

  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-hidden bg-[#F4F0E8] text-[#26180F]">
      {/* Hero */}
      <AnimatedSection><section className="relative flex min-h-[430px] items-end sm:min-h-[520px] lg:min-h-[590px]">
        <LocalImage name={heroImage} alt="Sunset Cove restaurant overlooking the coast" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 pt-20 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.32em] text-[#E7C99C] sm:text-xs">Dining at Sunset Cove</p>
          <h1 className="max-w-2xl font-serif text-4xl leading-[1.08] text-[#FFFAF1] sm:text-5xl lg:text-7xl">
            Great food<br />with better views
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
            Savour delicious meals while overlooking the sea. Whether it’s a relaxed buffet or a specially prepared pre-order meal, enjoy a memorable dining experience at Sunset Cove.
          </p>
        </div>
      </section></AnimatedSection>

      {/* Introduction */}
      <AnimatedSection><section className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-20">
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#987344] sm:text-xs">Our restaurant</p>
          <h2 className="max-w-xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">A dining experience by the sea</h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#62584D] sm:text-base">
            Our restaurant brings together freshly prepared meals, local flavours, and a serene setting. Enjoy a relaxed dining experience and make every meal part of your stay at Sunset Cove.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[#62584D] sm:text-base">
            Planning a group meal or have a specific preference? Contact our team ahead of time to ask about menus, availability, and pre-booking arrangements.
          </p>
        </div>
        <div className="h-64 overflow-hidden rounded-sm sm:h-80 lg:h-[360px]">
          <LocalImage name={introImage} alt="Sunset Cove restaurant dining area" className="h-full w-full object-cover" />
        </div>
      </section></AnimatedSection>

      {/* Practical details */}
      <AnimatedSection><section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 lg:px-12 lg:pb-16">
        <div className="grid gap-7 rounded-xl bg-[#EEE7DA] p-6 sm:p-8 md:grid-cols-3 md:gap-0 lg:p-10">
          <div className="md:border-r md:border-[#CDBB9F] md:pr-7">
            <Clock3 className="h-7 w-7 text-[#987344]" strokeWidth={1.5} />
            <p className="mt-3 text-[10px] uppercase tracking-[0.28em] text-[#987344] sm:text-xs">Meal timings</p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[#51473C]">
              <li><strong className="font-medium text-[#26180F]">Breakfast</strong> — confirm with our team</li>
              <li><strong className="font-medium text-[#26180F]">Lunch</strong> — confirm with our team</li>
              <li><strong className="font-medium text-[#26180F]">Dinner</strong> — confirm with our team</li>
            </ul>
            <p className="mt-3 text-xs leading-5 text-[#75685A]">Contact us for the latest timings before your visit.</p>
          </div>
          <div className="md:border-r md:border-[#CDBB9F] md:px-7">
            <CalendarDays className="h-7 w-7 text-[#987344]" strokeWidth={1.5} />
            <p className="mt-3 text-[10px] uppercase tracking-[0.28em] text-[#987344] sm:text-xs">Pre-booking</p>
            <p className="mt-4 text-sm leading-6 text-[#51473C]">Pre-booking is recommended for groups and special meal requests. Our team can help you check availability and plan ahead.</p>
            <WhatsAppButton className="mt-4" message="Hello Sunset Cove, I would like to enquire about restaurant pre-booking. Please share availability and details.">Enquire via WhatsApp</WhatsAppButton>
          </div>
          <div className="md:pl-7">
            <UtensilsCrossed className="h-7 w-7 text-[#987344]" strokeWidth={1.5} />
            <p className="mt-3 text-[10px] uppercase tracking-[0.28em] text-[#987344] sm:text-xs">Meal options</p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[#51473C]">
              <li>• Buffet meals</li>
              <li>• Pre-order meals</li>
              <li>• Ask about dietary preferences and availability</li>
            </ul>
          </div>
        </div>
      </section></AnimatedSection>

      {/* Meal options */}
      <AnimatedSection><section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8 lg:px-12 lg:pb-20">
        <div className="mb-7 sm:mb-10">
          <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#987344] sm:text-xs">Our meal options</p>
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">Choose your dining experience</h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#62584D] sm:text-base sm:leading-7">Choose the style that suits your plans. Contact us to confirm menus, pricing, and availability.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <article className="overflow-hidden rounded-sm bg-[#EEE7DA]">
            <LocalImage name={buffetImage} alt="Buffet meals prepared for guests" className="h-52 w-full object-cover sm:h-64" />
            <div className="p-5 sm:p-7">
              <h3 className="font-serif text-2xl">Buffet meals</h3>
              <p className="mt-3 text-sm leading-6 text-[#62584D]">Enjoy a selection of freshly prepared dishes in a relaxed setting. Ask our team about the current buffet menu, serving times, and rates.</p>
            </div>
          </article>
          <article className="overflow-hidden rounded-sm bg-[#EEE7DA]">
            <LocalImage name={preOrderImage} alt="Freshly prepared pre-order meal served at the restaurant" className="h-52 w-full object-cover sm:h-64" />
            <div className="p-5 sm:p-7">
              <h3 className="font-serif text-2xl">Pre-order meals</h3>
              <p className="mt-3 text-sm leading-6 text-[#62584D]">Prefer something specific? Share your meal preferences in advance and our team will confirm what can be arranged for your date and group.</p>
            </div>
          </article>
        </div>
      </section></AnimatedSection>

      {/* Every image in restaurant_gallery is displayed automatically */}
      <AnimatedSection><section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8 lg:px-12 lg:pb-20">
        <div className="mb-7 flex flex-col gap-4 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#987344] sm:text-xs">Restaurant gallery</p>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">A glimpse of our restaurant</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#62584D]">From scenic dining spaces to delicious dishes, explore moments from the restaurant at Sunset Cove.</p>
        </div>
        {hasGallery ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <button key={image.src} type="button" onClick={() => setSelectedImage(index)} aria-label={`View ${image.alt}`} className="group overflow-hidden rounded-sm bg-[#E6DDCE] text-left focus:outline-none focus:ring-2 focus:ring-[#987344]">
                <img src={image.src} alt={image.alt} loading="lazy" className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </button>
            ))}
          </div>
        ) : (
          <div className="rounded-sm border border-dashed border-[#CDBB9F] px-5 py-12 text-center text-sm leading-6 text-[#75685A]">
            Add your restaurant photos to <code>src/assets/restaurant/restaurant_gallery/</code> and they will appear here automatically.
          </div>
        )}
        <div className="mt-8 flex justify-center">
          <WhatsAppButton message="Hello Sunset Cove, I would like to enquire about the restaurant, meal options, and availability. Please share more details.">Enquire about restaurant</WhatsAppButton>
        </div>
      </section></AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection><section className="relative flex min-h-[340px] items-center justify-center px-5 py-16 sm:min-h-[410px] sm:py-20">
        <LocalImage name={ctaImage} alt="Sunset dining atmosphere at Sunset Cove" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#24170F]/60" />
        <div className="relative w-full max-w-xl bg-[#F4F0E8] px-6 py-9 text-center shadow-xl sm:px-12 sm:py-12">
          <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#987344] sm:text-xs">Restaurant enquiry</p>
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Plan your dining experience</h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#62584D]">Questions about meal options, timings, or group bookings? Get in touch with our team on WhatsApp.</p>
          <WhatsAppButton className="mt-6" message="Hello Sunset Cove, I have an enquiry about the restaurant and meal options. Please share the current menu, timings, pricing, and pre-booking details.">Enquire about restaurant</WhatsAppButton>
        </div>
      </section></AnimatedSection>

      {/* Lightbox */}
      {selectedImage !== null && galleryImages[selectedImage] && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" role="dialog" aria-modal="true" aria-label="Restaurant photo viewer" onClick={() => setSelectedImage(null)}>
          <button type="button" onClick={() => setSelectedImage(null)} aria-label="Close gallery" className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><X /></button>
          <button type="button" aria-label="Previous image" onClick={(event) => { event.stopPropagation(); setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length); }} className="absolute left-3 rounded-full bg-white/10 px-4 py-3 text-white hover:bg-white/20 sm:left-8">←</button>
          <img src={galleryImages[selectedImage].src} alt={galleryImages[selectedImage].alt} className="max-h-[85vh] max-w-[85vw] object-contain" onClick={(event) => event.stopPropagation()} />
          <button type="button" aria-label="Next image" onClick={(event) => { event.stopPropagation(); setSelectedImage((selectedImage + 1) % galleryImages.length); }} className="absolute right-3 rounded-full bg-white/10 px-4 py-3 text-white hover:bg-white/20 sm:right-8">→</button>
        </div>
      )}
      </main>
      <Footer />
    </>
  );
}
