import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Filter, Layers3, Package, Sparkles, X } from "lucide-react";

type ImageItem = {
  src: string;
  title: string;
  alt: string;
  description?: string;
  transparent?: boolean;
};

type SelectedImage = { src: string; title: string; alt: string } | null;

type ExistingCategory = {
  name: string;
  count: number;
  prefix: string;
  ext: "jpg" | "png";
};

const existingCategories: ExistingCategory[] = [
  { name: "Agrohouse", count: 5, prefix: "packaging-agrohouse", ext: "jpg" },
  { name: "GIE Bakhyaye", count: 6, prefix: "packaging-gie-bakhyaye", ext: "png" },
  { name: "GIE Ngelna", count: 5, prefix: "packaging-gie-ngelna", ext: "png" },
  { name: "Kop", count: 6, prefix: "packaging-kop", ext: "jpg" },
  { name: "Nyambeaye", count: 10, prefix: "packaging-nyambeaye", ext: "jpg" },
  { name: "Proma", count: 5, prefix: "packaging-proma", ext: "jpg" },
  { name: "Rose Lassi", count: 4, prefix: "packaging-rose-lassi", ext: "jpg" },
  { name: "Serina", count: 4, prefix: "packaging-serina", ext: "jpg" },
];

const bdaImages: ImageItem[] = [
  { src: "/portfolio/BDA-Service-01_Showroom.png", title: "Showroom", alt: "Identité BDA Service appliquée au showroom" },
  { src: "/portfolio/BDA-Service-02_Enseigne.png", title: "Enseigne", alt: "Enseigne BDA Service" },
  { src: "/portfolio/BDA-Service-03_Coussin.png", title: "Coussin", alt: "Application BDA Service sur un coussin" },
  { src: "/portfolio/BDA-Service-04_Packaging.png", title: "Packaging", alt: "Packaging BDA Service" },
  { src: "/portfolio/BDA-Service-05_Papeterie.png", title: "Papeterie", alt: "Supports de papeterie BDA Service" },
  { src: "/portfolio/BDA-Service-06_Vehicule.png", title: "Habillage de véhicule", alt: "Habillage de véhicule BDA Service" },
  { src: "/portfolio/BDA-Service-07_Objets-de-marque.png", title: "Objets de marque", alt: "Objets de marque BDA Service" },
  { src: "/portfolio/BDA-Service-08_Instagram.png", title: "Communication Instagram", alt: "Déclinaison Instagram BDA Service" },
];

const freshUpPackshots: ImageItem[] = [
  { src: "/portfolio/FreshUP-Packshot_Ananas.jpg", title: "Ananas", alt: "Packshot Fresh UP saveur ananas", description: "Packshot sur fond design" },
  { src: "/portfolio/FreshUP-Packshot_Ananas-Gingembre.jpg", title: "Ananas–Gingembre", alt: "Packshot Fresh UP ananas et gingembre", description: "Packshot sur fond design" },
  { src: "/portfolio/FreshUP-Packshot_Bissap.jpg", title: "Bissap", alt: "Packshot Fresh UP saveur bissap", description: "Packshot sur fond design" },
  { src: "/portfolio/FreshUP-Packshot_Fraise.jpg", title: "Fraise", alt: "Packshot Fresh UP saveur fraise", description: "Packshot sur fond design" },
  { src: "/portfolio/FreshUP-Packshot_Mangue.jpg", title: "Mangue", alt: "Packshot Fresh UP saveur mangue", description: "Packshot sur fond design" },
  { src: "/portfolio/FreshUP-Packshot_Orange.jpg", title: "Orange", alt: "Packshot Fresh UP saveur orange", description: "Packshot sur fond design" },
];

