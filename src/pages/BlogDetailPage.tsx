import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Calendar, Clock, User, BookOpen, 
  ChevronDown, CalendarCheck, Megaphone,
  Users, TrendingUp, BarChart3, ShoppingCart, 
  Lightbulb, Search, Award, MessageSquare, Share2,
  Palette, Rocket, Layout, Target, PieChart // Icônes manquantes
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// --- COMPOSANT DE LA CARTE INTERACTIVE ---
// Ce composant gère l'ouverture et la fermeture de chaque article
const ArticleCard = ({ article, isFeatured = false }: { article: any; isFeatured?: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`bg-white transition-all duration-500 rounded-2xl p-6 border ${isExpanded ? 'ring-2 ring-sunuOrange' : ''}`}>
      {/* ... titre et description ... */}
      
      {/* Contenu qui apparaît au clic */}
      <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <p className="p-4 bg-gray-50 rounded-lg text-gray-700">
          {article.content || "Analyse complète de Sunu Link Consulting en cours de lecture..."}
        </p>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)} // C'est cette ligne qui rend le bouton cliquable
        className="mt-4 flex items-center gap-2 bg-sunuOrange text-white px-6 py-2 rounded-full font-bold hover:bg-sunuBlue transition-colors"
      >
        {isExpanded ? "Voir moins" : "Lire l'article"} <BookOpen className="w-4 h-4" />
      </button>
    </div>
  );
};

