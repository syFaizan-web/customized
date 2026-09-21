"use client";

import { motion, MotionConfig } from "framer-motion";

import { ImageWithFallback } from "@/components/image-with-fallback";

export function HeroSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="hero" className="relative scroll-mt-24 overflow-hidden bg-[#f7f1ea]">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(184,131,92,0.12),_transparent_40%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <motion.div
            className="flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="mb-5 text-[11px] uppercase tracking-[0.22em] text-[#7b6257]">Handmade customs for meaningful moments</p>
            <h1 className="max-w-xl font-serif text-5xl leading-[1.02] text-[#2d2724] sm:text-6xl">
              Made by hand. Made for you.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#5d4d46]">
              Turn life’s most meaningful moments into beautifully personalized handmade pieces, thoughtfully designed for gifting, keepsakes, and everyday keepsakes.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            <div className="grid w-full max-w-xl gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[28px] border border-[#ead8c5] bg-[#fffaf6] p-3 shadow-[0_25px_60px_rgba(92,71,59,0.06)] sm:col-span-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
                  alt="Handmade personalized piece"
                  className="h-56 w-full rounded-[20px] object-cover sm:h-64 lg:h-[300px]"
                />
              </div>
              <div className="hidden overflow-hidden rounded-[24px] border border-[#ead8c5] bg-[#fffaf6] p-3 lg:block">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80"
                  alt="Custom frame"
                  className="h-[210px] w-full rounded-[18px] object-cover"
                />
              </div>
              <div className="hidden overflow-hidden rounded-[24px] border border-[#ead8c5] bg-[#fffaf6] p-3 lg:block">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80"
                  alt="Handmade earrings"
                  className="h-[210px] w-full rounded-[18px] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
