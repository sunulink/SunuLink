import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Sparkles, Star, Crown, ArrowLeft, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useParams, Navigate } from "react-router-dom";

const packsIA = [
  {
    slug: "Pack-de-Démarrage-IA",
    name: "Pack de Démarrage IA",
    duration: "Durée minimale : 3 mois",
    price: "450 000 FCFA / mois",
    tagline: "PME & Startups",
    description:
      "Automatiser l’essentiel pour gagner du temps et structurer son activité. Objectif : efficacité immédiate.",
    icon: Sparkles,
    color: "from-blue-500 to-cyan-500",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    features: [
      "Automatisation marketing & commerciale",
      "CRM intelligent",
      "Automatisation administrative",
      "Support client IA",
      "Tableaux de bord & reporting"
    ],
    detailedFeatures: [
      "CRM automatisé (prospects & clients)",
      "Email & SMS marketing automatisés",
      "Segmentation et ciblage intelligent",
      "15 workflows automatisés",
      "Reporting marketing simplifié",
      "Prospection intelligente IA",
      "Scoring automatique des prospects",
      "Suivi du pipeline de vente",
      "Relances automatiques",
      "Gestion documentaire automatisée",
      "Facturation & relances automatiques",
      "Planification intelligente & rappels",
      "Suivi des plannings & congés",
      "Onboarding digital basique",
      "Chatbot IA basique",
      "Suivi des demandes clients",
      "Tableau de bord KPI essentiels",
      "1 session de formation IA",
      "Support technique 30 jours"
    ],
    benefits: [
      "Gain de temps immédiat",
      "Processus structurés",
      "Moins de tâches manuelles",
      "Meilleure organisation globale"
    ]
  },

  {
    slug: "Pack-Performance-IA",
    name: "Pack Performance IA",
    duration: "Durée minimale : 6 mois",
    price: "850 000 FCFA / mois",
    tagline: "PME & Entreprises en croissance",
    description:
      "Automatiser plusieurs départements pour accélérer la croissance. Objectif : performance & rentabilité.",
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
    ],
    detailedFeatures: [
      "Email, SMS & social media automation",
      "Campagnes sponsorisées automatisées",
      "Segmentation prédictive",
      "30 workflows automatisés",
      "Reporting mensuel avancé",
      "CRM IA avancé",
      "Scoring prédictif",
      "Prévision des ventes",
      "Optimisation du pipeline commercial",
      "Gestion documentaire complète",
      "Facturation, paiements & relances",
      "Planification avancée",
      "Recrutement intelligent",
      "Suivi performances & présence",
      "Onboarding digital complet",
      "Gestion des stocks automatisée",
      "Planification des livraisons",
      "Suivi des opérations",
      "Chatbot IA avancé",
      "Support multicanal",
      "Enquêtes & feedback automatisés",
      "Analyse de documents juridiques",
      "Suivi réglementaire automatisé",
      "Tableaux de bord interactifs",
      "Analyse prédictive",
      "Formation équipes",
      "Support & suivi 6 mois"
    ],
    benefits: [
      "Croissance accélérée",
      "Meilleure rentabilité",
      "Décisions basées sur la donnée",
      "Automatisation multi-départements"
    ]
  },

  {
    slug: "Pack-IA-360-Domination",
    name: "Pack IA 360° Domination",
    duration: "Durée : 12 mois",
    price: "1 499 000 FCFA / mois",
    tagline: "Grandes entreprises & Leaders du marché",
    description:
      "Transformer totalement l’entreprise grâce à l’IA. Objectif : domination & leadership.",
    icon: Crown,
    color: "from-purple-600 to-pink-600",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
    features: [
      "Automatisation IA complète",
      "Marketing, ventes, RH, admin, production",
      "BI prédictive & direction stratégique",
      "Accompagnement annuel"
    ],
    detailedFeatures: [
      "Automatisation marketing complète",
      "Email, SMS, social media & sponsorisation",
      "Contenus premium & plan marketing IA",
      "Analyse prédictive des performances",
      "CRM IA avancé",
      "Prospection automatique",
      "Workflows complets de vente",
      "Prévisions commerciales avancées",
      "Gestion documentaire totale",
      "Facturation & processus automatisés",
      "Organisation intelligente",
      "Recrutement IA",
      "Analyse engagement collaborateurs",
      "Gestion RH complète",
      "Gestion intelligente des stocks",
      "Optimisation des livraisons",
      "Suivi en temps réel",
      "Maintenance prédictive",
      "Optimisation des processus industriels",
      "Reporting industriel",
      "Chatbot IA 24/7",
      "Support client intelligent",
      "Fidélisation automatisée",
      "Gestion contrats automatisée",
      "Analyse documents légaux",
      "Suivi conformité complet",
      "Tableaux de bord exécutifs",
      "KPI avancés",
      "Reporting prédictif stratégique",
      "Audit IA 360°",
      "Formation complète des équipes",
      "Direction IA annuelle",
      "Accompagnement stratégique continu"
    ],
    benefits: [
      "Transformation totale de l’entreprise",
      "Leadership sur le marché",
      "Décisions stratégiques prédictives",
      "Avantage concurrentiel durable"
    ]
  }
];

