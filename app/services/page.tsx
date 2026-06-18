import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import ContactCTA from "@/components/shared/ContactCTA";
import ServiceIcon from "@/components/ServiceIcon";
import EstimateWidget from "@/components/services/EstimateWidget";
import { servicesData } from "@/data/services";

export const metadata: Metadata = {
  title: "Plumbing & Heating Services Fredericton | NorthPeak",
  description:
    "Full-service plumbing and heating in Fredericton, NB. Drain cleaning, water heaters, pipe repair, furnaces, bathroom renovations, and 24/7 emergency service.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        overline="What We Do"
        title="Plumbing & Heating Services"
        subtitle="From a dripping faucet to a full heating system install — we handle it all with the same care and craftsmanship."
        breadcrumbs={[{ label: "Services", href: "/services" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group relative rounded-xl p-7 border transition-all hover:shadow-lg hover:-translate-y-0.5 ${
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

                <h2
                  className={`font-bold text-lg mb-2 ${
                    service.highlighted ? "text-white" : "text-[#0f172a]"
                  }`}
                >
                  {service.title}
                </h2>

                <p
                  className={`text-sm leading-relaxed mb-5 ${
                    service.highlighted ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {service.shortDescription}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span
                    className={`text-xs font-semibold ${
                      service.highlighted ? "text-slate-300" : "text-slate-400"
                    }`}
                  >
                    {service.priceRange}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors ${
                      service.highlighted
                        ? "text-white"
                        : "text-[#1e3a5f] group-hover:text-[#152d4a]"
                    }`}
                  >
                    Details
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EstimateWidget />
      <ContactCTA />
    </>
  );
}
