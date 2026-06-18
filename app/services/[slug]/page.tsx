import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import FaqAccordion from "@/components/shared/FaqAccordion";
import ContactCTA from "@/components/shared/ContactCTA";
import ServiceIcon from "@/components/ServiceIcon";
import { servicesData } from "@/data/services";
import { buildServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/data/content";

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};
  const pageUrl = `${siteConfig.url}/services/${service.slug}`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [
      `${service.title.toLowerCase()} Fredericton`,
      `${service.title.toLowerCase()} Fredericton NB`,
      "NorthPeak Plumbing",
      "plumber Fredericton",
    ],
    alternates: { canonical: pageUrl },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: pageUrl,
      type: "website",
      locale: "en_CA",
      siteName: siteConfig.fullName,
      images: [
        {
          url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=630&fit=crop&q=80",
          width: 1200,
          height: 630,
          alt: `${service.title} — ${siteConfig.fullName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) notFound();

  const serviceSchema = buildServiceSchema(service);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHero
        overline={service.title}
        title={service.heroSubtitle}
        subtitle={service.shortDescription}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title, href: `/services/${service.slug}` },
        ]}
      />

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left: description + included */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#1e3a5f]/8 text-[#1e3a5f] flex items-center justify-center flex-shrink-0">
                    <ServiceIcon type={service.icon as any} className="w-7 h-7" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0f172a]">
                    {service.title}
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  {service.fullDescription.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* What's included */}
              <div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-5">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {service.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#22c55e]/15 flex items-center justify-center">
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#16a34a"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="text-slate-700 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-5">
                  Common Questions
                </h3>
                <FaqAccordion items={service.faq} />
              </div>
            </div>

            {/* Right: sticky sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                {/* Price card */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Typical Price Range
                  </div>
                  <div className="text-2xl font-bold text-[#0f172a] mb-2">
                    {service.priceRange}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-5">
                    {service.priceNote}
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-[#1e3a5f] hover:bg-[#152d4a] text-white font-bold text-sm px-5 py-3 rounded transition-colors"
                  >
                    Get a Free Quote
                  </Link>
                  <a
                    href="tel:5065550192"
                    className="block w-full text-center border border-slate-300 hover:border-[#1e3a5f] text-[#0f172a] font-semibold text-sm px-5 py-2.5 rounded transition-colors mt-3"
                  >
                    Or Call (506) 555-0192
                  </a>
                </div>

                {/* Trust points */}
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                  <h4 className="font-bold text-[#0f172a] text-sm mb-4">
                    Why NorthPeak
                  </h4>
                  {[
                    "Licensed Master Plumber",
                    "$5M liability coverage",
                    "Upfront flat-rate pricing",
                    "Same-day service available",
                    "1-year labour warranty",
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-2.5 mb-3 last:mb-0">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1e3a5f"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-sm text-slate-600">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Other services */}
                <div className="rounded-xl border border-slate-200 bg-white p-6">
                  <h4 className="font-bold text-[#0f172a] text-sm mb-4">
                    Other Services
                  </h4>
                  <div className="space-y-2">
                    {servicesData
                      .filter((s) => s.slug !== service.slug)
                      .slice(0, 4)
                      .map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="block text-sm text-[#1e3a5f] hover:text-[#152d4a] hover:underline transition-colors py-0.5"
                        >
                          {s.title}
                        </Link>
                      ))}
                    <Link
                      href="/services"
                      className="block text-sm text-slate-400 hover:text-slate-600 transition-colors pt-1"
                    >
                      View all services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA
        heading={`Need ${service.title}?`}
        subtext="Get a free upfront quote. Most calls scheduled same or next day."
      />
    </>
  );
}