const freshUpFlavors = [
  {
    id: "ananas",
    label: "Ananas",
    images: [
      { src: "/portfolio/FreshUP-Ananas_face.png", title: "Face", alt: "Fresh UP ananas — vue de face", transparent: true },
      { src: "/portfolio/FreshUP-Ananas_dos.png", title: "Dos", alt: "Fresh UP ananas — vue arrière", transparent: true },
      { src: "/portfolio/FreshUP-Ananas_face_givree.png", title: "Face givrée", alt: "Fresh UP ananas — face givrée", transparent: true },
      { src: "/portfolio/FreshUP-Ananas_trois-quarts-droite.png", title: "Trois-quarts droite", alt: "Fresh UP ananas — vue trois-quarts droite", transparent: true },
      { src: "/portfolio/FreshUP-Ananas_trois-quarts-gauche.png", title: "Trois-quarts gauche", alt: "Fresh UP ananas — vue trois-quarts gauche", transparent: true },
    ],
  },
  {
    id: "fraise",
    label: "Fraise",
    images: [
      { src: "/portfolio/FreshUP-Fraise_face.png", title: "Face", alt: "Fresh UP fraise — vue de face", transparent: true },
      { src: "/portfolio/FreshUP-Fraise_dos.png", title: "Dos", alt: "Fresh UP fraise — vue arrière", transparent: true },
      { src: "/portfolio/FreshUP-Fraise_face_givree.png", title: "Face givrée", alt: "Fresh UP fraise — face givrée", transparent: true },
      { src: "/portfolio/FreshUP-Fraise_trois-quarts-droite.png", title: "Trois-quarts droite", alt: "Fresh UP fraise — vue trois-quarts droite", transparent: true },
      { src: "/portfolio/FreshUP-Fraise_trois-quarts-gauche.png", title: "Trois-quarts gauche", alt: "Fresh UP fraise — vue trois-quarts gauche", transparent: true },
    ],
  },
  {
    id: "mangue",
    label: "Mangue",
    images: [
      { src: "/portfolio/FreshUP-Mangue_face.png", title: "Face", alt: "Fresh UP mangue — vue de face", transparent: true },
      { src: "/portfolio/FreshUP-Mangue_dos.png", title: "Dos", alt: "Fresh UP mangue — vue arrière", transparent: true },
      { src: "/portfolio/FreshUP-Mangue_face_givree.png", title: "Face givrée", alt: "Fresh UP mangue — face givrée", transparent: true },
      { src: "/portfolio/FreshUP-Mangue_trois-quarts-droite.png", title: "Trois-quarts droite", alt: "Fresh UP mangue — vue trois-quarts droite", transparent: true },
      { src: "/portfolio/FreshUP-Mangue_trois-quarts-gauche.png", title: "Trois-quarts gauche", alt: "Fresh UP mangue — vue trois-quarts gauche", transparent: true },
    ],
  },
] as const;

const freshUpRange: ImageItem = {
  src: "/portfolio/FreshUP-Gamme_complete.jpg",
  title: "Fresh UP — gamme complète",
  alt: "Visuel horizontal présentant les six canettes Fresh UP",
  description: "Les six canettes de la gamme réunies dans un seul visuel.",
};

const telemackRange: ImageItem = {
  src: "/portfolio/GIE-Telemack-Gamme_complete.jpg",
  title: "GIE Telemack — gamme complète",
  alt: "Visuel horizontal présentant les trois packagings GIE Telemack",
  description: "Vue d’ensemble des trois packagings présentés dans la collection.",
};

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
      <p className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#F59C27]">
        <Sparkles size={15} aria-hidden="true" /> {eyebrow}
      </p>
      <h2 className="text-2xl font-black leading-tight tracking-tight text-[#1178B7] sm:text-3xl md:text-4xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">{description}</p>
    </div>
  );
}

