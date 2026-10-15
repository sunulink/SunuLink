import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Sparkles,
  Star,
  Crown,
  Target,
  ArrowLeft,
  Check,
  Truck,
  Scale,
  Factory,
  GraduationCap,
} from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";

export const servicesData = [
  {
    slug: "automatisation-marketing",
    title: "Automatisation Marketing",
    tagline: "Optimisez vos campagnes. Automatisez votre croissance.",
    icon: Sparkles,
    color: "from-blue-500 to-cyan-500",

    introduction: `
L’automatisation marketing est une solution stratégique qui permet aux entreprises de gérer
et optimiser l’ensemble de leurs actions marketing de manière intelligente et automatique.
Grâce à l’IA, chaque action est personnalisée et prédictive, garantissant un meilleur engagement
et un retour sur investissement optimisé.
    `,

    points: [
      { title: "CRM intelligent et automatisé", description: "Segmentation automatique des prospects, scoring prédictif et priorisation des opportunités à forte valeur." },
      { title: "Campagnes marketing automatisées", description: "Emails, SMS et notifications déclenchés automatiquement selon le comportement et le profil client." },
      { title: "Analyse de performance et reporting", description: "Tableaux de bord interactifs et prédictions IA pour ajuster instantanément les stratégies." },
      { title: "Social Media Automation", description: "Planification, publication et suivi automatisés sur toutes les plateformes sociales." },
      { title: "Segmentation avancée", description: "Analyse comportementale fine pour des messages ultra ciblés et personnalisés." },
      { title: "Lead nurturing automatisé", description: "Accompagnement intelligent des prospects selon leur maturité dans le tunnel de conversion." },
      { title: "Personnalisation dynamique du contenu", description: "Contenus et offres adaptés automatiquement aux préférences de chaque utilisateur." },
      { title: "Optimisation multicanal", description: "Coordination automatique des campagnes email, SMS, réseaux sociaux et site web." },
      { title: "Suivi des conversions", description: "Analyse en temps réel du parcours client et optimisation des points de friction." },
      { title: "A/B testing automatisé", description: "Tests automatiques pour identifier les campagnes les plus performantes." },
      { title: "Reporting prédictif", description: "Anticipation des résultats futurs pour une meilleure allocation des budgets." },
      { title: "SEO & content marketing automatisés", description: "Optimisation automatique des contenus et recommandations à fort potentiel de trafic." },
      { title: "Gestion intelligente des leads entrants", description: "Classification et attribution automatiques des leads aux bonnes équipes." },
      { title: "Alertes et notifications intelligentes", description: "Notifications en temps réel pour réagir immédiatement aux comportements clés." },
      { title: "Optimisation continue", description: "Amélioration automatique des performances grâce aux données et aux retours utilisateurs." }
    ],

    conclusion: `
L’automatisation marketing n’est plus un luxe mais un impératif stratégique.
Elle permet un gain de temps considérable, une meilleure performance et une
prise de décision prédictive. C’est un levier essentiel pour toute entreprise
souhaitant rester compétitive et orientée résultats.
    `
  },

  {
    slug: "automatisation-commerciale",
    title: "Automatisation Commerciale",
    tagline: "Accélérez vos ventes grâce à l’intelligence artificielle.",
    icon: Star,
    color: "from-orange-500 to-yellow-500",

    introduction: `
L’automatisation commerciale permet aux entreprises de gérer, optimiser et accélérer l’ensemble
du processus de vente grâce à l’IA. Elle libère les équipes commerciales des tâches répétitives et
chronophages, tout en offrant une visibilité complète sur les prospects et le pipeline de vente.
Cette approche garantit que chaque opportunité est exploitée efficacement, avec des décisions basées
sur des données fiables et actualisées.
    `,

    points: [
      { title: "Prospection intelligente IA", description: "Identification automatique des prospects à fort potentiel, avec scoring basé sur le comportement, l’historique et la propension à acheter." },
      { title: "Suivi des ventes automatisé", description: "Suivi du pipeline en temps réel, alertes sur les opportunités critiques et génération automatique de rapports de performance." },
      { title: "Analyse de marché prédictive", description: "L’IA anticipe les tendances et comportements clients pour orienter les stratégies commerciales et identifier de nouvelles opportunités." },
      { title: "Intégration CRM complète", description: "Centralisation de toutes les informations clients et prospects, avec mise à jour automatique et synchronisation des interactions." },
      { title: "Optimisation du pipeline de vente", description: "Priorisation des leads et opportunités selon leur potentiel et leur stade dans le parcours d’achat." },
      { title: "Segmentation des prospects", description: "Groupement intelligent des clients potentiels selon le secteur, la taille, le comportement et le potentiel d’achat." },
      { title: "Lead nurturing automatisé", description: "Envoi automatique de contenus personnalisés pour faire progresser les prospects dans le cycle de vente." },
      { title: "Prévisions de ventes IA", description: "Analyse des données historiques et comportementales pour prévoir les ventes futures et ajuster les stratégies." },
      { title: "Reporting détaillé", description: "Tableau de bord complet avec KPIs commerciaux, performances individuelles et analyse des tendances." },
      { title: "Alertes et notifications intelligentes", description: "Les commerciaux reçoivent en temps réel des notifications sur les leads chauds, les opportunités urgentes et les actions prioritaires." },
      { title: "Automatisation des relances", description: "Relances clients automatiques par email ou SMS, adaptées au comportement et à l’historique du prospect." },
      { title: "Analyse de concurrence", description: "L’IA surveille la concurrence, identifie les forces et faiblesses, et propose des actions stratégiques pour rester compétitif." },
      { title: "Optimisation des scripts commerciaux", description: "Recommandations automatiques pour améliorer les messages, les pitchs et les présentations clients." },
      { title: "Gestion des rendez-vous automatisée", description: "Planification intelligente des réunions et synchronisation avec les agendas des commerciaux et clients." },
      { title: "Amélioration continue", description: "Les données collectées permettent d’ajuster automatiquement les stratégies commerciales et d’optimiser en permanence le processus de vente." }
    ],

    conclusion: `
L’automatisation commerciale améliore la productivité des équipes, réduit les cycles de vente et maximise les revenus.
Elle offre une visibilité complète sur le pipeline, une gestion intelligente des prospects et des décisions guidées
par des données fiables. Pour toute entreprise souhaitant croître efficacement, l’automatisation commerciale est
un levier stratégique indispensable.
    `
  },

  {
    slug: "automatisation-administrative",
    title: "Automatisation Administrative",
    tagline: "Optimisez vos processus internes et gagnez en efficacité.",
    icon: Crown,
    color: "from-purple-500 to-pink-500",

    introduction: `
L’automatisation administrative est une solution essentielle pour toute entreprise souhaitant réduire
les tâches répétitives, minimiser les erreurs et libérer du temps pour les activités à forte valeur ajoutée.
Elle permet aux équipes administratives de se concentrer sur les décisions stratégiques plutôt que sur
les processus manuels, tout en garantissant une organisation optimale et une productivité accrue.
    `,

    points: [
      { title: "Gestion documentaire automatisée", description: "Classement, tri et archivage automatique des documents internes, courriels et fichiers pour un accès instantané et sécurisé." },
      { title: "Facturation automatisée", description: "Génération automatique des factures, suivi des paiements et relances intelligentes pour améliorer la trésorerie et réduire les erreurs." },
      { title: "Planification et rappels intelligents", description: "Gestion des agendas, notifications automatiques pour réunions, échéances et tâches récurrentes." },
      { title: "Optimisation des processus internes", description: "Cartographie et rationalisation des procédures administratives pour éliminer les inefficacités et améliorer la productivité globale." },
      { title: "Suivi et reporting automatisés", description: "Tableaux de bord interactifs pour visualiser la performance administrative, suivre les indicateurs clés et prendre des décisions rapides." },
      { title: "Gestion des emails automatisée", description: "Tri intelligent, réponses automatiques et priorisation des emails pour éviter la surcharge et accélérer la communication interne." },
      { title: "Workflow de validation automatisé", description: "Approbation et validation des documents, dépenses et demandes internes selon les règles préconfigurées." },
      { title: "Archivage sécurisé et conformité", description: "Sauvegarde automatique des documents avec contrôle d’accès et conformité aux régulations légales." },
      { title: "Automatisation des rapports financiers", description: "Génération automatique de bilans, comptes de résultat et rapports pour les directions et stakeholders." },
      { title: "Suivi des tâches et projets", description: "Visualisation en temps réel de l’avancement des projets et tâches avec alertes pour les deadlines importantes." },
      { title: "Gestion des contrats internes", description: "Suivi automatisé des dates de renouvellement, des obligations et des engagements contractuels." },
      { title: "Optimisation des flux d’information", description: "Transmission automatique des données entre départements pour fluidifier les échanges et réduire les délais." },
      { title: "Tableaux de bord personnalisés", description: "Création de dashboards sur mesure pour chaque service afin de suivre les KPI clés en continu." },
      { title: "Réduction des erreurs humaines", description: "Automatisation des calculs, saisies et relances pour minimiser les erreurs et améliorer la précision des données." },
      { title: "Amélioration continue des processus", description: "L’IA analyse les performances administratives pour recommander des ajustements et garantir une efficacité optimale." }
    ],

    conclusion: `
L’automatisation administrative transforme la gestion interne de l’entreprise en garantissant rapidité, précision et organisation.
Elle réduit la charge mentale des équipes, minimise les erreurs et libère du temps pour les activités stratégiques.
Pour toute entreprise moderne, l’automatisation administrative est un levier indispensable pour la performance et l’efficacité.
    `
  },

  {
    slug: "automatisation-rh",
    title: "Automatisation des Ressources Humaines",
    tagline: "Optimisez la gestion de votre capital humain.",
    icon: Target,
    color: "from-green-500 to-teal-500",

    introduction: `
L’automatisation des RH est une solution stratégique qui permet aux entreprises de gérer efficacement leur capital humain,
tout en optimisant le temps et les ressources. Elle libère les équipes RH des tâches répétitives et administratives,
leur permettant de se concentrer sur le développement des talents, la motivation des employés et la stratégie organisationnelle.
Grâce à l’IA, chaque processus RH devient plus rapide, précis et transparent.
    `,

    points: [
      { title: "Recrutement intelligent", description: "L’IA analyse automatiquement les CV, présélectionne les candidats et recommande les profils les plus adaptés." },
      { title: "Gestion des plannings", description: "Suivi automatisé des horaires, absences, congés et heures supplémentaires, avec alertes et notifications intelligentes." },
      { title: "Onboarding digital", description: "Intégration rapide des nouveaux collaborateurs avec formation automatisée, documentation digitale et accès aux outils nécessaires." },
      { title: "Optimisation des processus RH", description: "Détection des inefficacités dans les workflows RH et recommandations pour rationaliser les opérations internes." },
      { title: "Analyse de l’engagement et satisfaction", description: "Collecte et analyse des feedbacks employés via enquêtes automatisées pour améliorer la motivation et la rétention." },
      { title: "Évaluation automatisée des performances", description: "Suivi des KPI individuels et collectifs avec rapports automatiques pour mieux guider le développement des talents." },
      { title: "Formation et développement", description: "Gestion automatisée des parcours de formation, suivi des compétences acquises et recommandations personnalisées." },
      { title: "Gestion des documents RH", description: "Archivage, tri et accès rapide aux contrats, fiches de paie, évaluations et autres documents importants." },
      { title: "Gestion des talents", description: "Identification des employés à fort potentiel, planification de la relève et suivi des carrières." },
      { title: "Rappels et notifications automatisés", description: "Alertes pour échéances importantes comme évaluations, renouvellement de contrats ou formations obligatoires." },
      { title: "Communication interne automatisée", description: "Diffusion des informations RH pertinentes à chaque équipe de manière ciblée et programmée." },
      { title: "Compliance et sécurité des données", description: "Gestion sécurisée des données personnelles des employés avec respect des normes et régulations en vigueur." },
      { title: "Optimisation de la paie", description: "Calcul automatique des salaires, primes, retenues et génération des bulletins de paie précis." },
      { title: "Analyse prédictive des besoins RH", description: "L’IA anticipe les besoins en recrutement, formation ou réaffectation des ressources." },
      { title: "Amélioration continue des processus", description: "Les flux et performances RH sont analysés pour proposer des optimisations permanentes, assurant une gestion stratégique et efficace." }
    ],

    conclusion: `
L’automatisation des RH réduit la charge administrative, augmente la précision des données et améliore l’expérience employé.
Elle permet aux équipes RH de se concentrer sur la stratégie et le développement du capital humain,
tout en assurant une gestion efficace et optimisée. Pour toute entreprise ambitieuse,
l’automatisation des RH est un levier incontournable pour la performance et la croissance.
    `
  },
  {
  slug: "business-intelligence",
  title: "Business Intelligence & Analyse de données",
  tagline: "Transformez vos données en décisions stratégiques.",
  icon: Sparkles,
  color: "from-blue-500 to-cyan-500",

  introduction: `
La Business Intelligence (BI) et l’analyse de données automatisée permettent aux entreprises de transformer des données brutes en insights stratégiques, offrant ainsi une vision complète de leurs performances et de leurs opportunités. Dans un environnement compétitif, l’IA aide à prendre des décisions éclairées, basées sur des informations fiables, rapides et prédictives. La BI devient ainsi un levier essentiel pour optimiser la croissance, réduire les risques et améliorer la performance globale.
  `,

  points: [
    { title: "Reporting automatisé", description: "Génération automatique de rapports quotidiens, hebdomadaires ou mensuels, avec visualisation claire et interactive des données." },
    { title: "Analyse prédictive", description: "Anticipation des tendances du marché, comportements clients et opportunités pour orienter les décisions stratégiques." },
    { title: "Tableaux de bord personnalisés", description: "Visualisation centralisée des KPI pour tous les départements : ventes, marketing, production, RH et finances." },
    { title: "Intégration multi-sources", description: "Consolidation des données provenant de différents systèmes internes et externes pour une vision complète et fiable." },
    { title: "Segmentation intelligente", description: "Analyse des clients, produits et marchés pour identifier les segments à forte valeur et prioriser les actions." },
    { title: "Alertes et notifications automatisées", description: "Détection des anomalies et alertes en temps réel pour permettre une réaction rapide." },
    { title: "Analyse de performance financière", description: "Suivi des marges, revenus et coûts pour optimiser la rentabilité et la prise de décision financière." },
    { title: "Analyse marketing avancée", description: "Mesure de l’efficacité des campagnes, identification des canaux les plus performants et recommandations pour améliorer le ROI." },
    { title: "Optimisation opérationnelle", description: "Identification des inefficacités dans les processus internes et propositions d’amélioration." },
    { title: "Prévisions de ventes et demande", description: "L’IA anticipe la demande et les tendances pour aider à planifier la production et les stocks." },
    { title: "Analyse de la concurrence", description: "Surveillance automatisée du marché et recommandations stratégiques pour rester compétitif." },
    { title: "Scoring et priorisation des clients", description: "Identification des clients à fort potentiel pour optimiser les efforts commerciaux et marketing." },
    { title: "Automatisation des rapports réglementaires", description: "Génération automatique des documents pour conformité légale et audit interne." },
    { title: "Optimisation continue des KPI", description: "Suivi et ajustement des indicateurs clés en temps réel pour maintenir la performance optimale." },
    { title: "Décisions guidées par l’IA", description: "L’intelligence artificielle fournit des insights actionnables pour des décisions rapides, fiables et stratégiques." }
  ],

  conclusion: `
La Business Intelligence et l’analyse de données automatisée transforment les données en un véritable levier de croissance. Elles permettent aux entreprises de prendre des décisions éclairées, anticiper les tendances et optimiser leurs performances dans tous les domaines. Pour rester compétitive et agile, toute entreprise doit exploiter l’IA pour obtenir une vision claire, complète et stratégique de son activité.
  `
  },
  {
  slug: "automatisation-relation-client",
  title: "Automatisation de la Relation Client",
  tagline: "Offrez un service client intelligent, rapide et personnalisé.",
  icon: Sparkles,
  color: "from-green-500 to-teal-500",

  introduction: `
L’automatisation de la relation client permet aux entreprises de fournir un service rapide, personnalisé et efficace, tout en réduisant la charge de travail des équipes support. Grâce à l’IA, les interactions avec les clients sont gérées intelligemment, ce qui améliore l’expérience client, augmente la satisfaction et fidélise la clientèle sur le long terme.
  `,

  points: [
    { title: "Chatbots intelligents", description: "Réponses automatiques et personnalisées aux demandes fréquentes 24/7, avec redirection vers un agent humain si nécessaire." },
    { title: "Support client automatisé", description: "Gestion automatique des tickets, priorisation des urgences et notifications aux équipes concernées." },
    { title: "Feedback client automatisé", description: "Collecte et analyse des retours clients via enquêtes ou questionnaires pour améliorer les services." },
    { title: "Segmentation des clients", description: "Analyse des comportements et profils pour adapter les offres et communications." },
    { title: "Communication ciblée", description: "Envoi automatisé d’offres, promotions et informations pertinentes selon le segment client." },
    { title: "Suivi des interactions", description: "Historique complet des interactions client pour une meilleure personnalisation et anticipation des besoins." },
    { title: "Gestion des réclamations", description: "Traitement automatique des réclamations avec alertes pour les problèmes critiques et suivi complet." },
    { title: "Satisfaction et fidélisation", description: "Programmes automatisés de fidélité et suivi de la satisfaction pour renforcer la relation client." },
    { title: "Analyse prédictive des comportements", description: "Anticipation des besoins, préférences et réactions clients pour ajuster les offres." },
    { title: "Notifications intelligentes", description: "Envoi automatique d’informations pertinentes sur l’état des commandes ou services." },
    { title: "Intégration multi-canal", description: "Gestion unifiée des interactions sur email, chat, réseaux sociaux et téléphone." },
    { title: "Rapports et KPI automatisés", description: "Suivi des performances du support client avec indicateurs clés pour l’amélioration continue." },
    { title: "Personnalisation des parcours clients", description: "Recommandations et offres adaptées au parcours et aux besoins individuels." },
    { title: "Réduction des temps de réponse", description: "Les processus automatisés permettent de résoudre rapidement les demandes, améliorant la satisfaction globale." },
    { title: "Optimisation continue du service client", description: "Analyse continue des interactions pour améliorer les scripts, réponses et processus de gestion client." }
  ],

  conclusion: `
L’automatisation de la relation client améliore l’expérience globale, réduit les temps de réponse et fidélise les clients. Elle permet aux entreprises de maintenir un service de qualité, anticiper les besoins et optimiser les interactions. Pour toute entreprise moderne, l’automatisation de la relation client est un levier stratégique essentiel pour la satisfaction et la rétention.
  `
  },
  {
  slug: "automatisation-logistique-operationnelle",
  title: "Automatisation Logistique et Opérationnelle",
  tagline: "Optimisez vos flux et opérations grâce à l’IA.",
  icon: Truck,
  color: "from-orange-500 to-yellow-500",

  introduction: `
L’automatisation logistique et opérationnelle permet aux entreprises de gérer leurs flux, ressources et processus avec une efficacité maximale. Grâce à l’IA, les opérations sont planifiées, surveillées et optimisées en temps réel, réduisant les coûts, minimisant les erreurs et accélérant la chaîne de valeur. Elle offre une visibilité complète sur toutes les opérations, assurant une performance optimale et un contrôle total des activités.
  `,

  points: [
    { title: "Gestion des stocks automatisée", description: "Suivi en temps réel, réapprovisionnement intelligent et alertes automatiques pour éviter ruptures et excédents." },
    { title: "Planification des livraisons optimisée", description: "Algorithmes intelligents pour organiser les itinéraires, réduire les temps de trajet et optimiser les coûts." },
    { title: "Suivi en temps réel des opérations", description: "Monitoring continu avec alertes sur retards ou anomalies, permettant des interventions immédiates." },
    { title: "Analyse opérationnelle prédictive", description: "L’IA identifie les inefficacités et propose des améliorations pour maximiser la productivité." },
    { title: "Optimisation des flux logistiques", description: "Coordination automatique entre fournisseurs, entrepôts et équipes internes pour une chaîne logistique fluide." },
    { title: "Gestion des transporteurs et partenaires", description: "Automatisation de la communication et du suivi des partenaires logistiques pour garantir ponctualité et qualité." },
    { title: "Prévisions de demande", description: "Analyse prédictive pour anticiper les besoins en stocks et ajuster la production ou les commandes." },
    { title: "Gestion des retours", description: "Processus de retour et échange automatisé pour améliorer la satisfaction client et réduire les coûts." },
    { title: "Contrôle qualité automatisé", description: "Détection et suivi des produits défectueux ou non conformes avec alertes et reporting instantané." },
    { title: "Rapports et KPI logistiques", description: "Tableaux de bord interactifs pour suivre les indicateurs clés et améliorer les performances." },
    { title: "Optimisation des coûts", description: "Analyse des coûts logistiques et recommandations pour réduire dépenses et améliorer marge." },
    { title: "Automatisation des documents logistiques", description: "Bons de livraison, factures et documents douaniers générés et suivis automatiquement." },
    { title: "Gestion des entrepôts intelligente", description: "IA pour organiser l’espace, gérer les stocks et optimiser les mouvements internes." },
    { title: "Communication interne automatisée", description: "Notifications et alertes automatiques pour les équipes concernées à chaque étape du processus." },
    { title: "Amélioration continue", description: "Analyse continue des performances logistiques et recommandations pour perfectionner les flux et processus." }
  ],

  conclusion: `
L’automatisation logistique et opérationnelle optimise la performance, réduit les coûts et améliore la fiabilité des opérations. Elle permet aux entreprises de fonctionner de manière plus agile et proactive, tout en offrant une qualité de service maximale. Pour toute entreprise ambitieuse, c’est un levier stratégique incontournable pour l’efficacité et la compétitivité.
  `
  },
  {
  slug: "automatisation-juridique-conformite",
  title: "Automatisation Juridique et Conformité",
  tagline: "Sécurisez vos obligations légales grâce à l’IA.",
  icon: Scale,
  color: "from-indigo-600 to-purple-600",

  introduction: `
L’automatisation juridique et conformité permet aux entreprises de gérer leurs obligations légales et réglementaires de manière précise, rapide et sécurisée. Grâce à l’IA, les documents, contrats et processus de conformité sont analysés et suivis automatiquement, réduisant les risques d’erreurs, les pénalités et le temps consacré aux tâches administratives. C’est une solution stratégique qui assure sécurité juridique et tranquillité d’esprit.
  `,

  points: [
    { title: "Analyse des documents légaux", description: "L’IA scanne contrats, accords et documents légaux pour identifier clauses critiques et risques potentiels." },
    { title: "Suivi réglementaire automatisé", description: "Les obligations légales et échéances sont surveillées en continu avec alertes intelligentes." },
    { title: "Gestion des contrats centralisée", description: "Création, signature, archivage et suivi automatisés pour éviter les oublis et erreurs." },
    { title: "Audit automatisé", description: "Rapports détaillés sur la conformité, permettant un suivi constant et prêt pour les inspections." },
    { title: "Sécurité des données juridiques", description: "Protection des informations sensibles et respect des réglementations en matière de données." },
    { title: "Contrôle des obligations légales", description: "Vérification automatique que l’entreprise respecte toutes les normes et obligations en vigueur." },
    { title: "Alertes sur changements réglementaires", description: "Mise à jour en temps réel sur les nouvelles lois ou régulations affectant l’entreprise." },
    { title: "Prévention des litiges", description: "Détection proactive des risques contractuels et conformité pour réduire les litiges." },
    { title: "Automatisation des signatures électroniques", description: "Simplification et sécurisation des signatures avec suivi automatisé." },
    { title: "Gestion des renouvellements", description: "Alertes pour renouvellements de contrats, licences ou assurances afin d’éviter les interruptions." },
    { title: "Reporting stratégique", description: "Tableaux de bord interactifs pour évaluer la conformité globale et la performance juridique." },
    { title: "Centralisation des documents", description: "Accès rapide et sécurisé à tous les documents légaux pour faciliter le travail des équipes juridiques." },
    { title: "Optimisation des processus juridiques", description: "Rationalisation des flux et procédures pour améliorer l’efficacité et réduire le temps de traitement." },
    { title: "Analyse prédictive des risques", description: "IA anticipant les risques potentiels et recommandant des actions préventives." },
    { title: "Amélioration continue de la conformité", description: "Suivi et adaptation permanente des processus pour garantir la conformité et minimiser les risques." }
  ],

  conclusion: `
L’automatisation juridique et conformité réduit les risques, sécurise les opérations et optimise la gestion des obligations légales. Elle permet aux entreprises de rester concentrées sur leur croissance, tout en garantissant la conformité et la sécurité juridique. Pour toute entreprise soucieuse de maîtriser ses risques, c’est un levier stratégique incontournable.
  `
  },
  {
  slug: "automatisation-production-industrie",
  title: "Automatisation Production / Industrie",
  tagline: "Optimisez vos performances industrielles grâce à l’IA.",
  icon: Factory,
  color: "from-orange-600 to-red-600",

  introduction: `
L’automatisation de la production et des opérations industrielles permet aux entreprises de maximiser l’efficacité, réduire les coûts et améliorer la qualité des produits. Grâce à l’IA, les processus industriels sont surveillés et optimisés en temps réel, permettant une production plus fluide, prévisible et rentable. Cette approche transforme les opérations industrielles en un système intelligent, agile et performant, garantissant des résultats fiables et mesurables.
  `,

  points: [
    {
      title: "Maintenance prédictive",
      description: "L’IA analyse les données des machines pour anticiper les pannes et planifier les interventions avant qu’un problème ne survienne."
    },
    {
      title: "Optimisation des processus de production",
      description: "Identification des inefficacités et ajustement automatique des paramètres pour améliorer rendement et qualité."
    },
    {
      title: "Surveillance en temps réel",
      description: "Contrôle continu des équipements et lignes de production avec alertes automatiques en cas d’anomalie."
    },
    {
      title: "Analyse et reporting industriel",
      description: "Rapports détaillés sur performances, consommation énergétique, rendements et flux de production."
    },
    {
      title: "Réduction des coûts",
      description: "Optimisation des ressources, réduction des déchets et amélioration de la rentabilité globale."
    },
    {
      title: "Planification de la production",
      description: "L’IA ajuste la production selon la demande, les stocks et les ressources disponibles pour maximiser l’efficacité."
    },
    {
      title: "Automatisation de la logistique interne",
      description: "Coordination automatique des flux de matériaux et composants entre les ateliers et lignes de production."
    },
    {
      title: "Contrôle qualité intelligent",
      description: "Détection automatique des défauts ou non-conformités pour réduire les erreurs et pertes."
    },
    {
      title: "Analyse prédictive des performances",
      description: "Identification des tendances et ajustement des processus pour éviter les interruptions ou inefficacités."
    },
    {
      title: "Optimisation énergétique",
      description: "Suivi de la consommation d’énergie et recommandations pour réduire les coûts et l’impact environnemental."
    },
    {
      title: "Gestion des stocks de production",
      description: "IA pour gérer les matières premières, composants et produits finis afin d’éviter ruptures ou surplus."
    },
    {
      title: "Sécurité des opérations",
      description: "Surveillance automatisée des risques industriels pour protéger le personnel et les équipements."
    },
    {
      title: "Amélioration continue",
      description: "Analyse permanente des performances pour proposer des améliorations et maintenir l’excellence opérationnelle."
    },
    {
      title: "Simulation et tests virtuels",
      description: "Modélisation des processus pour tester de nouvelles méthodes ou machines avant mise en production."
    },
    {
      title: "Décisions stratégiques guidées par l’IA",
      description: "Les insights générés permettent aux managers d’optimiser la production, planifier l’innovation et anticiper la demande."
    }
  ],
  conclusion: `
L’automatisation de la production et de l’industrie améliore la performance opérationnelle, réduit les coûts et garantit une production de qualité supérieure. Elle offre une vision claire et un contrôle total des processus industriels. Pour toute entreprise industrielle moderne, l’automatisation est un levier stratégique essentiel pour rester compétitive, innovante et rentable.
  `
  },

  {
    slug: "formation-conseil-ia-360",
  title: "Formation & Conseil IA 360°",
  tagline: "Accompagnez votre transformation IA de A à Z.",
  icon: GraduationCap,
  color: "from-blue-600 to-cyan-600",

  introduction: `
La formation et le conseil IA 360° sont essentiels pour permettre aux entreprises de réussir leur transformation digitale et d’adopter l’intelligence artificielle de manière optimale. Ce service stratégique aide les équipes à comprendre, maîtriser et exploiter les technologies IA pour améliorer les processus, la productivité et la prise de décision. Il assure une adoption complète et efficace de l’IA dans tous les domaines de l’entreprise.
  `,

  points: [
    {
      title: "Audit IA 360°",
      description: "Analyse complète des processus, systèmes et besoins pour identifier les opportunités d’automatisation et d’optimisation."
    },
    {
      title: "Cartographie des processus",
      description: "Visualisation détaillée des flux opérationnels pour déterminer les points où l’IA peut créer de la valeur."
    },
    {
      title: "Évaluation des besoins",
      description: "Identification des technologies et outils IA les mieux adaptés à l’entreprise et à ses objectifs stratégiques."
    },
    {
      title: "Formation des équipes",
      description: "Programmes personnalisés pour sensibiliser et former le personnel aux outils, usages et bonnes pratiques de l’IA."
    },
    {
      title: "Montée en compétences",
      description: "Développement des compétences techniques et décisionnelles nécessaires pour exploiter pleinement l’intelligence artificielle."
    },
    {
      title: "Déploiement sur mesure",
      description: "Solutions IA adaptées à chaque département : marketing, commerce, production, logistique, RH et finance."
    },
    {
      title: "Intégration avec les systèmes existants",
      description: "Mise en place fluide de l’IA sans perturber les processus métiers et infrastructures déjà en place."
    },
    {
      title: "Accompagnement stratégique",
      description: "Suivi régulier et ajustements continus pour maximiser la valeur et le retour sur investissement IA."
    },
    {
      title: "Optimisation continue",
      description: "Évaluation permanente des performances et recommandations pour améliorer les solutions IA en temps réel."
    },
    {
      title: "Gestion du changement",
      description: "Préparation et accompagnement humain des équipes pour garantir une adoption réussie et durable de l’IA."
    },
    {
      title: "Création de tableaux de bord IA",
      description: "Visualisation claire et intelligente des indicateurs clés pour faciliter la prise de décision stratégique."
    },
    {
      title: "Analyse prédictive et recommandations",
      description: "Génération d’insights avancés et de prévisions pour orienter les choix stratégiques de l’entreprise."
    },
    {
      title: "Assistance et support continu",
      description: "Support post-déploiement pour assurer la stabilité, l’évolution et la performance des solutions IA."
    },
    {
      title: "Évaluation de l’impact",
      description: "Mesure précise de l’efficacité des solutions IA sur la productivité, la performance et la rentabilité."
    },
    {
      title: "Innovation et compétitivité",
      description: "Identification d’opportunités d’innovation grâce à l’IA pour maintenir un avantage concurrentiel durable."
    }
  ],

  conclusion: `
La formation et le conseil IA 360° permettent à l’entreprise de tirer pleinement parti des opportunités offertes par l’intelligence artificielle. Ils garantissent une adoption efficace, une montée en compétences des équipes et une optimisation durable des processus. Pour toute entreprise souhaitant rester compétitive, innovante et performante, ce service constitue un levier stratégique incontournable.
  `
  }

];


