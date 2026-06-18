"use client";

import { useState } from "react";

export type FAQEntry = { q: string; a: string };

interface FaqAccordionProps {
  items: FAQEntry[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="bg-white">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full text-left flex items-center justify-between gap-4 px-6 py-5 hover:bg-slate-50 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-[#0f172a] text-sm sm:text-base leading-snug">
                {item.q}
              </span>
              <span
                className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#1e3a5f] flex items-center justify-center transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1e3a5f"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-5">
                <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
