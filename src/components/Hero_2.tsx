import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Shield } from "lucide-react";

const Hero_2 = () => {
  const pillars = [
    { icon: TrendingUp, text: "Progrès", color: "text-sunuBlue" },
    { icon: Sparkles, text: "Impact", color: "text-sunuOrange" },
    { icon: Shield, text: "Confiance", color: "text-sunuCyan" },
  ];

  return (
    <div className="p-4 md:py-10 mt-10">
      <section className="relative min-h-[600px] bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuOrange overflow-hidden rounded-2xl shadow-2xl max-w-7xl mx-auto">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sunuOrange/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative px-6 md:px-16 py-16 md:py-20 z-10 flex items-center min-h-[600px]">
          <div className="max-w-4xl text-white">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Cabinet de Conseil & Agence 360°</span>
            </div>

            {/* BLOC TEXTE HARMONISÉ */}
            <div className="min-h-[200px] md:min-h-[250px] flex flex-col justify-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight uppercase">
                SunuLink Consulting <br />
                <span className="text-white drop-shadow-lg">Votre partenaire 360°</span>
              </h1>

              {/* MODIFICATION : Passage de font-light à font-normal */}
              <p className="text-xl md:text-2xl font-normal opacity-95 leading-relaxed max-w-2xl mb-8">
                Nous accompagnons entreprises, institutions et entrepreneurs dans leur transformation stratégique, digitale et créative.
              </p>
            </div>

            {/* BLOC BOUTONS - ALIGNÉ */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services">
                <Button
                  size="lg"
                  className="bg-white text-sunuBlue hover:bg-sunuGray font-bold px-8 py-6 text-lg rounded-xl shadow-lg transition-all group"
                >
                  Découvrir nos services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-sunuBlue font-bold px-8 py-6 text-lg rounded-xl transition-all"
                >
                  Parlons de votre projet
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero_2;
