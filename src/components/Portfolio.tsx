import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* TITRE DE TEST POUR VÉRIFIER LA MISE À JOUR */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-sunuBlue uppercase">
            TEST DE MISE À JOUR
          </h2>
          <p className="text-xl text-gray-500">
            Si vous voyez ce message, le fichier Portfolio.tsx est bien synchronisé.
          </p>
        </div>

        {/* STRUCTURE SIMPLIFIÉE */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* BLOC GAUCHE : REMPLACEMENT DU COMPTEUR */}
          <div className="md:col-span-4 bg-sunuOrange rounded-3xl p-10 flex flex-col justify-center text-white shadow-xl">
            <h3 className="text-4xl font-black mb-2 uppercase leading-none">
              PROJETS
            </h3>
            <p className="text-xl font-bold italic opacity-90">
              menés avec succès
            </p>
            <div className="mt-6 h-1 w-20 bg-white"></div>
          </div>

          {/* BLOC DROITE : ZONE IMAGE SIMPLE */}
          <div className="md:col-span-8 relative overflow-hidden rounded-3xl min-h-[350px] bg-sunuBlue shadow-xl group">
            <img 
              src="/portfolio/1.png" 
              alt="Test Portfolio" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 p-10 flex flex-col justify-end items-start text-white">
              <h4 className="text-4xl font-black uppercase mb-4">Portfolio Complet</h4>
              <p className="mb-6 text-lg font-medium italic">Découvrez nos réalisations par catégorie</p>
              <Link 
                to="/photo-shooting" 
                className="flex items-center gap-3 bg-white text-sunuBlue px-8 py-4 rounded-xl font-black uppercase shadow-lg"
              >
                Voir les projets
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Portfolio;
