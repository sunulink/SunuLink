import { Mail, Phone, LucideIcon } from "lucide-react";

// --- INTERFACES ---

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
  name: string;
  duration: string;
  price: string;
  description: string;
  features: string[];
  icon: "sparkles" | "star" | "crown";
  gradient: string;
  recommended?: boolean;
}

export interface PortfolioItem {
  src: string;
  alt: string;
  category: string;
  title: string;
}

// --- DONNÉES ---

export const heroImages: HeroImage[] = [
  {
    src: "/img/IA.jpg",
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
    description: "Nous construisons avec vous une vision claire et durable de votre communication."
  },
  {
    id: 2,
    title: "Création Visuelle & Contenus",
    image: "/img/graphism.jpg",
    description: "Nous donnons forme et émotion à vos idées. Chaque visuel est pensé pour captiver."
  },
  {
    id: 3,
    title: "Branding & Positionnement",
    image: "/img/strategie-marketing-d-entreprise.jpg",
    description: "Nous révélons la force émotionnelle et stratégique de votre marque."
  },
  {
    id: 4,
    title: "Digital, Réseaux & SEO",
    image: "/img/seo.jpg",
    description: "Nous façonnons votre présence digitale avec méthode et performance."
  },
  {
    id: 5,
    title: "Développement Commercial",
    image: "/img/marketing_business_plan.jfif",
    description: "Nous transformons vos opportunités en résultats concrets."
  },
  {
    id: 6,
    title: "Événementiel & Expérientiel",
    image: "/img/evenmentiel.jpg",
    description: "Nous créons des événements qui laissent une empreinte durable."
  }
];

export const contactInfo: ContactInfo[] = [
  { icon: Mail, title: "Email", value: "infosunulink@gmail.com", link: "mailto:infosunulink@gmail.com" },
  { icon: Phone, title: "Téléphone", value: "+221 78 593 83 69", link: "tel:+221785938369" },
  { icon: Phone, title: "WhatsApp", value: "+221 76 726 38 42", link: "https://wa.me/221767263842" },
];

export const packs: Pack[] = [
  {
    name: "PACK TERANGA",
    duration: "3 mois",
    price: "450K Fcfa / mois",
    description: "Lancer sa communication proprement",
    features: ["15 visuels / mois", "4 vidéos courtes", "Stories quotidiennes", "Gestion FB + IG"],
    icon: "sparkles",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "PACK XEEWAL",
    duration: "6 mois",
    price: "750K Fcfa / mois",
    description: "Accélérer sa croissance",
    features: ["30 visuels / mois", "8 vidéos courtes", "1 vidéo pro", "Boost sponsorisé"],
    icon: "star",
    gradient: "from-orange-500 to-yellow-500",
    recommended: true
  },
  {
    name: "PACK BUUR",
    duration: "1 an",
    price: "1.499K Fcfa / mois",
    description: "Dominer son marché",
    features: ["60 visuels / mois", "15 vidéos courtes", "2 vidéos pro", "Shooting trimestriel"],
    icon: "crown",
    gradient: "from-purple-600 to-pink-600"
  }
];

export const collaborateurs = [
  { name: "FREHUP", logo: "/collaborateurs/LOGO FREHUP.png" },
  { name: "MEER JUS", logo: "/collaborateurs/LOGO MEER JUS.png" },
  { name: "NATAA", logo: "/collaborateurs/LOGO NATAA.png" },
  { name: "BABELLE", logo: "/collaborateurs/LOGO-ADJA-FRANCE-BABELLE.png" },
  { name: "GAINDE", logo: "/collaborateurs/LOGO-GAINDE.png" },
  { name: "GLOBAL FISH", logo: "/collaborateurs/LOGO-GLOBAL-FISH-RFT.png" },
  { name: "KING MOUSSA", logo: "/collaborateurs/LOGO-KING-MOUSSA.png" },
  { name: "MISS MBOURACKE", logo: "/collaborateurs/LOGO-MISS-MBOURACKE.png" },
  { name: "PROMOBILIERE", logo: "/collaborateurs/LOGO-SCI-LA-PROMOBILIERE.png" },
  { name: "SOUFFLE DE VIE", logo: "/collaborateurs/LOGO-SOFFLE-DE-VIE.png" },
  { name: "SenHorti", logo: "/collaborateurs/LOGO-SenHorti-Group.png" },
];

export const portfolioImages: PortfolioItem[] = [
  { src: "/portfolio/1.jpg", alt: "Design 1", category: "Branding", title: "Identité Visuelle" },
  { src: "/portfolio/2.jpg", alt: "Design 2", category: "Branding", title: "Concept Créatif" },
  { src: "/portfolio/BRANDING PUB3.png", alt: "Pub 3", category: "Marketing", title: "Campagne 360°" },
  { src: "/portfolio/FLYERS.png", alt: "Flyers", category: "Print", title: "Design Flyer" },
  { src: "/portfolio/MOCKUP 1 EMBALLAGE PRO.png", alt: "Packaging", category: "Packaging", title: "Design Produit" },
  { src: "/portfolio/MOCKUP FLACON HUILE 3.png", alt: "Bouteille", category: "Packaging", title: "Flacon Premium" },
];

export const socialLinks = [
  { name: "Facebook", url: "https://facebook.com", icon: "/facebook.svg", iconSize: "w-4 h-4" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin.svg", iconSize: "w-4 h-4" },
  { name: "Instagram", url: "https://instagram.com", icon: "/instagram.svg", iconSize: "w-5 h-5" }
];
