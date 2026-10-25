import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  ExternalLink,
  Layers3,
  Monitor,
  MousePointer2,
  Smartphone,
  Sparkles,
  X,
  ZoomIn,
} from "lucide-react";

interface MockupVisual {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
  description: string;
}

const mockups: MockupVisual[] = [
  {
    id: "laptop",
    title: "Version ordinateur portable",
    category: "Interface web",
    src: "/portfolio/01_Babelle-Ordinateur-portable.jpg",
    alt: "Mockup du site de l’Agence Babelle sur ordinateur portable",
    description: "Une présentation confortable pour découvrir les services de l’agence sur ordinateur.",
  },
  {
    id: "imac",
    title: "Version grand écran",
    category: "Interface web",
    src: "/portfolio/02_Babelle-Ordinateur-iMac.jpg",
    alt: "Mockup du site de l’Agence Babelle sur iMac",
    description: "Une mise en page pensée pour les écrans de bureau et les grandes résolutions.",
  },
  {
    id: "smartphone",
    title: "Version mobile",
    category: "Responsive design",
    src: "/portfolio/03_Babelle-Smartphone.jpg",
    alt: "Mockup du site de l’Agence Babelle sur smartphone",
    description: "Une expérience adaptée à la navigation sur téléphone.",
  },
  {
    id: "roll-up",
    title: "Roll-up de salon",
    category: "Support événementiel",
    src: "/portfolio/04_Babelle-Roll-up-salon.jpg",
    alt: "Roll-up de l’Agence Babelle pour un salon professionnel",
    description: "Un support vertical pour renforcer la visibilité de la marque lors des événements.",
  },
  {
    id: "badge",
    title: "Badge hôtesse",
    category: "Accueil événementiel",
    src: "/portfolio/05_Babelle-Badge-hotesse.jpg",
    alt: "Mockup du badge hôtesse de l’Agence Babelle",
    description: "Une déclinaison de l’identité visuelle pour l’identification du personnel d’accueil.",
  },
  {
    id: "comptoir",
    title: "Comptoir d’accueil",
    category: "Aménagement de marque",
    src: "/portfolio/06_Babelle-Comptoir-accueil.jpg",
    alt: "Mockup du comptoir d’accueil de l’Agence Babelle",
    description: "Une présence de marque claire et cohérente sur le point d’accueil.",
  },
  {
    id: "papeterie",
    title: "Papeterie",
    category: "Supports de communication",
    src: "/portfolio/07_Babelle-Papeterie.jpg",
    alt: "Mockup de la papeterie de l’Agence Babelle",
    description: "Des supports imprimés alignés avec l’univers graphique de l’agence.",
  },
];

const webMockups = mockups.slice(0, 3);
const brandApplications = mockups.slice(3);

