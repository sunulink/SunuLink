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
    }, 10000); // Change tous les 10 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-[80px] grain-texture relative md:grid md:grid-cols-[45%_55%] gap-2 min-h-[400px] md:min-h-[500px] bg-gradient-hero overflow-hidden shadow-elegant" data-aos="fade-up">
      {/* Texte + CTA */}
      <div className="relative px-4 sm:px-6 md:px-8 py-4 md:py-6 flex flex-col justify-start min-h-[400px] md:min-h-[500px]">
        <div className="max-w-2xl text-white z-10">
          {/* Premier bloc - Animation fade */}
          <div
            className={`space-y-6 md:space-y-8 transition-opacity duration-[1500ms] ease-in-out ${
              showFirstBlock ? "opacity-100" : "opacity-0 absolute"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="block mb-4 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                IA LINK BUSINESS
              </span>
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-white/95 mt-4">
                Plus qu'une agence, votre partenaire de croissance 360°
              </span>
            </h1>

            <p className="text-md sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mt-6 md:mt-8">
                La solution d’automatisation intelligente pour structurer, piloter et faire croître votre entreprise 
            </p>
          </div>

          {/* Deuxième bloc - Animation fade */}
          <div
            className={`space-y-6 md:space-y-8 transition-opacity duration-[1500ms] ease-in-out ${
              !showFirstBlock ? "opacity-100" : "opacity-0 absolute"
            }`}
          >
            <h1 className="text-xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight">
              <span className="block mb-4">
                Transformez votre entreprise grâce à l’Intelligence Artificielle <span className="text-sm align-middle">•</span> l’Intelligence Artificielle <span className="text-sm align-middle">•</span> 
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed max-w-2xl font-light mt-6 md:mt-8">
             Automatisez vos tâches, optimisez vos processus et gagnez du temps pour vous concentrer sur ce qui compte vraiment
            </p>
          </div>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row sm:gap-3 gap-3 mb-6 md:mb-8 mt-8 md:mt-10">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-sunuOrange text-white hover:bg-sunuOrange/90 font-bold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all"
              >
                Demandez un audit gratuit
              </Button>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-white text-sunuBlue bg-white font-bold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl"
              >
                Découvrez nos solutions IA 360°
              </Button>
            </Link>
          </div>
        </div>

        {/* Logo Carousel */}
        <div className="mt-6 md:mt-12 z-10">
          <LogoCarousel />
        </div>
      </div>

      {/* Carousel - Aligné avec le titre */}
      <div className="relative px-4 sm:px-6 md:px-8 py-6 md:py-10 flex flex-col justify-start min-h-[400px] md:min-h-[500px]">
        <div className="flex items-start justify-center w-full h-fit">
          <Carousel
            opts={{ loop: true }}
            className="w-full relative"
          >
            <CarouselContent>
              {heroImages.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="group relative w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[460px] xl:h-[520px] rounded-2xl shadow-2xl mx-auto overflow-hidden flex items-center justify-center">
                  <FlipCard
                    front={
                      <img
                        src={img.src}
                        alt={img.alt}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                          margin: 0,
                          padding: 0,
                        }}
                      />
                    }
                    back={
                      <div
                        className="p-4 sm:p-6 md:p-8 h-full flex items-center justify-center text-white text-center"
                        style={{
                          fontWeight: 600,
                          fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                        }}
                      >
                        {img.text}
                      </div>
                    }
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
