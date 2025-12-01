import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import emailjs from "emailjs-com";
import { contactInfo } from "@/data/homeData";

export const ContactSection = () => {
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

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-sunuGray/10 to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-800">
                <span className="text-sunuOrange">ÉCRIVEZ-NOUS,</span><br />
                <span className="text-sunuBlue">APPELEZ-NOUS</span>
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
            <div className="grain-texture bg-gradient-to-br from-sunuOrange to-yellow-500 rounded-2xl p-6 text-white" data-aos="fade-right" data-aos-delay="400">
              <h4 className="font-bold mb-4 text-lg">Suivez-nous sur les réseaux sociaux</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com/share/19oMyxQApw/?mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/20 hover:bg-white hover:text-sunuOrange flex items-center justify-center transition-all duration-300"
                  aria-label="Facebook"
                >
                  <img src="/facebook-176-svgrepo-com.svg" alt="Facebook" className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/sunulink-consulting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/20 hover:bg-white hover:text-sunuOrange flex items-center justify-center transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <img src="/linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/sunulink_consulting?igsh=MTh6dndrcGlja2lrNQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/20 hover:bg-white hover:text-sunuOrange flex items-center justify-center transition-all duration-300"
                  aria-label="Instagram"
                >
                  <img src="/instagram-svgrepo-com.svg" alt="Instagram" className="w-7 h-7" />
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
  );
};

export default ContactSection;
