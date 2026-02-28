import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ChevronDown, ArrowLeft, Clock, CheckCircle2, 
  Target, MousePointer2, Globe, FileText
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Importation de la donnée (le fichier que nous avons rempli)
import { communication360Guide } from "@/data/communication360Guide";

const ResourceDetailPage = () => {
  // On gère l'ouverture des 6 grandes cartes
  const [openId, setOpenId] = useState<string | null>("art-1");

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header />
      
      <main className="pt-40 pb-32">
        {/* --- EN-TÊTE DE LA CATÉGORIE --- */}
        <section className="px-6 mb-24">
          <div className="container mx-auto max-w-6xl">
            <Link to="/ressources" className="flex items-center gap-2 text-sunuOrange font-black uppercase tracking-tighter mb-10 hover:translate-x-[-8px] transition-transform">
              <ArrowLeft size={24} /> Retour aux ressources
            </Link>
            
            <div className="bg-white p-12 md:p-24 rounded-[4rem] border border-gray-100 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-sunuBlue/5 rounded-full"></div>
              <div className="relative z-10">
                <span className="bg-sunuBlue text-white px-8 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-8 inline-block">
                  Expertise {communication360Guide.category}
                </span>
                <h1 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-10 uppercase italic">
                  {communication360Guide.title.split(' ')[0]} <br /> 
                  <span className="text-sunuOrange">{communication360Guide.title.split(' ').slice(1).join(' ')}</span>
                </h1>
                <p className="text-2xl text-gray-400 max-w-3xl leading-relaxed font-medium">
                  {communication360Guide.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- LES 6 SECTIONS D'ARTICLES (CARTES DÉPLIANTES) --- */}
        <section className="px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-12">
              {communication360Guide.articles.map((article) => (
                <div 
                  key={article.id}
                  className={`group bg-white rounded-[3rem] border-2 transition-all duration-700 ${
                    openId === article.id ? "border-sunuOrange shadow-2xl scale-[1.01]" : "border-transparent hover:border-gray-200 shadow-xl"
                  }`}
                >
                  {/* Header de la carte */}
                  <div 
                    onClick={() => setOpenId(openId === article.id ? null : article.id)}
                    className="p-12 md:p-16 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-10"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="flex items-center gap-2 text-sunuOrange font-black text-xs uppercase tracking-widest">
                          <Clock size={16} /> {article.readTime}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-gray-200"></span>
                        <span className="text-gray-400 font-bold text-xs uppercase tracking-widest">Contenu Stratégique</span>
                      </div>
                      <h2 className="text-3xl md:text-5xl font-black text-gray-900 group-hover:text-sunuBlue transition-colors leading-tight uppercase italic">
                        {article.title}
                      </h2>
                      <p className="text-xl text-gray-500 mt-6 font-medium max-w-2xl">{article.desc}</p>
                    </div>
                    
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 ${
                      openId === article.id ? "bg-sunuOrange text-white rotate-180 shadow-lg" : "bg-gray-50 text-gray-300"
                    }`}>
                      <ChevronDown size={48} />
                    </div>
                  </div>

                  {/* Contenu de l'article (Affiché si ouvert) */}
                  {openId === article.id && (
                    <div className="px-12 pb-20 md:px-24 md:pb-24 animate-in fade-in slide-in-from-bottom-10 duration-700">
                      <div className="h-px w-full bg-gray-100 mb-20"></div>
                      <div className="max-w-5xl">
                        {/* Intro massive */}
                        <p className="text-2xl md:text-4xl text-gray-800 leading-[1.2] font-black mb-20 border-l-[12px] border-sunuOrange pl-12 italic">
                          "{article.intro}"
                        </p>

                        {/* Grille des sous-sections (reprend les 19 points du guide) */}
                        <div className="grid md:grid-cols-2 gap-16">
                          {article.sections.map((section, idx) => (
                            <div key={idx} className="bg-gray-50/50 p-10 rounded-[2rem] border border-gray-100">
                              <h4 className="text-xl font-black text-sunuBlue uppercase mb-8 flex items-center gap-4">
                                <Target className="text-sunuOrange" size={24} /> {section.title}
                              </h4>
                              <ul className="space-y-6">
                                {section.points.map((point, pIdx) => (
                                  <li key={pIdx} className="flex items-start gap-4 text-lg text-gray-600 font-semibold leading-relaxed">
                                    <CheckCircle2 className="text-sunuOrange flex-shrink-0 mt-1" size={24} />
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        
                        {/* Conclusion de l'article */}
                        <div className="mt-16 p-8 border-t border-gray-100 text-gray-400 font-bold uppercase tracking-widest text-sm text-center">
                          {article.conclusion}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA FINAL --- */}
        <section className="mt-40 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-sunuBlue p-20 md:p-32 rounded-[5rem] text-center text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-10 leading-none uppercase">
                  VOTRE STRATÉGIE <br /> SUR MESURE
                </h2>
                <Link to="/contact" className="inline-flex items-center gap-6 bg-sunuOrange text-white px-16 py-8 rounded-full font-black text-2xl hover:bg-white hover:text-sunuBlue transition-all shadow-2xl">
                  CONTACTER SUNULINK <MousePointer2 size={32} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer /> 
    </div>
  );
};

export default ResourceDetailPage;
