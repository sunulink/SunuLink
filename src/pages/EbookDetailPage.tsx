import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Download,
  FileText,
  Lightbulb,
  Mail,
  Target,
  Users,
  X,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// API Google Apps Script déployée pour enregistrer les demandes de téléchargement.
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxuYFqc86JT3ftortzM4hWoKIYzzw7qhyf0giTDw_UnmN1o_0tylRNyG0udX6pPnRI/exec";

interface EbookSection {
  title: string;
  description: string;
}

interface EbookData {
  id: number;
  title: string;
  category: string;
  group: string;
  description: string;
  slug: string;
  cover?: string;
  pages: string;
  readTime: string;
  publishedDate?: string;
  author: string;
  sections: EbookSection[];
}


// ============================================================================
// CONFIGURATION DES PDF — 20 GUIDES
// ============================================================================
// Les fichiers placés dans public/assets/docs/ sont accessibles depuis le site
// avec une URL commençant par /assets/docs/.
// Les noms des 20 PDF proviennent de l’archive fournie. Les fichiers sont placés
// dans public/assets/docs/ ; le nom « Tendances & Actualités » a également été
// renseigné à partir de cette archive. Conservez les clés (slugs) à gauche.
// Ne modifiez pas les clés à gauche : elles correspondent aux slugs des guides.
// Tant qu'une valeur commence par "REMPLACER_PAR_", le téléchargement reste
// désactivé pour ce guide et l'adresse e-mail n'est pas envoyée à l'API.
// ============================================================================
const PDF_DIRECTORY = "/assets/docs";

const EBOOK_PDF_FILES: Record<string, string> = {
  "conseils-astuces-marketing": "SunuLink Consulting - E-book Conseils & Astuces Marketing 2026-2027.pdf",
  "tendances-actualites": "SunuLink Consulting - E-book Tendances & Actualités 2026-2027.pdf",
  "strategies-communication": "SunuLink Consulting - E-book Stratégies de Communication 2026-2027 - Copie.pdf",
  "entrepreneuriat-business": "SunuLink Consulting - E-book Entrepreneuriat & Business 2026-2027.pdf",
  "branding-identite-visuelle": "SunuLink Consulting - E-book Branding & Identité Visuelle 2026-2027-1.pdf",
  "communication-africaine": "SunuLink Consulting - E-book Communication Africaine 2026-2027-1.pdf",
  "communication-360-strategie-globale": "SunuLink Consulting - E-book Communication 360° & Stratégie globale 2026-2027.pdf",
  "communication-corporate-institutionnelle": "SunuLink Consulting - E-book Communication Corporate & Institutionnelle 2026-2027.pdf",
  "marketing-digital-seo": "SunuLink Consulting - E-book Marketing Digital & SEO 2026-2027.pdf",
  "reseaux-sociaux": "SunuLink Consulting - E-book Réseaux Sociaux 2026-2027-1.pdf",
  "creation-contenu-storytelling": "SunuLink Consulting - E-book Création de contenu & Storytelling 2026-2027.pdf",
  "design-graphique-creation-visuelle": "SunuLink Consulting - E-book Design Graphique & Création Visuelle 2026-2027.pdf",
  "innovation-ia": "SunuLink Consulting - E-book Innovation & IA 2026-2027.pdf",
  "publicite-media-buying": "SunuLink Consulting - E-book Publicité & Média Buying 2026-2027.pdf",
  "audiovisuel-motion-design": "SunuLink Consulting - E-book Audiovisuel & Motion Design 2026-2027.pdf",
  "evenementiel-activation-marque": "SunuLink Consulting - E-book Événementiel & Activation de Marque 2026-2027.pdf",
  "success-stories": "SunuLink Consulting - E-book Success Stories 2026-2027.pdf",
  "interviews-portraits": "SunuLink Consulting - E-book Interviews & Portraits 2026-2027.pdf",
  "tutoriels-guides": "SunuLink Consulting - E-book Tutoriels & Guides 2026-2027.pdf",
  "communication-crise-reputation": "SunuLink Consulting - E-book Communication de Crise & Réputation 2026-2027.pdf",
};

/** Construit l'URL publique du PDF seulement si son nom exact est renseigné. */
const getEbookPdfUrl = (slug: string): string | undefined => {
  const fileName = EBOOK_PDF_FILES[slug]?.trim();

  if (!fileName || fileName.startsWith("REMPLACER_PAR_")) {
    return undefined;
  }

  return `${PDF_DIRECTORY}/${encodeURIComponent(fileName)}`;
};

const GUIDE_AUDIENCES = [
  {
    title: "DIRIGEANTS",
    description: "Pour prendre de meilleures décisions stratégiques.",
  },
  {
    title: "ENTREPRENEURS",
    description: "Pour structurer et développer leur activité.",
  },
  {
    title: "RESPONSABLES MARKETING",
    description: "Pour renforcer leur visibilité et leurs performances.",
  },
  {
    title: "PROFESSIONNELS",
    description: "Pour développer leurs compétences et anticiper les évolutions du marché.",
  },
];

const GUIDE_BENEFITS = [
  {
    title: "CLARTÉ",
    description: "Mieux comprendre vos enjeux.",
    icon: Lightbulb,
  },
  {
    title: "MÉTHODE",
    description: "Passer de l’idée à une démarche structurée.",
    icon: Target,
  },
  {
    title: "ACTION",
    description: "Transformer les recommandations en décisions concrètes.",
    icon: CheckCircle2,
  },
  {
    title: "PERFORMANCE",
    description: "Construire des actions orientées résultats.",
    icon: ArrowRight,
  },
];

