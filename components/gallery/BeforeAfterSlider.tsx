"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

interface Props {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
}

export default function BeforeAfterSlider({ before, after }: Props) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const pct = Math.max(2, Math.min(((clientX - left) / width) * 100, 98));
    setPosition(pct);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden cursor-col-resize select-none"
      style={{ aspectRatio: "4/3" }}
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        dragging.current = true;
        updatePosition(e.clientX);
      }}
      onPointerMove={(e) => {
        if (!dragging.current) return;
        updatePosition(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
    >
      {/* Before — base layer, always visible */}
      <div className="absolute inset-0">
        <Image
          src={before.src}
          alt={before.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover pointer-events-none"
        />
        <span className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded pointer-events-none">
          Before
        </span>
      </div>

      {/* After — clipped to left portion using clip-path */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={after.src}
          alt={after.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover pointer-events-none"
        />
        <span className="absolute bottom-3 left-3 bg-[#1e3a5f]/80 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded pointer-events-none">
          After
        </span>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 h-full w-0.5 bg-white/90 shadow-[0_0_8px_rgba(0,0,0,0.4)] z-20 pointer-events-none"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 z-20 pointer-events-none"
        style={{ left: `${position}%`, transform: "translate(-50%, -50%)" }}
      >
        <div className="w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center border border-slate-200">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1e3a5f"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 3 12 9 6" />
            <polyline points="15 6 21 12 15 18" />
          </svg>
        </div>
      </div>
    </div>
  );
}
