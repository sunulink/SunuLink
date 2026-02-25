import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Lightbulb, TrendingUp, Megaphone, Target, Users, Palette,
  Globe, Briefcase, Sparkles, Award, MessageSquare, BookOpen,
  ArrowLeft, Clock, Calendar, User, BarChart3, Brain,
  PenTool, CalendarCheck, ShoppingCart, Search, ChevronDown,
  CheckCircle2, Zap, AlertCircle
} from "lucide-react";

// --- TYPES ENRICHIS ---
interface BlogArticle {
  id: string;
  title: string;
  description: string;
  readTime: string;
  publishedDate: string;
  author: string;
  featured?: boolean;
  articleSlug?: string;
  // Ajouts pour les fonctionnalités d'expertise
  content?: string; 
  points?: string[]; 
}

// --- COMPOSANT ARTICLE CARD INTERACTIF ---
const ArticleCard = ({ article, isFeatured = false }: { article: BlogArticle; isFeatured?: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`group bg-white transition-all duration-500 rounded-[2rem] overflow-hidden border ${
      isExpanded ? 'ring-2 ring-sunuOrange shadow-2xl' : 'border-gray-100 shadow-sm hover:shadow-md'
    } ${isFeatured ? 'md:col-span-2 border-l-4 border-l-sunuOrange' : ''}`}>
      
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.publishedDate}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
          {isFeatured && <span className="text-sunuOrange bg-sunuOrange/10 px-2 py-0.5 rounded">Expertise Premium</span>}
        </div>
        
        <h3 className={`${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'} font-black text-gray-900 mb-4 leading-tight group-hover:text-sunuOrange transition-colors`}>
          {article.title}
        </h3>
        
        <p className="text-gray-600 mb-6 line-clamp-3">
          {article.description}
        </p>

        {/* CONTENU DÉPLOYABLE (EXPERTISE) */}
        <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[1200px] opacity-100 mb-8' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-6 border-t border-gray-100 space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-sunuBlue">
              <h4 className="flex items-center gap-2 text-sunuBlue font-bold mb-2">
                <Zap className="w-4 h-4" /> Analyse de l'expert Sunu Link
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed italic">
                {article.content || "Cette analyse approfondie détaille les leviers stratégiques et les retours sur expérience de nos consultants pour ce sujet spécifique."}
              </p>
            </div>
            {article.points && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {article.points.map((p, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> {p}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
            isExpanded ? 'bg-gray-100 text-gray-900' : 'bg-sunuBlue text-white hover:bg-sunuOrange shadow-lg shadow-sunuBlue/20'
          }`}
        >
          {isExpanded ? "Réduire l'analyse" : "Consulter l'expertise"} 
          <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
};

// --- DATA MAPPING (PARTIE 1/4) ---
const blogCategoriesData: Record<string, {
  title: string;
  icon: any;
  color: string;
  description: string;
  articles: BlogArticle[];
}> = {
  "conseils-marketing": {
    title: "Conseils & Astuces Marketing",
    icon: Lightbulb,
    color: "from-sunuOrange to-yellow-500",
    description: "Des astuces pratiques pour améliorer votre stratégie marketing au quotidien",
    articles: [
      {
        id: "1",
        title: "10 astuces pour booster votre engagement sur les réseaux sociaux",
        description: "Découvrez des techniques simples mais efficaces pour augmenter l'engagement de votre communauté",
        content: "L'engagement en 2026 ne se mesure plus aux likes, mais au temps passé et aux partages en DM. Une stratégie de 'micro-conversations' peut augmenter votre portée organique de 40%.",
        points: ["Réponse ultra-rapide aux commentaires", "Sondages en story", "Contenu généré par les utilisateurs", "Live streaming hebdomadaire"],
        readTime: "8 min", publishedDate: "5 Décembre 2025", author: "Sunu Link Consulting", featured: true
      },
      { id: "2", title: "Comment créer du contenu viral en 2025", description: "Les secrets des contenus qui se partagent massivement", readTime: "10 min", publishedDate: "1 Décembre 2025", author: "Sunu Link Consulting" },
      { id: "3", title: "Optimiser votre budget marketing : guide pratique", description: "Maximisez votre ROI avec ces conseils de gestion budgétaire", readTime: "12 min", publishedDate: "28 Novembre 2025", author: "Sunu Link Consulting" }
    ]
  },
  "tendances-actualites": {
    title: "Tendances & Actualités",
    icon: TrendingUp,
    color: "from-sunuBlue to-cyan-500",
    description: "Restez informé des dernières tendances en communication et marketing digital",
    articles: [
      {
        id: "ta-1",
        title: "Les tendances marketing à suivre en 2025",
        description: "Tour d'horizon des innovations qui vont transformer le marketing cette année",
        content: "L'intelligence artificielle générative et le commerce conversationnel dominent le paysage. Les marques qui n'adoptent pas une approche 'data-driven' perdront 20% de part de marché d'ici 2027.",
        points: ["IA personnalisée", "Recherche vocale", "Marketing d'influence local", "Éco-responsabilité affichée"],
        readTime: "15 min", publishedDate: "8 Décembre 2025", author: "Sunu Link Consulting", featured: true
      },
      { id: "ta-2", title: "L'essor du commerce social en Afrique", description: "Comment les réseaux sociaux révolutionnent le e-commerce africain", readTime: "10 min", publishedDate: "3 Décembre 2025", author: "Sunu Link Consulting" }
    ]
  },
  "strategies-communication": {
    title: "Stratégies de Communication",
    icon: Megaphone,
    color: "from-purple-500 to-pink-500",
    description: "Apprenez à construire des stratégies de communication efficaces et percutantes",
    articles: [
      {
        id: "sc-1",
        title: "Construire une stratégie de communication 360° efficace",
        description: "Guide complet pour une approche globale et cohérente",
        content: "Une stratégie 360° n'est pas simplement d'être partout, c'est d'être cohérent partout. L'alignement entre le message offline et l'expérience digitale est le premier facteur de confiance.",
        points: ["Audit de marque", "Ciblage omnicanal", "Plan de contenu unifié", "Mesure du ROI global"],
        readTime: "20 min", publishedDate: "6 Décembre 2025", author: "Sunu Link Consulting", featured: true
      },
      { id: "sc-2", title: "Communication de crise : comment réagir efficacement", description: "Les bonnes pratiques pour gérer une crise de réputation", readTime: "12 min", publishedDate: "30 Novembre 2025", author: "Sunu Link Consulting" }
    ]
  },
  "marketing-digital-seo": {
    title: "Marketing Digital & SEO",
    icon: Target,
    color: "from-green-500 to-emerald-500",
    [cite_start]description: "Optimisez votre présence en ligne et améliorez votre référencement naturel[cite: 1].",
    articles: [
      {
        id: "1",
        [cite_start]title: "SEO en 2025 : les nouvelles règles du jeu [cite: 1]",
        [cite_start]description: "Comment adapter votre stratégie SEO aux dernières mises à jour Google[cite: 1].",
        content: "Le SEO moderne ne concerne plus seulement les mots-clés, mais l'intention de recherche et l'expérience utilisateur (SGE). Google privilégie désormais les contenus qui répondent directement aux questions complexes des utilisateurs.",
        points: ["Search Generative Experience (SGE)", "Core Web Vitals", "Autorité thématique", "Optimisation pour la recherche vocale"],
        readTime: "18 min", publishedDate: "7 Décembre 2025", author: "Sunu Link Consulting", featured: true
      },
      [cite_start]{ id: "2", title: "Google Ads vs Meta Ads : quel canal choisir ? [cite: 1][cite_start]", description: "Comparatif détaillé pour optimiser votre budget publicitaire[cite: 1].", readTime: "14 min", publishedDate: "2 Décembre 2025", author: "Sunu Link Consulting" }
    ]
  },
  "reseaux-sociaux": {
    title: "Réseaux Sociaux",
    icon: Users,
    color: "from-blue-500 to-indigo-500",
    [cite_start]description: "Maîtrisez les réseaux sociaux et développez votre communauté en ligne[cite: 1].",
    articles: [
      {
        id: "1",
        [cite_start]title: "TikTok pour les entreprises : guide complet [cite: 1]",
        [cite_start]description: "Comment utiliser TikTok pour développer votre marque en Afrique[cite: 1].",
        content: "En Afrique, TikTok est devenu un moteur de recherche pour la Gen Z. Une stratégie de contenu authentique et 'lo-fi' performe mieux que des publicités léchées et impersonnelles.",
        points: ["Utilisation des sons tendance locaux", "Storytelling authentique", "Partenariats avec des micro-influenceurs", "Social Selling"],
        readTime: "16 min", publishedDate: "9 Décembre 2025", author: "Sunu Link Consulting", featured: true
      },
      [cite_start]{ id: "2", title: "LinkedIn : optimiser votre profil entreprise [cite: 1][cite_start]", description: "Les secrets d'une page LinkedIn qui génère des leads[cite: 1].", readTime: "10 min", publishedDate: "4 Décembre 2025", author: "Sunu Link Consulting" },
      [cite_start]{ id: "3", title: "Instagram Reels : stratégies qui fonctionnent [cite: 1][cite_start]", description: "Créer des Reels engageants pour votre audience[cite: 1].", readTime: "8 min", publishedDate: "29 Novembre 2025", author: "Sunu Link Consulting" }
    ]
  },
  "branding-identite": {
    title: "Branding & Identité Visuelle",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    [cite_start]description: "Construisez une marque forte et une identité visuelle mémorable[cite: 1].",
    articles: [
      {
        id: "1",
        [cite_start]title: "Créer une identité de marque mémorable [cite: 1]",
        [cite_start]description: "Les étapes clés pour construire une marque qui marque les esprits[cite: 1].",
        content: "Votre marque n'est pas ce que vous dites d'elle, c'est ce que vos clients disent de vous quand vous n'êtes pas là. L'identité visuelle doit refléter des valeurs profondes et une promesse unique.",
        points: ["Définition de la mission", "Alignement visuel et verbal", "Cohérence sur tous les supports", "Expérience émotionnelle"],
        readTime: "14 min", publishedDate: "5 Décembre 2025", author: "Sunu Link Consulting", featured: true
      },
      [cite_start]{ id: "2", title: "Refonte de marque : quand et comment la faire ? [cite: 1][cite_start]", description: "Guide pour réussir votre rebranding[cite: 1].", readTime: "12 min", publishedDate: "27 Novembre 2025", author: "Sunu Link Consulting" }
    ]
  },
  "communication-africaine": {
    title: "Communication Africaine",
    icon: Globe,
    color: "from-amber-500 to-orange-500",
    [cite_start]description: "Focus sur les spécificités de la communication sur le continent africain[cite: 1].",
    articles: [
      {
        id: "1",
        [cite_start]title: "Le marketing digital en Afrique : état des lieux 2025 [cite: 1]",
        [cite_start]description: "Panorama du paysage digital africain et ses opportunités[cite: 1].",
        content: "Le mobile-first n'est plus une option mais la norme absolue. L'interopérabilité des systèmes de paiement et la pénétration de la 5G ouvrent de nouvelles perspectives pour le e-commerce transfrontalier.",
        points: ["Économie du Mobile Money", "Pénétration internet par région", "Adaptation linguistique", "Canaux de distribution hybrides"],
        readTime: "20 min", publishedDate: "8 Décembre 2025", author: "Sunu Link Consulting", featured: true
      },
      [cite_start]{ id: "2", title: "Adapter sa communication aux cultures africaines [cite: 1][cite_start]", description: "Comment communiquer efficacement sur un marché multiculturel[cite: 1].", readTime: "15 min", publishedDate: "1 Décembre 2025", author: "Sunu Link Consulting" }
    ]
  },
  "entrepreneuriat-business": {
    title: "Entrepreneuriat & Business",
    icon: Briefcase,
    color: "from-teal-500 to-cyan-500",
    [cite_start]description: "Conseils pour les entrepreneurs et PME en matière de communication[cite: 1].",
    articles: [
      {
        id: "1",
        [cite_start]title: "Communication startup : les essentiels avec un petit budget [cite: 1]",
        [cite_start]description: "Comment communiquer efficacement quand on débute[cite: 1].",
        content: "L'erreur classique est de vouloir être partout. Pour une startup, il vaut mieux dominer un canal spécifique (ex: SEO local ou LinkedIn) plutôt que d'être invisible sur cinq plateformes différentes.",
        points: ["Priorisation des canaux", "Marketing de guerrilla", "Partenariats stratégiques", "Relation client personnalisée"],
        readTime: "12 min", publishedDate: "6 Décembre 2025", author: "Sunu Link Consulting", featured: true
      },
      [cite_start]{ id: "2", title: "Pitcher son projet : les clés d'une présentation réussie [cite: 1][cite_start]", description: "Techniques pour convaincre investisseurs et partenaires[cite: 1].", readTime: "10 min", publishedDate: "30 Novembre 2025", author: "Sunu Link Consulting" }
    ]
  },
  "innovation-ia": {
    title: "Innovation & IA",
    icon: Sparkles,
    color: "from-violet-500 to-purple-500",
    [cite_start]description: "L'intelligence artificielle et les innovations au service de la communication[cite: 1].",
    articles: [
      {
        id: "1",
        [cite_start]title: "ChatGPT et la création de contenu : guide pratique [cite: 1]",
        [cite_start]description: "Comment utiliser l'IA générative pour votre communication[cite: 1].",
        content: "L'IA ne remplace pas le créateur, elle l'augmente. L'art du 'prompt engineering' devient une compétence clé pour produire des contenus de haute qualité à une vitesse inégalée.",
        points: ["Rédaction assistée", "Brainstorming d'idées", "Optimisation SEO", "Personnalisation à l'échelle"],
        readTime: "18 min", publishedDate: "9 Décembre 2025", author: "Sunu Link Consulting", featured: true
      },
      [cite_start]{ id: "2", title: "Les outils IA indispensables pour les marketeurs [cite: 1][cite_start]", description: "Sélection des meilleures solutions IA pour optimiser votre travail[cite: 1].", readTime: "14 min", publishedDate: "3 Décembre 2025", author: "Sunu Link Consulting" },
      [cite_start]{ id: "3", title: "L'IA va-t-elle remplacer les créatifs ? [cite: 1][cite_start]", description: "Réflexion sur l'avenir de la création à l'ère de l'IA[cite: 1].", readTime: "10 min", publishedDate: "26 Novembre 2025", author: "Sunu Link Consulting" }
    ]
  },
  "success-stories": {
    title: "Success Stories",
    icon: Award,
    color: "from-yellow-600 to-orange-600",
    description: "Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs.",
    articles: [
      {
        id: "1",
        title: "Comment cette startup a doublé son CA en 6 mois",
        description: "Étude de cas détaillée sur une stratégie de croissance accélérée.",
        content: "Le succès de ce projet repose sur le passage d'une acquisition payante non rentable à une stratégie de 'Retention Marketing'. En optimisant le cycle de vie client (LTV), nous avons réduit le coût d'acquisition de 45%.",
        points: ["Refonte du tunnel de conversion", "Mise en place d'un CRM prédictif", "Campagnes de retargeting chirurgicales", "Programme d'ambassadeurs"],
        readTime: "25 min", publishedDate: "4 Décembre 2025", author: "Sunu Link Consulting", featured: true
      },
      { id: "2", title: "Refonte d'image réussie pour un leader industriel", description: "L'impact du branding sur la perception de marque.", readTime: "20 min", publishedDate: "25 Novembre 2025", author: "Sunu Link Consulting" }
    ]
  },
  "interviews-experts": {
    title: "Interviews d'Experts",
    icon: MessageSquare,
    color: "from-blue-600 to-indigo-800",
    description: "Échanges avec des leaders d'opinion du marketing et de la communication.",
    articles: [
      {
        id: "1",
        title: "L'avenir du digital en Afrique : interview de M. Diop",
        description: "Un regard d'expert sur les mutations technologiques du continent.",
        content: "M. Diop souligne que l'Afrique ne fait pas que rattraper son retard, elle 'saute' des étapes technologiques. Le passage direct au Mobile Money sans passer par la banque traditionnelle en est l'exemple parfait.",
        points: ["Souveraineté numérique", "Impact de la 5G sur le retail", "Formation des talents locaux", "Cybersécurité"],
        readTime: "30 min", publishedDate: "7 Décembre 2025", author: "Sunu Link Consulting", featured: true
      },
      { id: "2", title: "Branding de luxe : les conseils de Sarah Cohen", description: "Comment positionner une marque sur le segment haut de gamme.", readTime: "22 min", publishedDate: "2 Décembre 2025", author: "Sunu Link Consulting" }
    ]
  },
  "tutoriels-guides": {
    title: "Tutoriels & Guides",
    icon: BookOpen,
    color: "from-emerald-600 to-teal-800",
    description: "Des guides étape par étape pour maîtriser les outils et techniques.",
    articles: [
      {
        id: "1",
        title: "Guide complet : créer sa première campagne Facebook Ads",
        description: "Tout ce qu'il faut savoir pour lancer des publicités rentables.",
        content: "Un bon tutoriel ne montre pas seulement où cliquer, il explique 'pourquoi'. Ce guide détaille la structure d'une audience personnalisée et comment tester vos visuels sans gaspiller votre budget.",
        points: ["Pixel Facebook et API de conversion", "A/B Testing de créatives", "Copywriting persuasif", "Analyse des métriques (ROAS)"],
        readTime: "35 min", publishedDate: "9 Décembre 2025", author: "Sunu Link Consulting", featured: true
      },
      { id: "2", title: "Comment utiliser Canva comme un pro", description: "Astuces de design pour des visuels percutants.", readTime: "15 min", publishedDate: "3 Décembre 2025", author: "Sunu Link Consulting" }
    ]
  },
  "management-leadership-institutionnel": {
    title: "Management & Leadership",
    icon: Users,
    color: "from-slate-700 to-slate-900",
    description: "Leadership moderne et excellence managériale.",
    articles: [
      { id: "ml-1", title: "Leadership Moderne : Inspirer, Collaborer, Innover", description: "Développez votre leadership d'influence.", content: "Le management par le contrôle est mort. En 2026, le leader doit créer un environnement de sécurité psychologique pour libérer l'innovation.", points: ["Intelligence émotionnelle", "Délégation", "Agilité"], readTime: "21 min", publishedDate: "15 Janvier 2026", author: "Sunu Link", featured: true },
      { id: "ml-2", title: "Gestion du Changement : Stratégies pour Réussir", description: "Accompagner vos équipes dans la transformation.", readTime: "23 min", publishedDate: "18 Janvier 2026", author: "Sunu Link" },
      { id: "ml-3", title: "Intelligence Émotionnelle au Service du Management", description: "Le QE, nouveau pilier de la performance.", content: "L'empathie tactique permet de résoudre les conflits avant qu'ils n'impactent la productivité.", points: ["Écoute active", "Régulation du stress", "Empathie"], readTime: "20 min", publishedDate: "20 Janvier 2026", author: "Sunu Link", featured: true },
      { id: "ml-4", title: "Construire des Équipes Performantes et Engagées", description: "Les secrets des équipes à haute performance.", readTime: "22 min", publishedDate: "21 Janvier 2026", author: "Sunu Link" },
      { id: "ml-5", title: "Le Management Agile : Méthodes et Bénéfices", description: "Adopter l'agilité au quotidien.", readTime: "19 min", publishedDate: "22 Janvier 2026", author: "Sunu Link" },
      { id: "ml-6", title: "Leadership Féminin : Enjeux et Opportunités", description: "Promouvoir la diversité au sommet.", readTime: "25 min", publishedDate: "23 Janvier 2026", author: "Sunu Link" },
      { id: "ml-7", title: "Culture d'Entreprise : L'âme de votre organisation", description: "Définir vos valeurs fondamentales.", readTime: "21 min", publishedDate: "24 Janvier 2026", author: "Sunu Link" },
      { id: "ml-8", title: "Gestion du Temps et de la Productivité des Cadres", description: "Optimiser son agenda stratégique.", readTime: "18 min", publishedDate: "25 Janvier 2026", author: "Sunu Link" },
      { id: "ml-9", title: "Éthique et Responsabilité Sociétale des Entreprises", description: "La RSE comme levier de performance.", readTime: "24 min", publishedDate: "26 Janvier 2026", author: "Sunu Link" },
      { id: "ml-10", title: "Le Mentorat : Accélérateur de Talents", description: "Transmettre pour pérenniser l'excellence.", readTime: "20 min", publishedDate: "27 Janvier 2026", author: "Sunu Link" }
    ]
  },
  "strategie-business-finance": {
    title: "Stratégie Business & Finance",
    icon: BarChart3,
    color: "from-indigo-600 to-blue-900",
    description: "Piloter la performance et sécuriser la croissance.",
    articles: [
      { id: "bf-1", title: "Comprendre un Business Model : Valeur et Capture", description: "Les bases de la rentabilité.", content: "L'analyse du Business Model Canvas permet de pivoter rapidement face aux changements de marché.", points: ["Flux de revenus", "Proposition de valeur", "Partenaires"], readTime: "20 min", publishedDate: "10 Février 2026", author: "Sunu Link", featured: true },
      { id: "bf-2", title: "Analyse SWOT : Un Outil Stratégique Indispensable", description: "Diagnostiquer votre positionnement.", readTime: "18 min", publishedDate: "12 Février 2026", author: "Sunu Link" },
      { id: "bf-3", title: "Gestion Financière Simple pour PME et Startups", description: "Maîtriser son cash-flow.", content: "Une gestion rigoureuse de la trésorerie est la seule garantie contre l'insolvabilité en phase de croissance.", points: ["BFR", "Seuil de rentabilité", "Budgets"], readTime: "19 min", publishedDate: "16 Février 2026", author: "Sunu Link", featured: true },
      { id: "bf-4", title: "Levée de Fonds : Guide pour les Entrepreneurs", description: "Convaincre les investisseurs.", readTime: "25 min", publishedDate: "18 Février 2026", author: "Sunu Link" },
      { id: "bf-5", title: "Le Business Plan : Tracer la Route du Succès", description: "Formaliser sa vision stratégique.", readTime: "22 min", publishedDate: "20 Février 2026", author: "Sunu Link" },
      { id: "bf-6", title: "Optimisation de la Chaîne de Valeur", description: "Réduire les coûts, augmenter la valeur.", readTime: "21 min", publishedDate: "22 Février 2026", author: "Sunu Link" },
      { id: "bf-7", title: "L'Expansion Internationale : Défis et Stratégies", description: "Conquérir de nouveaux marchés.", readTime: "26 min", publishedDate: "24 Février 2026", author: "Sunu Link" },
      { id: "bf-8", title: "Fusions et Acquisitions : Les Fondamentaux", description: "Comprendre les opérations de haut de bilan.", readTime: "28 min", publishedDate: "26 Février 2026", author: "Sunu Link" },
      { id: "bf-9", title: "Gestion des Risques en Entreprise", description: "Anticiper pour protéger ses actifs.", readTime: "23 min", publishedDate: "28 Février 2026", author: "Sunu Link" },
      { id: "bf-10", title: "L'Économie Circulaire : Modèles Business Durables", description: "Innover pour la planète et le profit.", readTime: "22 min", publishedDate: "2 Mars 2026", author: "Sunu Link" }
    ]
  },
  "data-analytics-business-intelligence": {
    title: "Data, Analytics & Business Intelligence",
    icon: BarChart3,
    color: "from-cyan-500 to-blue-600",
    description: "Exploiter la data pour piloter la performance et anticiper les tendances.",
    articles: [
      { id: "da-1", title: "La data : un levier de croissance", description: "Pourquoi la data est l'actif stratégique clé pour optimiser les décisions.", content: "Dans une économie numérique, la donnée est le nouveau pétrole. Mais sans raffinage (analyse), elle reste inutile. Nous aidons les entreprises à transformer des chiffres bruts en décisions stratégiques.", points: ["Collecte intelligente", "Nettoyage de données", "Visualisation (Dashboarding)"], readTime: "17 min", publishedDate: "5 Avril 2026", author: "Sunu Link Consulting", featured: true },
      { id: "da-2", title: "Comment analyser les données clients", description: "Comprendre le comportement client pour maximiser la fidélisation.", readTime: "20 min", publishedDate: "7 Avril 2026", author: "Sunu Link Consulting" },
      { id: "da-3", title: "KPI essentiels en marketing", description: "Les indicateurs clés pour mesurer le ROI.", readTime: "18 min", publishedDate: "10 Avril 2026", author: "Sunu Link Consulting" },
      { id: "da-4", title: "Tableaux de bord : comment les créer", description: "Visualiser pour mieux décider.", readTime: "21 min", publishedDate: "13 Avril 2026", author: "Sunu Link Consulting" },
      { id: "da-5", title: "Power BI vs Google Data Studio : comparatif", description: "Choisir le bon outil de BI.", readTime: "19 min", publishedDate: "15 Avril 2026", author: "Sunu Link Consulting" },
      { id: "da-6", title: "L'importance de la data dans la communication", description: "Mesurer l'impact réel de vos campagnes.", readTime: "17 min", publishedDate: "18 Avril 2026", author: "Sunu Link Consulting" },
      { id: "da-7", title: "Collecte de données : règles et éthique", description: "Respecter la vie privée tout en restant performant.", readTime: "18 min", publishedDate: "21 Avril 2026", author: "Sunu Link Consulting" },
      { id: "da-8", title: "Prédiction et tendances grâce à la data", description: "Anticiper le marché grâce à l'analyse prédictive.", content: "L'analyse prédictive permet de passer d'un mode réactif à un mode proactif, en identifiant les futurs besoins des clients avant même qu'ils ne les expriment.", points: ["Modèles statistiques", "IA prédictive", "Saisonnalité"], readTime: "22 min", publishedDate: "24 Avril 2026", author: "Sunu Link Consulting", featured: true },
      { id: "da-9", title: "Marketing basé sur la data (data-driven)", description: "Optimiser chaque action grâce aux données.", readTime: "20 min", publishedDate: "27 Avril 2026", author: "Sunu Link Consulting" },
      { id: "da-10", title: "Business Intelligence pour PME", description: "Rendre la BI accessible aux petites structures.", readTime: "19 min", publishedDate: "30 Avril 2026", author: "Sunu Link Consulting" }
    ]
  },
  "ia-communication-marketing": {
    title: "Intelligence Artificielle & Marketing",
    icon: Brain,
    color: "from-indigo-700 to-purple-800",
    description: "Intégrez l'IA dans vos processus pour décupler votre productivité.",
    articles: [
      { id: "ia-1", title: "L'IA générative : révolution pour les créatifs", description: "Comment l'IA transforme la création de contenu.", content: "L'IA n'est plus une option mais un collaborateur. De la génération d'images à la rédaction SEO, elle permet de scaler la production sans sacrifier la qualité.", points: ["Midjourney pour le design", "ChatGPT pour la stratégie", "Prompt Engineering"], readTime: "25 min", publishedDate: "5 Mai 2026", author: "Sunu Link Consulting", featured: true },
      { id: "ia-2", title: "Automatiser son marketing avec l'IA", description: "Gagner du temps sur les tâches répétitives.", readTime: "20 min", publishedDate: "8 Mai 2026", author: "Sunu Link Consulting" },
      { id: "ia-3", title: "Éthique et IA : les limites à ne pas franchir", description: "Maintenir l'authenticité à l'ère du synthétique.", readTime: "22 min", publishedDate: "12 Mai 2026", author: "Sunu Link Consulting" },
      { id: "ia-4", title: "Personnalisation ultra-poussée grâce à l'IA", description: "Parler à chaque client de manière unique.", readTime: "18 min", publishedDate: "15 Mai 2026", author: "Sunu Link Consulting" },
      { id: "ia-5", title: "L'avenir du Search : de Google à Perplexity", description: "Comprendre le nouveau paradigme de la recherche.", content: "L'IA change la façon dont les gens cherchent. Le SEO doit évoluer vers une optimisation pour les moteurs de réponse (AEO).", points: ["LLMs", "Citations de sources", "Contenu conversationnel"], readTime: "23 min", publishedDate: "18 Mai 2026", author: "Sunu Link Consulting", featured: true },
      { id: "ia-6", title: "IA et Service Client : les nouveaux Chatbots", description: "Améliorer l'expérience utilisateur 24/7.", readTime: "19 min", publishedDate: "21 Mai 2026", author: "Sunu Link Consulting" },
      { id: "ia-7", title: "Analyse de sentiment par IA", description: "Écouter ce que vos clients disent vraiment.", readTime: "17 min", publishedDate: "24 Mai 2026", author: "Sunu Link Consulting" },
      { id: "ia-8", title: "Création de vidéo par IA : état de l'art", description: "Produire des vidéos de qualité en quelques clics.", readTime: "26 min", publishedDate: "27 Mai 2026", author: "Sunu Link Consulting" },
      { id: "ia-9", title: "Former ses équipes à l'intelligence artificielle", description: "Réussir la transition technologique en interne.", readTime: "21 min", publishedDate: "30 Mai 2026", author: "Sunu Link Consulting" },
      { id: "ia-10", title: "IA et Cybersécurité marketing", description: "Protéger ses données à l'ère des algorithmes.", readTime: "24 min", publishedDate: "2 Juin 2026", author: "Sunu Link Consulting" }
    ]
  }
};

export default function BlogDetailPage() {
  const { categoryId } = useParams();
  const category = blogCategoriesData[categoryId || ""] || blogCategoriesData["conseils-marketing"];
  const featuredArticles = category.articles.filter(a => a.featured);
  const otherArticles = category.articles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        {/* Category Hero */}
        <div className={`bg-gradient-to-r ${category.color} py-20 px-6 text-white text-center`}>
          <div className="container mx-auto max-w-4xl">
            <category.icon className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-black mb-6">{category.title}</h1>
            <p className="text-xl opacity-90 leading-relaxed">{category.description}</p>
          </div>
        </div>

        {/* Featured Content Expansion */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-12">
              <Sparkles className="text-sunuOrange w-6 h-6" />
              <h2 className="text-3xl font-bold text-sunuBlue">Analyses d'Expertise</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map(article => (
                <ArticleCard key={article.id} article={article} featured />
              ))}
            </div>
          </div>
        </section>

        {/* Full Article List */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-sunuBlue mb-12">Tous les articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* Footer Newsletter CTA */}
        <section className="py-20 px-6 bg-sunuBlue text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt à transformer votre communication ?</h2>
            <p className="text-xl mb-10 opacity-80">Rejoignez 5,000+ décideurs qui reçoivent nos analyses chaque semaine.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Votre email" className="px-6 py-4 rounded-full text-slate-900 flex-1 focus:ring-4 focus:ring-sunuOrange outline-none" />
              <button className="bg-sunuOrange hover:bg-white hover:text-sunuOrange px-8 py-4 rounded-full font-bold transition-all shadow-xl">S'abonner</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
