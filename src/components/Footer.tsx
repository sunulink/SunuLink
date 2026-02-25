import { useRef } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Send } from "lucide-react";
import SocialLinksBlock from "./SocialLinksBlock"; // Assurez-vous du chemin correct

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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "infosunulink@gmail.com",
      link: "mailto:infosunulink@gmail.com",
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
      value: "+221 76 726 38 42",
      link: "tel:+221767263842",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-sunuGray/20">
      <section id="contact" className="py-20">
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

              {/* Social Links - REMPLACÉ PAR COMPOSANT + FOND JAUNE/ORANGE */}
              <div className="bg-gradient-to-r from-sunuOrange to-yellow-500 rounded-2xl p-6 text-white shadow-lg">
                <h4 className="font-bold mb-4 text-lg">Suivez-nous sur les réseaux sociaux</h4>
                <div className="flex">
                   <SocialLinksBlock />
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
                  <label className="text-sm opacity-90 block mb-2">
                    Comment avez-vous connu SUNU LINK ?
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

      {/* Copyright Section */}
      <div className="py-8 border-t border-gray-200 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} <span className="text-sunuBlue font-bold">SUNU LINK</span> <span className="text-sunuOrange font-bold">CONSULTING</span>. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
