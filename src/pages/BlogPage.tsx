import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BookOpen,
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
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  ArrowRight,
  Filter,
} from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

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
        objet: "Nouvelle inscription à la Newsletter SunuLink Insights",
        source: "Formulaire Newsletter SunuLink Insights",
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

  // =========================================================
  // BIBLIOTHÈQUE SUNULINK INSIGHTS — 20 E-BOOKS
  // =========================================================

  const ebookFilters = [
    "Tous",
    "Marketing",
    "Communication",
    "Branding",
    "Digital & SEO",
    "Réseaux sociaux",
    "Innovation & IA",
    "Business & Développement",
  ];

  const ebookGroups = [
    {
      id: "strategie-croissance",
      number: "01",
      title: "STRATÉGIE & CROISSANCE",
      description:
        "Comprendre son marché, structurer son marketing et transformer les opportunités en développement.",
    },
    {
      id: "communication-marque",
      number: "02",
      title: "COMMUNICATION & MARQUE",
      description:
        "Construire une identité forte et une communication cohérente, crédible et différenciante.",
    },
    {
      id: "digital-creation",
      number: "03",
      title: "DIGITAL & CRÉATION",
      description:
        "Développer sa visibilité digitale et créer des contenus capables de retenir l’attention.",
    },
    {
      id: "innovation-activation",
      number: "04",
      title: "INNOVATION & ACTIVATION",
      description:
        "Explorer les nouvelles technologies et transformer les idées en expériences concrètes.",
    },
    {
      id: "expertise-reputation",
      number: "05",
      title: "EXPERTISE & RÉPUTATION",
      description:
        "Développer les compétences, renforcer la réputation et mieux piloter sa communication.",
    },
  ];

  const ebooks = [
    {
      id: 1,
      group: "strategie-croissance",
      title: "Conseils & Astuces Marketing",
      category: "Marketing",
      description:
        "Des conseils pratiques pour mieux structurer vos actions marketing et investir avec davantage de méthode.",
      slug: "conseils-astuces-marketing",
      image: "",
      pages: "40–55 pages",
      readTime: "20–30 min",
    },
    {
      id: 2,
      group: "strategie-croissance",
      title: "Tendances & Actualités",
      category: "Marketing",
      description:
        "Comprendre les évolutions du marché, des usages et des pratiques pour mieux anticiper les transformations.",
      slug: "tendances-actualites",
      image: "/img/tendances_actualites.PNG",
      pages: "40–55 pages",
      readTime: "20–30 min",
    },
    {
      id: 3,
      group: "strategie-croissance",
      title: "Stratégies de Communication",
      category: "Communication",
      description:
        "Construire une communication cohérente, différenciante et orientée vers des objectifs concrets.",
      slug: "strategies-communication",
      image: "/img/strategies_communication.PNG",
      pages: "40–55 pages",
      readTime: "20–30 min",
    },
    {
      id: 4,
      group: "strategie-croissance",
      title: "Entrepreneuriat & Business",
      category: "Business & Développement",
      description:
        "Des méthodes pour structurer son activité, mieux comprendre ses enjeux et soutenir sa croissance.",
      slug: "entrepreneuriat-business",
      image: "",
      pages: "40–55 pages",
      readTime: "20–30 min",
    },

    {
      id: 5,
      group: "communication-marque",
      title: "Branding & Identité Visuelle",
      category: "Branding",
      description:
        "Construire une marque cohérente, reconnaissable et capable de créer une véritable préférence.",
      slug: "branding-identite-visuelle",
      image: "/img/branding_identite_visuelle.PNG",
      pages: "40–55 pages",
      readTime: "20–30 min",
    },
    {
      id: 6,
      group: "communication-marque",
      title: "Communication Africaine",
      category: "Communication",
      description:
        "Explorer les spécificités culturelles et stratégiques de la communication sur les marchés africains.",
      slug: "communication-africaine",
      image: "/img/communication_africaine.PNG",
      pages: "40–55 pages",
      readTime: "20–30 min",
    },
    {
      id: 7,
      group: "communication-marque",
      title: "Communication 360° & Stratégie Globale",
      category: "Communication",
      description:
        "Relier les différents leviers de communication autour d’une vision globale et cohérente.",
      slug: "communication-360-strategie-globale",
      image: "",
      pages: "40–55 pages",
      readTime: "20–30 min",
    },
    {
      id: 8,
      group: "communication-marque",
      title: "Communication Corporate & Institutionnelle",
      category: "Communication",
      description:
        "Renforcer l’image, la crédibilité et la communication des entreprises et organisations.",
      slug: "communication-corporate-institutionnelle",
      image: "",
      pages: "40–55 pages",
      readTime: "20–30 min",
    },

    {
      id: 9,
      group: "digital-creation",
      title: "Marketing Digital & SEO",
      category: "Digital & SEO",
      description:
        "Développer sa visibilité sur le digital et mettre en place une présence web plus performante.",
      slug: "marketing-digital-seo",
      image: "/img/marketing_digital_seo.PNG",
      pages: "40–55 pages",
      readTime: "20–30 min",
    },
    {
      id: 10,
      group: "digital-creation",
      title: "Réseaux Sociaux",
      category: "Réseaux sociaux",
      description:
        "Créer une présence sociale cohérente, développer sa communauté et mieux engager son audience.",
      slug: "reseaux-sociaux",
      image: "/img/reseaux_sociaux.PNG",
      pages: "40–55 pages",
      readTime: "20–30 min",
    },
    {
      id: 11,
      group: "digital-creation",
      title: "Création de Contenu & Storytelling",
      category: "Communication",
      description:
        "Développer des contenus utiles et raconter l’histoire de sa marque avec plus d’impact.",
      slug: "creation-contenu-storytelling",
      image: "",
      pages: "40–55 pages",
      readTime: "20–30 min",
    },
    {
      id: 12,
      group: "digital-creation",
      title: "Design Graphique & Création Visuelle",
      category: "Branding",
      description:
        "Comprendre les principes d’une création visuelle cohérente au service de l’image de marque.",
      slug: "design-graphique-creation-visuelle",
      image: "",
      pages: "40–55 pages",
      readTime: "20–30 min",
    },

    {
      id: 13,
      group: "innovation-activation",
      title: "Innovation & IA",
      category: "Innovation & IA",
      description:
        "Comprendre les usages de l’intelligence artificielle et identifier des applications concrètes pour l’entreprise.",
      slug: "innovation-ia",
      image: "",
      pages: "40–55 pages",
      readTime: "20–30 min",
    },
    {
      id: 14,
      group: "innovation-activation",
      title: "Publicité & Média Buying",
      category: "Marketing",
      description:
        "Mieux comprendre la publicité digitale, l’achat média, le ciblage et la logique de performance.",
      slug: "publicite-media-buying",
      image: "",
      pages: "40–55 pages",
      readTime: "20–30 min",
    },
    {
      id: 15,
      group: "innovation-activation",
      title: "Audiovisuel & Motion Design",
      category: "Communication",
      description:
        "Explorer les formats audiovisuels et le motion design comme outils de communication et d’impact.",
      slug: "audiovisuel-motion-design",
      image: "",
      pages: "40–55 pages",
      readTime: "20–30 min",
    },
    {
      id: 16,
      group: "innovation-activation",
      title: "Événementiel & Activation de Marque",
      category: "Communication",
      description:
        "Créer des expériences de marque et des activations événementielles pensées pour générer de l’engagement.",
      slug: "evenementiel-activation-marque",
      image: "",
      pages: "40–55 pages",
      readTime: "20–30 min",
    },

    {
      id: 17,
      group: "expertise-reputation",
      title: "Success Stories",
      category: "Business & Développement",
      description:
        "Décrypter des parcours, expériences et réalisations afin d’en tirer des enseignements utiles.",
      slug: "success-stories",
      image: "",
      pages: "40–55 pages",
      readTime: "20–30 min",
    },
    {
      id: 18,
      group: "expertise-reputation",
      title: "Interviews & Portraits",
      category: "Communication",
      description:
        "Rencontrer des profils, experts et acteurs qui façonnent les métiers et les transformations du marché.",
      slug: "interviews-portraits",
      image: "",
      pages: "40–55 pages",
      readTime: "20–30 min",
    },
    {
      id: 19,
      group: "expertise-reputation",
      title: "Tutoriels & Guides",
      category: "Digital & SEO",
      description:
        "Des ressources pratiques pour apprendre, appliquer et progresser étape par étape.",
      slug: "tutoriels-guides",
      image: "",
      pages: "40–55 pages",
      readTime: "20–30 min",
    },
    {
      id: 20,
      group: "expertise-reputation",
      title: "Communication de Crise & Réputation",
      category: "Communication",
      description:
        "Anticiper les situations sensibles, protéger son image et structurer sa communication en contexte de crise.",
      slug: "communication-crise-reputation",
      image: "",
      pages: "40–55 pages",
      readTime: "20–30 min",
    },
  ];

  const [activeEbookFilter, setActiveEbookFilter] = useState("Tous");

  const filteredEbooks =
    activeEbookFilter === "Tous"
      ? ebooks
      : ebooks.filter((ebook) => ebook.category === activeEbookFilter);

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

        {/* =========================================================
            SUNULINK INSIGHTS — BIBLIOTHÈQUE DES E-BOOKS
        ========================================================= */}
        <section
          id="categories"
          className="py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-white via-slate-50/60 to-white"
        >
          <div className="container mx-auto max-w-7xl">

            {/* En-tête */}
            <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-sunuBlue/15 bg-sunuBlue/5 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-sunuBlue">
                <BookOpen className="w-4 h-4 text-sunuOrange" />
                SUNULINK INSIGHTS
              </span>

              <p className="mt-5 text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-sunuOrange">
                ÉDITION 2026–2027
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                LA BIBLIOTHÈQUE{" "}
                <span className="text-sunuBlue">STRATÉGIQUE SUNULINK</span>
              </h2>

              <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Retrouvez nos e-books, analyses, conseils et décryptages pour
                mieux comprendre les évolutions du marché, renforcer votre
                stratégie et accélérer votre développement.
              </p>
            </div>

            {/* Filtres */}
            <div className="mb-14">
              <div className="flex items-center justify-center gap-2 mb-5 text-xs font-black uppercase tracking-[0.15em] text-gray-500">
                <Filter className="w-4 h-4 text-sunuOrange" />
                Explorer par expertise
              </div>

              <div className="flex flex-wrap justify-center gap-2.5">
                {ebookFilters.map((filter) => {
                  const isActive = activeEbookFilter === filter;

                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setActiveEbookFilter(filter)}
                      className={`rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-black transition-all duration-300 border ${
                        isActive
                          ? "bg-sunuBlue text-white border-sunuBlue shadow-lg shadow-sunuBlue/20"
                          : "bg-white text-gray-600 border-gray-200 hover:border-sunuBlue hover:text-sunuBlue hover:-translate-y-0.5"
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Les 5 univers */}
            <div className="space-y-20">
              {ebookGroups.map((group) => {
                const groupEbooks = filteredEbooks.filter(
                  (ebook) => ebook.group === group.id
                );

                if (groupEbooks.length === 0) return null;

                return (
                  <div key={group.id}>

                    {/* En-tête de l'univers */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8 md:mb-10">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-sunuBlue to-sunuCyan text-white flex items-center justify-center shadow-lg">
                          <span className="text-lg sm:text-xl font-black">
                            {group.number}
                          </span>
                        </div>

                        <div>
                          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-sunuOrange mb-1">
                            Univers {group.number}
                          </p>

                          <h3 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
                            {group.title}
                          </h3>

                          <p className="mt-2 text-sm sm:text-base text-gray-500 max-w-2xl leading-relaxed">
                            {group.description}
                          </p>
                        </div>
                      </div>

                      <span className="self-start md:self-auto inline-flex items-center rounded-full bg-slate-100 border border-slate-200 px-4 py-2 text-xs font-bold text-gray-500">
                        {groupEbooks.length} guide
                        {groupEbooks.length > 1 ? "s" : ""}
                      </span>
                    </div>

                    {/* Cartes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                      {groupEbooks.map((ebook) => (
                        <article
                          key={ebook.id}
                          className="group relative flex flex-col bg-white rounded-[1.75rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                        >
                          {/* Couverture */}
                          <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">

                            {ebook.image ? (
                              <img
                                src={ebook.image}
                                alt={`Couverture de l’e-book ${ebook.title}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuOrange p-6 flex flex-col justify-between">
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-white/80">
                                  SUNULINK INSIGHTS
                                </span>

                                <div>
                                  <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3">
                                    ÉDITION 2026–2027
                                  </p>

                                  <h4 className="text-2xl font-black text-white leading-tight">
                                    {ebook.title}
                                  </h4>
                                </div>

                                <span className="text-xs font-bold text-white/70">
                                  E-BOOK
                                </span>
                              </div>
                            )}

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent pointer-events-none" />

                            <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                              <span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-sunuBlue shadow-sm">
                                E-BOOK
                              </span>

                              <span className="rounded-full bg-black/35 backdrop-blur-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white border border-white/15">
                                2026–2027
                              </span>
                            </div>

                            <div className="absolute bottom-4 left-4">
                              <span className="rounded-full bg-sunuOrange px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-white shadow-lg">
                                E-BOOK {String(ebook.id).padStart(2, "0")}
                              </span>
                            </div>
                          </div>

                          {/* Informations */}
                          <div className="flex flex-col flex-1 p-5 sm:p-6">

                            <div className="mb-3">
                              <span className="text-[10px] font-black uppercase tracking-[0.16em] text-sunuBlue">
                                {ebook.category}
                              </span>
                            </div>

                            <h4 className="text-xl font-black text-gray-900 leading-tight mb-3 group-hover:text-sunuBlue transition-colors">
                              {ebook.title}
                            </h4>

                            <p className="text-sm text-gray-600 leading-relaxed">
                              {ebook.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200 px-3 py-1.5 text-[11px] font-bold text-gray-500">
                                <BookOpen className="w-3.5 h-3.5 text-sunuBlue" />
                                {ebook.pages}
                              </span>

                              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200 px-3 py-1.5 text-[11px] font-bold text-gray-500">
                                <Clock className="w-3.5 h-3.5 text-sunuOrange" />
                                {ebook.readTime}
                              </span>
                            </div>

                            {/* Bouton */}
                            <div className="mt-6 pt-5 border-t border-slate-100">
                              <Link
                                to={`/ressources/${ebook.slug}`}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sunuBlue px-4 py-3.5 text-sm font-black text-white shadow-md transition-all duration-300 hover:bg-sunuOrange hover:-translate-y-0.5"
                              >
                                Découvrir le guide
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Aucun résultat */}
            {filteredEbooks.length === 0 && (
              <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
                <BookOpen className="w-12 h-12 text-sunuBlue mx-auto mb-4" />

                <h3 className="text-xl font-black text-gray-900">
                  Aucun e-book trouvé
                </h3>

                <p className="mt-2 text-gray-500">
                  Aucun guide ne correspond actuellement à ce filtre.
                </p>
              </div>
            )}

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
    </div>
  );
};

export default BlogPage;
