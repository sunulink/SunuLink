import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
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
  ArrowLeft,
  Clock,
  Calendar,
  User,
} from "lucide-react";

// Types d'articles de blog
interface BlogArticle {
  id: string;
  title: string;
  description: string;
  readTime: string;
  publishedDate: string;
  author: string;
  featured?: boolean;
  articleSlug?: string;
}

// Mapping des catégories de blog avec leurs informations
const blogCategoriesData: Record<string, {
  title: string;
  icon: any;
  color: string;
  description: string;
  articles: BlogArticle[];
}> = {
  "conseils-marketing": {
    title: "Conseils & Astuces Marketing",
    icon: Lightbulb,
    color: "from-sunuOrange to-yellow-500",
    description: "Des astuces pratiques pour améliorer votre stratégie marketing au quotidien",
    articles: [
      {
        id: "1",
        title: "10 astuces pour booster votre engagement sur les réseaux sociaux",
        description: "Découvrez des techniques simples mais efficaces pour augmenter l'engagement de votre communauté",
        readTime: "8 min",
        publishedDate: "5 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "2",
        title: "Comment créer du contenu viral en 2025",
        description: "Les secrets des contenus qui se partagent massivement",
        readTime: "10 min",
        publishedDate: "1 Décembre 2025",
        author: "Sunu Link Consulting",
      },
      {
        id: "3",
        title: "Optimiser votre budget marketing : guide pratique",
        description: "Maximisez votre ROI avec ces conseils de gestion budgétaire",
        readTime: "12 min",
        publishedDate: "28 Novembre 2025",
        author: "Sunu Link Consulting",
      },
    ],
  },
  "tendances-actualites": {
    title: "Tendances & Actualités",
    icon: TrendingUp,
    color: "from-sunuBlue to-sunuCyan",
    description: "Restez informé des dernières tendances en communication et marketing digital",
    articles: [
      {
        id: "1",
        title: "Les tendances marketing à suivre en 2025",
        description: "Tour d'horizon des innovations qui vont transformer le marketing cette année",
        readTime: "15 min",
        publishedDate: "8 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "2",
        title: "L'essor du commerce social en Afrique",
        description: "Comment les réseaux sociaux révolutionnent le e-commerce africain",
        readTime: "10 min",
        publishedDate: "3 Décembre 2025",
        author: "Sunu Link Consulting",
      },
    ],
  },
  "strategies-communication": {
    title: "Stratégies de Communication",
    icon: Megaphone,
    color: "from-purple-500 to-pink-500",
    description: "Apprenez à construire des stratégies de communication efficaces et percutantes",
    articles: [
      {
        id: "1",
        title: "Construire une stratégie de communication 360° efficace",
        description: "Guide complet pour une approche globale et cohérente",
        readTime: "20 min",
        publishedDate: "6 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "2",
        title: "Communication de crise : comment réagir efficacement",
        description: "Les bonnes pratiques pour gérer une crise de réputation",
        readTime: "12 min",
        publishedDate: "30 Novembre 2025",
        author: "Sunu Link Consulting",
      },
    ],
  },
  "marketing-digital-seo": {
    title: "Marketing Digital & SEO",
    icon: Target,
    color: "from-green-500 to-emerald-500",
    description: "Optimisez votre présence en ligne et améliorez votre référencement naturel",
    articles: [
      {
        id: "1",
        title: "SEO en 2025 : les nouvelles règles du jeu",
        description: "Comment adapter votre stratégie SEO aux dernières mises à jour Google",
        readTime: "18 min",
        publishedDate: "7 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "2",
        title: "Google Ads vs Meta Ads : quel canal choisir ?",
        description: "Comparatif détaillé pour optimiser votre budget publicitaire",
        readTime: "14 min",
        publishedDate: "2 Décembre 2025",
        author: "Sunu Link Consulting",
      },
    ],
  },
  "reseaux-sociaux": {
    title: "Réseaux Sociaux",
    icon: Users,
    color: "from-blue-500 to-indigo-500",
    description: "Maîtrisez les réseaux sociaux et développez votre communauté en ligne",
    articles: [
      {
        id: "1",
        title: "TikTok pour les entreprises : guide complet",
        description: "Comment utiliser TikTok pour développer votre marque en Afrique",
        readTime: "16 min",
        publishedDate: "9 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "2",
        title: "LinkedIn : optimiser votre profil entreprise",
        description: "Les secrets d'une page LinkedIn qui génère des leads",
        readTime: "10 min",
        publishedDate: "4 Décembre 2025",
        author: "Sunu Link Consulting",
      },
      {
        id: "3",
        title: "Instagram Reels : stratégies qui fonctionnent",
        description: "Créer des Reels engageants pour votre audience",
        readTime: "8 min",
        publishedDate: "29 Novembre 2025",
        author: "Sunu Link Consulting",
      },
    ],
  },
  "branding-identite": {
    title: "Branding & Identité Visuelle",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    description: "Construisez une marque forte et une identité visuelle mémorable",
    articles: [
      {
        id: "1",
        title: "Créer une identité de marque mémorable",
        description: "Les étapes clés pour construire une marque qui marque les esprits",
        readTime: "14 min",
        publishedDate: "5 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "2",
        title: "Refonte de marque : quand et comment la faire ?",
        description: "Guide pour réussir votre rebranding",
        readTime: "12 min",
        publishedDate: "27 Novembre 2025",
        author: "Sunu Link Consulting",
      },
    ],
  },
  "communication-africaine": {
    title: "Communication Africaine",
    icon: Globe,
    color: "from-amber-500 to-orange-500",
    description: "Focus sur les spécificités de la communication sur le continent africain",
    articles: [
      {
        id: "1",
        title: "Le marketing digital en Afrique : état des lieux 2025",
        description: "Panorama du paysage digital africain et ses opportunités",
        readTime: "20 min",
        publishedDate: "8 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "2",
        title: "Adapter sa communication aux cultures africaines",
        description: "Comment communiquer efficacement sur un marché multiculturel",
        readTime: "15 min",
        publishedDate: "1 Décembre 2025",
        author: "Sunu Link Consulting",
      },
    ],
  },
  "entrepreneuriat-business": {
    title: "Entrepreneuriat & Business",
    icon: Briefcase,
    color: "from-teal-500 to-cyan-500",
    description: "Conseils pour les entrepreneurs et PME en matière de communication",
    articles: [
      {
        id: "1",
        title: "Communication startup : les essentiels avec un petit budget",
        description: "Comment communiquer efficacement quand on débute",
        readTime: "12 min",
        publishedDate: "6 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "2",
        title: "Pitcher son projet : les clés d'une présentation réussie",
        description: "Techniques pour convaincre investisseurs et partenaires",
        readTime: "10 min",
        publishedDate: "30 Novembre 2025",
        author: "Sunu Link Consulting",
      },
    ],
  },
  "innovation-ia": {
    title: "Innovation & IA",
    icon: Sparkles,
    color: "from-violet-500 to-purple-500",
    description: "L'intelligence artificielle et les innovations au service de la communication",
    articles: [
      {
        id: "1",
        title: "ChatGPT et la création de contenu : guide pratique",
        description: "Comment utiliser l'IA générative pour votre communication",
        readTime: "18 min",
        publishedDate: "9 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "2",
        title: "Les outils IA indispensables pour les marketeurs",
        description: "Sélection des meilleures solutions IA pour optimiser votre travail",
        readTime: "14 min",
        publishedDate: "3 Décembre 2025",
        author: "Sunu Link Consulting",
      },
      {
        id: "3",
        title: "L'IA va-t-elle remplacer les créatifs ?",
        description: "Réflexion sur l'avenir de la création à l'ère de l'IA",
        readTime: "10 min",
        publishedDate: "26 Novembre 2025",
        author: "Sunu Link Consulting",
      },
    ],
  },
  "success-stories": {
    title: "Success Stories",
    icon: Award,
    color: "from-red-500 to-orange-500",
    description: "Des études de cas et témoignages inspirants de projets réussis",
    articles: [
      {
        id: "1",
        title: "Comment nous avons multiplié par 5 la visibilité d'une PME sénégalaise",
        description: "Étude de cas : stratégie digitale complète pour une entreprise locale",
        readTime: "15 min",
        publishedDate: "7 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "2",
        title: "Lancement de produit réussi : le cas d'une startup tech",
        description: "Les coulisses d'une campagne de lancement qui a fait parler",
        readTime: "12 min",
        publishedDate: "2 Décembre 2025",
        author: "Sunu Link Consulting",
      },
    ],
  },
  "interviews-portraits": {
    title: "Interviews & Portraits",
    icon: MessageSquare,
    color: "from-indigo-500 to-blue-500",
    description: "Rencontres avec des experts et acteurs du monde de la communication",
    articles: [
      {
        id: "1",
        title: "Interview : Les défis de la communication au Sénégal",
        description: "Échange avec un expert du marketing digital africain",
        readTime: "12 min",
        publishedDate: "8 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "2",
        title: "Portrait : parcours d'un entrepreneur digital africain",
        description: "Rencontre inspirante avec un pionnier du digital en Afrique",
        readTime: "10 min",
        publishedDate: "1 Décembre 2025",
        author: "Sunu Link Consulting",
      },
    ],
  },
  "tutoriels-guides": {
    title: "Tutoriels & Guides",
    icon: BookOpen,
    color: "from-cyan-500 to-blue-500",
    description: "Des tutoriels pratiques et guides pas à pas pour progresser",
    articles: [
      {
        id: "1",
        title: "Créer sa première campagne Facebook Ads : tutoriel complet",
        description: "Guide pas à pas pour lancer vos publicités Facebook",
        readTime: "25 min",
        publishedDate: "9 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "2",
        title: "Canva pour les débutants : créer des visuels pros",
        description: "Tutoriel pour maîtriser Canva et créer des designs impactants",
        readTime: "18 min",
        publishedDate: "4 Décembre 2025",
        author: "Sunu Link Consulting",
      },
      {
        id: "3",
        title: "Configurer Google Analytics 4 : le guide ultime",
        description: "Tout savoir pour bien paramétrer votre tracking",
        readTime: "20 min",
        publishedDate: "28 Novembre 2025",
        author: "Sunu Link Consulting",
      },
    ],
  },
};

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? blogCategoriesData[slug] : null;

  if (!category) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-black mb-6 text-gray-800">Catégorie non trouvée</h1>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sunuOrange hover:text-sunuBlue font-bold"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour au blog
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

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-sunuBlue/10 to-white">
          <div className="container mx-auto max-w-5xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-sunuOrange font-semibold mb-8 transition-colors"
              data-aos="fade-right"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour au blog
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
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {article.publishedDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime} de lecture
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {article.author}
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
                          to={`/blog/article/${article.articleSlug}`}
                          className="inline-flex items-center gap-2 bg-sunuOrange text-white px-6 py-3 rounded-full font-bold hover:bg-sunuBlue transition-all duration-300"
                        >
                          Lire l'article
                          <BookOpen className="w-4 h-4" />
                        </Link>
                      ) : (
                        <button className="inline-flex items-center gap-2 bg-sunuOrange text-white px-6 py-3 rounded-full font-bold hover:bg-sunuBlue transition-all duration-300 opacity-50 cursor-not-allowed">
                          Bientôt disponible
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
                    <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.publishedDate}
                      </span>
                      <span className="flex items-center gap-1">
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
                        to={`/blog/article/${article.articleSlug}`}
                        className="text-sunuOrange font-bold hover:text-sunuBlue transition-colors flex items-center gap-1"
                      >
                        Lire plus
                        <BookOpen className="w-4 h-4" />
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
            <div className="grain-texture bg-gradient-to-r from-sunuOrange to-yellow-500 rounded-3xl p-12 text-white text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Ne manquez aucun article
              </h2>
              <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
                Abonnez-vous à notre newsletter et recevez nos derniers articles directement dans votre boîte mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-6 py-4 rounded-full text-gray-800 font-semibold focus:outline-none focus:ring-4 focus:ring-white/50"
                />
                <button className="bg-white text-sunuOrange px-8 py-4 rounded-full font-bold hover:bg-sunuBlue hover:text-white transition-all duration-300 shadow-lg">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
