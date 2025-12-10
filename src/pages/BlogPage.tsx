import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BookOpen,
  Lightbulb,
  TrendingUp,
  Megaphone,
  Target,
  Users,
  Palette,
  Globe,
  Briefcase,
  Sparkles,
  Award,
  MessageSquare,
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

const BlogPage = () => {
  const blogCategories = [
    {
      icon: Lightbulb,
      title: "Conseils & Astuces Marketing",
      description: "Des astuces pratiques pour améliorer votre stratégie marketing au quotidien",
      color: "from-sunuOrange to-yellow-500",
      slug: "conseils-marketing",
      articles: "15+",
    },
    {
      icon: TrendingUp,
      title: "Tendances & Actualités",
      description: "Restez informé des dernières tendances en communication et marketing digital",
      color: "from-sunuBlue to-sunuCyan",
      slug: "tendances-actualites",
      articles: "20+",
    },
    {
      icon: Megaphone,
      title: "Stratégies de Communication",
      description: "Apprenez à construire des stratégies de communication efficaces et percutantes",
      color: "from-purple-500 to-pink-500",
      slug: "strategies-communication",
      articles: "12+",
    },
    {
      icon: Target,
      title: "Marketing Digital & SEO",
      description: "Optimisez votre présence en ligne et améliorez votre référencement naturel",
      color: "from-green-500 to-emerald-500",
      slug: "marketing-digital-seo",
      articles: "18+",
    },
    {
      icon: Users,
      title: "Réseaux Sociaux",
      description: "Maîtrisez les réseaux sociaux et développez votre communauté en ligne",
      color: "from-blue-500 to-indigo-500",
      slug: "reseaux-sociaux",
      articles: "25+",
    },
    {
      icon: Palette,
      title: "Branding & Identité Visuelle",
      description: "Construisez une marque forte et une identité visuelle mémorable",
      color: "from-pink-500 to-rose-500",
      slug: "branding-identite",
      articles: "10+",
    },
    {
      icon: Globe,
      title: "Communication Africaine",
      description: "Focus sur les spécificités de la communication sur le continent africain",
      color: "from-amber-500 to-orange-500",
      slug: "communication-africaine",
      articles: "8+",
    },
    {
      icon: Briefcase,
      title: "Entrepreneuriat & Business",
      description: "Conseils pour les entrepreneurs et PME en matière de communication",
      color: "from-teal-500 to-cyan-500",
      slug: "entrepreneuriat-business",
      articles: "14+",
    },
    {
      icon: Sparkles,
      title: "Innovation & IA",
      description: "L'intelligence artificielle et les innovations au service de la communication",
      color: "from-violet-500 to-purple-500",
      slug: "innovation-ia",
      articles: "16+",
    },
    {
      icon: Award,
      title: "Success Stories",
      description: "Des études de cas et témoignages inspirants de projets réussis",
      color: "from-red-500 to-orange-500",
      slug: "success-stories",
      articles: "12+",
    },
    {
      icon: MessageSquare,
      title: "Interviews & Portraits",
      description: "Rencontres avec des experts et acteurs du monde de la communication",
      color: "from-indigo-500 to-blue-500",
      slug: "interviews-portraits",
      articles: "9+",
    },
    {
      icon: BookOpen,
      title: "Tutoriels & Guides",
      description: "Des tutoriels pratiques et guides pas à pas pour progresser",
      color: "from-cyan-500 to-blue-500",
      slug: "tutoriels-guides",
      articles: "22+",
    },
  ];

  const stats = [
    { value: 12, suffix: "", label: "Catégories d'articles" },
    { value: 180, suffix: "+", label: "Articles publiés" },
    { value: 50, suffix: "+", label: "Success stories" },
    { value: 25, suffix: "K+", label: "Lecteurs mensuels" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-sunuBlue/10 to-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-800" data-aos="fade-up">
                BLOG & <span className="text-sunuOrange">RESSOURCES</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Explorez nos articles, conseils pratiques et analyses pour booster votre communication et votre marketing.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="grain-texture bg-gradient-to-br from-sunuBlue to-sunuCyan text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
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

        {/* Blog Categories Grid */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-sunuGray/20">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-4xl font-black text-center mb-4 text-gray-800" data-aos="fade-up">
              Explorez nos <span className="text-sunuOrange">catégories</span>
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Cliquez sur une catégorie pour découvrir tous les articles associés.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {blogCategories.map((category, index) => (
                <Link
                  key={index}
                  to={`/blog/${category.slug}`}
                  className={`grain-texture bg-gradient-to-br ${category.color} text-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer`}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="bg-white/20 backdrop-blur-sm w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="mb-3">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">
                      {category.articles} articles
                    </span>
                  </div>
                  <h3 className="text-xl font-black mb-3 leading-tight">{category.title}</h3>
                  <p className="opacity-90 text-sm leading-relaxed">{category.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-sunuBlue/10">
          <div className="container mx-auto max-w-7xl">
            <div className="grain-texture bg-gradient-to-r from-sunuOrange via-yellow-500 to-sunuOrange rounded-3xl p-12 text-white text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Restez informé de nos dernières publications
              </h2>
              <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
                Abonnez-vous à notre newsletter pour recevoir nos articles, conseils et actualités directement dans votre boîte mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-6 py-4 rounded-full text-gray-800 font-semibold focus:outline-none focus:ring-4 focus:ring-white/50"
                />
                <button className="bg-white text-sunuOrange px-8 py-4 rounded-full font-bold hover:bg-sunuBlue hover:text-white transition-all duration-300 shadow-lg">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
