"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHero = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      type="button"
      onClick={scrollToHero}
      aria-label="Scroll back to hero section"
      className={`fixed bottom-6 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-[#d8bca0] bg-[#fffaf6]/95 text-[#2d2724] shadow-[0_10px_24px_rgba(89,68,55,0.16)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#b8835c] focus:ring-offset-2 sm:bottom-8 sm:right-8 ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp size={18} />
    </button>
  );
}
