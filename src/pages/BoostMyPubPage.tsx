
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Check,
  Sparkles,
  Star,
  Crown,
  ArrowRight,
  CheckCircle,
  Megaphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BoostMyPubPage = () => {
  const packs = [
    {
      slug: "teranga",
      name: "PACK TERANGA",
      duration: "Engagement : 3 mois recommandé",
      price: "450 000 FCFA",
      period: "/ mois",
      tagline: "Lancer sa communication proprement et efficacement.",
      description:
        "Le Pack Teranga accompagne les entreprises souhaitant construire une présence digitale professionnelle avec une communication claire, régulière et cohérente.",
      icon: Sparkles,
      badge: "Débuter",
      recommended: false,
      features: [
        "Mini stratégie digitale",
        "Création contenus premium",
        "Gestion Facebook & Instagram",
        "Calendrier éditorial",
        "Reporting mensuel",
      ],
    },
    {
      slug: "xeewal",
      name: "PACK XEEWAL",
      duration: "Engagement : 6 mois recommandé",
      price: "750 000 FCFA",
      period: "/ mois",
      tagline: "Accélérer sa croissance et renforcer son image.",
      description:
        "Une solution destinée aux entreprises souhaitant développer leur visibilité, renforcer leur image et construire une audience engagée.",
      icon: Star,
      recommended: true,
      badge: "Le plus choisi",
      features: [
        "Stratégie marketing avancée",
        "Création contenus premium",
        "Gestion multi-réseaux",
        "Shooting contenu",
        "Publicité digitale",
      ],
    },
    {
      slug: "buur",
      name: "PACK BUUR",
      duration: "Engagement : 12 mois recommandé",
      price: "1 750 000 FCFA",
      period: "/ mois",
      tagline: "Dominer son marché et devenir une référence.",
      description:
        "L’accompagnement ultime pour les entreprises souhaitant externaliser leur direction marketing et construire une marque forte.",
      icon: Crown,
      badge: "Premium",
      recommended: false,
      features: [
        "Direction marketing",
        "Production intensive",
        "Gestion complète réseaux sociaux",
        "Automatisation",
        "KPI avancés",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-0 pb-0">
        {/* HERO : IMAGE EN ARRIÈRE-PLAN SUR TOUTE LA LARGEUR */}
        <section className="relative isolate min-h-[620px] overflow-hidden bg-slate-100 sm:min-h-[660px] lg:min-h-[720px]">
          {/* Image décalée vers la droite */}
          <img
            src="/img/hero-boost-my-pub.png"
            alt=""
            aria-hidden="true"
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 z-0 h-full w-full object-cover object-[66%_center] sm:object-[70%_center]"
            onError={() => {
              console.error(
                "Impossible de charger /img/hero-boost-my-pub.png"
              );
            }}
          />

          {/* Voile général réduit pour mieux voir la photo */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[1] bg-white/10"
          />

          {/* Dégradé de lecture : opaque à gauche et progressivement transparent */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[2]"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.88) 25%, rgba(255,255,255,0.72) 42%, rgba(255,255,255,0.42) 58%, rgba(255,255,255,0.12) 78%, rgba(255,255,255,0) 100%)",
            }}
          />

          {/* Légère protection supplémentaire pour le texte sur mobile */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[3] bg-gradient-to-t from-white/15 via-transparent to-white/5 md:hidden"
          />

          <div className="container relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-4 py-16 sm:min-h-[660px] sm:px-6 sm:py-20 lg:min-h-[720px] lg:py-24">
            <div className="w-full max-w-2xl" data-aos="fade-up">
              {/* Badge */}
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1178B7]/20 bg-white/85 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#1178B7] shadow-sm backdrop-blur-sm sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-[#F59C27]" />
                Publicité digitale & acquisition
              </span>

              {/* Titre */}
              <h1 className="mb-5 text-4xl font-black leading-[1.03] tracking-tight sm:text-5xl lg:text-7xl">
                <span className="block text-[#1178B7]">BOOST MY</span>
                <span className="block text-[#F59C27]">PUB</span>
              </h1>

              <p className="mb-7 max-w-xl text-lg font-bold leading-relaxed text-slate-800 sm:text-xl md:text-2xl">
                Accélérez votre acquisition grâce à la publicité digitale.
              </p>

              <p className="mb-8 max-w-xl text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
                Développez votre visibilité, atteignez la bonne audience et
                transformez vos campagnes publicitaires en opportunités
                concrètes pour votre entreprise.
              </p>

              {/* Prix de départ */}
              <div className="mb-7 inline-flex max-w-full flex-col rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-lg backdrop-blur-sm sm:px-7">
                <p className="text-sm font-bold text-slate-600 sm:text-base">
                  À partir de
                </p>
                <p className="text-xl font-black leading-tight text-[#1178B7] sm:text-2xl md:text-3xl">
                  <span className="text-[#F59C27]">300 000 FCFA</span>
                  <span className="text-base font-semibold text-slate-600 sm:text-lg">
                    {" "}/ mois
                  </span>
                </p>
              </div>

              {/* Boutons */}
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  to="#packs"
                  className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border-2 border-[#F59C27] bg-[#F59C27] px-6 py-3 text-center text-base font-extrabold text-white shadow-lg shadow-[#F59C27]/20 transition-all duration-300 hover:-translate-y-1 hover:border-[#1178B7] hover:bg-[#1178B7] hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F59C27]/35 sm:w-auto sm:px-7 sm:text-lg motion-reduce:transform-none"
                >
                  Découvrir nos packs
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/contact"
                  className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border-2 border-[#1178B7] bg-white/90 px-6 py-3 text-center text-base font-extrabold text-[#1178B7] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F59C27] hover:bg-[#F59C27] hover:text-white hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1178B7]/25 sm:w-auto sm:px-7 sm:text-lg motion-reduce:transform-none"
                >
                  Parler à un expert
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Points forts */}
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-700 sm:text-base">
                {[
                  "Stratégie publicitaire",
                  "Ciblage audience",
                  "Optimisation campagnes",
                ].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 shrink-0 text-[#F59C27]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Ligne décorative SunuLink */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 z-10 h-1.5 bg-gradient-to-r from-[#1178B7] via-[#009CDE] to-[#F59C27]"
          />
        </section>

        {/* SECTION DES TROIS PACKS */}
        <section
          id="packs"
          className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-white to-slate-50 px-4 py-12 sm:px-6 md:py-20"
        >
          {/* Décorations de fond */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-32 h-64 w-64 rounded-full bg-[#1178B7]/5 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#F59C27]/10 blur-3xl"
          />

          <div className="container relative z-10 mx-auto max-w-7xl">
            {/* Titre de section */}
            <div
              className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
              data-aos="fade-up"
            >
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1178B7]/15 bg-[#1178B7]/5 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#1178B7] sm:text-sm">
                <Megaphone className="h-4 w-4 text-[#F59C27]" />
                Nos solutions publicitaires
              </p>

              <h2 className="text-3xl font-black leading-tight tracking-tight text-[#1178B7] sm:text-4xl md:text-5xl">
                Nos Packs{" "}
                <span className="text-[#F59C27]">Boost My Pub</span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Trois niveaux d’accompagnement pour développer votre visibilité,
                renforcer votre image et accélérer votre croissance.
              </p>
            </div>

            {/* Grille responsive : 1 mobile, 2 tablette, 3 desktop */}
            <div className="grid w-full grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
              {packs.map((pack, index) => {
                const IconComponent = pack.icon;

                return (
                  <article
                    key={pack.slug}
                    className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(17,120,183,0.14)] md:rounded-3xl motion-reduce:transform-none ${
                      pack.recommended
                        ? "border-t-4 border-t-[#F59C27] ring-1 ring-[#F59C27]/15"
                        : "border-t-4 border-t-[#1178B7]"
                    }`}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {/* Badge cohérent sur les trois cartes */}
                    <div className="absolute right-0 top-0 z-20 rounded-bl-2xl bg-[#F59C27] px-4 py-2 text-xs font-extrabold text-white shadow-sm sm:text-sm">
                      {pack.recommended && (
                        <Star className="mr-1 inline h-3.5 w-3.5 fill-current" />
                      )}
                      {pack.badge}
                    </div>

                    {/* En-tête uniforme */}
                    <div className="relative flex flex-col overflow-hidden bg-[#1178B7] p-5 text-white sm:p-7">
                      <div
                        aria-hidden="true"
                        className="absolute -right-10 -top-12 h-36 w-36 rounded-full border-[18px] border-white/10 transition-transform duration-500 group-hover:scale-110"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-[#F59C27]/10 blur-2xl"
                      />

                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/15 shadow-sm backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16">
                          <IconComponent className="h-7 w-7 text-[#FFC36E] sm:h-8 sm:w-8" />
                        </div>

                        <h3 className="mb-2 text-xl font-black leading-tight tracking-tight text-white sm:text-2xl">
                          {pack.name}
                        </h3>

                        <p className="mb-4 flex min-h-10 items-center justify-center text-xs font-semibold text-white/85 sm:text-sm">
                          {pack.duration}
                        </p>

                        <div className="mb-4 flex min-h-[76px] flex-col items-center justify-center">
                          <p className="text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl">
                            {pack.price}
                          </p>
                          {pack.period && (
                            <span className="mt-1 text-sm font-semibold text-white/80 sm:text-base">
                              {pack.period}
                            </span>
                          )}
                        </div>

                        <p className="flex min-h-[52px] items-center justify-center text-sm font-bold leading-relaxed text-white sm:text-base">
                          “{pack.tagline}”
                        </p>
                      </div>
                    </div>

                    {/* Contenu uniforme */}
                    <div className="flex flex-1 flex-col p-5 sm:p-7">
                      <p className="mb-6 min-h-[105px] text-sm leading-relaxed text-slate-600 sm:text-base">
                        {pack.description}
                      </p>

                      <div className="mb-7 border-t border-slate-100 pt-6">
                        <h4 className="mb-4 text-sm font-extrabold uppercase tracking-wider text-[#1178B7]">
                          Ce qui est inclus
                        </h4>

                        <ul className="space-y-3.5">
                          {pack.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-3"
                            >
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F59C27]/10">
                                <Check className="h-3.5 w-3.5 text-[#F59C27]" />
                              </span>
                              <span className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Boutons harmonisés */}
                      <div className="mt-auto space-y-3">
                        <Button
                          asChild
                          className="group/button h-auto min-h-12 w-full rounded-xl border-2 border-[#F59C27] bg-[#F59C27] px-5 py-3 text-sm font-extrabold text-white shadow-md shadow-[#F59C27]/15 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1178B7] hover:bg-[#1178B7] hover:shadow-lg focus-visible:ring-4 focus-visible:ring-[#F59C27]/30 sm:text-base motion-reduce:transform-none"
                        >
                          <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 whitespace-normal text-center"
                          >
                            Je valide
                            <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/button:translate-x-1" />
                          </Link>
                        </Button>

                        <Link
                          to={`/boost-my-pub/${pack.slug}`}
                          className="group/more inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-[#1178B7]/20 bg-[#1178B7]/5 px-4 py-2.5 text-center text-sm font-bold text-[#1178B7] transition-all duration-300 hover:border-[#F59C27]/40 hover:bg-[#F59C27]/10 focus:outline-none focus:ring-4 focus:ring-[#1178B7]/15 sm:text-base"
                        >
                          En savoir plus
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/more:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* APPEL À L'ACTION */}
        <section className="bg-gradient-to-b from-slate-50 to-white px-4 py-12 sm:px-6 sm:py-16">
          <div className="container mx-auto max-w-7xl">
            <div
              className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-[#0C4E78] via-[#1178B7] to-[#0B5E91] px-6 py-8 text-center text-white shadow-xl sm:rounded-3xl sm:px-8 md:px-12 md:py-14"
              data-aos="fade-up"
            >
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-16 -z-10 h-56 w-56 rounded-full border-[24px] border-white/10"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-24 -left-10 -z-10 h-56 w-56 rounded-full bg-[#F59C27]/20 blur-3xl"
              />

              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#FFC36E] sm:text-sm">
                Votre prochain défi
              </p>

              <h2 className="mx-auto mb-5 max-w-4xl text-2xl font-black leading-tight sm:text-3xl md:text-4xl">
                Transformez votre communication et votre croissance avec SunuLink.
              </h2>

              <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
                Choisissez la solution adaptée à vos objectifs et bénéficiez
                d’un accompagnement stratégique personnalisé.
              </p>

              <Button
                asChild
                className="group h-auto min-h-12 w-full rounded-full border-2 border-[#F59C27] bg-[#F59C27] px-7 py-3 text-base font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#1178B7] focus-visible:ring-4 focus-visible:ring-white/30 sm:w-auto sm:px-10 sm:text-lg"
              >
                <Link
                  to="/devis"
                  className="inline-flex items-center justify-center gap-2"
                >
                  Demander un devis
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BoostMyPubPage;
