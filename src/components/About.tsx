import { Building2, Palette, Globe, Search, Calendar, Video, TrendingUp, Brain } from "lucide-react";

export const About = () => {
  const poles = [
    {
      icon: TrendingUp,
      title: "Stratégie & Conseil",
      description: "Diagnostic stratégique, accompagnement managérial et transformation organisationnelle",
      color: "bg-sunuBlue",
    },
    {
      icon: Palette,
      title: "Branding & Identité",
      description: "Création d'identités visuelles fortes et cohérentes pour votre marque",
      color: "bg-sunuOrange",
    },
    {
      icon: Globe,
      title: "Communication 360°",
      description: "Campagnes multicanal, storytelling et stratégies de marque percutantes",
      color: "bg-sunuCyan",
    },
    {
      icon: Search,
      title: "Digital & SEO",
      description: "Création de sites web, référencement et campagnes digitales performantes",
      color: "bg-sunuBlue",
    },
    {
      icon: Calendar,
      title: "Événementiel & Logistique",
      description: "Organisation d'événements corporate, institutionnels et culturels",
      color: "bg-sunuOrange",
    },
    {
      icon: Video,
      title: "Contenus & Production",
      description: "Photos, vidéos, motion design et contenus optimisés pour tous supports",
      color: "bg-sunuCyan",
    },
    {
      icon: Building2,
      title: "Développement commercial",
      description: "Stratégies de croissance et accompagnement commercial sur-mesure",
      color: "bg-sunuBlue",
    },
    {
      icon: Brain,
      title: "IA & Innovation",
      description: "Intégration d'outils IA, formation et automatisation des processus",
      color: "bg-sunuOrange",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-sunuGray/30">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-sunuBlue">
            À propos de <span className="text-sunuOrange">SUNU LINK</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            Cabinet de conseil et agence de communication 360° basé au Sénégal, nous accompagnons entreprises,
            institutions et entrepreneurs dans leur transformation stratégique, digitale et créative.
          </p>
          <div className="inline-block bg-gradient-to-r from-sunuBlue to-sunuOrange text-white px-3 py-3 rounded-full font-bold text-lg shadow-lg">
            Plus qu'un lien  un levier de Progrès, d'Impact et de Confiance
          </div>
        </div>

        {/* Pôles stratégiques */}
        <div className="mb-12">
          <h3 className="text-3xl font-black text-center mb-10 text-gray-800">
            Nos <span className="text-sunuOrange">Pôles Stratégiques</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {poles.map((pole, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-sunuOrange hover:-translate-y-2"
              >
                <div className={`${pole.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <pole.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-sunuOrange transition-colors">
                  {pole.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {pole.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-gradient-to-br from-sunuBlue to-sunuCyan text-white rounded-2xl p-8 shadow-xl">
            <h4 className="text-2xl font-black mb-4">Notre Mission</h4>
            <p className="leading-relaxed text-lg">
              Renforcer la visibilité, la crédibilité et la croissance de nos clients grâce à des stratégies
              sur-mesure, créatives et performantes. Nous construisons avec vous une image forte, cohérente et impactante.
            </p>
          </div>
          <div className="bg-gradient-to-br from-sunuOrange to-yellow-500 text-white rounded-2xl p-8 shadow-xl">
            <h4 className="text-2xl font-black mb-4">Notre Vision</h4>
            <p className="leading-relaxed text-lg">
              Devenir la référence dans l'écosystème du conseil, de la communication et de l'accompagnement
              stratégique au Sénégal et en Afrique, en alliant excellence, innovation et impact durable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
