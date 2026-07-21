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
import { MessageSquarePlus, Sparkles } from "lucide-react";
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
        {/* 1. BOOST MY PUB */}
        {/* ========================================================= */}
        <PacksSection />

        {/* ========================================================= */}
        {/* 2. LINK IA BUSINESS */}
        {/* ========================================================= */}
        <PacksSectionIA />

        {/* ========================================================= */}
        {/* SECTION BANDEAU TÉMOIGNAGE - BLEU CLAIR SUNULINK ÉPURÉ    */}
        {/* ========================================================= */}
        <section className="relative bg-[#009CDE] py-20 text-center overflow-hidden shadow-xl">
          
          {/* 1. EFFETS ET HALOS LUMINEUX EN DÉGRADÉ SUR BLEU CLAIR */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0071BC]/40 via-transparent to-white/20 pointer-events-none" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/20 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-20 right-10 w-[300px] h-[300px] bg-sunuOrange/20 blur-[100px] rounded-full pointer-events-none" />
          
          {/* Trame géométrique minimale */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none opacity-50" />

          {/* 2. CARTE ÉPURÉE GLASSMORPHIC */}
          <div className="relative max-w-4xl mx-auto px-6 z-10">
            <div className="bg-white/10 border border-white/25 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              
              {/* Badge discret */}
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/40 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-sunuOrange" />
                <span>Espace Communauté Client</span>
              </div>

              {/* Titre Principal */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight drop-shadow-sm">
                Vous êtes client <span className="text-slate-900">SunuLink ?</span>
              </h3>

              {/* Sous-titre */}
              <p className="text-base sm:text-lg text-white/95 max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
                Prenez 2 minutes pour partager votre expérience. Votre avis nourrit notre exigence et renforce la visibilité de nos réussites communes.
              </p>

              {/* Bouton CTA Orange avec survol en Bleu Principal (#0071BC) */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center gap-3 bg-sunuOrange hover:bg-[#0071BC] text-white font-extrabold px-9 py-4 rounded-full transition-all duration-500 shadow-[0_10px_30px_rgba(246,166,26,0.35)] hover:shadow-[0_15px_35px_rgba(0,113,188,0.4)] hover:-translate-y-1 cursor-pointer text-sm tracking-wider uppercase border border-white/20 overflow-hidden"
              >
                {/* Reflet brillant au survol */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/25 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                
                <MessageSquarePlus className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <span className="relative z-10">Laisser un témoignage</span>
              </button>

            </div>
          </div>
        </section>

        {/* Sections de réassurance et partenaires */}
        <TestimonialsSection />
        <PartnersSection />
      </main>
      <Footer />

      {/* --- FENÊTRE POP-UP (MODALE) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
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
