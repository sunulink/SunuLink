import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { 
  ArrowLeft, Calendar, Clock, BookOpen, 
  ChevronDown, Megaphone, Users, TrendingUp, 
  BarChart3, ShoppingCart, Lightbulb, Search, 
  Award, Palette, Layout, Target, PieChart,
  CheckCircle2, Sparkles, Zap, ShieldCheck,
  MousePointer2, MessageSquare, Globe, Smartphone
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// --- COMPOSANT ARTICLE CARD (LOGIQUE D'EXPANSION) ---
const ArticleCard = ({ article, isFeatured = false }: { article: any; isFeatured?: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`group bg-white transition-all duration-500 rounded-[2.5rem] overflow-hidden border ${
      isExpanded ? 'ring-2 ring-sunuOrange shadow-2xl scale-[1.01]' : 'border-gray-100 shadow-sm hover:shadow-xl'
    } ${isFeatured ? 'md:col-span-2' : ''}`}>
      
      <div className="p-8 md:p-10">
        <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-sunuBlue/50 uppercase tracking-tighter mb-6">
          <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full">
            <Calendar className="w-3.5 h-3.5" /> {article.publishedDate}
          </span>
          <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full">
            <Clock className="w-3.5 h-3.5" /> {article.readTime}
          </span>
          {isFeatured && (
            <span className="flex items-center gap-1.5 bg-sunuOrange/10 text-sunuOrange px-3 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5" /> Analyse Premium
            </span>
          )}
        </div>
        
        <h3 className={`${isFeatured ? 'text-3xl md:text-4xl' : 'text-2xl'} font-black text-gray-900 mb-6 leading-[1.1] group-hover:text-sunuOrange transition-colors`}>
          {article.title}
        </h3>
        
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          {article.description}
        </p>

        {/* --- CONTENU DÉPLOYABLE --- */}
        <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[1500px] opacity-100 mb-10' : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
          <div className="pt-10 border-t border-gray-100 space-y-8">
            <div className="bg-gray-900 text-white p-8 rounded-[2rem] relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="flex items-center gap-3 text-sunuOrange font-black text-xl mb-4">
                  <Zap className="w-6 h-6" /> L'Œil de l'Expert
                </h4>
                <div className="text-gray-300 leading-relaxed space-y-4 text-lg">
                  {article.content}
                </div>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Target className="w-32 h-32" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-sunuBlue/5 p-8 rounded-[2rem]">
                <h5 className="font-black text-sunuBlue text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Leviers de succès
                </h5>
                <ul className="space-y-3 text-gray-700">
                  {article.points?.map((p: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sunuOrange mt-2 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-50 p-8 rounded-[2rem]">
                <h5 className="font-black text-sunuOrange text-lg mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" /> ROI & Performance
                </h5>
                <p className="text-gray-700 leading-relaxed">
                  L'implémentation de ces recommandations permet généralement une amélioration de <strong>25% à 40%</strong> des indicateurs de performance clés (KPIs) sous 6 mois.
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex items-center gap-4 px-10 py-4 rounded-full font-black text-lg transition-all duration-500 ${
            isExpanded 
              ? 'bg-gray-100 text-gray-900' 
              : 'bg-sunuOrange text-white hover:bg-sunuBlue shadow-xl shadow-sunuOrange/20'
          }`}
        >
          {isExpanded ? "Fermer l'analyse" : "Déployer l'expertise"} 
          <ChevronDown className={`w-6 h-6 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
};

// --- BASE DE DONNÉES ÉTENDUE ---
export const blogCategoriesData: any = {
  "conseils-marketing": { // SLUG: Design & Branding
    icon: Palette,
    color: "from-pink-500 to-rose-600",
    title: "Design & Identité Visuelle",
    description: "Comment transformer une simple image en un actif stratégique qui impose votre marque sur son marché.",
    articles: [
      {
        id: "dgb-1",
        title: "Le Branding Holistique : Au-delà du simple Logo",
        publishedDate: "12 Février 2026",
        readTime: "18 min",
        featured: true,
        description: "Pourquoi l'identité visuelle est le socle de votre crédibilité et comment elle influence directement vos marges bénéficiaires.",
        content: "En 2026, le branding ne se regarde pas, il se vit. Une identité forte permet de réduire vos coûts d'acquisition client (CAC) car la confiance est déjà pré-établie. Nous analysons ici comment une palette de couleurs cohérente et une typographie propriétaire créent un 'raccourci mental' chez le consommateur, vous plaçant immédiatement en haut de la pile face à la concurrence.",
        points: [
          "Cohérence multisensorielle du message de marque",
          "Psychologie des couleurs appliquée aux secteurs d'activité",
          "Architecture de marque : comment structurer vos sous-produits",
          "Mise en place d'une charte graphique dynamique (adaptative)"
        ]
      },
      {
        id: "dgb-2",
        title: "UX/UI : L'interface comme levier de conversion",
        publishedDate: "18 Février 2026",
        readTime: "14 min",
        description: "Optimiser le parcours utilisateur pour transformer chaque visite en action concrète.",
        content: "Chaque seconde de friction sur votre site coûte de l'argent. L'UX Design n'est pas une question d'esthétique, mais d'ergonomie cognitive. En simplifiant les processus de décision et en guidant l'œil vers les zones de conversion (CTA), vous transformez votre interface en un commercial qui travaille 24h/24 sans jamais se fatiguer.",
        points: [
          "Réduction de la charge cognitive et loi de Hick",
          "Accessibilité numérique et inclusion (Normes WCAG)",
          "Micro-interactions : humaniser la technologie",
          "Mobile-first : concevoir pour le pouce, pas pour la souris"
        ]
      }
    ]
  },
  "marketing-digital-social-media": {
    icon: Megaphone,
    color: "from-blue-600 to-cyan-500",
    title: "Marketing Digital & Social Media",
    description: "Dominer l'écosystème numérique en transformant l'attention en intention d'achat.",
    articles: [
      {
        id: "mds-1",
        title: "Algorithmes 2026 : La fin du 'Mass Market'",
        publishedDate: "05 Mars 2026",
        readTime: "22 min",
        featured: true,
        description: "Pourquoi la portée organique s'effondre et comment la 'Social Search' remplace le fil d'actualité classique.",
        content: "Aujourd'hui, les plateformes sociales agissent comme des moteurs de recherche. Pour exister, votre contenu ne doit plus simplement être 'beau', il doit répondre à une intention. Nous analysons l'importance de l'indexation de vos vidéos (mots-clés prononcés, sous-titres) et l'émergence des micro-communautés fermées (Discord, WhatsApp) comme nouveaux canaux de conversion prioritaire.",
        points: [
          "Optimisation du SEO Social (TikTok & Instagram Search)",
          "Stratégie de contenu vertical (Reels/Shorts) haute rétention",
          "Migration de l'audience vers des plateformes de 'Dark Social'",
          "Mesure du taux de sentiment au-delà des simples likes"
        ]
      },
      {
        id: "mds-2",
        title: "L'IA Générative dans le Content Marketing",
        publishedDate: "10 Mars 2026",
        readTime: "19 min",
        description: "Industrialiser sa production de contenu sans perdre son âme ni sa singularité.",
        content: "L'IA n'est pas un remplaçant, c'est un amplificateur. Le défi de 2026 est d'utiliser l'IA pour la structure et la data, tout en injectant une 'touche humaine' irremplaçable dans le storytelling. Nous explorons les flux de travail (workflows) qui permettent de transformer un seul article de blog en 15 micro-contenus pour tous vos réseaux en moins d'une heure.",
        points: [
          "Ingénierie de prompt pour garder le ton de votre marque",
          "Personnalisation de masse grâce à la donnée comportementale",
          "Éthique et transparence : le label 'Human Made' comme luxe",
          "Automatisation de la distribution multicanale"
        ]
      }
    ]
  },
  "vente-developpement-commercial": {
    icon: TrendingUp,
    color: "from-orange-600 to-red-500",
    title: "Vente & Développement Commercial",
    description: "Passer de la vente transactionnelle à l'ingénierie d'affaires pour sécuriser vos revenus.",
    articles: [
      {
        id: "vdc-1",
        title: "Closing 3.0 : La psychologie de la décision",
        publishedDate: "15 Mars 2026",
        readTime: "25 min",
        featured: true,
        description: "Pourquoi vos prospects hésitent et comment lever les barrières psychologiques au moment de la signature.",
        content: "Le closing n'est pas une fin en soi, c'est la conséquence logique d'un parcours de confiance. Cette analyse décortique le 'Paradoxe du choix' et explique pourquoi proposer trop d'options tue la vente. Nous introduisons la méthode du 'Reverse Closing' : amener le prospect à se vendre lui-même votre solution en identifiant son coût de l'inaction.",
        points: [
          "Identification des 'Pain Points' profonds vs besoins déclarés",
          "L'art du silence et de l'écoute active en négociation",
          "Structuration d'offres à tiroirs (Good, Better, Best)",
          "Gestion des objections par la méthode de l'empathie tactique"
        ]
      },
      {
        id: "vdc-2",
        title: "Social Selling : Bâtir son pipeline sur LinkedIn",
        publishedDate: "20 Mars 2026",
        readTime: "18 min",
        description: "Comment transformer votre profil personnel en une machine à générer des leads qualifiés.",
        content: "LinkedIn n'est plus un CV en ligne, c'est une salle de conférence permanente. Pour réussir, vous devez passer du statut de 'vendeur' à celui de 'leader d'opinion'. Nous détaillons la stratégie des 3C (Connexion, Conversation, Conversion) pour approcher les décideurs sans jamais paraître intrusif ou désespéré.",
        points: [
          "Optimisation du profil pour la conversion (Landing Page)",
          "Routine de publication pour l'autorité sectorielle",
          "Techniques d'approche directe en message privé (InMail)",
          "Utilisation du Sales Navigator pour le ciblage chirurgical"
        ]
      }
    ]
  },
  "management-leadership-institutionnel": {
    icon: Users,
    color: "from-slate-700 to-indigo-900",
    title: "Management & Leadership",
    description: "Transformer le capital humain en avantage compétitif durable par l'excellence managériale.",
    articles: [
      {
        id: "ml-1",
        title: "Le Leadership Exécutif en Période de Mutation",
        publishedDate: "12 Janvier 2026",
        readTime: "24 min",
        featured: true,
        description: "Comment piloter la croissance quand l'incertitude devient la seule constante du marché.",
        content: "Le leader de 2026 ne commande pas, il orchestre. Face à une main-d'œuvre de plus en plus volatile, la fidélisation passe par le 'Sense-Making' : donner du sens aux objectifs. Nous analysons ici la transition du management par le contrôle vers le management par la confiance (empowerment), tout en maintenant une reddition de comptes (accountability) stricte pour garantir les résultats.",
        points: [
          "Développement de l'agilité décisionnelle en comité de direction",
          "Mise en place d'une culture de la feedback-loop permanente",
          "Gestion de la résistance au changement technologique",
          "Alignement des valeurs individuelles sur la mission d'entreprise"
        ]
      },
      {
        id: "ml-2",
        title: "Productivité des Équipes : Le framework OKR",
        publishedDate: "28 Janvier 2026",
        readTime: "20 min",
        description: "Adopter la méthodologie des géants de la Tech pour aligner vos équipes sur des objectifs ambitieux.",
        content: "Les OKR (Objectives and Key Results) permettent de briser les silos départementaux. En définissant des objectifs clairs et des résultats mesurables, chaque collaborateur comprend son impact direct sur le chiffre d'affaires. Cette analyse détaille comment implémenter ce système sans créer de bureaucratie supplémentaire, en se concentrant sur l'exécution pure.",
        points: [
          "Définition d'objectifs 'Stretch' motivants mais réalistes",
          "Cascade des objectifs de la direction vers l'opérationnel",
          "Revues trimestrielles de performance et ajustements agiles",
          "Outils collaboratifs pour le suivi en temps réel des KPIs"
        ]
      }
    ]
  },
  "strategie-business-finance": {
    icon: BarChart3,
    color: "from-emerald-600 to-teal-900",
    title: "Stratégie Business & Finance",
    description: "Sécuriser la pérennité de l'entreprise par une gestion rigoureuse et une vision long terme.",
    articles: [
      {
        id: "bf-1",
        title: "Optimisation de la Trésorerie : Le Cash est Roi",
        publishedDate: "15 Février 2026",
        readTime: "22 min",
        featured: true,
        description: "Maîtriser son BFR (Besoin en Fonds de Roulement) pour ne jamais freiner sa croissance par manque de liquidités.",
        content: "Beaucoup d'entreprises rentables font faillite par manque de cash. Nous explorons les leviers pour raccourcir les cycles de paiement clients, optimiser la gestion des stocks et négocier intelligemment avec les fournisseurs. Une gestion financière saine est le socle qui permet de saisir les opportunités d'investissement au moment où vos concurrents sont paralysés.",
        points: [
          "Analyse prévisionnelle des flux de trésorerie (Cash-flow)",
          "Réduction du délai moyen de paiement (DSO)",
          "Arbitrage entre autofinancement et levée de dette",
          "Stratégies de réduction des coûts fixes sans perte de qualité"
        ]
      },
      {
        id: "bf-2",
        title: "Scalabilité : Préparer l'entreprise à changer d'échelle",
        publishedDate: "02 Mars 2026",
        readTime: "19 min",
        description: "Comment doubler votre volume d'activité sans doubler vos charges opérationnelles.",
        content: "La scalabilité n'est pas une question de taille, mais de structure. Pour qu'une entreprise soit 'scalable', elle doit s'appuyer sur des processus automatisables et une offre standardisable. Nous analysons les goulots d'étranglement classiques de la croissance et comment les lever par la digitalisation des flux de travail et la délégation stratégique.",
        points: [
          "Standardisation des processus critiques (SOP)",
          "Automatisation des tâches à faible valeur ajoutée",
          "Externalisation intelligente des fonctions non-cœur de métier",
          "Modélisation de la rentabilité marginale"
        ]
      }
    ]
  },
  "e-commerce-ventes-en-ligne": {
    icon: ShoppingCart,
    color: "from-cyan-500 to-blue-700",
    title: "E-commerce & Ventes en Ligne",
    description: "Maîtriser l'écosystème de la vente directe pour transformer votre site en moteur de croissance.",
    articles: [
      {
        id: "ec-1",
        title: "L'Expérience d'Achat 'Sans Friction' en 2026",
        publishedDate: "12 Mars 2026",
        readTime: "20 min",
        featured: true,
        description: "Pourquoi chaque milliseconde de chargement et chaque champ de formulaire inutile tuent votre conversion.",
        content: "Le e-commerce moderne se gagne sur le checkout. Avec l'essor du Mobile Money et des portefeuilles numériques, l'utilisateur attend un paiement en un clic. Nous analysons l'impact psychologique de la barre de progression, la rassurance par la preuve sociale en temps réel et les stratégies de récupération de paniers abandonnés par IA prédictive.",
        points: [
          "Optimisation du Core Web Vitals pour le SEO E-commerce",
          "Intégration transparente des paiements locaux (Orange Money, Wave, etc.)",
          "Copywriting persuasif pour les fiches produits",
          "Logistique du dernier kilomètre : l'avantage compétitif"
        ]
      },
      {
        id: "ec-2",
        title: "Social Commerce : Vendre là où se trouve l'attention",
        publishedDate: "25 Mars 2026",
        readTime: "17 min",
        description: "Transformer vos réseaux sociaux en véritables boutiques sans redirection externe.",
        content: "La barrière entre contenu et commerce disparaît. Le 'Live Shopping' et les boutiques intégrées Instagram/TikTok permettent de capturer l'impulsion d'achat instantanément. Cette analyse explique comment configurer votre catalogue pour la vente sociale et comment utiliser les micro-influenceurs pour driver du trafic qualifié directement vers vos produits phares.",
        points: [
          "Configuration des catalogues Facebook & Instagram Shopping",
          "Stratégie de Live Shopping : engagement et conversion",
          "Gestion du service client via les messageries sociales",
          "Analyse du tunnel de conversion Social-to-Sale"
        ]
      }
    ]
  },
  "veille-strategique-decryptage": {
    icon: Search,
    color: "from-purple-600 to-indigo-800",
    title: "Analyses & Veille Stratégique",
    description: "Décrypter les signaux faibles du marché pour anticiper les tendances de demain.",
    articles: [
      {
        id: "vsd-1",
        title: "Rapport : L'Économie Numérique en Afrique de l'Ouest",
        publishedDate: "15 Mai 2026",
        readTime: "30 min",
        featured: true,
        description: "Une analyse profonde des opportunités sectorielles et des barrières à l'entrée pour les 24 prochains mois.",
        content: "Le marché ouest-africain connaît une accélération sans précédent de la bancarisation mobile. Cela ouvre des opportunités majeures dans la FinTech, la PropTech et la distribution. Nous décryptons les données de consommation data et l'évolution des classes moyennes pour vous aider à positionner vos investissements stratégiques là où la croissance sera la plus forte.",
        points: [
          "Analyse démographique et pouvoir d'achat par segment",
          "Cartographie des acteurs dominants et des nouveaux entrants",
          "Impact des nouvelles réglementations sur la protection des données",
          "Prospective technologique : 5G, IoT et services de proximité"
        ]
      }
    ]
  }
};

// --- COMPOSANT PRINCIPAL (LOGIQUE DE RENDU FINAL) ---
const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();

  // Correction automatique pour les slugs approchants
  const getCategory = () => {
    if (!slug) return null;
    if (blogCategoriesData[slug]) return blogCategoriesData[slug];
    
    // Mapping de secours pour éviter le "Non trouvé"
    const redirects: any = {
      "analyses-veille": "veille-strategique-decryptage",
      "design-graphique": "conseils-marketing",
      "marketing-digital": "marketing-digital-social-media",
      "commercial": "vente-developpement-commercial"
    };
    
    return blogCategoriesData[redirects[slug]] || null;
  };

  const category = getCategory();

  // Scroll en haut de page lors du changement de catégorie
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!category) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl max-w-lg text-center border border-gray-100">
          <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <Search className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-4xl font-black mb-4 text-gray-900">Expertise introuvable</h1>
          <p className="text-gray-600 mb-10 text-lg">Le lien semble rompu ou la catégorie a été renommée par notre équipe stratégique.</p>
          <Link to="/blog" className="inline-flex items-center gap-3 bg-sunuBlue text-white px-10 py-4 rounded-full font-black hover:bg-sunuOrange transition-all shadow-lg shadow-sunuBlue/20">
            <ArrowLeft className="w-5 h-5" /> Explorer le blog
          </Link>
        </div>
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
        {/* HERO DYNAMIQUE */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="container mx-auto max-w-6xl relative z-10">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sunuBlue font-bold mb-12 hover:text-sunuOrange transition-colors group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" /> 
              Retour au hub de connaissances
            </Link>

            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className={`bg-gradient-to-br ${category.color} w-32 h-32 rounded-[2.5rem] flex items-center justify-center flex-shrink-0 shadow-2xl shadow-indigo-500/20 rotate-3`}>
                <Icon className="w-16 h-16 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-5xl md:text-8xl font-black mb-6 text-gray-900 tracking-tighter">
                  {category.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 max-w-3xl font-medium leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
          {/* Décoration d'arrière-plan */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-sunuOrange/5 blur-[120px] rounded-full -mr-20"></div>
        </section>

        {/* GRILLE D'ARTICLES */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            {/* ARTICLES À LA UNE */}
            {featuredArticles.length > 0 && (
              <div className="mb-24">
                <div className="flex items-center gap-6 mb-12">
                  <h2 className="text-4xl font-black text-gray-900">Analyses Premium</h2>
                  <div className="h-1 flex-grow bg-gray-100 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {featuredArticles.map((article: any) => (
                    <ArticleCard key={article.id} article={article} isFeatured={true} />
                  ))}
                </div>
              </div>
            )}

            {/* AUTRES ARTICLES */}
            {regularArticles.length > 0 && (
              <div>
                <div className="flex items-center gap-6 mb-12">
                  <h2 className="text-4xl font-black text-gray-900">Bibliothèque d'expertise</h2>
                  <div className="h-1 flex-grow bg-gray-100 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularArticles.map((article: any) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* SECTION CONTACT / CTA */}
        <section className="mt-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-gray-900 rounded-[4rem] p-12 md:p-24 text-white text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                  Prêt à passer <br className="hidden md:block" /> à l'action ?
                </h2>
                <p className="text-xl text-gray-400 mb-14 max-w-2xl mx-auto leading-relaxed">
                  Nos consultants transforment ces analyses en plans d'exécution concrets pour votre business. Parlons de vos objectifs.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="bg-sunuOrange text-white px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-sunuOrange/30">
                    Prendre rendez-vous
                  </button>
                  <button className="bg-white/5 backdrop-blur-xl text-white border border-white/10 px-12 py-6 rounded-full font-black text-xl hover:bg-white/10 transition-all">
                    Demander un audit gratuit
                  </button>
                </div>
              </div>
              {/* Éléments design abstraits */}
              <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-sunuOrange blur-[150px] rounded-full"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sunuBlue blur-[150px] rounded-full"></div>
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
