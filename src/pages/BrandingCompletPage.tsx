import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Expand,
  FolderOpen,
  Image as ImageIcon,
  Package,
  Printer,
  Sparkles,
  X,
} from "lucide-react";

type PrintProject = {
  id: string;
  name: string;
  category: string;
  description: string;
  images: string[];
  cover: string;
  displayMode?: "contain" | "cover";
};

const projects: PrintProject[] = [
  {
    id: "packaging",
    name: "Packaging & face avant",
    category: "Packaging produit",
    description:
      "Des visuels de face avant conçus pour présenter clairement les produits et donner de la présence à une gamme, tout en conservant les codes propres à chaque référence.",
    cover: "/portfolio/Face-avant_Banane.jpg",
    displayMode: "contain",
    images: [
      "/portfolio/Face-avant_Banane.jpg",
      "/portfolio/Face-avant_Moringa.jpg",
      "/portfolio/Face-avant_Sorgho.jpg",
    ],
  },
  {
    id: "soso",
    name: "Soso",
    category: "Communication de marque",
    description:
      "Une série de créations réunies sous une même identité pour construire une présence visuelle cohérente et mettre en valeur les produits de la marque.",
    cover: "/portfolio/Soso-01.jpg",
    images: [
      "/portfolio/Soso-01.jpg",
      "/portfolio/Soso-02.jpg",
      "/portfolio/Soso-03.jpg",
      "/portfolio/Soso-04.jpg",
      "/portfolio/Soso-05.jpg",
      "/portfolio/Soso-06.jpg",
    ],
  },
  {
    id: "linguere-oil",
    name: "Linguere Oil",
    category: "Posts & communication digitale",
    description:
      "Une série de publications de marque destinée à mettre en avant les produits, structurer les messages et rythmer la communication visuelle.",
    cover: "/portfolio/Linguere-oil-Post-01.jpg",
    images: [
      "/portfolio/Linguere-oil-Post-01.jpg",
      "/portfolio/Linguere-oil-Post-02.jpg",
      "/portfolio/Linguere-oil-Post-03.jpg",
      "/portfolio/Linguere-oil-Post-04.jpg",
      "/portfolio/Linguere-oil-Post-05.jpg",
      "/portfolio/Linguere-oil-Post-06.jpg",
    ],
  },
  {
    id: "nataa",
    name: "Nataa",
    category: "Soins & cosmétiques",
    description:
      "Des créations produit autour de plusieurs références de la gamme, du soin ciblé à la présentation de l’ensemble, avec une identité visuelle homogène.",
    cover: "/portfolio/Nataa-ad1_pure-shea.jpg",
    images: [
      "/portfolio/Nataa-ad1_pure-shea.jpg",
      "/portfolio/Nataa-ad2_hibiscus-glow.jpg",
      "/portfolio/Nataa-ad3_silk-body.jpg",
      "/portfolio/Nataa-ad4_moringa-elixir.jpg",
      "/portfolio/Nataa-ad5_la-gamme.jpg",
    ],
  },
  {
    id: "nguelna",
    name: "Nguelna",
    category: "Produits & ingrédients",
    description:
      "Une série de visuels produit présentant différentes références et assurant une lecture claire et cohérente de la gamme.",
    cover: "/portfolio/Nguelna-ad5_la-gamme.jpg",
    displayMode: "contain",
    images: [
      "/portfolio/Nguelna-ad1_poudre-moringa.jpg",
      "/portfolio/Nguelna-ad2_noix-de-cajou.jpg",
      "/portfolio/Nguelna-ad3_sel-palmarin.jpg",
      "/portfolio/Nguelna-ad4_grains-moringa.jpg",
      "/portfolio/Nguelna-ad5_la-gamme.jpg",
    ],
  },
  {
    id: "welli",
    name: "Welli",
    category: "Campagne de marque",
    description:
      "Six créations regroupées par projet pour présenter les déclinaisons visuelles de la campagne tout en préservant la reconnaissance de la marque.",
    cover: "/portfolio/Welli-Post-01.jpg",
    images: [
      "/portfolio/Welli-Post-01.jpg",
      "/portfolio/Welli-Post-02.jpg",
      "/portfolio/Welli-Post-03.jpg",
      "/portfolio/Welli-Post-04.jpg",
      "/portfolio/Welli-Post-05.jpg",
      "/portfolio/Welli-Post-06.jpg",
    ],
  },
  {
    id: "zami",
    name: "Zami",
    category: "Campagne de marque",
    description:
      "Une collection de publications réunies sous un même projet pour préserver la continuité visuelle et la cohérence des prises de parole.",
    cover: "/portfolio/Zami-Post-01.jpg",
    images: [
      "/portfolio/Zami-Post-01.jpg",
      "/portfolio/Zami-Post-02.jpg",
      "/portfolio/Zami-Post-03.jpg",
      "/portfolio/Zami-Post-04.jpg",
      "/portfolio/Zami-Post-05.jpg",
      "/portfolio/Zami-Post-06.jpg",
    ],
  },
];

