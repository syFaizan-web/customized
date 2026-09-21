export type ProductCategory =
  | "Cards"
  | "Frames"
  | "Earrings"
  | "Anklets"
  | "Jewelry"
  | "Couple Gifts"
  | "Wedding Gifts"
  | "Custom Gifts";

export type Product = {
  id: number;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  startingPrice: number;
  badge: string;
  description: string;
  shortDescription: string;
  images: string[];
  colors: string[];
  customization: string[];
  tags: string[];
  featured: boolean;
  bestseller?: boolean;
  newArrival?: boolean;
};

export const categories = [
  "Cards",
  "Frames",
  "Earrings",
  "Anklets",
  "Jewelry",
  "Couple Gifts",
  "Wedding Gifts",
  "Custom Gifts",
] as const;

export const categoryHighlights = [
  { title: "Personalized Cards", slug: "cards", description: "Thoughtful keepsakes for birthdays, weddings, and milestones." },
  { title: "Handmade Frames", slug: "frames", description: "Photo-ready heirlooms with warm, artisanal finishes." },
  { title: "Earrings", slug: "earrings", description: "Lightweight handmade accents for everyday elegance." },
  { title: "Anklets", slug: "anklets", description: "Delicate statement pieces designed to be worn daily." },
  { title: "Personalized Jewelry", slug: "jewelry", description: "Monogrammed charms and name pendants with personal meaning." },
  { title: "Couple Gifts", slug: "couple-gifts", description: "Shared keepsakes crafted for love stories and celebrations." },
  { title: "Wedding Gifts", slug: "wedding-gifts", description: "Charm-filled wedding momentos and thoughtful keepsakes." },
  { title: "Custom Gifts", slug: "custom-gifts", description: "Made-to-order remembers for any meaningful occasion." },
] as const;

