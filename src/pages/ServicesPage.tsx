import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Briefcase, Palette, Image as ImageIcon, Globe, TrendingUp, Calendar,
  Brain, CheckCircle, Film, ArrowRight, Sparkles, Camera, Clapperboard,
  Users, Target, Mail
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Briefcase,
    title: "Stratégie & Consulting",
    description: "Clarifiez votre positionnement, vos priorités et votre plan d’action pour faire avancer votre activité avec méthode.",
    color: "from-sunuBlue to-sunuCyan",
    offerings: ["Audit & diagnostic", "Positionnement stratégique", "Plan marketing et communication", "Études de marché", "Accompagnement des dirigeants"],
    action: "Parler de mon projet",
    link: "/contact",
  },
  {
    icon: Palette,
    title: "Branding & Identité Visuelle",
    description: "Construisez une marque reconnaissable, cohérente et mémorable, de votre logo à votre univers visuel.",
    color: "from-violet-600 to-fuchsia-500",
    offerings: ["Création de logo", "Charte graphique", "Identité de marque", "Rebranding", "Direction artistique"],
    action: "Créer mon identité",
    link: "/contact",
  },
  {
    icon: ImageIcon,
    title: "Communication Visuelle & Contenus",
    description: "Des supports créatifs qui transmettent votre message clairement et donnent envie de découvrir votre marque.",
    color: "from-sunuOrange to-amber-400",
    offerings: ["Visuels et affiches", "Contenus pour les réseaux sociaux", "Copywriting", "Campagnes visuelles", "Motion design"],
    action: "Créer mes contenus",
    link: "/contact",
  },
  {
    icon: Globe,
    title: "Digital, Web & SEO",
    description: "Développez une présence en ligne professionnelle, facile à trouver, à comprendre et à utiliser.",
    color: "from-cyan-500 to-sky-600",
    offerings: ["Création et refonte de sites web", "UX/UI design", "Référencement naturel (SEO)", "Audit digital", "Visibilité Google"],
    action: "Développer ma présence en ligne",
    link: "/contact",
  },
  {
    icon: TrendingUp,
    title: "Développement Commercial",
    description: "Structurez votre prospection et votre parcours client pour transformer plus efficacement les opportunités en clients.",
    color: "from-emerald-500 to-teal-600",
    offerings: ["Stratégie commerciale", "Prospection B2B/B2C", "Tunnel de conversion", "Mise en place de CRM", "Coaching commercial"],
    action: "Accélérer ma croissance",
    link: "/contact",
  },
  {
    icon: Brain,
    title: "IA & Automatisation",
    description: "Réduisez les tâches répétitives et facilitez le travail de vos équipes grâce à des automatisations adaptées.",
    color: "from-indigo-500 to-violet-600",
    offerings: ["Workflows automatisés", "Assistants IA", "Automatisation e-mail et WhatsApp", "Chatbots professionnels", "Tableaux de bord intelligents"],
    action: "Explorer les possibilités",
    link: "/contact",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="pt-20">
        {/* HERO — déposer l’image générée dans public/img/services-hero.jpg */}
        <section className="relative isolate flex min-h-[570px] items-center overflow-hidden bg-[#061b36]">
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{ backgroundImage: "url('/img/services-hero.jpg')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#04162e]/95 via-[#05264a]/80 to-[#05264a]/25" aria-hidden="true" />
          <div className="container mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
            <div className="max-w-3xl" data-aos="fade-up">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-sunuOrange backdrop-blur">
                <Sparkles size={16} /> Nos expertises
              </div>
              <h1 className="mb-6 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
                Une communication à <span className="text-sunuOrange">360°</span> pour donner de l’élan à vos projets.
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
                De la stratégie à la création, du digital à l’événementiel et à la production audiovisuelle : SunuLink vous accompagne avec des solutions adaptées à vos objectifs.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="#nos-services" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sunuOrange px-7 py-3 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300">
                  Explorer nos services <ArrowRight size={18} />
                </a>
                <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-7 py-3 font-bold text-white transition hover:bg-white hover:text-[#062448] focus:outline-none focus:ring-4 focus:ring-white/40">
                  <Mail size={18} /> Parler à un expert
                </Link>
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 text-sm text-white/90 sm:grid-cols-3">
                {["Une approche sur mesure", "Des expertises complémentaires", "Des objectifs concrets"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="shrink-0 text-sunuOrange" size={18} /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section id="nos-services" className="scroll-mt-24 px-6 pb-8 pt-16 md:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-sunuOrange">Nos services</p>
            <h2 className="mb-5 text-3xl font-black leading-tight text-[#08264b] md:text-4xl">
              Les bonnes expertises, réunies autour de votre ambition.
            </h2>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              Choisissez le service qui correspond à votre besoin. Chaque prestation peut être adaptée à votre contexte, à vos délais et à votre budget.
            </p>
          </div>
        </section>

        {/* GENERAL SERVICES */}
        <section className="px-6 pb-16 pt-8 md:pb-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sunuBlue/40 hover:shadow-xl" data-aos="fade-up" data-aos-delay={index * 60}>
                  <div className={`bg-gradient-to-br ${service.color} p-6 text-white`}>
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/15 shadow-inner">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-xl font-extrabold leading-snug">{service.title}</h3>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="mb-5 leading-relaxed text-slate-600">{service.description}</p>
                    <h4 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-[#08264b]">Comment nous pouvons vous aider</h4>
                    <ul className="mb-6 space-y-2.5">
                      {service.offerings.map((offering) => (
                        <li key={offering} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700">
                          <CheckCircle size={17} className="mt-0.5 shrink-0 text-sunuBlue" /> <span>{offering}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-2">
                      <Link to={service.link} className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-sunuBlue px-4 py-3 text-center font-bold text-sunuBlue transition hover:bg-sunuBlue hover:text-white focus:outline-none focus:ring-4 focus:ring-sky-200">
                        {service.action} <ArrowRight size={17} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* SUNULINK PROD FEATURE */}
        <section className="px-6 py-6 md:py-10">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#061a35] shadow-xl">
            <div className="grid lg:grid-cols-2">
              <div className="flex flex-col justify-center p-7 text-white sm:p-10 lg:p-12">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sunuOrange text-white"><Film size={29} /></span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-sunuOrange">Production audiovisuelle</p>
                    <h2 className="text-3xl font-black sm:text-4xl">SunuLink Prod</h2>
                  </div>
                </div>
                <p className="mb-4 text-xl font-bold text-white">Donnez vie à vos idées.</p>
                <p className="mb-6 leading-relaxed text-white/80">
                  Des films de marque aux vidéos événementielles, nous vous aidons à raconter votre histoire avec une production soignée et un message clair.
                </p>
                <div className="mb-8 grid gap-3 sm:grid-cols-2">
                  {["Films institutionnels et publicitaires", "Captation vidéo et prises de vues", "Montage, étalonnage et post-production", "Motion design et contenus vidéo"].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle size={17} className="mt-0.5 shrink-0 text-sunuOrange" /> {item}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link to="/services/audiovisuel" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sunuOrange px-6 py-3 font-extrabold text-white transition hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300">
                    Découvrir SunuLink Prod <ArrowRight size={18} />
                  </Link>
                  <Link to="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-[#061a35] focus:outline-none focus:ring-4 focus:ring-white/30">
                    Demander une production
                  </Link>
                </div>
              </div>
              <div className="relative min-h-[280px] bg-gradient-to-br from-slate-800 via-[#12345b] to-black">
                <img src="/img/services-prod.jpg" alt="Équipe de production audiovisuelle en tournage" className="absolute inset-0 h-full w-full object-cover" loading="lazy" onError={(event) => { event.currentTarget.style.display = "none"; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061a35]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 rounded-xl border border-white/20 bg-black/35 px-4 py-3 text-white backdrop-blur">
                  <p className="font-bold">De l’idée à l’image finale</p>
                  <p className="text-sm text-white/80">Création · Tournage · Post-production</p>
                </div>
                <div className="absolute right-6 top-6 rounded-full bg-sunuOrange px-3 py-1 text-xs font-extrabold text-white">SUNULINK PROD</div>
              </div>
            </div>
          </div>
        </section>

        {/* SUNULINK EVENTS FEATURE */}
        <section className="px-6 py-6 md:py-10">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-slate-200 bg-[#f5f8fc] shadow-lg">
            <div className="grid lg:grid-cols-2">
              <div className="relative order-2 min-h-[280px] bg-gradient-to-br from-[#0a2b53] via-[#0a3d70] to-[#061a35] lg:order-1">
                <img src="/img/services-events.jpg" alt="Conférence professionnelle organisée dans une salle événementielle" className="absolute inset-0 h-full w-full object-cover" loading="lazy" onError={(event) => { event.currentTarget.style.display = "none"; }} />
                <div className="absolute inset-0 bg-gradient-to-r from-[#061a35]/20 to-[#061a35]/60" />
                <div className="absolute bottom-6 left-6 rounded-xl border border-white/20 bg-black/35 px-4 py-3 text-white backdrop-blur">
                  <p className="font-bold">Des moments qui rassemblent</p>
                  <p className="text-sm text-white/80">Conception · Coordination · Réalisation</p>
                </div>
              </div>
              <div className="order-1 flex flex-col justify-center p-7 sm:p-10 lg:order-2 lg:p-12">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sunuBlue text-white"><Calendar size={28} /></span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-sunuOrange">Événementiel & activation</p>
                    <h2 className="text-3xl font-black text-[#08264b] sm:text-4xl">SunuLink Events</h2>
                  </div>
                </div>
                <p className="mb-4 text-xl font-bold text-[#08264b]">Des événements qui marquent les esprits.</p>
                <p className="mb-6 leading-relaxed text-slate-600">
                  Nous concevons et coordonnons des événements professionnels ou grand public en tenant compte de votre objectif, de votre public et de votre identité de marque.
                </p>
                <div className="mb-8 grid gap-3 sm:grid-cols-2">
                  {["Conférences, forums et séminaires", "Lancements et activations de marque", "Galas, salons et rencontres professionnelles", "Coordination logistique et technique"].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle size={17} className="mt-0.5 shrink-0 text-sunuBlue" /> {item}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link to="/services/evenementiel" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sunuBlue px-6 py-3 font-extrabold text-white transition hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-200">
                    Découvrir SunuLink Events <ArrowRight size={18} />
                  </Link>
                  <Link to="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-sunuBlue px-6 py-3 font-bold text-sunuBlue transition hover:bg-sunuBlue hover:text-white focus:outline-none focus:ring-4 focus:ring-sky-200">
                    Organiser mon événement
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE PHARE */}
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-br from-[#062448] via-sunuBlue to-[#007cba] p-7 text-white shadow-xl sm:p-10 lg:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-sunuOrange">Notre méthode</p>
                <h2 className="mb-5 text-3xl font-black sm:text-4xl">Une stratégie claire. Des actions cohérentes. Des résultats suivis.</h2>
                <p className="mb-7 leading-relaxed text-white/85">
                  Nous commençons par comprendre votre situation et vos objectifs, puis nous construisons avec vous une démarche adaptée, de la réflexion à la mise en œuvre.
                </p>
                <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-extrabold text-[#062448] transition hover:bg-sunuOrange hover:text-white focus:outline-none focus:ring-4 focus:ring-white/40">
                  Échanger sur mes objectifs <ArrowRight size={18} />
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Target, title: "Comprendre", text: "Analyser votre besoin et définir les priorités." },
                  { icon: Briefcase, title: "Structurer", text: "Construire un plan d’action réaliste." },
                  { icon: Users, title: "Collaborer", text: "Avancer avec un accompagnement adapté." },
                  { icon: TrendingUp, title: "Évaluer", text: "Suivre les indicateurs et ajuster les actions." },
                ].map((item) => {
                  const Icon = item.icon;
                  return <div key={item.title} className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                    <Icon className="mb-3 text-sunuOrange" size={25} />
                    <h3 className="mb-2 font-extrabold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-white/80">{item.text}</p>
                  </div>;
                })}
              </div>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="bg-slate-50 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-sunuOrange">Pourquoi SunuLink ?</p>
              <h2 className="text-3xl font-black text-[#08264b] md:text-4xl">Un partenaire à vos côtés, à chaque étape.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                { icon: Target, title: "Une approche sur mesure", text: "Des recommandations adaptées à votre réalité, vos publics et vos objectifs." },
                { icon: CheckCircle, title: "Un suivi lisible", text: "Des étapes claires, des échanges réguliers et des priorités partagées." },
                { icon: Sparkles, title: "Une expertise à 360°", text: "Stratégie, création, digital, événementiel et audiovisuel réunis au même endroit." },
              ].map((item) => {
                const Icon = item.icon;
                return <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sunuBlue"><Icon size={25} /></div>
                  <h3 className="mb-3 text-xl font-extrabold text-[#08264b]">{item.title}</h3>
                  <p className="leading-relaxed text-slate-600">{item.text}</p>
                </article>;
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-r from-sunuOrange to-amber-500 px-6 py-12 text-center text-white shadow-xl sm:px-12">
            <h2 className="mb-5 text-3xl font-black md:text-4xl">Votre prochain défi mérite une stratégie à sa hauteur.</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/95">
              Parlez-nous de votre projet. Nous vous aiderons à identifier les prochaines étapes et le service le plus adapté.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/devis" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-8 py-3 font-extrabold text-sunuOrange transition hover:bg-[#062448] hover:text-white focus:outline-none focus:ring-4 focus:ring-white/40">
                Demander un devis <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-3 font-extrabold text-white transition hover:bg-white hover:text-sunuOrange focus:outline-none focus:ring-4 focus:ring-white/40">
                Nous contacter <Mail size={18} />
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
