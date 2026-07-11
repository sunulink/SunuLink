import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Briefcase, Image, Globe, Brain, CheckCircle, Palette, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PackpubIA from "./PackpubIA";

const IAlinkbusiness = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Automatisation Marketing",
      slug: "automatisation-marketing",
      description: "Bâtissez une stratégie solide et alignée sur vos objectifs pour garantir votre réussite.",
      color: "from-sunuBlue to-sunuCyan",
      offerings: [
        "CRM automatisé : Gestion intelligente des prospects et clients.",
        "Email & campagnes marketing : Envoi automatique et ciblage précis.",
        "Analyse de performance : Tableaux de bord interactifs et prédictifs",
        "Social Media Automation : Planification et publication automatique sur les réseaux sociaux",
        "Segmentation et scoring IA : Identification des prospects à forte valeur et priorisation des actions.",
      ]
    },
    {
      icon: Palette,
      title: "Automatisation Commerciale",
      slug: "automatisation-commerciale",
      description: "Créez une identité de marque forte, mémorable et cohérente qui vous distingue.",
      color: "from-purple-500 to-pink-500",
      offerings: [
        "Prospection IA : Identification automatique des clients potentiels et scoring prédictif.",
        "Suivi des ventes : Alertes et rapports automatisés pour une gestion optimale.",
        "Analyse de marché : Informations prédictives pour orienter les stratégies commerciales.",
        "CRM intégré : Centralisation et suivi des prospects et clients en temps réel.",
        "Optimisation du pipeline : Priorisation intelligente des opportunités de vente.",
      ]
    },
    {
      icon: Image,
      title: " Automatisation Administrative",
      slug: "automatisation-administrative",
      description: "Gestion documentaire automatisée : Classement, archivage et accès rapide ",
      color: "from-orange-500 to-yellow-500",
      offerings: [
        "Gestion documentaire automatisée : Classement, archivage et accès rapide aux documents.",
        "Facturation et suivi comptable : Processus automatisés et relances intelligentes.",
        "Planification intelligente : Gestion des agendas et rappels automatisés.",
        "Optimisation des flux administratifs : Rationalisation des processus internes.",
        "Suivi et reporting automatisés : Analyse en temps réel pour la performance administrative.",
      ]
    },
    {
      icon: Globe,
      title: "Automatisation des Ressources Humaines (RH)",
      slug: "automatisation-rh",
      description: "Dominez le web avec une présence digitale performante et professionnelle.",
      color: "from-cyan-500 to-blue-500",
      offerings: [
        "Recrutement intelligent : Tri et présélection des candidats par IA.",
        "Gestion des employés : Suivi des plannings, absences et performances en temps réel.",
        "Onboarding digital : Intégration automatisée des nouveaux collaborateurs.",
        "Optimisation des processus RH : Détection des inefficacités et recommandations intelligentes.",
        "Analyse de l’engagement : Mesure automatisée de la satisfaction et motivation des employés.",
      ]
    },
    {
      icon: Globe,
      title: " Business Intelligence & Analyse de données",
      slug: "business-intelligence",
      description: "Dominez le web avec une présence digitale performante et professionnelle.",
      color: "from-cyan-500 to-blue-500",
      offerings: [
        "Reporting automatisé : Rapports clairs et interactifs sur les performances.",
        "Analyse prédictive : Anticipation des tendances et comportements clients.",
        "Visualisation des KPI : Tableaux de bord complets pour toutes les fonctions de l’entreprise.",
        "Optimisation stratégique : Décisions guidées par des insights précis.",
        "Intégration multi-sources : Centralisation des données internes et externes pour une analyse complète.",
      ]
    },
    {
      icon: Globe,
      title: " Automatisation de la Relation Client",
      slug: "automatisation-relation-client",
      description: "Dominez le web avec une présence digitale performante et professionnelle.",
      color: "from-cyan-500 to-blue-500",
      offerings: [
        "Chatbots intelligents : Réponses instantanées et personnalisées 24/7.",
        "Support client automatisé : Gestion des tickets, requêtes et suivis.",
        "Feedback et enquêtes automatisés : Analyse des retours clients pour améliorer l’expérience.",
        "Segmentation et communication ciblée : Offres personnalisées selon le profil client.",
        "Optimisation des interactions : Suivi et amélioration continue du parcours client.",
      ]
    },
    {
      icon: Globe,
      title: "Automatisation Logistique et Opérationnelle",
      slug: "automatisation-logistique-operationnelle",
      description: "Dominez le web avec une présence digitale performante et professionnelle.",
      color: "from-purple-500 to-pink-500",
      offerings: [
        "Gestion de stocks automatisée : Suivi et réapprovisionnement intelligent en temps réel.",
        "Planification des livraisons : Optimisation des itinéraires et réduction des coûts.",
        "Suivi des opérations en temps réel : Alertes et reporting automatisés.",
        "Analyse opérationnelle prédictive : Anticipation des problèmes et optimisation des ressources.",
        "Optimisation des flux logistiques : Meilleure coordination entre les départements et partenaires.",
      ]
    },
    {
      icon: Briefcase,
      title: " Automatisation Juridique et Conformité",
      slug: "automatisation-juridique-conformite",
      description: "Bâtissez une stratégie solide et alignée sur vos objectifs pour garantir votre réussite.",
      color: "from-sunuBlue to-sunuCyan",
      offerings: [
        "Analyse des documents légaux : Détection automatique des clauses critiques et risques.",
        "Suivi réglementaire automatisé : Alertes sur échéances et obligations légales.",
        "Gestion des contrats : Création, signature et suivi centralisés et automatisés.",
        "Audit et reporting automatisés : Rapports détaillés sur la conformité et la performance juridique.",
        "Sécurité et réduction des risques : Minimisation des erreurs et des pénalités.",
      ]
    },
    {
      icon: Palette,
      title: " Automatisation Production / Industrie",
      slug: "automatisation-production-industrie",
      description: "Créez une identité de marque forte, mémorable et cohérente qui vous distingue.",
      color: "from-purple-500 to-pink-500",
      offerings: [
        "Maintenance prédictive : Anticipation des pannes pour éviter les arrêts coûteux.",
        "Optimisation des processus de production : Amélioration continue de l’efficacité et de la qualité.",
        "Surveillance en temps réel : Contrôle permanent des machines et lignes de production.",
        "Analyse et reporting industriel : Rapports détaillés sur performances, consommation et rendements.",
        "Réduction des coûts et déchets : Processus mais efficaces et économiques.",
      ]
    },
    {
      icon: Image,
      title: "Formation & Conseil IA 360°",
      slug: "formation-conseil-ia-360",
      description: "Gestion documentaire automatisée : Classement, archivage et accès rapide ",
      color: "from-orange-500 to-yellow-500",
      offerings: [
        "Audit IA 360° : Analyse complète des processus et identification des opportunités d’optimisation.",
        "Formation des équipes : Sensibilisation, montée en compétences et maîtrise des outils IA.",
        "Déploiement sur mesure : Solutions IA adaptées aux besoins spécifiques de l’entreprise.",
        "Accompagnement stratégique : Suivi et optimisation continue des solutions IA.",
        "Adoption complète de l’IA : Intégration fluide dans tous les départements et processus.",
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-0">
        {/* HERO SECTION */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995" 
              alt="AI Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 text-center">
            <div className="max-w-4xl mx-auto" data-aos="zoom-in">
              <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight">
                Link IA <span className="text-sunuOrange">Business</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-200 mb-8 md:mb-10 leading-relaxed">
                Propulsez votre entreprise dans une nouvelle ère. Automatisez vos processus, 
                optimisez vos performances et libérez le plein potentiel de vos équipes grâce à l'Intelligence Artificielle.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 w-full max-w-md mx-auto sm:max-w-none">
                <Button asChild className="bg-sunuOrange hover:bg-sunuBlue text-white px-8 py-4 rounded-full text-base md:text-lg font-bold transition-all shadow-lg hover:scale-105 border-none h-auto w-full sm:w-auto sm:min-w-[240px]">
                  <Link to="/contact">Démarrer mon projet IA</Link>
                </Button>
                <Button asChild className="bg-sunuBlue text-white hover:bg-sunuOrange px-8 py-4 rounded-full text-base md:text-lg font-bold transition-all shadow-lg hover:scale-105 border-none h-auto w-full sm:w-auto sm:min-w-[240px]">
                  <Link to="/services">Découvrez nos solutions IA 360°</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION ESSENTIELLE */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-b from-sunuGray/20 to-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grain-texture bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuBlue text-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl" data-aos="fade-up">
              <h3 className="text-2xl md:text-3xl font-black mb-6 text-center">Pourquoi l’IA est essentielle</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:grid-cols-2 lg:gap-12 items-center">
                <p className="text-lg md:text-xl mb-4 lg:mb-6 opacity-95 leading-relaxed text-center lg:text-left">
                  L’Intelligence Artificielle n’est plus une option : c’est un levier stratégique pour toutes les entreprises.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 space-y-4 w-full">
                  <div className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0 mt-0.5" /><p className="text-base md:text-lg">Réduire les tâches répétitives</p></div>
                  <div className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0 mt-0.5" /><p className="text-base md:text-lg">Optimiser vos processus internes</p></div>
                  <div className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0 mt-0.5" /><p className="text-base md:text-lg">Améliorer la productivité</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PACKS */}
        <section className="py-10 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-7xl w-full">
            <PackpubIA />
          </div>
        </section>

        {/* AVANTAGES CLÉS */}
        <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-7xl text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-10 md:mb-16 text-gray-800" data-aos="fade-up">
              Avantages clés <span className="text-sunuOrange">pour votre entreprise ?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-b from-sunuGray/10 to-white w-full" data-aos="fade-up">
                <div className="bg-gradient-to-br from-sunuBlue to-sunuCyan w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"><TrendingUp className="w-7 h-7 md:w-8 md:h-8 text-white" /></div>
                <h3 className="text-xl md:text-2xl font-black mb-4">Gain de temps</h3>
                <p className="text-gray-600 text-sm md:text-base">Réduisez les heures sur les tâches répétitives.</p>
              </div>
              <div className="text-center p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-b from-sunuGray/10 to-white w-full" data-aos="fade-up" data-aos-delay="100">
                <div className="bg-gradient-to-br from-sunuOrange to-yellow-500 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"><CheckCircle className="w-7 h-7 md:w-8 md:h-8 text-white" /></div>
                <h3 className="text-xl md:text-2xl font-black mb-4">Efficacité</h3>
                <p className="text-gray-600 text-sm md:text-base">Minimisez les erreurs et maximisez la productivité.</p>
              </div>
              <div className="text-center p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-b from-sunuGray/10 to-white w-full" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"><Brain className="w-7 h-7 md:w-8 md:h-8 text-white" /></div>
                <h3 className="text-xl md:text-2xl font-black mb-4">Décisions</h3>
                <p className="text-gray-600 text-sm md:text-base">Analyse prédictive et insights précis.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full">
              {services.map((service) => {
                const IconComponent = service.icon;

                return (
                  <div 
                    key={service.slug} 
                    className="group relative bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-xl transition-all duration-500 border-4 border-transparent hover:border-sunuOrange md:hover:scale-105 w-full flex flex-col justify-between" 
                    data-aos="fade-up"
                  >
                    <div className={`grain-texture bg-gradient-to-br ${service.color} text-white p-6 md:p-8`}>
                      {IconComponent && <IconComponent className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6" />}
                      <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4">{service.title}</h3>
                      <p className="text-base md:text-lg opacity-95">{service.description}</p>
                    </div>
                    <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                      <ul className="space-y-3">
                        {service.offerings.map((offering, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm md:text-base">{offering}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to={`/ialinkbusiness/${service.slug}`} className="block text-center mt-6 text-sunuBlue hover:text-sunuOrange font-black text-base md:text-lg">
                        En savoir plus →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IAlinkbusiness;
