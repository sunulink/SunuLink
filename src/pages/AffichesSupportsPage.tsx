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

  // Liste des 76 images
  const allPrints = Array.from({ length: 76 }, (_, i) => `/portfolio/affiche-support${i + 1}.jpg`);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % allPrints.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + allPrints.length) % allPrints.length);

  // Fermer le zoom avec la touche Echap
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

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
          </div>
        </section>

        {/* GALERIE DYNAMIQUE - ANIMATION 5s */}
        <section className="py-12 bg-gray-50 overflow-hidden">
          <h2 className="text-center text-3xl font-black mb-12 uppercase text-gray-800">
            Galerie <span className="text-sunuOrange">réalisations</span>
          </h2>
          <div className="flex gap-6 animate-marquee-fast whitespace-nowrap">
            {[...allPrints.slice(0, 20), ...allPrints.slice(0, 20)].map((img, index) => (
              <div 
                key={index} 
                className="w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0 cursor-zoom-in"
                onClick={() => setSelectedImg(img)}
              >
                <img src={img} className="w-full h-full object-cover" alt="Support" />
              </div>
            ))}
          </div>
        </section>

        {/* SLIDER INTERACTIF (850x650) */}
        <section className="py-24 bg-white">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="relative flex items-center justify-center">
              {/* Bouton Gauche */}
              <button onClick={prevSlide} className="absolute left-0 md:left-[-40px] z-10 p-4 bg-sunuOrange text-white rounded-full shadow-xl hover:scale-110 transition-all">
                <ChevronLeft size={32} />
              </button>
              
              {/* Conteneur Image 850x650 */}
              <div 
                className="w-full max-w-[850px] h-[650px] rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-white cursor-zoom-in group relative"
                onClick={() => setSelectedImg(allPrints[currentIndex])}
              >
                <img 
                  src={allPrints[currentIndex]} 
                  alt="Focus" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="text-white font-bold bg-sunuOrange/80 px-4 py-2 rounded-lg">Cliquer pour zoomer</span>
                </div>
              </div>

              {/* Bouton Droit */}
              <button onClick={nextSlide} className="absolute right-0 md:right-[-40px] z-10 p-4 bg-sunuOrange text-white rounded-full shadow-xl hover:scale-110 transition-all">
                <ChevronRight size={32} />
              </button>
            </div>
            <p className="text-center mt-6 font-bold text-gray-500 italic">Support {currentIndex + 1} / {allPrints.length}</p>
          </div>
        </section>

        {/* LIGHTBOX / MODAL DE ZOOM RÉPARÉE */}
        {selectedImg && (
          <div 
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center cursor-pointer"
            onClick={() => setSelectedImg(null)} // Ferme en cliquant sur le fond
          >
            {/* Bouton Fermer (X) */}
            <button 
              className="absolute top-10 right-10 text-white bg-sunuOrange p-3 rounded-full hover:bg-white hover:text-sunuOrange transition-all"
              onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
            >
              <X size={40} strokeWidth={3} />
            </button>

            {/* Image Zoomée */}
            <img 
              src={selectedImg} 
              className="max-w-[90%] max-h-[90%] md:max-w-[80%] md:max-h-[85%] object-contain rounded-lg shadow-2xl animate-in zoom-in duration-300" 
              alt="Zoom réalisation"
              onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique sur l'image elle-même
            />
          </div>
        )}

        {/* SECTION CONTACT */}
        <section className="py-20 px-6 text-center bg-sunuBlue">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl font-black mb-8 uppercase">Prêt pour votre prochain support ?</h2>
            <Link to="/contact">
              <Button className="bg-sunuOrange hover:bg-white hover:text-sunuBlue text-white font-bold px-10 py-7 rounded-full text-xl transition-all">
                Démarrer un projet
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes marquee { 
          0% { transform: translateX(0); } 
          100% { transform: translateX(-50%); } 
        }
        /* Animation réglée sur 5 secondes */
        .animate-marquee-fast { 
          display: flex;
          width: max-content;
          animation: marquee 5s linear infinite; 
        }
        .animate-marquee-fast:hover { 
          animation-play-state: paused; 
        }
      `}</style>
    </div>
  );
};

export default AffichesSupportsPage;
