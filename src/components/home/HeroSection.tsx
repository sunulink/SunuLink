import { Link } from "react-router-dom";
import LogoCarousel from "@/components/LogoCarousel";
import { Button } from "@/components/ui/button";
import FlipCard from "@/components/ui/FlipCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { heroImages, socialLinks } from "@/data/homeData";

export const HeroSection = () => {
  return (
    <section className="grain-texture relative md:grid md:grid-cols-2 gap-2 min-h-[500px] bg-gradient-hero overflow-hidden shadow-elegant" data-aos="fade-up">
      {/* Texte + CTA */}
      <div className="relative px-8 py-10 flex flex-col justify-between min-h-[500px]">
        <div className="max-w-xl text-white z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            STRATÉGIE CRÉATIVITÉ{" "}
            <span className="text-secondary">IMPACT</span>
          </h1>
          <p className="text-lg mb-8 opacity-90 leading-relaxed max-w-lg">
            Nous vous aidons à développer une stratégie marketing complète, de
            la création de votre identité visuelle à la mise en place
            d&apos;une stratégie digitale.
          </p>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 mb-8">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-sunuOrange text-white hover:bg-sunuOrange/90 font-bold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all"
              >
                Parlons de votre projet
              </Button>
            </Link>
            <Link to="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-sunuBlue font-bold px-8 py-6 text-lg rounded-xl"
              >
                Découvrir nos services
              </Button>
            </Link>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex items-center space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white hover:bg-white/30 transition-colors"
                aria-label={social.name}
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className={social.iconSize}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Logo Carousel */}
        <div className="mt-8 z-10">
          <LogoCarousel />
        </div>
      </div>

      {/* Carousel - Agrandi */}
      <div className="relative px-8 py-10 flex flex-col items-center justify-center min-h-[500px]">
        <Carousel
          opts={{ loop: true }}
          className="w-full max-w-lg relative"
        >
          <CarouselContent>
            {heroImages.map((img, index) => (
              <CarouselItem key={index}>
                <div className="group relative w-full h-[480px] rounded-2xl shadow-2xl mx-auto overflow-hidden flex items-center justify-center">
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
                        className="bg-gradient-to-br from-sunuBlue to-sunuOrange p-8 h-full flex items-center justify-center"
                        style={{
                          fontWeight: 600,
                          fontSize: "1.2rem",
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
