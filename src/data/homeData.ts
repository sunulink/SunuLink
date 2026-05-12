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
  name: string;
  duration: string;
  price: string;
  description: string;
  features: string[];
  icon: "sparkles" | "star" | "crown";
  gradient: string;
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
    value: "+221 78 593 83 69",
    link: "tel:+221785938369",
  },
  {
    icon: Phone, // icône phone
    title: "WhatsApp",
    value: "+221 76 973 00 00",
    link: "https://wa.me/221769730000", 
  },
];

export const packs: Pack[] = [
  {
    name: "PACK TERANGA",
    duration: "3 mois",
    price: "450K Fcfa / mois",
    description: "Lancer sa communication proprement",
    features: [
      "15 visuels premium / mois",
      "4 vidéos courtes / mois",
      "Stories quotidiennes",
      "Gestion FB + IG",
      "Reporting mensuel"
    ],
    icon: "sparkles",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "PACK XEEWAL",
    duration: "6 mois",
    price: "750K Fcfa / mois",
    description: "Accélérer sa croissance",
    features: [
      "30 visuels premium / mois",
      "8 vidéos courtes / mois",
      "1 vidéo pro / mois",
      "Gestion multicanale",
      "Boost sponsorisé"
    ],
    icon: "star",
    gradient: "from-orange-500 to-yellow-500",
    recommended: true
  },
  {
    name: "PACK BUUR",
    duration: "1 an",
    price: "1.499K Fcfa / mois",
    description: "Dominer son marché",
    features: [
      "60 visuels premium / mois",
      "15 vidéos courtes / mois",
      "2 vidéos pro / mois",
      "Shooting trimestriel",
      "Direction marketing"
    ],
    icon: "crown",
    gradient: "from-purple-600 to-pink-600"
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
  { name: "FREHUP", logo: "/collaborateurs/LOGO FREHUP.png" },
  { name: "MEER JUS", logo: "/collaborateurs/LOGO MEER JUS.png" },
  { name: "NATAA", logo: "/collaborateurs/LOGO NATAA.png" },
  { name: "ADJA FRANCE BABELLE", logo: "/collaborateurs/LOGO-ADJA-FRANCE-BABELLE.png" },
  { name: "GAINDE", logo: "/collaborateurs/LOGO-GAINDE.png" },
  { name: "GLOBAL FISH RFT", logo: "/collaborateurs/LOGO-GLOBAL-FISH-RFT.png" },
  { name: "KING MOUSSA", logo: "/collaborateurs/LOGO-KING-MOUSSA.png" },
  { name: "MISS MBOURACKE", logo: "/collaborateurs/LOGO-MISS-MBOURACKE.png" },
  { name: "SCI LA PROMOBILIERE", logo: "/collaborateurs/LOGO-SCI-LA-PROMOBILIERE.png" },
  { name: "SOFFLE DE VIE", logo: "/collaborateurs/LOGO-SOFFLE-DE-VIE.png" },
  { name: "SenHorti Group", logo: "/collaborateurs/LOGO-SenHorti-Group.png" },
  { name: "BDA SERVICE", logo: "/collaborateurs/BDA-SERVICE-LOGO.png" },
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

export const packsIA: Pack[] = [
  {
    name: "Pack de Démarrage IA",
    duration: "3 mois",
    price: "450K Fcfa / mois",
    description: "Lancer sa communication proprement",
    features: [
      "15 visuels premium / mois",
      "4 vidéos courtes / mois",
      "Stories quotidiennes",
      "Gestion FB + IG",
      "Reporting mensuel"
    ],
    icon: "sparkles",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Pack Performance IA",
    duration: "6 mois",
    price: "850K Fcfa / mois",
    description: "Accélérer sa croissance",
    features: [
      "30 visuels premium / mois",
      "8 vidéos courtes / mois",
      "1 vidéo pro / mois",
      "Gestion multicanale",
      "Boost sponsorisé"
    ],
    icon: "star",
    gradient: "from-orange-500 to-yellow-500",
    recommended: true
  },
  {
    name: "Pack IA 360° Domination",
    duration: "1 an",
    price: "1.499K Fcfa / mois",
    description: "Dominer son marché",
    features: [
      "60 visuels premium / mois",
      "15 vidéos courtes / mois",
      "2 vidéos pro / mois",
      "Shooting trimestriel",
      "Direction marketing"
    ],
    icon: "crown",
    gradient: "from-purple-600 to-pink-600"
  }
];
