import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Briefcase, Image, Globe, Brain, CheckCircle, Palette, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PackpubIA from "./PackpubIA";

const IAlinkbusiness = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Automatisation Marketing",
      slug: "automatisation-marketing",
      description: "Bâtissez une stratégie solide et alignée sur vos objectifs pour garantir votre réussite.",
      offerings: [
        "CRM automatisé : Gestion intelligente des prospects et clients.",
        "Email & campagnes marketing : Envoi automatique et ciblage précis.",
        "Analyse de performance : Tableaux de bord interactifs et prédictifs",
        "Social Media Automation : Planification et publication automatique sur les réseaux sociaux",
        "Segmentation et scoring IA : Identification des prospects à forte valeur et priorisation des actions.",
      ]
    },
    {
      icon: Palette,
      title: "Automatisation Commerciale",
      slug: "automatisation-commerciale",
      description: "Créez une identité de marque forte, mémorable et cohérente qui vous distingue.",
      offerings: [
        "Prospection IA : Identification automatique des clients potentiels et scoring prédictif.",
        "Suivi des ventes : Alertes et rapports automatisés pour une gestion optimale.",
        "Analyse de marché : Informations prédictives pour orienter les stratégies commerciales.",
        "CRM intégré : Centralisation et suivi des prospects et clients en temps réel.",
        "Optimisation du pipeline : Priorisation intelligente des opportunités de vente.",
      ]
    },
    {
      icon: Image,
      title: " Automatisation Administrative",
      slug: "automatisation-administrative",
      description: "Gestion documentaire automatisée : Classement, archivage et accès rapide ",
      offerings: [
        "Gestion documentaire automatisée : Classement, archivage et accès rapide aux documents.",
        "Facturation et suivi comptable : Processus automatisés et relances intelligentes.",
        "Planification intelligente : Gestion des agendas et rappels automatisés.",
        "Optimisation des flux administratifs : Rationalisation des processus internes.",
        "Suivi et reporting automatisés : Analyse en temps réel pour la performance administrative.",
      ]
    },
    {
      icon: Globe,
      title: "Automatisation des Ressources Humaines (RH)",
      slug: "automatisation-rh",
      description: "Dominez le web avec une présence digitale performante et professionnelle.",
      offerings: [
        "Recrutement intelligent : Tri et présélection des candidats par IA.",
        "Gestion des employés : Suivi des plannings, absences et performances en temps réel.",
        "Onboarding digital : Intégration automatisée des nouveaux collaborateurs.",
        "Optimisation des processus RH : Détection des inefficacités et recommandations intelligentes.",
        "Analyse de l’engagement : Mesure automatisée de la satisfaction et motivation des employés.",
      ]
    },
    {
      icon: Globe,
      title: " Business Intelligence & Analyse de données",
      slug: "business-intelligence",
      description: "Dominez le web avec une présence digitale performante et professionnelle.",
      offerings: [
        "Reporting automatisé : Rapports clairs et interactifs sur les performances.",
        "Analyse prédictive : Anticipation des tendances et comportements clients.",
        "Visualisation des KPI : Tableaux de bord complets pour toutes les fonctions de l’entreprise.",
        "Optimisation stratégique : Décisions guidées par des insights précis.",
        "Intégration multi-sources : Centralisation des données internes et externes pour une analyse complète.",
      ]
    },
    {
      icon: Globe,
      title: " Automatisation de la Relation Client",
      slug: "automatisation-relation-client",
      description: "Dominez le web avec une présence digitale performante et professionnelle.",
      offerings: [
        "Chatbots intentions : Réponses instantanées et personnalisées 24/7.",
        "Support client automatisé : Gestion des tickets, requêtes et suivis.",
        "Feedback et enquêtes automatisés : Analyse des retours clients pour améliorer l’expérience.",
        "Segmentation et communication ciblée : Offres personnalisées selon le profil client.",
        "Optimisation des interactions : Suivi et amélioration continue du parcours client.",
      ]
    },
    {
      icon: Globe,
      title: "Automatisation Logistique et Opérationnelle",
      slug: "automatisation-logistique-operationnelle",
      description: "Dominez le web avec une présence digitale performante et professionnelle.",
      offerings: [
        "Gestion de stocks automatisée : Suivi et réapprovisionnement intelligent en temps réel.",
        "Planification des livraisons : Optimisation des itinéraires et réduction des coûts.",
        "Suivi des opérations en temps réel : Alertes et reporting automatisés.",
        "Analyse opérationnelle prédictive : Anticipation des problèmes et optimisation des ressources.",
        "Optimisation des flux logistiques : Meilleure coordination entre les départements et partenaires.",
      ]
    },
    {
      icon: Briefcase,
      title: " Automatisation Juridique et Conformité",
      slug: "automatisation-juridique-conformite",
      description: "Bâtissez une stratégie solide et alignée sur vos objectifs pour garantir votre réussite.",
      offerings: [
        "Analyse des documents légaux : Détection automatique des clauses critiques et risques.",
        "Suivi réglementaire automatisé : Alertes sur échéances et obligations légales.",
        "Gestion des contrats : Création, signature et suivi centralisés et automatisés.",
        "Audit et reporting automatisés : Rapports détaillés sur la conformité et la performance juridique.",
        "Sécurité et réduction des risques : Minimisation des erreurs et des pénalités.",
      ]
    },
    {
      icon: Palette,
      title: " Automatisation Production / Industrie",
      slug: "automatisation-production-industrie",
      description: "Créez une identité de marque forte, mémorable et cohérente qui vous distingue.",
      offerings: [
        "Maintenance prédictive : Anticipation des pannes pour éviter les arrêts coûteux.",
        "Optimisation des processus de production : Amélioration continue de l’efficacité et de la qualité.",
        "Surveillance en temps réel : Contrôle permanent des machines et lignes de production.",
        "Analyse et reporting industriel : Rapports détaillés sur performances, consommation et rendements.",
        "Réduction des coûts et déchets : Processus mais efficaces et économiques.",
      ]
    },
    {
      icon: Image,
      title: "Formation & Conseil IA 360°",
      slug: "formation-conseil-ia-360",
      description: "Gestion documentaire automatisée : Classement, archivage et accès rapide ",
      offerings: [
        "Audit IA 360° : Analyse complète des processus et identification des opportunités d’optimisation.",
        "Formation des équipes : Sensibilisation, montée en compétences et maîtrise des outils IA.",
        "Déploiement sur mesure : Solutions IA adaptées aux besoins spécifiques de l’entreprise.",
        "Accompagnement stratégique : Suivi et optimisation continue des solutions IA.",
        "Adoption complète de l’IA : Intégration fluide dans tous les départements et processus.",
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-0">
        {/* HERO SECTION — VISUEL LINK IA BUSINESS */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-[#F59C27]/10">
          <div className="container mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16 md:pt-12 lg:pb-20">
            <div className="grid grid-cols-1 items-center gap-9 md:grid-cols-2 md:gap-10 lg:gap-14">
              {/* Texte du héros */}
              <div className="relative z-10 order-2 md:order-1" data-aos="fade-up">
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1178B7]/15 bg-[#1178B7]/5 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#1178B7] sm:text-sm">
                  <span className="h-2 w-2 rounded-full bg-[#F59C27]" />
                  Intelligence artificielle & automatisation
                </span>

                <h1 className="mb-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-[#1178B7]">Link IA</span>
                  <span className="block text-[#F59C27]">Business</span>
                </h1>

                <p className="mb-8 max-w-2xl text-base font-medium leading-relaxed text-slate-700 sm:text-lg lg:text-xl">
                  Propulsez votre entreprise dans une nouvelle ère. Automatisez vos processus,
                  optimisez vos performances et libérez le plein potentiel de vos équipes grâce à l'Intelligence Artificielle.
                </p>

                <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                  <Button
                    asChild
                    className="h-auto min-h-12 w-full rounded-full border-2 border-[#F59C27] bg-[#F59C27] px-6 py-3 text-base font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#1178B7] hover:bg-[#1178B7] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F59C27]/40 sm:w-auto sm:px-7 sm:text-lg"
                  >
                    <Link to="/contact">
                      Démarrer mon projet IA
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    className="h-auto min-h-12 w-full rounded-full border-2 border-[#1178B7] bg-white px-6 py-3 text-base font-extrabold text-[#1178B7] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F59C27] hover:bg-[#F59C27] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F59C27]/40 sm:w-auto sm:px-7 sm:text-lg"
                  >
                    <Link to="/services">
                      Découvrez nos solutions IA 360°
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-slate-600">
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#F59C27]" />
                    Processus optimisés
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#F59C27]" />
                    Décisions éclairées
                  </span>
                </div>
              </div>

              {/* Visuel du héros : image locale très visible */}
              <div className="relative order-1 md:order-2" data-aos="fade-left">
                <div className="absolute -inset-2 rounded-[2rem] bg-[#F59C27]/20 blur-xl" aria-hidden="true" />
                <div className="relative aspect-[4/3] min-h-[270px] overflow-hidden rounded-[1.75rem] border border-[#1178B7]/10 bg-white shadow-2xl sm:min-h-[360px] md:min-h-0 lg:rounded-[2rem]">
                  <img
                    src="/img/hero-link-ia-business.png"
                    alt="Illustration de Link IA Business et des solutions d'intelligence artificielle pour les entreprises"
                    loading="eager"
                    fetchPriority="high"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    onError={(event) => {
                      console.error("Impossible de charger l'image /img/hero-link-ia-business.png");
                      event.currentTarget.style.visibility = "hidden";
                    }}
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#1178B7] to-[#F59C27]" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION ESSENTIELLE */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-b from-sunuGray/20 to-white">
          <div className="container mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-2xl bg-[#1178B7] p-6 text-white shadow-xl md:rounded-3xl md:p-12" data-aos="fade-up">
              <div className="absolute right-0 top-0 h-2 w-28 bg-[#F59C27] sm:w-40" aria-hidden="true" />
              <h3 className="mb-6 text-center text-2xl font-black md:text-3xl">Pourquoi l’IA est <span className="text-[#F59C27]">essentielle</span></h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:grid-cols-2 lg:gap-12 items-center">
                <p className="text-lg md:text-xl mb-4 lg:mb-6 opacity-95 leading-relaxed text-center lg:text-left">
                  L’Intelligence Artificielle n’est plus une option : c’est un levier stratégique pour toutes les entreprises.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 space-y-4 w-full">
                  <div className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#F59C27] flex-shrink-0 mt-0.5" /><p className="text-base md:text-lg">Réduire les tâches répétitives</p></div>
                  <div className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#F59C27] flex-shrink-0 mt-0.5" /><p className="text-base md:text-lg">Optimiser vos processus internes</p></div>
                  <div className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#F59C27] flex-shrink-0 mt-0.5" /><p className="text-base md:text-lg">Améliorer la productivité</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PACKS */}
        <PackpubIA />

        {/* AVANTAGES CLÉS */}
        <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-7xl text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-10 md:mb-16 text-[#1178B7]" data-aos="fade-up">
              Avantages clés <span className="text-[#F59C27]">pour votre entreprise ?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="group text-center p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-slate-200 border-t-4 border-t-[#1178B7] hover:border-t-[#F59C27] shadow-sm hover:shadow-lg transition-all duration-300 w-full" data-aos="fade-up">
                <div className="bg-[#1178B7] w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"><TrendingUp className="w-7 h-7 md:w-8 md:h-8 text-white" /></div>
                <h3 className="text-xl md:text-2xl font-black mb-4 text-[#1178B7]">Gain de temps</h3>
                <p className="text-gray-600 text-sm md:text-base">Réduisez les heures sur les tâches répétitives.</p>
              </div>
              <div className="group text-center p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-slate-200 border-t-4 border-t-[#1178B7] hover:border-t-[#F59C27] shadow-sm hover:shadow-lg transition-all duration-300 w-full" data-aos="fade-up" data-aos-delay="100">
                <div className="bg-[#F59C27] w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"><CheckCircle className="w-7 h-7 md:w-8 md:h-8 text-white" /></div>
                <h3 className="text-xl md:text-2xl font-black mb-4 text-[#1178B7]">Efficacité</h3>
                <p className="text-gray-600 text-sm md:text-base">Minimisez les erreurs et maximisez la productivité.</p>
              </div>
              <div className="group text-center p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-slate-200 border-t-4 border-t-[#1178B7] hover:border-t-[#F59C27] shadow-sm hover:shadow-lg transition-all duration-300 w-full" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-[#1178B7] w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"><Brain className="w-7 h-7 md:w-8 md:h-8 text-white" /></div>
                <h3 className="text-xl md:text-2xl font-black mb-4 text-[#1178B7]">Décisions</h3>
                <p className="text-gray-600 text-sm md:text-base">Analyse prédictive et insights précis.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES GRID : 1 MOBILE, 2 TABLETTE, 3 GRAND ÉCRAN */}
        <section className="bg-slate-50 px-4 py-12 sm:px-6 md:py-20">
          <div className="container mx-auto max-w-7xl">
            <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14" data-aos="fade-up">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-[#F59C27]">
                Link IA Business
              </p>
              <h2 className="text-3xl font-black leading-tight text-[#1178B7] sm:text-4xl md:text-5xl">
                Dix expertises pour <span className="text-[#F59C27]">automatiser votre activité.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Explorez nos domaines d’intervention et découvrez comment l’IA peut soutenir vos opérations, vos équipes et vos décisions.
              </p>
            </div>

            <div className="grid w-full grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const isOrangeHeader = index % 2 === 1;

                return (
                  <article
                    key={service.slug}
                    className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 border-t-4 border-t-[#1178B7] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-t-[#F59C27] hover:shadow-[0_18px_40px_rgba(17,120,183,0.13)] motion-reduce:transform-none md:rounded-3xl"
                    data-aos="fade-up"
                    data-aos-delay={(index % 3) * 70}
                  >
                    <div className={`relative overflow-hidden p-5 text-white sm:p-6 ${isOrangeHeader ? "bg-[#F59C27]" : "bg-[#1178B7]"}`}>
                      <div className="absolute -right-9 -top-10 h-32 w-32 rounded-full border-[16px] border-white/10 transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
                      <div className="relative z-10">
                        {IconComponent && (
                          <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/15 text-white sm:h-14 sm:w-14">
                            <IconComponent className="h-6 w-6 sm:h-7 sm:w-7" />
                          </span>
                        )}
                        <h3 className="mb-3 text-xl font-black leading-snug text-white sm:text-2xl">
                          {service.title.trim()}
                        </h3>
                        <p className="text-sm font-medium leading-relaxed text-white/95 sm:text-base">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <ul className="flex-1 space-y-3">
                        {service.offerings.map((offering, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#F59C27]" />
                            <span className="text-sm leading-relaxed text-slate-700 sm:text-base">
                              {offering}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to={`/ialinkbusiness/${service.slug}`}
                        className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border-2 border-[#F59C27] bg-[#F59C27] px-4 py-3 text-center text-sm font-extrabold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1178B7] hover:bg-[#1178B7] focus:outline-none focus:ring-4 focus:ring-[#F59C27]/30 sm:text-base motion-reduce:transform-none"
                      >
                        En savoir plus
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IAlinkbusiness;
