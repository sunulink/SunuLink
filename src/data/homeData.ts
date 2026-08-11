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

export interface Pack {
  slug: string;
  name: string;
  duration: string;
  price: string;
  period?: string;
  tagline: string;
  description: string;
  features: string[];
  icon: "sparkles" | "star" | "crown" | "link-ia-start" | "link-ia-growth" | "link-ia-transformation";
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

// Alias exporté sous le nom de packsPub pour matcher avec le premier composant PacksSection
export const packsPub: Pack[] = [
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

// Conserver l'export "packs" original pour assurer la compatibilité ascendante
export const packs = packsPub;

export const testimonials: Testimonial[] = [
  {
    name: "Amadou Diallo",
    company: "CEO, TechStart Sénégal",
    text: "SUNULINK CONSULTING a transformé notre présence digitale. Leur approche stratégique et leur créativité ont dépassé nos attentes.",
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
  }
];

export const collaborateurs = [
  { name: "Agence Babelle", logo: "/collaborateurs/logo-babelle.png" },
  { name: "FREHUP", logo: "/collaborateurs/LOGO FREHUP.png" },
  { name: "MEER JUS", logo: "/collaborateurs/LOGO MEER JUS.png" },
  { name: "NATAA", logo: "/collaborateurs/LOGO NATAA.png" },
  { name: "Femezon", logo: "/collaborateurs/femezon-logo.png" },
  { name: "Biba Séduction", logo: "/collaborateurs/logo-biba-seduction.png" },
  { name: "Café", logo: "/collaborateurs/logo-cafe.png" },
  { name: "De Bouche Bée", logo: "/collaborateurs/logo-de-bouche-bae.png" },
  { name: "Faddeco", logo: "/collaborateurs/logo-faddeco.png" },
  { name: "Miss Mbouracke", logo: "/collaborateurs/LOGO-MISS-MBOURACKE.png" },
  { name: "Global Fish RFT", logo: "/collaborateurs/LOGO-GLOBAL-FISH-RFT.png" },
  { name: "Souffle de Vie", logo: "/collaborateurs/LOGO-SOFFLE-DE-VIE.png" }
];

export const portfolioImages = [
  { src: "/portfolio/1.png", alt: "Design graphique 1", category: "branding" },
  { src: "/portfolio/2.png", alt: "Design graphique 2", category: "branding" },
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

export const packsIA: Pack[] = [
  {
    slug: "link-ia-start",
    name: "LINK IA START",
    duration: "Engagement : 3 mois recommandé",
    price: "500 000 FCFA",
    period: "/ mois",
    tagline: "Structurer son entreprise et automatiser l’essentiel.",
    description: "Solution pour PME et startups souhaitant intégrer progressivement l’intelligence artificielle.",
    icon: "link-ia-start",
    gradient: "from-blue-500 to-cyan-500",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    recommended: false,
    badge: "IA Initial",
    features: [
      "Audit IA",
      "CRM simple",
      "Automatisation tâches",
      "Assistant IA",
      "Formation équipe"
    ]
  },
  {
    slug: "link-ia-growth",
    name: "LINK IA GROWTH",
    duration: "Engagement : 6 mois recommandé",
    price: "900 000 FCFA",
    period: "/ mois",
    tagline: "Automatiser ses processus pour accélérer.",
    description: "Solution destinée aux entreprises en croissance souhaitant automatiser plusieurs fonctions clés.",
    icon: "link-ia-growth",
    gradient: "from-orange-500 to-yellow-500",
    buttonColor: "bg-orange-500 hover:bg-orange-600",
    recommended: true,
    badge: "Recommandé",
    features: [
      "CRM avancé",
      "Marketing automation",
      "Chatbot intelligent",
      "Analyse données",
      "Process automatisés"
    ]
  },
  {
    slug: "link-ia-transformation",
    name: "LINK IA TRANSFORMATION",
    duration: "Grandes entreprises",
    price: "Sur devis",
    period: "",
    tagline: "Transformer votre entreprise grâce à l’IA.",
    description: "Solution stratégique destinée aux entreprises et institutions souhaitant intégrer l’intelligence artificielle dans leur fonctionnement global.",
    icon: "link-ia-transformation",
    gradient: "from-purple-600 to-pink-600",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
    recommended: false,
    badge: "Corporate",
    features: [
      "Audit IA 360°",
      "Stratégie IA",
      "Transformation processus",
      "Data & KPI",
      "Accompagnement direction"
    ]
  }
];
