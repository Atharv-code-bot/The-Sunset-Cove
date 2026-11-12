// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// import Navbar from "../components/Navbar/Navbar";
// import Hero from "../components/Hero/Hero";
// import Welcome from "../components/Welcome/Welcome";
// import Activity from "../components/Activity/Activity";
// import Gallery from "../components/Gallery/Gallery";
// import Testimonial from "../components/Testimonial/Testimonial";
// import InstagramMarquee from "../components/InstagramMarquee/InstagramMarquee";
// import Footer from "../components/Footer/Footer";
// import FeatureSection from "../components/FeatureSection/FeatureSection";
// import RestaurantDetails from "../components/RestaurantDetails/RestaurantDetails";
// import AnimatedSection from "../components/AnimatedSection/AnimatedSection";

// const Home = () => {
//   const location = useLocation();

//   // Scroll to a section when returning from the Room Details / Activity pages
//   useEffect(() => {
//     const state = location.state;
//     if (!state?.scrollToGallery && !state?.scrollToActivity) return;

//     const targetId = state.scrollToActivity ? "activity" : "room-categories";
//     const target = document.getElementById(targetId);

//     if (target) {
//       setTimeout(() => {
//         if (window.lenis) {
//           window.lenis.scrollTo(target, { offset: 0, duration: 1.4 });
//         } else {
//           target.scrollIntoView({ behavior: "smooth", block: "start" });
//         }
//       }, 150);
//     }

//     // Clear router state after scrolling
//     window.history.replaceState({}, document.title);
//   }, [location]);

//   return (
//     <main className="relative bg-[#f4f4ea]">
//       {/* ================= HERO =================
//           sticky + z-0: the hero stays pinned to the top of the screen
//           while the page content (z-20) slides up over it.
//           Works the same on mobile and desktop. */}
//       <section className="sticky top-0 z-0 h-[50svh] overflow-hidden md:h-[70svh]">
//         <div className="absolute inset-0">
//           <Hero />
//         </div>
//       </section>

//       {/* ================= PAGE CONTENT =================
//           relative z-20 + background: this is the layer that slides over
//           the hero. The soft shadow on its top edge makes the layering visible. */}
//       <div className="relative z-20 bg-[#f4f4ea] shadow-[0_-25px_50px_-25px_rgba(38,24,15,0.45)]">
//         <Navbar />

//         <Welcome />

//         <FeatureSection />

//         <RestaurantDetails />

//         {/* Room Categories */}
//         <Gallery />

//         <AnimatedSection>
//           <Testimonial />
//         </AnimatedSection>

//         <AnimatedSection>
//           <Activity />
//         </AnimatedSection>

//         <AnimatedSection>
//           <InstagramMarquee />
//         </AnimatedSection>
//       </div>

//       {/* ================= FOOTER ================= */}
//       <Footer />
//     </main>
//   );
// };

// export default Home;



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
import AnimatedSection from "../components/AnimatedSection/AnimatedSection";

const Home = () => {
  const location = useLocation();

  // Glide to a section when arriving from another page (Navbar "Activities",
  // the Activity page back button, or Room Details back button).
  useEffect(() => {
    const state = location.state;
    if (!state?.scrollToGallery && !state?.scrollToActivity) return;

    const targetId = state.scrollToActivity ? "activity" : "room-categories";

    // Slow, smooth start and finish (ease in-out cubic)
    const ease = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const glide = () => {
      const target = document.getElementById(targetId);
      if (!target) return;

      if (window.lenis) {
        window.lenis.scrollTo(target, {
          offset: 0,
          duration: 2.6, // seconds: raise for slower, lower for faster
          easing: ease,
          onComplete: () => {
            // Images above may have loaded during the glide and moved the
            // section: nudge it into exact position if it is off.
            const off = target.getBoundingClientRect().top;
            if (Math.abs(off) > 4) {
              window.lenis.scrollTo(target, { offset: 0, duration: 0.8 });
            }
          },
        });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Wait until the page has mounted, been reset to the top and laid out.
    // (Starting too early is why the first click from another page
    // only reached Home without scrolling.)
    const timer = setTimeout(glide, 700);

    // Clear router state so a refresh doesn't scroll again
    window.history.replaceState({}, document.title);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <main className="relative bg-[#f4f4ea]">
      {/* ================= HERO =================
          sticky + z-0: the hero stays pinned to the top of the screen
          while the page content (z-20) slides up over it.
          Works the same on mobile and desktop. */}
      <section className="sticky top-0 z-0 h-[50svh] overflow-hidden md:h-[70svh]">
        <div className="absolute inset-0">
          <Hero />
        </div>
      </section>

      {/* ================= PAGE CONTENT =================
          relative z-20 + background: this is the layer that slides over
          the hero. The soft shadow on its top edge makes the layering visible. */}
      <div className="relative z-20 bg-[#f4f4ea] shadow-[0_-25px_50px_-25px_rgba(38,24,15,0.45)]">
        <Navbar />

        <Welcome />

        <FeatureSection />

        <RestaurantDetails />

        {/* Room Categories */}
        <Gallery />

        <AnimatedSection>
          <Testimonial />
        </AnimatedSection>

        <AnimatedSection>
          <Activity />
        </AnimatedSection>

        <AnimatedSection>
          <InstagramMarquee />
        </AnimatedSection>
      </div>

      {/* ================= FOOTER ================= */}
      <Footer />
    </main>
  );
};

export default Home;