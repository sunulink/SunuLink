import React from "react";
import { Link } from "react-router-dom";
import { Check, Bot, Cpu, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const PackpubIA = () => {
  const packs = [
    {
      title: "Pack Link IA Découverte",
      slug: "link-ia-decouverte",
      duration: "Durée : 2 à 3 semaines",
      price: "1 500 000 F CFA",
      period: "",
      tagline: "Idéal pour faire vos premiers pas dans l'univers de l'IA.",
      description:
        "Ce pack d'initiation permet d'évaluer le potentiel de l'IA au sein de votre structure et de déployer une première solution simple et impactante pour acculturer vos équipes.",
      features: [
        "1 Session d'idéation et d'évaluation (2h)",
        "Création d'un Agent IA personnalisé (ex: Support client basique)",
        "Intégration sur 1 canal (Web ou WhatsApp)",
        "Formation de prise en main pour 3 collaborateurs",
        "Support technique (2 semaines post-déploiement)",
      ],
      color: "from-blue-600 to-cyan-500",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      recommended: false,
      icon: Bot,
    },
    {
      title: "Pack Link IA Croissance",
      slug: "link-ia-croissance",
      duration: "Durée : 4 à 6 semaines",
      price: "3 500 000 F CFA",
      period: "",
      tagline: "Le choix parfait pour structurer et automatiser vos processus clés.",
      description:
        "Conçu pour les PME en pleine expansion, ce pack interconnecte vos outils du quotidien à des agents IA avancés pour maximiser la productivité et générer un ROI mesurable.",
      features: [
        "Audit complet des workflows existants (1 semaine)",
        "Développement de 2 Agents IA avancés métiers",
        "Connexion API complexes (CRM, ERP, Google Workspace)",
        "Automatisation de 2 processus métiers critiques",
        "Formation approfondie + livret de prompt engineering",
        "Support & Optimisation (1 mois inclus)",
      ],
      color: "from-orange-500 to-amber-500",
      buttonColor: "bg-sunuOrange hover:bg-orange-600",
      recommended: true,
      icon: Cpu,
    },
    {
      title: "Pack Link IA Transformation",
      slug: "link-ia-transformation",
      duration: "Durée : Sur Mesure",
      price: "Sur Devis",
      period: "",
      tagline: "Une restructuration globale axée sur l'intelligence artificielle.",
      description:
        "Une solution complète et hautement personnalisée pour les grandes organisations souhaitant placer l'IA au cœur de leur modèle opérationnel et de leur stratégie globale.",
      features: [
        "Audit holistique de l'organisation et gouvernance des données",
        "Création d'un écosystème d'Agents IA interconnectés",
        "Développement de solutions IA propriétaires (sur mesure)",
        "Conduite du changement et plan de formation global",
        "Comité de suivi stratégique trimestriel",
        "Support premium 24/7 avec SLA garanti",
      ],
      color: "from-purple-700 to-indigo-800",
      buttonColor: "bg-purple-700 hover:bg-purple-800",
      recommended: false,
      icon: Layers,
    },
  ];

  return (
    <section className="py-10 md:py-20 px-4 sm:px-6 bg-white w-full">
      <div className="container mx-auto max-w-7xl w-full">
        {/* En-tête de section */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-800 mb-4">
            Nos Packs <span className="text-sunuOrange">Link IA</span>
          </h2>
          <div className="h-1.5 w-24 bg-sunuOrange mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez la formule adaptée à la maturité de votre organisation et commencez votre transformation.
          </p>
        </div>

        {/* Grille des packs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch w-full">
          {packs.map((pack, index) => {
            const IconComponent = pack.icon;

            return (
              <div
                key={pack.slug}
                className={`group relative rounded-2xl md:rounded-3xl shadow-xl transition-all duration-500 border-4 border-transparent hover:border-sunuOrange overflow-hidden flex flex-col justify-between w-full ${
                  pack.recommended ? "lg:-translate-y-4" : ""
                } md:hover:-translate-y-4 md:hover:rotate-1 hover:shadow-[0_20px_40px_rgba(255,127,39,0.2)] md:hover:shadow-[0_25px_70px_rgba(255,127,39,0.4)]`}
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
                <div className={`grain-texture bg-gradient-to-br ${pack.color} text-white p-6 md:p-8`}>
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-white/20 backdrop-blur-sm w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-7 h-7 md:w-10 md:h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl xl:text-3xl font-black text-center mb-1 tracking-tight balance">
                    {pack.title}
                  </h3>
                  <p className="text-center text-xs md:text-sm font-semibold mb-3 opacity-90">
                    {pack.duration}
                  </p>
                  <div className="text-center mb-4">
                    <p className="text-2xl md:text-4xl font-black whitespace-nowrap">
                      {pack.price}
                      {pack.period && (
                        <span className="text-base md:text-xl font-medium">
                          {pack.period}
                        </span>
                      )}
                    </p>
                  </div>
                  <p className="text-center text-sm md:text-base font-bold mb-2 italic min-h-[40px] md:min-h-[50px] leading-relaxed">
                    "{pack.tagline}"
                  </p>
                </div>

                {/* Partie inférieure blanche */}
                <div className="bg-white p-6 md:p-8 flex-1 flex flex-col justify-between">
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
