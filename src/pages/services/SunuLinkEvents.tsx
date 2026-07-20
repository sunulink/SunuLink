import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, CheckCircle, Sparkles, Shield, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SunuLinkEvents = () => {
  const features = [
    { title: "Conférences & Forums Élite", desc: "Organisation de sommets corporatifs et panels de haut niveau." },
    { title: "Cocktails & Galas Prestige", desc: "Des soirées exclusives clés en main pour marquer vos réussites." },
    { title: "Salons Professionnels B2B", desc: "Gestion des exposants, flux visiteurs et infrastructures techniques." },
    { title: "Activations de Marques", desc: "Des événements immersifs pour connecter votre public à vos produits." }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col font-sans">
      <Header />

      <main className="pt-32 flex-grow">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50 text-center">
          <div className="container mx-auto max-w-4xl">
            <div className="inline-flex items-center justify-center p-3 bg-pink-100 text-pink-600 rounded-2xl mb-6">
              <Calendar className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              SUNULINK <span className="text-sunuOrange">EVENTS</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              L'art de concevoir et piloter des rassemblements corporatifs ou grand public millimétrés avec une précision absolue.
            </p>
            
            {/* BOUTON AJUSTÉ (Taille normale et équilibrée) */}
            <div className="flex justify-center">
              <Link to="/contact">
                <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 rounded-full font-bold text-base transition-all duration-300 shadow-md hover:shadow-lg hover:opacity-95 transform hover:-translate-y-0.5">
                  <span>Planifier mon événement</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Détails des prestations */}
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-black text-center mb-12 text-gray-900">Nos solutions événementielles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex items-start space-x-4">
                  <div className="p-3 bg-pink-50 text-pink-500 rounded-xl mt-1">
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

        {/* Avantages */}
        <section className="py-16 px-6 bg-gray-50/50 border-t border-b border-gray-100">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-black mb-12 text-gray-900">L'excellence opérationnelle</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="p-4">
                <Sparkles className="w-8 h-8 text-pink-500 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Créativité unique</h4>
                <p className="text-sm text-gray-600">Scénographies sur mesure et concepts d'animation novateurs.</p>
              </div>
              <div className="p-4">
                <Shield className="w-8 h-8 text-pink-500 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Logistique rigoureuse</h4>
                <p className="text-sm text-gray-600">Gestion des plannings, traiteurs et prestataires au cordeau.</p>
              </div>
              <div className="p-4">
                <Clock className="w-8 h-8 text-pink-500 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Suivi en direct</h4>
                <p className="text-sm text-gray-600">Régie technique présente sur place pour un déroulement sans accroc.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SunuLinkEvents;
