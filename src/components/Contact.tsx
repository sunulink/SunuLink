import { useRef } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Link as LinkIcon } from "lucide-react";

const Contact = () => {
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

  // MODIFICATION : Mise à jour de l'email et du premier numéro de téléphone (WhatsApp)
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@sunulink.sn",
      link: "mailto:contact@sunulink.sn",
    },
    {
      icon: Phone,
      title: "Téléphone / WhatsApp",
      value: "+221 71 008 59 15",
      link: "https://wa.me/221710085915", // Redirection directe vers WhatsApp
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+221 76 726 38 42",
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
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-sunuGray/20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-sunuBlue">
            Contactez<span className="text-sunuOrange">-nous</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Parlons de votre projet. Notre équipe est à votre écoute pour vous accompagner.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-black mb-6 text-gray-800">
                Écrivez-nous,<br />
                Appelez-nous,<br />
                <span className="text-sunuOrange">Retrouvez-nous.</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
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
                  target={info.title.includes("WhatsApp") ? "_blank" : undefined}
                  rel={info.title.includes("WhatsApp") ? "noopener noreferrer" : undefined}
                  className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-sunuOrange group"
                >
                  <div className="bg-gradient-to-br from-sunuBlue to-sunuCyan w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">{info.title}</h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-r from-sunuBlue to-sunuCyan rounded-2xl p-6 text-white">
              <h4 className="font-bold mb-4 text-lg">Suivez-nous sur les réseaux sociaux</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/19oMyxQApw/?mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/20 hover:bg-white hover:text-sunuBlue flex items-center justify-center transition-all duration-300"
                >
                  <img src="facebook-176-svgrepo-com.svg" alt="Facebook" className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/sunulink-consulting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/20 hover:bg-white hover:text-sunuBlue flex items-center justify-center transition-all duration-300"
                >
                  <img src="linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/sunulink_consulting?igsh=MTh6dndrcGlja2lrNQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/20 hover:bg-white hover:text-sunuBlue flex items-center justify-center transition-all duration-300"
                >
                  <img src="instagram-svgrepo-com.svg" alt="Instagram" className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <Card className="bg-gradient-to-br from-sunuBlue to-sunuCyan p-8 text-white border-0 shadow-2xl">
            <h3 className="text-2xl font-black mb-6">Envoyez-nous un message</h3>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="nom"
                  placeholder="Nom"
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20"
                  required
                />
                <Input
                  name="prenom"
                  placeholder="Prénom"
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20"
                  required
                />
              </div>

              <Input
                name="email"
                placeholder="Adresse email"
                type="email"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20"
                required
              />

              <Input
                name="telephone"
                placeholder="Téléphone"
                type="tel"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20"
              />

              <Input
                name="objet"
                placeholder="Objet du message"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20"
                required
              />

              <div>
                {/* MODIFICATION : Changement du label pour SUNULINK CONSULTING */}
                <label className="text-sm opacity-90 block mb-2">
                  Comment avez-vous connu SUNULINK CONSULTING ?
                </label>
                <Input
                  name="source"
                  placeholder="Réseaux sociaux, bouche-à-oreille, etc."
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20"
                />
              </div>

              <Textarea
                name="message"
                placeholder="Parlez-nous de votre projet..."
                rows={5}
                className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 resize-none"
                required
              />

              <Button
                type="submit"
                className="w-full bg-white text-sunuBlue hover:bg-sunuOrange hover:text-white font-bold py-6 text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Envoyer le message
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
