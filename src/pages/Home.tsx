import { useState, useEffect } from "react";
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
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {!showContent ? (
        <div className="text-center animate-fadeIn pt-32 py-20">
          <p className="text-lg text-gray-600 mb-2 animate-pulse">
            Préparation de votre expérience...
          </p>
          <h1 className="text-4xl font-bold text-orange-500 tracking-wide animate-pulse">
            Sunu<span className="text-orange-600">Link</span>
          </h1>
        </div>
      ) : (
        <div className="min-h-screen animate-fadeIn pt-[80px]">
          <HeroSection />
          <ServicesSection />
          <ProjectsSection />
          <PacksSection />
          <TestimonialsSection />
          <PartnersSection />
          <ContactSection />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