// Pages = nombre réel de pages PDF (couverture et pages liminaires incluses).
// Temps de lecture estimé à partir du volume de texte extrait, à environ 150–200 mots/minute.
const ebooksData: Record<string, EbookData> = {
  "conseils-astuces-marketing": {
    id: 1,
    title: "Conseils & Astuces Marketing",
    category: "Marketing",
    group: "Stratégie & Croissance",
    description:
      "Un guide stratégique qui aide les dirigeants à comprendre ce que le marketing doit réellement accomplir : clarifier le positionnement, mieux connaître son client, construire une marque cohérente et transformer progressivement la visibilité en confiance puis en clients. Il rassemble 20 conseils, des repères de mesure et un plan d’action marketing sur 90 jours.",
    slug: "conseils-astuces-marketing",
    cover: "/img/conseils_astuces_marketing.PNG",
    pages: "48 pages",
    readTime: "50–70 min",
    author: "SunuLink Consulting",
    sections: [
      { title: "Poser les fondations", description: "Comprendre le rôle du marketing, clarifier son positionnement et identifier les besoins de son client idéal avant d’investir." },
      { title: "Construire une marque cohérente", description: "Relier marque, communication et contenus utiles pour créer une identité plus reconnaissable et une proposition de valeur compréhensible." },
      { title: "De la visibilité aux clients", description: "Choisir les bons canaux, installer la confiance et organiser le parcours qui transforme l’attention en opportunités commerciales." },
      { title: "Investir, mesurer et passer à l’action", description: "Utiliser la publicité et l’IA avec méthode, suivre les performances, éviter les erreurs coûteuses et établir un plan marketing sur 90 jours." }
    ],
  },
  "tendances-actualites": {
    id: 2,
    title: "Tendances & Actualités",
    category: "Marketing",
    group: "Stratégie & Croissance",
    description:
      "Un rapport stratégique consacré à 15 tendances qui transforment le marketing, la communication et les entreprises africaines à l’horizon 2027. Il propose une lecture orientée décision : observer les évolutions, comprendre leurs conséquences possibles pour l’entreprise, puis identifier les actions à tester sans suivre aveuglément chaque nouveauté.",
    slug: "tendances-actualites",
    cover: "/img/tendances_actualites.PNG",
    pages: "46 pages",
    readTime: "45–65 min",
    author: "SunuLink Consulting",
    sections: [
      { title: "Quand la technologie change les règles", description: "Explorer le marketing augmenté par l’intelligence artificielle et l’évolution de la recherche, des moteurs classiques aux moteurs de réponse." },
      { title: "Gagner l’attention et mériter la confiance", description: "Comprendre le rôle grandissant de la confiance, de la vidéo, des communautés et des contenus utiles, humains et différenciants." },
      { title: "Données, marchés et conversations", description: "Découvrir les enjeux de personnalisation, de données stratégiques, d’influence des marques africaines et de commerce conversationnel." },
      { title: "Influence, expérience et avenir", description: "Relier créateurs, branding, expérience client et marketing responsable, puis utiliser la synthèse des tendances, la matrice d’action et l’auto-diagnostic." }
    ],
  },
  "strategies-communication": {
    id: 3,
    title: "Stratégies de Communication",
    category: "Communication",
    group: "Stratégie & Croissance",
    description:
      "Un guide pour passer d’actions de communication isolées à une démarche structurée. Il aide à définir des objectifs au service de l’entreprise, comprendre ses publics, clarifier son positionnement, construire des messages cohérents et piloter une stratégie de communication mesurable.",
    slug: "strategies-communication",
    cover: "/img/strategies_communication.PNG",
    pages: "47 pages",
    readTime: "40–60 min",
    author: "SunuLink Consulting",
    sections: [
      { title: "Poser les fondations", description: "Définir ce que la communication doit accomplir, choisir des objectifs utiles, identifier les publics et formuler un positionnement clair." },
      { title: "Un message, une voix", description: "Créer des messages mémorables et construire une identité cohérente avec la perception que l’organisation souhaite installer." },
      { title: "Contenu, canaux et présence digitale", description: "Structurer la stratégie de contenu, sélectionner les canaux pertinents et renforcer la cohérence de la présence numérique." },
      { title: "Autorité, réputation et déploiement", description: "Développer l’influence, prendre en compte les situations sensibles, mesurer les résultats et organiser un plan de communication sur 90 jours." }
    ],
  },
  "entrepreneuriat-business": {
    id: 4,
    title: "Entrepreneuriat & Business",
    category: "Business & Développement",
    group: "Stratégie & Croissance",
    description:
      "Un guide stratégique destiné aux PME, startups, fondateurs et porteurs de projets qui veulent construire une entreprise capable de durer. Il aborde la validation du marché, la proposition de valeur, le modèle économique, la vente, la rentabilité, l’organisation, la trésorerie et le pilotage de la croissance.",
    slug: "entrepreneuriat-business",
    cover: "/img/entrepreneuriat_business.PNG",
    pages: "60 pages",
    readTime: "40–55 min",
    author: "SunuLink Consulting",
    sections: [
      { title: "L’idée et le marché", description: "Passer de l’idée à l’entreprise, identifier un problème réel, comprendre le marché et définir le client idéal." },
      { title: "L’offre et le modèle économique", description: "Construire une proposition de valeur et une offre commerciale, choisir un modèle viable, fixer ses prix et suivre ses marges." },
      { title: "La machine de croissance", description: "Organiser le système commercial, la demande marketing, le branding et l’adoption raisonnée du digital, de l’IA et de l’automatisation." },
      { title: "Organisation, durée et vision", description: "Structurer les processus, le management, la finance et les ressources, puis préparer la croissance avec un tableau de bord et un plan sur 90 jours." }
    ],
  },
  "branding-identite-visuelle": {
    id: 5,
    title: "Branding & Identité Visuelle",
    category: "Branding",
    group: "Communication & Marque",
    description:
      "Ce guide montre pourquoi une marque ne se résume pas à son logo. Il accompagne la construction d’une plateforme de marque, d’un positionnement distinctif, d’une identité visuelle et verbale cohérente, puis d’une expérience reconnaissable sur les différents points de contact.",
    slug: "branding-identite-visuelle",
    cover: "/img/branding_identite_visuelle.PNG",
    pages: "40 pages",
    readTime: "40–55 min",
    author: "SunuLink Consulting",
    sections: [
      { title: "Fondations de marque", description: "Comprendre le branding, construire une plateforme de marque et préciser le positionnement, la mission, la vision, les valeurs et l’audience." },
      { title: "Identité et expression", description: "Travailler la personnalité, le nom, la signature, le territoire verbal, les couleurs, la typographie, la photographie et le système de logo." },
      { title: "Récit et expérience", description: "Utiliser le storytelling, assurer la cohérence de l’expérience de marque et adapter l’expression de la marque au numérique." },
      { title: "Innovation et évolution", description: "Explorer l’usage raisonné de l’IA dans le branding, le rebranding, la mesure de la force de marque et un plan d’action sur 90 jours." }
    ],
  },
  "communication-africaine": {
    id: 6,
    title: "Communication Africaine",
    category: "Communication",
    group: "Communication & Marque",
    description:
      "Un guide qui invite à penser la communication africaine à partir de la diversité réelle des pays, des langues, des cultures et des usages, plutôt que comme un marché unique. Il explore la proximité communautaire, les pratiques mobiles, les marques africaines, l’influence et les façons d’adapter sa stratégie aux contextes locaux et aux ambitions internationales.",
    slug: "communication-africaine",
    cover: "/img/communication_africaine.PNG",
    pages: "43 pages",
    readTime: "40–60 min",
    author: "SunuLink Consulting",
    sections: [
      { title: "Fondations et contextes", description: "Comprendre la pluralité du continent, les contextes culturels, les identités, le rôle de la communauté et l’importance des langues et de la proximité." },
      { title: "Usages numériques", description: "Examiner les réalités d’une Afrique mobile, les réseaux sociaux, la vidéo, les créateurs, les communautés et la confiance." },
      { title: "Marques et territoires", description: "Réfléchir à la communication des marques africaines, à l’équilibre entre héritage et modernité et à la rencontre du local et de l’international." },
      { title: "Business, institutions et action", description: "Relier communication B2B, développement commercial, communication institutionnelle et territoriale, diversité culturelle et plan d’action sur 90 jours." }
    ],
  },
  "communication-360-strategie-globale": {
    id: 7,
    title: "Communication 360° & Stratégie Globale",
    category: "Communication",
    group: "Communication & Marque",
    description:
      "Un guide complet pour aligner la marque, les messages, les canaux et les objectifs business au sein d’un même système de communication. Il propose une démarche allant du diagnostic et du positionnement jusqu’au plan de communication, aux budgets, à l’IA, à la mesure des résultats et à l’adaptation aux marchés africains.",
    slug: "communication-360-strategie-globale",
    cover: "/img/communication_360_strategie_globale.PNG",
    pages: "82 pages",
    readTime: "70–100 min",
    author: "SunuLink Consulting",
    sections: [
      { title: "Fondations stratégiques", description: "Comprendre la communication 360°, réaliser un diagnostic global et définir des objectifs mesurables liés aux priorités de l’organisation." },
      { title: "Marque et messages", description: "Identifier les publics, travailler le positionnement, construire une plateforme de communication et harmoniser l’architecture des messages." },
      { title: "Canaux et déploiement", description: "Organiser la complémentarité du digital, des contenus, des relations publiques, de la communication institutionnelle et du développement commercial." },
      { title: "Pilotage et passage à l’action", description: "Piloter les budgets, les équipes et les validations, intégrer l’IA avec discernement, mesurer le retour sur investissement et planifier les 90 prochains jours." }
    ],
  },
  "communication-corporate-institutionnelle": {
    id: 8,
    title: "Communication Corporate & Institutionnelle",
    category: "Communication",
    group: "Communication & Marque",
    description:
      "Un guide stratégique et pratique pour aligner ce que l’organisation est, ce qu’elle affirme, ce qu’elle fait et ce que ses parties prenantes perçoivent. Il couvre l’identité corporate, le leadership, la communication interne, les relations médias, la présence numérique, la marque employeur, les engagements, les crises et la mesure de la réputation.",
    slug: "communication-corporate-institutionnelle",
    cover: "/img/communication_corporate_institutionnelle.PNG",
    pages: "73 pages",
    readTime: "75–105 min",
    author: "SunuLink Consulting",
    sections: [
      { title: "Fondements et positionnement", description: "Distinguer communication corporate, institutionnelle et commerciale, clarifier l’image de marque, l’identité, le positionnement et les parties prenantes." },
      { title: "Communication interne et leadership", description: "Renforcer la circulation de l’information, mobiliser les collaborateurs autour de la vision et soutenir la communication managériale." },
      { title: "Institutions, médias et numérique", description: "Développer les relations publiques, les relations médias, une présence numérique structurée et une ligne éditoriale corporate." },
      { title: "Engagements, crises et transformations", description: "Travailler la marque employeur, la responsabilité sociétale, la prévention des crises et la communication en période de changement." },
      { title: "Mesure et déploiement", description: "Évaluer réputation et performance, choisir les outils adaptés et organiser une stratégie opérationnelle sur 90 jours." }
    ],
  },
  "marketing-digital-seo": {
    id: 9,
    title: "Marketing Digital & SEO",
    category: "Digital & SEO",
    group: "Digital & Création",
    description:
      "Un guide stratégique pour construire une présence numérique qui ne se limite pas à être en ligne, mais aide l’entreprise à être trouvée, à gagner en crédibilité et à convertir sa visibilité en opportunités. Il relie stratégie digitale, parcours client, référencement naturel, SEO local, réseaux sociaux, publicité, analytics et IA.",
    slug: "marketing-digital-seo",
    cover: "/img/marketing_digital_seo.PNG",
    pages: "51 pages",
    readTime: "40–60 min",
    author: "SunuLink Consulting",
    sections: [
      { title: "Les fondations digitales", description: "Comprendre le marketing digital moderne, bâtir une stratégie et organiser le parcours client ainsi que la présence en ligne." },
      { title: "Le SEO, de la technique à la réputation", description: "Aborder les bases techniques du référencement, le contenu, l’autorité, les liens, la réputation numérique et le SEO local pour les entreprises africaines." },
      { title: "Réseaux, publicité et conversion", description: "Relier les réseaux sociaux et la publicité digitale à une démarche de conversion qui transforme la visibilité en opportunités." },
      { title: "Données, IA et système digital", description: "Utiliser les analytics pour piloter la performance, comprendre l’IA et les moteurs de réponse, puis construire un système digital 360° et un plan sur 90 jours." }
    ],
  },
  "reseaux-sociaux": {
    id: 10,
    title: "Réseaux Sociaux",
    category: "Réseaux sociaux",
    group: "Digital & Création",
    description:
      "Un guide pour faire des réseaux sociaux autre chose qu’une simple vitrine de publications. Il accompagne la construction d’une stratégie sociale, le choix des plateformes, la production de contenus, l’animation d’une communauté et la transformation de l’engagement en confiance, en fidélité et en opportunités commerciales.",
    slug: "reseaux-sociaux",
    cover: "/img/reseaux_sociaux.PNG",
    pages: "46 pages",
    readTime: "35–50 min",
    author: "SunuLink Consulting",
    sections: [
      { title: "Fondations d’une stratégie sociale", description: "Clarifier le rôle des réseaux sociaux, choisir les plateformes, comprendre son audience et développer une identité sociale cohérente." },
      { title: "Contenu et engagement", description: "Construire une stratégie de contenu, sélectionner les formats, produire de la vidéo courte et susciter des interactions utiles." },
      { title: "Communauté et croissance", description: "Organiser le community management, développer une communauté et relier les réseaux sociaux au développement commercial, à la publicité et aux partenariats d’influence." },
      { title: "Performance et maîtrise", description: "Gérer la réputation et les situations de crise, mesurer les résultats, utiliser l’IA avec discernement et bâtir un système social sur 90 jours." }
    ],
  },
  "creation-contenu-storytelling": {
    id: 11,
    title: "Création de Contenu & Storytelling",
    category: "Communication",
    group: "Digital & Création",
    description:
      "Un guide pratique pour passer de publications improvisées à une stratégie éditoriale cohérente et mesurable. Il associe compréhension de l’audience, positionnement éditorial, piliers de contenu, storytelling de marque, formats adaptés aux plateformes, calendrier éditorial et analyse des performances.",
    slug: "creation-contenu-storytelling",
    cover: "/img/creation_contenu_storytelling.PNG",
    pages: "92 pages",
    readTime: "85–120 min",
    author: "SunuLink Consulting",
    sections: [
      { title: "Comprendre la création de contenu", description: "Définir les besoins de l’audience, les objectifs éditoriaux, le positionnement de la marque et les piliers de contenu dans un environnement saturé." },
      { title: "Maîtriser le storytelling", description: "Construire une histoire authentique, choisir une structure narrative et travailler l’émotion, la confiance et l’adaptation aux réalités africaines." },
      { title: "Produire des contenus engageants", description: "Rédiger des publications, créer des carrousels et des vidéos courtes, établir une identité éditoriale et adapter les contenus aux plateformes." },
      { title: "Construire, mesurer et optimiser", description: "Planifier un calendrier éditorial, organiser la production et la diffusion, mesurer les indicateurs et utiliser briefs, formules et checklists." }
    ],
  },
  "design-graphique-creation-visuelle": {
    id: 12,
    title: "Design Graphique & Création Visuelle",
    category: "Branding",
    group: "Digital & Création",
    description:
      "Un guide pratique qui présente le design graphique comme une démarche de communication, et pas seulement comme la recherche d’un visuel esthétique. Il relie brief créatif, composition, couleurs, typographie, identité de marque, conception des supports, production technique et organisation d’un workflow professionnel.",
    slug: "design-graphique-creation-visuelle",
    cover: "/img/design_graphique_creation_visuelle.PNG",
    pages: "92 pages",
    readTime: "75–105 min",
    author: "SunuLink Consulting",
    sections: [
      { title: "Comprendre le design graphique", description: "Découvrir les missions du graphiste, interpréter un brief et maîtriser les fondamentaux de la communication visuelle, des couleurs et de la composition." },
      { title: "Identité visuelle et branding", description: "Distinguer logo, identité et branding, construire un système visuel cohérent, choisir une palette, associer les typographies et définir une charte." },
      { title: "Concevoir les supports de communication", description: "Créer des visuels sociaux, affiches, brochures, présentations, supports imprimés et publicitaires en adaptant l’identité aux formats." },
      { title: "Méthodes, outils et boîte à outils", description: "Passer de l’idée au concept, travailler les moodboards et mises en page, préparer les fichiers, gérer les retours et organiser un workflow incluant IA, droits et portfolio." }
    ],
  },
  "innovation-ia": {
    id: 13,
    title: "Innovation & IA",
    category: "Innovation & IA",
    group: "Innovation & Activation",
    description:
      "Un guide pour dépasser la simple adoption d’un outil d’intelligence artificielle et réfléchir à la transformation qu’il peut soutenir dans l’entreprise. Il explore des cas d’usage en productivité, marketing, communication, vente, relation client, données, automatisation et ressources humaines, tout en abordant risques, gouvernance et mise en œuvre.",
    slug: "innovation-ia",
    cover: "/img/innovation_ia.PNG",
    pages: "71 pages",
    readTime: "30–45 min",
    author: "SunuLink Consulting",
    sections: [
      { title: "Comprendre l’innovation et l’IA", description: "Clarifier ce qu’est l’innovation, comprendre les grandes familles d’IA et situer l’IA générative dans les usages professionnels." },
      { title: "Les usages dans l’entreprise", description: "Explorer des applications possibles en productivité, marketing, communication, développement commercial, relation client, données, RH et création de produits." },
      { title: "Contexte, risques et gouvernance", description: "Prendre en compte les réalités des PME, startups et marchés africains, tout en considérant les limites, la confidentialité, la responsabilité et la formation des équipes." },
      { title: "Construire un projet IA", description: "Choisir les cas d’usage prioritaires, organiser la mise en œuvre, mesurer le retour sur investissement et structurer une transformation sur 90 jours." }
    ],
  },
  "publicite-media-buying": {
    id: 14,
    title: "Publicité & Média Buying",
    category: "Marketing",
    group: "Innovation & Activation",
    description:
      "Un guide stratégique pour planifier, acheter, diffuser, mesurer et optimiser des espaces publicitaires à partir d’objectifs définis. Il aide à préparer les campagnes, cibler les audiences, établir un budget, suivre les conversions et distinguer les indicateurs visibles de la rentabilité réelle.",
    slug: "publicite-media-buying",
    cover: "/img/publicite_media_buying.PNG",
    pages: "80 pages",
    readTime: "70–95 min",
    author: "SunuLink Consulting",
    sections: [
      { title: "Les fondamentaux publicitaires", description: "Comprendre le média buying, relier les objectifs publicitaires au parcours d’achat et préciser les résultats recherchés." },
      { title: "Préparer la campagne", description: "Choisir les plateformes, segmenter les audiences, construire une offre convaincante et concevoir des créations publicitaires pertinentes." },
      { title: "Piloter la performance", description: "Structurer les campagnes, définir un budget, suivre les indicateurs, installer le suivi des conversions et tester les créations et audiences." },
      { title: "Canaux, rentabilité et plan média", description: "Travailler le retargeting, les réseaux sociaux, Google Ads et la vidéo, calculer le ROI, tenir compte des risques et bâtir un plan média sur 90 jours." }
    ],
  },
  "audiovisuel-motion-design": {
    id: 15,
    title: "Audiovisuel & Motion Design",
    category: "Communication",
    group: "Innovation & Activation",
    description:
      "Un guide pratique pour cadrer un projet vidéo, concevoir une idée et un scénario, préparer le tournage, travailler l’image, le son et la lumière, puis animer, monter et diffuser un contenu audiovisuel cohérent. Il aborde également l’accessibilité, la mesure des performances, l’IA, les droits, le budget et l’organisation de production.",
    slug: "audiovisuel-motion-design",
    cover: "/img/audiovisuel_motion_design.PNG",
    pages: "77 pages",
    readTime: "60–85 min",
    author: "SunuLink Consulting",
    sections: [
      { title: "Comprendre et cadrer", description: "Définir les objectifs d’une production, comprendre l’audiovisuel et le motion design, choisir son audience et sélectionner le bon format." },
      { title: "Concevoir et produire", description: "Trouver un concept, construire un récit, écrire un scénario et un storyboard, puis préparer le tournage, l’image, le son, l’éclairage et les interviews." },
      { title: "Animer, monter et diffuser", description: "Découvrir les techniques de motion design, structurer le montage, travailler la voix et le son, adapter les formats et organiser la diffusion." },
      { title: "Mesurer et piloter", description: "Évaluer les performances, tenir compte de l’IA, des droits et du budget, utiliser des checklists et suivre un plan d’action sur 90 jours." }
    ],
  },
  "evenementiel-activation-marque": {
    id: 16,
    title: "Événementiel & Activation de Marque",
    category: "Communication",
    group: "Innovation & Activation",
    description:
      "Un guide pratique pour concevoir des événements qui servent une ambition de marque : lancement, activation terrain, événement corporate ou format hybride. Il accompagne la définition des objectifs, le concept, le budget, la planification, le parcours des participants, la communication avant-pendant-après et la mesure du retour sur investissement.",
    slug: "evenementiel-activation-marque",
    cover: "/img/evenementiel_activation_marque.PNG",
    pages: "73 pages",
    readTime: "50–70 min",
    author: "SunuLink Consulting",
    sections: [
      { title: "Comprendre et cadrer", description: "Relier l’événementiel à la stratégie de marque, définir les objectifs et concevoir une expérience pertinente pour son public." },
      { title: "Concevoir l’événement", description: "Développer un concept différenciant, choisir le format et le lieu, définir la stratégie et construire un budget réaliste." },
      { title: "Organiser l’expérience", description: "Planifier les opérations, créer une identité événementielle cohérente, structurer le parcours des participants et coordonner les prestataires." },
      { title: "Activer, communiquer et mesurer", description: "Préparer lancements et activations, gérer la communication et les partenariats, anticiper les risques et évaluer les résultats après l’événement." }
    ],
  },
  "success-stories": {
    id: 17,
    title: "Success Stories",
    category: "Business & Développement",
    group: "Expertise & Réputation",
    description:
      "Un guide pédagogique pour comprendre les mécanismes d’un projet réussi, analyser les décisions et transformer une expérience en apprentissage. Il présente des études de cas conçues à des fins d’illustration — explicitement fictives dans le document — puis explique comment mesurer les résultats sans les exagérer et raconter une réussite avec crédibilité.",
    slug: "success-stories",
    cover: "/img/success_stories.PNG",
    pages: "59 pages",
    readTime: "45–65 min",
    author: "SunuLink Consulting",
    sections: [
      { title: "Comprendre la réussite", description: "Analyser la valeur d’une success story, les caractéristiques d’une réussite durable et les étapes d’un projet réussi." },
      { title: "Études de cas pédagogiques", description: "Examiner des situations illustratives portant sur une PME, une marque, une startup, la présence digitale, l’automatisation et un projet qui rebondit après un échec." },
      { title: "Les leviers de réussite", description: "Relier leadership, marketing, communication, performance, innovation et transformation digitale aux décisions d’un projet." },
      { title: "Prouver, raconter et agir", description: "Mesurer sans exagération, structurer un cas professionnel, utiliser le storytelling, valoriser les projets et appliquer une checklist de crédibilité." }
    ],
  },
  "interviews-portraits": {
    id: 18,
    title: "Interviews & Portraits",
    category: "Communication",
    group: "Expertise & Réputation",
    description:
      "Un guide éditorial et pratique pour transformer une rencontre en contenu utile, fidèle et intéressant. Il explique comment choisir ses interlocuteurs, vérifier les informations, préparer un questionnaire, conduire l’entretien, rédiger un portrait respectueux, produire des versions audio ou vidéo et diffuser le contenu sur les plateformes adaptées.",
    slug: "interviews-portraits",
    cover: "/img/interviews_portraits.PNG",
    pages: "70 pages",
    readTime: "70–95 min",
    author: "SunuLink Consulting",
    sections: [
      { title: "Comprendre et cadrer", description: "Distinguer interview, portrait et témoignage, définir les objectifs éditoriaux, identifier les bons interlocuteurs et établir une ligne éditoriale." },
      { title: "Préparer et conduire la rencontre", description: "Rechercher et vérifier les informations, préparer les questions, écouter, relancer et approfondir les réponses, en présentiel comme à distance." },
      { title: "Écrire et respecter la parole", description: "Construire un portrait captivant, structurer le contenu et restituer avec justesse les propos et l’image de la personne interviewée." },
      { title: "Produire, diffuser et mesurer", description: "Réaliser des interviews photo, audio ou vidéo, adapter le contenu aux plateformes, optimiser le référencement et réutiliser les contenus avec méthode." }
    ],
  },
  "tutoriels-guides": {
    id: 19,
    title: "Tutoriels & Guides",
    category: "Digital & SEO",
    group: "Expertise & Réputation",
    description:
      "Une bibliothèque de méthodes pratiques pour passer de l’information à la compétence et de la connaissance à l’action. Les 21 modules abordent l’apprentissage, la communication, la marque, les réseaux sociaux, le SEO, l’IA, les prompts, les sites web, la prospection, la mesure, l’automatisation et l’organisation de projet.",
    slug: "tutoriels-guides",
    cover: "/img/tutoriels_guides.PNG",
    pages: "62 pages",
    readTime: "50–70 min",
    author: "SunuLink Consulting",
    sections: [
      { title: "Apprendre et s’organiser", description: "Développer une méthode d’apprentissage, transformer l’information en compétence et organiser son travail avant de commencer." },
      { title: "Communiquer et créer", description: "Structurer une stratégie de communication, une identité de marque, une présence sociale et une production de contenu planifiée." },
      { title: "Outils et usages numériques", description: "Utiliser l’IA comme assistant, concevoir des prompts précis, créer un site orienté utilisateur et améliorer le SEO." },
      { title: "Développer et progresser", description: "Organiser la prospection, mesurer les performances, automatiser avec discernement, piloter des projets et suivre un plan de progression sur 30 jours." }
    ],
  },
  "communication-crise-reputation": {
    id: 20,
    title: "Communication de Crise & Réputation",
    category: "Communication",
    group: "Expertise & Réputation",
    description:
      "Un guide stratégique et pratique pour préparer une organisation aux situations sensibles, détecter les signaux faibles et coordonner une réponse responsable. Il traite du diagnostic des risques, de la cellule de crise, de la vérification des faits, des messages publics, des crises sur les réseaux sociaux, des incidents de sécurité ou de données et de la reconstruction de la confiance.",
    slug: "communication-crise-reputation",
    cover: "/img/communication_crise_reputation.PNG",
    pages: "72 pages",
    readTime: "70–100 min",
    author: "SunuLink Consulting",
    sections: [
      { title: "Comprendre la crise et la réputation", description: "Distinguer les formes de crise, comprendre la réputation et l’e-réputation et évaluer les enjeux de communication." },
      { title: "Anticiper et préparer le dispositif", description: "Détecter les signaux faibles, réaliser un diagnostic des risques, construire un plan de gestion et organiser une cellule de crise." },
      { title: "Vérifier, décider et informer", description: "Vérifier les faits, maîtriser l’information, définir une stratégie de réponse, gérer les premières heures et préparer les déclarations." },
      { title: "Répondre, reconstruire et mesurer", description: "Gérer les critiques, les médias, les réseaux sociaux, les crises internes et numériques, puis mesurer l’impact et reconstruire la confiance." }
    ],
  },
};

