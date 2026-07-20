import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Calendar } from "lucide-react";

// Compteur Dynamique Autonome
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

const SunuLinkEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Statistiques ajustées
  const stats = [
    { value: 12, suffix: "+", label: "Événements Réussis" },
    { value: 1500, suffix: "+", label: "Participants Ravis" },
    { value: 100, suffix: "%", label: "Clé en Main" },
    { value: 8, suffix: "+", label: "Partenaires Corporate" },
  ];

  const mainShowcase = [
    { id: 1, img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800", title: "Conférences & Forums Élite" },
    { id: 2, img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800", title: "Cocktails & Galas Prestige" },
    { id: 3, img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800", title: "Salons Professionnels B2B" },
    { id: 4, img: "https://images.unsplash.com/photo-1505232458627-467264a36934?auto=format&fit=crop&q=80&w=800", title: "Lancements de Produits" },
  ];

  const allEventImages = [
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1505232458627-467264a36934?auto=format&fit=crop&q=80&w=1200"
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % allEventImages.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + allEventImages.length) % allEventImages.length);

  useEffect(() => {
    document.body.style.overflow = selectedImg ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImg]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-sans flex flex-col">
      <Header />

      <main className="pt-32 flex-grow">
        {/* HERO SECTION */}
        <section className="py-20 px-6 bg-gradient-to-b from-sunuOrange/15 to-[#0a0a0a]">
          <div className="container mx-auto max-w-7xl text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-sunuOrange/10 border border-sunuOrange/20 p-4 rounded-2xl">
                <Calendar className="text-sunuOrange" size={48} />
              </div>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tighter">
              SUNULINK <span className="text-sunuOrange">EVENTS</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium italic">
              " L'art de concevoir des rassemblements mémorables et millimétrés. "
            </p>

            {/* STATISTIQUES */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="bg-[#121212] border border-white/5 rounded-3xl p-8 shadow-2xl transition-transform hover:-translate-y-1">
                  <h3 className="text-4xl md:text-5xl font-black mb-2 text-sunuOrange">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="font-semibold text-gray-400 text-sm tracking-wide uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GRILLE D'IMAGES */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {mainShowcase.map((item) => (
                <div 
                  key={item.id} 
                  className="relative overflow-hidden rounded-[2.5rem] bg-[#121212] border border-white/5 shadow-xl aspect-square group cursor-pointer" 
                  onClick={() => setSelectedImg(item.img)}
                >
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-8">
                    <div>
                      <div className="w-8 h-[2px] bg-sunuOrange mb-3 group-hover:w-16 transition-all" />
                      <h3 className="text-white text-xl font-bold uppercase tracking-tight">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOCUS SLIDER */}
        <section className="py-20 bg-[#111]/40 border-y border-white/5">
          <div className="container mx-auto max-w-6xl px-6">
            <h2 className="text-center text-3xl md:text-5xl font-black mb-16 uppercase tracking-tight">
              Focus <span className="text-sunuOrange italic font-light">Expériences Immersives</span>
            </h2>
            
            <div className="relative flex items-center justify-center">
              <button 
                onClick={prevSlide} 
                className="absolute left-[-20px] lg:left-[-80px] z-10 p-4 bg-[#161616] text-white border border-white/10 rounded-full shadow-2xl hover:text-sunuOrange hover:border-sunuOrange/40 transition-all"
              >
                <ChevronLeft size={36} />
              </button>
              
              <div 
                className="w-full max-w-[1000px] h-[350px] sm:h-[600px] rounded-[2.5rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] border border-white/10 cursor-zoom-in group bg-[#0e0e0e]" 
                onClick={() => setSelectedImg(allEventImages[currentIndex])}
              >
                <img 
                  src={allEventImages[currentIndex]} 
                  alt="Focus Événementiel" 
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <button 
                onClick={nextSlide} 
                className="absolute right-[-20px] lg:right-[-80px] z-10 p-4 bg-[#161616] text-white border border-white/10 rounded-full shadow-2xl hover:text-sunuOrange hover:border-sunuOrange/40 transition-all"
              >
                <ChevronRight size={36} />
              </button>
            </div>
            <p className="text-center mt-8 font-black text-sunuOrange text-xs uppercase tracking-[0.3em]">
              PROJET ÉVÉNEMENTIEL {currentIndex + 1} / {allEventImages.length}
            </p>
          </div>
        </section>

        {/* LIGHTBOX MODAL */}
        {selectedImg && (
          <div 
            className="fixed inset-0 z-[9999] bg-black/96 flex items-center justify-center p-4 transition-all animate-in fade-in zoom-in duration-300 cursor-pointer"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }} 
              className="absolute top-6 right-6 md:top-10 md:right-10 z-[10000] bg-sunuOrange text-white p-4 rounded-full hover:bg-white hover:text-sunuOrange transition-all shadow-2xl"
            >
              <X size={36} strokeWidth={3} />
            </button>

            <img 
              src={selectedImg} 
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain border border-white/10 cursor-default" 
              alt="Zoom Événement" 
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* CTA FINAL DE VISIBILITÉ NORMALE */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase leading-tight">
              Prêt à concrétiser <br/><span className="text-sunuOrange">votre grand projet ?</span>
            </h2>
            <Link to="/contact">
              <Button className="bg-sunuOrange hover:bg-white hover:text-[#0a0a0a] text-white font-black px-8 py-5 h-auto rounded-full text-xl shadow-2xl transition-all transform hover:-translate-y-1">
                Planifier mon événement
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* BLOC D'ISOLATION BLANC POUR LE FOOTER */}
      <div className="bg-white text-gray-800">
        <Footer />
      </div>
    </div>
  );
};

export default SunuLinkEvents;
