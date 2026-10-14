import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LogoCarousel from "@/components/LogoCarousel";
import { Button } from "@/components/ui/button";
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
      className="relative overflow-hidden bg-gradient-hero pt-[110px] pb-12"
      data-aos="fade-up"
    >
      <div className="container mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-12">

        {/* GRILLE PRINCIPALE */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-8 lg:gap-12">

          {/* CÔTÉ GAUCHE : TEXTES ET BOUTONS */}
          <div className="relative z-10 flex min-w-0 flex-col">

            {/* Zone des deux textes alternés */}
            <div className="relative flex min-h-[340px] flex-col justify-center sm:min-h-[310px] lg:min-h-[350px]">

              {/* SLIDE 1 : SUNULINK CONSULTING */}
              <div
                className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-in-out ${
                  showFirstBlock
                    ? "translate-x-0 opacity-100"
                    : "pointer-events-none -translate-x-6 opacity-0"
                }`}
                aria-hidden={!showFirstBlock}
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

              {/* SLIDE 2 : TROIS LIGNES DISTINCTES */}
              <div
                className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-in-out ${
                  !showFirstBlock
                    ? "translate-x-0 opacity-100"
                    : "pointer-events-none -translate-x-6 opacity-0"
                }`}
                aria-hidden={showFirstBlock}
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
                <Button
                  size="lg"
                  className="min-h-12 w-full rounded-full border-2 border-[#F59C27] bg-[#F59C27] px-6 py-6 text-base font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#1178B7] hover:bg-[#1178B7] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F59C27]/40 sm:w-auto sm:px-8 sm:text-lg motion-reduce:transform-none"
                >
                  Parlons de votre projet
                </Button>
              </Link>

              <Link
                to="/services"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="min-h-12 w-full rounded-full border-2 border-[#F59C27] bg-[#1178B7] px-6 py-6 text-base font-extrabold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#F59C27] hover:bg-[#F59C27] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F59C27]/40 sm:w-auto sm:px-8 sm:text-lg motion-reduce:transform-none"
                >
                  Découvrir nos services
                </Button>
              </Link>
            </div>
          </div>

          {/* CÔTÉ DROIT : CARROUSEL RESPONSIVE */}
          <div className="flex min-w-0 w-full items-center justify-center md:justify-end">
            <div className="w-full max-w-[700px] overflow-hidden rounded-3xl bg-transparent shadow-2xl">

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
                      className="relative basis-full overflow-hidden rounded-3xl pl-0"
                    >
                      {/* Le ratio donne une hauteur réelle à la diapositive */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-transparent sm:aspect-[5/4] md:aspect-[4/3]">

                        <img
                          src={img.src}
                          alt={img.alt}
                          loading={index === 0 ? "eager" : "lazy"}
                          fetchPriority={index === 0 ? "high" : "auto"}
                          draggable={false}
                          className="absolute inset-0 block h-full w-full rounded-3xl object-cover object-center"
                        />

                        {/* Légende intégrée à la photo, si disponible */}
                        {img.text && (
                          <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#1178B7]/85 via-[#1178B7]/30 to-transparent px-5 pb-5 pt-16 sm:px-7 sm:pb-7">
                            <p className="text-sm font-semibold leading-relaxed text-white drop-shadow-md sm:text-base">
                              {img.text}
                            </p>
                          </div>
                        )}

                        {/* Accent orange sans bordure autour de l'image */}
                        <div
                          className="absolute bottom-0 left-0 z-20 h-1.5 w-24 bg-[#F59C27] sm:w-32"
                          aria-hidden="true"
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
