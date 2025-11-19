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
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sunuOrange/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        {/* Main Content */}
        <div className="relative px-6 md:px-16 py-16 md:py-20 z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-white space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>Cabinet de Conseil & Agence 360°</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="text-white drop-shadow-lg">
                    Plus qu'un lien:
                  </span>
                  <br />
                  <span className="text-white drop-shadow-lg">
                    un levier de
                  </span>
                  <br />
                  <span className="text-white drop-shadow-lg">
                    Progrès, d'Impact
                  </span>
                  <br />
                  <span className="text-white drop-shadow-lg">
                    et de Confiance
                  </span>
                </h1>

                {/* Tagline */}
                <p className="text-xl md:text-2xl font-light opacity-95 leading-relaxed">
                  Nous accompagnons entreprises, institutions et entrepreneurs dans leur transformation stratégique, digitale et créative.
                </p>

                {/* Pillars */}
                <div className="flex flex-wrap gap-4">
                  {pillars.map((pillar, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-white/20 transition-all duration-300"
                    >
                      <pillar.icon className={`w-5 h-5 ${pillar.color}`} />
                      <span className="font-semibold">{pillar.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="#services">
                    <Button
                      size="lg"
                      className="bg-white text-sunuBlue hover:bg-sunuGray font-bold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      Découvrir nos services
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                  <a href="#contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white bg-sunuBlue hover:text-white font-bold px-8 py-6 text-lg rounded-xl transition-all duration-300"
                    >
                      Parlons de votre projet
                    </Button>
                  </a>
                </div>

                {/* Social Media */}
                <div className="flex items-center space-x-4 pt-4">
                  <span className="text-sm font-semibold opacity-80">Suivez-nous :</span>
                  <div className="flex space-x-3">
                    <a
                      href="https://www.facebook.com/share/19oMyxQApw/?mibextid=LQQJ4d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white hover:text-sunuBlue transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <img src="facebook-176-svgrepo-com.svg" alt="Facebook" className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/sunulink-consulting/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white hover:text-sunuBlue transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <img src="linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/sunulink_consulting?igsh=MTh6dndrcGlja2lrNQ%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white hover:text-sunuBlue transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <img src="instagram-svgrepo-com.svg" alt="Instagram" className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Element */}
              <div className="hidden md:flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  {/* Animated circles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-72 h-72 border-4 border-white/30 rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 border-4 border-sunuOrange/40 rounded-full animate-pulse delay-75"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-56 h-56 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center p-8">
                      <div className="text-center space-y-2">
                        <h3 className="text-4xl font-black text-white">SUNU</h3>
                        <h3 className="text-4xl font-black text-sunuOrange">LINK</h3>
                        <div className="h-1 w-16 bg-white mx-auto rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero_2;
