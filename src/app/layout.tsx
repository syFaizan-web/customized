import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Faiz Studio | Personalized Handmade Gifts",
  description:
    "Luxury handmade personalization boutique offering custom cards, frames, jewelry, and gifting pieces made for meaningful moments.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full bg-[#f7f2ee] text-[#2d2724]">{children}</body>
    </html>
  );
}
