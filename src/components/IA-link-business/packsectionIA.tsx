import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, Crown, Check } from "lucide-react";
import { packsIA } from "@/data/homeData"; 

const iconMap = {
  "link-ia-start": Sparkles,
  "link-ia-growth": Star,
  "link-ia-transformation": Crown,
};

export const PackSectionIA = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* En-tête de section pour LINK IA BUSINESS */}
        <div className="text-center mb-8 md:mb-12 px-2" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 mb-3 md:mb-4">
            LINK IA <span className="text-sunuOrange">BUSINESS</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-2">
            Votre visibilité. Notre puissance.
          </p>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Des packs sur mesure pour propulser votre communication et dominer votre marché
          </p>
        </div>

        {/* Grille des packs IA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 items-stretch">
          {packsIA.map((pack, index) => {
            const Icon = iconMap[pack.icon as keyof typeof iconMap] || Sparkles;
            const isRecommended = pack.recommended;
            const delay = index * 100;

            return (
              <div
                key={pack.name}
                className={`group relative rounded-2xl md:rounded-3xl shadow-xl transition-all duration-500 border-4 border-transparent hover:border-sunuOrange overflow-hidden flex flex-col justify-between bg-white ${
                  isRecommended ? "lg:-translate-y-4 lg:scale-105" : ""
                } hover:scale-105 md:hover:scale-110 hover:-translate-y-3 md:hover:-translate-y-6 hover:-translate-x-1 hover:rotate-1 md:hover:rotate-2 hover:shadow-[0_20px_50px_rgba(255,127,39,0.4)] md:hover:shadow-[0_25px_70px_rgba(255,127,39,0.5)]`}
                data-aos="fade-up"
                data-aos-delay={delay}
              >
                {pack.badge && (
                  <div className="absolute top-0 right-0 bg-sunuOrange text-white px-4 py-1.5 sm:px-6 sm:py-2 font-bold text-xs sm:text-sm rounded-bl-2xl z-10">
                    {isRecommended ? `⭐ ${pack.badge}` : pack.badge}
                  </div>
                )}

                <div>
                  <div className={`grain-texture bg-gradient-to-br ${pack.gradient} text-white p-6 sm:p-8`}>
                    <div className="flex items-center justify-center mb-4 sm:mb-6">
                      <div className="bg-white/20 backdrop-blur-sm w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-center mb-1 sm:mb-2">{pack.name}</h3>
                    <p className="text-center text-sm sm:text-base opacity-90 mb-3 sm:mb-4 font-medium">{pack.duration}</p>
                    <div className="text-center mb-4 sm:mb-6">
                      <p className="text-2xl sm:text-3xl md:text-4xl font-black whitespace-normal break-words">
                        {pack.price}
                        {pack.period && <span className="text-lg font-normal">{pack.period}</span>}
                      </p>
                    </div>
                    <p className="text-center text-base sm:text-lg font-bold mb-2 sm:mb-4 italic leading-snug">"{pack.tagline}"</p>
                  </div>

                  <div className="bg-white p-6 sm:p-8">
                    <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                      {pack.description}
                    </p>

                    <div className="space-y-3 mb-4">
                      {pack.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm sm:text-base font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 bg-white">
                  <Link to={`/pack-pub-ia/${pack.slug}`} className="block w-full">
                    <Button className={`w-full ${pack.buttonColor || 'bg-sunuOrange hover:bg-orange-600'} text-white font-bold py-5 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-auto whitespace-normal text-center`}>
                      Voir le détail
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

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

export default PackSectionIA;
