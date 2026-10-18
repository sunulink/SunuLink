
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
      description:
        "Chaque détail compte. Nous visons la perfection dans tout ce que nous créons.",
      color: "from-sunuBlue to-sunuCyan",
    },
    {
      icon: Lightbulb,
      title: "Créativité",
      description:
        "Des solutions originales et percutantes qui marquent les esprits.",
      color: "from-sunuOrange to-yellow-500",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description:
        "Nous anticipons, testons et intégrons les meilleures technologies et idées.",
      color: "from-sunuBlue to-sunuCyan",
    },
    {
      icon: Shield,
      title: "Confiance",
      description:
        "Transparence, engagement et professionnalisme dans chaque interaction.",
      color: "from-sunuOrange to-yellow-500",
    },
    {
      icon: Eye,
      title: "Transparence",
      description:
        "Une communication claire et honnête à chaque étape du projet.",
      color: "from-sunuBlue to-sunuCyan",
    },
    {
      icon: TrendingUp,
      title: "Performance",
      description:
        "Tout ce que nous créons doit vous apporter un résultat réel et mesurable.",
      color: "from-sunuBlue to-sunuCyan",
    },
  ];

  const approachSteps = [
    {
      number: "01",
      title: "Audit",
      description:
        "Analyse approfondie de votre situation actuelle, de votre marché et de vos besoins spécifiques.",
    },
    {
      number: "02",
      title: "Stratégie",
      description:
        "Conception d'un plan d'action sur mesure aligné avec vos objectifs de croissance.",
    },
    {
      number: "03",
      title: "Exécution",
      description:
        "Mise en œuvre professionnelle de la stratégie avec nos équipes expertes.",
    },
    {
      number: "04",
      title: "Mesure",
      description:
        "Suivi rigoureux des KPI et analyse des performances en temps réel.",
    },
    {
      number: "05",
      title: "Optimisation",
      description:
        "Ajustements continus pour maximiser votre retour sur investissement.",
    },
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
      name: "Edwige Aimée DIATTA",
      role: "Responsable Marketing & Communication",
      expertise: "Marketing · Communication",
      image: "/img/Edwige_Responsable_Marketing.png",
      fallbackImage: "/img/Edwige_Responsable_Marketing.PNG",
      accent: "sunuOrange",
    },
    {
      name: "Ibrahima DIOUSSE",
      role: "Graphiste & Motion Designer",
      expertise: "Design graphique · Identité visuelle",
      image: "/img/Ibrahima_Diousse_Designer.png",
      accent: "sunuBlue",
    },
    {
      name: "Mariétou DIOUF",
      role: "Assistante Administrative & Commerciale",
      expertise: "Administration · Coordination",
      image: "/img/Marietou_Diouf_Assistante_Admi_Comm.JPG",
      accent: "sunuOrange",
    },
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "Stratégies bâties autour d'objectifs mesurables",
      description:
        "Nous ne faisons rien sans KPI clairs et reporting transparent.",
    },
    {
      icon: Users,
      title: "Équipes dédiées & communication fluide",
      description:
        "Un interlocuteur privilégié et une équipe engagée sur votre réussite.",
    },
    {
      icon: CheckCircle,
      title: "Engagement sur la qualité et les délais",
      description:
        "Nous respectons nos engagements et livrons dans les temps.",
    },
  ];

  const heroImage =
    "https://images.unsplash.com/photo-1739300293396-9ad79111c8e4?auto=format&fit=crop&fm=jpg&q=80&w=2400";

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      <main className="pb-20">
        {/* HERO À PROPOS */}
        <section className="relative isolate h-[520px] w-full overflow-hidden bg-[#1178B7] sm:h-[580px] lg:h-[640px]">
          <img
            src={heroImage}
            alt="Équipe africaine dans un environnement professionnel et technologique"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div
            className="absolute inset-0 bg-gradient-to-r from-[#1178B7]/90 via-[#1178B7]/65 to-[#1178B7]/35"
            aria-hidden="true"
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-[#1178B7]/35 via-transparent to-[#F59C27]/10"
            aria-hidden="true"
          />

          <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
            <div data-aos="fade-up">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-sunuOrange md:text-sm">
                SunuLink Consulting
              </p>

              <h1 className="mx-auto max-w-full text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                À Propos de{" "}
                <span className="text-[#F59C27]">Nous</span>
              </h1>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="bg-white px-4 py-8 sm:px-6 md:py-14">
          <div className="container mx-auto max-w-5xl">
            <div className="space-y-6">
              <p className="text-left text-base font-medium leading-relaxed text-gray-800 sm:text-justify sm:text-xl">
                <strong className="font-bold text-sunuBlue">
                  SUNULINK CONSULTING
                </strong>{" "}
                accompagne les entreprises, les institutions et les
                organisations à développer leur visibilité, renforcer leur
                image de marque et accélérer leur croissance grâce à des
                stratégies de communication et de conseil performantes.
              </p>

              <p className="text-left text-sm leading-relaxed text-gray-600 sm:text-justify sm:text-lg">
                Nous associons stratégie, créativité et technologie pour
                délivrer des résultats mesurables aux entreprises africaines.
              </p>
            </div>
          </div>
        </section>

        {/* MOTS DU FONDATEUR */}
        <section className="border-y border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50 px-3 py-12 sm:px-5 md:px-6 md:py-20">
          <div className="mx-auto w-full max-w-[1440px]">
            <div className="mb-5 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-sunuBlue/20 bg-sunuBlue/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-sunuBlue">
                <Quote className="h-4 w-4 text-sunuOrange" />
                Vision & Inception
              </span>
            </div>

            <h2 className="mb-8 text-center text-3xl font-black tracking-tight text-sunuBlue sm:text-4xl md:mb-12 md:text-5xl">
              Mots du <span className="text-sunuOrange">Fondateur</span>
            </h2>

            <div className="grid grid-cols-1 items-stretch overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/70 lg:grid-cols-[360px_minmax(0,1fr)] lg:rounded-[2.25rem]">
              {/* PROFIL FONDATEUR */}
              <div className="relative min-h-full rounded-t-[1.75rem] bg-gradient-to-br from-sunuBlue via-sunuBlue to-sunuCyan p-4 text-white sm:p-6 lg:rounded-bl-[2.25rem] lg:rounded-br-none lg:rounded-tl-[2.25rem] lg:rounded-tr-none lg:p-9">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sunuOrange/20 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="h-[360px] w-full overflow-hidden rounded-2xl border border-white/25 bg-white/10 shadow-xl sm:h-[430px] lg:h-[480px]">
                    <img
                      src="/img/Birahim_DG.JPG"
                      alt="Birahim Basse — PDG / Fondateur de SunuLink Consulting"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>

                  <div className="mt-6 text-center lg:text-left">
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                      Fondateur & Directeur Général
                    </p>

                    <h3 className="mb-2 text-2xl font-black sm:text-3xl">
                      Birahim Basse
                    </h3>

                    <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                      Conseil stratégique & développement
                    </p>
                  </div>

                  <div className="mt-7 border-t border-white/20 pt-5">
                    <div className="flex items-center justify-center gap-3 text-sm font-semibold lg:justify-start">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                        <Quote className="h-5 w-5 text-sunuOrange" />
                      </span>

                      <span className="text-white/90">
                        Une vision. Une promesse. Un mouvement.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* TEXTE DU FONDATEUR */}
              <div className="p-5 sm:p-7 md:p-9 lg:p-10 xl:p-12">
                <div
                  className={`relative space-y-6 overflow-hidden text-base leading-[1.85] text-slate-700 transition-[max-height] duration-500 ease-in-out sm:text-[17px] lg:text-lg ${
                    isFounderExpanded
                      ? "max-h-[9000px]"
                      : "max-h-[1000px] md:max-h-[1100px]"
                  }`}
                >
                  {/* INTRODUCTION */}
                  <div className="rounded-3xl border border-sunuBlue/15 border-l-4 border-l-sunuOrange bg-gradient-to-br from-sunuBlue/10 via-white to-sunuCyan/10 p-5 shadow-sm sm:p-6">
                    <p className="text-base font-black italic leading-relaxed text-sunuBlue sm:text-lg lg:text-xl">
                      Chaque grande aventure naît d’une conviction. La nôtre
                      est née d’un constat.
                    </p>
                  </div>

                  <p>
                    Pendant des années, j’ai exercé le métier de graphiste avec
                    passion. J’ai découvert la puissance de la communication,
                    du design et des idées. Mais j’ai également vu une réalité
                    difficile :{" "}
                    <strong className="font-bold text-gray-900">
                      en Afrique, et particulièrement au Sénégal, les métiers
                      de la création sont encore trop souvent sous-estimés
                    </strong>
                    . Des talents sont exploités, des compétences sont
                    dévalorisées et une jeunesse créative peine à obtenir la
                    reconnaissance qu’elle mérite.
                  </p>

                  <div className="rounded-2xl border border-slate-200 bg-slate-100 px-5 py-4">
                    <p className="font-bold text-gray-900">
                      Cette réalité m’a profondément marqué.
                    </p>
                  </div>

                  <p>
                    Mais au lieu de considérer ce problème comme une fatalité,
                    j’ai décidé d’en faire une opportunité. Parce que je crois
                    profondément en l’Afrique.{" "}
                    <strong className="font-bold text-sunuBlue">
                      Je crois en sa jeunesse. Je crois en sa créativité. Je
                      crois en son intelligence.
                    </strong>{" "}
                    Je crois surtout que notre génération a la responsabilité
                    d’écrire une nouvelle histoire.
                  </p>

                  <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-sunuBlue/10 via-white to-sunuOrange/10 p-5 shadow-sm sm:p-6">
                    <p>
                      Aujourd’hui, nous vivons une révolution sans précédent.
                      La technologie transforme nos façons de communiquer, de
                      travailler et de créer. L’intelligence artificielle, le
                      digital et les innovations redessinent le monde.{" "}
                      <strong className="font-bold text-gray-900">
                        Je voulais créer une entreprise capable de connecter
                        cette nouvelle Afrique au reste du monde.
                      </strong>
                    </p>
                  </div>

                  {/* NAISSANCE DE L'ÉVIDENCE */}
                  <div className="my-7 overflow-hidden rounded-3xl border border-slate-200 shadow-md">
                    <div className="bg-gradient-to-r from-sunuBlue to-sunuCyan px-5 py-4 sm:px-7 sm:py-5">
                      <h3 className="text-base font-black uppercase tracking-wide text-white sm:text-lg">
                        La Naissance de l'Évidence
                      </h3>
                    </div>

                    <div className="space-y-5 bg-white p-5 sm:p-7">
                      <p className="text-gray-700">
                        Pendant des semaines, j’ai exploré des dizaines
                        d’idées. Aucun nom ne reflétait réellement ce que
                        j’avais en tête. Il manquait toujours quelque chose :
                        une émotion, une identité, une vision. Puis un jour,
                        l’évidence est apparue :
                      </p>

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="rounded-2xl bg-gradient-to-br from-sunuBlue to-sunuCyan p-5 text-white shadow-md">
                          <span className="mb-2 block text-sm font-black uppercase tracking-widest text-sunuOrange">
                            SUNU
                          </span>

                          <p className="text-sm leading-7 sm:text-base">
                            Un mot profondément sénégalais, qui signifie{" "}
                            <span className="font-black">“Notre”</span>.
                          </p>
                        </div>

                        <div className="rounded-2xl bg-gradient-to-br from-sunuOrange to-yellow-500 p-5 text-white shadow-md">
                          <span className="mb-2 block text-sm font-black uppercase tracking-widest text-white">
                            LINK
                          </span>

                          <p className="text-sm leading-7 sm:text-base">
                            Le lien, la connexion, le pont entre les personnes,
                            les entreprises et les opportunités.
                          </p>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-[#1178B7]/15 bg-gradient-to-r from-[#1178B7]/10 via-white to-[#F59C27]/15 px-5 py-5 text-center shadow-sm">
                        <p className="text-lg font-black tracking-tight sm:text-xl md:text-2xl">
                          <span className="text-[#1178B7]">SUNULINK</span>{" "}
                          <span className="text-slate-500">=</span>{" "}
                          <span className="text-[#F59C27]">Notre Lien.</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="font-medium text-gray-800">
                    Le lien du Sénégal avec le monde. Le lien de l’Afrique avec
                    l’innovation. Le lien entre les idées et leur impact. Le
                    lien entre les entreprises et leur croissance. Le lien
                    entre les talents africains et les opportunités
                    internationales.
                  </p>

                  <div className="rounded-3xl border border-sunuBlue/10 bg-blue-50 p-5 shadow-sm sm:p-6">
                    <blockquote className="border-l-4 border-sunuBlue pl-4 font-semibold italic text-sunuBlue">
                      "SUNULINK n’est donc pas seulement un nom. C’est une
                      vision. Une promesse. Un mouvement."
                    </blockquote>
                  </div>

                  <p>
                    Nous avons créé{" "}
                    <strong className="font-bold text-sunuBlue">
                      SUNULINK CONSULTING
                    </strong>{" "}
                    avec une ambition simple mais immense :{" "}
                    <strong className="font-bold text-gray-900">
                      faire de la communication un véritable levier de
                      transformation pour les entreprises africaines.
                    </strong>{" "}
                    Nous voulons prouver qu’une équipe composée majoritairement
                    de jeunes Africains peut concevoir des stratégies, des
                    marques, des campagnes et des solutions capables de
                    rivaliser avec les meilleurs standards internationaux.
                  </p>

                  <p>
                    Notre mission dépasse la création de logos ou la gestion
                    des réseaux sociaux. Nous voulons construire des marques
                    fortes, accompagner les entreprises dans leur croissance,
                    mettre la technologie et l’IA au service du développement,
                    valoriser les talents locaux et inspirer une nouvelle
                    génération d’entrepreneurs.
                  </p>

                  <div className="rounded-3xl border-l-4 border-sunuOrange bg-gradient-to-r from-sunuOrange/10 to-yellow-50 p-5 sm:p-6">
                    <p className="font-bold text-sunuOrange">
                      Chez SUNULINK CONSULTING, nous croyons que l’Afrique ne
                      doit plus seulement consommer les innovations du monde :
                      elle doit les créer, les exporter et les diriger.
                    </p>
                  </div>

                  <p>
                    Nous voulons participer à cette transformation en bâtissant
                    un cabinet de conseil et une agence de communication qui
                    portent haut les couleurs de l’Afrique. Notre histoire ne
                    fait que commencer. Et chaque client qui nous rejoint
                    devient un acteur de cette vision.
                  </p>

                  <div className="space-y-4 border-t border-slate-200 pt-7 text-left sm:pt-8 sm:text-center">
                    <p className="text-base font-bold text-gray-900 sm:text-lg">
                      L’avenir de la communication mondiale ne se construira
                      pas sans l’Afrique.
                    </p>

                    <p className="text-lg font-black text-sunuOrange sm:text-xl">
                      Et SUNULINK CONSULTING a choisi d’en être l’un des
                      bâtisseurs.
                    </p>

                    <div className="pt-1">
                      <div className="inline-block max-w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 sm:px-6">
                        <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-gray-500 sm:text-xs">
                          Notre signature
                        </p>

                        <p className="text-xs font-bold text-sunuBlue sm:text-sm sm:leading-6">
                          SUNULINK CONSULTING — Plus qu’un lien : un levier de
                          progrès, d’impact et de confiance.
                        </p>
                      </div>
                    </div>
                  </div>

                  {!isFounderExpanded && (
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/90 to-transparent" />
                  )}
                </div>

                <div className="flex justify-center pt-5">
                  <button
                    type="button"
                    onClick={() =>
                      setIsFounderExpanded((previous) => !previous)
                    }
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-sunuBlue px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-sunuOrange hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sunuBlue/30"
                    aria-expanded={isFounderExpanded}
                  >
                    {isFounderExpanded ? "Voir moins" : "Voir plus"}
                    <span aria-hidden="true">
                      {isFounderExpanded ? "↑" : "↓"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ÉQUIPE */}
        <section className="bg-slate-50 px-4 py-16 sm:px-6 md:py-20">
          <div className="container mx-auto max-w-7xl text-center">
            <div className="mx-auto mb-12 max-w-4xl md:mb-16">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-sunuBlue/20 bg-sunuBlue/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-sunuBlue">
                <Users className="h-4 w-4 text-sunuOrange" />
                Équipe SunuLink
              </span>

              <h2
                className="mb-5 text-3xl font-black text-[#1178B7] md:text-5xl"
                data-aos="fade-up"
              >
                Notre <span className="text-[#F59C27]">Équipe</span>
              </h2>

              <p className="text-base leading-relaxed text-gray-600 sm:text-xl">
                Derrière chaque mission, des expertises et des personnalités.
                Chez SunuLink, nous réunissons des profils complémentaires
                autour d’une même ambition : transformer les enjeux de nos
                clients en solutions concrètes, pertinentes et durables.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-7 text-left md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <article
                  key={member.name}
                  className={`group overflow-hidden rounded-[2rem] border-2 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                    member.accent === "sunuOrange"
                      ? "border-sunuOrange/70 hover:border-sunuOrange"
                      : "border-sunuBlue/70 hover:border-sunuBlue"
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative aspect-[4/4.3] overflow-hidden bg-slate-100">
                    <img
                      src={member.image}
                      alt={`${member.name} — ${member.role}`}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={(event) => {
                        if (
                          member.fallbackImage &&
                          event.currentTarget.src.endsWith(
                            member.image.replace(/^\//, "")
                          )
                        ) {
                          event.currentTarget.src = member.fallbackImage;
                        }
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="mb-2 inline-flex rounded-full bg-white/90 px-3 py-1 text-[11px] font-black uppercase tracking-wide text-sunuBlue">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div
                      className={`mb-5 h-1 w-12 rounded-full ${
                        member.accent === "sunuOrange"
                          ? "bg-sunuOrange"
                          : "bg-sunuBlue"
                      }`}
                    />

                    <h3 className="mb-2 text-xl font-black text-gray-800 sm:text-2xl">
                      {member.name}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                      {member.expertise}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="bg-white px-4 py-12 sm:px-6 md:py-16">
          <div className="container mx-auto grid max-w-7xl gap-6 md:grid-cols-2 md:gap-8">
            <div
              className="grain-texture rounded-3xl bg-gradient-to-br from-sunuBlue to-sunuCyan p-6 text-white shadow-xl sm:p-10"
              data-aos="fade-right"
            >
              <h3 className="mb-4 text-2xl font-black sm:mb-6 sm:text-3xl">
                Notre Mission
              </h3>

              <p className="text-left text-base leading-relaxed sm:text-justify sm:text-xl">
                Accompagner les organisations dans leur croissance en
                concevant des stratégies de conseil, de communication et
                d’innovation qui génèrent des résultats mesurables et durables.
              </p>
            </div>

            <div
              className="grain-texture rounded-3xl bg-gradient-to-br from-sunuOrange to-yellow-500 p-6 text-white shadow-xl sm:p-10"
              data-aos="fade-left"
            >
              <h3 className="mb-4 text-2xl font-black sm:mb-6 sm:text-3xl">
                Notre Vision
              </h3>

              <p className="text-left text-base leading-relaxed sm:text-justify sm:text-xl">
                Devenir un cabinet de conseil stratégique et de communication
                de référence, reconnu pour son excellence, son innovation et
                son impact auprès des organisations à l’échelle internationale.
              </p>
            </div>
          </div>
        </section>

        {/* NOS VALEURS */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-4 py-16 sm:px-6 md:py-20">
          <div
            className="pointer-events-none absolute -right-24 top-12 h-64 w-64 rounded-full bg-[#1178B7]/5 blur-3xl"
            aria-hidden="true"
          />

          <div className="container relative z-10 mx-auto max-w-7xl">
            <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1178B7]/15 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#1178B7] shadow-sm">
                <Sparkles className="h-4 w-4 text-[#F59C27]" />
                Ce qui nous guide
              </span>

              <h2
                className="text-3xl font-black tracking-tight text-[#1178B7] sm:text-4xl md:text-5xl"
                data-aos="fade-up"
              >
                Nos <span className="text-[#F59C27]">Valeurs</span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Les principes qui inspirent notre travail, orientent nos
                décisions et donnent du sens à chaque collaboration.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {values.map((value, index) => (
                <article
                  key={value.title}
                  className={`group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-7 ${
                    index % 2 === 0
                      ? "hover:border-[#1178B7]/50 hover:shadow-[#1178B7]/10"
                      : "hover:border-[#F59C27]/60 hover:shadow-[#F59C27]/10"
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 70}
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1.5 ${
                      index % 2 === 0
                        ? "bg-[#1178B7]"
                        : "bg-[#F59C27]"
                    }`}
                    aria-hidden="true"
                  />

                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${value.color} text-white shadow-md transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105 sm:h-16 sm:w-16`}
                    >
                      <value.icon
                        className="h-7 w-7 sm:h-8 sm:w-8"
                        strokeWidth={1.9}
                      />
                    </div>

                    <span className="text-sm font-black tracking-[0.18em] text-slate-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-black text-[#1178B7] transition-colors duration-300 group-hover:text-[#F59C27] sm:text-2xl">
                    {value.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-600 sm:text-base">
                    {value.description}
                  </p>

                  <div
                    className="mt-6 h-px w-full bg-slate-100"
                    aria-hidden="true"
                  />

                  <div className="mt-4 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1178B7]">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        index % 2 === 0
                          ? "bg-[#1178B7]"
                          : "bg-[#F59C27]"
                      }`}
                    />
                    L’esprit SunuLink
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* NOTRE APPROCHE */}
        <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 md:py-20">
          <div
            className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#F59C27]/5 blur-3xl"
            aria-hidden="true"
          />

          <div className="container relative z-10 mx-auto max-w-7xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F59C27]/30 bg-[#F59C27]/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#1178B7]">
              <Target className="h-4 w-4 text-[#F59C27]" />
              De l’analyse aux résultats
            </span>

            <h2
              className="mb-5 text-3xl font-black tracking-tight text-[#1178B7] sm:text-4xl md:text-5xl"
              data-aos="fade-up"
            >
              Notre <span className="text-[#F59C27]">Approche</span>
            </h2>

            <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-slate-600 sm:mb-14 sm:text-lg">
              Un processus clair et structuré pour transformer vos objectifs
              en actions concrètes et progresser à chaque étape.
            </p>

            <div className="grid grid-cols-1 gap-5 text-left sm:grid-cols-2 xl:grid-cols-5 xl:gap-4">
              {approachSteps.map((step, index) => (
                <article
                  key={step.number}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#F59C27]/70 hover:shadow-xl hover:shadow-[#1178B7]/10 sm:p-6"
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1.5 ${
                      index % 2 === 0
                        ? "bg-[#1178B7]"
                        : "bg-[#F59C27]"
                    }`}
                    aria-hidden="true"
                  />

                  <div className="mb-5 flex items-center justify-between gap-3 pt-1">
                    <span
                      className={`inline-flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-2xl text-3xl font-black leading-none text-white shadow-lg transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20 sm:text-4xl ${
                        index % 2 === 0
                          ? "bg-gradient-to-br from-[#1178B7] to-[#075985] shadow-[#1178B7]/20"
                          : "bg-gradient-to-br from-[#F59C27] to-[#D97706] shadow-[#F59C27]/20"
                      }`}
                    >
                      {step.number}
                    </span>

                    <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-400">
                      Étape {index + 1}/5
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-black text-[#1178B7] transition-colors duration-300 group-hover:text-[#F59C27] sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="flex-1 text-sm leading-7 text-slate-600 sm:text-base">
                    {step.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-bold text-slate-500">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        index % 2 === 0
                          ? "bg-[#1178B7]"
                          : "bg-[#F59C27]"
                      }`}
                    />
                    Un accompagnement progressif
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* POURQUOI NOUS CHOISIR */}
        <section className="relative overflow-hidden bg-slate-50 px-4 py-16 sm:px-6 md:py-20">
          <div className="container relative z-10 mx-auto max-w-7xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1178B7]/15 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#1178B7] shadow-sm">
              <CheckCircle className="h-4 w-4 text-[#F59C27]" />
              La différence SunuLink
            </span>

            <h2
              className="mb-5 text-3xl font-black tracking-tight text-[#1178B7] sm:text-4xl md:text-5xl"
              data-aos="fade-up"
            >
              Pourquoi <span className="text-[#F59C27]">nous choisir ?</span>
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-600 sm:mb-14 sm:text-lg">
              Un partenaire engagé, une méthode lisible et une exigence
              constante pour faire avancer vos projets.
            </p>

            <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-3 md:gap-7">
              {whyChooseUs.map((reason, index) => (
                <article
                  key={reason.title}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-[#F59C27]/70 hover:shadow-xl hover:shadow-[#1178B7]/10 sm:p-8 lg:p-9"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1.5 ${
                      index === 1
                        ? "bg-[#F59C27]"
                        : "bg-[#1178B7]"
                    }`}
                    aria-hidden="true"
                  />

                  <div className="mb-6 flex items-center justify-between gap-4 pt-1">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg transition-all duration-300 group-hover:rotate-3 group-hover:scale-105 ${
                        index === 1
                          ? "bg-gradient-to-br from-[#F59C27] to-[#D97706] shadow-[#F59C27]/20"
                          : "bg-gradient-to-br from-[#1178B7] to-[#075985] shadow-[#1178B7]/20"
                      }`}
                    >
                      <reason.icon className="h-8 w-8" strokeWidth={1.9} />
                    </div>

                    <span className="text-3xl font-black text-slate-100 transition-colors duration-300 group-hover:text-[#F59C27]/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mb-4 text-xl font-black leading-snug text-[#1178B7] transition-colors duration-300 group-hover:text-[#F59C27] sm:text-2xl">
                    {reason.title}
                  </h3>

                  <p className="flex-1 text-sm leading-7 text-slate-600 sm:text-base">
                    {reason.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-extrabold uppercase tracking-wider text-[#1178B7]">
                    <CheckCircle className="h-4 w-4 text-[#F59C27]" />
                    Un engagement concret
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL — HAUTEUR RÉDUITE ET DISPOSITION OPTIMISÉE */}
        <section className="px-4 py-5 sm:px-6 sm:py-7 md:py-8">
          <div className="mx-auto max-w-6xl">
            <div
              className="grain-texture relative isolate overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-r from-[#1178B7] to-[#0E679B] px-5 py-5 text-white shadow-lg sm:rounded-3xl sm:px-7 sm:py-6 lg:px-9 lg:py-7"
              data-aos="fade-up"
            >
              {/* DÉCORATIONS DISCRÈTES */}
              <div
                className="pointer-events-none absolute -right-10 -top-12 -z-10 h-36 w-36 rounded-full border-[16px] border-white/[0.07] sm:h-44 sm:w-44"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute -bottom-16 -left-10 -z-10 h-36 w-36 rounded-full bg-[#F59C27]/10 blur-2xl"
                aria-hidden="true"
              />

              <div className="flex flex-col items-center gap-5 text-center lg:flex-row lg:justify-between lg:gap-8 lg:text-left">
                {/* TITRE ET DESCRIPTION */}
                <div className="min-w-0 flex-1">
                  <h2 className="mb-2 text-xl font-extrabold leading-tight text-white sm:text-2xl md:text-3xl">
                    Prêt à transformer votre communication ?
                  </h2>

                  <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base lg:mx-0">
                    Contactez-nous dès aujourd'hui pour discuter de vos
                    besoins et découvrir comment nous pouvons vous accompagner
                    vers le succès.
                  </p>
                </div>

                {/* BOUTONS D'ACTION */}
                <div className="flex w-full shrink-0 flex-col justify-center gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-3 lg:flex-nowrap">
                  <Link
                    to="/devis"
                    className="inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-full bg-[#F59C27] px-5 py-2.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-white hover:text-[#1178B7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1178B7] motion-reduce:transition-none sm:px-6"
                  >
                    Demander un devis
                  </Link>

                  <Link
                    to="/services"
                    className="inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-full border border-white/80 px-5 py-2.5 text-sm font-bold text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#1178B7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1178B7] motion-reduce:transition-none sm:px-6"
                  >
                    Découvrir nos services
                  </Link>
                </div>
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
