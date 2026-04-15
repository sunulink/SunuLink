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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-800 leading-tight uppercase tracking-tighter">
            Des projets divers et variés,<br />
            <span className="text-sunuOrange">Mais toujours autour d'une passion commune</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-stretch">
          
          {/* --- BLOC GAUCHE : COMPTEUR + BOUTON --- */}
          <div className="lg:col-span-2 bg-[#FFB800] rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col items-center justify-center text-center text-white min-h-[400px]">
            <Monitor className="w-16 h-16 md:w-20 md:h-20 mb-4 opacity-90" />
            <AnimatedCounter end={50} suffix="+" />
            <h3 className="text-3xl md:text-4xl font-black mt-2 tracking-tighter uppercase">Projets</h3>
            <p className="text-lg md:text-xl opacity-90 italic mb-10">menés avec succès</p>
            
            <Link to="/realisations" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-white text-sunuOrange hover:bg-sunuBlue hover:text-white font-black px-10 py-7 rounded-2xl shadow-xl transition-all duration-300 uppercase text-lg group">
                Voir nos réalisations
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* --- BLOC DROITE : SLIDER ADAPTÉ --- */}
          <div className="lg:col-span-3 relative rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[400px] md:min-h-[500px] bg-gray-950">
            <div className="absolute inset-0 flex items-center justify-center">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={slide}
                    alt={`Projet ${index}`}
                    {/* 2. Adaptation : object-contain pour tout voir */}
                    className="max-w-full max-h-full object-contain p-6 md:p-10"
                  />
                </div>
              ))}
            </div>
            
            {/* 1. Bande Portfolio retirée */}
            {/* 3. Flèches retirées */}
            {/* 4. Points gris/indicateurs retirés */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
