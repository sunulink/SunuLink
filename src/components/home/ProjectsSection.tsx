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

  // Défilement une par une
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Récupère 3 images consécutives pour l'affichage
  const getVisibleSlides = () => {
    return [
      slides[currentIndex % slides.length],
      slides[(currentIndex + 1) % slides.length],
      slides[(currentIndex + 2) % slides.length],
    ];
  };

  return (
    <section className="py-8 md:py-12 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        {/* Titre réduit */}
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-black text-gray-800 uppercase tracking-tighter">
            Des projets <span className="text-sunuOrange">divers et variés</span>
          </h2>
        </div>

        <div className="flex flex-col shadow-xl rounded-[2rem] overflow-hidden border border-gray-100">
          
          {/* --- BLOC HAUT : HAUTEUR DIMINUÉE --- */}
          <div 
            className="bg-[#FFB800] py-4 px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-white" 
            data-aos="fade-down"
          >
            <div className="flex items-center gap-4">
              <Monitor className="w-10 h-10 text-white opacity-90" />
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-black tracking-tighter">
                  <AnimatedCounter end={50} />+
                </span>
                <span className="text-lg md:text-xl font-bold uppercase opacity-90">
                  Projets menés avec succès
                </span>
              </div>
            </div>

            <Link to="/realisations">
              <Button className="bg-sunuBlue text-white hover:bg-white hover:text-sunuBlue font-black px-6 py-5 rounded-xl shadow-md transition-all duration-300 uppercase text-sm group">
                Voir toutes nos réalisations
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* --- BLOC BAS : IMAGES NETTES ET DÉFILEMENT INDIVIDUEL --- */}
          <div className="bg-sunuBlue p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {getVisibleSlides().map((slide, index) => (
                <div 
                  key={`${currentIndex}-${index}`} 
                  className="aspect-square bg-gray-200 overflow-hidden rounded-lg shadow-inner"
                >
                  <img
                    src={slide}
                    alt="Réalisation"
                    // object-cover supprime les marges blanches en remplissant le cadre
                    className="w-full h-full object-cover transition-opacity duration-700 animate-in fade-in"
                  />
                </div>
              ))}
            </div>
            
            {/* Pagination discrète */}
            <div className="flex justify-center mt-4 gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === currentIndex % 5 ? "w-6 bg-sunuOrange" : "w-1.5 bg-white/30"
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
