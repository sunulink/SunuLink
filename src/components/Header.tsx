import { useState } from "react";
const logo = "/logo-7.png";


const navLinks = [
  { href: "#about", label: "À propos" },
  { href: "#services", label: "Nos services" },
  { href: "#projets", label: "Nos réalisations" },
  // { href: "#blog", label: "Blog & Ressources" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="pt-8 px-4">
      <header className="bg-primary text-primary-foreground py-4 px-8 md:rounded-2xl rounded-sm shadow-elegant max-w-6xl mx-auto fixed top-0 md:top-4 left-1/2 -translate-x-1/2 w-full z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <a href="#">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden  md:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:opacity-80 transition-opacity">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors duration-200 shadow focus:outline-none relative"
            aria-label="Ouvrir le menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {/* Barre du haut */}
            <span
              className={`absolute left-2 right-2 top-4 block h-0.5 rounded bg-primary-foreground transition-all duration-300 ${menuOpen ? "rotate-45 top-5" : ""}`}
            ></span>
            {/* Barre du milieu */}
            <span
              className={`absolute left-2 right-2 top-5 block h-0.5 rounded bg-primary-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            ></span>
            {/* Barre du bas */}
            <span
              className={`absolute left-2 right-2 top-6 block h-0.5 rounded bg-primary-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 top-5" : ""}`}
            ></span>
          </button>
        </div>

        {/* Mobile Nav */}
        <nav
          className={`md:hidden flex flex-col items-center justify-center gap-4 text-sm font-medium mt-4 ${menuOpen ? "flex" : "hidden"}`}
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:opacity-80 py-2 px-4 font-medium text-center w-full" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
};

export default Header;