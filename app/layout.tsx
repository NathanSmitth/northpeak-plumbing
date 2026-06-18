import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DemoBanner from "@/components/DemoBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildLocalBusinessSchema } from "@/lib/schema";
import { siteConfig } from "@/data/content";
import MobileCtaBar from "@/components/shared/MobileCtaBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "NorthPeak Plumbing & Heating | Fredericton, NB",
    template: "%s | NorthPeak Plumbing & Heating",
  },
  description:
    "Fredericton's trusted plumbing and heating experts. 24/7 emergency service, licensed & insured, 15+ years local experience. Call (506) 555-0192.",
  keywords: [
    "plumber Fredericton",
    "plumbing Fredericton NB",
    "heating Fredericton",
    "emergency plumber Fredericton",
    "drain cleaning Fredericton",
    "water heater Fredericton",
    "NorthPeak Plumbing",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: siteConfig.fullName,
    title: "NorthPeak Plumbing & Heating | Fredericton, NB",
    description:
      "Fredericton's trusted plumbing and heating experts. 24/7 emergency service, licensed & insured, 15+ years local experience.",
    url: siteConfig.url,
    images: [
      {
        url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "NorthPeak Plumbing & Heating — Fredericton, NB",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NorthPeak Plumbing & Heating | Fredericton, NB",
    description:
      "Fredericton's trusted plumbing and heating experts. 24/7 emergency service, licensed & insured, 15+ years local experience.",
    images: [
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=630&fit=crop&q=80",
    ],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = buildLocalBusinessSchema();

  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <DemoBanner />
        <Navbar />
        {children}
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
