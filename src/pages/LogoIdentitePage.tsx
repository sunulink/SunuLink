import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Palette, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) setIsVisible(true);
    }, { threshold: 0.1 });
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
  const stats = [
    { value: 15, suffix: "+", label: "Identités créées" },
    { value: 100, suffix: "%", label: "Design Unique" },
    { value: 50, suffix: "+", label: "Logos livrés" },
    { value: 12, suffix: "/12", label: "Mois d'innovation" },
  ];

  // 1. Les 4 Grandes Images (Taille égale grâce à aspect-square)
  const mainShowcase = [
    { id: 1, img: "/portfolio/1.png", title: "Branding Industriel" },
    { id: 2, img: "/portfolio/2.png", title: "Identité Corporate" },
    { id: 3, img: "/portfolio/3.png", title: "Packaging Design" },
    { id: 4, img: "/portfolio/MOCKUP 1 EMBALLAGE PRO.png", title: "Concept Produit" },
  ];

  // 2. Autres réalisations pour le défilement horizontal
  const otherRealizations = [
    "/portfolio/BRANDING PUB3.png", "/portfolio/BRANDING PUB 2.png",
    "/portfolio/FLYERS 1.png", "/portfolio/FLYERS 2.png",
    "/portfolio/COBI-PAGES.png", "/portfolio/FLNERCI/0.png",
    "/portfolio/3.png", "/portfolio/1.png"
  ];

  // 3. Grille des Logos (Carrés blancs)
  const logoGrid = [
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
    { name: "Vide Boubou", logo: "/portfolio/logo-vide-boubou.png" },
    { name: "Soly", logo: "/portfolio/logo-soly-internationnal.png" },
    { name: "Senhorti", logo: "/portfolio/logo-senhorti-group.png" },
    { name: "Sow Auto", logo: "/portfolio/LOGO_SOW_AUTO.PNG" },
    { name: "Vision Plus", logo: "/portfolio/LOGO_VISION_PLUS.PNG" },
    { name: "Expertise Immo", logo: "/portfolio/LOGO_EXPERTISE_IMMO.PNG" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      <main className="pt-32 pb-20">
        {/* HERO SECTION */}
        <section className="py-16 px-6 bg-gradient-to-b from-sunuOrange/10 to-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-800" data-aos="fade-up">
                LOGO & <span className="text-sunuOrange uppercase">Identité Visuelle</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Explorez nos créations graphiques pour une image de marque forte.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="grain-texture bg-gradient-to-br from-sunuOrange to-yellow-500 text-white rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 transition-all" data-aos="zoom-in" data-aos-delay={index * 100}>
                  <h3 className="text-4xl md:text-5xl font-black mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="font-semibold opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 1 : LES 4 GRANDES RÉALISATIONS (Aspect Square pour égalité) */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {mainShowcase.map((item, index) => (
                <div key={item.id} className="group" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl bg-gray-50 aspect-square">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                      <h3 className="text-white text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2 : DÉFILEMENT AUTRES RÉALISATIONS */}
        <section className="py-16 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-6 mb-8 text-center">
             <h2 className="text-2xl font-black text-gray-400 uppercase tracking-widest">D'autres réalisations</h2>
          </div>
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...otherRealizations, ...otherRealizations].map((img, index) => (
              <div key={index} className="w-[350px] h-[220px] rounded-3xl overflow-hidden shadow-md flex-shrink-0">
                <img src={img} className="w-full h-full object-cover" alt="Réalisation" />
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 : GRILLE DE LOGOS CARRÉS (Style Partners) */}
        <section className="py-12 md:py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grain-texture bg-gradient-hero rounded-[3rem] p-8 md:p-16 shadow-2xl" data-aos="fade-up">
              <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                <div className="text-center md:text-left text-white">
                  <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase leading-tight">
                    NOS CRÉATIONS <span className="text-sunuOrange">LOGOTYPES</span>
                  </h2>
                  <p className="text-lg opacity-90">Des logos conçus pour marquer les esprits.</p>
                </div>
                <Link to="/contact">
                  <Button className="bg-white text-sunuBlue hover:bg-sunuOrange hover:text-white font-bold px-10 py-6 rounded-full text-lg shadow-xl transition-all">
                    Démarrer un projet
                  </Button>
                </Link>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] bg-white/10 backdrop-blur-md p-6 md:p-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {logoGrid.map((logo, index) => (
                    <div key={index} className="bg-white rounded-xl aspect-square p-6 flex items-center justify-center hover:scale-105 transition-all shadow-md group" data-aos="zoom-in">
                      <img src={logo.logo} alt={logo.name} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 : DÉFILEMENT LOGOS EN BAS (Style Accueil) */}
        <section className="py-10 bg-white border-y border-gray-100 overflow-hidden">
          <div className="flex gap-16 animate-marquee-slow whitespace-nowrap">
            {[...logoGrid, ...logoGrid].map((logo, index) => (
              <div key={index} className="h-16 w-32 flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                <img src={logo.logo} alt={logo.name} className="h-full w-full object-contain" />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-slow {
          display: flex;
          width: max-content;
          animation: marquee 60s linear infinite;
        }
        .animate-marquee:hover, .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoIdentitePage;
