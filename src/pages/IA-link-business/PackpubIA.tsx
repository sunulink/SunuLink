import { CheckCircle, Zap, Shield, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PackpubIA = () => {
  const packs = [
    {
      name: "Pack Starter IA",
      icon: Zap,
      price: "Sur devis",
      description: "Idéal pour les petites entreprises qui souhaitent débuter leur transition digitale.",
      color: "from-blue-500 to-sunuCyan",
      features: [
        "Audit initial des processus internes",
        "Mise en place d'un CRM automatisé standard",
        "Configuration de 2 workflows d'emails automatisés",
        "Support par ticket (48h)",
      ],
      cta: "Choisir l'offre Starter",
      popular: false
    },
    {
      name: "Pack Business Pro",
      icon: Shield,
      price: "Sur devis",
      description: "Le choix recommandé pour automatiser vos services et booster votre productivité globale.",
      color: "from-sunuBlue to-purple-600",
      features: [
        "Tout le pack Starter IA",
        "Automatisation Commerciale & Marketing avancée",
        "Intégration de Chatbots IA intelligents (24/7)",
        "Tableau de bord Business Intelligence (KPIs)",
        "Formation complète de vos équipes (Session 1 jour)",
        "Support prioritaire (24h)",
      ],
      cta: "Démarrer avec Pro",
      popular: true
    },
    {
      name: "Pack Enterprise 360°",
      icon: Crown,
      price: "Sur devis",
      description: "Transformation IA sur-mesure pour une intégration complète à grande échelle.",
      color: "from-purple-600 to-sunuOrange",
      features: [
        "Audit IA 360° approfondi de l'infrastructure",
        "Automatisation intégrale (RH, Logistique, Juridique & Production)",
        "Déploiement de modèles prédictifs personnalisés",
        "Accompagnement et Conseil IA stratégique continu",
        "Suivi et optimisation des performances trimestriels",
        "Support dédié 24/7 et gestionnaire de compte",
      ],
      cta: "Contacter un expert",
      popular: false
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-black text-gray-800 mb-4" data-aos="fade-up">
          Nos Packs <span className="text-sunuOrange">Link IA Business</span>
        </h2>
        <p className="text-gray-600 text-lg" data-aos="fade-up" data-aos-delay="100">
          Des solutions d'accompagnement clés en main adaptées à la taille et aux ambitions de votre structure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {packs.map((pack, index) => {
          const IconComponent = pack.icon;

          return (
            <div
              key={index}
              className={`relative flex flex-col justify-between p-8 rounded-3xl transition-all duration-500 shadow-xl ${
                pack.popular 
                  ? "border-4 border-sunuOrange scale-105 z-10 bg-white" 
                  : "border border-gray-100 bg-gradient-to-b from-gray-50 to-white hover:scale-102"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {pack.popular && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-sunuOrange text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                  Plus Populaire
                </span>
              )}

              <div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${pack.color} mb-6`}>
                  {IconComponent && <IconComponent className="w-7 h-7" />}
                </div>

                <h3 className="text-2xl font-black text-gray-800 mb-2">{pack.name}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{pack.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-black text-gray-900">{pack.price}</span>
                </div>

                <hr className="border-gray-100 mb-6" />

                <ul className="space-y-4 mb-8">
                  {pack.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                asChild
                className={`w-full py-4 rounded-xl font-bold transition-all border-none h-auto ${
                  pack.popular
                    ? "bg-sunuOrange hover:bg-sunuBlue text-white shadow-lg"
                    : "bg-gray-100 hover:bg-sunuBlue text-gray-800 hover:text-white"
                }`}
              >
                <Link to="/contact">{pack.cta}</Link>
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PackpubIA;
