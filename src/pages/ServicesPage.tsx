import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Briefcase, Palette, Image, Globe, TrendingUp, Calendar, Brain, CheckCircle, Film } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Stratégie & Consulting",
      description: "Bâtissez une stratégie solide et alignée sur vos objectifs pour garantir votre réussite.",
      color: "from-sunuBlue to-sunuCyan",
      offerings: [
        "Audit & diagnostic",
        "Positionnement stratégique",
        "Plan marketing",
        "Plan de communication",
        "Stratégie digitale",
        "Accompagnement dirigeant",
        "Études de marché",
        "Conseil à long terme"
      ]
    },
    {
      icon: Palette,
      title: "Branding & Identité Visuelle",
      description: "Créez une identité de marque forte, mémorable et cohérente qui vous distingue.",
      color: "from-purple-500 to-pink-500",
      offerings: [
        "Création de logos premium",
        "Charte graphique complète",
        "Rebranding",
        "Branding produits",
        "Identité de marque complète",
        "Direction artistique"
      ]
    },
    {
      icon: Image,
      title: "Communication Visuelle & Contenus",
      description: "Des créations visuelles modernes et percutantes pour captiver votre audience.",
      color: "from-orange-500 to-yellow-500",
      offerings: [
        "Création de visuels",
        "Flyers / affiches",
        "Vidéos courtes & motion design",
        "Contenus réseaux sociaux",
        "Copywriting",
        "Conception de campagnes visuelles"
      ]
    },
    {
      icon: Globe,
      title: "Digital, Web & SEO",
      description: "Dominez le web avec une présence digitale performante et professionnelle.",
      color: "from-cyan-500 to-blue-500",
      offerings: [
        "Création de sites web",
        "Refonte de sites",
        "SEO (référencement naturel)",
        "Audit digital",
        "Campagnes sponsorisées",
        "Référencement Google",
        "UX/UI design"
      ]
    },
    {
      icon: TrendingUp,
      title: "Développement Commercial",
      description: "Structurez et accélérez votre croissance commerciale avec nos experts.",
      color: "from-green-500 to-teal-500",
      offerings: [
        "Stratégie commerciale",
        "Prospection B2B/B2C",
        "Scripts de vente",
        "Processus & tunnel de conversion",
        "Mise en place de CRM",
        "Coaching commercial"
      ]
    },
    {
      icon: Film,
      title: "SunuLink Prod",
      description: "Donnez une dimension cinématographique, moderne et mémorable à votre univers visuel.",
      color: "from-amber-600 to-orange-600",
      link: "/services/audiovisuel",
      offerings: [
        "Branding & Films Institutionnels",
        "Motion Design & Animation Graphique",
        "Tournage Haute Définition (Sol & Air)",
        "Post-Production & Étalonnage Cinéma",
        "Sound-Design & Captation Audio Pro"
      ]
    },
    {
      icon: Calendar,
      title: "SunuLink Events",
      description: "L'art de concevoir et piloter des rassemblements corporatifs ou grand public millimétrés.",
      color: "from-pink-500 to-rose-600",
      link: "/services/evenementiel",
      offerings: [
        "Conférences & Forums Élite",
        "Cocktails & Galas Prestige",
        "Salons Professionnels B2B",
        "Lancements de Produits & Activations",
        "Gestion Logistique & Technique Clé en Main"
      ]
    },
    {
      icon: Brain,
      title: "IA & Automatisation",
      description: "Optimisez vos processus avec l'intelligence artificielle et l'automatisation.",
      color: "from-indigo-500 to-purple-500",
      offerings: [
        "Chatbots professionnels",
        "Automatisation WhatsApp & email",
        "Création de workflows",
        "Assistants IA personnalisés",
        "Dashboards intelligents",
        "Génération automatisée de contenus",
        "Outils IA internes pour les entreprises"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-white to-sunuGray/20">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-800" data-aos="fade-up">
              Nos <span className="text-sunuOrange">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-4" data-aos="fade-up" data-aos-delay="100">
              Une communication à 360° pour donner de l'élan à vos projets
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Nous vous accompagnons sur l'ensemble des besoins en communication, stratégie et développement digital. Nos services sont organisés autour de piliers puissants.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const CardContent = (
                  <>
                    <div className={`grain-texture bg-gradient-to-br ${service.color} text-white p-8`}>
                      <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-black mb-4 flex items-center gap-2">
                        {service.title}
                      </h3>
                      <p className="text-lg opacity-95 leading-relaxed">{service.description}</p>
                    </div>
                    <div className="p-8 bg-gradient-to-b from-white to-sunuGray/5 flex-grow">
                      <h4 className="text-lg font-bold text-gray-800 mb-4">Nos prestations :</h4>
                      <ul className="space-y-3">
                        {service.offerings.map((offering, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{offering}</span>
                          </li>
                        ))}
                      </ul>
                      {service.link && (
                        <div className="mt-6 text-right">
                          <span className="inline-block text-sm font-black uppercase tracking-wider text-sunuOrange group-hover:underline">
                            Découvrir l'espace →
                          </span>
                        </div>
                      )}
                    </div>
                  </>
                );

                const cardClasses = "group relative bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-500 border-4 border-transparent hover:border-sunuOrange hover:scale-105 md:hover:scale-110 hover:-translate-y-3 md:hover:-translate-y-6 hover:-translate-x-1 hover:rotate-1 md:hover:rotate-2 hover:shadow-[0_20px_50px_rgba(255,127,39,0.4)] md:hover:shadow-[0_25px_70px_rgba(255,127,39,0.5)] flex flex-col h-full";

                return service.link ? (
                  <Link 
                    to={service.link}
                    key={index}
                    className={cardClasses}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {CardContent}
                  </Link>
                ) : (
                  <div
                    key={index}
                    className={cardClasses}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {CardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Service - Stratégie */}
        <section className="py-16 px-6 bg-gradient-to-b from-sunuGray/20 to-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grain-texture bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuBlue text-white rounded-3xl p-12 shadow-2xl" data-aos="fade-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-black">Service phare</h2>
                  </div>
                  <h3 className="text-3xl font-black mb-6">
                    CONSEIL STRATÉGIQUE & PILOTAGE
                  </h3>
                  <p className="text-xl mb-6 opacity-95 leading-relaxed">
                    Construire une stratégie solide, alignée à vos objectifs, est essentiel pour réussir.
                  </p>
                  <p className="text-lg opacity-90 leading-relaxed mb-8">
                    Nous vous accompagnons dans l'audit, la définition de votre positionnement, la mise en œuvre de vos plans d'action et l'analyse des performances pour une croissance durable.
                  </p>
                  <Link to="/contact">
                    <button className="bg-white text-sunuBlue px-8 py-4 rounded-full font-bold text-lg hover:bg-sunuOrange hover:text-white transition-all duration-300 shadow-lg">
                      Planifier un audit gratuit
                    </button>
                  </Link>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                      <p className="text-lg">Audit complet de votre marque et positionnement</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                      <p className="text-lg">Plan d'action stratégique personnalisé</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                      <p className="text-lg">Accompagnement dans l'exécution</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                      <p className="text-lg">Mesure des performances et optimisation continue</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi choisir nos services */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-800" data-aos="fade-up">
              Pourquoi choisir <span className="text-sunuOrange">nos services ?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-3xl bg-gradient-to-b from-sunuGray/10 to-white" data-aos="fade-up">
                <div className="bg-gradient-to-br from-sunuBlue to-sunuCyan w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-gray-800">Résultats mesurables</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nous définissons des KPI clairs et vous livrons des reportings réguliers pour suivre votre croissance.
                </p>
              </div>
              <div className="text-center p-8 rounded-3xl bg-gradient-to-b from-sunuGray/10 to-white" data-aos="fade-up" data-aos-delay="100">
                <div className="bg-gradient-to-br from-sunuOrange to-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-gray-800">Qualité garantie</h3>
                <p className="text-gray-600 leading-relaxed">
                  Chaque projet est traité avec excellence et professionnalisme par nos équipes expertes.
                </p>
              </div>
              <div className="text-center p-8 rounded-3xl bg-gradient-to-b from-sunuGray/10 to-white" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-gray-800">Approche 360°</h3>
                <p className="text-gray-600 leading-relaxed">
                  De la stratégie à l'exécution, nous couvrons tous vos besoins en communication et marketing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-sunuGray/20 to-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grain-texture bg-gradient-to-r from-sunuOrange via-yellow-500 to-sunuOrange text-white rounded-3xl p-12 text-center shadow-2xl" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Prêt à transformer votre vision en réalité ?
              </h2>
              <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
                Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner vers le succès.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/devis">
                  <button className="bg-white text-sunuOrange px-10 py-4 rounded-full font-bold text-lg hover:bg-sunuBlue hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                    Demander un devis
                  </button>
                </Link>
                <Link to="/boost-my-pub">
                  <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-sunuOrange transition-all duration-300">
                    Découvrir Boost My Pub
                  </button>
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

export default ServicesPage;
