import { useEffect, useState } from "react";
import "./Hero_2.css";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

import heroImage from "@/assets/hero-image.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
// Suppression de l'import inutile du carousel UI
// import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
const logo = "/logo-7.png";

const images = [
  {
    src: "/img/IA.jpg",
    alt: "Intelligence Artificielle",
    type: "cover",
    text: "Innovez grâce à l'intelligence artificielle au service de votre communication.",
  },
];

// Composant FlipCard
const FlipCard: React.FC<{ front: React.ReactNode; back: React.ReactNode }> = ({
  front,
  back,
}) => (
  <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">{front}</div>
      <div className="flip-card-back">{back}</div>
    </div>
  </div>
);

const Hero_2 = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="p-4 md:py-10 mt-10">
      <section className="relative md:grid md:grid-cols-2 gap-2 min-h-[500px] bg-gradient-hero overflow-hidden rounded-2xl shadow-elegant max-w-6xl mx-auto">
        {/* Overlay bruit */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none z-10 mix-blend-overlay opacity-20"
          style={{
            backgroundImage: `url("/noise.png")`,
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
          }}
        />
        {/* Texte + CTA */}
        <div className="relative px-8 py-10 flex items-center justify-between min-h-[500px]">
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
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-6 py-3 relative rounded-lg"
              >
                <a href="#services">📋 Nos services</a>
              </Button>
              {/* <Dialog> */}
              {/* <DialogTrigger asChild> */}
              <Button
                variant="outline"
                size="lg"
                className="border-white text-primary hover:bg-white hover:text-primary font-semibold px-6 py-3 rounded-lg"
              >
                <a href="#projets">

                📊 Nos réalisations
                </a>
              </Button>
              {/* </DialogTrigger> */}
              {/* <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Page non disponible</DialogTitle>
                    <DialogDescription>
                      La section <b>Nos réalisations</b> est en cours de
                      développement 🚀. Revenez bientôt !
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent> */}
              {/* </Dialog> */}
            </div>

            {/* Réseaux sociaux */}
            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/share/19oMyxQApw/?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white hover:bg-white/30 transition-colors"
                aria-label="Facebook"
              >
                <img
                  src="facebook-176-svgrepo-com.svg"
                  alt="Facebook"
                  className="w-4 h-4"
                />
              </a>

              <a
                href="https://www.linkedin.com/company/sunulink-consulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white hover:bg-white/30 transition-colors"
                aria-label="LinkedIn"
              >
                <img
                  src="linkedin-svgrepo-com.svg"
                  alt="LinkedIn"
                  className="w-4 h-4"
                />
              </a>

              <a
                href="https://www.instagram.com/sunulink_consulting?igsh=MTh6dndrcGlja2lrNQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white hover:bg-white/30 transition-colors"
                aria-label="Instagram"
              >
                <img
                  src="instagram-svgrepo-com.svg"
                  alt="Instagram"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>
        </div>
        {/* Carousel */}
        <div className="relative px-8 py-10 flex flex-col items-center justify-center min-h-[500px]">
          <Carousel
            opts={{ loop: true }}
            setApi={setApi}
            className="w-full max-w-sm relative"
          >
            <CarouselContent>
              {images.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="group relative max-w-[280px] w-full h-[400px] rounded-xl shadow-elegant mx-auto overflow-hidden flex items-center justify-center">
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
                          style={{
                            padding: 20,
                            fontWeight: 600,
                            fontSize: "1.1rem",
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
            {/* Flèches visibles seulement en desktop */}
            {/* <div className="hidden md:block"> */}
            {/* <CarouselPrevious /> */}
            {/* <CarouselNext /> */}
            {/* </div> */}
          </Carousel>
          {/* Indicateurs (dots) */}
          {/* <div className="flex space-x-2 mt-4 z-10 relative">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index ? "bg-black scale-125" : "bg-gray-400"
                }`}
              />
            ))}
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Hero_2;
