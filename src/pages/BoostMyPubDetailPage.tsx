import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Sparkles, Star, Crown, ArrowLeft, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useParams, Navigate } from "react-router-dom";

const packsData = [
  {
    slug: "teranga",
    name: "PACK TERANGA",
    duration: "3 mois",
    price: "450.000 Fcfa / mois",
    tagline: "Lancer sa communication proprement et efficacement",
    description: "Un pack idéal pour les entreprises qui veulent une communication claire, régulière et professionnelle sans passer par de grands investissements.",
    icon: Sparkles,
    color: "from-blue-500 to-cyan-500",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    features: [
      "15 visuels premium / mois",
      "4 vidéos courtes / mois",
      "Stories quotidiennes",
      "Gestion Facebook + Instagram",
      "Modération & réponses",
      "Stratégie 3 mois",
      "Reporting mensuel",
      "Pas de budget pub inclus"
    ],
    detailedFeatures: [
      "Mini-stratégie 360°",
      "Analyse audience",
      "Positionnement & messages clés",
      "15 visuels premium / mois",
      "4 vidéos courtes / mois",
      "Textes optimisés",
      "Stories quotidiennes",
      "Gestion Facebook & Instagram",
      "Modération + réponses",
      "Calendrier éditorial",
      "Reporting mensuel"
    ],
    benefits: [
      "Une image professionnelle",
      "Une page vivante et active",
      "Une communication cohérente",
      "Une meilleure perception de marque"
    ]
  },
  {
    slug: "xeewal",
    name: "PACK XEEWAL",
    duration: "6 mois",
    price: "750.000 Fcfa / mois",
    tagline: "Accélérer sa croissance et renforcer son image",
    description: "Le pack préféré des entreprises : puissance, régularité, qualité et visibilité sponsorisée.",
    icon: Star,
    color: "from-orange-500 to-yellow-500",
    buttonColor: "bg-orange-500 hover:bg-orange-600",
    recommended: true,
    features: [
      "30 visuels premium / mois",
      "8 vidéos courtes / mois",
      "1 vidéo professionnelle / mois",
      "Stories quotidiennes",
      "Gestion Facebook + Instagram + TikTok + LinkedIn",
      "Automatisation basique",
      "Boost sponsorisé pour 2 pages",
      "Stratégie 6 mois",
      "Reporting analytique"
    ],
    detailedFeatures: [
      "Stratégie marketing 6 mois",
      "Plan éditorial structuré",
      "30 visuels premium / mois",
      "8 vidéos courtes / mois",
      "1 vidéo professionnelle / mois",
      "Shooting tous les 2 mois",
      "Gestion Facebook + Instagram + TikTok + LinkedIn",
      "Animation quotidienne",
      "Automatisation basique",
      "Boost sponsorisé pour 2 pages (configuration incluse)",
      "Reporting analytique complet"
    ],
    benefits: [
      "Une croissance visible",
      "Une audience plus large",
      "Un contenu professionnel",
      "Une stratégie long terme"
    ]
  },
  {
    slug: "buur",
    name: "PACK BUUR",
    duration: "1 an",
    price: "1.499.000 Fcfa / mois",
    tagline: "Dominer son marché et devenir une référence",
    description: "Le pack ultime pour les entreprises ambitieuses qui veulent être visibles partout, tout le temps, avec une image haut de gamme.",
    icon: Crown,
    color: "from-purple-600 to-pink-600",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
    features: [
      "60 visuels premium / mois",
      "15 vidéos courtes / mois",
      "2 vidéos professionnelles / mois",
      "Shooting trimestriel",
      "Stories quotidiennes",
      "Gestion multicanale complète",
      "Automatisation avancée + WhatsApp",
      "Boost sponsorisé pour 4 pages",
      "Direction marketing annuelle",
      "Reporting premium",
      "Plan marketing complet"
    ],
    detailedFeatures: [
      "Direction marketing annuelle complète",
      "Plan marketing 12 mois",
      "Analyse IA + optimisation",
      "60 visuels premium / mois",
      "15 vidéos courtes / mois",
      "2 vidéos professionnelles / mois",
      "Shooting trimestriel",
      "Stories quotidiennes",
      "Gestion multicanale complète (FB, IG, TikTok, LinkedIn)",
      "Modération professionnelle 7/7",
      "Automatisation avancée",
      "WhatsApp Business + tunnel",
      "Boost sponsorisé pour 4 pages",
      "Reporting premium + KPI avancés"
    ],
    benefits: [
      "Une image solide et premium",
      "Une audience massive",
      "Une visibilité continue",
      "Un positionnement de leader"
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
                <Link to="/boost-my-pub">
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

export default BoostMyPubDetailPage;
