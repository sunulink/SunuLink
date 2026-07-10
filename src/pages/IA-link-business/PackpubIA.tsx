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
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            Nos Packs <span className="text-sunuOrange">Link IA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez la formule adaptée à la maturité de votre organisation et commencez votre transformation.
          </p>
        </div>

        {/* Grille des packs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packs.map((pack, index) => {
            const IconComponent = pack.icon;

            return (
              <div
                key={pack.slug}
                className={`group relative rounded-2xl md:rounded-3xl shadow-xl transition-all duration-500 border-4 border-transparent hover:border-sunuOrange overflow-hidden flex flex-col justify-between ${
                  pack.recommended ? "lg:-translate-y-4 lg:scale-105" : ""
                } hover:scale-105 md:hover:scale-110 hover:-translate-y-3 md:hover:-translate-y-6 hover:-translate-x-1 hover:rotate-1 md:hover:rotate-2 hover:shadow-[0_20px_50px_rgba(255,127,39,0.4)] md:hover:shadow-[0_25px_70px_rgba(255,127,39,0.5)]`}
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
                <div className={`grain-texture bg-gradient-to-br ${pack.color} text-white p-6 sm:p-8`}>
                  <div className="flex items-center justify-center mb-4 sm:mb-6">
                    <div className="bg-white/20 backdrop-blur-sm w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-center mb-1 sm:mb-2 tracking-tight">
                    {pack.title}
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

                {/* Partie inférieure blanche */}
                <div className="bg-white p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                      {pack.description}
                    </p>

                    {/* Liste des caractéristiques */}
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

                  {/* Actions / Boutons */}
                  <div>
                    <Link to="/contact" className="block w-full">
                      <Button className={`w-full ${pack.buttonColor} text-white font-bold py-5 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-auto whitespace-normal text-center`}>
                        Je valide
                      </Button>
                    </Link>

                    {/* CORRECTION DE L'URL ICI : Utilise /pack-pub-ia/ au lieu de /packs/ */}
                    <Link
                      to={`/pack-pub-ia/${pack.slug}`}
                      className="block text-center mt-4 text-sunuBlue hover:text-sunuOrange font-semibold text-sm sm:text-base transition-colors"
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
