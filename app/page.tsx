import DemoBanner from "@/components/DemoBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustBadges from "@/components/TrustBadges";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <DemoBanner />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TrustBadges />
        <About />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
