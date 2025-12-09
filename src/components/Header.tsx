import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const logo = "/logo-7.png";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/boost-my-pub", label: "Boost My Pub" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="grain-texture bg-gradient-blue-warm text-white py-4 px-8 shadow-elegant fixed top-0 left-0 right-0 w-full z-[9999] backdrop-blur-sm bg-opacity-95">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
              <img src={logo} alt="SUNU LINK Logo" className="h-12 w-auto" />
              {/* <div className="hidden md:block">
                <h1 className="text-xl font-black tracking-tight">SUNU LINK</h1>
                <p className="text-xs opacity-90 -mt-1">Progrès • Impact • Confiance</p>
              </div> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`hover:text-sunuOrange transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-sunuOrange after:transition-all after:duration-300 hover:after:w-full ${location.pathname === link.href ? "after:w-full" : ""
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-white text-sunuBlue px-6 py-2 rounded-full font-bold hover:bg-sunuOrange hover:text-white transition-all duration-300 shadow-md hover:shadow-lg ml-2"
            >
              Demander un devis
            </Link>
          </nav>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 shadow focus:outline-none relative"
            aria-label="Ouvrir le menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={`absolute left-2 right-2 top-4 block h-0.5 rounded bg-white transition-all duration-300 ${menuOpen ? "rotate-45 top-5" : ""}`}
            ></span>
            <span
              className={`absolute left-2 right-2 top-5 block h-0.5 rounded bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`absolute left-2 right-2 top-6 block h-0.5 rounded bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 top-5" : ""}`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`lg:hidden flex flex-col items-center justify-center gap-3 text-sm font-semibold mt-6 ${menuOpen ? "flex" : "hidden"}`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`hover:text-sunuOrange py-2 px-4 font-semibold text-center w-full transition-colors duration-300 ${location.pathname === link.href ? "text-sunuOrange" : ""
                }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-white text-sunuBlue px-6 py-2 rounded-full font-bold hover:bg-sunuOrange hover:text-white transition-all duration-300 shadow-md mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Demander un devis
          </Link>

          {/* Social Links */}
          <div className="flex gap-3 mt-4 pt-4 border-t border-white/20">
            <a
              href="https://www.facebook.com/share/19oMyxQApw/?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white flex items-center justify-center transition-all duration-300 group"
              aria-label="Facebook"
            >
              <img src="/facebook-176-svgrepo-com.svg" alt="Facebook" className="w-5 h-5 brightness-0 invert group-hover:invert-0" />
            </a>
            <a
              href="https://www.linkedin.com/company/sunulink-consulting/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white flex items-center justify-center transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <img src="/linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-5 h-5 brightness-0 invert group-hover:invert-0" />
            </a>
            <a
              href="https://www.instagram.com/sunulink_consulting?igsh=MTh6dndrcGlja2lrNQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white flex items-center justify-center transition-all duration-300 group"
              aria-label="Instagram"
            >
              <img src="/instagram-svgrepo-com.svg" alt="Instagram" className="w-6 h-6 brightness-0 invert group-hover:invert-0" />
            </a>
            <a
              href="https://wa.me/221767263842"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-green-600 flex items-center justify-center transition-all duration-300"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@sunulink.consulting?_t=zm-8zc2czdhhc9&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all duration-300"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
