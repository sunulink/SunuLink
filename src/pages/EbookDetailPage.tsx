import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Download,
  FileText,
  Lightbulb,
  Mail,
  Target,
  Users,
  X,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface EbookSection {
  title: string;
  description: string;
}

interface EbookData {
  id: number;
  title: string;
  category: string;
  group: string;
  description: string;
  slug: string;
  cover?: string;
  pages: string;
  readTime: string;
  publishedDate?: string;
  author: string;
  pdfUrl?: string;
  sections: EbookSection[];
}

const GUIDE_AUDIENCES = [
  {
    title: "DIRIGEANTS",
    description: "Pour prendre de meilleures décisions stratégiques.",
  },
  {
    title: "ENTREPRENEURS",
    description: "Pour structurer et développer leur activité.",
  },
  {
    title: "RESPONSABLES MARKETING",
    description: "Pour renforcer leur visibilité et leurs performances.",
  },
  {
    title: "PROFESSIONNELS",
    description: "Pour développer leurs compétences et anticiper les évolutions du marché.",
  },
];

const GUIDE_BENEFITS = [
  {
    title: "CLARTÉ",
    description: "Mieux comprendre vos enjeux.",
    icon: Lightbulb,
  },
  {
    title: "MÉTHODE",
    description: "Passer de l’idée à une démarche structurée.",
    icon: Target,
  },
  {
    title: "ACTION",
    description: "Transformer les recommandations en décisions concrètes.",
    icon: CheckCircle2,
  },
  {
    title: "PERFORMANCE",
    description: "Construire des actions orientées résultats.",
    icon: ArrowRight,
  },
];

