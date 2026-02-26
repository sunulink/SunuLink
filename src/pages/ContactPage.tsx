import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32">
        {/* 1. Hero Section - Titre d'impact */}
        <section className="py-16 px-6 bg-gradient-to-b from-white to-sunuGray/20">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-800" data-aos="fade-up">
              ÉCRIVEZ-NOUS,<br />
              APPELEZ-NOUS,<br />
              <span className="text-sunuOrange">RETROUVEZ-NOUS.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Pour toute demande d'information, collaboration ou devis, nous sommes disponibles et réactifs.
            </p>
          </div>
        </section>

        {/* 2. Partenaires Section - Entre le Hero et le Footer */}
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grain-texture bg-gradient-to-r from-sunuBlue via-gray-500 to-sunuOrange rounded-3xl p-12 shadow-2xl" data-aos="zoom-in">
              <div className="text-center text-white">
                <h2 className="text-4xl font-black mb-6">
                  DES COLLABORATIONS<br />FRUCTUEUSES
                </h2>
                <p className="text-xl opacity-95 mb-8">
                  Découvrez et rencontrez nos partenaires.
                </p>
                <div className="inline-block bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full">
                  <p className="font-bold text-lg">Un partenariat ?</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 3. Footer - Il affiche automatiquement votre formulaire et vos coordonnées */}
      <Footer />
    </div>
  );
};

export default ContactPage;
