"use client";

import Link from "next/link";
import { MapPin, MessageCircleMore, Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#ecdfd2] bg-[#f8f3ed]/95 backdrop-blur-md">
      <div className="overflow-hidden bg-[#2d2724] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#f8eee5]">
        <div className="announcement-track flex min-w-max gap-16 whitespace-nowrap">
          <span>Complimentary design consultation on every custom order</span>
          <span aria-hidden="true">Complimentary design consultation on every custom order</span>
          <span aria-hidden="true">Complimentary design consultation on every custom order</span>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f2e4d7] text-lg font-semibold text-[#2d2724]">
            H
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#7f685d]">Personalized</div>
            <div className="text-base font-semibold text-[#2d2724]">Faiz Studio</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#534b48] transition hover:text-[#2d2724]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e7d5c2] bg-[#f7f0ea] px-3 py-2 text-xs font-medium text-[#5e4d45]">
            <MapPin size={14} />
            Custom orders worldwide
          </div>
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20customize%20a%20handmade%20piece."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#1ebe5d]"
          >
            <MessageCircleMore size={16} />
            Customize on WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open navigation menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e0c9b2] bg-[#f8f1ea] text-[#2d2724] md:hidden"
        >
          <Menu size={18} />
        </button>
      </div>
      {menuOpen && (
        <nav className="border-t border-[#ecdfd2] bg-[#f8f3ed] px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-[#534b48] hover:bg-[#f1e4d8]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20customize%20a%20handmade%20piece."
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#1ebe5d]"
            >
              <MessageCircleMore size={16} />
              Customize on WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
