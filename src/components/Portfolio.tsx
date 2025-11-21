import { Card } from "@/components/ui/card";
import { Briefcase, Users, Rocket, TrendingUp } from "lucide-react";

const Portfolio = () => {
  const stats = [
    { icon: Briefcase, value: "50+", label: "Projets réalisés" },
    { icon: Users, value: "30+", label: "Clients satisfaits" },
    { icon: Rocket, value: "10+", label: "Secteurs d'activité" },
    { icon: TrendingUp, value: "95%", label: "Taux de satisfaction" },
  ];

  const categories = [
    {
      title: "Logo & Identité visuelle",
      examples: "Création de logos professionnels, chartes graphiques, pack branding complet",
      color: "bg-sunuBlue",
    },
    {
      title: "Affiches & supports print",
      examples: "Flyers, posters, dépliants, PLV, roll-up…",
      color: "bg-sunuOrange",
    },
    {
      title: "Branding & univers graphiques",
      examples: "Identité, couleurs, typographies, guidelines, visuels cohérents",
      color: "bg-sunuCyan",
    },
    {
      title: "Images & photographies",
      examples: "Shooting produits, photos corporate, mises en scène professionnelles",
      color: "bg-sunuBlue",
    },
    {
      title: "Vidéos & animations",
      examples: "Teasers, clips institutionnels, spots, vidéos expérimentales/IA",
      color: "bg-sunuOrange",
    },
    {
      title: "Design produit & Packaging",
      examples: "Étiquettes, packagings alimentaires, visuels produits, maquettes réalistes",
      color: "bg-sunuCyan",
    },
    {
      title: "Web & Digital",
      examples: "Sites web, interfaces, visuels digitaux, contenus optimisés",
      color: "bg-sunuBlue",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-sunuGray/20 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-sunuBlue">
            Notre <span className="text-sunuOrange">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des projets divers et variés, mais toujours autour d'une passion commune
          </p>
          <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
            Découvrez une sélection de nos travaux réalisés avec rigueur, créativité et précision.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-sunuBlue to-sunuCyan w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-sunuOrange mb-2">{stat.value}</h3>
              <p className="text-gray-600 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Portfolio Categories */}
        <div className="mb-16">
          <h3 className="text-3xl font-black text-center mb-10 text-gray-800">
            Nos <span className="text-sunuOrange">Domaines d'expertise</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-sunuOrange"
              >
                <div className={`${category.color} h-2`}></div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-gray-800">{category.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{category.examples}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-sunuBlue via-sunuCyan to-sunuOrange rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-black mb-4">Prêt à transformer votre vision en réalité ?</h3>
          <p className="text-lg md:text-xl mb-8 opacity-95">
            Rejoignez les entreprises et institutions qui nous font confiance pour leur croissance
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-sunuBlue px-8 py-4 rounded-full font-bold text-lg hover:bg-sunuOrange hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Discutons de votre projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
