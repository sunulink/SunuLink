import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BookOpen,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  ArrowRight,
  Filter,
} from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

// Images du diaporama Hero — fichiers placés dans public/img/
const heroImages = [
  "/img/Hero_Blog_SunuLink_Pub_01_Strategie-Communication.jpg",
  "/img/Hero_Blog_SunuLink_Pub_02_Marketing-Visibilite.jpg",
  "/img/Hero_Blog_SunuLink_Pub_03_Marque-Creation.jpg",
  "/img/Hero_Blog_SunuLink_Pub_04_Innovation-Action.jpg",
];

const BlogPage = () => {
  // États du diaporama : changement d'image toutes les 4,5 secondes.
  const [activeHeroImage, setActiveHeroImage] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveHeroImage((current) => (current + 1) % heroImages.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  // États pour la Newsletter (double étape de confirmation d'email)
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Étape 1 : vérifier que les deux saisies correspondent.
    if (email.trim().toLowerCase() !== confirmEmail.trim().toLowerCase()) {
      setErrorMessage("Les deux adresses email ne correspondent pas.");
      return;
    }

    // Étape 2 : vérification locale rapide pour éviter les doublons.
    const storedSubscribers: string[] = JSON.parse(
      localStorage.getItem("sunulink_subscribers") || "[]"
    );
    const normalizedEmail = email.trim().toLowerCase();

    if (storedSubscribers.includes(normalizedEmail)) {
      setErrorMessage(
        "Cette adresse email est déjà inscrite à notre newsletter."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      // Étape 3 : envoi à Google Sheets via Google Apps Script.
      const googleScriptUrl =
        "https://script.google.com/macros/s/AKfycbwKCFvCDnX2AvEk_JjzTbULzOctlYVDJ_kUdlWnvg8doA1cJUFZen-tbUANz9hVgA/exec";

      await fetch(googleScriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: normalizedEmail,
          date: new Date().toLocaleDateString("fr-FR"),
        }),
      });

      // Étape 4 : notification de l'inscription via EmailJS.
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

      // Enregistrer l'abonné localement pour éviter les doublons futurs.
      storedSubscribers.push(normalizedEmail);
      localStorage.setItem(
        "sunulink_subscribers",
        JSON.stringify(storedSubscribers)
      );

      setIsSuccess(true);
      setEmail("");
      setConfirmEmail("");
    } catch (error) {
      console.error("Erreur lors de l'inscription à la newsletter :", error);
      setErrorMessage(
        "Une erreur est survenue lors de votre inscription. Veuillez réessayer."
      );
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
      image:
        "/img/SunuLink_Ebook_09_Conseils-Astuces-Marketing_recto-verso_fond-jaune_1080.jpg",
      pages: "48 pages",
      readTime: "50–70 min",
    },
    {
      id: 2,
      group: "strategie-croissance",
      title: "Tendances & Actualités",
      category: "Marketing",
      description:
        "Comprendre les évolutions du marché, des usages et des pratiques pour mieux anticiper les transformations.",
      slug: "tendances-actualites",
      image:
        "/img/SunuLink_Ebook_18_Tendances-Actualites_recto-verso_fond-jaune_1080.jpg",
      pages: "46 pages",
      readTime: "45–65 min",
    },
    {
      id: 3,
      group: "strategie-croissance",
      title: "Stratégies de Communication",
      category: "Communication",
      description:
        "Construire une communication cohérente, différenciante et orientée vers des objectifs concrets.",
      slug: "strategies-communication",
      image:
        "/img/SunuLink_Ebook_01_Strategies-de-Communication_recto-verso_fond-blanc_1080.jpg",
      pages: "47 pages",
      readTime: "40–60 min",
    },
    {
      id: 4,
      group: "strategie-croissance",
      title: "Entrepreneuriat & Business",
      category: "Business & Développement",
      description:
        "Des méthodes pour structurer son activité, mieux comprendre ses enjeux et soutenir sa croissance.",
      slug: "entrepreneuriat-business",
      image:
        "/img/SunuLink_Ebook_12_Entrepreneuriat-Business_recto-verso_fond-jaune_1080.jpg",
      pages: "60 pages",
      readTime: "40–55 min",
    },
    {
      id: 5,
      group: "communication-marque",
      title: "Branding & Identité Visuelle",
      category: "Branding",
      description:
        "Construire une marque cohérente, reconnaissable et capable de créer une véritable préférence.",
      slug: "branding-identite-visuelle",
      image:
        "/img/SunuLink_Ebook_02_Branding-Identite-Visuelle_recto-verso_fond-bleu_1080.jpg",
      pages: "40 pages",
      readTime: "40–55 min",
    },
    {
      id: 6,
      group: "communication-marque",
      title: "Communication Africaine",
      category: "Communication",
      description:
        "Explorer les spécificités culturelles et stratégiques de la communication sur les marchés africains.",
      slug: "communication-africaine",
      image:
        "/img/SunuLink_Ebook_06_Communication-Africaine_recto-verso_fond-jaune_1080.jpg",
      pages: "43 pages",
      readTime: "40–60 min",
    },
    {
      id: 7,
      group: "communication-marque",
      title: "Communication 360° & Stratégie Globale",
      category: "Communication",
      description:
        "Relier les différents leviers de communication autour d’une vision globale et cohérente.",
      slug: "communication-360-strategie-globale",
      image:
        "/img/SunuLink_Ebook_05_Communication-360_recto-verso_fond-bleu_1080.jpg",
      pages: "82 pages",
      readTime: "70–100 min",
    },
    {
      id: 8,
      group: "communication-marque",
      title: "Communication Corporate & Institutionnelle",
      category: "Communication",
      description:
        "Renforcer l’image, la crédibilité et la communication des entreprises et organisations.",
      slug: "communication-corporate-institutionnelle",
      image:
        "/img/SunuLink_Ebook_07_Communication-Corporate-Institutionnelle_recto-verso_fond-blanc_1080.jpg",
      pages: "73 pages",
      readTime: "75–105 min",
    },
    {
      id: 9,
      group: "digital-creation",
      title: "Marketing Digital & SEO",
      category: "Digital & SEO",
      description:
        "Développer sa visibilité sur le digital et mettre en place une présence web plus performante.",
      slug: "marketing-digital-seo",
      image:
        "/img/SunuLink_Ebook_03_Marketing-Digital-SEO_recto-verso_fond-jaune_1080.jpg",
      pages: "51 pages",
      readTime: "40–60 min",
    },
    {
      id: 10,
      group: "digital-creation",
      title: "Réseaux Sociaux",
      category: "Réseaux sociaux",
      description:
        "Créer une présence sociale cohérente, développer sa communauté et mieux engager son audience.",
      slug: "reseaux-sociaux",
      image:
        "/img/SunuLink_Ebook_04_Reseaux-Sociaux_recto-verso_fond-blanc_1080.jpg",
      pages: "46 pages",
      readTime: "35–50 min",
    },
    {
      id: 11,
      group: "digital-creation",
      title: "Création de Contenu & Storytelling",
      category: "Communication",
      description:
        "Développer des contenus utiles et raconter l’histoire de sa marque avec plus d’impact.",
      slug: "creation-contenu-storytelling",
      image:
        "/img/SunuLink_Ebook_10_Creation-de-contenu-Storytelling_recto-verso_fond-blanc_1080.jpg",
      pages: "92 pages",
      readTime: "85–120 min",
    },
    {
      id: 12,
      group: "digital-creation",
      title: "Design Graphique & Création Visuelle",
      category: "Branding",
      description:
        "Comprendre les principes d’une création visuelle cohérente au service de l’image de marque.",
      slug: "design-graphique-creation-visuelle",
      image:
        "/img/SunuLink_Ebook_11_Design-Graphique-Creation-Visuelle_recto-verso_fond-bleu_1080.jpg",
      pages: "92 pages",
      readTime: "75–105 min",
    },
    {
      id: 13,
      group: "innovation-activation",
      title: "Innovation & IA",
      category: "Innovation & IA",
      description:
        "Comprendre les usages de l’intelligence artificielle et identifier des applications concrètes pour l’entreprise.",
      slug: "innovation-ia",
      image:
        "/img/SunuLink_Ebook_14_Innovation-IA_recto-verso_fond-bleu_1080.jpg",
      pages: "71 pages",
      readTime: "30–45 min",
    },
    {
      id: 14,
      group: "innovation-activation",
      title: "Publicité & Média Buying",
      category: "Marketing",
      description:
        "Mieux comprendre la publicité digitale, l’achat média, le ciblage et la logique de performance.",
      slug: "publicite-media-buying",
      image:
        "/img/SunuLink_Ebook_16_Publicite-Media-Buying_recto-verso_fond-blanc_1080.jpg",
      pages: "80 pages",
      readTime: "70–95 min",
    },
    {
      id: 15,
      group: "innovation-activation",
      title: "Audiovisuel & Motion Design",
      category: "Communication",
      description:
        "Explorer les formats audiovisuels et le motion design comme outils de communication et d’impact.",
      slug: "audiovisuel-motion-design",
      image:
        "/img/SunuLink_Ebook_20_Audiovisuel-Motion-Design_recto-verso_fond-bleu_1080.jpg",
      pages: "77 pages",
      readTime: "60–85 min",
    },
    {
      id: 16,
      group: "innovation-activation",
      title: "Événementiel & Activation de Marque",
      category: "Communication",
      description:
        "Créer des expériences de marque et des activations événementielles pensées pour générer de l’engagement.",
      slug: "evenementiel-activation-marque",
      image:
        "/img/SunuLink_Ebook_13_Evenementiel-Activation-de-Marque_recto-verso_fond-blanc_1080.jpg",
      pages: "73 pages",
      readTime: "50–70 min",
    },
    {
      id: 17,
      group: "expertise-reputation",
      title: "Success Stories",
      category: "Business & Développement",
      description:
        "Décrypter des parcours, expériences et réalisations afin d’en tirer des enseignements utiles.",
      slug: "success-stories",
      image:
        "/img/SunuLink_Ebook_17_Success-Stories_recto-verso_fond-bleu_1080.jpg",
      pages: "59 pages",
      readTime: "45–65 min",
    },
    {
      id: 18,
      group: "expertise-reputation",
      title: "Interviews & Portraits",
      category: "Communication",
      description:
        "Rencontrer des profils, experts et acteurs qui façonnent les métiers et les transformations du marché.",
      slug: "interviews-portraits",
      image:
        "/img/SunuLink_Ebook_15_Interviews-Portraits_recto-verso_fond-jaune_1080.jpg",
      pages: "70 pages",
      readTime: "70–95 min",
    },
    {
      id: 19,
      group: "expertise-reputation",
      title: "Tutoriels & Guides",
      category: "Digital & SEO",
      description:
        "Des ressources pratiques pour apprendre, appliquer et progresser étape par étape.",
      slug: "tutoriels-guides",
      image:
        "/img/SunuLink_Ebook_19_Tutoriels-Guides_recto-verso_fond-blanc_1080.jpg",
      pages: "62 pages",
      readTime: "50–70 min",
    },
    {
      id: 20,
      group: "expertise-reputation",
      title: "Communication de Crise & Réputation",
      category: "Communication",
      description:
        "Anticiper les situations sensibles, protéger son image et structurer sa communication en contexte de crise.",
      slug: "communication-crise-reputation",
      image:
        "/img/SunuLink_Ebook_08_Communication-de-Crise-Reputation_recto-verso_fond-bleu_1080.jpg",
      pages: "72 pages",
      readTime: "70–100 min",
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
        {/* HERO : diaporama en haut, badge et boutons sous les images */}
        <section className="w-full overflow-hidden bg-[#0B4D78]">
          {/* Zone des images uniquement : aucun texte ni bouton superposé */}
          <div className="relative h-[300px] w-full overflow-hidden bg-[#0B1220] sm:h-[420px] md:h-[500px] lg:h-[580px] xl:h-[640px]">
            {heroImages.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Visuel SunuLink Insights ${index + 1}`}
                aria-hidden="true"
                loading="eager"
                fetchPriority={index === 0 ? "high" : "auto"}
                className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
                  activeHeroImage === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07111F]/30 via-transparent to-[#07111F]/10" />
          </div>

          {/* Zone sous les images : badge, indicateurs et boutons */}
          <div className="border-t border-white/10 bg-[#0B4D78] px-4 py-6 sm:px-6 sm:py-8 md:py-9">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 sm:gap-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-white shadow-sm sm:text-sm">
                <BookOpen className="h-4 w-4 text-sunuOrange" />
                SUNULINK INSIGHTS
              </span>

              {/* Indicateurs cliquables du diaporama */}
              <div className="flex items-center justify-center gap-2.5" aria-label="Choisir une image du diaporama">
                {heroImages.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveHeroImage(index)}
                    aria-label={`Afficher l’image ${index + 1}`}
                    aria-pressed={activeHeroImage === index}
                    className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B4D78] ${
                      activeHeroImage === index
                        ? "w-9 bg-sunuOrange"
                        : "w-2.5 bg-white/55 hover:bg-white"
                    }`}
                  />
                ))}
              </div>

              <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
                <a
                  href="#categories"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-sunuOrange bg-sunuOrange px-6 py-3 text-center text-sm font-extrabold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-sunuBlue hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30 sm:w-auto sm:min-w-52 sm:px-7 sm:text-base motion-reduce:transform-none"
                >
                  Explorer nos e-books
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <Link
                  to="/contact"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-white bg-white px-6 py-3 text-center text-sm font-extrabold text-sunuBlue transition-all duration-300 hover:-translate-y-0.5 hover:border-sunuOrange hover:bg-sunuOrange hover:text-slate-950 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30 sm:w-auto sm:min-w-52 sm:px-7 sm:text-base motion-reduce:transform-none"
                >
                  Parler à un expert
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="h-1 w-full bg-sunuOrange" />
        </section>

        {/* Bannière premium — transition vers la bibliothèque d'expertise */}
        <section className="bg-white px-4 py-10 sm:px-6 md:py-14">
          <div className="container mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-sunuBlue/15 bg-gradient-to-br from-sunuBlue to-sunuCyan shadow-[0_20px_60px_rgba(0,113,188,0.18)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.16),transparent_34%),radial-gradient(circle_at_85%_80%,rgba(246,166,26,0.18),transparent_30%)]" />

              <div className="relative z-10 grid min-h-[360px] grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] md:min-h-[400px]">
                <div className="flex flex-col justify-center p-7 text-white sm:p-10 md:p-14 lg:p-16">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-white/90 backdrop-blur-md sm:text-xs">
                    <BookOpen className="h-4 w-4 text-sunuOrange" />
                    SUNULINK INSIGHTS
                  </span>

                  <h2 className="mt-6 max-w-3xl text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
                    VOUS AVEZ UN PROJET.
                    <br />
                    <span className="text-sunuOrange">NOUS AVONS LA MÉTHODE.</span>
                  </h2>

                  <p className="mt-5 max-w-2xl text-sm leading-relaxed text-blue-50 sm:text-base md:text-lg">
                    Stratégie, communication, branding, digital, développement commercial, événementiel et intelligence artificielle : découvrez des ressources pensées pour vous aider à mieux comprendre vos enjeux et à prendre de meilleures décisions.
                  </p>

                  <div className="mt-7">
                    <Link
                      to="/services"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sunuOrange px-7 py-3.5 text-sm font-black text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-sunuBlue sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                    >
                      Découvrir notre expertise
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="relative min-h-[250px] overflow-hidden border-t border-white/10 lg:min-h-full lg:border-l lg:border-t-0">
                  <img
                    src="/img/projet_methode.jpg"
                    alt="Professionnel en réflexion sur un projet professionnel devant son ordinateur"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/35 via-[#0071BC]/10 to-[#F6A61A]/10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/45 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/15 bg-[#0B1220]/55 px-4 py-3 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/90 sm:text-sm">
                      Stratégie • Expertise • Action
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SUNULINK INSIGHTS — BIBLIOTHÈQUE DES E-BOOKS */}
        <section
          id="categories"
          className="bg-gradient-to-b from-white via-slate-50/60 to-white px-4 py-20 sm:px-6 md:py-28"
        >
          <div className="container mx-auto max-w-7xl">
            {/* En-tête */}
            <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-sunuBlue/15 bg-sunuBlue/5 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-sunuBlue">
                <BookOpen className="h-4 w-4 text-sunuOrange" />
                SUNULINK INSIGHTS
              </span>

              <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-sunuOrange sm:text-sm">
                ÉDITION 2026–2027
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                LA BIBLIOTHÈQUE{" "}
                <span className="text-sunuBlue">STRATÉGIQUE SUNULINK</span>
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
                Retrouvez nos e-books, analyses, conseils et décryptages pour mieux comprendre les évolutions du marché, renforcer votre stratégie et accélérer votre développement.
              </p>
            </div>

            {/* Filtres */}
            <div className="mb-14">
              <div className="mb-5 flex items-center justify-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-gray-500">
                <Filter className="h-4 w-4 text-sunuOrange" />
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
                      className={`rounded-full border px-4 py-2.5 text-xs font-black transition-all duration-300 sm:px-5 sm:text-sm ${
                        isActive
                          ? "border-sunuBlue bg-sunuBlue text-white shadow-lg shadow-sunuBlue/20"
                          : "border-gray-200 bg-white text-gray-600 hover:-translate-y-0.5 hover:border-sunuBlue hover:text-sunuBlue"
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
                    <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sunuBlue to-sunuCyan text-white shadow-lg sm:h-16 sm:w-16">
                          <span className="text-lg font-black sm:text-xl">
                            {group.number}
                          </span>
                        </div>

                        <div>
                          <p className="mb-1 text-[11px] font-black uppercase tracking-[0.18em] text-sunuOrange">
                            Univers {group.number}
                          </p>
                          <h3 className="text-2xl font-black leading-tight text-gray-900 sm:text-3xl">
                            {group.title}
                          </h3>
                          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-500 sm:text-base">
                            {group.description}
                          </p>
                        </div>
                      </div>

                      <span className="inline-flex self-start items-center rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-bold text-gray-500 md:self-auto">
                        {groupEbooks.length} guide{groupEbooks.length > 1 ? "s" : ""}
                      </span>
                    </div>

                    {/* Cartes des e-books */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                      {groupEbooks.map((ebook) => (
                        <article
                          key={ebook.id}
                          className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                        >
                          {/* Couverture */}
                          <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                            {ebook.image ? (
                              <img
                                src={ebook.image}
                                alt={`Couverture de l’e-book ${ebook.title}`}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                              />
                            ) : (
                              <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuOrange p-6">
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-white/80">
                                  SUNULINK INSIGHTS
                                </span>
                                <div>
                                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/70">
                                    ÉDITION 2026–2027
                                  </p>
                                  <h4 className="text-2xl font-black leading-tight text-white">
                                    {ebook.title}
                                  </h4>
                                </div>
                                <span className="text-xs font-bold text-white/70">
                                  E-BOOK
                                </span>
                              </div>
                            )}

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

                            <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-2">
                              <span className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-sunuBlue shadow-sm backdrop-blur-sm">
                                E-BOOK
                              </span>
                              <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
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
                          <div className="flex flex-1 flex-col p-5 sm:p-6">
                            <div className="mb-3">
                              <span className="text-[10px] font-black uppercase tracking-[0.16em] text-sunuBlue">
                                {ebook.category}
                              </span>
                            </div>

                            <h4 className="mb-3 text-xl font-black leading-tight text-gray-900 transition-colors group-hover:text-sunuBlue">
                              {ebook.title}
                            </h4>

                            <p className="text-sm leading-relaxed text-gray-600">
                              {ebook.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-bold text-gray-500">
                                <BookOpen className="h-3.5 w-3.5 text-sunuBlue" />
                                {ebook.pages}
                              </span>
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-bold text-gray-500">
                                <Clock className="h-3.5 w-3.5 text-sunuOrange" />
                                {ebook.readTime}
                              </span>
                            </div>

                            <div className="mt-6 border-t border-slate-100 pt-5">
                              <Link
                                to={`/ressources/${ebook.slug}`}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sunuBlue px-4 py-3.5 text-sm font-black text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-sunuOrange"
                              >
                                Découvrir le guide
                                <ArrowRight className="h-4 w-4" />
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
                <BookOpen className="mx-auto mb-4 h-12 w-12 text-sunuBlue" />
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

        {/* CTA — Newsletter double étape */}
        <section className="bg-slate-50 px-4 py-16 sm:px-6 md:py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-sunuBlue/15 bg-white shadow-[0_20px_60px_rgba(0,113,188,0.12)]">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-sunuBlue via-sunuCyan to-sunuOrange" />

              <div className="grid lg:grid-cols-[1.05fr_1.25fr]">
                <div className="relative overflow-hidden bg-sunuBlue p-7 text-white sm:p-10 md:p-12">
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-sunuCyan/25 blur-2xl" />
                  <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-sunuOrange/20 blur-3xl" />

                  <div className="relative z-10">
                    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white/90">
                      SUNULINK INSIGHTS
                    </span>
                    <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                      Restez au cœur de notre expertise.
                    </h2>
                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-blue-50/90 sm:text-base">
                      Recevez nos analyses, conseils, actualités et nouvelles ressources directement dans votre boîte mail.
                    </p>
                    <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sunuOrange">
                      <BookOpen className="h-4 w-4" />
                      Des idées utiles. Des méthodes concrètes.
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                  {isSuccess ? (
                    <div className="flex h-full min-h-[260px] flex-col items-center justify-center rounded-2xl border border-sunuBlue/15 bg-slate-50 p-7 text-center sm:p-9">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sunuBlue/10">
                        <CheckCircle className="h-8 w-8 text-sunuBlue" />
                      </div>
                      <h3 className="text-2xl font-black text-gray-900">
                        Bienvenue dans SunuLink Insights
                      </h3>
                      <p className="mt-3 max-w-md leading-relaxed text-gray-600">
                        Votre inscription a bien été validée. Vous recevrez bientôt nos meilleures ressources et astuces directement dans votre boîte mail.
                      </p>
                    </div>
                  ) : (
                    <div className="mx-auto max-w-xl">
                      <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-sunuBlue">
                          Newsletter
                        </p>
                        <h3 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl">
                          Inscrivez-vous en quelques secondes
                        </h3>
                      </div>

                      <form onSubmit={handleSubscribe} className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div>
                            <label className="mb-2 block text-sm font-bold text-gray-700">
                              Votre adresse email
                            </label>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="exemple@entreprise.com"
                              required
                              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 font-medium text-gray-800 placeholder:text-gray-400 transition-all focus:border-sunuBlue focus:outline-none focus:ring-4 focus:ring-sunuBlue/10"
                            />
                          </div>

                          <div>
                            <label className="mb-2 block text-sm font-bold text-gray-700">
                              Confirmer votre email
                            </label>
                            <input
                              type="email"
                              value={confirmEmail}
                              onChange={(e) => setConfirmEmail(e.target.value)}
                              placeholder="Retapez votre email"
                              required
                              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 font-medium text-gray-800 placeholder:text-gray-400 transition-all focus:border-sunuBlue focus:outline-none focus:ring-4 focus:ring-sunuBlue/10"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sunuBlue px-6 py-4 text-base font-black text-white shadow-lg shadow-sunuBlue/20 transition-all hover:bg-sunuOrange hover:shadow-sunuOrange/20 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:text-lg"
                        >
                          {isSubmitting
                            ? "Inscription en cours..."
                            : "S'abonner à la newsletter"}
                          <Send className="h-4 w-4" />
                        </button>

                        <p className="text-center text-xs leading-relaxed text-gray-500">
                          Des contenus utiles, sans surcharge. Vous pourrez vous désinscrire à tout moment.
                        </p>
                      </form>

                      {errorMessage && (
                        <div className="animate-shake mt-4 flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 p-3.5 text-sm font-semibold text-red-700">
                          <AlertCircle className="h-4 w-4 shrink-0" />
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
