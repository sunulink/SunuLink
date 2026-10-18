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

interface EbookAudience {
  title: string;
  description: string;
}

interface EbookBenefit {
  title: string;
  description: string;
  icon: typeof Lightbulb;
}

// Les PDF doivent être présents dans public/assets/docs/ avec les noms exacts ci-dessous.
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

const getEbookPdfUrl = (slug: string): string | undefined => {
  const fileName = EBOOK_PDF_FILES[slug]?.trim();
  if (!fileName || fileName.startsWith("REMPLACER_PAR_")) return undefined;
  return `${PDF_DIRECTORY}/${encodeURIComponent(fileName)}`;
};

// Couvertures identiques à celles de BlogPage.tsx : les visuels restent cohérents
// entre la bibliothèque et la page détaillée de chaque e-book.
const BLOG_EBOOK_COVERS: Record<string, string> = {
  "conseils-astuces-marketing": "/img/SunuLink_Ebook_09_Conseils-Astuces-Marketing_recto-verso_fond-jaune_1080.jpg",
  "tendances-actualites": "/img/SunuLink_Ebook_18_Tendances-Actualites_recto-verso_fond-jaune_1080.jpg",
  "strategies-communication": "/img/SunuLink_Ebook_01_Strategies-de-Communication_recto-verso_fond-blanc_1080.jpg",
  "entrepreneuriat-business": "/img/SunuLink_Ebook_12_Entrepreneuriat-Business_recto-verso_fond-jaune_1080.jpg",
  "branding-identite-visuelle": "/img/SunuLink_Ebook_02_Branding-Identite-Visuelle_recto-verso_fond-bleu_1080.jpg",
  "communication-africaine": "/img/SunuLink_Ebook_06_Communication-Africaine_recto-verso_fond-jaune_1080.jpg",
  "communication-360-strategie-globale": "/img/SunuLink_Ebook_05_Communication-360_recto-verso_fond-bleu_1080.jpg",
  "communication-corporate-institutionnelle": "/img/SunuLink_Ebook_07_Communication-Corporate-Institutionnelle_recto-verso_fond-blanc_1080.jpg",
  "marketing-digital-seo": "/img/SunuLink_Ebook_03_Marketing-Digital-SEO_recto-verso_fond-jaune_1080.jpg",
  "reseaux-sociaux": "/img/SunuLink_Ebook_04_Reseaux-Sociaux_recto-verso_fond-blanc_1080.jpg",
  "creation-contenu-storytelling": "/img/SunuLink_Ebook_10_Creation-de-contenu-Storytelling_recto-verso_fond-blanc_1080.jpg",
  "design-graphique-creation-visuelle": "/img/SunuLink_Ebook_11_Design-Graphique-Creation-Visuelle_recto-verso_fond-bleu_1080.jpg",
  "innovation-ia": "/img/SunuLink_Ebook_14_Innovation-IA_recto-verso_fond-bleu_1080.jpg",
  "publicite-media-buying": "/img/SunuLink_Ebook_16_Publicite-Media-Buying_recto-verso_fond-blanc_1080.jpg",
  "audiovisuel-motion-design": "/img/SunuLink_Ebook_20_Audiovisuel-Motion-Design_recto-verso_fond-bleu_1080.jpg",
  "evenementiel-activation-marque": "/img/SunuLink_Ebook_13_Evenementiel-Activation-de-Marque_recto-verso_fond-blanc_1080.jpg",
  "success-stories": "/img/SunuLink_Ebook_17_Success-Stories_recto-verso_fond-bleu_1080.jpg",
  "interviews-portraits": "/img/SunuLink_Ebook_15_Interviews-Portraits_recto-verso_fond-jaune_1080.jpg",
  "tutoriels-guides": "/img/SunuLink_Ebook_19_Tutoriels-Guides_recto-verso_fond-blanc_1080.jpg",
  "communication-crise-reputation": "/img/SunuLink_Ebook_08_Communication-de-Crise-Reputation_recto-verso_fond-bleu_1080.jpg",
};

