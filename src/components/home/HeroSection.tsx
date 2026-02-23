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
    <section className="pt-[80px] grain-texture relative md:grid md:grid-cols-[45%_55%] gap-2 min-h-[550px] bg-gradient-hero overflow-hidden shadow-elegant" data-aos="fade-up">
      {/* GAUCHE : Texte + CTA */}
      <div className="relative px-4 sm:px-6 md:px-12 py-6 md:py-10 flex flex-col justify-center">
        <div className="max-w-2xl text-white z-10">
          
          <div className="relative min-h-[350px] sm:min-h-[300px] md:min-h-[350px]">
            
            {/* Premier bloc - SunuLink */}
            <div
              className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
                showFirstBlock ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4">
                SunuLink Consulting
              </h1>
              <p className="text-lg md:text-xl font-normal text-white/90 leading-relaxed">
                Plus qu'une agence, votre partenaire de croissance 360°
              </p>
              <p className="text-base md:text-lg font-normal text-white/80 leading-relaxed mt-6">
                Nous transformons vos idées en stratégies, vos projets en résultats, et votre présence en véritable impact.
              </p>
            </div>

            {/* Deuxième bloc - Stratégie • Créativité • Impact */}
            <div
              className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
                !showFirstBlock ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight uppercase mb-4 whitespace-nowrap">
                Stratégie <span className="text-sunuOrange">•</span> Créativité <span className="text-sunuOrange">•</span> Impact
              </h1>
              <p className="text-base md:text-lg font-normal text-white/80 leading-relaxed mt-6">
                Nous vous aidons à développer une stratégie marketing complète, de la création de votre identité visuelle à la mise en place d'une stratégie digitale.
              </p>
            </div>
          </div>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row sm:gap-4 gap-3 mt-8 md:mt-10">
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

      {/* DROITE : Image IA centrée */}
      <div className="relative flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-[500px] lg:max-w-[550px]">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {heroImages.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="group relative w-full aspect-square rounded-2xl shadow-2xl overflow-hidden border-4 border-white/10">
                    <FlipCard
                      front={<img src={img.src} alt={img.alt} className="w-full h-full object-cover" />}
                      back={
                        <div className="p-8 h-full flex items-center justify-center text-white text-center font-medium text-xl bg-sunuBlue">
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
