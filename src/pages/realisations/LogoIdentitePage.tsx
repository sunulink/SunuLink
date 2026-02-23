import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LogoIdentitePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-sunuBlue mb-6">
          LOGO & <span className="text-sunuOrange">IDENTITÉ VISUELLE</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Découvrez nos créations de logos et chartes graphiques professionnelles. 
          Le contenu détaillé arrive très bientôt.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default LogoIdentitePage;
