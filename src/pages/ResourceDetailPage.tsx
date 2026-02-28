import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BookOpen, Palette, TrendingUp, Search, Share2, Target, Video, FileText,
  MessageSquare, Calendar, Briefcase, Mail, Sparkles, Cpu, CheckSquare,
  Layout, Award, Wrench, ClipboardCheck, AlertTriangle, ArrowLeft,
  Clock, Download, ExternalLink,
} from "lucide-react";

// Types d'articles
interface Article {
  id: string;
  title: string;
  description: string;
  readTime: string;
  type: "guide" | "template" | "checklist" | "case-study" | "tool";
  featured?: boolean;
  articleSlug?: string; 
}

const categoriesData: Record<string, {
  title: string;
  icon: any;
  color: string;
  description: string;
  articles: Article[];
}> = {
  // --- CATÉGORIE 19 : TENDANCES & INNOVATIONS (COMPLÈTE) ---
  "tendances-innovations": {
    title: "Tendances marketing & Innovations",
    icon: Sparkles,
    color: "from-yellow-500 to-orange-500",
    description: "Anticipez les mutations du marché avec SUNULINK CONSULTING pour rester compétitif et innovant.",
    articles: [
      {
        id: "trend-1",
        title: "Les Tendances Marketing 2025",
        description: "Hyper-personnalisation, IA générative, contenu immersif (Reels/TikTok) et marketing durable : le guide complet pour dominer votre marché cette année.",
        readTime: "15 min",
        type: "guide",
        featured: true,
        articleSlug: "tendances-marketing-2025",
      },
      {
        id: "trend-2",
        title: "Nouvelles Technologies dans le Business",
        description: "De la Blockchain à l'IoT en passant par la cybersécurité avancée, découvrez comment ces innovations révolutionnent l'efficacité opérationnelle.",
        readTime: "12 min",
        type: "guide",
        articleSlug: "technologies-business-2025",
      },
      {
        id: "trend-3",
        title: "Consommation Africaine : Évolution",
        description: "Décryptage de la classe moyenne émergente, de la digitalisation massive et des nouvelles habitudes d'achat sur le continent africain.",
        readTime: "10 min",
        type: "case-study",
        articleSlug: "evolution-consommation-afrique",
      },
      {
        id: "trend-4",
        title: "Web 3, Blockchain & Communication",
        description: "Transparence, décentralisation et NFTs : comment le Web 3 transforme la relation entre les marques et leurs communautés.",
        readTime: "12 min",
        type: "guide",
        articleSlug: "web3-blockchain-communication",
      },
      {
        id: "trend-5",
        title: "L'Avenir du Travail",
        description: "Flexibilité, hybridation et automatisation. Comment adapter votre culture d'entreprise aux nouvelles attentes des talents en 2025.",
        readTime: "10 min",
        type: "guide",
        articleSlug: "avenir-du-travail",
      },
      {
        id: "trend-6",
        title: "Métavers & Marques",
        description: "Showrooms virtuels et expériences immersives : opportunités et défis stratégiques pour engager vos clients dans des univers numériques.",
        readTime: "11 min",
        type: "guide",
        articleSlug: "metavers-et-marques",
      },
      {
        id: "trend-7",
        title: "Nouveaux Formats Digitaux",
        description: "Vidéos snackable, contenu interactif, podcasts et live streaming : maîtrisez les formats qui captent réellement l'attention.",
        readTime: "9 min",
        type: "tool",
        articleSlug: "nouveaux-formats-digitaux",
      },
      {
        id: "trend-8",
        title: "IA Générative dans le Marketing",
        description: "Exploitez ChatGPT, Midjourney et les modèles prédictifs pour automatiser votre création de contenu tout en restant authentique.",
        readTime: "13 min",
        type: "guide",
        featured: true,
        articleSlug: "ia-generative-marketing",
      },
      {
        id: "trend-9",
        title: "Tendances Design 2025",
        description: "Minimalisme, typographie dynamique, 3D et design éco-responsable : comment moderniser l'impact visuel de votre marque.",
        readTime: "8 min",
        type: "guide",
        articleSlug: "tendances-design-2025",
      },
      {
        id: "trend-10",
        title: "Le Futur du E-Commerce",
        description: "Omnicanalité, Social Commerce et logistique intelligente : les clés pour réussir vos ventes en ligne dans un environnement ultra-connecté.",
        readTime: "12 min",
        type: "guide",
        articleSlug: "futur-du-ecommerce",
      },
    ],
  },
  
  // --- AUTRES CATÉGORIES (Placeholder ou Contenu précédent) ---
  "communication-360": {
    title: "Guide complet de la communication 360°",
    icon: BookOpen,
    color: "from-sunuOrange to-yellow-500",
    description: "Tout ce que vous devez savoir sur la communication globale et intégrée",
    articles: [
      { id: "c1", title: "Méthodologie 360°", description: "Audit, stratégie et activation cross-canal.", readTime: "45 min", type: "guide", featured: true, articleSlug: "guide-complet-communication-360" },
    ],
  },
  "ia-communication": {
    title: "IA appliquée à la communication",
    icon: Cpu,
    color: "from-blue-600 to-purple-600",
    description: "Exploitez l'intelligence artificielle dans vos stratégies",
    articles: [
      { id: "ia1", title: "IA générative pour la communication", description: "Outils et prompts pour vos équipes marketing.", readTime: "30 min", type: "guide", featured: true },
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
            <Link to="/ressources" className="inline-flex items-center gap-2 text-sunuOrange hover:text-sunuBlue font-bold">
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
    const labels = { guide: "Guide", template: "Template", checklist: "Checklist", "case-study": "Étude de cas", tool: "Outil" };
    return labels[type as keyof typeof labels] || type;
  };

  const getTypeColor = (type: string) => {
    const colors = { guide: "bg-blue-500", template: "bg-purple-500", checklist: "bg-green-500", "case-study": "bg-orange-500", tool: "bg-gray-700" };
    return colors[type as keyof typeof colors] || "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20">
        <section className="py-16 px-6 bg-gradient-to-b from-sunuOrange/10 to-white">
          <div className="container mx-auto max-w-5xl">
            <Link to="/ressources" className="inline-flex items-center gap-2 text-gray-600 hover:text-sunuOrange font-semibold mb-8 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Retour aux ressources
            </Link>
            <div className="flex items-start gap-6 mb-8">
              <div className={`grain-texture bg-gradient-to-br ${category.color} w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <Icon className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-800">{category.title}</h1>
                <p className="text-xl text-gray-600">{category.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="py-16 px-6">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-3xl font-black mb-8 text-gray-800">Articles en vedette</h2>
              <div className="space-y-6">
                {featuredArticles.map((article) => (
                  <div key={article.id} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-sunuOrange hover:shadow-lg transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      <span className={`${getTypeColor(article.type)} text-white px-4 py-1 rounded-full text-sm font-bold w-fit`}>
                        {getTypeLabel(article.type)}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-500"><Clock className="w-4 h-4" /> {article.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-black mb-3 text-gray-800 group-hover:text-sunuOrange transition-colors">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.description}</p>
                    <div className="flex gap-3">
                      {article.articleSlug ? (
                        <Link to={`/article/${article.articleSlug}`} className="inline-flex items-center gap-2 bg-sunuOrange text-white px-6 py-3 rounded-full font-bold hover:bg-sunuBlue transition-all">
                          Lire l'article <ExternalLink className="w-4 h-4" />
                        </Link>
                      ) : (
                        <button className="bg-sunuOrange/50 text-white px-6 py-3 rounded-full font-bold cursor-not-allowed">Bientôt disponible</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Articles */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-black mb-8 text-gray-800">Tous les articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regularArticles.map((article) => (
                <div key={article.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 group">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`${getTypeColor(article.type)} text-white px-3 py-1 rounded-full text-xs font-bold`}>{getTypeLabel(article.type)}</span>
                    <span className="flex items-center gap-1 text-sm text-gray-500"><Clock className="w-4 h-4" /> {article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-black mb-2 text-gray-800 group-hover:text-sunuOrange transition-colors">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{article.description}</p>
                  {article.articleSlug ? (
                    <Link to={`/article/${article.articleSlug}`} className="text-sunuOrange font-bold hover:text-sunuBlue flex items-center gap-1">
                      Lire plus <ExternalLink className="w-4 h-4" />
                    </Link>
                  ) : <span className="text-gray-400 text-sm font-bold">Bientôt disponible</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grain-texture bg-gradient-to-r from-sunuBlue to-sunuOrange rounded-3xl p-12 text-white text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-black mb-6">Prêt pour l'innovation ?</h2>
              <p className="text-xl mb-8 opacity-95">L'équipe de SUNULINK CONSULTING vous accompagne pour intégrer ces tendances.</p>
              <Link to="/contact" className="inline-block bg-white text-sunuBlue px-10 py-4 rounded-full font-bold text-lg hover:bg-sunuOrange hover:text-white transition-all shadow-lg">
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