const ebooksData: Record<string, EbookData> = {
  "conseils-astuces-marketing": {
    id: 1, title: "Conseils & Astuces Marketing", category: "Marketing", group: "Stratégie & Croissance",
    description: "Un guide stratégique qui aide les dirigeants à comprendre ce que le marketing doit réellement accomplir : clarifier le positionnement, mieux connaître son client, construire une marque cohérente et transformer progressivement la visibilité en confiance puis en clients. Il rassemble 20 conseils, des repères de mesure et un plan d’action marketing sur 90 jours.",
    slug: "conseils-astuces-marketing", cover: BLOG_EBOOK_COVERS["conseils-astuces-marketing"], pages: "48 pages", readTime: "50–70 min", author: "SunuLink Consulting",
    sections: [
      { title: "Poser les fondations", description: "Comprendre le rôle du marketing, clarifier son positionnement et identifier les besoins de son client idéal avant d’investir." },
      { title: "Construire une marque cohérente", description: "Relier marque, communication et contenus utiles pour créer une identité plus reconnaissable et une proposition de valeur compréhensible." },
      { title: "De la visibilité aux clients", description: "Choisir les bons canaux, installer la confiance et organiser le parcours qui transforme l’attention en opportunités commerciales." },
      { title: "Investir, mesurer et passer à l’action", description: "Utiliser la publicité et l’IA avec méthode, suivre les performances, éviter les erreurs coûteuses et établir un plan marketing sur 90 jours." },
    ],
  },
  "tendances-actualites": {
    id: 2, title: "Tendances & Actualités", category: "Marketing", group: "Stratégie & Croissance",
    description: "Un rapport stratégique consacré à 15 tendances qui transforment le marketing, la communication et les entreprises africaines à l’horizon 2027. Il propose une lecture orientée décision : observer les évolutions, comprendre leurs conséquences possibles pour l’entreprise, puis identifier les actions à tester sans suivre aveuglément chaque nouveauté.",
    slug: "tendances-actualites", cover: BLOG_EBOOK_COVERS["tendances-actualites"], pages: "46 pages", readTime: "45–65 min", author: "SunuLink Consulting",
    sections: [
      { title: "Quand la technologie change les règles", description: "Explorer le marketing augmenté par l’intelligence artificielle et l’évolution de la recherche, des moteurs classiques aux moteurs de réponse." },
      { title: "Gagner l’attention et mériter la confiance", description: "Comprendre le rôle grandissant de la confiance, de la vidéo, des communautés et des contenus utiles, humains et différenciants." },
      { title: "Données, marchés et conversations", description: "Découvrir les enjeux de personnalisation, de données stratégiques, d’influence des marques africaines et de commerce conversationnel." },
      { title: "Influence, expérience et avenir", description: "Relier créateurs, branding, expérience client et marketing responsable, puis utiliser la synthèse des tendances, la matrice d’action et l’auto-diagnostic." },
    ],
  },
  "strategies-communication": {
    id: 3, title: "Stratégies de Communication", category: "Communication", group: "Stratégie & Croissance",
    description: "Un guide pour passer d’actions de communication isolées à une démarche structurée. Il aide à définir des objectifs au service de l’entreprise, comprendre ses publics, clarifier son positionnement, construire des messages cohérents et piloter une stratégie de communication mesurable.",
    slug: "strategies-communication", cover: BLOG_EBOOK_COVERS["strategies-communication"], pages: "47 pages", readTime: "40–60 min", author: "SunuLink Consulting",
    sections: [
      { title: "Poser les fondations", description: "Définir ce que la communication doit accomplir, choisir des objectifs utiles, identifier les publics et formuler un positionnement clair." },
      { title: "Un message, une voix", description: "Créer des messages mémorables et construire une identité cohérente avec la perception que l’organisation souhaite installer." },
      { title: "Contenu, canaux et présence digitale", description: "Structurer la stratégie de contenu, sélectionner les canaux pertinents et renforcer la cohérence de la présence numérique." },
      { title: "Autorité, réputation et déploiement", description: "Développer l’influence, prendre en compte les situations sensibles, mesurer les résultats et organiser un plan de communication sur 90 jours." },
    ],
  },
  "entrepreneuriat-business": {
    id: 4, title: "Entrepreneuriat & Business", category: "Business & Développement", group: "Stratégie & Croissance",
    description: "Un guide stratégique destiné aux PME, startups, fondateurs et porteurs de projets qui veulent construire une entreprise capable de durer. Il aborde la validation du marché, la proposition de valeur, le modèle économique, la vente, la rentabilité, l’organisation, la trésorerie et le pilotage de la croissance.",
    slug: "entrepreneuriat-business", cover: BLOG_EBOOK_COVERS["entrepreneuriat-business"], pages: "60 pages", readTime: "40–55 min", author: "SunuLink Consulting",
    sections: [
      { title: "L’idée et le marché", description: "Passer de l’idée à l’entreprise, identifier un problème réel, comprendre le marché et définir le client idéal." },
      { title: "L’offre et le modèle économique", description: "Construire une proposition de valeur et une offre commerciale, choisir un modèle viable, fixer ses prix et suivre ses marges." },
      { title: "La machine de croissance", description: "Organiser le système commercial, la demande marketing, le branding et l’adoption raisonnée du digital, de l’IA et de l’automatisation." },
      { title: "Organisation, durée et vision", description: "Structurer les processus, le management, la finance et les ressources, puis préparer la croissance avec un tableau de bord et un plan sur 90 jours." },
    ],
  },
  "branding-identite-visuelle": {
    id: 5, title: "Branding & Identité Visuelle", category: "Branding", group: "Communication & Marque",
    description: "Ce guide montre pourquoi une marque ne se résume pas à son logo. Il accompagne la construction d’une plateforme de marque, d’un positionnement distinctif, d’une identité visuelle et verbale cohérente, puis d’une expérience reconnaissable sur les différents points de contact.",
    slug: "branding-identite-visuelle", cover: BLOG_EBOOK_COVERS["branding-identite-visuelle"], pages: "40 pages", readTime: "40–55 min", author: "SunuLink Consulting",
    sections: [
      { title: "Fondations de marque", description: "Comprendre le branding, construire une plateforme de marque et préciser le positionnement, la mission, la vision, les valeurs et l’audience." },
      { title: "Identité et expression", description: "Travailler la personnalité, le nom, la signature, le territoire verbal, les couleurs, la typographie, la photographie et le système de logo." },
      { title: "Récit et expérience", description: "Utiliser le storytelling, assurer la cohérence de l’expérience de marque et adapter l’expression de la marque au numérique." },
      { title: "Innovation et évolution", description: "Explorer l’usage raisonné de l’IA dans le branding, le rebranding, la mesure de la force de marque et un plan d’action sur 90 jours." },
    ],
  },
  "communication-africaine": {
    id: 6, title: "Communication Africaine", category: "Communication", group: "Communication & Marque",
    description: "Un guide qui invite à penser la communication africaine à partir de la diversité réelle des pays, des langues, des cultures et des usages, plutôt que comme un marché unique. Il explore la proximité communautaire, les pratiques mobiles, les marques africaines, l’influence et les façons d’adapter sa stratégie aux contextes locaux et aux ambitions internationales.",
    slug: "communication-africaine", cover: BLOG_EBOOK_COVERS["communication-africaine"], pages: "43 pages", readTime: "40–60 min", author: "SunuLink Consulting",
    sections: [
      { title: "Fondations et contextes", description: "Comprendre la pluralité du continent, les contextes culturels, les identités, le rôle de la communauté et l’importance des langues et de la proximité." },
      { title: "Usages numériques", description: "Examiner les réalités d’une Afrique mobile, les réseaux sociaux, la vidéo, les créateurs, les communautés et la confiance." },
      { title: "Marques et territoires", description: "Réfléchir à la communication des marques africaines, à l’équilibre entre héritage et modernité et à la rencontre du local et de l’international." },
      { title: "Business, institutions et action", description: "Relier communication B2B, développement commercial, communication institutionnelle et territoriale, diversité culturelle et plan d’action sur 90 jours." },
    ],
  },
  "communication-360-strategie-globale": {
    id: 7, title: "Communication 360° & Stratégie Globale", category: "Communication", group: "Communication & Marque",
    description: "Un guide complet pour aligner la marque, les messages, les canaux et les objectifs business au sein d’un même système de communication. Il propose une démarche allant du diagnostic et du positionnement jusqu’au plan de communication, aux budgets, à l’IA, à la mesure des résultats et à l’adaptation aux marchés africains.",
    slug: "communication-360-strategie-globale", cover: BLOG_EBOOK_COVERS["communication-360-strategie-globale"], pages: "82 pages", readTime: "70–100 min", author: "SunuLink Consulting",
    sections: [
      { title: "Fondations stratégiques", description: "Comprendre la communication 360°, réaliser un diagnostic global et définir des objectifs mesurables liés aux priorités de l’organisation." },
      { title: "Marque et messages", description: "Identifier les publics, travailler le positionnement, construire une plateforme de communication et harmoniser l’architecture des messages." },
      { title: "Canaux et déploiement", description: "Organiser la complémentarité du digital, des contenus, des relations publiques, de la communication institutionnelle et du développement commercial." },
      { title: "Pilotage et passage à l’action", description: "Piloter les budgets, les équipes et les validations, intégrer l’IA avec discernement, mesurer le retour sur investissement et planifier les 90 prochains jours." },
    ],
  },
  "communication-corporate-institutionnelle": {
    id: 8, title: "Communication Corporate & Institutionnelle", category: "Communication", group: "Communication & Marque",
    description: "Un guide stratégique et pratique pour aligner ce que l’organisation est, ce qu’elle affirme, ce qu’elle fait et ce que ses parties prenantes perçoivent. Il couvre l’identité corporate, le leadership, la communication interne, les relations médias, la présence numérique, la marque employeur, les engagements, les crises et la mesure de la réputation.",
    slug: "communication-corporate-institutionnelle", cover: BLOG_EBOOK_COVERS["communication-corporate-institutionnelle"], pages: "73 pages", readTime: "75–105 min", author: "SunuLink Consulting",
    sections: [
      { title: "Fondements et positionnement", description: "Distinguer communication corporate, institutionnelle et commerciale, clarifier l’image de marque, l’identité, le positionnement et les parties prenantes." },
      { title: "Communication interne et leadership", description: "Renforcer la circulation de l’information, mobiliser les collaborateurs autour de la vision et soutenir la communication managériale." },
      { title: "Institutions, médias et numérique", description: "Développer les relations publiques, les relations médias, une présence numérique structurée et une ligne éditoriale corporate." },
      { title: "Engagements, crises et transformations", description: "Travailler la marque employeur, la responsabilité sociétale, la prévention des crises et la communication en période de changement." },
      { title: "Mesure et déploiement", description: "Évaluer réputation et performance, choisir les outils adaptés et organiser une stratégie opérationnelle sur 90 jours." },
    ],
  },
  "marketing-digital-seo": {
    id: 9, title: "Marketing Digital & SEO", category: "Digital & SEO", group: "Digital & Création",
    description: "Un guide stratégique pour construire une présence numérique qui ne se limite pas à être en ligne, mais aide l’entreprise à être trouvée, à gagner en crédibilité et à convertir sa visibilité en opportunités. Il relie stratégie digitale, parcours client, référencement naturel, SEO local, réseaux sociaux, publicité, analytics et IA.",
    slug: "marketing-digital-seo", cover: BLOG_EBOOK_COVERS["marketing-digital-seo"], pages: "51 pages", readTime: "40–60 min", author: "SunuLink Consulting",
    sections: [
      { title: "Les fondations digitales", description: "Comprendre le marketing digital moderne, bâtir une stratégie et organiser le parcours client ainsi que la présence en ligne." },
      { title: "Le SEO, de la technique à la réputation", description: "Aborder les bases techniques du référencement, le contenu, l’autorité, les liens, la réputation numérique et le SEO local pour les entreprises africaines." },
      { title: "Réseaux, publicité et conversion", description: "Relier les réseaux sociaux et la publicité digitale à une démarche de conversion qui transforme la visibilité en opportunités." },
      { title: "Données, IA et système digital", description: "Utiliser les analytics pour piloter la performance, comprendre l’IA et les moteurs de réponse, puis construire un système digital 360° et un plan sur 90 jours." },
    ],
  },
  "reseaux-sociaux": {
    id: 10, title: "Réseaux Sociaux", category: "Réseaux sociaux", group: "Digital & Création",
    description: "Un guide pour faire des réseaux sociaux autre chose qu’une simple vitrine de publications. Il accompagne la construction d’une stratégie sociale, le choix des plateformes, la production de contenus, l’animation d’une communauté et la transformation de l’engagement en confiance, en fidélité et en opportunités commerciales.",
    slug: "reseaux-sociaux", cover: BLOG_EBOOK_COVERS["reseaux-sociaux"], pages: "46 pages", readTime: "35–50 min", author: "SunuLink Consulting",
    sections: [
      { title: "Fondations d’une stratégie sociale", description: "Clarifier le rôle des réseaux sociaux, choisir les plateformes, comprendre son audience et développer une identité sociale cohérente." },
      { title: "Contenu et engagement", description: "Construire une stratégie de contenu, sélectionner les formats, produire de la vidéo courte et susciter des interactions utiles." },
      { title: "Communauté et croissance", description: "Organiser le community management, développer une communauté et relier les réseaux sociaux au développement commercial, à la publicité et aux partenariats d’influence." },
      { title: "Performance et maîtrise", description: "Gérer la réputation et les situations de crise, mesurer les résultats, utiliser l’IA avec discernement et bâtir un système social sur 90 jours." },
    ],
  },
  "creation-contenu-storytelling": {
    id: 11, title: "Création de Contenu & Storytelling", category: "Communication", group: "Digital & Création",
    description: "Un guide pratique pour passer de publications improvisées à une stratégie éditoriale cohérente et mesurable. Il associe compréhension de l’audience, positionnement éditorial, piliers de contenu, storytelling de marque, formats adaptés aux plateformes, calendrier éditorial et analyse des performances.",
    slug: "creation-contenu-storytelling", cover: BLOG_EBOOK_COVERS["creation-contenu-storytelling"], pages: "92 pages", readTime: "85–120 min", author: "SunuLink Consulting",
    sections: [
      { title: "Comprendre la création de contenu", description: "Définir les besoins de l’audience, les objectifs éditoriaux, le positionnement de la marque et les piliers de contenu dans un environnement saturé." },
      { title: "Maîtriser le storytelling", description: "Construire une histoire authentique, choisir une structure narrative et travailler l’émotion, la confiance et l’adaptation aux réalités africaines." },
      { title: "Produire des contenus engageants", description: "Rédiger des publications, créer des carrousels et des vidéos courtes, établir une identité éditoriale et adapter les contenus aux plateformes." },
      { title: "Construire, mesurer et optimiser", description: "Planifier un calendrier éditorial, organiser la production et la diffusion, mesurer les indicateurs et utiliser briefs, formules et checklists." },
    ],
  },
  "design-graphique-creation-visuelle": {
    id: 12, title: "Design Graphique & Création Visuelle", category: "Branding", group: "Digital & Création",
    description: "Un guide pratique qui présente le design graphique comme une démarche de communication, et pas seulement comme la recherche d’un visuel esthétique. Il relie brief créatif, composition, couleurs, typographie, identité de marque, conception des supports, production technique et organisation d’un workflow professionnel.",
    slug: "design-graphique-creation-visuelle", cover: BLOG_EBOOK_COVERS["design-graphique-creation-visuelle"], pages: "92 pages", readTime: "75–105 min", author: "SunuLink Consulting",
    sections: [
      { title: "Comprendre le design graphique", description: "Découvrir les missions du graphiste, interpréter un brief et maîtriser les fondamentaux de la communication visuelle, des couleurs et de la composition." },
      { title: "Identité visuelle et branding", description: "Distinguer logo, identité et branding, construire un système visuel cohérent, choisir une palette, associer les typographies et définir une charte." },
      { title: "Concevoir les supports de communication", description: "Créer des visuels sociaux, affiches, brochures, présentations, supports imprimés et publicitaires en adaptant l’identité aux formats." },
      { title: "Méthodes, outils et boîte à outils", description: "Passer de l’idée au concept, travailler les moodboards et mises en page, préparer les fichiers, gérer les retours et organiser un workflow incluant IA, droits et portfolio." },
    ],
  },
  "innovation-ia": {
    id: 13, title: "Innovation & IA", category: "Innovation & IA", group: "Innovation & Activation",
    description: "Un guide pour dépasser la simple adoption d’un outil d’intelligence artificielle et réfléchir à la transformation qu’il peut soutenir dans l’entreprise. Il explore des cas d’usage en productivité, marketing, communication, vente, relation client, données, automatisation et ressources humaines, tout en abordant risques, gouvernance et mise en œuvre.",
    slug: "innovation-ia", cover: BLOG_EBOOK_COVERS["innovation-ia"], pages: "71 pages", readTime: "30–45 min", author: "SunuLink Consulting",
    sections: [
      { title: "Comprendre l’innovation et l’IA", description: "Clarifier ce qu’est l’innovation, comprendre les grandes familles d’IA et situer l’IA générative dans les usages professionnels." },
      { title: "Les usages dans l’entreprise", description: "Explorer des applications possibles en productivité, marketing, communication, développement commercial, relation client, données, RH et création de produits." },
      { title: "Contexte, risques et gouvernance", description: "Prendre en compte les réalités des PME, startups et marchés africains, tout en considérant les limites, la confidentialité, la responsabilité et la formation des équipes." },
      { title: "Construire un projet IA", description: "Choisir les cas d’usage prioritaires, organiser la mise en œuvre, mesurer le retour sur investissement et structurer une transformation sur 90 jours." },
    ],
  },
  "publicite-media-buying": {
    id: 14, title: "Publicité & Média Buying", category: "Marketing", group: "Innovation & Activation",
    description: "Un guide stratégique pour planifier, acheter, diffuser, mesurer et optimiser des espaces publicitaires à partir d’objectifs définis. Il aide à préparer les campagnes, cibler les audiences, établir un budget, suivre les conversions et distinguer les indicateurs visibles de la rentabilité réelle.",
    slug: "publicite-media-buying", cover: BLOG_EBOOK_COVERS["publicite-media-buying"], pages: "80 pages", readTime: "70–95 min", author: "SunuLink Consulting",
    sections: [
      { title: "Les fondamentaux publicitaires", description: "Comprendre le média buying, relier les objectifs publicitaires au parcours d’achat et préciser les résultats recherchés." },
      { title: "Préparer la campagne", description: "Choisir les plateformes, segmenter les audiences, construire une offre convaincante et concevoir des créations publicitaires pertinentes." },
      { title: "Piloter la performance", description: "Structurer les campagnes, définir un budget, suivre les indicateurs, installer le suivi des conversions et tester les créations et audiences." },
      { title: "Canaux, rentabilité et plan média", description: "Travailler le retargeting, les réseaux sociaux, Google Ads et la vidéo, calculer le ROI, tenir compte des risques et bâtir un plan média sur 90 jours." },
    ],
  },
  "audiovisuel-motion-design": {
    id: 15, title: "Audiovisuel & Motion Design", category: "Communication", group: "Innovation & Activation",
    description: "Un guide pratique pour cadrer un projet vidéo, concevoir une idée et un scénario, préparer le tournage, travailler l’image, le son et la lumière, puis animer, monter et diffuser un contenu audiovisuel cohérent. Il aborde également l’accessibilité, la mesure des performances, l’IA, les droits, le budget et l’organisation de production.",
    slug: "audiovisuel-motion-design", cover: BLOG_EBOOK_COVERS["audiovisuel-motion-design"], pages: "77 pages", readTime: "60–85 min", author: "SunuLink Consulting",
    sections: [
      { title: "Comprendre et cadrer", description: "Définir les objectifs d’une production, comprendre l’audiovisuel et le motion design, choisir son audience et sélectionner le bon format." },
      { title: "Concevoir et produire", description: "Trouver un concept, construire un récit, écrire un scénario et un storyboard, puis préparer le tournage, l’image, le son, l’éclairage et les interviews." },
      { title: "Animer, monter et diffuser", description: "Découvrir les techniques de motion design, structurer le montage, travailler la voix et le son, adapter les formats et organiser la diffusion." },
      { title: "Mesurer et piloter", description: "Évaluer les performances, tenir compte de l’IA, des droits et du budget, utiliser des checklists et suivre un plan d’action sur 90 jours." },
    ],
  },
  "evenementiel-activation-marque": {
    id: 16, title: "Événementiel & Activation de Marque", category: "Communication", group: "Innovation & Activation",
    description: "Un guide pratique pour concevoir des événements qui servent une ambition de marque : lancement, activation terrain, événement corporate ou format hybride. Il accompagne la définition des objectifs, le concept, le budget, la planification, le parcours des participants, la communication avant-pendant-après et la mesure du retour sur investissement.",
    slug: "evenementiel-activation-marque", cover: BLOG_EBOOK_COVERS["evenementiel-activation-marque"], pages: "73 pages", readTime: "50–70 min", author: "SunuLink Consulting",
    sections: [
      { title: "Comprendre et cadrer", description: "Relier l’événementiel à la stratégie de marque, définir les objectifs et concevoir une expérience pertinente pour son public." },
      { title: "Concevoir l’événement", description: "Développer un concept différenciant, choisir le format et le lieu, définir la stratégie et construire un budget réaliste." },
      { title: "Organiser l’expérience", description: "Planifier les opérations, créer une identité événementielle cohérente, structurer le parcours des participants et coordonner les prestataires." },
      { title: "Activer, communiquer et mesurer", description: "Préparer lancements et activations, gérer la communication et les partenariats, anticiper les risques et évaluer les résultats après l’événement." },
    ],
  },
  "success-stories": {
    id: 17, title: "Success Stories", category: "Business & Développement", group: "Expertise & Réputation",
    description: "Un guide pédagogique pour comprendre les mécanismes d’un projet réussi, analyser les décisions et transformer une expérience en apprentissage. Il présente des études de cas conçues à des fins d’illustration — explicitement fictives dans le document — puis explique comment mesurer les résultats sans les exagérer et raconter une réussite avec crédibilité.",
    slug: "success-stories", cover: BLOG_EBOOK_COVERS["success-stories"], pages: "59 pages", readTime: "45–65 min", author: "SunuLink Consulting",
    sections: [
      { title: "Comprendre la réussite", description: "Analyser la valeur d’une success story, les caractéristiques d’une réussite durable et les étapes d’un projet réussi." },
      { title: "Études de cas pédagogiques", description: "Examiner des situations illustratives portant sur une PME, une marque, une startup, la présence digitale, l’automatisation et un projet qui rebondit après un échec." },
      { title: "Les leviers de réussite", description: "Relier leadership, marketing, communication, performance, innovation et transformation digitale aux décisions d’un projet." },
      { title: "Prouver, raconter et agir", description: "Mesurer sans exagération, structurer un cas professionnel, utiliser le storytelling, valoriser les projets et appliquer une checklist de crédibilité." },
    ],
  },
  "interviews-portraits": {
    id: 18, title: "Interviews & Portraits", category: "Communication", group: "Expertise & Réputation",
    description: "Un guide éditorial et pratique pour transformer une rencontre en contenu utile, fidèle et intéressant. Il explique comment choisir ses interlocuteurs, vérifier les informations, préparer un questionnaire, conduire l’entretien, rédiger un portrait respectueux, produire des versions audio ou vidéo et diffuser le contenu sur les plateformes adaptées.",
    slug: "interviews-portraits", cover: BLOG_EBOOK_COVERS["interviews-portraits"], pages: "70 pages", readTime: "70–95 min", author: "SunuLink Consulting",
    sections: [
      { title: "Comprendre et cadrer", description: "Distinguer interview, portrait et témoignage, définir les objectifs éditoriaux, identifier les bons interlocuteurs et établir une ligne éditoriale." },
      { title: "Préparer et conduire la rencontre", description: "Rechercher et vérifier les informations, préparer les questions, écouter, relancer et approfondir les réponses, en présentiel comme à distance." },
      { title: "Écrire et respecter la parole", description: "Construire un portrait captivant, structurer le contenu et restituer avec justesse les propos et l’image de la personne interviewée." },
      { title: "Produire, diffuser et mesurer", description: "Réaliser des interviews photo, audio ou vidéo, adapter le contenu aux plateformes, optimiser le référencement et réutiliser les contenus avec méthode." },
    ],
  },
  "tutoriels-guides": {
    id: 19, title: "Tutoriels & Guides", category: "Digital & SEO", group: "Expertise & Réputation",
    description: "Une bibliothèque de méthodes pratiques pour passer de l’information à la compétence et de la connaissance à l’action. Les 21 modules abordent l’apprentissage, la communication, la marque, les réseaux sociaux, le SEO, l’IA, les prompts, les sites web, la prospection, la mesure, l’automatisation et l’organisation de projet.",
    slug: "tutoriels-guides", cover: BLOG_EBOOK_COVERS["tutoriels-guides"], pages: "62 pages", readTime: "50–70 min", author: "SunuLink Consulting",
    sections: [
      { title: "Apprendre et s’organiser", description: "Développer une méthode d’apprentissage, transformer l’information en compétence et organiser son travail avant de commencer." },
      { title: "Communiquer et créer", description: "Structurer une stratégie de communication, une identité de marque, une présence sociale et une production de contenu planifiée." },
      { title: "Outils et usages numériques", description: "Utiliser l’IA comme assistant, concevoir des prompts précis, créer un site orienté utilisateur et améliorer le SEO." },
      { title: "Développer et progresser", description: "Organiser la prospection, mesurer les performances, automatiser avec discernement, piloter des projets et suivre un plan de progression sur 30 jours." },
    ],
  },
  "communication-crise-reputation": {
    id: 20, title: "Communication de Crise & Réputation", category: "Communication", group: "Expertise & Réputation",
    description: "Un guide stratégique et pratique pour préparer une organisation aux situations sensibles, détecter les signaux faibles et coordonner une réponse responsable. Il traite du diagnostic des risques, de la cellule de crise, de la vérification des faits, des messages publics, des crises sur les réseaux sociaux, des incidents de sécurité ou de données et de la reconstruction de la confiance.",
    slug: "communication-crise-reputation", cover: BLOG_EBOOK_COVERS["communication-crise-reputation"], pages: "72 pages", readTime: "70–100 min", author: "SunuLink Consulting",
    sections: [
      { title: "Comprendre la crise et la réputation", description: "Distinguer les formes de crise, comprendre la réputation et l’e-réputation et évaluer les enjeux de communication." },
      { title: "Anticiper et préparer le dispositif", description: "Détecter les signaux faibles, réaliser un diagnostic des risques, construire un plan de gestion et organiser une cellule de crise." },
      { title: "Vérifier, décider et informer", description: "Vérifier les faits, maîtriser l’information, définir une stratégie de réponse, gérer les premières heures et préparer les déclarations." },
      { title: "Répondre, reconstruire et mesurer", description: "Gérer les critiques, les médias, les réseaux sociaux, les crises internes et numériques, puis mesurer l’impact et reconstruire la confiance." },
    ],
  },
};

