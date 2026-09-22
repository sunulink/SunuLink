import { useState } from "react";
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
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const BlogPage = () => {
  // États pour la Newsletter (Double étape de confirmation d'email)
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Étape 1 : Vérification de la correspondance des deux saisies
    if (email.trim().toLowerCase() !== confirmEmail.trim().toLowerCase()) {
      setErrorMessage("Les deux adresses email ne correspondent pas.");
      return;
    }

    // Étape 2 : Vérification locale rapide (localStorage)
    const storedSubscribers = JSON.parse(localStorage.getItem("sunulink_subscribers") || "[]");
    const normalizedEmail = email.trim().toLowerCase();

    if (storedSubscribers.includes(normalizedEmail)) {
      setErrorMessage("Cette adresse email est déjà inscrite à notre newsletter.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Étape 3 : Envoi et vérification anti-doublon sur Google Sheets
      const googleScriptUrl = "https://script.google.com/macros/s/AKfycbwKCFvCDnX2AvEk_JjzTbULzOctlYVDJ_kUdlWnvg8doA1cJUFZen-tbUANz9hVgA/exec"; 

      await fetch(googleScriptUrl, {
        method: "POST",
        mode: "no-cors", // Recommandé pour Google Apps Script afin d'éviter les blocages CORS globaux
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: normalizedEmail,
          date: new Date().toLocaleDateString("fr-FR")
        }),
      });

      // Étape 4 : Envoi de la notification d'abonnement via EmailJS
      const templateParams = {
        prenom: "Nouvel Abonné",
        nom: "Newsletter",
        email: normalizedEmail,
        telephone: "Non renseigné",
        objet: "Nouvelle inscription à la Newsletter du Blog",
        source: "Formulaire Newsletter Blog",
        message: `Une nouvelle inscription à la newsletter a été enregistrée avec l'adresse email suivante : ${normalizedEmail}`,
      };

      await emailjs.send(
        "service_ktbwzv5", 
        "template_pabmg78", 
        templateParams,
        "ShXDBB_RTc_F-EWm1" 
      );

      // Enregistrement de l'abonné dans le localStorage pour éviter les doublons futurs
      storedSubscribers.push(normalizedEmail);
      localStorage.setItem("sunulink_subscribers", JSON.stringify(storedSubscribers));

      setIsSuccess(true);
      setEmail("");
      setConfirmEmail("");
    } catch (error) {
      console.error("Erreur lors de l'inscription à la newsletter :", error);
      setErrorMessage("Une erreur est survenue lors de votre inscription. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
      description: "Construisez une marque forte et une identity visuelle mémorable",
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
    {
      icon: Target,
      title: "Communication 360° & Stratégie Globale",
      description: "Stratégies complètes pour construire, piloter et optimiser la communication des marques.",
      color: "from-sunuBlue to-sunuCyan",
      slug: "communication-360-strategie-globale",
      articles: "20+",
    },
    {
      icon: Megaphone,
      title: "Publicité & Média Buying",
      description: "Campagnes sponsorisées, achat média, performance publicitaire et ROI.",
      color: "from-red-500 to-orange-500",
      slug: "publicite-digitale-strategies-media",
      articles: "15+",
    },
    {
      icon: MessageSquare,
      title: "Création de Contenu & Storytelling",
      description: "Contenus engageants, storytelling de marque et stratégies éditoriales.",
      color: "from-purple-500 to-pink-500",
      slug: "strategie-contenu-creation-editoriale",
      articles: "18+",
    },
    {
      icon: Palette,
      title: "Design Graphique & Création Visuelle",
      description: "Identité visuelle, branding, design graphique et supports de communication.",
      color: "from-pink-500 to-rose-500",
      slug: "design-graphique-branding-visuel",
      articles: "14+",
    },
    {
      icon: Sparkles,
      title: "Audiovisuel & Motion Design",
      description: "Vidéos, motion design, animations et contenus audiovisuels impactants.",
      color: "from-indigo-500 to-blue-500",
      slug: "audiovisuel-motion-design",
      articles: "12+",
    },
    {
      icon: Users,
      title: "Événementiel & Activation de Marque",
      description: "Événements, lancements, activations terrain et expériences de marque.",
      color: "from-amber-500 to-orange-500",
      slug: "evenementiel-experience-client",
      articles: "10+",
    },
    {
      icon: Briefcase,
      title: "Communication Corporate & Institutionnelle",
      description: "Communication interne, institutionnelle et image de marque corporate.",
      color: "from-teal-500 to-cyan-500",
      slug: "relations-publiques-communication-institutionnelle",
      articles: "11+",
    },
    {
      icon: Award,
      title: "Communication de Crise & Réputation",
      description: "Gestion de crise, e-réputation et communication sensible.",
      color: "from-gray-600 to-gray-800",
      slug: "communication-crise-reputation",
      articles: "8+",
    },
  ];



  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pb-20">
        {/* Hero Section */}
        <section className="relative min-h-[680px] sm:min-h-[620px] md:min-h-[560px] w-full overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=85&w=2200"
              alt="Professionnel consultant des documents et des ressources stratégiques"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#0B1220]/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0071BC]/50 via-[#0B1220]/30 to-[#F6A61A]/20" />
          </div>

          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto max-w-6xl px-5 sm:px-6 py-12 sm:py-14 md:py-10">
              <div className="max-w-4xl text-white">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] backdrop-blur-md mb-5">
                  <BookOpen className="w-4 h-4 text-sunuOrange" />
                  RESSOURCES &amp; EXPERTISE
                </span>

                <p className="text-sm sm:text-base md:text-lg font-black uppercase tracking-[0.18em] text-sunuOrange mb-2">
                  SUNULINK INSIGHTS
                </p>

                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-white/80 mb-5">
                  ÉDITION 2026–2027
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.98] tracking-tight mb-5">
                  COMPRENDRE. DÉCIDER. <span className="text-sunuOrange">TRANSFORMER.</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed mb-7">
                  Des idées, des méthodes et des stratégies pour faire grandir votre entreprise.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-3xl leading-relaxed mb-8">
                  Des ressources conçues pour les entreprises qui ne veulent pas simplement communiquer, mais construire une marque visible, crédible et performante.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href="#categories"
                    className="inline-flex items-center justify-center rounded-full bg-sunuOrange px-6 sm:px-8 py-3.5 sm:py-4 font-black text-slate-950 shadow-lg transition-all hover:bg-white hover:text-sunuBlue hover:-translate-y-0.5"
                  >
                    Explorer nos e-books
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full border-2 border-white/70 bg-white/5 px-6 sm:px-8 py-3.5 sm:py-4 font-black text-white backdrop-blur-sm transition-all hover:bg-white hover:text-sunuBlue"
                  >
                    Parler à un expert
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Premium Banner — Transition vers la bibliothèque d'expertise */}
        <section className="px-4 sm:px-6 py-10 md:py-14 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-sunuBlue/15 bg-gradient-to-br from-sunuBlue to-sunuCyan shadow-[0_20px_60px_rgba(0,113,188,0.18)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.16),transparent_34%),radial-gradient(circle_at_85%_80%,rgba(246,166,26,0.18),transparent_30%)] pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] min-h-[360px] md:min-h-[400px]">
                <div className="flex flex-col justify-center p-7 sm:p-10 md:p-14 lg:p-16 text-white">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] sm:text-xs font-black uppercase tracking-[0.16em] text-white/90 backdrop-blur-md">
                    <BookOpen className="w-4 h-4 text-sunuOrange" />
                    SUNULINK INSIGHTS
                  </span>

                  <h2 className="mt-6 max-w-3xl text-3xl sm:text-4xl md:text-5xl font-black leading-[1.05] tracking-tight">
                    VOUS AVEZ UN PROJET.
                    <br />
                    <span className="text-sunuOrange">NOUS AVONS LA MÉTHODE.</span>
                  </h2>

                  <p className="mt-5 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-blue-50">
                    Stratégie, communication, branding, digital, développement commercial, événementiel et intelligence artificielle : découvrez des ressources pensées pour vous aider à mieux comprendre vos enjeux et à prendre de meilleures décisions.
                  </p>

                  <div className="mt-7">
                    <Link
                      to="/services"
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-sunuOrange px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-black text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-sunuBlue hover:-translate-y-0.5"
                    >
                      Découvrir notre expertise
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>

                <div className="relative min-h-[250px] lg:min-h-full overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10">
                  <img
                    src="https://allafricanyouth.org/assets/img2-CQHmmqh8.jpg"
                    alt="Professionnels africains réunis autour d'un projet en entreprise"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0B1220]/40 via-[#0071BC]/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 rounded-2xl border border-white/15 bg-[#0B1220]/55 px-4 py-3 backdrop-blur-md">
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.12em] text-white/90">
                      Stratégie • Expertise • Action
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Categories Grid */}
        <section id="categories" className="py-20 px-6 bg-gradient-to-b from-white to-sunuGray/20">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-4xl font-black text-center mb-4 text-gray-800">
              Explorez nos <span className="text-sunuOrange">catégories</span>
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Cliquez sur une catégorie pour découvrir tous les articles associés.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {blogCategories.map((category, index) => (
                <Link
                  key={index}
                  to={`/blog/${category.slug}`}
                  className={`grain-texture bg-gradient-to-br ${category.color} text-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer`}
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

        {/* CTA Section (Newsletter double étape) */}
        <section className="py-16 md:py-20 px-4 sm:px-6 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-sunuBlue/15 bg-white shadow-[0_20px_60px_rgba(0,113,188,0.12)]">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-sunuBlue via-sunuCyan to-sunuOrange" />

              <div className="grid lg:grid-cols-[1.05fr_1.25fr]">
                <div className="relative overflow-hidden bg-sunuBlue p-7 sm:p-10 md:p-12 text-white">
                  <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-sunuCyan/25 blur-2xl" />
                  <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-sunuOrange/20 blur-3xl" />

                  <div className="relative z-10">
                    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white/90">
                      SUNULINK INSIGHTS
                    </span>

                    <h2 className="mt-5 text-3xl sm:text-4xl font-black leading-tight">
                      Restez au cœur de notre expertise.
                    </h2>

                    <p className="mt-4 max-w-lg text-sm sm:text-base leading-relaxed text-blue-50/90">
                      Recevez nos analyses, conseils, actualités et nouvelles ressources directement dans votre boîte mail.
                    </p>

                    <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sunuOrange">
                      <BookOpen className="w-4 h-4" />
                      Des idées utiles. Des méthodes concrètes.
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                  {isSuccess ? (
                    <div className="h-full min-h-[260px] rounded-2xl border border-sunuBlue/15 bg-slate-50 p-7 sm:p-9 flex flex-col items-center justify-center text-center">
                      <div className="w-14 h-14 rounded-2xl bg-sunuBlue/10 flex items-center justify-center mb-5">
                        <CheckCircle className="w-8 h-8 text-sunuBlue" />
                      </div>
                      <h3 className="font-black text-2xl text-gray-900">Bienvenue dans SunuLink Insights</h3>
                      <p className="mt-3 text-gray-600 leading-relaxed max-w-md">
                        Votre inscription a bien été validée. Vous recevrez bientôt nos meilleures ressources et astuces directement dans votre boîte mail.
                      </p>
                    </div>
                  ) : (
                    <div className="max-w-xl mx-auto">
                      <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-sunuBlue">
                          Newsletter
                        </p>
                        <h3 className="mt-2 text-2xl sm:text-3xl font-black text-gray-900">
                          Inscrivez-vous en quelques secondes
                        </h3>
                      </div>

                      <form onSubmit={handleSubscribe} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                              Votre adresse email
                            </label>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="exemple@entreprise.com"
                              required
                              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-800 font-medium placeholder:text-gray-400 focus:outline-none focus:border-sunuBlue focus:ring-4 focus:ring-sunuBlue/10 transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                              Confirmer votre email
                            </label>
                            <input
                              type="email"
                              value={confirmEmail}
                              onChange={(e) => setConfirmEmail(e.target.value)}
                              placeholder="Retapez votre email"
                              required
                              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-800 font-medium placeholder:text-gray-400 focus:outline-none focus:border-sunuBlue focus:ring-4 focus:ring-sunuBlue/10 transition-all"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-sunuBlue px-6 py-4 text-base sm:text-lg font-black text-white shadow-lg shadow-sunuBlue/20 transition-all hover:bg-sunuOrange hover:shadow-sunuOrange/20 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? "Inscription en cours..." : "S'abonner à la newsletter"}
                          <Send className="w-4 h-4" />
                        </button>

                        <p className="text-xs text-gray-500 text-center leading-relaxed">
                          Des contenus utiles, sans surcharge. Vous pourrez vous désinscrire à tout moment.
                        </p>
                      </form>

                      {errorMessage && (
                        <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-3.5 flex items-center justify-center gap-2 text-red-700 text-sm font-semibold animate-shake">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>{errorMessage}</span>
                        </div>
                      )}
                    </div>
                  )}
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

export default BlogPage;