const fallbackSections = (ebook: EbookData): EbookSection[] => [
  {
    title: `Comprendre les enjeux de ${ebook.title}`,
    description:
      "Cette partie du guide présentera les principaux enjeux associés au thème et les points d’attention à considérer avant d’agir.",
  },
  {
    title: "Les principes essentiels",
    description:
      "Une synthèse des notions et méthodes essentielles à maîtriser pour structurer sa démarche.",
  },
  {
    title: "Passer à l’action",
    description:
      "Des pistes pratiques pour transformer les enseignements du guide en actions concrètes dans l’entreprise.",
  },
];

const EbookDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [email, setEmail] = useState("");
  const [downloadStatus, setDownloadStatus] = useState("");
  const [downloadStatusType, setDownloadStatusType] = useState<"success" | "error" | "info">("info");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [coverError, setCoverError] = useState(false);

  const ebook = slug ? ebooksData[slug] : null;
  const sections = ebook?.sections?.length ? ebook.sections : ebook ? fallbackSections(ebook) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
    setCoverError(false);
  }, [slug]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = showDownloadModal ? "hidden" : previousOverflow;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowDownloadModal(false);
    };

    if (showDownloadModal) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [showDownloadModal]);

  const handleDownloadRequest = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!ebook || isSubmitting) return;

    // Le nom exact du PDF doit être renseigné dans EBOOK_PDF_FILES ci-dessus.
    // Sinon, on n'envoie pas l'e-mail à l'API et on n'affiche pas de faux succès.
    const configuredPdfUrl = getEbookPdfUrl(ebook.slug);
    if (!configuredPdfUrl) {
      setDownloadStatusType("error");
      setDownloadStatus(
        "Le fichier PDF de ce guide n’est pas encore associé. Aucun e-mail n’a été enregistré. Vérifiez son nom dans la configuration EBOOK_PDF_FILES en haut du fichier."
      );
      return;
    }

    const normalizedEmail = email.trim().toLowerCase();
    setIsSubmitting(true);
    setDownloadStatus("");

    try {
      // text/plain évite une requête CORS préliminaire OPTIONS avec Apps Script.
      // redirect: follow suit la redirection de la réponse ContentService de Google.
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        redirect: "follow",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          type: "ebook_download",
          email: normalizedEmail,
          ebook_titre: ebook.title,
          ebook_slug: ebook.slug,
          source: "Site SunuLink Insights",
        }),
      });

      if (!response.ok) {
        throw new Error("Le service d’enregistrement n’a pas répondu correctement.");
      }

      const result: { status?: string; message?: string } = await response.json();

      if (result.status !== "success") {
        throw new Error(result.message || "L’adresse e-mail n’a pas pu être enregistrée.");
      }

      setDownloadStatusType("success");
      setDownloadStatus("Adresse enregistrée. Le téléchargement du guide est lancé.");

      // Pour les PDF servis par le même site (ex. /ebooks/mon-guide.pdf),
      // l'attribut download demande au navigateur de télécharger le fichier.
      // Pour une URL externe, le lien s'ouvre dans un nouvel onglet.
      const pdfUrl = new URL(configuredPdfUrl, window.location.origin);
      const downloadLink = document.createElement("a");
      downloadLink.href = pdfUrl.href;
      downloadLink.rel = "noopener noreferrer";

      if (pdfUrl.origin === window.location.origin) {
        downloadLink.download = EBOOK_PDF_FILES[ebook.slug];
      } else {
        downloadLink.target = "_blank";
      }

      document.body.appendChild(downloadLink);
      downloadLink.click();
      downloadLink.remove();
    } catch (error) {
      console.error("Erreur lors de la demande de téléchargement :", error);
      setDownloadStatusType("error");
      setDownloadStatus(
        error instanceof TypeError
          ? "La connexion à l’API Google n’a pas pu être établie depuis le navigateur. Vérifiez le déploiement de l’application Web, son accès et la connexion réseau, puis réessayez."
          : error instanceof Error
            ? error.message
            : "Une erreur est survenue. Veuillez réessayer dans quelques instants."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!ebook) {
    return (
      <div className="min-h-screen bg-white">
        <Header />

        <main className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <BookOpen className="w-16 h-16 text-sunuBlue mx-auto mb-5" />
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              E-book non trouvé
            </h1>
            <p className="text-gray-600 mb-7">
              Le guide demandé n’est pas encore référencé dans la bibliothèque SunuLink Insights.
            </p>
            <Link
              to="/ressources"
              className="inline-flex items-center gap-2 rounded-full bg-sunuBlue px-6 py-3 font-bold text-white hover:bg-sunuOrange transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour aux ressources
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      <main className="pb-20">
        {/* Retour */}
        <section className="pt-28 md:pt-32 pb-5 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <Link
              to="/ressources"
              className="inline-flex items-center gap-2 text-sm font-bold text-sunuBlue hover:text-sunuOrange transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à Ressources & Expertises
            </Link>
          </div>
        </section>

        {/* =========================================================
            HERO E-BOOK
        ========================================================= */}
        <section className="px-4 sm:px-6 pb-12 md:pb-16">
          <div className="container mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-[#0B2440] to-sunuBlue shadow-[0_25px_80px_rgba(0,113,188,0.2)]">
              <div className="grid lg:grid-cols-[1.15fr_0.85fr] min-h-[620px]">
                <div className="relative flex flex-col justify-center p-7 sm:p-10 md:p-14 lg:p-16 text-white">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,156,222,0.22),transparent_35%),radial-gradient(circle_at_85%_75%,rgba(246,166,26,0.14),transparent_30%)] pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex flex-wrap gap-2 mb-5">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] backdrop-blur-md">
                        <BookOpen className="w-4 h-4 text-sunuOrange" />
                        SUNULINK INSIGHTS
                      </span>
                      <span className="inline-flex items-center rounded-full border border-sunuOrange/30 bg-sunuOrange/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-sunuOrange">
                        ÉDITION 2026–2027
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-black uppercase tracking-[0.18em] text-sunuOrange mb-3">
                      {ebook.group}
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.98] tracking-tight max-w-3xl">
                      {ebook.title}
                    </h1>

                    <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-blue-50/90 max-w-3xl">
                      {ebook.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2.5">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2.5 text-sm font-bold text-white/90">
                        <BookOpen className="w-4 h-4 text-sunuCyan" />
                        {ebook.pages}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2.5 text-sm font-bold text-white/90">
                        <Clock className="w-4 h-4 text-sunuOrange" />
                        {ebook.readTime}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2.5 text-sm font-bold text-white/90">
                        <Users className="w-4 h-4 text-sunuCyan" />
                        {ebook.author}
                      </span>
                    </div>

                    <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <a
                        href="#decouvrir"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-sunuOrange px-7 py-3.5 font-black text-white shadow-lg transition-all hover:bg-white hover:text-sunuBlue hover:-translate-y-0.5"
                      >
                        Lire le guide
                        <ArrowRight className="w-4 h-4" />
                      </a>

                      <button
                        type="button"
                        onClick={() => {
                          setDownloadStatus("");
                          setDownloadStatusType("info");
                          setShowDownloadModal(true);
                        }}
                        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 bg-white/5 px-7 py-3.5 font-black text-white backdrop-blur-sm transition-all hover:bg-white hover:text-sunuBlue"
                      >
                        <Download className="w-4 h-4" />
                        Télécharger le PDF
                      </button>
                    </div>
                  </div>
                </div>

                {/* Couverture */}
                <div className="relative flex items-center justify-center p-8 sm:p-10 md:p-14 bg-gradient-to-br from-white/5 via-white/10 to-sunuCyan/10 border-t lg:border-t-0 lg:border-l border-white/10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />

                  <div className="relative w-full max-w-[350px]">
                    <div className="absolute -inset-4 rounded-[2rem] bg-sunuOrange/15 blur-3xl" />

                    <div className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden border border-white/20 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] transform rotate-2 group">
                      {ebook.cover && !coverError ? (
                        <img
                          src={ebook.cover}
                          alt={`Couverture de l’e-book ${ebook.title}`}
                          className="w-full h-full object-cover"
                          onError={() => setCoverError(true)}
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col justify-between p-7 bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuOrange text-white">
                          <div>
                            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/80">
                              SUNULINK INSIGHTS
                            </p>
                            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                              ÉDITION 2026–2027
                            </p>
                          </div>

                          <div>
                            <span className="inline-flex rounded-full bg-white/15 border border-white/20 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider mb-4">
                              E-BOOK
                            </span>
                            <h2 className="text-3xl font-black leading-tight">
                              {ebook.title}
                            </h2>
                          </div>

                          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                            SunuLink Consulting
                          </div>
                        </div>
                      )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/* =========================================================
            CE QUE VOUS ALLEZ DÉCOUVRIR
        ========================================================= */}
        <section id="decouvrir" className="py-16 md:py-24 px-4 sm:px-6 bg-slate-50">
          <div className="container mx-auto max-w-7xl">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-sunuOrange">
                Lecture stratégique
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
                CE QUE VOUS ALLEZ DÉCOUVRIR
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                Les principaux chapitres du guide seront présentés ici pour permettre au lecteur de comprendre rapidement sa structure et son intérêt.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sections.map((section, index) => (
                <article
                  key={`${section.title}-${index}`}
                  className="bg-white rounded-[1.5rem] border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="text-4xl font-black text-sunuOrange/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-sunuBlue/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-sunuBlue" />
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 leading-tight mb-3">
                    {section.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            CE GUIDE EST POUR VOUS SI…
        ========================================================= */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-sunuBlue">
                Pour quels profils ?
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
                CE GUIDE EST POUR VOUS SI…
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {GUIDE_AUDIENCES.map((profile) => (
                <div
                  key={profile.title}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 hover:border-sunuBlue/30 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sunuBlue to-sunuCyan text-white flex items-center justify-center mb-5">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-black tracking-wide text-sunuBlue mb-2">
                    {profile.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {profile.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            CE QUE VOUS ALLEZ EN RETIRER
        ========================================================= */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-slate-50">
          <div className="container mx-auto max-w-7xl">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-sunuOrange">
                Valeur du guide
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
                CE QUE VOUS ALLEZ EN RETIRER
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {GUIDE_BENEFITS.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article
                    key={benefit.title}
                    className="group rounded-[1.5rem] bg-white border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-sunuBlue/10 flex items-center justify-center mb-5 group-hover:bg-sunuOrange transition-colors">
                      <Icon className="w-6 h-6 text-sunuBlue group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            APERÇU DU GUIDE
        ========================================================= */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-sunuBlue">
                Aperçu
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
                APERÇU DU GUIDE
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                Cette zone accueillera plusieurs pages du e-book sous forme de mockups afin de donner un aperçu concret de son contenu.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {[0, 1, 2].map((item) => (
                <div
                  key={item}
                  className={`relative mx-auto w-full max-w-[300px] ${
                    item === 1 ? "md:-translate-y-4" : ""
                  }`}
                >
                  <div
                    className={`aspect-[3/4] rounded-[1.5rem] overflow-hidden border border-slate-200 bg-slate-100 shadow-xl ${
                      item === 0 ? "md:-rotate-3" : item === 2 ? "md:rotate-3" : ""
                    }`}
                  >
                    {ebook.cover ? (
                      <img
                        src={ebook.cover}
                        alt={`Aperçu du guide ${ebook.title}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full p-7 flex flex-col justify-between bg-gradient-to-br from-sunuBlue to-sunuCyan text-white">
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.18em]">
                            SUNULINK INSIGHTS
                          </p>
                          <p className="mt-2 text-[10px] uppercase tracking-widest text-white/70">
                            ÉDITION 2026–2027
                          </p>
                        </div>
                        <h3 className="text-2xl font-black leading-tight">
                          {ebook.title}
                        </h3>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            CTA FINAL
        ========================================================= */}
        <section className="py-12 md:py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-sunuBlue via-sunuCyan to-sunuBlue text-white shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_85%_75%,rgba(246,166,26,0.18),transparent_30%)]" />

              <div className="relative z-10 text-center px-6 py-12 sm:px-10 md:py-16">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-sunuOrange mb-3">
                  SUNULINK CONSULTING
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight max-w-4xl mx-auto">
                  BESOIN D’ALLER PLUS LOIN ? PARLONS DE VOTRE PROJET.
                </h2>

                <p className="mt-5 text-base sm:text-lg text-blue-50 max-w-2xl mx-auto leading-relaxed">
                  Nos ressources vous donnent les clés. Notre équipe vous accompagne pour les transformer en résultats.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-sunuOrange px-7 py-3.5 font-black text-white hover:bg-white hover:text-sunuBlue transition-all"
                  >
                    Parler à un expert
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/ressources"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 bg-white/5 px-7 py-3.5 font-black text-white hover:bg-white hover:text-sunuBlue transition-all"
                  >
                    <BookOpen className="w-4 h-4" />
                    Voir d’autres ressources
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* =========================================================
          MODAL TÉLÉCHARGEMENT — ÉTAPE ACTUELLE
      ========================================================= */}
      {showDownloadModal && (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/70 p-3 backdrop-blur-sm sm:p-4"
          onClick={(event) => {
            if (event.target === event.currentTarget) setShowDownloadModal(false);
          }}
        >
          <div className="flex min-h-full items-center justify-center">
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="ebook-download-title"
              className="relative my-auto max-h-[calc(100dvh-1.5rem)] w-full max-w-lg overflow-y-auto overscroll-contain rounded-[1.75rem] bg-white shadow-2xl sm:max-h-[calc(100dvh-2rem)] sm:rounded-[2rem]"
            >
              <div className="h-1.5 bg-gradient-to-r from-sunuBlue via-sunuCyan to-sunuOrange" />

              <button
                type="button"
                onClick={() => setShowDownloadModal(false)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-gray-700 shadow-sm transition-colors hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-sunuBlue/20"
                aria-label="Fermer la fenêtre de téléchargement"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="p-6 pt-16 sm:p-9 sm:pt-16">
              <div className="w-14 h-14 rounded-2xl bg-sunuBlue/10 flex items-center justify-center mb-5">
                <Mail className="w-7 h-7 text-sunuBlue" />
              </div>

              <span className="text-xs font-black uppercase tracking-[0.16em] text-sunuOrange">
                SUNULINK INSIGHTS
              </span>

              <h2 id="ebook-download-title" className="mt-2 text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
                Recevez votre e-book
              </h2>

              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                Entrez votre adresse e-mail pour accéder au téléchargement de : <strong>{ebook.title}</strong>.
              </p>

              <form onSubmit={handleDownloadRequest} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Votre adresse e-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setDownloadStatus("");
                      setDownloadStatusType("info");
                    }}
                    required
                    disabled={isSubmitting}
                    placeholder="exemple@entreprise.com"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-800 outline-none transition-all focus:border-sunuBlue focus:ring-4 focus:ring-sunuBlue/10 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-sunuBlue px-5 py-3.5 font-black text-white shadow-lg transition-all hover:bg-sunuOrange disabled:cursor-wait disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Enregistrement en cours…
                    </>
                  ) : (
                    <>
                      <Download className="h-4 w-4" />
                      Accéder au téléchargement
                    </>
                  )}
                </button>
              </form>

              {downloadStatus && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`mt-4 rounded-xl border p-4 text-sm font-semibold ${
                    downloadStatusType === "success"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                      : downloadStatusType === "error"
                        ? "border-red-200 bg-red-50 text-red-700"
                        : "border-sunuBlue/15 bg-sunuBlue/5 text-sunuBlue"
                  }`}
                >
                  {downloadStatus}
                </div>
              )}

              <p className="mt-5 text-xs leading-relaxed text-gray-400">
                Votre adresse e-mail sera utilisée pour traiter votre demande d’accès à ce guide. Le téléchargement démarrera une fois l’enregistrement confirmé et le PDF associé à cette ressource.
              </p>
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EbookDetailPage;
