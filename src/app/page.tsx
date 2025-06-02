import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import GallerySection from "@/components/gallery-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";

export default function Home() {
  return (
    <>
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
    </>
  );
}
