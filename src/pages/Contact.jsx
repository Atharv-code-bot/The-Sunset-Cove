import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* ==========================================================
   EDIT HERE (owner-friendly)
   - Images: put files in public/images/ and change the paths
   - Contact details: change the values below
   - FORM_ENDPOINT: paste a Formspree / Getform URL to receive
     messages. If left empty, the form opens the visitor's
     email app with the message pre-filled.
========================================================== */
const CONTACT = {
  phones: [
    { label: "+(251) 854-6308", href: "tel:+2518546308" },
    { label: "+(469) 537-2410", href: "tel:+4695372410" },
  ],
  email: "hello@example.com",
  address: "123 Seaside Retreat Lane, Palm Cove, FL 33140, United States",
  bookingUrl: "https://www.airbnb.co.in/",
};

const FORM_ENDPOINT = "";

const HERO_IMAGE =
  "https://framerusercontent.com/images/hlcUVqvwkLLVRdADLD8YMDo2gzY.jpg?width=990&height=800";

const ICON_PHONE =
  "https://framerusercontent.com/images/a0Z5EFyMpNsYUSmmfSTLHVXF9cE.svg?width=30&height=30";
const ICON_MAIL =
  "https://framerusercontent.com/images/2v7iIJBB9aTMzZzJSH7xWrCBr4.svg?width=30&height=30";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: "https://framerusercontent.com/images/CtHDvXfpPSty4ZBOZTAyek9KP0.svg",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: "https://framerusercontent.com/images/ZbjqMg1LtoY5VdntZDwFCe9lE.svg?width=18&height=19",
  },
  {
    name: "LinkedIn",
    href: "https://in.linkedin.com/",
    icon: "https://framerusercontent.com/images/z3EPIko5NQAuu5ioYdlM0pWKhhE.svg?width=18&height=19",
  },
  {
    name: "X",
    href: "https://x.com/",
    icon: "https://framerusercontent.com/images/DOnUN7JR9af2E9QCaCbB0xBA8U.svg?width=18&height=19",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    icon: "https://framerusercontent.com/images/zMXUG2RblMYf84Wyl3l4gsQUbD4.svg?width=20&height=21",
  },
];

const inputClass = `
  w-full border border-[#dedacd] bg-[#f6f5ee] px-[12px]
  font-outfit text-[15px] text-[#26180f]
  placeholder:text-[#514941]/80
  outline-none transition-colors duration-200
  focus:border-[#26180f]
`;

const labelClass = "mb-[8px] block font-outfit text-[16px] text-[#514941]";

