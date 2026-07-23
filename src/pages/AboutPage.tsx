import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Target, Eye, Award, TrendingUp, Shield, Users, Zap, CheckCircle, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Chaque détail compte. Nous visons la perfection dans tout ce que nous créons.",
      color: "from-sunuOrange to-yellow-500",
    },
    {
      icon: Lightbulb,
      title: "Créativité",
      description: "Des solutions originales et percutantes qui marquent les esprits.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Nous anticipons, testons et intégrons les meilleures technologies et idées.",
      color: "from-sunuBlue to-sunuCyan",
    },
    {
      icon: Shield,
      title: "Confiance",
      description: "Transparence, engagement et professionnalisme dans chaque interaction.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Eye,
      title: "Transparence",
      description: "Une communication claire et honnête à chaque étape du projet.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: TrendingUp,
      title: "Performance",
      description: "Tout ce que nous créons doit vous apporter un résultat réel et mesurable.",
      color: "from-sunuBlue to-sunuCyan",
    },
  ];

  const approachSteps = [
    {
      number: "01",
      title: "Audit",
      description: "Analyse approfondie de votre situation actuelle, de votre marché et de vos besoins spécifiques."
    },
    {
      number: "02",
      title: "Stratégie",
      description: "Conception d'un plan d'action sur mesure aligné avec vos objectifs de croissance."
    },
    {
      number: "03",
      title: "Exécution",
      description: "Mise en œuvre professionnelle de la stratégie avec nos équipes expertes."
    },
    {
      number: "04",
      title: "Mesure",
      description: "Suivi rigoureux des KPI et analyse des performances en temps réel."
    },
    {
      number: "05",
      title: "Optimisation",
      description: "Ajustements continus pour maximiser votre retour sur investissement."
    }
  ];

  const teams = [
    {
      name: "Pôle Stratégie & Conseil",
      description: "Experts en planification stratégique et conseil en communication"
    },
    {
      name: "Pôle Création & Direction Artistique",
      description: "Designers et créatifs pour une identité visuelle forte"
    },
    {
      name: "Pôle Digital & Développement Web",
      description: "Développeurs et experts en solutions digitales"
    },
    {
      name: "Pôle Contenu & Social Media",
      description: "Créateurs de contenu et community managers"
    },
    {
      name: "Pôle Commercial & Partenariats",
      description: "Spécialistes en développement commercial et relations clients"
    },
    {
      name: "Pôle Production & Événementiel",
      description: "Experts en organisation et production d'événements"
    },
    {
      name: "Pôle IA & Automatisation",
      description: "Spécialistes en intelligence artificielle et automatisation"
    }
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "Stratégies bâties autour d'objectifs mesurables",
      description: "Nous ne faisons rien sans KPI clairs et reporting transparent."
    },
    {
      icon: Users,
      title: "Équipes dédiées & communication fluide",
      description: "Un interlocuteur privilégié et une équipe engagée sur votre réussite."
    },
    {
      icon: CheckCircle,
      title: "Engagement sur la qualité et les délais",
      description: "Nous respectons nos engagements et livrons dans les temps."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-white to-sunuGray/30">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-sunuBlue" data-aos="fade-up">
              À propos de <span className="text-sunuOrange">SunuLink</span>
            </h1>
          </div>
        </section>

        {/* Notre Histoire */}
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-800 text-center" data-aos="fade-up">
              Notre <span className="text-sunuOrange">Histoire</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-justify md:text-center hyphens-auto" data-aos="fade-up">
                <strong className="text-sunuBlue">SunuLink Consulting</strong> : Nous aidons les entreprises, les institutions et les organisations à
                développer leur visibilité, renforcer leur image de marque et accélérer
                leur croissance grâce à des stratégies de communication et de conseil
                performantes.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-justify md:text-center hyphens-auto" data-aos="fade-up" data-aos-delay="100">
                Nous associons stratégie, créativité et technologie pour délivrer des résultats mesurables aux entreprises africaines.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-6 bg-gradient-to-b from-white to-sunuGray/20">
          <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-8">
            <div className="grain-texture bg-gradient-to-br from-sunuBlue to-sunuCyan text-white rounded-3xl p-10 shadow-2xl" data-aos="fade-right">
              <h3 className="text-3xl font-black mb-6">Notre Mission</h3>
              <p className="leading-relaxed text-xl">Accompagner les organisations dans leur croissance en concevant
                des stratégies de conseil, de communication et d’innovation qui
                génèrent des résultats mesurables et durables.
              </p>
            </div>
            <div className="grain-texture bg-gradient-to-br from-sunuOrange to-yellow-500 text-white rounded-3xl p-10 shadow-2xl" data-aos="fade-left">
              <h3 className="text-3xl font-black mb-6">Notre Vision</h3>
              <p className="leading-relaxed text-xl">Devenir un cabinet de conseil stratégique et de communication de
                référence, reconnu pour son excellence, son innovation et son impact
                auprès des organisations à l’échelle internationale.
              </p>
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-800" data-aos="fade-up">
              Nos <span className="text-sunuOrange">Valeurs</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className={`grain-texture bg-gradient-to-br ${value.color} text-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`} data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black mb-4">{value.title}</h3>
                  <p className="opacity-90 text-lg leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notre Approche */}
        <section className="py-20 px-6 bg-gradient-to-b from-sunuGray/20 to-white">
          <div className="container mx-auto max-w-7xl text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-800" data-aos="fade-up">
              Notre <span className="text-sunuOrange">Approche</span>
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">Un processus clair et structuré pour garantir votre succès</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
              {approachSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border-2 border-sunuBlue/20 hover:-translate-y-2 transition-all" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="text-6xl font-black text-sunuOrange mb-4 opacity-20">{step.number}</div>
                  <h3 className="text-2xl font-black mb-3 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notre Équipe */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-7xl text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-800" data-aos="fade-up">
              Notre <span className="text-sunuOrange">Équipe</span>
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">Une équipe pluridisciplinaire rassemblant experts en stratégie, design, digital, production et IA.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {teams.map((team, index) => (
                <div key={index} className="bg-gradient-to-br from-sunuBlue to-sunuCyan text-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition-all" data-aos="fade-up" data-aos-delay={index * 50}>
                  <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-black mb-3">{team.name}</h3>
                  <p className="opacity-90 leading-relaxed">{team.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi nous choisir */}
        <section className="py-20 px-6 bg-gradient-to-b from-sunuGray/20 to-white">
          <div className="container mx-auto max-w-7xl text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-gray-800" data-aos="fade-up">
              Pourquoi <span className="text-sunuOrange">nous choisir ?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="bg-white rounded-3xl p-10 shadow-lg border-2 border-sunuOrange/20 hover:-translate-y-2 transition-all" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="bg-gradient-to-br from-sunuOrange to-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-gray-800">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grain-texture bg-gradient-to-r from-sunuBlue via-sunuCyan to-sunuBlue text-white rounded-3xl p-12 text-center shadow-2xl" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Prêt à transformer votre communication ?
              </h2>
              <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner vers le succès.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-block bg-white text-sunuBlue px-10 py-4 rounded-full font-bold text-lg hover:bg-sunuOrange hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Demander un devis
                </Link>
                <Link
                  to="/services"
                  className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-sunuBlue transition-all duration-300"
                >
                  Découvrir nos services
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

export default AboutPage;
