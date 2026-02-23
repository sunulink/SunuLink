import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Palette } from "lucide-react";

const LogoIdentitePage = () => {
  // Ceci est un exemple de données, on pourra remplacer les images par celles du site plus tard
  const projects = [
    { id: 1, title: "Logo Design Pro", image: "/portfolio/1.png" },
    { id: 2, title: "Charte Graphique Premium", image: "/portfolio/2.png" },
    { id: 3, title: "Identité Visuelle Corporate", image: "/portfolio/3.png" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* En-tête de la page */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-sunuOrange/10 p-3 rounded-xl">
              <Palette className="w-8 h-8 text-sunuOrange" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Logo & Identité visuelle</h1>
              <p className="text-gray-600">Création de logos professionnels et chartes graphiques complètes</p>
            </div>
          </div>

          {/* Grille de projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium px-6 py-2 border border-white rounded-full">
                      Voir le projet
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LogoIdentitePage;
