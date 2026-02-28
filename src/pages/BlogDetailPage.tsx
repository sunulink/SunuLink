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

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
            isExpanded ? 'bg-gray-100 text-sunuBlue' : 'bg-sunuOrange text-white hover:bg-sunuBlue'
          }`}
        >
          {isExpanded ? "Réduire" : "Lire l'analyse"} 
          <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
};

// --- DATA : LES 20 CATÉGORIES AVEC ARTICLES RÉDIGÉS PAR LES EXPERTS DU CABINET ---
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
        description: "Dans le cabinet, nous voyons trop de marques célébrer la vanité. Voici comment nous isolons les KPIs qui impactent réellement votre chiffre d'affaires.", 
        publishedDate: "12 Fév 2026", 
        readTime: "6 min", 
        featured: true,
        content: "Notre approche chez Sunu Link est simple : si une métrique ne peut pas être liée à une conversion ou à une intention d'achat, c'est du bruit. Nous recommandons de segmenter vos rapports par tunnel de vente."
      },
      { id: "cm-2", title: "Le pouvoir de l'A/B Testing en environnement restreint", description: "Pas besoin de 100 000 visiteurs pour tester. Nos méthodes pour optimiser vos tunnels avec de petits volumes.", publishedDate: "05 Fév 2026", readTime: "8 min" }
    ]
  },

  "tendances-actualites": {
    icon: TrendingUp,
    color: "from-sunuBlue to-sunuCyan",
    title: "Tendances & Actualités",
    description: "Décryptage des mutations du marché pour anticiper demain.",
    articles: [
      { 
        id: "ta-1", 
        title: "2026 : L'année où l'influenceur devient un média à part entière", 
        description: "L'analyse de nos consultants sur la professionnalisation du marché de l'influence en Afrique de l'Ouest.", 
        publishedDate: "10 Fév 2026", 
        readTime: "10 min", 
        featured: true,
        content: "Nous observons un basculement : les marques ne cherchent plus une simple visibilité, mais une caution éditoriale. Le cabinet accompagne cette transition vers des contrats de partenariat long terme."
      }
    ]
  },

  "strategies-communication": {
    icon: Megaphone,
    color: "from-purple-500 to-pink-500",
    title: "Stratégies de Communication",
    description: "L'art de la cohérence pour bâtir des marques mémorables.",
    articles: [
      { 
        id: "sc-1", 
        title: "Pourquoi votre stratégie échoue au stade de l'exécution", 
        description: "Le fossé entre le document stratégique et la réalité terrain. Comment nous aidons nos clients à rester 'alignés'.", 
        publishedDate: "28 Jan 2026", 
        readTime: "12 min", 
        featured: true 
      },
      { id: "sc-2", title: "Communication 360° : Le mythe de l'omniprésence", description: "Il vaut mieux être excellent sur deux canaux que médiocre sur sept. Notre méthode de sélection de canaux.", publishedDate: "15 Jan 2026", readTime: "7 min" }
    ]
  },

  "marketing-digital-seo": {
    icon: Target,
    color: "from-green-500 to-emerald-500",
    title: "Marketing Digital & SEO",
    description: "Dominer les moteurs de recherche pour capter l'intention.",
    articles: [
      { id: "md-1", title: "SGE et l'avenir du SEO : Ce que nous testons déjà", description: "L'arrivée de l'IA dans Google change la donne. Nos premiers retours d'expérience sur la recherche générative.", publishedDate: "02 Fév 2026", readTime: "15 min", featured: true },
      { id: "md-2", title: "Le SEO local : La mine d'or oubliée des PME", description: "Pourquoi optimiser votre fiche Google Business est plus rentable qu'une campagne Ads.", publishedDate: "20 Jan 2026", readTime: "9 min" }
    ]
  },

  "reseaux-sociaux": {
    icon: Users,
    color: "from-blue-500 to-indigo-500",
    title: "Réseaux Sociaux",
    description: "Transformer l'audience en communauté engagée.",
    articles: [
      { id: "rs-1", title: "TikTok pour le B2B : Une opportunité sous-estimée", description: "Comment nous avons aidé un cabinet de conseil à générer des leads via des formats courts et authentiques.", publishedDate: "14 Fév 2026", readTime: "8 min", featured: true },
      { id: "rs-2", title: "LinkedIn Ads : Le guide de survie budgétaire", description: "Évitez de gaspiller votre budget avec nos techniques de ciblage par comptes stratégiques (ABM).", publishedDate: "05 Jan 2026", readTime: "11 min" }
    ]
  },

  "branding-identite": {
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    title: "Branding & Identité Visuelle",
    description: "Incarner vos valeurs à travers chaque pixel.",
    articles: [
      { id: "bi-1", title: "Le 'Rebranding' ne sauvera pas un mauvais produit", description: "Une réflexion sur le rôle profond de la marque. Changer de logo n'est que la surface de notre travail.", publishedDate: "18 Jan 2026", readTime: "10 min", featured: true },
      { id: "bi-2", title: "L'impact psychologique des typographies", description: "Comment le choix d'une police peut modifier la perception de votre prix par vos clients.", publishedDate: "10 Jan 2026", readTime: "6 min" }
    ]
  },

  "communication-africaine": {
    icon: Globe,
    color: "from-amber-500 to-orange-500",
    title: "Communication Africaine",
    description: "Savoir parler au cœur des marchés locaux.",
    articles: [
      { id: "ca-1", title: "Adapter n'est pas traduire : Les codes de la Com au Sénégal", description: "Analyse des spécificités culturelles et linguistiques pour une communication impactante à Dakar.", publishedDate: "01 Fév 2026", readTime: "14 min", featured: true },
      { id: "ca-2", title: "Le Mobile Money comme levier marketing", description: "Comment intégrer les habitudes de paiement dans vos campagnes digitales.", publishedDate: "22 Jan 2026", readTime: "9 min" }
    ]
  },

  "entrepreneuriat-business": {
    icon: Briefcase,
    color: "from-teal-500 to-cyan-500",
    title: "Entrepreneuriat & Business",
    description: "Accélérer la croissance des visionnaires.",
    articles: [
      { id: "eb-1", title: "Scaling : Quand la croissance devient un danger", description: "Les conseils de notre pôle stratégie pour structurer vos équipes avant l'explosion du CA.", publishedDate: "12 Jan 2026", readTime: "13 min", featured: true },
      { id: "eb-2", title: "Lever des fonds : Ce que les investisseurs ne vous disent pas", description: "Préparer son deck et sa communication financière avec un angle stratégique.", publishedDate: "05 Jan 2026", readTime: "16 min" }
    ]
  },

  "innovation-ia": {
    icon: Sparkles,
    color: "from-violet-500 to-purple-500",
    title: "Innovation & IA",
    description: "L'IA au service de l'humain, pas en remplacement.",
    articles: [
      { id: "ia-1", title: "IA au Cabinet : Comment nous avons réduit nos délais de production de 40%", description: "Transparence totale sur nos outils internes et comment ils profitent directement à nos clients.", publishedDate: "20 Fév 2026", readTime: "9 min", featured: true },
      { id: "ia-2", title: "Personnalisation de masse : Le futur de l'emailing", description: "Utiliser l'IA pour envoyer 1000 messages uniques et pertinents.", publishedDate: "15 Jan 2026", readTime: "11 min" }
    ]
  },

  "success-stories": {
    icon: Award,
    color: "from-red-500 to-orange-500",
    title: "Success Stories",
    description: "Des preuves concrètes de notre expertise.",
    articles: [
      { id: "ss-1", title: "Projet 'Emergence' : +250% de leads en 4 mois", description: "Découvrez les coulisses de la stratégie mise en place pour un leader de l'immobilier.", publishedDate: "05 Fév 2026", readTime: "15 min", featured: true },
      { id: "ss-2", title: "Crise de réputation : Le sauvetage d'une marque agroalimentaire", description: "Comment notre gestion du 'Damage Control' a retourné l'opinion publique.", publishedDate: "15 Jan 2026", readTime: "20 min" }
    ]
  },

  "interviews-portraits": {
    icon: MessageSquare,
    color: "from-indigo-500 to-blue-500",
    title: "Interviews & Portraits",
    description: "Conversations avec ceux qui font bouger les lignes.",
    articles: [
      { id: "ip-1", title: "Portrait : La vision du fondateur de Sunu Link", description: "Comprendre la philosophie du cabinet et ses ambitions pour le digital en Afrique.", publishedDate: "01 Jan 2026", readTime: "12 min", featured: true }
    ]
  },

  "tutoriels-guides": {
    icon: BookOpen,
    color: "from-cyan-500 to-blue-500",
    title: "Tutoriels & Guides",
    description: "La transmission du savoir-faire Sunu Link.",
    articles: [
      { id: "tg-1", title: "Checklist : Lancer sa campagne Meta Ads sans erreur", description: "Le document interne que nos consultants utilisent pour chaque lancement client.", publishedDate: "10 Fév 2026", readTime: "25 min", featured: true },
      { id: "tg-2", title: "Guide de rédaction : Écrire pour être lu (et vendu)", description: "Les bases du copywriting appliquées aux réseaux sociaux.", publishedDate: "25 Jan 2026", readTime: "18 min" }
    ]
  },

  "communication-360-strategie-globale": {
    icon: Target,
    color: "from-sunuBlue to-sunuCyan",
    title: "Communication 360°",
    description: "L'harmonie parfaite entre tous vos points de contact.",
    articles: [
      { id: "c3-1", title: "L'omnicanalité : Unifier l'expérience client", description: "Pourquoi un client doit ressentir la même émotion en magasin et sur votre site web.", publishedDate: "08 Fév 2026", readTime: "14 min", featured: true }
    ]
  },

  "publicite-digitale-strategies-media": {
    icon: Megaphone,
    color: "from-red-500 to-orange-500",
    title: "Publicité & Média Buying",
    description: "Investir intelligemment pour récolter massivement.",
    articles: [
      { id: "pd-1", title: "Média Buying : Pourquoi l'algorithme est plus malin que vous", description: "Pourquoi nous passons de plus en plus au 'Broad Targeting' pour laisser l'IA optimiser vos coûts.", publishedDate: "12 Fév 2026", readTime: "10 min", featured: true }
    ]
  },

  "strategie-contenu-creation-editoriale": {
    icon: MessageSquare,
    color: "from-purple-500 to-pink-500",
    title: "Création de Contenu",
    description: "Donner une voix forte à vos idées.",
    articles: [
      { id: "ce-1", title: "Le Storytelling n'est pas un conte de fées", description: "Comment structurer un récit qui pousse à l'action immédiate.", publishedDate: "05 Fév 2026", readTime: "8 min", featured: true }
    ]
  },

  "design-graphique-branding-visuel": {
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    title: "Design Graphique",
    description: "L'esthétique au service de la performance.",
    articles: [
      { id: "dg-1", title: "Design de conversion : Pourquoi le moche vend parfois mieux", description: "Une analyse sur l'efficacité visuelle vs l'esthétisme pur.", publishedDate: "02 Fév 2026", readTime: "7 min", featured: true }
    ]
  },

  "audiovisuel-motion-design": {
    icon: Sparkles,
    color: "from-indigo-500 to-blue-500",
    title: "Audiovisuel & Motion",
    description: "Capter l'attention en une fraction de seconde.",
    articles: [
      { id: "av-1", title: "Les 3 premières secondes : La bataille du Scroll", description: "Comment nous produisons des vidéos pour stopper le défilement compulsif.", publishedDate: "15 Jan 2026", readTime: "5 min", featured: true }
    ]
  },

  "evenementiel-experience-client": {
    icon: Users,
    color: "from-amber-500 to-orange-500",
    title: "Événementiel",
    description: "Créer des souvenirs indélébiles.",
    articles: [
      { id: "ev-1", title: "Événements hybrides : Le meilleur des deux mondes", description: "Retour sur l'organisation d'un salon mêlant présence physique et VR.", publishedDate: "20 Jan 2026", readTime: "12 min", featured: true }
    ]
  },

  "relations-publiques-communication-institutionnelle": {
    icon: Briefcase,
    color: "from-teal-500 to-cyan-500",
    title: "Communication Corporate",
    description: "Bâtir la confiance avec vos parties prenantes.",
    articles: [
      { id: "rp-1", title: "Le CEO Branding : Incarner l'entreprise", description: "Pourquoi le dirigeant est aujourd'hui le premier actif de communication.", publishedDate: "05 Jan 2026", readTime: "11 min", featured: true }
    ]
  },

  "communication-crise-reputation": {
    icon: Award,
    color: "from-gray-600 to-gray-800",
    title: "Communication de Crise",
    description: "Protéger votre actif le plus précieux : votre nom.",
    articles: [
      { id: "cc-1", title: "Bad Buzz : Les 2 premières heures sont décisives", description: "Notre protocole d'intervention d'urgence pour éteindre l'incendie avant qu'il ne devienne viral.", publishedDate: "10 Jan 2026", readTime: "15 min", featured: true }
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
        {/* HERO RÉDUIT */}
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

        {/* ARTICLES SECTION */}
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

        {/* CTA SECTION - COULEUR BLEUE ET BOUTON UNIQUE */}
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
              
              {/* Éléments de design subtils en fond */}
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
