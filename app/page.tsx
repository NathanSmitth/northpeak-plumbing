import Hero from "@/components/Hero";
import CredentialStrip from "@/components/home/CredentialStrip";
import ServicesTeaser from "@/components/home/ServicesTeaser";
import TrustBadges from "@/components/TrustBadges";
import BrandsRow from "@/components/home/BrandsRow";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import ContactCTA from "@/components/shared/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <CredentialStrip />
      <ServicesTeaser />
      <TrustBadges />
      <BrandsRow />
      <TestimonialsPreview />
      <ContactCTA />
    </main>
  );
}
