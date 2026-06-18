import { siteConfig } from "@/data/content";
import type { ServiceData } from "@/data/services";
import type { FAQItem } from "@/data/faq";

const BASE_URL = siteConfig.url;
const BUSINESS_ID = `${BASE_URL}/#business`;

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Plumber"],
    "@id": BUSINESS_ID,
    name: siteConfig.fullName,
    description:
      "Fredericton's trusted plumbing and heating experts. 24/7 emergency service, licensed master plumber, upfront pricing, and 15+ years of local experience.",
    url: BASE_URL,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "847 King Street",
      addressLocality: "Fredericton",
      addressRegion: "NB",
      postalCode: "E3B 1E5",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.9645,
      longitude: -66.6431,
    },
    hasMap: "https://www.google.com/maps/place/Fredericton,+NB",
    priceRange: "$$",
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Credit Card, Cheque, E-Transfer",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Fredericton", containedIn: { "@type": "AdministrativeArea", name: "New Brunswick" } },
      { "@type": "City", name: "Oromocto" },
      { "@type": "City", name: "New Maryland" },
      { "@type": "City", name: "Hanwell" },
      { "@type": "City", name: "Lincoln" },
      { "@type": "City", name: "Burton" },
      { "@type": "City", name: "Nackawic" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "100",
    },
    founder: {
      "@type": "Person",
      name: "Mike Arsenault",
      jobTitle: "Owner & Master Plumber",
    },
    foundingDate: "2009",
    numberOfEmployees: { "@type": "QuantitativeValue", value: 4 },
  };
}

export function buildServiceSchema(service: ServiceData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/services/${service.slug}#service`,
    name: service.title,
    description: service.shortDescription,
    provider: { "@id": BUSINESS_ID },
    areaServed: {
      "@type": "City",
      name: "Fredericton",
      containedIn: { "@type": "AdministrativeArea", name: "New Brunswick" },
    },
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "CAD",
        description: service.priceRange,
      },
    },
    url: `${BASE_URL}/services/${service.slug}`,
  };
}

export function buildFAQSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
