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

  // Gestion du défilement pour afficher 3 images (on avance de 1 à chaque fois)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Calcul des 3 images à afficher
  const getVisibleSlides = () => {
    const first = currentIndex;
    const second = (currentIndex + 1) % slides.length;
    const third = (currentIndex + 2) % slides.length;
    return [slides[first], slides[second], slides[third]];
  };

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

        {/* --- CONTENEUR PRINCIPAL EN COLONNE AVEC OMBRE --- */}
        <div className="flex flex-col shadow-2xl rounded-[2.5rem] overflow-hidden border border-gray-100">
          
          {/* --- BLOC HAUT : COMPTEUR HORIZONTAL --- */}
          <div 
            className="bg-[#FFB800] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white" 
            data-aos="fade-down"
          >
            <div className="flex items-center gap-6">
              <div className="bg-white/20 p-4 rounded-2xl">
                <Monitor className="w-12 h-12 md:w-16 md:h-16 text-white" />
              </div>
              <div className="text-left">
                <div className="flex items-baseline gap-2">
                   <span className="text-5xl md:text-7xl font-black tracking-tighter">
                     <AnimatedCounter end={50} />
                   </span>
                   <span className="text-4xl md:text-5xl font-black text-sunuBlue">+</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest opacity-90">Projets menés avec succès</h3>
              </div>
            </div>

            <Link to="/realisations" className="shrink-0">
              <Button className="bg-sunuBlue text-white hover:bg-white hover:text-sunuBlue font-black px-10 py-8 rounded-2xl shadow-xl transition-all duration-300 uppercase text-lg group">
                Voir toutes nos réalisations
                <ArrowRight size={22} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* --- BLOC BAS : GALERIE DE 3 IMAGES DÉFILANTES --- */}
          <div 
            className="bg-sunuBlue p-6 md:p-10" 
            data-aos="fade-up"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 ease-in-out">
              {getVisibleSlides().map((slide, index) => (
                <div 
                  key={`${currentIndex}-${index}`} 
                  className="aspect-[4/3] bg-white overflow-hidden shadow-lg transform transition-all duration-700 hover:scale-[1.02]"
                >
                  <img
                    src={slide}
                    alt={`Réalisation SUNULINK ${index}`}
                    className="w-full h-full object-contain animate-in fade-in zoom-in duration-700"
                  />
                </div>
              ))}
            </div>
            
            {/* Indicateur de défilement discret */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: Math.min(slides.length, 5) }).map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 transition-all duration-500 rounded-full ${
                    i === currentIndex % 5 ? "w-8 bg-sunuOrange" : "w-2 bg-white/30"
                  }`} 
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
