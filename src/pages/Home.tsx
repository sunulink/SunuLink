import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import "../components/Hero_2.css";

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

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {!showContent ? (
        <div className="text-center animate-fadeIn mt-50 pt-60 mt-auto py-20">
          <p className="text-lg text-gray-600 mb-2 animate-pulse">
            Préparation de votre expérience...
          </p>
          <h1 className="text-4xl font-bold text-orange-500 tracking-wide animate-pulse">
            Sunu<span className="text-orange-600">Link</span>
          </h1>
        </div>
      ) : (
        <div className="min-h-screen animate-fadeIn">
          {/* Hero Section */}
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
                    <Link to="/services">
                      <Button
                        size="lg"
                        className="bg-white text-primary hover:bg-white/90 font-semibold px-6 py-3 relative rounded-lg"
                      >
                        📋 Nos services
                      </Button>
                    </Link>
                    <Link to="/realisations">
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-white text-primary hover:bg-white hover:text-primary font-semibold px-6 py-3 rounded-lg"
                      >
                        📊 Nos réalisations
                      </Button>
                    </Link>
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
                </Carousel>
              </div>
            </section>
          </div>

          {/* Quick Links Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto max-w-7xl px-6">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-800">
                UNE COMMUNICATION À 360°<br />
                <span className="text-sunuOrange">POUR DONNER DE L'ÉLAN À VOS PROJETS</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  to="/services"
                  className="group bg-gradient-to-br from-sunuBlue to-sunuCyan text-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <h3 className="text-2xl font-black mb-4">NOS SERVICES</h3>
                  <p className="opacity-90 text-lg">
                    Découvrez nos 7 piliers de services pour donner vie à vos projets.
                  </p>
                  <div className="mt-6 inline-block bg-white/20 px-6 py-2 rounded-full group-hover:bg-white/30 transition-all">
                    En savoir plus →
                  </div>
                </Link>

                <Link
                  to="/realisations"
                  className="group bg-gradient-to-br from-sunuOrange to-yellow-500 text-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <h3 className="text-2xl font-black mb-4">NOS RÉALISATIONS</h3>
                  <p className="opacity-90 text-lg">
                    Des projets variés, réalisés avec rigueur et créativité.
                  </p>
                  <div className="mt-6 inline-block bg-white/20 px-6 py-2 rounded-full group-hover:bg-white/30 transition-all">
                    Voir le portfolio →
                  </div>
                </Link>

                <Link
                  to="/about"
                  className="group bg-gradient-to-br from-sunuCyan to-sunuBlue text-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <h3 className="text-2xl font-black mb-4">À PROPOS</h3>
                  <p className="opacity-90 text-lg">
                    Découvrez notre histoire, notre mission et nos valeurs.
                  </p>
                  <div className="mt-6 inline-block bg-white/20 px-6 py-2 rounded-full group-hover:bg-white/30 transition-all">
                    Notre histoire →
                  </div>
                </Link>
              </div>
            </div>
          </section>


          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
