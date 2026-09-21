"use client";

import { use, useMemo, useState } from "react";
import { ArrowLeft, Check, Heart, MessageCircleMore, Minus, Plus, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";

import { ProductCard } from "@/components/product-card";
import { ImageWithFallback } from "@/components/image-with-fallback";
import { products, whatsappLink } from "@/data/products";

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const resolvedProduct = products.find((product) => product.slug === slug) ?? products[0];
  const [selectedImage, setSelectedImage] = useState(resolvedProduct.images[0]);
  const [quantity, setQuantity] = useState(1);

  const relatedProducts = useMemo(
    () => products.filter((product) => product.category === resolvedProduct.category && product.slug !== resolvedProduct.slug).slice(0, 3),
    [resolvedProduct],
  );

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/shop" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#5e4d45] transition hover:text-[#2d2724]">
        <ArrowLeft size={16} />
        Back to shop
      </Link>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[30px] border border-[#eadcc6] bg-[#fffaf5] p-3">
            <ImageWithFallback
              src={selectedImage}
              alt={resolvedProduct.name}
              className="h-[420px] w-full rounded-[22px] object-cover sm:h-[520px]"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {resolvedProduct.images.map((image) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedImage(image)}
                className={`overflow-hidden rounded-[18px] border ${
                  selectedImage === image ? "border-[#b8835c]" : "border-[#ebdccb]"
                } bg-[#fffaf5] p-2`}
              >
                <ImageWithFallback src={image} alt="Thumbnail" className="h-24 w-full rounded-[12px] object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-[#e7d4bf] bg-[#f8efe8] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#6a5248]">
              {resolvedProduct.badge}
            </span>
            <h1 className="font-serif text-4xl text-[#2d2724] sm:text-5xl">{resolvedProduct.name}</h1>
            <p className="text-base leading-7 text-[#62574f]">{resolvedProduct.description}</p>
          </div>

          <div className="flex items-center gap-3 rounded-[20px] border border-[#ecdcc7] bg-[#fffaf5] p-4">
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#817065]">Starting at</div>
              <div className="mt-1 text-3xl font-semibold text-[#2d2724]">₹{resolvedProduct.price}</div>
            </div>
            <div className="ml-auto flex items-center gap-2 rounded-full bg-[#f2e5d9] px-3 py-1.5 text-sm text-[#5f4d45]">
              <Star size={14} className="fill-[#b8835c] text-[#b8835c]" />
              Handmade premium finish
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[20px] border border-[#eadcc7] bg-[#fffaf5] p-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#88756c]">Category</p>
              <p className="mt-2 text-lg font-semibold text-[#2d2724]">{resolvedProduct.category}</p>
            </div>
            <div className="rounded-[20px] border border-[#eadcc7] bg-[#fffaf5] p-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#88756c]">Availability</p>
              <p className="mt-2 text-lg font-semibold text-[#2d2724]">Made to order</p>
            </div>
          </div>

          <div className="rounded-[24px] border border-[#eadcc7] bg-[#fffaf5] p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[#2d2724]">Customization</h2>
              <Heart size={18} className="text-[#b8835c]" />
            </div>
            <ul className="grid gap-3 text-sm text-[#5c4a45]">
              {resolvedProduct.customization.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check size={15} className="text-[#b8835c]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center rounded-full border border-[#e7d9ca] bg-[#f7efe8] p-1">
              <button
                type="button"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                className="flex h-10 w-10 items-center justify-center text-[#2d2724]"
              >
                <Minus size={16} />
              </button>
              <span className="min-w-10 text-center text-base font-medium text-[#2d2724]">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                className="flex h-10 w-10 items-center justify-center text-[#2d2724]"
              >
                <Plus size={16} />
              </button>
            </div>

            <a
              href={whatsappLink(`Hi, I want to order ${resolvedProduct.name} in quantity ${quantity}. Please share customization details.`)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-medium text-white transition hover:bg-[#1ebe5d]"
            >
              <MessageCircleMore size={17} />
              Customise on WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm text-[#5f4d45]">
            <ShieldCheck size={16} className="text-[#b8835c]" />
            Secure your design with direct WhatsApp consultation before final confirmation.
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-serif text-3xl text-[#2d2724]">You may also like</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