const heroPreview = [
  { image: "/portfolio/Face-avant_Banane.jpg", title: "Packaging", note: "Banane · Moringa · Sorgho" },
  { image: "/portfolio/Nataa-ad1_pure-shea.jpg", title: "Nataa", note: "Soins & cosmétiques" },
  { image: "/portfolio/Soso-01.jpg", title: "Soso", note: "Communication de marque" },
  { image: "/portfolio/Linguere-oil-Post-01.jpg", title: "Linguere Oil", note: "Campagne produit" },
];

const featuredProjects = [
  { id: "packaging", image: "/portfolio/Face-avant_Moringa.jpg", title: "Packaging produit", tag: "Design packaging" },
  { id: "nataa", image: "/portfolio/Nataa-ad1_pure-shea.jpg", title: "Nataa", tag: "Soins & cosmétiques" },
  { id: "soso", image: "/portfolio/Soso-01.jpg", title: "Soso", tag: "Communication de marque" },
  { id: "linguere-oil", image: "/portfolio/Linguere-oil-Post-01.jpg", title: "Linguere Oil", tag: "Supports de communication" },
  { id: "welli", image: "/portfolio/Welli-Post-01.jpg", title: "Welli", tag: "Campagne de marque" },
  { id: "zami", image: "/portfolio/Zami-Post-01.jpg", title: "Zami", tag: "Série de publications" },
];

const flatImages = projects.flatMap((project) =>
  project.images.map((image, index) => ({
    src: image,
    alt: `${project.name} — visuel ${index + 1}`,
    projectId: project.id,
    projectName: project.name,
    index,
  })),
);

const AnimatedCounter = ({
  end,
  duration = 1500,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const element = counterRef.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [isVisible, end, duration]);

  return <div ref={counterRef}>{count}{suffix}</div>;
};

