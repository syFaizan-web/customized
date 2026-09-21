import Link from "next/link";
import { ArrowRight, BrushCleaning, Gift, HeartHandshake, MessageCircleMore, Sparkles, Star, Wand2 } from "lucide-react";

import { ProductCard } from "@/components/product-card";
import { InstagramGallery } from "@/components/instagram-gallery";
import { FaqList } from "@/components/faq-list";
import { HeroSection } from "@/components/hero-section";
import { ScrollToHero } from "@/components/scroll-to-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { bestsellers, categoryHighlights, faqItems, featuredProducts, newArrivals, whatsappLink } from "@/data/products";

const benefits = [
  { icon: Sparkles, title: "Handmade with care", description: "Thoughtfully crafted in small batches with attention to detail." },
  { icon: Wand2, title: "Personalized for you", description: "Names, dates, initials, and custom details in each design." },
  { icon: Gift, title: "Unique designs", description: "Made to feel personal, special, and distinctly yours." },
  { icon: BrushCleaning, title: "Easy customization", description: "Share your preference and we’ll shape the design together." },
  { icon: HeartHandshake, title: "Direct WhatsApp support", description: "We stay in touch from the first idea to final confirmation." },
];

const paymentMethods = [
  { name: "easypaisa", detail: "Quick mobile wallet payments", logo: "/payment/easypaisa.png" },
  { name: "JazzCash", detail: "Pay securely from your wallet", logo: "/payment/jazzcash.png" },
  { name: "Meezan Bank", detail: "Direct bank transfer", logo: "/payment/meezan-bank.png" },
  { name: "Other Banks", detail: "Bank transfer available" },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
];

