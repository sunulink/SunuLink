import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, FileText, Download, Lightbulb, CheckSquare, TrendingUp } from "lucide-react";

const BlogPage = () => {
  const categories = [
    {
      icon: BookOpen,
      title: "Articles",
      description: "Des analyses approfondies sur les tendances marketing et communication",
      color: "from-sunuBlue to-sunuCyan"
    },
    {
      icon: FileText,
      title: "Guides",
      description: "Des tutoriels complets pour maîtriser les outils de communication",
      color: "from-sunuOrange to-yellow-500"
    },
    {
      icon: CheckSquare,
      title: "Checklists",
      description: "Des listes pratiques pour optimiser vos projets de communication",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Download,
      title: "PDFs & Ressources",
      description: "Des documents téléchargeables pour approfondir vos connaissances",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Lightbulb,
      title: "Conseils Marketing",
      description: "Des astuces pratiques pour améliorer votre stratégie marketing",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Études de Cas",
      description: "Des analyses détaillées de nos projets réussis",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const featuredArticles = [
    {
      title: "Comment construire une stratégie de communication efficace en 2025",
      category: "Stratégie",
      excerpt: "Découvrez les 5 piliers essentiels pour bâtir une stratégie de communication qui génère des résultats mesurables.",
      readTime: "8 min",
      date: "15 Janvier 2025"
    },
    {
      title: "L'importance du branding pour les PME africaines",
      category: "Branding",
      excerpt: "Pourquoi investir dans votre identité de marque est crucial pour vous démarquer sur le marché africain.",
      readTime: "6 min",
      date: "10 Janvier 2025"
    },
    {
      title: "Social Media : Les tendances 2025 à ne pas manquer",
      category: "Digital",
      excerpt: "TikTok, Instagram Reels, LinkedIn : quelles plateformes privilégier et comment optimiser votre présence.",
      readTime: "10 min",
      date: "5 Janvier 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-white to-sunuGray/20">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-800" data-aos="fade-up">
              Blog & <span className="text-sunuOrange">Ressources</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Explorez nos articles, guides pratiques, et ressources gratuites pour développer votre expertise en communication et marketing.
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-4xl font-black text-center mb-16 text-gray-800" data-aos="fade-up">
              Nos <span className="text-sunuOrange">Catégories</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className={`grain-texture bg-gradient-to-br ${category.color} text-white p-8 h-full`}>
                    <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-black mb-4">{category.title}</h3>
                    <p className="opacity-90 leading-relaxed">{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-20 px-6 bg-gradient-to-b from-sunuGray/20 to-white">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-4xl font-black text-center mb-16 text-gray-800" data-aos="fade-up">
              Articles <span className="text-sunuOrange">Récents</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="bg-gradient-to-br from-sunuBlue to-sunuCyan h-48 flex items-center justify-center">
                    <BookOpen className="w-20 h-20 text-white opacity-50" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-sunuOrange text-white px-3 py-1 rounded-full text-xs font-bold">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm">{article.readTime} lecture</span>
                    </div>
                    <h3 className="text-xl font-black mb-3 text-gray-800">{article.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{article.date}</span>
                      <button className="text-sunuOrange font-bold hover:text-sunuBlue transition-colors">
                        Lire plus →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Resources Section */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grain-texture bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuBlue text-white rounded-3xl p-12 shadow-2xl" data-aos="fade-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-black mb-6">Ressources Gratuites</h2>
                  <p className="text-xl mb-6 opacity-95 leading-relaxed">
                    Accédez à notre bibliothèque de ressources gratuites : templates, checklists, guides PDF et bien plus encore.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3">
                      <CheckSquare className="w-6 h-6 text-sunuOrange" />
                      <span>Checklist : Lancer sa communication sur les réseaux sociaux</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckSquare className="w-6 h-6 text-sunuOrange" />
                      <span>Guide PDF : Créer une identité de marque forte</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckSquare className="w-6 h-6 text-sunuOrange" />
                      <span>Template : Brief créatif pour vos projets</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckSquare className="w-6 h-6 text-sunuOrange" />
                      <span>Étude de cas : Comment nous avons doublé la visibilité d'une PME</span>
                    </li>
                  </ul>
                  <button className="bg-white text-sunuBlue px-8 py-4 rounded-full font-bold text-lg hover:bg-sunuOrange hover:text-white transition-all duration-300 shadow-lg">
                    Télécharger les ressources
                  </button>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                  <Download className="w-32 h-32 mx-auto mb-6 opacity-80" />
                  <p className="text-2xl font-bold">+50 Ressources</p>
                  <p className="text-lg opacity-90">disponibles gratuitement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-sunuGray/20 to-white">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-sunuOrange via-yellow-500 to-sunuOrange text-white rounded-3xl p-12 text-center shadow-2xl" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Restez Informé
              </h2>
              <p className="text-xl mb-8 opacity-95">
                Recevez nos derniers articles, conseils et ressources directement dans votre boîte mail.
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
