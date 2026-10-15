import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Check,
  Sparkles,
  Star,
  Crown,
  ArrowLeft,
  ArrowRight,
  Target,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useParams, Navigate } from "react-router-dom";

const packsIA = [
  {
    slug: "link-ia-start",
    name: "LINK IA START",
    duration: "Engagement : 3 mois recommandé",
    price: "500 000 FCFA",
    period: "/ mois",
    tagline: "Structurer son entreprise et automatiser l’essentiel.",
    description:
      "Solution pour PME et startups souhaitant intégrer progressivement l’intelligence artificielle.",
    icon: Sparkles,
    recommended: false,
    features: [
      "Audit IA",
      "CRM simple",
      "Automatisation tasks",
      "Assistant IA",
      "Formation équipe",
    ],
    detailedFeatures: [
      "Audit IA",
      "Analyse processus",
      "CRM simple",
      "Automatisation emails",
      "Assistant IA",
      "Gestion documentaire",
      "Chatbot basique",
      "Formation équipe",
    ],
    benefits: [
      "Gain de temps",
      "Organisation améliorée",
      "Productivité accrue",
    ],
  },
  {
    slug: "link-ia-growth",
    name: "LINK IA GROWTH",
    duration: "Engagement : 6 mois recommandé",
    price: "900 000 FCFA",
    period: "/ mois",
    tagline: "Automatiser ses processus pour accélérer.",
    description:
      "Solution destinée aux entreprises en croissance souhaitant automatiser plusieurs fonctions clés.",
    icon: Star,
    recommended: true,
    features: [
      "CRM avancé",
      "Marketing automation",
      "Chatbot intelligent",
      "Analyse données",
      "Process automatisés",
    ],
    detailedFeatures: [
      "CRM avancé",
      "Scoring prospects",
      "Automatisation commerciale",
      "Email marketing automatisé",
      "Chatbot IA avancé",
      "Reporting KPI",
      "Analyse performance",
      "Formation équipes",
    ],
    benefits: [
      "Performance commerciale",
      "Meilleure organisation",
      "Décisions basées sur les données",
    ],
  },
  {
    slug: "link-ia-transformation",
    name: "LINK IA TRANSFORMATION",
    duration: "Grandes entreprises",
    price: "Sur devis",
    period: "",
    tagline: "Transformer votre entreprise grâce à l’IA.",
    description:
      "Solution stratégique destinée aux entreprises et institutions souhaitant intégrer l’intelligence artificielle dans leur fonctionnement global.",
    icon: Crown,
    recommended: false,
    features: [
      "Audit IA 360°",
      "Stratégie IA",
      "Transformation processus",
      "Data & KPI",
      "Accompagnement direction",
    ],
    detailedFeatures: [
      "Audit IA complet",
      "Feuille de route IA",
      "Automatisation avancée",
      "Optimisation processus",
      "Analyse données",
      "Formation équipes",
      "Accompagnement direction",
    ],
    benefits: [
      "Transformation digitale",
      "Réduction inefficacités",
      "Avantage concurrentiel",
    ],
  },
];

