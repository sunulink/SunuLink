import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Palette, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const LogoIdentitePage = () => {
  // 1. 3 images de présentation du haut
  const heroProjects = [
    { id: 1, title: "Logo Design Pro", image: "/portfolio/1.png" },
    { id: 2, title: "Charte Graphique Premium", image: "/portfolio/2.png" },
    { id: 3, title: "Identité Visuelle Corporate", image: "/portfolio/3.png" },
  ];

  // 2. Liste de logos pour le défilé (fonds blancs)
  const logoList = [
    "/portfolio/logo-sunulink.png", "/portfolio/logo-soso.png", 
    "/portfolio/logo-sarataa.png", "/portfolio/logo-welli.png",
    "/portfolio/logo-zami.png", "/portfolio/logo-telemarck.png",
    "/portfolio/logo-cafe.png", "/portfolio/logo-bokk-dem.png",
    "/portfolio/logo-faddeco.png", "/portfolio/logo-gainde.png"
  ];

  // 3. Galerie fixe (le reste des réalisations)
  const galleryProjects = [
    { id: 10, title: "SunuLink", image: "/portfolio/logo-sunulink.png" },
    { id: 11, title: "Nataa Body Care", image: "/portfolio/logo-nataa.png" },
    { id: 12, title: "SCI La Promobiliere", image: "/portfolio/logo-sci-la-promobiliere.png" },
    { id: 13, title: "Linguere Oil", image: "/portfolio/logo-linguere_oil.png" },
    { id: 14, title: "Bazar Service", image: "/portfolio/logo-bazar-service.png" },
    { id: 15, title: "Sya Masseuse", image: "/portfolio/logo-sya-masseuse-third.png" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          
          <Link to="/realisations" className="inline-flex items-center text-sunuOrange hover:underline mb-8 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour
          </Link>

          <h1 className="text-4xl font-black text-gray-900 mb-12 flex items-center gap-4">
            <Palette className="text-sunuOrange w-10 h-10" /> Logo & Identité visuelle
          </h1>

          {/* SECTION 1 : Présentation (3 images avec grands arrondis) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {heroProjects.map((project) => (
              <div key={project.id} className="space-y-4">
                <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-sm border border-gray-100">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 px-2">{project.title}</h3>
              </div>
            ))}
          </div>

          {/* SECTION 2 : Défilé des logos (Arrière-plan blanc) */}
          <div className="mb-20 py-10 bg-gray-50/50 rounded-[3rem] overflow-hidden">
            <h2 className="text-2xl font-bold text-center mb-10 text-gray-400 uppercase tracking-widest">Nos Logos</h2>
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {[...logoList, ...logoList].map((logo, index) => (
                <div key={index} className="h-32 w-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-sm border border-gray-100 flex-shrink-0">
                  <img src={logo} className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 3 : Galerie Fixe */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {galleryProjects.map((project) => (
              <div key={project.id} className="aspect-square bg-gray-50 rounded-[2rem] p-8 border border-gray-100 flex items-center justify-center hover:shadow-xl transition-all duration-300">
                <img src={project.image} alt={project.title} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>

        </div>
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
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoIdentitePage;
