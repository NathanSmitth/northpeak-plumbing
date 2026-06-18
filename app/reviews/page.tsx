import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ContactCTA from "@/components/shared/ContactCTA";
import { allReviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Customer Reviews | NorthPeak Plumbing & Heating Fredericton",
  description:
    "Read what Fredericton homeowners say about NorthPeak Plumbing & Heating. 5-star rated plumbing and heating service in Fredericton, NB.",
};

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#f59e0b"
          stroke="#f59e0b"
          strokeWidth="1"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        overline="Customer Reviews"
        title="What Fredericton Homeowners Say"
        subtitle="Don't take our word for it. Here's what our customers say about working with NorthPeak."
        breadcrumbs={[{ label: "Reviews", href: "/reviews" }]}
      />

      {/* Summary banner */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0f172a]">5.0</div>
              <StarRating count={5} />
              <div className="text-xs text-slate-500 mt-1">Average rating</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-200" />
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0f172a]">100+</div>
              <div className="text-xs text-slate-500 mt-1">Verified reviews</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-200" />
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0f172a]">15+</div>
              <div className="text-xs text-slate-500 mt-1">Years in business</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allReviews.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-200 p-7 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Quote mark */}
                <div className="text-[#1e3a5f] opacity-20">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  {review.text}
                </p>

                {review.service && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
                    {review.service}
                  </span>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <div>
                    <div className="font-semibold text-[#0f172a] text-sm">
                      {review.name}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {review.location}
                      {review.date && ` · ${review.date}`}
                    </div>
                  </div>
                  <StarRating count={review.rating} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        heading="Ready to become our next 5-star review?"
        subtext="Join hundreds of satisfied Fredericton homeowners. Get a free quote today."
      />
    </>
  );
}
