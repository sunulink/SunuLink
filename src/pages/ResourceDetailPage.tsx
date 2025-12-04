import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BookOpen,
  Palette,
  TrendingUp,
  Search,
  Share2,
  Target,
  Video,
  FileText,
  MessageSquare,
  Calendar,
  Briefcase,
  Mail,
  Sparkles,
  Cpu,
  CheckSquare,
  Layout,
  Award,
  Wrench,
  ClipboardCheck,
  AlertTriangle,
  ArrowLeft,
  Clock,
  Download,
  ExternalLink,
} from "lucide-react";

// Types d'articles
interface Article {
  id: string;
  title: string;
  description: string;
  readTime: string;
  type: "guide" | "template" | "checklist" | "case-study" | "tool";
  featured?: boolean;
  articleSlug?: string; // Slug pour le lien vers l'article complet
}

// Mapping des catégories avec leurs informations
const categoriesData: Record<string, {
  title: string;
  icon: any;
  color: string;
  description: string;
  articles: Article[];
}> = {
  "communication-360": {
    title: "Guide complet de la communication 360°",
    icon: BookOpen,
    color: "from-sunuOrange to-yellow-500",
    description: "Tout ce que vous devez savoir sur la communication globale et intégrée",
    articles: [
      {
        id: "1",
        title: "Guide complet de la communication 360°",
        description: "Tout ce que vous devez savoir sur la communication globale et intégrée : stratégie, méthodologie, outils et bonnes pratiques",
        readTime: "45 min",
        type: "guide",
        featured: true,
        articleSlug: "guide-complet-communication-360",
      },
      {
        id: "2",
        title: "Construire une stratégie de communication cohérente",
        description: "Étapes clés pour développer une approche multicanale efficace",
        readTime: "15 min",
        type: "guide",
      },
      {
        id: "3",
        title: "Mesurer l'efficacité de votre communication 360°",
        description: "KPIs et outils pour évaluer votre stratégie",
        readTime: "12 min",
        type: "guide",
      },
    ],
  },
  "charte-graphique": {
    title: "Charte graphique : bonnes pratiques essentielles",
    icon: Palette,
    color: "from-sunuBlue to-sunuCyan",
    description: "Créez une identité visuelle cohérente et professionnelle",
    articles: [
      {
        id: "1",
        title: "Charte graphique : bonnes pratiques essentielles",
        description: "Un guide complet pour créer et gérer une charte graphique professionnelle qui renforce l'identité de votre marque sur tous les supports",
        readTime: "35 min",
        type: "guide",
        featured: true,
        articleSlug: "charte-graphique-bonnes-pratiques",
      },
      {
        id: "2",
        title: "Template de charte graphique",
        description: "Modèle prêt à l'emploi pour structurer votre charte",
        readTime: "5 min",
        type: "template",
      },
    ],
  },
  "branding-positionnement": {
    title: "Branding & Positionnement de marque",
    icon: TrendingUp,
    color: "from-purple-500 to-pink-500",
    description: "Développez une marque forte et différenciante",
    articles: [
      {
        id: "1",
        title: "Branding & Positionnement de marque",
        description: "L'art de créer une identité unique, mémorable et irrésistible qui transforme votre entreprise en référence",
        readTime: "30 min",
        type: "guide",
        featured: true,
        articleSlug: "branding-positionnement-marque",
      },
    ],
  },
  "strategie-digitale-seo": {
    title: "Stratégie digitale & SEO",
    icon: Search,
    color: "from-green-500 to-emerald-500",
    description: "Optimisez votre présence en ligne et votre référencement",
    articles: [
      {
        id: "1",
        title: "Stratégie digitale & SEO",
        description: "Piloter sa présence en ligne pour être visible, crédible et impactant grâce à une stratégie digitale solide et un SEO optimisé",
        readTime: "40 min",
        type: "guide",
        featured: true,
        articleSlug: "strategie-digitale-seo-guide",
      },
    ],
  },
  "reseaux-sociaux": {
    title: "Réseaux sociaux : stratégies & contenus",
    icon: Share2,
    color: "from-blue-500 to-indigo-500",
    description: "Maîtrisez les plateformes sociales et engagez votre audience",
    articles: [
      {
        id: "1",
        title: "Réseaux sociaux : stratégies & contenus",
        description: "Optimiser la présence, l'impact et l'engagement sur toutes les plateformes pour transformer vos abonnés en clients fidèles",
        readTime: "38 min",
        type: "guide",
        featured: true,
        articleSlug: "reseaux-sociaux-strategies-contenus",
      },
    ],
  },
  "publicite-payante": {
    title: "Publicité payante (Meta Ads, Google Ads)",
    icon: Target,
    color: "from-red-500 to-orange-500",
    description: "Optimisez vos campagnes publicitaires en ligne",
    articles: [
      {
        id: "1",
        title: "Maîtriser Meta Ads : Guide complet",
        description: "Créez des campagnes Facebook et Instagram performantes",
        readTime: "30 min",
        type: "guide",
        featured: true,
      },
    ],
  },
  "contenus-visuels-videos": {
    title: "Création de contenus visuels & vidéos",
    icon: Video,
    color: "from-pink-500 to-rose-500",
    description: "Produisez des contenus visuels captivants et professionnels",
    articles: [
      {
        id: "1",
        title: "Checklist shooting professionnel",
        description: "Tout ce qu'il faut préparer pour un shooting réussi",
        readTime: "8 min",
        type: "checklist",
        featured: true,
      },
    ],
  },
  "copywriting-storytelling": {
    title: "Copywriting & Storytelling",
    icon: FileText,
    color: "from-amber-500 to-orange-500",
    description: "Racontez des histoires qui convertissent et inspirent",
    articles: [
      {
        id: "1",
        title: "Les techniques de copywriting qui convertissent",
        description: "Écrivez des textes persuasifs et impactants",
        readTime: "20 min",
        type: "guide",
        featured: true,
      },
    ],
  },
  "relations-presse-ereputation": {
    title: "Relations presse & E-réputation",
    icon: MessageSquare,
    color: "from-teal-500 to-cyan-500",
    description: "Gérez votre image et vos relations médias",
    articles: [
      {
        id: "1",
        title: "Construire et gérer votre e-réputation",
        description: "Protégez et valorisez votre image en ligne",
        readTime: "15 min",
        type: "guide",
        featured: true,
      },
    ],
  },
  "evenementiel-activation": {
    title: "Événementiel & Activation de marque",
    icon: Calendar,
    color: "from-violet-500 to-purple-500",
    description: "Créez des expériences mémorables pour votre marque",
    articles: [
      {
        id: "1",
        title: "Organiser un événement de marque réussi",
        description: "De la conception à l'exécution",
        readTime: "22 min",
        type: "guide",
        featured: true,
      },
    ],
  },
  "developpement-commercial": {
    title: "Développement commercial & Prospection digitale",
    icon: Briefcase,
    color: "from-indigo-500 to-blue-500",
    description: "Boostez vos ventes avec des stratégies digitales efficaces",
    articles: [
      {
        id: "1",
        title: "Prospection digitale B2B : Les meilleures pratiques",
        description: "Techniques pour générer et qualifier des leads",
        readTime: "18 min",
        type: "guide",
        featured: true,
      },
    ],
  },
  "emailing-automatisation": {
    title: "Emailing & Automatisation marketing",
    icon: Mail,
    color: "from-cyan-500 to-blue-500",
    description: "Automatisez vos campagnes et nurturez vos leads",
    articles: [
      {
        id: "1",
        title: "Email marketing : Guide complet 2025",
        description: "Stratégies et tactiques pour des campagnes efficaces",
        readTime: "25 min",
        type: "guide",
        featured: true,
      },
    ],
  },
  "tendances-innovations": {
    title: "Tendances marketing & Innovations",
    icon: Sparkles,
    color: "from-yellow-500 to-orange-500",
    description: "Restez à la pointe des dernières tendances",
    articles: [
      {
        id: "1",
        title: "Tendances marketing 2025",
        description: "Les innovations qui transforment le marketing",
        readTime: "20 min",
        type: "guide",
        featured: true,
      },
    ],
  },
  "ia-communication": {
    title: "IA appliquée à la communication",
    icon: Cpu,
    color: "from-blue-600 to-purple-600",
    description: "Exploitez l'intelligence artificielle dans vos stratégies",
    articles: [
      {
        id: "1",
        title: "IA générative pour la communication",
        description: "Comment utiliser ChatGPT, Midjourney et autres outils IA",
        readTime: "30 min",
        type: "guide",
        featured: true,
      },
    ],
  },
  "checklists-professionnelles": {
    title: "Checklists professionnelles",
    icon: CheckSquare,
    color: "from-green-600 to-teal-600",
    description: "Shooting, branding, réseaux sociaux et plus encore",
    articles: [
      {
        id: "1",
        title: "Checklist shooting photo/vidéo",
        description: "Ne rien oublier pour votre production",
        readTime: "5 min",
        type: "checklist",
        featured: true,
      },
      {
        id: "2",
        title: "Checklist lancement de marque",
        description: "Toutes les étapes pour un lancement réussi",
        readTime: "8 min",
        type: "checklist",
      },
    ],
  },
  "modeles-templates": {
    title: "Modèles & Templates",
    icon: Layout,
    color: "from-orange-500 to-red-500",
    description: "Calendrier éditorial, charte graphique, pitch deck...",
    articles: [
      {
        id: "1",
        title: "Template calendrier éditorial",
        description: "Planifiez vos contenus efficacement",
        readTime: "5 min",
        type: "template",
        featured: true,
      },
      {
        id: "2",
        title: "Template pitch deck",
        description: "Structure professionnelle pour vos présentations",
        readTime: "5 min",
        type: "template",
      },
    ],
  },
  "etudes-de-cas": {
    title: "Études de cas / Success stories",
    icon: Award,
    color: "from-purple-600 to-pink-600",
    description: "Inspirez-vous de projets réussis et retours d'expérience",
    articles: [
      {
        id: "1",
        title: "Comment nous avons multiplié par 5 le trafic d'un client",
        description: "Étude de cas : stratégie SEO et content marketing",
        readTime: "12 min",
        type: "case-study",
        featured: true,
      },
    ],
  },
  "outils-indispensables": {
    title: "Outils indispensables pour une communication 360°",
    icon: Wrench,
    color: "from-gray-600 to-gray-800",
    description: "Les meilleurs outils pour optimiser votre communication",
    articles: [
      {
        id: "1",
        title: "Top 50 des outils marketing 2025",
        description: "Sélection des meilleurs outils par catégorie",
        readTime: "15 min",
        type: "tool",
        featured: true,
      },
    ],
  },
  "audit-marketing": {
    title: "Audit marketing & Diagnostic de marque",
    icon: ClipboardCheck,
    color: "from-emerald-600 to-green-600",
    description: "Analysez et optimisez votre stratégie marketing",
    articles: [
      {
        id: "1",
        title: "Template audit marketing complet",
        description: "Évaluez votre stratégie en profondeur",
        readTime: "10 min",
        type: "template",
        featured: true,
      },
    ],
  },
  "gestion-crise": {
    title: "Gestion de crise",
    icon: AlertTriangle,
    color: "from-red-600 to-pink-600",
    description: "Anticipez et gérez les situations de crise communication",
    articles: [
      {
        id: "1",
        title: "Plan de gestion de crise communication",
        description: "Préparez-vous et réagissez efficacement",
        readTime: "20 min",
        type: "guide",
        featured: true,
      },
    ],
  },
};

const ResourceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? categoriesData[slug] : null;

  if (!category) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-black mb-6 text-gray-800">Catégorie non trouvée</h1>
            <Link
              to="/ressources"
              className="inline-flex items-center gap-2 text-sunuOrange hover:text-sunuBlue font-bold"
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

  const Icon = category.icon;
  const featuredArticles = category.articles.filter((a) => a.featured);
  const regularArticles = category.articles.filter((a) => !a.featured);

  const getTypeLabel = (type: string) => {
    const labels = {
      guide: "Guide",
      template: "Template",
      checklist: "Checklist",
      "case-study": "Étude de cas",
      tool: "Outil",
    };
    return labels[type as keyof typeof labels] || type;
  };

  const getTypeColor = (type: string) => {
    const colors = {
      guide: "bg-blue-500",
      template: "bg-purple-500",
      checklist: "bg-green-500",
      "case-study": "bg-orange-500",
      tool: "bg-gray-700",
    };
    return colors[type as keyof typeof colors] || "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-sunuOrange/10 to-white">
          <div className="container mx-auto max-w-5xl">
            <Link
              to="/ressources"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-sunuOrange font-semibold mb-8 transition-colors"
              data-aos="fade-right"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour aux ressources
            </Link>

            <div className="flex items-start gap-6 mb-8" data-aos="fade-up">
              <div
                className={`grain-texture bg-gradient-to-br ${category.color} w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
              >
                <Icon className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-800">
                  {category.title}
                </h1>
                <p className="text-xl text-gray-600">{category.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="100">
              <span className="bg-white px-4 py-2 rounded-full text-sm font-bold text-gray-700 shadow-sm">
                {category.articles.length} articles
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-sm font-bold text-gray-700 shadow-sm">
                Mis à jour régulièrement
              </span>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="py-16 px-6">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-3xl font-black mb-8 text-gray-800" data-aos="fade-up">
                Articles en vedette
              </h2>
              <div className="space-y-6">
                {featuredArticles.map((article, index) => (
                  <div
                    key={article.id}
                    className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-sunuOrange hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      <span
                        className={`${getTypeColor(article.type)} text-white px-4 py-1 rounded-full text-sm font-bold w-fit`}
                      >
                        {getTypeLabel(article.type)}
                      </span>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-black mb-3 text-gray-800 group-hover:text-sunuOrange transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{article.description}</p>
                    <div className="flex gap-3">
                      {article.articleSlug ? (
                        <Link
                          to={`/article/${article.articleSlug}`}
                          className="inline-flex items-center gap-2 bg-sunuOrange text-white px-6 py-3 rounded-full font-bold hover:bg-sunuBlue transition-all duration-300"
                        >
                          Lire l'article
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      ) : (
                        <button className="inline-flex items-center gap-2 bg-sunuOrange text-white px-6 py-3 rounded-full font-bold hover:bg-sunuBlue transition-all duration-300 opacity-50 cursor-not-allowed">
                          Bientôt disponible
                        </button>
                      )}
                      {(article.type === "template" || article.type === "checklist") && (
                        <button className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-all duration-300">
                          <Download className="w-4 h-4" />
                          Télécharger
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Articles */}
        {regularArticles.length > 0 && (
          <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-3xl font-black mb-8 text-gray-800" data-aos="fade-up">
                Tous les articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularArticles.map((article, index) => (
                  <div
                    key={article.id}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer border border-gray-100"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`${getTypeColor(article.type)} text-white px-3 py-1 rounded-full text-xs font-bold`}
                      >
                        {getTypeLabel(article.type)}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-black mb-2 text-gray-800 group-hover:text-sunuOrange transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{article.description}</p>
                    {article.articleSlug ? (
                      <Link
                        to={`/article/${article.articleSlug}`}
                        className="text-sunuOrange font-bold hover:text-sunuBlue transition-colors flex items-center gap-1"
                      >
                        Lire plus
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    ) : (
                      <span className="text-gray-400 font-bold flex items-center gap-1 cursor-not-allowed">
                        Bientôt disponible
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grain-texture bg-gradient-to-r from-sunuBlue to-sunuOrange rounded-3xl p-12 text-white text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Besoin d'aide pour mettre en pratique ?
              </h2>
              <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
                Notre équipe d'experts peut vous accompagner dans la mise en œuvre de ces stratégies.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-sunuBlue px-10 py-4 rounded-full font-bold text-lg hover:bg-sunuOrange hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ResourceDetailPage;
