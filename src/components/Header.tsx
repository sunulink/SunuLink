import { useState } from "react";
const logo = "/logo-7.png";

const navLinks = [
  { href: "#about", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="pt-8 px-4">
      <header className="bg-gradient-to-r from-sunuBlue via-sunuCyan to-sunuOrange text-white py-4 px-8 md:rounded-2xl rounded-sm shadow-elegant max-w-7xl mx-auto fixed top-0 md:top-4 left-1/2 -translate-x-1/2 w-full z-50 backdrop-blur-sm bg-opacity-95">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a href="#" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
              <img src={logo} alt="SUNU LINK Logo" className="h-12 w-auto" />
              <div className="hidden md:block">
                <h1 className="text-xl font-black tracking-tight">SUNU LINK</h1>
                <p className="text-xs opacity-90 -mt-1">Progrès • Impact • Confiance</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-sunuOrange transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-sunuOrange after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-white text-sunuBlue px-6 py-2 rounded-full font-bold hover:bg-sunuOrange hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Parlons-en
            </a>
          </nav>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 shadow focus:outline-none relative"
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
          className={`md:hidden flex flex-col items-center justify-center gap-3 text-sm font-semibold mt-6 ${menuOpen ? "flex" : "hidden"}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-sunuOrange py-2 px-4 font-semibold text-center w-full transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-white text-sunuBlue px-6 py-2 rounded-full font-bold hover:bg-sunuOrange hover:text-white transition-all duration-300 shadow-md mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Parlons-en
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
