// // // import Navbar from "../components/Navbar/Navbar";
// // // import VillaScroll from "../components/VillaScroll/VillaScroll";
// // // import Activity from "../components/Activity/Activity";
// // // import Amenities from "../components/Amenities/Amenities";
// // // import Gallery from "../components/Gallery/Gallery";
// // // import Testimonial from "../components/Testimonial/Testimonial";
// // // import InstagramMarquee from "../components/InstagramMarquee/InstagramMarquee";
// // // import Footer from "../components/Footer/Footer";

// // // const Home = () => {
// // //   return (
// // //     <main className="relative">
// // //       <Navbar />
// // //       <VillaScroll />
// // //       <Activity />
// // //       <Amenities />
// // //       <Gallery />
// // //       <Testimonial />
// // //       <InstagramMarquee />
// // //       <Footer />
// // //     </main>
// // //   );
// // // };

// // // export default Home;


// // import { useCallback, useState } from "react";
// // import Navbar from "../components/Navbar/Navbar";
// // import VillaScroll from "../components/VillaScroll/VillaScroll";
// // import Activity from "../components/Activity/Activity";
// // import Amenities from "../components/Amenities/Amenities";
// // import Gallery from "../components/Gallery/Gallery";
// // import Testimonial from "../components/Testimonial/Testimonial";
// // import InstagramMarquee from "../components/InstagramMarquee/InstagramMarquee";
// // import Footer from "../components/Footer/Footer";

// // const Home = () => {
// //   const [showNavbar, setShowNavbar] = useState(false);

// //   const handleLeaveLanding = useCallback(() => setShowNavbar(true), []);
// //   const handleEnterLanding = useCallback(() => setShowNavbar(false), []);

// //   return (
// //     <main className="relative">
// //       <Navbar visible={showNavbar} />
// //       <VillaScroll
// //         onLeaveLanding={handleLeaveLanding}
// //         onEnterLanding={handleEnterLanding}
// //       />
// //       <Activity />
// //       <Amenities />
// //       <Gallery />
// //       <Testimonial />
// //       <InstagramMarquee />
// //       <Footer />
// //     </main>
// //   );
// // };

// // export default Home;
// import Navbar from "../components/Navbar/Navbar";
// import Hero from "../components/Hero/Hero";
// import Welcome from "../components/Welcome/Welcome";
// import Activity from "../components/Activity/Activity";
// import Amenities from "../components/Amenities/Amenities";
// import Gallery from "../components/Gallery/Gallery";
// import Testimonial from "../components/Testimonial/Testimonial";
// import InstagramMarquee from "../components/InstagramMarquee/InstagramMarquee";
// import Footer from "../components/Footer/Footer";
// import FeatureSection from "../components/FeatureSection/FeatureSection";

// const Home = () => {
//   return (
//     <main className="relative bg-[#f4f4ea]">

//       {/* ================= HERO ================= */}
//       <section className="relative h-[70vh]">
//         <div className="fixed left-0 top-0 z-0 h-[70vh] w-full overflow-hidden">
//           <Hero />
//         </div>
//       </section>

//       {/* ================= CREAM CONTENT ================= */}
//       <div className="relative z-20 bg-[#f4f4ea]">

//         {/* Navbar belongs to this page */}
//         <Navbar />

//         <Welcome />
//        <FeatureSection />
        
//         {/* <Amenities /> */}
//         <Gallery />
//         <Activity />
//         <Testimonial />
//         <InstagramMarquee />
//         <Footer />

//       </div>

//     </main>
//   );
// };

// export default Home;

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Welcome from "../components/Welcome/Welcome";
import Activity from "../components/Activity/Activity";
import Gallery from "../components/Gallery/Gallery";
import Testimonial from "../components/Testimonial/Testimonial";
import InstagramMarquee from "../components/InstagramMarquee/InstagramMarquee";
import Footer from "../components/Footer/Footer";
import FeatureSection from "../components/FeatureSection/FeatureSection";

const Home = () => {
  return (
    <main className="relative bg-[#f4f4ea]">

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh]">
        <div className="fixed left-0 top-0 z-0 h-[70vh] w-full overflow-hidden">
          <Hero />
        </div>
      </section>

      {/* ================= PAGE CONTENT ================= */}
      <div className="relative z-20 bg-[#f4f4ea]">

        <Navbar />

        <Welcome />

        <FeatureSection />

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