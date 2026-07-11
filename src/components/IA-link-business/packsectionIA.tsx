import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, Crown, Check } from "lucide-react";

export const PacksSectionIA = () => {
  // Remplacement par les données exactes de Boost My Pub (Teranga, Xeewal, Buur)
  const packsIA = [
    {
      slug: "teranga",
      name: "PACK TERANGA",
      duration: "Engagement : 3 mois recommandé",
      price: "450 000 FCFA",
      period: "/ mois",
      tagline: "Lancer sa communication proprement et efficacement.",
      description: "Le Pack Teranga accompagne les entreprises souhaitant construire une présence digitale professionnelle avec une communication claire, régulière et cohérente.",
      icon: Sparkles,
      color: "from-blue-500 to-cyan-500",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      badge: "Débuter",
      recommended: false,
      features: [
        "Mini stratégie digitale",
        "Création contenus premium",
        "Gestion Facebook & Instagram",
        "Calendrier éditorial",
        "Reporting mensuel"
      ]
    },
    {
      slug: "xeewal",
      name: "PACK XEEWAL",
      duration: "Engagement : 6 mois recommandé",
      price: "750 000 FCFA",
      period: "/ mois",
      tagline: "Accélérer sa croissance et renforcer son image.",
      description: "Une solution destinée aux entreprises souhaitant développer leur visibilité, renforcer leur image et construire une audience engagée.",
      icon: Star,
      color: "from-orange-500 to-yellow-500",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
      badge: "Le plus choisi",
      recommended: true,
      features: [
        "Stratégie marketing avancée",
        "Création contenus premium",
        "Gestion multi-réseaux",
        "Shooting contenu",
        "Publicité digitale"
      ]
    },
    {
      slug: "buur",
      name: "PACK BUUR",
      duration: "Engagement : 12 mois recommandé",
      price: "1 750 000 FCFA",
      period: "/ mois",
      tagline: "Dominer son marché et devenir une référence.",
      description: "L’accompagnement ultime pour les entreprises souhaitant externaliser leur direction marketing et construire une marque forte.",
      icon: Crown,
      color: "from-purple-600 to-pink-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      badge: "Premium",
      recommended: false,
      features: [
        "Direction marketing",
        "Production intensive",
        "Gestion complète réseaux sociaux",
        "Automatisation",
        "KPI avancés"
      ]
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* En-tête de section mis à jour pour BOOST MY PUB */}
        <div className="text-center mb-8 md:mb-12 px-2" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 mb-3 md:mb-4">
            BOOST <span className="text-sunuOrange">MY PUB</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-2 font-bold">
            Votre visibilité. Notre puissance.
          </p>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Des packs sur mesure pour propulser votre communication et dominer votre marché
          </p>
        </div>

        {/* Grille des Packs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 items-stretch">
          {packsIA.map((pack, index) => {
            const Icon = pack.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-2xl md:rounded-3xl shadow-xl transition-all duration-500 border-4 border-transparent hover:border-sunuOrange overflow-hidden flex flex-col justify-between bg-white ${
                  pack.recommended ? "lg:-translate-y-4 lg:scale-105" : ""
                } hover:scale-105 hover:shadow-[0_20px_50px_rgba(255,127,39,0.3)]`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Badge contextuel dynamique */}
                <div className="absolute top-0 right-0 bg-sunuOrange text-white px-4 py-1.5 font-bold text-xs sm:text-sm rounded-bl-2xl z-10">
                  {pack.recommended ? `⭐ ${pack.badge}` : pack.badge}
                </div>

                <div>
                  {/* En-tête de la carte */}
                  <div className={`grain-texture bg-gradient-to-br ${pack.color} text-white p-6 sm:p-8`}>
                    <div className="flex items-center justify-center mb-4 sm:mb-6">
                      <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-black text-center mb-1">{pack.name}</h3>
                    <p className="text-center text-sm font-semibold mb-3 opacity-90">{pack.duration}</p>
                    <div className="text-center">
                      <p className="text-3xl font-black">
                        {pack.price}
                        <span className="text-lg font-normal">{pack.period}</span>
                      </p>
                    </div>
                  </div>

                  {/* Corps de la carte */}
                  <div className="bg-white p-6">
                    <p className="text-center text-base font-bold mb-4 italic text-gray-800 leading-snug">
                      "{pack.tagline}"
                    </p>
                    <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                      {pack.description}
                    </p>
                    <div className="space-y-3">
                      {pack.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-sm">
                          <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 leading-tight font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions au bas de la carte */}
                <div className="p-6 pt-0 bg-white">
                  <Link to="/contact" className="block w-full">
                    <Button className={`w-full ${pack.buttonColor} text-white font-bold py-5 text-base rounded-xl shadow-md transition-all duration-300`}>
                      Je valide
                    </Button>
                  </Link>
                  
                  <Link
                    to={`/boost-my-pub/${pack.slug}`}
                    className="block text-center mt-4 text-sunuBlue hover:text-sunuOrange font-bold text-sm sm:text-base transition-colors"
                  >
                    Voir le détail →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bouton d'action final réorienté vers la page Boost My Pub */}
        <div className="text-center px-4" data-aos="fade-up">
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

export default PacksSectionIA;
