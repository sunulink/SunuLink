
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Image as ImageIcon,
  Video,
  Package,
  Globe,
  FileText,
  Palette,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Users,
  Target,
  Quote,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";

const SUNU_BLUE = "#1178B7";
const SUNU_ORANGE = "#F59C27";

// Images hébergées sur Unsplash .
const IMAGE_HERO =
  "https://images.unsplash.com/photo-1739302750702-e26a61113758?auto=format&fit=crop&w=2200&q=85";

const categories = [
  {
    icon: Palette,
    title: "Logo & Identité visuelle",
    examples:
      "Création de logos professionnels, chartes graphiques et identités de marque cohérentes.",
    projects: "15+",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=85",
    link: "/realisations/logo-identite",
  },
  {
    icon: FileText,
    title: "Affiches & supports print",
    examples:
      "Flyers, affiches, dépliants, PLV, roll-up et supports de communication imprimés.",
    projects: "30+",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85",
    link: "/realisations/print-affiches",
  },
  {
    icon: Palette,
    title: "Branding & univers graphiques",
    examples:
      "Couleurs, typographies, guidelines et univers visuels reconnaissables.",
    projects: "12+",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    link: "/realisations/branding-complet",
  },
  {
    icon: ImageIcon,
    title: "Images & photographies",
    examples:
      "Shooting produits, photographies corporate et mises en scène professionnelles.",
    projects: "25+",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=85",
    link: "/realisations/photo-shooting",
  },
  {
    icon: Video,
    title: "Vidéos & animations",
    examples:
      "Teasers, films institutionnels, spots publicitaires et animations vidéo.",
    projects: "18+",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=85",
    link: "/realisations/video-animation",
  },
  {
    icon: Package,
    title: "Design produit & Packaging",
    examples:
      "Étiquettes, emballages, visuels produits et présentations de concepts.",
    projects: "10+",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1200&q=85",
    link: "/realisations/design-packaging",
  },
  {
    icon: Globe,
    title: "Web & Digital",
    examples:
      "Sites web, interfaces, expérience utilisateur et contenus digitaux.",
    projects: "20+",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    link: "/realisations/web-digital",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Projets réalisés", icon: Briefcase },
  { value: 30, suffix: "+", label: "Clients satisfaits", icon: Users },
  { value: 10, suffix: "+", label: "Secteurs d'activité", icon: Target },
  { value: 95, suffix: "%", label: "Taux de satisfaction", icon: CheckCircle },
];

// Compteur animé avec déclenchement lorsque l'élément devient visible.
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
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Respecte la préférence système de réduction des animations.
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setCount(end);
      return;
    }

    let startTime: number | null = null;
    let animationFrame = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} aria-label={`${end}${suffix}`}>
      {count}
      {suffix}
    </div>
  );
};

const RealisationsPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-800">
      <Header />

      <main className="pt-20">
        {/* HERO : photo, dégradé bleu et accent orange */}
        <section className="relative isolate flex min-h-[360px] items-center overflow-hidden bg-[#1178B7] sm:min-h-[390px] lg:min-h-[410px]">
          <img
            src={IMAGE_HERO}
            alt=""
            aria-hidden="true"
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-center"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          {/* Le dégradé assure la lisibilité du texte sur la photo. */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#1178B7]/95 via-[#1178B7]/85 to-[#1178B7]/35"
            aria-hidden="true"
          />

          <div
            className="absolute bottom-0 left-0 h-1.5 w-32 bg-[#F59C27] sm:w-48"
            aria-hidden="true"
          />

          <div className="container relative z-10 mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:py-16">
            <div className="max-w-3xl" data-aos="fade-up">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur-sm sm:text-sm">
                <Sparkles size={16} className="text-[#F59C27]" />
                Notre portfolio
              </div>

              <h1 className="mb-5 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Des projets variés,
                <br className="hidden sm:block" />
                <span className="text-[#F59C27]">
                  une passion commune.
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg md:text-xl">
                Découvrez une sélection de nos réalisations en identité
                visuelle, création graphique, audiovisuel et digital.
                Chaque projet traduit une ambition : donner vie aux idées.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#categories"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F59C27] px-7 py-3 font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#1178B7] hover:ring-2 hover:ring-[#F59C27] focus:outline-none focus:ring-4 focus:ring-white/40 motion-reduce:transform-none"
                >
                  Explorer les réalisations
                  <ArrowRight size={18} />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-[#F59C27] bg-[#1178B7] px-7 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F59C27] focus:outline-none focus:ring-4 focus:ring-white/40 motion-reduce:transform-none"
                >
                  Parlons de votre projet
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/95">
                {[
                  "Créativité",
                  "Exigence",
                  "Impact",
                ].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <CheckCircle
                      size={17}
                      className="text-[#F59C27]"
                    />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CHIFFRES CLÉS */}
        <section
          aria-label="Nos chiffres clés"
          className="relative z-10 -mt-5 px-5 sm:px-6"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="group rounded-2xl border border-slate-200 border-t-4 border-t-[#F59C27] bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6"
                  data-aos="fade-up"
                  data-aos-delay={index * 70}
                >
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold leading-snug text-slate-600 sm:text-sm">
                      {stat.label}
                    </span>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#1178B7]/10 text-[#1178B7] transition-all duration-300 group-hover:bg-[#F59C27] group-hover:text-white">
                      <Icon size={19} />
                    </span>
                  </div>

                  <div className="text-3xl font-black tracking-tight text-[#1178B7] sm:text-4xl">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CATÉGORIES DE RÉALISATIONS */}
        <section
          id="categories"
          className="scroll-mt-24 px-5 py-16 sm:px-6 md:py-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-[#F59C27]">
                Nos expertises en images
              </p>

              <h2 className="mb-4 text-3xl font-black leading-tight text-[#1178B7] sm:text-4xl md:text-5xl">
                Nos catégories de{" "}
                <span className="text-[#F59C27]">réalisations</span>
              </h2>

              <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                De la première idée à la livraison finale, découvrez les
                univers créatifs dans lesquels nous accompagnons nos clients.
              </p>

              <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#F59C27]" />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {categories.map((category, index) => {
                const Icon = category.icon;
                const useOrange = index % 2 === 1;

                return (
                  <Link
                    key={category.title}
                    to={category.link}
                    aria-label={`Découvrir nos réalisations : ${category.title}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 border-t-4 border-t-[#1178B7] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-t-[#F59C27] hover:shadow-[0_18px_45px_rgba(17,120,183,0.15)] focus:outline-none focus:ring-4 focus:ring-[#F59C27]/40 motion-reduce:transform-none"
                    data-aos="fade-up"
                    data-aos-delay={index * 60}
                  >
                    {/* Image de la catégorie */}
                    <div className="relative h-44 overflow-hidden bg-[#1178B7] sm:h-48">
                      <img
                        src={category.image}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />

                      <div
                        className="absolute inset-0 bg-gradient-to-t from-[#1178B7]/90 via-[#1178B7]/20 to-transparent"
                        aria-hidden="true"
                      />

                      <div className="absolute left-4 top-4">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-[#1178B7]/85 px-3 py-2 text-xs font-bold text-white backdrop-blur-sm">
                          <span
                            className={`h-2 w-2 rounded-full ${
                              useOrange
                                ? "bg-[#F59C27]"
                                : "bg-white"
                            }`}
                          />
                          Portfolio SunuLink
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 flex items-center gap-3">
                        <span
                          className={`flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md transition-all duration-300 group-hover:rotate-3 ${
                            useOrange
                              ? "bg-[#F59C27]"
                              : "bg-[#1178B7]"
                          }`}
                        >
                          <Icon size={24} />
                        </span>

                        <span className="rounded-full bg-white px-3 py-1.5 text-sm font-extrabold text-[#1178B7]">
                          {category.projects} projets
                        </span>
                      </div>
                    </div>

                    {/* Contenu de la carte */}
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <h3 className="mb-3 text-xl font-extrabold leading-snug text-[#1178B7] transition-colors duration-300 group-hover:text-[#F59C27] sm:text-2xl">
                        {category.title}
                      </h3>

                      <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                        {category.examples}
                      </p>

                      <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                        <span className="text-sm font-extrabold text-[#1178B7] transition-colors duration-300 group-hover:text-[#F59C27]">
                          Découvrir
                        </span>

                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1178B7] text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#F59C27]">
                          <ArrowRight size={19} />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* TÉMOIGNAGES */}
        <section className="px-5 py-8 sm:px-6 md:py-12">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-3xl border border-[#1178B7]/15 bg-slate-50 px-6 py-10 sm:px-10 sm:py-14 md:px-14">
              <div
                className="absolute right-0 top-0 h-2 w-32 bg-[#F59C27] sm:w-48"
                aria-hidden="true"
              />

              <div className="relative mx-auto max-w-3xl text-center">
                <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1178B7] text-white shadow-md">
                  <Quote size={28} />
                </span>

                <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-[#F59C27]">
                  La confiance avant tout
                </p>

                <h2 className="mb-7 text-3xl font-black text-[#1178B7] sm:text-4xl">
                  Ce qu’ils disent de nous
                </h2>

                <blockquote className="text-lg italic leading-relaxed text-slate-700 sm:text-xl">
                  « La qualité, la rapidité et le professionnalisme sont les
                  forces les plus souvent citées. »
                </blockquote>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    to="/contact"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1178B7] px-7 py-3 font-extrabold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#F59C27] focus:outline-none focus:ring-4 focus:ring-[#F59C27]/40"
                  >
                    <Quote size={18} />
                    Laisser un avis
                  </Link>

                  <a
                    href="#categories"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-[#F59C27] bg-white px-7 py-3 font-extrabold text-[#1178B7] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F59C27] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#F59C27]/40"
                  >
                    Voir nos catégories
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPEL À L'ACTION FINAL */}
        <section className="px-5 py-14 sm:px-6 md:py-20">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#1178B7] px-6 py-10 text-center shadow-xl sm:px-12 sm:py-14 md:py-16">
            {/* Accent décoratif aux couleurs de la marque */}
            <div
              className="absolute -right-12 -top-16 h-48 w-48 rounded-full border-[24px] border-[#F59C27]/50 sm:h-64 sm:w-64"
              aria-hidden="true"
            />

            <div
              className="absolute -bottom-24 -left-16 h-48 w-48 rounded-full border-[22px] border-white/10 sm:h-64 sm:w-64"
              aria-hidden="true"
            />

            <div className="relative z-10 mx-auto max-w-3xl">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-[#F59C27]">
                Votre prochain projet
              </p>

              <h2 className="mb-5 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
                Et si nous donnions vie à votre prochaine idée ?
              </h2>

              <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
                Vous avez une idée, une marque à développer ou un projet à
                concrétiser ? Échangeons sur vos objectifs et imaginons
                ensemble une solution adaptée.
              </p>

              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F59C27] px-8 py-4 font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#1178B7] hover:ring-2 hover:ring-[#F59C27] focus:outline-none focus:ring-4 focus:ring-white/40 motion-reduce:transform-none sm:px-10"
              >
                Parlons de votre projet
                <ArrowRight size={19} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RealisationsPage;
