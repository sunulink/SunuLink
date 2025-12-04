import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BookOpen,
  Palette,
  TrendingUp,
  Search,
  Share2,
  Target,
  Video,
  FileText,
  MessageSquare,
  Calendar,
  Briefcase,
  Mail,
  Sparkles,
  Cpu,
  CheckSquare,
  Layout,
  Award,
  Wrench,
  ClipboardCheck,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";

// Composant de compteur animé
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef}>
      {count}{suffix}
    </div>
  );
};

const ResourcesPage = () => {
  const resources = [
    {
      icon: BookOpen,
      title: "Guide complet de la communication 360°",
      description: "Tout ce que vous devez savoir sur la communication globale et intégrée",
      color: "from-sunuOrange to-yellow-500",
      slug: "communication-360",
      articles: "12+",
    },
    {
      icon: Palette,
      title: "Charte graphique : bonnes pratiques essentielles",
      description: "Créez une identité visuelle cohérente et professionnelle",
      color: "from-sunuBlue to-sunuCyan",
      slug: "charte-graphique",
      articles: "8+",
    },
    {
      icon: TrendingUp,
      title: "Branding & Positionnement de marque",
      description: "Développez une marque forte et différenciante",
      color: "from-purple-500 to-pink-500",
      slug: "branding-positionnement",
      articles: "10+",
    },
    {
      icon: Search,
      title: "Stratégie digitale & SEO",
      description: "Optimisez votre présence en ligne et votre référencement",
      color: "from-green-500 to-emerald-500",
      slug: "strategie-digitale-seo",
      articles: "15+",
    },
    {
      icon: Share2,
      title: "Réseaux sociaux : stratégies & contenus",
      description: "Maîtrisez les plateformes sociales et engagez votre audience",
      color: "from-blue-500 to-indigo-500",
      slug: "reseaux-sociaux",
      articles: "20+",
    },
    {
      icon: Target,
      title: "Publicité payante (Meta Ads, Google Ads)",
      description: "Optimisez vos campagnes publicitaires en ligne",
      color: "from-red-500 to-orange-500",
      slug: "publicite-payante",
      articles: "18+",
    },
    {
      icon: Video,
      title: "Création de contenus visuels & vidéos",
      description: "Produisez des contenus visuels captivants et professionnels",
      color: "from-pink-500 to-rose-500",
      slug: "contenus-visuels-videos",
      articles: "14+",
    },
    {
      icon: FileText,
      title: "Copywriting & Storytelling",
      description: "Racontez des histoires qui convertissent et inspirent",
      color: "from-amber-500 to-orange-500",
      slug: "copywriting-storytelling",
      articles: "16+",
    },
    {
      icon: MessageSquare,
      title: "Relations presse & E-réputation",
      description: "Gérez votre image et vos relations médias",
      color: "from-teal-500 to-cyan-500",
      slug: "relations-presse-ereputation",
      articles: "9+",
    },
    {
      icon: Calendar,
      title: "Événementiel & Activation de marque",
      description: "Créez des expériences mémorables pour votre marque",
      color: "from-violet-500 to-purple-500",
      slug: "evenementiel-activation",
      articles: "11+",
    },
    {
      icon: Briefcase,
      title: "Développement commercial & Prospection digitale",
      description: "Boostez vos ventes avec des stratégies digitales efficaces",
      color: "from-indigo-500 to-blue-500",
      slug: "developpement-commercial",
      articles: "13+",
    },
    {
      icon: Mail,
      title: "Emailing & Automatisation marketing",
      description: "Automatisez vos campagnes et nurturez vos leads",
      color: "from-cyan-500 to-blue-500",
      slug: "emailing-automatisation",
      articles: "10+",
    },
    {
      icon: Sparkles,
      title: "Tendances marketing & Innovations",
      description: "Restez à la pointe des dernières tendances",
      color: "from-yellow-500 to-orange-500",
      slug: "tendances-innovations",
      articles: "22+",
    },
    {
      icon: Cpu,
      title: "IA appliquée à la communication",
      description: "Exploitez l'intelligence artificielle dans vos stratégies",
      color: "from-blue-600 to-purple-600",
      slug: "ia-communication",
      articles: "25+",
    },
    {
      icon: CheckSquare,
      title: "Checklists professionnelles",
      description: "Shooting, branding, réseaux sociaux et plus encore",
      color: "from-green-600 to-teal-600",
      slug: "checklists-professionnelles",
      articles: "15+",
    },
    {
      icon: Layout,
      title: "Modèles & Templates",
      description: "Calendrier éditorial, charte graphique, pitch deck...",
      color: "from-orange-500 to-red-500",
      slug: "modeles-templates",
      articles: "30+",
    },
    {
      icon: Award,
      title: "Études de cas / Success stories",
      description: "Inspirez-vous de projets réussis et retours d'expérience",
      color: "from-purple-600 to-pink-600",
      slug: "etudes-de-cas",
      articles: "12+",
    },
    {
      icon: Wrench,
      title: "Outils indispensables pour une communication 360°",
      description: "Les meilleurs outils pour optimiser votre communication",
      color: "from-gray-600 to-gray-800",
      slug: "outils-indispensables",
      articles: "40+",
    },
    {
      icon: ClipboardCheck,
      title: "Audit marketing & Diagnostic de marque",
      description: "Analysez et optimisez votre stratégie marketing",
      color: "from-emerald-600 to-green-600",
      slug: "audit-marketing",
      articles: "7+",
    },
    {
      icon: AlertTriangle,
      title: "Gestion de crise",
      description: "Anticipez et gérez les situations de crise communication",
      color: "from-red-600 to-pink-600",
      slug: "gestion-crise",
      articles: "6+",
    },
  ];

  const stats = [
    { value: 20, suffix: "", label: "Catégories de ressources" },
    { value: 250, suffix: "+", label: "Articles & guides" },
    { value: 100, suffix: "+", label: "Templates & outils" },
    { value: 50, suffix: "+", label: "Études de cas" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-sunuOrange/10 to-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-800" data-aos="fade-up">
                CENTRE DE <span className="text-sunuOrange">RESSOURCES</span><br />
                POUR VOTRE COMMUNICATION
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Guides pratiques, templates, checklists et outils pour maîtriser tous les aspects de votre communication 360°.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="grain-texture bg-gradient-to-br from-sunuOrange to-yellow-500 text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-4xl md:text-5xl font-black mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000} />
                  </h3>
                  <p className="font-semibold opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-sunuGray/20">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-4xl font-black text-center mb-4 text-gray-800" data-aos="fade-up">
              Explorez nos <span className="text-sunuOrange">ressources</span>
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Cliquez sur une catégorie pour accéder aux articles, guides et outils dédiés.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  to={`/ressources/${resource.slug}`}
                  className={`grain-texture bg-gradient-to-br ${resource.color} text-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer`}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="bg-white/20 backdrop-blur-sm w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <resource.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="mb-3">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">
                      {resource.articles} articles
                    </span>
                  </div>
                  <h3 className="text-xl font-black mb-3 leading-tight">{resource.title}</h3>
                  <p className="opacity-90 text-sm leading-relaxed">{resource.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-sunuOrange/10">
          <div className="container mx-auto max-w-7xl">
            <div className="grain-texture bg-gradient-to-r from-sunuBlue via-sunuCyan to-sunuOrange rounded-3xl p-12 text-white text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Besoin d'accompagnement personnalisé ?
              </h2>
              <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
                Notre équipe d'experts est là pour vous aider à mettre en œuvre ces stratégies et optimiser votre communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-block bg-white text-sunuBlue px-10 py-4 rounded-full font-bold text-lg hover:bg-sunuOrange hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Contactez-nous
                </Link>
                <Link
                  to="/services"
                  className="inline-block bg-white/20 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-sunuBlue transition-all duration-300"
                >
                  Nos services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ResourcesPage;
