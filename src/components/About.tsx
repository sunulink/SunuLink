import {
  Sparkles,
  Target,
  Award,
  Lightbulb,
  ShieldCheck,
  Eye,
  TrendingUp,
  Compass,
  Megaphone,
  Palette,
  RefreshCw,
  Handshake,
  Flag,
} from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: Award,
      title: "EXCELLENCE",
      description: "L’excellence, sans compromis.",
      color: "bg-sunuBlue",
    },
    {
      icon: Lightbulb,
      title: "CRÉATIVITÉ",
      description: "Oser. Créer. Impacter.",
      color: "bg-sunuOrange",
    },
    {
      icon: Sparkles,
      title: "INNOVATION",
      description: "Repousser les limites.",
      color: "bg-sunuCyan",
    },
    {
      icon: ShieldCheck,
      title: "CONFIANCE",
      description: "La confiance se mérite.",
      color: "bg-sunuBlue",
    },
    {
      icon: Eye,
      title: "TRANSPARENCE",
      description: "La vérité comme fondement.",
      color: "bg-sunuOrange",
    },
    {
      icon: TrendingUp,
      title: "PERFORMANCE",
      description: "L’impact se mesure.",
      color: "bg-sunuCyan",
    },
    {
      icon: Compass,
      title: "STRATÉGIE",
      description: "Penser juste. Agir fort.",
      color: "bg-sunuBlue",
    },
    {
      icon: Megaphone,
      title: "COMMUNICATION",
      description: "Marquer les esprits.",
      color: "bg-sunuOrange",
    },
    {
      icon: Palette,
      title: "BRANDING",
      description: "Bâtir des marques qui comptent.",
      color: "bg-sunuCyan",
    },
    {
      icon: RefreshCw,
      title: "TRANSFORMATION",
      description: "Voir plus loin. Aller plus haut.",
      color: "bg-sunuBlue",
    },
    {
      icon: Handshake,
      title: "ACCOMPAGNEMENT",
      description: "Votre ambition, notre engagement.",
      color: "bg-sunuOrange",
    },
    {
      icon: Flag,
      title: "RÉSULTATS",
      description: "Des ambitions aux résultats.",
      color: "bg-sunuCyan",
    },
  ];

  return (
    <section id="about" className="bg-gradient-to-b from-white to-sunuGray/30 py-20">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-black text-sunuBlue md:text-5xl">
            Qui sommes-nous ?
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
            <strong>Sunu Link Consulting</strong> est une agence de communication 360° et un cabinet de consulting
            stratégique fondé pour accompagner les marques, organisations et porteurs de projets vers plus de
            progrès, d'impact et de confiance.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-gray-700">
            Nous créons des stratégies sur mesure pour valoriser votre identité, renforcer votre présence et
            transformer vos idées en résultats concrets.
          </p>

          <div className="mb-8 rounded-2xl border-2 border-sunuOrange bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-bold text-gray-800">Notre approche repose sur :</h3>
            <ul className="space-y-3 text-left text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 font-bold text-sunuOrange">•</span>
                <span><strong>Une vision claire :</strong> faire grandir votre marque.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold text-sunuOrange">•</span>
                <span><strong>Une créativité précise :</strong> des messages forts, des visuels marquants.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold text-sunuOrange">•</span>
                <span><strong>Une stratégie intelligente :</strong> pensée pour vos objectifs réels.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold text-sunuOrange">•</span>
                <span><strong>Une exécution impeccable :</strong> rapide, professionnelle et mesurable.</span>
              </li>
            </ul>
          </div>

          <div className="grain-texture inline-block rounded-full bg-gradient-to-r from-sunuBlue to-sunuOrange px-6 py-4 text-lg font-bold text-white shadow-lg">
            Plus qu'un lien : un levier de Progrès, d'Impact et de Confiance.
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="grain-texture rounded-2xl bg-gradient-to-br from-sunuBlue to-sunuCyan p-8 text-white shadow-xl">
            <h4 className="mb-4 text-2xl font-black">Notre Mission</h4>
            <p className="text-lg leading-relaxed">
              Créer des solutions de communication puissantes, cohérentes et durables pour soutenir le
              développement de votre marque et vous offrir une longueur d'avance sur votre marché.
            </p>
          </div>
          <div className="grain-texture rounded-2xl bg-gradient-to-br from-sunuOrange to-yellow-500 p-8 text-white shadow-xl">
            <h4 className="mb-4 text-2xl font-black">Notre Vision</h4>
            <p className="text-lg leading-relaxed">
              Devenir la référence de la communication stratégique moderne au Sénégal et en Afrique de l'Ouest
              en combinant créativité, technologie et intelligence de marque.
            </p>
          </div>
        </div>

        {/* Nos Valeurs et engagements */}
        <div className="mb-12">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-sunuOrange">
              Ce qui guide nos actions
            </p>
            <h3 className="text-3xl font-black text-gray-800 md:text-4xl">
              Nos <span className="text-sunuOrange">Valeurs & engagements</span>
            </h3>
            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
              Douze principes qui expriment notre manière de penser, de créer et d’accompagner vos projets.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <article
                key={value.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-sunuOrange hover:shadow-2xl"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className={`grain-texture flex h-14 w-14 items-center justify-center rounded-xl ${value.color} shadow-md transition-transform duration-300 group-hover:scale-110`}>
                    <value.icon className="h-7 w-7 text-white" strokeWidth={1.9} />
                  </div>
                  <span className="text-sm font-black tracking-[0.16em] text-gray-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h4 className="mb-3 text-xl font-black text-sunuBlue transition-colors group-hover:text-sunuOrange">
                  {value.title}
                </h4>
                <p className="text-base font-medium leading-relaxed text-gray-600">
                  {value.description}
                </p>
                <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-sunuBlue to-sunuOrange transition-all duration-300 group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