const AffichesSupportsPage = () => {
  const [activeProjectFilter, setActiveProjectFilter] = useState("all");
  const [focusProjectIndex, setFocusProjectIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const focusProject = projects[focusProjectIndex];

  const filteredProjects = useMemo(
    () => activeProjectFilter === "all"
      ? projects
      : projects.filter((project) => project.id === activeProjectFilter),
    [activeProjectFilter],
  );
  const selectedIndex = selectedImg ? flatImages.findIndex((item) => item.src === selectedImg) : -1;

  const stats = [
    { value: 76, suffix: "+", label: "Supports créés" },
    { value: 100, suffix: "%", label: "Haute résolution" },
    { value: 45, suffix: "+", label: "Clients Print" },
    { value: 10, suffix: "/10", label: "Finition premium" },
  ];

  const showNextImage = () => {
    if (selectedIndex < 0) return;
    setSelectedImg(flatImages[(selectedIndex + 1) % flatImages.length].src);
  };
  const showPreviousImage = () => {
    if (selectedIndex < 0) return;
    setSelectedImg(flatImages[(selectedIndex - 1 + flatImages.length) % flatImages.length].src);
  };
  const nextFocusProject = () => setFocusProjectIndex((previous) => (previous + 1) % projects.length);
  const previousFocusProject = () => setFocusProjectIndex((previous) => (previous - 1 + projects.length) % projects.length);

  const showProjectInGallery = (projectId: string) => {
    setActiveProjectFilter(projectId);
    window.setTimeout(() => galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 30);
  };

  useEffect(() => {
    if (!selectedImg) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImg(null);
      if (event.key === "ArrowRight") showNextImage();
      if (event.key === "ArrowLeft") showPreviousImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
    // The selected image intentionally controls the lifetime of the lightbox.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImg]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-800">
      <Header />
      <main className="pb-16 sm:pb-20">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#062B43] via-[#1178B7] to-[#0A4F79] px-4 pb-16 pt-28 text-white sm:px-6 sm:pb-20 sm:pt-32 lg:pb-24">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-[36px] border-white/5 sm:h-96 sm:w-96" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-24 left-[12%] h-64 w-64 rounded-full bg-[#F59C27]/15 blur-3xl" aria-hidden="true" />
          <div className="absolute right-0 top-0 h-1.5 w-32 bg-[#F59C27] sm:w-48" aria-hidden="true" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
            <div className="max-w-3xl" data-aos="fade-up">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur sm:text-sm">
                <Sparkles size={16} className="text-[#F59C27]" /> Affiches · Print · Packaging
              </span>
              <h1 className="mb-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                AFFICHES & <span className="text-[#F59C27]">SUPPORTS PRINT</span>
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
                Des créations visuelles conçues pour mettre vos produits en valeur, renforcer votre image de marque et rendre vos campagnes plus mémorables.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href="#galerie-projets" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F59C27] px-7 py-3 font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#1178B7] focus:outline-none focus:ring-4 focus:ring-white/40">
                  Explorer les projets <ArrowRight size={18} />
                </a>
                <Link to="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/50 bg-white/5 px-7 py-3 font-bold text-white transition-all duration-300 hover:border-[#F59C27] hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/30">
                  Demander un devis Print
                </Link>
              </div>
              <div className="mt-7 grid gap-3 text-sm text-white/85 sm:grid-cols-3">
                {[
                  "Un univers visuel cohérent",
                  "Des créations par projet",
                  "Des détails accessibles en zoom",
                ].map((item) => (
                  <span key={item} className="inline-flex items-start gap-2">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#F59C27]" /> {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl" data-aos="fade-up" data-aos-delay="120">
              <div className="absolute -inset-3 rounded-[2rem] border border-white/20" aria-hidden="true" />
              <div className="relative grid grid-cols-2 gap-3 rounded-[1.75rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-sm sm:gap-4 sm:p-4">
                {heroPreview.map((item, index) => (
                  <button
                    key={item.image}
                    type="button"
                    onClick={() => setSelectedImg(item.image)}
                    className={`group relative overflow-hidden rounded-2xl border border-white/20 bg-white text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#F59C27] ${index === 0 ? "aspect-[5/4]" : "aspect-[5/4]"}`}
                    aria-label={`Agrandir le projet ${item.title}`}
                  >
                    <img src={item.image} alt={item.title} loading={index < 2 ? "eager" : "lazy"} className="absolute inset-0 h-full w-full object-contain p-1.5 transition-transform duration-500 group-hover:scale-[1.03] sm:p-2" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#062B43]/95 to-transparent px-3 pb-3 pt-8 sm:px-4 sm:pb-4">
                      <p className="text-sm font-extrabold text-white sm:text-base">{item.title}</p>
                      <p className="mt-0.5 text-[10px] leading-snug text-white/80 sm:text-xs">{item.note}</p>
                    </div>
                    <span className="absolute right-2 top-2 rounded-full border border-white/50 bg-[#062B43]/70 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"><Expand size={14} /></span>
                  </button>
                ))}
              </div>
              <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-[#062B43] px-4 py-2 text-xs font-semibold text-white shadow-xl sm:text-sm">
                <BadgeCheck size={16} className="text-[#F59C27]" /> Une sélection de nos projets Print
              </div>
            </div>
          </div>
        </section>

        {/* CHIFFRES CLÉS */}
        <section className="relative z-10 px-4 pt-9 sm:px-6 sm:pt-12">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="group rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F59C27]/60 hover:shadow-lg sm:rounded-3xl sm:p-7" data-aos="fade-up" data-aos-delay={index * 70}>
                <div className="mb-2 text-3xl font-black tracking-tight text-[#1178B7] sm:text-4xl md:text-5xl"><AnimatedCounter end={stat.value} suffix={stat.suffix} /></div>
                <p className="text-xs font-semibold text-slate-500 sm:text-sm">{stat.label}</p>
                <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-[#F59C27] transition-all duration-300 group-hover:w-16" />
              </div>
            ))}
          </div>
        </section>

        {/* SÉLECTION ÉDITORIALE */}
        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl" data-aos="fade-up">
                <span className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#F59C27]"><ImageIcon size={16} /> Portfolio créatif</span>
                <h2 className="text-2xl font-black tracking-tight text-[#1178B7] sm:text-3xl md:text-4xl">Des supports qui <span className="text-[#F59C27]">prennent forme</span></h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-right" data-aos="fade-up">
                Une sélection de projets organisée comme une galerie éditoriale, où chaque visuel conserve son format et son intention.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-12 lg:auto-rows-[190px]">
              {featuredProjects.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => showProjectInGallery(item.id)}
                  className={`group relative flex min-h-[180px] flex-col overflow-hidden rounded-2xl border-2 border-[#1178B7]/15 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F59C27] hover:shadow-[0_16px_36px_rgba(17,120,183,0.15)] sm:min-h-[220px] lg:min-h-0 ${
                    index === 0 ? "col-span-2 lg:col-span-5 lg:row-span-2" :
                    index === 1 ? "col-span-1 lg:col-span-3 lg:row-span-2" :
                    index === 2 ? "col-span-1 lg:col-span-4" :
                    index === 3 ? "col-span-1 lg:col-span-4" :
                    index === 4 ? "col-span-1 lg:col-span-4" : "col-span-2 sm:col-span-1 lg:col-span-4"
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="relative min-h-0 flex-1 bg-slate-50">
                    <img src={item.image} alt={item.title} loading="lazy" className="absolute inset-0 h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02] sm:p-3" />
                    <span className="absolute right-3 top-3 rounded-full border border-white/50 bg-[#062B43]/80 p-2 text-white shadow-sm"><ArrowDownRight size={16} /></span>
                  </div>
                  <div className="flex items-center justify-between gap-2 border-t-2 border-[#F59C27] bg-[#062B43] px-3 py-3 sm:px-4">
                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-extrabold text-white sm:text-base">{item.title}</h3>
                      <p className="mt-0.5 truncate text-[10px] text-white/70 sm:text-xs">{item.tag}</p>
                    </div>
                    <ArrowRight size={17} className="shrink-0 text-[#F59C27] transition-transform group-hover:translate-x-1" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* GALERIE PAR PROJET */}
        <section id="galerie-projets" ref={galleryRef} className="scroll-mt-24 border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-12" data-aos="fade-up">
              <span className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#F59C27]"><FolderOpen size={16} /> Nos projets Print</span>
              <h2 className="text-2xl font-black tracking-tight text-[#1178B7] sm:text-3xl md:text-4xl">Une galerie <span className="text-[#F59C27]">classée par projet</span></h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">Choisissez une marque pour parcourir ses créations. Les visuels sont présentés dans des cartes uniformes sans rogner le contenu des supports.</p>
            </div>

            <div className="mb-8 flex gap-2 overflow-x-auto pb-3 sm:flex-wrap sm:justify-center sm:overflow-visible" aria-label="Filtrer les projets">
              <button type="button" onClick={() => setActiveProjectFilter("all")} aria-pressed={activeProjectFilter === "all"} className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-bold transition-all ${activeProjectFilter === "all" ? "border-[#1178B7] bg-[#1178B7] text-white shadow-md" : "border-slate-300 bg-white text-slate-600 hover:border-[#F59C27] hover:text-[#1178B7]"}`}>Tous les projets ({projects.length})</button>
              {projects.map((project) => (
                <button key={project.id} type="button" onClick={() => setActiveProjectFilter(project.id)} aria-pressed={activeProjectFilter === project.id} className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-bold transition-all ${activeProjectFilter === project.id ? "border-[#F59C27] bg-[#F59C27] text-white shadow-md" : "border-slate-300 bg-white text-slate-600 hover:border-[#F59C27] hover:text-[#1178B7]"}`}>{project.name}</button>
              ))}
            </div>

            <div className="space-y-8">
              {filteredProjects.map((project) => (
                <article key={project.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
                  <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-7">
                    <div>
                      <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#F59C27] sm:text-xs">{project.category}</p>
                      <h3 className="text-xl font-black text-[#1178B7] sm:text-2xl">{project.name}</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">{project.description}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#1178B7]/8 px-3.5 py-2 text-xs font-bold text-[#1178B7]"><ImageIcon size={15} /> {project.images.length} visuel{project.images.length > 1 ? "s" : ""}</span>
                      <button type="button" onClick={() => setFocusProjectIndex(projects.findIndex((item) => item.id === project.id))} className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#1178B7] transition-colors hover:text-[#F59C27] sm:text-sm">Voir en focus <ArrowRight size={15} /></button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 sm:gap-4 sm:p-5 lg:grid-cols-4">
                    {project.images.map((image, imageIndex) => (
                      <button key={image} type="button" onClick={() => setSelectedImg(image)} aria-label={`Agrandir ${project.name}, visuel ${imageIndex + 1}`} className="group relative flex aspect-[4/5] min-h-0 flex-col overflow-hidden rounded-2xl border border-[#1178B7]/15 bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#F59C27] hover:shadow-[0_12px_30px_rgba(17,120,183,0.15)]">
                        <span className="relative min-h-0 flex-1 bg-slate-50">
                          <img src={image} alt={`${project.name} — visuel ${imageIndex + 1}`} loading="lazy" className="absolute inset-0 h-full w-full object-contain p-1.5 sm:p-2" />
                          <span className="absolute right-2 top-2 rounded-full bg-[#062B43]/80 p-1.5 text-white opacity-100 transition-colors group-hover:bg-[#F59C27]"><Expand size={13} /></span>
                        </span>
                        <span className="flex items-center justify-between gap-2 border-t border-[#F59C27]/60 px-3 py-2.5">
                          <span className="text-xs font-bold text-slate-700">{project.name}</span>
                          <span className="text-[10px] font-extrabold tabular-nums text-[#1178B7]">{String(imageIndex + 1).padStart(2, "0")}/{String(project.images.length).padStart(2, "0")}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FOCUS RÉALISATIONS */}
        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl" data-aos="fade-up">
                <span className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#F59C27]"><Package size={16} /> Focus réalisations</span>
                <h2 className="text-2xl font-black tracking-tight text-[#1178B7] sm:text-3xl md:text-4xl">Un projet à la fois, <span className="text-[#F59C27]">dans son univers</span></h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">Découvrez chaque projet avec ses visuels associés, son contexte et un accès rapide à toute sa galerie.</p>
              </div>
              <div className="flex items-center gap-3" data-aos="fade-up">
                <span className="mr-1 text-xs font-extrabold uppercase tracking-wider text-slate-400 sm:text-sm">{String(focusProjectIndex + 1).padStart(2, "0")} <span className="text-[#F59C27]">/</span> {String(projects.length).padStart(2, "0")}</span>
                <button type="button" onClick={previousFocusProject} aria-label="Projet précédent" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1178B7]/20 bg-white text-[#1178B7] shadow-sm transition-all hover:border-[#F59C27] hover:bg-[#F59C27] hover:text-white"><ChevronLeft size={22} /></button>
                <button type="button" onClick={nextFocusProject} aria-label="Projet suivant" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F59C27] text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#1178B7]"><ChevronRight size={22} /></button>
              </div>
            </div>

            <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_22px_60px_rgba(8,47,74,0.10)] lg:grid-cols-[0.78fr_1.22fr]" data-aos="fade-up">
              <div className="flex flex-col justify-between bg-gradient-to-br from-[#062B43] via-[#1178B7] to-[#0B527E] p-6 text-white sm:p-8 md:p-10">
                <div>
                  <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#F59C27] sm:text-xs">{focusProject.category}</span>
                  <h3 className="mt-5 text-2xl font-black leading-tight sm:text-3xl md:text-4xl">{focusProject.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">{focusProject.description}</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/15 pt-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F59C27] text-white"><ImageIcon size={21} /></span>
                    <div><p className="font-extrabold">{focusProject.images.length} visuel{focusProject.images.length > 1 ? "s" : ""} dans ce projet</p><p className="mt-0.5 text-xs text-white/65">Sélectionnez une image pour l’agrandir.</p></div>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <button type="button" onClick={() => showProjectInGallery(focusProject.id)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#F59C27] px-5 py-3 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[#1178B7]">Voir tout le projet <ArrowRight size={17} /></button>
                  <Link to="/contact" className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/40 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/10">Demander un projet similaire</Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 sm:gap-4 sm:p-5 md:p-6">
                <button type="button" onClick={() => setSelectedImg(focusProject.images[0])} className="group relative col-span-2 flex aspect-[16/8] items-center justify-center overflow-hidden rounded-2xl border-2 border-[#1178B7]/15 bg-white transition-all hover:border-[#F59C27] sm:rounded-3xl">
                  <img src={focusProject.images[0]} alt={`${focusProject.name} — visuel principal`} loading="lazy" className="h-full w-full object-contain p-2 sm:p-3" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-[#062B43]/85 px-3 py-1.5 text-xs font-bold text-white">Visuel principal</span>
                  <span className="absolute right-3 top-3 rounded-full bg-[#F59C27] p-2 text-white"><Expand size={15} /></span>
                </button>
                {focusProject.images.slice(1, 4).map((image, index) => (
                  <button type="button" key={image} onClick={() => setSelectedImg(image)} className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl border-2 border-[#1178B7]/15 bg-white transition-all hover:border-[#F59C27] sm:rounded-2xl">
                    <img src={image} alt={`${focusProject.name} — aperçu ${index + 2}`} loading="lazy" className="h-full w-full object-contain p-1.5 sm:p-2" />
                    <span className="absolute bottom-2 left-2 rounded-full bg-[#062B43]/85 px-2.5 py-1 text-[10px] font-bold text-white">Visuel {index + 2}</span>
                  </button>
                ))}
                {focusProject.images.length === 1 && <div className="col-span-2 flex min-h-24 items-center justify-center rounded-2xl border border-dashed border-[#1178B7]/25 bg-white px-4 text-center text-sm text-slate-500">D’autres visuels pourront être ajoutés à ce projet au fil des nouvelles réalisations.</div>}
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-4 py-14 sm:px-6 sm:py-20">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#062B43] via-[#1178B7] to-[#062B43] px-6 py-10 text-center text-white shadow-2xl sm:rounded-[2.5rem] sm:px-10 sm:py-12 md:px-14 md:py-14">
            <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full border-[24px] border-white/5 sm:h-64 sm:w-64" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-24 left-[10%] h-48 w-48 rounded-full bg-[#F59C27]/10 blur-3xl" aria-hidden="true" />
            <div className="relative mx-auto max-w-3xl" data-aos="fade-up">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white"><Printer size={15} className="text-[#F59C27]" /> Votre projet commence ici</span>
              <h2 className="text-2xl font-black leading-tight sm:text-3xl md:text-4xl">Votre projet mérite <span className="text-[#F59C27]">une impression d’exception.</span></h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg">Parlons de votre besoin et construisons ensemble des supports imprimés et visuels adaptés à votre marque.</p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F59C27] px-7 py-3 font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#1178B7] focus:outline-none focus:ring-4 focus:ring-white/40 sm:px-9">Démarrer mon projet Print <ArrowRight size={18} /></Link>
                <Link to="/services" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/60 bg-white/5 px-7 py-3 font-bold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#1178B7] focus:outline-none focus:ring-4 focus:ring-white/30 sm:px-9">Découvrir nos services</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* LIGHTBOX : portail en dehors du conteneur de page pour rester visible sur mobile */}
      {selectedImg && createPortal(
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#031522]/95 px-3 pb-5 pt-20 backdrop-blur-sm sm:px-6 sm:pb-6 sm:pt-24" role="dialog" aria-modal="true" aria-label="Aperçu agrandi du support" onClick={() => setSelectedImg(null)}>
          <button type="button" onClick={(event) => { event.stopPropagation(); setSelectedImg(null); }} className="fixed right-4 top-4 z-[10002] flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/80 bg-[#F59C27] text-white shadow-[0_8px_30px_rgba(0,0,0,0.55)] transition-all hover:rotate-90 hover:bg-white hover:text-[#1178B7] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/70 sm:right-7 sm:top-7 sm:h-14 sm:w-14" style={{ top: "max(1rem, env(safe-area-inset-top, 0px))", right: "max(1rem, env(safe-area-inset-right, 0px))" }} aria-label="Fermer l’image agrandie"><X size={27} strokeWidth={2.5} /></button>
          <button type="button" onClick={(event) => { event.stopPropagation(); showPreviousImage(); }} aria-label="Image précédente" className="fixed left-3 top-1/2 z-[10001] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#1178B7]/90 text-white shadow-xl transition-colors hover:bg-[#F59C27] sm:left-6 sm:h-12 sm:w-12"><ChevronLeft size={23} /></button>
          <img src={selectedImg} alt={flatImages[selectedIndex]?.alt ?? "Réalisation Print agrandie"} className="max-h-[calc(100dvh-7.5rem)] max-w-[calc(100vw-5.5rem)] cursor-default rounded-xl object-contain shadow-2xl sm:max-h-[calc(100dvh-7rem)] sm:max-w-[calc(100vw-10rem)] sm:rounded-2xl" onClick={(event) => event.stopPropagation()} />
          <button type="button" onClick={(event) => { event.stopPropagation(); showNextImage(); }} aria-label="Image suivante" className="fixed right-3 top-1/2 z-[10001] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#1178B7]/90 text-white shadow-xl transition-colors hover:bg-[#F59C27] sm:right-6 sm:h-12 sm:w-12"><ChevronRight size={23} /></button>
          <div className="fixed bottom-3 left-1/2 z-[10001] -translate-x-1/2 rounded-full border border-white/15 bg-[#062B43]/90 px-4 py-2 text-xs font-semibold text-white shadow-xl sm:bottom-5 sm:text-sm">{flatImages[selectedIndex]?.projectName ?? "Réalisation"} <span className="mx-1.5 text-[#F59C27]">·</span> {selectedIndex + 1} / {flatImages.length}</div>
        </div>,
        document.body,
      )}
    </div>
  );
};

export default AffichesSupportsPage;
