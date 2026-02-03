import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, Crown, Check } from "lucide-react";
import { packs, packsIA } from "@/data/homeData";

const iconMap = {
  sparkles: Sparkles,
  star: Star,
  crown: Crown,
};

export const PacksSectionIA = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-12 px-2" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 mb-3 md:mb-4">
            IA LINK  <span className="text-sunuOrange">BUSINESS</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-2">
            Votre visibilité. Notre puissance
          </p>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Des packs sur mesure pour propulser votre communication et dominer votre marché
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {packsIA.map((pack, index) => {
            const Icon = iconMap[pack.icon];
            const isRecommended = pack.recommended;
            const delay = index * 100;

            return (
              <div
                key={pack.name}
                className={`group relative rounded-2xl md:rounded-3xl shadow-xl transition-all duration-500 border-4 border-transparent hover:border-sunuOrange overflow-hidden ${
                  isRecommended ? "lg:-translate-y-4 lg:scale-105" : ""
                } hover:scale-105 md:hover:scale-110 hover:-translate-y-3 md:hover:-translate-y-6 hover:-translate-x-1 hover:rotate-1 md:hover:rotate-2 hover:shadow-[0_20px_50px_rgba(255,127,39,0.4)] md:hover:shadow-[0_25px_70px_rgba(255,127,39,0.5)]`}
                data-aos="fade-up"
                data-aos-delay={delay}
              >
                {isRecommended && (
                  <div className="absolute top-0 right-0 bg-sunuOrange text-white px-4 sm:px-6 py-1.5 sm:py-2 font-bold text-xs sm:text-sm rounded-bl-2xl z-10">
                    ⭐ Recommandé
                  </div>
                )}

                <div className={`grain-texture bg-gradient-to-br ${pack.gradient} text-white p-6 sm:p-8 relative`}>
                  <div className="flex items-center justify-center mb-4 sm:mb-6">
                    <div className="bg-white/20 backdrop-blur-sm w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-center mb-2">{pack.name}</h3>
                  <p className="text-center text-base sm:text-lg font-semibold mb-3 sm:mb-4 opacity-90">{pack.duration}</p>
                  <div className="text-center mb-3 sm:mb-4">
                    <p className="text-3xl sm:text-4xl font-black">{pack.price}</p>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-6 relative">
                  <p className="text-center text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 italic font-semibold">
                    {pack.description}
                  </p>
                  <div className="space-y-2 mb-4 sm:mb-6">
                    {pack.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm">
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bouton Voir Plus */}
        <div className="text-center px-4" data-aos="fade-up">
          <Link to="/pack-pub-ia" className="inline-block w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-sunuOrange to-yellow-500 text-white hover:from-sunuBlue hover:to-sunuCyan font-bold px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              Voir tous nos packs en détail
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PacksSectionIA;
