import { Sparkles, Target, Award } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: Target,
      title: "STRATÉGIE",
      description: "Nous construisons avec vous une vision claire et durable de votre communication.",
      color: "bg-sunuBlue",
    },
    {
      icon: Sparkles,
      title: "CRÉATIVITÉ",
      description: "Nous donnons forme et émotion à vos idées pour captiver et inspirer.",
      color: "bg-sunuOrange",
    },
    {
      icon: Award,
      title: "IMPACT",
      description: "Tout ce que nous créons doit vous apporter un résultat réel et mesurable.",
      color: "bg-sunuCyan",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-sunuGray/30">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-sunuBlue">
            Qui sommes-nous ?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            <strong>Sunu Link Consulting</strong> est une agence de communication 360° et un cabinet de consulting
            stratégique fondé pour accompagner les marques, organisations et porteurs de projets vers plus de
            progrès, d'impact et de confiance.
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Nous créons des stratégies sur mesure pour valoriser votre identité, renforcer votre présence et
            transformer vos idées en résultats concrets.
          </p>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-sunuOrange mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Notre approche repose sur :</h3>
            <ul className="text-left space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-sunuOrange font-bold mr-2">•</span>
                <span><strong>Une vision claire :</strong> faire grandir votre marque.</span>
              </li>
              <li className="flex items-start">
                <span className="text-sunuOrange font-bold mr-2">•</span>
                <span><strong>Une créativité précise :</strong> des messages forts, des visuels marquants.</span>
              </li>
              <li className="flex items-start">
                <span className="text-sunuOrange font-bold mr-2">•</span>
                <span><strong>Une stratégie intelligente :</strong> pensée pour vos objectifs réels.</span>
              </li>
              <li className="flex items-start">
                <span className="text-sunuOrange font-bold mr-2">•</span>
                <span><strong>Une exécution impeccable :</strong> rapide, professionnelle et mesurable.</span>
              </li>
            </ul>
          </div>

          <div className="inline-block grain-texture bg-gradient-to-r from-sunuBlue to-sunuOrange text-white px-6 py-4 rounded-full font-bold text-lg shadow-lg">
            Plus qu'un lien : un levier de Progrès, d'Impact et de Confiance.
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="grain-texture bg-gradient-to-br from-sunuBlue to-sunuCyan text-white rounded-2xl p-8 shadow-xl">
            <h4 className="text-2xl font-black mb-4">Notre Mission</h4>
            <p className="leading-relaxed text-lg">
              Créer des solutions de communication puissantes, cohérentes et durables pour soutenir le
              développement de votre marque et vous offrir une longueur d'avance sur votre marché.
            </p>
          </div>
          <div className="grain-texture bg-gradient-to-br from-sunuOrange to-yellow-500 text-white rounded-2xl p-8 shadow-xl">
            <h4 className="text-2xl font-black mb-4">Notre Vision</h4>
            <p className="leading-relaxed text-lg">
              Devenir la référence de la communication stratégique moderne au Sénégal et en Afrique de l'Ouest
              en combinant créativité, technologie et intelligence de marque.
            </p>
          </div>
        </div>

        {/* Nos Valeurs */}
        <div className="mb-12">
          <h3 className="text-3xl font-black text-center mb-10 text-gray-800">
            Nos <span className="text-sunuOrange">Valeurs</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-sunuOrange hover:-translate-y-2"
              >
                <div className={`grain-texture ${value.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-sunuOrange transition-colors">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
