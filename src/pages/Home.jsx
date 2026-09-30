import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Welcome from "../components/Welcome/Welcome";
import Activity from "../components/Activity/Activity";
import Gallery from "../components/Gallery/Gallery";
import Testimonial from "../components/Testimonial/Testimonial";
import InstagramMarquee from "../components/InstagramMarquee/InstagramMarquee";
import Footer from "../components/Footer/Footer";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import RestaurantDetails from "../components/RestaurantDetails/RestaurantDetails";

const Home = () => {
  const location = useLocation();

  // Scroll back to Room Categories when returning from Room Details page.
  useEffect(() => {
    if (location.state?.scrollToGallery) {
      const gallerySection = document.getElementById("room-categories");

      if (gallerySection) {
        setTimeout(() => {
          gallerySection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 150);
      }

      // Clear router state after scrolling.
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <main className="relative bg-[#f4f4ea]">
      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Hero />
        </div>
      </section>

      {/* ================= PAGE CONTENT ================= */}
      <div className="relative z-20 bg-[#f4f4ea]">
        <Navbar />

        <Welcome />

        <FeatureSection />

        <RestaurantDetails />

        {/* Room Categories */}
        <Gallery />

        <Activity />

        <Testimonial />

        <InstagramMarquee />
      </div>

      {/* ================= FOOTER ================= */}
      <Footer />
    </main>
  );
};

export default Home;