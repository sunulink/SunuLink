import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { 
  ArrowLeft, Calendar, Clock, BookOpen, 
  ChevronDown, Megaphone, Users, TrendingUp, 
  BarChart3, ShoppingCart, Lightbulb, Search, 
  Award, Palette, Layout, Target, PieChart,
  CheckCircle2, Sparkles, Zap, ShieldCheck,
  MousePointer2, MessageSquare, Globe, Smartphone,
  Briefcase, Brain, PenTool, CalendarCheck, AlertCircle
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// --- COMPOSANT ARTICLE CARD ---
const ArticleCard = ({ article, isFeatured = false }: { article: any; isFeatured?: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`group bg-white transition-all duration-500 rounded-[2.5rem] overflow-hidden border ${
      isExpanded ? 'ring-2 ring-sunuOrange shadow-2xl scale-[1.01]' : 'border-gray-100 shadow-sm hover:shadow-xl'
    } ${isFeatured ? 'md:col-span-2' : ''}`}>
      
      <div className="p-8 md:p-10">
        <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-sunuBlue/50 uppercase tracking-tighter mb-6">
          <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full">
            <Calendar className="w-3.5 h-3.5" /> {article.publishedDate}
          </span>
          <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full">
            <Clock className="w-3.5 h-3.5" /> {article.readTime}
          </span>
          {isFeatured && (
            <span className="flex items-center gap-1.5 bg-sunuOrange/10 text-sunuOrange px-3 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5" /> Analyse Premium
            </span>
          )}
        </div>
        
        <h3 className={`${isFeatured ? 'text-3xl md:text-4xl' : 'text-2xl'} font-black text-gray-900 mb-6 leading-[1.1] group-hover:text-sunuOrange transition-colors`}>
          {article.title}
        </h3>
        
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          {article.description}
        </p>

        <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[1500px] opacity-100 mb-10' : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
          <div className="pt-10 border-t border-gray-100 space-y-8">
            <div className="bg-gray-900 text-white p-8 rounded-[2rem] relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="flex items-center gap-3 text-sunuOrange font-black text-xl mb-4">
                  <Zap className="w-6 h-6" /> L'Œil de l'Expert
                </h4>
                <div className="text-gray-300 leading-relaxed space-y-4 text-lg">
                  {article.content || "Cette analyse approfondie détaille les leviers stratégiques et les retours sur expérience de nos consultants pour ce sujet spécifique. L'objectif est de transformer une problématique complexe en opportunité de croissance mesurable."}
                </div>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Target className="w-32 h-32" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-sunuBlue/5 p-8 rounded-[2rem]">
                <h5 className="font-black text-sunuBlue text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Leviers de succès
                </h5>
                <ul className="space-y-3 text-gray-700">
                  {(article.points || ["Optimisation des ressources", "Ciblage stratégique", "Mesure de performance"]).map((p: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sunuOrange mt-2 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-50 p-8 rounded-[2rem]">
                <h5 className="font-black text-sunuOrange text-lg mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" /> ROI & Performance
                </h5>
                <p className="text-gray-700 leading-relaxed">
                  L'implémentation de ces recommandations permet généralement une amélioration de <strong>25% à 40%</strong> des indicateurs de performance clés (KPIs) sous 6 mois.
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex items-center gap-4 px-10 py-4 rounded-full font-black text-lg transition-all duration-500 ${
            isExpanded 
              ? 'bg-gray-100 text-gray-900' 
              : 'bg-sunuOrange text-white hover:bg-sunuBlue shadow-xl shadow-sunuOrange/20'
          }`}
        >
          {isExpanded ? "Fermer l'analyse" : "Déployer l'expertise"} 
          <ChevronDown className={`w-6 h-6 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
};

export const blogCategoriesData: any = {
  "conseils-marketing": {
    icon: Lightbulb,
    color: "from-sunuOrange to-yellow-500",
    title: "Conseils & Astuces Marketing",
    description: "Des astuces pratiques pour améliorer votre stratégie marketing au quotidien.",
    articles: [
      { id: "1", title: "10 astuces pour booster votre engagement sur les réseaux sociaux", description: "Découvrez des techniques simples pour augmenter l'engagement de votre communauté.", featured: true, publishedDate: "5 Décembre 2025", readTime: "8 min", points: ["Réponse rapide aux commentaires", "Utilisation des stories", "UGC Content"] },
      { id: "2", title: "Comment créer du contenu viral en 2025", description: "Les secrets des contenus qui se partagent massivement.", publishedDate: "1 Décembre 2025", readTime: "10 min" },
      { id: "3", title: "Optimiser votre budget marketing : guide pratique", description: "Maximisez votre ROI avec ces conseils de gestion budgétaire.", publishedDate: "28 Novembre 2025", readTime: "12 min" }
    ]
  },
  "tendances-actualites": {
    icon: TrendingUp,
    color: "from-sunuBlue to-cyan-500",
    title: "Tendances & Actualités",
    description: "Restez informé des dernières tendances en communication et marketing digital.",
    articles: [
      { id: "ta-1", title: "Les tendances marketing à suivre en 2025", description: "Tour d'horizon des innovations qui vont transformer le marketing.", featured: true, publishedDate: "8 Décembre 2025", readTime: "15 min" },
      { id: "ta-2", title: "L'essor du commerce social en Afrique", description: "Comment les réseaux sociaux révolutionnent le e-commerce africain.", publishedDate: "3 Décembre 2025", readTime: "10 min" }
    ]
  },
  "strategies-communication": {
    icon: Megaphone,
    color: "from-purple-500 to-pink-500",
    title: "Stratégies de Communication",
    description: "Apprenez à construire des stratégies de communication efficaces et percutantes.",
    articles: [
      { id: "sc-1", title: "Construire une stratégie de communication 360° efficace", description: "Guide complet pour une approche globale et cohérente.", featured: true, publishedDate: "6 Décembre 2025", readTime: "20 min" },
      { id: "sc-2", title: "Communication de crise : comment réagir efficacement", description: "Les bonnes pratiques pour gérer une crise de réputation.", publishedDate: "30 Novembre 2025", readTime: "12 min" }
    ]
  },
  "marketing-digital-seo": {
    icon: Target,
    color: "from-green-500 to-emerald-500",
    title: "Marketing Digital & SEO",
    description: "Optimisez votre présence en ligne et améliorez votre référencement naturel.",
    articles: [
      { id: "mds-1", title: "SEO en 2025 : les nouvelles règles du jeu", description: "Comment adapter votre stratégie SEO aux dernières mises à jour Google.", featured: true, publishedDate: "7 Décembre 2025", readTime: "18 min" },
      { id: "mds-2", title: "Google Ads vs Meta Ads : quel canal choisir ?", description: "Comparatif détaillé pour optimiser votre budget publicitaire.", publishedDate: "2 Décembre 2025", readTime: "14 min" }
    ]
  },
  "reseaux-sociaux": {
    icon: Users,
    color: "from-blue-500 to-indigo-500",
    title: "Réseaux Sociaux",
    description: "Maîtrisez les réseaux sociaux et développez votre communauté en ligne.",
    articles: [
      { id: "rs-1", title: "TikTok pour les entreprises : guide complet", description: "Comment utiliser TikTok pour développer votre marque en Afrique.", featured: true, publishedDate: "9 Décembre 2025", readTime: "16 min" },
      { id: "rs-2", title: "LinkedIn : optimiser votre profil entreprise", description: "Les secrets d'une page LinkedIn qui génère des leads.", publishedDate: "4 Décembre 2025", readTime: "10 min" },
      { id: "rs-3", title: "Instagram Reels : stratégies qui fonctionnent", description: "Créer des Reels engageants pour votre audience.", publishedDate: "29 Novembre 2025", readTime: "8 min" }
    ]
  },
  "branding-identite": {
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    title: "Branding & Identité Visuelle",
    description: "Construisez une marque forte et une identité visuelle mémorable.",
    articles: [
      { id: "bi-1", title: "Créer une identité de marque mémorable", description: "Les étapes clés pour construire une marque qui marque les esprits.", featured: true, publishedDate: "5 Décembre 2025", readTime: "14 min" },
      { id: "bi-2", title: "Refonte de marque : quand et comment la faire ?", description: "Guide pour réussir votre rebranding.", publishedDate: "27 Novembre 2025", readTime: "12 min" }
    ]
  },
  "communication-africaine": {
    icon: Globe,
    color: "from-amber-500 to-orange-500",
    title: "Communication Africaine",
    description: "Focus sur les spécificités de la communication sur le continent africain.",
    articles: [
      { id: "caf-1", title: "Le marketing digital en Afrique : état des lieux 2025", description: "Panorama du paysage digital africain et ses opportunités.", featured: true, publishedDate: "8 Décembre 2025", readTime: "20 min" },
      { id: "caf-2", title: "Adapter sa communication aux cultures africaines", description: "Comment communiquer efficacement sur un marché multiculturel.", publishedDate: "1 Décembre 2025", readTime: "15 min" }
    ]
  },
  "entrepreneuriat-business": {
    icon: Briefcase,
    color: "from-teal-500 to-cyan-500",
    title: "Entrepreneuriat & Business",
    description: "Conseils pour les entrepreneurs et PME en matière de communication.",
    articles: [
      { id: "eb-1", title: "Communication startup : les essentiels avec un petit budget", description: "Comment communiquer efficacement quand on débute.", featured: true, publishedDate: "6 Décembre 2025", readTime: "12 min" },
      { id: "eb-2", title: "Pitcher son projet : les clés d'une présentation réussie", description: "Techniques pour convaincre investisseurs et partenaires.", publishedDate: "30 Novembre 2025", readTime: "10 min" }
    ]
  },
  "innovation-ia": {
    icon: Sparkles,
    color: "from-violet-500 to-purple-500",
    title: "Innovation & IA",
    description: "L'intelligence artificielle et les innovations au service de la communication.",
    articles: [
      { id: "ii-1", title: "ChatGPT et la création de contenu : guide pratique", description: "Comment utiliser l'IA générative pour votre communication.", featured: true, publishedDate: "9 Décembre 2025", readTime: "18 min" },
      { id: "ii-2", title: "Les outils IA indispensables pour les marketeurs", description: "Sélection des meilleures solutions IA pour optimiser votre travail.", publishedDate: "3 Décembre 2025", readTime: "14 min" },
      { id: "ii-3", title: "L'IA va-t-elle remplacer les créatifs ?", description: "Réflexion sur l'avenir de la création à l'ère de l'IA.", publishedDate: "26 Novembre 2025", readTime: "10 min" }
    ]
  },
  "success-stories": {
    icon: Award,
    color: "from-yellow-600 to-orange-600",
    title: "Success Stories",
    description: "Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs.",
    articles: [
      { id: "ss-1", title: "Comment cette startup a doublé son CA en 6 mois", description: "Étude de cas détaillée sur une stratégie de croissance accélérée.", featured: true, publishedDate: "4 Décembre 2025", readTime: "25 min" },
      { id: "ss-2", title: "Refonte d'image réussie pour un leader industriel", description: "L'impact du branding sur la perception de marque.", publishedDate: "25 Novembre 2025", readTime: "20 min" }
    ]
  },
  "interviews-experts": {
    icon: MessageSquare,
    color: "from-blue-600 to-indigo-800",
    title: "Interviews d'Experts",
    description: "Échanges avec des leaders d'opinion du marketing et de la communication.",
    articles: [
      { id: "ie-1", title: "L'avenir du digital en Afrique : interview de M. Diop", description: "Un regard d'expert sur les mutations technologiques du continent.", featured: true, publishedDate: "7 Décembre 2025", readTime: "30 min" },
      { id: "ie-2", title: "Branding de luxe : les conseils de Sarah Cohen", description: "Comment positionner une marque sur le segment haut de gamme.", publishedDate: "2 Décembre 2025", readTime: "22 min" }
    ]
  },
  "tutoriels-guides": {
    icon: BookOpen,
    color: "from-emerald-600 to-teal-800",
    title: "Tutoriels & Guides",
    description: "Des guides étape par étape pour maîtriser les outils et techniques.",
    articles: [
      { id: "tg-1", title: "Guide complet : créer sa première campagne Facebook Ads", description: "Tout ce qu'il faut savoir pour lancer des publicités rentables.", featured: true, publishedDate: "9 Décembre 2025", readTime: "35 min" },
      { id: "tg-2", title: "Comment utiliser Canva comme un pro", description: "Astuces de design pour des visuels percutants.", publishedDate: "3 Décembre 2025", readTime: "15 min" }
    ]
  },
  "management-leadership-institutionnel": {
    icon: Users,
    color: "from-slate-700 to-indigo-900",
    title: "Management & Leadership",
    description: "Transformer le capital humain en avantage compétitif durable par l'excellence managériale.",
    articles: [
      { id: "ml-1", title: "Le Leadership Exécutif en Période de Mutation", description: "Comment piloter la croissance quand l'incertitude devient la seule constante.", featured: true, publishedDate: "12 Janvier 2026", readTime: "24 min" },
      { id: "ml-2", title: "Productivité des Équipes : Le framework OKR", description: "Adopter la méthodologie des géants de la Tech.", featured: true, publishedDate: "28 Janvier 2026", readTime: "20 min" },
      { id: "ml-3", title: "Intelligence Émotionnelle au Service du Management", description: "Le QE, nouveau pilier de la performance.", publishedDate: "20 Janvier 2026", readTime: "20 min" },
      { id: "ml-4", title: "Construire des Équipes Performantes et Engagées", description: "Les secrets des équipes à haute performance.", publishedDate: "21 Janvier 2026", readTime: "22 min" },
      { id: "ml-5", title: "Le Management Agile : Méthodes et Bénéfices", description: "Adopter l'agilité au quotidien.", publishedDate: "22 Janvier 2026", readTime: "19 min" },
      { id: "ml-6", title: "Leadership Féminin : Enjeux et Opportunités", description: "Promouvoir la diversité au sommet.", publishedDate: "23 Janvier 2026", readTime: "25 min" },
      { id: "ml-7", title: "Culture d'Entreprise : L'âme de votre organisation", description: "Définir vos valeurs fondamentales.", publishedDate: "24 Janvier 2026", readTime: "21 min" },
      { id: "ml-8", title: "Gestion du Temps et de la Productivité des Cadres", description: "Optimiser son agenda stratégique.", publishedDate: "25 Janvier 2026", readTime: "18 min" },
      { id: "ml-9", title: "Éthique et Responsabilité Sociétale des Entreprises", description: "La RSE comme levier de performance.", publishedDate: "26 Janvier 2026", readTime: "24 min" },
      { id: "ml-10", title: "Le Mentorat : Accélérateur de Talents", description: "Transmettre pour pérenniser l'excellence.", publishedDate: "27 Janvier 2026", readTime: "20 min" }
    ]
  },
  "strategie-business-finance": {
    icon: BarChart3,
    color: "from-emerald-600 to-teal-900",
    title: "Stratégie Business & Finance",
    description: "Sécuriser la pérennité de l'entreprise par une gestion rigoureuse.",
    articles: [
      { id: "bf-1", title: "Optimisation de la Trésorerie : Le Cash est Roi", description: "Maîtriser son BFR pour ne jamais freiner sa croissance.", featured: true, publishedDate: "15 Février 2026", readTime: "22 min" },
      { id: "bf-2", title: "Scalabilité : Préparer l'entreprise à changer d'échelle", description: "Doubler votre volume sans doubler vos charges.", featured: true, publishedDate: "02 Mars 2026", readTime: "19 min" },
      { id: "bf-3", title: "Comprendre un Business Model : Valeur et Capture", description: "Les bases de la rentabilité.", publishedDate: "10 Février 2026", readTime: "20 min" },
      { id: "bf-4", title: "Analyse SWOT : Un Outil Stratégique Indispensable", description: "Diagnostiquer votre positionnement.", publishedDate: "12 Février 2026", readTime: "18 min" },
      { id: "bf-5", title: "Levée de Fonds : Guide pour les Entrepreneurs", description: "Convaincre les investisseurs.", publishedDate: "18 Février 2026", readTime: "25 min" },
      { id: "bf-6", title: "Le Business Plan : Tracer la Route du Succès", description: "Formaliser sa vision stratégique.", publishedDate: "20 Février 2026", readTime: "22 min" },
      { id: "bf-7", title: "Optimisation de la Chaîne de Valeur", description: "Réduire les coûts, augmenter la valeur.", publishedDate: "22 Février 2026", readTime: "21 min" },
      { id: "bf-8", title: "L'Expansion Internationale : Défis et Stratégies", description: "Conquérir de nouveaux marchés.", publishedDate: "24 Février 2026", readTime: "26 min" },
      { id: "bf-9", title: "Fusions et Acquisitions : Les Fondamentaux", description: "Comprendre les opérations de haut de bilan.", publishedDate: "26 Février 2026", readTime: "28 min" },
      { id: "bf-10", title: "Gestion des Risques en Entreprise", description: "Anticiper pour protéger ses actifs.", publishedDate: "28 Février 2026", readTime: "23 min" }
    ]
  },
  "e-commerce-ventes-en-ligne": {
    icon: ShoppingCart,
    color: "from-cyan-500 to-blue-700",
    title: "E-commerce & Ventes en Ligne",
    description: "Maîtriser l'écosystème de la vente directe en ligne.",
    articles: [
      { id: "ec-1", title: "L'Expérience d'Achat 'Sans Friction' en 2026", description: "Optimiser le checkout pour maximiser la conversion.", featured: true, publishedDate: "12 Mars 2026", readTime: "20 min" },
      { id: "ec-2", title: "Social Commerce : Vendre là où se trouve l'attention", description: "Vendre sur Instagram et TikTok sans redirection.", featured: true, publishedDate: "25 Mars 2026", readTime: "17 min" },
      { id: "ec-3", title: "Optimisation du Core Web Vitals pour E-commerce", description: "Vitesse et SEO technique.", publishedDate: "15 Mars 2026", readTime: "15 min" },
      { id: "ec-4", title: "Intégration des Paiements Mobiles Locaux", description: "Orange Money, Wave et l'inclusion financière.", publishedDate: "18 Mars 2026", readTime: "18 min" },
      { id: "ec-5", title: "Logistique du dernier kilomètre", description: "L'avantage compétitif ultime.", publishedDate: "20 Mars 2026", readTime: "22 min" },
      { id: "ec-6", title: "Gestion des Stocks et Dropshipping", description: "Optimiser sa supply chain digitale.", publishedDate: "22 Mars 2026", readTime: "19 min" },
      { id: "ec-7", title: "Email Marketing et Paniers Abandonnés", description: "Récupérer le chiffre d'affaires perdu.", publishedDate: "24 Mars 2026", readTime: "14 min" },
      { id: "ec-8", title: "Marketplaces vs Site Propre", description: "Quelle stratégie de distribution ?", publishedDate: "26 Mars 2026", readTime: "16 min" },
      { id: "ec-9", title: "Cyber-sécurité des transactions e-commerce", description: "Protéger les données de vos clients.", publishedDate: "28 Mars 2026", readTime: "20 min" },
      { id: "ec-10", title: "L'Avenir du E-commerce : AR et VR", description: "L'expérience immersive.", publishedDate: "30 Mars 2026", readTime: "21 min" }
    ]
  },
  "veille-strategique-decryptage": {
    icon: Search,
    color: "from-purple-600 to-indigo-800",
    title: "Analyses & Veille Stratégique",
    description: "Décrypter les signaux faibles du marché pour anticiper demain.",
    articles: [
      { id: "vsd-1", title: "Rapport : L'Économie Numérique en Afrique de l'Ouest", description: "Opportunités sectorielles pour les 24 prochains mois.", featured: true, publishedDate: "15 Mai 2026", readTime: "30 min" },
      { id: "vsd-2", title: "Prospective technologique : 5G et IoT", description: "Services de proximité et nouveaux usages.", featured: true, publishedDate: "20 Mai 2026", readTime: "22 min" },
      { id: "vsd-3", title: "Impact de la protection des données (RGPD/APDP)", description: "Nouvelles réglementations en vigueur.", publishedDate: "17 Mai 2026", readTime: "25 min" },
      { id: "vsd-4", title: "Cartographie des acteurs FinTech", description: "Analyse concurrentielle du marché.", publishedDate: "18 Mai 2026", readTime: "24 min" },
      { id: "vsd-5", title: "La classe moyenne africaine : consommation data", description: "Évolution des pouvoirs d'achat.", publishedDate: "19 Mai 2026", readTime: "19 min" },
      { id: "vsd-6", title: "Social Search vs Google", description: "Le changement de paradigme de l'information.", publishedDate: "21 Mai 2026", readTime: "15 min" },
      { id: "vsd-7", title: "Souveraineté numérique et Cloud", description: "Enjeux géopolitiques et technologiques.", publishedDate: "22 Mai 2026", readTime: "28 min" },
      { id: "vsd-8", title: "Veille Concurrentielle Automatisée", description: "Outils et méthodologies.", publishedDate: "23 Mai 2026", readTime: "20 min" },
      { id: "vsd-9", title: "Économie de l'attention", description: "Pourquoi le temps est la monnaie la plus rare.", publishedDate: "24 Mai 2026", readTime: "17 min" },
      { id: "vsd-10", title: "Rapport Annuel : Digital Sénégal", description: "Chiffres et tendances clés.", publishedDate: "25 Mai 2026", readTime: "35 min" }
    ]
  }
};
const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();

  const getCategory = () => {
    if (!slug) return null;
    if (blogCategoriesData[slug]) return blogCategoriesData[slug];
    
    const redirects: any = {
      "analyses-veille": "veille-strategique-decryptage",
      "design-graphique": "conseils-marketing",
      "marketing-digital": "marketing-digital-seo",
      "commercial": "vente-developpement-commercial"
    };
    
    return blogCategoriesData[redirects[slug]] || null;
  };

  const category = getCategory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!category) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl max-w-lg text-center border border-gray-100">
          <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertCircle className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-4xl font-black mb-4 text-gray-900">Expertise introuvable</h1>
          <p className="text-gray-600 mb-10 text-lg">Le lien semble rompu ou la catégorie a été renommée.</p>
          <Link to="/blog" className="inline-flex items-center gap-3 bg-sunuBlue text-white px-10 py-4 rounded-full font-black hover:bg-sunuOrange transition-all shadow-lg shadow-sunuBlue/20">
            <ArrowLeft className="w-5 h-5" /> Explorer le blog
          </Link>
        </div>
      </div>
    );
  }

  const Icon = category.icon;
  const featuredArticles = category.articles.filter((a: any) => a.featured);
  const regularArticles = category.articles.filter((a: any) => !a.featured);

  return (
    <div className="min-h-screen bg-white selection:bg-sunuOrange selection:text-white">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* HERO DYNAMIQUE OPTIMISÉ (Tailles réduites) */}
        <section className="py-12 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="container mx-auto max-w-6xl relative z-10">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sunuBlue font-bold mb-10 hover:text-sunuOrange transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
              Retour au hub de connaissances
            </Link>

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icône réduite de w-32 à w-20 */}
              <div className={`bg-gradient-to-br ${category.color} w-20 h-20 rounded-[1.5rem] flex items-center justify-center flex-shrink-0 shadow-xl rotate-3`}>
                <Icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-center md:text-left">
                {/* Titre réduit de 8xl à 5xl */}
                <h1 className="text-3xl md:text-5xl font-black mb-4 text-gray-900 tracking-tighter leading-tight">
                  {category.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-500 max-w-3xl font-medium leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-sunuOrange/5 blur-[120px] rounded-full -mr-20"></div>
        </section>

        {/* GRILLE D'ARTICLES */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-6xl">
            {/* ARTICLES À LA UNE */}
            {featuredArticles.length > 0 && (
              <div className="mb-20">
                <div className="flex items-center gap-4 mb-10">
                  <h2 className="text-3xl font-black text-gray-900">Analyses Premium</h2>
                  <div className="h-0.5 flex-grow bg-gray-100 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {featuredArticles.map((article: any) => (
                    <ArticleCard key={article.id} article={article} isFeatured={true} />
                  ))}
                </div>
              </div>
            )}

            {/* AUTRES ARTICLES */}
            {regularArticles.length > 0 && (
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <h2 className="text-3xl font-black text-gray-900">Bibliothèque d'expertise</h2>
                  <div className="h-0.5 flex-grow bg-gray-100 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularArticles.map((article: any) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* SECTION CONTACT / CTA */}
        <section className="mt-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                  Prêt à passer <br className="hidden md:block" /> à l'action ?
                </h2>
                <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
                  Nos consultants transforment ces analyses en plans d'exécution concrets pour votre business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-sunuOrange text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl shadow-sunuOrange/30">
                    Prendre rendez-vous
                  </button>
                  <button className="bg-white/5 backdrop-blur-xl text-white border border-white/10 px-10 py-5 rounded-full font-black text-lg hover:bg-white/10 transition-all">
                    Demander un audit gratuit
                  </button>
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

export default BlogDetailPage;
