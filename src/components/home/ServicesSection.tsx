import FlipCard from "@/components/ui/FlipCard";
import { services } from "@/data/homeData";

export const ServicesSection = () => {
  return (
    <section className="py-16 bg-white relative">
      {/* Grain overlay */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0 mix-blend-overlay opacity-10"
        style={{
          backgroundImage: `url("/noise.png")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-800" data-aos="fade-up">
          UNE COMMUNICATION À 360°<br />
          <span className="text-sunuOrange">POUR DONNER DE L'ÉLAN À VOS PROJETS</span>
        </h2>

        {/* Grid de 6 cards avec effet flip */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex justify-center"
            >
              <FlipCard
                front={
                  <div className="relative w-full h-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sunuBlue/80 via-sunuBlue/40 to-transparent flex items-end p-6">
                      <h3 className="text-white text-xl font-bold leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                }
                back={
                  <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {service.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
