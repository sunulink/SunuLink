import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Monitor } from "lucide-react";

export const ProjectsSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Description centrée */}
        <div className="text-center mb-10 md:mb-16 px-2" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 leading-tight">
            DES PROJETS DIVERS ET VARIÉS,<br />
            <span className="text-sunuOrange">MAIS TOUJOURS AUTOUR D'UNE PASSION COMMUNE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
          {/* Carte PROJETS */}
          <div className="lg:col-span-2 grain-texture bg-gradient-to-br from-sunuOrange to-yellow-500 rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 min-h-[300px] sm:min-h-[350px] w-full" data-aos="fade-right">
            <div className="text-center text-white">
              <Monitor className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 opacity-80" />
              <AnimatedCounter end={150} suffix="+" />
              <h3 className="text-2xl sm:text-3xl font-black mt-2">PROJETS</h3>
              <p className="text-base sm:text-lg opacity-90">menés avec succès</p>
            </div>
          </div>

          {/* Carte PORTFOLIO */}
          <div className="lg:col-span-3 grain-texture bg-gradient-to-br from-yellow-400 to-sunuOrange rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 min-h-[300px] sm:min-h-[350px]" data-aos="fade-left">
            <div className="h-full flex items-center justify-center p-6 sm:p-8 md:p-12">
              <div className="text-white text-center">
                <p className="text-2xl sm:text-3xl font-black mb-3 md:mb-4">Portfolio complet</p>
                <p className="text-base sm:text-lg md:text-xl opacity-90 mb-4 md:mb-6">Découvrez nos réalisations par catégorie</p>
                <Link to="/realisations" className="inline-block w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-white text-sunuOrange hover:bg-sunuBlue hover:text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    Voir nos réalisations
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
