import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, Crown, Check } from "lucide-react";

export const PacksSectionIA = () => {
  // Intégration des données de PackPubIA
  const packsIA = [
    {
      name: "Pack de Démarrage IA",
      duration: "Durée minimale : 3 mois",
      price: "350 000 FCFA / mois",
      tagline: "PME & Startups",
      description: "Automatiser l’essentiel pour gagner du temps et structurer son activité.",
      icon: Sparkles,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Automatisation marketing & commerciale",
        "CRM intelligent",
        "Automatisation administrative",
        "Support client IA",
        "Tableaux de bord & reporting"
      ]
    },
    {
      name: "Pack Performance IA",
      duration: "Durée minimale : 6 mois",
      price: "750 000 FCFA / mois",
      tagline: "PME & Entreprises en croissance",
      description: "Automatiser plusieurs départements pour accélérer la croissance.",
      icon: Star,
      color: "from-orange-500 to-yellow-500",
      recommended: true,
      features: [
        "Automatisation marketing avancée",
        "Automatisation commerciale prédictive",
        "RH & administration intelligentes",
        "Logistique & opérations",
        "BI & reporting avancé"
      ]
    },
    {
      name: "Pack IA 360° Domination",
      duration: "Durée : 12 mois",
      price: "1 350 000 FCFA / mois",
      tagline: "Grandes entreprises & Leaders",
      description: "Transformer totalement l’entreprise grâce à l’IA.",
      icon: Crown,
      color: "from-purple-600 to-pink-600",
      features: [
        "Automatisation IA complète",
        "Marketing, ventes, RH, admin, production",
        "BI prédictive & direction stratégique",
        "Accompagnement annuel"
      ]
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* En-tête de section */}
        <div className="text-center mb-8 md:mb-12 px-2" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 mb-3 md:mb-4">
            LINK IA <span className="text-sunuOrange">BUSINESS</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-2 font-bold">
            Votre visibilité. Notre puissance
          </p>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Des packs sur mesure pour propulser votre communication et dominer votre marché
          </p>
        </div>

        {/* Grille des Packs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {packsIA.map((pack, index) => {
            const Icon = pack.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-2xl md:rounded-3xl shadow-xl transition-all duration-500 border-4 border-transparent hover:border-sunuOrange overflow-hidden ${
                  pack.recommended ? "lg:-translate-y-4 lg:scale-105" : ""
                } hover:scale-105 hover:shadow-[0_20px_50px_rgba(255,127,39,0.3)]`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {pack.recommended && (
                  <div className="absolute top-0 right-0 bg-sunuOrange text-white px-4 py-1.5 font-bold text-xs sm:text-sm rounded-bl-2xl z-10">
                    ⭐ Recommandé
                  </div>
                )}

                <div className={`grain-texture bg-gradient-to-br ${pack.color} text-white p-6 sm:p-8`}>
                  <div className="flex items-center justify-center mb-4 sm:mb-6">
                    <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-center mb-1">{pack.name}</h3>
                  <p className="text-center text-sm font-semibold mb-3 opacity-90">{pack.duration}</p>
                  <div className="text-center">
                    <p className="text-3xl font-black">{pack.price}</p>
                  </div>
                </div>

                <div className="bg-white p-6">
                  <p className="text-center text-sm text-gray-700 mb-6 italic font-bold">
                    {pack.description}
                  </p>
                  <div className="space-y-3">
                    {pack.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-sm">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bouton d'action final unique */}
        <div className="text-center px-4" data-aos="fade-up">
          <Link to="/pack-pub-ia" className="inline-block w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-sunuOrange to-yellow-500 text-white hover:from-sunuBlue hover:to-sunuCyan font-bold px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              Voir tous nos packs en détail
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PacksSectionIA;