const testimonials = [
  {
    name: "Riya & Arjun",
    text: "The handcrafted keepsake felt truly personal. We loved how easy it was to share our names, date, and colors on WhatsApp.",
  },
  {
    name: "Neha Verma",
    text: "Our anniversary frame looked even more beautiful in person. The custom detailing made it feel beautifully unique.",
  },
  {
    name: "Aditi Shah",
    text: "The design process was intuitive and responsive. Every detail felt thoughtful, and the final piece was exactly what we wanted.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />

        <section className="bg-[#f4ece5] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#7b6257]">Featured products</p>
                <h2 className="font-serif text-3xl text-[#2d2724] sm:text-4xl">Designs loved for meaningful gifting</h2>
              </div>
              <Link href="/shop" className="hidden text-sm font-medium text-[#2d2724] sm:inline-flex sm:items-center sm:gap-2">
                View all <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-6">
            <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-[#7b6257]">Why choose us</p>
            <h2 className="font-serif text-3xl text-[#2d2724] sm:text-4xl">Crafted with intention and personal care</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 xl:grid-cols-5">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-[20px] border border-[#eadcc7] bg-[#fffaf6] p-3 sm:p-4 lg:p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#f2e5d9] text-[#b8835c] sm:mb-4 sm:h-11 sm:w-11">
                  <Icon size={16} />
                </div>
                <h3 className="text-sm font-semibold leading-5 text-[#2d2724] sm:text-base">{title}</h3>
                <p className="mt-1.5 text-xs leading-5 text-[#645750] sm:mt-2 sm:text-sm sm:leading-6">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#7b6257]">Shop by category</p>
              <h2 className="font-serif text-3xl text-[#2d2724] sm:text-4xl">Curated for your moments</h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {categoryHighlights.map((category) => (
              <Link
                key={category.title}
                href={`/shop?category=${category.slug}`}
                className="group rounded-[26px] border border-[#eadbc7] bg-[#fffaf6] p-5 transition hover:-translate-y-1 hover:border-[#d8bca0] hover:shadow-[0_18px_40px_rgba(89,68,55,0.06)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f2e5d9] text-[#b8835c]">
                  <Star size={18} />
                </div>
                <h3 className="text-xl font-semibold text-[#2d2724]">{category.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#645750]">{category.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#2d2724]">
                  Discover now
                  <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-[#eee8e2] bg-[#faf9f7] py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#c18a2a]">Easy &amp; secure</p>
              <h2 className="font-serif text-4xl text-[#1f2b39] sm:text-5xl">Payment Options</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6b625c] sm:text-lg">
                Choose the payment method that works best for you. Details are confirmed securely on WhatsApp after your order.
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="flex min-h-[136px] flex-col items-center justify-center rounded-xl border border-[#e8e3de] bg-white px-5 py-5 text-center transition hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(89,68,55,0.08)]"
                >
                  {method.logo ? (
                    <div className="flex h-12 w-24 items-center justify-center">
                      <img src={method.logo} alt={`${method.name} logo`} className="max-h-full max-w-full object-contain" />
                    </div>
                  ) : (
                    <p className="text-xl font-semibold text-[#1f2b39]">{method.name}</p>
                  )}
                  <p className={`${method.logo ? "mt-4" : "mt-3"} text-base text-[#6b625c]`}>{method.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-[#eadcc7] bg-[#f6efe8] px-6 py-10 sm:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#7b6257]">Customization</p>
                <h2 className="font-serif text-3xl text-[#2d2724] sm:text-4xl">Bring your vision to life</h2>
              </div>
              <div>
                <p className="text-base leading-7 text-[#5f4d45]">
                  Share names, dates, initials, quotes, colors, designs, sizes, materials, reference images, and any special notes you have in mind. <span className="font-semibold text-[#2d2724]">Have something specific in mind? Let’s create it together.</span>
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a href={whatsappLink("Hi, I want to customize a handmade product with specific details and reference ideas.")} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1ebe5d]">
                    <MessageCircleMore size={16} />
                    Start on WhatsApp
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {[
                "Names",
                "Dates",
                "Initials",
                "Quotes",
                "Colors",
                "Designs",
                "Sizes",
                "Materials",
                "Reference images",
                "Special notes",
              ].map((item) => (
                <div key={item} className="rounded-[18px] border border-[#ecdcc7] bg-white/60 px-3 py-3 text-sm text-[#554b47]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#7b6257]">Best sellers</p>
              <h2 className="font-serif text-3xl text-[#2d2724] sm:text-4xl">Popular picks</h2>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#7b6257]">New arrivals</p>
              <h2 className="font-serif text-3xl text-[#2d2724] sm:text-4xl">Fresh finds</h2>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="bg-[#f5efe9] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#7b6257]">Instagram-inspired gallery</p>
                <h2 className="font-serif text-3xl text-[#2d2724] sm:text-4xl">Follow us on Instagram</h2>
              </div>
            </div>
            <InstagramGallery images={galleryImages} />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#7b6257]">Social proof</p>
            <h2 className="font-serif text-3xl text-[#2d2724] sm:text-4xl">Thoughtful pieces, meaningful experiences</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#5f4d45]">A few words from customers who made their moments personal with a custom piece.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-[26px] border border-[#eadcc7] bg-[#fffaf6] p-6">
                <div className="mb-4 flex gap-1 text-[#b8835c]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={`${testimonial.name}-${index}`} size={15} className="fill-current" />
                  ))}
                </div>
                <p className="text-base leading-7 text-[#5a4d48]">“{testimonial.text}”</p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#2d2724]">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#7b6257]">FAQ preview</p>
            <h2 className="font-serif text-3xl text-[#2d2724] sm:text-4xl">Questions we get often</h2>
          </div>
          <FaqList items={faqItems.slice(0, 5)} />
          <div className="mt-6">
            <Link href="/faq" className="inline-flex items-center gap-2 text-sm font-medium text-[#2d2724]">
              View all FAQs <ArrowRight size={15} />
            </Link>
          </div>
        </section>

        <section className="bg-[#f4ece5] py-16">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#7b6257]">Made for your moment</p>
            <h2 className="font-serif text-4xl text-[#2d2724] sm:text-5xl">Tell us what you have in mind.</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#5f4d45]">
              Share your occasion, idea, color palette, names, or reference photos and we’ll help design the perfect personalized piece.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={whatsappLink("Hi, I have a custom idea and would love to discuss it. Please help me design something handmade for my occasion.")} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#1ebe5d]">
                <MessageCircleMore size={16} />
                WhatsApp us now
              </a>
              <Link href="/shop" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d8c3b0] bg-white px-6 py-3.5 text-sm font-medium text-[#2d2724] transition hover:bg-[#f5eadf]">
                Browse collection
              </Link>
            </div>
          </div>
        </section>
      </main>
      <ScrollToHero />
      <SiteFooter />
    </>
  );
}
