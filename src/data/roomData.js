// src/data/roomData.js

/* ---------------- HOME PAGE THUMBNAILS ---------------- */

import infinityThumbnail from "../assets/rooms/cove-infinity-suites.jpg";
import crescentThumbnail from "../assets/rooms/crescent-cove-rooms.jpg";
import verdantThumbnail from "../assets/rooms/verdant-cove-rooms.jpg";
import sunsetThumbnail from "../assets/rooms/sunset-rooms.jpg";
import coveThumbnail from "../assets/rooms/cove-rooms.jpg";

/* ---------------- REDIRECTED PAGE GALLERIES ---------------- */

// Infinity Suites
import infinity1 from "../assets/rooms/infinity/1.jpg";
import infinity2 from "../assets/rooms/infinity/2.jpg";
import infinity3 from "../assets/rooms/infinity/3.jpg";
import infinity4 from "../assets/rooms/infinity/4.jpg";

// Crescent Rooms
import crescent1 from "../assets/rooms/crescent/1.jpg";
import crescent2 from "../assets/rooms/crescent/2.jpg";
import crescent3 from "../assets/rooms/crescent/3.jpg";

// Verdant Rooms
import verdant1 from "../assets/rooms/verdant/1.jpg";

// Sunset Rooms
import sunset1 from "../assets/rooms/sunset/1.jpg";
import sunset2 from "../assets/rooms/sunset/2.jpg";

// Cove Rooms
import cove1 from "../assets/rooms/cove/1.jpg";

