import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Lightbulb, TrendingUp, Megaphone, Target, Users, Palette,
  Globe, Briefcase, Sparkles, Award, MessageSquare, BookOpen,
  ArrowLeft, Clock, Calendar, User, BarChart3, Brain,
  PenTool, CalendarCheck, ShoppingCart, Search, ChevronDown,
  CheckCircle2, Zap, AlertCircle
} from "lucide-react";

// --- TYPES ---
interface BlogArticle {
  id: string;
  title: string;
  description: string;
  readTime: string;
  publishedDate: string;
  author: string;
  featured?: boolean;
  articleSlug?: string;
  content?: string; // Ajout pour l'expertise
  points?: string[]; // Ajout pour les leviers de succès
}

// --- COMPOSANT DE CARTE D'ARTICLE INTERACTIVE ---
const ArticleCard = ({ article, isFeatured = false }: { article: BlogArticle; isFeatured?: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`group bg-white transition-all duration-500 rounded-[2rem] overflow-hidden border ${
      isExpanded ? 'ring-2 ring-sunuOrange shadow-2xl' : 'border-gray-100 shadow-sm hover:shadow-md'
    } ${isFeatured ? 'md:col-span-2 border-l-4 border-l-sunuOrange' : ''}`}>
      
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.publishedDate}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
          {isFeatured && <span className="text-sunuOrange bg-sunuOrange/10 px-2 py-0.5 rounded">Premium</span>}
        </div>
        
        <h3 className={`${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'} font-black text-gray-900 mb-4 leading-tight group-hover:text-sunuOrange transition-colors`}>
          {article.title}
        </h3>
        
        <p className="text-gray-600 mb-6 line-clamp-3">
          {article.description}
        </p>

        {/* CONTENU DÉPLOYABLE */}
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[1000px] opacity-100 mb-8' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-6 border-t border-gray-100 space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-sunuBlue">
              <h4 className="flex items-center gap-2 text-sunuBlue font-bold mb-2">
                <Zap className="w-4 h-4" /> Analyse de l'expert
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed italic">
                {article.content || "Analyse approfondie en cours de rédaction par nos consultants."}
              </p>
            </div>
            {article.points && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {article.points.map((p, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> {p}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
            isExpanded ? 'bg-gray-100 text-gray-900' : 'bg-sunuBlue text-white hover:bg-sunuOrange'
          }`}
        >
          {isExpanded ? "Réduire" : "Lire l'analyse"} 
          <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
};

// --- MAPPING DES DONNÉES ---
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
    description: "Des astuces pratiques pour améliorer votre stratégie marketing au quotidien.",
    articles: [
      {
        id: "1",
        title: "10 astuces pour booster votre engagement sur les réseaux sociaux",
        description: "Découvrez des techniques simples mais efficaces pour augmenter l'engagement de votre communauté.",
        content: "L'engagement n'est plus une question de volume mais de qualité. En 2026, l'algorithme privilégie les 'conversations profondes'. Répondre aux commentaires par des questions ouvertes augmente votre portée de 30%.",
        points: ["Réponse active sous 60min", "Utilisation des sondages interactifs", "Storytelling authentique", "Analyse des heures de pointe"],
        readTime: "8 min",
        publishedDate: "15 Octobre 2025",
        author: "Sunu Link",
        featured: true
      },
      // ... autres articles
    ]
  },
  "management-leadership-institutionnel": {
    title: "Management & Leadership",
    icon: Users,
    color: "from-blue-700 to-indigo-900",
    description: "Développer un leadership inspirant et optimiser la performance collective.",
    articles: [
      {
        id: "ml-1",
        title: "Leadership Moderne : Inspirer, Collaborer, Innover",
        description: "Passer du modèle autoritaire à un leadership d'influence pour mobiliser les talents.",
        content: "Le leadership en 2026 repose sur la sécurité psychologique. Un collaborateur qui n'a pas peur de l'échec est 40% plus innovant. Nous explorons comment le leader devient un facilitateur de succès plutôt qu'un simple donneur d'ordres.",
        points: ["Intelligence émotionnelle (QE)", "Délégation responsabilisante", "Culture du feedback constructif", "Vision partagée"],
        readTime: "21 min",
        publishedDate: "15 Janvier 2026",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "ml-7",
        title: "Culture d'Entreprise : L'âme de votre organisation",
        description: "Comment définir et infuser des valeurs fortes pour fédérer les collaborateurs.",
        content: "La culture d'entreprise est ce qui reste quand le dirigeant n'est pas dans la pièce. Elle est le premier levier de rétention des talents face à la concurrence.",
        points: ["Alignement des valeurs", "Rituels d'entreprise", "Marque employeur", "Sentiment d'appartenance"],
        readTime: "21 min",
        publishedDate: "24 Janvier 2026",
        author: "Sunu Link Consulting",
      }
    ],
  },
  "strategie-business-finance": {
    title: "Stratégie Business & Finance",
    icon: BarChart3,
    color: "from-emerald-700 to-slate-900",
    description: "Structurer votre modèle économique et piloter la croissance avec des outils performants.",
    articles: [
      {
        id: "bf-1",
        title: "Comprendre un Business Model : Création et Capture de Valeur",
        description: "Définir comment votre entreprise crée et délivre de la valeur pour assurer sa rentabilité.",
        content: "Un business model n'est pas figé. L'analyse du Business Model Canvas permet d'identifier des sources de revenus inexploitées et d'optimiser la structure de coûts.",
        points: ["Proposition de valeur unique", "Flux de revenus diversifiés", "Optimisation du BFR", "Analyse de rentabilité"],
        readTime: "20 min",
        publishedDate: "10 Février 2026",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "bf-3",
        title: "Gestion Financière Simple pour PME et Startups",
        description: "Maîtriser les fondamentaux : flux de trésorerie et budgets prévisionnels.",
        content: "La trésorerie est le carburant de votre entreprise. Savoir lire un plan de trésorerie prévisionnel permet d'anticiper les crises avant qu'elles ne surviennent.",
        points: ["Suivi du Cash-Flow", "Seuil de rentabilité", "Gestion des créances clients", "Indicateurs de performance"],
        readTime: "19 min",
        publishedDate: "16 Février 2026",
        author: "Sunu Link Consulting",
        featured: true,
      }
    ],
  },
  "design-graphique-branding": {
    title: "Design Graphique & Branding",
    icon: Palette,
    color: "from-pink-500 to-rose-600",
    description: "L'art de créer des identités visuelles fortes et des expériences de marque mémorables.",
    articles: [
      {
        id: "dgb-1",
        title: "L'importance du Branding pour une PME",
        description: "Pourquoi votre identité visuelle est votre premier atout commercial.",
        content: "Le branding est l'investissement le plus rentable à long terme. Une marque reconnue peut pratiquer des prix 20% supérieurs à une marque générique.",
        points: ["Psychologie des couleurs", "Cohérence typographique", "Architecture de marque", "Storytelling visuel"],
        readTime: "15 min",
        publishedDate: "10 Octobre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      }
    ],
  },
  "e-commerce-ventes-en-ligne": {
    title: "E-commerce & Ventes en Ligne",
    icon: ShoppingCart,
    color: "from-cyan-500 to-blue-600",
    description: "Maîtriser l'ensemble de la chaîne de valeur du commerce électronique : de la plateforme à la logistique.",
    articles: [
      {
        id: "ec-1",
        title: "Comment lancer une boutique en ligne : Guide Stratégique",
        description: "Les étapes clés pour planifier, concevoir et lancer un site e-commerce performant.",
        content: "Le succès d'une boutique en ligne ne dépend pas de la technologie, mais de l'expérience client. Un tunnel d'achat optimisé peut multiplier votre taux de conversion par trois sans augmenter votre budget publicitaire.",
        points: ["Choix de la plateforme (SaaS vs Open Source)", "Optimisation du tunnel de commande", "Stratégies de réassurance", "Gestion des stocks en temps réel"],
        readTime: "20 min",
        publishedDate: "12 Mars 2026",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "ec-3",
        title: "Paiements en ligne en Afrique : Solutions et Enjeux",
        description: "Mobile Money, cartes bancaires et sécurité : comment adapter vos moyens de paiement.",
        content: "En Afrique, le Mobile Money est le moteur de l'e-commerce. Intégrer des solutions comme Wave, Orange Money ou Free Money est impératif pour capter le marché local.",
        points: ["Interopérabilité des systèmes", "Sécurisation des transactions", "Gestion des remboursements", "Confiance des utilisateurs"],
        readTime: "22 min",
        publishedDate: "18 Mars 2026",
        author: "Sunu Link Consulting",
        featured: true,
      }
    ],
  },
  "vente-developpement-commercial": {
    title: "Vente & Développement Commercial",
    icon: TrendingUp,
    color: "from-orange-500 to-red-600",
    description: "Améliorez vos techniques de vente et accélérez votre croissance commerciale.",
    articles: [
      {
        id: "vdc-1",
        title: "Les Fondamentaux de la Vente B2B : Stratégies et Techniques",
        description: "Comprendre le cycle de vente complexe et les techniques de closing efficaces.",
        content: "La vente B2B est une course d'endurance. Il s'agit de résoudre un problème métier plutôt que de vendre un produit. La méthode de vente consultative est celle qui génère les plus gros paniers moyens.",
        points: ["Identification des décideurs", "Traitement des objections", "Négociation de valeur", "Suivi post-vente"],
        readTime: "20 min",
        publishedDate: "28 Octobre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      }
    ],
  },
  "veille-strategique-decryptage": {
    title: "Analyses & Veille Marketing",
    icon: Search,
    color: "from-purple-600 to-indigo-700",
    description: "Décryptages stratégiques, tendances et analyses premium pour comprendre et anticiper.",
    articles: [
      {
        id: "vsd-7",
        title: "Évolution des Comportements Consommateurs : Data et Psychologie",
        description: "Analyser les nouvelles attentes en matière d'immédiateté et de personnalisation.",
        content: "Le consommateur moderne exige une réponse instantanée. La 'data' permet de prédire les besoins avant même qu'ils ne soient exprimés, créant une expérience client sans friction.",
        points: ["Analyse prédictive", "Micro-moments d'achat", "Économie de l'attention", "Hyper-personnalisation"],
        readTime: "21 min",
        publishedDate: "2 Juin 2026",
        author: "Sunu Link Consulting",
        featured: true,
      }
    ],
  },
  "communication-crise-reputation": {
    title: "Communication de Crise & Réputation",
    icon: Award,
    color: "from-gray-600 to-gray-800",
    description: "Gestion de crise, e-réputation et communication sensible.",
    articles: [
      {
        id: "crise-1",
        title: "Comment gérer une crise sur les réseaux sociaux",
        description: "Guide étape par étape pour protéger votre image de marque lors d'un bad buzz.",
        content: "Le silence est rarement une option en cas de crise numérique. La réactivité, la transparence et la prise de responsabilité sont les trois piliers pour transformer un bad buzz en opportunité de dialogue.",
        points: ["Veille en temps réel", "Cellule de crise", "Éléments de langage", "Restauration de l'image"],
        readTime: "15 min",
        publishedDate: "12 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      }
    ]
  },
  }; // Fermeture de l'objet blogCategoriesData

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? blogCategoriesData[slug] : null;

  // Scroll en haut au chargement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!category) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
        <AlertCircle className="w-16 h-16 text-red-500 mb-6" />
        <h1 className="text-3xl font-black mb-4 text-gray-800">Catégorie non trouvée</h1>
        <Link to="/blog" className="inline-flex items-center gap-2 text-sunuOrange font-bold hover:underline transition-colors">
          <ArrowLeft className="w-5 h-5" /> Retour au blog
        </Link>
      </div>
    );
  }

  const Icon = category.icon;
  const featuredArticles = category.articles.filter((a) => a.featured);
  const regularArticles = category.articles.filter((a) => !a.featured);

  return (
    <div className="min-h-screen bg-white selection:bg-sunuOrange selection:text-white">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* --- Hero Section : Icône et Titre optimisés --- */}
        <section className="py-12 px-6 bg-gradient-to-b from-slate-50 to-white border-b border-gray-100">
          <div className="container mx-auto max-w-5xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-sunuOrange font-semibold mb-8 transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Retour au blog
            </Link>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
              {/* Icône réduite à w-16 h-16 (au lieu de w-24) */}
              <div className={`bg-gradient-to-br ${category.color} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                {/* Titre réduit à text-3xl ou 4xl (au lieu de 6xl) */}
                <h1 className="text-3xl md:text-4xl font-black mb-3 text-gray-900 leading-tight">
                  {category.title}
                </h1>
                <p className="text-lg text-gray-500 max-w-2xl font-medium">{category.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Liste des Articles --- */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-5xl">
            {/* Articles "À la une" */}
            {featuredArticles.length > 0 && (
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-1 bg-sunuOrange rounded-full" />
                  <h2 className="text-2xl font-black text-gray-800 tracking-tight">Expertises à la une</h2>
                </div>
                <div className="grid grid-cols-1 gap-8">
                  {featuredArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} isFeatured={true} />
                  ))}
                </div>
              </div>
            )}

            {/* Bibliothèque d'articles */}
            {regularArticles.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-1 bg-sunuBlue rounded-full" />
                  <h2 className="text-2xl font-black text-gray-800 tracking-tight">Toutes les analyses</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {regularArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* --- CTA Section : Newsletter (Fidèle à votre document) --- */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grain-texture bg-gradient-to-r from-sunuOrange to-yellow-500 rounded-[2.5rem] p-10 md:p-16 text-white text-center shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black mb-6">
                  Ne manquez aucun article
                </h2>
                <p className="text-lg mb-10 opacity-90 max-w-xl mx-auto font-medium">
                  Abonnez-vous à notre newsletter et recevez nos analyses stratégiques directement dans votre boîte mail.
                </p>
                <form 
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto bg-white/10 p-2 rounded-[2rem] backdrop-blur-md"
                >
                  <input
                    type="email"
                    placeholder="Votre email professionnel"
                    className="flex-1 px-6 py-4 rounded-full text-gray-800 font-semibold focus:outline-none focus:ring-4 focus:ring-sunuBlue/30 bg-white"
                  />
                  <button className="bg-sunuBlue text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-all duration-300 shadow-xl flex items-center justify-center gap-2">
                    S'abonner <Sparkles className="w-4 h-4" />
                  </button>
                </form>
              </div>
              {/* Cercles de décoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-sunuBlue/20 blur-[80px] rounded-full -ml-20 -mb-20"></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
