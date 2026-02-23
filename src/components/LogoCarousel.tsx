import { useEffect, useRef } from "react";

// Logos de partenaires/clients
const partnerLogos = [
  { name: "FREHUP", logo: "/partners/LOGO FREHUP.png" },
  { name: "MEER JUS", logo: "/partners/LOGO MEER JUS.png" },
  { name: "NATAA", logo: "/partners/LOGO NATAA.png" },
  { name: "SUNULINK", logo: "/partners/LOGO SUNULINK.png" },
  { name: "ADJA FRANCE BABELLE", logo: "/partners/LOGO-ADJA-FRANCE-BABELLE.png" },
  { name: "FADDECO", logo: "/partners/LOGO-FADDECO.png" },
  { name: "INW Tech", logo: "/partners/LOGO-INW-Tech-1.png" },
  { name: "KING MOUSSA", logo: "/partners/LOGO-KING-MOUSSA.png" },
  { name: "MISS MBOURACKE", logo: "/partners/LOGO-MISS-MBOURACKE.png" },
  { name: "NGELNA", logo: "/partners/LOGO-NGELNA.png" },
  { name: "OUMOUL BACHAR", logo: "/partners/LOGO-OUMOUL-BACHAR.png" },
  { name: "SCI LA PROMOBILIERE", logo: "/partners/LOGO-SCI-LA-PROMOBILIERE.png" },
  { name: "SOFFLE DE VIE", logo: "/partners/LOGO-SOFFLE-DE-VIE.png" },
  { name: "SenHorti Group", logo: "/partners/LOGO-SenHorti-Group.png" },
  { name: "ZAL Multiservice", logo: "/partners/LOGO-ZAL-multiservice.png" },
  { name: "Bouche Bae", logo: "/partners/Logo-de-Bouche-Bae.png" },
  { name: "Femezon", logo: "/partners/femezon-logo 1.png" },
  { name: "GIE TELEMARCK", logo: "/partners/logo-GIE-TELEMARCK-2k.png" },
];

const LogoCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.8; // Un peu plus lent pour plus d'élégance

    const scroll = () => {
      scrollPosition += scrollSpeed;

      if (scrollPosition >= scrollContainer.scrollWidth / 3) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Dupliquer pour un défilement infini fluide
  const duplicatedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <div className="w-full overflow-hidden py-4">
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-8 overflow-hidden py-4"
        style={{ scrollBehavior: "auto" }}
      >
        {duplicatedLogos.map((partner, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-white rounded-lg md:rounded-xl p-4 sm:p-6 md:p-8 flex items-center justify-center h-24 sm:h-28 md:h-32 w-32 sm:w-40 md:w-48 shadow-md hover:scale-110 hover:-translate-y-2 transition-all duration-500"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