const PackpubIADetail = () => {
  const { packSlugia } = useParams<{ packSlugia: string }>();

  const pack = packsIA.find(p => p.slug === packSlugia);

  if (!pack) {
    return <Navigate to="/pack-pub-ia" replace />;
  }

  const PackIcon = pack.icon;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-0 pb-20">
        {/* Hero Section */}
        <section className={`pt-24 pb-16 px-6 bg-gradient-to-br ${pack.color} text-white`}>
          <div className="container mx-auto max-w-7xl">
            <Link
              to="/pack-pub-ia"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour aux packs
            </Link>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white/20 backdrop-blur-sm w-32 h-32 rounded-3xl flex items-center justify-center" data-aos="zoom-in">
                <PackIcon className="w-16 h-16 text-white" />
              </div>

              <div className="text-center md:text-left" data-aos="fade-up">
                {pack.recommended && (
                  <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    ⭐ Pack Recommandé
                  </span>
                )}
                <h1 className="text-4xl md:text-6xl font-black mb-4">{pack.name}</h1>
                <p className="text-2xl md:text-3xl font-bold mb-2">{pack.tagline}</p>
                <p className="text-xl opacity-90">{pack.duration}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Price Banner */}
        <section className="py-8 px-6 bg-sunuGray/10">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-gray-600 mb-1">Investissement mensuel</p>
                <p className="text-4xl md:text-5xl font-black text-sunuBlue">{pack.price}</p>
              </div>
              <Link to="/contact">
                <Button className={`${pack.buttonColor} text-white font-bold py-6 px-12 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}>
                  Je valide ce pack
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl" data-aos="fade-up">
              {pack.description}
            </p>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-16 px-6 bg-sunuGray/5">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center gap-4 mb-12" data-aos="fade-up">
              <div className={`bg-gradient-to-br ${pack.color} w-14 h-14 rounded-2xl flex items-center justify-center`}>
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-sunuBlue">Ce qui est inclus</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pack.detailedFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className={`bg-gradient-to-br ${pack.color} w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center gap-4 mb-12" data-aos="fade-up">
              <div className={`bg-gradient-to-br ${pack.color} w-14 h-14 rounded-2xl flex items-center justify-center`}>
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-sunuBlue">Ce que vous obtenez</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pack.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`grain-texture bg-gradient-to-br ${pack.color} text-white p-8 rounded-2xl text-center`}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <p className="text-xl font-bold">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className={`grain-texture bg-gradient-to-br ${pack.color} text-white rounded-3xl p-12 text-center shadow-2xl`} data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Prêt à passer à l'action ?
              </h2>
              <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
                Contactez-nous pour démarrer avec le {pack.name} et transformer votre communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-white text-sunuBlue px-10 py-6 text-lg font-bold rounded-full hover:bg-sunuOrange hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                    Je valide ce pack
                  </Button>
                </Link>
                <Link to="/pack-pub-ia">
                  <Button variant="outline" className="border-2 border-white text-white px-10 py-6 text-lg font-bold rounded-full hover:bg-white/20 transition-all duration-300">
                    Voir les autres packs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PackpubIADetail;
