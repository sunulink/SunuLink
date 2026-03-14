import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Calendar, Clock, 
  ChevronDown, TrendingUp, 
  Lightbulb, Palette, Target, 
  Sparkles, Zap, Globe, 
  Briefcase, MessageSquare, AlertCircle,
  FileText, Star, Landmark, BarChart3, ShieldCheck,
  Users, Flag,
  Radio, Share2, FileEdit, Headphones, 
  Code2, BarChart3, GraduationCap, UserCheck, 
  ShieldCheck, Map, Search, Monitor
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
                {article.content || "Analyse stratégique en cours de finalisation par les consultants de SUNULINK CONSULTING."}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
              isExpanded ? 'bg-gray-100 text-sunuBlue' : 'bg-sunuOrange text-white hover:bg-sunuBlue'
            }`}
          >
            {isExpanded ? "Réduire" : "Lire l'analyse"} 
            <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>

          <a 
            href={article.pdfUrl || "#"} 
            download
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm border-2 border-gray-100 text-gray-600 hover:border-sunuOrange hover:text-sunuOrange transition-all"
          >
            <FileText className="w-4 h-4" />
            PDF
          </a>
        </div>
      </div>
    </div>
  );
};

// --- DATA : LES CATÉGORIES ET DOCUMENTS ---
export const blogCategoriesData: any = {
  // --- 16 CATÉGORIES AVEC FICHIERS PDF RÉELS ---
  "conseils-marketing": {
    icon: Lightbulb,
    color: "from-sunuOrange to-yellow-500",
    title: "Conseils & Astuces Marketing",
    description: "Le pragmatisme au service de votre croissance quotidienne.",
    articles: [{ id: "cm-1", title: "Optimiser sa Stratégie Marketing", description: "Les piliers d'une présence de marque forte.", publishedDate: "12 Fév 2026", readTime: "6 min", featured: true, pdfUrl: "/assets/docs/strategie-marketing.pdf" }]
  },
  "marketing-digital": {
    icon: Monitor,
    color: "from-blue-500 to-cyan-500",
    title: "Marketing Digital",
    description: "Exploitez les canaux numériques pour votre visibilité.",
    articles: [{ id: "md-1", title: "Performance et Digital", description: "Convertir l'audience en clients actifs.", publishedDate: "14 Fév 2026", readTime: "8 min", featured: true, pdfUrl: "/assets/docs/marketing-digital.pdf" }]
  },
  "entrepreneuriat-leadership": {
    icon: Briefcase,
    color: "from-blue-600 to-indigo-600",
    title: "Entrepreneuriat & Leadership",
    description: "Inspirer et guider avec une vision claire.",
    articles: [{ id: "el-1", title: "Vision et Leadership", description: "Diriger avec agilité.", publishedDate: "18 Fév 2026", readTime: "7 min", featured: true, pdfUrl: "/assets/docs/entreprenariat-leardership.pdf" }]
  },
  "ecommerce-ventes": {
    icon: Globe,
    color: "from-purple-500 to-pink-500",
    title: "E-commerce & Ventes en ligne",
    description: "Vendre efficacement sur le marché mondial.",
    articles: [{ id: "ev-1", title: "L'art de la vente en ligne", description: "Guide des meilleures pratiques e-commerce.", publishedDate: "20 Fév 2026", readTime: "10 min", featured: true, pdfUrl: "/assets/docs/ecommerce-vente-en-ligne.pdf" }]
  },
  "ia-automatisation": {
    icon: Sparkles,
    color: "from-cyan-500 to-blue-500",
    title: "IA & Automatisation",
    description: "Gagnez en productivité grâce aux outils intelligents.",
    articles: [{ id: "ia-1", title: "Automatiser pour Croître", description: "L'IA au service de vos processus.", publishedDate: "22 Fév 2026", readTime: "9 min", featured: true, pdfUrl: "/assets/docs/ia-automatisation.pdf" }]
  },
  "evenementiel-experience": {
    icon: Star,
    color: "from-yellow-500 to-orange-600",
    title: "Événementiel & Expérience",
    description: "Créer des moments mémorables et impactants.",
    articles: [{ id: "ee-1", title: "Expérience Client et Événement", description: "Marquer les esprits par l'immersion.", publishedDate: "25 Fév 2026", readTime: "11 min", featured: true, pdfUrl: "/assets/docs/evenement-experience.pdf" }]
  },
  "business-finance": {
    icon: Landmark,
    color: "from-emerald-600 to-teal-700",
    title: "Business & Finance",
    description: "Maîtrisez vos flux et structurez votre rentabilité.",
    articles: [{ id: "bf-1", title: "Pilotage Financier Stratégique", description: "Gérer la croissance par les chiffres.", publishedDate: "28 Fév 2026", readTime: "8 min", featured: true, pdfUrl: "/assets/docs/business-finance.pdf" }]
  },
  "communication-africaine": {
    icon: Map,
    color: "from-red-600 to-orange-700",
    title: "Communication Africaine",
    description: "Adapter son storytelling aux codes du continent.",
    articles: [{ id: "ca-1", title: "Codes et Cultures Africaines", description: "Réussir sa communication locale.", publishedDate: "05 Mars 2026", readTime: "10 min", featured: true, pdfUrl: "/assets/docs/communication-africaine.pdf" }]
  },
  "communication-institutionnelle": {
    icon: ShieldCheck,
    color: "from-slate-600 to-slate-800",
    title: "Communication Institutionnelle",
    description: "Protégez votre réputation et votre image de marque.",
    articles: [{ id: "ci-1", title: "Réputation et Influence", description: "Bâtir un socle de confiance durable.", publishedDate: "08 Mars 2026", readTime: "12 min", featured: true, pdfUrl: "/assets/docs/communication-institutionnelle.pdf" }]
  },
  "design-creation": {
    icon: Palette,
    color: "from-rose-500 to-purple-600",
    title: "Design & Création Visuelle",
    description: "Le design au service de la stratégie de marque.",
    articles: [{ id: "dcv-1", title: "Identité Visuelle Forte", description: "Traduire vos valeurs par l'image.", publishedDate: "10 Mars 2026", readTime: "7 min", featured: true, pdfUrl: "/assets/docs/design-creation-visuelle.pdf" }]
  },
  "management-rh": {
    icon: Users,
    color: "from-teal-500 to-emerald-600",
    title: "Management & RH",
    description: "Optimisez votre capital humain pour la performance.",
    articles: [{ id: "rh-1", title: "Gestion des Talents", description: "Attirer et retenir les meilleurs profils.", publishedDate: "12 Mars 2026", readTime: "8 min", featured: true, pdfUrl: "/assets/docs/management-rh.pdf" }]
  },
  "strategie-entreprise": {
    icon: Target,
    color: "from-indigo-700 to-blue-900",
    title: "Stratégie d'Entreprise",
    description: "Définir le cap pour une croissance pérenne.",
    articles: [{ id: "se-1", title: "Planification Stratégique", description: "Anticiper les mutations du marché.", publishedDate: "15 Mars 2026", readTime: "10 min", featured: true, pdfUrl: "/assets/docs/strategie-entreprise.pdf" }]
  },
  "publicite-media": {
    icon: Radio,
    color: "from-orange-600 to-red-600",
    title: "Publicité & Médias",
    description: "Maximisez l'impact de vos campagnes publicitaires.",
    articles: [{ id: "pm-1", title: "Achat Média et Impact", description: "Choisir les bons supports pour votre audience.", publishedDate: "17 Mars 2026", readTime: "9 min", featured: true, pdfUrl: "/assets/docs/publicite-media.pdf" }]
  },
  "social-media": {
    icon: Share2,
    color: "from-blue-400 to-blue-600",
    title: "Social Media Management",
    description: "Fédérez une communauté engagée sur les réseaux.",
    articles: [{ id: "sm-1", title: "Gestion des Communautés", description: "Stratégies d'engagement sur les réseaux sociaux.", publishedDate: "19 Mars 2026", readTime: "7 min", featured: true, pdfUrl: "/assets/docs/social-media-management.pdf" }]
  },
  "strategie-contenu": {
    icon: FileEdit,
    color: "from-amber-500 to-orange-700",
    title: "Stratégie de Contenu",
    description: "Le contenu est roi : créez de la valeur durable.",
    articles: [{ id: "sc-1", title: "Content Marketing", description: "Attirer des prospects par un contenu de qualité.", publishedDate: "21 Mars 2026", readTime: "8 min", featured: true, pdfUrl: "/assets/docs/strategie-de-contenu.pdf" }]
  },
  "tendances-marketing": {
    icon: Zap,
    color: "from-yellow-400 to-sunuOrange",
    title: "Tendances Marketing",
    description: "Décryptage des évolutions du marché.",
    articles: [{ id: "tm-1", title: "Tendances et Futur", description: "Anticiper les comportements de demain.", publishedDate: "23 Mars 2026", readTime: "9 min", featured: true, pdfUrl: "/assets/docs/tendance-marketing.pdf" }]
  },

  // --- 4 CATÉGORIES RESTANTES (SANS PDF POUR L'INSTANT) ---
  "relation-client": {
    icon: Headphones,
    color: "from-green-400 to-blue-500",
    title: "Relation Client & CRM",
    description: "Fidélisez vos clients par une expérience d'exception.",
    articles: [{ id: "rc-1", title: "L'excellence du service", description: "Bâtir une relation durable.", publishedDate: "À venir", readTime: "5 min", featured: false, pdfUrl: "#" }]
  },
  "developpement-web": {
    icon: Code2,
    color: "from-gray-700 to-black",
    title: "Développement Web",
    description: "Des solutions techniques robustes et évolutives.",
    articles: [{ id: "dw-1", title: "Architecture Web Moderne", description: "Choisir la bonne stack technique.", publishedDate: "À venir", readTime: "10 min", featured: false, pdfUrl: "#" }]
  },
  "business-intelligence": {
    icon: BarChart3,
    color: "from-indigo-500 to-purple-800",
    title: "Business Intelligence",
    description: "Transformez vos données en décisions stratégiques.",
    articles: [{ id: "bi-1", title: "Data-Driven Decisions", description: "L'analyse au service de la performance.", publishedDate: "À venir", readTime: "12 min", featured: false, pdfUrl: "#" }]
  },
  "coaching-formation": {
    icon: GraduationCap,
    color: "from-orange-400 to-red-500",
    title: "Formation & Coaching",
    description: "Montez en compétences avec nos experts.",
    articles: [{ id: "cf-1", title: "Le transfert de savoir", description: "Former les leaders de demain.", publishedDate: "À venir", readTime: "15 min", featured: false, pdfUrl: "#" }]
  }
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
        {/* Header de catégorie */}
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

        {/* Liste des articles */}
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

        {/* CTA Section */}
        <section className="px-6 mt-12">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-sunuBlue rounded-[2rem] p-8 md:p-14 text-white text-center relative overflow-hidden shadow-2xl shadow-blue-900/20">
              <div className="relative z-10">
                <h2 className="text-2xl md:text-4xl font-black mb-4 italic">Passez à l'action</h2>
                <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-base md:text-lg">
                  Transformons ensemble ces analyses d'experts en leviers de croissance concrets pour votre business.
                </p>
                <div className="flex justify-center">
                  <button className="bg-sunuOrange text-white px-12 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg">
                    Contactez SUNULINK CONSULTING
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