const WebDigitalPage = () => {
  const [selectedMockup, setSelectedMockup] = useState<MockupVisual | null>(null);

  useEffect(() => {
    if (!selectedMockup) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedMockup(null);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMockup]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-800">
      <Header />

      <main className="pt-20">
        {/* HERO — un seul projet présenté : Agence Babelle */}
        <section className="relative isolate overflow-hidden bg-slate-50 px-4 pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:pt-24">
          <div className="pointer-events-none absolute -right-28 -top-24 h-80 w-80 rounded-full border-[36px] border-[#1178B7]/[0.06] sm:h-[30rem] sm:w-[30rem]" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-32 left-[8%] h-72 w-72 rounded-full bg-[#F59C27]/10 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute left-0 top-0 h-1.5 w-28 bg-[#F59C27] sm:w-44" aria-hidden="true" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center" data-aos="fade-up">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1178B7]/15 bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#1178B7] shadow-sm sm:text-xs">
                <Code2 size={16} className="text-[#F59C27]" />
                Portfolio Web & ingénierie digitale
              </span>
              <h1 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
                Un projet web, <span className="text-[#1178B7]">une identité forte.</span>
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg md:text-xl">
                Découvrez le projet digital de l’Agence Babelle et ses déclinaisons visuelles, pensées pour offrir une présence cohérente sur différents supports.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="#projet-babelle"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1178B7] px-7 py-3 font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#F59C27] focus:outline-none focus:ring-4 focus:ring-[#1178B7]/20"
                >
                  Découvrir le projet <ArrowDown size={18} />
                </a>
                <Link
                  to="/devis"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#F59C27] bg-white px-7 py-3 font-extrabold text-[#1178B7] transition hover:bg-[#F59C27] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#F59C27]/20"
                >
                  Parler de mon site <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="mx-auto mt-12 flex max-w-5xl flex-wrap items-center justify-center gap-3 sm:mt-14 sm:gap-4" data-aos="fade-up" data-aos-delay="100">
              {[
                { label: "UI/UX Design", icon: MousePointer2 },
                { label: "Site vitrine", icon: Monitor },
                { label: "Responsive", icon: Smartphone },
                { label: "Communication multilingue", icon: Sparkles },
              ].map(({ label, icon: Icon }) => (
                <span key={label} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-600 shadow-sm sm:text-sm">
                  <Icon size={16} className="text-[#F59C27]" /> {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PRÉSENTATION DU PROJET UNIQUE */}
        <section id="projet-babelle" className="scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-9 flex flex-col gap-4 sm:mb-12 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl" data-aos="fade-up">
                <span className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#F59C27]">
                  <Sparkles size={16} /> Étude de projet
                </span>
                <h2 className="text-2xl font-black leading-tight text-slate-900 sm:text-3xl md:text-4xl">
                  Agence <span className="text-[#1178B7]">Babelle</span>
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
                  Site web événementiel et accueil corporate
                </p>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#1178B7]/15 bg-[#1178B7]/5 px-4 py-2 text-xs font-bold text-[#1178B7] sm:text-sm">
                <Layers3 size={16} className="text-[#F59C27]" /> Un seul projet présenté
              </span>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
              {/* Mockup principal ordinateur */}
              <button
                type="button"
                onClick={() => setSelectedMockup(webMockups[0])}
                className="group relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-3 text-left shadow-sm transition duration-300 hover:border-[#1178B7]/40 hover:shadow-xl sm:min-h-[360px] sm:p-6 lg:col-span-8 lg:min-h-[470px]"
                aria-label="Agrandir le mockup Babelle sur ordinateur portable"
                data-aos="fade-up"
              >
                <img
                  src={webMockups[0].src}
                  alt={webMockups[0].alt}
                  loading="lazy"
                  className="max-h-[430px] w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-extrabold text-[#1178B7] shadow-md sm:bottom-6 sm:right-6 sm:px-4">
                  <ZoomIn size={15} className="text-[#F59C27]" /> Voir en grand
                </span>
              </button>

              {/* Détails du seul projet */}
              <aside className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-4" data-aos="fade-up" data-aos-delay="100">
                <div>
                  <span className="inline-flex rounded-full bg-[#F59C27]/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#C87509] sm:text-xs">
                    Site événementiel & corporate
                  </span>
                  <h3 className="mt-5 text-2xl font-black leading-tight text-slate-900 sm:text-3xl">
                    Une présence digitale professionnelle
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                    Spécialisée dans l’accueil événementiel des salons professionnels internationaux et expositions, l’Agence Babelle dispose d’un personnel parfaitement bilingue français/anglais.
                  </p>
                </div>
                <div className="mt-8 border-t border-slate-100 pt-6">
                  <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-slate-400">Axes de conception</p>
                  <div className="flex flex-wrap gap-2">
                    {["UI/UX Design", "Site vitrine", "Responsive", "Multilingue"].map((tag) => (
                      <span key={tag} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600">{tag}</span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>

            {/* Interfaces sur iMac et smartphone */}
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {webMockups.slice(1).map((mockup, index) => (
                <button
                  key={mockup.id}
                  type="button"
                  onClick={() => setSelectedMockup(mockup)}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#F59C27]/70 hover:shadow-xl"
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  aria-label={`Agrandir : ${mockup.title}`}
                >
                  <div className="flex h-64 items-center justify-center overflow-hidden bg-slate-50 p-4 sm:h-80 sm:p-6">
                    <img src={mockup.src} alt={mockup.alt} loading="lazy" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.025]" />
                  </div>
                  <div className="flex items-center justify-between gap-4 border-t border-slate-100 px-5 py-4 sm:px-6">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#F59C27]">{mockup.category}</p>
                      <h3 className="mt-1 text-base font-extrabold text-slate-900 sm:text-lg">{mockup.title}</h3>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1178B7]/5 text-[#1178B7] transition group-hover:bg-[#F59C27] group-hover:text-white">
                      <ZoomIn size={18} />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* DÉCLINAISONS VISUELLES DU MÊME PROJET */}
        <section className="border-y border-slate-200 bg-slate-50 px-4 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-9 max-w-3xl sm:mb-12" data-aos="fade-up">
              <span className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#F59C27]">
                <Layers3 size={16} /> Déclinaisons de marque
              </span>
              <h2 className="text-2xl font-black leading-tight text-slate-900 sm:text-3xl md:text-4xl">
                Un univers cohérent, <span className="text-[#1178B7]">sur plusieurs supports.</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
                En complément des interfaces du site, découvrez les mockups de supports associés à l’univers Babelle.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {brandApplications.map((mockup, index) => (
                <button
                  key={mockup.id}
                  type="button"
                  onClick={() => setSelectedMockup(mockup)}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#1178B7]/40 hover:shadow-xl sm:rounded-3xl"
                  data-aos="fade-up"
                  data-aos-delay={index * 70}
                  aria-label={`Agrandir : ${mockup.title}`}
                >
                  <div className="relative flex h-64 items-center justify-center overflow-hidden bg-white p-3 sm:h-72 sm:p-4">
                    <img src={mockup.src} alt={mockup.alt} loading="lazy" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.035]" />
                    <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-[#1178B7] shadow-sm transition group-hover:border-[#F59C27] group-hover:bg-[#F59C27] group-hover:text-white">
                      <ZoomIn size={16} />
                    </span>
                  </div>
                  <div className="border-t border-slate-100 p-4 sm:p-5">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#F59C27]">{mockup.category}</p>
                    <h3 className="mt-1 text-base font-extrabold text-slate-900">{mockup.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{mockup.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-14 sm:px-6 sm:py-20">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#0A3B5A] via-[#1178B7] to-[#0A3B5A] px-5 py-10 text-center text-white shadow-xl sm:rounded-[2.5rem] sm:px-10 sm:py-14">
            <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full border-[24px] border-white/5 sm:h-64 sm:w-64" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-24 left-[10%] h-48 w-48 rounded-full bg-[#F59C27]/15 blur-3xl" aria-hidden="true" />
            <div className="relative mx-auto max-w-3xl" data-aos="fade-up">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
                <Sparkles size={15} className="text-[#F59C27]" /> Votre projet commence ici
              </span>
              <h2 className="text-2xl font-black leading-tight sm:text-3xl md:text-4xl">
                Un site web qui reflète vraiment votre marque ?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg">
                Construisons une expérience digitale claire, responsive et alignée sur vos objectifs.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Link to="/devis" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F59C27] px-7 py-3 font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-white hover:text-[#1178B7] focus:outline-none focus:ring-4 focus:ring-white/40 sm:px-9">
                  Demander un devis <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/60 bg-white/5 px-7 py-3 font-bold text-white transition hover:border-white hover:bg-white hover:text-[#1178B7] focus:outline-none focus:ring-4 focus:ring-white/30 sm:px-9">
                  Nous contacter <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox responsive */}
      {selectedMockup && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/95 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Agrandissement : ${selectedMockup.title}`}
          onClick={() => setSelectedMockup(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#F59C27] text-white shadow-lg transition hover:rotate-90 hover:bg-white hover:text-[#1178B7] sm:right-7 sm:top-7 sm:h-12 sm:w-12"
            aria-label="Fermer l’image agrandie"
            onClick={(event) => { event.stopPropagation(); setSelectedMockup(null); }}
          >
            <X size={24} strokeWidth={2.5} />
          </button>
          <div className="flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex min-h-0 flex-1 items-center justify-center bg-slate-50 p-2 sm:p-5">
              <img src={selectedMockup.src} alt={selectedMockup.alt} className="max-h-[78vh] w-full object-contain" />
            </div>
            <div className="flex flex-col gap-1 border-t border-slate-200 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#F59C27]">{selectedMockup.category}</p>
                <p className="font-extrabold text-slate-900">{selectedMockup.title}</p>
              </div>
              <p className="text-xs text-slate-500">Cliquer en dehors de l’image ou appuyer sur Échap pour fermer.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebDigitalPage;
