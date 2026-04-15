import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Monitor } from "lucide-react";

// LISTE STRICTE : Uniquement les images de votre capture d'écran
const scrollImages = [
  "/portfolio/1.jpg",
  "/portfolio/1.png",
  "/portfolio/2.jpg",
  "/portfolio/2.png",
  "/portfolio/carte-identite-marque-locale0.jpg",
  "/portfolio/carte-identite-marque-locale1.jpg",
  "/portfolio/carte-identite-visuelle1.jpg",
  "/portfolio/carte-identite-visuelle2.jpg",
  "/portfolio/image-photographie9.jpg",
  "/portfolio/image-photographie19.png",
  "/portfolio/logo-et-identite-visuelle0.jpg",
  "/portfolio/logo-et-identite-visuelle1.jpg",
  "/portfolio/logo-et-identite-visuelle2.jpg",
  "/portfolio/logo-et-identite-visuelle3.jpg"
];

export const ProjectsSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        {/* Titre de la section */}
        <div className="text-center mb-12 md:mb-20" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight uppercase tracking-tighter">
            Des projets divers et variés,<br />
            <span className="text-sunuOrange">Mais toujours autour d'une passion commune</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
          
          {/* Bloc GAUCHE : Compteur Orange/Jaune */}
          <div className="lg:col-span-2 bg-[#FFB800] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 shadow-2xl flex items-center justify-center min-h-[350px]" data-aos="fade-right">
            <div className="text-center text-white">
              <Monitor className="w-20 h-20 mx-auto mb-4 opacity-90" />
              <div className="flex flex-col items-center">
                <AnimatedCounter end={50} suffix="+" />
                <h3 className="text-4xl font-black mt-2 tracking-tighter">PROJETS</h3>
                <p className="text-xl opacity-90 italic font-medium">menés avec succès</p>
              </div>
            </div>
          </div>

          {/* Bloc DROITE : Défilé d'images (Marquee) */}
          <div className="lg:col-span-3 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl min-h-[400px] bg-gray-950" data-aos="fade-left">
            
            {/* Conteneur du défilé infini */}
            <div className="absolute inset-0 flex items-center">
              <div className="flex animate-marquee-portfolio h-full w-max">
                {/* Duplication pour assurer la continuité du défilement */}
                {[...scrollImages, ...scrollImages].map((src, index) => (
                  <div key={index} className="w-[300px] md:w-[450px] h-full flex-shrink-0">
                    <img
                      src={src}
                      alt={`Réalisation SunuLink`}
                      className="w-full h-full object-cover border-r-2 border-white/5"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Overlay Gradient Sombre */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col items-center justify-center p-8 z-10 text-white">
              <h4 className="text-4xl md:text-5xl font-black uppercase mb-3 drop-shadow-2xl text-center">
                Portfolio complet
              </h4>
              <p className="text-lg md:text-xl font-bold italic mb-8 opacity-90">
                Découvrez nos réalisations par catégorie
              </p>
              <Link to="/realisations">
                <Button className="bg-sunuOrange text-white hover:bg-white hover:text-sunuOrange font-black px-10 py-7 rounded-2xl shadow-2xl transition-all duration-300 uppercase text-lg">
                  Voir nos réalisations
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes marqueePortfolio {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-portfolio {
          animation: marqueePortfolio 45s linear infinite;
        }
        .animate-marquee-portfolio:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
