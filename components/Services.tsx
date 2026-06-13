import { services } from "@/data/content";
import ServiceIcon from "./ServiceIcon";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#ea580c] uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0f172a]">
            Our Services
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-base">
            From a dripping faucet to a full heating system install — we handle
            it all with the same care and craftsmanship.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative rounded-xl p-7 border transition-shadow hover:shadow-lg ${
                service.highlighted
                  ? "bg-[#1e3a5f] text-white border-[#1e3a5f]"
                  : "bg-white text-[#0f172a] border-slate-200"
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
                className={`text-sm leading-relaxed ${
                  service.highlighted ? "text-slate-300" : "text-slate-500"
                }`}
              >
                {service.description}
              </p>

              {service.highlighted && (
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-[#dc2626] hover:bg-[#b91c1c] px-4 py-2 rounded transition-colors"
                >
                  Call Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
