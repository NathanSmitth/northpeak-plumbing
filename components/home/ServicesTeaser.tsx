import Link from "next/link";
import FadeIn from "@/components/shared/FadeIn";
import { servicesData } from "@/data/services";
import ServiceIcon from "@/components/ServiceIcon";

const featuredSlugs = ["drain-cleaning", "water-heater-install", "emergency-service"];

export default function ServicesTeaser() {
  const featured = servicesData.filter((s) => featuredSlugs.includes(s.slug));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="text-sm font-semibold text-[#ea580c] uppercase tracking-widest">
                What We Do
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0f172a]">
                Our Services
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1e3a5f] hover:text-[#152d4a] transition-colors self-start sm:self-auto"
            >
              View all 6 services
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
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {featured.map((service, i) => (
            <FadeIn key={service.slug} delay={i * 90}>
              <Link
                href={`/services/${service.slug}`}
                className={`group relative rounded-xl p-7 border transition-all duration-200 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full ${
                  service.highlighted
                    ? "bg-[#1e3a5f] text-white border-[#1e3a5f]"
                    : "bg-white text-[#0f172a] border-slate-200 hover:border-[#1e3a5f]/30"
                }`}
              >
                {service.highlighted && (
                  <span className="absolute top-4 right-4 bg-[#dc2626] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                    24/7
                  </span>
                )}

                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${
                    service.highlighted
                      ? "bg-white/15 text-white"
                      : "bg-[#1e3a5f]/8 text-[#1e3a5f]"
                  }`}
                >
                  <ServiceIcon type={service.icon as any} />
                </div>

                <h3
                  className={`font-bold text-lg mb-2 ${
                    service.highlighted ? "text-white" : "text-[#0f172a]"
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed mb-5 flex-1 ${
                    service.highlighted ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {service.shortDescription}
                </p>

                <span
                  className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors ${
                    service.highlighted
                      ? "text-white"
                      : "text-[#1e3a5f] group-hover:text-[#152d4a]"
                  }`}
                >
                  Learn more
                  <svg
                    width="14"
                    height="14"
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
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