export const roomData = {
  "cove-infinity-suites": {
    id: "cove-infinity-suites",

    // Home Gallery Card
    title: "Cove Infinity Suites",
    subtitle: "Private infinity pool • Panoramic Arabian Sea views",
    coverImage: infinityThumbnail,

    // Hero Section
    hero: {
      title: "Luxury living, redefined by the sea.",
      description:
        "Wake up to uninterrupted Arabian Sea views from your private infinity suite, where handcrafted luxury meets breathtaking sunsets.",
    },

    // About Section
    about: {
      heading: "About the Cove Infinity Suites",
      paragraphs: [
        "Cove Infinity Suites are our signature luxury accommodations, offering uninterrupted Arabian Sea views, a private infinity plunge pool, handcrafted interiors, and expansive living spaces designed for complete relaxation.",
        "Designed for couples, families, and guests seeking an elevated coastal experience, every suite combines contemporary architecture with warm natural materials inspired by Konkan's landscape.",
        "Large panoramic windows, spacious balconies, and thoughtfully curated interiors ensure that every sunrise and sunset becomes part of your stay at Sunset Cove.",
      ],
    },

    // Stats
    stats: {
      rooms: 2,
      size: "950 sq ft",
      occupancy: "4 Guests",
      view: "Arabian Sea View",
    },

    gallery: [infinity1, infinity2, infinity3, infinity4],

    amenities: [
      "Private Infinity Pool",
      "King Size Bed",
      "Ocean-facing Balcony",
      "Luxury Bathtub",
      "Rain Shower",
      "Smart TV",
      "Coffee & Tea Station",
      "Mini Bar",
      "High-Speed Wi-Fi",
      "Breakfast Included",
    ],
  },

  "crescent-cove-rooms": {
    id: "crescent-cove-rooms",

    title: "Crescent Cove Rooms",
    subtitle: "C-shaped balcony • Sea & valley views",
    coverImage: crescentThumbnail,

    hero: {
      title: "Where every balcony frames nature.",
      description:
        "Elegant rooms featuring the iconic crescent balcony overlooking lush valleys and the Arabian Sea.",
    },

    about: {
      heading: "About the Crescent Cove Rooms",
      paragraphs: [
        "Crescent Cove Rooms feature Sunset Cove's signature crescent-shaped balcony that beautifully frames the surrounding sea and valley landscapes.",
        "The interiors blend earthy textures, handcrafted furnishings, and abundant natural light to create a calm and sophisticated atmosphere.",
        "Perfect for couples and small families, these rooms offer a peaceful retreat with uninterrupted views throughout the day.",
      ],
    },

    stats: {
      rooms: 2,
      size: "780 sq ft",
      occupancy: "3 Guests",
      view: "Sea & Valley View",
    },

    gallery: [crescent1, crescent2, crescent3, crescent1],

    amenities: [
      "C-Shaped Balcony",
      "Queen Size Bed",
      "Sea & Valley View",
      "Premium Bathroom",
      "Workspace",
      "Smart TV",
      "Mini Refrigerator",
      "Coffee Machine",
      "Wi-Fi",
      "Breakfast Included",
    ],
  },

  "verdant-cove-rooms": {
    id: "verdant-cove-rooms",

    title: "Verdant Cove Rooms",
    subtitle: "Lush valley & greenery views",
    coverImage: verdantThumbnail,

    hero: {
      title: "Surrounded by greenery and serenity.",
      description:
        "Immerse yourself in peaceful landscapes and beautifully crafted interiors inspired by nature.",
    },

    about: {
      heading: "About the Verdant Cove Rooms",
      paragraphs: [
        "Verdant Cove Rooms are designed for guests who want to wake up surrounded by lush greenery and peaceful valley views.",
        "Floor-to-ceiling windows connect the interiors with nature while maintaining privacy and comfort throughout your stay.",
        "Every detail celebrates the tranquility of Sunset Cove's tropical surroundings and the beauty of slow living.",
      ],
    },

    stats: {
      rooms: 2,
      size: "760 sq ft",
      occupancy: "3 Guests",
      view: "Valley & Garden View",
    },

    gallery: [verdant1, verdant1, verdant1, verdant1],

    amenities: [
      "Private Balcony",
      "Garden & Valley View",
      "King Size Bed",
      "Rain Shower",
      "Coffee Station",
      "Workspace",
      "Wardrobe",
      "Wi-Fi",
      "Smart TV",
      "Breakfast Included",
    ],
  },

  "sunset-rooms": {
    id: "sunset-rooms",

    title: "Sunset Rooms",
    subtitle: "Golden sunset-facing luxury rooms",
    coverImage: sunsetThumbnail,

    hero: {
      title: "Front row seats to unforgettable sunsets.",
      description:
        "Experience warm golden evenings from beautifully designed sunset-facing rooms with uninterrupted horizon views.",
    },

    about: {
      heading: "About the Sunset Rooms",
      paragraphs: [
        "Sunset Rooms are positioned to capture the golden hues of the evening sky, offering spectacular sunset views from your private balcony.",
        "Warm earthy interiors, luxurious bedding, and elegant lighting create an inviting atmosphere from morning until dusk.",
        "These rooms are ideal for guests looking to experience the most iconic views Sunset Cove has to offer.",
      ],
    },

    stats: {
      rooms: 2,
      size: "820 sq ft",
      occupancy: "3 Guests",
      view: "Sunset Sea View",
    },

    gallery: [sunset1, sunset2, sunset1, sunset2],

    amenities: [
      "Sunset Balcony",
      "Sea View",
      "King Size Bed",
      "Luxury Bathroom",
      "Mini Bar",
      "Coffee Station",
      "Wi-Fi",
      "Smart TV",
      "Reading Corner",
      "Breakfast Included",
    ],
  },

  "cove-rooms": {
    id: "cove-rooms",

    title: "Cove Rooms",
    subtitle: "Elegant luxury rooms with premium comfort",
    coverImage: coveThumbnail,

    hero: {
      title: "Comfort designed with timeless elegance.",
      description:
        "Minimal yet luxurious rooms crafted for peaceful stays with every essential premium amenity.",
    },

    about: {
      heading: "About the Cove Rooms",
      paragraphs: [
        "Cove Rooms combine modern comfort with timeless coastal elegance, creating the perfect space for a relaxing getaway.",
        "The rooms feature premium interiors, soft natural tones, and carefully selected amenities for everyday luxury.",
        "Ideal for couples and solo travellers, Cove Rooms offer a peaceful stay while remaining close to every Sunset Cove experience.",
      ],
    },

    stats: {
      rooms: 2,
      size: "700 sq ft",
      occupancy: "2 Guests",
      view: "Courtyard View",
    },

    gallery: [cove1, cove1, cove1, cove1],

    amenities: [
      "Courtyard View",
      "Queen Size Bed",
      "Rain Shower",
      "Smart TV",
      "Mini Refrigerator",
      "Coffee Station",
      "Wi-Fi",
      "Wardrobe",
      "Air Conditioning",
      "Breakfast Included",
    ],
  },
};