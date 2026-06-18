import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact NorthPeak Plumbing & Heating | Fredericton, NB",
  description:
    "Request a free quote or schedule a service call with NorthPeak Plumbing & Heating in Fredericton, NB. Available 24/7 for emergencies. Call (506) 555-0192.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        overline="Get In Touch"
        title="Request a Free Quote"
        subtitle="Fill out the form below and we'll get back to you within one business day — usually much faster. For emergencies, call us directly any time."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />
      <ContactForm />
    </>
  );
}
