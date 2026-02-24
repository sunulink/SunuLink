import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Camera, Users, Image as ImageIcon } from "lucide-react";

const PhotoShootingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // --- Organisation des Images ---
  // On génère la liste de image-photographie1.jpg à image-photographie8.jpg
  // Note : Assurez-vous que l'extension correspond bien à vos fichiers (ici .jpg)
  const ramadanCollection = Array.from({ length: 8 }, (_, i) => `/portfolio/image-photographie${i + 1}.jpg`);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % ramadanCollection.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + ramadanCollection.length) % ramadanCollection.length);

  // Gestion du scroll lors du zoom
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
        <section className="py-16 px-6 bg-gradient-to-br from-sunuOrange/5 to-white">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 uppercase tracking-tighter">
              Images & <span className="text-sunuOrange text-transparent bg-clip-text bg-gradient-to-r from-sunuOrange to-yellow-600">Photographies</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Shooting produits, photos corporate et mises en scène professionnelles pour sublimer votre image.
            </p>
          </div>
        </section>

        {/* 1. FLUX VISUEL (Marquee) */}
        <section className="py-12 bg-gray-50 overflow-hidden">
          <div className="flex gap-4 animate-marquee-photo whitespace-nowrap">
            {[...ramadanCollection, ...ramadanCollection].map((img, index) => (
              <div 
                key={index} 
                className="w-[400px] h-[300px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0 cursor-zoom-in border-2 border-transparent hover:border-sunuOrange transition-all"
                onClick={() => setSelectedImg(img)}
              >
                <img src={img} className="w-full h-full object-cover" alt="Shooting Photo" loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        {/* 2. FOCUS COLLECTION RAMADAN */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
              <div className="flex items-center gap-4">
                <Camera className="text-sunuOrange" size={40} />
                <div>
                  <h3 className="text-4xl font-black uppercase italic leading-none">
                    Collection <span className="text-sunuOrange">Ramadan</span>
                  </h3>
                  <p className="text-gray-500 font-bold mt-2 flex items-center gap-2">
                    <Users size={18} /> Sunulink Consulting — Avec Imam Lilou
                  </p>
                </div>
              </div>
              <div className="hidden md:block">
                 <span className="bg-sunuBlue text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest">
                   8 Photos Premium
                 </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ramadanCollection.map((img, i) => (
                <div 
                  key={i} 
                  className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl cursor-zoom-in bg-gray-200 border-4 border-white transition-transform duration-500 hover:-translate-y-2"
                  onClick={() => setSelectedImg(img)}
                >
                  <img 
                    src={img} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={`Ramadan Collection ${i + 1}`} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white font-bold italic">Photo #0{i + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SLIDER INTERACTIF GRAND FORMAT */}
        <section className="py-24 bg-sunuBlue/5">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="flex items-center justify-center gap-4 mb-12">
                <ImageIcon className="text-sunuOrange" size={28} />
                <h2 className="text-4xl font-black uppercase italic text-center">
                  Focus <span className="text-sunuOrange">Mise en scène</span>
                </h2>
            </div>
            
            <div className="relative flex items-center justify-center">
              <button onClick={prevSlide} className="absolute left-[-20px] lg:left-[-80px] z-10 p-5 bg-sunuOrange text-white rounded-full shadow-2xl hover:scale-110 transition-all">
                <ChevronLeft size={35} />
              </button>
              
              <div 
                className="w-full max-w-[1000px] h-[650px] rounded-[3.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] border-[15px] border-white cursor-zoom-in group relative" 
                onClick={() => setSelectedImg(ramadanCollection[currentIndex])}
              >
                <img 
                  src={ramadanCollection[currentIndex]} 
                  alt="Shooting Focus" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-8 py-4 rounded-2xl">
                   <p className="text-sunuBlue font-black uppercase text-sm">Personnage</p>
                   <p className="text-sunuOrange font-bold text-xl italic">Imam Lilou</p>
                </div>
              </div>

              <button onClick={nextSlide} className="absolute right-[-20px] lg:right-[-80px] z-10 p-5 bg-sunuOrange text-white rounded-full shadow-2xl hover:scale-110 transition-all">
                <ChevronRight size={35} />
              </button>
            </div>
            <p className="text-center mt-10 font-bold text-sunuBlue/40 uppercase tracking-[0.3em]">
              Cliché {currentIndex + 1} / {ramadanCollection.length}
            </p>
          </div>
        </section>

        {/* MODAL ZOOM */}
        {selectedImg && (
          <div 
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 cursor-pointer backdrop-blur-sm"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }} 
              className="absolute top-6 right-6 md:top-10 md:right-10 z-[10000] bg-sunuOrange text-white p-4 rounded-full hover:bg-white hover:text-sunuOrange transition-all shadow-2xl"
            >
              <X size={45} strokeWidth={3} />
            </button>

            <img 
              src={selectedImg} 
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain animate-in zoom-in duration-300" 
              alt="Zoom Photographie" 
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* CTA FINAL */}
        <section className="py-24 px-6 text-center bg-sunuBlue">
            <div className="max-w-4xl mx-auto text-white">
                <h2 className="text-5xl font-black mb-10 uppercase leading-tight">
                  Besoin d'un <br/><span className="text-sunuOrange text-6xl">Shooting Pro ?</span>
                </h2>
                <Link to="/contact">
                    <Button className="bg-sunuOrange hover:bg-white hover:text-sunuBlue text-white font-black px-14 py-10 rounded-full text-2xl shadow-2xl transition-all hover:-translate-y-2 border-none">
                        Réserver ma séance
                    </Button>
                </Link>
            </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes marqueePhoto { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee-photo { animation: marqueePhoto 40s linear infinite; }
        .animate-marquee-photo:hover { animation-play-state: paused; }
      `}</style>
    </div>
  );
};

export default PhotoShootingPage;
