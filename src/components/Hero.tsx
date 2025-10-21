import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

import heroImage from "@/assets/hero-image.jpg";
const logo = "/logo-7.png";

const Hero = () => {
  return (
    <div className="p-4 md:py-10 mt-10">
      <section className="relative min-h-[500px] bg-gradient-hero overflow-hidden rounded-2xl shadow-elegant max-w-6xl mx-auto">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Strategic consulting team"
            className="w-full h-full object-cover opacity-4"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        </div>

        <div className="relative px-8 py-12 flex items-center justify-between min-h-[500px]">
          <div className="max-w-xl text-white z-10">
            <div className="mb-8">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              STRATÉGIE CRÉATIVITÉ{" "}
              <span className="text-secondary">IMPACT</span>
            </h1>

            <p className="text-lg mb-8 opacity-90 leading-relaxed max-w-lg">
              Nous vous aidons à développer une stratégie marketing complète,
              de la création de votre identité visuelle à la mise en place
              d&apos;une stratégie digitale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-6 py-3 relative rounded-lg"
              >
                <a href="#services">📋 Nos services</a>
              </Button>

              {/* Dialog pour Nos réalisations */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-primary hover:bg-white hover:text-primary font-semibold px-6 py-3 rounded-lg"
                  >
                    📊 Nos réalisations
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Page non disponible</DialogTitle>
                    <DialogDescription>
                      La section <b>Nos réalisations</b> est en cours de
                      développement 🚀. Revenez bientôt !
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>

            {/* Socials */}
            <div className="flex items-center space-x-4">
              <div className="flex space-x-3">
                {/* <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="Facebook"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5" fill="currentColor"><path d="M29 0H3C1.3 0 0 1.3 0 3v26c0 1.7 1.3 3 3 3h13V20h-4v-5h4v-3.6C16 7.6 18.4 5 22.1 5c1.5 0 2.9.1 3.3.2v4h-2.3c-1.8 0-2.1.9-2.1 2.1V15h4.2l-.6 5h-3.6v12h7c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3z"/></svg>
                </a> */}

                <a
                  href="https://sn.linkedin.com/in/sunu-link-consulting-5b1871349"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="LinkedIn"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5" fill="currentColor"><path d="M29 0H3C1.3 0 0 1.3 0 3v26c0 1.7 1.3 3 3 3h26c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zM9.3 27H5.1V12.1h4.2V27zm-2.1-17c-1.3 0-2.1-.9-2.1-2.1 0-1.2.8-2.1 2.1-2.1s2.1.9 2.1 2.1c0 1.2-.8 2.1-2.1 2.1zm19.8 17h-4.2v-7.2c0-1.7-.6-2.8-2.1-2.8-1.1 0-1.7.7-2 1.4-.1.2-.1.5-.1.8V27h-4.2s.1-12.6 0-13.9h4.2v2c.6-.9 1.7-2.2 4.1-2.2 3 0 5.2 2 5.2 6.3V27z"/></svg>
                </a>

                <a
                  href="https://www.instagram.com/p/DN8Du8wkZtR/?utm_source=ig_web_copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="Instagram"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5" fill="currentColor"><path d="M16 7.3A8.7 8.7 0 1 0 24.7 16 8.7 8.7 0 0 0 16 7.3zm0 14.3A5.6 5.6 0 1 1 21.6 16 5.6 5.6 0 0 1 16 21.6zm8.8-14.6a2 2 0 1 1-2-2 2 2 0 0 1 2 2zm5.6 2.1a7.2 7.2 0 0 0-2-5.1A7.2 7.2 0 0 0 27.2 2a7.2 7.2 0 0 0-5.1-2A7.2 7.2 0 0 0 17 2a7.2 7.2 0 0 0-5.1 2A7.2 7.2 0 0 0 2 4.8a7.2 7.2 0 0 0-2 5.1A7.2 7.2 0 0 0 2 17a7.2 7.2 0 0 0 2 5.1A7.2 7.2 0 0 0 4.8 30a7.2 7.2 0 0 0 5.1 2A7.2 7.2 0 0 0 17 30a7.2 7.2 0 0 0 5.1-2A7.2 7.2 0 0 0 30 27.2a7.2 7.2 0 0 0 2-5.1A7.2 7.2 0 0 0 30 17a7.2 7.2 0 0 0-2-5.1A7.2 7.2 0 0 0 27.2 4.8zM16 26.2A10.2 10.2 0 1 1 26.2 16 10.2 10.2 0 0 1 16 26.2zm8.8-14.6a2 2 0 1 1-2-2 2 2 0 0 1 2 2z"/></svg>
                </a>

                {/* <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="TikTok"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5" fill="currentColor"><path d="M28.5 10.5a7.5 7.5 0 0 1-7.5-7.5h-4v20.5a3.5 3.5 0 1 1-3.5-3.5 3.5 3.5 0 0 1 1.5.3V16a7.5 7.5 0 1 0 7.5 7.5V13.5a11.5 11.5 0 0 0 6 1.7v-4z"/></svg>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
