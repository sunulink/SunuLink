import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Film, Play, Youtube } from "lucide-react";

type YouTubeVideo = {
  title: string;
  client?: string;
  url: string;
};

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@sunulinkconsulting";

/**
 * Ajoute ici les liens des autres vidéos YouTube (pas les fichiers MP4 locaux).
 * Le lecteur les intégrera à la demande, uniquement après le clic de l'utilisateur.
 */
const youtubeVideos: YouTubeVideo[] = [
  // Exemple de structure à compléter avec les liens vidéo transmis :
  // { title: "Titre de la réalisation", client: "Client", url: "https://www.youtube.com/watch?v=VIDEO_ID" },
];

function getYouTubeId(url: string): string | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      return parsed.pathname.split("/").filter(Boolean)[0] ?? null;
    }

    if (host.endsWith("youtube.com")) {
      const videoId = parsed.searchParams.get("v");
      if (videoId) return videoId;

      const segments = parsed.pathname.split("/").filter(Boolean);
      const typeIndex = segments.findIndex((segment) =>
        ["embed", "shorts", "live"].includes(segment),
      );
      if (typeIndex >= 0) return segments[typeIndex + 1] ?? null;
    }
  } catch {
    return null;
  }

  return null;
}

const VideoAnimationPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);

  useEffect(() => {
    if (!selectedVideo) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedVideo(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedVideo]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-gray-900">
      <Header />

      <main className="bg-[#0a0a0a] pt-24 pb-16 text-white sm:pt-28">
        {/* HERO */}
        <section className="relative isolate overflow-hidden px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
          <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-sunuOrange/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 -z-10 h-72 w-72 rounded-full bg-sunuBlue/20 blur-3xl" />

          <div className="mx-auto max-w-7xl text-center">
            <div className="mb-6 inline-flex rounded-2xl border border-sunuOrange/30 bg-sunuOrange/10 p-3 sm:p-4">
              <Film className="h-9 w-9 text-sunuOrange sm:h-12 sm:w-12" aria-hidden="true" />
            </div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-sunuBlue sm:text-sm">
              SUNULINK CONSULTING · CRÉATION AUDIOVISUELLE
            </p>
            <h1 className="mb-5 text-4xl font-black uppercase leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Motion <span className="text-sunuOrange">Design</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg lg:text-xl">
              Donner du mouvement à votre identité visuelle et transformer vos idées en expériences vidéo mémorables.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href="#video-principale"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sunuOrange px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-sunuOrange/20 transition-colors hover:bg-white hover:text-sunuBlue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunuOrange focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] sm:min-h-14 sm:px-8 sm:text-base"
              >
                <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                Voir la réalisation
              </a>
              <a
                href={`${YOUTUBE_CHANNEL_URL}/videos`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-sunuBlue bg-sunuBlue/10 px-6 py-3 text-sm font-extrabold text-white transition-colors hover:bg-sunuBlue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunuBlue focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] sm:min-h-14 sm:px-8 sm:text-base"
              >
                <Youtube className="h-5 w-5" aria-hidden="true" />
                Notre chaîne YouTube
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* VIDÉO PRINCIPALE — conteneur plus compact, encadré et responsive */}
        <section id="video-principale" className="scroll-mt-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-[1040px] overflow-hidden rounded-2xl border border-sunuOrange/35 bg-black shadow-[0_24px_70px_rgba(0,0,0,0.45)] sm:rounded-3xl">
            <div className="h-[260px] w-full bg-black sm:h-[360px] lg:h-[460px]">
              <video
                className="h-full w-full object-contain"
                controls
                playsInline
                preload="metadata"
                poster="/portfolio/video-anime-nataa-thumb.png"
                aria-label="Animation vidéo Nataa"
              >
                <source src="/portfolio/video-anime-nataa.mp4" type="video/mp4" />
                Votre navigateur ne prend pas en charge la lecture vidéo.
              </video>
            </div>
          </div>
          <div className="mx-auto flex max-w-[1040px] flex-col gap-3 px-5 py-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.22em] text-sunuOrange">
                Réalisation à la une
              </p>
              <h2 className="text-xl font-extrabold sm:text-2xl">Animation Nataa</h2>
              <p className="mt-1 text-sm text-gray-400">Production vidéo · Nataa</p>
            </div>
            <a
              href={`${YOUTUBE_CHANNEL_URL}/videos`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm font-bold text-sunuBlue transition-colors hover:text-sunuOrange"
            >
              Plus de vidéos sur YouTube <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* AUTRES VIDÉOS — chargées depuis YouTube, pas depuis le serveur du site */}
        <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-sunuBlue">
                  Nos autres réalisations
                </p>
                <h2 className="text-3xl font-black uppercase sm:text-4xl">
                  Vidéos <span className="text-sunuOrange">& animations</span>
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
                Retrouvez nos autres projets audiovisuels sur la chaîne SunuLink Consulting.
              </p>
            </div>

            {youtubeVideos.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {youtubeVideos.map((video) => {
                  const youtubeId = getYouTubeId(video.url);
                  if (!youtubeId) return null;

                  return (
                    <button
                      key={video.url}
                      type="button"
                      onClick={() => setSelectedVideo(video)}
                      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left transition-colors hover:border-sunuOrange/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunuOrange"
                      aria-label={`Lire la vidéo ${video.title}`}
                    >
                      <div className="relative aspect-video overflow-hidden bg-black">
                        <img
                          src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:opacity-90"
                        />
                        <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/5">
                          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sunuOrange text-white shadow-lg transition group-hover:scale-110">
                            <Play className="ml-1 h-6 w-6 fill-current" aria-hidden="true" />
                          </span>
                        </span>
                      </div>
                      <div className="p-4 sm:p-5">
                        {video.client && (
                          <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-sunuBlue">
                            {video.client}
                          </p>
                        )}
                        <h3 className="text-lg font-extrabold leading-snug group-hover:text-sunuOrange">
                          {video.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">Lire sur le lecteur intégré</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-sunuBlue/10 to-sunuOrange/5 px-5 py-8 text-center sm:px-10 sm:py-12">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-sunuBlue/40 bg-sunuBlue/10">
                  <Youtube className="h-7 w-7 text-sunuBlue" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-extrabold sm:text-2xl">Découvrez toutes nos vidéos</h3>
                <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
                  Les autres réalisations seront affichées ici depuis YouTube, sans charger de gros fichiers vidéo sur le site.
                </p>
                <a
                  href={`${YOUTUBE_CHANNEL_URL}/videos`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-sunuBlue px-6 py-3 text-sm font-extrabold text-white transition-colors hover:bg-sunuOrange"
                >
                  Explorer la chaîne <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 px-5 py-16 text-center sm:px-8 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-sunuBlue">
              Parlons de votre projet
            </p>
            <h2 className="mb-8 text-3xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
              Envie d’une vidéo <span className="italic text-sunuOrange">mémorable ?</span>
            </h2>
            <Link to="/contact">
              <Button className="min-h-12 rounded-full bg-sunuOrange px-8 py-6 text-base font-extrabold text-white shadow-lg shadow-sunuOrange/20 transition-colors hover:bg-white hover:text-sunuBlue sm:px-10 sm:py-7 sm:text-lg">
                Démarrer ma vidéo <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lecture des autres vidéos : l'iframe n'est créée qu'après le clic */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Lecture de ${selectedVideo.title}`}
          onClick={() => setSelectedVideo(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedVideo(null)}
            className="absolute right-3 top-3 z-10 rounded-full border border-white/20 bg-black/70 px-4 py-2 text-sm font-bold text-white transition hover:border-sunuOrange hover:text-sunuOrange sm:right-6 sm:top-6"
            aria-label="Fermer la vidéo"
          >
            Fermer <span aria-hidden="true">×</span>
          </button>
          <div
            className="w-full max-w-6xl overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl sm:rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${getYouTubeId(selectedVideo.url)}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoAnimationPage;
