import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Play, MonitorPlay, Film, Sparkles, Sliders, Clapperboard, Layers } from "lucide-react";

const SunuLinkProd = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  const cacheBuster = new Date().getTime();

  // Liste de vos réalisations phares
  const videos = [
    {
      id: 1,
      title: "Corporate Showcase & Branding",
      client: "SunuLink",
      thumbnail: `https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800&v=${cacheBuster}`,
      videoPath: `/portfolio/video-corporate.mp4?v=${cacheBuster}`,
      category: "FILM INSTITUTIONNEL"
    },
    {
      id: 2,
      title: "Animation Graphique Nataa",
      client: "Nataa",
      thumbnail: `/portfolio/video-anime-nataa-thumb.png?v=${cacheBuster}`,
      videoPath: `/portfolio/video-anime-nataa.mp4?v=${cacheBuster}`,
      category: "MOTION DESIGN"
    }
  ];

  useEffect(() => {
    document.body.style.overflow = selectedVideo ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedVideo]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-sans">
      <Header />

      <main className="pt-32 pb-20">
        {/* HERO SECTION STYLE AGENCE CINÉMA */}
        <section className="relative py-24 px-6 bg-gradient-to-b from-sunuOrange/15 via-[#0a0a0a]/50 to-[#0a0a0a] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,102,0,0.08)_0%,transparent_70%)]" />
          <div className="container mx-auto max-w-7xl text-center relative z-10">
            <div className="flex justify-center mb-8">
              <div className="bg-sunuOrange/10 border border-sunuOrange/20 p-5 rounded-3xl backdrop-blur-md shadow-[0_0_50px_rgba(255,102,0,0.1)]">
                <Clapperboard className="text-sunuOrange" size={52} />
              </div>
            </div>
            <h1 className="text-6xl md:text-9xl font-black mb-6 uppercase tracking-tighter leading-none">
              SUNULINK <span className="text-sunuOrange font-light italic">PROD</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-medium tracking-wide">
              Donner une dimension cinématographique et mémorable à votre univers visuel.
            </p>
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-sunuOrange to-transparent mx-auto mt-8" />
          </div>
        </section>

        {/* GRILLE VIDÉO INTERACTIVE & IMMERSIVE */}
        <section className="py-16 px-6 relative">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-2 h-8 bg-sunuOrange rounded-full" />
              <h2 className="text-3xl font-black uppercase tracking-tight">Réalisations Récentes</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {videos.map((vid) => (
                <div 
                  key={vid.id}
                  className="group relative rounded-[2.5rem] overflow-hidden bg-[#121212] border border-white/5 transition-all hover:border-sunuOrange/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                >
                  <div 
                    className="relative aspect-video cursor-pointer overflow-hidden"
                    onClick={() => setSelectedVideo(vid.videoPath)}
                  >
                    <img 
                      src={vid.thumbnail} 
                      className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                      alt={vid.title}
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80&w=800";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity group-hover:opacity-40" />
                    
                    {/* BOUTON LECTURE PREMIUM */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-sunuOrange text-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,102,0,0.4)] transform group-hover:scale-110 transition-all duration-500">
                        <Play size={32} fill="white" className="ml-1.5" />
                      </div>
                    </div>
                  </div>

                  {/* DESCRIPTIF */}
                  <div className="p-8 md:p-10 flex justify-between items-center bg-[#161616]/90 backdrop-blur-md">
                    <div>
                      <span className="text-sunuOrange font-black tracking-[0.25em] text-xs uppercase block mb-2">{vid.category}</span>
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white group-hover:text-sunuOrange transition-colors">{vid.title}</h3>
                    </div>
                    <div className="text-gray-500 group-hover:text-sunuOrange transition-colors ml-4 flex-shrink-0">
                      <MonitorPlay size={36} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION VALEURS / CAPACITÉS */}
        <section className="py-20 px-6 bg-[#111]/40 border-y border-white/5">
          <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#121212] border border-white/5 hover:border-sunuOrange/20 transition-all">
              <Sparkles className="text-sunuOrange mb-4" size={36} />
              <h3 className="text-xl font-bold uppercase mb-2">Direction Artistique</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Conception d'identités visuelles fortes et scénarisations adaptées à l'ADN de votre marque.</p>
            </div>
            <div className="p-8 rounded-3xl bg-[#121212] border border-white/5 hover:border-sunuOrange/20 transition-all">
              <Film className="text-sunuOrange mb-4" size={36} />
              <h3 className="text-xl font-bold uppercase mb-2">Tournage Très Haute Définition</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Prises de vue au sol et aériennes via du matériel de captation de niveau cinéma.</p>
            </div>
            <div className="p-8 rounded-3xl bg-[#121212] border border-white/5 hover:border-sunuOrange/20 transition-all">
              <Sliders className="text-sunuOrange mb-4" size={36} />
              <h3 className="text-xl font-bold uppercase mb-2">Post-Production Avancée</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Montage rythmé, étalonnage colorimétrique professionnel et sound-design immersif.</p>
            </div>
          </div>
        </section>

        {/* MODAL LECTEUR AVEC POSTER DYNAMIQUE */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 z-[9999] bg-black/98 flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedVideo(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-sunuOrange transition-all hover:rotate-90">
              <X size={50} strokeWidth={3} />
            </button>
            
            <div className="w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(255,102,0,0.2)] bg-black" onClick={(e) => e.stopPropagation()}>
              <video 
                key={selectedVideo}
                className="w-full h-full" 
                controls 
                autoPlay 
                src={selectedVideo}
              >
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>
          </div>
        )}

        {/* CTA FINAL DE PRODUCTION */}
        <section className="py-24 px-6 mt-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-10 uppercase leading-tight">
              Créons une vidéo <br/><span className="text-sunuOrange tracking-tighter italic">qui marque les esprits.</span>
            </h2>
            <Link to="/contact">
              <Button className="bg-sunuOrange hover:bg-white hover:text-[#0a0a0a] text-white font-black px-16 py-10 rounded-full text-2xl shadow-[0_20px_50px_rgba(255,102,0,0.3)] transition-all transform hover:-translate-y-1">
                Lancer ma production
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SunuLinkProd;
