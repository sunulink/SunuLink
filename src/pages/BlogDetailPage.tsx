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
import { 
  Lightbulb, TrendingUp, Megaphone, Target, Users, Palette, 
  Globe, Briefcase, Sparkles, Award, MessageSquare, BookOpen,
  ShieldCheck, Zap, Radio, FileEdit, Monitor, Landmark, Star, Headphones
} from "lucide-react";

export const blogCategoriesData: any = {
  // 1. Conseils & Astuces Marketing
  "conseils-marketing": {
    icon: Lightbulb,
    color: "from-sunuOrange to-yellow-500",
    title: "Conseils & Astuces Marketing",
    description: "Le pragmatisme au service de votre croissance quotidienne.",
    articles: [{ id: "cm-1", title: "Optimiser sa Stratégie", description: "Les piliers d'une présence forte.", publishedDate: "12 Fév 2026", readTime: "6 min", featured: true, pdfUrl: "/assets/docs/strategie-marketing.pdf" }]
  },
  // 2. Tendances & Actualités
  "tendances-actualites": {
    icon: TrendingUp,
    color: "from-sunuBlue to-sunuCyan",
    title: "Tendances & Actualités",
    description: "Restez informé des dernières évolutions du marché.",
    articles: [{ id: "ta-1", title: "Décryptage des Tendances", description: "Anticiper les mutations du secteur.", publishedDate: "14 Fév 2026", readTime: "8 min", featured: true, pdfUrl: "/assets/docs/tendance-marketing.pdf" }]
  },
  // 3. Stratégies de Communication
  "strategies-communication": {
    icon: Megaphone,
    color: "from-purple-500 to-pink-500",
    title: "Stratégies de Communication",
    description: "Construire des messages percutants et cohérents.",
    articles: [{ id: "sc-1", title: "Plan de Communication 2026", description: "Méthodologie pour un impact maximal.", publishedDate: "16 Fév 2026", readTime: "10 min", featured: true, pdfUrl: "/assets/docs/strategie-marketing.pdf" }]
  },
  // 4. Marketing Digital & SEO
  "marketing-digital-seo": {
    icon: Target,
    color: "from-green-500 to-emerald-500",
    title: "Marketing Digital & SEO",
    description: "Optimisez votre visibilité sur les moteurs de recherche.",
    articles: [{ id: "mds-1", title: "Performance Digital", description: "Leviers de croissance en ligne.", publishedDate: "18 Fév 2026", readTime: "9 min", featured: true, pdfUrl: "/assets/docs/marketing-digital.pdf" }]
  },
  // 5. Réseaux Sociaux
  "reseaux-sociaux": {
    icon: Users,
    color: "from-blue-500 to-indigo-500",
    title: "Réseaux Sociaux",
    description: "Fédérez et engagez votre communauté.",
    articles: [{ id: "rs-1", title: "Social Media Strategy", description: "Maîtriser les nouveaux algorithmes.", publishedDate: "20 Fév 2026", readTime: "7 min", featured: true, pdfUrl: "/assets/docs/social-media-management.pdf" }]
  },
  // 6. Branding & Identité Visuelle
  "branding-identite": {
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    title: "Branding & Identité Visuelle",
    description: "Créez une image de marque mémorable.",
    articles: [{ id: "bi-1", title: "L'art du Branding", description: "Traduire vos valeurs en image.", publishedDate: "22 Fév 2026", readTime: "11 min", featured: true, pdfUrl: "/assets/docs/design-creation-visuelle.pdf" }]
  },
  // 7. Communication Africaine
  "communication-africaine": {
    icon: Globe,
    color: "from-amber-500 to-orange-500",
    title: "Communication Africaine",
    description: "Spécificités et opportunités sur le continent.",
    articles: [{ id: "ca-1", title: "Storytelling Local", description: "Adapter son message aux codes africains.", publishedDate: "24 Fév 2026", readTime: "12 min", featured: true, pdfUrl: "/assets/docs/communication-africaine.pdf" }]
  },
  // 8. Entrepreneuriat & Business
  "entrepreneuriat-business": {
    icon: Briefcase,
    color: "from-teal-500 to-cyan-500",
    title: "Entrepreneuriat & Business",
    description: "Conseils stratégiques pour PME et startups.",
    articles: [{ id: "eb-1", title: "Leadership Entrepreneurial", description: "Gérer la croissance avec agilité.", publishedDate: "26 Fév 2026", readTime: "8 min", featured: true, pdfUrl: "/assets/docs/entreprenariat-leardership.pdf" }]
  },
  // 9. Innovation & IA
  "innovation-ia": {
    icon: Sparkles,
    color: "from-violet-500 to-purple-500",
    title: "Innovation & IA",
    description: "L'IA au service de votre productivité.",
    articles: [{ id: "ii-1", title: "Automatisation Intelligente", description: "Gagner du temps avec les nouveaux outils.", publishedDate: "28 Fév 2026", readTime: "9 min", featured: true, pdfUrl: "/assets/docs/ia-automatisation.pdf" }]
  },
  // 10. Success Stories
  "success-stories": {
    icon: Award,
    color: "from-red-500 to-orange-500",
    title: "Success Stories",
    description: "Études de cas et projets inspirants.",
    articles: [{ id: "ss-1", title: "Cas Client : Croissance", description: "Résultats d'une stratégie optimisée.", publishedDate: "02 Mars 2026", readTime: "15 min", featured: true, pdfUrl: "/assets/docs/business-finance.pdf" }]
  },
  // 11. Interviews & Portraits
  "interviews-portraits": {
    icon: MessageSquare,
    color: "from-indigo-500 to-blue-500",
    title: "Interviews & Portraits",
    description: "À la rencontre des acteurs du changement.",
    articles: [{ id: "ip-1", title: "Rencontre avec l'Expert", description: "Parcours et visions d'avenir.", publishedDate: "04 Mars 2026", readTime: "10 min", featured: true, pdfUrl: "/assets/docs/management-rh.pdf" }]
  },
  // 12. Tutoriels & Guides
  "tutoriels-guides": {
    icon: BookOpen,
    color: "from-cyan-500 to-blue-500",
    title: "Tutoriels & Guides",
    description: "Apprenez pas à pas de nouvelles compétences.",
    articles: [{ id: "tg-1", title: "Guide E-commerce", description: "Lancer sa boutique en ligne.", publishedDate: "06 Mars 2026", readTime: "20 min", featured: true, pdfUrl: "/assets/docs/ecommerce-vente-en-ligne.pdf" }]
  },
  // 13. Communication 360°
  "communication-360-strategie-globale": {
    icon: Target,
    color: "from-sunuBlue to-sunuCyan",
    title: "Communication 360°",
    description: "Une vision holistique pour votre marque.",
    articles: [{ id: "c360-1", title: "Stratégie Globale", description: "Harmoniser tous vos points de contact.", publishedDate: "08 Mars 2026", readTime: "12 min", featured: true, pdfUrl: "/assets/docs/strategie-entreprise.pdf" }]
  },
  // 14. Publicité & Média Buying
  "publicite-digitale-strategies-media": {
    icon: Megaphone,
    color: "from-red-500 to-orange-500",
    title: "Publicité & Média Buying",
    description: "Optimisez votre ROI publicitaire.",
    articles: [{ id: "pmb-1", title: "Achat Média Performant", description: "Ciblage et conversion.", publishedDate: "10 Mars 2026", readTime: "8 min", featured: true, pdfUrl: "/assets/docs/publicite-media.pdf" }]
  },
  // 15. Création de Contenu
  "strategie-contenu-creation-editoriale": {
    icon: MessageSquare,
    color: "from-purple-500 to-pink-500",
    title: "Création de Contenu",
    description: "Le storytelling au cœur de votre engagement.",
    articles: [{ id: "scc-1", title: "Marketing de Contenu", description: "Créer de la valeur durable.", publishedDate: "12 Mars 2026", readTime: "9 min", featured: true, pdfUrl: "/assets/docs/strategie-de-contenu.pdf" }]
  },
  // 16. Design Graphique
  "design-graphique-branding-visuel": {
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    title: "Design Graphique",
    description: "Supports visuels impactants pour votre business.",
    articles: [{ id: "dg-1", title: "Identité Visuelle", description: "Moderniser son image.", publishedDate: "14 Mars 2026", readTime: "7 min", featured: true, pdfUrl: "/assets/docs/design-creation-visuelle.pdf" }]
  },

  // --- CATÉGORIES FINALISÉES (PDF INTÉGRÉS) ---
  "audiovisuel-motion-design": {
    icon: Sparkles,
    color: "from-indigo-500 to-blue-500",
    title: "Audiovisuel & Motion Design",
    description: "Maîtrisez l'art de la narration visuelle. De la vidéo institutionnelle au motion design pédagogique, nous transformons vos messages complexes en expériences immersives et mémorables pour captiver votre audience.",
    articles: [
      { 
        id: "amd-1", 
        title: "L’Audiovisuel : Pilier de la Com Moderne", 
        description: "Découvrez comment l'image animée renforce l'impact émotionnel et la mémorisation de votre marque.", 
        publishedDate: "20 Mars 2026", 
        readTime: "8 min", 
        featured: true, 
        pdfUrl: "/assets/docs/audiovisuel-motion-design.pdf" 
      },
      { 
        id: "amd-2", 
        title: "Le Pouvoir du Motion Design", 
        description: "Simplifier des concepts complexes par l'animation graphique et le storytelling visuel.", 
        publishedDate: "22 Mars 2026", 
        readTime: "6 min", 
        featured: false, 
        pdfUrl: "/assets/docs/audiovisuel-motion-design.pdf" 
      }
    ]
  },

  "evenementiel-experience-client": {
    icon: Users,
    color: "from-amber-500 to-orange-500",
    title: "Événementiel & Expérience Client",
    description: "Au-delà de la logistique, créez des connexions humaines durables. Nous explorons les stratégies d'activation de marque et de scénographie pour transformer chaque événement en un levier de croissance commerciale.",
    articles: [
      { 
        id: "eec-1", 
        title: "Événementiel Stratégique", 
        description: "Comment transformer un événement professionnel en un véritable levier de différenciation et d'engagement.", 
        publishedDate: "16 Mars 2026", 
        readTime: "11 min", 
        featured: true, 
        pdfUrl: "/assets/docs/evenementiel-experience.pdf" 
      },
      { 
        id: "eec-2", 
        title: "L'Expérience Client (UX) Physique", 
        description: "Placer le client au cœur de la stratégie pour garantir fidélité et recommandations positives.", 
        publishedDate: "17 Mars 2026", 
        readTime: "9 min", 
        featured: false, 
        pdfUrl: "/assets/docs/evenementiel-experience.pdf" 
      }
    ]
  },

  "relations-publiques-communication-institutionnelle": {
    icon: Briefcase,
    color: "from-teal-500 to-cyan-500",
    title: "Communication Corporate & Institutionnelle",
    description: "Bâtissez une réputation solide et pérenne. Nous vous accompagnons dans la structuration de votre discours institutionnel, la gestion de votre image de marque et l'alignement de vos valeurs avec vos actions.",
    articles: [
      { 
        id: "rpc-1", 
        title: "Identité & Crédibilité Corporate", 
        description: "Les clés pour construire une image institutionnelle forte auprès des partenaires et du public.", 
        publishedDate: "18 Mars 2026", 
        readTime: "10 min", 
        featured: true, 
        pdfUrl: "/assets/docs/communication-corporate-institutionnelle.pdf" 
      },
      { 
        id: "rpc-2", 
        title: "Communication Interne & Engagement", 
        description: "Faire de vos collaborateurs les premiers ambassadeurs de votre vision d'entreprise.", 
        publishedDate: "19 Mars 2026", 
        readTime: "7 min", 
        featured: false, 
        pdfUrl: "/assets/docs/communication-corporate-institutionnelle.pdf" 
      }
    ]
  },

  "communication-crise-reputation": {
    icon: ShieldCheck,
    color: "from-gray-600 to-gray-800",
    title: "Gestion de Crise & E-Réputation",
    description: "Protégez votre actif le plus précieux : votre nom. Apprenez à anticiper les risques, à réagir avec transparence face aux imprévus et à restaurer la confiance après une situation sensible.",
    articles: [
      { 
        id: "ccr-1", 
        title: "Stratégies de Com de Crise", 
        description: "Guide méthodologique pour protéger la réputation de votre organisation en période d'instabilité.", 
        publishedDate: "21 Mars 2026", 
        readTime: "12 min", 
        featured: true, 
        pdfUrl: "/assets/docs/communication-crise-reputation.pdf" 
      },
      { 
        id: "ccr-2", 
        title: "Maîtriser son Image Numérique", 
        description: "Surveiller et influencer positivement votre e-réputation sur les réseaux sociaux.", 
        publishedDate: "23 Mars 2026", 
        readTime: "10 min", 
        featured: false, 
        pdfUrl: "/assets/docs/communication-crise-reputation.pdf" 
      }
    ]
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
