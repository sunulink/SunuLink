import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Calendar, Clock, BookOpen, 
  ChevronDown, Megaphone, Users, TrendingUp, 
  Lightbulb, Search, Award, Palette, Target, 
  Sparkles, Zap, CheckCircle2, Globe, 
  Briefcase, MessageSquare, AlertCircle,
  FileText // Import de l'icône PDF
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

        {/* CONTENEUR DES BOUTONS */}
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

          {/* BOUTON PDF */}
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

// --- DATA : LES 20 CATÉGORIES ---

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
        description: "ARTICLE",
        publishedDate: "12 Fév 2026", 
        readTime: "6 min", 
        featured: true,
        pdfUrl: "/assets/pdf/analyse-likes.pdf", // Exemple de lien
        content: "Notre approche chez SUNULINK CONSULTING est simple : si une métrique ne peut pas être liée à une conversion ou à une intention d'achat, c'est du bruit. Nous recommandons de segmenter vos rapports par tunnel de vente."
      },
      { 
        id: "cm-2", 
        title: "Le pouvoir de l'A/B Testing en environnement restreint", 
        description: "Pas besoin de 100 000 visiteurs pour tester. Nos méthodes pour optimiser vos tunnels avec de petits volumes.", 
        publishedDate: "05 Fév 2026", 
        readTime: "8 min",
        pdfUrl: "/assets/pdf/ab-testing.pdf"
      }
    ]
  },
  // ... les autres catégories restent identiques
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
