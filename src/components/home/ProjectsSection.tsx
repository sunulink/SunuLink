import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Monitor, ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { useState } from "react";

export const ProjectsSection = () => {
  // Définition des images du portfolio
  const slides = [
    ...Array.from({ length: 7 }, (_, i) => `/portfolio/carte-identite-marque-locale${i}.jpg`),
    // Remplacement de la logique numérique par une logique de lettres (a-g) pour organiser les visuelles
    // J'ai utilisé le code ASCII de la lettre 'a' et de l'index i pour iterer les images
    ...Array.from({ length: 7 }, (_, i) => `/portfolio/carte-identite-visuelle-${String.fromCharCode(97 + i)}.jpg`)
  ];

  // Tripler la liste pour assurer un défilement infini fluide
  const infiniteSlides = [...slides, ...slides, ...slides];

  // État pour mettre l'animation en pause au survol
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-8 md:py-12 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        {/* --- TITRE --- */}
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-800 leading-tight uppercase tracking-tighter">
            Des projets divers et variés,<br />
            <span className="text-sunuOrange">Mais toujours autour d'une passion commune</span>
          </h2>
        </div>

        <div className="flex flex-col shadow-xl rounded-[2.5rem] overflow-hidden border border-gray-100">
          
          {/* --- BLOC HAUT : COMPTEUR --- */}
          <div 
            className="bg-[#FFB800] py-4 px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-white" 
            data-aos="fade-down"
          >
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl hidden md:block">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center text-4xl md:text-6xl font-black tracking-tighter whitespace-nowrap">
                  <AnimatedCounter end={50} />
                  <span className="ml-1">+</span>
                </div>
                <span className="text-lg md:text-xl font-bold uppercase leading-tight max-w-[200px]">
                  Projets menés avec succès
                </span>
              </div>
            </div>

            <Link to="/realisations">
              <Button className="bg-sunuBlue text-white hover:bg-white hover:text-sunuBlue font-black px-8 py-6 rounded-xl shadow-md transition-all duration-300 uppercase text-sm group">
                Voir toutes nos réalisations
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* --- BLOC BAS : CAROUSEL (SANS DÉGRADÉS) --- */}
          <div className="bg-sunuBlue py-10 overflow-hidden relative">
            <div 
              className={`flex w-max ${isPaused ? '' : 'animate-scroll-ultra-slow'}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {infiniteSlides.map((slide, index) => (
                <div 
                  key={index} 
                  className="w-[350px] md:w-[450px] aspect-square mx-4 flex-shrink-0 bg-white overflow-hidden rounded-2xl shadow-2xl"
                >
                  <img
                    src={slide}
                    alt="Réalisation SUNULINK"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* --- STYLES ANIMATION --- */}
      <style>{`
        @keyframes scroll-ultra-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll-ultra-slow {
          animation: scroll-ultra-slow 120s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
