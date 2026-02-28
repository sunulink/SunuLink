import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ChevronDown, ChevronUp, ArrowLeft, Clock, Palette, 
  CheckCircle2, Target, Zap, MousePointer2, BookOpen
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// --- DONNÉES DES 6 ARTICLES (Basées sur votre fichier) ---
const brandingArticles = [
  {
    id: "art-1",
    title: "L'IMPORTANCE DE L'IDENTITÉ VISUELLE",
    desc: "Pourquoi votre image de marque est votre premier outil de vente.",
    readTime: "12 min",
    intro: "L'identité visuelle est bien plus qu'un simple logo. C'est l'ensemble des éléments graphiques qui permettent d'identifier une marque et de transmettre ses valeurs.",
    sections: [
      { title: "I. CRÉDIBILITÉ PROFESSIONNELLE", points: ["Installe la confiance immédiate", "Reflète l'expertise", "Justifie des tarifs premium"] },
      { title: "II. MÉMORISATION", points: ["Identification instantanée", "Lien émotionnel durable", "Cohérence visuelle"] }
    ]
  },
  {
    id: "art-2",
    title: "LES ÉLÉMENTS CLÉS D'UNE CHARTE GRAPHIQUE",
    desc: "Le guide complet pour structurer vos règles graphiques.",
    readTime: "15 min",
    intro: "La charte graphique est le document de référence qui garantit la cohérence de votre communication sur tous vos supports.",
    sections: [
      { title: "I. LOGOTYPE & VARIANTES", points: ["Logo principal", "Zones d'exclusion", "Versions noir et blanc"] },
      { title: "II. TYPOGRAPHIES & COULEURS", points: ["Polices de titres et corps", "Codes HEX/RGB/CMJN", "Hiérarchie visuelle"] }
    ]
  },
  {
    id: "art-3",
    title: "CRÉER UN POSITIONNEMENT DE MARQUE UNIQUE",
    desc: "Comment se différencier radicalement de la concurrence.",
    readTime: "18 min",
    intro: "Le positionnement est la place que votre marque occupe dans l'esprit des clients par rapport à vos concurrents.",
    sections: [
      { title: "I. ANALYSE DU MARCHÉ", points: ["Forces et faiblesses concurrentes", "Opportunités de niche", "Standards du secteur"] }
    ]
  },
  {
    id: "art-4",
    title: "L'IMPACT PSYCHOLOGIQUE DES TYPOGRAPHIES",
    desc: "Comment le choix de vos polices influence la perception de vos clients.",
    readTime: "10 min",
    intro: "La typographie ne sert pas qu'à lire ; elle transmet une émotion, une autorité ou une proximité avant même que le mot ne soit compris.",
    sections: [
      { title: "I. SÉRIF VS SANS-SÉRIF", points: ["Sérif : Tradition, luxe et sérieux", "Sans-Sérif : Modernité, tech et clarté", "Script : Élégance et créativité"] },
      { title: "II. LISIBILITÉ ET HIÉRARCHIE", points: ["Importance du contraste", "Équilibre des graisses (Bold/Light)", "Adaptation mobile"] }
    ]
  },
  {
    id: "art-5",
    title: "ERREURS FRÉQUENTES DANS LA CRÉATION DE LOGO",
    desc: "Les pièges à éviter pour ne pas nuire à votre crédibilité.",
    readTime: "11 min",
    intro: "Un logo raté peut détruire l'image d'une entreprise performante. Voici comment éviter les erreurs de débutant.",
    sections: [
      { title: "I. COMPLEXITÉ ET LISIBILITÉ", points: ["Trop de détails tue le logo", "Problèmes de réduction de taille", "Choix de couleurs incohérentes"] }
    ]
  },
  {
    id: "art-6",
    title: "LE BRANDING SENSORIEL EN 2025",
    desc: "Engager les 5 sens pour une expérience de marque totale.",
    readTime: "14 min",
    intro: "Les marques les plus puissantes ne se contentent pas d'être vues, elles se ressentent physiquement.",
    sections: [
      { title: "I. AU-DELÀ DU VISUEL", points: ["Identité sonore (Jingles)", "Marketing olfactif", "Textures et packaging"] }
    ]
  }
];

