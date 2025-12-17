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
            className="flex-shrink-0 w-32 h-20 sm:w-40 sm:h-24 md:w-48 md:h-28 bg-white rounded-lg flex items-center justify-center p-3 sm:p-4 md:p-5 hover:scale-105 transition-all duration-300 shadow-md"
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
