import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  AlertCircle,
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  FileText,
  Filter,
  Globe,
  Lightbulb,
  Megaphone,
  MessageSquare,
  Palette,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ebooks, ebookFilters, ebookUniverses, type Ebook } from "@/data/ebooks";
import EbookDownloadModal from "@/components/EbookDownloadModal";

const BlogPage = () => {
  // États pour la Newsletter (Double étape de confirmation d'email)
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Étape 1 : Vérification de la correspondance des deux saisies
    if (email.trim().toLowerCase() !== confirmEmail.trim().toLowerCase()) {
      setErrorMessage("Les deux adresses email ne correspondent pas.");
      return;
    }

    // Étape 2 : Vérification locale rapide (localStorage)
    const storedSubscribers = JSON.parse(localStorage.getItem("sunulink_subscribers") || "[]");
    const normalizedEmail = email.trim().toLowerCase();

    if (storedSubscribers.includes(normalizedEmail)) {
      setErrorMessage("Cette adresse email est déjà inscrite à notre newsletter.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Étape 3 : Envoi et vérification anti-doublon sur Google Sheets
      const googleScriptUrl = "https://script.google.com/macros/s/AKfycbwKCFvCDnX2AvEk_JjzTbULzOctlYVDJ_kUdlWnvg8doA1cJUFZen-tbUANz9hVgA/exec"; 

      await fetch(googleScriptUrl, {
        method: "POST",
        mode: "no-cors", // Recommandé pour Google Apps Script afin d'éviter les blocages CORS globaux
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: normalizedEmail,
          date: new Date().toLocaleDateString("fr-FR")
        }),
      });

      // Étape 4 : Envoi de la notification d'abonnement via EmailJS
      const templateParams = {
        prenom: "Nouvel Abonné",
        nom: "Newsletter",
        email: normalizedEmail,
        telephone: "Non renseigné",
        objet: "Nouvelle inscription à la Newsletter du Blog",
        source: "Formulaire Newsletter Blog",
        message: `Une nouvelle inscription à la newsletter a été enregistrée avec l'adresse email suivante : ${normalizedEmail}`,
      };

      await emailjs.send(
        "service_ktbwzv5", 
        "template_pabmg78", 
        templateParams,
        "ShXDBB_RTc_F-EWm1" 
      );

      // Enregistrement de l'abonné dans le localStorage pour éviter les doublons futurs
      storedSubscribers.push(normalizedEmail);
      localStorage.setItem("sunulink_subscribers", JSON.stringify(storedSubscribers));

      setIsSuccess(true);
      setEmail("");
      setConfirmEmail("");
    } catch (error) {
      console.error("Erreur lors de l'inscription à la newsletter :", error);
      setErrorMessage("Une erreur est survenue lors de votre inscription. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [selectedEbook, setSelectedEbook] = useState<Ebook | null>(null);

  const filteredEbooks = activeFilter === "Tous"
    ? ebooks
    : ebooks.filter((ebook) => ebook.filters.includes(activeFilter));

  const iconMap: Record<string, LucideIcon> = {
    Lightbulb,
    TrendingUp,
    Megaphone,
    Target,
    Users,
    Palette,
    Globe,
    Briefcase,
    Sparkles,
    Award,
    MessageSquare,
    BookOpen,
    ShieldCheck,
    Search,
    Video,
    Calendar,
  };

  const openEbookDetail = (ebook: Ebook) => {
    navigate(`/ressources/${ebook.slug}`);
  };

  const handleCardKeyDown = (event: React.KeyboardEvent<HTMLElement>, ebook: Ebook) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openEbookDetail(ebook);
    }
  };



  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pb-20">
        {/* Hero Section */}
        <section className="relative min-h-[680px] sm:min-h-[620px] md:min-h-[560px] w-full overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=85&w=2200"
              alt="Professionnel consultant des documents et des ressources stratégiques"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#0B1220]/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0071BC]/50 via-[#0B1220]/30 to-[#F6A61A]/20" />
          </div>

          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto max-w-6xl px-5 sm:px-6 py-12 sm:py-14 md:py-10">
              <div className="max-w-4xl text-white">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] backdrop-blur-md mb-5">
                  <BookOpen className="w-4 h-4 text-sunuOrange" />
                  RESSOURCES &amp; EXPERTISE
                </span>

                <p className="text-sm sm:text-base md:text-lg font-black uppercase tracking-[0.18em] text-sunuOrange mb-2">
                  SUNULINK INSIGHTS
                </p>

                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-white/80 mb-5">
                  ÉDITION 2026–2027
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.98] tracking-tight mb-5">
                  COMPRENDRE. DÉCIDER. <span className="text-sunuOrange">TRANSFORMER.</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed mb-7">
                  Des idées, des méthodes et des stratégies pour faire grandir votre entreprise.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-3xl leading-relaxed mb-8">
                  Des ressources conçues pour les entreprises qui ne veulent pas simplement communiquer, mais construire une marque visible, crédible et performante.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href="#categories"
                    className="inline-flex items-center justify-center rounded-full bg-sunuOrange px-6 sm:px-8 py-3.5 sm:py-4 font-black text-slate-950 shadow-lg transition-all hover:bg-white hover:text-sunuBlue hover:-translate-y-0.5"
                  >
                    Explorer nos e-books
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full border-2 border-white/70 bg-white/5 px-6 sm:px-8 py-3.5 sm:py-4 font-black text-white backdrop-blur-sm transition-all hover:bg-white hover:text-sunuBlue"
                  >
                    Parler à un expert
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Premium Banner — Transition vers la bibliothèque d'expertise */}
        <section className="px-4 sm:px-6 py-10 md:py-14 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-sunuBlue/15 bg-gradient-to-br from-sunuBlue to-sunuCyan shadow-[0_20px_60px_rgba(0,113,188,0.18)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.16),transparent_34%),radial-gradient(circle_at_85%_80%,rgba(246,166,26,0.18),transparent_30%)] pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] min-h-[360px] md:min-h-[400px]">
                <div className="flex flex-col justify-center p-7 sm:p-10 md:p-14 lg:p-16 text-white">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] sm:text-xs font-black uppercase tracking-[0.16em] text-white/90 backdrop-blur-md">
                    <BookOpen className="w-4 h-4 text-sunuOrange" />
                    SUNULINK INSIGHTS
                  </span>

                  <h2 className="mt-6 max-w-3xl text-3xl sm:text-4xl md:text-5xl font-black leading-[1.05] tracking-tight">
                    VOUS AVEZ UN PROJET.
                    <br />
                    <span className="text-sunuOrange">NOUS AVONS LA MÉTHODE.</span>
                  </h2>

                  <p className="mt-5 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-blue-50">
                    Stratégie, communication, branding, digital, développement commercial, événementiel et intelligence artificielle : découvrez des ressources pensées pour vous aider à mieux comprendre vos enjeux et à prendre de meilleures décisions.
                  </p>

                  <div className="mt-7">
                    <Link
                      to="/services"
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-sunuOrange px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-black text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-sunuBlue hover:-translate-y-0.5"
                    >
                      Découvrir notre expertise
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>

                <div className="relative min-h-[250px] lg:min-h-full overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1758519290802-2c761001c5da?auto=format&fit=crop&fm=jpg&q=85&w=1800"
                    alt="Professionnel noir en réflexion sur un projet professionnel, devant son ordinateur"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/35 via-[#0071BC]/10 to-[#F6A61A]/10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/45 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 rounded-2xl border border-white/15 bg-[#0B1220]/55 px-4 py-3 backdrop-blur-md">
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.12em] text-white/90">
                      Stratégie • Expertise • Action
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bibliothèque stratégique SunuLink — 20 e-books */}
        <section id="categories" className="scroll-mt-24 bg-gradient-to-b from-white via-slate-50/60 to-white py-16 sm:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-sunuBlue/15 bg-sunuBlue/5 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-sunuBlue">
                <BookOpen className="h-4 w-4 text-sunuOrange" />
                SUNULINK INSIGHTS · ÉDITION 2026–2027
              </span>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                LA BIBLIOTHÈQUE <span className="text-sunuOrange">STRATÉGIQUE SUNULINK</span>
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
                Retrouvez nos e-books, analyses, conseils et décryptages pour mieux comprendre les évolutions du marché, renforcer votre stratégie et accélérer votre développement.
              </p>
            </div>

            {/* Filtres */}
            <div className="mt-10 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-2 text-sm font-black text-gray-900">
                  <Filter className="h-4 w-4 text-sunuOrange" />
                  Explorer par expertise
                </div>
                <div className="flex flex-wrap gap-2">
                  {ebookFilters.map((filter) => (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setActiveFilter(filter)}
                      className={`rounded-full border px-4 py-2.5 text-xs font-black uppercase tracking-wide transition-all sm:text-sm ${
                        activeFilter === filter
                          ? "border-sunuBlue bg-sunuBlue text-white shadow-md shadow-sunuBlue/15"
                          : "border-slate-200 bg-white text-gray-600 hover:border-sunuBlue/40 hover:text-sunuBlue"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold text-gray-500">
                <span>{filteredEbooks.length} e-book{filteredEbooks.length > 1 ? "s" : ""} affiché{filteredEbooks.length > 1 ? "s" : ""}</span>
                <span className="inline-flex items-center gap-1.5 text-sunuBlue">
                  <FileText className="h-3.5 w-3.5" /> 40–55 pages en moyenne
                </span>
              </div>
            </div>

            {/* 5 univers × 4 e-books = 20 */}
            <div className="mt-12 space-y-16 sm:mt-14 sm:space-y-20">
              {ebookUniverses.map((universe, universeIndex) => {
                const universeEbooks = filteredEbooks.filter((ebook) => ebook.universe === universe.title);
                if (universeEbooks.length === 0) return null;

                return (
                  <div key={universe.title}>
                    <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sunuBlue text-sm font-black text-white shadow-md">
                            {String(universeIndex + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-sunuOrange">Bibliothèque SunuLink</p>
                            <h3 className="mt-1 text-2xl font-black text-gray-900 sm:text-3xl">{universe.title}</h3>
                          </div>
                        </div>
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600">{universe.description}</p>
                      </div>
                      <span className="w-fit rounded-full border border-sunuBlue/10 bg-sunuBlue/5 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-sunuBlue">
                        {universeEbooks.length} guides
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                      {universeEbooks.map((ebook) => {
                        const Icon = iconMap[ebook.icon] || BookOpen;

                        return (
                          <article
                            key={ebook.id}
                            role="link"
                            tabIndex={0}
                            onClick={() => openEbookDetail(ebook)}
                            onKeyDown={(event) => handleCardKeyDown(event, ebook)}
                            className="group cursor-pointer overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm outline-none transition-all duration-500 hover:-translate-y-2 hover:border-sunuBlue/25 hover:shadow-2xl focus:ring-4 focus:ring-sunuBlue/15"
                          >
                            {/* Couverture */}
                            <div className="relative h-[390px] overflow-hidden bg-slate-100 p-4 sm:h-[420px]">
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(0,113,188,0.09),transparent_35%),radial-gradient(circle_at_90%_85%,rgba(246,166,26,0.12),transparent_30%)]" />
                              <div className="relative h-full overflow-hidden rounded-2xl border border-black/5 bg-white shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                                {ebook.cover ? (
                                  <img
                                    src={ebook.cover}
                                    alt={`Couverture de l’e-book ${ebook.title}`}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                  />
                                ) : (
                                  <div className={`relative h-full w-full bg-gradient-to-br ${ebook.gradient} p-7 text-white`}>
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/25" />
                                    <div className="relative flex h-full flex-col justify-between">
                                      <div>
                                        <div className="flex items-center justify-between gap-2">
                                          <span className="text-[10px] font-black uppercase tracking-[0.2em]">SUNULINK INSIGHTS</span>
                                          <Icon className="h-5 w-5 text-white/80" />
                                        </div>
                                        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/75">ÉDITION 2026–2027</p>
                                      </div>
                                      <div>
                                        <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.16em]">E-BOOK {String(ebook.id).padStart(2, "0")}</span>
                                        <h4 className="mt-5 text-3xl font-black leading-[0.95]">{ebook.title}</h4>
                                        <p className="mt-4 max-w-[18rem] text-xs font-bold uppercase tracking-wide text-white/75">{ebook.category}</p>
                                      </div>
                                      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-white/70">
                                        <span>SunuLink Consulting</span>
                                        <span>{ebook.pages}</span>
                                      </div>
                                    </div>
                                  </div>
                                )}

                                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4">
                                  <span className="inline-flex rounded-full border border-white/30 bg-black/30 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white backdrop-blur-sm">
                                    {ebook.category}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="p-6">
                              <div className="flex items-center justify-between gap-3">
                                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-sunuBlue">E-BOOK {String(ebook.id).padStart(2, "0")}</span>
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-gray-500">
                                  <Clock className="h-3.5 w-3.5" /> {ebook.readingTime}
                                </span>
                              </div>

                              <h4 className="mt-3 text-xl font-black leading-tight text-gray-900 transition-colors group-hover:text-sunuOrange">
                                {ebook.title}
                              </h4>

                              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
                                {ebook.description}
                              </p>

                              <div className="mt-5 flex items-center gap-2 text-xs font-bold text-gray-500">
                                <FileText className="h-4 w-4 text-sunuOrange" />
                                {ebook.pages}
                              </div>

                              <div className="mt-6 flex flex-col gap-2">
                                <button
                                  type="button"
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    setSelectedEbook(ebook);
                                  }}
                                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sunuBlue px-4 py-3.5 text-sm font-black text-white shadow-md shadow-sunuBlue/15 transition hover:bg-sunuOrange"
                                >
                                  <Download className="h-4 w-4" />
                                  Découvrir le guide
                                </button>
                                <Link
                                  to={`/ressources/${ebook.slug}`}
                                  onClick={(event) => event.stopPropagation()}
                                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-sunuBlue transition hover:border-sunuBlue/30 hover:bg-slate-50"
                                >
                                  Voir la fiche détaillée
                                  <ArrowRight className="h-4 w-4" />
                                </Link>
                              </div>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredEbooks.length === 0 && (
              <div className="mt-10 rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
                <Search className="mx-auto h-10 w-10 text-sunuBlue" />
                <h3 className="mt-4 text-xl font-black text-gray-900">Aucune ressource dans ce filtre</h3>
                <p className="mt-2 text-sm text-gray-600">Revenez à « Tous » pour afficher les 20 e-books de la bibliothèque.</p>
                <button
                  type="button"
                  onClick={() => setActiveFilter("Tous")}
                  className="mt-5 rounded-full bg-sunuBlue px-6 py-3 text-sm font-black text-white hover:bg-sunuOrange"
                >
                  Afficher les 20 e-books
                </button>
              </div>
            )}

            <div className="mt-12 rounded-[1.75rem] border border-sunuBlue/10 bg-sunuBlue/[0.04] p-5 text-center sm:mt-16 sm:p-7">
              <p className="text-sm font-semibold leading-relaxed text-gray-600">
                Les fiches détaillées des e-books sont accessibles depuis chaque carte. Le bouton <strong className="text-gray-900">« Découvrir le guide »</strong> ouvre l’accès sécurisé par e-mail au téléchargement du document lorsqu’un PDF est associé à la ressource.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section (Newsletter double étape) */}
        <section className="py-16 md:py-20 px-4 sm:px-6 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-sunuBlue/15 bg-white shadow-[0_20px_60px_rgba(0,113,188,0.12)]">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-sunuBlue via-sunuCyan to-sunuOrange" />

              <div className="grid lg:grid-cols-[1.05fr_1.25fr]">
                <div className="relative overflow-hidden bg-sunuBlue p-7 sm:p-10 md:p-12 text-white">
                  <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-sunuCyan/25 blur-2xl" />
                  <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-sunuOrange/20 blur-3xl" />

                  <div className="relative z-10">
                    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white/90">
                      SUNULINK INSIGHTS
                    </span>

                    <h2 className="mt-5 text-3xl sm:text-4xl font-black leading-tight">
                      Restez au cœur de notre expertise.
                    </h2>

                    <p className="mt-4 max-w-lg text-sm sm:text-base leading-relaxed text-blue-50/90">
                      Recevez nos analyses, conseils, actualités et nouvelles ressources directement dans votre boîte mail.
                    </p>

                    <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sunuOrange">
                      <BookOpen className="w-4 h-4" />
                      Des idées utiles. Des méthodes concrètes.
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                  {isSuccess ? (
                    <div className="h-full min-h-[260px] rounded-2xl border border-sunuBlue/15 bg-slate-50 p-7 sm:p-9 flex flex-col items-center justify-center text-center">
                      <div className="w-14 h-14 rounded-2xl bg-sunuBlue/10 flex items-center justify-center mb-5">
                        <CheckCircle className="w-8 h-8 text-sunuBlue" />
                      </div>
                      <h3 className="font-black text-2xl text-gray-900">Bienvenue dans SunuLink Insights</h3>
                      <p className="mt-3 text-gray-600 leading-relaxed max-w-md">
                        Votre inscription a bien été validée. Vous recevrez bientôt nos meilleures ressources et astuces directement dans votre boîte mail.
                      </p>
                    </div>
                  ) : (
                    <div className="max-w-xl mx-auto">
                      <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-sunuBlue">
                          Newsletter
                        </p>
                        <h3 className="mt-2 text-2xl sm:text-3xl font-black text-gray-900">
                          Inscrivez-vous en quelques secondes
                        </h3>
                      </div>

                      <form onSubmit={handleSubscribe} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                              Votre adresse email
                            </label>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="exemple@entreprise.com"
                              required
                              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-800 font-medium placeholder:text-gray-400 focus:outline-none focus:border-sunuBlue focus:ring-4 focus:ring-sunuBlue/10 transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                              Confirmer votre email
                            </label>
                            <input
                              type="email"
                              value={confirmEmail}
                              onChange={(e) => setConfirmEmail(e.target.value)}
                              placeholder="Retapez votre email"
                              required
                              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-800 font-medium placeholder:text-gray-400 focus:outline-none focus:border-sunuBlue focus:ring-4 focus:ring-sunuBlue/10 transition-all"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-sunuBlue px-6 py-4 text-base sm:text-lg font-black text-white shadow-lg shadow-sunuBlue/20 transition-all hover:bg-sunuOrange hover:shadow-sunuOrange/20 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? "Inscription en cours..." : "S'abonner à la newsletter"}
                          <Send className="w-4 h-4" />
                        </button>

                        <p className="text-xs text-gray-500 text-center leading-relaxed">
                          Des contenus utiles, sans surcharge. Vous pourrez vous désinscrire à tout moment.
                        </p>
                      </form>

                      {errorMessage && (
                        <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-3.5 flex items-center justify-center gap-2 text-red-700 text-sm font-semibold animate-shake">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>{errorMessage}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <EbookDownloadModal
        ebook={selectedEbook}
        onClose={() => setSelectedEbook(null)}
      />
    </div>
  );
};

export default BlogPage;
