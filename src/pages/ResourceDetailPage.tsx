import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ChevronDown, ArrowLeft, Clock, Globe, 
  CheckCircle2, Target, Zap, MousePointer2, BarChart3
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// --- DONNÉES EXTRAITES POUR LA COMMUNICATION 360° (6 SECTIONS) ---
const commArticles = [
  {
    id: "c-1",
    title: "INTRODUCTION & FONDAMENTAUX 360°",
    desc: "Pourquoi orchestrer tous vos points de contact est vital en 2025.",
    readTime: "12 min",
    intro: "La communication 360° est une approche intégrée qui orchestre tous les points de contact entre une marque et ses publics. C’est la stratégie qui transforme la visibilité en confiance.",
    sections: [
      { title: "I. DÉFINITION & PRINCIPES", points: ["Combinaison de stratégie offline et online", "Cohérence absolue du message", "Orientation résultats et data-driven"] },
      { title: "II. BÉNÉFICES CONCRETS", points: ["Visibilité accrue et reconnaissance", "Conversion et génération de leads optimisées", "ROI mesurable (CAC, LTV)"] }
    ]
  },
  {
    id: "c-2",
    title: "LES 7 PILIERS DE LA STRATÉGIE",
    desc: "Les fondations solides pour une marque mémorable et compétitive.",
    readTime: "15 min",
    intro: "Une stratégie sans piliers est comme une maison sans fondations. Voici les 7 éléments clés structurant toute communication moderne.",
    sections: [
      { title: "I. POSITIONNEMENT & BRANDING", points: ["Vision, Mission et Valeurs", "Identité visuelle et ADN de marque", "Professionnalisation de l'image"] },
      { title: "II. DIGITAL & RÉSEAUX SOCIAUX", points: ["Présence en ligne (SEO, Site)", "Interaction et engagement communautaire", "Expérience client et événementiel"] }
    ]
  },
  {
    id: "c-3",
    title: "MÉTHODOLOGIE OPÉRATIONNELLE",
    desc: "Le processus pas-à-pas : de l'audit au déploiement final.",
    readTime: "18 min",
    intro: "Découvrez la rigueur de la méthode Sunu Link Consulting : un accompagnement stratégique pour garantir l'impact de chaque action.",
    sections: [
      { title: "I. AUDIT & STRATÉGIE", points: ["Diagnostic complet de marque", "Plan directeur sur 12 mois", "Choix des canaux prioritaires"] },
      { title: "II. CRÉATION & ACTIVATION", points: ["Production d'assets (vidéos, articles)", "Lancement multi-canal coordonné", "Optimisation continue"] }
    ]
  },
  {
    id: "c-4",
    title: "PLAN DE COMMUNICATION SUR 12 MOIS",
    desc: "Comment structurer votre croissance sur une année complète.",
    readTime: "14 min",
    intro: "Une stratégie performante repose sur un plan structuré permettant d’assurer visibilité et résultats mesurables sur le long terme.",
    sections: [
      { title: "I. PHASES DE LANCEMENT (M1-M6)", points: ["Analyse et objectifs (M1)", "Lancement digital et contenus (M3)", "SEO et automation (M5)"] },
      { title: "II. PHASES DE SCALING (M7-M12)", points: ["Campagnes publicitaires fortes", "Événementiel et terrain", "Bilan annuel et plan 2026"] }
    ]
  },
  {
    id: "c-5",
    title: "360° VS COMMUNICATION TRADITIONNELLE",
    desc: "Le comparatif complet : lequel est le plus efficace en 2025 ?",
    readTime: "10 min",
    intro: "Pendant des années, on comptait sur les flyers. En 2025, le consommateur est partout. La communication 360° crée une présence totale.",
    sections: [
      { title: "I. LE MODÈLE INTERACTIF", points: ["Traditionnel : Unidirectionnel", "360° : Dialogue intelligent basé sur la data", "Adaptation immédiate au marché"] },
      { title: "II. ROI & ANALYSE", points: ["Mesure précise des ventes", "Coûts optimisés par canal", "Fidélisation client continue"] }
    ]
  },
  {
    id: "c-6",
    title: "OUTILS & KPI DE PERFORMANCE",
    desc: "La stack technologique et les indicateurs pour piloter votre succès.",
    readTime: "11 min",
    intro: "Une communication 360° sans outils de mesure est une dépense, pas un investissement. Voici comment piloter votre performance.",
    sections: [
      { title: "I. LA STACK TECHNIQUE", points: ["Outils de gestion (ClickUp, HubSpot)", "Création et Vidéo (Figma, Adobe)", "Analytics (GA4, Looker Studio)"] },
      { title: "II. LES KPI MAÎTRES", points: ["Notoriété (Impressions, Reach)", "Conversion (Leads, Taux de vente)", "Rentabilité (ROAS, CPA)"] }
    ]
  }
];

