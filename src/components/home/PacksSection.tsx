import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, Crown, Check } from "lucide-react";
import { packs } from "@/data/homeData";

const iconMap = {
  sparkles: Sparkles,
  star: Star,
  crown: Crown,
};

export const PacksSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            BOOST <span className="text-sunuOrange">MY PUB</span>
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Votre visibilité. Notre puissance.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Des packs sur mesure pour propulser votre communication et dominer votre marché
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packs.map((pack, index) => {
            const Icon = iconMap[pack.icon];
            const isRecommended = pack.recommended;
            const delay = index * 100;

            return (
              <div
                key={pack.name}
                className={`relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  isRecommended ? "lg:-translate-y-4 lg:scale-105" : "hover:-translate-y-2"
                }`}
                data-aos="fade-up"
                data-aos-delay={delay}
              >
                {isRecommended && (
                  <div className="absolute top-0 right-0 bg-sunuOrange text-white px-6 py-2 font-bold text-sm rounded-bl-2xl z-10">
                    ⭐ Recommandé
                  </div>
                )}

                <div className={`grain-texture bg-gradient-to-br ${pack.gradient} text-white p-8`}>
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-center mb-2">{pack.name}</h3>
                  <p className="text-center text-lg font-semibold mb-4 opacity-90">{pack.duration}</p>
                  <div className="text-center mb-4">
                    <p className="text-4xl font-black">{pack.price}</p>
                  </div>
                </div>

                <div className="bg-white p-6">
                  <p className="text-center text-gray-700 mb-6 italic font-semibold">
                    {pack.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {pack.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-sm">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bouton Voir Plus */}
        <div className="text-center" data-aos="fade-up">
          <Link to="/boost-my-pub">
            <Button className="bg-gradient-to-r from-sunuOrange to-yellow-500 text-white hover:from-sunuBlue hover:to-sunuCyan font-bold px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              Voir tous nos packs en détail
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PacksSection;
