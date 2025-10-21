import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hero_2 from "@/components/Hero_2";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500); 
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen  bg-white">
      <Header  />
      {!showContent ? (
        // Écran d’attente 
        <div className="text-center animate-fadeIn mt-50 pt-60 mt-auto py-20">
          <p className="text-lg  text-gray-600 mb-2 animate-pulse">
            Préparation de votre expérience...
          </p>
          <h1 className="text-4xl  font-bold text-orange-500 tracking-wide animate-pulse">
            Sunu<span className="text-orange-600">Link</span>
          </h1>
        </div>
      ) : (
        // Contenu principal
        
        <div className="min-h-screen animate-fadeIn">
          <Hero_2 />
          {/* <Hero /> */}
          <About />
          <Services />
          <Portfolio />
          {/* <Testimonials /> */}
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Index;