const ResourceDetailPage = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Header />
      
      <main className="pt-40 pb-32">
        {/* --- SECTION TITRE (AGRANDIE) --- */}
        <section className="px-6 mb-24">
          <div className="container mx-auto max-w-6xl">
            <Link to="/ressources" className="flex items-center gap-2 text-sunuOrange font-black uppercase tracking-tighter mb-10 hover:gap-4 transition-all">
              <ArrowLeft size={24} /> Retour à la bibliothèque
            </Link>
            
            <div className="bg-white p-12 md:p-20 rounded-[3rem] border-2 border-gray-100 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-sunuOrange/5 rounded-full -mr-20 -mt-20"></div>
              <div className="relative z-10">
                <span className="bg-sunuOrange/10 text-sunuOrange px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-6 inline-block">
                  Catégorie Expertise
                </span>
                <h1 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter leading-none mb-8">
                  BRANDING & <br /> <span className="text-sunuOrange">IDENTITÉ VISUELLE.</span>
                </h1>
                <p className="text-2xl text-gray-500 max-w-2xl leading-relaxed">
                  Découvrez comment SUNULINK CONSULTING transforme des concepts en marques iconiques à travers nos analyses exclusives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- GRILLE DES 6 CARTES D'ARTICLES (AGRANDIES) --- */}
        <section className="px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-10">
              {brandingArticles.map((article) => (
                <div 
                  key={article.id}
                  className={`group bg-white rounded-[2.5rem] border-2 transition-all duration-500 overflow-hidden ${
                    openId === article.id ? "border-sunuOrange shadow-2xl" : "border-gray-100 hover:border-sunuBlue shadow-lg"
                  }`}
                >
                  {/* Header de la Carte */}
                  <div 
                    onClick={() => setOpenId(openId === article.id ? null : article.id)}
                    className="p-10 md:p-14 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-8"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="flex items-center gap-2 text-gray-400 font-bold text-sm uppercase">
                          <Clock size={18} /> {article.readTime}
                        </span>
                        <div className="h-px w-12 bg-gray-200"></div>
                        <span className="text-sunuBlue font-black text-sm uppercase tracking-widest">Guide Expert</span>
                      </div>
                      <h2 className="text-3xl md:text-5xl font-black text-gray-900 group-hover:text-sunuOrange transition-colors leading-tight">
                        {article.title}
                      </h2>
                      <p className="text-xl text-gray-500 mt-4 font-medium">{article.desc}</p>
                    </div>
                    
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
                      openId === article.id ? "bg-sunuOrange text-white rotate-180" : "bg-gray-50 text-gray-300 group-hover:bg-sunuBlue group-hover:text-white"
                    }`}>
                      <ChevronDown size={40} />
                    </div>
                  </div>

                  {/* Contenu de la Carte (Déroulement) */}
                  {openId === article.id && (
                    <div className="px-10 pb-16 md:px-20 md:pb-24 animate-in fade-in slide-in-from-top-4 duration-500">
                      <div className="h-1 w-full bg-gray-50 mb-16"></div>
                      
                      <div className="max-w-3xl">
                        <h3 className="text-sm font-black text-sunuOrange uppercase tracking-[0.3em] mb-6">Introduction</h3>
                        <p className="text-2xl md:text-3xl text-gray-800 leading-snug font-bold mb-16 italic border-l-8 border-sunuOrange pl-8">
                          {article.intro}
                        </p>

                        <div className="space-y-20">
                          {article.sections.map((section, idx) => (
                            <div key={idx}>
                              <h4 className="text-2xl font-black text-sunuBlue uppercase mb-8 flex items-center gap-4">
                                <span className="w-12 h-12 rounded-xl bg-sunuBlue text-white flex items-center justify-center text-lg">{idx + 1}</span>
                                {section.title}
                              </h4>
                              <ul className="grid grid-cols-1 gap-6">
                                {section.points.map((point, pIdx) => (
                                  <li key={pIdx} className="flex items-start gap-4 text-xl text-gray-600 font-medium">
                                    <CheckCircle2 className="text-sunuOrange flex-shrink-0 mt-1" size={28} />
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-24 p-10 bg-sunuBlue rounded-[2rem] text-white">
                          <h5 className="text-xl font-black mb-4 uppercase tracking-widest flex items-center gap-3">
                            <Zap className="text-sunuOrange" /> Note de l'expert
                          </h5>
                          <p className="text-lg opacity-80 leading-relaxed">
                            Ce contenu est la propriété de SUNULINK CONSULTING. Pour une application personnalisée à votre business, contactez nos consultants.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION CONTACT (VERSION XL) --- */}
        <section className="mt-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-sunuOrange p-16 md:p-24 rounded-[4rem] text-center text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
                  VOTRE MARQUE <br /> MÉRITE L'EXCELLENCE.
                </h2>
                <Link to="/contact" className="inline-flex items-center gap-4 bg-white text-sunuOrange px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-xl">
                  DÉMARRER UN PROJET <MousePointer2 />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer /> {/* Affiche SUNULINK CONSULTING */}
    </div>
  );
};

export default ResourceDetailPage;
