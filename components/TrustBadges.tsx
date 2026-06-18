import FadeIn from "@/components/shared/FadeIn";
import { trustBadges } from "@/data/content";

function TrustIcon({ type }: { type: string }) {
  const props = {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case "dollar":
      return (
        <svg {...props}>
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      );
    case "home":
      return (
        <svg {...props}>
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    default:
      return null;
  }
}

export default function TrustBadges() {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#ea580c] uppercase tracking-widest">
              Why NorthPeak
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0f172a]">
              Why Choose Us
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustBadges.map((badge, i) => (
            <FadeIn key={badge.title} delay={i * 80}>
              <div className="flex flex-col items-center text-center p-5 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-sm hover:bg-white">
                <div className="w-14 h-14 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center mb-4">
                  <TrustIcon type={badge.icon} />
                </div>
                <h3 className="font-bold text-[#0f172a] text-base mb-2">
                  {badge.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {badge.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
