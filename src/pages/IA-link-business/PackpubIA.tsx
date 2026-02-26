import { Check, Sparkles, Star, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PackiaPubIA = () => {
  const packsIA = [
    {
      slug: "Pack-de-Démarrage-IA",
      name: "Pack de Démarrage IA",
      duration: "Durée minimale : 3 mois",
      price: "350 000 FCFA / mois",
      tagline: "PME & Startups",
      description: "Automatiser l’essentiel pour gagner du temps et structurer son activité.",
      icon: Sparkles,
      color: "from-blue-500 to-cyan-500",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      features: [
        "Automatisation marketing & commerciale",
        "CRM intelligent",
        "Automatisation administrative",
        "Support client IA",
        "Tableaux de bord & reporting"
      ]
    },
    {
      slug: "Pack-Performance-IA",
      name: "Pack Performance IA",
      duration: "Durée minimale : 6 mois",
      price: "750 000 FCFA / mois",
      tagline: "PME & Entreprises en croissance",
      description: "Automatiser plusieurs départements pour accélérer la croissance.",
      icon: Star,
      color: "from-orange-500 to-yellow-500",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
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
      slug: "Pack-IA-360-Domination",
      name: "Pack IA 360° Domination",
      duration: "Durée : 12 mois",
      price: "1 350 000 FCFA / mois",
      tagline: "Grandes entreprises & Leaders",
      description: "Transformer totalement l’entreprise grâce à l’IA.",
      icon: Crown,
      color: "from-purple-600 to-pink-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      features: [
        "Automatisation IA complète",
        "Marketing, ventes, RH, admin, production",
        "BI prédictive & direction stratégique",
        "Accompagnement annuel"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-2xl md:text-4xl font-bold mb-8" data-aos="fade-up">
            Choisissez le pack adapté<span className="text-sunuOrange"> à votre niveau de croissance</span>
          </p>
          <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="100">
            <p className="leading-relaxed text-gray-600">
               Trois offres claires, progressives et complètes, conçues pour répondre aux besoins réels <br/> des entreprises au Sénégal et en Afrique.
            </p>      
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packsIA.map((packia, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl md:rounded-3xl shadow-xl transition-all duration-500 border-4 border-transparent hover:border-sunuOrange overflow-hidden ${
                packia.recommended ? "lg:-translate-y-4 lg:scale-105" : ""
              } hover:scale-105 md:hover:scale-110 hover:shadow-[0_20px_50px_rgba(255,127,39,0.4)]`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {packia.recommended && (
                <div className="absolute top-0 right-0 bg-sunuOrange text-white px-6 py-2 font-bold text-sm rounded-bl-2xl z-10">
                  ⭐ Recommandé
                </div>
              )}

              <div className={`grain-texture bg-gradient-to-br ${packia.color} text-white p-8 text-center`}>
                <div className="flex justify-center mb-4">
                   <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center">
                    <packia.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl font-black mb-2">{packia.name}</h2>
                <p className="text-3xl font-black mb-2">{packia.price}</p>
                <p className="text-sm font-bold italic opacity-90">{packia.tagline}</p>
              </div>

              <div className="bg-white p-8">
                <p className="text-gray-700 mb-6 leading-relaxed text-sm">{packia.description}</p>

                <div className="space-y-3 mb-8">
                  {packia.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* LES DEUX BOUTONS RÉINSÉRÉS */}
                <div className="space-y-4">
                  <Button asChild className={`w-full ${packia.buttonColor} text-white font-bold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}>
                    <Link to="/contact">Je valide</Link>
                  </Button>
                  
                  <Link
                    to={`/pack-pub-ia/${packia.slug}`}
                    className="block text-center text-sunuBlue hover:text-sunuOrange font-semibold transition-colors text-base"
                  >
                    En savoir plus →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackiaPubIA;
