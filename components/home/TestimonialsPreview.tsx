import Link from "next/link";
import { allReviews } from "@/data/reviews";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="15"
          height="15"
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

export default function TestimonialsPreview() {
  const preview = allReviews.slice(0, 3);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="text-sm font-semibold text-[#ea580c] uppercase tracking-widest">
              Customer Reviews
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0f172a]">
              What Fredericton Homeowners Say
            </h2>
          </div>
          <Link
            href="/reviews"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1e3a5f] hover:text-[#152d4a] transition-colors self-start sm:self-auto"
          >
            Read all reviews
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {preview.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-xl border border-slate-200 p-7 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-[#1e3a5f] opacity-20">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                {review.text}
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[#0f172a] text-sm">
                    {review.name}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {review.location}
                  </div>
                </div>
                <StarRating count={review.rating} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full px-6 py-3 shadow-sm">
            <StarRating count={5} />
            <span className="text-sm font-semibold text-[#0f172a]">
              5.0 average rating
            </span>
            <span className="text-xs text-slate-400">· 100+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
