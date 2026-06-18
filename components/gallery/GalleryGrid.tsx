"use client";

import { useState } from "react";
import Image from "next/image";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { galleryProjects, galleryCategories } from "@/data/gallery";

export default function GalleryGrid() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? galleryProjects
      : galleryProjects.filter((p) => p.category === active);

  return (
    <>
      {/* Filter tabs */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-colors ${
                  active === cat
                    ? "bg-[#1e3a5f] text-white border-[#1e3a5f]"
                    : "border-slate-300 text-slate-600 hover:border-[#1e3a5f] hover:text-[#1e3a5f]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-center text-slate-500 py-16">
              No projects in this category yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {project.type === "before-after" &&
                  project.before &&
                  project.after ? (
                    <BeforeAfterSlider
                      before={project.before}
                      after={project.after}
                    />
                  ) : project.image ? (
                    <div className="relative h-48">
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ) : null}

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
                        {project.category}
                      </span>
                      <span className="text-xs text-slate-400">
                        {project.location}
                      </span>
                    </div>
                    <h3 className="font-bold text-[#0f172a] text-base mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500">
              More project photos coming soon. Call us to discuss your project.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
