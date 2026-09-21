import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const shippingDetails = [
  ["Processing time", "Orders are prepared after the design and details are confirmed. Personalized pieces may need additional preparation time."],
  ["Delivery updates", "Once your order is ready to ship, you will receive the available delivery details through the contact method used for your order."],
  ["Delivery address", "Please provide a complete and accurate address, including a reachable phone number. Address changes may not be possible after dispatch."],
  ["Custom orders", "Timelines can vary based on customization, materials, order volume, and destination. We will share an estimated timeline before production begins."],
];

export default function ShippingPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="mb-10 rounded-[32px] border border-[#eadbc7] bg-[#f6efe8] px-6 py-10 text-center sm:px-10">
          <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[#7b6257]">Helpful details</p>
          <h1 className="font-serif text-4xl text-[#2d2724] sm:text-5xl">Shipping information</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5f4d45]">
            We prepare every order with care and share the expected timeline before your personalized piece is made.
          </p>
        </section>
        <div className="grid gap-4 sm:grid-cols-2">
          {shippingDetails.map(([title, description]) => (
            <section key={title} className="rounded-[24px] border border-[#eadcc7] bg-[#fffaf5] p-6">
              <h2 className="font-serif text-2xl text-[#2d2724]">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#5f4d45]">{description}</p>
            </section>
          ))}
        </div>
        <div className="mt-8 rounded-[24px] border border-[#e7d5c1] bg-[#f7f0ea] p-6 text-center">
          <p className="text-sm leading-7 text-[#5f4d45]">Need an update about an order? Contact us before placing a new order so we can help with the latest details.</p>
          <Link href="/faq" className="mt-4 inline-flex rounded-full border border-[#d8c3b0] bg-white px-5 py-3 text-sm font-medium text-[#2d2724] hover:bg-[#f5eadf]">Read FAQs</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
