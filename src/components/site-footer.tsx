import Link from "next/link";
import { Camera, MapPin, MessageCircleMore, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#ebdfd5] bg-[#f5eee8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr_1.1fr] lg:px-8">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#efe0d1] text-lg font-semibold text-[#2d2724]">
              H
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#7f685d]">Personalized</div>
              <div className="text-base font-semibold text-[#2d2724]">Faiz Studio</div>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#62574f]">
            Handmade products made for meaningful moments, personalized with care and designed to be treasured for years.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#5a463d]">Explore</h3>
          <ul className="space-y-3 text-sm text-[#62574f]">
            <li><Link href="/shop" className="hover:text-[#2d2724]">Shop</Link></li>
            <li><Link href="/faq" className="hover:text-[#2d2724]">FAQ</Link></li>
            <li><a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="hover:text-[#2d2724]">Customize</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#5a463d]">Categories</h3>
          <ul className="space-y-3 text-sm text-[#62574f]">
            <li>Personalized Cards</li>
            <li>Handmade Frames</li>
            <li>Earrings & Anklets</li>
            <li>Wedding & Couple Gifts</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#5a463d]">Contact</h3>
          <ul className="space-y-3 text-sm text-[#62574f]">
            <li className="flex items-center gap-2"><MapPin size={14} /> Jaipur, India</li>
            <li className="flex items-center gap-2"><Phone size={14} /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Camera size={14} /> @faizstudiohandmade</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#ebdfd5]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-sm text-[#62574f] sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 Faiz Studio. Crafted with intention.</p>
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20have%20a%20custom%20idea%20for%20a%20handmade%20piece."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-white transition hover:bg-[#1ebe5d]"
          >
            <MessageCircleMore size={15} />
            WhatsApp us
          </a>
        </div>
      </div>
    </footer>
  );
}
