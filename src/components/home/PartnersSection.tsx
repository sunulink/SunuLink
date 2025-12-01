import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { partners } from "@/data/homeData";

export const PartnersSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grain-texture bg-gradient-hero rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 text-white leading-tight">
                DES COLLABORATIONS <span className="text-secondary">FRUCTUEUSES</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90">
                Découvrez et rencontrez nos partenaires
              </p>
            </div>
            <div className="w-full md:w-auto">
              <Link to="/contact" className="block md:inline-block">
                <Button className="w-full md:w-auto bg-white text-sunuBlue hover:bg-sunuOrange hover:text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap">
                  Un partenariat ?
                </Button>
              </Link>
            </div>
          </div>

          {/* Partners Logos Grid */}
          <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg md:rounded-xl p-4 sm:p-6 md:p-8 flex items-center justify-center h-24 sm:h-28 md:h-32 hover:scale-110 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 shadow-md animate-fade-in"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <div className="text-center">
                    <p className="text-sunuBlue font-bold text-xs sm:text-sm md:text-base break-words">{partner}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
