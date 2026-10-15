import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Star,
  Crown,
  Check,
  ArrowRight,
  Brain,
} from "lucide-react";
import { packsIA } from "@/data/homeData";

const iconMap = {
  "link-ia-start": Sparkles,
  "link-ia-growth": Star,
  "link-ia-transformation": Crown,
};

export const PackSectionIA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-white to-slate-50 px-4 py-12 sm:px-6 md:py-16 lg:py-20">
      {/* Décorations discrètes aux couleurs SunuLink */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-32 h-64 w-64 rounded-full bg-[#1178B7]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#F59C27]/10 blur-3xl"
      />

      <div className="container relative z-10 mx-auto max-w-7xl">
        {/* EN-TÊTE DE SECTION */}
        <div
          className="mx-auto mb-10 max-w-3xl px-2 text-center md:mb-12"
          data-aos="fade-up"
        >
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1178B7]/15 bg-[#1178B7]/5 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#1178B7] sm:text-sm">
            <Brain className="h-4 w-4 text-[#F59C27]" />
            Nos solutions d'intelligence artificielle
          </p>

          <h2 className="text-2xl font-black leading-tight tracking-tight text-[#1178B7] sm:text-3xl md:text-4xl">
            LINK IA{" "}
            <span className="text-[#F59C27]">BUSINESS</span>
          </h2>

          <p className="mb-2 mt-4 text-base font-bold text-slate-700 sm:text-lg">
            Votre visibilité. Notre puissance.
          </p>

          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
            Des packs sur mesure pour intégrer l’intelligence artificielle,
            automatiser vos processus et accélérer le développement de votre
            entreprise.
          </p>
        </div>

        {/* GRILLE DES TROIS PACKS */}
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {packsIA.map((pack, index) => {
            // Les icônes sont sélectionnées à partir du slug du pack.
            const IconComponent =
              iconMap[pack.slug as keyof typeof iconMap] || Sparkles;

            const isRecommended = Boolean(pack.recommended);

            return (
              <article
                key={pack.slug}
                className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(17,120,183,0.14)] md:rounded-3xl motion-reduce:transform-none ${
                  isRecommended
                    ? "border-t-4 border-t-[#F59C27] ring-1 ring-[#F59C27]/15"
                    : "border-t-4 border-t-[#1178B7]"
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* BADGE */}
                {pack.badge && (
                  <div
                    className={`absolute right-0 top-0 z-20 rounded-bl-2xl px-4 py-2 text-xs font-extrabold shadow-sm sm:text-sm ${
                      isRecommended
                        ? "border border-white/60 bg-white text-[#1178B7]"
                        : "bg-[#F59C27] text-white"
                    }`}
                  >
                    {isRecommended && (
                      <Star className="mr-1 inline h-3.5 w-3.5 fill-current" />
                    )}
                    {pack.badge}
                  </div>
                )}

                {/* EN-TÊTE : START BLEU, GROWTH ORANGE, TRANSFORMATION BLEU */}
                <div
                  className={`relative flex min-h-[310px] flex-col overflow-hidden p-5 text-white sm:min-h-[320px] sm:p-7 ${
                    isRecommended ? "bg-[#F59C27]" : "bg-[#1178B7]"
                  }`}
                >
                  {/* Éléments décoratifs */}
                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-12 h-36 w-36 rounded-full border-[18px] border-white/10 transition-transform duration-500 group-hover:scale-110"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-white/10 blur-2xl"
                  />

                  <div className="relative z-10 flex flex-1 flex-col items-center text-center">
                    {/* Icône */}
                    <div className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white/15 shadow-sm backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16">
                      <IconComponent
                        className={`h-7 w-7 sm:h-8 sm:w-8 ${
                          isRecommended ? "text-white" : "text-[#FFC36E]"
                        }`}
                      />
                    </div>

                    {/* Nom du pack */}
                    <h3 className="mb-2 flex min-h-[56px] items-center justify-center text-xl font-black leading-tight tracking-tight text-white sm:text-2xl">
                      {pack.name}
                    </h3>

                    {/* Durée d'engagement */}
                    <p className="mb-4 flex min-h-[40px] items-center justify-center text-xs font-semibold leading-relaxed text-white/90 sm:text-sm">
                      {pack.duration}
                    </p>

                    {/* Tarif */}
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

                    {/* Signature */}
                    <p className="flex min-h-[52px] items-center justify-center text-sm font-bold leading-relaxed text-white sm:text-base">
                      “{pack.tagline}”
                    </p>
                  </div>
                </div>

                {/* CONTENU DES CARTES */}
                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <p className="mb-6 min-h-[100px] text-sm leading-relaxed text-slate-600 sm:text-base">
                    {pack.description}
                  </p>

                  {/* Prestations incluses */}
                  <div className="mb-7 flex-1 border-t border-slate-100 pt-6">
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

                  {/* BOUTON IDENTIQUE SUR LES TROIS CARTES */}
                  <div className="mt-auto">
                    <Button
                      asChild
                      className="group/button h-auto min-h-12 w-full rounded-xl border-2 border-[#F59C27] bg-[#F59C27] px-5 py-3 text-sm font-extrabold text-white shadow-md shadow-[#F59C27]/15 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1178B7] hover:bg-[#1178B7] hover:shadow-lg focus-visible:ring-4 focus-visible:ring-[#F59C27]/30 sm:text-base motion-reduce:transform-none"
                    >
                      <Link
                        to={`/pack-pub-ia/${pack.slug}`}
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

        {/* BOUTON VERS LA PAGE DES PACKS */}
        <div className="mt-10 px-2 text-center sm:mt-12" data-aos="fade-up">
          <Button
            asChild
            className="group h-auto min-h-12 w-full rounded-full border-2 border-[#1178B7] bg-white px-7 py-3 text-sm font-extrabold text-[#1178B7] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F59C27] hover:bg-[#F59C27] hover:text-white hover:shadow-lg focus-visible:ring-4 focus-visible:ring-[#1178B7]/20 sm:w-auto sm:px-9 sm:text-base"
          >
            <Link
              to="/pack-pub-ia"
              className="inline-flex items-center justify-center gap-2"
            >
              Voir tous nos packs en détail
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackSectionIA;
