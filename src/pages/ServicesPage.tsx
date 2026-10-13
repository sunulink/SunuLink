import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Briefcase,
  Palette,
  Image as ImageIcon,
  Globe,
  TrendingUp,
  Calendar,
  Brain,
  CheckCircle,
  Film,
  ArrowRight,
  Sparkles,
  Users,
  Target,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const SUNU_BLUE = "#1178B7";
const SUNU_ORANGE = "#F59C27";

const services = [
  {
    icon: Briefcase,
    title: "Stratégie & Consulting",
    description:
      "Clarifiez votre positionnement, vos priorités et votre plan d’action pour faire avancer votre activité avec méthode.",
    offerings: [
      "Audit & diagnostic",
      "Positionnement stratégique",
      "Plan marketing et communication",
      "Études de marché",
      "Accompagnement des dirigeants",
    ],
    action: "Parler de mon projet",
    link: "/contact",
  },
  {
    icon: Palette,
    title: "Branding & Identité Visuelle",
    description:
      "Construisez une marque reconnaissable, cohérente et mémorable, de votre logo à votre univers visuel.",
    offerings: [
      "Création de logo",
      "Charte graphique",
      "Identité de marque",
      "Rebranding",
      "Direction artistique",
    ],
    action: "Créer mon identité",
    link: "/contact",
  },
  {
    icon: ImageIcon,
    title: "Communication Visuelle & Contenus",
    description:
      "Des supports créatifs qui transmettent votre message clairement et donnent envie de découvrir votre marque.",
    offerings: [
      "Visuels et affiches",
      "Contenus pour les réseaux sociaux",
      "Copywriting",
      "Campagnes visuelles",
      "Motion design",
    ],
    action: "Créer mes contenus",
    link: "/contact",
  },
  {
    icon: Globe,
    title: "Digital, Web & SEO",
    description:
      "Développez une présence en ligne professionnelle, facile à trouver, à comprendre et à utiliser.",
    offerings: [
      "Création et refonte de sites web",
      "UX/UI design",
      "Référencement naturel (SEO)",
      "Audit digital",
      "Visibilité Google",
    ],
    action: "Développer ma présence en ligne",
    link: "/contact",
  },
  {
    icon: TrendingUp,
    title: "Développement Commercial",
    description:
      "Structurez votre prospection et votre parcours client pour transformer plus efficacement les opportunités en clients.",
    offerings: [
      "Stratégie commerciale",
      "Prospection B2B/B2C",
      "Tunnel de conversion",
      "Mise en place de CRM",
      "Coaching commercial",
    ],
    action: "Accélérer ma croissance",
    link: "/contact",
  },
  {
    icon: Brain,
    title: "IA & Automatisation",
    description:
      "Réduisez les tâches répétitives et facilitez le travail de vos équipes grâce à des automatisations adaptées.",
    offerings: [
      "Workflows automatisés",
      "Assistants IA",
      "Automatisation e-mail et WhatsApp",
      "Chatbots professionnels",
      "Tableaux de bord intelligents",
    ],
    action: "Explorer les possibilités",
    link: "/contact",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="pt-20">
        {/* HERO : image de fond et dégradé SunuLink */}
        <section className="relative isolate flex min-h-[300px] items-center overflow-hidden bg-[#1178B7] sm:min-h-[320px] lg:min-h-[350px]">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=85"
            alt=""
            aria-hidden="true"
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 z-0 h-full w-full object-cover object-center"
          />

          <div
            className="absolute inset-0 z-10 bg-gradient-to-r from-[#1178B7]/95 via-[#1178B7]/80 to-[#1178B7]/20"
            aria-hidden="true"
          />

          <div className="container relative z-20 mx-auto w-full max-w-7xl px-5 py-7 sm:px-6 md:py-8">
            <div className="max-w-3xl" data-aos="fade-up">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#F59C27] backdrop-blur">
                <Sparkles size={16} />
                Nos expertises
              </div>

              <h1 className="mb-3 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                Une communication à{" "}
                <span className="text-[#F59C27]">360°</span> pour donner de
                l’élan à vos projets.
              </h1>

              <p className="mb-5 max-w-2xl text-sm leading-relaxed text-white/95 sm:text-base md:text-lg">
                De la stratégie à la création, du digital à l’événementiel et
                à la production audiovisuelle : SunuLink vous accompagne avec
                des solutions adaptées à vos objectifs.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#nos-services"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F59C27] px-7 py-3 font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#1178B7] focus:outline-none focus:ring-4 focus:ring-[#F59C27]/40"
                >
                  Explorer nos services
                  <ArrowRight size={18} />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-[#F59C27] bg-[#1178B7] px-7 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F59C27] focus:outline-none focus:ring-4 focus:ring-[#F59C27]/40"
                >
                  <Mail size={18} />
                  Parler à un expert
                </Link>
              </div>

              <div className="mt-5 grid max-w-2xl grid-cols-1 gap-2 text-sm text-white sm:grid-cols-3">
                {[
                  "Une approche sur mesure",
                  "Des expertises complémentaires",
                  "Des objectifs concrets",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle
                      className="shrink-0 text-[#F59C27]"
                      size={18}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION AUX SERVICES */}
        <section
          id="nos-services"
          className="scroll-mt-24 px-5 pb-8 pt-12 sm:px-6 md:pt-16"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-[#F59C27]">
              Nos services
            </p>

            <h2 className="mb-5 text-3xl font-black leading-tight text-[#1178B7] md:text-4xl">
              Les bonnes expertises, réunies autour de votre ambition.
            </h2>

            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              Choisissez le service qui correspond à votre besoin. Chaque
              prestation peut être adaptée à votre contexte, à vos délais et
              à votre budget.
            </p>
          </div>
        </section>

        {/* CARTES DES SERVICES GÉNÉRAUX */}
        <section className="px-5 pb-12 pt-6 sm:px-6 md:pb-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 border-t-4 ${
                    index % 2 === 0
                      ? "border-t-[#1178B7]"
                      : "border-t-[#F59C27]"
                  } bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#F59C27] hover:shadow-[0_18px_40px_rgba(245,156,39,0.18)] focus-within:ring-2 focus-within:ring-[#F59C27]/40`}
                  data-aos="fade-up"
                  data-aos-delay={index * 60}
                >
                  {/* Barre orange animée */}
                  <div
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#F59C27] transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden="true"
                  />

                  <div className="flex flex-1 flex-col p-6 pt-7">
                    <div
                      className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-sm transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-[#F59C27] ${
                        index % 2 === 0
                          ? "bg-[#1178B7]"
                          : "bg-[#F59C27]"
                      }`}
                    >
                      <Icon size={28} strokeWidth={1.8} />
                    </div>

                    <h3 className="mb-3 text-xl font-extrabold leading-snug text-[#1178B7] transition-colors duration-300 group-hover:text-[#F59C27]">
                      {service.title}
                    </h3>

                    <p className="mb-5 leading-relaxed text-slate-600">
                      {service.description}
                    </p>

                    <h4 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-[#1178B7]">
                      Comment nous pouvons vous aider
                    </h4>

                    <ul className="mb-6 space-y-2.5">
                      {service.offerings.map((offering) => (
                        <li
                          key={offering}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700"
                        >
                          <CheckCircle
                            size={17}
                            className="mt-0.5 shrink-0 text-[#F59C27]"
                          />
                          <span>{offering}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-2">
                      <Link
                        to={service.link}
                        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-[#1178B7] bg-[#1178B7] px-4 py-3 text-center font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F59C27] hover:bg-[#F59C27] focus:outline-none focus:ring-4 focus:ring-[#F59C27]/40"
                      >
                        {service.action}
                        <ArrowRight size={17} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* SUNULINK PROD */}
        <section className="px-5 py-6 sm:px-6 md:py-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#1178B7]/20 bg-white shadow-lg transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(17,120,183,0.15)]">
            <div className="grid lg:grid-cols-2">
              {/* Texte de Prod en bleu SunuLink */}
              <div className="flex flex-col justify-center bg-white p-7 text-[#1178B7] sm:p-10 lg:p-12">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F59C27] text-white shadow-sm">
                    <Film size={29} />
                  </span>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F59C27]">
                      Production audiovisuelle
                    </p>
                    <h2 className="text-3xl font-black text-[#1178B7] sm:text-4xl">
                      SunuLink Prod
                    </h2>
                  </div>
                </div>

                <p className="mb-4 text-xl font-bold text-[#1178B7]">
                  Donnez vie à vos idées.
                </p>

                <p className="mb-6 leading-relaxed text-[#1178B7]">
                  Des films de marque aux vidéos événementielles, nous vous
                  aidons à raconter votre histoire avec une production soignée
                  et un message clair.
                </p>

                <div className="mb-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Films institutionnels et publicitaires",
                    "Captation vidéo et prises de vues",
                    "Montage, étalonnage et post-production",
                    "Motion design et contenus vidéo",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-sm text-[#1178B7]"
                    >
                      <CheckCircle
                        size={17}
                        className="mt-0.5 shrink-0 text-[#F59C27]"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/services/audiovisuel"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F59C27] px-6 py-3 font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1178B7] focus:outline-none focus:ring-4 focus:ring-[#F59C27]/40"
                  >
                    Découvrir SunuLink Prod
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#1178B7] bg-[#1178B7] px-6 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#F59C27] hover:bg-[#F59C27] focus:outline-none focus:ring-4 focus:ring-[#F59C27]/40"
                  >
                    Demander une production
                  </Link>
                </div>
              </div>

              {/* Image de production */}
              <div className="relative min-h-[260px] bg-[#1178B7] sm:min-h-[320px]">
                <img
                  src="https://images.unsplash.com/photo-1781127445209-f02336fa36a0?auto=format&fit=crop&fm=jpg&q=80&w=1600"
                  alt="Équipe et équipement de production audiovisuelle en tournage"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#1178B7]/75 via-transparent to-transparent"
                  aria-hidden="true"
                />

                <div className="absolute bottom-6 left-6 rounded-xl border border-white/20 bg-[#1178B7]/90 px-4 py-3 text-white backdrop-blur">
                  <p className="font-bold">De l’idée à l’image finale</p>
                  <p className="text-sm text-white/90">
                    Création · Tournage · Post-production
                  </p>
                </div>

                <div className="absolute right-6 top-6 rounded-full bg-[#F59C27] px-3 py-1 text-xs font-extrabold text-white">
                  SUNULINK PROD
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SUNULINK EVENTS */}
        <section className="px-5 py-6 sm:px-6 md:py-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#F59C27]/30 bg-white shadow-lg transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(245,156,39,0.18)]">
            <div className="grid lg:grid-cols-2">
              {/* Image événementielle */}
              <div className="relative order-2 min-h-[260px] bg-[#1178B7] sm:min-h-[320px] lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=85"
                  alt="Conférence professionnelle dans un espace événementiel"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#1178B7]/15 to-[#1178B7]/60"
                  aria-hidden="true"
                />

                <div className="absolute bottom-6 left-6 rounded-xl border border-white/20 bg-[#1178B7]/90 px-4 py-3 text-white backdrop-blur">
                  <p className="font-bold">Des moments qui rassemblent</p>
                  <p className="text-sm text-white/90">
                    Conception · Coordination · Réalisation
                  </p>
                </div>
              </div>

              {/* Texte événementiel */}
              <div className="order-1 flex flex-col justify-center p-7 sm:p-10 lg:order-2 lg:p-12">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#1178B7] text-white">
                    <Calendar size={28} />
                  </span>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F59C27]">
                      Événementiel & activation
                    </p>
                    <h2 className="text-3xl font-black text-[#1178B7] sm:text-4xl">
                      SunuLink Events
                    </h2>
                  </div>
                </div>

                <p className="mb-4 text-xl font-bold text-[#1178B7]">
                  Des événements qui marquent les esprits.
                </p>

                <p className="mb-6 leading-relaxed text-slate-600">
                  Nous concevons et coordonnons des événements professionnels
                  ou grand public en tenant compte de votre objectif, de
                  votre public et de votre identité de marque.
                </p>

                <div className="mb-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Conférences, forums et séminaires",
                    "Lancements et activations de marque",
                    "Galas, salons et rencontres professionnelles",
                    "Coordination logistique et technique",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <CheckCircle
                        size={17}
                        className="mt-0.5 shrink-0 text-[#F59C27]"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/services/evenementiel"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1178B7] px-6 py-3 font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F59C27] focus:outline-none focus:ring-4 focus:ring-[#F59C27]/40"
                  >
                    Découvrir SunuLink Events
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#F59C27] bg-[#F59C27] px-6 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#1178B7] hover:bg-[#1178B7] focus:outline-none focus:ring-4 focus:ring-[#F59C27]/40"
                  >
                    Organiser mon événement
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NOTRE MÉTHODE */}
        <section className="px-5 py-12 sm:px-6 md:py-16">
          <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-br from-[#1178B7] via-[#1178B7] to-[#F59C27] p-7 text-white shadow-xl sm:p-10 lg:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-white">
                  Notre méthode
                </p>

                <h2 className="mb-5 text-3xl font-black sm:text-4xl">
                  Une stratégie claire. Des actions cohérentes. Des résultats
                  suivis.
                </h2>

                <p className="mb-7 leading-relaxed text-white/95">
                  Nous commençons par comprendre votre situation et vos
                  objectifs, puis nous construisons avec vous une démarche
                  adaptée, de la réflexion à la mise en œuvre.
                </p>

                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F59C27] px-7 py-3 font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1178B7] focus:outline-none focus:ring-4 focus:ring-white/50"
                >
                  Échanger sur mes objectifs
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Target,
                    title: "Comprendre",
                    text: "Analyser votre besoin et définir les priorités.",
                  },
                  {
                    icon: Briefcase,
                    title: "Structurer",
                    text: "Construire un plan d’action réaliste.",
                  },
                  {
                    icon: Users,
                    title: "Collaborer",
                    text: "Avancer avec un accompagnement adapté.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Évaluer",
                    text: "Suivre les indicateurs et ajuster les actions.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/25 bg-white/10 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F59C27] hover:bg-[#1178B7]/70"
                    >
                      <Icon
                        className="mb-3 text-[#F59C27]"
                        size={25}
                      />
                      <h3 className="mb-2 font-extrabold">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-white/95">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* POURQUOI SUNULINK */}
        <section className="bg-slate-50 px-5 py-12 sm:px-6 md:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-[#F59C27]">
                Pourquoi SunuLink ?
              </p>

              <h2 className="text-3xl font-black text-[#1178B7] md:text-4xl">
                Un partenaire à vos côtés, à chaque étape.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: Target,
                  title: "Une approche sur mesure",
                  text: "Des recommandations adaptées à votre réalité, vos publics et vos objectifs.",
                },
                {
                  icon: CheckCircle,
                  title: "Un suivi lisible",
                  text: "Des étapes claires, des échanges réguliers et des priorités partagées.",
                },
                {
                  icon: Sparkles,
                  title: "Une expertise à 360°",
                  text: "Stratégie, création, digital, événementiel et audiovisuel réunis au même endroit.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F59C27] hover:shadow-[0_14px_35px_rgba(245,156,39,0.15)]"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1178B7]/10 text-[#1178B7] transition-all duration-300 group-hover:bg-[#F59C27] group-hover:text-white">
                      <Icon size={25} />
                    </div>

                    <h3 className="mb-3 text-xl font-extrabold text-[#1178B7] transition-colors duration-300 group-hover:text-[#F59C27]">
                      {item.title}
                    </h3>

                    <p className="leading-relaxed text-slate-600">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* APPEL À L'ACTION FINAL */}
        <section className="px-5 py-12 sm:px-6 md:py-16">
          <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-r from-[#1178B7] to-[#1178B7] px-6 py-10 text-center text-white shadow-xl sm:px-12 md:py-12">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-[#F59C27]">
              Votre prochain projet
            </p>

            <h2 className="mb-5 text-3xl font-black md:text-4xl">
              Votre prochain défi mérite une stratégie à sa hauteur.
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/95">
              Parlez-nous de votre projet. Nous vous aiderons à identifier
              les prochaines étapes et le service le plus adapté.
            </p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/devis"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F59C27] px-8 py-3 font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1178B7] focus:outline-none focus:ring-4 focus:ring-[#F59C27]/40"
              >
                Demander un devis
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                aria-label="Contactez-nous"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-[#F59C27] bg-white px-8 py-3 font-extrabold transition-all duration-300 hover:-translate-y-1 hover:bg-[#F59C27] focus:outline-none focus:ring-4 focus:ring-[#F59C27]/40"
              >
                <Mail
                  size={18}
                  className="text-[#1178B7] transition-colors duration-300 group-hover:text-white"
                />

                <span className="text-[#1178B7] transition-colors duration-300 group-hover:text-white">
                  Contactez
                </span>

                <span className="text-[#F59C27] transition-colors duration-300 group-hover:text-white">
                  -nous
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
