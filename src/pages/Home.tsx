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

        {/* ========================================================= */}
        {/* SECTION BANDEAU TÉMOIGNAGE - REFACTORISÉE PREMIUM SUNULINK */}
        {/* ========================================================= */}
        <div className="relative bg-gradient-to-r from-sunuBlue via-slate-900 to-sunuBlue py-14 md:py-16 text-center border-t border-b border-white/10 overflow-hidden shadow-inner">
          {/* Effet lumineux d'arrière-plan discret */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="relative max-w-3xl mx-auto px-6 z-10">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
              Vous êtes client chez nous ?
            </h3>
            <p className="text-sm sm:text-base text-slate-200/90 max-w-xl mx-auto mb-6 font-medium leading-relaxed">
              Prenez 2 minutes pour partager votre avis et booster notre visibilité mutuelle.
            </p>
            
            {/* Bouton Orange officiel, survol en Bleu officiel */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2.5 bg-sunuOrange text-white font-extrabold px-8 py-4 rounded-full hover:bg-sunuBlue transition-all duration-300 shadow-xl shadow-sunuOrange/20 hover:shadow-sunuBlue/30 hover:-translate-y-0.5 cursor-pointer text-sm tracking-wide uppercase"
            >
              <MessageSquarePlus className="w-4 h-4 sm:w-5 h-5 transition-transform group-hover:rotate-6" />
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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          {/* Fermeture si clic à l'extérieur du bloc de formulaire */}
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
