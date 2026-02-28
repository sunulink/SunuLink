import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, Clock, CheckCircle2, Target, 
  MousePointer2, Globe, AlertTriangle, Layers, ListChecks
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// On importe les nouvelles données structurées (ex: Branding)
import { brandingResources } from "@/data/brandingResources";

const ResourceDetailPage = () => {
  const data = brandingResources;

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header />
      
      <main className="pt-40 pb-32">
        {/* --- EN-TÊTE GÉANTE --- */}
        <section className="px-6 mb-32">
          <div className="container mx-auto max-w-6xl">
            <Link to="/ressources" className="flex items-center gap-2 text-sunuOrange font-black uppercase tracking-tighter mb-10 hover:translate-x-[-8px] transition-transform">
              <ArrowLeft size={24} /> Bibliothèque de ressources
            </Link>
            
            <div className="bg-white p-12 md:p-24 rounded-[4rem] border border-gray-100 shadow-2xl relative overflow-hidden text-center md:text-left">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-sunuBlue/5 rounded-full"></div>
              <div className="relative z-10">
                <span className="bg-sunuBlue text-white px-8 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-8 inline-block">
                  Expertise {data.category}
                </span>
                <h1 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-10 uppercase italic">
                   {data.title.split(' ').slice(0, 2).join(' ')} <br />
                   <span className="text-sunuOrange">{data.title.split(' ').slice(2).join(' ')}</span>
                </h1>
                <p className="text-2xl text-gray-400 max-w-3xl leading-relaxed font-medium mx-auto md:mx-0">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- LISTE CONTINUE DES ARTICLES --- */}
        <section className="px-6">
          <div className="container mx-auto max-w-5xl space-y-40">
            {data.articles.map((article, index) => (
              <article key={article.id} className="relative">
                {/* Numérotation discrète en arrière-plan */}
                <span className="absolute -left-12 md:-left-24 -top-10 text-[10rem] font-black text-gray-100 select-none z-0">
                  0{index + 5}
                </span>

                <div className="relative z-10">
                  {/* Titre & Intro de l'article */}
                  <header className="mb-16">
                    <div className="flex items-center gap-4 mb-6">
                       <span className="text-sunuOrange font-black text-sm uppercase tracking-widest">Article Stratégique</span>
                       <div className="h-px w-20 bg-gray-200"></div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 uppercase italic leading-[1.1]">
                      {article.title}
                    </h2>
                    <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-bold border-l-8 border-sunuOrange pl-8 italic">
                      "{article.intro}"
                    </p>
                  </header>

                  {/* Contenu Dynamique (Mapping des types) */}
                  <div className="space-y-20">
                    {article.content.map((block, bIdx) => (
                      <div key={bIdx}>
                        {block.subtitle && (
                          <h3 className="text-2xl font-black text-sunuBlue uppercase mb-10 flex items-center gap-4">
                            <Target className="text-sunuOrange" /> {block.subtitle}
                          </h3>
                        )}

                        {/* Rendu selon le TYPE de bloc */}
                        {block.type === "grid" && (
                          <div className="grid md:grid-cols-2 gap-8">
                            {block.items?.map((item, iIdx) => (
                              <div key={iIdx} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-shadow">
                                <div className="text-sunuOrange font-black mb-2 uppercase tracking-tighter text-lg">{item.label}</div>
                                <p className="text-gray-500 font-medium leading-snug">{item.text}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {block.type === "list" && (
                          <ul className="grid gap-6">
                            {block.points?.map((point, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-4 text-xl text-gray-600 font-semibold bg-gray-50 p-6 rounded-2xl">
                                <CheckCircle2 className="text-sunuOrange mt-1 flex-shrink-0" size={28} />
                                {point}
                              </li>
                            ))}
                          </ul>
                        )}

                        {block.type === "comparison" && (
                          <div className="overflow-x-auto rounded-[2rem] border border-gray-100 shadow-lg">
                            <table className="w-full text-left bg-white">
                              <thead className="bg-sunuBlue text-white">
                                <tr>
                                  {block.headers?.map((h, hIdx) => (
                                    <th key={hIdx} className="p-8 font-black uppercase tracking-widest text-sm">{h}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-100">
                                {block.rows?.map((row, rIdx) => (
                                  <tr key={rIdx} className="hover:bg-gray-50 transition-colors">
                                    {row.map((cell, cIdx) => (
                                      <td key={cIdx} className={`p-8 font-bold ${cIdx === 0 ? "text-sunuOrange" : "text-gray-600"}`}>{cell}</td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}

                        {block.type === "impact-box" && (
                          <div className="bg-gray-900 text-white p-12 rounded-[3rem] relative overflow-hidden">
                            <Zap className="absolute -right-10 -bottom-10 text-sunuOrange opacity-20" size={200} />
                            <p className="text-2xl md:text-3xl font-black italic relative z-10 leading-tight">
                              {block.text}
                            </p>
                          </div>
                        )}

                        {block.type === "steps" && (
                          <div className="space-y-6">
                            {block.items?.map((step, sIdx) => (
                              <div key={sIdx} className="flex items-center gap-8 group">
                                <div className="w-16 h-16 rounded-full bg-sunuBlue text-white flex items-center justify-center font-black text-2xl group-hover:bg-sunuOrange transition-colors">
                                  {sIdx + 1}
                                </div>
                                <div className="text-xl font-bold text-gray-700">{step}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Conclusion de l'article */}
                  <footer className="mt-16 pt-10 border-t border-gray-100">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                      <p className="text-gray-400 font-bold uppercase tracking-widest text-sm italic">
                        Conclusion : {article.conclusion}
                      </p>
                      <button className="bg-sunuBlue/5 text-sunuBlue px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-sunuOrange hover:text-white transition-all">
                        Partager cette analyse
                      </button>
                    </div>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- CTA FINAL --- */}
        <section className="mt-40 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-sunuBlue p-20 md:p-32 rounded-[5rem] text-center text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <Globe size={800} className="absolute -top-96 -right-96" />
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-10 leading-none uppercase">
                  CONSTRUISONS VOTRE <br /> IDENTITÉ PREMIUM
                </h2>
                <Link to="/contact" className="inline-flex items-center gap-6 bg-sunuOrange text-white px-16 py-8 rounded-full font-black text-2xl hover:bg-white hover:text-sunuBlue transition-all shadow-2xl">
                  PARLER À UN CONSULTANT <MousePointer2 size={32} />
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
