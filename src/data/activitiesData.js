/*
--------------------------------------------------
ACTIVITIES DATA
--------------------------------------------------
One object per activity, keyed by its slug (the part
of the URL after /activity/). ActivityDetail.jsx reads
this file and renders the same layout for whichever
slug is in the URL.

To add a brand-new activity in the future:
1. Add a new entry below with a unique slug key.
2. Add a matching card to activities[] in Activity.jsx
   with href: "/activity/your-new-slug".
That's it — no new page or component needed.
--------------------------------------------------
*/

export const activitiesData = {
  "snorkeling-diving": {
    title: "Snorkeling & diving",
    heroImage:
      "https://framerusercontent.com/images/6EIi6F5gjj9wxExArDL0ioBtYFk.jpg",
    description:
      "Immerse yourself in a world of wonder with our snorkeling and diving experiences. Explore vibrant coral reefs, swim alongside exotic marine life, and discover the breathtaking beauty hidden beneath the waves. Perfect for beginners and experts alike, this adventure will leave you with unforgettable memories.",
    tips: [
      {
        label: "Stay Hydrated",
        text: "Drink plenty of water before and after your dive to avoid dehydration.",
      },
      {
        label: "Apply Sunscreen",
        text: "Use reef-safe sunscreen to protect your skin and the marine environment.",
      },
      {
        label: "Observe Without Touching",
        text: "Admire coral and marine creatures without disturbing them.",
      },
      {
        label: "Use a Life Vest",
        text: "If you're a beginner, a life vest adds safety and comfort.",
      },
      {
        label: "Equalize Pressure",
        text: "Regularly equalize your ears as you descend to prevent discomfort.",
      },
      {
        label: "Stay with Your Buddy",
        text: "Always dive with a partner for safety.",
      },
    ],
    gallery: [
      "https://source.unsplash.com/800x1000/?snorkeling,ocean",
      "https://source.unsplash.com/800x1000/?scuba,diving",
      "https://source.unsplash.com/800x1000/?coral,reef",
    ],
  },

  "outdoor-adventures": {
    title: "Outdoor adventures",
    heroImage:
      "https://framerusercontent.com/images/oMA6rge3jPefW6S9JjyhyoUDJM.jpg",
    description:
      "Step into the wild and discover adrenaline-fueled adventures just beyond the villa. From scenic hiking trails to zip-lining through the canopy, every outing is designed to get your heart racing while surrounded by breathtaking natural beauty. Whether you're a thrill-seeker or a casual explorer, there's an adventure waiting for you.",
    tips: [
      {
        label: "Wear Proper Footwear",
        text: "Sturdy, closed-toe shoes keep you safe on uneven terrain.",
      },
      {
        label: "Stay Hydrated",
        text: "Carry water on longer trails, especially in warmer months.",
      },
      {
        label: "Check the Weather",
        text: "Conditions can change quickly outdoors, so plan ahead.",
      },
      {
        label: "Bring a Guide",
        text: "Local guides know the safest and most scenic routes.",
      },
      {
        label: "Pack Light",
        text: "A small daypack with essentials is all you need.",
      },
      {
        label: "Respect Wildlife",
        text: "Keep a safe distance from any animals you encounter.",
      },
    ],
    gallery: [
      "https://source.unsplash.com/800x1000/?hiking,trail",
      "https://source.unsplash.com/800x1000/?ziplining,forest",
      "https://source.unsplash.com/800x1000/?adventure,mountain",
    ],
  },

  "wellness-spas": {
    title: "Wellness & spas",
    heroImage:
      "https://framerusercontent.com/images/FLPtebCA02AfgwzIKDRjEW25ebo.jpg",
    description:
      "Unwind completely with a curated selection of spa treatments and wellness rituals designed to restore mind and body. From soothing massages to rejuvenating facials, our spa experiences blend traditional techniques with modern comfort, all set against a backdrop of total tranquility.",
    tips: [
      {
        label: "Arrive Early",
        text: "Give yourself time to relax before your treatment begins.",
      },
      {
        label: "Stay Hydrated",
        text: "Drink water before and after your session to aid recovery.",
      },
      {
        label: "Communicate Preferences",
        text: "Let your therapist know your comfort level and pressure preference.",
      },
      {
        label: "Unplug",
        text: "Leave devices behind to fully disconnect during your session.",
      },
      {
        label: "Book in Advance",
        text: "Popular time slots fill up quickly.",
      },
      {
        label: "Extend the Calm",
        text: "Pair your treatment with a quiet moment by the pool afterward.",
      },
    ],
    gallery: [
      "https://source.unsplash.com/800x1000/?spa,massage",
      "https://source.unsplash.com/800x1000/?wellness,relax",
      "https://source.unsplash.com/800x1000/?spa,candles",
    ],
  },

  "shopping-dining": {
    title: "Shopping & dining",
    heroImage:
      "https://framerusercontent.com/images/T6GB0GXPx4wrN4L9aCtR13iYUA.jpg",
    description:
      "Explore the vibrant markets, boutique stores, and celebrated restaurants that surround the villa. Whether you're hunting for artisan crafts or seeking an unforgettable culinary experience, the local shopping and dining scene offers something for every taste and occasion.",
    tips: [
      {
        label: "Go Early",
        text: "Markets are quieter and cooler in the morning.",
      },
      {
        label: "Try Local Specialties",
        text: "Ask restaurant staff for their signature dishes.",
      },
      {
        label: "Carry Cash",
        text: "Smaller boutiques and stalls may not accept cards.",
      },
      {
        label: "Reserve Ahead",
        text: "Popular restaurants can book out fast, especially on weekends.",
      },
      {
        label: "Bargain Politely",
        text: "Light negotiation is welcomed in most local markets.",
      },
      {
        label: "Bring a Tote Bag",
        text: "Handy for carrying home any treasures you find.",
      },
    ],
    gallery: [
      "https://source.unsplash.com/800x1000/?market,shopping",
      "https://source.unsplash.com/800x1000/?restaurant,dining",
      "https://source.unsplash.com/800x1000/?boutique,store",
    ],
  },

  "cultural-landmarks": {
    title: "Cultural landmarks",
    heroImage:
      "https://framerusercontent.com/images/fNFOmMViVQ81WNJggmQ1qYs7Rg.jpg",
    description:
      "Step back in time and explore the rich history and culture surrounding the villa. From centuries-old temples to charming heritage sites, each landmark tells a story worth discovering, offering a deeper connection to the destination beyond its natural beauty.",
    tips: [
      {
        label: "Dress Respectfully",
        text: "Many sites request modest clothing for entry.",
      },
      {
        label: "Hire a Local Guide",
        text: "Guides offer context and stories you won't find in guidebooks.",
      },
      {
        label: "Visit Early or Late",
        text: "Avoid crowds and the harsh midday sun.",
      },
      {
        label: "Check Opening Hours",
        text: "Some sites close for religious observances or maintenance.",
      },
      {
        label: "Photograph Mindfully",
        text: "Some landmarks restrict photography in certain areas.",
      },
      {
        label: "Bring Small Change",
        text: "Entry fees and donations are often cash-only.",
      },
    ],
    gallery: [
      "https://source.unsplash.com/800x1000/?temple,heritage",
      "https://source.unsplash.com/800x1000/?historic,landmark",
      "https://source.unsplash.com/800x1000/?architecture,culture",
    ],
  },

  "sunset-cruises": {
    title: "Sunset cruises",
    heroImage:
      "https://framerusercontent.com/images/ZH40O4EB5UwsltVxgNdgFyIdlU.jpg",
    description:
      "Set sail as the sky turns gold and glide across calm waters on a private sunset cruise. With panoramic coastal views and a peaceful breeze, it's the perfect way to end the day, whether you're celebrating a special occasion or simply soaking in the moment.",
    tips: [
      {
        label: "Arrive Ahead of Time",
        text: "Boarding usually begins shortly before departure.",
      },
      {
        label: "Dress in Layers",
        text: "It can get breezy once the boat is moving.",
      },
      {
        label: "Bring a Camera",
        text: "Sunset views over the water are unforgettable.",
      },
      {
        label: "Check Seasickness Remedies",
        text: "If you're sensitive, come prepared.",
      },
      {
        label: "Reserve in Advance",
        text: "Sunset slots are limited and popular.",
      },
      {
        label: "Stay Seated While Moving",
        text: "For safety while the boat is underway.",
      },
    ],
    gallery: [
      "https://source.unsplash.com/800x1000/?sunset,cruise",
      "https://source.unsplash.com/800x1000/?sailboat,ocean",
      "https://source.unsplash.com/800x1000/?sunset,sea",
    ],
  },
};