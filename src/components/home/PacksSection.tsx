import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, Crown, Check } from "lucide-react";
import { packsPub } from "@/data/packsData";

const iconMap = {
  teranga: Sparkles,
  xeewal: Star,
  buur: Crown,
};

export const PacksSection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* En-tête de section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            BOOST <span className="text-sunuOrange">MY PUB</span>
          </h2>
          <p className="text-xl text-gray-600 mb-2 font-bold">
            Votre visibilité. Notre puissance.
          </p>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des packs sur mesure pour propulser votre communication et dominer votre marché.
          </p>
        </div>

        {/* Grille des Packs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packsPub.map((pack, index) => {
            const IconComponent = iconMap[pack.slug as keyof typeof iconMap] || Sparkles;
            
            // Conserver la configuration visuelle d'origine spécifique aux designs des cartes
            const colorClass = 
              pack.slug === "teranga" ? "from-blue-500 to-cyan-500" : 
              pack.slug === "xeewal" ? "from-orange-500 to-yellow-500" : 
              "from-purple-600 to-pink-600";
              
            const buttonColorClass = 
              pack.slug === "teranga" ? "bg-blue-500 hover:bg-blue-600" : 
              pack.slug === "xeewal" ? "bg-orange-500 hover:bg-orange-600" : 
              "bg-purple-600 hover:bg-purple-700";

            return (
              <div
                key={pack.slug}
                className={`group relative rounded-2xl md:rounded-3xl shadow-xl transition-all duration-500 border-4 border-transparent hover:border-sunuOrange overflow-hidden flex flex-col justify-between bg-white ${
                  pack.recommended ? "lg:-translate-y-4 lg:scale-105" : ""
                } hover:scale-105 md:hover:scale-110 hover:-translate-y-3 md:hover:-translate-y-6 hover:-translate-x-1 hover:rotate-1 md:hover:rotate-2 hover:shadow-[0_20px_50px_rgba(255,127,39,0.4)] md:hover:shadow-[0_25px_70px_rgba(255,127,39,0.5)]`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {pack.badge && (
                  <div className="absolute top-0 right-0 bg-sunuOrange text-white px-4 py-1.5 sm:px-6 sm:py-2 font-bold text-xs sm:text-sm rounded-bl-2xl z-10">
                    {pack.recommended ? `⭐ ${pack.badge}` : pack.badge}
                  </div>
                )}

                <div className={`grain-texture bg-gradient-to-br ${colorClass} text-white p-6 sm:p-8`}>
                  <div className="flex items-center justify-center mb-4 sm:mb-6">
                    <div className="bg-white/20 backdrop-blur-sm w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-black text-center mb-1 sm:mb-2 tracking-tight">
                    {pack.name}
                  </h3>
                  
                  <p className="text-center text-sm sm:text-base font-semibold mb-3 sm:mb-4 opacity-90">
                    {pack.duration}
                  </p>
                  
                  <div className="text-center mb-4 sm:mb-6">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-black whitespace-normal break-words">
                      {pack.price}
                      {pack.period && (
                        <span className="text-lg sm:text-xl font-medium block sm:inline">
                          {pack.period}
                        </span>
                      )}
                    </p>
                  </div>
                  
                  <p className="text-center text-base sm:text-lg font-bold mb-2 sm:mb-4 italic min-h-[50px] leading-relaxed">
                    "{pack.tagline}"
                  </p>
                </div>

                <div className="bg-white p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                      {pack.description}
                    </p>

                    <div className="space-y-3 mb-8 border-t border-gray-100 pt-6">
                      {pack.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm sm:text-base font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link to={`/boost-my-pub/${pack.slug}`} className="block w-full">
                      <Button className={`w-full ${buttonColorClass} text-white font-bold py-5 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-auto whitespace-normal text-center`}>
                        Voir le détail
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 px-4" data-aos="fade-up">
          <Link to="/boost-my-pub" className="inline-block w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-sunuOrange to-yellow-500 text-white hover:from-sunuBlue hover:to-sunuCyan font-bold px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              Voir tous nos packs en détail
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PacksSection;
