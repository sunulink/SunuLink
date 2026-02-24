import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const stats = [
    { value: 76, suffix: "+", label: "Supports Créés" },
    { value: 100, suffix: "%", label: "Haute Résolution" },
    { value: 45, suffix: "+", label: "Clients Print" },
    { value: 10, suffix: "/10", label: "Finition Premium" },
  ];

  const mainShowcase = [
    { id: 1, img: "/portfolio/affiche-support1.jpg", title: "Design Événementiel" },
    { id: 2, img: "/portfolio/affiche-support2.jpg", title: "Communication Print" },
    { id: 3, img: "/portfolio/affiche-support3.jpg", title: "Marketing Opérationnel" },
    { id: 4, img: "/portfolio/affiche-support4.jpg", title: "Supports Publicitaires" },
  ];

  const allPrints = Array.from({ length: 76 }, (_, i) => `/portfolio/affiche-support${i + 1}.jpg`);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % allPrints.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + allPrints.length) % allPrints.length);

  // Verrouillage du scroll quand le zoom est ouvert
  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImg]);

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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-sunuOrange to-yellow-500 text-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-4xl font-black mb-2"><AnimatedCounter end={stat.value} suffix={stat.suffix} /></h3>
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
                <div key={item.id} className="relative overflow-hidden rounded-[2.5rem] shadow-xl aspect-square group cursor-pointer" onClick={() => setSelectedImg(item.img)}>
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INFINITE MARQUEE - PASSÉ À 30s */}
        <section className="py-20 bg-gray-50 overflow-hidden">
          <h2 className="text-center text-3xl font-black mb-12 uppercase text-gray-800">
            Galerie <span className="text-sunuOrange">Dynamique</span>
          </h2>
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {[...allPrints.slice(0, 20), ...allPrints.slice(0, 20)].map((img, index) => (
              <div key={index} className="w-[300px] h-[450px] rounded-3xl overflow-hidden shadow-xl flex-shrink-0 border-4 border-white cursor-zoom-in" onClick={() => setSelectedImg(img)}>
                <img src={img} className="w-full h-full object-cover" alt="Realisation" loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        {/* SLIDER INTERACTIF (1000x600px) */}
        <section className="py-24 bg-white">
          <div className="container mx-auto max-w-6xl px-6">
            <h2 className="text-center text-4xl font-black mb-16 uppercase italic text-sunuBlue">Focus Réalisations</h2>
            <div className="relative flex items-center justify-center">
              <button onClick={prevSlide} className="absolute left-[-20px] lg:left-[-80px] z-10 p-4 bg-sunuOrange text-white rounded-full shadow-2xl hover:scale-110 transition-all">
                <ChevronLeft size={40} />
              </button>
              
              <div className="w-full max-w-[1000px] h-[600px] rounded-[3rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-[12px] border-gray-50 cursor-zoom-in group" onClick={() => setSelectedImg(allPrints[currentIndex])}>
                <img 
                  src={allPrints[currentIndex]} 
                  alt="Focus Print" 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>

              <button onClick={nextSlide} className="absolute right-[-20px] lg:right-[-80px] z-10 p-4 bg-sunuOrange text-white rounded-full shadow-2xl hover:scale-110 transition-all">
                <ChevronRight size={40} />
              </button>
            </div>
            <p className="text-center mt-8 font-bold text-gray-400 uppercase tracking-widest">Support {currentIndex + 1} / {allPrints.length}</p>
          </div>
        </section>

        {/* MODAL ZOOM (LIGHTBOX FIABLE) */}
        {selectedImg && (
          <div 
            className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-4 transition-all animate-in fade-in zoom-in duration-300 cursor-pointer"
            onClick={() => setSelectedImg(null)}
          >
            {/* Bouton Fermer (X) très visible */}
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }} 
              className="absolute top-6 right-6 md:top-10 md:right-10 z-[1000] bg-sunuOrange text-white p-4 rounded-full hover:bg-white hover:text-sunuOrange transition-all shadow-2xl"
            >
              <X size={40} strokeWidth={3} />
            </button>

            <img 
              src={selectedImg} 
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain cursor-default" 
              alt="Zoom" 
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* CTA FINAL */}
        <section className="py-24 px-6 text-center bg-sunuBlue">
            <div className="max-w-4xl mx-auto text-white">
                <h2 className="text-5xl font-black mb-8 uppercase leading-tight">Votre projet mérite <br/><span className="text-sunuOrange">une impression d'exception</span></h2>
                <Link to="/contact">
                    <Button className="bg-sunuOrange hover:bg-white hover:text-sunuBlue text-white font-black px-12 py-9 rounded-full text-2xl shadow-2xl transition-all hover:-translate-y-2">
                        Démarrer mon projet Print
                    </Button>
                </Link>
            </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-marquee:hover { animation-play-state: paused; }
      `}</style>
    </div>
  );
};

export default AffichesSupportsPage;
