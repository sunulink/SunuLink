import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Film, CheckCircle, Video, Layers, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SunuLinkProd = () => {
  const features = [
    { title: "Films Institutionnels", desc: "Valorisez votre image de marque et votre culture d'entreprise." },
    { title: "Publicités & Spots", desc: "Des formats percutants conçus pour maximiser vos conversions." },
    { title: "Motion Design", desc: "Des animations graphiques modernes pour expliquer vos concepts complexes." },
    { title: "Prises de vues Drone", desc: "Prenez de la hauteur avec des images aériennes en haute définition." }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col font-sans">
      <Header />

      <main className="pt-32 flex-grow">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50 text-center">
          <div className="container mx-auto max-w-4xl">
            <div className="inline-flex items-center justify-center p-3 bg-amber-100 text-amber-600 rounded-2xl mb-6">
              <Film className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              SUNULINK <span className="text-sunuOrange">PROD</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Donnez une dimension cinématographique, moderne et mémorable à votre univers visuel grâce à notre expertise audiovisuelle.
            </p>
            
            {/* BOUTON AJUSTÉ (Taille normale et équilibrée) */}
            <div className="flex justify-center">
              <Link to="/contact">
                <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-full font-bold text-base transition-all duration-300 shadow-md hover:shadow-lg hover:opacity-95 transform hover:-translate-y-0.5">
                  <span>Lancer ma production</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Détails des prestations */}
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-black text-center mb-12 text-gray-900">Nos expertises audiovisuelles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex items-start space-x-4">
                  <div className="p-3 bg-orange-50 text-sunuOrange rounded-xl mt-1">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi nous faire confiance */}
        <section className="py-16 px-6 bg-gray-50/50 border-t border-b border-gray-100">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-black mb-12 text-gray-900">Pourquoi choisir SunuLink Prod ?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="p-4">
                <Video className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Matériel Pro</h4>
                <p className="text-sm text-gray-600">Caméras de pointe, optiques cinéma et captation audio premium.</p>
              </div>
              <div className="p-4">
                <Layers className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Post-Production</h4>
                <p className="text-sm text-gray-600">Étalonnage colorimétrique et sound design soignés.</p>
              </div>
              <div className="p-4">
                <Users className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Équipe Dédiée</h4>
                <p className="text-sm text-gray-600">Réalisateurs, cadreurs et monteurs chevronnés à votre service.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SunuLinkProd;
