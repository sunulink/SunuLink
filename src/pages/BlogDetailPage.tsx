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

// --- NOUVEAU : MOTEUR DE RENDU POUR LES CONTENUS COMPLEXES ---
// Ce composant transforme les objets {type: 'grid', ...} en visuels React
const ContentRenderer = ({ content }: { content: any }) => {
  if (!content) return null;
  
  // Si le contenu est une simple chaîne de caractères (ancien format)
  if (typeof content === 'string') {
    return <p className="text-gray-600 text-sm leading-relaxed">{content}</p>;
  }

  // Si c'est le nouveau format (tableau d'objets)
  if (Array.isArray(content)) {
    return (
      <div className="space-y-8">
        {content.map((block, idx) => {
          switch (block.type) {
            case "grid":
              return (
                <div key={idx} className="space-y-4">
                  {block.subtitle && <h4 className="font-black text-gray-800 uppercase tracking-tighter text-sm">{block.subtitle}</h4>}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {block.items.map((item: any, i: number) => (
                      <div key={i} className="bg-gray-50 p-3 rounded-xl border-l-4 border-sunuOrange">
                        <span className="block font-black text-sunuBlue text-xs mb-1 uppercase">{item.label}</span>
                        <p className="text-gray-600 text-xs leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            case "steps":
              return (
                <div key={idx} className="space-y-3">
                  {block.subtitle && <h4 className="font-black text-gray-800 uppercase tracking-tighter text-sm">{block.subtitle}</h4>}
                  {block.items.map((step: string, i: number) => (
                    <div key={i} className="flex gap-3 items-start bg-blue-50/30 p-3 rounded-xl">
                      <div className="bg-sunuBlue text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">{i + 1}</div>
                      <p className="text-gray-700 text-sm font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              );
            case "comparison":
              return (
                <div key={idx} className="overflow-hidden rounded-xl border border-gray-100 shadow-sm">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead className="bg-gray-800 text-white font-bold uppercase tracking-widest">
                      <tr>
                        {block.headers.map((h: string, i: number) => (
                          <th key={i} className="p-3">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {block.rows.map((row: any[], i: number) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                          {row.map((cell: string, j: number) => (
                            <td key={j} className="p-3 text-gray-600 font-medium">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            case "impact-box":
              return (
                <div key={idx} className="bg-sunuBlue text-white p-5 rounded-2xl relative overflow-hidden">
                  <h4 className="flex items-center gap-2 text-sunuOrange font-black text-xs mb-2 uppercase">
                    <Zap className="w-3 h-3" /> ANALYSE EXPERTE
                  </h4>
                  <p className="text-blue-50 text-sm italic relative z-10 leading-relaxed">{block.text}</p>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    );
  }
  return null;
};

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
        
        <h3 className={`${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'} font-black text-gray-900 mb-4 leading-tight group-hover:text-sunuOrange transition-colors uppercase tracking-tighter`}>
          {article.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base font-medium">
          {article.intro || article.description}
        </p>

        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[2000px] opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-6 border-t border-gray-100 space-y-6">
            {/* UTILISATION DU RENDERER ICI AU LIEU DU BLOC FIXE */}
            <ContentRenderer content={article.content} />
            
            {article.conclusion && (
               <div className="mt-4 p-4 bg-gray-50 rounded-xl border-dashed border-2 border-gray-200">
                  <p className="text-gray-800 font-black text-[10px] uppercase mb-1 tracking-widest">Le mot de la fin</p>
                  <p className="text-gray-600 text-xs italic leading-relaxed">{article.conclusion}</p>
               </div>
             )}
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
            isExpanded ? 'bg-gray-100 text-sunuBlue' : 'bg-sunuOrange text-white hover:bg-sunuBlue'
          }`}
        >
          {isExpanded ? "Réduire l'analyse" : "Lire l'analyse complète"} 
          <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
};

// DATA - (Ici vos catégories... Je garde branding-identite comme exemple fonctionnel)
export const blogCategoriesData: any = {
  // ... (Copiez ici vos catégories, incluant les nouveaux articles Branding que je vous ai donnés précédemment)
  "branding-identite": {
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    title: "Branding & Identité Visuelle",
    description: "Incarner vos valeurs à travers chaque pixel pour bâtir une icône.",
    articles: [
      {
        id: "bi-5",
        title: "Les erreurs fréquentes dans la création de Logo",
        intro: "Un logo n'est pas qu'un dessin, c'est un actif stratégique. Une seule erreur de conception peut coûter des années de crédibilité.",
        publishedDate: "20 Fév 2026",
        readTime: "8 min",
        featured: true,
        content: [
          {
            subtitle: "Top 5 des erreurs de design",
            type: "grid",
            items: [
              { label: "Complexité", text: "Trop de détails rendent le logo illisible sur mobile." },
              { label: "Mimétisme", text: "Ressembler à la concurrence, c'est devenir invisible." },
              { label: "Typographie", text: "Une police générique tue l'autorité de la marque." },
              { label: "Couleurs", text: "Un manque de contraste nuit à l'accessibilité." },
              { label: "Rigidité", text: "Un logo doit fonctionner parfaitement en noir et blanc." }
            ]
          },
          {
            type: "impact-box",
            text: "Le conseil SUNULINK : Testez toujours votre logo en format 'favicon' (16x16px). S'il est reconnaissable là, il le sera partout."
          }
        ],
        conclusion: "La simplicité est la sophistication suprême. Visez l'intemporel."
      }
    ]
  },
  // Ajoutez les autres catégories ici...
};

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? blogCategoriesData[slug] : null;

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!category) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6 text-center">
        <div className="max-w-md">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-black mb-2 uppercase tracking-tighter">Expertise non référencée</h1>
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
      <main className="pt-32 pb-16">
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-5xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sunuBlue font-bold text-sm mb-8 hover:text-sunuOrange transition-colors uppercase tracking-widest">
              <ArrowLeft className="w-4 h-4" /> Retour aux ressources
            </Link>

            <div className="flex flex-col md:flex-row items-center gap-8 border-b border-gray-100 pb-12">
              <div className={`bg-gradient-to-br ${category.color} w-20 h-20 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl shadow-gray-200`}>
                <Icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight uppercase tracking-tighter">
                  {category.title}
                </h1>
                <p className="text-gray-500 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="container mx-auto max-w-5xl">
            {featuredArticles.length > 0 && (
              <div className="mb-16">
                <h2 className="text-xs font-black text-sunuOrange mb-8 flex items-center gap-3 uppercase tracking-[0.3em]">
                   Analyses Stratégiques SUNULINK CONSULTING
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {featuredArticles.map((article: any) => (
                    <ArticleCard key={article.id} article={article} isFeatured={true} />
                  ))}
                </div>
              </div>
            )}

            {regularArticles.length > 0 && (
              <div>
                <h2 className="text-xs font-black text-sunuBlue mb-8 flex items-center gap-3 uppercase tracking-[0.3em]">
                   Notes d'Expertise
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

        <section className="px-6 mt-12 mb-20">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-gray-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter">Prêt à dominer votre marché ?</h2>
                <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                  Nos consultants transforment ces analyses en résultats sonnants et trébuchants pour votre marque.
                </p>
                <button className="bg-sunuOrange text-white px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-xl shadow-sunuOrange/20 uppercase tracking-widest">
                  Parler à un consultant
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
