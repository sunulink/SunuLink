import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Camera,
  Check,
  Image as ImageIcon,
  X,
} from "lucide-react";

type GalleryCategory = "Ramadan" | "Lifestyle & Corporate";
type GalleryFilter = "Tout" | GalleryCategory;

type GalleryItem = {
  id: number;
  src: string;
  title: string;
  category: GalleryCategory;
};

const ramadanCollection: GalleryItem[] = Array.from({ length: 8 }, (_, index) => ({
  id: index,
  src: `/portfolio/image-photographie${index + 1}.jpg`,
  title: `Visuel Ramadan ${String(index + 1).padStart(2, "0")}`,
  category: "Ramadan",
}));

const extendedGallery: GalleryItem[] = Array.from({ length: 17 }, (_, index) => ({
  id: index + 8,
  src: `/portfolio/image-photographie${index + 9}.jpg`,
  title: `Visuel ${String(index + 9).padStart(2, "0")}`,
  category: "Lifestyle & Corporate",
}));

const galleryItems: GalleryItem[] = [...ramadanCollection, ...extendedGallery];
const filters: GalleryFilter[] = ["Tout", "Ramadan", "Lifestyle & Corporate"];

const PhotoShootingPage = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("Tout");
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);

  const visibleImages = useMemo(
    () =>
      activeFilter === "Tout"
        ? galleryItems
        : galleryItems.filter((image) => image.category === activeFilter),
    [activeFilter],
  );

  const selectedImage =
    selectedImageId === null
      ? null
      : galleryItems.find((image) => image.id === selectedImageId) ?? null;

  const showPrevious = () => {
    setSelectedImageId((current) => {
      if (current === null) return null;
      return (current - 1 + galleryItems.length) % galleryItems.length;
    });
  };

  const showNext = () => {
    setSelectedImageId((current) => {
      if (current === null) return null;
      return (current + 1) % galleryItems.length;
    });
  };

  useEffect(() => {
    if (selectedImageId === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImageId(null);
      if (event.key === "ArrowLeft") {
        setSelectedImageId((current) =>
          current === null ? null : (current - 1 + galleryItems.length) % galleryItems.length,
        );
      }
      if (event.key === "ArrowRight") {
        setSelectedImageId((current) =>
          current === null ? null : (current + 1) % galleryItems.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageId]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Header />

      <main>
        {/* HERO — une entrée visuelle forte, sans répéter la galerie */}
        <section className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-slate-950 pt-28 md:min-h-[680px]">
          <img
            src="/portfolio/image-photographie1.jpg"
            alt="Exemple de réalisation photographique SunuLink"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/20" />
          <div className="container mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur-sm">
                <Camera size={16} className="text-sunuOrange" />
                SunuLink Consulting · Production visuelle
              </p>
              <h1 className="text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
                Images &amp; <span className="text-sunuOrange">Photographies</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                Des images pensées pour raconter une histoire, valoriser une marque et donner vie à vos idées.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#galerie"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sunuOrange px-7 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-500"
                >
                  Découvrir la galerie <ArrowDown size={18} />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/50 px-7 py-3 font-bold text-white transition hover:bg-white hover:text-slate-900"
                >
                  Parler de mon projet
                </Link>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20 pt-6 text-sm font-medium text-white/75">
                <span className="flex items-center gap-2"><Check size={16} className="text-sunuOrange" /> 25 visuels</span>
                <span className="flex items-center gap-2"><Check size={16} className="text-sunuOrange" /> 2 collections</span>
                <span className="flex items-center gap-2"><Check size={16} className="text-sunuOrange" /> Ramadan, Lifestyle &amp; Corporate</span>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="px-6 py-16 md:py-20">
          <div className="container mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-sunuBlue">Notre regard</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                Chaque image a <span className="text-sunuOrange">son histoire.</span>
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-7 text-slate-600 md:justify-self-end md:text-lg">
              Parcourez nos réalisations et explorez les univers visuels présentés dans cette galerie.
              Sélectionnez une image pour l’afficher en grand format.
            </p>
          </div>
        </section>

        {/* GALERIE FILTRABLE — un seul endroit pour parcourir les 25 images */}
        <section id="galerie" className="scroll-mt-24 bg-slate-50 px-6 py-16 md:py-24">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-3 text-sunuBlue">
                  <ImageIcon size={24} />
                  <span className="text-sm font-extrabold uppercase tracking-[0.2em]">Portfolio photographique</span>
                </div>
                <h2 className="text-3xl font-black sm:text-4xl md:text-5xl">La galerie <span className="text-sunuBlue">visuelle</span></h2>
                <p className="mt-3 text-slate-600">{visibleImages.length} visuels à explorer</p>
              </div>

              <div className="flex flex-wrap gap-2" aria-label="Filtrer les photographies">
                {filters.map((filter) => {
                  const isActive = activeFilter === filter;
                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setActiveFilter(filter)}
                      aria-pressed={isActive}
                      className={`rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                        isActive
                          ? "border-sunuBlue bg-sunuBlue text-white shadow-md"
                          : "border-slate-200 bg-white text-slate-600 hover:border-sunuBlue hover:text-sunuBlue"
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visibleImages.map((image) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setSelectedImageId(image.id)}
                  aria-label={`Agrandir ${image.title}, catégorie ${image.category}`}
                  className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-200 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-sunuOrange"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/0 to-transparent opacity-80 transition group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-white">
                    <div>
                      <span className="mb-2 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-bold backdrop-blur-sm">
                        {image.category}
                      </span>
                      <p className="font-bold">{image.title}</p>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sunuOrange text-white transition group-hover:scale-110">
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative isolate overflow-hidden bg-sunuBlue px-6 py-20 text-white md:py-28">
          <div className="absolute -right-20 -top-24 -z-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 -z-10 h-80 w-80 rounded-full bg-sunuOrange/20 blur-3xl" />
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-white/70">Une idée à mettre en images ?</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl md:text-6xl">
              Donnons vie à votre <span className="text-sunuOrange">prochain projet.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
              Parlons de votre besoin et construisons ensemble une proposition adaptée à votre vision.
            </p>
            <Link to="/contact" className="mt-8 inline-block">
              <Button className="h-auto rounded-full border-0 bg-sunuOrange px-8 py-6 text-base font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-sunuBlue">
                Démarrer un projet <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      {/* LIGHTBOX — fermeture Escape, navigation clavier et boutons accessibles */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Aperçu de ${selectedImage.title}`}
          onClick={() => setSelectedImageId(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImageId(null)}
            aria-label="Fermer l’aperçu"
            className="absolute right-4 top-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-sunuOrange text-white transition hover:rotate-90 hover:bg-white hover:text-sunuBlue md:right-8 md:top-8"
          >
            <X size={25} />
          </button>

          <button
            type="button"
            onClick={(event) => { event.stopPropagation(); showPrevious(); }}
            aria-label="Photo précédente"
            className="absolute left-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-sunuOrange md:left-8 md:h-14 md:w-14"
          >
            <ArrowLeft size={24} />
          </button>

          <div className="flex max-h-full max-w-6xl flex-col items-center" onClick={(event) => event.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[78vh] max-w-full rounded-xl object-contain shadow-2xl"
            />
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-center text-white">
              <span className="font-bold">{selectedImage.title}</span>
              <span className="rounded-full bg-white/15 px-3 py-1 text-sm text-white/80">{selectedImage.category}</span>
              <span className="text-sm text-white/60">{selectedImage.id + 1} / {galleryItems.length}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => { event.stopPropagation(); showNext(); }}
            aria-label="Photo suivante"
            className="absolute right-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-sunuOrange md:right-8 md:h-14 md:w-14"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoShootingPage;
