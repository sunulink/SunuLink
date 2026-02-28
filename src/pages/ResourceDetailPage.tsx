import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ChevronDown, ChevronUp, ArrowLeft, Clock, Sparkles, 
  BookOpen, Search, Palette, Share2, Cpu, Mail, Target 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// --- TYPES POUR LE CONTENU RICHE ---
interface ArticleSection {
  subtitle: string;
  points: string[];
}

interface FullArticle {
  id: string;
  title: string;
  readTime: string;
  introduction: string;
  sections: ArticleSection[];
  conclusion: string;
}

interface CategoryContent {
  title: string;
  icon: any;
  color: string;
  mainAnalysis: {
    summary: string;
    fullText: string;
  };
  articles: FullArticle[];
}

const categoriesData: Record<string, CategoryContent> = {
  "tendances-innovations": {
    title: "Tendances & Innovations",
    icon: Sparkles,
    color: "from-yellow-500 to-orange-500",
    mainAnalysis: {
      summary: "Analyse stratégique des mutations du marché en 2025.",
      fullText: "En 2025, le paysage du business est redéfini par une convergence technologique sans précédent. L'IA n'est plus une option mais le moteur central de l'efficacité, tandis que le Web 3 commence à transformer la propriété numérique. Pour les entreprises, l'enjeu est de concilier cette hyper-technologie avec une demande croissante d'authenticité et de durabilité, particulièrement sur le marché africain en pleine ébullition digitale."
    },
    articles: [
      {
        id: "t-1",
        title: "ARTICLE 1 — LES TENDANCES MARKETING 2025",
        readTime: "15 min",
        introduction: "Le marketing évolue constamment. Comprendre les tendances 2025 permet de rester compétitif et innovant.",
        sections: [
          {
            subtitle: "I. MARKETING DIGITAL HYPER-PERSONNALISÉ",
            points: ["Utilisation de données clients pour messages ultra-ciblés", "Automatisation selon le comportement", "Exemples : recommandations personnalisées, emails dynamiques"]
          },
          {
            subtitle: "II. CONTENU COURT & IMMERSIF",
            points: ["Formats Reels, Shorts, TikTok pour capter l’attention", "Vidéos interactives et immersives", "Importance de l’authenticité"]
          },
          {
            subtitle: "III. IA ET AUTOMATISATION",
            points: ["IA générative pour création de contenu et chatbots", "Analyse prédictive des ventes", "Optimisation de l'expérience client 24/7"]
          },
          {
            subtitle: "IV. COMMERCE SOCIAL & INFLUENCE",
            points: ["Vente directe via plateformes sociales", "Micro et macro-influenceurs", "Contenu UGC pour la crédibilité"]
          },
          {
            subtitle: "V. MARKETING DURABLE ET RESPONSABLE",
            points: ["Sensibilisation à l’écologie", "Communication des valeurs et engagements", "Impact sur la fidélisation"]
          },
          {
            subtitle: "VI. ANALYSES ET DATA-DRIVEN MARKETING",
            points: ["Décisions basées sur les données", "Tableaux de bord et KPI", "Ajustement en temps réel pour le ROI"]
          }
        ],
        conclusion: "Les tendances 2025 combinent technologie et responsabilité pour créer des expériences client uniques."
      },
      {
        id: "t-2",
        title: "ARTICLE 2 — NOUVELLES TECHNOLOGIES DANS LE BUSINESS",
        readTime: "12 min",
        introduction: "Les nouvelles technologies transforment le business en offrant innovation et efficacité accrue.",
        sections: [
          {
            subtitle: "I. INTELLIGENCE ARTIFICIELLE (IA)",
            points: ["Automatisation des tâches répétitives", "Chatbots pour le service client", "IA générative pour design et marketing"]
          },
          {
            subtitle: "II. BLOCKCHAIN ET CRYPTO-MONNAIES",
            points: ["Transactions sécurisées et traçabilité", "Gestion via smart contracts", "Opportunités de paiements innovants"]
          },
          {
            subtitle: "III. INTERNET DES OBJETS (IoT)",
            points: ["Suivi des stocks en temps réel", "Produits connectés personnalisés", "Optimisation de l'efficacité opérationnelle"]
          },
          {
            subtitle: "IV. RÉALITÉ AUGMENTÉE (AR) & VIRTUELLE (VR)",
            points: ["Expériences immersives de formation", "Visualisation des produits avant achat", "Marketing expérientiel"]
          },
          {
            subtitle: "V. CLOUD ET INFRASTRUCTURE NUMÉRIQUE",
            points: ["Accès aux données universel", "Collaboration fluide", "Sécurité et scalabilité"]
          }
        ],
        conclusion: "Adopter ces innovations permet de se positionner comme leader dans son secteur."
      },
      // ... Les 8 autres articles de la catégorie 19 suivront le même schéma ici
    ]
  }
  // Les autres catégories seront ajoutées ici
};

const ResourceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);
  const [openArticleId, setOpenArticleId] = useState<string | null>(null);

  const category = slug ? categoriesData[slug] : null;

  if (!category) return <div>Catégorie introuvable.</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link to="/ressources" className="flex items-center gap-2 text-sunuOrange mb-8 font-bold">
            <ArrowLeft size={20} /> Retour
          </Link>

          <div className={`p-8 rounded-3xl bg-gradient-to-br ${category.color} text-white shadow-xl mb-10`}>
            <div className="flex items-center gap-4 mb-4">
              <category.icon size={48} />
              <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">{category.title}</h1>
            </div>
          </div>

          {/* SECTION ANALYSE DÉROULANTE */}
          <div className="bg-white rounded-2xl border-2 border-sunuBlue/20 overflow-hidden mb-12 shadow-sm">
            <button 
              onClick={() => setIsAnalysisOpen(!isAnalysisOpen)}
              className="w-full flex items-center justify-between p-6 bg-sunuBlue/5 hover:bg-sunuBlue/10 transition-colors"
            >
              <h2 className="text-xl font-black text-sunuBlue uppercase">Analyse Stratégique de la catégorie</h2>
              {isAnalysisOpen ? <ChevronUp className="text-sunuOrange" /> : <ChevronDown className="text-sunuOrange" />}
            </button>
            {isAnalysisOpen && (
              <div className="p-8 text-gray-700 leading-relaxed border-t border-sunuBlue/10 animate-fade-in">
                <p className="font-bold text-lg mb-4 text-sunuOrange">{category.mainAnalysis.summary}</p>
                <div className="whitespace-pre-line">{category.mainAnalysis.fullText}</div>
              </div>
            )}
          </div>

          {/* LISTE DES ARTICLES DÉROULANTS */}
          <h2 className="text-2xl font-black mb-6 text-gray-800 uppercase tracking-wide">Articles détaillés</h2>
          <div className="space-y-4">
            {category.articles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <button 
                  onClick={() => setOpenArticleId(openArticleId === article.id ? null : article.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <h3 className="font-black text-gray-900 group-hover:text-sunuOrange transition-colors">{article.title}</h3>
                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 uppercase tracking-widest font-bold">
                      <Clock size={12} /> {article.readTime} de lecture
                    </div>
                  </div>
                  {openArticleId === article.id ? <ChevronUp className="text-sunuOrange" /> : <ChevronDown className="text-sunuOrange" />}
                </button>

                {openArticleId === article.id && (
                  <div className="p-8 border-t border-gray-100 bg-white animate-slide-down">
                    <p className="italic text-gray-600 mb-8 border-l-4 border-sunuOrange pl-4">{article.introduction}</p>
                    
                    <div className="space-y-10">
                      {article.sections.map((section, idx) => (
                        <div key={idx}>
                          <h4 className="font-black text-sunuBlue mb-4 text-lg">{section.subtitle}</h4>
                          <ul className="grid grid-cols-1 gap-3">
                            {section.points.map((point, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-3 text-gray-700">
                                <span className="text-sunuOrange mt-1">•</span> {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-200">
                      <p className="font-bold text-gray-900 uppercase text-sm">Conclusion</p>
                      <p className="text-gray-700 mt-2">{article.conclusion}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer /> {/* Ici sera affiché SUNULINK CONSULTING */}
    </div>
  );
};

export default ResourceDetailPage;
