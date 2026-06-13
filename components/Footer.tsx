import { navLinks, siteConfig } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#1e3a5f] rounded flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                NorthPeak Plumbing & Heating
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Fredericton's trusted local plumbing and heating team. Licensed,
              insured, and ready around the clock.
            </p>
            <div className="mt-5 text-sm">
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="text-white font-semibold hover:text-slate-300 transition-colors"
              >
                {siteConfig.phone}
              </a>
              <div className="text-slate-500 text-xs mt-0.5">24/7 Emergency Line</div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#hero" className="text-sm hover:text-white transition-colors">
                  Home
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div>{siteConfig.address}</div>
              <div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="space-y-1 text-slate-500">
                <div>{siteConfig.hours.weekdays}</div>
                <div>{siteConfig.hours.saturday}</div>
                <div>{siteConfig.hours.sunday}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div>
            © {new Date().getFullYear()} NorthPeak Plumbing & Heating. All
            rights reserved.
          </div>
          <div>
            Demo site built by{" "}
            <a
              href="https://aurentis.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors underline"
            >
              Aurentis — aurentis.ca
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
