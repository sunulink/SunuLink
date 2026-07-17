import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 md:pt-32">
        {/* 1. Hero Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-sunuGray/20">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 text-gray-800 leading-tight break-words">
              ÉCRIVEZ-NOUS,<br />
              APPELEZ-NOUS,<br />
              <span className="text-sunuOrange block sm:inline">RETROUVEZ-NOUS.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Pour toute demande d'information, collaboration ou devis, nous sommes disponibles et réactifs.
            </p>
          </div>
        </section>

        {/* 2. Partenaires Section */}
        <section className="py-8 px-4 sm:px-6 bg-white pb-16">
          <div className="container mx-auto max-w-7xl">
            <div className="grain-texture bg-gradient-to-r from-sunuBlue via-gray-500 to-sunuOrange rounded-3xl p-6 sm:p-12 shadow-2xl">
              <div className="text-center text-white">
                <h2 className="text-[22px] sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 leading-tight tracking-tight whitespace-normal">
                  DES COLLABORATIONS<br />FRUCTUEUSES
                </h2>
                <p className="text-base sm:text-xl opacity-95 mb-6 sm:mb-8 max-w-md mx-auto">
                  Découvrez et rencontrez nos partenaires.
                </p>
                <button 
                  type="button"
                  onClick={() => {
                    // Fait défiler directement vers le formulaire du Footer s'il possède un id ou vers le bas
                    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                  }}
                  className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 hover:bg-white hover:text-sunuBlue font-bold text-base sm:text-lg cursor-pointer border border-white/10 active:scale-95"
                >
                  Un partenariat ? Contactez-nous
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* C'est ce composant qui affiche désormais l'unique formulaire de contact de la page */}
      <Footer />
    </div>
  );
};

export default ContactPage;
