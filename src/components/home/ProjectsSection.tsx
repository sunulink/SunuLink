import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Monitor, ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export const ProjectsSection = () => {
  const slides = [
    ...Array.from({ length: 7 }, (_, i) => `/portfolio/carte-identite-marque-locale${i}.jpg`),
    ...Array.from({ length: 8 }, (_, i) => `/portfolio/carte-identite-visuelle${i + 1}.jpg`)
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        {/* Titre de Section */}
        <div className="text-center mb-10 md:mb-16" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-800 leading-tight uppercase tracking-tighter">
            Des projets divers et variés,<br />
            <span className="text-sunuOrange">Mais toujours autour d'une passion commune</span>
          </h2>
        </div>

        {/* GRILLE RÉORGANISÉE (6 colonnes pour plus de flexibilité) */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-0 items-stretch shadow-2xl rounded-[2.5rem] overflow-hidden">
          
          {/* --- BLOC 1 : COMPTEUR (2/6) --- */}
          <div 
            className="lg:col-span-2 bg-[#FFB800] p-8 md:p-12 flex flex-col items-center justify-center text-center text-white min-h-[400px]" 
            data-aos="fade-right"
          >
            <Monitor className="w-16 h-16 md:w-20 md:h-20 mb-4 opacity-90" />
            <AnimatedCounter end={50} suffix="+" />
            <h3 className="text-3xl md:text-4xl font-black mt-2 tracking-tighter uppercase">PROJETS</h3>
            <p className="text-lg md:text-xl opacity-90 italic mb-10">menés avec succès</p>
            
            <Link to="/realisations" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-white text-sunuOrange hover:bg-sunuBlue hover:text-white font-black px-10 py-7 rounded-2xl shadow-xl transition-all duration-300 uppercase text-lg group">
                Réalisations
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* --- BLOC 2 : DESIGN CENTRAL ABSTRAIT (1/6) --- */}
          <div 
            className="hidden lg:flex lg:col-span-1 bg-[#004A99] relative items-center justify-center overflow-hidden border-x border-white/10"
            data-aos="zoom-in"
          >
            {/* Figures géométriques décoratives */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-sunuOrange/20 rounded-tl-full" />
            <div className="w-12 h-12 border-2 border-white/20 rotate-45 animate-pulse" />
            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12" />
          </div>

          {/* --- BLOC 3 : IMAGE TOUT À DROITE (3/6) --- */}
          <div 
            className="lg:col-span-3 relative min-h-[400px] md:min-h-[480px] bg-[#004A99] overflow-hidden" 
            data-aos="fade-left"
          >
            <div className="absolute inset-0">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={slide}
                    alt={`Projet SUNULINK Consulting ${index}`}
                    /* object-cover ici pour un look immersif bord à bord 
                       Assurez-vous que vos textes sont centrés sur vos affiches */
                    className="w-full h-full object-cover" 
                  />
                </div>
              ))}
            </div>
            
            {/* Overlay subtil pour lier le design */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#004A99]/20 to-transparent pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
