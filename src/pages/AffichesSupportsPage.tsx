import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

const AffichesSupportsPage = () => {
  const stats = [
    { value: 76, suffix: "+", label: "Supports Créés" },
    { value: 100, suffix: "%", label: "Haute Résolution" },
    { value: 45, suffix: "+", label: "Clients Print" },
    { value: 10, suffix: "/10", label: "Finition Premium" },
  ];

  // Sélection des 4 premières images pour le haut de page
  const mainShowcase = [
    { id: 1, img: "/portfolio/affiche-support1.jpg", title: "Design Événementiel" },
    { id: 2, img: "/portfolio/affiche-support2.jpg", title: "Communication Print" },
    { id: 3, img: "/portfolio/affiche-support3.jpg", title: "Marketing Opérationnel" },
    { id: 4, img: "/portfolio/affiche-support4.jpg", title: "Supports Publicitaires" },
  ];

  // Génération automatique des 76 images pour le défilement (Marquee)
  const allPrints = Array.from({ length: 76 }, (_, i) => `/portfolio/affiche-support${i + 1}.jpg`);

  const logoGrid = [
    { name: "SunuLink", logo: "/portfolio/logo-sunulink.png" },
    { name: "Bokk Dem", logo: "/portfolio/logo-bokk-dem.png" },
    { name: "Linguere Oil", logo: "/portfolio/logo-linguere_oil.png" },
    { name: "Soso", logo: "/portfolio/logo-soso.png" },
    { name: "Welli", logo: "/portfolio/logo-welli.png" },
    { name: "Café Délices", logo: "/portfolio/logo-cafe.png" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      <main className="pt-32 pb-20">
        {/* HERO SECTION */}
        <section className="py-16 px-6 bg-gradient-to-b from-sunuOrange/10 to-white">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-800 uppercase">
              AFFICHES & <span className="text-sunuOrange">Supports Print</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              De la conception à la mise en page, nous créons des supports physiques qui captent l'attention.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-sunuOrange to-yellow-500 text-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-4xl font-black mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="font-semibold opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TOP SHOWCASE */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {mainShowcase.map((item) => (
                <div key={item.id} className="relative overflow-hidden rounded-[2.5rem] shadow-xl aspect-square group">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INFINITE MARQUEE - 76 IMAGES (Format Portrait) */}
        <section className="py-20 bg-gray-50 overflow-hidden">
          <h2 className="text-center text-3xl font-black mb-12 uppercase text-gray-800">
            Galerie Complète des <span className="text-sunuOrange">Réalisations</span>
          </h2>
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {[...allPrints, ...allPrints].map((img, index) => (
              <div key={index} className="w-[350px] h-[500px] rounded-3xl overflow-hidden shadow-xl flex-shrink-0 border-4 border-white">
                <img src={img} className="w-full h-full object-cover" alt={`Réalisation print ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        {/* CTA & LOGOS (Identique aux autres pages pour la cohérence) */}
        <section className="py-20 px-6 text-center">
            <div className="bg-sunuBlue rounded-[3rem] p-16 text-white max-w-6xl mx-auto">
                <h2 className="text-4xl font-black mb-6 uppercase">Prêt à imprimer votre succès ?</h2>
                <Link to="/contact">
                    <Button className="bg-sunuOrange hover:bg-white hover:text-sunuBlue text-white font-bold px-10 py-7 rounded-full text-xl transition-all">
                        Demander un devis print
                    </Button>
                </Link>
            </div>
        </section>

        <section className="py-10 overflow-hidden border-t">
          <div className="flex gap-20 animate-marquee-slow whitespace-nowrap items-center">
            {[...logoGrid, ...logoGrid].map((logo, index) => (
              <img key={index} src={logo.logo} alt={logo.name} className="h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 120s linear infinite; }
        .animate-marquee-slow { animation: marquee 60s linear infinite; }
        .animate-marquee:hover { animation-play-state: paused; }
      `}</style>
    </div>
  );
};

export default AffichesSupportsPage;
