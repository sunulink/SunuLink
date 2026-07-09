import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const scrollToContact = () => {
    // Recherche l'élément du formulaire de contact dans le DOM et fait défiler la page
    const contactSection = document.getElementById("contact") || document.getElementById("contact-section") || document.querySelector("footer");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 md:pt-32">
        {/* 1. Hero Section - Titre d'impact */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-sunuGray/20">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 text-gray-800 leading-tight break-words" data-aos="fade-up">
              ÉCRIVEZ-NOUS,<br />
              APPELEZ-NOUS,<br />
              <span className="text-sunuOrange block sm:inline">RETROUVEZ-NOUS.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2" data-aos="fade-up" data-aos-delay="100">
              Pour toute demande d'information, collaboration ou devis, nous sommes disponibles et réactifs.
            </p>
          </div>
        </section>

        {/* 2. Partenaires Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grain-texture bg-gradient-to-r from-sunuBlue via-gray-500 to-sunuOrange rounded-3xl p-6 sm:p-12 shadow-2xl" data-aos="zoom-in">
              <div className="text-center text-white">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 leading-tight break-words">
                  DES COLLABORATIONS<br />FRUCTUEUSES
                </h2>
                <p className="text-base sm:text-xl opacity-95 mb-6 sm:mb-8 max-w-md mx-auto">
                  Découvrez et rencontrez nos partenaires.
                </p>
                <button 
                  onClick={scrollToContact}
                  className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 hover:bg-white hover:text-sunuBlue font-bold text-base sm:text-lg cursor-pointer border border-white/10 active:scale-95"
                >
                  Un partenariat ?
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
