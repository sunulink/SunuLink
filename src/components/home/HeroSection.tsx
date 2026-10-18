import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LogoCarousel from "@/components/LogoCarousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { heroImages } from "@/data/homeData";

export const HeroSection = () => {
  const [showFirstBlock, setShowFirstBlock] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setShowFirstBlock((previous) => !previous);
    }, 10000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden pt-[110px] pb-12"
      style={{
        background:
          "linear-gradient(115deg, #1178B7 0%, #1178B7 25%, #F59C27 100%)",
      }}
      data-aos="fade-up"
    >
      <div className="container mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* GRILLE PRINCIPALE */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* CÔTÉ GAUCHE : TEXTES ET BOUTONS */}
          <div className="relative z-10 flex min-w-0 flex-col">
            {/* TEXTES ALTERNÉS — TRANSITION FLUIDE */}
            <div className="grid min-h-[340px] items-center sm:min-h-[310px] lg:min-h-[350px]">
              {/* BLOC 1 : SUNULINK CONSULTING */}
              <div
                aria-hidden={!showFirstBlock}
                className={`col-start-1 row-start-1 flex flex-col justify-center
                  transition-[opacity,transform,filter]
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  motion-reduce:transition-none
                  ${
                    showFirstBlock
                      ? "translate-y-0 scale-100 opacity-100 blur-0"
                      : "pointer-events-none translate-y-4 scale-[0.985] opacity-0 blur-[2px]"
                  }`}
              >
                <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                  SunuLink
                  <br />
                  <span className="text-[#F59C27]">
                    Consulting
                  </span>
                </h1>

                <p className="mb-4 text-lg font-medium leading-relaxed text-white sm:text-xl">
                  Plus qu'une agence, votre partenaire de croissance 360°
                </p>

                <p className="max-w-xl text-base font-medium leading-relaxed text-white/95 sm:text-lg">
                  Nous transformons vos idées en stratégies, vos projets en
                  résultats, et votre présence en véritable impact.
                </p>
              </div>

              {/* BLOC 2 : STRATÉGIE, CRÉATIVITÉ, IMPACT */}
              <div
                aria-hidden={showFirstBlock}
                className={`col-start-1 row-start-1 flex flex-col justify-center
                  transition-[opacity,transform,filter]
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  motion-reduce:transition-none
                  ${
                    !showFirstBlock
                      ? "translate-y-0 scale-100 opacity-100 blur-0"
                      : "pointer-events-none translate-y-4 scale-[0.985] opacity-0 blur-[2px]"
                  }`}
              >
                <h2 className="mb-6 text-4xl font-extrabold uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                  <span className="block">Stratégie</span>
                  <span className="block">Créativité</span>
                  <span className="block text-[#F59C27]">
                    Impact
                  </span>
                </h2>

                <p className="max-w-xl text-base font-medium leading-relaxed text-white/95 sm:text-lg">
                  Nous vous aidons à développer une stratégie marketing
                  complète, de la création de votre identité visuelle à la
                  mise en place d'une stratégie digitale.
                </p>
              </div>
            </div>

            {/* BOUTONS AUX COULEURS SUNULINK */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto"
              >
                <span className="inline-flex min-h-12 w-full items-center justify-center rounded-full border-2 border-[#F59C27] bg-[#F59C27] px-6 py-3 text-center font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#1178B7] hover:bg-[#1178B7] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 motion-reduce:transform-none sm:w-auto sm:px-8">
                  Parlons de votre projet
                </span>
              </Link>

              <Link
                to="/services"
                className="w-full sm:w-auto"
              >
                <span className="inline-flex min-h-12 w-full items-center justify-center rounded-full border-2 border-[#F59C27] bg-[#1178B7] px-6 py-3 text-center font-extrabold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#F59C27] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 motion-reduce:transform-none sm:w-auto sm:px-8">
                  Découvrir nos services
                </span>
              </Link>
            </div>
          </div>

          {/* CÔTÉ DROIT : CARROUSEL D'IMAGES */}
          <div className="flex min-w-0 w-full items-center justify-center md:justify-end">
            <div className="w-full max-w-[440px]">
              <Carousel
                opts={{
                  loop: true,
                  align: "start",
                }}
                className="w-full overflow-hidden rounded-3xl"
              >
                <CarouselContent className="ml-0">
                  {heroImages.map((img, index) => (
                    <CarouselItem
                      key={index}
                      className="min-w-0 basis-full pl-0"
                    >
                      {/* Ratio 4:5 sur mobile et ordinateur */}
                      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading={index === 0 ? "eager" : "lazy"}
                          fetchPriority={index === 0 ? "high" : "auto"}
                          draggable={false}
                          className="absolute inset-0 block h-full w-full rounded-3xl object-cover object-center"
                          onError={(event) => {
                            console.error(
                              "Impossible de charger l'image du héros :",
                              img.src
                            );
                            event.currentTarget.style.visibility = "hidden";
                          }}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>

        {/* LOGO CAROUSEL */}
        <div className="mt-12 sm:mt-16">
          <LogoCarousel />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