// --- BASE DE DONNÉES ET COMPOSANT PRINCIPAL ---
// Changez le nom de la clé ici pour correspondre à votre URL
export const blogCategoriesData: any = {
  "conseils-marketing": { // Au lieu de "veille-strategique-decryptage"
    icon: Lightbulb,
    title: "Conseils & Astuces Marketing",
    description: "L'art de créer des identités visuelles fortes et des expériences de marque mémorables qui captivent votre audience.",
    articles: [
      {
        id: "dgb-1",
        title: "L'importance du Branding pour une PME",
        description: "Pourquoi votre identité visuelle est votre premier atout commercial et comment elle influence la perception de vos clients.",
        readTime: "15 min",
        publishedDate: "10 Octobre 2026",
        author: "Sunu Link Consulting",
        featured: true,
        articleSlug: "importance-branding-pme",
      },
      {
        id: "dgb-2",
        title: "Les Tendances du Design Graphique en 2026",
        description: "Minimalisme, 3D et typographies audacieuses : découvrez ce qui définit le paysage visuel cette année.",
        readTime: "12 min",
        publishedDate: "14 Octobre 2026",
        author: "Sunu Link Consulting",
        articleSlug: "tendances-design-graphique-2026",
      },
      {
        id: "dgb-3",
        title: "Comment créer un Logo mémorable",
        description: "Les règles d'or pour concevoir un symbole qui traverse le temps et communique vos valeurs instantanément.",
        readTime: "18 min",
        publishedDate: "18 Octobre 2026",
        author: "Sunu Link Consulting",
        featured: true,
        articleSlug: "creer-un-logo-memorable",
      },
      {
        id: "dgb-4",
        title: "La Psychologie des Couleurs en Marketing",
        description: "Comment les choix chromatiques influencent inconsciemment les décisions d'achat et la confiance des utilisateurs.",
        readTime: "14 min",
        publishedDate: "22 Octobre 2026",
        author: "Sunu Link Consulting",
        articleSlug: "psychologie-des-couleurs-marketing",
      },
      {
        id: "dgb-5",
        title: "UX/UI Design : Optimiser l'expérience utilisateur",
        description: "Les principes fondamentaux pour rendre vos interfaces web et mobiles intuitives, fluides et centrées sur l'humain.",
        readTime: "20 min",
        publishedDate: "26 Octobre 2026",
        author: "Sunu Link Consulting",
        featured: true,
        articleSlug: "ux-ui-design-experience-utilisateur",
      },
      {
        id: "dgb-6",
        title: "Charte Graphique : Le guide de survie de votre marque",
        description: "Pourquoi la cohérence visuelle sur tous les supports est cruciale pour bâtir une marque professionnelle et reconnaissable.",
        readTime: "16 min",
        publishedDate: "30 Octobre 2026",
        author: "Sunu Link Consulting",
        articleSlug: "charte-graphique-coherence-marque",
      },
      {
        id: "dgb-7",
        title: "Packaging Design : Séduire dès le premier regard",
        description: "L'impact du design d'emballage sur l'expérience produit et son rôle déterminant dans la décision d'achat en rayon.",
        readTime: "18 min",
        publishedDate: "3 Novembre 2026",
        author: "Sunu Link Consulting",
        articleSlug: "packaging-design-impact-vente",
      },
      {
        id: "dgb-8",
        title: "Storytelling Visuel : Raconter sans les mots",
        description: "Utiliser l'imagerie et la composition pour transmettre l'histoire de votre entreprise et susciter l'émotion.",
        readTime: "15 min",
        publishedDate: "7 Novembre 2026",
        author: "Sunu Link Consulting",
        articleSlug: "storytelling-visuel-emotion-marque",
      },
      {
        id: "dgb-9",
        title: "L'Évolution du Design de Marque à l'ère de l'IA",
        description: "Comment l'intelligence artificielle générative transforme les processus créatifs et redéfinit le rôle des designers.",
        readTime: "22 min",
        publishedDate: "11 Novembre 2026",
        author: "Sunu Link Consulting",
        featured: true,
        articleSlug: "evolution-design-intelligence-artificielle",
      },
      {
        id: "dgb-10",
        title: "Redesign de Marque : Quand et comment sauter le pas ?",
        description: "Les signes qui indiquent qu'il est temps de moderniser votre identité visuelle sans perdre votre ADN.",
        readTime: "19 min",
        publishedDate: "15 Novembre 2026",
        author: "Sunu Link Consulting",
        articleSlug: "redesign-marque-modernisation-identite",
      },
    ],
  },
  "marketing-digital-social-media": {
    icon: Megaphone,
    color: "from-blue-500 to-indigo-600",
    title: "Marketing Digital & Social Media",
    description: "Élaborer des stratégies de communication percutantes pour booster votre présence en ligne et engager vos communautés.",
    articles: [
      {
        id: "mds-1",
        title: "Stratégie Social Media 2026 : Le Guide Complet",
        description: "Comment choisir les bonnes plateformes et créer des contenus qui génèrent un engagement réel pour votre business.",
        readTime: "22 min",
        publishedDate: "20 Novembre 2026",
        author: "Sunu Link Consulting",
        featured: true,
        articleSlug: "strategie-social-media-complet",
      },
      {
        id: "mds-2",
        title: "Publicité Facebook & Instagram : Optimiser son ROI",
        description: "Les techniques avancées de ciblage et de création publicitaire pour transformer vos budgets en ventes.",
        readTime: "18 min",
        publishedDate: "24 Novembre 2026",
        author: "Sunu Link Consulting",
        articleSlug: "publicite-facebook-instagram-roi",
      },
      {
        id: "mds-3",
        title: "L'Essor de TikTok pour les Marques en Afrique",
        description: "Pourquoi et comment intégrer la vidéo courte dans votre mix marketing pour toucher une audience jeune et dynamique.",
        readTime: "16 min",
        publishedDate: "28 Novembre 2026",
        author: "Sunu Link Consulting",
        featured: true,
        articleSlug: "tiktok-marketing-marques-afrique",
      },
      {
        id: "mds-4",
        title: "SEO : Dominer les résultats de recherche en 2026",
        description: "Les nouvelles règles du référencement naturel à l'heure de la recherche par IA et du contenu expert.",
        readTime: "25 min",
        publishedDate: "2 Décembre 2026",
        author: "Sunu Link Consulting",
        articleSlug: "seo-referencement-naturel-strategie",
      },
      {
        id: "mds-5",
        title: "Marketing d'Influence : Choisir les bons partenaires",
        description: "Au-delà du nombre d'abonnés, comment identifier les influenceurs qui partagent vos valeurs et convertissent réellement.",
        readTime: "19 min",
        publishedDate: "6 Décembre 2026",
        author: "Sunu Link Consulting",
        articleSlug: "marketing-influence-partenariats-strategiques",
      },
      {
        id: "mds-6",
        title: "Content Marketing : La puissance du contenu à valeur ajoutée",
        description: "Comment devenir votre propre média pour attirer naturellement des prospects qualifiés et asseoir votre autorité.",
        readTime: "21 min",
        publishedDate: "10 Décembre 2026",
        author: "Sunu Link Consulting",
        featured: true,
        articleSlug: "content-marketing-strategie-autorite",
      },
      {
        id: "mds-7",
        title: "Email Marketing : L'outil de conversion indémodable",
        description: "Automatisation, segmentation et copywriting : les clés pour transformer votre base de données en revenus récurrents.",
        readTime: "17 min",
        publishedDate: "14 Décembre 2026",
        author: "Sunu Link Consulting",
        articleSlug: "email-marketing-conversion-automatisation",
      },
      {
        id: "mds-8",
        title: "LinkedIn pour le B2B : Développer son Social Selling",
        description: "Stratégies pour les dirigeants et commerciaux afin de bâtir un réseau puissant et générer des leads qualifiés.",
        readTime: "20 min",
        publishedDate: "18 Décembre 2026",
        author: "Sunu Link Consulting",
        articleSlug: "linkedin-b2b-social-selling",
      },
      {
        id: "mds-9",
        title: "Analyse de Données : Piloter par la Performance",
        description: "Quels KPIs suivre réellement pour mesurer l'efficacité de vos actions digitales et ajuster votre stratégie en temps réel.",
        readTime: "19 min",
        publishedDate: "22 Décembre 2026",
        author: "Sunu Link Consulting",
        articleSlug: "analyse-donnees-kpi-performance-digitale",
      },
      {
        id: "mds-10",
        title: "Le futur du Social Commerce : Vendre sans quitter l'app",
        description: "L'intégration des boutiques en ligne directement sur les réseaux sociaux et l'impact sur le parcours d'achat.",
        readTime: "18 min",
        publishedDate: "26 Décembre 2026",
        author: "Sunu Link Consulting",
        featured: true,
        articleSlug: "futur-social-commerce-ventes",
      },
    ],
  },
  "vente-developpement-commercial": {
    icon: TrendingUp,
    color: "from-orange-500 to-amber-600",
    title: "Vente & Développement Commercial",
    description: "Maîtriser les techniques de négociation, structurer vos processus de vente et accélérer la croissance de votre chiffre d'affaires.",
    articles: [
      {
        id: "vdc-1",
        title: "Les Fondamentaux de la Vente B2B",
        description: "Comprendre le cycle de vente complexe et les étapes pour convertir des comptes entreprises stratégiques.",
        readTime: "20 min",
        publishedDate: "1 Novembre 2026",
        author: "Sunu Link Consulting",
        featured: true,
        articleSlug: "fondamentaux-vente-b2b-strategie",
      },
      {
        id: "vdc-2",
        title: "Prospection Moderne : Cold Email et Social Selling",
        description: "Comment approcher vos prospects avec pertinence sans être intrusif grâce aux nouveaux outils digitaux.",
        readTime: "18 min",
        publishedDate: "5 Novembre 2026",
        author: "Sunu Link Consulting",
        articleSlug: "prospection-moderne-cold-email-social-selling",
      },
      {
        id: "vdc-3",
        title: "L'Art de la Négociation : Gagner sans écraser",
        description: "Techniques psychologiques pour parvenir à des accords mutuellement bénéfiques et pérenniser vos relations clients.",
        readTime: "22 min",
        publishedDate: "9 Novembre 2026",
        author: "Sunu Link Consulting",
        featured: true,
        articleSlug: "art-negociation-accords-gagnants",
      },
      {
        id: "vdc-4",
        title: "CRM : Structurer sa donnée pour mieux vendre",
        description: "Pourquoi l'implémentation d'un outil de gestion de la relation client est le levier numéro 1 de votre productivité commerciale.",
        readTime: "19 min",
        publishedDate: "13 Novembre 2026",
        author: "Sunu Link Consulting",
        articleSlug: "crm-gestion-relation-client-ventes",
      },
      {
        id: "vdc-5",
        title: "Traitement des Objections : Transformer le Non en Oui",
        description: "Méthodologie pour lever les freins de vos prospects avec assurance et empathie lors de vos entretiens.",
        readTime: "17 min",
        publishedDate: "17 Novembre 2026",
        author: "Sunu Link Consulting",
        articleSlug: "traitement-objections-vente-efficace",
      },
      {
        id: "vdc-6",
        title: "Pipeline Commercial : Prévoir sa croissance",
        description: "Comment piloter vos opportunités de vente pour assurer une régularité de vos revenus mois après mois.",
        readTime: "16 min",
        publishedDate: "21 Novembre 2026",
        author: "Sunu Link Consulting",
        articleSlug: "pipeline-commercial-previsions-ventes",
      },
      {
        id: "vdc-7",
        title: "Vente Emotionnelle : Connecter avant de convaincre",
        description: "Le rôle de l'intelligence émotionnelle dans le processus de décision et comment l'utiliser de manière éthique.",
        readTime: "21 min",
        publishedDate: "25 Novembre 2026",
        author: "Sunu Link Consulting",
        featured: true,
        articleSlug: "vente-emotionnelle-intelligence-decision",
      },
      {
        id: "vdc-8",
        title: "L'Art de Conclure une Vente : Méthodes de Closing",
        description: "Les étapes psychologiques et techniques pour amener le prospect à prendre sa décision finale avec assurance.",
        readTime: "18 min",
        publishedDate: "22 Décembre 2026",
        author: "Sunu Link Consulting",
        featured: true,
        articleSlug: "comment-conclure-une-vente-closing",
      },
      {
        id: "vdc-9",
        title: "7 Techniques de Closing pour booster vos résultats",
        description: "Focus sur les techniques directes, alternatives et basées sur l'urgence pour s'adapter à chaque profil de client.",
        readTime: "17 min",
        publishedDate: "25 Décembre 2026",
        author: "Sunu Link Consulting",
        articleSlug: "techniques-de-closing-performantes",
      },
      {
        id: "vdc-10",
        title: "Stratégie Commerciale Long Terme : Vision et Pérennité",
        description: "Bâtir un plan commercial robuste sur 12 mois pour anticiper les évolutions du marché et assurer une croissance stable.",
        readTime: "21 min",
        publishedDate: "28 Décembre 2026",
        author: "Sunu Link Consulting",
        articleSlug: "strategie-commerciale-long-terme-vision",
      },
    ],
  },
  "management-leadership-institutionnel": {
    icon: Users,
    color: "from-slate-600 to-indigo-900",
    title: "Management & Leadership Institutionnel",
    description: "Développer un leadership inspirant, structurer vos organisations et optimiser la performance collective pour transformer le capital humain en levier de croissance durable.",
    articles: [
      {
        id: "ml-1",
        title: "Comment gérer une équipe : Les Fondamentaux",
        description: "Guide stratégique sur les piliers du management : leadership, communication transparente et répartition efficace des tâches.",
        readTime: "20 min",
        publishedDate: "5 Janvier 2026",
        author: "Sunu Link Consulting",
        featured: true,
        articleSlug: "comment-gerer-equipe-efficacement",
      },
      {
        id: "ml-2",
        title: "Leadership Moderne : Inspirer, Collaborer, Innover",
        description: "Passer du modèle autoritaire à un leadership d'influence basé sur l'intelligence émotionnelle et l'empowerment.",
        readTime: "21 min",
        publishedDate: "8 Janvier 2026",
        author: "Sunu Link Consulting",
        featured: true,
        articleSlug: "leadership-moderne-inspirer-innover",
      },
      {
        id: "ml-3",
        title: "Recrutement Efficace : Constituer une équipe d'élite",
        description: "Méthodologie complète pour attirer, sélectionner et intégrer les talents alignés sur vos objectifs et votre culture.",
        readTime: "22 min",
        publishedDate: "12 Janvier 2026",
        author: "Sunu Link Consulting",
        articleSlug: "recrutement-efficace-talents-alignes",
      },
      {
        id: "ml-4",
        title: "Motivation d'Équipe : Stimuler l'engagement durable",
        description: "Comprendre les moteurs intrinsèques et extrinsèques pour maintenir une performance et une loyauté optimales.",
        readTime: "19 min",
        publishedDate: "15 Janvier 2026",
        author: "Sunu Link Consulting",
        articleSlug: "motivation-equipe-levier-performance",
      },
      {
        id: "ml-5",
        title: "Gestion des Conflits : Transformer les tensions en progrès",
        description: "Techniques de médiation et de communication pour résoudre les différends et renforcer la cohésion d'équipe.",
        readTime: "20 min",
        publishedDate: "18 Janvier 2026",
        author: "Sunu Link Consulting",
        articleSlug: "gestion-conflits-climat-social-sain",
      },
      {
        id: "ml-6",
        title: "Organigramme & Responsabilités : Structurer pour réussir",
        description: "L'importance de la clarté hiérarchique et fonctionnelle pour une fluidité opérationnelle et une reddition de comptes précise.",
        readTime: "19 min",
        publishedDate: "21 Janvier 2026",
        author: "Sunu Link Consulting",
        articleSlug: "organigramme-responsabilites-efficacite-organisationnelle",
      },
      {
        id: "ml-7",
        title: "Culture d'Entreprise : L'âme de votre organisation",
        description: "Comment définir et infuser des valeurs fortes pour fédérer les collaborateurs et renforcer votre marque employeur.",
        readTime: "21 min",
        publishedDate: "24 Janvier 2026",
        author: "Sunu Link Consulting",
        featured: true,
        articleSlug: "culture-entreprise-valeurs-performance",
      },
      {
        id: "ml-8",
        title: "Onboarding & Formation : Garantir une intégration réussie",
        description: "Processus d'accueil et de montée en compétences pour maximiser la productivité et la rétention des nouveaux talents.",
        readTime: "20 min",
        publishedDate: "27 Janvier 2026",
        author: "Sunu Link Consulting",
        articleSlug: "onboarding-formation-integration-reussie",
      },
      {
        id: "ml-9",
        title: "Gestion du Temps : Optimiser la productivité stratégique",
        description: "Méthodes et outils pour prioriser l'essentiel, déléguer efficacement et réduire le stress au travail.",
        readTime: "18 min",
        publishedDate: "30 Janvier 2026",
        author: "Sunu Link Consulting",
        articleSlug: "gestion-du-temps-productivite-strategique",
      },
      {
        id: "ml-10",
        title: "Productivité des Équipes : Atteindre l'excellence opérationnelle",
        description: "Facteurs clés et bonnes pratiques pour améliorer l'efficacité collective et la qualité des résultats produits.",
        readTime: "19 min",
        publishedDate: "2 Février 2026",
        author: "Sunu Link Consulting",
        articleSlug: "productivite-equipes-optimisation-resultats",
      },
    ],
  },
  "strategie-business-finance": {
    icon: BarChart3,
    color: "from-emerald-700 to-slate-900",
    title: "Stratégie Business & Finance",
    description: "Structurer votre modèle économique, maîtriser vos flux financiers et piloter la croissance de votre entreprise avec des outils de gestion performants.",
    articles: [
      {
        id: "bf-1",
        title: "Comprendre un Business Model : Création et Capture de Valeur",
        description: "Définir comment votre entreprise crée, délivre et capture de la valeur pour assurer sa rentabilité.",
        readTime: "20 min",
        publishedDate: "10 Février 2026",
        author: "Sunu Link Consulting",
        featured: true,
        articleSlug: "comprendre-business-model-creation-valeur",
      },
      {
        id: "bf-2",
        title: "Construire une Offre Rentable : Viabilité et Croissance",
        description: "Méthodologie pour concevoir des produits et services qui maximisent la valeur perçue et vos marges.",
        readTime: "21 min",
        publishedDate: "13 Février 2026",
        author: "Sunu Link Consulting",
        articleSlug: "construire-offre-rentable-viabilite-financiere",
      },
      {
        id: "bf-3",
        title: "Gestion Financière Simple pour PME et Startups",
        description: "Maîtriser les fondamentaux : flux de trésorerie, budgets prévisionnels et analyse de rentabilité.",
        readTime: "19 min",
        publishedDate: "16 Février 2026",
        author: "Sunu Link Consulting",
        featured: true,
        articleSlug: "gestion-financiere-simple-pme-startups",
      },
      {
        id: "bf-4",
        title: "Trésorerie : Les Erreurs fatales à éviter",
        description: "Identifier les pièges courants qui mettent en péril la liquidité de l'entreprise.",
        readTime: "18 min",
        publishedDate: "19 Février 2026",
        author: "Sunu Link Consulting",
        articleSlug: "tresorerie-erreurs-eviter-sante-financiere",
      },
      {
        id: "bf-5",
        title: "Comment fixer ses Prix : Stratégies de Tarification",
        description: "Équilibrer les coûts, la concurrence et la psychologie du client pour le positionnement prix optimal.",
        readTime: "20 min",
        publishedDate: "22 Février 2026",
        author: "Sunu Link Consulting",
        articleSlug: "comment-fixer-prix-strategie-rentabilite",
      },
      {
        id: "bf-6",
        title: "Investissements Intelligents : Levier de Croissance",
        description: "Prioriser vos dépenses en infrastructures et technologies pour maximiser votre ROI.",
        readTime: "21 min",
        publishedDate: "25 Février 2026",
        author: "Sunu Link Consulting",
        featured: true,
        articleSlug: "investissements-intelligents-levier-croissance",
      },
      {
        id: "bf-7",
        title: "Croissance & Scalabilité : L'Art de l'Expansion Durable",
        description: "Multiplier vos revenus sans augmenter proportionnellement vos coûts grâce à l'automatisation.",
        readTime: "22 min",
        publishedDate: "28 Février 2026",
        author: "Sunu Link Consulting",
        articleSlug: "croissance-scalabilite-expansion-durable",
      },
    ],
  },
  "e-commerce-ventes-en-ligne": {
    icon: ShoppingCart,
    color: "from-cyan-500 to-blue-600",
    title: "E-commerce & Ventes en Ligne",
    description: "Maîtriser l'ensemble de la chaîne de valeur du commerce électronique : de la plateforme à la logistique.",
    articles: [
      {
        id: "ec-1",
        title: "Comment lancer une boutique en ligne : Guide Stratégique",
        description: "Les étapes clés pour planifier, concevoir et lancer un site e-commerce performant.",
        readTime: "20 min",
        publishedDate: "12 Mars 2026",
        author: "Sunu Link Consulting",
        featured: true,
        articleSlug: "comment-lancer-boutique-en-ligne-guide-complet",
      },
      {
        id: "ec-2",
        title: "Logistique et Livraison : Le nerf de la guerre",
        description: "Optimiser le dernier kilomètre et la gestion des stocks pour une satisfaction client irréprochable.",
        readTime: "18 min",
        publishedDate: "15 Mars 2026",
        author: "Sunu Link Consulting",
        articleSlug: "logistique-livraison-ecommerce-performance",
      },
      {
        id: "ec-3",
        title: "Paiements en ligne en Afrique : Solutions et Enjeux",
        description: "Mobile Money, cartes bancaires et sécurité : comment adapter vos moyens de paiement au marché local.",
        readTime: "22 min",
        publishedDate: "18 Mars 2026",
        author: "Sunu Link Consulting",
        featured: true,
        articleSlug: "paiements-en-ligne-afrique-mobile-money",
      },
      {
        id: "ec-4",
        title: "Conversion E-commerce : Transformer le visiteur en acheteur",
        description: "Techniques de copywriting, d'AB testing et de réduction de l'abandon de panier.",
        readTime: "21 min",
        publishedDate: "21 Mars 2026",
        author: "Sunu Link Consulting",
        articleSlug: "conversion-ecommerce-abandon-panier",
      },
    ],
  },
  "veille-strategique-decryptage": {
    icon: Search,
    color: "from-purple-600 to-indigo-700",
    title: "Analyses & Veille Marketing",
    description: "Décryptages stratégiques, tendances et analyses premium pour comprendre, anticiper et performer.",
    articles: [
      {
        id: "vsd-1",
        title: "Analyse des campagnes marketing du moment",
        description: "Décryptage approfondi des campagnes actuelles : performances, créativité, ROI et tendances.",
        readTime: "20 min",
        publishedDate: "15 Mai 2026",
        author: "Sunu Link Consulting",
        featured: true,
        articleSlug: "analyse-campagnes-marketing-roi",
      },
      {
        id: "vsd-2",
        title: "Marque de la semaine : stratégie et décryptage",
        description: "Analyse complète d’une marque inspirante : positionnement, communication et enseignements.",
        readTime: "18 min",
        publishedDate: "18 Mai 2026",
        author: "Sunu Link Consulting",
        articleSlug: "marque-de-la-semaine-decryptage",
      },
      {
        id: "vsd-3",
        title: "Nouveautés réseaux sociaux : ce qui change vraiment",
        description: "Tour d’horizon des dernières évolutions sur les plateformes et leur impact concret.",
        readTime: "15 min",
        publishedDate: "21 Mai 2026",
        author: "Sunu Link Consulting",
        articleSlug: "nouveautes-reseaux-sociaux-impact",
      },
      {
        id: "vsd-4",
        title: "Réglementations digitales en Afrique",
        description: "Protection des données, publicité en ligne et bonnes pratiques de conformité.",
        readTime: "22 min",
        publishedDate: "24 Mai 2026",
        author: "Sunu Link Consulting",
        articleSlug: "reglementations-digitales-afrique",
      },
      {
        id: "vsd-5",
        title: "Tendances Publicitaires TV & Digital : L'ère de l'Omnicanal",
        description: "Comment l'intégration cross-media transforme l'impact des spots TV et des publicités numériques.",
        readTime: "20 min",
        publishedDate: "27 Mai 2026",
        author: "Sunu Link Consulting",
        articleSlug: "tendances-publicitaires-tv-digital-omnicanal",
      },
      {
        id: "vsd-6",
        title: "Nouveaux Outils Marketing : Performance et Automatisation",
        description: "Solutions d'analyse, d'IA et de collaboration pour gagner en productivité.",
        readTime: "19 min",
        publishedDate: "30 Mai 2026",
        author: "Sunu Link Consulting",
        articleSlug: "nouveaux-outils-marketing-performance-ia",
      },
      {
        id: "vsd-7",
        title: "Évolution des Comportements Consommateurs : Data et Psychologie",
        description: "Analyser les nouvelles attentes en matière d'immédiateté et de personnalisation.",
        readTime: "21 min",
        publishedDate: "2 Juin 2026",
        author: "Sunu Link Consulting",
        featured: true,
        articleSlug: "evolution-comportements-consommateurs-analyse",
      },
      {
        id: "vsd-8",
        title: "Afrique : Actualités et Innovations Marketing",
        description: "Focus sur la digitalisation accélérée et le mobile money.",
        readTime: "18 min",
        publishedDate: "5 Juin 2026",
        author: "Sunu Link Consulting",
        articleSlug: "actualites-marketing-afrique-innovations",
      },
      {
        id: "vsd-9",
        title: "Analyse d'une Stratégie Réussie : Étude de Cas",
        description: "Retour sur une campagne emblématique : des objectifs aux résultats finaux.",
        readTime: "20 min",
        publishedDate: "8 Juin 2026",
        author: "Sunu Link Consulting",
        articleSlug: "analyse-strategie-reussie-etude-de-cas",
      },
      {
        id: "vsd-10",
        title: "Veille Concurrentielle : Anticiper pour Dominer",
        description: "Méthodes pour surveiller votre marché et transformer l'information en avantage.",
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
        description: "Guide étape par étape pour protéger votre image de marque lors d'un bad buzz.",
        readTime: "15 min",
        publishedDate: "12 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
        articleSlug: "gerer-crise-reseaux-sociaux",
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
        description: "Boostez votre acquisition client avec ces techniques de Growth Hacking.",
        readTime: "12 min",
        publishedDate: "15 Décembre 2025",
        author: "Sunu Link Consulting",
        featured: true,
        articleSlug: "leviers-croissance-startup",
      }
    ]
  }
};

