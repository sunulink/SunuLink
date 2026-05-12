import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Monitor, ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export const ProjectsSection = () => {
  const slides = [
    ...Array.from({ length: 7 }, (_, i) => `/portfolio/carte-identite-marque-locale${i}.jpg`),
    ...Array.from({ length: 8 }, (_, i) => `/portfolio/carte-identite-visuelle${i + 1}.jpg`)
  ];

  // On double la liste pour créer l'effet de boucle infinie sans saut
  const infiniteSlides = [...slides, ...slides];

  return (
    <section className="py-8 md:py-12 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        {/* --- TITRE COMPLET RÉTABLI --- */}
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-800 leading-tight uppercase tracking-tighter">
            Des projets divers et variés,<br />
            <span className="text-sunuOrange">Mais toujours autour d'une passion commune</span>
          </h2>
        </div>

        <div className="flex flex-col shadow-xl rounded-[2.5rem] overflow-hidden border border-gray-100">
          
          {/* --- BLOC HAUT : COMPTEUR FIXÉ --- */}
          <div 
            className="bg-[#FFB800] py-4 px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-white" 
            data-aos="fade-down"
          >
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl hidden md:block">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <div className="flex items-center gap-3">
                {/* Bloc Compteur : Le chiffre et le + restent soudés sur la même ligne */}
                <div className="flex items-center text-4xl md:text-6xl font-black tracking-tighter whitespace-nowrap">
                  <AnimatedCounter end={50} />
                  <span>+</span>
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

          {/* --- BLOC BAS : DÉFILEMENT INFINI (Style Logo Carousel) --- */}
          <div className="bg-sunuBlue py-8 overflow-hidden relative group">
            {/* Conteneur animé : défile de droite à gauche */}
            <div className="flex w-max animate-scroll-slow group-hover:pause-animation">
              {infiniteSlides.map((slide, index) => (
                <div 
                  key={index} 
                  className="w-[300px] md:w-[350px] aspect-square mx-3 flex-shrink-0 bg-white overflow-hidden rounded-2xl shadow-lg"
                >
                  <img
                    src={slide}
                    alt="Réalisation SUNULINK"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>

            {/* Overlay dégradé pour adoucir l'entrée/sortie sur les bords */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-sunuBlue to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-sunuBlue to-transparent z-10" />
          </div>

        </div>
      </div>

      {/* Styles CSS nécessaires pour l'animation (à mettre dans votre fichier CSS global ou via Tailwind config) */}
      <style>{`
        @keyframes scroll-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-slow {
          animation: scroll-slow 40s linear infinite;
        }
        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