const IAlinkDetail = () => {
  // Le paramètre doit correspondre à celui défini dans la route React Router.
  const { serviceTitle } = useParams<{ serviceTitle: string }>();
  const pack = servicesData.find((service) => service.slug === serviceTitle);

  // En cas de slug invalide, retour à la page mère Link IA Business.
  if (!pack) {
    return <Navigate to="/ialinkbusiness" replace />;
  }

  const PackIcon = pack.icon;
  const orangeServices = [
    "automatisation-commerciale",
    "automatisation-administrative",
    "automatisation-logistique-operationnelle",
    "automatisation-production-industrie",
  ];
  const accent = orangeServices.includes(pack.slug)
    ? {
        gradient: "from-[#F59C27] to-[#f7bd67]",
        solid: "#F59C27",
      }
    : {
        gradient: "from-[#1178B7] to-[#009CDE]",
        solid: "#1178B7",
      };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />

      <main className="pb-0">
        {/* HERO — IDENTITÉ VISUELLE SUNULINK */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0b3157] via-[#1178B7] to-[#0b5789] text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full border-[48px] border-white/5"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-[35%] h-80 w-80 rounded-full bg-[#F59C27]/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#1178B7] via-[#009CDE] to-[#F59C27]"
          />

          <div className="container relative z-10 mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-12 lg:pb-24">
            <Link
              to="/ialinkbusiness"
              className="group mb-10 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-bold text-white/95 backdrop-blur-sm transition-all duration-300 hover:-translate-x-0.5 hover:border-[#F59C27] hover:bg-white/15 hover:text-white focus:outline-none focus:ring-4 focus:ring-white/20 sm:mb-12 sm:text-base"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Retour aux expertises IA
            </Link>

            <div className="grid items-center gap-8 md:grid-cols-[auto_minmax(0,1fr)] md:gap-10 lg:gap-14">
              <div className="flex justify-center md:justify-start">
                <div className={`relative flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br ${accent.gradient} shadow-2xl ring-1 ring-white/25 sm:h-28 sm:w-28 lg:h-36 lg:w-36`}>
                  <div
                    aria-hidden="true"
                    className="absolute inset-1 rounded-[1.25rem] border border-white/25"
                  />
                  <PackIcon className="relative h-11 w-11 text-white sm:h-14 sm:w-14 lg:h-16 lg:w-16" />
                </div>
              </div>

              <div className="max-w-4xl text-center md:text-left">
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm sm:text-sm">
                  <span className="h-2 w-2 rounded-full bg-[#F59C27]" />
                  Link IA Business · Expertise
                </p>
                <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  {pack.title}
                </h1>
                <p className="max-w-3xl text-lg font-semibold leading-relaxed text-white/90 sm:text-xl md:text-2xl">
                  {pack.tagline}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRÉSENTATION */}
        <section className="px-4 py-12 sm:px-6 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl">
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(260px,0.7fr)] lg:gap-12">
              <div className="max-w-3xl">
                <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-[#F59C27]">
                  Présentation
                </p>
                <h2 className="mb-5 text-2xl font-black leading-tight text-[#1178B7] sm:text-3xl md:text-4xl">
                  Une expertise pensée pour vos objectifs.
                </h2>
                <p className="whitespace-pre-line text-base leading-8 text-slate-600 sm:text-lg">
                  {pack.introduction.trim()}
                </p>
              </div>

              <aside className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm sm:rounded-3xl sm:p-8">
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-1.5 w-24 rounded-bl-full bg-[#F59C27] sm:w-32"
                />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1178B7]/10 text-[#1178B7]">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-black text-[#1178B7]">
                  Une approche orientée résultats
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  Découvrez les leviers de cette expertise et identifiez les pistes d’amélioration adaptées à votre organisation.
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex min-h-11 items-center gap-2 font-extrabold text-[#1178B7] transition-colors hover:text-[#F59C27] focus:outline-none focus:ring-2 focus:ring-[#1178B7]/30"
                >
                  Échanger sur mon projet
                  <span aria-hidden="true">→</span>
                </Link>
              </aside>
            </div>
          </div>
        </section>

        {/* DÉTAIL DES PRESTATIONS */}
        <section className="bg-slate-50 px-4 py-12 sm:px-6 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl">
            <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-12" data-aos="fade-up">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-[#F59C27]">
                Nos domaines d’intervention
              </p>
              <h2 className="text-2xl font-black leading-tight text-[#1178B7] sm:text-3xl md:text-4xl">
                Ce que cette expertise vous permet de faire
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Des leviers concrets pour structurer vos actions, simplifier vos opérations et mieux piloter votre activité.
              </p>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {pack.points.map((point, index) => (
                <article
                  key={`${point.title}-${index}`}
                  className="group flex h-full gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1178B7]/25 hover:shadow-[0_16px_36px_rgba(17,120,183,0.10)] sm:p-6 md:rounded-3xl motion-reduce:transform-none"
                  data-aos="fade-up"
                  data-aos-delay={(index % 3) * 60}
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${accent.gradient} shadow-sm transition-transform duration-300 group-hover:scale-105`}>
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="mb-2 text-base font-extrabold leading-snug text-[#1178B7] sm:text-lg">
                      {point.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                      {point.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONCLUSION ET APPEL À L'ACTION */}
        <section className="px-4 py-12 sm:px-6 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl">
            <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b3157] via-[#1178B7] to-[#0b5789] p-6 text-white shadow-xl sm:p-9 md:p-12 lg:p-14">
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-16 -z-10 h-64 w-64 rounded-full border-[32px] border-white/5"
              />
              <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12">
                <div className="max-w-3xl">
                  <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-[#F59C27]">
                    Passons à l’action
                  </p>
                  <h2 className="mb-5 text-2xl font-black leading-tight sm:text-3xl md:text-4xl">
                    Faisons avancer votre projet avec l’IA.
                  </h2>
                  <p className="whitespace-pre-line text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                    {pack.conclusion.trim()}
                  </p>
                </div>

                <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col">
                  <Link
                    to="/contact"
                    className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-[#F59C27] bg-[#F59C27] px-6 py-3 text-center text-sm font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#1178B7] focus:outline-none focus:ring-4 focus:ring-[#F59C27]/30 sm:text-base lg:min-w-56"
                  >
                    Parler de mon projet
                    <ArrowLeft className="h-4 w-4 rotate-180 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="/ialinkbusiness"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-3 text-center text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white/15 focus:outline-none focus:ring-4 focus:ring-white/20 sm:text-base lg:min-w-56"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Toutes les expertises IA
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IAlinkDetail;
