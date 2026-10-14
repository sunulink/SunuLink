import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Monitor,
  ArrowRight,
  ArrowUpRight,
  FileText,
  Download,
  ExternalLink,
  CheckCircle2,
  BookOpen,
  TrendingUp,
  Target,
  BarChart3,
} from "lucide-react";

// Compteur animé, indépendant du défilement et responsive.
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

// Les six intitulés sont conservés, sans cartes descriptives.
const processStages = [
  "Diagnostic",
  "Stratégie",
  "Création",
  "Diffusion",
  "Analyse",
  "Résultat",
];

// Les fichiers sont hébergés dans public/assets/docs/.
const resources = [
  {
    id: "croissance",
    number: "01",
    title: "Votre marque est-elle prête à changer d’échelle ?",
    category: "Stratégie, branding & digital",
    description:
      "Identité de marque, positionnement, cohérence de la communication, digital et organisation : explorez les dimensions à considérer pour accompagner la croissance de votre marque.",
    objective: "Préparer votre changement d’échelle",
    file: "/assets/docs/votre-digital-peut-il-accompagner-votre-croissance.pdf",
    downloadName: "votre-digital-peut-il-accompagner-votre-croissance.pdf",
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
      "Explorez les facteurs susceptibles de limiter les performances marketing et réfléchissez aux moyens d’améliorer vos actions.",
    objective: "Performance & optimisation",
    file: "/assets/docs/Pourquoi_votre_marketing_ne_produit_pas_les_r%C3%A9sultats_attendus.pdf",
    downloadName:
      "Pourquoi_votre_marketing_ne_produit_pas_les_résultats_attendus.pdf",
    icon: BarChart3,
  },
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
            Découvrez notre approche, nos ressources professionnelles et
            notre manière d’accompagner les marques de la réflexion
            stratégique jusqu’aux résultats.
          </p>
        </header>

        {/* BANDEAU DES RÉALISATIONS */}
        <div
          className="relative mb-14 overflow-hidden rounded-3xl bg-[#1178B7] p-5 text-white shadow-lg sm:p-8 md:p-10"
          data-aos="fade-up"
        >
          <div
            className="absolute right-0 top-0 h-2 w-28 bg-[#F59C27] sm:w-40"
            aria-hidden="true"
          />

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

        {/* MÉTHODE SUNULINK : UN SEUL PARCOURS */}
        <section
          className="mb-16"
          aria-labelledby="method-title"
          data-aos="fade-up"
        >
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#F59C27] sm:text-sm">
              Notre méthode d’accompagnement
            </p>

            <h3
              id="method-title"
              className="text-2xl font-black leading-tight text-[#1178B7] sm:text-3xl md:text-4xl"
            >
              Du diagnostic au résultat.
            </h3>

            <p className="mt-3 leading-relaxed text-slate-600">
              Six étapes complémentaires pour faire avancer chaque projet
              avec une direction claire.
            </p>
          </div>

          {/* Parcours minimal : horizontal sur grand écran,
              vertical sur mobile. Pas de cartes individuelles. */}
          <ol className="relative mx-auto flex max-w-5xl flex-col gap-2 md:flex-row md:items-start md:gap-0">
            {processStages.map((stage, index) => (
              <li
                key={stage}
                className="relative flex items-center gap-4 py-2 md:flex-1 md:flex-col md:items-center md:gap-3 md:px-2 md:py-0 md:text-center"
              >
                <span
                  className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 text-sm font-black transition-colors duration-300 md:h-12 md:w-12 ${
                    index === processStages.length - 1
                      ? "border-[#F59C27] bg-[#F59C27] text-white"
                      : "border-[#1178B7] bg-white text-[#1178B7] hover:border-[#F59C27] hover:bg-[#F59C27] hover:text-white"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className={`text-base font-extrabold sm:text-lg ${
                    index === processStages.length - 1
                      ? "text-[#F59C27]"
                      : "text-[#1178B7]"
                  }`}
                >
                  {stage}
                </span>

                {index < processStages.length - 1 && (
                  <>
                    {/* Liaison verticale pour mobile */}
                    <span
                      className="absolute left-[1.35rem] top-[3.25rem] h-3 w-px bg-[#1178B7]/25 md:hidden"
                      aria-hidden="true"
                    />

                    {/* Liaison horizontale pour tablette et ordinateur */}
                    <ArrowRight
                      size={17}
                      className="absolute -bottom-0.5 right-0 hidden translate-x-1/2 text-[#F59C27] md:right-0 md:top-[1rem] md:block"
                      aria-hidden="true"
                    />
                  </>
                )}
              </li>
            ))}
          </ol>
        </section>

        {/* BIBLIOTHÈQUE DE DOCUMENTS PDF */}
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
                Retrouvez nos documents PDF et consultez-les en ligne ou
                téléchargez-les pour les conserver.
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
                  {/* COUVERTURE GRAPHIQUE */}
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

                  {/* INFORMATIONS DU DOCUMENT */}
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
                        aria-label={`Télécharger : ${resource.title}`}
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
          <div
            className="absolute right-0 top-0 h-2 w-28 bg-[#F59C27] sm:w-44"
            aria-hidden="true"
          />

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
