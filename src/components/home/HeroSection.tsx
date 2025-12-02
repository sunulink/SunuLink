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

const messages = [
  "vos idées en stratégies",
  "vos projets en résultats",
  "votre présence en véritable impact"
];

export const HeroSection = () => {

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayedText === currentMessage) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentMessage.substring(0, displayedText.length - 1)
          : currentMessage.substring(0, displayedText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentMessageIndex]);

  return (
    <section className="pt-[80px] grain-texture relative md:grid md:grid-cols-[45%_55%] gap-2 min-h-[400px] md:min-h-[500px] bg-gradient-hero overflow-hidden shadow-elegant" data-aos="fade-up">
      {/* Texte + CTA */}
      <div className="relative px-4 sm:px-6 md:px-8 py-6 md:py-10 flex flex-col justify-between min-h-[400px] md:min-h-[500px]">
        <div className="max-w-2xl text-white z-10">
          <div className="space-y-4 md:space-y-6">
            {/* Titre principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="block mb-2 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                SunuLink Consulting
              </span>
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white/95 mt-2">
                Plus qu'une agence, votre partenaire de croissance 360°
              </span>
            </h1>

            {/* Section animée */}
            <div className="mt-6 md:mt-8 min-h-[100px] sm:min-h-[120px]">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed">
                <span className="text-white/90">Nous transformons</span>{" "}
                <span className="inline-block relative">
                  <span className="font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-lg backdrop-blur-sm border border-secondary/20">
                    {displayedText}
                    <span className="text-secondary animate-pulse ml-1">|</span>
                  </span>
                </span>
              </p>
            </div>

            {/* Sous-titre descriptif */}
            <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed max-w-2xl font-light">
              Nous vous accompagnons dans le développement d'une stratégie marketing complète,
              de la création de votre identité visuelle à la mise en place d'une présence digitale performante.
            </p>
          </div>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row sm:gap-3 gap-3 mb-6 md:mb-8 mt-8 md:mt-10">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-sunuOrange text-white hover:bg-sunuOrange/90 font-bold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all"
              >
                Parlons de votre projet
              </Button>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-white text-sunuBlue bg-white font-bold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl"
              >
                Découvrir nos services
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
