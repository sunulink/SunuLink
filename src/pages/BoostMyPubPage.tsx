import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Sparkles, Star, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BoostMyPubPage = () => {
  const packs = [
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
      description: "Le pack préféré des entreprises : puissance, régularité, quality et visibilité sponsorisée.",
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

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-0 pb-20">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuBlue text-white">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6" data-aos="fade-up">
              BOOST MY PUB
            </h1>
            <p className="text-2xl md:text-3xl font-bold mb-8" data-aos="fade-up" data-aos-delay="100">
              Votre visibilité. Notre puissance.
            </p>
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
              <p className="leading-relaxed">
                Une page d'entreprise n'est pas seulement un réseau social.<br />
                C'est votre vitrine, votre réputation, votre croissance.
              </p>
              <p className="leading-relaxed">
                Avec <strong>Boost My Pub</strong>, Sunu Link Consulting transforme votre communication en une machine capable de :
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                {["attirer", "convertir", "fidéliser", "imposer votre marque"].map((item, index) => (
                  <span key={index} className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">
                    ✔ {item}
                  </span>
                ))}
              </div>
              <p className="text-2xl font-bold pt-6 italic">
                "Faites parler de vous. Faites voir votre marque. Faites avancer votre business."
              </p>
            </div>
          </div>
        </section>

        {/* Packs Section */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {packs.map((pack, index) => (
                <div
                  key={index}
                  className={`group relative rounded-2xl md:rounded-3xl shadow-xl transition-all duration-500 border-4 border-transparent hover:border-sunuOrange overflow-hidden ${
                    pack.recommended ? "lg:-translate-y-4 lg:scale-105" : ""
                  } hover:scale-105 md:hover:scale-110 hover:-translate-y-3 md:hover:-translate-y-6 hover:-translate-x-1 hover:rotate-1 md:hover:rotate-2 hover:shadow-[0_20px_50px_rgba(255,127,39,0.4)] md:hover:shadow-[0_25px_70px_rgba(255,127,39,0.5)]`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {pack.recommended && (
                    <div className="absolute top-0 right-0 bg-sunuOrange text-white px-6 py-2 font-bold text-sm rounded-bl-2xl">
                      ⭐ Recommandé
                    </div>
                  )}

                  <div className={`grain-texture bg-gradient-to-br ${pack.color} text-white p-8`}>
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center">
                        <pack.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h2 className="text-3xl font-black text-center mb-2">{pack.name}</h2>
                    <p className="text-center text-lg font-semibold mb-4 opacity-90">{pack.duration}</p>
                    <div className="text-center mb-6">
                      <p className="text-4xl font-black">{pack.price}</p>
                    </div>
                    <p className="text-center text-lg font-bold mb-6 italic">{pack.tagline}</p>
                  </div>

                  <div className="bg-white p-8">
                    <p className="text-gray-700 mb-6 leading-relaxed">{pack.description}</p>

                    <div className="space-y-3 mb-8">
                      {pack.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* MODIFICATION : Ajout de la redirection vers la page contact */}
                    <Link to="/contact" className="block w-full">
                      <Button className={`w-full ${pack.buttonColor} text-white font-bold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}>
                        Je valide
                      </Button>
                    </Link>
                    
                    <Link
                      to={`/boost-my-pub/${pack.slug}`}
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
                Choisissez le pack qui correspond à vos ambitions et transformez votre communication.
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

export default BoostMyPubPage;
