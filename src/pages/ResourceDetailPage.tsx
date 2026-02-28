import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ChevronDown, ChevronUp, ArrowLeft, Clock, Palette, 
  CheckCircle2, AlertCircle, Eye, Lightbulb, Target 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// --- STRUCTURE DES DONNÉES ---
interface Section {
  title: string;
  content: string[];
}

interface FullArticle {
  id: string;
  title: string;
  readTime: string;
  intro: string;
  sections: Section[];
  conclusion: string;
}

const brandingArticles: FullArticle[] = [
  {
    id: "art-1",
    title: "ARTICLE 1 — L’IMPORTANCE DE L’IDENTITÉ VISUELLE",
    readTime: "12 min",
    intro: "L’identité visuelle est bien plus qu’un simple logo. C’est l’ensemble des éléments graphiques qui permettent d’identifier une marque, de transmettre ses valeurs et de se différencier de la concurrence.",
    sections: [
      {
        title: "I. CRÉATION D’UNE IMAGE PROFESSIONNELLE ET CRÉDIBLE",
        content: [
          "Installe la confiance dès le premier regard.",
          "Reflète le sérieux et l’expertise de l’entreprise.",
          "Permet de justifier des tarifs premium par une image de qualité."
        ]
      },
      {
        title: "II. RECONNAISSANCE ET MÉMORISATION DE LA MARQUE",
        content: [
          "Un univers visuel cohérent permet d'être identifié instantanément.",
          "Facilite le rappel de la marque dans l'esprit du consommateur.",
          "Crée un lien émotionnel durable avec l'audience."
        ]
      },
      {
        title: "III. DIFFÉRENCIATION SUR UN MARCHÉ SATURÉ",
        content: [
          "Permet de sortir du lot face à des concurrents génériques.",
          "Affirme une personnalité unique et propre à l'entreprise.",
          "Attire la cible spécifique grâce à des codes visuels adaptés."
        ]
      }
    ],
    conclusion: "L’identité visuelle est le premier point de contact avec vos clients. Investir dans une image forte, c'est investir dans la pérennité de votre business."
  },
  {
    id: "art-2",
    title: "ARTICLE 2 — LES ÉLÉMENTS CLÉS D’UNE CHARTE GRAPHIQUE",
    readTime: "15 min",
    intro: "La charte graphique est le document de référence qui définit les règles d'utilisation des signes graphiques d'une marque.",
    sections: [
      {
        title: "I. LE LOGO ET SES DÉCLINAISONS",
        content: [
          "Le logo principal : l'élément central.",
          "Les variantes (noir et blanc, version simplifiée, icône seule).",
          "Les zones d'exclusion pour garantir la lisibilité."
        ]
      },
      {
        title: "II. LA PALETTE DE COULEURS",
        content: [
          "Couleurs primaires (dominantes) et secondaires (accentuation).",
          "Codes couleurs précis (HEX, RGB, CMJN) pour une reproduction fidèle.",
          "Signification psychologique des couleurs choisies."
        ]
      },
      {
        title: "III. LA TYPOGRAPHIE (POLICES DE CARACTÈRES)",
        content: [
          "Typographie de titre pour l'impact.",
          "Typographie de corps de texte pour la lisibilité.",
          "Hiérarchie visuelle claire."
        ]
      }
    ],
    conclusion: "Une charte graphique bien définie garantit la cohérence de votre communication sur tous vos supports, du digital au papier."
  },
  {
    id: "art-3",
    title: "ARTICLE 3 — CRÉER UN POSITIONNEMENT DE MARQUE UNIQUE",
    readTime: "18 min",
    intro: "Le positionnement est la place que votre marque occupe dans l'esprit des clients par rapport à vos concurrents.",
    sections: [
      {
        title: "I. ANALYSE DU MARCHÉ ET DE LA CONCURRENCE",
        content: [
          "Identifier les forces et faiblesses des acteurs actuels.",
          "Repérer les opportunités de différenciation non exploitées.",
          "Comprendre les standards du secteur pour mieux les dépasser."
        ]
      },
      {
        title: "II. DÉFINITION DE LA PROMESSE DE MARQUE",
        content: [
          "Quelle est la valeur unique que vous apportez ?",
          "Pourquoi un client devrait-il vous choisir vous plutôt qu'un autre ?",
          "Alignement entre la promesse et l'expérience réelle."
        ]
      }
    ],
    conclusion: "Un positionnement clair est la boussole de toute votre stratégie marketing et commerciale."
  },
  {
    id: "art-4",
    title: "ARTICLE 4 — LA PSYCHOLOGIE DES COULEURS EN BRANDING",
    readTime: "10 min",
    intro: "Les couleurs ne sont pas que des choix esthétiques, elles déclenchent des émotions et influencent les comportements d'achat.",
    sections: [
      {
        title: "I. SIGNIFICATION DES COULEURS PRINCIPALES",
        content: [
          "Bleu : Confiance, sérénité, technologie (ex: Institutions, Tech).",
          "Orange : Énergie, créativité, accessibilité (ex: Sunu Link).",
          "Noir : Luxe, élégance, autorité.",
          "Vert : Nature, croissance, santé."
        ]
      },
      {
        title: "II. IMPACT SUR LA CONVERSION",
        content: [
          "Utilisation des couleurs contrastées pour les appels à l'action (CTA).",
          "Cohérence entre la couleur et le secteur d'activité.",
          "Adaptation culturelle des couleurs (marché local vs international)."
        ]
      }
    ],
    conclusion: "Bien choisir vos couleurs permet de communiquer votre message sans dire un seul mot."
  },
  {
    id: "art-5",
    title: "ARTICLE 5 — ERREURS FRÉQUENTES DANS LA CRÉATION DE LOGO",
    readTime: "11 min",
    intro: "Un logo raté peut détruire la crédibilité d'une marque en quelques secondes.",
    sections: [
      {
        title: "I. LES PIÈGES DU DESIGN",
        content: [
          "Complexité excessive : un logo trop détaillé devient illisible en petite taille.",
          "Suivre les tendances éphémères : votre logo doit durer 10 ans, pas 6 mois.",
          "Mauvaise gestion des polices : l'utilisation de polices 'gadget' ou illisibles."
        ]
      },
      {
        title: "II. PROBLÈMES TECHNIQUES",
        content: [
          "Ne pas tester le rendu en noir et blanc.",
          "Oublier l'adaptabilité sur les icônes de réseaux sociaux (Favicons).",
          "Utiliser des images non vectorielles (pixellisation)."
        ]
      }
    ],
    conclusion: "La simplicité est la sophistication ultime en matière de logo."
  },
  {
    id: "art-6",
    title: "ARTICLE 6 — LE BRANDING SENSORIEL",
    readTime: "14 min",
    intro: "Le branding sensoriel va au-delà de la vue pour engager l'odorat, l'ouïe, le toucher et le goût.",
    sections: [
      {
        title: "I. ENGAGER TOUS LES SENS",
        content: [
          "Identité sonore : un jingle ou une musique d'attente spécifique.",
          "Identité olfactive : une odeur signature en boutique.",
          "Texture et toucher : le choix des papiers ou des matériaux produits."
        ]
      },
      {
        title: "II. AVANTAGES DU MULTI-SENSORIEL",
        content: [
          "Crée des souvenirs plus profonds et durables.",
          "Augmente le temps passé en point de vente.",
          "Renforce l'attachement émotionnel à la marque."
        ]
      }
    ],
    conclusion: "En 2025, les marques les plus puissantes sont celles qui se ressentent physiquement."
  }
];

const ResourceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  // État pour gérer quel article est ouvert (un seul à la fois pour la lisibilité)
  const [activeArticleId, setActiveArticleId] = useState<string | null>("art-1");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* En-tête de la catégorie */}
        <section className="bg-gradient-to-br from-sunuBlue/5 to-sunuOrange/5 py-16 px-6 border-b border-gray-100">
          <div className="container mx-auto max-w-4xl">
            <Link to="/ressources" className="inline-flex items-center gap-2 text-sunuOrange hover:text-sunuBlue font-bold mb-6 transition-colors">
              <ArrowLeft size={20} /> Retour aux catégories
            </Link>
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-sunuOrange rounded-2xl flex items-center justify-center text-white shadow-lg shadow-sunuOrange/20">
                <Palette size={40} />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase">
                  Branding & Identité Visuelle
                </h1>
                <p className="text-gray-600 mt-2 text-lg">
                  L'ADN de votre marque : stratégie de positionnement et univers graphique premium.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Liste des Articles en Accordéon */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-black text-gray-800 mb-10 flex items-center gap-3">
              <Lightbulb className="text-sunuOrange" /> TOUS LES ARTICLES DE CETTE SECTION
            </h2>

            <div className="space-y-6">
              {brandingArticles.map((article) => (
                <div 
                  key={article.id} 
                  className={`border-2 rounded-3xl overflow-hidden transition-all duration-300 ${
                    activeArticleId === article.id 
                    ? "border-sunuOrange shadow-xl shadow-sunuOrange/5" 
                    : "border-gray-100 hover:border-gray-200 shadow-sm"
                  }`}
                >
                  {/* Bouton de l'accordéon */}
                  <button 
                    onClick={() => setActiveArticleId(activeArticleId === article.id ? null : article.id)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left bg-white"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 uppercase tracking-widest">
                          <Clock size={10} /> {article.readTime}
                        </span>
                      </div>
                      <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tight transition-colors ${
                        activeArticleId === article.id ? "text-sunuOrange" : "text-gray-800"
                      }`}>
                        {article.title}
                      </h3>
                    </div>
                    <div className={`ml-4 p-2 rounded-full transition-colors ${
                      activeArticleId === article.id ? "bg-sunuOrange text-white" : "bg-gray-50 text-gray-400"
                    }`}>
                      {activeArticleId === article.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                  </button>

                  {/* Contenu Déroulant (Texte Complet) */}
                  {activeArticleId === article.id && (
                    <div className="px-6 pb-10 md:px-12 md:pb-12 bg-white animate-fade-in">
                      <div className="w-16 h-1 bg-sunuOrange mb-8 rounded-full"></div>
                      
                      {/* Intro */}
                      <div className="mb-10">
                        <p className="text-xl text-gray-700 leading-relaxed font-medium italic">
                          "{article.intro}"
                        </p>
                      </div>

                      {/* Sections Dynamiques */}
                      <div className="space-y-12">
                        {article.sections.map((section, sIdx) => (
                          <div key={sIdx} className="relative pl-6 border-l-2 border-gray-100">
                            <h4 className="text-lg font-black text-sunuBlue mb-4 flex items-center gap-2 uppercase tracking-wide">
                              <Target className="text-sunuOrange w-4 h-4" /> {section.title}
                            </h4>
                            <ul className="space-y-4">
                              {section.content.map((point, pIdx) => (
                                <li key={pIdx} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                                  <CheckCircle2 className="text-sunuOrange w-5 h-5 mt-0.5 flex-shrink-0" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Conclusion */}
                      <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                        <h5 className="font-black text-gray-900 mb-2 flex items-center gap-2">
                          <AlertCircle className="text-sunuOrange w-5 h-5" /> EN RÉSUMÉ
                        </h5>
                        <p className="text-gray-700 leading-relaxed">
                          {article.conclusion}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto max-w-4xl px-6">
          <div className="bg-sunuBlue rounded-[2rem] p-10 text-center text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sunuOrange/10 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-110"></div>
            <h2 className="text-3xl font-black mb-4 relative z-10">BESOIN D'UNE IDENTITÉ FORTE ?</h2>
            <p className="text-sunuCyan font-medium mb-8 relative z-10">Nos experts SUNULINK CONSULTING créent pour vous un univers unique.</p>
            <Link to="/contact" className="inline-block bg-sunuOrange text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-sunuBlue transition-all relative z-10">
              DÉMARRER MON PROJET
            </Link>
          </div>
        </section>
      </main>

      <Footer /> {/* Footer affichant SUNULINK CONSULTING */}
    </div>
  );
};

export default ResourceDetailPage;
