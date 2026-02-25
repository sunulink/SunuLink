import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Package, Filter } from "lucide-react";

const DesignPackagingPage = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("Tous");

  // --- Configuration des données (Incluant Agrohouse qui fonctionne) ---
  const categoriesData = {
    "Agrohouse": { count: 5, prefix: "packaging-agrohouse", ext: "jpg" },
    "GIE Bakhyaye": { count: 6, prefix: "packaging-gie-bakhyaye", ext: "png" },
    "GIE Ngelna": { count: 5, prefix: "packaging-gie-ngelna", ext: "png" },
    "Kop": { count: 6, prefix: "packaging-kop", ext: "jpg" },
    "Nyambeaye": { count: 10, prefix: "packaging-nyambeaye", ext: "jpg" },
    "Proma": { count: 5, prefix: "packaging-proma", ext: "jpg" },
    "Rose Lassi": { count: 4, prefix: "packaging-rose-lassi", ext: "jpg" },
    "Serina": { count: 4, prefix: "packaging-serina", ext: "jpg" },
  };

  // Génération dynamique des listes d'images
  const generateImages = (name: string, data: any) => {
    const list = [];
    for (let i = 1; i <= data.count; i++) {
      if (data.skip && data.skip.includes(i)) continue;
      // Les images sont chargées depuis le dossier public/portfolio/
      list.push(`/portfolio/${data.prefix}${i}.${data.ext}`);
    }
    return list;
  };

  const allCategories = Object.keys(categoriesData);
  
  // Gestion du scroll lors du zoom pour éviter que l'arrière-plan ne bouge
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
        <section className="py-16 px-6 bg-gradient-to-br from-sunuOrange/10 to-white">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 uppercase tracking-tighter">
              Design Produit & <span className="text-sunuOrange">Packaging</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Sublimer vos produits par un design d'étiquettes percutant et des packagings qui racontent une histoire.
            </p>
          </div>
        </section>

        {/* FILTRES PAR CLIENTS (Barre collante au scroll) */}
        <section className="py-8 border-y border-gray-100 bg-gray-50/50 sticky top-[80px] z-40 backdrop-blur-md">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="flex items-center gap-3 mb-4 text-sunuBlue/50 font-bold uppercase text-sm tracking-widest">
              <Filter size={16} /> Filtrer par marque
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              <button 
                onClick={() => setActiveCategory("Tous")}
                className={`px-6 py-2 rounded-full font-bold transition-all whitespace-nowrap ${activeCategory === "Tous" ? "bg-sunuOrange text-white shadow-lg" : "bg-white text-gray-400 hover:bg-gray-100"}`}
              >
                Tous les projets
              </button>
              {allCategories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full font-bold transition-all whitespace-nowrap ${activeCategory === cat ? "bg-sunuOrange text-white shadow-lg" : "bg-white text-gray-400 hover:bg-gray-100"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* GRILLE DE PACKAGING */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            {allCategories.map((cat) => {
              // Filtrage logique
              if (activeCategory !== "Tous" && activeCategory !== cat) return null;
              
              const images = generateImages(cat, categoriesData[cat as keyof typeof categoriesData]);
              
              return (
                <div key={cat} className="mb-20 animate-in fade-in slide-in-from-bottom-10 duration-700">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-sunuOrange rounded-xl flex items-center justify-center text-white shadow-inner">
                      <Package size={24} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black uppercase italic">{cat}</h3>
                      <p className="text-sunuOrange font-bold tracking-[0.2em] text-sm">DESIGN SOLUTIONS</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {images.map((img, i) => (
                      <div 
                        key={i} 
                        className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-xl cursor-zoom-in bg-white border-8 border-gray-50 transition-all hover:shadow-2xl hover:-translate-y-2"
                        onClick={() => setSelectedImg(img)}
                      >
                        <img 
                          src={img} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                          alt={`${cat} Packaging`}
                          loading="lazy" 
                        />
                        <div className="absolute inset-0 bg-sunuOrange/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <span className="bg-white text-sunuOrange p-3 rounded-full shadow-lg scale-0 group-hover:scale-100 transition-transform duration-300">
                             <Package size={20} />
                           </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* MODAL DE ZOOM (S'affiche au clic sur une image) */}
        {selectedImg && (
          <div 
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 cursor-pointer backdrop-blur-sm" 
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 bg-sunuOrange text-white p-4 rounded-full shadow-2xl hover:rotate-90 transition-transform">
              <X size={40} strokeWidth={3} />
            </button>
            <img 
              src={selectedImg} 
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain animate-in zoom-in duration-300" 
              alt="Packaging Zoom" 
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* SECTION D'APPEL À L'ACTION */}
        <section className="py-24 px-6 text-center bg-sunuBlue">
            <div className="max-w-4xl mx-auto text-white">
                <h2 className="text-5xl font-black mb-10 uppercase leading-tight">Prêt à habiller <br/><span className="text-sunuOrange text-6xl">votre produit ?</span></h2>
                <Link to="/contact">
                    <Button className="bg-sunuOrange hover:bg-white hover:text-sunuBlue text-white font-black px-14 py-10 rounded-full text-2xl shadow-2xl transition-all border-none">
                        Lancer mon projet Packaging
                    </Button>
                </Link>
            </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DesignPackagingPage;
