import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import PacksSection from "@/components/home/PacksSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PartnersSection from "@/components/home/PartnersSection";
// On supprime l'import de ContactSection ici
import "../components/Hero_2.css";
import PacksSectionIA from "@/components/IA-link-business/packsectionIA";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <PacksSection />
        <PacksSectionIA />
        <TestimonialsSection />
        <PartnersSection />
        {/* On a retiré <ContactSection /> ici car le Footer s'en occupe */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
