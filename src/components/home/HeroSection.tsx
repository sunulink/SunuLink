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
  "SunuLink Consulting",
  "Plus qu'une agence, votre partenaire de croissance 360°",
  "Nous transformons vos idées en stratégies",
  "Vos projets en résultats",
  "Et votre présence en véritable impact"
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
    <section className="pt-[80px] grain-texture relative md:grid md:grid-cols-2 gap-2 min-h-[400px] md:min-h-[500px] bg-gradient-hero overflow-hidden shadow-elegant" data-aos="fade-up">
      {/* Texte + CTA */}
      <div className="relative px-4 sm:px-6 md:px-8 py-6 md:py-10 flex flex-col justify-between min-h-[400px] md:min-h-[500px]">
        <div className="max-w-xl text-white z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight min-h-[80px] sm:min-h-[100px] md:min-h-[120px]">
            {displayedText}
            <span className="text-secondary animate-pulse">|</span>
          </h1>
          <p className="text-base sm:text-lg mb-6 md:mb-8 opacity-90 leading-relaxed max-w-lg">
            Nous vous aidons à développer une stratégie marketing complète, de
            la création de votre identité visuelle à la mise en place
            d&apos;une stratégie digitale.
          </p>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row sm:gap-3 gap-3 mb-6 md:mb-8">
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

      {/* Carousel - Agrandi */}
      <div className="relative px-4 sm:px-6 md:px-8 py-6 md:py-10 flex flex-col items-center justify-center min-h-[300px] md:min-h-[500px]">
        <Carousel
          opts={{ loop: true }}
          className="w-full max-w-lg relative"
        >
          <CarouselContent>
            {heroImages.map((img, index) => (
              <CarouselItem key={index}>
                <div className="group relative w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[480px] rounded-2xl shadow-2xl mx-auto overflow-hidden flex items-center justify-center">
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
    </section>
  );
};

export default HeroSection;
