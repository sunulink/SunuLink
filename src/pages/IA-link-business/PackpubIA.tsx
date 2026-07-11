import { Check, Sparkles, Star, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PackpubIA = () => {
  const packs = [
    {
      slug: "link-ia-start",
      title: "LINK IA START",
      duration: "Engagement : 3 mois recommandé",
      price: "500 000 FCFA",
      period: "/ mois",
      tagline: "Structurer son entreprise et automatiser l’essentiel.",
      description: "Solution pour PME et startups souhaitant intégrer progressivement l’intelligence artificielle.",
      icon: Sparkles,
      color: "from-blue-500 to-cyan-500",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      recommended: false,
      features: [
        "Audit IA",
        "CRM simple",
        "Automatisation tâches",
        "Assistant IA",
        "Formation équipe"
      ]
    },
    {
      slug: "link-ia-growth",
      title: "LINK IA GROWTH",
      duration: "Engagement : 6 mois recommandé",
      price: "900 000 FCFA",
      period: "/ mois",
      tagline: "Automatiser ses processus pour accélérer.",
      description: "Solution destinée aux entreprises en croissance souhaitant automatiser plusieurs fonctions clés.",
      icon: Star,
      color: "from-orange-500 to-yellow-500",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
      recommended: true,
      features: [
        "CRM avancé",
        "Marketing automation",
        "Chatbot intelligent",
        "Analyse données",
        "Process automatisés"
      ]
    },
    {
      slug: "link-ia-transformation",
      title: "LINK IA TRANSFORMATION",
      duration: "Grandes entreprises",
      price: "Sur devis",
      period: "",
      tagline: "Transformer votre entreprise grâce à l’IA.",
      description: "Solution stratégique destinée aux entreprises et institutions souhaitant intégrer l’intelligence artificielle dans leur fonctionnement global.",
      icon: Crown,
      color: "from-purple-600 to-pink-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      recommended: false,
      features: [
        "Audit IA 360°",
        "Stratégie IA",
        "Transformation processus",
        "Data & KPI",
        "Accompagnement direction"
      ]
    }
  ];

  return (
    <section className="py-10 md:py-20 px-4 sm:px-6 bg-white w-full">
      <div className="container mx-auto max-w-7xl">
        {/* En-tête de section */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-800 mb-4">
            Nos Packs <span className="text-sunuOrange">Link IA</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez la formule adaptée à la maturité de votre organisation et commencez votre transformation.
          </p>
        </div>

        {/* Grille des packs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch w-full">
          {packs.map((pack, index) => {
            const IconComponent = pack.icon;

            return (
              <div
                key={pack.slug}
                className={`group relative rounded-2xl md:rounded-3xl shadow-xl transition-all duration-500 border-4 border-transparent hover:border-sunuOrange overflow-hidden flex flex-col justify-between w-full ${
                  pack.recommended ? "lg:-translate-y-4 lg:scale-105" : ""
                } md:hover:scale-105 md:hover:-translate-y-4 md:hover:rotate-1 hover:shadow-[0_20px_40px_rgba(255,127,39,0.2)] md:hover:shadow-[0_25px_70px_rgba(255,127,39,0.4)]`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Badge Recommandé */}
                {pack.recommended && (
                  <div className="absolute top-0 right-0 bg-sunuOrange text-white px-4 py-1.5 sm:px-6 sm:py-2 font-bold text-xs sm:text-sm rounded-bl-2xl z-10">
                    ⭐ Recommandé
                  </div>
                )}
                {!pack.recommended && pack.slug === "link-ia-transformation" && (
                  <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1.5 sm:px-6 sm:py-2 font-bold text-xs sm:text-sm rounded-bl-2xl z-10">
                    🏢 Corporate
                  </div>
                )}

                {/* Partie supérieure colorée */}
                <div className={`grain-texture bg-gradient-to-br ${pack.color} text-white p-5 md:p-8`}>
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-white/20 backdrop-blur-sm w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-7 h-7 md:w-10 md:h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-3xl font-black text-center mb-1 tracking-tight">
                    {pack.title}
                  </h3>
                  <p className="text-center text-xs md:text-base font-semibold mb-3 opacity-90">
                    {pack.duration}
                  </p>
                  <div className="text-center mb-4">
                    <p className="text-2xl md:text-4xl font-black whitespace-normal break-words">
                      {pack.price}
                      {pack.period && (
                        <span className="text-base md:text-xl font-medium block sm:inline">
                          {pack.period}
                        </span>
                      )}
                    </p>
                  </div>
                  <p className="text-center text-sm md:text-lg font-bold mb-2 italic min-h-[40px] md:min-h-[50px] leading-relaxed">
                    "{pack.tagline}"
                  </p>
                </div>

                {/* Partie inférieure blanche */}
                <div className="bg-white p-5 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
                      {pack.description}
                    </p>

                    {/* Liste des caractéristiques */}
                    <div className="space-y-3 mb-8 border-t border-gray-100 pt-6">
                      {pack.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm md:text-base font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions / Boutons */}
                  <div className="mt-auto">
                    <Link to="/contact" className="block w-full">
                      <Button className={`w-full ${pack.buttonColor} text-white font-bold py-4 md:py-6 text-sm md:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-auto whitespace-normal text-center border-none`}>
                        Je valide
                      </Button>
                    </Link>

                    <Link
                      to={`/pack-pub-ia/${pack.slug}`}
                      className="block text-center mt-4 text-sunuBlue hover:text-sunuOrange font-semibold text-sm md:text-base transition-colors"
                    >
                      En savoir plus →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PackpubIA;
