"use client";

import { useState } from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";

export default function EstimateWidget() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const selected = servicesData.find((s) => s.slug === selectedSlug);

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          {/* Header */}
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c]">
              Quick Estimate
            </span>
            <h2 className="mt-1.5 text-xl font-bold text-[#0f172a]">
              What service do you need?
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Select a service to see a typical price range. Exact quotes are
              always free — call or submit a request.
            </p>
          </div>

          {/* Service selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
            {servicesData.map((service) => (
              <button
                key={service.slug}
                onClick={() =>
                  setSelectedSlug(
                    service.slug === selectedSlug ? null : service.slug
                  )
                }
                className={`text-left text-sm font-medium px-4 py-3 rounded-lg border transition-all ${
                  selectedSlug === service.slug
                    ? "bg-[#1e3a5f] text-white border-[#1e3a5f] shadow-sm"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#1e3a5f]/40 hover:bg-slate-100"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Result */}
          {selected ? (
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-5 flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="flex-1">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Typical range for {selected.title}
                </div>
                <div className="text-3xl font-bold text-[#0f172a]">
                  {selected.priceRange}
                </div>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  {selected.priceNote}
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-shrink-0">
                <Link
                  href="/contact"
                  className="block text-center bg-[#1e3a5f] hover:bg-[#152d4a] text-white font-bold text-sm px-6 py-2.5 rounded transition-colors"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href={`/services/${selected.slug}`}
                  className="block text-center border border-slate-300 hover:border-[#1e3a5f] text-slate-700 text-sm font-medium px-6 py-2.5 rounded transition-colors"
                >
                  Full details →
                </Link>
              </div>
            </div>
          ) : (
            <div className="rounded-xl bg-slate-50 border border-dashed border-slate-300 p-5 text-center text-sm text-slate-400">
              Select a service above to see pricing
            </div>
          )}

          <p className="mt-4 text-center text-xs text-slate-400">
            Ranges are for typical residential jobs in the Fredericton area.
            Exact quotes are always free and provided before work begins.
          </p>
        </div>
      </div>
    </section>
  );
}
