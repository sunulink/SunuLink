import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink, Code2, Sparkles } from "lucide-react";
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
    description:
      "Spécialisée dans l'accueil événementiel des salons professionnels internationaux et expositions. L'agence dispose d'un personnel parfaitement bilingue Français/Anglais.",
    mockupUrl: mockupBabel,
    tags: ["UI/UX Design", "Site Vitrine", "Multilingue"],
  },
];

const WebDigitalPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="pt-20">
        {/* HERO SECTION - Hauteur 400px, Image d'arrière-plan pleine largeur sans fond noir */}
        <section className="relative w-full h-[400px] flex items-center overflow-hidden">
          {/* Image de fond digitale couvrant 100% de la largeur */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2000')",
            }}
          />

          {/* Superposition légère pour garantir la lisibilité du texte */}
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />

          <div className="container mx-auto max-w-7xl px-6 relative z-10 text-center md:text-left">
            {/* Tag Badge */}
            <div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-sunuCyan mb-4"
              data-aos="fade-down"
            >
              <Code2 className="w-4 h-4 text-sunuCyan" />
              <span>Portfolio Web & Ingénierie Digitale</span>
            </div>

            {/* Titre aux couleurs officielles */}
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4 leading-tight"
              data-aos="fade-up"
            >
              <span className="text-white">RÉALISATIONS </span>
              <span className="text-sunuCyan">WEB & </span>
              <span className="text-sunuOrange">DIGITAL</span>
            </h1>

            <p
              className="text-base md:text-lg text-slate-200 max-w-2xl leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Découvrez nos plateformes sur mesure, sites vitrines optimisés
              et interfaces web développés avec les plus hauts standards.
            </p>
          </div>
        </section>

        {/* SECTION MOCKUPS ET PROJETS */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col gap-12">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Mockup Grand Format */}
                  <div className="lg:col-span-7 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 p-6 md:p-10 flex items-center justify-center relative group min-h-[350px] md:min-h-[450px]">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src={project.mockupUrl}
                        alt={`Mockup ${project.title}`}
                        className="w-full max-h-[480px] object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                  </div>

                  {/* Détails du Projet */}
                  <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between bg-white">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs font-extrabold text-sunuOrange uppercase tracking-wider bg-sunuOrange/10 px-3.5 py-1.5 rounded-full">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-3xl font-black text-slate-900 mb-4">
                        {project.title}
                      </h3>

                      <p className="text-slate-600 leading-relaxed text-base mb-8">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <div className="mb-8">
                        <p className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3">
                          Technologies & Compétences
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sunuBlue font-bold hover:text-sunuOrange transition-colors text-sm group"
                        >
                          <span>Visiter le projet</span>
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION CTA - Couleurs officielles en dégradé & bouton à fond blanc au survol */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-7xl text-center">
            <div className="bg-gradient-to-r from-sunuBlue via-sunuCyan to-sunuOrange text-white rounded-3xl p-10 md:p-14 shadow-2xl">
              <div className="inline-flex items-center justify-center p-3 bg-white/15 backdrop-blur-md rounded-2xl mb-6">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Vous avez un projet Web & Digital ?
              </h2>
              <p className="text-lg opacity-95 mb-8 max-w-2xl mx-auto text-white">
                Confiez-nous la création de votre plateforme, site vitrine ou
                application web sur mesure.
              </p>
              
              {/* Bouton : Couleur orange/bleue par défaut, fond blanc au survol */}
              <Link
                to="/devis"
                className="inline-block bg-sunuOrange text-white border-2 border-transparent px-10 py-4 rounded-full font-black transition-all duration-300 shadow-lg hover:bg-white hover:text-sunuBlue hover:border-white hover:shadow-2xl hover:-translate-y-0.5"
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
