import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import FaqAccordion from "@/components/shared/FaqAccordion";
import ContactCTA from "@/components/shared/ContactCTA";
import { faqItems } from "@/data/faq";
import { buildFAQSchema } from "@/lib/schema";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: "FAQ — Plumbing & Heating Questions Fredericton | NorthPeak",
  description:
    "Common questions about NorthPeak's plumbing and heating services in Fredericton, NB. Pricing, scheduling, licensing, emergency response, and more.",
  keywords: [
    "plumbing FAQ Fredericton",
    "plumber questions Fredericton NB",
    "plumbing pricing Fredericton",
    "emergency plumber Fredericton",
  ],
  alternates: { canonical: `${siteConfig.url}/faq` },
  openGraph: {
    title: "FAQ — Plumbing & Heating Questions Fredericton | NorthPeak",
    description:
      "Common questions about NorthPeak's plumbing and heating services in Fredericton, NB.",
    url: `${siteConfig.url}/faq`,
    type: "website",
    locale: "en_CA",
    siteName: siteConfig.fullName,
  },
};

const categoryOrder = ["Pricing", "Scheduling", "Licensing", "Emergency", "Services", "Warranty"];

export default function FaqPage() {
  const grouped = categoryOrder
    .map((cat) => ({
      category: cat,
      items: faqItems.filter((f) => f.category === cat),
    }))
    .filter((g) => g.items.length > 0);

  const faqSchema = buildFAQSchema(faqItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        overline="Got Questions?"
        title="Frequently Asked Questions"
        subtitle="Answers to the questions we get most often. Don't see yours? Call us directly — we're happy to help."
        breadcrumbs={[{ label: "FAQ", href: "/faq" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {grouped.map((group, i) => (
            <div key={group.category} className={i > 0 ? "mt-14" : ""}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c]">
                  {group.category}
                </span>
                <div className="flex-1 h-px bg-slate-200" />
              </div>
              <FaqAccordion
                items={group.items.map((f) => ({ q: f.question, a: f.answer }))}
              />
            </div>
          ))}

          {/* Bottom note */}
          <div className="mt-14 rounded-xl bg-slate-50 border border-slate-200 p-6 text-center">
            <p className="text-slate-600 text-sm leading-relaxed">
              Still have questions?{" "}
              <a
                href="tel:5065550192"
                className="text-[#1e3a5f] font-semibold hover:underline"
              >
                Call us at (506) 555-0192
              </a>{" "}
              — we're available 24/7 for emergencies and during business hours
              for everything else.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
