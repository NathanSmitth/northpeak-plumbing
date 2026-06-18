import Link from "next/link";
import { siteConfig } from "@/data/content";

interface ContactCTAProps {
  heading?: string;
  subtext?: string;
}

export default function ContactCTA({
  heading = "Ready to book a service?",
  subtext = "Get a free, upfront quote with no obligation. Most calls scheduled same or next day.",
}: ContactCTAProps) {
  return (
    <section className="bg-[#1e3a5f] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          {heading}
        </h2>
        <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-[#1e3a5f] font-bold text-sm px-7 py-3.5 rounded hover:bg-slate-100 transition-colors"
          >
            Get a Free Quote
          </Link>
          <Link
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="inline-flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-sm px-7 py-3.5 rounded transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            {siteConfig.phone}
          </Link>
        </div>
      </div>
    </section>
  );
}
