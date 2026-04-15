import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Monitor } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const ProjectsSection = () => {
  // Construction de la liste précise basée sur vos captures
  const slides = [
    ...Array.from({ length: 7 }, (_, i) => `/portfolio/carte-identite-marque-locale${i}.jpg`),
    ...Array.from({ length: 8 }, (_, i) => `/portfolio/carte-identite-visuelle${i + 1}.jpg`)
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play : change toutes les 3 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* TEXTE D'INTRODUCTION (Optionnel, au-dessus du slider) */}
      <div className="container mx-auto px-6 pt-12 text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight uppercase">
          Des projets divers et variés,<br />
          <span className="text-sunuOrange">Mais toujours autour d'une passion commune</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row h-[600px] md:h-[700px] w-full gap-0">
        
        {/* BLOC INFOS (Glace le compteur 50+ Projets) */}
        <div className="w-full lg:w-1/3 bg-[#FFB800] p-10 flex flex-col justify-center items-center text-white z-20">
          <Monitor className="w-16 h-16 mb-4 opacity-90" />
          <AnimatedCounter end={50} suffix="+" />
          <h3 className="text-3xl font-black mt-2">PROJETS</h3>
          <p className="text-lg italic opacity-90">menés avec succès</p>
          
          <div className="mt-10 text-center">
            <h4 className="text-2xl font-black uppercase mb-4">Portfolio complet</h4>
            <Link to="/realisations">
              <Button className="bg-white text-sunuOrange hover:bg-sunuBlue hover:text-white font-black px-8 py-6 rounded-xl transition-all uppercase">
                Voir nos réalisations
              </Button>
            </Link>
          </div>
        </div>

        {/* BLOC SLIDER (Prend tout le reste de l'espace) */}
        <div className="w-full lg:w-2/3 relative group h-full bg-gray-900">
          
          {/* Images du Slider */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide}
                alt={`Projet SunuLink ${index}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay pour la profondeur */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          ))}

          {/* FLÈCHES DE NAVIGATION */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-all z-30"
          >
            <ChevronLeft size={40} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-all z-30"
          >
            <ChevronRight size={40} />
          </button>

          {/* INDICATEURS (Points en bas) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentIndex ? "bg-sunuOrange w-8" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
