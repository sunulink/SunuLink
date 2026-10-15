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
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useParams, Navigate } from "react-router-dom";

const packsData = [
  {
    slug: "teranga",
    name: "PACK TERANGA",
    duration: "Engagement : 3 mois recommandé",
    price: "450 000 FCFA / mois",
    tagline: "Lancer sa communication proprement et efficacement.",
    description:
      "Le Pack Teranga accompagne les entreprises souhaitant construire une présence digitale professionnelle avec une communication claire, régulière et cohérente.",
    icon: Sparkles,
    recommended: false,
    detailedFeatures: [
      "Stratégie : Audit communication initial",
      "Stratégie : Analyse audience",
      "Stratégie : Positionnement & Messages clés",
      "Création contenu : 8 visuels premium chaque mois",
      "Création contenu : 4 vidéos courtes chaque mois",
      "Création contenu : Textes optimisés",
      "Réseaux sociaux : Gestion Facebook & Instagram",
      "Réseaux sociaux : Programmation & Publication",
      "Réseaux sociaux : Modération & Organisation calendrier",
    ],
    benefits: [
      "Image professionnelle",
      "Communication structurée",
      "Présence régulière",
      "Meilleure visibilité",
    ],
  },
  {
    slug: "xeewal",
    name: "PACK XEEWAL",
    duration: "Engagement : 6 mois recommandé",
    price: "750 000 FCFA / mois",
    tagline: "Accélérer sa croissance et renforcer son image.",
    description:
      "Une solution destinée aux entreprises souhaitant développer leur visibilité, renforcer leur image et construire une audience engagée.",
    icon: Star,
    recommended: true,
    detailedFeatures: [
      "Stratégie marketing : Plan éditorial avancé",
      "Stratégie marketing : Analyse marché & Recommandations",
      "Production contenu : 15 visuels premium chaque mois",
      "Production contenu : 8 vidéos courtes chaque mois",
      "Production contenu : 2 contenus premium chaque mois",
      "Réseaux sociaux : Gestion Facebook, Instagram, LinkedIn & TikTok",
      "Production : Shooting photo/vidéo tous les 2 mois",
      "Publicité : Configuration campagnes & Optimisation audiences",
    ],
    benefits: [
      "Croissance visibilité",
      "Audience engagée",
      "Image renforcée",
    ],
  },
  {
    slug: "buur",
    name: "PACK BUUR",
    duration: "Engagement : 12 mois recommandé",
    price: "1 750 000 FCFA / mois",
    tagline: "Dominer son marché et devenir une référence.",
    description:
      "L’accompagnement ultime pour les entreprises souhaitant externaliser leur direction marketing et construire une marque forte.",
    icon: Crown,
    recommended: false,
    detailedFeatures: [
      "Direction marketing : Stratégie annuelle & Plan marketing",
      "Direction marketing : Conseil direction",
      "Production contenu : 25 visuels premium chaque mois",
      "Production contenu : 15 vidéos courtes chaque mois",
      "Production contenu : 5 contenus premium chaque mois",
      "Gestion digitale : Facebook, Instagram, TikTok, LinkedIn & YouTube",
      "Production : Shooting trimestriel & Direction artistique",
      "Performance : Automatisation marketing & Optimisation continue",
      "Performance : Dashboard KPI",
    ],
    benefits: [
      "Leadership digital",
      "Positionnement premium",
      "Croissance durable",
    ],
  },
];

