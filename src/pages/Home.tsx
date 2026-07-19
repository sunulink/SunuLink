import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import PacksSection from "@/components/home/PacksSection"; // Boost My Pub
import PacksSectionIA from "@/components/IA-link-business/packsectionIA"; // Link IA Business
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PartnersSection from "@/components/home/PartnersSection";
import FormulaireTemoignage from "@/components/temoignages/FormulaireTemoignage";
import { MessageSquarePlus } from "lucide-react";
import "../components/Hero_2.css";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white relative">
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

        {/* Bouton d'action pour ouvrir le formulaire de témoignage */}
        <div className="bg-gray-50/60 py-10 text-center border-t border-b border-gray-100">
          <div className="max-w-2xl mx-auto px-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Vous êtes client chez nous ?</h3>
            <p className="text-sm text-gray-500 mb-5">
              Prenez 2 minutes pour partager votre avis et booster notre visibilité mutuelle.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-6 py-3 rounded-full hover:bg-blue-600 transition-all shadow-lg shadow-orange-500/10 hover:shadow-blue-600/10 cursor-pointer text-sm"
            >
              <MessageSquarePlus className="w-4 h-4" />
              Laisser un témoignage
            </button>
          </div>
        </div>

        {/* Sections de réassurance et partenaires */}
        <TestimonialsSection />
        <PartnersSection />
      </main>
      <Footer />

      {/* --- FENÊTRE POP-UP (MODALE) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          {/* Fermeture si clic à l'extérieur du bloc blanc de formulaire */}
          <div className="absolute inset-0" onClick={() => setIsModalOpen(false)} />
          
          <div className="relative w-full max-w-4xl z-10 animate-scaleUp">
            <FormulaireTemoignage onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
