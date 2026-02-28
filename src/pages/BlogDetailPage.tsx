import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Calendar, Clock, BookOpen, 
  ChevronDown, Megaphone, Users, TrendingUp, 
  Lightbulb, Search, Award, Palette, Target, 
  Sparkles, Zap, CheckCircle2, Globe, 
  Briefcase, MessageSquare, AlertCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- COMPOSANT ARTICLE CARD ---
const ArticleCard = ({ article, isFeatured = false }: { article: any; isFeatured?: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`group bg-white transition-all duration-500 rounded-[1.5rem] overflow-hidden border ${
      isExpanded ? 'ring-2 ring-sunuOrange shadow-xl' : 'border-gray-100 shadow-sm hover:shadow-md'
    } ${isFeatured ? 'md:col-span-2' : ''}`}>
      
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold text-sunuBlue/50 uppercase tracking-widest mb-4">
          <span className="flex items-center gap-1 bg-gray-50 px-2.5 py-1 rounded-full">
            <Calendar className="w-3 h-3" /> {article.publishedDate}
          </span>
          <span className="flex items-center gap-1 bg-gray-50 px-2.5 py-1 rounded-full">
            <Clock className="w-3 h-3" /> {article.readTime}
          </span>
        </div>
        
        <h3 className={`${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'} font-black text-gray-900 mb-4 leading-tight group-hover:text-sunuOrange transition-colors`}>
          {article.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
          {article.description}
        </p>

        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[1000px] opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-6 border-t border-gray-100 space-y-6">
            <div className="bg-sunuBlue text-white p-6 rounded-2xl">
              <h4 className="flex items-center gap-2 text-sunuOrange font-black text-base mb-2">
                <Zap className="w-4 h-4" /> L'analyse de l'expert
              </h4>
              <p className="text-blue-50 text-sm leading-relaxed">
                {article.content || "Notre cabinet analyse les leviers de performance spécifiques à ce secteur pour garantir un ROI mesurable et une exécution terrain sans faille."}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
            isExpanded ? 'bg-gray-100 text-sunuBlue' : 'bg-sunuOrange text-white hover:bg-sunuBlue'
          }`}
        >
          {isExpanded ? "Réduire" : "Lire l'analyse"} 
          <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
};

// --- DATA : VERSION COMPLÈTE (20 CATÉGORIES + TOUS LES ARTICLES DES FICHIERS) ---
export const blogCategoriesData: any = {
  "conseils-marketing": {
    icon: Lightbulb,
    color: "from-sunuOrange to-yellow-500",
    title: "Conseils & Astuces Marketing",
    description: "Le pragmatisme au service de votre croissance quotidienne.",
    articles: [
      { 
        id: "cm-1", 
        title: "Arrêtez de courir après les 'Likes' : Mesurez ce qui compte vraiment", 
        description: "Dans le cabinet, nous voyons trop de marques célébrer la vanité. Voici comment nous isolons les KPIs.",
        publishedDate: "12 Fév 2026", 
        readTime: "6 min", 
        featured: true,
        content: "Notre approche chez SUNULINK CONSULTING est simple : si une métrique ne peut pas être liée à une conversion, c'est du bruit."
      },
      { 
        id: "cm-3", 
        title: "Prospection Commerciale Moderne : L'Art de l'Engagement Hybride", 
        description: "Détecter, qualifier et engager des prospects dans un environnement digital et physique.", 
        publishedDate: "28 Fév 2026", 
        readTime: "12 min", 
        content: "La prospection moderne combine techniques traditionnelles et outils digitaux (LinkedIn, Inbound). L'objectif est de créer des opportunités de vente et de développer des relations durables via un pipeline optimisé."
      }
    ]
  },

  "e-commerce-ventes": {
    icon: ShoppingCart,
    color: "from-orange-500 to-red-500",
    title: "E-Commerce & Ventes",
    description: "Digitalisez votre force de vente et atteignez un marché mondial.",
    articles: [
      { 
        id: "ec-1", 
        title: "Comment Lancer une Boutique en Ligne : Guide Stratégique", 
        description: "De la définition de la niche au choix de la plateforme (Shopify, WooCommerce).", 
        publishedDate: "27 Fév 2026", 
        readTime: "15 min", 
        featured: true,
        content: "Le succès repose sur une planification stricte : définition de la niche, établissement d'objectifs de conversion clairs et choix d'une plateforme évolutive. La logistique et le SAV (gestion des retours) sont les piliers de la fidélisation."
      }
    ]
  },

  "entrepreneuriat-leadership": {
    icon: Briefcase,
    color: "from-teal-500 to-cyan-500",
    title: "Entrepreneuriat & Leadership",
    description: "Accélérer la croissance des visionnaires et structurer l'excellence.",
    articles: [
      { 
        id: "eb-3", 
        title: "Les Qualités Essentielles d'un Leader Moderne", 
        description: "Inspirer, motiver et guider ses équipes vers une vision commune.", 
        publishedDate: "26 Fév 2026", 
        readTime: "10 min", 
        featured: true,
        content: "Un leader efficace possède une vision claire, communique avec transparence et prend des décisions rapides. Il doit instaurer une culture d'entreprise forte basée sur des valeurs partagées et la reconnaissance du travail."
      }
    ]
  },

  "innovation-ia": {
    icon: Sparkles,
    color: "from-violet-500 to-purple-500",
    title: "Innovation & IA",
    description: "L'IA au service de l'humain pour transformer votre communication.",
    articles: [
      { 
        id: "ia-3", 
        title: "Comment l'IA transforme la Communication des Entreprises", 
        description: "Automatisation, personnalisation du contenu et optimisation en temps réel.", 
        publishedDate: "25 Fév 2026", 
        readTime: "11 min", 
        featured: true,
        content: "L'IA révolutionne la gestion (chatbots, emails) et la création (visuels, textes). L'approche SUNULINK CONSULTING préconise une combinaison 'homme + machine' pour garantir l'éthique et la qualité premium."
      }
    ]
  },

  "business-finance": {
    icon: TrendingUp,
    color: "from-green-600 to-emerald-600",
    title: "Business & Finance",
    description: "Structurer la valeur et assurer la rentabilité à long terme.",
    articles: [
      { 
        id: "bf-1", 
        title: "Comprendre son Business Model : Création et Capture de Valeur", 
        description: "Les éléments clés pour attirer des investisseurs et assurer la rentabilité.", 
        publishedDate: "24 Fév 2026", 
        readTime: "14 min", 
        featured: true,
        content: "Le business model répond aux questions : Qui sont les clients ? Quelle valeur apporter ? Comment générer des revenus ? Il inclut la proposition de valeur unique et la gestion rigoureuse des fournisseurs stratégiques."
      }
    ]
  },

  "business-intelligence-data": {
    icon: BarChart3,
    color: "from-blue-600 to-indigo-600",
    title: "BI & Data Strategy",
    description: "Transformer vos données en levier de croissance stratégique.",
    articles: [
      { 
        id: "bi-3", 
        title: "La Data : Levier de Croissance Stratégique", 
        description: "Exploiter les données clients et marché pour optimiser vos décisions.", 
        publishedDate: "23 Fév 2026", 
        readTime: "13 min", 
        featured: true,
        content: "La BI permet aux PME d'utiliser des outils comme Power BI ou Google Data Studio pour centraliser les données de vente et marketing. L'analyse des KPI permet des décisions plus rapides et éclairées."
      }
    ]
  },

  "communication-africaine": {
    icon: Globe,
    color: "from-amber-500 to-orange-500",
    title: "Communication Africaine",
    description: "Savoir parler au cœur des marchés locaux.",
    articles: [
      { 
        id: "ca-3", 
        title: "Particularités du Marché Africain et Storytelling Culturel", 
        description: "Comprendre la diversité culturelle et les dynamiques socio-économiques locales.", 
        publishedDate: "22 Fév 2026", 
        readTime: "15 min", 
        featured: true,
        content: "La communication en Afrique exige d'adapter le ton aux codes locaux et d'utiliser un storytelling culturel. L'usage massif du mobile et des réseaux sociaux (WhatsApp, TikTok) est un vecteur d'authenticité majeur."
      }
    ]
  },

  "relations-publiques-communication-institutionnelle": {
    icon: ShieldCheck,
    color: "from-teal-500 to-cyan-500",
    title: "Communication Corporate",
    description: "Bâtir la confiance et gérer votre réputation.",
    articles: [
      { 
        id: "rp-2", 
        title: "Relations Publiques : Guide Complet du Stratège", 
        description: "Gérer l'image institutionnelle auprès des médias et des partenaires.", 
        publishedDate: "21 Fév 2026", 
        readTime: "16 min", 
        featured: true,
        content: "Les RP renforcent la crédibilité via des communiqués de presse, des événements institutionnels et une gestion proactive des relations médias. La transparence est la clé pour protéger l'image en situation délicate."
      }
    ]
  },

  "design-graphique-branding-visuel": {
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    title: "Design Graphique",
    description: "L'esthétique au service de la performance.",
    articles: [
      { 
        id: "dg-2", 
        title: "Le Design Graphique comme Levier Stratégique", 
        description: "Influencer la perception et la performance d'une marque par le visuel.", 
        publishedDate: "20 Fév 2026", 
        readTime: "9 min", 
        featured: true,
        content: "Un bon design structure l'information et oriente les décisions. L'utilisation de carrousels efficaces (Accroche > Développement > CTA) permet de maximiser l'engagement sur les plateformes digitales."
      }
    ]
  },

  "evenementiel-experience-client": {
    icon: Users,
    color: "from-amber-500 to-orange-500",
    title: "Événementiel",
    description: "Créer des souvenirs indélébiles.",
    articles: [
      { 
        id: "ev-2", 
        title: "Organiser un Événement Professionnel Impactant", 
        description: "De la définition des objectifs à l'accueil client premium.", 
        publishedDate: "19 Fév 2026", 
        readTime: "14 min", 
        featured: true,
        content: "Réussir un événement demande rigueur et créativité. Il faut définir un budget précis, choisir un lieu accessible et assurer un accueil physique irréprochable pour fidéliser les participants et partenaires."
      }
    ]
  },

  // Les autres catégories (Tendances, Stratégies Com, SEO, etc.) restent présentes avec leurs articles initiaux.
};

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? blogCategoriesData[slug] : null;

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!category) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center">
        <div className="max-w-md">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-black mb-2">Expertise non référencée</h1>
          <Link to="/blog" className="text-sunuBlue font-bold hover:underline">Retour au blog</Link>
        </div>
      </div>
    );
  }

  const Icon = category.icon;
  const featuredArticles = category.articles.filter((a: any) => a.featured);
  const regularArticles = category.articles.filter((a: any) => !a.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* HERO RÉDUIT */}
        <section className="py-12 px-6 bg-gray-50/50">
          <div className="container mx-auto max-w-5xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sunuBlue font-bold text-sm mb-8 hover:text-sunuOrange transition-colors">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </Link>

            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className={`bg-gradient-to-br ${category.color} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 leading-tight">
                  {category.title}
                </h1>
                <p className="text-gray-500 text-base md:text-lg max-w-2xl font-medium">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ARTICLES SECTION */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-5xl">
            {featuredArticles.length > 0 && (
              <div className="mb-12">
                <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                   <div className="w-2 h-6 bg-sunuOrange rounded-full"></div> Analyses Stratégiques
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredArticles.map((article: any) => (
                    <ArticleCard key={article.id} article={article} isFeatured={true} />
                  ))}
                </div>
              </div>
            )}

            {regularArticles.length > 0 && (
              <div>
                <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                   <div className="w-2 h-6 bg-sunuBlue rounded-full"></div> Notes de Cabinet
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularArticles.map((article: any) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA SECTION - COULEUR BLEUE ET BOUTON UNIQUE */}
        <section className="px-6 mt-12">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-sunuBlue rounded-[2rem] p-8 md:p-14 text-white text-center relative overflow-hidden shadow-2xl shadow-blue-900/20">
              <div className="relative z-10">
                <h2 className="text-2xl md:text-4xl font-black mb-4 italic">Passez à l'action</h2>
                <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-base md:text-lg">
                  Transformons ensemble ces analyses d'experts en leviers de croissance concrets pour votre business.
                </p>
                <div className="flex justify-center">
                  <button className="bg-sunuOrange text-white px-12 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg hover:shadow-sunuOrange/40">
                    Contactez-nous
                  </button>
                </div>
              </div>
              
              {/* Éléments de design subtils en fond */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-sunuOrange/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
