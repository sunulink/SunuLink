import { Check, Sparkles, Star, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// J'ai retiré Header et Footer d'ici car ils sont déjà dans la page parente
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
        {/* TITRE DE LA SECTION */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Choisissez le pack adapté <span className="text-sunuOrange">à votre croissance</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trois offres claires, progressives et complètes pour transformer votre entreprise au Sénégal.
          </p>
        </div>

        {/* GRILLE DES PACKS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packsIA.map((packia, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl shadow-xl transition-all border-4 border-transparent hover:border-sunuOrange overflow-hidden ${
                packia.recommended ? "lg:-translate-y-4" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`grain-texture bg-gradient-to-br ${packia.color} text-white p-8 text-center`}>
                <div className="flex justify-center mb-4">
                  <packia.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-black mb-2">{packia.name}</h3>
                <p className="text-3xl font-black mb-2">{packia.price}</p>
                <p className="text-sm opacity-90 italic">{packia.tagline}</p>
              </div>

              <div className="bg-white p-8">
                <div className="space-y-4 mb-8">
                  {packia.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className={`w-full ${packia.buttonColor} text-white font-bold py-6 rounded-xl transition-transform hover:scale-105`}>
                  <Link to="/contact">Choisir ce pack</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackiaPubIA;
