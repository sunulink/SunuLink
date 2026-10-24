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
        {/* HERO — fond graphique de marque et montage photo */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-slate-50 to-sky-50 pt-28">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-20 -z-10 h-80 w-80 rounded-full bg-sunuBlue/10 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 left-[-5rem] -z-10 h-72 w-72 rounded-full bg-sunuOrange/15 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-[42%] bg-[linear-gradient(135deg,transparent_0%,rgba(17,120,183,0.035)_50%,rgba(245,156,39,0.07)_100%)]" />

          <div className="container mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-16 pt-12 md:pb-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:pt-16">
            <div className="max-w-2xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-sunuBlue/20 bg-white/90 px-4 py-2 text-sm font-extrabold tracking-wide text-sunuBlue shadow-sm">
                <Camera size={16} className="text-sunuOrange" />
                SunuLink Consulting <span className="text-slate-300">/</span> Production visuelle
              </p>
              <h1 className="text-4xl font-black uppercase leading-[1.04] tracking-tight text-slate-950 sm:text-6xl md:text-7xl">
                Images &amp;
                <span className="mt-2 block bg-gradient-to-r from-sunuBlue via-sunuBlue to-sunuOrange bg-clip-text text-transparent">
                  Photographies
                </span>
              </h1>
              <div className="mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-sunuBlue to-sunuOrange" />
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
                Des images pensées pour raconter une histoire, valoriser une marque et donner vie à vos idées.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#galerie"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border-2 border-sunuBlue bg-sunuBlue px-7 py-3 font-extrabold text-white shadow-lg shadow-sunuBlue/20 transition duration-300 hover:-translate-y-0.5 hover:border-sunuOrange hover:bg-sunuOrange hover:shadow-sunuOrange/25 focus:outline-none focus-visible:ring-4 focus-visible:ring-sunuOrange/40"
                >
                  Découvrir la galerie <ArrowDown size={18} />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border-2 border-sunuOrange bg-sunuOrange px-7 py-3 font-extrabold text-white shadow-lg shadow-sunuOrange/20 transition duration-300 hover:-translate-y-0.5 hover:border-sunuBlue hover:bg-sunuBlue hover:shadow-sunuBlue/25 focus:outline-none focus-visible:ring-4 focus-visible:ring-sunuBlue/30"
                >
                  Parler de mon projet <ArrowRight size={18} />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 border-t border-slate-200 pt-6 text-sm font-semibold text-slate-600">
                <span className="inline-flex items-center gap-2 rounded-full border border-sunuBlue/15 bg-white px-3.5 py-2 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-sunuBlue" /> 25 visuels
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-sunuOrange/25 bg-white px-3.5 py-2 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-sunuOrange" /> 2 collections
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 shadow-sm">
                  <Check size={15} className="text-sunuBlue" /> Ramadan, Lifestyle &amp; Corporate
                </span>
              </div>
            </div>

            {/* Montage de réalisations : les photos sont présentées dans des cadres, pas en arrière-plan du texte */}
            <div className="relative mx-auto w-full max-w-[610px] pb-5 pt-2 sm:pb-8">
              <div aria-hidden="true" className="absolute inset-x-8 top-8 bottom-0 rounded-[2rem] border-2 border-sunuOrange/50 rotate-3" />
              <div className="relative grid grid-cols-12 grid-rows-[150px_105px_145px] gap-3 sm:grid-rows-[200px_130px_175px] sm:gap-4">
                <div className="col-span-7 row-span-2 overflow-hidden rounded-2xl border-4 border-white bg-slate-100 shadow-xl shadow-slate-900/10 ring-1 ring-sunuBlue/20">
                  <img src="/portfolio/image-photographie3.jpg" alt="Réalisation photographique SunuLink" className="h-full w-full object-cover" loading="eager" />
                </div>
                <div className="col-span-5 overflow-hidden rounded-2xl border-4 border-white bg-slate-100 shadow-lg ring-1 ring-sunuOrange/30">
                  <img src="/portfolio/image-photographie10.jpg" alt="Shooting lifestyle et corporate" className="h-full w-full object-cover" loading="eager" />
                </div>
                <div className="col-span-5 overflow-hidden rounded-2xl border-4 border-white bg-slate-100 shadow-lg ring-1 ring-sunuBlue/20">
                  <img src="/portfolio/image-photographie14.jpg" alt="Photographie de la galerie SunuLink" className="h-full w-full object-cover" loading="eager" />
                </div>
                <div className="col-span-5 overflow-hidden rounded-2xl border-4 border-white bg-slate-100 shadow-lg ring-1 ring-sunuOrange/30">
                  <img src="/portfolio/image-photographie7.jpg" alt="Visuel de la collection Ramadan" className="h-full w-full object-cover" loading="eager" />
                </div>
                <div className="col-span-7 flex items-center justify-between gap-4 rounded-2xl border-2 border-sunuBlue/15 bg-white p-4 shadow-lg sm:p-5">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sunuBlue">Le regard SunuLink</p>
                    <p className="mt-1 text-sm font-semibold text-slate-600 sm:text-base">L’image au service de votre histoire.</p>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sunuOrange text-white shadow-md shadow-sunuOrange/25">
                    <Camera size={21} />
                  </span>
                </div>
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
                  className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl border-2 border-slate-200 bg-white text-left shadow-sm shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:border-sunuOrange hover:shadow-xl hover:shadow-sunuBlue/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-sunuOrange focus-visible:ring-offset-2"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border-[5px] border-white/0 transition duration-300 group-hover:border-sunuOrange/70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/0 to-transparent opacity-85 transition group-hover:opacity-100" />
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
