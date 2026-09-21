import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const returnDetails = [
  ["Personalized items", "Because personalized pieces are made specifically for you, they are generally not eligible for return due to a change of mind."],
  ["Issue with an order", "If your order arrives damaged, incorrect, or different from the confirmed details, contact us promptly with your order information and clear photos."],
  ["Review process", "We review each concern and share the most suitable next step, which may include a correction, replacement, or another available resolution."],
  ["Before production", "Please review names, dates, colors, sizes, and other details carefully when confirming your design. We will clarify questions before production begins."],
];

export default function ReturnsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="mb-10 rounded-[32px] border border-[#eadbc7] bg-[#f6efe8] px-6 py-10 text-center sm:px-10">
          <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[#7b6257]">Made to order</p>
          <h1 className="font-serif text-4xl text-[#2d2724] sm:text-5xl">Return policy</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5f4d45]">
            Our policy is designed to keep custom orders clear, fair, and easy to resolve when something does not go as expected.
          </p>
        </section>
        <div className="grid gap-4 sm:grid-cols-2">
          {returnDetails.map(([title, description]) => (
            <section key={title} className="rounded-[24px] border border-[#eadcc7] bg-[#fffaf5] p-6">
              <h2 className="font-serif text-2xl text-[#2d2724]">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#5f4d45]">{description}</p>
            </section>
          ))}
        </div>
        <div className="mt-8 rounded-[24px] border border-[#e7d5c1] bg-[#f7f0ea] p-6 text-center">
          <p className="text-sm leading-7 text-[#5f4d45]">Have a question about a specific order? Share the details with us and we will guide you through the next step.</p>
          <Link href="/faq" className="mt-4 inline-flex rounded-full border border-[#d8c3b0] bg-white px-5 py-3 text-sm font-medium text-[#2d2724] hover:bg-[#f5eadf]">Visit FAQs</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
