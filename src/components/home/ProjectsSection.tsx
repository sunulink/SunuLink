
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Monitor,
  ArrowRight,
  ArrowUpRight,
  Search,
  Target,
  Palette,
  Megaphone,
  BarChart3,
  TrendingUp,
  FileText,
  Download,
  ExternalLink,
  CheckCircle2,
  BookOpen,
  Users,
} from "lucide-react";

const SUNU_BLUE = "#1178B7";
const SUNU_ORANGE = "#F59C27";

// Compteur local : il ne dépend pas de l'IntersectionObserver.
const AnimatedCounter = ({
  end,
  duration = 1400,
}: {
  end: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || duration <= 0) {
      setCount(end);
      return;
    }

    let startTime: number | null = null;
    let frameId = 0;

    const animate = (time: number) => {
      if (startTime === null) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [end, duration]);

  return <span>{count}</span>;
};

const processSteps = [
  {
    number: "01",
    title: "Diagnostic",
    description:
      "Nous commençons par comprendre votre entreprise, votre marché, votre audience, votre positionnement et vos enjeux.",
    objective: "Comprendre avant d’agir.",
    icon: Search,
  },
  {
    number: "02",
    title: "Stratégie",
    description:
      "Nous construisons une stratégie adaptée à vos objectifs, à votre marché et à vos ambitions.",
    objective: "Donner une direction claire.",
    icon: Target,
  },
  {
    number: "03",
    title: "Création",
    description:
      "Nous transformons la stratégie en contenus, identité, campagnes et expériences qui donnent vie à votre marque.",
    objective: "Transformer la stratégie en impact.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Diffusion",
    description:
      "Nous diffusons votre message sur les bons canaux, auprès des bonnes audiences, au bon moment.",
    objective: "Toucher les bonnes audiences.",
    icon: Megaphone,
  },
  {
    number: "05",
    title: "Analyse",
    description:
      "Nous mesurons les performances, analysons les données et optimisons les actions.",
    objective: "Mesurer et optimiser.",
    icon: BarChart3,
  },
  {
    number: "06",
    title: "Résultat",
    description:
      "Notre objectif est de créer de la visibilité, de la confiance et de la croissance.",
    objective: "Transformer l’action en valeur.",
    icon: TrendingUp,
  },
];

const resources = [
  {
    id: "visibilite-vente",
    number: "01",
    title: "De la visibilité à la vente",
    category: "Marketing & développement commercial",
    description:
      "Un document pour explorer le lien entre visibilité d’une marque et objectifs commerciaux.",
    objective: "Visibilité & conversion",
    file: "/assets/docs/de-la-visibilite-a-la-vente.pdf",
    downloadName: "de-la-visibilite-a-la-vente.pdf",
    icon: TrendingUp,
  },
  {
    id: "agence-360",
    number: "02",
    title: "Pourquoi choisir une agence 360",
    category: "Stratégie & communication",
    description:
      "Découvrez le principe d’une approche globale et la complémentarité des expertises en communication.",
    objective: "Une vision globale",
    file: "/assets/docs/pourquoi%20choisir%20une%20agence%20360.pdf",
    downloadName: "pourquoi choisir une agence 360.pdf",
    icon: Target,
  },
  {
    id: "marketing-resultats",
    number: "03",
    title: "Pourquoi votre marketing ne produit pas les résultats attendus",
    category: "Performance marketing",
    description:
      "Un document pour réfléchir aux facteurs qui peuvent limiter les performances marketing.",
    objective: "Performance & optimisation",
    file: "/assets/docs/Pourquoi_votre_marketing_ne_produit_pas_les_r%C3%A9sultats_attendus.pdf",
    downloadName:
      "Pourquoi_votre_marketing_ne_produit_pas_les_résultats_attendus.pdf",
    icon: BarChart3,
  },
];

const projectJourney = [
  "Besoin",
  "Stratégie",
  "Action",
  "Performance",
  "Croissance",
];