const ebooksData: Record<string, EbookData> = {
  "conseils-astuces-marketing": {
    id: 1,
    title: "Conseils & Astuces Marketing",
    category: "Marketing",
    group: "Stratégie & Croissance",
    description:
      "Des conseils pratiques pour mieux structurer vos actions marketing et investir avec davantage de méthode.",
    slug: "conseils-astuces-marketing",
    cover: "/img/conseils_astuces_marketing.PNG",
    pages: "40–55 pages",
    readTime: "20–30 min",
    author: "SunuLink Consulting",
    sections: [],
  },
  "tendances-actualites": {
    id: 2,
    title: "Tendances & Actualités",
    category: "Marketing",
    group: "Stratégie & Croissance",
    description:
      "Comprendre les évolutions du marché, des usages et des pratiques pour mieux anticiper les transformations.",
    slug: "tendances-actualites",
    cover: "/img/tendances_actualites.PNG",
    pages: "40–55 pages",
    readTime: "20–30 min",
    author: "SunuLink Consulting",
    sections: [],
  },
  "strategies-communication": {
    id: 3,
    title: "Stratégies de Communication",
    category: "Communication",
    group: "Stratégie & Croissance",
    description:
      "Construire une communication cohérente, différenciante et orientée vers des objectifs concrets.",
    slug: "strategies-communication",
    cover: "/img/strategies_communication.PNG",
    pages: "40–55 pages",
    readTime: "20–30 min",
    author: "SunuLink Consulting",
    sections: [],
  },
  "entrepreneuriat-business": {
    id: 4,
    title: "Entrepreneuriat & Business",
    category: "Business & Développement",
    group: "Stratégie & Croissance",
    description:
      "Des méthodes pour structurer son activité, mieux comprendre ses enjeux et soutenir sa croissance.",
    slug: "entrepreneuriat-business",
    cover: "/img/entrepreneuriat_business.PNG",
    pages: "40–55 pages",
    readTime: "20–30 min",
    author: "SunuLink Consulting",
    sections: [],
  },
  "branding-identite-visuelle": {
    id: 5,
    title: "Branding & Identité Visuelle",
    category: "Branding",
    group: "Communication & Marque",
    description:
      "Construire une marque cohérente, reconnaissable et capable de créer une véritable préférence.",
    slug: "branding-identite-visuelle",
    cover: "/img/branding_identite_visuelle.PNG",
    pages: "40–55 pages",
    readTime: "20–30 min",
    author: "SunuLink Consulting",
    sections: [],
  },
  "communication-africaine": {
    id: 6,
    title: "Communication Africaine",
    category: "Communication",
    group: "Communication & Marque",
    description:
      "Explorer les spécificités culturelles et stratégiques de la communication sur les marchés africains.",
    slug: "communication-africaine",
    cover: "/img/communication_africaine.PNG",
    pages: "40–55 pages",
    readTime: "20–30 min",
    author: "SunuLink Consulting",
    sections: [],
  },
  "communication-360-strategie-globale": {
    id: 7,
    title: "Communication 360° & Stratégie Globale",
    category: "Communication",
    group: "Communication & Marque",
    description:
      "Relier les différents leviers de communication autour d’une vision globale et cohérente.",
    slug: "communication-360-strategie-globale",
    cover: "/img/communication_360_strategie_globale.PNG",
    pages: "40–55 pages",
    readTime: "20–30 min",
    author: "SunuLink Consulting",
    sections: [],
  },
  "communication-corporate-institutionnelle": {
    id: 8,
    title: "Communication Corporate & Institutionnelle",
    category: "Communication",
    group: "Communication & Marque",
    description:
      "Renforcer l’image, la crédibilité et la communication des entreprises et organisations.",
    slug: "communication-corporate-institutionnelle",
    cover: "/img/communication_corporate_institutionnelle.PNG",
    pages: "40–55 pages",
    readTime: "20–30 min",
    author: "SunuLink Consulting",
    sections: [],
  },
  "marketing-digital-seo": {
    id: 9,
    title: "Marketing Digital & SEO",
    category: "Digital & SEO",
    group: "Digital & Création",
    description:
      "Développer sa visibilité sur le digital et mettre en place une présence web plus performante.",
    slug: "marketing-digital-seo",
    cover: "/img/marketing_digital_seo.PNG",
    pages: "40–55 pages",
    readTime: "20–30 min",
    author: "SunuLink Consulting",
    sections: [],
  },
  "reseaux-sociaux": {
    id: 10,
    title: "Réseaux Sociaux",
    category: "Réseaux sociaux",
    group: "Digital & Création",
    description:
      "Créer une présence sociale cohérente, développer sa communauté et mieux engager son audience.",
    slug: "reseaux-sociaux",
    cover: "/img/reseaux_sociaux.PNG",
    pages: "40–55 pages",
    readTime: "20–30 min",
    author: "SunuLink Consulting",
    sections: [],
  },
  "creation-contenu-storytelling": {
    id: 11,
    title: "Création de Contenu & Storytelling",
    category: "Communication",
    group: "Digital & Création",
    description:
      "Développer des contenus utiles et raconter l’histoire de sa marque avec plus d’impact.",
    slug: "creation-contenu-storytelling",
    cover: "/img/creation_contenu_storytelling.PNG",
    pages: "40–55 pages",
    readTime: "20–30 min",
    author: "SunuLink Consulting",
    sections: [],
  },
  "design-graphique-creation-visuelle": {
    id: 12,
    title: "Design Graphique & Création Visuelle",
    category: "Branding",
    group: "Digital & Création",
    description:
      "Comprendre les principes d’une création visuelle cohérente au service de l’image de marque.",
    slug: "design-graphique-creation-visuelle",
    cover: "/img/design_graphique_creation_visuelle.PNG",
    pages: "40–55 pages",
    readTime: "20–30 min",
    author: "SunuLink Consulting",
    sections: [],
  },
  "innovation-ia": {
    id: 13,
    title: "Innovation & IA",
    category: "Innovation & IA",
    group: "Innovation & Activation",
    description:
      "Comprendre les usages de l’intelligence artificielle et identifier des applications concrètes pour l’entreprise.",
    slug: "innovation-ia",
    cover: "/img/innovation_ia.PNG",
    pages: "40–55 pages",
    readTime: "20–30 min",
    author: "SunuLink Consulting",
    sections: [],
  },
  "publicite-media-buying": {
    id: 14,
    title: "Publicité & Média Buying",
    category: "Marketing",
    group: "Innovation & Activation",
    description:
      "Mieux comprendre la publicité digitale, l’achat média, le ciblage et la logique de performance.",
    slug: "publicite-media-buying",
    cover: "/img/publicite_media_buying.PNG",
    pages: "40–55 pages",
    readTime: "20–30 min",
    author: "SunuLink Consulting",
    sections: [],
  },
  "audiovisuel-motion-design": {
    id: 15,
    title: "Audiovisuel & Motion Design",
    category: "Communication",
    group: "Innovation & Activation",
    description:
      "Explorer les formats audiovisuels et le motion design comme outils de communication et d’impact.",
    slug: "audiovisuel-motion-design",
    cover: "/img/audiovisuel_motion_design.PNG",
    pages: "40–55 pages",
    readTime: "20–30 min",
    author: "SunuLink Consulting",
    sections: [],
  },
  "evenementiel-activation-marque": {
    id: 16,
    title: "Événementiel & Activation de Marque",
    category: "Communication",
    group: "Innovation & Activation",
    description:
      "Créer des expériences de marque et des activations événementielles pensées pour générer de l’engagement.",
    slug: "evenementiel-activation-marque",
    cover: "/img/evenementiel_activation_marque.PNG",
    pages: "40–55 pages",
    readTime: "20–30 min",
    author: "SunuLink Consulting",
    sections: [],
  },
  "success-stories": {
    id: 17,
    title: "Success Stories",
    category: "Business & Développement",
    group: "Expertise & Réputation",
    description:
      "Décrypter des parcours, expériences et réalisations afin d’en tirer des enseignements utiles.",
    slug: "success-stories",
    cover: "/img/success_stories.PNG",
    pages: "40–55 pages",
    readTime: "20–30 min",
    author: "SunuLink Consulting",
    sections: [],
  },
  "interviews-portraits": {
    id: 18,
    title: "Interviews & Portraits",
    category: "Communication",
    group: "Expertise & Réputation",
    description:
      "Rencontrer des profils, experts et acteurs qui façonnent les métiers et les transformations du marché.",
    slug: "interviews-portraits",
    cover: "/img/interviews_portraits.PNG",
    pages: "40–55 pages",
    readTime: "20–30 min",
    author: "SunuLink Consulting",
    sections: [],
  },
  "tutoriels-guides": {
    id: 19,
    title: "Tutoriels & Guides",
    category: "Digital & SEO",
    group: "Expertise & Réputation",
    description:
      "Des ressources pratiques pour apprendre, appliquer et progresser étape par étape.",
    slug: "tutoriels-guides",
    cover: "/img/tutoriels_guides.PNG",
    pages: "40–55 pages",
    readTime: "20–30 min",
    author: "SunuLink Consulting",
    sections: [],
  },
  "communication-crise-reputation": {
    id: 20,
    title: "Communication de Crise & Réputation",
    category: "Communication",
    group: "Expertise & Réputation",
    description:
      "Anticiper les situations sensibles, protéger son image et structurer sa communication en contexte de crise.",
    slug: "communication-crise-reputation",
    cover: "/img/communication_crise_reputation.PNG",
    pages: "40–55 pages",
    readTime: "20–30 min",
    author: "SunuLink Consulting",
    sections: [],
  },
};

