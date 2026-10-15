import { Check, Sparkles, Star, Crown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PackpubIA = () => {
  const packs = [
    {
      slug: "link-ia-start",
      title: "LINK IA START",
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
        "Automatisation tâches",
        "Assistant IA",
        "Formation équipe",
      ],
    },
    {
      slug: "link-ia-growth",
      title: "LINK IA GROWTH",
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
    },
    {
      slug: "link-ia-transformation",
      title: "LINK IA TRANSFORMATION",
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
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-white to-slate-50 px-4 py-12 sm:px-6 md:py-20">
      {/* Décoration discrète aux couleurs SunuLink */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-32 h-64 w-64 rounded-full bg-[#1178B7]/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#F59C27]/10 blur-3xl"
      />

      <div className="container relative z-10 mx-auto w-full max-w-7xl">
        {/* EN-TÊTE */}
        <div
          className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
          data-aos="fade-up"
        >
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1178B7]/15 bg-[#1178B7]/5 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#1178B7] sm:text-sm">
            <Sparkles className="h-4 w-4 text-[#F59C27]" />
            Nos solutions d’intelligence artificielle
          </p>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#1178B7] sm:text-4xl md:text-5xl">
            Nos Packs{" "}
            <span className="text-[#F59C27]">Link IA</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Choisissez la formule adaptée à la maturité de votre organisation
            et commencez votre transformation.
          </p>
        </div>

        {/* GRILLE DES PACKS */}
        <div className="grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8">
          {packs.map((pack, index) => {
            const IconComponent = pack.icon;
            const isOrangeHeader = index === 1;

            return (
              <article
                key={pack.slug}
                className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(17,120,183,0.14)] md:rounded-3xl ${
                  pack.recommended
                    ? "border-t-4 border-t-[#F59C27] ring-1 ring-[#F59C27]/15"
                    : "border-t-4 border-t-[#1178B7]"
                } motion-reduce:transform-none`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Badge */}
                {pack.recommended && (
                  <div className="absolute right-0 top-0 z-20 rounded-bl-2xl bg-[#F59C27] px-4 py-2 text-xs font-extrabold text-white shadow-sm sm:text-sm">
                    <span className="inline-flex items-center gap-1.5">
                      <Star className="h-4 w-4 fill-current" />
                      Recommandé
                    </span>
                  </div>
                )}

                {!pack.recommended &&
                  pack.slug === "link-ia-transformation" && (
                    <div className="absolute right-0 top-0 z-20 rounded-bl-2xl bg-[#1178B7] px-4 py-2 text-xs font-extrabold text-white shadow-sm sm:text-sm">
                      Solution corporate
                    </div>
                  )}

                {/* EN-TÊTE COLORÉ */}
                <div
                  className={`relative flex flex-col overflow-hidden p-5 text-white sm:p-7 ${
                    isOrangeHeader ? "bg-[#F59C27]" : "bg-[#1178B7]"
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-12 h-36 w-36 rounded-full border-[18px] border-white/10 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-white/5 blur-2xl"
                  />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/15 shadow-sm backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 md:h-16 md:w-16">
                      <IconComponent className="h-7 w-7 text-white md:h-8 md:w-8" />
                    </div>

                    <h3 className="mb-2 text-xl font-black leading-tight tracking-tight text-white sm:text-2xl">
                      {pack.title}
                    </h3>

                    <p className="mb-5 min-h-5 text-xs font-semibold text-white/90 sm:text-sm">
                      {pack.duration}
                    </p>

                    <div className="mb-4 flex min-h-[72px] flex-col items-center justify-center">
                      <p className="text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl">
                        {pack.price}
                      </p>
                      {pack.period && (
                        <span className="mt-1 text-sm font-semibold text-white/90 sm:text-base">
                          {pack.period}
                        </span>
                      )}
                    </div>

                    <p className="min-h-[48px] text-sm font-bold leading-relaxed text-white sm:text-base">
                      “{pack.tagline}”
                    </p>
                  </div>
                </div>

                {/* CONTENU */}
                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <p className="mb-6 min-h-[76px] text-sm leading-relaxed text-slate-600 sm:text-base">
                    {pack.description}
                  </p>

                  <div className="mb-7 border-t border-slate-100 pt-6">
                    <h4 className="mb-4 text-sm font-extrabold uppercase tracking-wider text-[#1178B7]">
                      Ce qui est inclus
                    </h4>

                    <ul className="space-y-3.5">
                      {pack.features.map((feature, idx) => (
                        <li
                          key={idx}
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

                  {/* BOUTONS */}
                  <div className="mt-auto space-y-3">
                    <Button
                      asChild
                      className="h-auto min-h-12 w-full rounded-xl border-2 border-[#F59C27] bg-[#F59C27] px-5 py-3 text-sm font-extrabold text-white shadow-md shadow-[#F59C27]/15 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1178B7] hover:bg-[#1178B7] hover:shadow-lg focus-visible:ring-4 focus-visible:ring-[#F59C27]/30 sm:text-base motion-reduce:transform-none"
                    >
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 whitespace-normal text-center"
                      >
                        Je valide
                        <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>

                    <Link
                      to={`/pack-pub-ia/${pack.slug}`}
                      className="group/more inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-[#1178B7]/20 bg-[#1178B7]/5 px-4 py-2.5 text-center text-sm font-bold text-[#1178B7] transition-all duration-300 hover:border-[#F59C27]/40 hover:bg-[#F59C27]/10 hover:text-[#1178B7] focus:outline-none focus:ring-4 focus:ring-[#1178B7]/15 sm:text-base"
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
  );
};

export default PackpubIA;