function GalleryCard({ image, onOpen }: { image: ImageItem; onOpen: (image: SelectedImage) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpen({ src: image.src, title: image.title, alt: image.alt })}
      className="group block w-full overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F59C27] hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1178B7]/25"
      aria-label={`Agrandir : ${image.title}`}
    >
      <div className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden ${image.transparent ? "bg-gradient-to-br from-slate-50 via-white to-[#1178B7]/5 p-3 sm:p-5" : "bg-slate-100"}`}>
        {image.transparent && <div className="pointer-events-none absolute inset-x-6 bottom-4 h-4 rounded-full bg-slate-900/10 blur-md" aria-hidden="true" />}
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          className={`relative h-full w-full transition-transform duration-500 group-hover:scale-[1.035] ${image.transparent ? "object-contain" : "object-cover"}`}
        />
        <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#1178B7] shadow-sm transition-colors group-hover:bg-[#F59C27] group-hover:text-white" aria-hidden="true">
          <ArrowUpRight size={16} />
        </span>
      </div>
      <div className="px-4 py-3 sm:px-5 sm:py-4">
        <h3 className="text-sm font-extrabold text-slate-800 sm:text-base">{image.title}</h3>
        {image.description && <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">{image.description}</p>}
      </div>
    </button>
  );
}

function WideCollectionCard({ image, label, meta, onOpen }: { image: ImageItem; label: string; meta: string; onOpen: (image: SelectedImage) => void }) {
  return (
    <button
      type="button"
      className="group block w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 text-left shadow-sm transition-all duration-300 hover:border-[#F59C27] hover:shadow-xl sm:rounded-3xl sm:p-3"
      onClick={() => onOpen({ src: image.src, title: image.title, alt: image.alt })}
      aria-label={`Agrandir : ${image.title}`}
    >
      <div className="flex min-h-[160px] items-center justify-center overflow-hidden rounded-xl bg-slate-50 sm:min-h-[240px] md:min-h-[320px] lg:min-h-[360px]">
        <img src={image.src} alt={image.alt} loading="lazy" decoding="async" className="max-h-[440px] w-full object-contain transition-transform duration-500 group-hover:scale-[1.015]" />
      </div>
      <div className="flex flex-col gap-1 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4">
        <span className="font-extrabold text-slate-800">{label}</span>
        <span className="text-xs font-bold uppercase tracking-wider text-[#1178B7]">{meta} · Voir en grand</span>
      </div>
    </button>
  );
}

const DesignPackagingPage = () => {
  const [selectedImg, setSelectedImg] = useState<SelectedImage>(null);
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [activeFlavor, setActiveFlavor] = useState<(typeof freshUpFlavors)[number]["id"]>("ananas");

  const allCategories = useMemo(
    () => ["Tous", ...existingCategories.map((category) => category.name), "BDA Service", "Fresh UP", "GIE Telemack"],
    [],
  );
  const currentFlavor = useMemo(
    () => freshUpFlavors.find((flavor) => flavor.id === activeFlavor) ?? freshUpFlavors[0],
    [activeFlavor],
  );

  useEffect(() => {
    if (!selectedImg) return;
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImg(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImg]);

  const showCategory = (name: string) => activeCategory === "Tous" || activeCategory === name;

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-800">
      <Header />

      <main className="pb-16 pt-24 sm:pb-20">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#FFF7ED] via-white to-[#EFF8FE] px-4 py-14 sm:px-6 sm:py-20">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border-[28px] border-[#1178B7]/[0.06] sm:h-80 sm:w-80" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-24 left-[8%] h-56 w-56 rounded-full bg-[#F59C27]/10 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F59C27]/30 bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#1178B7] shadow-sm">
              <Package size={16} className="text-[#F59C27]" aria-hidden="true" /> Portfolio créatif SunuLink
            </span>
            <h1 className="mx-auto max-w-5xl text-3xl font-black uppercase leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Design produit & <span className="text-[#F59C27]">packaging</span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg md:text-xl">
              Des emballages qui valorisent vos produits, racontent leur histoire et créent une identité reconnaissable.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#collections-recentes" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1178B7] px-6 py-3 font-extrabold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#F59C27] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1178B7]/25">
                Découvrir les collections <ArrowUpRight size={18} />
              </a>
              <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-[#F59C27] bg-white px-6 py-3 font-extrabold text-[#1178B7] transition-all hover:bg-[#F59C27] hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-[#F59C27]/25">
                Créer mon packaging
              </Link>
            </div>
          </div>
        </section>

        {/* FILTERS */}
        <section className="sticky top-[80px] z-40 border-y border-slate-100 bg-white/95 py-5 backdrop-blur-md sm:py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#1178B7]/75 sm:text-sm">
              <Filter size={16} aria-hidden="true" /> Filtrer par marque
            </div>
            <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-1 sm:gap-3" role="group" aria-label="Filtrer les collections par marque">
              {allCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`min-h-10 shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition-all sm:px-5 ${
                    activeCategory === category
                      ? "border-[#1178B7] bg-[#1178B7] text-white shadow-md"
                      : "border-slate-200 bg-white text-slate-600 hover:border-[#F59C27] hover:text-[#1178B7]"
                  }`}
                >
                  {category === "Tous" ? "Toutes les collections" : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* NEW COLLECTIONS */}
        <div id="collections-recentes" className="space-y-14 py-12 sm:space-y-20 sm:py-16">
          {showCategory("BDA Service") && (
            <section className="px-4 sm:px-6" aria-labelledby="bda-service-title">
              <div className="mx-auto max-w-7xl">
                <SectionHeading eyebrow="Identité de marque · Déclinaisons" title="BDA Service" description="Une identité déclinée sur différents supports, du showroom à l’enseigne, en passant par les objets de marque et la communication digitale." />
                <div id="bda-service-title" className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
                  {bdaImages.map((image) => <GalleryCard key={image.src} image={image} onOpen={setSelectedImg} />)}
                </div>
              </div>
            </section>
          )}

          {showCategory("Fresh UP") && (
            <section className="border-y border-slate-100 bg-slate-50/70 px-4 py-12 sm:px-6 sm:py-16" aria-labelledby="freshup-title">
              <div className="mx-auto max-w-7xl">
                <SectionHeading eyebrow="Branding produit · Boissons" title="Fresh UP" description="Découvrez l’identité de la gamme, les packshots avec leurs fonds graphiques et les détails des canettes vues sous plusieurs angles." />

                <WideCollectionCard image={freshUpRange} label="La gamme complète" meta="6 canettes" onOpen={setSelectedImg} />

                <div className="mb-6 mt-10 flex items-center gap-3 sm:mt-14">
                  <Package size={22} className="shrink-0 text-[#F59C27]" aria-hidden="true" />
                  <div>
                    <h3 className="text-lg font-black text-slate-900 sm:text-2xl">Packshots avec fonds design</h3>
                    <p className="mt-1 text-sm text-slate-600">Six présentations graphiques de la gamme Fresh UP.</p>
                  </div>
                </div>
                <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                  {freshUpPackshots.map((image) => <GalleryCard key={image.src} image={image} onOpen={setSelectedImg} />)}
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 md:p-8">
                  <div className="mb-6 max-w-3xl">
                    <span className="mb-2 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#F59C27]"><Layers3 size={15} aria-hidden="true" /> Vues produit détaillées</span>
                    <h3 id="freshup-title" className="text-xl font-black leading-tight text-[#1178B7] sm:text-2xl">Explorer chaque canette sous différents angles</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">Ces PNG détourés présentent les canettes sans arrière-plan. Choisissez une saveur pour découvrir les cinq vues disponibles : face, dos, face givrée et vues trois-quarts.</p>
                  </div>
                  <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Choisir une saveur Fresh UP">
                    {freshUpFlavors.map((flavor) => (
                      <button key={flavor.id} type="button" onClick={() => setActiveFlavor(flavor.id)} aria-pressed={activeFlavor === flavor.id} className={`min-h-10 rounded-full border px-5 py-2 text-sm font-extrabold transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1178B7]/20 ${activeFlavor === flavor.id ? "border-[#1178B7] bg-[#1178B7] text-white" : "border-slate-200 bg-white text-slate-600 hover:border-[#F59C27] hover:text-[#1178B7]"}`}>
                        {flavor.label}
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
                    {currentFlavor.images.map((image) => <GalleryCard key={image.src} image={image} onOpen={setSelectedImg} />)}
                  </div>
                </div>
              </div>
            </section>
          )}

          {showCategory("GIE Telemack") && (
            <section className="px-4 sm:px-6" aria-labelledby="telemack-heading">
              <div className="mx-auto max-w-7xl">
                <SectionHeading eyebrow="Design packaging · Gamme complète" title="GIE Telemack" description="Un visuel horizontal rassemble les trois packagings afin de présenter la collection et la cohérence de la gamme." />
                <WideCollectionCard image={telemackRange} label="Gamme complète GIE Telemack" meta="3 packagings" onOpen={setSelectedImg} />
              </div>
            </section>
          )}
        </div>

        {/* EXISTING COLLECTIONS */}
        {existingCategories.filter((category) => showCategory(category.name)).length > 0 && (
          <section className="px-4 py-8 sm:px-6 sm:py-12" aria-label="Autres projets de packaging">
            <div className="mx-auto max-w-7xl">
              {activeCategory === "Tous" && (
                <SectionHeading eyebrow="Portfolio packaging" title="Autres projets" description="Retrouvez également les autres projets de design produit et de packaging réalisés pour nos clients." />
              )}
              {existingCategories.filter((category) => showCategory(category.name)).map((category) => {
                const images = Array.from({ length: category.count }, (_, index) => ({
                  src: `/portfolio/${category.prefix}${index + 1}.${category.ext}`,
                  title: `${category.name} — visuel ${index + 1}`,
                  alt: `Réalisation de packaging ${category.name}, visuel ${index + 1}`,
                }));
                return (
                  <div key={category.name} className="mb-14 last:mb-0">
                    <div className="mb-6 flex items-center gap-3 sm:mb-8">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F59C27] text-white shadow-sm"><Package size={22} aria-hidden="true" /></div>
                      <div>
                        <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 sm:text-2xl">{category.name}</h3>
                        <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[#1178B7]">Design solutions · {category.count} visuels</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
                      {images.map((image) => <GalleryCard key={image.src} image={image} onOpen={setSelectedImg} />)}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* IMAGE LIGHTBOX */}
        {selectedImg && (
          <div className="fixed inset-0 z-[9999] flex cursor-pointer items-center justify-center bg-black/95 p-3 backdrop-blur-sm sm:p-6" role="dialog" aria-modal="true" aria-label={selectedImg.title} onClick={() => setSelectedImg(null)}>
            <button type="button" onClick={() => setSelectedImg(null)} className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#F59C27] text-white shadow-lg transition-transform hover:rotate-90 hover:bg-white hover:text-[#1178B7] sm:right-7 sm:top-7 sm:h-12 sm:w-12" aria-label="Fermer l’aperçu"><X size={24} /></button>
            <div className="flex max-h-[90vh] w-full max-w-6xl flex-col items-center gap-3" onClick={(event) => event.stopPropagation()}>
              <img src={selectedImg.src} alt={selectedImg.alt} className="max-h-[82vh] max-w-full rounded-xl object-contain" />
              <p className="text-center text-sm font-bold text-white sm:text-base">{selectedImg.title}</p>
            </div>
          </div>
        )}

        {/* CTA */}
        <section className="mx-4 mt-8 rounded-[2rem] bg-gradient-to-r from-[#0A3B5A] via-[#1178B7] to-[#0A3B5A] px-5 py-12 text-center text-white sm:mx-6 sm:mt-12 sm:rounded-[2.5rem] sm:px-10 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em]"><Sparkles size={15} className="text-[#F59C27]" aria-hidden="true" /> Votre projet commence ici</span>
            <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl">Prêt à habiller <span className="text-[#F59C27]">votre produit ?</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">Échangeons sur votre produit et concevons un packaging qui porte clairement votre identité.</p>
            <Link to="/contact" className="mt-7 inline-flex w-full max-w-sm justify-center sm:w-auto">
              <Button className="min-h-12 w-full rounded-full border-none bg-[#F59C27] px-7 py-3 font-extrabold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[#1178B7] sm:w-auto sm:px-10">
                Lancer mon projet packaging <ArrowUpRight size={18} className="ml-2" />
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