const Contact = () => {
  const pageRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "", // honeypot: real visitors never fill this
  });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.website) return; // spam bot

    // No endpoint yet: open the visitor's email app with the message filled in
    if (!FORM_ENDPOINT) {
      const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`;
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
        "Stay enquiry from " + form.name
      )}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }

    try {
      setStatus("sending");
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "", website: "" });
    } catch {
      setStatus("error");
    }
  };

  /* ---------------- ANIMATIONS ---------------- */
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Hero: one orchestrated entrance on page load
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .fromTo(
            "[data-hero='text']",
            { y: 45, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 1.1, stagger: 0.12 }
          )
          .fromTo(
            "[data-hero='image']",
            { y: 45, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 1.1 },
            "-=0.8"
          )
          .fromTo(
            "[data-hero='form']",
            { y: 45, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 1.2 },
            0.25
          );

        // 2. Contact strip: reveals when scrolled into view
        gsap.fromTo(
          "[data-info]",
          { y: 35, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: "[data-info-wrap]",
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      // Reduced motion: nothing hidden, nothing animated
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-hero], [data-info]", { autoAlpha: 1, y: 0 });
      });

      // Recalculate trigger positions once images have loaded
      const imgs = pageRef.current?.querySelectorAll("img") ?? [];
      const refresh = () => ScrollTrigger.refresh();
      imgs.forEach((img) => {
        if (!img.complete) img.addEventListener("load", refresh, { once: true });
      });
      const t = setTimeout(refresh, 600);

      return () => {
        clearTimeout(t);
        mm.revert();
      };
    },
    { scope: pageRef }
  );

  return (
    <div ref={pageRef} className="bg-[#f4f4ea]">
      <Navbar />

      <main className="font-outfit">
        {/* ================= HERO + FORM ================= */}
        <section className="mx-auto w-full max-w-[1780px] px-[18px] pb-[70px] pt-[20px] sm:px-[30px] md:px-[50px] md:pb-[100px] md:pt-[10px]">
          <div className="grid grid-cols-1 gap-[40px] lg:grid-cols-2 lg:gap-[50px]">
            {/* LEFT: copy, socials, image */}
            <div className="flex flex-col justify-between gap-[40px]">
              <div>
                <h1
                  data-hero="text"
                  className="max-w-[780px] text-[42px] font-semibold leading-[1] tracking-[-0.03em] text-[#26180f] md:text-[64px] lg:text-[72px] lg:leading-[0.98]"
                >
                  Plan your perfect stay—contact us today
                </h1>

                <p
                  data-hero="text"
                  className="mt-[18px] max-w-[640px] text-[16px] leading-[1.55] text-[#514941] md:mt-[22px] md:text-[17px]"
                >
                  Start your journey to luxury and relaxation with ease. Your
                  dream escape is just a click away!
                </p>

                <ul
                  data-hero="text"
                  className="mt-[26px] flex items-center gap-[20px]"
                >
                  {socials.map((s) => (
                    <li key={s.name}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.name}
                        className="block transition-opacity duration-300 hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#26180f]"
                      >
                        <img
                          src={s.icon}
                          alt=""
                          className="h-[19px] w-[19px] object-contain"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                data-hero="image"
                className="h-[240px] w-full overflow-hidden sm:h-[300px]"
              >
                <img
                  src={HERO_IMAGE}
                  alt="The Sunset Cove villa exterior"
                  className="block h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* RIGHT: form */}
            <form
              data-hero="form"
              onSubmit={handleSubmit}
              className="bg-[#ebe7dc] p-[22px] sm:p-[30px] md:p-[40px]"
            >
              <p className="mb-[28px] text-[17px] text-[#514941]">
                Contact us today
              </p>

              <div className="mb-[22px]">
                <label htmlFor="c-name" className={labelClass}>
                  Name*
                </label>
                <input
                  id="c-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  autoComplete="name"
                  className={`${inputClass} h-[48px]`}
                />
              </div>

              <div className="mb-[22px]">
                <label htmlFor="c-email" className={labelClass}>
                  Email*
                </label>
                <input
                  id="c-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  autoComplete="email"
                  className={`${inputClass} h-[48px]`}
                />
              </div>

              <div className="mb-[22px]">
                <label htmlFor="c-phone" className={labelClass}>
                  Phone no
                </label>
                <input
                  id="c-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  autoComplete="tel"
                  className={`${inputClass} h-[48px]`}
                />
              </div>

              <div className="mb-[28px]">
                <label htmlFor="c-message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="c-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Enter message"
                  className={`${inputClass} h-[150px] resize-y py-[12px]`}
                />
              </div>

              {/* Honeypot (hidden from people) */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="h-[50px] w-full bg-[#26180f] font-outfit text-[16px] font-semibold text-white transition-colors duration-300 hover:bg-[#49382c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#26180f] disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Submit"}
              </button>

              <p
                role="status"
                aria-live="polite"
                className="mt-[14px] min-h-[22px] text-[14px] text-[#514941]"
              >
                {status === "sent" &&
                  "Thank you. We have received your message and will reply soon."}
                {status === "error" &&
                  "Something went wrong. Please try again or call us."}
              </p>
            </form>
          </div>
        </section>

        {/* ================= CONTACT STRIP ================= */}
        <section
          data-info-wrap
          className="mx-auto w-full max-w-[1780px] px-[18px] pb-[80px] sm:px-[30px] md:px-[50px] md:pb-[120px]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4">
            {/* Phone */}
            <div
              data-info
              className="flex flex-col items-center border-b border-[#dedacd] px-[20px] py-[30px] text-center lg:border-b-0 lg:border-r lg:py-[10px]"
            >
              <img src={ICON_PHONE} alt="" className="h-[40px] w-[40px]" />
              <h2 className="mt-[22px] text-[28px] font-medium leading-none text-[#26180f]">
                Phone number
              </h2>
              <div className="mt-[16px] flex flex-wrap justify-center gap-x-[20px] gap-y-[6px] text-[16px] text-[#26180f]">
                {CONTACT.phones.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="transition-opacity duration-300 hover:opacity-60"
                  >
                    {p.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Email */}
            <div
              data-info
              className="flex flex-col items-center border-b border-[#dedacd] px-[20px] py-[30px] text-center lg:border-b-0 lg:border-r lg:py-[10px]"
            >
              <img src={ICON_MAIL} alt="" className="h-[40px] w-[40px]" />
              <h2 className="mt-[22px] text-[28px] font-medium leading-none text-[#26180f]">
                Email address
              </h2>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-[16px] text-[16px] text-[#26180f] transition-opacity duration-300 hover:opacity-60"
              >
                {CONTACT.email}
              </a>
            </div>

            {/* Location */}
            <div
              data-info
              className="flex flex-col items-center border-b border-[#fdd17c] px-[20px] py-[30px] text-center lg:border-b-0 lg:border-r lg:py-[10px]"
            >
              <img src={ICON_PHONE} alt="" className="h-[40px] w-[40px]" />
              <h2 className="mt-[22px] text-[28px] font-medium leading-none text-[#26180f]">
                Our location
              </h2>
              <p className="mt-[16px] max-w-[380px] text-[16px] leading-[1.5] text-[#26180f]">
                {CONTACT.address}
              </p>
            </div>

            {/* Booking */}
            <div
              data-info
              className="flex items-center justify-center px-[20px] py-[40px] lg:py-[10px]"
            >
              <a
                href={CONTACT.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#26180f] px-[40px] py-[16px] text-[17px] font-semibold text-white transition-colors duration-300 hover:bg-[#49382c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#26180f]"
              >
                Book on Airbnb
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;