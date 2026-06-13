import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NorthPeak Plumbing & Heating | Fredericton, NB",
  description:
    "Fredericton's trusted plumbing and heating experts. 24/7 emergency service, licensed & insured, 15+ years local experience. Call (506) 555-0192.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