const fallbackSections = (ebook: EbookData): EbookSection[] => [
  {
    title: `Comprendre les enjeux de ${ebook.title}`,
    description:
      "Cette partie du guide présentera les principaux enjeux associés au thème et les points d’attention à considérer avant d’agir.",
  },
  {
    title: "Les principes essentiels",
    description:
      "Une synthèse des notions et méthodes essentielles à maîtriser pour structurer sa démarche.",
  },
  {
    title: "Passer à l’action",
    description:
      "Des pistes pratiques pour transformer les enseignements du guide en actions concrètes dans l’entreprise.",
  },
];

const EbookDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [email, setEmail] = useState("");
  const [downloadStatus, setDownloadStatus] = useState("");
  const [coverError, setCoverError] = useState(false);

  const ebook = slug ? ebooksData[slug] : null;
  const sections = ebook?.sections?.length ? ebook.sections : ebook ? fallbackSections(ebook) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
    setCoverError(false);
  }, [slug]);

  useEffect(() => {
    document.body.style.overflow = showDownloadModal ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showDownloadModal]);

  const handleDownloadRequest = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!ebook) return;

    if (ebook.pdfUrl) {
      window.open(ebook.pdfUrl, "_blank", "noopener,noreferrer");
      setDownloadStatus("Votre guide est prêt à être téléchargé.");
      return;
    }

    setDownloadStatus(
      "L’adresse e-mail a bien été enregistrée. Le PDF sera associé à ce guide lors de la prochaine étape de mise en ligne."
    );
  };

  if (!ebook) {
    return (
      <div className="min-h-screen bg-white">
        <Header />

        <main className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <BookOpen className="w-16 h-16 text-sunuBlue mx-auto mb-5" />
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              E-book non trouvé
            </h1>
            <p className="text-gray-600 mb-7">
              Le guide demandé n’est pas encore référencé dans la bibliothèque SunuLink Insights.
            </p>
            <Link
              to="/ressources"
              className="inline-flex items-center gap-2 rounded-full bg-sunuBlue px-6 py-3 font-bold text-white hover:bg-sunuOrange transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour aux ressources
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      <main className="pb-20">
        {/* Retour */}
        <section className="pt-28 md:pt-32 pb-5 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <Link
              to="/ressources"
              className="inline-flex items-center gap-2 text-sm font-bold text-sunuBlue hover:text-sunuOrange transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à Ressources & Expertises
            </Link>
          </div>
        </section>

        {/* =========================================================
            HERO E-BOOK
        ========================================================= */}
        <section className="px-4 sm:px-6 pb-12 md:pb-16">
          <div className="container mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-[#0B2440] to-sunuBlue shadow-[0_25px_80px_rgba(0,113,188,0.2)]">
              <div className="grid lg:grid-cols-[1.15fr_0.85fr] min-h-[620px]">
                <div className="relative flex flex-col justify-center p-7 sm:p-10 md:p-14 lg:p-16 text-white">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,156,222,0.22),transparent_35%),radial-gradient(circle_at_85%_75%,rgba(246,166,26,0.14),transparent_30%)] pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex flex-wrap gap-2 mb-5">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] backdrop-blur-md">
                        <BookOpen className="w-4 h-4 text-sunuOrange" />
                        SUNULINK INSIGHTS
                      </span>
                      <span className="inline-flex items-center rounded-full border border-sunuOrange/30 bg-sunuOrange/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-sunuOrange">
                        ÉDITION 2026–2027
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-black uppercase tracking-[0.18em] text-sunuOrange mb-3">
                      {ebook.group}
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.98] tracking-tight max-w-3xl">
                      {ebook.title}
                    </h1>

                    <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-blue-50/90 max-w-3xl">
                      {ebook.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2.5">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2.5 text-sm font-bold text-white/90">
                        <BookOpen className="w-4 h-4 text-sunuCyan" />
                        {ebook.pages}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2.5 text-sm font-bold text-white/90">
                        <Clock className="w-4 h-4 text-sunuOrange" />
                        {ebook.readTime}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2.5 text-sm font-bold text-white/90">
                        <Users className="w-4 h-4 text-sunuCyan" />
                        {ebook.author}
                      </span>
                    </div>

                    <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <a
                        href="#decouvrir"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-sunuOrange px-7 py-3.5 font-black text-white shadow-lg transition-all hover:bg-white hover:text-sunuBlue hover:-translate-y-0.5"
                      >
                        Lire le guide
                        <ArrowRight className="w-4 h-4" />
                      </a>

                      <button
                        type="button"
                        onClick={() => {
                          setDownloadStatus("");
                          setShowDownloadModal(true);
                        }}
                        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 bg-white/5 px-7 py-3.5 font-black text-white backdrop-blur-sm transition-all hover:bg-white hover:text-sunuBlue"
                      >
                        <Download className="w-4 h-4" />
                        Télécharger le PDF
                      </button>
                    </div>
                  </div>
                </div>

                {/* Couverture */}
                <div className="relative flex items-center justify-center p-8 sm:p-10 md:p-14 bg-gradient-to-br from-white/5 via-white/10 to-sunuCyan/10 border-t lg:border-t-0 lg:border-l border-white/10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />

                  <div className="relative w-full max-w-[350px]">
                    <div className="absolute -inset-4 rounded-[2rem] bg-sunuOrange/15 blur-3xl" />

                    <div className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden border border-white/20 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] transform rotate-2 group">
                      {ebook.cover && !coverError ? (
                        <img
                          src={ebook.cover}
                          alt={`Couverture de l’e-book ${ebook.title}`}
                          className="w-full h-full object-cover"
                          onError={() => setCoverError(true)}
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col justify-between p-7 bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuOrange text-white">
                          <div>
                            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/80">
                              SUNULINK INSIGHTS
                            </p>
                            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                              ÉDITION 2026–2027
                            </p>
                          </div>

                          <div>
                            <span className="inline-flex rounded-full bg-white/15 border border-white/20 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider mb-4">
                              E-BOOK
                            </span>
                            <h2 className="text-3xl font-black leading-tight">
                              {ebook.title}
                            </h2>
                          </div>

                          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                            SunuLink Consulting
                          </div>
                        </div>
                      )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/* =========================================================
            CE QUE VOUS ALLEZ DÉCOUVRIR
        ========================================================= */}
        <section id="decouvrir" className="py-16 md:py-24 px-4 sm:px-6 bg-slate-50">
          <div className="container mx-auto max-w-7xl">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-sunuOrange">
                Lecture stratégique
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
                CE QUE VOUS ALLEZ DÉCOUVRIR
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                Les principaux chapitres du guide seront présentés ici pour permettre au lecteur de comprendre rapidement sa structure et son intérêt.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sections.map((section, index) => (
                <article
                  key={`${section.title}-${index}`}
                  className="bg-white rounded-[1.5rem] border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="text-4xl font-black text-sunuOrange/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-sunuBlue/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-sunuBlue" />
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 leading-tight mb-3">
                    {section.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            CE GUIDE EST POUR VOUS SI…
        ========================================================= */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-sunuBlue">
                Pour quels profils ?
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
                CE GUIDE EST POUR VOUS SI…
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {GUIDE_AUDIENCES.map((profile) => (
                <div
                  key={profile.title}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 hover:border-sunuBlue/30 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sunuBlue to-sunuCyan text-white flex items-center justify-center mb-5">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-black tracking-wide text-sunuBlue mb-2">
                    {profile.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {profile.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            CE QUE VOUS ALLEZ EN RETIRER
        ========================================================= */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-slate-50">
          <div className="container mx-auto max-w-7xl">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-sunuOrange">
                Valeur du guide
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
                CE QUE VOUS ALLEZ EN RETIRER
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {GUIDE_BENEFITS.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article
                    key={benefit.title}
                    className="group rounded-[1.5rem] bg-white border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-sunuBlue/10 flex items-center justify-center mb-5 group-hover:bg-sunuOrange transition-colors">
                      <Icon className="w-6 h-6 text-sunuBlue group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            APERÇU DU GUIDE
        ========================================================= */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-sunuBlue">
                Aperçu
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
                APERÇU DU GUIDE
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                Cette zone accueillera plusieurs pages du e-book sous forme de mockups afin de donner un aperçu concret de son contenu.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {[0, 1, 2].map((item) => (
                <div
                  key={item}
                  className={`relative mx-auto w-full max-w-[300px] ${
                    item === 1 ? "md:-translate-y-4" : ""
                  }`}
                >
                  <div
                    className={`aspect-[3/4] rounded-[1.5rem] overflow-hidden border border-slate-200 bg-slate-100 shadow-xl ${
                      item === 0 ? "md:-rotate-3" : item === 2 ? "md:rotate-3" : ""
                    }`}
                  >
                    {ebook.cover ? (
                      <img
                        src={ebook.cover}
                        alt={`Aperçu du guide ${ebook.title}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full p-7 flex flex-col justify-between bg-gradient-to-br from-sunuBlue to-sunuCyan text-white">
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.18em]">
                            SUNULINK INSIGHTS
                          </p>
                          <p className="mt-2 text-[10px] uppercase tracking-widest text-white/70">
                            ÉDITION 2026–2027
                          </p>
                        </div>
                        <h3 className="text-2xl font-black leading-tight">
                          {ebook.title}
                        </h3>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            CTA FINAL
        ========================================================= */}
        <section className="py-12 md:py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-sunuBlue via-sunuCyan to-sunuBlue text-white shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_85%_75%,rgba(246,166,26,0.18),transparent_30%)]" />

              <div className="relative z-10 text-center px-6 py-12 sm:px-10 md:py-16">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-sunuOrange mb-3">
                  SUNULINK CONSULTING
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight max-w-4xl mx-auto">
                  BESOIN D’ALLER PLUS LOIN ? PARLONS DE VOTRE PROJET.
                </h2>

                <p className="mt-5 text-base sm:text-lg text-blue-50 max-w-2xl mx-auto leading-relaxed">
                  Nos ressources vous donnent les clés. Notre équipe vous accompagne pour les transformer en résultats.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-sunuOrange px-7 py-3.5 font-black text-white hover:bg-white hover:text-sunuBlue transition-all"
                  >
                    Parler à un expert
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/ressources"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 bg-white/5 px-7 py-3.5 font-black text-white hover:bg-white hover:text-sunuBlue transition-all"
                  >
                    <BookOpen className="w-4 h-4" />
                    Voir d’autres ressources
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* =========================================================
          MODAL TÉLÉCHARGEMENT — ÉTAPE ACTUELLE
      ========================================================= */}
      {showDownloadModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <div className="h-1.5 bg-gradient-to-r from-sunuBlue via-sunuCyan to-sunuOrange" />

            <button
              type="button"
              onClick={() => setShowDownloadModal(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-gray-600 hover:bg-slate-200 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-7 sm:p-9">
              <div className="w-14 h-14 rounded-2xl bg-sunuBlue/10 flex items-center justify-center mb-5">
                <Mail className="w-7 h-7 text-sunuBlue" />
              </div>

              <span className="text-xs font-black uppercase tracking-[0.16em] text-sunuOrange">
                SUNULINK INSIGHTS
              </span>

              <h2 className="mt-2 text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
                Recevez votre e-book
              </h2>

              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                Entrez votre adresse e-mail pour accéder au téléchargement de : <strong>{ebook.title}</strong>.
              </p>

              <form onSubmit={handleDownloadRequest} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Votre adresse e-mail
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setDownloadStatus("");
                    }}
                    required
                    placeholder="exemple@entreprise.com"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-800 outline-none transition-all focus:border-sunuBlue focus:ring-4 focus:ring-sunuBlue/10"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-sunuBlue px-5 py-3.5 font-black text-white shadow-lg hover:bg-sunuOrange transition-all"
                >
                  <Download className="w-4 h-4" />
                  Accéder au téléchargement
                </button>
              </form>

              {downloadStatus && (
                <div className="mt-4 rounded-xl border border-sunuBlue/15 bg-sunuBlue/5 p-4 text-sm font-semibold text-sunuBlue">
                  {downloadStatus}
                </div>
              )}

              <p className="mt-5 text-xs text-gray-400 leading-relaxed">
                Votre adresse sera utilisée dans le cadre de l’accès à cette ressource. La connexion du formulaire à votre système d’envoi sera finalisée dans l’étape suivante.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EbookDetailPage;
