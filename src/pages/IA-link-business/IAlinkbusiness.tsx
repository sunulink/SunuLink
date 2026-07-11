import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroPages from "@/components/HeroPages";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Cpu, Layers, Sparkles } from "lucide-react";
import PackpubIA from "@/components/PackpubIA";

const IAlinkbusiness = () => {
  const services = [
    {
      icon: Bot,
      title: "Création d'Agents IA sur Mesure",
      description:
        "Développement d'assistants virtuels autonomes et intelligents, capables de gérer vos tâches complexes et d'automatiser vos processus métiers clés.",
      features: [
        "Agents de support client 24/7",
        "Assistants de productivité internes",
        "Automatisation des workflows",
        "Intégration API & Systèmes existants",
      ],
      color: "from-blue-600 to-indigo-600",
      accent: "bg-blue-50 text-blue-700",
    },
    {
      icon: Cpu,
      title: "Intégration d'Outils IA",
      description:
        "Déploiement et configuration des meilleures technologies IA du marché (ChatGPT, Claude, Make) directement au sein de votre écosystème logiciel actuel.",
      features: [
        "Audit des outils existants",
        "Connexion via API sécurisées",
        "Optimisation des coûts de jetons (tokens)",
        "Tableaux de bord de suivi",
      ],
      color: "from-purple-600 to-pink-600",
      accent: "bg-purple-50 text-purple-700",
    },
    {
      icon: Layers,
      title: "Audit & Stratégie IA",
      description:
        "Analyse approfondie de vos processus organisationnels pour identifier les opportunités d'intégration IA à fort retour sur investissement (ROI).",
      features: [
        "Cartographie des processus",
        "Étude de faisabilité technique",
        "Calcul du ROI prévisionnel",
        "Roadmap de déploiement",
      ],
      color: "from-amber-500 to-orange-600",
      accent: "bg-amber-50 text-amber-700",
    },
    {
      icon: Sparkles,
      title: "Formation & Accompagnement",
      description:
        "Programmes de montée en compétences pour vos équipes afin de maîtriser l'ingénierie de prompts (Prompt Engineering) et adopter une culture axée sur l'IA.",
      features: [
        "Ateliers pratiques de Prompting",
        "Accompagnement au changement",
        "Guides de bonnes pratiques",
        "Suivi post-formation",
      ],
      color: "from-emerald-600 to-teal-600",
      accent: "bg-emerald-50 text-emerald-700",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between overflow-x-hidden selection:bg-sunuOrange selection:text-white">
      <Navbar />

      <main className="flex-grow pt-16">
        {/* HERO */}
        <HeroPages
          title="Propulsez votre entreprise avec l'Intelligence Artificielle"
          subtitle="Link Business IA"
          description="Chez SUNULINK CONSULTING, nous transformons le potentiel de l'intelligence artificielle en valeur concrète pour votre entreprise. De l'audit stratégique à la création d'agents autonomes sur mesure, nous concevons des solutions intelligentes qui optimisent vos opérations, réduisent vos coûts et libèrent le potentiel créatif de vos équipes."
          bgImage="/images/bghero.webp"
        />

        {/* SECTION SERVICES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-black text-gray-800 mb-4 tracking-tight">
              Nos Solutions <span className="text-sunuOrange">IA Business</span>
            </h2>
            <div className="h-1.5 w-24 bg-sunuOrange mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Découvrez notre gamme complète d'expertises pour intégrer l'intelligence artificielle au cœur de votre stratégie de croissance.
            </p>
          </div>

          {/* GRILLE DES SERVICES */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div>
                    {/* Icône avec dégradé */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-sunuOrange transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Liste des caractéristiques */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3 text-gray-700">
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                          <span className="font-medium text-sm md:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bouton d'action */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 font-bold text-sunuBlue hover:text-sunuOrange transition-colors mt-auto group/btn"
                  >
                    <span>Discuter de ce projet</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* PACKS */}
        <PackpubIA />

        {/* CTA SECTION */}
        <section className="bg-gradient-to-br from-sunuBlue to-slate-900 text-white py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden">
          {/* Formes décoratives en arrière-plan */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sunuOrange/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10" data-aos="zoom-in">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
              Prêt à automatiser et scaler vos opérations ?
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-medium">
              Planifiez une session de cadrage gratuite de 30 minutes avec nos experts IA pour évaluer le potentiel d'automatisation de votre entreprise.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-sunuOrange text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-white hover:text-sunuBlue transition-all duration-300 text-lg group"
            >
              <span>Réserver mon diagnostic gratuit</span>
              <ArrowRight className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IAlinkbusiness;