const ResourceDetailPage = () => {
  const [openId, setOpenId] = useState<string | null>("c-1");

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header />
      
      <main className="pt-40 pb-32">
        {/* --- SECTION TITRE GÉANTE --- */}
        <section className="px-6 mb-24">
          <div className="container mx-auto max-w-6xl">
            <Link to="/ressources" className="flex items-center gap-2 text-sunuOrange font-black uppercase tracking-tighter mb-10 hover:translate-x-[-8px] transition-transform">
              <ArrowLeft size={24} /> Bibliothèque de ressources
            </Link>
            
            <div className="bg-white p-12 md:p-24 rounded-[4rem] border border-gray-100 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-sunuBlue/5 rounded-full"></div>
              <div className="relative z-10">
                <span className="bg-sunuBlue text-white px-8 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-8 inline-block">
                  Expertise Agence
                </span>
                <h1 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-10">
                  COMMUNICATION <br /> <span className="text-sunuOrange">360 DEGRÉS.</span>
                </h1>
                <p className="text-2xl text-gray-400 max-w-3xl leading-relaxed font-medium">
                  Maîtrisez l'art d'être présent partout, au bon moment, avec le bon message. 
                  Six analyses stratégiques signées <span className="text-sunuBlue">SUNULINK CONSULTING</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- GRILLE DES 6 CARTES SECTIONS --- */}
        <section className="px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-12">
              {commArticles.map((article) => (
                <div 
                  key={article.id}
                  className={`group bg-white rounded-[3rem] border-2 transition-all duration-700 ${
                    openId === article.id ? "border-sunuOrange shadow-2xl scale-[1.01]" : "border-transparent hover:border-gray-200 shadow-xl"
                  }`}
                >
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
                        <span className="text-gray-400 font-bold text-xs uppercase tracking-widest">Article Premium</span>
                      </div>
                      <h2 className="text-3xl md:text-5xl font-black text-gray-900 group-hover:text-sunuBlue transition-colors leading-tight uppercase italic">
                        {article.title}
                      </h2>
                      <p className="text-xl text-gray-500 mt-6 font-medium max-w-2xl">{article.desc}</p>
                    </div>
                    
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 ${
                      openId === article.id ? "bg-sunuOrange text-white rotate-180 shadow-lg shadow-sunuOrange/30" : "bg-gray-50 text-gray-300"
                    }`}>
                      <ChevronDown size={48} />
                    </div>
                  </div>

                  {openId === article.id && (
                    <div className="px-12 pb-20 md:px-24 md:pb-24 animate-in fade-in slide-in-from-bottom-10 duration-700">
                      <div className="h-px w-full bg-gray-100 mb-20"></div>
                      <div className="max-w-4xl">
                        <p className="text-2xl md:text-4xl text-gray-800 leading-[1.2] font-black mb-20 border-l-[12px] border-sunuOrange pl-12">
                          "{article.intro}"
                        </p>

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
                        
                        <div className="mt-20 p-12 bg-gray-900 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
                          <div>
                            <h5 className="text-2xl font-black mb-2 uppercase tracking-tighter">Besoin d'aller plus loin ?</h5>
                            <p className="text-gray-400 font-medium">Téléchargez le livre blanc complet sur cette thématique.</p>
                          </div>
                          <button className="bg-sunuOrange text-white px-10 py-5 rounded-full font-black hover:scale-105 transition-transform whitespace-nowrap">
                            TÉLÉCHARGER LE PDF
                          </button>
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
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <Globe size={800} className="absolute -top-96 -right-96" />
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-10 leading-none">
                  PRÊT À DOMINER <br /> VOTRE MARCHÉ ?
                </h2>
                <Link to="/contact" className="inline-flex items-center gap-6 bg-sunuOrange text-white px-16 py-8 rounded-full font-black text-2xl hover:bg-white hover:text-sunuBlue transition-all shadow-2xl">
                  PARLER À UN CONSULTANT <MousePointer2 size={32} />
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