const BoostMyPubDetailPage = () => {
  const { packSlug } = useParams<{ packSlug: string }>();

  const pack = packsData.find((item) => item.slug === packSlug);

  // Si le pack n'existe pas, revenir à la page présentant les trois offres.
  if (!pack) {
    return <Navigate to="/boost-my-pub" replace />;
  }

  const PackIcon = pack.icon;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pb-0">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0C4E78] via-[#1178B7] to-[#0B5E91] text-white">
          {/* Éléments décoratifs discrets */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-[30px] border-white/5"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#F59C27]/15 blur-3xl"
          />

          <div className="container relative z-10 mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8">
            {/* Retour à la liste des packs */}
            <Link
              to="/boost-my-pub#packs"
              className="group mb-8 inline-flex min-h-10 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white/95 backdrop-blur-sm transition-all duration-300 hover:-translate-x-0.5 hover:border-[#F59C27] hover:bg-white/15 focus:outline-none focus:ring-4 focus:ring-white/20"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Retour aux packs
            </Link>

            <div className="grid items-center gap-6 md:grid-cols-[auto_1fr] md:gap-8">
              {/* Icône du pack */}
              <div
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-sm sm:h-24 sm:w-24 md:mx-0"
                data-aos="zoom-in"
              >
                <PackIcon className="h-10 w-10 text-[#FFC36E] sm:h-12 sm:w-12" />
              </div>

              {/* Titre et présentation */}
              <div className="text-center md:text-left" data-aos="fade-up">
                {pack.recommended && (
                  <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#F59C27]/50 bg-[#F59C27]/15 px-3 py-1.5 text-xs font-bold text-white sm:text-sm">
                    <Star className="h-3.5 w-3.5 fill-[#FFC36E] text-[#FFC36E]" />
                    Le plus choisi
                  </span>
                )}

                <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FFC36E] sm:text-sm">
                  Boost My Pub · Nos offres
                </p>

                <h1 className="mb-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  {pack.name}
                </h1>

                <p className="mb-3 max-w-3xl text-lg font-bold leading-snug text-white sm:text-xl">
                  {pack.tagline}
                </p>

                <p className="text-sm font-medium text-white/80 sm:text-base">
                  {pack.duration}
                </p>
              </div>
            </div>
          </div>

          {/* Ligne décorative aux couleurs SunuLink */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#1178B7] via-[#009CDE] to-[#F59C27]"
          />
        </section>

        {/* TARIF ET ACTION PRINCIPALE */}
        <section className="border-b border-slate-100 bg-slate-50 px-4 py-7 sm:px-6 sm:py-9">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 md:flex-row md:rounded-3xl">
              <div className="text-center md:text-left">
                <p className="mb-1 text-sm font-semibold text-slate-500">
                  Investissement mensuel
                </p>

                <p className="text-2xl font-black tracking-tight text-[#1178B7] sm:text-3xl">
                  {pack.price}
                </p>
              </div>

              <Button
                asChild
                className="group h-auto min-h-12 w-full rounded-full border-2 border-[#F59C27] bg-[#F59C27] px-6 py-3 text-sm font-extrabold text-white shadow-md shadow-[#F59C27]/15 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1178B7] hover:bg-[#1178B7] hover:shadow-lg focus-visible:ring-4 focus-visible:ring-[#F59C27]/30 sm:w-auto sm:px-8 sm:text-base"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2"
                >
                  Je valide ce pack
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* DESCRIPTION ET NOTE IMPORTANTE */}
        <section className="px-4 py-10 sm:px-6 sm:py-14">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-7 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)] lg:items-start">
              <div data-aos="fade-up">
                <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#F59C27] sm:text-sm">
                  Présentation de l'offre
                </p>

                <h2 className="mb-4 text-2xl font-black leading-tight text-[#1178B7] sm:text-3xl">
                  À propos du {pack.name}
                </h2>

                <p className="mb-4 text-base leading-relaxed text-slate-700">
                  {pack.description}
                </p>

                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  Boost My Pub accompagne les entreprises souhaitant développer
                  leur visibilité, attirer plus de prospects et améliorer leurs
                  performances publicitaires.
                </p>
              </div>

              {/* Avertissement : budget média */}
              <div
                className="rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm sm:p-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100">
                    <AlertTriangle className="h-5 w-5 text-amber-700" />
                  </span>

                  <h3 className="text-base font-extrabold text-amber-950">
                    À noter
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-amber-900 sm:text-base">
                  Le budget publicitaire média n’est pas inclus dans la
                  prestation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRESTATIONS INCLUSES */}
        <section className="bg-slate-50 px-4 py-10 sm:px-6 sm:py-14">
          <div className="container mx-auto max-w-7xl">
            <div
              className="mb-7 flex items-center gap-3 sm:mb-9"
              data-aos="fade-up"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1178B7] text-white sm:h-12 sm:w-12">
                <Zap className="h-5 w-5 text-[#FFC36E] sm:h-6 sm:w-6" />
              </span>

              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-[#F59C27]">
                  Le détail de l'offre
                </p>

                <h2 className="text-2xl font-black text-[#1178B7] sm:text-3xl">
                  Ce qui est inclus
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
              {pack.detailedFeatures.map((feature, index) => (
                <article
                  key={feature}
                  className="group flex h-full items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1178B7]/30 hover:shadow-md sm:rounded-2xl sm:p-5"
                  data-aos="fade-up"
                  data-aos-delay={(index % 4) * 50}
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1178B7]/10 transition-colors duration-300 group-hover:bg-[#F59C27]/15">
                    <Check className="h-4 w-4 text-[#1178B7] transition-colors duration-300 group-hover:text-[#F59C27]" />
                  </span>

                  <span className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base">
                    {feature}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RÉSULTATS ATTENDUS */}
        <section className="px-4 py-10 sm:px-6 sm:py-14">
          <div className="container mx-auto max-w-7xl">
            <div
              className="mb-7 flex items-center gap-3 sm:mb-9"
              data-aos="fade-up"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F59C27] text-white sm:h-12 sm:w-12">
                <Target className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>

              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-[#F59C27]">
                  Valeur ajoutée
                </p>

                <h2 className="text-2xl font-black text-[#1178B7] sm:text-3xl">
                  Résultats attendus
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {pack.benefits.map((benefit, index) => (
                <article
                  key={benefit}
                  className="group flex min-h-24 items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F59C27]/60 hover:shadow-md sm:rounded-2xl sm:p-5"
                  data-aos="fade-up"
                  data-aos-delay={index * 60}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#1178B7]/10 transition-colors duration-300 group-hover:bg-[#F59C27]/15">
                    <CheckCircle className="h-5 w-5 text-[#1178B7] transition-colors duration-300 group-hover:text-[#F59C27]" />
                  </span>

                  <p className="text-sm font-bold leading-snug text-slate-700 sm:text-base">
                    {benefit}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* APPEL À L'ACTION FINAL */}
        <section className="px-4 pb-12 pt-4 sm:px-6 sm:pb-16">
          <div className="container mx-auto max-w-7xl">
            <div
              className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-[#0C4E78] via-[#1178B7] to-[#0B5E91] px-5 py-9 text-center text-white shadow-xl sm:rounded-3xl sm:px-8 sm:py-11 md:px-12"
              data-aos="fade-up"
            >
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-16 -z-10 h-48 w-48 rounded-full border-[22px] border-white/10"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-8 -z-10 h-48 w-48 rounded-full bg-[#F59C27]/20 blur-3xl"
              />

              <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FFC36E] sm:text-sm">
                Parlons de votre projet
              </p>

              <h2 className="mx-auto mb-4 max-w-3xl text-2xl font-black leading-tight sm:text-3xl">
                Prêt à passer à l’action ?
              </h2>

              <p className="mx-auto mb-7 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg">
                Contactez-nous pour démarrer avec le {pack.name} et
                transformer votre communication.
              </p>

              <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Button
                  asChild
                  className="group h-auto min-h-12 rounded-full border-2 border-[#F59C27] bg-[#F59C27] px-6 py-3 text-sm font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#1178B7] focus-visible:ring-4 focus-visible:ring-white/30 sm:px-8 sm:text-base"
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    Je valide ce pack
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Link
                  to="/boost-my-pub#packs"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-white/70 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#1178B7] focus:outline-none focus:ring-4 focus:ring-white/25 sm:px-8 sm:text-base"
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

export default BoostMyPubDetailPage;
