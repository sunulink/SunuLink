import { Mail, Phone, LucideIcon } from "lucide-react";

export interface HeroImage {
  src: string;
  alt: string;
  type: string;
  text: string;
}

export interface Service {
  id: number;
  title: string;
  image: string;
  description: string;
}

export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  value: string;
  link: string;
}

export interface Testimonial {
  name: string;
  company: string;
  text: string;
  rating: number;
}

export interface PackFeature {
  text: string;
}

export interface Pack {
  slug: string;
  name: string;
  duration: string;
  price: string;
  period?: string; // Optionnel pour gérer le vide de "Sur devis"
  tagline: string;
  description: string;
  features: string[];
  icon: "sparkles" | "star" | "crown";
  gradient: string;
  buttonColor?: string;
  badge?: string;
  recommended?: boolean;
}

export const heroImages: HeroImage[] = [
  {
    src: "/portfolio/link-ia.JPG",
    alt: "Intelligence Artificielle",
    type: "cover",
    text: "Nous intégrons l'IA au service de votre efficacité et créativité. Nos solutions intelligentes optimisent vos performances et enrichissent votre stratégie.",
  },
];

export const services: Service[] = [
  {
    id: 1,
    title: "Stratégie & Conseil",
    image: "/img/strategie.jpg",
    description: "Nous construisons avec vous une vision claire et durable de votre communication. De l'analyse à l'action, nous transformons vos ambitions en plans stratégiques mesurables."
  },
  {
    id: 2,
    title: "Création Visuelle & Contenus",
    image: "/img/graphism.jpg",
    description: "Nous donnons forme et émotion à vos idées. Chaque visuel, chaque mot et chaque concept sont pensés pour captiver, inspirer et engager."
  },
  {
    id: 3,
    title: "Branding & Positionnement",
    image: "/img/strategie-marketing-d-entreprise.jpg",
    description: "Nous révélons la force émotionnelle et stratégique de votre marque. De la conception à la mise en œuvre, nous façonnons une identité cohérente et différenciante."
  },
  {
    id: 4,
    title: "Digital, Réseaux & SEO",
    image: "/img/seo.jpg",
    description: "Nous façonnons votre présence digitale avec méthode, créativité et performance. De la conception web à la gestion de vos réseaux, nous bâtissons votre empreinte numérique."
  },
  {
    id: 5,
    title: "Développement Commercial & Partenariats",
    image: "/img/marketing_business_plan.jfif",
    description: "Nous transformons vos opportunités en résultats concrets. Nos experts développent des stratégies qui renforcent vos ventes et partenariats."
  },
  {
    id: 6,
    title: "Événementiel & Expérientiel",
    image: "/img/evenmentiel.jpg",
    description: "Nous créons des événements qui racontent votre histoire et laissent une empreinte durable dans les esprits. De la conception à la mise en scène, chaque détail compte."
  }
];

export const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "infosunulink@gmail.com",
    link: "mailto:infosunulink@gmail.com",
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "+221 71 008 59 15",
    link: "tel:+221710085915",
  },
  {
    icon: Phone,
    title: "WhatsApp",
    value: "+221 71 008 59 15",
    link: "https://wa.me/221710085915", 
  },
];

