import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Palette, Brush, Layout } from "lucide-react";

const BrandingCompletPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // --- Organisation des Images par Catégories ---
  const categories = {
    generale: Array.from({ length: 25 }, (_, i) => `/portfolio/branding-graphique${i + 1}.jpg`),
    agreen: Array.from({ length: 3 }, (_, i) => `/portfolio/branding-graphique-agreen${i + 1}.png`),
    goodCafe: Array.from({ length: 7 }, (_, i) => `/portfolio/branding-graphique-good-cafe${i + 1}.jpg`),
    // Nouvelle collection BDA SERVICE Mai 2026
    bdaService: Array.from({ length: 5 }, (_, i) => `/portfolio/branding-graphique-bda-service${i}.png`),
  };

  // Liste plate pour le Slider Global et ajoute bdaService ici
  const allImages = [...categories.generale, ...categories.agreen, ...categories.goodCafe, ...categories.bdaService];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % allImages.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);

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
        <section className="py-16 px-6 bg-gradient-to-br from-sunuBlue/5 to-white">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 uppercase tracking-tighter">
              BRANDING & <span className="text-sunuOrange text-transparent bg-clip-text bg-gradient-to-r from-sunuOrange to-yellow-500">Univers Graphiques</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Identité, couleurs, typographies et guidelines pour des visuels cohérents et percutants.
            </p>
          </div>
        </section>

        {/* 1. SECTION GALERIE DYNAMIQUE (30s) */}
        <section className="py-12 bg-gray-50 overflow-hidden">
          <h2 className="text-center text-2xl font-black mb-10 uppercase tracking-widest text-gray-400">Flux Créatif</h2>
          <div className="flex gap-4 animate-marquee-branding whitespace-nowrap">
            {[...allImages, ...allImages].map((img, index) => (
              <div 
                key={index} 
                className="w-[350px] h-[250px] rounded-2xl overflow-hidden shadow-md flex-shrink-0 cursor-zoom-in border-2 border-transparent hover:border-sunuOrange transition-all"
                onClick={() => setSelectedImg(img)}
              >
                <img src={img} className="w-full h-full object-cover" alt="Branding" loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        {/* 2. SECTION PAR CATÉGORIES */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">

            {/* --- La NOUVELLE SECTION : BDA SERVICE --- */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <Layout className="text-sunuOrange" size={32} />
                <h3 className="text-3xl font-black uppercase italic">Expertise <span className="text-sunuOrange">BDA SERVICE</span></h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {categories.bdaService.map((img, i) => (
                  <div 
                    key={i} 
                    className="aspect-square rounded-2xl overflow-hidden shadow-lg cursor-zoom-in group border-4 border-white transition-all hover:border-sunuOrange/30" 
                    onClick={() => setSelectedImg(img)}
                  >
                    <img 
                      src={img} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      alt="BDA Service Branding" 
                    />
                  </div>
                ))}
              </div>
            
            {/* Collection A-Green Branding */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <Palette className="text-sunuOrange" size={32} />
                <h3 className="text-3xl font-black uppercase italic">Collection <span className="text-sunuOrange">A-GREEN</span></h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categories.agreen.map((img, i) => (
                  <div key={i} className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl cursor-zoom-in group border-8 border-white" onClick={() => setSelectedImg(img)}>
                    <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="A-Green" />
                  </div>
                ))}
              </div>
            </div>

            {/* Collection Good Café Branding */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <Brush className="text-sunuOrange" size={32} />
                <h3 className="text-3xl font-black uppercase italic">Univers <span className="text-sunuOrange">GOOD CAFÉ</span></h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.goodCafe.map((img, i) => (
                  <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-lg cursor-zoom-in group border-4 border-white" onClick={() => setSelectedImg(img)}>
                    <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Good Cafe" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. SLIDER INTERACTIF (1000x600px) */}
        <section className="py-24 bg-sunuBlue/5">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="flex items-center justify-center gap-4 mb-12">
                <Layout className="text-sunuOrange" size={28} />
                {/* CORRECTION : VISUELLE EN JAUNE/ORANGE */}
                <h2 className="text-4xl font-black uppercase italic text-center">
                  Focus Identité <span className="text-sunuOrange">Visuelle</span>
                </h2>
            </div>
            
            <div className="relative flex items-center justify-center">
              <button onClick={prevSlide} className="absolute left-[-20px] lg:left-[-80px] z-10 p-5 bg-sunuOrange text-white rounded-full shadow-2xl hover:scale-110 transition-all">
                <ChevronLeft size={35} />
              </button>
              
              <div 
                className="w-full max-w-[1000px] h-[600px] rounded-[3.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] border-[15px] border-white cursor-zoom-in group" 
                onClick={() => setSelectedImg(allImages[currentIndex])}
              >
                {/* CORRECTION : OBJECT-COVER POUR REMPLIR LE CADRE BLANC */}
                <img 
                  src={allImages[currentIndex]} 
                  alt="Branding Focus" 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>

              <button onClick={nextSlide} className="absolute right-[-20px] lg:right-[-80px] z-10 p-5 bg-sunuOrange text-white rounded-full shadow-2xl hover:scale-110 transition-all">
                <ChevronRight size={35} />
              </button>
            </div>
            <p className="text-center mt-10 font-bold text-sunuBlue/40 uppercase tracking-[0.3em]">Réalisation {currentIndex + 1} / {allImages.length}</p>
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
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain cursor-default animate-in zoom-in duration-300" 
              alt="Zoom Branding" 
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* CTA FINAL */}
        <section className="py-24 px-6 text-center bg-sunuBlue">
            <div className="max-w-4xl mx-auto text-white">
                <h2 className="text-5xl font-black mb-10 uppercase leading-tight">Donnez une âme <br/><span className="text-sunuOrange text-6xl">à votre marque</span></h2>
                <Link to="/contact">
                    <Button className="bg-sunuOrange hover:bg-white hover:text-sunuBlue text-white font-black px-14 py-10 rounded-full text-2xl shadow-2xl transition-all hover:-translate-y-2 border-none">
                        Démarrer mon Branding
                    </Button>
                </Link>
            </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes marqueeBranding { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee-branding { animation: marqueeBranding 12s linear infinite; }
        .animate-marquee-branding:hover { animation-play-state: paused; }
      `}</style>
    </div>
  );
};

export default BrandingCompletPage;
