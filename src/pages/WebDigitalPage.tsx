import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WebDigitalPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20 container mx-auto max-w-7xl px-6">
        <h1 className="text-4xl font-black text-gray-800 uppercase mb-6">
          Réalisations <span className="text-sunuOrange">Web & Digital</span>
        </h1>
        <p className="text-xl text-gray-600">
          Découvrez bientôt nos projets de sites web, interfaces et contenus digitaux optimisés 🚀.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default WebDigitalPage;
