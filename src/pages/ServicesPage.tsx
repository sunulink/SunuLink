import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Briefcase, Megaphone, Calendar, Globe, Brain, Palette, Camera, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import "../components/Hero_2.css";

// Composant FlipCard
const FlipCard: React.FC<{ front: React.ReactNode; back: React.ReactNode }> = ({
  front,
  back,
}) => (
  <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">{front}</div>
      <div className="flip-card-back">{back}</div>
    </div>
  </div>
);

const ServicesPage = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Stratégie & Conseil",
      description: "Construire une stratégie solide, alignée à vos objectifs, est essentiel pour réussir.",
      offerings: [
        "Faire un audit de votre marque et de vos actions",
        "Définir votre positionnement stratégique",
        "Mettre en place un plan de communication structuré",
        "Piloter et analyser vos performances",
        "Optimiser vos actions pour une croissance durable",
      ],
      color: "from-sunuBlue to-sunuCyan",
    },
    {
      icon: Megaphone,
      title: "Branding & Identité visuelle",
      description: "Nous créons des identités fortes, mémorables et cohérentes.",
      offerings: [
        "Logos professionnels",
        "Charte graphique complète",
        "Branding corporate et branding produit",
        "Templates réseaux sociaux",
        "Univers visuel complet",
      ],
      color: "from-sunuBlue to-sunuCyan",
    },
    {
      icon: Palette,
      title: "Création visuelle & Contenus",
      description: "Des contenus modernes, beaux et adaptés à votre audience.",
      offerings: [
        "Affiches & flyers",
        "Posters, roll-up, kakemonos",
        "Design pour réseaux sociaux",
        "Contenus rédactionnels, slogans, pitchs, storytelling",
      ],
      color: "from-sunuBlue to-sunuCyan",
    },
    {
      icon: Globe,
      title: "Digital, Web & SEO",
      description: "Votre présence en ligne doit être performante et professionnelle.",
      offerings: [
        "Création de sites vitrines et e-commerce",
        "Refonte et optimisation UI/UX",
        "Référencement naturel (SEO)",
        "Gestion de pages & community management",
        "Automatisations & intégration d'outils intelligents",
      ],
      color: "from-sunuBlue to-sunuCyan",
    },
    {
      icon: Camera,
      title: "Production photo & vidéo",
      description: "Des contenus qui attirent l'attention.",
      offerings: [
        "Shooting produit",
        "Photos corporate et événementielles",
        "Vidéos promotionnelles",
        "Teasers, animations et vidéos générées par IA",
        "Interviews & capsules professionnelles",
      ],
      color: "from-sunuBlue to-sunuCyan",
    },
    {
      icon: Calendar,
      title: "Événementiel & Activation",
      description: "Nous créons des expériences qui marquent les esprits.",
      offerings: [
        "Organisation d'événements professionnels",
        "Lancements de produits",
        "Activations de marque",
        "Coordination logistique et communication événementielle",
      ],
      color: "from-sunuBlue to-sunuCyan",
    },
    {
      icon: Brain,
      title: "Développement commercial",
      description: "Nous vous aidons à structurer votre croissance.",
      offerings: [
        "Stratégies commerciales",
        "Segmentation & ciblage",
        "Scripts de vente & argumentaires",
        "Accompagnement à la prospection",
        "Force commerciale externe",
      ],
      color: "from-sunuBlue to-sunuCyan",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-white to-sunuGray/20">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-800">
              UNE COMMUNICATION À 360°<br />
              <span className="text-sunuOrange">POUR DONNER DE L'ÉLAN À VOS PROJETS</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous vous accompagnons sur l'ensemble des besoins en communication, stratégie et développement digital.
              Nos services sont organisés autour de 7 piliers puissants.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="flex justify-center">
                  <FlipCard
                    front={
                      <div className="bg-white w-full h-full flex flex-col items-center justify-center p-8">
                        <div className="bg-gradient-to-br from-sunuBlue to-sunuCyan w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                          <service.icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-black text-center text-gray-800">{service.title}</h3>
                      </div>
                    }
                    back={
                      <div className={`bg-gradient-to-br ${service.color} text-white w-full h-full flex flex-col justify-start p-6 overflow-y-auto`}>
                        <p className="opacity-95 mb-4 text-base font-semibold">{service.description}</p>
                        <ul className="space-y-2">
                          {service.offerings.map((offering, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-80" />
                              <span className="opacity-90 text-sm">{offering}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Service */}
        <section className="py-16 px-6 bg-gradient-to-b from-sunuGray/20 to-white">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuBlue text-white rounded-3xl p-12 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-black mb-6">
                    CONSEIL STRATÉGIQUE<br />& PILOTAGE
                  </h2>
                  <p className="text-xl mb-6 opacity-95">
                    Construire une stratégie solide, alignée à vos objectifs, est essentiel pour réussir.
                  </p>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Nous vous accompagnons dans l'audit, la définition de votre positionnement, la mise en œuvre de vos plans d'action et
                    l'analyse des performances pour une croissance durable.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                  <Briefcase className="w-24 h-24 mx-auto mb-6 opacity-80" />
                  <p className="text-lg font-semibold">Expertise stratégique à 360°</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-gradient-to-r from-sunuOrange via-yellow-500 to-sunuOrange rounded-3xl p-12 text-white text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Prêt à transformer votre vision en réalité ?
              </h2>
              <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
                Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-sunuOrange px-10 py-4 rounded-full font-bold text-lg hover:bg-sunuBlue hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
