"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import type { FaqItem } from "@/data/products";

export function FaqList({ items }: { items: FaqItem[] }) {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openQuestion === item.question;

        return (
          <div key={item.question} className="rounded-[24px] border border-[#eadcc7] bg-[#fffaf5]">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenQuestion(isOpen ? null : item.question)}
              className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
            >
              <h2 className="text-lg font-semibold text-[#2d2724]">{item.question}</h2>
              <ChevronDown
                size={18}
                className={`mt-1 shrink-0 text-[#7b6257] transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && <p className="px-5 pb-5 text-sm leading-7 text-[#5f4d45] sm:px-6 sm:pb-6">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
