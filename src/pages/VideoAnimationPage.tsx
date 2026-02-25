import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Play, MonitorPlay, Film } from "lucide-react";

const VideoAnimationPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  // Génère un identifiant unique basé sur la date pour forcer le rafraîchissement du cache
  const cacheBuster = new Date().getTime();

  // --- Configuration avec Cache-Buster ---
  const videos = [
    {
      id: 1,
      title: "Animation Nataa",
      client: "Nataa",
      thumbnail: `/portfolio/video-anime-nataa-thumb.png?v=${cacheBuster}`,
      videoPath: `/portfolio/video-anime-nataa.mp4?v=${cacheBuster}`,
    }
  ];

  useEffect(() => {
    document.body.style.overflow = selectedVideo ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedVideo]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Header />

      <main className="pt-32 pb-20">
        {/* HERO SECTION */}
        <section className="py-20 px-6 bg-gradient-to-b from-sunuOrange/10 to-[#0a0a0a]">
          <div className="container mx-auto max-w-7xl text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-sunuOrange/20 p-4 rounded-2xl">
                <Film className="text-sunuOrange" size={48} />
              </div>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tighter">
              Motion <span className="text-sunuOrange">Design</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium italic">
              " Donner du mouvement à votre identité visuelle. "
            </p>
          </div>
        </section>

        {/* GRILLE VIDÉO */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {videos.map((vid) => (
                <div 
                  key={vid.id}
                  className="group relative rounded-[2.5rem] overflow-hidden bg-[#111] border border-white/5 transition-all hover:border-sunuOrange/30 shadow-2xl"
                >
                  <div 
                    className="relative aspect-video cursor-pointer overflow-hidden"
                    onClick={() => setSelectedVideo(vid.videoPath)}
                  >
                    <img 
                      src={vid.thumbnail} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                      alt={vid.title}
                      onError={(e) => {
                        console.error("Erreur de chargement miniature");
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/0 transition-colors">
                      <div className="w-24 h-24 bg-sunuOrange text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,102,0,0.5)] transform group-hover:scale-125 transition-all duration-500">
                        <Play size={40} fill="white" className="ml-2" />
                      </div>
                    </div>
                  </div>

                  <div className="p-10 flex justify-between items-center">
                    <div>
                      <span className="text-sunuOrange font-black tracking-[0.3em] text-xs uppercase block mb-2">PROJET VIDÉO</span>
                      <h3 className="text-3xl font-black uppercase tracking-tight">{vid.title}</h3>
                    </div>
                    <div className="text-gray-600 group-hover:text-sunuOrange transition-colors">
                      <MonitorPlay size={32} />
                    </div>
                  </div>
                </div>
              ))}
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
                key={selectedVideo} // Force le rechargement du lecteur si la source change
                className="w-full h-full" 
                controls 
                autoPlay 
                poster={`/portfolio/video-anime-nataa-thumb.png?v=${cacheBuster}`}
                src={selectedVideo}
              >
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>
          </div>
        )}

        {/* CTA */}
        <section className="py-24 px-6 border-t border-white/5 mt-20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl md:text-7xl font-black mb-10 uppercase leading-tight">Envie d'une vidéo <br/><span className="text-sunuOrange tracking-tighter italic">mémorable ?</span></h2>
                <Link to="/contact">
                    <Button className="bg-sunuOrange hover:bg-white hover:text-sunuBlue text-white font-black px-16 py-10 rounded-full text-2xl shadow-2xl transition-all">
                        Démarrer ma vidéo
                    </Button>
                </Link>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VideoAnimationPage;