const DEFAULT_GUIDE_AUDIENCES: EbookAudience[] = [
  { title: "DIRIGEANTS", description: "Pour relier le sujet du guide aux décisions et priorités de l’organisation." },
  { title: "ENTREPRENEURS", description: "Pour structurer leur démarche et choisir les prochaines actions." },
  { title: "ÉQUIPES MÉTIER", description: "Pour organiser les méthodes et les pratiques associées à leur activité." },
  { title: "PROFESSIONNELS", description: "Pour développer leurs compétences sur le thème du guide." },
];

const DEFAULT_EBOOK_BENEFITS: EbookBenefit[] = [
  { title: "REPÈRES", description: "Mieux comprendre les notions et les enjeux du sujet.", icon: Lightbulb },
  { title: "MÉTHODE", description: "Structurer la démarche et les étapes de travail.", icon: Target },
  { title: "APPLICATION", description: "Identifier des pistes à adapter à son contexte.", icon: CheckCircle2 },
  { title: "PROGRESSION", description: "Préparer les prochaines actions et les points à suivre.", icon: ArrowRight },
];

// Textes éditoriaux adaptés au thème de chaque guide.
const EBOOK_AUDIENCES: Record<string, EbookAudience[]> = {
  "conseils-astuces-marketing": [
    { title: "DIRIGEANTS DE PME", description: "Relier les efforts marketing aux priorités de l’entreprise, à la relation client et aux objectifs commerciaux." },
    { title: "ENTREPRENEURS", description: "Clarifier leur positionnement, leur client idéal et la manière de rendre leur offre plus compréhensible." },
    { title: "RESPONSABLES MARKETING", description: "Mieux choisir les canaux, coordonner les contenus et suivre les indicateurs utiles." },
    { title: "INDÉPENDANTS & CONSULTANTS", description: "Structurer leur visibilité et transformer leur expertise en proposition de valeur lisible." },
  ],
  "tendances-actualites": [
    { title: "DÉCIDEURS", description: "Comprendre les évolutions qui peuvent influencer les choix marketing et les priorités de l’entreprise." },
    { title: "ÉQUIPES MARKETING", description: "Explorer l’IA, les nouvelles pratiques de recherche, la vidéo, les communautés et la personnalisation." },
    { title: "AGENCES & CONSULTANTS", description: "Enrichir les recommandations clients avec une lecture structurée des tendances 2026–2027." },
    { title: "MARQUES AFRICAINES", description: "Évaluer les tendances à l’aune de leurs marchés, de leurs publics et de leurs réalités locales." },
  ],
  "strategies-communication": [
    { title: "DIRIGEANTS", description: "Donner une direction claire à la prise de parole et la relier aux objectifs de l’organisation." },
    { title: "RESPONSABLES COMMUNICATION", description: "Organiser les publics, les messages, les canaux et les actions dans une stratégie cohérente." },
    { title: "RESPONSABLES MARKETING", description: "Articuler positionnement, contenu et visibilité autour d’objectifs définis." },
    { title: "ENTREPRENEURS & ÉQUIPES", description: "Passer d’actions dispersées à une démarche de communication planifiée et suivie." },
  ],
  "entrepreneuriat-business": [
    { title: "PORTEURS DE PROJET", description: "Confronter une idée à un problème réel, à un marché et à des clients potentiels." },
    { title: "FONDATEURS DE PME & STARTUPS", description: "Structurer l’offre, le modèle économique, les ventes et les priorités de développement." },
    { title: "DIRIGEANTS DE PETITES STRUCTURES", description: "Mieux relier rentabilité, trésorerie, organisation et décisions de croissance." },
    { title: "RESPONSABLES COMMERCIAUX", description: "Comprendre les liens entre proposition de valeur, acquisition, vente et fidélisation." },
  ],
  "branding-identite-visuelle": [
    { title: "FONDATEURS & ENTREPRENEURS", description: "Poser les bases d’une marque reconnaissable au-delà du choix d’un logo." },
    { title: "RESPONSABLES DE MARQUE", description: "Formaliser positionnement, personnalité, messages et règles d’expression de la marque." },
    { title: "DESIGNERS & CRÉATIFS", description: "Relier les choix visuels à une plateforme de marque et à une intention stratégique." },
    { title: "ÉQUIPES MARKETING & COMMUNICATION", description: "Maintenir une identité cohérente sur les supports, les contenus et les points de contact." },
  ],
  "communication-africaine": [
    { title: "MARQUES QUI S’INTERNATIONALISENT", description: "Adapter leur communication aux pays, aux langues et aux usages plutôt que de généraliser à l’échelle du continent." },
    { title: "ÉQUIPES LOCALES & RÉGIONALES", description: "Tenir compte des contextes culturels, de la proximité communautaire et des pratiques mobiles." },
    { title: "AGENCES & CONSULTANTS", description: "Concevoir des recommandations ancrées dans les réalités des publics et des marchés ciblés." },
    { title: "INSTITUTIONS & ORGANISATIONS", description: "Penser des messages contextualisés qui respectent la diversité des territoires et des communautés." },
  ],
  "communication-360-strategie-globale": [
    { title: "DIRECTION GÉNÉRALE", description: "Relier la communication aux priorités de l’organisation, aux ressources disponibles et aux résultats attendus." },
    { title: "RESPONSABLES MARKETING & COMMUNICATION", description: "Coordonner les messages et les canaux dans un système de communication intégré." },
    { title: "ORGANISATIONS MULTICANALES", description: "Réduire les incohérences entre communication digitale, institutionnelle, commerciale et relations publiques." },
    { title: "AGENCES & PARTENAIRES", description: "Partager un cadre commun pour planifier, produire, valider et mesurer les actions." },
  ],
  "communication-corporate-institutionnelle": [
    { title: "DIRECTIONS & DIRIGEANTS", description: "Rendre plus lisibles la mission, les engagements, les décisions et les réalisations de l’organisation." },
    { title: "COMMUNICATION CORPORATE & RP", description: "Structurer les prises de parole, les messages clés et les relations avec les parties prenantes." },
    { title: "INSTITUTIONS & ORGANISMES PUBLICS", description: "Présenter les actions et informations institutionnelles avec clarté, cohérence et éléments vérifiables." },
    { title: "ÉQUIPES INTERNES", description: "Mieux articuler communication interne, culture organisationnelle et messages adressés aux publics externes." },
  ],
  "marketing-digital-seo": [
    { title: "DIRIGEANTS & ENTREPRENEURS", description: "Comprendre comment visibilité en ligne, présence numérique et acquisition contribuent au développement." },
    { title: "RESPONSABLES MARKETING", description: "Organiser les leviers digitaux autour d’objectifs, de contenus et d’indicateurs cohérents." },
    { title: "ÉQUIPES COMMERCIALES", description: "Mieux relier les points de contact numériques aux demandes, aux prospects et au parcours client." },
    { title: "ÉQUIPES WEB & CONTENU", description: "Travailler les fondamentaux SEO, la qualité des pages et la pertinence des contenus pour les utilisateurs." },
  ],
  "reseaux-sociaux": [
    { title: "ENTREPRENEURS & MARQUES", description: "Construire une présence sociale régulière et cohérente avec leur activité et leur public." },
    { title: "COMMUNITY MANAGERS", description: "Mieux organiser la ligne éditoriale, les publications et les interactions avec la communauté." },
    { title: "ÉQUIPES MARKETING", description: "Relier plateformes, objectifs, contenus et indicateurs plutôt que publier sans direction claire." },
    { title: "AGENCES & CRÉATEURS DE CONTENU", description: "Structurer la gestion des comptes, la production et le suivi des performances sociales." },
  ],
  "creation-contenu-storytelling": [
    { title: "RESPONSABLES ÉDITORIAUX", description: "Définir les audiences, les piliers de contenu, les formats et une ligne éditoriale cohérente." },
    { title: "MARKETEURS & COMMUNICANTS", description: "Créer des contenus utiles qui servent un objectif et s’adaptent au canal de diffusion." },
    { title: "ENTREPRENEURS & EXPERTS", description: "Présenter leur savoir-faire avec des récits, des exemples et une proposition de valeur claire." },
    { title: "RÉDACTEURS & CRÉATEURS", description: "Préparer, produire, décliner et réutiliser les contenus selon les besoins du public." },
  ],
  "design-graphique-creation-visuelle": [
    { title: "GRAPHISTES DÉBUTANTS À INTERMÉDIAIRES", description: "Structurer leur progression autour des fondamentaux, de la pratique et d’un programme de douze semaines." },
    { title: "COMMUNICANTS", description: "Concevoir des visuels lisibles et cohérents avec les messages et l’identité de l’organisation." },
    { title: "ENTREPRENEURS & TPE", description: "Mieux préparer leurs supports de communication imprimés et numériques." },
    { title: "ÉQUIPES MARKETING & SOCIAL MEDIA", description: "Harmoniser les formats, les modèles et les exports pour les différents canaux." },
  ],
  "innovation-ia": [
    { title: "DIRIGEANTS & DÉCIDEURS", description: "Évaluer où l’innovation et l’IA peuvent servir une priorité réelle plutôt qu’une nouveauté pour elle-même." },
    { title: "PME & ÉQUIPES OPÉRATIONNELLES", description: "Repérer des tâches et cas d’usage susceptibles d’être améliorés par des outils adaptés." },
    { title: "ÉQUIPES MARKETING & CONTENU", description: "Explorer les usages de l’IA pour préparer, analyser et soutenir le travail tout en gardant une supervision humaine." },
    { title: "RESPONSABLES NUMÉRIQUES & PROJETS", description: "Organiser l’expérimentation, prendre en compte les données et réfléchir aux conditions de déploiement." },
  ],
  "publicite-media-buying": [
    { title: "DIRIGEANTS & BUDGETS MARKETING", description: "Mieux comprendre les arbitrages entre dépenses publicitaires, objectifs et rentabilité attendue." },
    { title: "RESPONSABLES MÉDIA & PERFORMANCE", description: "Préparer, lancer, mesurer et optimiser des campagnes avec des indicateurs explicites." },
    { title: "COMMUNICANTS & ANNONCEURS", description: "Choisir les audiences, les formats et les messages en fonction du résultat recherché." },
    { title: "AGENCES & GESTIONNAIRES DE CAMPAGNES", description: "Structurer le plan média, le suivi des conversions et les cycles de test et d’optimisation." },
  ],
  "audiovisuel-motion-design": [
    { title: "DIRIGEANTS & RESPONSABLES MARKETING", description: "Cadrer la finalité d’une vidéo, son public, son format et son rôle dans la communication." },
    { title: "COMMUNICANTS & CRÉATEURS DE CONTENU", description: "Passer du message à un concept, un scénario et des formats adaptés aux canaux de diffusion." },
    { title: "VIDÉASTES & ÉQUIPES DE PRODUCTION", description: "Organiser la préparation, le tournage, l’image, le son, le montage et la postproduction." },
    { title: "MOTION DESIGNERS & ÉQUIPES DIGITALES", description: "Intégrer animation, rythme, sous-titrage et déclinaisons de formats dans une production cohérente." },
  ],
  "evenementiel-activation-marque": [
    { title: "DIRIGEANTS & RESPONSABLES DE MARQUE", description: "Relier l’événement à un objectif de marque, de relation, de lancement ou d’activation." },
    { title: "CHEFS DE PROJET ÉVÉNEMENTIEL", description: "Organiser concept, budget, calendrier, lieu, prestataires et parcours des participants." },
    { title: "ÉQUIPES MARKETING & COMMUNICATION", description: "Préparer la communication avant, pendant et après l’événement, ainsi que les partenariats." },
    { title: "AGENCES & ORGANISATEURS", description: "Coordonner les opérations, anticiper les risques et évaluer les résultats après l’événement." },
  ],
  "success-stories": [
    { title: "ENTREPRENEURS & DIRIGEANTS DE PME", description: "Analyser les décisions et les étapes qui peuvent contribuer à la progression d’un projet." },
    { title: "ÉQUIPES MARKETING & COMMUNICATION", description: "Apprendre à structurer un cas et à raconter une réalisation avec des éléments vérifiables." },
    { title: "AGENCES & CONSULTANTS", description: "Présenter une démarche, ses choix et ses enseignements sans réduire l’histoire à un discours promotionnel." },
    { title: "ÉQUIPES PROJET", description: "Identifier les leviers, les difficultés et les indicateurs utiles pour tirer des enseignements de situations illustratives." },
  ],
  "interviews-portraits": [
    { title: "COMMUNICANTS & ÉQUIPES ÉDITORIALES", description: "Préparer des interviews, portraits et témoignages alignés sur une intention éditoriale précise." },
    { title: "JOURNALISTES & CRÉATEURS", description: "Rechercher les informations, préparer les questions et conduire une conversation approfondie." },
    { title: "EXPERTS & ENTREPRENEURS", description: "Partager un parcours et une expertise à travers une parole structurée et fidèlement restituée." },
    { title: "ORGANISATIONS & MÉDIAS", description: "Décliner un entretien en contenus écrits, photographiques, audio ou vidéo pour les canaux adaptés." },
  ],
  "tutoriels-guides": [
    { title: "ENTREPRENEURS & DIRIGEANTS DE PME", description: "Trouver des méthodes concrètes pour organiser le travail, la communication et les projets." },
    { title: "ÉTUDIANTS & JEUNES PROFESSIONNELS", description: "Développer des habitudes d’apprentissage et progresser par étapes dans des compétences utiles." },
    { title: "ÉQUIPES MARKETING & COMMUNICATION", description: "Retrouver des repères pratiques pour la marque, les réseaux sociaux, le contenu et le SEO." },
    { title: "INDÉPENDANTS & PROFESSIONNELS DU DIGITAL", description: "Explorer les prompts, les outils numériques, les sites web, la prospection et l’automatisation." },
  ],
  "communication-crise-reputation": [
    { title: "DIRIGEANTS & CELLULES DE DÉCISION", description: "Préparer les rôles, les niveaux d’alerte et les décisions à prendre quand une situation se dégrade." },
    { title: "RESPONSABLES COMMUNICATION & RP", description: "Vérifier les faits, formuler des messages et coordonner la prise de parole pendant une crise." },
    { title: "ÉQUIPES DIGITALES & COMMUNITY MANAGERS", description: "Surveiller les signaux faibles et organiser la réponse aux critiques et incidents en ligne." },
    { title: "ÉQUIPES OPÉRATIONNELLES & RH", description: "Mieux coordonner l’information interne, la prise en compte des personnes et le suivi des actions correctives." },
  ],
};

