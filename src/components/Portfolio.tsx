import { Card } from "@/components/ui/card";
import { Briefcase, Users, Rocket, TrendingUp } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { portfolioImages } from "@/data/homeData";

const Portfolio = () => {
  const stats = [
    { icon: Briefcase, value: "50+", label: "Projets réalisés" },
    { icon: Users, value: "50+", label: "Clients satisfaits" },
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
            Découvrez une sélection de nos travaux réalisés avec rigueur, créativité et précision.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
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

        {/* --- SECTION CARROUSEL ANIMÉ --- */}
        <div className="mb-24">
          <h3 className="text-3xl font-black text-center mb-10 text-gray-800">
            Dernières <span className="text-sunuOrange">Réalisations</span>
          </h3>
          
          <div className="relative px-4 md:px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent className="-ml-4">
                {portfolioImages.map((project, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                    <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-xl border-4 border-white">
                      {/* Image avec zoom au survol */}
                      <img
                        src={project.src}
                        alt={project.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Overlay avec texte au survol */}
                      <div className="absolute inset-0 bg-gradient-to-t from-sunuBlue/90 via-sunuBlue/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 text-white">
                        <span className="inline-block bg-sunuOrange text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          {project.category}
                        </span>
                        <h4 className="text-2xl font-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                          {project.title}
                        </h4>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Flèches de navigation (visibles sur desktop) */}
              <div className="hidden md:block">
                <CarouselPrevious className="-left-12 border-none bg-sunuBlue text-white hover:bg-sunuOrange transition-colors" />
                <CarouselNext className="-right-12 border-none bg-sunuBlue text-white hover:bg-sunuOrange transition-colors" />
              </div>
            </Carousel>
          </div>
        </div>

        {/* Domaines d'expertise (Les 6 cartes) */}
        <div className="mb-20">
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
        <div className="bg-gradient-to-r from-sunuBlue via-sunuCyan to-sunuOrange rounded-3xl p-8 md:p-16 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black mb-6">Prêt à transformer votre vision en réalité ?</h3>
            <p className="text-lg md:text-2xl mb-10 opacity-95 max-w-3xl mx-auto font-medium">
              Rejoignez les entreprises et institutions qui nous font confiance pour leur croissance.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-sunuBlue px-10 py-5 rounded-xl font-black text-xl hover:bg-sunuOrange hover:text-white transition-all duration-300 shadow-xl transform hover:scale-105"
            >
              Discutons de votre projet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
