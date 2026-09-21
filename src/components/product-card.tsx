"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { ImageWithFallback } from "@/components/image-with-fallback";
import type { Product } from "@/data/products";
import { whatsappLink } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  const productHref = `/products/${product.slug}`;

  const openProduct = () => {
    router.push(productHref);
  };

  return (
    <article
      role="link"
      tabIndex={0}
      onClick={openProduct}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openProduct();
        }
      }}
      aria-label={`View details for ${product.name}`}
      className="group cursor-pointer overflow-hidden rounded-[28px] border border-[#e6d8c7] bg-[#fffdf9] transition duration-300 hover:-translate-y-1 hover:border-[#d9c0a8] hover:shadow-[0_18px_40px_rgba(89,68,55,0.08)] focus:outline-none focus:ring-2 focus:ring-[#b8835c] focus:ring-offset-2"
    >
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={product.images[0]}
          alt={product.name}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/80 bg-[#fffaf5]/85 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#5a463d] backdrop-blur-sm">
          {product.badge}
        </span>
      </div>

      <div className="space-y-3 p-4 sm:space-y-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-[9px] uppercase tracking-[0.14em] text-[#7a6258] sm:text-[10px] sm:tracking-[0.16em]">
          <span>{product.category}</span>
          <span className="max-w-[48%] truncate">{product.tags[0]}</span>
        </div>

        <div>
          <h3 className="line-clamp-2 text-lg font-semibold leading-tight text-[#2d2724] sm:text-xl">
            <Link href={`/products/${product.slug}`} className="transition hover:text-[#a86f4a]">
              {product.name}
            </Link>
          </h3>
          <p className="mt-2 line-clamp-2 text-[13px] leading-5 text-[#62574f] sm:text-sm sm:leading-6">{product.shortDescription}</p>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-[#eee1d4] pt-4">
          <div className="min-w-0">
            <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#8a6e5f]">Starting price</p>
            <p className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-[#2b2927] sm:text-[26px]">PKR {product.price.toLocaleString("en-PK")}</p>
          </div>
          <a
            href={whatsappLink(`Hi, I want to ask about ${product.name}.`)}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_18px_rgba(37,211,102,0.22)] transition hover:bg-[#1ebe5d] hover:shadow-[0_10px_22px_rgba(37,211,102,0.32)]"
            aria-label={`Order ${product.name} on WhatsApp`}
            title="Ask about this product on WhatsApp"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.1-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.52.075-.792.372-.272.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347M12.004 2C6.478 2 1.98 6.477 1.98 12c0 1.77.465 3.43 1.276 4.87L2 22l5.25-1.235A10.02 10.02 0 0 0 12.004 22C17.53 22 22 17.523 22 12S17.53 2 12.004 2m0 18.29a8.25 8.25 0 0 1-4.21-1.153l-.3-.178-3.115.733.741-3.037-.195-.312A8.25 8.25 0 1 1 12.004 20.29" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
