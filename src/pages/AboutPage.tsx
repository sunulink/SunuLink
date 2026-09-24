import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Sparkles,
  Target,
  Eye,
  Award,
  TrendingUp,
  Shield,
  Users,
  CheckCircle,
  Lightbulb,
  Quote,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const [isFounderExpanded, setIsFounderExpanded] = useState(false);
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

  const teamMembers = [
    {
      name: "Birahim BASSE",
      role: "PDG / Fondateur",
      expertise: "Conseil stratégique & développement",
      image: "/img/Birahim_DG.JPG",
      accent: "sunuBlue",
    },
    {
      name: "Ndéye Léna KAMARA",
      role: "Manager & Consultante Stratégique",
      expertise: "Marketing · Communication · Développement commercial",
      image: "/img/Lena_Manager_Consultante_Strategique.PHG",
      fallbackImage: "/img/Lena_Manager_Consultante_Strategique.PNG",
      accent: "sunuOrange",
    },
    {
      name: "Djibril ANNE",
      role: "Développeur",
      expertise: "Développement web · Solutions digitales",
      image: "/img/Djibril_ANNE_developpeur.jpg",
      accent: "sunuBlue",
    },
    {
      name: "Edwige Aimée DIATTA ",
      role: "Responsable Marketing & Communication",
      expertise: "Marketing · Communication",
      image: "/img/Edwige_Responsable_Marketing.PNG",
      accent: "sunuOrange",
    },
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

  const heroImage =
    "https://images.unsplash.com/photo-1739300293396-9ad79111c8e4?auto=format&fit=crop&fm=jpg&q=80&w=2400";

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      <main className="pb-20">
        {/* ========================================================= */}
        {/* HERO À PROPOS                                            */}
        {/* ========================================================= */}
        <section className="relative w-full h-[450px] overflow-hidden">
          <img
            src={heroImage}
            alt="Équipe africaine dans un environnement professionnel et technologique"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/88" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/70 to-sunuBlue/80" />

          <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
            <div data-aos="fade-up">
              <p className="text-sunuOrange font-bold uppercase tracking-[0.28em] text-xs md:text-sm mb-4">
                SunuLink Consulting
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight whitespace-nowrap">
                À Propos de Nous
              </h1>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-8 md:py-14 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="space-y-6">
              <p className="text-base sm:text-xl text-gray-800 font-medium leading-relaxed text-left sm:text-justify">
                <strong className="text-sunuBlue font-bold">SUNULINK CONSULTING</strong> accompagne les entreprises, les institutions et les organisations à développer leur visibilité, renforcer leur image de marque et accélérer leur croissance grâce à des stratégies de communication et de conseil performantes.
              </p>
              <p className="text-sm sm:text-lg text-gray-600 leading-relaxed text-left sm:text-justify">
                Nous associons stratégie, créativité et technologie pour délivrer des résultats mesurables aux entreprises africaines.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* MOTS DU FONDATEUR                                        */}
        {/* ========================================================= */}
        <section className="py-10 md:py-16 px-2 sm:px-4 md:px-6 bg-slate-50 border-y border-slate-200">
          <div className="w-full max-w-[1440px] mx-auto">
            <div className="flex justify-center mb-5">
              <span className="inline-flex items-center gap-2 bg-sunuBlue/10 text-sunuBlue border border-sunuBlue/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                <Quote className="w-4 h-4 text-sunuOrange" />
                Vision & Inception
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 md:mb-12 tracking-tight text-sunuBlue">
              Mots du <span className="text-sunuOrange">Fondateur</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-[390px_minmax(0,1fr)] items-stretch bg-white rounded-[1.75rem] lg:rounded-[2.25rem] border border-slate-200 shadow-xl overflow-hidden">
              {/* Profil fondateur */}
              <div className="relative bg-gradient-to-br from-sunuBlue via-sunuBlue to-sunuCyan p-4 sm:p-6 lg:p-9 text-white min-h-full rounded-t-[1.75rem] lg:rounded-tl-[2.25rem] lg:rounded-tr-none lg:rounded-bl-[2.25rem]">
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-sunuOrange/20 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-white/10 blur-3xl" />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-full h-[400px] sm:h-[500px] lg:h-[560px] rounded-[1.5rem] overflow-hidden border-4 border-white/30 shadow-2xl bg-white/10">
                    <img
                      src="/img/Birahim_DG.JPG"
                      alt="Birahim Basse — PDG / Fondateur de SunuLink Consulting"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="mt-6 text-center lg:text-left">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 mb-2">
                      Fondateur & Directeur Général
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-black mb-2">Birahim Basse</h3>
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                      Conseil stratégique & développement
                    </p>
                  </div>

                  <div className="mt-7 pt-5 border-t border-white/20">
                    <div className="flex items-center justify-center lg:justify-start gap-3 text-sm font-semibold">
                      <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <Quote className="w-5 h-5 text-sunuOrange" />
                      </span>
                      <span className="text-white/90">Une vision. Une promesse. Un mouvement.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Texte du fondateur */}
              <div className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-14">
                <div
                  className={`relative space-y-6 text-gray-700 text-[15px] sm:text-base lg:text-[17px] leading-8 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                    isFounderExpanded ? "max-h-[7000px]" : "max-h-[760px] md:max-h-[820px]"
                  }`}
                >
                  {/* Introduction — carte inspirée de Mission / Vision */}
                  <div className="rounded-3xl p-5 sm:p-6 bg-gradient-to-br from-sunuBlue/10 via-white to-sunuCyan/10 border border-sunuBlue/15 shadow-sm border-l-4 border-l-sunuOrange">
                    <p className="text-base sm:text-lg lg:text-xl font-black text-sunuBlue italic leading-relaxed">
                      Chaque grande aventure naît d’une conviction. La nôtre est née d’un constat.
                    </p>
                  </div>

                  <p>
                    Pendant des années, j’ai exercé le métier de graphiste avec passion. J’ai découvert la puissance de la communication, du design et des idées. Mais j’ai également vu une réalité difficile : <strong className="text-gray-900 font-bold">en Afrique, et particulièrement au Sénégal, les métiers de la création sont encore trop souvent sous-estimés</strong>. Des talents sont exploités, des compétences sont dévalorisées et une jeunesse créative peine à obtenir la reconnaissance qu’elle mérite.
                  </p>

                  <div className="rounded-2xl bg-slate-100 border border-slate-200 px-5 py-4">
                    <p className="font-bold text-gray-900">Cette réalité m’a profondément marqué.</p>
                  </div>

                  <p>
                    Mais au lieu de considérer ce problème comme une fatalité, j’ai décidé d’en faire une opportunité. Parce que je crois profondément en l’Afrique. <strong className="text-sunuBlue font-bold">Je crois en sa jeunesse. Je crois en sa créativité. Je crois en son intelligence.</strong> Je crois surtout que notre génération a la responsabilité d’écrire une nouvelle histoire.
                  </p>

                  <div className="rounded-3xl p-5 sm:p-6 bg-gradient-to-br from-sunuBlue/10 via-white to-sunuOrange/10 border border-slate-200 shadow-sm">
                    <p>
                      Aujourd’hui, nous vivons une révolution sans précédent. La technologie transforme nos façons de communiquer, de travailler et de créer. L’intelligence artificielle, le digital et les innovations redessinent le monde. <strong className="text-gray-900 font-bold">Je voulais créer une entreprise capable de connecter cette nouvelle Afrique au reste du monde.</strong>
                    </p>
                  </div>

                  {/* Carte "La Naissance de l'Évidence" */}
                  <div className="my-7 rounded-3xl overflow-hidden border border-slate-200 shadow-md">
                    <div className="bg-gradient-to-r from-sunuBlue to-sunuCyan px-5 sm:px-7 py-4 sm:py-5">
                      <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-wide">
                        La Naissance de l'Évidence
                      </h3>
                    </div>

                    <div className="p-5 sm:p-7 bg-white space-y-5">
                      <p className="text-gray-700">
                        Pendant des semaines, j’ai exploré des dizaines d’idées. Aucun nom ne reflétait réellement ce que j’avais en tête. Il manquait toujours quelque chose : une émotion, une identité, une vision. Puis un jour, l’évidence est apparue :
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-gradient-to-br from-sunuBlue to-sunuCyan text-white p-5 shadow-md">
                          <span className="block text-sunuOrange text-sm font-black uppercase tracking-widest mb-2">SUNU</span>
                          <p className="text-sm sm:text-base leading-7">
                            Un mot profondément sénégalais, qui signifie <span className="font-black">“Notre”</span>.
                          </p>
                        </div>

                        <div className="rounded-2xl bg-gradient-to-br from-sunuOrange to-yellow-500 text-white p-5 shadow-md">
                          <span className="block text-white text-sm font-black uppercase tracking-widest mb-2">LINK</span>
                          <p className="text-sm sm:text-base leading-7">
                            Le lien, la connexion, le pont entre les personnes, les entreprises et les opportunités.
                          </p>
                        </div>
                      </div>

                      <div className="rounded-2xl bg-slate-900 px-5 py-4 text-center">
                        <p className="text-lg sm:text-xl font-black text-sunuOrange tracking-tight">
                          SUNULINK = Notre Lien.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="font-medium text-gray-800">
                    Le lien du Sénégal avec le monde. Le lien de l’Afrique avec l’innovation. Le lien entre les idées et leur impact. Le lien entre les entreprises et leur croissance. Le lien entre les talents africains et les opportunités internationales.
                  </p>

                  <div className="rounded-3xl bg-blue-50 border border-sunuBlue/10 p-5 sm:p-6 shadow-sm">
                    <blockquote className="border-l-4 border-sunuBlue pl-4 italic text-sunuBlue font-semibold">
                      "SUNULINK n’est donc pas seulement un nom. C’est une vision. Une promesse. Un mouvement."
                    </blockquote>
                  </div>

                  <p>
                    Nous avons créé <strong className="text-sunuBlue font-bold">SUNULINK CONSULTING</strong> avec une ambition simple mais immense : <strong className="text-gray-900 font-bold">faire de la communication un véritable levier de transformation pour les entreprises africaines.</strong> Nous voulons prouver qu’une équipe composée majoritairement de jeunes Africains peut concevoir des stratégies, des marques, des campagnes et des solutions capables de rivaliser avec les meilleurs standards internationaux.
                  </p>

                  <p>
                    Notre mission dépasse la création de logos ou la gestion des réseaux sociaux. Nous voulons construire des marques fortes, accompagner les entreprises dans leur croissance, mettre la technologie et l’IA au service du développement, valoriser les talents locaux et inspirer une nouvelle génération d’entrepreneurs.
                  </p>

                  <div className="rounded-3xl bg-gradient-to-r from-sunuOrange/10 to-yellow-50 border-l-4 border-sunuOrange p-5 sm:p-6">
                    <p className="font-bold text-sunuOrange">
                      Chez SUNULINK CONSULTING, nous croyons que l’Afrique ne doit plus seulement consommer les innovations du monde : elle doit les créer, les exporter et les diriger.
                    </p>
                  </div>

                  <p>
                    Nous voulons participer à cette transformation en bâtissant un cabinet de conseil et une agence de communication qui portent haut les couleurs de l’Afrique. Notre histoire ne fait que commencer. Et chaque client qui nous rejoint devient un acteur de cette vision.
                  </p>

                  <div className="pt-7 sm:pt-8 border-t border-slate-200 text-left sm:text-center space-y-4">
                    <p className="text-base sm:text-lg font-bold text-gray-900">
                      L’avenir de la communication mondiale ne se construira pas sans l’Afrique.
                    </p>
                    <p className="text-lg sm:text-xl font-black text-sunuOrange">
                      Et SUNULINK CONSULTING a choisi d’en être l’un des bâtisseurs.
                    </p>
                    <div className="pt-1">
                      <div className="inline-block bg-slate-100 px-4 sm:px-6 py-3 rounded-2xl border border-slate-200 max-w-full">
                        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Notre signature</p>
                        <p className="text-xs sm:text-sm sm:leading-6 font-bold text-sunuBlue">
                          SUNULINK CONSULTING — Plus qu’un lien : un levier de progrès, d’impact et de confiance.
                        </p>
                      </div>
                    </div>
                  </div>

                  {!isFounderExpanded && (
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none" />
                  )}
                </div>

                <div className="pt-5 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setIsFounderExpanded((prev) => !prev)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-sunuBlue px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-sunuOrange hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sunuBlue/30"
                    aria-expanded={isFounderExpanded}
                  >
                    {isFounderExpanded ? "Voir moins" : "Voir plus"}
                    <span aria-hidden="true">{isFounderExpanded ? "↑" : "↓"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* ÉQUIPE — MODIFIÉE                                         */}
        {/* ========================================================= */}
        <section className="py-16 md:py-20 px-4 sm:px-6 bg-slate-50">
          <div className="container mx-auto max-w-7xl text-center">
            <div className="max-w-4xl mx-auto mb-12 md:mb-16">
              <span className="inline-flex items-center gap-2 bg-sunuBlue/10 text-sunuBlue border border-sunuBlue/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
                <Users className="w-4 h-4 text-sunuOrange" />
                Équipe SunuLink
              </span>
              <h2 className="text-3xl md:text-5xl font-black mb-5 text-gray-800" data-aos="fade-up">
                Notre <span className="text-sunuOrange">Équipe</span>
              </h2>
              <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
                Derrière chaque mission, des expertises et des personnalités. Chez SunuLink, nous réunissons des profils complémentaires autour d’une même ambition : transformer les enjeux de nos clients en solutions concrètes, pertinentes et durables.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-left">
              {teamMembers.map((member, index) => (
                <article
                  key={member.name}
                  className={`group bg-white rounded-[2rem] overflow-hidden border-2 ${member.accent === "sunuOrange" ? "border-sunuOrange/70 hover:border-sunuOrange" : "border-sunuBlue/70 hover:border-sunuBlue"} shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative aspect-[4/4.3] overflow-hidden bg-slate-100">
                    <img
                      src={member.image}
                      alt={`${member.name} — ${member.role}`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      onError={(event) => {
                        if (member.fallbackImage && event.currentTarget.src.endsWith(member.image.replace(/^\//, ""))) {
                          event.currentTarget.src = member.fallbackImage;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    <div className="absolute left-5 bottom-5 right-5">
                      <span className="inline-flex px-3 py-1 rounded-full bg-white/90 text-sunuBlue text-[11px] font-black uppercase tracking-wide mb-2">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className={`w-12 h-1 rounded-full mb-5 ${member.accent === "sunuOrange" ? "bg-sunuOrange" : "bg-sunuBlue"}`} />
                    <h3 className="text-xl sm:text-2xl font-black text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {member.expertise}
                    </p>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="grain-texture bg-gradient-to-br from-sunuBlue to-sunuCyan text-white rounded-3xl p-6 sm:p-10 shadow-xl" data-aos="fade-right">
              <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6">Notre Mission</h3>
              <p className="leading-relaxed text-base sm:text-xl text-left sm:text-justify">
                Accompagner les organisations dans leur croissance en concevant
                des stratégies de conseil, de communication et d’innovation qui
                génèrent des résultats mesurables et durables.
              </p>
            </div>
            <div className="grain-texture bg-gradient-to-br from-sunuOrange to-yellow-500 text-white rounded-3xl p-6 sm:p-10 shadow-xl" data-aos="fade-left">
              <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6">Notre Vision</h3>
              <p className="leading-relaxed text-base sm:text-xl text-left sm:text-justify">
                Devenir un cabinet de conseil stratégique et de communication de
                référence, reconnu pour son excellence, son innovation et son impact
                auprès des organisations à l’échelle internationale.
              </p>
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="py-16 md:py-20 px-4 sm:px-6 bg-slate-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16 text-gray-800" data-aos="fade-up">
              Nos <span className="text-sunuOrange">Valeurs</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className={`grain-texture bg-gradient-to-br ${value.color} text-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`} data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="bg-white/20 backdrop-blur-sm w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black mb-3">{value.title}</h3>
                  <p className="opacity-90 text-base sm:text-lg leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notre Approche */}
        <section className="py-16 md:py-20 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-7xl text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 text-gray-800" data-aos="fade-up">
              Notre <span className="text-sunuOrange">Approche</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600 mb-12 md:mb-16 max-w-3xl mx-auto">Un processus clair et structuré pour garantir votre succès</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
              {approachSteps.map((step, index) => (
                <div key={index} className="bg-slate-50 rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200 hover:-translate-y-2 transition-all" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="text-5xl sm:text-6xl font-black text-sunuOrange mb-3 opacity-30">{step.number}</div>
                  <h3 className="text-xl sm:text-2xl font-black mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi nous choisir */}
        <section className="py-16 md:py-20 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-7xl text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-12 md:mb-16 text-gray-800" data-aos="fade-up">
              Pourquoi <span className="text-sunuOrange">nous choisir ?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="bg-slate-50 rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200 hover:-translate-y-2 transition-all" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="bg-gradient-to-br from-sunuOrange to-yellow-500 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6">
                    <reason.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black mb-3 text-gray-800">{reason.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-12 md:py-16 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grain-texture bg-gradient-to-r from-sunuBlue via-sunuCyan to-sunuBlue text-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl" data-aos="fade-up">
              <h2 className="text-2xl sm:text-4xl font-black mb-4 sm:mb-6">
                Prêt à transformer votre communication ?
              </h2>
              <p className="text-base sm:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner vers le succès.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/devis"
                  className="inline-block bg-white text-sunuBlue px-8 py-3.5 sm:px-10 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-sunuOrange hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Demander un devis
                </Link>
                <Link
                  to="/services"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-3.5 sm:px-10 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-sunuBlue transition-all duration-300"
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
