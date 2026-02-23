import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Link as LinkIcon, Send } from "lucide-react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_xgdluls",
        "template_5x9tqf8",
        formRef.current,
        "KfF-FpO2K-0aYUFsS"
      )
      .then(
        () => {
          alert("Message envoyé avec succès ✅ Nous vous recontacterons bientôt !");
          formRef.current?.reset();
        },
        (error) => {
          alert("Erreur lors de l'envoi ❌ : " + error.text);
        }
      );
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "infosunlink@gmail.com",
      link: "mailto:infosunlink@gmail.com",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+221 78 593 83 69",
      link: "tel:+221785938369",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+221 76 973 00 00",
      link: "tel:+221767263842",
    },
    // {
    //   icon: LinkIcon,
    //   title: "Liens officiels",
    //   value: "linktr.ee/SunuLink_Consulting",
    //   link: "https://linktr.ee/SunuLink_Consulting",
    // },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-white to-sunuGray/20">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-800" data-aos="fade-up">
              ÉCRIVEZ-NOUS,<br />
              APPELEZ-NOUS,<br />
              <span className="text-sunuOrange">RETROUVEZ-NOUS.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Pour toute demande d'information, collaboration ou devis, nous sommes disponibles et réactifs.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Info */}
              <div className="space-y-8">
                <div data-aos="fade-right">
                  <h2 className="text-3xl font-black mb-6 text-gray-800">
                    Parlons de votre projet
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Que vous soyez une entreprise, une institution ou un entrepreneur, nous sommes là
                    pour donner vie à vos ambitions stratégiques, digitales et créatives.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="grain-texture flex items-start space-x-4 p-6 bg-gradient-to-br from-sunuBlue to-sunuCyan text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                      data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1 text-lg">{info.title}</h4>
                        <p className="opacity-90">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="grain-texture bg-gradient-to-br from-sunuOrange to-yellow-500 rounded-2xl p-6 text-white">
                  <h4 className="font-bold mb-4 text-lg">Suivez-nous sur les réseaux sociaux</h4>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.facebook.com/share/19oMyxQApw/?mibextid=LQQJ4d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/20 hover:bg-white hover:text-sunuOrange flex items-center justify-center transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/sunulink-consulting/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/20 hover:bg-white hover:text-sunuOrange flex items-center justify-center transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/sunulink_consulting?igsh=MTh6dndrcGlja2lrNQ%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/20 hover:bg-white hover:text-sunuOrange flex items-center justify-center transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    </a>
                    <a
                      href="https://wa.me/221767263842"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/20 hover:bg-white hover:text-sunuOrange flex items-center justify-center transition-all duration-300"
                      aria-label="WhatsApp"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.tiktok.com/@sunulink.consulting?_t=zm-8zc2czdhhc9&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/20 hover:bg-white hover:text-sunuOrange flex items-center justify-center transition-all duration-300"
                      aria-label="TikTok"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="grain-texture bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuBlue rounded-3xl p-10 shadow-2xl" data-aos="fade-left">
                <h3 className="text-3xl font-black mb-8 text-white">Envoyez-nous un message</h3>
                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="prenom"
                        placeholder="Prénom*"
                        className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 h-12"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="nom"
                        placeholder="Nom*"
                        className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 h-12"
                        required
                      />
                    </div>
                  </div>

                  <Input
                    name="email"
                    placeholder="E-mail*"
                    type="email"
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 h-12"
                    required
                  />

                  <Input
                    name="telephone"
                    placeholder="Téléphone*"
                    type="tel"
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 h-12"
                    required
                  />

                  <Textarea
                    name="message"
                    placeholder="Commentaire ou message"
                    rows={6}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 resize-none"
                    required
                  />

                  <Button
                    type="submit"
                    className="w-full bg-white text-sunuBlue hover:bg-sunuOrange hover:text-white font-bold py-6 text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    Envoyer
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Partenaires Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-sunuGray/20 to-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grain-texture bg-gradient-to-r from-sunuBlue via-gray-500 to-sunuOrange rounded-3xl p-12 shadow-2xl">
              <div className="text-center text-white">
                <h2 className="text-4xl font-black mb-6">
                  DES COLLABORATIONS<br />FRUCTUEUSES
                </h2>
                <p className="text-xl opacity-95 mb-8">
                  Découvrez et rencontrez nos partenaires.
                </p>
                <div className="inline-block bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full">
                  <p className="font-bold text-lg">Un partenariat ?</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
