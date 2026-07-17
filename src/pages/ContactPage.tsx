import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle, Send, Mail, Phone, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    objet: "",
    source: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const envoyerMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      prenom: formData.prenom,
      nom: formData.nom,
      email: formData.email,
      telephone: formData.telephone || "Non renseigné",
      objet: formData.objet || "Demande de contact générale",
      source: formData.source || "Non spécifiée",
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_ktbwzv5", // Votre nouvel ID de service SMTP mis à jour
        "template_pabmg78",
        templateParams,
        "ShXDBB_RTc_F-EWm1"
      );
      setIsSuccess(true);
    } catch (error) {
      console.error("Erreur envoi contact:", error);
      alert("Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const inputStyle = "w-full bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/60 text-base py-6 rounded-xl transition-all";

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 md:pt-32">
        {/* 1. Hero Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-sunuGray/20">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 text-gray-800 leading-tight break-words">
              ÉCRIVEZ-NOUS,<br />
              APPELEZ-NOUS,<br />
              <span className="text-sunuOrange block sm:inline">RETROUVEZ-NOUS.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Pour toute demande d'information, collaboration ou devis, nous sommes disponibles et réactifs.
            </p>
          </div>
        </section>

        {/* 2. Partenaires Section */}
        <section className="py-8 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grain-texture bg-gradient-to-r from-sunuBlue via-gray-500 to-sunuOrange rounded-3xl p-6 sm:p-12 shadow-2xl">
              <div className="text-center text-white">
                <h2 className="text-[22px] sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 leading-tight tracking-tight whitespace-normal">
                  DES COLLABORATIONS<br />FRUCTUEUSES
                </h2>
                <p className="text-base sm:text-xl opacity-95 mb-6 sm:mb-8 max-w-md mx-auto">
                  Découvrez et rencontrez nos partenaires.
                </p>
                <button 
                  type="button"
                  onClick={scrollToContact}
                  className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 hover:bg-white hover:text-sunuBlue font-bold text-base sm:text-lg cursor-pointer border border-white/10 active:scale-95"
                >
                  Un partenariat ? Contactez-nous
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Section Formulaire et Infos de Contact */}
        <section id="contact-section" className="py-16 px-4 sm:px-6 scroll-mt-24 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Infos pratiques à gauche */}
              <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
                <div>
                  <h2 className="text-3xl font-black text-gray-800 mb-4">Contactez SUNULINK</h2>
                  <p className="text-gray-600">
                    Notre équipe commerciale et technique reste à votre entière disposition pour répondre à toutes vos questions.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sunuOrange/10 text-sunuOrange flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Email</p>
                      <a href="mailto:contact@sunulink.sn" className="text-gray-800 font-semibold hover:underline">contact@sunulink.sn</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sunuBlue/10 text-sunuBlue flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Téléphone</p>
                      <a href="tel:+221338000000" className="text-gray-800 font-semibold hover:underline">+221 33 800 00 00</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Adresse</p>
                      <p className="text-gray-800 font-semibold">Dakar, Sénégal</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulaire à droite */}
              <div className="lg:col-span-7">
                {isSuccess ? (
                  <div className="grain-texture bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-center text-white shadow-2xl h-full flex flex-col justify-center items-center">
                    <CheckCircle className="w-16 h-16 mb-4" />
                    <h3 className="text-2xl font-black mb-2">Message envoyé !</h3>
                    <p className="opacity-90 max-w-sm mb-6">
                      Merci {formData.prenom}. Notre équipe a bien reçu votre message et vous répondra sous 24 heures.
                    </p>
                    <Button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="bg-white text-green-600 hover:bg-gray-100 font-bold px-6 py-3 rounded-xl"
                    >
                      Envoyer un autre message
                    </Button>
                  </div>
                ) : (
                  <div className="grain-texture bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuBlue rounded-3xl p-6 sm:p-10 shadow-2xl">
                    <form onSubmit={envoyerMessage} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input name="prenom" value={formData.prenom} onChange={handleInputChange} placeholder="Prénom" className={inputStyle} required />
                        <Input name="nom" value={formData.nom} onChange={handleInputChange} placeholder="Nom" className={inputStyle} required />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className={inputStyle} required />
                        <Input name="telephone" type="tel" value={formData.telephone} onChange={handleInputChange} placeholder="Téléphone (optionnel)" className={inputStyle} />
                      </div>

                      <Input name="objet" value={formData.objet} onChange={handleInputChange} placeholder="Objet du message" className={inputStyle} required />
                      <Input name="source" value={formData.source} onChange={handleInputChange} placeholder="Comment nous avez-vous connus ? (ex: LinkedIn, Recommandation...)" className={inputStyle} />

                      <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Votre message..." rows={5} className="w-full bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/60 text-base rounded-xl p-4 transition-all" required />

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-sunuOrange text-white hover:bg-sunuOrange/90 py-6 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? "Envoi en cours..." : "Envoyer mon message"}
                        <Send className="w-4 h-4" />
                      </Button>
                    </form>
                  </div>
                )}
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
