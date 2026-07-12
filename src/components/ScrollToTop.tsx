import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // <-- Ajout de l'import pour suivre la navigation
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation(); // <-- Récupère le chemin de l'URL actuelle

  // Écouteur 1 : Remet la page tout en haut instantanément à chaque changement d'URL
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Se déclenche dès que "pathname" change (changement de page)

  // Écouteur 2 : Gère la visibilité du bouton en fonction du défilement
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Action de retour fluide en cliquant sur le bouton
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50" data-aos="fade-up" data-aos-duration="300">
          <Button
            onClick={scrollToTop}
            size="icon"
            className="w-12 h-12 rounded-full bg-sunuOrange hover:bg-sunuBlue text-white shadow-xl hover:shadow-[0_10px_25px_rgba(255,127,39,0.5)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
            aria-label="Retour en haut de page"
          >
            <ArrowUp className="w-6 h-6 animate-pulse" />
          </Button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
