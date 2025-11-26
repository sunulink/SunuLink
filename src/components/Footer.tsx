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
    <footer className="grain-texture bg-gradient-hero text-white">
      <div className="container mx-auto px-6 py-16">
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
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com/share/19oMyxQApw/?mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-sunuOrange flex items-center justify-center transition-all duration-300"
                  aria-label="Facebook"
                >
                  <img src="facebook-176-svgrepo-com.svg" alt="Facebook" className="w-5 h-5 brightness-0 invert" />
                </a>
                <a
                  href="https://www.linkedin.com/company/sunulink-consulting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-sunuCyan flex items-center justify-center transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <img src="linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-5 h-5 brightness-0 invert" />
                </a>
                <a
                  href="https://www.instagram.com/sunulink_consulting?igsh=MTh6dndrcGlja2lrNQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all duration-300"
                  aria-label="Instagram"
                >
                  <img src="instagram-svgrepo-com.svg" alt="Instagram" className="w-6 h-6 brightness-0 invert" />
                </a>
                <a
                  href="https://wa.me/221767263842"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5 brightness-0 invert" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@sunulink.consulting?_t=zm-8zc2czdhhc9&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-black flex items-center justify-center transition-all duration-300"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5 brightness-0 invert" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
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
