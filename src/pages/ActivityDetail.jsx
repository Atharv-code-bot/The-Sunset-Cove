import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Testimonial from "../components/Testimonial/Testimonial";
import InstagramMarquee from "../components/InstagramMarquee/InstagramMarquee";
import Footer from "../components/Footer/Footer";
import ActivityCTA from "../components/ActivityCTA/ActivityCTA";
import AnimatedSection from "../components/AnimatedSection/AnimatedSection";
import { activitiesData } from "../data/activitiesData";

const ActivityDetail = () => {
  const { slug } = useParams();
  const activity = activitiesData[slug];

  // Unknown / mistyped slug — friendly fallback instead of a blank page
  if (!activity) {
    return (
      <main className="relative min-h-screen bg-[#f4f4ea]">
        <Navbar />
        <div className="flex min-h-screen flex-col items-center justify-center px-[24px] pt-[120px] text-center">
          <h1 className="font-['Cormorant_Garamond'] text-[40px] text-[#26180f] md:text-[52px]">
            Activity not found
          </h1>
          <p className="mt-[16px] max-w-[420px] font-['Inter'] text-[16px] text-[#514941]">
            The activity you're looking for doesn't exist or may have been
            moved.
          </p>
          <Link
            to="/"
            className="
              mt-[36px]
              flex
              h-[54px]
              w-fit
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
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative bg-[#f4f4ea]">
      <Navbar />

      {/* =====================================================
          TITLE + DESCRIPTION
      ===================================================== */}
      <section
        className="
          mx-auto
          w-full
          max-w-[1000px]
          px-[24px]
          pb-[50px]
          pt-[120px]
          text-center
          md:px-[50px]
          md:pt-[140px]
        "
      >
        <h1
          className="
            font-['Cormorant_Garamond']
            text-[46px]
            leading-[1.1]
            tracking-[-0.02em]
            text-[#26180f]
            md:text-[60px]
            lg:text-[66px]
          "
        >
          {activity.title}
        </h1>

        <p
          className="
            mx-auto
            mt-[24px]
            max-w-[820px]
            font-['Inter']
            text-[16px]
            leading-[1.75]
            text-[#514941]
            md:text-[18px]
          "
        >
          {activity.description}
        </p>
      </section>

      {/* =====================================================
          HERO IMAGE
      ===================================================== */}
      <section className="mx-auto w-full max-w-[1780px] px-[20px] md:px-[50px]">
        <div className="w-full overflow-hidden rounded-[6px] bg-[#e9e7dc]">
          <img
            src={activity.heroImage}
            alt={activity.title}
            className="block max-h-[760px] w-full object-cover"
          />
        </div>
      </section>

      {/* =====================================================
          TIPS LIST
      ===================================================== */}
      <section
        className="
          mx-auto
          w-full
          max-w-[900px]
          px-[24px]
          py-[80px]
          md:px-[50px]
        "
      >
        <ul className="flex flex-col gap-[18px]">
          {activity.tips.map((tip) => (
            <li
              key={tip.label}
              className="
                relative
                pl-[22px]
                font-['Inter']
                text-[16px]
                leading-[1.7]
                text-[#514941]
                md:text-[17px]
              "
            >
              <span
                className="
                  absolute
                  left-0
                  top-[10px]
                  h-[5px]
                  w-[5px]
                  rounded-full
                  bg-[#26180f]
                "
              />
              <span className="font-semibold text-[#26180f]">
                {tip.label}:
              </span>{" "}
              {tip.text}
            </li>
          ))}
        </ul>
      </section>

      {/* =====================================================
          3-IMAGE GALLERY
      ===================================================== */}
      <section
        id="activity-gallery"
        className="
          mx-auto
          w-full
          max-w-[1780px]
          px-[20px]
          pb-[120px]
          md:px-[50px]
        "
      >
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3">
          {activity.gallery.map((img, i) => (
            <div
              key={i}
              className="aspect-[4/5] w-full overflow-hidden rounded-[4px] bg-[#e9e7dc]"
            >
              <img
                src={img}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          SHARED SECTIONS
      ===================================================== */}
      <AnimatedSection>
        <Testimonial />
      </AnimatedSection>

      <AnimatedSection>
        <ActivityCTA />
      </AnimatedSection>

      <AnimatedSection>
        <InstagramMarquee />
      </AnimatedSection>

      <Footer />
    </main>
  );
};

export default ActivityDetail;