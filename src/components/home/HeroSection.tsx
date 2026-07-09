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
    <section className="pt-[110px] pb-12 grain-texture relative bg-gradient-hero overflow-hidden" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* GRILLE ALIGNÉE AU CENTRE : Aligne verticalement le bloc texte et l'image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* CÔTÉ GAUCHE : TOUT LE CONTENU ENCADRÉ */}
          <div className="relative z-10 flex flex-col max-w-[550px]">
            <div className="relative min-h-[300px] flex flex-col justify-center">
              
              {/* Slide 1 : SUNULINK CONSULTING */}
              <div
                className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out flex flex-col justify-center ${
                  showFirstBlock ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8 pointer-events-none"
                }`}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-white">
                  SunuLink <br /> Consulting
                </h1>
                <p className="text-lg md:text-xl font-light text-white/90 leading-relaxed mb-4">
                  Plus qu'une agence, votre partenaire de croissance 360°
                </p>
                <p className="text-base md:text-lg font-light text-white/70 leading-relaxed">
                  Nous transformons vos idées en stratégies, vos projets en résultats, et votre présence en véritable impact.
                </p>
              </div>

              {/* Slide 2 : STRATÉGIE CRÉATIVITÉ IMPACT */}
              <div
                className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out flex flex-col justify-center ${
                  !showFirstBlock ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8 pointer-events-none"
                }`}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-white uppercase">
                  Stratégie <br /> Créativité <span>Impact</span>
                </h1>
                <p className="text-base md:text-lg font-light text-white/70 leading-relaxed">
                  Nous vous aidons à développer une strategy marketing complète, de la création de votre identité visuelle à la mise en place d'une stratégie digitale.
                </p>
              </div>
            </div>

            {/* BOUTONS */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-sunuOrange text-white hover:bg-sunuOrange/90 font-bold px-8 py-6 text-lg rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Parlons de votre projet
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-sunuBlue bg-white hover:bg-sunuOrange hover:border-sunuOrange hover:text-white font-bold px-8 py-6 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Découvrir nos services
                </Button>
              </Link>
            </div>
          </div>

          {/* CÔTÉ DROIT : IMAGE (Cadre de référence) / pour changer l'image, merci d'aller à la src/data/homeData */}
          {/* CÔTÉ DROIT : IMAGE (Correction définitive sans aucun résidu blanc possible) */}
          <div className="flex justify-center md:justify-end items-center">
            <div className="w-full max-w-[500px] aspect-square relative rounded-3xl overflow-hidden isolation-strict bg-transparent">
              <Carousel opts={{ loop: true }} className="w-full h-full bg-transparent">
                <CarouselContent className="h-full bg-transparent ml-0"> {/* ml-0 supprime le décalage négatif par défaut de Shadcn */}
                  {heroImages.map((img, index) => (
                    <CarouselItem key={index} className="h-full pl-0 bg-transparent flex items-center justify-center">
                      <div className="w-full h-full rounded-3xl overflow-hidden bg-transparent select-none mask-image-fix">
                        <FlipCard
                          front={
                            <img 
                              src={img.src} 
                              alt={img.alt} 
                              className="w-full h-full object-cover rounded-3xl overflow-hidden bg-transparent" 
                            />
                          }
                          back={
                            <div className="p-8 h-full flex items-center justify-center text-white text-center font-light text-xl bg-sunuBlue/95 backdrop-blur-sm rounded-3xl overflow-hidden">
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

        </div>

        {/* LOGO CAROUSEL */}
        <div className="mt-16">
          <LogoCarousel />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
