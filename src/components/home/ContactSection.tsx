import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, XCircle, X } from "lucide-react";
import emailjs from "emailjs-com";
import { contactInfo } from "@/data/homeData";

export const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<{
    show: boolean;
    success: boolean;
    message: string;
  }>({ show: false, success: true, message: "" });
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    emailjs
      .sendForm(
        "service_xgdluls",
        "template_5x9tqf8",
        formRef.current,
        "KfF-FpO2K-0aYUFsS"
      )
      .then(
        () => {
          setStatus({
            show: true,
            success: true,
            message: "Votre message a été transmis avec succès. Notre équipe vous recontactera dans les plus brefs délais.",
          });
          formRef.current?.reset();
          setIsSending(false);
        },
        (error) => {
          setStatus({
            show: true,
            success: false,
            message: "Une erreur technique est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement.",
          });
          console.error(error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-b from-sunuGray/10 to-white relative">
      {/* MODALE DE CONFIRMATION ÉLÉGANTE */}
      {status.show && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center relative animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setStatus({ ...status, show: false })}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="flex justify-center mb-6">
              {status.success ? (
                <div className="bg-green-100 p-4 rounded-full">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
              ) : (
                <div className="bg-red-100 p-4 rounded-full">
                  <XCircle className="w-12 h-12 text-red-600" />
                </div>
              )}
            </div>
            
            <h3 className="text-2xl font-black text-gray-800 mb-2 uppercase tracking-tight">
              {status.success ? "Merci !" : "Oups..."}
            </h3>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              {status.message}
            </p>
            
            <Button 
              onClick={() => setStatus({ ...status, show: false })}
              className={`w-full py-6 rounded-xl font-bold uppercase transition-all ${
                status.success ? "bg-sunuBlue hover:bg-sunuOrange" : "bg-red-500 hover:bg-red-600"
              } text-white shadow-lg`}
            >
              Fermer
            </Button>
          </div>
        </div>
      )}

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Colonne Gauche - Infos (Code identique conservé) */}
          <div className="space-y-6 md:space-y-8">
            <div data-aos="fade-right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-gray-800 leading-tight">
                <span className="text-sunuOrange">ÉCRIVEZ-NOUS,</span><br />
                <span className="text-sunuBlue">APPELEZ-NOUS</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Que vous soyez une entreprise, une institution ou un entrepreneur, nous sommes là
                pour donner vie à vos ambitions stratégiques, digitales et créatives.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="grain-texture flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gradient-to-br from-sunuBlue to-sunuCyan text-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  <div className="bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-sunuBlue" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-bold mb-1 text-base sm:text-lg uppercase tracking-tight">{info.title}</h4>
                    <p className="opacity-90 text-sm sm:text-base break-words font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
            {/* ... Reste des réseaux sociaux identiques ... */}
          </div>

          {/* Colonne Droite - Formulaire */}
          <div className="grain-texture bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuBlue rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl" data-aos="fade-left">
            <h3 className="text-2xl sm:text-3xl font-black mb-6 md:mb-8 text-white uppercase tracking-tighter">Envoyez-nous un message</h3>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  name="prenom"
                  placeholder="Prénom*"
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 h-11 sm:h-12 rounded-xl"
                  required
                />
                <Input
                  name="nom"
                  placeholder="Nom*"
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 h-11 sm:h-12 rounded-xl"
                  required
                />
              </div>

              <Input
                name="email"
                placeholder="E-mail*"
                type="email"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 h-11 sm:h-12 rounded-xl"
                required
              />

              <Input
                name="telephone"
                placeholder="Téléphone*"
                type="tel"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 h-11 sm:h-12 rounded-xl"
                required
              />

              <Textarea
                name="message"
                placeholder="Commentaire ou message"
                rows={5}
                className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 resize-none rounded-xl"
                required
              />

              <Button
                type="submit"
                disabled={isSending}
                className="w-full bg-white text-sunuBlue hover:bg-sunuOrange hover:text-white font-black py-5 sm:py-7 text-base sm:text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group uppercase tracking-widest"
              >
                {isSending ? "Envoi en cours..." : "Envoyer le message"}
                {!isSending && <Send className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
