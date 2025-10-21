import { useRef } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xgdluls", // remplace par ton service ID
        "template_5x9tqf8", // remplace par ton template ID
        formRef.current,
        "KfF-FpO2K-0aYUFsS" // remplace par ta clé publique
      )
      .then(
        () => {
          alert("Message envoyé avec succès ✅");
          formRef.current.reset();
        },
        (error) => {
          alert("Erreur lors de l'envoi ❌ : " + error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-white md:px-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              ÉCRIVEZ-NOUS,<br />
              APPELEZ-NOUS,<br />
              RETROUVEZ-NOUS.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Notre équipe est à votre écoute pour discuter de vos projets.
            </p>
          </div>

          <Card className="bg-primary p-8 text-white border-0 shadow-elegant">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="nom"
                  placeholder="Nom"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  required
                />
                <Input
                  name="prenom"
                  placeholder="Prénom"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  required
                />
              </div>

              <Input
                name="email"
                placeholder="Email"
                type="email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                required
              />

              <Input
                name="telephone"
                placeholder="Téléphone"
                type="tel"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />

              <Input
                name="objet"
                placeholder="Objet du message"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />

              <div>
                <label className="text-sm opacity-80 block mb-2">
                  Comment avez-vous connu SunuLink ?
                </label>
                <Input
                  name="source"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
              </div>

              <Textarea
                name="message"
                placeholder="Votre message..."
                rows={4}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                required
              />

              <Button
                type="submit"
                className="w-full bg-white text-primary hover:bg-white/90 font-semibold py-3"
              >
                Envoyer
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
