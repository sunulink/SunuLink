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
    <section className="pt-[80px] grain-texture relative md:grid md:grid-cols-[45%_55%] gap-2 min-h-[500px] md:min-h-[600px] bg-gradient-hero overflow-hidden shadow-elegant" data-aos="fade-up">
      {/* Texte + CTA */}
      <div className="relative px-4 sm:px-6 md:px-8 py-6 md:py-10 flex flex-col justify-start">
        <div className="max-w-2xl text-white z-10">
          
          {/* ZONE DE TEXTE STABILISÉE - Empêche les boutons de sauter */}
          <div className="relative min-h-[320px] sm:min-h-[300px] md:min-h-[380px]">
            
            {/* Premier bloc */}
            <div
              className={`absolute inset-0 space-y-6 md:space-y-8 transition-all duration-[1500ms] ease-in-out ${
                showFirstBlock ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                <span className="block mb-4 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                  SunuLink Consulting
                </span>
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-white/95 mt-4">
                  Plus qu'une agence, votre partenaire de croissance 360°
                </span>
              </h1>

              <p className="text-md sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mt-6">
                Nous transformons vos idées en stratégies, vos projets en résultats, et votre présence en véritable impact.
              </p>
            </div>

            {/* Deuxième bloc - Même taille de police pour la stabilité */}
            <div
              className={`absolute inset-0 space-y-6 md:space-y-8 transition-all duration-[1500ms] ease-in-out ${
                !showFirstBlock ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                <span className="block mb-4 uppercase">
                  Stratégie <span className="text-sunuOrange">•</span> Créativité <span className="text-sunuOrange">•</span> Impact
                </span>
              </h1>

              <p className="text-md sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mt-6">
                Nous vous aidons à développer une stratégie marketing complète, de la création de votre identité visuelle à la mise en place d'une stratégie digitale.
              </p>
            </div>
          </div>

          {/* Boutons CTA - Position FIXE car en dehors de la zone absolue */}
          <div className="flex flex-col sm:flex-row sm:gap-4 gap-3 mt-8 md:mt-12">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-sunuOrange text-white hover:bg-sunuOrange/90 font-bold px-8 py-6 text-lg rounded-xl shadow-xl transition-all"
              >
                Parlons de votre projet
              </Button>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-white text-sunuBlue bg-white font-bold px-8 py-6 text-lg rounded-xl"
              >
                Découvrir nos services
              </Button>
            </Link>
          </div>
        </div>

        {/* Logo Carousel */}
        <div className="mt-12 z-10">
          <LogoCarousel />
        </div>
      </div>

      {/* Carousel Visuel - Droite */}
      <div className="relative px-4 sm:px-6 md:px-8 py-6 md:py-10 flex flex-col justify-start">
        <div className="flex items-start justify-center w-full h-fit">
          <Carousel opts={{ loop: true }} className="w-full relative">
            <CarouselContent>
              {heroImages.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="group relative w-full h-[300px] md:h-[450px] lg:h-[550px] rounded-2xl shadow-2xl overflow-hidden">
                    <FlipCard
                      front={<img src={img.src} alt={img.alt} className="w-full h-full object-cover" />}
                      back={
                        <div className="p-8 h-full flex items-center justify-center text-white text-center font-bold text-xl bg-sunuBlue">
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
