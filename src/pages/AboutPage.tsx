import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Target, Eye, Award } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Nous anticipons, testons et intégrons les meilleures idées.",
      color: "from-sunuBlue to-sunuCyan",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Chaque détail compte.",
      color: "from-sunuOrange to-yellow-500",
    },
    {
      icon: Target,
      title: "Fiabilité",
      description: "Transparence, engagement, professionnalisme.",
      color: "from-sunuCyan to-sunuBlue",
    },
    {
      icon: Eye,
      title: "Impact",
      description: "Tout ce que nous créons doit vous apporter un résultat réel.",
      color: "from-sunuBlue to-sunuCyan",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-white to-sunuGray/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-black mb-6 text-sunuBlue">
                Qui sommes-nous ?
              </h1>
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                  <strong className="text-sunuOrange">Sunu Link Consulting</strong> est une agence de communication 360° et un cabinet de consulting
                  stratégique fondé pour accompagner les marques, organisations et porteurs de projets vers plus de
                  progrès, d'impact et de confiance.
                </p>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Nous créons des stratégies sur mesure pour valoriser votre identité, renforcer votre présence et
                  transformer vos idées en résultats concrets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Notre Approche */}
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuBlue text-white rounded-3xl p-12 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-black mb-8 text-center">Notre approche repose sur :</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-2">Une vision claire</h3>
                  <p className="opacity-90">Faire grandir votre marque.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-2">Une créativité précise</h3>
                  <p className="opacity-90">Des messages forts, des visuels marquants.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-2">Une stratégie intelligente</h3>
                  <p className="opacity-90">Pensée pour vos objectifs réels.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-2">Une exécution impeccable</h3>
                  <p className="opacity-90">Rapide, professionnelle et mesurable.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slogan */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-7xl text-center">
            <div className="inline-block bg-gradient-to-r from-sunuBlue to-sunuOrange text-white px-8 py-6 rounded-full font-bold text-xl md:text-2xl shadow-2xl">
              Plus qu'un lien : un levier de Progrès, d'Impact et de Confiance.
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-6 bg-gradient-to-b from-white to-sunuGray/20">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-sunuBlue to-sunuCyan text-white rounded-3xl p-10 shadow-2xl">
                <h3 className="text-3xl font-black mb-6">Notre Mission</h3>
                <p className="leading-relaxed text-xl">
                  Créer des solutions de communication puissantes, cohérentes et durables pour soutenir le
                  développement de votre marque et vous offrir une longueur d'avance sur votre marché.
                </p>
              </div>
              <div className="bg-gradient-to-br from-sunuOrange to-yellow-500 text-white rounded-3xl p-10 shadow-2xl">
                <h3 className="text-3xl font-black mb-6">Notre Vision</h3>
                <p className="leading-relaxed text-xl">
                  Devenir la référence de la communication stratégique moderne au Sénégal et en Afrique de l'Ouest
                  en combinant créativité, technologie et intelligence de marque.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-800">
              Nos <span className="text-sunuOrange">Valeurs</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${value.color} text-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                >
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
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
