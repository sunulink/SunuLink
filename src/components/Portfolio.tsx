import { Card } from "@/components/ui/card";
import { Briefcase, Users, Rocket, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioImages } from "@/data/homeData"; 

const Portfolio = () => {
  // Données pour les statistiques rapides
  const stats = [
    { icon: Briefcase, value: "50+", label: "Projets réalisés" },
    { icon: Users, value: "50+", label: "Clients satisfaits" },
    { icon: Rocket, value: "10+", label: "Secteurs d'activité" },
    { icon: TrendingUp, value: "95%", label: "Taux de satisfaction" },
  ];

  // Catégories d'expertises
  const categories = [
    { title: "Logo & Identité visuelle", examples: "Création de logos professionnels, chartes graphiques, pack branding complet", color: "bg-sunuBlue" },
    { title: "Affiches & supports print", examples: "Flyers, posters, dépliants, PLV, roll-up…", color: "bg-sunuOrange" },
    { title: "Branding & univers graphiques", examples: "Identité, couleurs, typographies, guidelines, visuels cohérents", color: "bg-sunuCyan" },
    { title: "Images & photographies", examples: "Shooting produits, photos corporate, mises en scène professionnelles", color: "bg-sunuBlue" },
    { title: "Vidéos & animations", examples: "Teasers, clips institutionnels, spots, vidéos expérimentales/IA", color: "bg-sunuOrange" },
    { title: "Design produit & Packaging", examples: "Étiquettes, packagings alimentaires, visuels produits, maquettes réalistes", color: "bg-sunuCyan" },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-sunuGray/20 to-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-sunuBlue uppercase tracking-tighter">
            Notre <span className="text-sunuOrange">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Découvrez une sélection de nos travaux réalisés avec rigueur, créativité et précision.
          </p>
        </div>

        {/* --- NOUVELLE SECTION : GRILLE DYNAMIQUE (STAT + DÉFILÉ) --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
          
          {/* Carte Gauche : Compteur de Projets (Jaune) */}
          <div className="md:col-span-4 bg-[#FFB800] rounded-[2.5rem] p-10 flex flex-col justify-center items-center text-center shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <span className="text-7xl md:text-9xl font-black text-white mb-2 leading-none">50+</span>
            <p className="text-2xl md:text-3xl font-black text-sunuBlue uppercase leading-tight italic">
              Projets <br/> menés avec <br/> succès
            </p>
          </div>

          {/* Carte Droite : Défilé d'images infini */}
          <div className="md:col-span-8 relative group overflow-hidden rounded-[2.5rem] min-h-[450px] shadow-2xl bg-gray-900">
            
            {/* Conteneur du défilé (Background animé) */}
            <div className="absolute inset-0 flex">
              <div className="flex animate-scroll-portfolio h-full w-max">
                {/* On duplique les images pour créer la boucle infinie */}
                {[...portfolioImages, ...portfolioImages].map((img, index) => (
                  <div key={index} className="w-[400px] h-full flex-shrink-0">
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-cover border-r-2 border-white/5" 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Overlay Gradient pour assurer la lisibilité du texte à gauche */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            
            {/* Contenu Texte et CTA */}
            <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-center items-start text-white z-10">
              <h3 className="text-5xl md:text-7xl font-black mb-2 uppercase leading-none tracking-tighter">
                Portfolio <br/> complet
              </h3>
              <p className="text-xl md:text-2xl font-bold mb-8 text-gray-200 italic">
                Découvrez nos réalisations par catégorie
              </p>
              
              <Link 
                to="/photo-shooting" 
                className="flex items-center gap-4 bg-sunuOrange text-white px-10 py-5 rounded-2xl font-black uppercase tracking-wider hover:bg-white hover:text-sunuBlue transition-all shadow-xl group/btn"
              >
                Voir nos réalisations
                <ArrowRight size={28} className="group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* --- GRILLE DES DOMAINES D'EXPERTISE --- */}
        <div className="mb-20">
          <h3 className="text-3xl font-black text-center mb-10 text-gray-800 uppercase italic">
            Nos <span className="text-sunuOrange">Domaines d'expertise</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-none bg-white group">
                {/* Barre de couleur supérieure animée */}
                <div className={`${category.color} h-2 transition-all duration-500 group-hover:h-4`}></div>
                <div className="p-8">
                  <h4 className="text-xl font-black mb-4 text-sunuBlue uppercase tracking-tight group-hover:text-sunuOrange transition-colors">
                    {category.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {category.examples}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* --- CTA FINAL --- */}
        <div className="bg-sunuBlue rounded-[3rem] p-10 md:p-20 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              PRÊT À TRANSFORMER <br/> VOTRE VISION EN RÉALITÉ ?
            </h3>
            <Link to="/contact" className="inline-block bg-sunuOrange text-white px-12 py-6 rounded-2xl font-black text-2xl hover:bg-white hover:text-sunuBlue transition-all shadow-xl transform hover:-translate-y-2 border-none">
              DISCUTONS DE VOTRE PROJET
            </Link>
          </div>
          {/* Décoration en arrière-plan */}
          <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-sunuOrange/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-sunuCyan/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* --- ANIMATION CSS --- */}
      <style>{`
        @keyframes scrollPortfolio {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-portfolio {
          animation: scrollPortfolio 40s linear infinite;
        }
        .animate-scroll-portfolio:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
