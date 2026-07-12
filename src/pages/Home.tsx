import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import PacksSection from "@/components/home/PacksSection"; // Boost My Pub
import PacksSectionIA from "@/components/IA-link-business/packsectionIA"; // Link IA Business
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PartnersSection from "@/components/home/PartnersSection";
import "../components/Hero_2.css";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Sections d'introduction */}
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        
        {/* ========================================================= */}
        {/* 1. BOOST MY PUB (Arrive en premier) */}
        {/* ========================================================= */}
        <PacksSection />

        {/* ========================================================= */}
        {/* 2. LINK IA BUSINESS (Arrive juste après) */}
        {/* ========================================================= */}
        <PacksSectionIA />

        {/* Sections de réassurance et partenaires */}
        <TestimonialsSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