const PackpubIADetail = () => {
  const { packSlugia } = useParams<{ packSlugia: string }>();
  const pack = packsIA.find((item) => item.slug === packSlugia);

  // Un slug inconnu renvoie vers la page qui présente les offres Link IA.
  if (!pack) {
    return <Navigate to="/ialinkbusiness#packs" replace />;
  }

  const PackIcon = pack.icon;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pb-16 pt-0 sm:pb-20">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0C4E78] via-[#1178B7] to-[#0B5E91] text-white">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-28 h-80 w-80 rounded-full border-[36px] border-white/5"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#F59C27]/15 blur-3xl"
          />
          <div className="container relative z-10 mx-auto max-w-7xl px-4 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
            <Link
              to="/ialinkbusiness#packs"
              className="group mb-8 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-bold text-white/95 backdrop-blur-sm transition-all duration-300 hover:-translate-x-0.5 hover:border-[#F59C27] hover:bg-white/15 focus:outline-none focus:ring-4 focus:ring-white/20 sm:text-base"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Retour aux packs Link IA
            </Link>

            <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-10">
              <div
                className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-sm sm:h-32 sm:w-32 lg:mx-0"
                data-aos="zoom-in"
              >
                <PackIcon className="h-12 w-12 text-[#F59C27] sm:h-16 sm:w-16" />
              </div>

              <div className="text-center lg:text-left" data-aos="fade-up">
                {pack.recommended && (
                  <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F59C27]/60 bg-[#F59C27]/15 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white sm:text-sm">
                    <Star className="h-4 w-4 fill-[#F59C27] text-[#F59C27]" />
                    Pack recommandé
                  </span>
                )}

                {!pack.recommended && pack.slug === "link-ia-transformation" && (
                  <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white sm:text-sm">
                    <ShieldCheck className="h-4 w-4 text-[#F59C27]" />
                    Grandes entreprises
                  </span>
                )}

                <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#FFC36E] sm:text-sm">
                  Offre Link IA Business
                </p>
                <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  {pack.name}
                </h1>
                <p className="mb-3 max-w-3xl text-xl font-bold leading-snug text-white sm:text-2xl md:text-3xl">
                  {pack.tagline}
                </p>
                <p className="text-sm font-medium text-white/80 sm:text-base">
                  {pack.duration}
                </p>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#1178B7] via-[#009CDE] to-[#F59C27]"
          />
        </section>

        {/* TARIF ET ACTION PRINCIPALE */}
        <section className="border-b border-slate-100 bg-slate-50 px-4 py-8 sm:px-6 md:py-10 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 md:flex-row md:rounded-3xl">
              <div className="text-center md:text-left">
                <p className="mb-2 text-sm font-bold text-slate-500">
                  {pack.price === "Sur devis" ? "Tarification" : "Investissement mensuel"}
                </p>
                <p className="text-3xl font-black tracking-tight text-[#1178B7] sm:text-4xl md:text-5xl">
                  {pack.price}
                  {pack.period && (
                    <span className="mt-1 block text-base font-semibold text-slate-500 sm:inline sm:pl-2 sm:text-xl">
                      {pack.period}
                    </span>
                  )}
                </p>
              </div>

              <Button
                asChild
                className="group h-auto min-h-12 w-full rounded-full border-2 border-[#F59C27] bg-[#F59C27] px-7 py-3.5 text-base font-extrabold text-white shadow-md shadow-[#F59C27]/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1178B7] hover:bg-[#1178B7] hover:shadow-lg focus-visible:ring-4 focus-visible:ring-[#F59C27]/30 sm:w-auto sm:px-9 sm:text-lg"
              >
                <Link to="/contact" className="inline-flex items-center justify-center gap-2">
                  Je valide ce pack
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(260px,0.6fr)] lg:items-center">
              <div data-aos="fade-up">
                <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-[#F59C27]">
                  À propos de cette formule
                </p>
                <h2 className="mb-5 text-2xl font-black leading-tight text-[#1178B7] sm:text-3xl md:text-4xl">
                  Une solution pensée pour vos objectifs
                </h2>
                <p className="max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl">
                  {pack.description}
                </p>
              </div>

              <div className="rounded-2xl border border-[#1178B7]/10 bg-gradient-to-br from-[#1178B7]/5 to-[#F59C27]/10 p-6 sm:rounded-3xl sm:p-8" data-aos="fade-up" data-aos-delay="100">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1178B7] text-white shadow-sm">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-extrabold text-[#1178B7] sm:text-xl">
                  Un accompagnement structuré
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  Une formule conçue pour accompagner votre organisation dans l’adoption progressive ou stratégique de l’intelligence artificielle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRESTATIONS INCLUSES */}
        <section className="bg-slate-50 px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-8 flex items-center gap-4 sm:mb-10" data-aos="fade-up">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1178B7] text-white shadow-sm sm:h-14 sm:w-14">
                <Zap className="h-6 w-6 text-[#F59C27] sm:h-7 sm:w-7" />
              </div>
              <div>
                <p className="mb-1 text-xs font-extrabold uppercase tracking-[0.18em] text-[#F59C27] sm:text-sm">
                  Votre formule
                </p>
                <h2 className="text-2xl font-black text-[#1178B7] sm:text-3xl md:text-4xl">
                  Ce qui est inclus
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
              {pack.detailedFeatures.map((feature, index) => (
                <article
                  key={feature}
                  className="group flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1178B7]/30 hover:shadow-md sm:p-6"
                  data-aos="fade-up"
                  data-aos-delay={(index % 4) * 60}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#1178B7]/10 transition-colors duration-300 group-hover:bg-[#F59C27]/15">
                    <Check className="h-5 w-5 text-[#1178B7] transition-colors duration-300 group-hover:text-[#F59C27]" />
                  </span>
                  <span className="text-sm font-semibold leading-relaxed text-slate-700 sm:text-base">
                    {feature}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RÉSULTATS ATTENDUS */}
        <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-8 flex items-center gap-4 sm:mb-10" data-aos="fade-up">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F59C27] text-white shadow-sm sm:h-14 sm:w-14">
                <Target className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <div>
                <p className="mb-1 text-xs font-extrabold uppercase tracking-[0.18em] text-[#F59C27] sm:text-sm">
                  Valeur ajoutée
                </p>
                <h2 className="text-2xl font-black text-[#1178B7] sm:text-3xl md:text-4xl">
                  Résultats attendus
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
              {pack.benefits.map((benefit, index) => (
                <article
                  key={benefit}
                  className="group flex min-h-36 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F59C27]/60 hover:shadow-lg sm:min-h-40 sm:p-7"
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1178B7] text-white transition-colors duration-300 group-hover:bg-[#F59C27]">
                    <Check className="h-5 w-5" />
                  </span>
                  <p className="text-base font-extrabold leading-snug text-[#1178B7] sm:text-lg">
                    {benefit}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* APPEL À L'ACTION */}
        <section className="px-4 pb-8 sm:px-6 md:pb-12 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-[#0C4E78] via-[#1178B7] to-[#0B5E91] px-6 py-10 text-center text-white shadow-xl sm:px-10 sm:py-14 md:px-14 md:py-16" data-aos="fade-up">
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-16 -z-10 h-56 w-56 rounded-full border-[24px] border-white/10"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-24 -left-10 -z-10 h-56 w-56 rounded-full bg-[#F59C27]/20 blur-3xl"
              />

              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#FFC36E] sm:text-sm">
                Passons à l’action
              </p>
              <h2 className="mx-auto mb-5 max-w-3xl text-2xl font-black leading-tight sm:text-3xl md:text-4xl">
                Prêt à démarrer avec le {pack.name} ?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                Contactez-nous pour discuter de vos objectifs et préparer votre projet d’intelligence artificielle.
              </p>

              <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Button
                  asChild
                  className="group h-auto min-h-12 rounded-full border-2 border-[#F59C27] bg-[#F59C27] px-7 py-3 text-base font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#1178B7] focus-visible:ring-4 focus-visible:ring-white/30 sm:px-9 sm:text-lg"
                >
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2">
                    Je valide ce pack
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Link
                  to="/ialinkbusiness#packs"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-white/70 bg-white/5 px-7 py-3 text-base font-extrabold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#1178B7] focus:outline-none focus:ring-4 focus:ring-white/25 sm:px-9 sm:text-lg"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Voir les autres packs
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

export default PackpubIADetail;
