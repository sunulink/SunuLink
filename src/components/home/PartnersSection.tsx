import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { partners } from "@/data/homeData";

export const PartnersSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grain-texture bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuOrange rounded-3xl p-12 shadow-2xl" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
                DES COLLABORATIONS <span className="text-white">FRUCTUEUSES</span>
              </h2>
              <p className="text-xl text-white/90">
                Découvrez et rencontrez nos partenaires
              </p>
            </div>
            <div>
              <Link to="/contact">
                <Button className="bg-white text-sunuBlue hover:bg-sunuOrange hover:text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap">
                  Un partenariat ?
                </Button>
              </Link>
            </div>
          </div>

          {/* Partners Logos Grid */}
          <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300 shadow-md"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="text-center">
                    <p className="text-sunuBlue font-bold text-sm">{partner}</p>
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
