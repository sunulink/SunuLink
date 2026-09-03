import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Image, Video, Package, Globe, FileText, Palette } from "lucide-react";
import { Link } from "react-router-dom";

// Composant de compteur animé
const AnimatedCounter = ({ end, duration = 1000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
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

const RealisationsPage = () => {
  const categories = [
    {
      icon: Palette,
      title: "Logo & Identité visuelle",
      examples: "Création de logos professionnels, chartes graphiques, pack branding complet",
      color: "from-sunuOrange to-yellow-500",
      projects: "15+",
      link: "/realisations/logo-identite"
    },
    {
      icon: FileText,
      title: "Affiches & supports print",
      examples: "Flyers, posters, dépliants, PLV, roll-up…",
      color: "from-sunuOrange to-yellow-500",
      projects: "30+",
      link: "/realisations/print-affiches"
    },
    {
      icon: Palette,
      title: "Branding & univers graphiques",
      examples: "Identité, couleurs, typographies, guidelines, visuels cohérents",
      color: "from-sunuOrange to-yellow-500",
      projects: "12+",
      link: "/realisations/branding-complet"
    },
    {
      icon: Image,
      title: "Images & photographies",
      examples: "Shooting produits, photos corporate, mises en scène professionnelles",
      color: "from-sunuOrange to-yellow-500",
      projects: "25+",
      link: "/realisations/photo-shooting"
    },
    {
      icon: Video,
      title: "Vidéos & animations",
      examples: "Teasers, clips institutionnels, spots, vidéos expérimentales/IA",
      color: "from-sunuOrange to-yellow-500",
      projects: "18+",
      link: "/realisations/video-animation"
    },
    {
      icon: Package,
      title: "Design produit & Packaging",
      examples: "Étiquettes, packagings alimentaires, visuels produits, maquettes réalistes",
      color: "from-sunuOrange to-yellow-500",
      projects: "10+",
      link: "/realisations/design-packaging"
    },
    {
      icon: Globe,
      title: "Web & Digital",
      examples: "Sites web, interfaces, visuels digitaux, contenus optimisés",
      color: "from-sunuOrange to-yellow-500",
      projects: "20+",
      link: "/realisations/web-digital"
    },
  ];

  const stats = [
    { value: 50, suffix: "+", label: "Projets réalisés" },
    { value: 30, suffix: "+", label: "Clients satisfaits" },
    { value: 10, suffix: "+", label: "Secteurs d'activité" },
    { value: 95, suffix: "%", label: "Taux de satisfaction" },
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
                DES PROJETS DIVERS ET VARIÉS,<br />
                <span className="text-sunuOrange">MAIS TOUJOURS AUTOUR D'UNE PASSION COMMUNE</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Découvrez une sélection de nos travaux réalisés avec rigueur, créativité et précision.
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

        {/* Categories Grid */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-sunuGray/20">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-4xl font-black text-center mb-16 text-gray-800" data-aos="fade-up">
              Nos catégories de <span className="text-sunuOrange">réalisations</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  to={category.link}
                  className={`grain-texture bg-gradient-to-br ${category.color} text-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-4">
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold">
                      {category.projects} projets
                    </span>
                  </div>
                  <h3 className="text-2xl font-black mb-4">{category.title}</h3>
                  <p className="opacity-90 leading-relaxed">{category.examples}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl p-6 md:p-12 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-black mb-8 text-gray-800 text-center">
                CE QU'ILS DISENT<br />DE NOUS
              </h2>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg md:text-xl text-gray-700 italic mb-6">
                  "La qualité, la rapidité et le professionnalisme sont les forces les plus souvent citées."
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 w-full max-w-md mx-auto sm:max-w-none">
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto text-center bg-sunuBlue text-white px-6 py-3 rounded-full font-bold hover:bg-sunuOrange transition-all duration-300 shadow-md"
                  >
                    Laisser un avis
                  </Link>
                  <Link
                    to="/realisations"
                    className="w-full sm:w-auto text-center bg-sunuOrange text-white px-6 py-3 rounded-full font-bold hover:bg-sunuBlue transition-all duration-300 shadow-md"
                  >
                    Nos réalisations
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-sunuOrange/10">
          <div className="container mx-auto max-w-7xl">
            <div className="grain-texture bg-gradient-to-r from-sunuBlue via-sunuCyan to-sunuOrange rounded-3xl p-12 text-white text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Un partenariat ?
              </h2>
              <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
                Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous accompagner.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-sunuBlue px-10 py-4 rounded-full font-bold text-lg hover:bg-sunuOrange hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Parlons-en
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RealisationsPage;
