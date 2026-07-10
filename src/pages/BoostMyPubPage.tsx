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
      duration: "Engagement : 3 mois recommandé",
      price: "450 000 FCFA",
      period: "/ mois",
      tagline: "Lancer sa communication proprement et efficacement.",
      description: "Le Pack Teranga accompagne les entreprises souhaitant construire une présence digitale professionnelle avec une communication claire, régulière et cohérente.",
      icon: Sparkles,
      color: "from-blue-500 to-cyan-500",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      badge: "Débuter",
      features: [
        "Mini stratégie digitale",
        "Création contenus premium",
        "Gestion Facebook & Instagram",
        "Calendrier éditorial",
        "Reporting mensuel"
      ]
    },
    {
      slug: "xeewal",
      name: "PACK XEEWAL",
      duration: "Engagement : 6 mois recommandé",
      price: "750 000 FCFA",
      period: "/ mois",
      tagline: "Accélérer sa croissance et renforcer son image.",
      description: "Une solution destinée aux entreprises souhaitant développer leur visibilité, renforcer leur image et construire une audience engagée.",
      icon: Star,
      color: "from-orange-500 to-yellow-500",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
      recommended: true,
      badge: "Le plus choisi",
      features: [
        "Stratégie marketing avancée",
        "Création contenus premium",
        "Gestion multi-réseaux",
        "Shooting contenu",
        "Publicité digitale"
      ]
    },
    {
      slug: "buur",
      name: "PACK BUUR",
      duration: "Engagement : 12 mois recommandé",
      price: "1 750 000 FCFA",
      period: "/ mois",
      tagline: "Dominer son marché et devenir une référence.",
      description: "L’accompagnement ultime pour les entreprises souhaitant externaliser leur direction marketing et construire une marque forte.",
      icon: Crown,
      color: "from-purple-600 to-pink-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      badge: "Premium",
      features: [
        "Direction marketing",
        "Production intensive",
        "Gestion complète réseaux sociaux",
        "Automatisation",
        "KPI avancés"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-0 pb-20">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuBlue text-white">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6" data-aos="fade-up">
              BOOST MY PUB
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8" data-aos="fade-up" data-aos-delay="100">
              Accélérez votre acquisition grâce à la publicité digitale.
            </p>
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl mb-4">
                <p className="font-bold text-lg sm:text-xl">
                  À partir de <span className="text-sunuOrange text-xl sm:text-2xl font-black">300 000 FCFA / mois</span>
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 pt-2">
                {[
                  "Stratégie publicitaire",
                  "Meta Ads",
                  "Ciblage audience",
                  "Optimisation campagnes",
                  "Reporting"
                ].map((item, index) => (
                  <span key={index} className="bg-white/20 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-semibold">
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Packs Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {packs.map((pack, index) => (
                <div
                  key={index}
                  className={`group relative rounded-2xl md:rounded-3xl shadow-xl transition-all duration-500 border-4 border-transparent hover:border-sunuOrange overflow-hidden flex flex-col justify-between bg-white ${
                    pack.recommended ? "lg:-translate-y-4 lg:scale-105" : ""
                  } hover:scale-105 md:hover:scale-110 hover:-translate-y-3 md:hover:-translate-y-6 hover:-translate-x-1 hover:rotate-1 md:hover:rotate-2 hover:shadow-[0_20px_50px_rgba(255,127,39,0.4)] md:hover:shadow-[0_25px_70px_rgba(255,127,39,0.5)]`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="absolute top-0 right-0 bg-sunuOrange text-white px-4 py-1.5 sm:px-6 sm:py-2 font-bold text-xs sm:text-sm rounded-bl-2xl z-10">
                    {pack.recommended ? `⭐ ${pack.badge}` : pack.badge}
                  </div>

                  <div>
                    <div className={`grain-texture bg-gradient-to-br ${pack.color} text-white p-6 sm:p-8`}>
                      <div className="flex items-center justify-center mb-4 sm:mb-6">
                        <div className="bg-white/20 backdrop-blur-sm w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center">
                          <pack.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </div>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-black text-center mb-1 sm:mb-2">{pack.name}</h2>
                      <p className="text-center text-sm sm:text-base opacity-90 mb-3 sm:mb-4 font-medium">{pack.duration}</p>
                      <div className="text-center mb-4 sm:mb-6">
                        <p className="text-2xl sm:text-3xl md:text-4xl font-black whitespace-normal break-words">
                          {pack.price}
                          <span className="text-lg sm:text-xl font-medium block sm:inline">{pack.period}</span>
                        </p>
                      </div>
                      <p className="text-center text-base sm:text-lg font-bold mb-2 sm:mb-4 italic leading-snug">{pack.tagline}</p>
                    </div>

                    <div className="bg-white p-6 sm:p-8">
                      <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">{pack.description}</p>

                      <div className="space-y-3 mb-4">
                        {pack.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm sm:text-base font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pt-0 bg-white">
                    <Link to="/contact" className="block w-full">
                      <Button className={`w-full ${pack.buttonColor} text-white font-bold py-5 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-auto whitespace-normal text-center`}>
                        Je valide
                      </Button>
                    </Link>
                    
                    <Link
                      to={`/boost-my-pub/${pack.slug}`}
                      className="block text-center mt-4 text-sunuBlue hover:text-sunuOrange font-bold text-sm sm:text-base transition-colors"
                    >
                      Voir le détail →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-sunuGray/20 to-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grain-texture bg-gradient-to-r from-sunuOrange via-yellow-500 to-sunuOrange text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center shadow-2xl" data-aos="fade-up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 leading-tight">
                Transformez votre communication et votre croissance avec Sunu Link.
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-95 max-w-2xl mx-auto leading-relaxed">
                Choisissez la solution adaptée à vos objectifs et bénéficiez d’un accompagnement stratégique personnalisé.
              </p>
              <div className="w-full flex justify-center">
                <Link to="/contact" className="w-full sm:w-auto max-w-md sm:max-w-none">
                  <Button className="w-full bg-white text-sunuOrange px-6 sm:px-10 py-5 sm:py-6 text-sm sm:text-base md:text-lg font-bold rounded-full hover:bg-sunuBlue hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl h-auto whitespace-normal text-center break-words leading-snug">
                    Demander un devis
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

export default BoostMyPubPage;
