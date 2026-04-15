import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Monitor, ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export const ProjectsSection = () => {
  // Liste stricte basée sur vos captures
  const slides = [
    ...Array.from({ length: 7 }, (_, i) => `/portfolio/carte-identite-marque-locale${i}.jpg`),
    ...Array.from({ length: 8 }, (_, i) => `/portfolio/carte-identite-visuelle${i + 1}.jpg`)
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Défilement automatique toutes les 3 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const prevSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-stretch">
          
          {/* --- BLOC GAUCHE : COMPTEUR + BOUTON --- */}
          <div 
            className="lg:col-span-2 bg-[#FFB800] rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col items-center justify-center text-center text-white min-h-[400px]" 
            data-aos="fade-right"
          >
            <Monitor className="w-16 h-16 md:w-20 md:h-20 mb-4 opacity-90" />
            <AnimatedCounter end={50} suffix="+" />
            <h3 className="text-3xl md:text-4xl font-black mt-2 tracking-tighter">PROJETS</h3>
            <p className="text-lg md:text-xl opacity-90 italic mb-10">menés avec succès</p>
            
            <Link to="/realisations" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-white text-sunuOrange hover:bg-sunuBlue hover:text-white font-black px-10 py-7 rounded-2xl shadow-xl transition-all duration-300 uppercase text-lg group">
                Voir nos réalisations
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* --- BLOC DROITE : SLIDER D'IMAGES SÉPARÉ --- */}
          <div 
            className="lg:col-span-3 relative rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[400px] md:min-h-[500px] bg-gray-950" 
            data-aos="fade-left"
          >
            {/* Conteneur des Images */}
            <div className="absolute inset-0">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                >
                  <img
                    src={slide}
                    alt={`Projet ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

            {/* FLÈCHES DE NAVIGATION (Apparaissent au survol) */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <button
                onClick={prevSlide}
                className="bg-black/30 hover:bg-sunuOrange text-white p-3 rounded-full backdrop-blur-sm transition-all"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={nextSlide}
                className="bg-black/30 hover:bg-sunuOrange text-white p-3 rounded-full backdrop-blur-sm transition-all"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            {/* INDICATEURS (Points en bas) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === currentIndex ? "bg-sunuOrange w-8" : "bg-white/40 w-2"
                  }`}
                />
              ))}
            </div>

            {/* Titre flottant sur l'image */}
            <div className="absolute top-8 left-8 z-10">
              <span className="bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-black uppercase tracking-widest border-l-4 border-sunuOrange">
                Portfolio
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
