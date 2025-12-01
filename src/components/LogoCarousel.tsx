import { useEffect, useRef } from "react";

// Exemples de logos de partenaires/clients
const partnerLogos = [
  { name: "Partenaire 1", logo: "/logos/partner1.png" },
  { name: "Partenaire 2", logo: "/logos/partner2.png" },
  { name: "Partenaire 3", logo: "/logos/partner3.png" },
  { name: "Partenaire 4", logo: "/logos/partner4.png" },
  { name: "Partenaire 5", logo: "/logos/partner5.png" },
  { name: "Partenaire 6", logo: "/logos/partner6.png" },
];

const LogoCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame

    const scroll = () => {
      scrollPosition += scrollSpeed;

      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  // Dupliquer les logos pour un défilement infini
  const duplicatedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <div className="w-full overflow-hidden bg-white/10 backdrop-blur-sm py-8 rounded-xl">
      <div
        ref={scrollRef}
        className="flex gap-12 overflow-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        {duplicatedLogos.map((partner, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 h-28 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center p-6 hover:bg-white/30 transition-all duration-300"
          >
            <div className="text-white text-base font-semibold text-center">
              {partner.name}
            </div>
            {/* Remplacez par <img src={partner.logo} alt={partner.name} /> quand vous aurez les vrais logos */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
