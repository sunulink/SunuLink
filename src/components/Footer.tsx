const logo = "/logo-7.png";

const Footer = () => {
  const quickLinks = [
    { label: "À propos", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Stratégie & Conseil",
    "Branding & Identité visuelle",
    "Création visuelle & Contenus",
    "Digital, Web & SEO",
    "Production photo & vidéo",
    "Événementiel & Activation",
    "Développement commercial",
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-sunuBlue to-gray-900 text-white">
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="SUNU LINK Logo" className="h-12 w-auto" />
            </div>
            <p className="text-xs opacity-75">
              Cabinet de conseil & agence de communication 360° au service de votre croissance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-sunuOrange">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-sunuOrange transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-sunuOrange">Nos Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-sm opacity-80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-sunuOrange">Contact</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li>
                <span className="font-semibold block mb-1">Email</span>
                <a href="mailto:contact@sunulink.sn" className="hover:text-sunuOrange transition-colors">
                  contact@sunulink.sn
                </a>
              </li>
              <li>
                <span className="font-semibold block mb-1">Téléphone</span>
                <a href="tel:+221785938369" className="hover:text-sunuOrange transition-colors block">
                  +221 78 593 83 69
                </a>
                <a href="tel:+221767263842" className="hover:text-sunuOrange transition-colors block">
                  +221 76 726 38 42
                </a>
              </li>
              <li>
                <span className="font-semibold block mb-1">Liens officiels</span>
                <a href="https://linktr.ee/SunuLink_Consulting" target="_blank" rel="noopener noreferrer" className="hover:text-sunuOrange transition-colors">
                  linktr.ee/SunuLink_Consulting
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Slogan centré */}
        <div className="border-t border-white/20 pt-8 pb-6">
          <div className="text-center">
            <p className="text-sm opacity-90 leading-relaxed">
              Plus qu'un lien : un levier de Progrès, d'Impact et de Confiance
            </p>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-semibold opacity-80">Suivez-nous :</span>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/share/19oMyxQApw/?mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-sunuOrange flex items-center justify-center transition-all duration-300"
                  aria-label="Facebook"
                >
                  <img src="facebook-176-svgrepo-com.svg" alt="Facebook" className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/sunulink-consulting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-sunuCyan flex items-center justify-center transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <img src="linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/sunulink_consulting?igsh=MTh6dndrcGlja2lrNQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all duration-300"
                  aria-label="Instagram"
                >
                  <img src="instagram-svgrepo-com.svg" alt="Instagram" className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm opacity-80">
                © 2025 SUNU LINK SUARL. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      {/* <div className="bg-black/30 py-4">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs opacity-70">
            Fait avec passion à Dakar, Sénégal 🇸🇳
          </p>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
