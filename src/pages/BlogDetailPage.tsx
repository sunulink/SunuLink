import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Lightbulb,
  TrendingUp,
  Megaphone,
  Target,
  Users,
  Palette,
  Globe,
  Briefcase,
  Sparkles,
  Award,
  MessageSquare,
  BookOpen,
  ArrowLeft,
  Clock,
  Calendar,
  User,
  BarChart3,
  Brain,
  PenTool,
  CalendarCheck,
  ShoppingCart,
  Search,
} from "lucide-react";

// Types d'articles de blog
interface BlogArticle {
  id: string;
  title: string;
  description: string;
  readTime: string;
  publishedDate: string;
  author: string;
  featured?: boolean;
  articleSlug?: string;
}

// Mapping des catégories de blog avec leurs informations
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
        readTime: "8 min",
        publishedDate: "5 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "2",
        title: "Comment créer du contenu viral en 2025",
        description: "Les secrets des contenus qui se partagent massivement",
        readTime: "10 min",
        publishedDate: "1 Décembre 2025",
        author: "Sunu Link Consulting",
      },
      {
        id: "3",
        title: "Optimiser votre budget marketing : guide pratique",
        description: "Maximisez votre ROI avec ces conseils de gestion budgétaire",
        readTime: "12 min",
        publishedDate: "28 Novembre 2025",
        author: "Sunu Link Consulting",
      },
    ],
  },
  "tendances-actualites": {
    title: "Tendances & Actualités",
    icon: TrendingUp,
    color: "from-sunuBlue to-sunuCyan",
    description: "Restez informé des dernières tendances en communication et marketing digital",
    articles: [
      {
        id: "1",
        title: "Les tendances marketing à suivre en 2025",
        description: "Tour d'horizon des innovations qui vont transformer le marketing cette année",
        readTime: "15 min",
        publishedDate: "8 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "2",
        title: "L'essor du commerce social en Afrique",
        description: "Comment les réseaux sociaux révolutionnent le e-commerce africain",
        readTime: "10 min",
        publishedDate: "3 Décembre 2025",
        author: "Sunu Link Consulting",
      },
    ],
  },
  "strategies-communication": {
    title: "Stratégies de Communication",
    icon: Megaphone,
    color: "from-purple-500 to-pink-500",
    description: "Apprenez à construire des stratégies de communication efficaces et percutantes",
    articles: [
      {
        id: "1",
        title: "Construire une stratégie de communication 360° efficace",
        description: "Guide complet pour une approche globale et cohérente",
        readTime: "20 min",
        publishedDate: "6 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "2",
        title: "Communication de crise : comment réagir efficacement",
        description: "Les bonnes pratiques pour gérer une crise de réputation",
        readTime: "12 min",
        publishedDate: "30 Novembre 2025",
        author: "Sunu Link Consulting",
      },
    ],
  },
  "marketing-digital-seo": {
    title: "Marketing Digital & SEO",
    icon: Target,
    color: "from-green-500 to-emerald-500",
    description: "Optimisez votre présence en ligne et améliorez votre référencement naturel",
    articles: [
      {
        id: "1",
        title: "SEO en 2025 : les nouvelles règles du jeu",
        description: "Comment adapter votre stratégie SEO aux dernières mises à jour Google",
        readTime: "18 min",
        publishedDate: "7 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "2",
        title: "Google Ads vs Meta Ads : quel canal choisir ?",
        description: "Comparatif détaillé pour optimiser votre budget publicitaire",
        readTime: "14 min",
        publishedDate: "2 Décembre 2025",
        author: "Sunu Link Consulting",
      },
    ],
  },
  "reseaux-sociaux": {
    title: "Réseaux Sociaux",
    icon: Users,
    color: "from-blue-500 to-indigo-500",
    description: "Maîtrisez les réseaux sociaux et développez votre communauté en ligne",
    articles: [
      {
        id: "1",
        title: "TikTok pour les entreprises : guide complet",
        description: "Comment utiliser TikTok pour développer votre marque en Afrique",
        readTime: "16 min",
        publishedDate: "9 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "2",
        title: "LinkedIn : optimiser votre profil entreprise",
        description: "Les secrets d'une page LinkedIn qui génère des leads",
        readTime: "10 min",
        publishedDate: "4 Décembre 2025",
        author: "Sunu Link Consulting",
      },
      {
        id: "3",
        title: "Instagram Reels : stratégies qui fonctionnent",
        description: "Créer des Reels engageants pour votre audience",
        readTime: "8 min",
        publishedDate: "29 Novembre 2025",
        author: "Sunu Link Consulting",
      },
    ],
  },
  "branding-identite": {
    title: "Branding & Identité Visuelle",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    description: "Construisez une marque forte et une identité visuelle mémorable",
    articles: [
      {
        id: "1",
        title: "Créer une identité de marque mémorable",
        description: "Les étapes clés pour construire une marque qui marque les esprits",
        readTime: "14 min",
        publishedDate: "5 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "2",
        title: "Refonte de marque : quand et comment la faire ?",
        description: "Guide pour réussir votre rebranding",
        readTime: "12 min",
        publishedDate: "27 Novembre 2025",
        author: "Sunu Link Consulting",
      },
    ],
  },
  "communication-africaine": {
    title: "Communication Africaine",
    icon: Globe,
    color: "from-amber-500 to-orange-500",
    description: "Focus sur les spécificités de la communication sur le continent africain",
    articles: [
      {
        id: "1",
        title: "Le marketing digital en Afrique : état des lieux 2025",
        description: "Panorama du paysage digital africain et ses opportunités",
        readTime: "20 min",
        publishedDate: "8 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "2",
        title: "Adapter sa communication aux cultures africaines",
        description: "Comment communiquer efficacement sur un marché multiculturel",
        readTime: "15 min",
        publishedDate: "1 Décembre 2025",
        author: "Sunu Link Consulting",
      },
    ],
  },
  "entrepreneuriat-business": {
    title: "Entrepreneuriat & Business",
    icon: Briefcase,
    color: "from-teal-500 to-cyan-500",
    description: "Conseils pour les entrepreneurs et PME en matière de communication",
    articles: [
      {
        id: "1",
        title: "Communication startup : les essentiels avec un petit budget",
        description: "Comment communiquer efficacement quand on débute",
        readTime: "12 min",
        publishedDate: "6 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "2",
        title: "Pitcher son projet : les clés d'une présentation réussie",
        description: "Techniques pour convaincre investisseurs et partenaires",
        readTime: "10 min",
        publishedDate: "30 Novembre 2025",
        author: "Sunu Link Consulting",
      },
    ],
  },
  "innovation-ia": {
    title: "Innovation & IA",
    icon: Sparkles,
    color: "from-violet-500 to-purple-500",
    description: "L'intelligence artificielle et les innovations au service de la communication",
    articles: [
      {
        id: "1",
        title: "ChatGPT et la création de contenu : guide pratique",
        description: "Comment utiliser l'IA générative pour votre communication",
        readTime: "18 min",
        publishedDate: "9 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "2",
        title: "Les outils IA indispensables pour les marketeurs",
        description: "Sélection des meilleures solutions IA pour optimiser votre travail",
        readTime: "14 min",
        publishedDate: "3 Décembre 2025",
        author: "Sunu Link Consulting",
      },
      {
        id: "3",
        title: "L'IA va-t-elle remplacer les créatifs ?",
        description: "Réflexion sur l'avenir de la création à l'ère de l'IA",
        readTime: "10 min",
        publishedDate: "26 Novembre 2025",
        author: "Sunu Link Consulting",
      },
    ],
  },
  "success-stories": {
    title: "Success Stories",
    icon: Award,
    color: "from-red-500 to-orange-500",
    description: "Des études de cas et témoignages inspirants de projets réussis",
    articles: [
      {
        id: "1",
        title: "Comment nous avons multiplié par 5 la visibilité d'une PME sénégalaise",
        description: "Étude de cas : stratégie digitale complète pour une entreprise locale",
        readTime: "15 min",
        publishedDate: "7 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "2",
        title: "Lancement de produit réussi : le cas d'une startup tech",
        description: "Les coulisses d'une campagne de lancement qui a fait parler",
        readTime: "12 min",
        publishedDate: "2 Décembre 2025",
        author: "Sunu Link Consulting",
      },
    ],
  },
  "interviews-portraits": {
    title: "Interviews & Portraits",
    icon: MessageSquare,
    color: "from-indigo-500 to-blue-500",
    description: "Rencontres avec des experts et acteurs du monde de la communication",
    articles: [
      {
        id: "1",
        title: "Interview : Les défis de la communication au Sénégal",
        description: "Échange avec un expert du marketing digital africain",
        readTime: "12 min",
        publishedDate: "8 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "2",
        title: "Portrait : parcours d'un entrepreneur digital africain",
        description: "Rencontre inspirante avec un pionnier du digital en Afrique",
        readTime: "10 min",
        publishedDate: "1 Décembre 2025",
        author: "Sunu Link Consulting",
      },
    ],
  },
  "tutoriels-guides": {
    title: "Tutoriels & Guides",
    icon: BookOpen,
    color: "from-cyan-500 to-blue-500",
    description: "Des tutoriels pratiques et guides pas à pas pour progresser",
    articles: [
      {
        id: "1",
        title: "Créer sa première campagne Facebook Ads : tutoriel complet",
        description: "Guide pas à pas pour lancer vos publicités Facebook",
        readTime: "25 min",
        publishedDate: "9 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
      },
      {
        id: "2",
        title: "Canva pour les débutants : créer des visuels pros",
        description: "Tutoriel pour maîtriser Canva et créer des designs impactants",
        readTime: "18 min",
        publishedDate: "4 Décembre 2025",
        author: "Sunu Link Consulting",
      },
      {
        id: "3",
        title: "Configurer Google Analytics 4 : le guide ultime",
        description: "Tout savoir pour bien paramétrer votre tracking",
        readTime: "20 min",
        publishedDate: "28 Novembre 2025",
        author: "Sunu Link Consulting",
      },
    ],
  },
  "communication-360-strategie-globale": {
  title: "Communication 360° & Stratégie Globale",
  icon: Target,
  color: "from-sunuBlue to-sunuCyan",
  description:
    "Guides experts, méthodologies et analyses complètes pour construire une communication 360° performante, cohérente et orientée ROI.",
  articles: [
    {
      id: "c360-1",
      title: "Guide complet de la communication 360°",
      description:
        "Méthodologie professionnelle pour bâtir une stratégie de communication 360° cohérente, mesurable et performante.",
      readTime: "25 min",
      publishedDate: "10 Janvier 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "guide-communication-360",
    },
    {
      id: "c360-2",
      title: "Les piliers d’une stratégie de communication 360°",
      description:
        "Découvrez les fondations indispensables pour construire une communication solide, crédible et durable.",
      readTime: "18 min",
      publishedDate: "12 Janvier 2026",
      author: "Sunu Link Consulting",
      articleSlug: "piliers-strategie-communication-360",
    },
    {
      id: "c360-3",
      title: "Construire un plan de communication 360° sur 12 mois",
      description:
        "Planification stratégique annuelle : objectifs, contenus, canaux, budget et KPIs.",
      readTime: "22 min",
      publishedDate: "15 Janvier 2026",
      author: "Sunu Link Consulting",
      articleSlug: "plan-communication-360-12-mois",
    },
    {
      id: "c360-4",
      title: "Communication 360° vs communication traditionnelle : laquelle est la plus efficace en 2025 ?",
      description:
        "Comparatif clair entre communication classique et approche 360° orientée performance.",
      readTime: "16 min",
      publishedDate: "18 Janvier 2026",
      author: "Sunu Link Consulting",
      articleSlug: "communication-360-vs-traditionnelle",
    },
    {
  id: "c360-5",
  title: "L’importance de la cohérence visuelle dans une stratégie de communication 360°",
  description:
    "Pourquoi la cohérence visuelle est un pilier stratégique et comment construire une identité graphique forte et mémorable.",
  readTime: "17 min",
  publishedDate: "20 Janvier 2026",
  author: "Sunu Link Consulting",
  articleSlug: "coherence-visuelle-communication-360",
},
{
  id: "c360-6",
  title: "Comment mettre en place une stratégie de contenu 360° qui attire, convertit et fidélise",
  description:
    "Guide complet 2026 pour construire une stratégie de contenu performante, multicanale et orientée résultats.",
  readTime: "26 min",
  publishedDate: "22 Janvier 2026",
  author: "Sunu Link Consulting",
  featured: true,
  articleSlug: "strategie-contenu-360-attirer-convertir-fideliser",
},
{
  id: "c360-7",
  title: "Les erreurs à éviter dans une campagne de communication 360°",
  description:
    "Les 10 erreurs les plus fréquentes qui sabotent les campagnes 360° et comment les éviter.",
  readTime: "21 min",
  publishedDate: "25 Janvier 2026",
  author: "Sunu Link Consulting",
  articleSlug: "erreurs-campagne-communication-360",
},
{
  id: "c360-8",
  title: "KPI et mesures d’impact d’une stratégie de communication 360°",
  description:
    "Les indicateurs clés pour mesurer la performance, le ROI et l’impact réel d’une stratégie 360°.",
  readTime: "23 min",
  publishedDate: "28 Janvier 2026",
  author: "Sunu Link Consulting",
  articleSlug: "kpi-mesure-impact-communication-360",
},
{
  id: "c360-9",
  title: "Comment intégrer l’IA dans une stratégie de communication 360°",
  description:
    "Méthodes, outils et bonnes pratiques pour exploiter l’intelligence artificielle en communication 360°.",
  readTime: "24 min",
  publishedDate: "30 Janvier 2026",
  author: "Sunu Link Consulting",
  articleSlug: "ia-strategie-communication-360",
},
{
  id: "c360-10",
  title: "Outils indispensables pour piloter une stratégie de communication 360°",
  description:
    "Tous les outils essentiels en 2026 pour gérer, analyser et optimiser une communication 360° performante.",
  readTime: "22 min",
  publishedDate: "2 Février 2026",
  author: "Sunu Link Consulting",
  articleSlug: "outils-piloter-communication-360",
},

  ],
},
"branding-identite-visuelle":{
  title: "Branding & Identité Visuelle",
  icon: Palette,
  color: "from-pink-500 to-rose-500",
  description:
    "Construire une marque forte, cohérente et mémorable grâce au branding moderne et à une identité visuelle premium.",
  articles: [
    {
  id: "brand-1",
  title: "Les fondements du branding moderne",
  description:
    "Comprendre les bases essentielles du branding moderne pour construire une marque forte, cohérente et durable.",
  readTime: "18 min",
  publishedDate: "5 Janvier 2026",
  author: "Sunu Link Consulting",
  featured: true,
  articleSlug: "fondements-branding-moderne",
},
{
  id: "brand-2",
  title: "Comment créer une identité visuelle premium",
  description:
    "Méthode complète pour concevoir une identité visuelle haut de gamme, cohérente et différenciante.",
  readTime: "22 min",
  publishedDate: "7 Janvier 2026",
  author: "Sunu Link Consulting",
  articleSlug: "creer-identite-visuelle-premium",
},
{
  id: "brand-3",
  title: "La psychologie des couleurs en branding",
  description:
    "Comment utiliser les couleurs pour influencer les émotions, renforcer la mémorabilité et le positionnement de marque.",
  readTime: "24 min",
  publishedDate: "10 Janvier 2026",
  author: "Sunu Link Consulting",
  articleSlug: "psychologie-couleurs-branding",
},
{
  id: "brand-4",
  title: "Construire une charte graphique professionnelle",
  description:
    "Guide complet pour créer une charte graphique claire, cohérente et professionnelle.",
  readTime: "26 min",
  publishedDate: "13 Janvier 2026",
  author: "Sunu Link Consulting",
  articleSlug: "charte-graphique-professionnelle",
},
{
  id: "brand-5",
  title: "Les erreurs fréquentes dans la création de logo",
  description:
    "Les erreurs de design et de stratégie à éviter absolument lors de la création d’un logo.",
  readTime: "19 min",
  publishedDate: "15 Janvier 2026",
  author: "Sunu Link Consulting",
  articleSlug: "erreurs-creation-logo",
},
{
  id: "brand-6",
  title: "Branding personnel vs branding corporate",
  description:
    "Comprendre les différences, complémentarités et stratégies entre branding personnel et branding corporate.",
  readTime: "21 min",
  publishedDate: "18 Janvier 2026",
  author: "Sunu Link Consulting",
  articleSlug: "branding-personnel-vs-corporate",
},
{
  id: "brand-7",
  title: "Pourquoi la cohérence visuelle crée la confiance",
  description:
    "Comment une identité visuelle cohérente renforce la crédibilité, la confiance et la fidélité client.",
  readTime: "20 min",
  publishedDate: "21 Janvier 2026",
  author: "Sunu Link Consulting",
  articleSlug: "coherence-visuelle-confiance",
},
{
  id: "brand-8",
  title: "Comment réussir un rebranding (guide complet)",
  description:
    "Toutes les étapes et bonnes pratiques pour réussir un rebranding stratégique et impactant.",
  readTime: "28 min",
  publishedDate: "24 Janvier 2026",
  author: "Sunu Link Consulting",
  featured: true,
  articleSlug: "reussir-rebranding-guide-complet",
},
{
  id: "brand-9",
  title: "Le pouvoir des symboles en communication",
  description:
    "Pourquoi et comment utiliser les symboles pour renforcer la reconnaissance et l’impact de marque.",
  readTime: "19 min",
  publishedDate: "27 Janvier 2026",
  author: "Sunu Link Consulting",
  articleSlug: "pouvoir-symboles-communication",
},
{
  id: "brand-10",
  title: "Le branding sensoriel : émotions & expérience",
  description:
    "Créer une expérience de marque mémorable en mobilisant les sens et les émotions.",
  readTime: "23 min",
  publishedDate: "30 Janvier 2026",
  author: "Sunu Link Consulting",
  articleSlug: "branding-sensoriel-emotions-experience",
},

  ],
},
"marketing-digital": {
  icon: TrendingUp,
  color: "from-blue-500 to-indigo-500",
  title: "Marketing Digital",
  description:
    "Déployer des stratégies digitales performantes pour attirer, convertir et fidéliser durablement grâce à des méthodes orientées résultats.",
  articles: [
    {
      id: "md-1",
      title: "Guide complet du marketing digital",
      description:
        "Les bases essentielles du marketing digital pour construire une stratégie claire, cohérente et orientée performance.",
      readTime: "25 min",
      publishedDate: "5 Janvier 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "guide-complet-marketing-digital",
    },
    {
      id: "md-2",
      title: "SEO : comment être premier sur Google",
      description:
        "Méthodes et bonnes pratiques pour bâtir une stratégie SEO durable et atteindre les premières positions sur Google.",
      readTime: "24 min",
      publishedDate: "7 Janvier 2026",
      author: "Sunu Link Consulting",
      articleSlug: "seo-comment-etre-premier-sur-google",
    },
    {
      id: "md-3",
      title: "Réseaux sociaux : la stratégie la plus rentable",
      description:
        "Comment utiliser les réseaux sociaux comme un véritable levier de visibilité, d’engagement et de conversion.",
      readTime: "22 min",
      publishedDate: "10 Janvier 2026",
      author: "Sunu Link Consulting",
      articleSlug: "strategie-reseaux-sociaux-rentable",
    },
    {
      id: "md-4",
      title: "Email marketing : techniques de conversion",
      description:
        "Les techniques essentielles pour transformer des abonnés en clients fidèles grâce à l’email marketing.",
      readTime: "21 min",
      publishedDate: "13 Janvier 2026",
      author: "Sunu Link Consulting",
      articleSlug: "email-marketing-techniques-conversion",
    },
    {
      id: "md-5",
      title: "Publicité Meta & Google Ads : bonnes pratiques",
      description:
        "Comment rentabiliser vos campagnes publicitaires sur Meta Ads et Google Ads avec une méthode claire.",
      readTime: "23 min",
      publishedDate: "15 Janvier 2026",
      author: "Sunu Link Consulting",
      articleSlug: "publicite-meta-google-ads-bonnes-pratiques",
    },
    {
      id: "md-6",
      title: "Content marketing : méthode efficace",
      description:
        "Une méthode structurée pour créer du contenu à forte valeur et générer des résultats sur le long terme.",
      readTime: "24 min",
      publishedDate: "18 Janvier 2026",
      author: "Sunu Link Consulting",
      articleSlug: "content-marketing-methode-efficace",
    },
    {
      id: "md-7",
      title: "Funnel marketing expliqué simplement",
      description:
        "Comprendre et construire un tunnel de conversion efficace pour transformer les prospects en clients.",
      readTime: "20 min",
      publishedDate: "21 Janvier 2026",
      author: "Sunu Link Consulting",
      articleSlug: "funnel-marketing-explique-simplement",
    },
    {
      id: "md-8",
      title: "Création de newsletter professionnelle",
      description:
        "Comment concevoir une newsletter professionnelle qui crée de la valeur et génère des opportunités.",
      readTime: "19 min",
      publishedDate: "24 Janvier 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "creation-newsletter-professionnelle",
    },
    {
      id: "md-9",
      title: "Analytics : comment analyser vos données",
      description:
        "Les clés pour comprendre, analyser et exploiter vos données afin d’optimiser votre stratégie digitale.",
      readTime: "22 min",
      publishedDate: "27 Janvier 2026",
      author: "Sunu Link Consulting",
      articleSlug: "analytics-analyser-donnees-marketing",
    },
    {
      id: "md-10",
      title: "Marketing d’influence : stratégie rentable",
      description:
        "Construire une stratégie d’influence cohérente, mesurable et réellement rentable pour la marque.",
      readTime: "23 min",
      publishedDate: "30 Janvier 2026",
      author: "Sunu Link Consulting",
      articleSlug: "marketing-influence-strategie-rentable",
    },
  ],
},
"entrepreneuriat-leadership": {
  icon: Users,
  color: "from-emerald-500 to-teal-500",
  title: "Entrepreneuriat & Leadership",
  description:
    "Développer un leadership moderne, structurer son entreprise et piloter une croissance durable avec vision, méthode et impact.",
  articles: [
    {
      id: "el-1",
      title: "Les qualités essentielles d’un leader moderne",
      description:
        "Les compétences humaines, stratégiques et émotionnelles indispensables pour diriger efficacement dans un monde en mutation.",
      readTime: "18 min",
      publishedDate: "5 Février 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "qualites-leader-moderne",
    },
    {
      id: "el-2",
      title: "Structurer son entreprise en 2025",
      description:
        "Comment organiser son entreprise pour soutenir la croissance, améliorer la productivité et anticiper les défis futurs.",
      readTime: "20 min",
      publishedDate: "7 Février 2026",
      author: "Sunu Link Consulting",
      articleSlug: "structurer-entreprise-2025",
    },
    {
      id: "el-3",
      title: "Comment construire une vision forte",
      description:
        "Méthode claire pour définir, formuler et partager une vision inspirante qui guide l’entreprise sur le long terme.",
      readTime: "19 min",
      publishedDate: "10 Février 2026",
      author: "Sunu Link Consulting",
      articleSlug: "construire-vision-forte",
    },
    {
      id: "el-4",
      title: "Outils indispensables pour les entrepreneurs",
      description:
        "Les outils essentiels pour gérer, communiquer, vendre et piloter efficacement son entreprise au quotidien.",
      readTime: "17 min",
      publishedDate: "13 Février 2026",
      author: "Sunu Link Consulting",
      articleSlug: "outils-indispensables-entrepreneurs",
    },
    {
      id: "el-5",
      title: "Comment déléguer efficacement",
      description:
        "Les principes clés pour déléguer intelligemment, gagner du temps et renforcer la performance de l’équipe.",
      readTime: "16 min",
      publishedDate: "15 Février 2026",
      author: "Sunu Link Consulting",
      articleSlug: "deleguer-efficacement",
    },
    {
      id: "el-6",
      title: "Les erreurs fatales à éviter en entrepreneuriat",
      description:
        "Les erreurs stratégiques, financières et humaines qui freinent la croissance et menacent la pérennité.",
      readTime: "21 min",
      publishedDate: "18 Février 2026",
      author: "Sunu Link Consulting",
      articleSlug: "erreurs-fatales-entrepreneuriat",
    },
    {
      id: "el-7",
      title: "Entrepreneur introverti vs extraverti",
      description:
        "Comment tirer parti de sa personnalité pour réussir en entrepreneuriat, quel que soit son profil.",
      readTime: "15 min",
      publishedDate: "21 Février 2026",
      author: "Sunu Link Consulting",
      articleSlug: "entrepreneur-introverti-extraverti",
    },
    {
      id: "el-8",
      title: "Comment gérer le stress en business",
      description:
        "Méthodes pratiques pour gérer la pression, rester performant et préserver sa santé mentale.",
      readTime: "18 min",
      publishedDate: "24 Février 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "gerer-stress-business",
    },
    {
      id: "el-9",
      title: "Travailler avec des équipes à distance",
      description:
        "Bonnes pratiques pour maintenir productivité, communication et cohésion au sein d’équipes remote.",
      readTime: "19 min",
      publishedDate: "27 Février 2026",
      author: "Sunu Link Consulting",
      articleSlug: "equipes-distance-management",
    },
    {
      id: "el-10",
      title: "Construire une culture d’entreprise solide",
      description:
        "Créer une culture forte et alignée pour engager les équipes et soutenir la performance à long terme.",
      readTime: "20 min",
      publishedDate: "28 Février 2026",
      author: "Sunu Link Consulting",
      articleSlug: "culture-entreprise-solide",
    },
  ],
},
"strategie-entreprise": {
  icon: Target,
  color: "from-purple-500 to-fuchsia-500",
  title: "Stratégie d’Entreprise",
  description:
    "Définir une vision claire, construire un avantage concurrentiel durable et piloter la croissance grâce à des décisions stratégiques solides.",
  articles: [
    {
      id: "se-1",
      title: "Pourquoi une entreprise échoue ?",
      description:
        "Analyse des causes majeures d’échec des entreprises et des leviers essentiels pour sécuriser la réussite.",
      readTime: "18 min",
      publishedDate: "5 Mars 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "pourquoi-entreprise-echoue",
    },
    {
      id: "se-2",
      title: "Construire une stratégie 2025–2030",
      description:
        "Méthode complète pour bâtir une stratégie long terme, anticiper les évolutions du marché et assurer une croissance durable.",
      readTime: "22 min",
      publishedDate: "7 Mars 2026",
      author: "Sunu Link Consulting",
      articleSlug: "construire-strategie-2025-2030",
    },
    {
      id: "se-3",
      title: "Comment analyser un marché",
      description:
        "Guide pratique pour analyser clients, concurrence et tendances afin de prendre des décisions stratégiques éclairées.",
      readTime: "20 min",
      publishedDate: "10 Mars 2026",
      author: "Sunu Link Consulting",
      articleSlug: "comment-analyser-un-marche",
    },
    {
      id: "se-4",
      title: "Positionnement stratégique : guide complet",
      description:
        "Définir un positionnement clair et différenciant pour se démarquer durablement sur son marché.",
      readTime: "24 min",
      publishedDate: "13 Mars 2026",
      author: "Sunu Link Consulting",
      articleSlug: "positionnement-strategique-guide-complet",
    },
    {
      id: "se-5",
      title: "Le business model : choisir le bon",
      description:
        "Comprendre, comparer et choisir le business model le plus adapté pour assurer rentabilité et pérennité.",
      readTime: "21 min",
      publishedDate: "15 Mars 2026",
      author: "Sunu Link Consulting",
      articleSlug: "business-model-choisir-le-bon",
    },
    {
      id: "se-6",
      title: "Stratégie de croissance : 7 méthodes",
      description:
        "Les 7 leviers stratégiques pour stimuler la croissance, scaler son activité et rester compétitif.",
      readTime: "23 min",
      publishedDate: "18 Mars 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "strategie-croissance-7-methodes",
    },
    {
      id: "se-7",
      title: "Comment fidéliser ses clients",
      description:
        "Mettre en place une stratégie de fidélisation efficace pour augmenter la valeur client et la rentabilité.",
      readTime: "19 min",
      publishedDate: "21 Mars 2026",
      author: "Sunu Link Consulting",
      articleSlug: "comment-fideliser-ses-clients",
    },
    {
      id: "se-8",
      title: "La valeur perçue : multiplier ses prix",
      description:
        "Comment augmenter la valeur perçue pour justifier des prix plus élevés sans perdre de clients.",
      readTime: "20 min",
      publishedDate: "24 Mars 2026",
      author: "Sunu Link Consulting",
      articleSlug: "valeur-percue-multiplier-ses-prix",
    },
    {
      id: "se-9",
      title: "Systémiser et automatiser son business",
      description:
        "Gagner en efficacité, réduire les erreurs et scaler son entreprise grâce à l’automatisation.",
      readTime: "22 min",
      publishedDate: "27 Mars 2026",
      author: "Sunu Link Consulting",
      articleSlug: "systemiser-automatiser-business",
    },
    {
      id: "se-10",
      title: "Comment créer un avantage concurrentiel",
      description:
        "Construire un avantage concurrentiel durable grâce à la valeur client, l’innovation et le branding.",
      readTime: "21 min",
      publishedDate: "30 Mars 2026",
      author: "Sunu Link Consulting",
      articleSlug: "creer-avantage-concurrentiel",
    },
  ],
},
"data-analytics-business-intelligence": {
  icon: BarChart3,
  color: "from-cyan-500 to-blue-600",
  title: "Data, Analytics & Business Intelligence",
  description:
    "Exploiter la data pour piloter la performance, anticiper les tendances et accélérer la croissance grâce à des décisions data-driven.",
  articles: [
    {
      id: "da-1",
      title: "La data : un levier de croissance",
      description:
        "Pourquoi la data est devenue l’actif stratégique clé pour optimiser les décisions, anticiper les tendances et stimuler la croissance.",
      readTime: "17 min",
      publishedDate: "5 Avril 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "data-levier-de-croissance",
    },
    {
      id: "da-2",
      title: "Comment analyser les données clients",
      description:
        "Méthodes et outils pour comprendre le comportement client, anticiper les besoins et maximiser la fidélisation.",
      readTime: "20 min",
      publishedDate: "7 Avril 2026",
      author: "Sunu Link Consulting",
      articleSlug: "analyser-donnees-clients",
    },
    {
      id: "da-3",
      title: "KPI essentiels en marketing",
      description:
        "Les indicateurs clés pour mesurer la performance marketing, optimiser le ROI et piloter la croissance.",
      readTime: "18 min",
      publishedDate: "10 Avril 2026",
      author: "Sunu Link Consulting",
      articleSlug: "kpi-essentiels-marketing",
    },
    {
      id: "da-4",
      title: "Tableaux de bord : comment les créer",
      description:
        "Créer des tableaux de bord efficaces pour visualiser les données, suivre les performances et faciliter la décision.",
      readTime: "21 min",
      publishedDate: "13 Avril 2026",
      author: "Sunu Link Consulting",
      articleSlug: "creer-tableaux-de-bord",
    },
    {
      id: "da-5",
      title: "Power BI vs Google Data Studio : comparatif",
      description:
        "Comparaison complète des outils Power BI et Google Data Studio pour choisir la meilleure solution BI.",
      readTime: "19 min",
      publishedDate: "15 Avril 2026",
      author: "Sunu Link Consulting",
      articleSlug: "power-bi-vs-google-data-studio",
    },
    {
      id: "da-6",
      title: "L’importance de la data dans la communication",
      description:
        "Comment la data transforme la communication en levier stratégique, mesurable et performant.",
      readTime: "17 min",
      publishedDate: "18 Avril 2026",
      author: "Sunu Link Consulting",
      articleSlug: "importance-data-communication",
    },
    {
      id: "da-7",
      title: "Collecte de données : règles et éthique",
      description:
        "Les bonnes pratiques légales, éthiques et sécuritaires pour collecter et exploiter les données clients.",
      readTime: "18 min",
      publishedDate: "21 Avril 2026",
      author: "Sunu Link Consulting",
      articleSlug: "collecte-donnees-regles-ethique",
    },
    {
      id: "da-8",
      title: "Prédiction et tendances grâce à la data",
      description:
        "Anticiper le marché, les comportements clients et les opportunités grâce à l’analyse prédictive.",
      readTime: "22 min",
      publishedDate: "24 Avril 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "prediction-tendances-grace-a-la-data",
    },
    {
      id: "da-9",
      title: "Marketing basé sur la data (data-driven)",
      description:
        "Optimiser chaque action marketing grâce aux données pour maximiser l’engagement, la conversion et le ROI.",
      readTime: "20 min",
      publishedDate: "27 Avril 2026",
      author: "Sunu Link Consulting",
      articleSlug: "marketing-base-sur-la-data",
    },
    {
      id: "da-10",
      title: "Business Intelligence pour PME",
      description:
        "Comment les PME peuvent exploiter la Business Intelligence pour améliorer leurs décisions et accélérer leur croissance.",
      readTime: "19 min",
      publishedDate: "30 Avril 2026",
      author: "Sunu Link Consulting",
      articleSlug: "business-intelligence-pme",
    },
  ],
},
"marketing-communication-afrique": {
  icon: Globe,
  color: "from-amber-500 to-orange-600",
  title: "Marketing & Communication en Afrique",
  description:
    "Comprendre les spécificités culturelles, digitales et économiques du marché africain pour construire des stratégies marketing authentiques, performantes et durables.",
  articles: [
    {
      id: "af-1",
      title: "Particularités du marché africain",
      description:
        "Analyse des spécificités culturelles, sociales et économiques du marché africain et de leur impact sur la communication et le marketing.",
      readTime: "18 min",
      publishedDate: "5 Mai 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "particularites-marche-africain",
    },
    {
      id: "af-2",
      title: "Les erreurs des marques en Afrique",
      description:
        "Les erreurs stratégiques les plus fréquentes des marques en Afrique et comment les éviter pour réussir durablement.",
      readTime: "17 min",
      publishedDate: "7 Mai 2026",
      author: "Sunu Link Consulting",
      articleSlug: "erreurs-marques-en-afrique",
    },
    {
      id: "af-3",
      title: "Les codes culturels dans la communication",
      description:
        "Comprendre et intégrer les codes culturels africains pour créer des campagnes pertinentes, crédibles et engageantes.",
      readTime: "19 min",
      publishedDate: "10 Mai 2026",
      author: "Sunu Link Consulting",
      articleSlug: "codes-culturels-communication-afrique",
    },
    {
      id: "af-4",
      title: "Tendances marketing en Afrique",
      description:
        "Les grandes tendances marketing en Afrique : digitalisation, influenceurs, vidéo, branding local et marketing responsable.",
      readTime: "20 min",
      publishedDate: "13 Mai 2026",
      author: "Sunu Link Consulting",
      articleSlug: "tendances-marketing-afrique",
    },
    {
      id: "af-5",
      title: "Consommateur africain : comportements clés",
      description:
        "Analyse des comportements, motivations et attentes du consommateur africain à l’ère du digital.",
      readTime: "18 min",
      publishedDate: "15 Mai 2026",
      author: "Sunu Link Consulting",
      articleSlug: "comportement-consommateur-africain",
    },
    {
      id: "af-6",
      title: "Marques africaines qui inspirent",
      description:
        "Études de marques africaines à succès et des stratégies qui leur ont permis de s’imposer localement et à l’international.",
      readTime: "21 min",
      publishedDate: "18 Mai 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "marques-africaines-qui-inspirent",
    },
    {
      id: "af-7",
      title: "Comment lancer un produit en Afrique",
      description:
        "Méthodologie complète pour réussir le lancement d’un produit en Afrique grâce à une approche locale et stratégique.",
      readTime: "22 min",
      publishedDate: "21 Mai 2026",
      author: "Sunu Link Consulting",
      articleSlug: "lancer-produit-en-afrique",
    },
    {
      id: "af-8",
      title: "Réseaux sociaux : Afrique vs Occident",
      description:
        "Comparaison des usages des réseaux sociaux en Afrique et en Occident pour adapter efficacement sa stratégie digitale.",
      readTime: "19 min",
      publishedDate: "24 Mai 2026",
      author: "Sunu Link Consulting",
      articleSlug: "reseaux-sociaux-afrique-vs-occident",
    },
    {
      id: "af-9",
      title: "Publicité en Afrique : pratiques gagnantes",
      description:
        "Les meilleures pratiques publicitaires en Afrique pour maximiser l’impact, l’engagement et le ROI des campagnes.",
      readTime: "20 min",
      publishedDate: "27 Mai 2026",
      author: "Sunu Link Consulting",
      articleSlug: "publicite-en-afrique-pratiques-gagnantes",
    },
    {
      id: "af-10",
      title: "Influence culturelle dans les contenus",
      description:
        "Comment intégrer la culture africaine dans les contenus pour renforcer l’authenticité, l’engagement et la mémorisation.",
      readTime: "18 min",
      publishedDate: "30 Mai 2026",
      author: "Sunu Link Consulting",
      articleSlug: "influence-culturelle-contenus-afrique",
    },
  ],
},
"intelligence-artificielle-communication-marketing": {
  icon: Brain,
  color: "from-violet-500 to-purple-700",
  title: "Intelligence Artificielle & Communication",
  description:
    "Exploiter l’intelligence artificielle pour automatiser, personnaliser et optimiser la communication, le marketing et la performance des entreprises.",
  articles: [
    {
      id: "ia-1",
      title: "Comment l’IA transforme la communication",
      description:
        "Comment l’intelligence artificielle automatise les tâches, personnalise les messages et optimise les performances en communication.",
      readTime: "18 min",
      publishedDate: "5 Juin 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "ia-transforme-communication",
    },
    {
      id: "ia-2",
      title: "Outils d’IA indispensables en 2026",
      description:
        "Panorama des outils d’intelligence artificielle incontournables pour automatiser, créer et analyser efficacement.",
      readTime: "20 min",
      publishedDate: "7 Juin 2026",
      author: "Sunu Link Consulting",
      articleSlug: "outils-ia-indispensables-2026",
    },
    {
      id: "ia-3",
      title: "Automatiser les réseaux sociaux",
      description:
        "Méthodes et outils pour automatiser la gestion des réseaux sociaux tout en maintenant engagement et cohérence.",
      readTime: "19 min",
      publishedDate: "10 Juin 2026",
      author: "Sunu Link Consulting",
      articleSlug: "automatiser-reseaux-sociaux-ia",
    },
    {
      id: "ia-4",
      title: "Comment utiliser l’IA pour écrire du contenu",
      description:
        "Produire rapidement des contenus pertinents et engageants grâce à l’IA, tout en conservant qualité et cohérence.",
      readTime: "21 min",
      publishedDate: "13 Juin 2026",
      author: "Sunu Link Consulting",
      articleSlug: "utiliser-ia-ecrire-contenu",
    },
    {
      id: "ia-5",
      title: "IA & design : révolution graphique",
      description:
        "Comment l’IA transforme la création visuelle, booste la créativité et accélère la production graphique.",
      readTime: "20 min",
      publishedDate: "15 Juin 2026",
      author: "Sunu Link Consulting",
      articleSlug: "ia-design-revolution-graphique",
    },
    {
      id: "ia-6",
      title: "Automatisation marketing : guide complet",
      description:
        "Guide pratique pour automatiser les campagnes marketing, personnaliser les parcours et optimiser les résultats.",
      readTime: "23 min",
      publishedDate: "18 Juin 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "automatisation-marketing-guide-complet",
    },
    {
      id: "ia-7",
      title: "Chatbots & expérience client",
      description:
        "Améliorer l’expérience client grâce aux chatbots intelligents et à l’automatisation des interactions.",
      readTime: "19 min",
      publishedDate: "21 Juin 2026",
      author: "Sunu Link Consulting",
      articleSlug: "chatbots-experience-client",
    },
    {
      id: "ia-8",
      title: "IA & productivité personnelle",
      description:
        "Utiliser l’intelligence artificielle pour optimiser l’organisation, la gestion du temps et la productivité individuelle.",
      readTime: "18 min",
      publishedDate: "24 Juin 2026",
      author: "Sunu Link Consulting",
      articleSlug: "ia-productivite-personnelle",
    },
    {
      id: "ia-9",
      title: "Limites et risques de l’IA",
      description:
        "Comprendre les limites techniques, risques éthiques et enjeux de sécurité liés à l’utilisation de l’IA.",
      readTime: "20 min",
      publishedDate: "27 Juin 2026",
      author: "Sunu Link Consulting",
      articleSlug: "limites-risques-intelligence-artificielle",
    },
    {
      id: "ia-10",
      title: "Comment intégrer l’IA dans une entreprise",
      description:
        "Méthodologie stratégique pour intégrer efficacement l’IA dans les processus et la culture d’entreprise.",
      readTime: "22 min",
      publishedDate: "30 Juin 2026",
      author: "Sunu Link Consulting",
      articleSlug: "integrer-ia-dans-entreprise",
    },
  ],
},
"strategie-contenu-creation-editoriale": {
  icon: PenTool,
  color: "from-emerald-500 to-teal-700",
  title: "Stratégie de Contenu & Création Éditoriale",
  description:
    "Construire une stratégie de contenu performante grâce à des méthodes éprouvées, des formats efficaces et une ligne éditoriale cohérente orientée valeur et conversion.",
  articles: [
    {
      id: "ct-1",
      title: "Comment créer un contenu irrésistible",
      description:
        "Méthodologie complète pour concevoir des contenus engageants, utiles et orientés conversion.",
      readTime: "18 min",
      publishedDate: "5 Juillet 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "creer-contenu-irresistible",
    },
    {
      id: "ct-2",
      title: "Les 7 formats qui convertissent le plus",
      description:
        "Analyse des formats de contenu les plus performants pour maximiser engagement et conversions.",
      readTime: "17 min",
      publishedDate: "7 Juillet 2026",
      author: "Sunu Link Consulting",
      articleSlug: "formats-contenu-qui-convertissent",
    },
    {
      id: "ct-3",
      title: "Storytelling : l’art de convaincre",
      description:
        "Utiliser le storytelling pour transformer un message marketing en expérience mémorable et persuasive.",
      readTime: "19 min",
      publishedDate: "10 Juillet 2026",
      author: "Sunu Link Consulting",
      articleSlug: "storytelling-art-de-convaincre",
    },
    {
      id: "ct-4",
      title: "Comment écrire un article premium",
      description:
        "Guide pour produire des articles à forte valeur ajoutée qui renforcent crédibilité, engagement et conversions.",
      readTime: "20 min",
      publishedDate: "13 Juillet 2026",
      author: "Sunu Link Consulting",
      articleSlug: "ecrire-article-premium",
    },
    {
      id: "ct-5",
      title: "Méthode FAST : produire du contenu plus vite",
      description:
        "Méthode structurée pour accélérer la production de contenu sans compromettre la qualité.",
      readTime: "18 min",
      publishedDate: "15 Juillet 2026",
      author: "Sunu Link Consulting",
      articleSlug: "methode-fast-production-contenu",
    },
    {
      id: "ct-6",
      title: "Repurposing : transformer 1 contenu en 25",
      description:
        "Stratégie de recyclage de contenu pour maximiser visibilité, impact et ROI.",
      readTime: "21 min",
      publishedDate: "18 Juillet 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "repurposing-transformer-contenu",
    },
    {
      id: "ct-7",
      title: "100 idées de contenus pour les marques",
      description:
        "Banque d’idées de contenus premium pour alimenter durablement les stratégies éditoriales.",
      readTime: "22 min",
      publishedDate: "21 Juillet 2026",
      author: "Sunu Link Consulting",
      articleSlug: "100-idees-contenus-marques",
    },
    {
      id: "ct-8",
      title: "Comment garder une ligne éditoriale cohérente",
      description:
        "Méthodes et outils pour maintenir une identité éditoriale forte sur tous les canaux.",
      readTime: "19 min",
      publishedDate: "24 Juillet 2026",
      author: "Sunu Link Consulting",
      articleSlug: "garder-ligne-editoriale",
    },
    {
      id: "ct-9",
      title: "Valeur vs vente : trouver l’équilibre",
      description:
        "Trouver le bon équilibre entre contenu à valeur ajoutée et objectifs commerciaux.",
      readTime: "18 min",
      publishedDate: "27 Juillet 2026",
      author: "Sunu Link Consulting",
      articleSlug: "equilibre-valeur-vente-contenu",
    },
    {
      id: "ct-10",
      title: "Contenu UGC : comment l’utiliser",
      description:
        "Exploiter le contenu généré par les utilisateurs pour renforcer crédibilité, engagement et conversions.",
      readTime: "20 min",
      publishedDate: "30 Juillet 2026",
      author: "Sunu Link Consulting",
      articleSlug: "utiliser-contenu-ugc",
    },
  ],
},
"design-graphique-branding-visuel": {
  icon: Palette,
  color: "from-fuchsia-500 to-pink-700",
  title: "Design Graphique & Branding Visuel",
  description:
    "Utiliser le design graphique comme levier stratégique pour renforcer l’identité de marque, améliorer la lisibilité des messages et maximiser l’impact de la communication sur tous les supports.",
  articles: [
    {
      id: "dg-1",
      title: "Le design graphique comme levier stratégique de communication",
      description:
        "Comprendre comment le design graphique influence la perception, la crédibilité et la performance globale d’une marque.",
      readTime: "20 min",
      publishedDate: "5 Août 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "design-graphique-levier-strategique-communication",
    },
    {
      id: "dg-2",
      title: "Identité visuelle : créer une image de marque forte",
      description:
        "Méthodologie complète pour concevoir une identité visuelle cohérente, mémorisable et différenciante.",
      readTime: "21 min",
      publishedDate: "7 Août 2026",
      author: "Sunu Link Consulting",
      articleSlug: "creer-identite-visuelle-marque-forte",
    },
    {
      id: "dg-3",
      title: "Charte graphique : pourquoi et comment la mettre en place",
      description:
        "Guide pratique pour structurer, protéger et déployer efficacement une charte graphique professionnelle.",
      readTime: "22 min",
      publishedDate: "10 Août 2026",
      author: "Sunu Link Consulting",
      articleSlug: "charte-graphique-pourquoi-comment",
    },
    {
      id: "dg-4",
      title: "Typographie : choisir les bonnes polices",
      description:
        "Comment sélectionner et organiser les typographies pour renforcer lisibilité, identité et impact du message.",
      readTime: "19 min",
      publishedDate: "13 Août 2026",
      author: "Sunu Link Consulting",
      articleSlug: "choisir-bonnes-typographies-communication",
    },
    {
      id: "dg-5",
      title: "Couleurs & psychologie : influencer la perception",
      description:
        "Exploiter la psychologie des couleurs pour créer des émotions, renforcer la marque et guider les décisions.",
      readTime: "20 min",
      publishedDate: "15 Août 2026",
      author: "Sunu Link Consulting",
      articleSlug: "psychologie-couleurs-design-communication",
    },
    {
      id: "dg-6",
      title: "Motion design : les bases pour dynamiser une marque",
      description:
        "Les fondamentaux du motion design pour capter l’attention, expliquer efficacement et renforcer l’impact marketing.",
      readTime: "21 min",
      publishedDate: "18 Août 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "motion-design-bases-dynamiser-marque",
    },
    {
      id: "dg-7",
      title: "Templates professionnels : comment les créer et les utiliser",
      description:
        "Créer des templates graphiques efficaces pour gagner du temps, garantir la cohérence et améliorer la productivité.",
      readTime: "19 min",
      publishedDate: "21 Août 2026",
      author: "Sunu Link Consulting",
      articleSlug: "templates-professionnels-creation-utilisation",
    },
    {
      id: "dg-8",
      title: "Branding visuel sur les réseaux sociaux",
      description:
        "Construire une identité visuelle cohérente et impactante sur les réseaux sociaux malgré la diversité des formats.",
      readTime: "20 min",
      publishedDate: "24 Août 2026",
      author: "Sunu Link Consulting",
      articleSlug: "branding-visuel-reseaux-sociaux",
    },
    {
      id: "dg-9",
      title: "Design minimaliste : pourquoi il fonctionne",
      description:
        "Comprendre les principes du design minimaliste et savoir l’appliquer pour améliorer lisibilité et performance.",
      readTime: "18 min",
      publishedDate: "27 Août 2026",
      author: "Sunu Link Consulting",
      articleSlug: "design-minimaliste-pourquoi-comment",
    },
    {
      id: "dg-10",
      title: "Créer un carrousel professionnel pour les réseaux sociaux",
      description:
        "Méthode étape par étape pour concevoir des carrousels engageants, lisibles et orientés conversion.",
      readTime: "17 min",
      publishedDate: "30 Août 2026",
      author: "Sunu Link Consulting",
      articleSlug: "creer-carrousel-professionnel-reseaux-sociaux",
    },
  ],
},
"publicite-digitale-strategies-media": {
  icon: Megaphone, // Assurez-vous que l'icône Megaphone est importée
  color: "from-blue-600 to-indigo-800",
  title: "Publicité Digitale & Stratégies Média",
  description:
    "Maîtriser les leviers publicitaires modernes, du digital à l'affichage extérieur, pour maximiser la visibilité, optimiser les budgets et garantir un retour sur investissement performant.",
  articles: [
    {
      id: "pub-1",
      title: "Comprendre la publicité digitale : Fondamentaux et Enjeux",
      description:
        "Une introduction complète aux piliers de la publicité en ligne : objectifs, types de supports et clés de réussite pour les marques modernes.",
      readTime: "18 min",
      publishedDate: "1 Septembre 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "comprendre-publicite-digitale-fondamentaux",
    },
    {
      id: "pub-2",
      title: "Réussir une campagne Facebook Ads de A à Z",
      description:
        "Guide pratique pour exploiter la puissance de Meta : ciblage d'audience, formats visuels et optimisation des performances.",
      readTime: "20 min",
      publishedDate: "4 Septembre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "reussir-campagne-facebook-ads-strategie",
    },
    {
      id: "pub-3",
      title: "Google Ads : Méthodes essentielles pour dominer la recherche",
      description:
        "Stratégies ultra-premium pour capturer des prospects qualifiés via le Search, le Display et le réseau Shopping de Google.",
      readTime: "22 min",
      publishedDate: "7 Septembre 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "google-ads-methodes-essentielles-complet",
    },
    {
      id: "pub-4",
      title: "Publicité Extérieure (OOH) : Stratégies et Bonnes Pratiques",
      description:
        "Comment utiliser l'affichage urbain et mobile pour renforcer la notoriété physique et compléter vos campagnes digitales.",
      readTime: "19 min",
      publishedDate: "10 Septembre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "publicite-exterieure-ooh-strategies-impact",
    },
    {
      id: "pub-5",
      title: "Stratégie Média : Analyse et Placement Optimal",
      description:
        "Méthodologie pour choisir les bons canaux (Online/Offline) et planifier vos diffusions pour un impact maximal.",
      readTime: "21 min",
      publishedDate: "13 Septembre 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "strategie-media-analyse-placement-efficace",
    },
    {
      id: "pub-6",
      title: "Comment créer un message publicitaire fort et mémorable",
      description:
        "Les secrets de la rédaction publicitaire pour capter l'attention, susciter l'émotion et déclencher l'action.",
      readTime: "18 min",
      publishedDate: "16 Septembre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "creer-message-publicitaire-fort-impact",
    },
    {
      id: "pub-7",
      title: "Mesurer le ROI des campagnes publicitaires",
      description:
        "Guide complet sur les KPIs (CTR, CPC, ROAS) et les outils pour évaluer la rentabilité réelle de vos investissements.",
      readTime: "20 min",
      publishedDate: "19 Septembre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "mesurer-roi-rentabilite-campagnes-publicitaires",
    },
    {
      id: "pub-8",
      title: "Publicité Créative : Études de Cas et Enseignements",
      description:
        "Analyse de campagnes iconiques pour comprendre comment l'originalité et le storytelling boostent la performance.",
      readTime: "19 min",
      publishedDate: "22 Septembre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "publicite-creative-etudes-de-cas-marketing",
    },
    {
      id: "pub-9",
      title: "Budget Média : Comment le répartir intelligemment",
      description:
        "Conseils stratégiques pour allouer vos ressources entre digital, offline et événementiel selon vos objectifs.",
      readTime: "18 min",
      publishedDate: "25 Septembre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "repartir-budget-media-optimisation-roi",
    },
    {
      id: "pub-10",
      title: "Funnels Publicitaires : Simples & Efficaces",
      description:
        "Concevoir un parcours client du TOFU au BOFU pour transformer vos prospects en clients fidèles.",
      readTime: "17 min",
      publishedDate: "28 Septembre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "funnels-publicitaires-conversion-marketing",
    },
  ],
},
"relations-publiques-communication-institutionnelle": {
  icon: Users, // Assurez-vous d'importer l'icône Users ou Briefcase
  color: "from-slate-700 to-blue-900",
  title: "Relations Publiques & Communication Institutionnelle",
  description:
    "Bâtir une image forte, gérer la réputation et influencer positivement les parties prenantes à travers une communication stratégique, transparente et cohérente.",
  articles: [
    {
      id: "rp-1",
      title: "Relations Publiques : Le Guide Complet",
      description:
        "Comprendre les RP comme levier stratégique pour construire la confiance, gérer la réputation et valoriser l'image d'une organisation.",
      readTime: "20 min",
      publishedDate: "1 Octobre 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "relations-publiques-guide-complet-strategie",
    },
    {
      id: "rp-2",
      title: "Comment gérer une crise médiatique avec succès",
      description:
        "Méthodologie pour réagir avec rapidité et transparence face aux situations imprévues afin de protéger la crédibilité institutionnelle.",
      readTime: "22 min",
      publishedDate: "4 Octobre 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "gerer-crise-mediatique-methode-strategique",
    },
    {
      id: "rp-3",
      title: "La Communication Interne : Socle de l'engagement",
      description:
        "Favoriser la cohésion, la motivation des collaborateurs et la culture d'entreprise par une communication transparente et régulière.",
      readTime: "19 min",
      publishedDate: "7 Octobre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "communication-interne-engagement-cohesion",
    },
    {
      id: "rp-4",
      title: "Communiqué de Presse : L'art de l'écriture journalistique",
      description:
        "Structure, bonnes pratiques et diffusion : comment rédiger un document percutant qui capte l'attention des médias.",
      readTime: "18 min",
      publishedDate: "10 Octobre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "ecrire-communique-presse-efficace",
    },
    {
      id: "rp-5",
      title: "Stratégie de Réputation : Protéger son capital confiance",
      description:
        "Anticiper les risques et valoriser les actions de l'institution pour construire une image solide et durable auprès du public.",
      readTime: "21 min",
      publishedDate: "13 Octobre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "strategie-reputation-institutionnelle-durable",
    },
    {
      id: "rp-6",
      title: "Gestion de l'image du Dirigeant : Leadership et Posture",
      description:
        "Développer un leadership inspirant et une présence digitale maîtrisée pour renforcer la crédibilité de l'institution.",
      readTime: "20 min",
      publishedDate: "16 Octobre 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "gestion-image-dirigeant-leadership",
    },
    {
      id: "rp-7",
      title: "Protocoles Événementiels : Maîtriser l'organisation",
      description:
        "Les règles de hiérarchie, de placement et de logistique pour réussir vos événements institutionnels avec prestige.",
      readTime: "22 min",
      publishedDate: "19 Octobre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "protocoles-evenementiels-organisation-prestige",
    },
    {
      id: "rp-8",
      title: "Communication Gouvernementale : Transparence et Impact",
      description:
        "Informer et mobiliser les citoyens autour des politiques publiques avec clarté et légitimité.",
      readTime: "21 min",
      publishedDate: "22 Octobre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "communication-gouvernementale-transparence-citoyenne",
    },
    {
      id: "rp-9",
      title: "Prendre la parole en public : Convaincre et Inspirer",
      description:
        "Techniques de voix, langage corporel et storytelling pour transmettre vos messages avec impact et autorité.",
      readTime: "19 min",
      publishedDate: "25 Octobre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "prendre-parole-en-public-techniques-impact",
    },
    {
      id: "rp-10",
      title: "Médias et Influence : Maîtriser la narration publique",
      description:
        "Interagir avec les journalistes et cartographier les médias pour amplifier vos messages et accroître votre visibilité.",
      readTime: "20 min",
      publishedDate: "28 Octobre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "medias-influence-institutionnelle-visibilite",
    },
  ],
},
"evenementiel-experience-client": {
  icon: CalendarCheck, // Assurez-vous d'importer l'icône CalendarCheck ou Sparkles
  color: "from-orange-500 to-red-700",
  title: "Événementiel & Expérience Client",
  description:
    "Transformer chaque événement en un levier stratégique de croissance en maîtrisant la logistique, l'activation de marque et l'enchantement du client.",
  articles: [
    {
      id: "ev-1",
      title: "Comment organiser un événement professionnel de prestige",
      description:
        "Guide complet pour planifier, budgétiser et coordonner un événement mémorable qui valorise votre image de marque.",
      readTime: "20 min",
      publishedDate: "1 Novembre 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "organiser-evenement-professionnel-guide-complet",
    },
    {
      id: "ev-2",
      title: "L'Expérience Client : Clé de la fidélisation événementielle",
      description:
        "Comment créer une relation mémorable et transformer vos participants en véritables ambassadeurs de votre marque.",
      readTime: "19 min",
      publishedDate: "4 Novembre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "experience-client-cle-succes-evenementiel",
    },
    {
      id: "ev-3",
      title: "Activer une marque lors d'un événement : Stratégies et Concepts",
      description:
        "Méthodes pour mettre en scène votre marque de manière interactive et créer un lien émotionnel fort avec le public.",
      readTime: "21 min",
      publishedDate: "7 Novembre 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "activer-marque-evenement-strategie-immersive",
    },
    {
      id: "ev-4",
      title: "Gestion Logistique et Planning : Les piliers du succès",
      description:
        "Maîtriser les aspects techniques, temporels et humains pour garantir un déroulement fluide et sans accrocs.",
      readTime: "18 min",
      publishedDate: "10 Novembre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "gestion-logistique-planning-evenementiel",
    },
    {
      id: "ev-5",
      title: "Scénographie & Ambiance : Créer l'immersion visuelle",
      description:
        "Utiliser le décor, l'éclairage et le parcours participant pour raconter une histoire et capter l'attention.",
      readTime: "20 min",
      publishedDate: "13 Novembre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "scenographie-ambiance-immersion-evenement",
    },
    {
      id: "ev-6",
      title: "Sponsoring & Partenariats : Maximiser votre impact",
      description:
        "Comment attirer des partenaires stratégiques et créer des synergies gagnantes pour optimiser votre budget.",
      readTime: "22 min",
      publishedDate: "16 Novembre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "sponsoring-partenariats-evenement-strategie",
    },
    {
      id: "ev-7",
      title: "Checklists Événementielles : L'outil anti-imprévus",
      description:
        "Des listes de contrôle rigoureuses pour chaque étape, de la planification initiale au débriefing final.",
      readTime: "17 min",
      publishedDate: "19 Novembre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "checklists-evenementielles-organisation-zero-faute",
    },
    {
      id: "ev-8",
      title: "Comment mesurer la réussite d'un événement : ROI et KPIs",
      description:
        "Analyser la satisfaction, l'engagement et les retombées commerciales pour justifier vos investissements.",
      readTime: "19 min",
      publishedDate: "22 Novembre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "mesurer-reussite-evenement-roi-kpi",
    },
    {
      id: "ev-9",
      title: "Expériences Immersives : Le futur de l'événementiel",
      description:
        "Intégrer la technologie (AR/VR) et le storytelling multisensoriel pour marquer durablement les esprits.",
      readTime: "21 min",
      publishedDate: "25 Novembre 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "experiences-immersives-storytelling-evenementiel",
    },
    {
      id: "ev-10",
      title: "Accueil Client Premium : Les 10 Règles d'Or",
      description:
        "Maîtriser le premier contact pour instaurer immédiatement un sentiment de prestige et de professionnalisme.",
      readTime: "18 min",
      publishedDate: "28 Novembre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "accueil-client-premium-regles-or-evenement",
    },
  ],
},
"vente-developpement-commercial": {
  icon: TrendingUp, // Assurez-vous d'importer l'icône TrendingUp ou Handshake
  color: "from-emerald-600 to-teal-800",
  title: "Vente & Développement Commercial",
  description:
    "Maîtriser l'art de la prospection, du pitch et du closing pour transformer chaque opportunité en succès commercial et bâtir des relations clients durables.",
  articles: [
    {
      id: "vdc-1",
      title: "Prospection Commerciale Moderne : Stratégies et Outils",
      description:
        "Comment allier techniques digitales et approches traditionnelles pour générer un flux constant de leads qualifiés.",
      readTime: "20 min",
      publishedDate: "1 Décembre 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "prospection-commerciale-moderne-strategies-outils",
    },
    {
      id: "vdc-2",
      title: "Comment créer un Pitch Commercial percutant",
      description:
        "La structure exacte pour capter l'attention en 60 secondes et susciter un intérêt immédiat pour votre offre.",
      readTime: "18 min",
      publishedDate: "4 Décembre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "creer-pitch-commercial-efficace-impactant",
    },
    {
      id: "vdc-3",
      title: "Cycle de Vente : Optimiser chaque étape du parcours",
      description:
        "Comprendre le cheminement du prospect, de la prise de contact initiale jusqu'à la fidélisation post-achat.",
      readTime: "21 min",
      publishedDate: "7 Décembre 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "cycle-de-vente-etapes-optimisation",
    },
    {
      id: "vdc-4",
      title: "Scripts de Vente Professionnels : Structure et Impact",
      description:
        "Guide pour élaborer des guides de conversation flexibles qui renforcent la confiance et la cohérence de vos équipes.",
      readTime: "19 min",
      publishedDate: "10 Décembre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "scripts-de-vente-professionnels-structure",
    },
    {
      id: "vdc-5",
      title: "Maîtriser les Objections Clients : Guide Pratique",
      description:
        "Transformer les freins (prix, timing, confiance) en opportunités de réassurance et de conclusion de vente.",
      readTime: "22 min",
      publishedDate: "13 Décembre 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "repondre-aux-objections-clients-techniques",
    },
    {
      id: "vdc-6",
      title: "Fidélisation et Suivi Client : Maximiser la Valeur Vie",
      description:
        "Stratégies proactives pour transformer un client ponctuel en ambassadeur fidèle et générer des revenus récurrents.",
      readTime: "20 min",
      publishedDate: "16 Décembre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "fidelisation-suivi-client-strategie-croissance",
    },
    {
      id: "vdc-7",
      title: "Gestion CRM : Piloter sa performance commerciale",
      description:
        "Comment centraliser les données et automatiser les relances pour optimiser le temps de vos commerciaux.",
      readTime: "19 min",
      publishedDate: "19 Décembre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "gestion-crm-pilotage-performance-commerciale",
    },
    {
      id: "vdc-8",
      title: "L'Art de Conclure une Vente : Méthodes de Closing",
      description:
        "Les étapes psychologiques et techniques pour amener le prospect à prendre sa décision finale avec assurance.",
      readTime: "18 min",
      publishedDate: "22 Décembre 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "comment-conclure-une-vente-closing",
    },
    {
      id: "vdc-9",
      title: "7 Techniques de Closing pour booster vos résultats",
      description:
        "Focus sur les techniques directes, alternatives et basées sur l'urgence pour s'adapter à chaque profil de client.",
      readTime: "17 min",
      publishedDate: "25 Décembre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "techniques-de-closing-performantes",
    },
    {
      id: "vdc-10",
      title: "Stratégie Commerciale Long Terme : Vision et Pérennité",
      description:
        "Bâtir un plan commercial robuste sur 12 mois pour anticiper les évolutions du marché et assurer une croissance stable.",
      readTime: "21 min",
      publishedDate: "28 Décembre 2026",
      author: "Sunu Link Consulting",
      articleSlug: "strategie-commerciale-long-terme-vision",
    },
  ],
},
"management-leadership-institutionnel": {
  icon: Users, // Assurez-vous d'importer l'icône Users ou Briefcase
  color: "from-slate-600 to-indigo-900",
  title: "Management & Leadership Institutionnel",
  description:
    "Développer un leadership inspirant, structurer vos organisations et optimiser la performance collective pour transformer le capital humain en levier de croissance durable.",
  articles: [
    {
      id: "ml-1",
      title: "Comment gérer une équipe : Les Fondamentaux",
      description:
        "Guide stratégique sur les piliers du management : leadership, communication transparente et répartition efficace des tâches.",
      readTime: "20 min",
      publishedDate: "5 Janvier 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "comment-gerer-equipe-efficacement",
    },
    {
      id: "ml-2",
      title: "Leadership Moderne : Inspirer, Collaborer, Innover",
      description:
        "Passer du modèle autoritaire à un leadership d'influence basé sur l'intelligence émotionnelle et l'empowerment.",
      readTime: "21 min",
      publishedDate: "8 Janvier 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "leadership-moderne-inspirer-innover",
    },
    {
      id: "ml-3",
      title: "Recrutement Efficace : Constituer une équipe d'élite",
      description:
        "Méthodologie complète pour attirer, sélectionner et intégrer les talents alignés sur vos objectifs et votre culture.",
      readTime: "22 min",
      publishedDate: "12 Janvier 2026",
      author: "Sunu Link Consulting",
      articleSlug: "recrutement-efficace-talents-alignes",
    },
    {
      id: "ml-4",
      title: "Motivation d'Équipe : Stimuler l'engagement durable",
      description:
        "Comprendre les moteurs intrinsèques et extrinsèques pour maintenir une performance et une loyauté optimales.",
      readTime: "19 min",
      publishedDate: "15 Janvier 2026",
      author: "Sunu Link Consulting",
      articleSlug: "motivation-equipe-levier-performance",
    },
    {
      id: "ml-5",
      title: "Gestion des Conflits : Transformer les tensions en progrès",
      description:
        "Techniques de médiation et de communication pour résoudre les différends et renforcer la cohésion d'équipe.",
      readTime: "20 min",
      publishedDate: "18 Janvier 2026",
      author: "Sunu Link Consulting",
      articleSlug: "gestion-conflits-climat-social-sain",
    },
    {
      id: "ml-6",
      title: "Organigramme & Responsabilités : Structurer pour réussir",
      description:
        "L'importance de la clarté hiérarchique et fonctionnelle pour une fluidité opérationnelle et une reddition de comptes précise.",
      readTime: "19 min",
      publishedDate: "21 Janvier 2026",
      author: "Sunu Link Consulting",
      articleSlug: "organigramme-responsabilites-efficacite-organisationnelle",
    },
    {
      id: "ml-7",
      title: "Culture d'Entreprise : L'âme de votre organisation",
      description:
        "Comment définir et infuser des valeurs fortes pour fédérer les collaborateurs et renforcer votre marque employeur.",
      readTime: "21 min",
      publishedDate: "24 Janvier 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "culture-entreprise-valeurs-performance",
    },
    {
      id: "ml-8",
      title: "Onboarding & Formation : Garantir une intégration réussie",
      description:
        "Processus d'accueil et de montée en compétences pour maximiser la productivité et la rétention des nouveaux talents.",
      readTime: "20 min",
      publishedDate: "27 Janvier 2026",
      author: "Sunu Link Consulting",
      articleSlug: "onboarding-formation-integration-reussie",
    },
    {
      id: "ml-9",
      title: "Gestion du Temps : Optimiser la productivité stratégique",
      description:
        "Méthodes et outils pour prioriser l'essentiel, déléguer efficacement et réduire le stress au travail.",
      readTime: "18 min",
      publishedDate: "30 Janvier 2026",
      author: "Sunu Link Consulting",
      articleSlug: "gestion-du-temps-productivite-strategique",
    },
    {
      id: "ml-10",
      title: "Productivité des Équipes : Atteindre l'excellence opérationnelle",
      description:
        "Facteurs clés et bonnes pratiques pour améliorer l'efficacité collective et la qualité des résultats produits.",
      readTime: "19 min",
      publishedDate: "2 Février 2026",
      author: "Sunu Link Consulting",
      articleSlug: "productivite-equipes-optimisation-resultats",
    },
  ],
},
"strategie-business-finance": {
  icon: BarChart3, // Assurez-vous d'importer l'icône BarChart3 ou Landmark depuis 'lucide-react'
  color: "from-emerald-700 to-slate-900",
  title: "Stratégie Business & Finance",
  description:
    "Structurer votre modèle économique, maîtriser vos flux financiers et piloter la croissance de votre entreprise avec des outils de gestion performants et une vision long terme.",
  articles: [
    {
      id: "bf-1",
      title: "Comprendre un Business Model : Création et Capture de Valeur",
      description:
        "Définir comment votre entreprise crée, délivre et capture de la valeur pour assurer sa rentabilité et attirer des investisseurs.",
      readTime: "20 min",
      publishedDate: "10 Février 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "comprendre-business-model-creation-valeur",
    },
    {
      id: "bf-2",
      title: "Construire une Offre Rentable : Viabilité et Croissance",
      description:
        "Méthodologie pour concevoir des produits et services qui maximisent la valeur perçue tout en optimisant vos marges bénéficiaires.",
      readTime: "21 min",
      publishedDate: "13 Février 2026",
      author: "Sunu Link Consulting",
      articleSlug: "construire-offre-rentable-viabilite-financiere",
    },
    {
      id: "bf-3",
      title: "Gestion Financière Simple pour PME et Startups",
      description:
        "Maîtriser les fondamentaux : flux de trésorerie, budgets prévisionnels et analyse de rentabilité sans complexité inutile.",
      readTime: "19 min",
      publishedDate: "16 Février 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "gestion-financiere-simple-pme-startups",
    },
    {
      id: "bf-4",
      title: "Trésorerie : Les Erreurs fatales à éviter",
      description:
        "Identifier les pièges courants qui mettent en péril la liquidité de l'entreprise, même lorsque celle-ci est rentable.",
      readTime: "18 min",
      publishedDate: "19 Février 2026",
      author: "Sunu Link Consulting",
      articleSlug: "tresorerie-erreurs-eviter-sante-financiere",
    },
    {
      id: "bf-5",
      title: "Comment fixer ses Prix : Stratégies de Tarification",
      description:
        "Équilibrer les coûts, la concurrence et la psychologie du client pour définir le positionnement prix optimal.",
      readTime: "20 min",
      publishedDate: "22 Février 2026",
      author: "Sunu Link Consulting",
      articleSlug: "comment-fixer-prix-strategie-rentabilite",
    },
    {
      id: "bf-6",
      title: "Investissements Intelligents : Levier de Croissance",
      description:
        "Prioriser vos dépenses en infrastructures, technologies et capital humain pour maximiser votre retour sur investissement (ROI).",
      readTime: "21 min",
      publishedDate: "25 Février 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "investissements-intelligents-levier-croissance",
    },
    {
      id: "bf-7",
      title: "Croissance & Scalabilité : L'Art de l'Expansion Durable",
      description:
        "Comment multiplier vos revenus sans augmenter proportionnellement vos coûts grâce à l'automatisation et la standardisation.",
      readTime: "22 min",
      publishedDate: "28 Février 2026",
      author: "Sunu Link Consulting",
      articleSlug: "croissance-scalabilite-expansion-durable",
    },
    {
      id: "bf-8",
      title: "Optimiser les Coûts : Efficacité Opérationnelle",
      description:
        "Réduire les dépenses inutiles et digitaliser les processus pour libérer des ressources stratégiques pour votre développement.",
      readTime: "19 min",
      publishedDate: "3 Mars 2026",
      author: "Sunu Link Consulting",
      articleSlug: "optimiser-couts-efficacite-operationnelle",
    },
    {
      id: "bf-9",
      title: "Plan d'Affaires : La Structure pour convaincre",
      description:
        "Guide étape par étape pour rédiger un business plan solide, capable de guider votre activité et de séduire vos partenaires.",
      readTime: "20 min",
      publishedDate: "6 Mars 2026",
      author: "Sunu Link Consulting",
      articleSlug: "structure-plan-affaires-outil-strategique",
    },
    {
      id: "bf-10",
      title: "Gestion des Fournisseurs : Partenariats et Négociation",
      description:
        "Sécuriser votre chaîne d'approvisionnement et optimiser vos marges via une gestion rigoureuse et collaborative des prestataires.",
      readTime: "19 min",
      publishedDate: "9 Mars 2026",
      author: "Sunu Link Consulting",
      articleSlug: "gestion-fournisseurs-partenariats-strategiques",
    },
  ],
},
"e-commerce-ventes-en-ligne": {
  icon: ShoppingCart, // Assurez-vous d'importer l'icône ShoppingCart ou Store depuis 'lucide-react'
  color: "from-cyan-500 to-blue-600",
  title: "E-commerce & Ventes en Ligne",
  description:
    "Maîtriser l'ensemble de la chaîne de valeur du commerce électronique : du choix de la plateforme à l'optimisation des conversions et la gestion logistique.",
  articles: [
    {
      id: "ec-1",
      title: "Comment lancer une boutique en ligne : Guide Stratégique",
      description:
        "Les étapes clés pour planifier, concevoir et lancer un site e-commerce performant capable d'atteindre un marché mondial.",
      readTime: "20 min",
      publishedDate: "12 Mars 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "comment-lancer-boutique-en-ligne-guide-complet",
    },
    {
      id: "ec-2",
      title: "Shopify vs WooCommerce : Quelle plateforme choisir ?",
      description:
        "Comparatif complet entre la simplicité du SaaS et la flexibilité de l'Open-Source pour votre projet e-commerce.",
      readTime: "19 min",
      publishedDate: "15 Mars 2026",
      author: "Sunu Link Consulting",
      articleSlug: "shopify-vs-woocommerce-comparatif-plateformes",
    },
    {
      id: "ec-3",
      title: "Fiche Produit : L'Art de la rédaction pour convertir",
      description:
        "Comment structurer vos descriptions, visuels et appels à l'action pour rassurer le client et booster votre SEO.",
      readTime: "18 min",
      publishedDate: "18 Mars 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "rediger-fiche-produit-conversion-seo",
    },
    {
      id: "ec-4",
      title: "Comment augmenter les ventes de votre site e-commerce",
      description:
        "Stratégies avancées d'optimisation de l'UX, de marketing digital et d'augmentation du panier moyen.",
      readTime: "21 min",
      publishedDate: "21 Mars 2026",
      author: "Sunu Link Consulting",
      articleSlug: "augmenter-ventes-boutique-en-ligne-strategies",
    },
    {
      id: "ec-5",
      title: "Le Tunnel de Vente E-commerce : Optimiser le parcours client",
      description:
        "De la découverte à la fidélisation, apprenez à supprimer les frictions et à automatiser vos conversions.",
      readTime: "20 min",
      publishedDate: "24 Mars 2026",
      author: "Sunu Link Consulting",
      articleSlug: "tunnel-de-vente-ecommerce-optimisation-parcours",
    },
    {
      id: "ec-6",
      title: "Email Marketing : Fidéliser et relancer vos acheteurs",
      description:
        "Exploiter les newsletters, les relances de paniers abandonnés et les automatisations pour générer des ventes récurrentes.",
      readTime: "19 min",
      publishedDate: "27 Mars 2026",
      author: "Sunu Link Consulting",
      articleSlug: "email-marketing-ecommerce-fidelisation-client",
    },
    {
      id: "ec-7",
      title: "Stratégie d'Avis Clients : Bâtir la preuve sociale",
      description:
        "Comment collecter et utiliser les témoignages pour renforcer la crédibilité de votre marque et rassurer les prospects.",
      readTime: "18 min",
      publishedDate: "30 Mars 2026",
      author: "Sunu Link Consulting",
      articleSlug: "strategie-avis-clients-confiance-ecommerce",
    },
    {
      id: "ec-8",
      title: "Contenu E-commerce : Attirer par la valeur ajoutée",
      description:
        "Au-delà des produits, apprenez à créer des guides et vidéos qui attirent un trafic qualifié et positionnent votre expertise.",
      readTime: "20 min",
      publishedDate: "2 Avril 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "strategie-contenu-ecommerce-attraction-visibilite",
    },
    {
      id: "ec-9",
      title: "Logistique & Livraison : L'excellence opérationnelle",
      description:
        "Optimiser la gestion des stocks, le choix des transporteurs et les délais pour garantir une satisfaction client totale.",
      readTime: "19 min",
      publishedDate: "5 Avril 2026",
      author: "Sunu Link Consulting",
      articleSlug: "logistique-livraison-ecommerce-performance",
    },
    {
      id: "ec-10",
      title: "Gestion des Retours : Transformer une contrainte en atout",
      description:
        "Mettre en place une politique de retour claire et efficace pour fidéliser les clients et améliorer vos processus.",
      readTime: "18 min",
      publishedDate: "8 Avril 2026",
      author: "Sunu Link Consulting",
      articleSlug: "gestion-retours-client-satisfaction-fidelite",
    },
  ],
},
"tendances-innovation-futur-business": {
  icon: Lightbulb, // Assurez-vous d'importer l'icône Lightbulb ou Zap depuis 'lucide-react'
  color: "from-purple-600 to-blue-600",
  title: "Tendances, Innovation & Futur du Business",
  description:
    "Anticiper les mutations du marché, explorer les technologies émergentes et décrypter les nouvelles habitudes de consommation pour garder une longueur d'avance.",
  articles: [
    {
      id: "tnd-1",
      title: "Les Tendances Marketing 2025 : Préparez l'Avenir",
      description:
        "Décryptage des évolutions majeures : hyper-personnalisation, IA générative et marketing durable pour rester compétitif en 2025.",
      readTime: "18 min",
      publishedDate: "15 Avril 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "tendances-marketing-2025-innovation",
    },
    {
      id: "tnd-2",
      title: "Nouvelles Technologies : Révolutionner votre Business",
      description:
        "De l'IA à la Blockchain, découvrez comment les innovations technologiques transforment l'efficacité opérationnelle et l'expérience client.",
      readTime: "20 min",
      publishedDate: "18 Avril 2026",
      author: "Sunu Link Consulting",
      articleSlug: "nouvelles-technologies-business-innovation",
    },
    {
      id: "tnd-3",
      title: "Consommation Africaine : Comprendre les Mutations",
      description:
        "Analyse de l'émergence de la classe moyenne, de la digitalisation et des nouvelles attentes des consommateurs sur le continent.",
      readTime: "19 min",
      publishedDate: "21 Avril 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "evolution-consommation-africaine-opportunites",
    },
    {
      id: "tnd-4",
      title: "Web 3, Blockchain & Communication : Le futur de la Confiance",
      description:
        "Comment la décentralisation et la transparence redéfinissent la relation de confiance entre les marques et leurs communautés.",
      readTime: "21 min",
      publishedDate: "24 Avril 2026",
      author: "Sunu Link Consulting",
      articleSlug: "web3-blockchain-communication-digitale",
    },
    {
      id: "tnd-5",
      title: "L'Avenir du Travail : Flexibilité, IA et Bien-être",
      description:
        "Exploration des nouveaux modes d'organisation, du travail hybride et des compétences clés pour l'entreprise de demain.",
      readTime: "18 min",
      publishedDate: "27 Avril 2026",
      author: "Sunu Link Consulting",
      articleSlug: "avenir-du-travail-flexibilite-ia",
    },
    {
      id: "tnd-6",
      title: "Métavers & Marques : Vers une immersion totale",
      description:
        "Stratégies pour engager vos clients dans des univers virtuels et créer des expériences marketing immersives inédites.",
      readTime: "19 min",
      publishedDate: "30 Avril 2026",
      author: "Sunu Link Consulting",
      articleSlug: "metavers-marques-strategie-immersive",
    },
    {
      id: "tnd-7",
      title: "Nouveaux Formats Digitaux : Capter l'Attention",
      description:
        "Vidéos courtes, contenu interactif et podcasts : maîtrisez les supports qui génèrent le plus d'engagement aujourd'hui.",
      readTime: "17 min",
      publishedDate: "3 Mai 2026",
      author: "Sunu Link Consulting",
      articleSlug: "nouveaux-formats-digitaux-engagement",
    },
    {
      id: "tnd-8",
      title: "IA Générative dans le Marketing : Créativité et Efficacité",
      description:
        "Comment utiliser les outils d'IA pour produire du contenu de haute qualité, personnaliser vos messages et gagner en productivité.",
      readTime: "20 min",
      publishedDate: "6 Mai 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "ia-generative-marketing-productivite",
    },
    {
      id: "tnd-9",
      title: "Tendances Design : L'Impact Visuel de Demain",
      description:
        "Minimalisme, 3D et typographie dynamique : les clés visuelles pour moderniser votre image de marque et capter l'audience.",
      readTime: "18 min",
      publishedDate: "9 Mai 2026",
      author: "Sunu Link Consulting",
      articleSlug: "tendances-design-graphique-modernite",
    },
    {
      id: "tnd-10",
      title: "Le Futur du E-commerce : Innovation et Durabilité",
      description:
        "Omnicanalité, paiements Fintech et logistique intelligente : les piliers de la vente en ligne pour les prochaines années.",
      readTime: "21 min",
      publishedDate: "12 Mai 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "futur-du-ecommerce-tendances-innovation",
    },
  ],
},
"veille-strategique-decryptage": {
  icon: Search, // Assurez-vous d'importer l'icône Search ou Eye depuis 'lucide-react'
  color: "from-amber-500 to-orange-700",
  title: "Veille Stratégique & Décryptage",
  description:
    "Restez à l'affût des dernières tendances, analysez les campagnes mondiales et africaines, et maîtrisez les évolutions réglementaires pour anticiper les mutations du marché.",
  articles: [
    {
      id: "vsd-1",
      title: "Analyse des campagnes marketing du moment",
      description:
        "Décryptage des forces et faiblesses des stratégies actuelles pour identifier les leviers de succès et s'inspirer des meilleures pratiques.",
      readTime: "18 min",
      publishedDate: "15 Mai 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "analyse-campagnes-marketing-moment",
    },
    {
      id: "vsd-2",
      title: "Marque de la semaine : Le décryptage stratégique",
      description:
        "Une analyse profonde d'une enseigne leader : historique, positionnement, innovations et leçons de communication à retenir.",
      readTime: "20 min",
      publishedDate: "18 Mai 2026",
      author: "Sunu Link Consulting",
      articleSlug: "marque-de-la-semaine-decryptage-strategique",
    },
    {
      id: "vsd-3",
      title: "Nouveautés Réseaux Sociaux : Algorithmes et Formats",
      description:
        "Le point complet sur les dernières fonctionnalités de Meta, TikTok et LinkedIn pour ajuster votre portée et votre engagement.",
      readTime: "19 min",
      publishedDate: "21 Mai 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "nouveautes-reseaux-sociaux-algorithmes-formats",
    },
    {
      id: "vsd-4",
      title: "Réglementations Digitales en Afrique : Cadre et Conformité",
      description:
        "Maîtriser les lois sur la protection des données et le commerce électronique pour opérer en toute sécurité sur le continent.",
      readTime: "22 min",
      publishedDate: "24 Mai 2026",
      author: "Sunu Link Consulting",
      articleSlug: "reglementations-digitales-afrique-conformite",
    },
    {
      id: "vsd-5",
      title: "Tendances Publicitaires TV & Digital : L'ère de l'Omnicanal",
      description:
        "Comment l'intégration cross-media transforme l'impact des spots TV et des publicités numériques pour maximiser le ROI.",
      readTime: "20 min",
      publishedDate: "27 Mai 2026",
      author: "Sunu Link Consulting",
      articleSlug: "tendances-publicitaires-tv-digital-omnicanal",
    },
    {
      id: "vsd-6",
      title: "Nouveaux Outils Marketing : Performance et Automatisation",
      description:
        "Tour d'horizon des solutions d'analyse, d'IA et de collaboration pour gagner en productivité et en précision stratégique.",
      readTime: "19 min",
      publishedDate: "30 Mai 2026",
      author: "Sunu Link Consulting",
      articleSlug: "nouveaux-outils-marketing-performance-ia",
    },
    {
      id: "vsd-7",
      title: "Évolution des Comportements Consommateurs : Data et Psychologie",
      description:
        "Analyser les nouvelles attentes en matière d'immédiateté, de personnalisation et de consommation responsable.",
      readTime: "21 min",
      publishedDate: "2 Juin 2026",
      author: "Sunu Link Consulting",
      featured: true,
      articleSlug: "evolution-comportements-consommateurs-analyse",
    },
    {
      id: "vsd-8",
      title: "Afrique : Actualités et Innovations Marketing",
      description:
        "Le point sur la digitalisation accélérée, le mobile money et les contenus locaux qui redéfinissent le marché africain.",
      readTime: "18 min",
      publishedDate: "5 Juin 2026",
      author: "Sunu Link Consulting",
      articleSlug: "actualites-marketing-afrique-innovations",
    },
    {
      id: "vsd-9",
      title: "Analyse d'une Stratégie Réussie : Étude de Cas",
      description:
        "Retour sur une campagne emblématique : des objectifs initiaux aux résultats finaux, découvrez les clés de la réussite.",
      readTime: "20 min",
      publishedDate: "8 Juin 2026",
      author: "Sunu Link Consulting",
      articleSlug: "analyse-strategie-reussie-etude-de-cas",
    },
    {
      id: "vsd-10",
      title: "Veille Concurrentielle : Anticiper pour Dominer",
      description:
        "Méthodes et outils pour surveiller efficacement votre marché et transformer l'information en avantage compétitif.",
      readTime: "19 min",
      publishedDate: "11 Juin 2026",
      author: "Sunu Link Consulting",
      articleSlug: "veille-concurrentielle-avantage-competitif",
    },
  ],
},
"communication-crise-reputation": {
    title: "Communication de Crise & Réputation",
    icon: Award,
    color: "from-gray-600 to-gray-800",
    description: "Gestion de crise, e-réputation et communication sensible.",
    articles: [
      {
        id: "crise-1",
        title: "Comment gérer une crise sur les réseaux sociaux",
        description: "Guide étape par étape pour protéger votre image de marque.",
        readTime: "15 min",
        publishedDate: "12 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true
      }
    ]
  },
  "growth-marketing": {
    title: "Growth Marketing & Acquisition",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-400",
    description: "Stratégies d’acquisition et de croissance rapide.",
    articles: [
      {
        id: "growth-1",
        title: "5 leviers de croissance pour votre startup",
        description: "Boostez votre acquisition client avec ces techniques.",
        readTime: "12 min",
        publishedDate: "15 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true
      }
    ]
  },
 "actualite-sunu-link": {
  title: "Analyses & Veille Marketing",
  icon: MessageSquare,
  color: "from-sunuBlue to-sunuOrange",
  description: "Décryptages stratégiques, tendances et analyses premium pour comprendre, anticiper et performer.",
  articles: [
    {
      id: "article-1",
      title: "Analyse des campagnes marketing du moment",
      description: "Décryptage approfondi des campagnes actuelles : performances, créativité, ROI et tendances à exploiter pour optimiser vos stratégies marketing.",
      readTime: "10 min",
      publishedDate: "Janvier 2026",
      author: "Sunu Link Consulting",
      featured: true
    },
    {
      id: "article-2",
      title: "Marque de la semaine : stratégie et décryptage",
      description: "Analyse complète d’une marque inspirante : positionnement, communication, campagnes récentes et enseignements clés à appliquer.",
      readTime: "8 min",
      publishedDate: "Janvier 2026",
      author: "Sunu Link Consulting"
    },
    {
      id: "article-3",
      title: "Nouveautés réseaux sociaux : ce qui change vraiment",
      description: "Tour d’horizon des dernières évolutions sur les plateformes sociales et leur impact concret sur les stratégies marketing des marques.",
      readTime: "7 min",
      publishedDate: "Janvier 2026",
      author: "Sunu Link Consulting"
    },
    {
      id: "article-4",
      title: "Réglementations digitales en Afrique : ce que les marques doivent savoir",
      description: "Analyse claire du cadre légal digital africain : protection des données, publicité en ligne et bonnes pratiques de conformité.",
      readTime: "9 min",
      publishedDate: "Janvier 2026",
      author: "Sunu Link Consulting"
    },
    {
      id: "article-5",
      title: "Tendances publicitaires TV & Digital",
      description: "Panorama des nouvelles tendances publicitaires : storytelling, formats courts, data et intégration TV–digital pour maximiser l’impact.",
      readTime: "8 min",
      publishedDate: "Janvier 2026",
      author: "Sunu Link Consulting"
    },
    {
      id: "article-6",
      title: "Nouveaux outils marketing à fort impact",
      description: "Sélection des outils marketing incontournables pour analyser, automatiser, créer et collaborer plus efficacement.",
      readTime: "6 min",
      publishedDate: "Janvier 2026",
      author: "Sunu Link Consulting"
    },
    {
      id: "article-7",
      title: "Évolution des comportements consommateurs",
      description: "Comprendre les nouveaux comportements d’achat pour adapter ses stratégies marketing, ses contenus et ses offres.",
      readTime: "7 min",
      publishedDate: "Janvier 2026",
      author: "Sunu Link Consulting"
    },
    {
      id: "article-8",
      title: "Afrique : actus et tendances marketing",
      description: "Veille stratégique sur les innovations, campagnes et opportunités marketing émergentes sur le continent africain.",
      readTime: "8 min",
      publishedDate: "Janvier 2026",
      author: "Sunu Link Consulting"
    },
    {
      id: "article-9",
      title: "Analyse d’une stratégie marketing réussie",
      description: "Étude détaillée d’une stratégie performante : objectifs, exécution, résultats et enseignements clés à retenir.",
      readTime: "9 min",
      publishedDate: "Janvier 2026",
      author: "Sunu Link Consulting"
    }
  ]
}

};

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? blogCategoriesData[slug] : null;

  if (!category) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-black mb-6 text-gray-800">Catégorie non trouvée</h1>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sunuOrange hover:text-sunuBlue font-bold"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour au blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = category.icon;
  const featuredArticles = category.articles.filter((a) => a.featured);
  const regularArticles = category.articles.filter((a) => !a.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-sunuBlue/10 to-white">
          <div className="container mx-auto max-w-5xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-sunuOrange font-semibold mb-8 transition-colors"
              data-aos="fade-right"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour au blog
            </Link>

            <div className="flex items-start gap-6 mb-8" data-aos="fade-up">
              <div
                className={`grain-texture bg-gradient-to-br ${category.color} w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
              >
                <Icon className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-800">
                  {category.title}
                </h1>
                <p className="text-xl text-gray-600">{category.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="100">
              <span className="bg-white px-4 py-2 rounded-full text-sm font-bold text-gray-700 shadow-sm">
                {category.articles.length} articles
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-sm font-bold text-gray-700 shadow-sm">
                Mis à jour régulièrement
              </span>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="py-16 px-6">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-3xl font-black mb-8 text-gray-800" data-aos="fade-up">
                Articles en vedette
              </h2>
              <div className="space-y-6">
                {featuredArticles.map((article, index) => (
                  <div
                    key={article.id}
                    className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-sunuOrange hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {article.publishedDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime} de lecture
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {article.author}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-black mb-3 text-gray-800 group-hover:text-sunuOrange transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{article.description}</p>
                    <div className="flex gap-3">
                      {article.articleSlug ? (
                        <Link
                          to={`/blog/article/${article.articleSlug}`}
                          className="inline-flex items-center gap-2 bg-sunuOrange text-white px-6 py-3 rounded-full font-bold hover:bg-sunuBlue transition-all duration-300"
                        >
                          Lire l'article
                          <BookOpen className="w-4 h-4" />
                        </Link>
                      ) : (
                        <button className="inline-flex items-center gap-2 bg-sunuOrange text-white px-6 py-3 rounded-full font-bold hover:bg-sunuBlue transition-all duration-300 opacity-50 cursor-not-allowed">
                          Bientôt disponible
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Articles */}
        {regularArticles.length > 0 && (
          <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-3xl font-black mb-8 text-gray-800" data-aos="fade-up">
                Tous les articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularArticles.map((article, index) => (
                  <div
                    key={article.id}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer border border-gray-100"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.publishedDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-black mb-2 text-gray-800 group-hover:text-sunuOrange transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{article.description}</p>
                    {article.articleSlug ? (
                      <Link
                        to={`/blog/article/${article.articleSlug}`}
                        className="text-sunuOrange font-bold hover:text-sunuBlue transition-colors flex items-center gap-1"
                      >
                        Lire plus
                        <BookOpen className="w-4 h-4" />
                      </Link>
                    ) : (
                      <span className="text-gray-400 font-bold flex items-center gap-1 cursor-not-allowed">
                        Bientôt disponible
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grain-texture bg-gradient-to-r from-sunuOrange to-yellow-500 rounded-3xl p-12 text-white text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Ne manquez aucun article
              </h2>
              <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
                Abonnez-vous à notre newsletter et recevez nos derniers articles directement dans votre boîte mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-6 py-4 rounded-full text-gray-800 font-semibold focus:outline-none focus:ring-4 focus:ring-white/50"
                />
                <button className="bg-white text-sunuOrange px-8 py-4 rounded-full font-bold hover:bg-sunuBlue hover:text-white transition-all duration-300 shadow-lg">
                  S'abonner
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
