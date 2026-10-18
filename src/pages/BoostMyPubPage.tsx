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
        {/* HERO BOOST MY PUB */}
        <section className="relative w-full overflow-hidden bg-[#0B4D78]">
          {/* MOBILE : image intégrale, descendue de 40 px */}
          <div className="relative w-full pt-10 md:hidden">
            <img
              src="/img/hero-boost-my-pub.png"
              alt="Les trois offres Boost My Pub : Teranga, Xeewal et Buur"
              loading="eager"
              fetchPriority="high"
              className="block h-auto w-full object-contain object-center"
              onError={() => {
                console.error(
                  "Impossible de charger /img/hero-boost-my-pub.png"
                );
              }}
            />

            {/* Badge en haut à gauche sur mobile */}
            <div className="absolute left-3 top-2 z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1178B7]/20 bg-white/95 px-2.5 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.06em] text-[#1178B7] shadow-sm min-[380px]:text-[10px]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F59C27]" />
                Publicité digitale & acquisition
              </span>
            </div>
          </div>

          {/* TABLETTE / DESKTOP : image zoomée et cadrée sur les coffrets */}
          <div className="relative hidden h-[410px] w-full overflow-hidden md:block lg:h-[450px] xl:h-[490px]">
            <img
              src="/img/hero-boost-my-pub.png"
              alt="Les trois offres Boost My Pub : Teranga, Xeewal et Buur"
              aria-hidden="true"
              loading="eager"
              fetchPriority="high"
              className="absolute inset-0 h-full w-full origin-top scale-[1.12] object-cover object-top"
              onError={() => {
                console.error(
                  "Impossible de charger /img/hero-boost-my-pub.png"
                );
              }}
            />

            {/* Badge en haut à gauche */}
            <div className="absolute left-5 top-5 z-10 lg:left-8 lg:top-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#1178B7]/20 bg-white/95 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#1178B7] shadow-sm lg:text-sm">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#F59C27]" />
                Publicité digitale & acquisition
              </span>
            </div>
          </div>

          {/* ACTIONS : directement sous l'image, sans grand espace vide */}
          <div className="border-t border-white/10 bg-[#0B4D78] px-4 py-4 sm:px-6 md:py-4 lg:py-5">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-3 sm:gap-4">
              <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
                <Link
                  to="/boost-my-pub#packs"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-[#F59C27] bg-[#F59C27] px-5 py-3 text-center text-sm font-extrabold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#1178B7] hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30 sm:w-auto sm:min-w-52 sm:px-7 sm:text-base motion-reduce:transform-none"
                >
                  Découvrir nos packs
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/contact"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-white bg-white px-5 py-3 text-center text-sm font-extrabold text-[#1178B7] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F59C27] hover:bg-[#F59C27] hover:text-white hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30 sm:w-auto sm:min-w-52 sm:px-7 sm:text-base motion-reduce:transform-none"
                >
                  Parler à un expert
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Bénéfices en blanc */}
              <div className="flex w-full flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-bold text-white min-[380px]:text-sm sm:gap-x-6 sm:text-sm md:text-base">
                {[
                  "Stratégie publicitaire",
                  "Ciblage audience",
                  "Optimisation campagnes",
                ].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 shrink-0 text-[#FFC36E] sm:h-5 sm:w-5" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Fine bordure orange */}
          <div aria-hidden="true" className="h-1 w-full bg-[#F59C27]" />
        </section>

        {/* SECTION DES TROIS PACKS */}
        <section
          id="packs"
          className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-white to-slate-50 px-4 py-10 sm:px-6 sm:py-12 md:py-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-32 h-64 w-64 rounded-full bg-[#1178B7]/5 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#F59C27]/10 blur-3xl"
          />

          <div className="container relative z-10 mx-auto max-w-7xl">
            {/* En-tête de section */}
            <div
              className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 md:mb-12"
              data-aos="fade-up"
            >
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1178B7]/15 bg-[#1178B7]/5 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#1178B7] sm:text-sm">
                <Megaphone className="h-4 w-4 text-[#F59C27]" />
                Nos solutions publicitaires
              </p>

              <h2 className="text-2xl font-black leading-tight tracking-tight text-[#1178B7] sm:text-3xl md:text-4xl">
                Nos Packs <span className="text-[#F59C27]">Boost My Pub</span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
                Trois niveaux d’accompagnement pour développer votre visibilité,
                renforcer votre image et accélérer votre croissance.
              </p>
            </div>

            {/* Grille responsive : 1 mobile, 2 tablette, 3 desktop */}
            <div className="grid w-full grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
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
                    {/* Badge */}
                    <div
                      className={`absolute right-0 top-0 z-20 rounded-bl-2xl px-4 py-2 text-xs font-extrabold shadow-sm sm:text-sm ${
                        pack.recommended
                          ? "border border-white/60 bg-white text-[#1178B7]"
                          : "bg-[#F59C27] text-white"
                      }`}
                    >
                      {pack.recommended && (
                        <Star className="mr-1 inline h-3.5 w-3.5 fill-current" />
                      )}
                      {pack.badge}
                    </div>

                    {/* En-tête : bleu, orange, bleu */}
                    <div
                      className={`relative flex flex-col overflow-hidden p-5 text-white sm:p-7 ${
                        pack.recommended ? "bg-[#F59C27]" : "bg-[#1178B7]"
                      }`}
                    >
                      <div
                        aria-hidden="true"
                        className="absolute -right-10 -top-12 h-36 w-36 rounded-full border-[18px] border-white/10 transition-transform duration-500 group-hover:scale-110"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-white/10 blur-2xl"
                      />

                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/15 shadow-sm backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16">
                          <IconComponent
                            className={`h-7 w-7 sm:h-8 sm:w-8 ${
                              pack.recommended ? "text-white" : "text-[#FFC36E]"
                            }`}
                          />
                        </div>

                        <h3 className="mb-2 text-xl font-black leading-tight tracking-tight text-white sm:text-2xl">
                          {pack.name}
                        </h3>

                        <p className="mb-4 flex min-h-10 items-center justify-center text-xs font-semibold text-white/90 sm:text-sm">
                          {pack.duration}
                        </p>

                        <div className="mb-4 flex min-h-[76px] flex-col items-center justify-center">
                          <p className="break-words text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl">
                            {pack.price}
                          </p>
                          {pack.period && (
                            <span className="mt-1 text-sm font-semibold text-white/90 sm:text-base">
                              {pack.period}
                            </span>
                          )}
                        </div>

                        <p className="flex min-h-[52px] items-center justify-center text-sm font-bold leading-relaxed text-white sm:text-base">
                          “{pack.tagline}”
                        </p>
                      </div>
                    </div>

                    {/* Contenu de la carte */}
                    <div className="flex flex-1 flex-col p-5 sm:p-7">
                      <p className="mb-6 min-h-[105px] text-sm leading-relaxed text-slate-600 sm:text-base">
                        {pack.description}
                      </p>

                      <div className="mb-7 border-t border-slate-100 pt-6">
                        <h4 className="mb-4 text-sm font-extrabold uppercase tracking-wider text-[#1178B7]">
                          Ce qui est inclus
                        </h4>

                        <ul className="space-y-3.5">
                          {pack.features.map((feature, idx) => (
                            <li
                              key={`${pack.slug}-${idx}`}
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

                      {/* Bouton uniforme */}
                      <div className="mt-auto">
                        <Button
                          asChild
                          className="group/button h-auto min-h-12 w-full rounded-xl border-2 border-[#F59C27] bg-[#F59C27] px-5 py-3 text-sm font-extrabold text-white shadow-md shadow-[#F59C27]/15 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1178B7] hover:bg-[#1178B7] hover:shadow-lg focus-visible:ring-4 focus-visible:ring-[#F59C27]/30 sm:text-base motion-reduce:transform-none"
                        >
                          <Link
                            to={`/boost-my-pub/${pack.slug}`}
                            className="inline-flex items-center justify-center gap-2 whitespace-normal text-center"
                          >
                            Voir le détail
                            <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/button:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* APPEL À L'ACTION FINAL */}
        <section className="bg-gradient-to-b from-slate-50 to-white px-4 py-10 sm:px-6 sm:py-14 md:py-16">
          <div className="container mx-auto max-w-7xl">
            <div
              className="relative isolate overflow-hidden rounded-2xl bg-[#1178B7] px-5 py-8 text-center text-white shadow-xl sm:rounded-3xl sm:px-8 md:px-12 md:py-12"
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
              <h2 className="mx-auto mb-4 max-w-4xl text-2xl font-black leading-tight sm:text-3xl">
                Transformez votre communication et votre croissance avec SunuLink.
              </h2>
              <p className="mx-auto mb-7 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg">
                Choisissez la solution adaptée à vos objectifs et bénéficiez
                d’un accompagnement stratégique personnalisé.
              </p>

              <Button
                asChild
                className="group h-auto min-h-12 w-full rounded-full border-2 border-[#F59C27] bg-[#F59C27] px-7 py-3 text-sm font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#1178B7] focus-visible:ring-4 focus-visible:ring-white/30 sm:w-auto sm:px-10 sm:text-base"
              >
                <Link
                  to="/devis"
                  className="inline-flex items-center justify-center gap-2"
                >
                  Demander un devis
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
