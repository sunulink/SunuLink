import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import PacksSection from "@/components/home/PacksSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PartnersSection from "@/components/home/PartnersSection";
import ContactSection from "@/components/home/ContactSection";
import "../components/Hero_2.css";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <PacksSection />
        <TestimonialsSection />
        <PartnersSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
