import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ContactCTA from "@/components/shared/ContactCTA";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Project Gallery | NorthPeak Plumbing & Heating Fredericton",
  description:
    "Browse NorthPeak's project gallery — before and after photos of plumbing and heating work across Fredericton, NB. Water heater installs, bathroom renos, pipe repairs, and more.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        overline="Our Work"
        title="Project Gallery"
        subtitle="A look at some of the jobs we're proud of across Fredericton and the surrounding area. Drag the sliders to compare before and after."
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }]}
      />
      <GalleryGrid />
      <ContactCTA />
    </>
  );
}
