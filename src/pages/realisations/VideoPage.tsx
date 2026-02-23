import Header from "@/components/Header";
import Footer from "@/components/Footer";

const VideoPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-40 pb-20 container mx-auto px-6 text-center">
        <h1 className="text-4xl font-black text-[#003366]">Vidéos & animations</h1>
        <p className="mt-4 text-gray-600">Nos réalisations arrivent bientôt.</p>
      </main>
      <Footer />
    </div>
  );
};

export default VideoPage;
