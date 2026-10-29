import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RoomGallery = ({ room }) => {
  const sectionRef = useRef(null);
  const desktopTrackRef = useRef(null);
  const closeButtonRef = useRef(null);
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const galleryImages = Array.isArray(room?.gallery)
    ? room.gallery.filter(Boolean)
    : [];

  // Repeat the gallery only for the desktop marquee.
  const marqueeImages = [...galleryImages, ...galleryImages];
  const isLightboxOpen = activeImageIndex !== null;

  const closeLightbox = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  const showPreviousImage = useCallback(() => {
    setActiveImageIndex((current) => {
      if (current === null || galleryImages.length === 0) return current;
      return (current - 1 + galleryImages.length) % galleryImages.length;
    });
  }, [galleryImages.length]);

  const showNextImage = useCallback(() => {
    setActiveImageIndex((current) => {
      if (current === null || galleryImages.length === 0) return current;
      return (current + 1) % galleryImages.length;
    });
  }, [galleryImages.length]);

  useEffect(() => {
    if (!isLightboxOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPreviousImage();
      if (event.key === "ArrowRight") showNextImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, closeLightbox, showPreviousImage, showNextImage]);

  useLayoutEffect(() => {
    let resizeHandler;
    let mediaQuery;
    const ctx = gsap.context(() => {
      const section = sectionRef.current;

      if (section) {
        gsap.fromTo(
          section,
          { y: 24, opacity: 0.7 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              once: true,
            },
          }
        );
      }

      // Animate the marquee on tablet/desktop only. Mobile remains a static grid.
      const track = desktopTrackRef.current;
      mediaQuery = window.matchMedia("(min-width: 768px)");

      const setupMarquee = () => {
        if (!track) return;

        gsap.killTweensOf(track);
        gsap.set(track, { x: 0 });

        if (!mediaQuery.matches || galleryImages.length < 2) return;

        const halfWidth = track.scrollWidth / 2;
        if (!halfWidth) return;

        gsap.to(track, {
          x: -halfWidth,
          duration: Math.max(38, galleryImages.length * 11),
          ease: "none",
          force3D: true,
          repeat: -1,
        });
      };

      setupMarquee();
      resizeHandler = setupMarquee;
      mediaQuery.addEventListener?.("change", setupMarquee);
      window.addEventListener("resize", setupMarquee);
    }, sectionRef);

    return () => {
      if (resizeHandler) window.removeEventListener("resize", resizeHandler);
      if (mediaQuery && resizeHandler) {
        mediaQuery.removeEventListener?.("change", resizeHandler);
      }
      ctx.revert();
    };
  }, [room, galleryImages.length]);

  if (!galleryImages.length) return null;

  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const imageButtonClass =
    "group relative block h-full w-full cursor-pointer overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B98B32]";

  return (
    <>
      <section
        ref={sectionRef}
        aria-label={`${room.title} photo gallery`}
        className="overflow-hidden bg-[#F4F0E8] py-3 sm:py-5 lg:py-7"
      >
        {/* Mobile: static two-column collage. Tap any photo to enlarge it. */}
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-2 px-2 sm:gap-3 sm:px-5 md:hidden">
          {galleryImages.map((image, index) => {
            const isWideFeature =
              galleryImages.length > 2 &&
              index === galleryImages.length - 1 &&
              galleryImages.length % 2 !== 0;

            return (
              <div
                key={`${room.id || room.title}-mobile-${index}`}
                className={`relative overflow-hidden rounded-[14px] bg-[#EAE4D8] ${
                  isWideFeature
                    ? "col-span-2 h-[190px] sm:h-[250px]"
                    : "h-[150px] sm:h-[220px]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => openLightbox(index)}
                  className={imageButtonClass}
                  aria-label={`View ${room.title} photo ${index + 1} full screen`}
                  aria-haspopup="dialog"
                >
                  <img
                    src={image}
                    alt={`${room.title} view ${index + 1}`}
                    loading={index > 1 ? "lazy" : "eager"}
                    className="h-full w-full object-cover transition-transform duration-500 group-active:scale-[1.02]"
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* Tablet and desktop: preserve the cinematic horizontal marquee. */}
        <div className="hidden overflow-hidden md:block">
          <div
            ref={desktopTrackRef}
            className="flex w-max gap-4 px-5 will-change-transform [backface-visibility:hidden] lg:gap-6 lg:px-8"
          >
            {marqueeImages.map((image, index) => {
              const originalIndex = index % galleryImages.length;

              return (
                <div
                  key={`${room.id || room.title}-desktop-${index}`}
                  className="h-[380px] w-[300px] flex-shrink-0 overflow-hidden rounded-[24px] bg-[#EAE4D8] lg:h-[520px] lg:w-[400px]"
                >
                  <button
                    type="button"
                    onClick={() => openLightbox(originalIndex)}
                    className={imageButtonClass}
                    aria-label={`View ${room.title} photo ${originalIndex + 1} full screen`}
                    aria-haspopup="dialog"
                  >
                    <img
                      src={image}
                      alt={`${room.title} view ${originalIndex + 1}`}
                      loading={index < 3 ? "eager" : "lazy"}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full-screen lightbox shared by mobile, tablet and desktop. */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#120F0C]/75 p-3 backdrop-blur-md sm:p-6 lg:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={`${room.title} photo viewer`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeLightbox}
            aria-label="Close photo viewer"
            className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#26180F]/70 text-white transition-colors hover:bg-[#A66B2E] sm:right-6 sm:top-6 sm:h-12 sm:w-12"
          >
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>

          {galleryImages.length > 1 && (
            <button
              type="button"
              onClick={showPreviousImage}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#26180F]/70 text-white transition-colors hover:bg-[#A66B2E] sm:left-5 sm:h-12 sm:w-12"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5m7 7-7-7 7-7" />
              </svg>
            </button>
          )}

          <div className="flex max-h-full max-w-full flex-col items-center justify-center">
            <img
              src={galleryImages[activeImageIndex]}
              alt={`${room.title} enlarged photo ${activeImageIndex + 1}`}
              className="max-h-[78vh] max-w-[88vw] rounded-[10px] object-contain shadow-2xl sm:max-h-[82vh] sm:max-w-[88vw] lg:max-h-[86vh] lg:max-w-[84vw]"
            />
            <p className="mt-3 font-[Inter] text-xs tracking-[0.12em] text-white/85 sm:mt-4 sm:text-sm">
              {room.title} <span className="mx-2 text-white/45">•</span>
              {activeImageIndex + 1} / {galleryImages.length}
            </p>
          </div>

          {galleryImages.length > 1 && (
            <button
              type="button"
              onClick={showNextImage}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#26180F]/70 text-white transition-colors hover:bg-[#A66B2E] sm:right-5 sm:h-12 sm:w-12"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default RoomGallery;
