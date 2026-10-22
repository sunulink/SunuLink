import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck, Brush, Layers3, Sparkles } from "lucide-react";

const AnimatedCounter = ({
  end,
  duration = 2000,
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

const LogoIdentitePage = () => {
  const stats = [
    { value: 15, suffix: "+", label: "Identités créées" },
    { value: 100, suffix: "%", label: "Design unique" },
    { value: 50, suffix: "+", label: "Logos livrés" },
    { value: 12, suffix: "/12", label: "Mois d’innovation" },
  ];

  const mainShowcase = [
    { id: 1, img: "/portfolio/1.png", title: "Branding industriel", category: "Identité & marque" },
    { id: 2, img: "/portfolio/2.png", title: "Identité corporate", category: "Image professionnelle" },
    { id: 3, img: "/portfolio/3.png", title: "Packaging design", category: "Design produit" },
    { id: 4, img: "/portfolio/MOCKUP 1 EMBALLAGE PRO.png", title: "Concept produit", category: "Packaging & création" },
  ];

  const otherRealizations = [
    "/portfolio/BRANDING PUB3.png",
    "/portfolio/BRANDING PUB4.png",
    "/portfolio/BRANDING PUB5.png",
    "/portfolio/FLYERS 2.png",
    "/portfolio/FLYERS.png",
    "/portfolio/MOCKUP 2 EMBALLAGES PRO.png",
    "/portfolio/MOCKUP SACHET.png",
    "/portfolio/BOUTEILLE 2.png",
  ];

  // Les nouveaux fichiers fournis dans /img remplacent les anciennes versions des mêmes marques.
  // Les autres logos déjà présents dans /portfolio sont conservés.
  const logoGrid = [
    { name: "Babelle", logo: "/portfolio/Babelle-Logo-violet.png" },
    { name: "BDA Service", logo: "/portfolio/BDA-Logo-couleur.png" },
    { name: "FreshUP", logo: "/portfolio/FreshUP-Logo-couleur.png" },
    { name: "Linguere Oil", logo: "/portfolio/Linguere_couleur.png" },
    { name: "Identité couleur", logo: "/portfolio/logo_couleur.png" },
    { name: "Dykha", logo: "/portfolio/logo_couleur_dykha.png" },
    { name: "Identité originale", logo: "/portfolio/logo_or_original.png" },
    { name: "Soso", logo: "/portfolio/Soso_logo.png" },
    { name: "Welli", logo: "/portfolio/Welli_logo_vert.png" },
    { name: "Zami", logo: "/portfolio/Zami_logo.png" },
    { name: "SunuLink", logo: "/portfolio/logo-sunulink.png" },
    { name: "Sarataa", logo: "/portfolio/logo-sarataa.png" },
    { name: "Telemarck", logo: "/portfolio/logo-telemarck.png" },
    { name: "Café Délices", logo: "/portfolio/logo-cafe.png" },
    { name: "Bokk Dem", logo: "/portfolio/logo-bokk-dem.png" },
    { name: "FemeZon", logo: "/portfolio/femezon-logo.png" },
    { name: "Bazar Service", logo: "/portfolio/logo-bazar-service.png" },
    { name: "SCI La Promobilière", logo: "/portfolio/logo-sci-la-promobiliere.png" },
    { name: "Biba Séduction", logo: "/portfolio/logo-biba-seduction.png" },
    { name: "Faddeco", logo: "/portfolio/logo-faddeco.png" },
    { name: "Gainde", logo: "/portfolio/logo-gainde.png" },
    { name: "Nataa", logo: "/portfolio/logo-nataa.png" },
    { name: "Soly International", logo: "/portfolio/logo-soly-internationnal.png" },
    { name: "Senhorti Group", logo: "/portfolio/logo-senhorti-group.png" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-800">
      <Header />

      <main className="pb-16 sm:pb-20">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0A3B5A] via-[#1178B7] to-[#0B527E] px-4 pb-12 pt-28 text-white sm:px-6 sm:pb-16 sm:pt-32 lg:pb-20">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-[38px] border-white/5 sm:h-96 sm:w-96" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-28 left-[12%] h-72 w-72 rounded-full bg-[#F59C27]/15 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-0 h-1.5 w-32 bg-[#F59C27] sm:w-48" aria-hidden="true" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="max-w-3xl" data-aos="fade-up">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur sm:text-sm">
                <Sparkles size={16} className="text-[#F59C27]" />
                Branding · Design · Identité
              </span>
              <h1 className="mb-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Logo & <span className="text-[#F59C27]">Identité visuelle</span>
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
                L’essence de votre marque, traduite en une identité distinctive, cohérente et conçue pour durer.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F59C27] px-7 py-3 font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#1178B7] focus:outline-none focus:ring-4 focus:ring-white/40">
                  Construire mon identité <ArrowRight size={18} />
                </Link>
                <a href="#realisations" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/50 bg-white/5 px-7 py-3 font-bold text-white transition-all duration-300 hover:border-[#F59C27] hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/30">
                  Voir nos réalisations
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none" data-aos="fade-up" data-aos-delay="120">
              <div className="absolute -inset-3 rounded-[2rem] border border-white/20" aria-hidden="true" />
              <div className="relative grid grid-cols-2 gap-3 rounded-[1.75rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-sm sm:gap-4 sm:p-4">
                <div className="flex aspect-square items-center justify-center rounded-2xl bg-white p-4 shadow-lg">
                  <img src="/portfolio/BDA-Logo-couleur.png" alt="Logo BDA Service" className="max-h-full max-w-full object-contain" loading="lazy" />
                </div>
                <div className="flex aspect-square items-center justify-center rounded-2xl bg-white p-4 shadow-lg">
                  <img src="/portfolio/FreshUP-Logo-couleur.png" alt="Logo FreshUP" className="max-h-full max-w-full object-contain" loading="lazy" />
                </div>
                <div className="flex aspect-square items-center justify-center rounded-2xl bg-white p-4 shadow-lg">
                  <img src="/portfolio/Welli_logo_vert.png" alt="Logo Welli" className="max-h-full max-w-full object-contain" loading="lazy" />
                </div>
                <div className="flex aspect-square items-center justify-center rounded-2xl bg-white p-4 shadow-lg">
                  <img src="/portfolio/Zami_logo.png" alt="Logo Zami" className="max-h-full max-w-full object-contain" loading="lazy" />
                </div>
              </div>
              <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-[#0A3B5A] px-4 py-2 text-xs font-semibold text-white shadow-xl sm:text-sm">
                <BadgeCheck size={16} className="text-[#F59C27]" />
                Des identités pensées pour se distinguer
              </div>
            </div>
          </div>
        </section>

        {/* CHIFFRES CLÉS */}
        <section className="relative z-10 px-4 pt-8 sm:px-6 sm:pt-10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="group rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F59C27]/60 hover:shadow-lg sm:rounded-3xl sm:p-7" data-aos="fade-up" data-aos-delay={index * 70}>
                <div className="mb-2 text-3xl font-black tracking-tight text-[#1178B7] sm:text-4xl md:text-5xl">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs font-semibold text-slate-500 sm:text-sm">{stat.label}</p>
                <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-[#F59C27] transition-all duration-300 group-hover:w-16" />
              </div>
            ))}
          </div>
        </section>

        {/* SÉLECTION DE RÉALISATIONS */}
        <section id="realisations" className="px-4 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14" data-aos="fade-up">
              <span className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#F59C27]">
                <Brush size={16} /> Portfolio créatif
              </span>
              <h2 className="text-2xl font-black tracking-tight text-[#1178B7] sm:text-3xl md:text-4xl">
                Des identités qui <span className="text-[#F59C27]">prennent forme</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
                De la réflexion stratégique aux supports concrets, chaque création traduit une intention et renforce la présence de la marque.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {mainShowcase.map((item, index) => (
                <article
                  key={item.id}
                  className="group rounded-3xl bg-gradient-to-br from-[#1178B7] via-[#1178B7]/70 to-[#F59C27] p-[2px] shadow-[0_10px_30px_rgba(17,120,183,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(245,156,39,0.22)]"
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.35rem] border border-white/80 bg-slate-100">
                    <img src={item.img} alt={item.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062B43]/90 via-[#062B43]/10 to-transparent" aria-hidden="true" />
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <span className="mb-2 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur sm:text-xs">{item.category}</span>
                      <h3 className="text-lg font-extrabold text-white sm:text-xl">{item.title}</h3>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AUTRES RÉALISATIONS : RUBAN DÉFILANT */}
        <section className="overflow-hidden border-y border-slate-200 bg-slate-50 py-14 sm:py-16">
          <div className="mx-auto mb-9 max-w-7xl px-4 text-center sm:px-6 sm:mb-12">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#F59C27]">Un aperçu de notre savoir-faire</p>
            <h2 className="text-2xl font-black uppercase tracking-tight text-[#1178B7] sm:text-3xl md:text-4xl">
              D’autres <span className="text-[#F59C27]">réalisations</span>
            </h2>
          </div>
          <div className="animate-marquee flex w-max items-stretch gap-5 whitespace-nowrap px-3 sm:gap-7">
            {[...otherRealizations, ...otherRealizations].map((img, index) => (
              <div
                key={`${img}-${index}`}
                className="group h-[360px] w-[min(76vw,290px)] flex-shrink-0 rounded-[1.6rem] bg-gradient-to-br from-[#1178B7] via-[#1178B7]/70 to-[#F59C27] p-[3px] shadow-[0_12px_30px_rgba(17,120,183,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(245,156,39,0.22)] sm:h-[440px] sm:w-[330px]"
              >
                <div className="h-full w-full overflow-hidden rounded-[1.4rem] border border-white/80 bg-white">
                  <img
                    src={img}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    alt={`Réalisation graphique ${index % otherRealizations.length + 1}`}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GALERIE DE LOGOS */}
        <section className="px-4 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0A3B5A] via-[#1178B7] to-[#0B527E] p-5 shadow-2xl sm:rounded-[2.5rem] sm:p-8 md:p-12">
            <div className="mb-9 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl text-white" data-aos="fade-up">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
                  <Layers3 size={15} className="text-[#F59C27]" /> Portfolio de marques
                </span>
                <h2 className="text-2xl font-black uppercase leading-tight sm:text-3xl md:text-4xl">
                  Nos créations <span className="text-[#F59C27]">logotypes</span>
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
                  Une sélection d’identités de marque conçues pour refléter la personnalité, les ambitions et l’univers de chaque organisation.
                </p>
              </div>
              <Link to="/contact" className="shrink-0" data-aos="fade-up" data-aos-delay="80">
                <Button className="min-h-12 w-full rounded-full bg-[#F59C27] px-7 font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[#1178B7] sm:w-auto sm:px-9">
                  Démarrer un projet <ArrowRight size={17} className="ml-2" />
                </Button>
              </Link>
            </div>

            <div className="rounded-[1.5rem] border border-white/20 bg-white/10 p-3 backdrop-blur-md sm:rounded-[2rem] sm:p-5 md:p-7">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {logoGrid.map((logo, index) => (
                  <div key={`${logo.name}-${index}`} className="group flex min-h-[140px] flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F59C27] hover:shadow-xl sm:min-h-[160px] sm:p-5">
                    <div className="flex h-20 w-full items-center justify-center sm:h-24">
                      <img src={logo.logo} alt={`Logo ${logo.name}`} loading="lazy" className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <p className="mt-3 line-clamp-1 text-xs font-bold text-slate-500 transition-colors group-hover:text-[#1178B7] sm:text-sm">{logo.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 text-center text-xs leading-relaxed text-white/65">
              Chaque logo illustre une identité propre : formes, couleurs et expression sont adaptées à l’univers de la marque.
            </p>
          </div>
        </section>

        {/* BANDEAU DE LOGOS EN DÉFILEMENT */}
        <section className="overflow-hidden border-y border-slate-100 bg-white py-8 sm:py-10" aria-label="Défilement des identités de marque">
          <div className="animate-marquee-slow flex w-max items-center gap-5 sm:gap-8">
            {[...logoGrid, ...logoGrid].map((logo, index) => (
              <div key={`${logo.name}-marquee-${index}`} className="flex h-20 w-36 flex-shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white p-4 transition-all hover:border-[#F59C27]/50 hover:shadow-md sm:h-24 sm:w-44">
                <img src={logo.logo} alt={`Logo ${logo.name}`} loading="lazy" className="h-full w-full object-contain" />
              </div>
            ))}
          </div>
        </section>

        {/* APPEL À L'ACTION */}
        <section className="px-4 py-14 sm:px-6 sm:py-20">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#0A3B5A] via-[#1178B7] to-[#0A3B5A] px-6 py-10 text-center text-white shadow-2xl sm:rounded-[2.5rem] sm:px-10 sm:py-12 md:px-14 md:py-14">
            <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full border-[24px] border-white/5 sm:h-64 sm:w-64" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-24 left-[10%] h-48 w-48 rounded-full bg-[#F59C27]/10 blur-3xl" aria-hidden="true" />
            <div className="relative mx-auto max-w-3xl" data-aos="fade-up">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
                <Sparkles size={15} className="text-[#F59C27]" /> Votre projet commence ici
              </span>
              <h2 className="text-2xl font-black leading-tight sm:text-3xl md:text-4xl">
                Donnons à votre marque une identité qui <span className="text-[#F59C27]">se distingue.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg">
                Parlons de votre projet et construisons ensemble un univers visuel clair, cohérent et mémorable.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F59C27] px-7 py-3 font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#1178B7] focus:outline-none focus:ring-4 focus:ring-white/40 sm:px-9">
                  Parlons de votre marque <ArrowRight size={18} />
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

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 42s linear infinite;
        }
        .animate-marquee-slow {
          animation: marquee 55s linear infinite;
        }
        .animate-marquee:hover,
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee,
          .animate-marquee-slow {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoIdentitePage;
