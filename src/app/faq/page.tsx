import Link from "next/link";

import { FaqList } from "@/components/faq-list";
import { faqItems, whatsappLink } from "@/data/products";

export default function FaqPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="mb-10 rounded-[32px] border border-[#eadbc7] bg-[#f6efe8] px-6 py-10 text-center sm:px-10">
        <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[#7b6257]">Need help?</p>
        <h1 className="font-serif text-4xl text-[#2d2724] sm:text-5xl">Frequently asked questions</h1>
      </section>

      <FaqList items={faqItems} />

      <div className="mt-10 rounded-[30px] border border-[#e7d5c1] bg-[#f7f0ea] px-6 py-8 text-center">
        <h2 className="font-serif text-3xl text-[#2d2724]">Can’t find what you’re looking for?</h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-[#5f4d45]">
          Share your idea, occasion, and customization details on WhatsApp and we’ll help you plan the perfect handmade piece.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink("Hi, I have a custom handmade idea and would like to discuss it with you.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1ebe5d]"
          >
            Talk on WhatsApp
          </a>
          <Link href="/shop" className="inline-flex items-center justify-center rounded-full border border-[#d8c3b0] bg-white px-5 py-3 text-sm font-medium text-[#2d2724] transition hover:bg-[#f5eadf]">
            Explore collection
          </Link>
        </div>
      </div>
    </main>
  );
}
