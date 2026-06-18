import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ContactCTA from "@/components/shared/ContactCTA";
import { serviceAreas, frederictonNeighbourhoods } from "@/data/serviceArea";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: "Plumbing Service Area Fredericton, NB | NorthPeak",
  description:
    "NorthPeak Plumbing & Heating serves Fredericton and surrounding communities including Oromocto, New Maryland, Hanwell, Lincoln, and more. Call (506) 555-0192.",
};

export default function ServiceAreaPage() {
  const cities = serviceAreas.filter((a) => a.type === "city");
  const communities = serviceAreas.filter((a) => a.type === "community");

  return (
    <>
      <PageHero
        overline="Where We Work"
        title="Fredericton & Area Service Coverage"
        subtitle="We serve Fredericton and the surrounding region. If you're within a reasonable drive of the city, we can likely get to you."
        breadcrumbs={[{ label: "Service Area", href: "/service-area" }]}
      />

      {/* Coverage overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: areas */}
            <div>
              {/* Primary city */}
              {cities.map((area) => (
                <div key={area.name} className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#1e3a5f] flex-shrink-0" />
                    <h2 className="text-xl font-bold text-[#0f172a]">
                      {area.name}
                    </h2>
                    {area.note && (
                      <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                        {area.note}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 ml-6">
                    All Fredericton neighbourhoods are covered, including:
                  </p>
                  <div className="ml-6 grid grid-cols-2 gap-2">
                    {frederictonNeighbourhoods.map((n) => (
                      <div
                        key={n}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#1e3a5f"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {n}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Surrounding communities */}
              <div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-4">
                  Surrounding Communities
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {communities.map((area) => (
                    <div
                      key={area.name}
                      className="flex items-start gap-2.5 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1e3a5f"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 flex-shrink-0"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <div>
                        <div className="text-sm font-semibold text-[#0f172a]">
                          {area.name}
                        </div>
                        {area.note && (
                          <div className="text-xs text-slate-500">{area.note}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: map + notes */}
            <div className="space-y-6">
              {/* Map embed */}
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85474.20038253523!2d-66.74310934179688!3d45.94453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca418b00bcd0c3b%3A0x6a07b2a877cc00c4!2sFredericton%2C%20NB!5e0!3m2!1sen!2sca!4v1717000000000!5m2!1sen!2sca"
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NorthPeak service area map"
                />
              </div>

              {/* Response time note */}
              <div className="rounded-xl bg-[#1e3a5f] text-white p-6">
                <h3 className="font-bold text-base mb-3">
                  Emergency Response Times
                </h3>
                <div className="space-y-3 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <span className="text-[#22c55e] font-bold flex-shrink-0">
                      ≤ 60 min
                    </span>
                    <span>Fredericton city area</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#f59e0b] font-bold flex-shrink-0">
                      60–90 min
                    </span>
                    <span>Oromocto, New Maryland, Hanwell, Lincoln</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-400 font-bold flex-shrink-0">
                      Call first
                    </span>
                    <span>
                      Nackawic, Jemseg, and outlying areas — we'll confirm
                      coverage
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact info */}
              <div className="rounded-xl border border-slate-200 p-6 bg-white">
                <h3 className="font-bold text-[#0f172a] text-sm mb-3">
                  Not Sure If We Cover You?
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  Call us and we'll let you know immediately. If we can't get to
                  you, we'll try to point you toward someone who can.
                </p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#152d4a] text-white font-bold text-sm px-5 py-2.5 rounded transition-colors"
                >
                  Call {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA
        heading="Serving your neighbourhood?"
        subtext="Reach out for a free quote. Most service calls scheduled same or next day."
      />
    </>
  );
}