export const packs: Pack[] = [
  {
    slug: "teranga",
    name: "PACK TERANGA",
    duration: "Engagement : 3 mois recommandé",
    price: "450 000 FCFA",
    period: "/ mois",
    tagline: "Lancer sa communication proprement et efficacement.",
    description: "Le Pack Teranga accompagne les entreprises souhaitant construire une présence digitale professionnelle avec une communication claire, régulière et cohérente.",
    icon: "sparkles",
    gradient: "from-blue-500 to-cyan-500",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    badge: "Débuter",
    features: [
      "Mini stratégie digitale",
      "Création contenus premium",
      "Gestion Facebook & Instagram",
      "Calendrier éditorial",
      "Reporting mensuel"
    ]
  },
  {
    slug: "xeewal",
    name: "PACK XEEWAL",
    duration: "Engagement : 6 mois recommandé",
    price: "750 000 FCFA",
    period: "/ mois",
    tagline: "Accélérer sa croissance et renforcer son image.",
    description: "Une solution destinée aux entreprises souhaitant développer leur visibilité, renforcer leur image et construire une audience engagée.",
    icon: "star",
    gradient: "from-orange-500 to-yellow-500",
    buttonColor: "bg-orange-500 hover:bg-orange-600",
    recommended: true,
    badge: "Le plus choisi",
    features: [
      "Stratégie marketing avancée",
      "Création contenus premium",
      "Gestion multi-réseaux",
      "Shooting contenu",
      "Publicité digitale"
    ]
  },
  {
    slug: "buur",
    name: "PACK BUUR",
    duration: "Engagement : 12 mois recommandé",
    price: "1 750 000 FCFA",
    period: "/ mois",
    tagline: "Dominer son marché et devenir une référence.",
    description: "L’accompagnement ultime pour les entreprises souhaitant externaliser leur direction marketing et construire une marque forte.",
    icon: "crown",
    gradient: "from-purple-600 to-pink-600",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
    badge: "Premium",
    features: [
      "Direction marketing",
      "Production intensive",
      "Gestion complète réseaux sociaux",
      "Automatisation",
      "KPI avancés"
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Amadou Diallo",
    company: "CEO, TechStart Sénégal",
    text: "Sunu Link a transformé notre présence digitale. Leur approche stratégique et leur créativité ont dépassé nos attentes.",
    rating: 5
  },
  {
    name: "Fatou Seck",
    company: "Directrice Marketing, Fashion Group",
    text: "Une équipe professionnelle et réactive. Nos campagnes n'ont jamais eu autant d'impact depuis que nous travaillons avec eux.",
    rating: 5
  },
  {
    name: "Moussa Kane",
    company: "Fondateur, EcoSolutions",
    text: "Le meilleur investissement pour notre marque. Ils ont su comprendre notre vision et la traduire en résultats concrets.",
    rating: 5
  },
  {
    name: "Aïcha Ndiaye",
    company: "Directrice, Innovation Hub",
    text: "Un accompagnement exceptionnel du début à la fin. Leur expertise nous a permis de nous démarquer sur notre marché.",
    rating: 5
  },
  {
    name: "Ibrahima Sarr",
    company: "Fondateur, Digital Solutions",
    text: "Professionnalisme, créativité et résultats. Sunu Link dépasse constamment nos attentes.",
    rating: 5
  },
  {
    name: "Mariama Touré",
    company: "DG, Retail Excellence",
    text: "Grâce à Sunu Link, notre marque a gagné en visibilité et en crédibilité. Une vraie transformation !",
    rating: 5
  },
  {
    name: "Cheikh Mbaye",
    company: "Directeur Commercial, FoodTech SA",
    text: "Un accompagnement personnalisé et des résultats au-delà de nos espérances. Je recommande vivement !",
    rating: 5
  },
  {
    name: "Khadija Diop",
    company: "Fondatrice, Beauty & Wellness",
    text: "Leur créativité et leur sens du détail ont fait toute la différence pour notre lancement. Merci Sunu Link !",
    rating: 5
  },
  {
    name: "Ousmane Ba",
    company: "CEO, Tech Innovations",
    text: "Une équipe dynamique qui comprend vraiment les enjeux du digital. Nos ventes ont triplé en 6 mois !",
    rating: 5
  },
  {
    name: "Ndeye Fall",
    company: "Directrice, Event Masters",
    text: "Sunu Link a révolutionné notre communication événementielle. Chaque projet est un succès garanti !",
    rating: 5
  },
  {
    name: "Mamadou Sow",
    company: "Président, Export Group",
    text: "Un partenaire fiable qui nous aide à conquérir de nouveaux marchés avec une stratégie claire et efficace.",
    rating: 5
  },
  {
    name: "Awa Diagne",
    company: "CEO, Fashion Forward",
    text: "Ils ont su capturer l'essence de notre marque et la traduire en visuels percutants. Un travail remarquable !",
    rating: 5
  },
  {
    name: "Boubacar Niang",
    company: "Fondateur, Agro Business",
    text: "Leur expertise en digital et en stratégie nous a permis de nous positionner comme leader de notre secteur.",
    rating: 5
  },
  {
    name: "Coumba Cissé",
    company: "DG, Health Plus",
    text: "Un accompagnement de qualité du début à la fin. Nos campagnes n'ont jamais été aussi performantes !",
    rating: 5
  },
  {
    name: "Modou Gueye",
    company: "Directeur, Edu Solutions",
    text: "Sunu Link a transformé notre image de marque et boosté notre notoriété. Des professionnels à l'écoute !",
    rating: 5
  }
];

export const collaborateurs = [
  { name: "Agence Babelle", logo: "/collaborateurs/logo-babelle.png" },
  { name: "FREHUP", logo: "/collaborateurs/LOGO FREHUP.png" },
  { name: "MEER JUS", logo: "/collaborateurs/LOGO MEER JUS.png" },
  { name: "NATAA", logo: "/collaborateurs/LOGO NATAA.png" },
  { name: "GAINDE", logo: "/collaborateurs/LOGO-GAINDE.png" },
  { name: "GLOBAL FISH RFT", logo: "/collaborateurs/LOGO-GLOBAL-FISH-RFT.png" },
  { name: "KING MOUSSA", logo: "/collaborateurs/LOGO-KING-MOUSSA.png" },
  { name: "MISS MBOURACKE", logo: "/collaborateurs/LOGO-MISS-MBOURACKE.png" },
  { name: "SCI LA PROMOBILIERE", logo: "/collaborateurs/LOGO-SCI-LA-PROMOBILIERE.png" },
  { name: "SOFFLE DE VIE", logo: "/collaborateurs/LOGO-SOFFLE-DE-VIE.png" },
  { name: "SenHorti Group", logo: "/collaborateurs/LOGO-SenHorti-Group.png" },
  { name: "BDA SERVICE", logo: "/collaborateurs/logo-bda-service.png" },
];

export const portfolioImages = [
  { src: "/portfolio/1.png", alt: "Design graphique 1", category: "branding" },
  { src: "/portfolio/2.png", alt: "Design graphique 2", category: "branding" },
  { src: "/portfolio/3.png", alt: "Design graphique 3", category: "branding" },
  { src: "/portfolio/BRANDING PUB3.png", alt: "Branding Pub 3", category: "branding" },
  { src: "/portfolio/BRANDING PUB4.png", alt: "Branding Pub 4", category: "branding" },
  { src: "/portfolio/BRANDING PUB5.png", alt: "Branding Pub 5", category: "branding" },
  { src: "/portfolio/BRANDING PUB8.png", alt: "Branding Pub 8", category: "branding" },
  { src: "/portfolio/FLYERS.png", alt: "Flyers design", category: "print" },
  { src: "/portfolio/FLYERS 2.png", alt: "Flyers design 2", category: "print" },
  { src: "/portfolio/FLYERS oil 1.png", alt: "Flyers oil", category: "print" },
  { src: "/portfolio/MOCKUP 1 EMBALLAGE PRO.png", alt: "Emballage Pro 1", category: "packaging" },
  { src: "/portfolio/MOCKUP 1 EMBALLAGES PRO BI.png", alt: "Emballages Pro BI", category: "packaging" },
  { src: "/portfolio/MOCKUP 2 EMBALLAGES PRO.png", alt: "Emballages Pro 2", category: "packaging" },
  { src: "/portfolio/MOCKUP 2 EMBALLAGES.png", alt: "Emballages 2", category: "packaging" },
  { src: "/portfolio/MOCKUP FLACON HUILE 3.png", alt: "Flacon Huile", category: "packaging" },
  { src: "/portfolio/MOCKUP PORT-A CLE.png", alt: "Porte-clé", category: "packaging" },
  { src: "/portfolio/MOCKUP SACHET.png", alt: "Sachet", category: "packaging" },
  { src: "/portfolio/MOCKUP TORSSON CHEF.png", alt: "Torsson Chef", category: "packaging" },
  { src: "/portfolio/BOUTEILLE 2.png", alt: "Bouteille design 2", category: "packaging" },
  { src: "/portfolio/BOUTEILLE 3.png", alt: "Bouteille design 3", category: "packaging" },
  { src: "/portfolio/oil1.png", alt: "Oil design", category: "packaging" },
];

export const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/19oMyxQApw/?mibextid=LQQJ4d",
    icon: "/facebook-176-svgrepo-com.svg",
    iconSize: "w-4 h-4"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/sunulink-consulting/",
    icon: "/linkedin-svgrepo-com.svg",
    iconSize: "w-4 h-4"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/sunulink_consulting?igsh=MTh6dndrcGlja2lrNQ%3D%3D&utm_source=qr",
    icon: "/instagram-svgrepo-com.svg",
    iconSize: "w-5 h-5"
  }
];

