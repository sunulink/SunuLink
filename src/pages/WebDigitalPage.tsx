import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink, Globe } from "lucide-react";
import { Link } from "react-router-dom";

// Import direct du mockup depuis src/assets/MOCKUP/
import mockupBabel from "@/assets/MOCKUP/mockups-babel.png";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  mockupUrl: string;
  tags: string[];
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: "agence-babelle",
    title: "Agence Babelle",
    category: "Site Web Événementiel & Accueil Corporate",
    description: "Spécialisée dans l'accueil événementiel des salons professionnels internationaux et expositions. L'agence dispose d'un personnel parfaitement bilingue Français/Anglais.",
    mockupUrl: mockupBabel,
    tags: ["WordPress", "UI/UX Design", "Site Vitrine", "Multilingue"],
  }
];

const WebDigitalPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        {/* En-tête */}
        <section className="py-12 px-6 bg-gradient-to-b from-sunuOrange/10 to-white">
          <div className="container mx-auto max-w-7xl">
            <h1 className="text-4xl md:text-5xl font-black text-gray-800 uppercase mb-4" data-aos="fade-up">
              Réalisations <span className="text-sunuOrange">Web & Digital</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl" data-aos="fade-up" data-aos-delay="100">
              Découvrez nos projets de conception web, d'interfaces et de plateformes digitales sur mesure.
            </p>
          </div>
        </section>

        {/* Grille de Réalisations */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Visualisation du Mockup */}
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 h-64 md:h-72 overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={project.mockupUrl}
                      alt={`Mockup ${project.title}`}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Contenu et Détails */}
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-sunuOrange uppercase tracking-wider bg-sunuOrange/10 px-3 py-1.5 rounded-full inline-block mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-black text-gray-800 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Technologies / Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-xs font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Lien externe si disponible */}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sunuBlue font-bold hover:text-sunuOrange transition-colors text-sm"
                        >
                          Visiter le site <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Appel à l'action */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-7xl text-center">
            <div className="grain-texture bg-gradient-to-r from-sunuBlue via-sunuCyan to-sunuOrange text-white rounded-3xl p-10 shadow-xl">
              <h2 className="text-3xl font-black mb-4">Vous avez un projet Web & Digital ?</h2>
              <p className="text-lg opacity-95 mb-8 max-w-2xl mx-auto">
                Confiez-nous la création de votre plateforme, site vitrine ou application web sur mesure.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-sunuBlue px-8 py-3.5 rounded-full font-bold hover:bg-sunuOrange hover:text-white transition-all shadow-md"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WebDigitalPage;