// --- COMPOSANT PRINCIPAL (RENDU) ---
const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? blogCategoriesData[slug] : null;

  if (!category) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-black mb-6 text-gray-800">Catégorie non trouvée</h1>
        <Link to="/blog" className="inline-flex items-center gap-2 text-sunuOrange font-bold hover:text-sunuBlue transition-colors">
          <ArrowLeft className="w-5 h-5" /> Retour au blog
        </Link>
      </div>
    );
  }

  const Icon = category.icon;
  const featuredArticles = category.articles.filter((a: any) => a.featured);
  const regularArticles = category.articles.filter((a: any) => !a.featured);

  return (
    <div className="min-h-screen bg-white selection:bg-sunuOrange selection:text-white">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-sunuBlue/10 to-white">
          <div className="container mx-auto max-w-5xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-sunuOrange font-semibold mb-8 transition-colors">
              <ArrowLeft className="w-5 h-5" /> Retour au blog
            </Link>

            <div className="flex items-start gap-6 mb-8">
              <div className={`bg-gradient-to-br ${category.color} w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl`}>
                <Icon className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-black mb-4 text-gray-900 leading-tight">
                  {category.title}
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl">{category.description}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <span className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-bold text-gray-700 shadow-sm">
                {category.articles.length} analyses disponibles
              </span>
            </div>
          </div>
        </section>

        {/* Liste des Articles Interactifs */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-5xl">
            {featuredArticles.length > 0 && (
              <div className="mb-20">
                <h2 className="text-3xl font-black mb-10 text-gray-800 flex items-center gap-3">
                  <span className="w-12 h-1 bg-sunuOrange rounded-full"></span> À la une
                </h2>
                <div className="space-y-8">
                  {featuredArticles.map((article: any) => (
                    <ArticleCard key={article.id} article={article} isFeatured={true} />
                  ))}
                </div>
              </div>
            )}

            <div>
              <h2 className="text-3xl font-black mb-10 text-gray-800 flex items-center gap-3">
                <span className="w-12 h-1 bg-sunuBlue rounded-full"></span> Bibliothèque d'expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {regularArticles.map((article: any) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-gray-900 rounded-[3rem] p-12 text-white text-center relative overflow-hidden shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-black mb-6 relative z-10">Besoin d'un accompagnement sur mesure ?</h2>
              <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto relative z-10">
                Nos experts transforment ces analyses en stratégies opérationnelles pour votre entreprise.
              </p>
              <button className="bg-sunuOrange text-white px-10 py-4 rounded-full font-black text-lg hover:bg-white hover:text-sunuOrange transition-all duration-300 relative z-10">
                Prendre rendez-vous
              </button>
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 right-10 w-64 h-64 bg-sunuOrange blur-[120px] rounded-full"></div>
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
