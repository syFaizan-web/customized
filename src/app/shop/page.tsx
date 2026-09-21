"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpDown, Search, SlidersHorizontal } from "lucide-react";

import { ProductCard } from "@/components/product-card";
import { categories, products } from "@/data/products";

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "low-high" },
  { label: "Price: High to Low", value: "high-low" },
  { label: "Name A-Z", value: "name" },
] as const;

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState<(typeof sortOptions)[number]["value"]>("featured");
  const [priceRange, setPriceRange] = useState("all");

  useEffect(() => {
    const categorySlug = new URLSearchParams(window.location.search).get("category");
    if (!categorySlug) return;

    const matchingCategory = categories.find(
      (category) => category.toLowerCase().replaceAll(" ", "-") === categorySlug.toLowerCase(),
    );
    if (matchingCategory) setSelectedCategory(matchingCategory);
  }, []);

  const filteredProducts = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();

    let nextProducts = products.filter((product) => {
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.tags.some((tag) => tag.toLowerCase().includes(q));

      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesPrice =
        priceRange === "all" ||
        (priceRange === "under-1000" && product.price < 1000) ||
        (priceRange === "1000-2000" && product.price >= 1000 && product.price <= 2000) ||
        (priceRange === "2000-plus" && product.price > 2000);

      return matchesSearch && matchesCategory && matchesPrice;
    });

    nextProducts = [...nextProducts].sort((a, b) => {
      switch (sortBy) {
        case "low-high":
          return a.price - b.price;
        case "high-low":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return Number(b.featured) - Number(a.featured);
      }
    });

    return nextProducts;
  }, [searchTerm, selectedCategory, sortBy, priceRange]);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="mb-10 rounded-[32px] border border-[#eadbc7] bg-[#f6efe8] px-5 py-8 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[#7b6257]">Curated collection</p>
            <h1 className="font-serif text-4xl text-[#2b2724] sm:text-5xl">Shop handmade pieces</h1>
          </div>
          <div className="rounded-full border border-[#ead9c5] bg-white px-4 py-2 text-sm text-[#5f4d45]">
            {filteredProducts.length} items available
          </div>
        </div>
      </section>

      <section className="mb-10 grid gap-4 lg:grid-cols-[1.5fr_0.85fr_0.65fr]">
        <label className="flex items-center gap-3 rounded-full border border-[#e8d7c3] bg-[#fffaf5] px-4 py-3 text-[#564b47] shadow-sm">
          <Search size={18} className="text-[#7b6257]" />
          <input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search by product, tag, or category"
            className="w-full bg-transparent text-sm outline-none placeholder:text-[#8b7970]"
          />
        </label>

        <label className="flex items-center gap-3 rounded-full border border-[#e8d7c3] bg-[#fffaf5] px-4 py-3 text-[#564b47] shadow-sm">
          <SlidersHorizontal size={17} className="text-[#7b6257]" />
          <select
            value={priceRange}
            onChange={(event) => setPriceRange(event.target.value)}
            className="w-full bg-transparent text-sm outline-none"
          >
            <option value="all">All prices</option>
            <option value="under-1000">Under PKR 1,000</option>
            <option value="1000-2000">PKR 1,000 - PKR 2,000</option>
            <option value="2000-plus">PKR 2,000+</option>
          </select>
        </label>

        <label className="flex items-center gap-3 rounded-full border border-[#e8d7c3] bg-[#fffaf5] px-4 py-3 text-[#564b47] shadow-sm">
          <ArrowUpDown size={16} className="text-[#7b6257]" />
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as (typeof sortOptions)[number]["value"])}
            className="w-full bg-transparent text-sm outline-none"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </section>

      <div className="mb-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setSelectedCategory("All")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            selectedCategory === "All"
              ? "bg-[#b8835c] text-white"
              : "border border-[#e3cab3] bg-[#fffaf5] text-[#524a45]"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              selectedCategory === category
                ? "bg-[#b8835c] text-white"
                : "border border-[#e3cab3] bg-[#fffaf5] text-[#524a45]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-[28px] border border-dashed border-[#d7c0aa] bg-[#fffaf4] px-6 py-12 text-center text-[#5f4d45]">
          No products match your filters. Try a broader search or different category.
        </div>
      )}
    </main>
  );
}
