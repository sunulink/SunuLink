import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  FolderOpen,
  Image as ImageIcon,
  Maximize2,
  Package,
  Sparkles,
  X,
} from "lucide-react";

const SUNU_BLUE = "#1178B7";
const SUNU_ORANGE = "#F59C27";

type PrintProject = {
  id: string;
  name: string;
  category: string;
  description: string;
  images: string[];
};

const projects: PrintProject[] = [
  {
    id: "packaging",
    name: "Packaging & face avant",
    category: "Packaging produit",
    description:
      "Des visuels de face avant conçus pour présenter clairement les produits et donner de la présence à la gamme.",
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
      "Une série de six créations réunies sous une même identité pour construire une présence visuelle cohérente.",
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
      "Une série de publications de marque organisées pour présenter les produits et rythmer la communication.",
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
      "Des créations produit autour de plusieurs références de la gamme, du soin ciblé à la présentation de l’ensemble.",
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
      "Une série de visuels produit mettant en avant différentes références et la cohérence de leur présentation.",
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
      "Six créations regroupées par projet pour une lecture plus simple de l’univers de marque et de ses déclinaisons.",
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
      "Une collection de publications réunies sous un même projet pour préserver la cohérence visuelle de la marque.",
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

const bentoItems = [
  {
    image: "/portfolio/Face-avant_Banane.jpg",
    title: "Packaging produit",
    subtitle: "Banane · Moringa · Sorgho",
    className: "col-span-2 row-span-2 min-h-[290px] md:min-h-0",
  },
  {
    image: "/portfolio/Nataa-ad1_pure-shea.jpg",
    title: "Nataa",
    subtitle: "Soins & cosmétiques",
    className: "col-span-1 row-span-2 min-h-[290px] md:min-h-0",
  },
  {
    image: "/portfolio/Soso-01.jpg",
    title: "Soso",
    subtitle: "Communication de marque",
    className: "col-span-1 row-span-1 min-h-[170px] md:min-h-0",
  },
  {
    image: "/portfolio/Linguere-oil-Post-01.jpg",
    title: "Linguere Oil",
    subtitle: "Supports de communication",
    className: "col-span-1 row-span-1 min-h-[170px] md:min-h-0",
  },
  {
    image: "/portfolio/Welli-Post-01.jpg",
    title: "Welli",
    subtitle: "Campagne de marque",
    className: "col-span-1 row-span-1 min-h-[170px] md:min-h-0",
  },
  {
    image: "/portfolio/Zami-Post-01.jpg",
    title: "Zami",
    subtitle: "Série de publications",
    className: "col-span-2 row-span-1 min-h-[170px] md:min-h-0",
  },
];

const AnimatedCounter = ({
  end,
  duration = 1800,
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
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
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

  return (
    <div ref={counterRef}>
      {count}
      {suffix}
    </div>
  );
};

const AffichesSupportsPage = () => {
  const [activeProjectFilter, setActiveProjectFilter] = useState("all");
  const [focusProjectIndex, setFocusProjectIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const galleryRef = useRef<HTMLElement>(null);

  const stats = [
    { value: 76, suffix: "+", label: "Supports créés" },
    { value: 100, suffix: "%", label: "Haute résolution" },
    { value: 45, suffix: "+", label: "Clients Print" },
    { value: 10, suffix: "/10", label: "Finition premium" },
  ];

  const filteredProjects =
    activeProjectFilter === "all"
      ? projects
      : projects.filter((project) => project.id === activeProjectFilter);

  const focusProject = projects[focusProjectIndex];

  const nextFocusProject = () => {
    setFocusProjectIndex((previous) => (previous + 1) % projects.length);
  };

  const previousFocusProject = () => {
    setFocusProjectIndex((previous) => (previous - 1 + projects.length) % projects.length);
  };

  const showProjectInGallery = (projectId: string) => {
    setActiveProjectFilter(projectId);
    galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Bloquer le défilement et fermer la lightbox avec Échap.
  useEffect(() => {
    if (!selectedImg) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImg]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-800">
      <Header />

      <main className="pb-16 sm:pb-20">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#082F4A] via-[#1178B7] to-[#0B527E] px-4 pb-14 pt-28 text-white sm:px-6 sm:pb-20 sm:pt-32">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-[36px] border-white/5 sm:h-96 sm:w-96" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-28 left-[12%] h-64 w-64 rounded-full bg-[#F59C27]/15 blur-3xl" aria-hidden="true" />
          <div className="absolute right-0 top-0 h-1.5 w-32 bg-[#F59C27] sm:w-48" aria-hidden="true" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
            <div className="max-w-3xl" data-aos="fade-up">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur sm:text-sm">
                <Sparkles size={16} className="text-[#F59C27]" />
                Affiches · Print · Packaging
              </span>
              <h1 className="mb-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                AFFICHES & <span className="text-[#F59C27]">SUPPORTS PRINT</span>
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
                Des créations imprimées et visuelles pensées pour présenter vos produits, valoriser votre marque et rendre chaque message plus mémorable.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#galerie-projets"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F59C27] px-7 py-3 font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#1178B7] focus:outline-none focus:ring-4 focus:ring-white/40"
                >
                  Explorer les réalisations <ArrowRight size={18} />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/50 bg-white/5 px-7 py-3 font-bold text-white transition-all duration-300 hover:border-[#F59C27] hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/30"
                >
                  Demander un devis Print
                </Link>
              </div>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
                <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-[#F59C27]" /> Identité cohérente</span>
                <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-[#F59C27]" /> Supports par projet</span>
                <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-[#F59C27]" /> Détails accessibles</span>
              </div>
            </div>

            {/* Aperçu des projets : grille responsive avec des images plus larges */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none" data-aos="fade-up" data-aos-delay="120">
              <div className="absolute -inset-3 rounded-[2rem] border border-white/20" aria-hidden="true" />
              <div className="relative grid grid-cols-2 gap-2.5 rounded-[1.75rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-sm sm:grid-cols-3 sm:gap-3 sm:p-4 lg:grid-cols-2">
                {bentoItems.map((item) => (
                  <button
                    type="button"
                    key={`hero-${item.image}`}
                    onClick={() => setSelectedImg(item.image)}
                    className="group relative aspect-[4/3] min-w-0 overflow-hidden rounded-xl border border-white/15 bg-[#082F4A]/30 text-left shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F59C27] hover:shadow-xl sm:rounded-2xl"
                    aria-label={`Agrandir : ${item.title}`}
                  >
                    <img src={item.image} alt={item.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062B43]/85 via-[#062B43]/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3">
                      <p className="text-xs font-extrabold leading-tight text-white sm:text-sm">{item.title}</p>
                      <p className="mt-1 hidden text-[11px] leading-tight text-white/85 sm:block">{item.subtitle}</p>
                    </div>
                    <span className="absolute right-2 top-2 rounded-full border border-white/30 bg-black/30 p-1.5 text-white opacity-0 transition-opacity group-hover:opacity-100">
                      <Maximize2 size={14} />
                    </span>
                  </button>
                ))}
              </div>
              <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-[#082F4A] px-4 py-2 text-xs font-semibold text-white shadow-xl sm:text-sm">
                <BadgeCheck size={16} className="text-[#F59C27]" />
                Une sélection de nos projets print
              </div>
            </div>
          </div>
        </section>

        {/* CHIFFRES CLÉS */}
        <section className="relative z-10 px-4 pt-9 sm:px-6 sm:pt-12">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F59C27]/60 hover:shadow-lg sm:rounded-3xl sm:p-7"
                data-aos="fade-up"
                data-aos-delay={index * 70}
              >
                <div className="mb-2 text-3xl font-black tracking-tight text-[#1178B7] sm:text-4xl md:text-5xl">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs font-semibold text-slate-500 sm:text-sm">{stat.label}</p>
                <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-[#F59C27] transition-all duration-300 group-hover:w-16" />
              </div>
            ))}
          </div>
        </section>

        {/* GALERIE BENTO : inspiration du visuel joint */}
        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl" data-aos="fade-up">
                <span className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#F59C27]">
                  <ImageIcon size={16} /> Portfolio créatif
                </span>
                <h2 className="text-2xl font-black tracking-tight text-[#1178B7] sm:text-3xl md:text-4xl">
                  Des supports qui <span className="text-[#F59C27]">prennent forme</span>
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-right" data-aos="fade-up">
                Une galerie éditoriale, composée de grands visuels et de formats complémentaires, pour découvrir plusieurs univers de marque d’un seul regard.
              </p>
            </div>

            <div className="grid grid-cols-2 auto-rows-[135px] gap-3 sm:auto-rows-[170px] sm:gap-4 lg:grid-cols-4 lg:auto-rows-[160px]" data-aos="fade-up">
              {bentoItems.map((item) => (
                <button
                  type="button"
                  key={`bento-${item.image}`}
                  onClick={() => setSelectedImg(item.image)}
                  className={`group relative overflow-hidden rounded-2xl border-2 border-[#1178B7]/20 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F59C27] hover:shadow-[0_18px_40px_rgba(17,120,183,0.17)] sm:rounded-3xl ${item.className}`}
                >
                  <img src={item.image} alt={item.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062B43]/85 via-[#062B43]/5 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
                    <span className="mb-1 inline-flex rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur sm:text-[10px]">Projet sélectionné</span>
                    <h3 className="text-sm font-extrabold text-white sm:text-lg">{item.title}</h3>
                    <p className="mt-1 hidden text-xs text-white/80 sm:block">{item.subtitle}</p>
                  </div>
                  <span className="absolute right-3 top-3 rounded-full border border-white/35 bg-[#082F4A]/65 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <Maximize2 size={15} />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* GALERIE DYNAMIQUE ORGANISÉE PAR PROJET */}
        <section id="galerie-projets" ref={galleryRef} className="scroll-mt-24 border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-12" data-aos="fade-up">
              <span className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#F59C27]">
                <FolderOpen size={16} /> Nos projets print
              </span>
              <h2 className="text-2xl font-black tracking-tight text-[#1178B7] sm:text-3xl md:text-4xl">
                Une galerie <span className="text-[#F59C27]">classée par projet</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
                Parcourez chaque univers séparément. Sélectionnez une marque pour afficher ses visuels, puis cliquez sur une image pour l’agrandir.
              </p>
            </div>

            <div className="mb-8 flex gap-2 overflow-x-auto pb-3 sm:flex-wrap sm:justify-center sm:overflow-visible" aria-label="Filtrer les projets">
              <button
                type="button"
                onClick={() => setActiveProjectFilter("all")}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-bold transition-all ${activeProjectFilter === "all" ? "border-[#1178B7] bg-[#1178B7] text-white shadow-md" : "border-slate-300 bg-white text-slate-600 hover:border-[#F59C27] hover:text-[#1178B7]"}`}
              >
                Tous les projets ({projects.length})
              </button>
              {projects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveProjectFilter(project.id)}
                  className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-bold transition-all ${activeProjectFilter === project.id ? "border-[#F59C27] bg-[#F59C27] text-white shadow-md" : "border-slate-300 bg-white text-slate-600 hover:border-[#F59C27] hover:text-[#1178B7]"}`}
                >
                  {project.name}
                </button>
              ))}
            </div>

            <div className="space-y-10">
              {filteredProjects.map((project) => (
                <section key={project.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 md:p-7">
                  <div className="mb-5 flex flex-col gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#F59C27] sm:text-xs">{project.category}</p>
                      <h3 className="text-xl font-black text-[#1178B7] sm:text-2xl">{project.name}</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">{project.description}</p>
                    </div>
                    <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#1178B7]/8 px-3.5 py-2 text-xs font-bold text-[#1178B7]">
                      <ImageIcon size={15} /> {project.images.length} visuel{project.images.length > 1 ? "s" : ""}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
                    {project.images.map((image, imageIndex) => (
                      <button
                        type="button"
                        key={image}
                        onClick={() => setSelectedImg(image)}
                        className="group relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-[#1178B7]/15 bg-slate-100 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#F59C27] hover:shadow-[0_12px_30px_rgba(17,120,183,0.16)]"
                        aria-label={`Agrandir ${project.name}, visuel ${imageIndex + 1}`}
                      >
                        <img src={image} alt={`${project.name} — visuel ${imageIndex + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#062B43]/65 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
                        <span className="absolute bottom-3 left-3 rounded-full border border-white/25 bg-[#082F4A]/70 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur sm:text-xs">
                          {String(imageIndex + 1).padStart(2, "0")} / {String(project.images.length).padStart(2, "0")}
                        </span>
                        <span className="absolute right-3 top-3 rounded-full bg-[#F59C27] p-2 text-white opacity-0 transition-opacity group-hover:opacity-100">
                          <Maximize2 size={14} />
                        </span>
                      </button>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        {/* FOCUS : UN PROJET À LA FOIS AU LIEU D'UN SLIDER D'IMAGES MÉLANGÉES */}
        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-9 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl" data-aos="fade-up">
                <span className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#F59C27]">
                  <Package size={16} /> Focus réalisations
                </span>
                <h2 className="text-2xl font-black tracking-tight text-[#1178B7] sm:text-3xl md:text-4xl">
                  Un projet à la fois, <span className="text-[#F59C27]">dans son univers</span>
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
                  Au lieu de faire défiler des images sans contexte, découvrez les projets l’un après l’autre avec leur sélection de visuels réunis.
                </p>
              </div>
              <div className="flex items-center gap-3" data-aos="fade-up">
                <span className="mr-1 text-xs font-extrabold uppercase tracking-wider text-slate-400 sm:text-sm">
                  {String(focusProjectIndex + 1).padStart(2, "0")} <span className="text-[#F59C27]">/</span> {String(projects.length).padStart(2, "0")}
                </span>
                <button type="button" onClick={previousFocusProject} aria-label="Projet précédent" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1178B7]/20 bg-white text-[#1178B7] shadow-sm transition-all hover:border-[#F59C27] hover:bg-[#F59C27] hover:text-white">
                  <ChevronLeft size={22} />
                </button>
                <button type="button" onClick={nextFocusProject} aria-label="Projet suivant" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F59C27] text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#1178B7]">
                  <ChevronRight size={22} />
                </button>
              </div>
            </div>

            <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_22px_60px_rgba(8,47,74,0.10)] lg:grid-cols-[0.78fr_1.22fr]" data-aos="fade-up">
              <div className="flex flex-col justify-between bg-gradient-to-br from-[#082F4A] via-[#1178B7] to-[#0B527E] p-6 text-white sm:p-8 md:p-10">
                <div>
                  <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#F59C27] sm:text-xs">
                    {focusProject.category}
                  </span>
                  <h3 className="mt-5 text-2xl font-black leading-tight sm:text-3xl md:text-4xl">{focusProject.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">{focusProject.description}</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/15 pt-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F59C27] text-white"><ImageIcon size={21} /></span>
                    <div>
                      <p className="font-extrabold">{focusProject.images.length} visuel{focusProject.images.length > 1 ? "s" : ""} dans ce projet</p>
                      <p className="mt-0.5 text-xs text-white/65">Cliquez sur une image pour l’agrandir.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <button type="button" onClick={() => showProjectInGallery(focusProject.id)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#F59C27] px-5 py-3 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[#1178B7]">
                    Voir tout le projet <ArrowRight size={17} />
                  </button>
                  <Link to="/contact" className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/40 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/10">
                    Demander un projet similaire
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 sm:gap-4 sm:p-5 md:p-6">
                <button type="button" onClick={() => setSelectedImg(focusProject.images[0])} className="group relative col-span-2 aspect-[16/8] overflow-hidden rounded-2xl border-2 border-[#1178B7]/15 bg-white text-left transition-all hover:border-[#F59C27] sm:rounded-3xl">
                  <img src={focusProject.images[0]} alt={`${focusProject.name} — visuel principal`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062B43]/65 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-[#082F4A]/75 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">Visuel principal</span>
                  <span className="absolute right-4 top-4 rounded-full bg-[#F59C27] p-2 text-white"><Maximize2 size={15} /></span>
                </button>
                {focusProject.images.slice(1, 4).map((image, index) => (
                  <button type="button" key={image} onClick={() => setSelectedImg(image)} className="group relative aspect-[4/3] overflow-hidden rounded-xl border-2 border-[#1178B7]/15 bg-white text-left transition-all hover:border-[#F59C27] sm:rounded-2xl">
                    <img src={image} alt={`${focusProject.name} — aperçu ${index + 2}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute bottom-2 left-2 rounded-full bg-[#082F4A]/75 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur">Visuel {index + 2}</span>
                  </button>
                ))}
                {focusProject.images.length === 1 && (
                  <div className="col-span-2 flex min-h-24 items-center justify-center rounded-2xl border border-dashed border-[#1178B7]/25 bg-white px-4 text-center text-sm text-slate-500">
                    D’autres visuels pourront être ajoutés à ce projet au fil des nouvelles réalisations.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* LIGHTBOX */}
        {selectedImg && (
          <div
            className="fixed inset-0 z-[999] flex cursor-zoom-out items-center justify-center bg-[#031522]/95 p-3 backdrop-blur-sm sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Aperçu agrandi du support"
            onClick={() => setSelectedImg(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedImg(null)}
              className="absolute right-4 top-4 z-[1000] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#F59C27] text-white shadow-2xl transition-all hover:rotate-90 hover:bg-white hover:text-[#1178B7] sm:right-8 sm:top-8 sm:h-14 sm:w-14"
              aria-label="Fermer l’image agrandie"
            >
              <X size={27} strokeWidth={2.5} />
            </button>
            <img
              src={selectedImg}
              alt="Réalisation Print agrandie"
              className="max-h-[90vh] max-w-full cursor-default rounded-xl object-contain shadow-2xl sm:rounded-2xl"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        )}

        {/* CTA FINAL */}
        <section className="px-4 py-14 sm:px-6 sm:py-20">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#082F4A] via-[#1178B7] to-[#082F4A] px-6 py-10 text-center text-white shadow-2xl sm:rounded-[2.5rem] sm:px-10 sm:py-12 md:px-14 md:py-14">
            <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full border-[24px] border-white/5 sm:h-64 sm:w-64" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-24 left-[10%] h-48 w-48 rounded-full bg-[#F59C27]/10 blur-3xl" aria-hidden="true" />
            <div className="relative mx-auto max-w-3xl" data-aos="fade-up">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
                <Sparkles size={15} className="text-[#F59C27]" /> Votre projet commence ici
              </span>
              <h2 className="text-2xl font-black leading-tight sm:text-3xl md:text-4xl">
                Votre projet mérite <span className="text-[#F59C27]">une impression d’exception.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg">
                Parlons de votre besoin et construisons ensemble des supports imprimés et visuels adaptés à votre marque.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F59C27] px-7 py-3 font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#1178B7] focus:outline-none focus:ring-4 focus:ring-white/40 sm:px-9">
                  Démarrer mon projet Print <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/60 bg-white/5 px-7 py-3 font-bold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#1178B7] focus:outline-none focus:ring-4 focus:ring-white/30 sm:px-9">
                  Découvrir nos services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AffichesSupportsPage;
