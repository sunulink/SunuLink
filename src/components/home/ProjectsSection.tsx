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

        {/* STRUCTURE 3 BLOCS : 2 col (Stats) | 1 col (Logo/Cube) | 3 col (Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-0 items-stretch shadow-2xl rounded-[2.5rem] overflow-hidden">
          
          {/* --- BLOC 1 : STATS (GAUCHE) --- */}
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

          {/* --- BLOC 2 : FIGURE LOGO / CHAÎNE (MILIEU) --- */}
          <div 
            className="hidden lg:flex lg:col-span-1 bg-[#004A99] relative items-center justify-center overflow-hidden"
            data-aos="zoom-in"
          >
            {/* Figure en forme de cube/losange contenant le symbole de la chaîne */}
            <div className="relative w-24 h-24 border-2 border-white/20 rotate-45 flex items-center justify-center">
              {/* On replace le symbole 'infini' du logo ici (SVG simplifié) */}
              <svg 
                viewBox="0 0 24 24" 
                className="w-12 h-12 text-white -rotate-45 fill-current opacity-80"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.414 12c0-1.325-1.089-2.4-2.433-2.4-1.343 0-2.433 1.075-2.433 2.4s1.09 2.4 2.433 2.4c1.344 0 2.433-1.075 2.433-2.4zm-12.828 0c0-1.325 1.09-2.4 2.433-2.4 1.344 0 2.433 1.075 2.433 2.4s-1.09 2.4-2.433 2.4c-1.343 0-2.433-1.075-2.433-2.4zm16.414 0c0 3.314-2.686 6-6 6-1.583 0-3.023-.615-4.093-1.619l-3.814 3.619h-6.093l6-6-6-6h6.093l3.814 3.619c1.07-1.004 2.51-1.619 4.093-1.619 3.314 0 6 2.686 6 6z"/>
              </svg>
            </div>
            
            {/* Décorations abstraites */}
            <div className="absolute top-0 w-full h-[1px] bg-white/10" />
            <div className="absolute bottom-0 w-full h-[1px] bg-white/10" />
          </div>

          {/* --- BLOC 3 : IMAGE PLEIN ÉCRAN (DROITE) --- */}
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
                    /* - object-contain : pour voir l'image COMPLÈTEMENT (indispensable d'après votre demande)
                       - bg-[#004A99] : assure la continuité visuelle
                       - Pas de 'rounded' : l'image garde ses angles droits
                    */
                    className="w-full h-full object-contain" 
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