export const products: Product[] = [
  {
    id: 1,
    slug: "rose-gold-name-card",
    name: "Rose Gold Name Card",
    category: "Cards",
    price: 799,
    startingPrice: 799,
    badge: "Bestseller",
    description:
      "A refined personalized card featuring elegant script, warm floral detailing, and a premium finish for birthdays, anniversaries, or heartfelt appreciation.",
    shortDescription: "Elegant name card with custom details and premium floral accents.",
    images: [
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Ivory", "Blush", "Champagne", "Walnut"],
    customization: ["Names", "Dates", "Initials", "Color palette"],
    tags: ["custom card", "gift", "personalized"],
    featured: true,
    bestseller: true,
  },
  {
    id: 2,
    slug: "botanical-forever-frame",
    name: "Botanical Forever Frame",
    category: "Frames",
    price: 1499,
    startingPrice: 1499,
    badge: "New",
    description:
      "Handmade botanical frame designed for treasured portraits, wedding memories, or a custom quote with warm neutral tones and artisanal texture.",
    shortDescription: "Handmade keepsake frame with botanical detailing and custom personalization.",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Sand", "Olive", "Rust", "Taupe"],
    customization: ["Photo", "Names", "Dates", "Quote"],
    tags: ["frame", "home decor", "custom gift"],
    featured: true,
    newArrival: true,
  },
  {
    id: 3,
    slug: "pearl-bloom-earrings",
    name: "Pearl Bloom Earrings",
    category: "Earrings",
    price: 1299,
    startingPrice: 1299,
    badge: "Top Rated",
    description:
      "Minimal pearl and floral earrings handcrafted in soft metallic tones for a delicate finish that feels elevated and personal.",
    shortDescription: "Lightweight handcrafted earrings with soft floral details.",
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Gold", "Rose Gold", "Silver", "Oyster"],
    customization: ["Color finish", "Initial charm", "Size options"],
    tags: ["earrings", "handmade", "custom jewelry"],
    featured: true,
    bestseller: true,
  },
  {
    id: 4,
    slug: "moonlit-anklet",
    name: "Moonlit Anklet",
    category: "Anklets",
    price: 1099,
    startingPrice: 1099,
    badge: "Limited",
    description:
      "A warm, moon-toned anklet with subtle charm details and a soft finish designed for everyday elegance and gifting.",
    shortDescription: "Delicate anklet with a softly glowing handmade finish.",
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Champagne", "Pearl", "Gold", "Antique Silver"],
    customization: ["Length", "Charm details", "Color finish"],
    tags: ["anklet", "personalized jewelry", "gift"],
    featured: true,
  },
  {
    id: 5,
    slug: "initial-charm-necklace",
    name: "Initial Charm Necklace",
    category: "Jewelry",
    price: 1699,
    startingPrice: 1699,
    badge: "Custom",
    description:
      "A handcrafted necklace with initials, subtle detailing, and a refined silhouette that makes a meaningful everyday keepsake.",
    shortDescription: "Personalized charm necklace with initials and warm metallic accents.",
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Rose Gold", "Gold", "Silver", "Brass"],
    customization: ["Initials", "Metal", "Pendant size"],
    tags: ["necklace", "initials", "custom jewelry"],
    featured: true,
    bestseller: true,
  },
  {
    id: 6,
    slug: "sunrise-couple-engraving",
    name: "Sunrise Couple Engraving",
    category: "Couple Gifts",
    price: 1799,
    startingPrice: 1799,
    badge: "Loved",
    description:
      "A warm minimalist couple keepsake with names, a meaningful date, and a handcrafted finish for anniversaries and milestones.",
    shortDescription: "Custom couple gift with names, date, and warm handcrafted finish.",
    images: [
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Warm Beige", "Terracotta", "Sand", "Mocha"],
    customization: ["Names", "Dates", "Quote", "Colors"],
    tags: ["couple gift", "anniversary", "custom"],
    featured: true,
  },
  {
    id: 7,
    slug: "monogram-wedding-keepsake",
    name: "Monogram Wedding Keepsake",
    category: "Wedding Gifts",
    price: 1899,
    startingPrice: 1899,
    badge: "Bride Favorite",
    description:
      "An elegant wedding keepsake featuring initials and meaningful details, made to keep the celebration close long after the day ends.",
    shortDescription: "Wedding keepsake with monogram details and a timeless finish.",
    images: [
      "https://images.unsplash.com/photo-1521590832167-7e1c2d3d7f0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Ivory", "Cream", "Dusty Rose", "Nude"],
    customization: ["Initials", "Date", "Names", "Ribbon tone"],
    tags: ["wedding", "keepsake", "personalized"],
    featured: true,
  },
  {
    id: 8,
    slug: "birthday-gift-box",
    name: "Birthday Gift Box",
    category: "Custom Gifts",
    price: 2199,
    startingPrice: 2199,
    badge: "Signature",
    description:
      "A curated handmade birthday gift set with custom text, soft textures, and a premium feel designed for unforgettable celebrations.",
    shortDescription: "Curated birthday gift box with personalized details and premium styling.",
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Blush", "Cream", "Terracotta", "Soft Brown"],
    customization: ["Name", "Message", "Color theme", "Add-ons"],
    tags: ["birthday", "custom gift box", "handmade"],
    featured: true,
    newArrival: true,
  },
  {
    id: 9,
    slug: "anniversary-story-frame",
    name: "Anniversary Story Frame",
    category: "Frames",
    price: 1599,
    startingPrice: 1599,
    badge: "Giftable",
    description:
      "A story-led frame for anniversaries, capturing love notes, names, and timeline details in a warm handcrafted design.",
    shortDescription: "Anniversary keepsake frame with story details and photo placement.",
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Sand", "Dusty Green", "Champagne", "Rust"],
    customization: ["Photos", "Names", "Dates", "Story text"],
    tags: ["anniversary", "frame", "custom keepsake"],
    featured: false,
  },
  {
    id: 10,
    slug: "personalized-joy-board",
    name: "Personalized Joy Board",
    category: "Cards",
    price: 899,
    startingPrice: 899,
    badge: "Seasonal",
    description:
      "A cheerful wordboard made to celebrate life milestones and heartfelt moments with custom text and a handcrafted palette.",
    shortDescription: "Joyful personalized board for special words, family moments, and gifting.",
    images: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Warm White", "Terracotta", "Forest", "Honey"],
    customization: ["Text", "Initials", "Quote", "Date"],
    tags: ["card", "custom", "milestone"],
    featured: false,
  },
];

export const faqItems = [
  {
    question: "How do custom orders work?",
    answer: "Simply choose a product, share your customization details in WhatsApp, and we will confirm the design, materials, and price before production begins.",
  },
  {
    question: "Can I send reference images?",
    answer: "Absolutely. You can share inspiration photos, color references, and any design ideas through WhatsApp so we can match your vision.",
  },
  {
    question: "How long does a custom order take?",
    answer: "Most custom orders are prepared within a few days depending on the design complexity and current order volume.",
  },
  {
    question: "Do you offer gifting and wedding pieces?",
    answer: "Yes. We create personalized wedding gifts, couple keepsakes, anniversary pieces, and custom gifting options for meaningful occasions.",
  },
  {
    question: "Can I request a completely new design?",
    answer: "Yes. If you have a specific idea in mind, we can work with you to build a personalized design tailored to your story and occasion.",
  },
];

export const featuredProducts = products.filter((product) => product.featured).slice(0, 8);
export const bestsellers = products.filter((product) => product.bestseller).slice(0, 4);
export const newArrivals = products.filter((product) => product.newArrival).slice(0, 4);

export const whatsappLink = (message: string) => {
  const base = "https://wa.me/919876543210";
  const encoded = encodeURIComponent(message);
  return `${base}?text=${encoded}`;
};
