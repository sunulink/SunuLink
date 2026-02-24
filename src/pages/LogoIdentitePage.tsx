import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Palette, ArrowLeft, Layers, ShieldCheck, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Composant de compteur animé (issu de votre code Blog)
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <div ref={counterRef}>{count}{suffix}</div>;
};

const LogoIdentitePage = () => {
  // Stats adaptées pour Logo & Identité
  const stats = [
    { value: 15, suffix: "+", label: "Identités créées" },
    { value: 100, suffix: "%", label: "Design Unique" },
    { value: 50, suffix: "+", label: "Logos livrés" },
    { value: 12, suffix: "/12", label: "Mois d'innovation" },
  ];

  // Grandes images (Tirés jaunes)
  const mainShowcase = [
    { id: 1, img: "/portfolio/1.png", title: "Branding Industriel" },
    { id: 2, img: "/portfolio/2.png", title: "Identité Corporate" },
    { id: 3, img: "/portfolio/3.png", title: "Packaging Design" },
    { id: 4, img: "/portfolio/MOCKUP 1 EMBALLAGE PRO.png", title: "Concept Produit" },
  ];

  // Liste des logos (Tirés verts - à compléter avec tous vos noms de fichiers)
  const logos = [
    { name: "SunuLink", logo: "/portfolio/logo-sunulink.png" },
    { name: "Soso", logo: "/portfolio/logo-soso.png" },
    { name: "Sarataa", logo: "/portfolio/logo-sarataa.png" },
    { name: "Welli", logo: "/portfolio/logo-welli.png" },
    { name: "Zami", logo: "/portfolio/logo-zami.png" },
    { name: "Telemarck", logo: "/portfolio/logo-telemarck.png" },
    { name: "Linguere Oil", logo: "/portfolio/logo-linguere_oil.png" },
    { name: "Café Délices", logo: "/portfolio/logo-cafe.png" },
    { name: "Bokk Dem", logo: "/portfolio/logo-bokk-dem.png" },
    { name: "FemeZon", logo: "/portfolio/femeZon-logo.png" },
    { name: "Bazar Service", logo: "/portfolio/logo-bazar-service.png" },
    { name: "Sci La Promobiliere", logo: "/portfolio/logo-sci-la-promobiliere.png" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        {/* HERO SECTION - Structure inspirée du Blog */}
        <section className="py-16 px-6 bg-gradient-to-b from-sunuOrange/10 to-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-800" data-aos="fade-up">
                LOGO & <span className="text-sunuOrange uppercase">Identité Visuelle</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                L'essence de votre marque capturée dans un design unique. Explorez nos créations graphiques pour une image de marque forte et mémorable.
              </p>
            </div>

            {/* Stats - Style Blog */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="grain-texture bg-gradient-to-br from-sunuOrange to-yellow-500 text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" data-aos="zoom-in" data-aos-delay={index * 100}>
                  <h3 className="text-4xl md:text-5xl font-black mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="font-semibold opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION RÉALISATIONS - Grandes images (Tirés jaunes) */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {mainShowcase.map((item, index) => (
                <div key={item.id} className="group" data-aos="fade-up" data-aos-delay={index * 150}>
                  <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl bg-gray-100 aspect-video md:aspect-auto">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION LOGOS - Structure PartnersSection (Tirés verts) */}
        <section className="py-12 md:py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grain-texture bg-gradient-hero rounded-[3rem] p-8 md:p-16 shadow-2xl" data-aos="fade-up">
              <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-5xl font-black mb-4 text-white uppercase leading-tight">
                    NOS CRÉATIONS <span className="text-secondary text-sunuOrange">LOGOTYPES</span>
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 font-medium">
                    Une collection de logos conçus pour durer et marquer les esprits.
                  </p>
                </div>
                <Link to="/contact">
                  <Button className="bg-white text-sunuBlue hover:bg-sunuOrange hover:text-white font-bold px-10 py-6 rounded-full shadow-xl transition-all duration-300 text-lg">
                    Démarrer un projet
                  </Button>
                </Link>
              </div>

              {/* Grille de logos blanche sur fond coloré */}
              <div className="relative overflow-hidden rounded-[2rem] bg-white/10 backdrop-blur-md p-6 md:p-12">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {logos.map((logo, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 flex items-center justify-center h-32 md:h-40 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 shadow-md group"
                      data-aos="zoom-in"
                      data-aos-delay={index * 50}
                    >
                      <img
                        src={logo.logo}
                        alt={logo.name}
                        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LogoIdentitePage;