const EBOOK_BENEFITS: Record<string, EbookBenefit[]> = {
  "conseils-astuces-marketing": [
    { title: "POSITIONNEMENT CLAIR", description: "Formuler ce qui distingue l’offre et à quel client elle répond.", icon: Lightbulb },
    { title: "CHOIX PRIORISÉS", description: "Sélectionner des canaux et contenus utiles au lieu de multiplier les actions.", icon: Target },
    { title: "PARCOURS CLIENT", description: "Relier visibilité, confiance, proposition de valeur et opportunités commerciales.", icon: Users },
    { title: "PLAN SUR 90 JOURS", description: "Organiser les prochaines actions et suivre des indicateurs adaptés.", icon: CheckCircle2 },
  ],
  "tendances-actualites": [
    { title: "LECTURE DES TENDANCES", description: "Situer les évolutions de l’IA, de la recherche, de la vidéo et des communautés.", icon: Lightbulb },
    { title: "TRI DES OPPORTUNITÉS", description: "Distinguer une évolution pertinente d’une nouveauté à suivre avec prudence.", icon: Target },
    { title: "REGARD CONTEXTUALISÉ", description: "Interroger les conséquences pour les marchés et marques africains.", icon: Users },
    { title: "MATRICE D’ACTION", description: "Utiliser les repères du guide pour prioriser les tests et les décisions.", icon: CheckCircle2 },
  ],
  "strategies-communication": [
    { title: "OBJECTIFS DÉFINIS", description: "Passer d’une intention générale à des objectifs de communication précis.", icon: Target },
    { title: "PUBLICS MIEUX COMPRIS", description: "Clarifier à qui parler, pour quel besoin et avec quel message.", icon: Users },
    { title: "PRISE DE PAROLE COHÉRENTE", description: "Aligner positionnement, messages, contenus et canaux.", icon: Lightbulb },
    { title: "PILOTAGE STRUCTURÉ", description: "Organiser les actions, les responsabilités et le suivi sur 90 jours.", icon: CheckCircle2 },
  ],
  "entrepreneuriat-business": [
    { title: "MARCHÉ VALIDÉ", description: "Mieux formuler le problème client et tester les hypothèses du projet.", icon: Target },
    { title: "OFFRE & MODÈLE", description: "Relier proposition de valeur, prix, revenus et marges.", icon: Lightbulb },
    { title: "SYSTÈME COMMERCIAL", description: "Comprendre les liens entre visibilité, acquisition, vente et fidélisation.", icon: Users },
    { title: "PILOTAGE DE L’ACTIVITÉ", description: "Repérer les dimensions financières, organisationnelles et opérationnelles à suivre.", icon: CheckCircle2 },
  ],
  "branding-identite-visuelle": [
    { title: "PLATEFORME DE MARQUE", description: "Clarifier positionnement, mission, valeurs, audience et personnalité.", icon: Lightbulb },
    { title: "IDENTITÉ COHÉRENTE", description: "Relier langage, couleurs, typographies, logo et éléments visuels.", icon: Target },
    { title: "EXPÉRIENCE RECONNAISSABLE", description: "Maintenir une expression de marque cohérente sur les points de contact.", icon: Users },
    { title: "ÉVOLUTION MAÎTRISÉE", description: "Évaluer les changements de marque et préparer des étapes de mise en œuvre.", icon: CheckCircle2 },
  ],
  "communication-africaine": [
    { title: "LECTURE DU CONTEXTE", description: "Éviter les généralisations et prendre en compte les différences entre marchés.", icon: Lightbulb },
    { title: "ADAPTATION CULTURELLE", description: "Réfléchir aux langues, aux codes, aux usages et à la proximité communautaire.", icon: Users },
    { title: "USAGES NUMÉRIQUES", description: "Mieux situer la place du mobile, de la vidéo, des créateurs et des communautés.", icon: Target },
    { title: "ARTICULATION LOCAL–GLOBAL", description: "Penser une expression authentique qui peut s’adapter à différents territoires.", icon: CheckCircle2 },
  ],
  "communication-360-strategie-globale": [
    { title: "VISION D’ENSEMBLE", description: "Relier diagnostic, objectifs et priorités de communication.", icon: Lightbulb },
    { title: "MESSAGES ALIGNÉS", description: "Harmoniser les prises de parole entre canaux et parties prenantes.", icon: Users },
    { title: "DÉPLOIEMENT COORDONNÉ", description: "Structurer les rôles, validations, budgets et calendriers.", icon: Target },
    { title: "MESURE DES ACTIONS", description: "Choisir des indicateurs pour analyser les résultats et ajuster les plans.", icon: CheckCircle2 },
  ],
  "communication-corporate-institutionnelle": [
    { title: "IDENTITÉ INSTITUTIONNELLE", description: "Préciser ce que représente l’organisation et ce qui la distingue.", icon: Lightbulb },
    { title: "PARTIES PRENANTES IDENTIFIÉES", description: "Adapter informations et messages aux attentes des différents publics.", icon: Users },
    { title: "PAROLE ÉTAYÉE", description: "Relier les affirmations aux actions, aux faits et aux réalisations vérifiables.", icon: Target },
    { title: "COHÉRENCE INTERNE–EXTERNE", description: "Réduire les écarts entre les messages, les comportements et les supports.", icon: CheckCircle2 },
  ],
  "marketing-digital-seo": [
    { title: "ÉCOSYSTÈME DIGITAL", description: "Comprendre comment les différents leviers en ligne se complètent.", icon: Lightbulb },
    { title: "FONDATIONS SEO", description: "Prendre en compte la technique, les contenus, la pertinence et la réputation.", icon: Target },
    { title: "CONTENUS UTILES", description: "Mieux répondre aux recherches et aux besoins concrets des utilisateurs.", icon: Users },
    { title: "SUIVI DES PERFORMANCES", description: "Relier visibilité, trafic et actions attendues à des indicateurs adaptés.", icon: CheckCircle2 },
  ],
  "reseaux-sociaux": [
    { title: "STRATÉGIE DE PLATEFORME", description: "Choisir les réseaux en fonction du public, des usages et des objectifs.", icon: Target },
    { title: "LIGNE ÉDITORIALE", description: "Structurer les thèmes, formats et rythmes de publication.", icon: Lightbulb },
    { title: "RELATION COMMUNAUTAIRE", description: "Organiser les interactions et les réponses de façon cohérente.", icon: Users },
    { title: "SUIVI PLUS PERTINENT", description: "Lire les indicateurs sociaux en fonction des objectifs plutôt que des seuls volumes.", icon: CheckCircle2 },
  ],
  "creation-contenu-storytelling": [
    { title: "STRATÉGIE ÉDITORIALE", description: "Clarifier audience, objectif, valeur apportée et piliers de contenu.", icon: Target },
    { title: "RÉCIT PLUS STRUCTURÉ", description: "Construire un storytelling cohérent avec le message et l’identité de marque.", icon: Lightbulb },
    { title: "PRODUCTION ORGANISÉE", description: "Choisir formats, calendrier et processus de création adaptés aux ressources.", icon: CheckCircle2 },
    { title: "CONTENUS RÉUTILISABLES", description: "Décliner les idées sur plusieurs supports tout en gardant leur pertinence.", icon: Users },
  ],
  "design-graphique-creation-visuelle": [
    { title: "FONDAMENTAUX VISUELS", description: "Mieux comprendre composition, hiérarchie, contraste, couleurs et typographie.", icon: Lightbulb },
    { title: "SUPPORTS PLUS COHÉRENTS", description: "Relier les choix visuels au public, au message et à l’identité de marque.", icon: Target },
    { title: "FORMATS ADAPTÉS", description: "Préparer les créations pour les réseaux sociaux, les écrans et l’impression.", icon: CheckCircle2 },
    { title: "PROGRESSION ORGANISÉE", description: "Suivre une démarche de pratique et de progression sur douze semaines.", icon: Users },
  ],
  "innovation-ia": [
    { title: "CAS D’USAGE PERTINENTS", description: "Partir d’un besoin métier avant de choisir un outil ou une technologie.", icon: Target },
    { title: "USAGES MIEUX COMPRIS", description: "Distinguer possibilités, limites et besoins de supervision humaine.", icon: Lightbulb },
    { title: "EXPÉRIMENTATION CADRÉE", description: "Comparer les cas d’usage et organiser des essais à petite échelle.", icon: CheckCircle2 },
    { title: "ATTENTION AUX DONNÉES", description: "Prendre en compte la qualité des données, les risques et les responsabilités.", icon: Users },
  ],
  "publicite-media-buying": [
    { title: "OBJECTIF PUBLICITAIRE", description: "Relier chaque campagne à un résultat attendu et à une audience définie.", icon: Target },
    { title: "LECTURE DES INDICATEURS", description: "Mieux comprendre CPM, CPC, CTR, CPL, CPA, ROAS et autres repères cités dans le guide.", icon: Lightbulb },
    { title: "TESTS & OPTIMISATION", description: "Structurer le suivi des conversions et l’amélioration des audiences et créations.", icon: CheckCircle2 },
    { title: "PLAN MÉDIA ORGANISÉ", description: "Répartir les actions dans une démarche de diffusion et d’amélioration sur 12 semaines.", icon: Users },
  ],
  "audiovisuel-motion-design": [
    { title: "BRIEF & STORYBOARD", description: "Traduire le besoin en objectif, concept, scénario et séquences de production.", icon: Lightbulb },
    { title: "BASES DE PRODUCTION", description: "Mieux organiser cadrage, image, son, lumière, tournage et interviews.", icon: Target },
    { title: "MONTAGE & MOTION", description: "Comprendre les étapes d’animation, de montage et de déclinaison des formats.", icon: CheckCircle2 },
    { title: "DIFFUSION RESPONSABLE", description: "Prendre en compte les droits, le budget, l’accessibilité et la mesure des contenus.", icon: Users },
  ],
  "evenementiel-activation-marque": [
    { title: "OBJECTIFS D’ÉVÉNEMENT", description: "Définir ce que l’événement ou l’activation doit apporter à la marque et au public.", icon: Target },
    { title: "CONCEPTION & BUDGET", description: "Relier concept, format, lieu, ressources et contraintes de réalisation.", icon: Lightbulb },
    { title: "EXPÉRIENCE PARTICIPANT", description: "Préparer l’accueil, les interactions, les prestataires et les moments clés.", icon: Users },
    { title: "BILAN & APPRENTISSAGES", description: "Évaluer l’organisation et les résultats après l’événement afin d’en tirer des enseignements.", icon: CheckCircle2 },
  ],
  "success-stories": [
    { title: "LECTURE DES CAS", description: "Comprendre une situation à travers son diagnostic, sa stratégie, sa transformation et ses résultats.", icon: Lightbulb },
    { title: "LEVIERS DE RÉUSSITE", description: "Repérer les décisions, méthodes et contributions mis en avant dans les cas pédagogiques.", icon: Target },
    { title: "PREUVES & INDICATEURS", description: "Distinguer les éléments vérifiables des affirmations qui demandent à être démontrées.", icon: CheckCircle2 },
    { title: "RÉCIT CRÉDIBLE", description: "Structurer une étude de cas professionnelle sans présenter les exemples fictifs du guide comme des cas réels.", icon: Users },
  ],
  "interviews-portraits": [
    { title: "ANGLE ÉDITORIAL", description: "Définir le but de l’entretien, l’interlocuteur et ce que le public doit en retenir.", icon: Target },
    { title: "PRÉPARATION & ÉCOUTE", description: "Construire les questions, vérifier les informations et relancer avec pertinence.", icon: Lightbulb },
    { title: "FIDÉLITÉ DE LA RESTITUTION", description: "Présenter les propos et le parcours de la personne avec précision et respect.", icon: Users },
    { title: "DÉCLINAISON DES CONTENUS", description: "Adapter et diffuser les interviews sous forme écrite, audio, photo ou vidéo.", icon: CheckCircle2 },
  ],
  "tutoriels-guides": [
    { title: "APPRENDRE PAR ÉTAPES", description: "Organiser l’apprentissage et transformer l’information en compétences mobilisables.", icon: Lightbulb },
    { title: "REPÈRES TRANSVERSAUX", description: "Retrouver des méthodes sur la communication, le marketing, la marque et les réseaux sociaux.", icon: Target },
    { title: "OUTILS NUMÉRIQUES", description: "Explorer les prompts, l’IA, les sites web, le SEO et l’automatisation dans des usages pratiques.", icon: CheckCircle2 },
    { title: "PLAN DE PROGRESSION", description: "Relier les modules à des objectifs de travail et à une progression sur 30 jours.", icon: Users },
  ],
  "communication-crise-reputation": [
    { title: "DÉTECTION DES RISQUES", description: "Repérer les signaux faibles, niveaux d’alerte et enjeux pour les personnes concernées.", icon: Lightbulb },
    { title: "DISPOSITIF DE RÉPONSE", description: "Clarifier les rôles, les procédures de décision et l’organisation de la cellule de crise.", icon: Target },
    { title: "MESSAGES FIABLES", description: "Vérifier les faits et préparer une parole adaptée pendant les premières heures.", icon: CheckCircle2 },
    { title: "CONFIANCE & SUIVI", description: "Coordonner la réponse sur les médias et canaux numériques, puis suivre les actions de reconstruction.", icon: Users },
  ],
};

