import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import heroImage from "@/assets/hero-image.jpg";
const logo = "/logo-7.png";

const Hero = () => {
  return (
    <div className="p-4 md:py-10 mt-10">
      <section className="relative min-h-[600px] bg-gradient-hero overflow-hidden rounded-2xl shadow-elegant max-w-7xl mx-auto">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Strategic consulting team"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        </div>

        <div className="relative px-6 md:px-16 py-16 md:py-20 z-10 flex items-center min-h-[600px]">
          <div className="max-w-4xl text-white">
            <div className="mb-8">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>

            {/* BLOC TEXTE AVEC HAUTEUR MINIMALE POUR ÉVITER LE LAYOUT SHIFT */}
            <div className="min-h-[200px] md:min-h-[250px] flex flex-col justify-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight uppercase">
                STRATÉGIE CRÉATIVITÉ <br />
                <span className="text-secondary drop-shadow-lg">Impact</span>
              </h1>

              {/* OPTIMISATION : Clarté maximale avec font-semibold, opacity-100 et drop-shadow-sm */}
              <p className="text-xl md:text-2xl font-semibold opacity-100 drop-shadow-sm leading-relaxed max-w-2xl mb-8">
                Nous vous aidons à développer une stratégie marketing complète,
                de la création de votre identité visuelle à la mise en place
                d'une stratégie digitale.
              </p>
            </div>

            {/* BLOC BOUTONS - MAINTENANT FIXE */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-6 text-lg rounded-xl shadow-lg transition-all"
              >
                <a href="#services">📋 Nos services</a>
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-6 text-lg rounded-xl transition-all"
                  >
                    📊 Nos réalisations
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Page non disponible</DialogTitle>
                    <DialogDescription>
                      La section <b>Nos réalisations</b> est en cours de développement 🚀.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
