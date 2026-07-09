import { Check, Sparkles, Star, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PackiaPubIA = () => {
  const packsIA = [
    {
      slug: "link-ia-start",
      name: "LINK IA START",
      duration: "Engagement : 3 mois recommandé",
      price: "500 000 FCFA / mois",
      tagline: "Structurer son entreprise et automatiser l’essentiel.",
      description: "Solution pour PME et startups souhaitant intégrer progressivement l’intelligence artificielle.",
      icon: Sparkles,
      color: "from-blue-500 to-cyan-500",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
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
      name: "LINK IA GROWTH",
      duration: "Engagement : 6 mois recommandé",
      price: "900 000 FCFA / mois",
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
      name: "LINK IA TRANSFORMATION",
      duration: "Grandes entreprises",
      price: "Sur devis",
      tagline: "Transformer votre entreprise grâce à l’IA.",
      description: "Solution stratégique destinée aux entreprises et institutions souhaitant intégrer l’intelligence artificielle dans leur fonctionnement global.",
      icon: Crown,
      color: "from-purple-600 to-pink-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
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
                  🚀 Propulser
                </div>
              )}

              <div className={`grain-texture bg-gradient-to-br ${packia.color} text-white p-8 text-center`}>
                <div className="flex justify-center mb-4">
                   <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center">
                    <packia.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl font-black mb-2">{packia.name}</h2>
                <p className="text-3xl font-black mb-1">{packia.price}</p>
                <p className="text-xs font-medium uppercase tracking-wider opacity-75 mb-3">{packia.duration}</p>
                <p className="text-sm font-bold italic opacity-90">{packia.tagline}</p>
              </div>

              <div className="bg-white p-8">
                <p className="text-gray-700 mb-6 leading-relaxed text-sm min-h-[40px]">{packia.description}</p>

                <div className="space-y-3 mb-8">
                  {packia.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <Button asChild className={`w-full ${packia.buttonColor} text-white font-bold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}>
                    <Link to="/contact">Je valide</Link>
                  </Button>
                  
                  <Link
                    to={`/pack-pub-ia/${packia.slug}`}
                    className="block text-center text-sunuBlue hover:text-sunuOrange font-semibold transition-colors text-base"
                  >
                    Voir le détail →
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