const fallbackSections = (ebook: EbookData): EbookSection[] => [
  { title: `Comprendre les enjeux de ${ebook.title}`, description: "Cette partie du guide présente les principaux enjeux associés au thème et les points d’attention à considérer avant d’agir." },
  { title: "Les principes essentiels", description: "Une synthèse des notions et méthodes essentielles à maîtriser pour structurer sa démarche." },
  { title: "Passer à l’action", description: "Des pistes pratiques pour transformer les enseignements du guide en actions concrètes dans l’entreprise." },
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

    if (showDownloadModal) window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [showDownloadModal]);

  const handleDownloadRequest = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!ebook || isSubmitting) return;

    const configuredPdfUrl = getEbookPdfUrl(ebook.slug);
    if (!configuredPdfUrl) {
      setDownloadStatusType("error");
      setDownloadStatus("Le fichier PDF de ce guide n’est pas encore associé. Aucun e-mail n’a été enregistré. Vérifiez son nom dans la configuration EBOOK_PDF_FILES en haut du fichier.");
      return;
    }

    const normalizedEmail = email.trim().toLowerCase();
    setIsSubmitting(true);
    setDownloadStatus("");

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        redirect: "follow",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          type: "ebook_download",
          email: normalizedEmail,
          ebook_titre: ebook.title,
          ebook_slug: ebook.slug,
          source: "Site SunuLink Insights",
        }),
      });

      if (!response.ok) throw new Error("Le service d’enregistrement n’a pas répondu correctement.");
      const result: { status?: string; message?: string } = await response.json();
      if (result.status !== "success") throw new Error(result.message || "L’adresse e-mail n’a pas pu être enregistrée.");

      setDownloadStatusType("success");
      setDownloadStatus("Adresse enregistrée. Le téléchargement du guide est lancé.");

      const pdfUrl = new URL(configuredPdfUrl, window.location.origin);
      const downloadLink = document.createElement("a");
      downloadLink.href = pdfUrl.href;
      downloadLink.rel = "noopener noreferrer";
      if (pdfUrl.origin === window.location.origin) downloadLink.download = EBOOK_PDF_FILES[ebook.slug];
      else downloadLink.target = "_blank";
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
        <main className="px-6 pb-20 pt-32">
          <div className="container mx-auto max-w-4xl text-center">
            <BookOpen className="mx-auto mb-5 h-16 w-16 text-sunuBlue" />
            <h1 className="mb-4 text-3xl font-black text-gray-900 sm:text-4xl">E-book non trouvé</h1>
            <p className="mb-7 text-gray-600">Le guide demandé n’est pas encore référencé dans la bibliothèque SunuLink Insights.</p>
            <Link to="/ressources" className="inline-flex items-center gap-2 rounded-full bg-sunuBlue px-6 py-3 font-bold text-white transition-colors hover:bg-sunuOrange">
              <ArrowLeft className="h-5 w-5" /> Retour aux ressources
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
        <section className="bg-white px-4 pb-5 pt-28 sm:px-6 md:pt-32">
          <div className="container mx-auto max-w-7xl">
            <Link to="/ressources" className="inline-flex items-center gap-2 text-sm font-bold text-sunuBlue transition-colors hover:text-sunuOrange">
              <ArrowLeft className="h-4 w-4" /> Retour à Ressources & Expertises
            </Link>
          </div>
        </section>

        {/* HERO E-BOOK */}
        <section className="px-4 pb-12 sm:px-6 md:pb-16">
          <div className="container mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-[#0B2440] to-sunuBlue shadow-[0_25px_80px_rgba(0,113,188,0.2)]">
              <div className="grid min-h-[620px] lg:grid-cols-[1.15fr_0.85fr]">
                <div className="relative flex flex-col justify-center p-7 text-white sm:p-10 md:p-14 lg:p-16">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,156,222,0.22),transparent_35%),radial-gradient(circle_at_85%_75%,rgba(246,166,26,0.14),transparent_30%)]" />
                  <div className="relative z-10">
                    <div className="mb-5 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] backdrop-blur-md">
                        <BookOpen className="h-4 w-4 text-sunuOrange" /> SUNULINK INSIGHTS
                      </span>
                      <span className="inline-flex items-center rounded-full border border-sunuOrange/30 bg-sunuOrange/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-sunuOrange">ÉDITION 2026–2027</span>
                    </div>
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-sunuOrange sm:text-sm">{ebook.group}</p>
                    <h1 className="max-w-3xl text-4xl font-black leading-[0.98] tracking-tight sm:text-5xl md:text-6xl">{ebook.title}</h1>
                    <p className="mt-6 max-w-3xl text-base leading-relaxed text-blue-50/90 sm:text-lg md:text-xl">{ebook.description}</p>
                    <div className="mt-7 flex flex-wrap gap-2.5">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-bold text-white/90"><BookOpen className="h-4 w-4 text-sunuCyan" />{ebook.pages}</span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-bold text-white/90"><Clock className="h-4 w-4 text-sunuOrange" />{ebook.readTime}</span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-bold text-white/90"><Users className="h-4 w-4 text-sunuCyan" />{ebook.author}</span>
                    </div>
                    <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
                      <a href="#decouvrir" className="inline-flex items-center justify-center gap-2 rounded-full bg-sunuOrange px-7 py-3.5 font-black text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white hover:text-sunuBlue">Lire le guide <ArrowRight className="h-4 w-4" /></a>
                      <button type="button" onClick={() => { setDownloadStatus(""); setDownloadStatusType("info"); setShowDownloadModal(true); }} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 bg-white/5 px-7 py-3.5 font-black text-white backdrop-blur-sm transition-all hover:bg-white hover:text-sunuBlue"><Download className="h-4 w-4" /> Télécharger le PDF</button>
                    </div>
                  </div>
                </div>

                {/* Couverture principale mise à jour avec le visuel de BlogPage */}
                <div className="relative flex items-center justify-center border-t border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-sunuCyan/10 p-8 sm:p-10 md:p-14 lg:border-l lg:border-t-0">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />
                  <div className="relative w-full max-w-[350px]">
                    <div className="absolute -inset-4 rounded-[2rem] bg-sunuOrange/15 blur-3xl" />
                    <div className="relative aspect-[3/4] rotate-2 overflow-hidden rounded-[1.5rem] border border-white/20 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                      {ebook.cover && !coverError ? (
                        <img src={ebook.cover} alt={`Couverture de l’e-book ${ebook.title}`} className="h-full w-full object-cover" onError={() => setCoverError(true)} />
                      ) : (
                        <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuOrange p-7 text-white">
                          <div><p className="text-xs font-black uppercase tracking-[0.2em] text-white/80">SUNULINK INSIGHTS</p><p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">ÉDITION 2026–2027</p></div>
                          <div><span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider">E-BOOK</span><h2 className="text-3xl font-black leading-tight">{ebook.title}</h2></div>
                          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">SunuLink Consulting</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CE QUE VOUS ALLEZ DÉCOUVRIR */}
        <section id="decouvrir" className="bg-slate-50 px-4 py-16 sm:px-6 md:py-24">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-sunuOrange">Lecture stratégique</span>
              <h2 className="mt-2 text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">CE QUE VOUS ALLEZ DÉCOUVRIR</h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">Les principaux chapitres du guide seront présentés ici pour permettre au lecteur de comprendre rapidement sa structure et son intérêt.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {sections.map((section, index) => (
                <article key={`${section.title}-${index}`} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">
                  <div className="mb-6 flex items-center justify-between gap-3"><span className="text-4xl font-black text-sunuOrange/25">{String(index + 1).padStart(2, "0")}</span><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sunuBlue/10"><FileText className="h-5 w-5 text-sunuBlue" /></div></div>
                  <h3 className="mb-3 text-xl font-black leading-tight text-gray-900">{section.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">{section.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CE GUIDE EST POUR VOUS SI… */}
        <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
          <div className="container mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14"><span className="text-xs font-black uppercase tracking-[0.18em] text-sunuBlue">Pour quels profils ?</span><h2 className="mt-2 text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">CE GUIDE EST POUR VOUS SI…</h2></div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {(EBOOK_AUDIENCES[ebook.slug] ?? DEFAULT_GUIDE_AUDIENCES).map((profile, index) => (
                <div key={`${profile.title}-${index}`} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 transition-all hover:border-sunuBlue/30 hover:shadow-lg">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sunuBlue to-sunuCyan text-white"><Users className="h-6 w-6" /></div>
                  <h3 className="mb-2 text-base font-black tracking-wide text-sunuBlue">{profile.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{profile.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CE QUE VOUS ALLEZ EN RETIRER */}
        <section className="bg-slate-50 px-4 py-16 sm:px-6 md:py-24">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl"><span className="text-xs font-black uppercase tracking-[0.18em] text-sunuOrange">Valeur du guide</span><h2 className="mt-2 text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">CE QUE VOUS ALLEZ EN RETIRER</h2></div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {(EBOOK_BENEFITS[ebook.slug] ?? DEFAULT_EBOOK_BENEFITS).map((benefit, index) => {
                const Icon = benefit.icon;
                return <article key={`${benefit.title}-${index}`} className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl sm:p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sunuBlue/10 transition-colors group-hover:bg-sunuOrange"><Icon className="h-6 w-6 text-sunuBlue group-hover:text-white" /></div>
                  <h3 className="mb-2 text-xl font-black text-gray-900">{benefit.title}</h3><p className="text-sm leading-relaxed text-gray-600">{benefit.description}</p>
                </article>;
              })}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-4 py-12 sm:px-6 md:py-20">
          <div className="container mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-sunuBlue via-sunuCyan to-sunuBlue text-white shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_85%_75%,rgba(246,166,26,0.18),transparent_30%)]" />
              <div className="relative z-10 px-6 py-12 text-center sm:px-10 md:py-16">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-sunuOrange">SUNULINK CONSULTING</p>
                <h2 className="mx-auto max-w-4xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">BESOIN D’ALLER PLUS LOIN ? PARLONS DE VOTRE PROJET.</h2>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-50 sm:text-lg">Nos ressources vous donnent les clés. Notre équipe vous accompagne pour les transformer en résultats.</p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-sunuOrange px-7 py-3.5 font-black text-white transition-all hover:bg-white hover:text-sunuBlue">Parler à un expert <ArrowRight className="h-4 w-4" /></Link>
                  <Link to="/ressources" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 bg-white/5 px-7 py-3.5 font-black text-white transition-all hover:bg-white hover:text-sunuBlue"><BookOpen className="h-4 w-4" /> Voir d’autres ressources</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* MODAL TÉLÉCHARGEMENT */}
      {showDownloadModal && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/70 p-3 backdrop-blur-sm sm:p-4" onClick={(event) => { if (event.target === event.currentTarget) setShowDownloadModal(false); }}>
          <div className="flex min-h-full items-center justify-center">
            <div role="dialog" aria-modal="true" aria-labelledby="ebook-download-title" className="relative my-auto max-h-[calc(100dvh-1.5rem)] w-full max-w-lg overflow-y-auto overscroll-contain rounded-[1.75rem] bg-white shadow-2xl sm:max-h-[calc(100dvh-2rem)] sm:rounded-[2rem]">
              <div className="h-1.5 bg-gradient-to-r from-sunuBlue via-sunuCyan to-sunuOrange" />
              <button type="button" onClick={() => setShowDownloadModal(false)} className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-gray-700 shadow-sm transition-colors hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-sunuBlue/20" aria-label="Fermer la fenêtre de téléchargement"><X className="h-5 w-5" /></button>
              <div className="p-6 pt-16 sm:p-9 sm:pt-16">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sunuBlue/10"><Mail className="h-7 w-7 text-sunuBlue" /></div>
                <span className="text-xs font-black uppercase tracking-[0.16em] text-sunuOrange">SUNULINK INSIGHTS</span>
                <h2 id="ebook-download-title" className="mt-2 text-2xl font-black leading-tight text-gray-900 sm:text-3xl">Recevez votre e-book</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">Entrez votre adresse e-mail pour accéder au téléchargement de : <strong>{ebook.title}</strong>.</p>
                <form onSubmit={handleDownloadRequest} className="mt-6 space-y-4">
                  <div><label className="mb-2 block text-sm font-bold text-gray-700">Votre adresse e-mail</label><input type="email" name="email" autoComplete="email" value={email} onChange={(event) => { setEmail(event.target.value); setDownloadStatus(""); setDownloadStatusType("info"); }} required disabled={isSubmitting} placeholder="exemple@entreprise.com" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-800 outline-none transition-all focus:border-sunuBlue focus:ring-4 focus:ring-sunuBlue/10 disabled:cursor-not-allowed disabled:opacity-60" /></div>
                  <button type="submit" disabled={isSubmitting} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sunuBlue px-5 py-3.5 font-black text-white shadow-lg transition-all hover:bg-sunuOrange disabled:cursor-wait disabled:opacity-70">
                    {isSubmitting ? <><span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" /> Enregistrement en cours…</> : <><Download className="h-4 w-4" /> Accéder au téléchargement</>}
                  </button>
                </form>
                {downloadStatus && <div role="status" aria-live="polite" className={`mt-4 rounded-xl border p-4 text-sm font-semibold ${downloadStatusType === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-800" : downloadStatusType === "error" ? "border-red-200 bg-red-50 text-red-700" : "border-sunuBlue/15 bg-sunuBlue/5 text-sunuBlue"}`}>{downloadStatus}</div>}
                <p className="mt-5 text-xs leading-relaxed text-gray-400">Votre adresse e-mail sera utilisée pour traiter votre demande d’accès à ce guide. Le téléchargement démarrera une fois l’enregistrement confirmé et le PDF associé à cette ressource.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EbookDetailPage;
