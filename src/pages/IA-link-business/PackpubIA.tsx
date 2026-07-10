import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PackpubIA = () => {
  const packs = [
    {
      title: "LINK IA START",
      tagline: "Structurer son entreprise et automatiser l’essentiel.",
      price: "500 000 FCFA",
      period: "/ mois",
      commitment: "3 mois recommandé",
      badge: null,
      features: [
        "Audit IA",
        "CRM simple",
        "Automatisation tâches",
        "Assistant IA",
        "Formation équipe"
      ],
      slug: "link-ia-start",
      color: "border-sunuBlue/20 hover:border-sunuBlue"
    },
    {
      title: "🚀 LINK IA GROWTH",
      tagline: "Automatiser ses processus pour accélérer.",
      price: "900 000 FCFA",
      period: "/ mois",
      commitment: "6 mois recommandé",
      badge: null,
      features: [
        "CRM avancé",
        "Marketing automation",
        "Chatbot intelligent",
        "Analyse données",
        "Process automatisés"
      ],
      slug: "link-ia-growth",
      color: "border-sunuOrange/20 hover:border-sunuOrange relative lg:scale-105 z-10 shadow-2xl"
    },
    {
      title: "🏢 LINK IA TRANSFORMATION",
      tagline: "Transformer votre entreprise grâce à l’IA.",
      price: "Sur devis",
      period: "",
      commitment: "",
      badge: "Grandes entreprises",
      features: [
        "Audit IA 360°",
        "Stratégie IA",
        "Transformation processus",
        "Data & KPI",
        "Accompagnement direction"
      ],
      slug: "link-ia-transformation",
      color: "border-purple-500/20 hover:border-purple-500"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
          Nos Packs <span className="text-sunuOrange">Link IA</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choisissez la formule adaptée à la maturité de votre organisation et commencez votre transformation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
        {packs.map((pack, index) => (
          <div
            key={pack.slug} // Utilisation du slug pour une clé stable et unique
            className={`bg-white rounded-3xl p-8 border-4 transition-all duration-300 flex flex-col justify-between ${pack.color}`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div>
              {/* Badge si présent */}
              {pack.badge && (
                <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                  {pack.badge}
                </span>
              )}

              {/* Titre du Pack */}
              <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">
                {pack.title}
              </h3>

              {/* Accroche */}
              <p className="text-gray-600 min-h-[50px] mb-6 text-sm md:text-base leading-relaxed">
                {pack.tagline}
              </p>

              {/* Prix */}
              <div className="mb-2">
                <span className="text-3xl md:text-4xl font-black text-sunuBlue">
                  {pack.price}
                </span>
                <span className="text-gray-500 font-medium text-lg">{pack.period}</span>
              </div>

              {/* Engagement */}
              {pack.commitment && (
                <p className="text-sm text-sunuOrange font-semibold mb-8">
                  {pack.commitment}
                </p>
              )}
              {!pack.commitment && <div className="mb-8 h-5"></div>}

              {/* Liste des points visibles */}
              <ul className="space-y-4 mb-8 border-t border-gray-100 pt-6">
                {pack.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bouton Voir le détail */}
            <Button
              asChild
              className={`w-full py-6 rounded-full font-bold text-lg transition-all border-none shadow-md ${
                pack.price === "Sur devis"
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : pack.title.includes("GROWTH")
                  ? "bg-sunuOrange hover:bg-sunuBlue text-white"
                  : "bg-sunuBlue hover:bg-sunuOrange text-white"
              }`}
            >
              <Link to={`/packs/${pack.slug}`} className="flex items-center justify-center gap-2">
                Voir le détail <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackpubIA;
