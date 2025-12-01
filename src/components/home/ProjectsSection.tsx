import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Monitor } from "lucide-react";

export const ProjectsSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Carte PROJETS */}
          <div className="grain-texture bg-gradient-to-br from-sunuOrange to-yellow-500 rounded-3xl p-8 shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 max-w-md mx-auto lg:mx-0 w-full" data-aos="fade-right">
            <div className="text-center text-white">
              <Monitor className="w-24 h-24 mx-auto mb-4 opacity-80" />
              <AnimatedCounter end={150} suffix="+" />
              <h3 className="text-3xl font-black mt-2">PROJETS</h3>
              <p className="text-lg opacity-90">menés avec succès</p>
            </div>
          </div>

          {/* Carte PORTFOLIO */}
          <div className="grain-texture bg-gradient-to-br from-yellow-400 to-sunuOrange rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2" data-aos="fade-left">
            <div className="h-full flex items-center justify-center p-12">
              <div className="text-white text-center">
                <p className="text-3xl font-black mb-4">Portfolio complet</p>
                <p className="text-xl opacity-90 mb-6">Découvrez nos réalisations par catégorie</p>
                <Link to="/realisations">
                  <Button className="bg-white text-sunuOrange hover:bg-sunuBlue hover:text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
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