// CRITIQUE & CONFIGURATION DES PACKS IA ALIGNÉE SUR LE COMPOSANT
export const packsIA: Pack[] = [
  {
    slug: "link-ia-start",
    name: "LINK IA START",
    duration: "Engagement : 3 mois recommandé",
    price: "500 000 FCFA",
    period: "/ mois",
    tagline: "Structurer son entreprise et automatiser l’essentiel.",
    description: "Solution pour PME et startups souhaitant intégrer progressivement l’intelligence artificielle.",
    icon: "sparkles",
    gradient: "from-blue-500 to-cyan-500",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    recommended: false,
    badge: "IA Initial"
  },
  {
    slug: "link-ia-growth",
    name: "LINK IA GROWTH",
    duration: "Engagement : 6 mois recommandé",
    price: "900 000 FCFA",
    period: "/ mois",
    tagline: "Automatiser ses processus pour accélérer.",
    description: "Solution destinée aux entreprises en croissance souhaitant automatiser plusieurs fonctions clés.",
    icon: "star",
    gradient: "from-orange-500 to-yellow-500",
    buttonColor: "bg-orange-500 hover:bg-orange-600",
    recommended: true,
    badge: "Recommandé"
  },
  {
    slug: "link-ia-transformation",
    name: "LINK IA TRANSFORMATION",
    duration: "Grandes entreprises",
    price: "Sur devis",
    period: "",
    tagline: "Transformer votre entreprise grâce à l’IA.",
    description: "Solution stratégique destinée aux entreprises et institutions souhaitant intégrer l’intelligence artificielle dans leur fonctionnement global.",
    icon: "crown",
    gradient: "from-purple-600 to-pink-600",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
    recommended: false,
    badge: "Corporate"
  }
];