export const ProjectsSection = () => {
  return (
    <section className="overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-14 md:py-16">
      <div className="mx-auto max-w-7xl">
        {/* INTRODUCTION */}
        <header
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
          data-aos="fade-up"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F59C27]/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#1178B7] sm:text-sm">
            <BookOpen size={16} className="text-[#F59C27]" />
            Nos ressources & expertises
          </span>

          <h2 className="mb-5 text-3xl font-black leading-tight text-[#1178B7] sm:text-4xl md:text-5xl">
            Des idées qui prennent forme,
            <span className="mt-1 block text-[#F59C27]">
              une méthode qui fait la différence.
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Découvrez notre démarche d’accompagnement et explorez nos
            ressources professionnelles pour mieux comprendre les enjeux
            de la stratégie, de la communication et du marketing.
          </p>
        </header>

        {/* BANDEAU DES PROJETS */}
        <div
          className="relative mb-14 overflow-hidden rounded-3xl bg-[#1178B7] p-5 text-white shadow-lg sm:p-8 md:p-10"
          data-aos="fade-up"
        >
          <div className="absolute right-0 top-0 h-2 w-28 bg-[#F59C27] sm:w-40" />

          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#F59C27] sm:flex">
                <Monitor size={29} />
              </div>

              <div>
                <div className="flex items-baseline gap-1 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
                  <AnimatedCounter end={50} />
                  <span>+</span>
                </div>

                <p className="mt-1 max-w-sm text-sm font-semibold text-white/90 sm:text-base">
                  Projets menés avec créativité et engagement.
                </p>
              </div>
            </div>

            <Link
              to="/realisations"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#F59C27] px-6 py-3 text-center text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#1178B7] focus:outline-none focus:ring-4 focus:ring-white/40 motion-reduce:transform-none sm:w-auto sm:text-base"
            >
              Voir toutes nos réalisations
              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* SIX ÉTAPES : NOUVEAU DESIGN EN PARCOURS */}
        <section className="mb-16" aria-labelledby="method-title">
          <div className="mb-8 max-w-3xl" data-aos="fade-up">
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#F59C27] sm:text-sm">
              Notre méthode d’accompagnement
            </p>

            <h3
              id="method-title"
              className="text-2xl font-black leading-tight text-[#1178B7] sm:text-3xl md:text-4xl"
            >
              Six étapes pour transformer votre besoin en résultats.
            </h3>

            <p className="mt-3 leading-relaxed text-slate-600">
              Chaque étape prépare la suivante. Cette progression nous permet
              de garder une direction claire et de travailler vers les objectifs
              convenus avec vous.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const orangeAccent = index % 2 === 1;
              const progress = `${((index + 1) / processSteps.length) * 100}%`;

              return (
                <article
                  key={step.number}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F59C27] hover:shadow-[0_16px_36px_rgba(17,120,183,0.12)] motion-reduce:transform-none sm:p-6"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  {/* Barre latérale bleu/orange */}
                  <div
                    className={`absolute inset-y-0 left-0 w-1 transition-colors duration-300 group-hover:bg-[#F59C27] ${
                      orangeAccent ? "bg-[#F59C27]" : "bg-[#1178B7]"
                    }`}
                    aria-hidden="true"
                  />

                  <div className="flex items-start justify-between gap-4 pl-2">
                    <div>
                      <span
                        className={`inline-flex h-10 min-w-12 items-center justify-center rounded-xl px-3 text-sm font-black text-white ${
                          orangeAccent ? "bg-[#F59C27]" : "bg-[#1178B7]"
                        }`}
                      >
                        {step.number}
                      </span>

                      <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                        Étape {index + 1} sur 6
                      </p>
                    </div>

                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1178B7]/10 text-[#1178B7] transition-all duration-300 group-hover:rotate-3 group-hover:bg-[#F59C27] group-hover:text-white motion-reduce:transform-none">
                      <Icon size={24} />
                    </span>
                  </div>

                  <h4 className="mb-3 mt-5 pl-2 text-xl font-extrabold text-[#1178B7] transition-colors duration-300 group-hover:text-[#F59C27] sm:text-2xl">
                    {step.title}
                  </h4>

                  <p className="flex-1 pl-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {step.description}
                  </p>

                  <div className="ml-2 mt-6 border-t border-slate-100 pt-4">
                    <div className="mb-3 flex items-start gap-2">
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-[#F59C27]"
                      />
                      <p className="text-sm font-bold leading-relaxed text-[#1178B7]">
                        {step.objective}
                      </p>
                    </div>

                    <div
                      className="h-1.5 overflow-hidden rounded-full bg-slate-100"
                      aria-label={`Progression indicative : ${index + 1} étape sur 6`}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-500 group-hover:bg-[#F59C27]"
                        style={{
                          width: progress,
                          backgroundColor: orangeAccent
                            ? SUNU_ORANGE
                            : SUNU_BLUE,
                        }}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Parcours global */}
          <div
            className="mt-6 rounded-2xl bg-[#1178B7] p-5 text-white sm:p-6"
            data-aos="fade-up"
          >
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.16em] text-[#F59C27]">
              Le parcours de transformation
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
              {projectJourney.map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span
                    className={`rounded-full px-3 py-2 text-sm font-bold sm:px-4 ${
                      index === projectJourney.length - 1
                        ? "bg-[#F59C27] text-white"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {item}
                  </span>

                  {index < projectJourney.length - 1 && (
                    <ArrowRight
                      size={16}
                      className="text-[#F59C27]"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BIBLIOTHÈQUE DE PDF */}
        <section
          id="ressources-pdf"
          className="scroll-mt-24"
          aria-labelledby="resources-title"
        >
          <div
            className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
            data-aos="fade-up"
          >
            <div className="max-w-3xl">
              <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#F59C27] sm:text-sm">
                À consulter et à télécharger
              </p>

              <h3
                id="resources-title"
                className="text-2xl font-black leading-tight text-[#1178B7] sm:text-3xl md:text-4xl"
              >
                Nos ressources pour aller plus loin.
              </h3>

              <p className="mt-3 leading-relaxed text-slate-600">
                Consultez nos documents PDF en ligne ou téléchargez-les pour
                les retrouver plus tard.
              </p>
            </div>

            <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#1178B7]/10 px-4 py-2 text-sm font-bold text-[#1178B7]">
              <FileText size={17} className="text-[#F59C27]" />
              {resources.length} documents PDF
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;

              return (
                <article
                  key={resource.id}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F59C27] hover:shadow-[0_18px_40px_rgba(17,120,183,0.14)] motion-reduce:transform-none"
                  data-aos="fade-up"
                  data-aos-delay={index * 70}
                >
                  {/* Couverture de document créée en CSS */}
                  <div className="relative flex min-h-[205px] flex-col justify-between overflow-hidden bg-[#1178B7] p-5 text-white sm:min-h-[220px] sm:p-6">
                    <div
                      className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-[18px] border-white/10 transition-transform duration-500 group-hover:scale-110 motion-reduce:transform-none"
                      aria-hidden="true"
                    />

                    <div
                      className="absolute bottom-0 left-0 h-1.5 w-24 bg-[#F59C27] transition-all duration-300 group-hover:w-36"
                      aria-hidden="true"
                    />

                    <div className="relative z-10 flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold">
                        <FileText
                          size={15}
                          className="text-[#F59C27]"
                        />
                        Document PDF
                      </span>

                      <span className="text-sm font-black tracking-widest text-[#F59C27]">
                        {resource.number}
                      </span>
                    </div>

                    <div className="relative z-10 mt-7">
                      <span className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#F59C27] text-white shadow-md transition-transform duration-300 group-hover:rotate-3 motion-reduce:transform-none">
                        <Icon size={25} />
                      </span>

                      <h4 className="max-w-md text-xl font-black leading-snug text-white sm:text-2xl">
                        {resource.title}
                      </h4>
                    </div>
                  </div>

                  {/* Détails */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <span className="mb-4 inline-flex w-fit max-w-full rounded-full bg-[#F59C27]/10 px-3 py-2 text-xs font-extrabold leading-relaxed text-[#1178B7]">
                      {resource.category}
                    </span>

                    <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {resource.description}
                    </p>

                    <div className="mb-5 flex items-start gap-2 border-t border-slate-100 pt-4 text-sm font-bold text-[#1178B7]">
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-[#F59C27]"
                      />
                      <span>{resource.objective}</span>
                    </div>

                    <div className="mt-auto flex flex-col gap-3">
                      <a
                        href={resource.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Consulter le PDF : ${resource.title}`}
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#1178B7] px-4 py-3 text-center text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F59C27] focus:outline-none focus:ring-4 focus:ring-[#F59C27]/40 motion-reduce:transform-none"
                      >
                        Consulter le PDF
                        <ExternalLink size={17} />
                      </a>

                      <a
                        href={resource.file}
                        download={resource.downloadName}
                        aria-label={`Télécharger le document : ${resource.title}`}
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-[#F59C27] bg-white px-4 py-3 text-center text-sm font-extrabold text-[#1178B7] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F59C27] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#F59C27]/40 motion-reduce:transform-none"
                      >
                        Télécharger le document
                        <Download size={17} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* APPEL À L'ACTION FINAL */}
        <div
          className="relative mt-12 overflow-hidden rounded-3xl bg-[#1178B7] p-6 text-white sm:mt-16 sm:p-8 md:p-10"
          data-aos="fade-up"
        >
          <div className="absolute right-0 top-0 h-2 w-28 bg-[#F59C27] sm:w-44" />

          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#F59C27]">
                Votre prochain projet
              </p>

              <h3 className="text-2xl font-black leading-tight sm:text-3xl md:text-4xl">
                Et si nous faisions avancer votre idée ?
              </h3>

              <p className="mt-3 leading-relaxed text-white/90">
                Échangeons sur vos objectifs et définissons ensemble une
                démarche adaptée à vos besoins.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#F59C27] px-6 py-3 font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#1178B7] focus:outline-none focus:ring-4 focus:ring-white/40 motion-reduce:transform-none sm:w-auto"
            >
              <Users size={18} />
              Parlons de votre projet
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
