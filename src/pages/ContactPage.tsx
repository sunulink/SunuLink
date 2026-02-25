import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Send } from "lucide-react";
import emailjs from "emailjs-com";
import SocialLinksBlock from "@/components/SocialLinksBlock"; // Import du composant

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

                {/* NOUVELLE SECTION RÉSEAUX SOCIAUX - FOND JAUNE / ICÔNES BLANC */}
                <div 
                  className="grain-texture bg-gradient-to-br from-sunuOrange to-yellow-500 rounded-2xl p-8 text-white shadow-lg"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <h4 className="font-bold mb-6 text-xl">Suivez-nous sur les réseaux sociaux</h4>
                  <div className="flex justify-center md:justify-start">
                    {/* Le composant est appelé ici. Assurez-vous que les icônes dans le composant utilisent currentColor ou blanc */}
                    <SocialLinksBlock />
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="grain-texture bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuBlue rounded-3xl p-10 shadow-2xl" data-aos="fade-left">
                <h3 className="text-3xl font-black mb-8 text-white">Envoyez-nous un message</h3>
                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="prenom"
                      placeholder="Prénom*"
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 h-12"
                      required
                    />
                    <Input
                      name="nom"
                      placeholder="Nom*"
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 h-12"
                      required
                    />
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
