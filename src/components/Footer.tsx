const logo = "/logo-7.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src={logo} alt="Logo" className="h-10  w-auto" />
          </div>
          <p className="text-sm opacity-80">
            © 2025 SunuLink Consulting. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;