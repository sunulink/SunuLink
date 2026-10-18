
import FlipCard from "@/components/ui/FlipCard";
import { services } from "@/data/homeData";

export const ServicesSection = () => {
  return (
    <section className="relative bg-white py-12 md:py-16">
      {/* Grain overlay : conservé */}
      <div
        className="pointer-events-none absolute inset-0 z-0 h-full w-full mix-blend-overlay opacity-10"
        style={{
          backgroundImage: `url("/noise.png")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* En-tête de section */}
        <h2
          className="mb-10 px-2 text-center text-2xl font-black leading-tight text-[#1178B7] sm:text-3xl md:mb-16 md:text-4xl lg:text-5xl"
          data-aos="fade-up"
        >
          UNE COMMUNICATION À 360°
          <br />
          <span className="text-[#F59C27]">
            POUR DONNER DE L'ÉLAN À VOS PROJETS
          </span>
        </h2>

        {/* Les six cartes avec effet flip conservé */}
        <div className="mb-12 grid grid-cols-1 items-stretch gap-6 sm:gap-7 md:mb-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="relative flex justify-center rounded-[1.55rem] border border-[#1178B7]/25 bg-gradient-to-br from-[#1178B7]/10 via-white to-[#F59C27]/15 p-1.5 shadow-[0_5px_22px_rgba(17,120,183,0.08)]"
            >
              {/* Accent décoratif supérieur */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-5 top-0 z-10 h-1 w-14 rounded-b-full bg-[#F59C27]"
              />

              {/* Accent décoratif inférieur */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-5 z-10 h-1 w-14 rounded-t-full bg-[#1178B7]/70"
              />

              {/* FlipCard : son contenu et son comportement restent inchangés */}
              <FlipCard
                front={
                  <div className="relative h-full w-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-sunuBlue/80 via-sunuBlue/40 to-transparent p-4 sm:p-6">
                      <h3 className="text-lg font-bold leading-tight text-white sm:text-xl">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                }
                back={
                  <div className="flex h-full flex-col items-center justify-center p-4 text-center sm:p-6">
                    <h3 className="mb-3 text-xl font-bold text-white sm:mb-4 sm:text-2xl">
                      {service.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-white/90 sm:text-base">
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
