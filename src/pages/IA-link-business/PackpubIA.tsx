import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Sparkles, Star, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const packiaPubIA = () => {
const packsIA = [
  {
    slug: "Pack-de-Démarrage-IA",
    name: "Pack de Démarrage IA",
    duration: "Durée minimale : 3 mois",
    price: "350 000 FCFA / mois",
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
    price: "750 000 FCFA / mois",
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
    price: "1 350 000 FCFA / mois",
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

  return (
    <div className="min-h-screen bg-white mt-8">
      

      <main className="pt-0 pb-20">
        {/* Hero Section */}
        
          <div className="container mx-auto max-w-7xl text-center ">
           
            <p className="text-2xl md:text-4xl font-bold mb-8" data-aos="fade-up" data-aos-delay="100">
             Choisissez le pack adapté<span className="text-sunuOrange"> à votre niveau de croissance</span>
            </p>
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
              <p className="leading-relaxed">
               Trois offres claires, progressives et complètes, conçues pour répondre aux besoins réels <br/> des entreprises au Sénégal et en Afrique.
              </p>            
            </div>
          </div>
        

        {/* packiasIA Section */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {packsIA.map((packia, index) => (
                <div
                  key={index}
                  className={`group relative rounded-2xl md:rounded-3xl shadow-xl transition-all duration-500 border-4 border-transparent hover:border-sunuOrange overflow-hidden ${
                    packia.recommended ? "lg:-translate-y-4 lg:scale-105" : ""
                  } hover:scale-105 md:hover:scale-110 hover:-translate-y-3 md:hover:-translate-y-6 hover:-translate-x-1 hover:rotate-1 md:hover:rotate-2 hover:shadow-[0_20px_50px_rgba(255,127,39,0.4)] md:hover:shadow-[0_25px_70px_rgba(255,127,39,0.5)]`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {packia.recommended && (
                    <div className="absolute top-0 right-0 bg-sunuOrange text-white px-6 py-2 font-bold text-sm rounded-bl-2xl">
                      ⭐ Recommandé
                    </div>
                  )}

                  <div className={`grain-texture bg-gradient-to-br ${packia.color} text-white p-8`}>
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center">
                        <packia.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h2 className="text-3xl font-black text-center mb-2">{packia.name}</h2>
                    <p className="text-center text-lg font-semibold mb-4 opacity-90">{packia.duration}</p>
                    <div className="text-center mb-6">
                      <p className="text-4xl font-black">{packia.price}</p>
                    </div>
                    <p className="text-center text-lg font-bold mb-6 italic">{packia.tagline}</p>
                  </div>

                  <div className="bg-white p-8">
                    <p className="text-gray-700 mb-6 leading-relaxed">{packia.description}</p>

                    <div className="space-y-3 mb-8">
                      {packia.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className={`w-full ${packia.buttonColor} text-white font-bold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}>
                      Je valide
                    </Button>
                    <Link
                      to={`/pack-pub-ia/${packia.slug}`}
                      className="block text-center mt-4 text-sunuBlue hover:text-sunuOrange font-semibold transition-colors"
                    >
                      En savoir plus →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-sunuGray/20 to-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grain-texture bg-gradient-to-r from-sunuOrange via-yellow-500 to-sunuOrange text-white rounded-3xl p-12 text-center shadow-2xl" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Prêt à booster votre visibilité ?
              </h2>
              <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
                Choisissez le packia qui correspond à vos ambitions et transformez votre communication.
              </p>
              <Link to="/contact">
                <Button className="bg-white text-sunuOrange px-10 py-6 text-lg font-bold rounded-full hover:bg-sunuBlue hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                  Demander un devis personnalisé
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default packiaPubIA;
