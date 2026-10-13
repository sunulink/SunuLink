import { Link } from "react-router-dom";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
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
} from "lucide-react";

const SUNU_BLUE = "#1178B7";
const SUNU_ORANGE = "#F59C27";

// Les fichiers sont placés dans public/assets/docs/.
// Dans une application Vite, ils sont accessibles via /assets/docs/.
const resources = [
  {
    id: "visibilite-vente",
    title: "De la visibilité à la vente",
    category: "Marketing & développement commercial",
    description:
      "Un document consacré au lien entre la visibilité d’une marque et ses objectifs de vente.",
    objective: "Visibilité et conversion",
    file: "/assets/docs/De%20la%20visibilit%C3%A9%20%C3%A0%20la%20vente.pdf",
    downloadName: "De la visibilité à la vente.pdf",
    number: "01",
    icon: TrendingUp,
  },
  {
    id: "agence-360",
    title: "Pourquoi choisir une agence 360",
    category: "Stratégie & communication",
    description:
      "Découvrez le sujet de l’approche globale de la communication et de la complémentarité des expertises.",
    objective: "Une vision globale",
    file: "/assets/docs/pourquoi%20choisir%20une%20agence%20360.pdf",
    downloadName: "pourquoi choisir une agence 360.pdf",
    number: "02",
    icon: Target,
  },
  {
    id: "marketing-resultats",
    title: "Pourquoi votre marketing ne produit pas les résultats attendus",
    category: "Performance marketing",
    description:
      "Un document pour réfléchir aux facteurs qui peuvent limiter les performances marketing et aux résultats attendus.",
    objective: "Performance & optimisation",
    file: "/assets/docs/Pourquoi_votre_marketing_ne_produit_pas_les_r%C3%A9sultats_attendus.pdf",
    downloadName:
      "Pourquoi_votre_marketing_ne_produit_pas_les_résultats_attendus.pdf",
    number: "03",
    icon: BarChart3,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Diagnostic",
    description:
      "Comprendre votre entreprise, votre marché, votre audience et vos enjeux.",
    icon: Search,
  },
  {
    number: "02",
    title: "Stratégie",
    description:
      "Définir une direction adaptée à vos objectifs et à vos ambitions.",
    icon: Target,
  },
  {
    number: "03",
    title: "Création",
    description:
      "Donner vie à votre marque à travers des contenus et des expériences.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Diffusion",
    description:
      "Faire parvenir le bon message aux bonnes audiences, au bon moment.",
    icon: Megaphone,
  },
  {
    number: "05",
    title: "Analyse",
    description:
      "Mesurer les performances et optimiser les actions engagées.",
    icon: BarChart3,
  },
  {
    number: "06",
    title: "Résultat",
    description:
      "Contribuer à votre visibilité, à la confiance et à la croissance.",
    icon: TrendingUp,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="overflow-hidden bg-white px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        {/* INTRODUCTION */}
        <div
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
            Explorez nos ressources professionnelles, découvrez notre méthode
            d’accompagnement et approfondissez les sujets qui contribuent au
            développement de votre marque.
          </p>
        </div>

        {/* CHIFFRE CLÉ */}
        <div
          className="relative mb-14 overflow-hidden rounded-3xl bg-[#1178B7] p-6 text-white shadow-lg sm:p-8 md:p-10"
          data-aos="fade-up"
        >
          <div
            className="absolute right-0 top-0 h-2 w-24 bg-[#F59C27] sm:w-40"
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#F59C27] sm:flex">
                <Monitor size={30} />
              </div>

              <div>
                <div className="flex items-baseline gap-1 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
                  <AnimatedCounter end={50} />
                  <span>+</span>
                </div>

                <p className="mt-1 max-w-sm text-sm font-semibold text-white/90 sm:text-base">
                  Projets menés avec engagement et créativité.
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

        {/* MÉTHODE SUNULINK */}
        <div className="mb-16" data-aos="fade-up">
          <div className="mb-8 max-w-3xl">
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#F59C27] sm:text-sm">
              Notre méthode d’accompagnement
            </p>

            <h3 className="text-2xl font-black leading-tight text-[#1178B7] sm:text-3xl md:text-4xl">
              De la compréhension du besoin à la mesure des résultats.
            </h3>

            <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
              Notre démarche articule six étapes complémentaires pour donner
              une direction claire à chaque projet.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group rounded-2xl border border-slate-200 border-t-4 border-t-[#1178B7] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-t-[#F59C27] hover:shadow-[0_12px_30px_rgba(17,120,183,0.12)] motion-reduce:transform-none sm:p-6"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-black tracking-widest text-[#F59C27]">
                      {step.number}
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1178B7]/10 text-[#1178B7] transition-colors duration-300 group-hover:bg-[#F59C27] group-hover:text-white">
                      <Icon size={22} />
                    </span>
                  </div>

                  <h4 className="mb-2 text-xl font-extrabold text-[#1178B7] transition-colors duration-300 group-hover:text-[#F59C27]">
                    {step.title}
                  </h4>

                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* BIBLIOTHÈQUE DE DOCUMENTS PDF */}
        <div id="ressources-pdf" className="scroll-mt-24">
          <div
            className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
            data-aos="fade-up"
          >
            <div className="max-w-3xl">
              <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#F59C27] sm:text-sm">
                À consulter & à télécharger
              </p>

              <h3 className="text-2xl font-black leading-tight text-[#1178B7] sm:text-3xl md:text-4xl">
                Nos ressources pour aller plus loin.
              </h3>

              <p className="mt-3 leading-relaxed text-slate-600">
                Retrouvez nos documents PDF et consultez-les en ligne ou
                conservez-les pour une lecture ultérieure.
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
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#F59C27] hover:shadow-[0_18px_40px_rgba(17,120,183,0.14)] motion-reduce:transform-none"
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  {/* Couverture graphique, réalisée en CSS */}
                  <div className="relative min-h-[200px] overflow-hidden bg-[#1178B7] p-6 text-white sm:min-h-[220px]">
                    <div
                      className="absolute -right-10 -top-12 h-36 w-36 rounded-full border-[18px] border-white/10 transition-transform duration-500 group-hover:scale-110 motion-reduce:transform-none sm:h-44 sm:w-44"
                      aria-hidden="true"
                    />

                    <div
                      className="absolute bottom-0 left-0 h-1.5 w-24 bg-[#F59C27] transition-all duration-300 group-hover:w-36"
                      aria-hidden="true"
                    />

                    <div className="relative z-10 flex h-full min-h-[152px] flex-col justify-between">
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold text-white backdrop-blur-sm">
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

                      <div className="mt-6">
                        <span className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#F59C27] text-white shadow-md transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105 motion-reduce:transform-none">
                          <Icon size={25} />
                        </span>

                        <h4 className="max-w-md text-xl font-black leading-snug text-white sm:text-2xl">
                          {resource.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Descriptif de la ressource */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <span className="mb-4 inline-flex w-fit rounded-full bg-[#F59C27]/10 px-3 py-1.5 text-xs font-extrabold leading-relaxed text-[#1178B7]">
                      {resource.category}
                    </span>

                    <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {resource.description}
                    </p>

                    <div className="mb-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-sm font-bold text-[#1178B7]">
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-[#F59C27]"
                      />
                      {resource.objective}
                    </div>

                    {/* Boutons PDF */}
                    <div className="mt-auto flex flex-col gap-3">
                      <a
                        href={resource.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Lire le document PDF : ${resource.title}`}
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
        </div>

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
