import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Sparkles, Star, Crown, ArrowLeft, Target, Zap, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
// CORRECTION ICI : import depuis "react-router-dom"
import { Link, useParams, Navigate } from "react-router-dom";

const packsData = [
  {
    slug: "teranga",
    name: "PACK TERANGA",
    duration: "Engagement : 3 mois recommandé",
    price: "450 000 FCFA / mois",
    tagline: "Lancer sa communication proprement et efficacement.",
    description: "Le Pack Teranga accompagne les entreprises souhaitant construire une présence digitale professionnelle avec une communication claire, régulière et cohérente.",
    icon: Sparkles,
    color: "from-blue-500 to-cyan-500",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    hoverTextColor: "hover:text-blue-600",
    detailedFeatures: [
      "Stratégie : Audit communication initial",
      "Stratégie : Analyse audience",
      "Stratégie : Positionnement & Messages clés",
      "Création contenu : 8 visuels premium chaque mois",
      "Création contenu : 4 vidéos courtes chaque mois",
      "Création contenu : Textes optimisés",
      "Réseaux sociaux : Gestion Facebook & Instagram",
      "Réseaux sociaux : Programmation & Publication",
      "Réseaux sociaux : Modération & Organisation calendrier"
    ],
    benefits: [
      "Image professionnelle",
      "Communication structurée",
      "Présence régulière",
      "Meilleure visibilité"
    ]
  },
  {
    slug: "xeewal",
    name: "PACK XEEWAL",
    duration: "Engagement : 6 mois recommandé",
    price: "750 000 FCFA / mois",
    tagline: "Accélérer sa croissance et renforcer son image.",
    description: "Une solution destinée aux entreprises souhaitant développer leur visibilité, renforcer leur image et construire une audience engagée.",
    icon: Star,
    color: "from-orange-500 to-yellow-500",
    buttonColor: "bg-orange-500 hover:bg-orange-600",
    hoverTextColor: "hover:text-orange-500",
    recommended: true,
    detailedFeatures: [
      "Stratégie marketing : Plan éditorial avancé",
      "Stratégie marketing : Analyse marché & Recommandations",
      "Production contenu : 15 visuels premium chaque mois",
      "Production contenu : 8 vidéos courtes chaque mois",
      "Production contenu : 2 contenus premium chaque mois",
      "Réseaux sociaux : Gestion Facebook, Instagram, LinkedIn & TikTok",
      "Production : Shooting photo/vidéo tous les 2 mois",
      "Publicité : Configuration campagnes & Optimisation audiences"
    ],
    benefits: [
      "Croissance visibilité",
      "Audience engagée",
      "Image renforcée"
    ]
  },
  {
    slug: "buur",
    name: "PACK BUUR",
    duration: "Engagement : 12 mois recommandé",
    price: "1 750 000 FCFA / mois",
    tagline: "Dominer son marché et devenir une référence.",
    description: "L’accompagnement ultime pour les entreprises souhaitant externaliser leur direction marketing et construire une marque forte.",
    icon: Crown,
    color: "from-purple-600 to-pink-600",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
    hoverTextColor: "hover:text-purple-600",
    detailedFeatures: [
      "Direction marketing : Stratégie annuelle & Plan marketing",
      "Direction marketing : Conseil direction",
      "Production contenu : 25 visuels premium chaque mois",
      "Production contenu : 15 vidéos courtes chaque mois",
      "Production contenu : 5 contenus premium chaque mois",
      "Gestion digitale : Facebook, Instagram, TikTok, LinkedIn & YouTube",
      "Production : Shooting trimestriel & Direction artistique",
      "Performance : Automatisation marketing & Optimisation continue",
      "Performance : Dashboard KPI"
    ],
    benefits: [
      "Leadership digital",
      "Positionnement premium",
      "Croissance durable"
    ]
  }
];

const BoostMyPubDetailPage = () => {
  const { packSlug } = useParams<{ packSlug: string }>();

  const pack = packsData.find(p => p.slug === packSlug);

  if (!pack) {
    return <Navigate to="/boost-my-pub" replace />;
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
              to="/boost-my-pub"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors font-semibold"
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
                    ⭐ Le plus choisi
                  </span>
                )}
                <h1 className="text-4xl md:text-6xl font-black mb-4">{pack.name}</h1>
                <p className="text-2xl md:text-3xl font-bold mb-2">{pack.tagline}</p>
                <p className="text-xl opacity-90 font-medium">{pack.duration}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Price Banner */}
        <section className="py-8 px-6 bg-sunuGray/10">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-gray-600 mb-1 font-medium">Investissement mensuel</p>
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

        {/* Description & Important Alert */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-7xl space-y-8">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl font-medium" data-aos="fade-up">
              {pack.description}
            </p>
            <p className="text-gray-600 leading-relaxed max-w-4xl">
              Boost My Pub accompagne les entreprises souhaitant développer leur visibilité, attirer plus de prospects et améliorer leurs performances publicitaires.
            </p>

            {/* Note Importante */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl max-w-3xl flex items-start gap-3 shadow-sm" data-aos="fade-up">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-amber-900">Important</h4>
                <p className="text-amber-800 font-medium text-sm sm:text-base">
                  Le budget publicitaire média n’est pas inclus dans la prestation.
                </p>
              </div>
            </div>
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
                  <span className="text-gray-700 text-lg font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits / Résultats */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center gap-4 mb-12" data-aos="fade-up">
              <div className={`bg-gradient-to-br ${pack.color} w-14 h-14 rounded-2xl flex items-center justify-center`}>
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-sunuBlue">Résultats attendus</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pack.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`grain-texture bg-gradient-to-br ${pack.color} text-white p-8 rounded-2xl text-center flex items-center justify-center shadow-lg transition-transform hover:scale-105 duration-300`}
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact">
                  <Button className="bg-white text-sunuBlue px-10 py-4 h-14 text-lg font-bold rounded-full hover:bg-sunuOrange hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                    Je valide ce pack
                  </Button>
                </Link>
                <Link to="/boost-my-pub">
                  <Button className={`bg-transparent text-white border-2 border-white px-10 py-4 h-14 text-lg font-bold rounded-full hover:bg-white ${pack.hoverTextColor} transition-all duration-300 flex items-center justify-center`}>
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

export default BoostMyPubDetailPage;
