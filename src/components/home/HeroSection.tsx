
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LogoCarousel from "@/components/LogoCarousel";
import { Button } from "@/components/ui/button";
import FlipCard from "@/components/ui/FlipCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { heroImages } from "@/data/homeData";

export const HeroSection = () => {
  const [showFirstBlock, setShowFirstBlock] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstBlock((prev) => !prev);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-gradient-hero pt-[110px] pb-12"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* GRILLE PRINCIPALE */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">

          {/* CÔTÉ GAUCHE : TEXTES ET BOUTONS */}
          <div className="relative z-10 flex max-w-[550px] flex-col">
            <div className="relative flex min-h-[300px] flex-col justify-center sm:min-h-[280px]">

              {/* SLIDE 1 : SUNULINK CONSULTING */}
              <div
                className={`absolute inset-0 flex flex-col justify-center transition-all duration-[1500ms] ease-in-out ${
                  showFirstBlock
                    ? "translate-x-0 opacity-100"
                    : "pointer-events-none -translate-x-8 opacity-0"
                }`}
                aria-hidden={!showFirstBlock}
              >
                <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                  SunuLink
                  <br />
                  Consulting
                </h1>

                <p className="mb-4 text-lg font-light leading-relaxed text-white/90 md:text-xl">
                  Plus qu'une agence, votre partenaire de croissance 360°
                </p>

                <p className="text-base font-light leading-relaxed text-white/80 md:text-lg">
                  Nous transformons vos idées en stratégies, vos projets en
                  résultats, et votre présence en véritable impact.
                </p>
              </div>

              {/* SLIDE 2 : STRATÉGIE, CRÉATIVITÉ, IMPACT */}
              <div
                className={`absolute inset-0 flex flex-col justify-center transition-all duration-[1500ms] ease-in-out ${
                  !showFirstBlock
                    ? "translate-x-0 opacity-100"
                    : "pointer-events-none -translate-x-8 opacity-0"
                }`}
                aria-hidden={showFirstBlock}
              >
                <h2 className="mb-6 text-4xl font-extrabold uppercase leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                  Stratégie
                  <br />
                  Créativité{" "}
                  <span className="text-[#F59C27]">Impact</span>
                </h2>

                <p className="text-base font-light leading-relaxed text-white/80 md:text-lg">
                  Nous vous aidons à développer une stratégie marketing
                  complète, de la création de votre identité visuelle à la
                  mise en place d'une stratégie digitale.
                </p>
              </div>
            </div>

            {/* BOUTONS SUNULINK */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">

              {/* Bouton principal orange */}
              <Link
                to="/contact"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border-2 border-[#F59C27] bg-[#F59C27] px-6 py-6 text-base font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#1178B7] hover:bg-[#1178B7] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F59C27]/40 sm:w-auto sm:px-8 sm:text-lg motion-reduce:transform-none"
                >
                  Parlons de votre projet
                </Button>
              </Link>

              {/* Bouton secondaire bleu */}
              <Link
                to="/services"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border-2 border-[#F59C27] bg-[#1178B7] px-6 py-6 text-base font-extrabold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#F59C27] hover:bg-[#F59C27] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F59C27]/40 sm:w-auto sm:px-8 sm:text-lg motion-reduce:transform-none"
                >
                  Découvrir nos services
                </Button>
              </Link>
            </div>
          </div>

          {/* CÔTÉ DROIT : CARROUSEL D'IMAGES */}
          <div className="flex min-w-0 items-center justify-center md:justify-end">

            {/* Cadre responsive : mêmes arrondis sur les quatre coins */}
            <div className="relative aspect-[4/3] w-full max-w-[540px] isolate overflow-hidden rounded-3xl bg-[#1178B7] shadow-xl ring-1 ring-[#1178B7]/10 sm:aspect-square sm:rounded-3xl">

              <Carousel
                opts={{
                  loop: true,
                  align: "start",
                }}
                className="h-full w-full overflow-hidden rounded-3xl"
              >
                <CarouselContent className="ml-0 h-full">
                  {heroImages.map((img, index) => (
                    <CarouselItem
                      key={index}
                      className="flex h-full basis-full items-stretch justify-center pl-0"
                    >
                      <div className="h-full w-full overflow-hidden rounded-3xl">
                        <FlipCard
                          front={
                            <div className="h-full w-full overflow-hidden rounded-3xl">
                              <img
                                src={img.src}
                                alt={img.alt}
                                loading={index === 0 ? "eager" : "lazy"}
                                fetchPriority={index === 0 ? "high" : "auto"}
                                draggable={false}
                                className="h-full w-full rounded-3xl object-cover object-center"
                              />
                            </div>
                          }
                          back={
                            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-[#1178B7]/95 p-5 text-center text-base font-light leading-relaxed text-white backdrop-blur-sm sm:p-8 sm:text-xl">
                              {img.text}
                            </div>
                          }
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Accent décoratif discret aux couleurs de la marque */}
              <div
                className="pointer-events-none absolute bottom-0 left-0 z-20 h-1.5 w-24 bg-[#F59C27] sm:w-32"
                aria-hidden="true"
              />
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
