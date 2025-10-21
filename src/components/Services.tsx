import { Button } from "@/components/ui/button";
const evens = "img/evenmentiel.jpg" 
const graph = "img/graphism.jpg" 

const Services = () => {
  const services = [
    {
      img: "https://cdn.pixabay.com/photo/2020/04/11/08/06/money-5029288_1280.jpg",
      title: "CONSEIL STRATÉGIQUE & PLANNING",
      description:
        "Nous vous accompagnons dans la définition de votre stratégie marketing et dans la planification de vos actions.",
    },
    {
      img: evens,
      title: "ÉVÉNEMENTIEL & ACTIVATIONS",
      description:
        "Organisation d'événements et activation de marque pour créer des expériences mémorables.",
    },
    {
      img: graph,
      title: "CRÉATION VISUELLE & CONTENUS",
      description:
        "Conception graphique, production de contenus visuels et développement de votre identité de marque.",
    },
    {
      img: "https://images.pexels.com/photos/33440157/pexels-photo-33440157.jpeg",
      title: "PRÉSENCE DIGITALE & SOCIAL",
      description:
        "Développement de votre présence en ligne et gestion de vos réseaux sociaux.",
    },
    {
      img: "https://cdn.pixabay.com/photo/2014/11/25/08/13/dollar-544956_1280.jpg",
      title: "DÉVELOPPEMENT COMMERCIAL",
      description:
        "Accompagnement dans le développement de vos ventes et l'optimisation de votre performance commerciale.",
    },
    {
      img: "https://cdn.pixabay.com/photo/2019/10/06/10/03/team-4529717_1280.jpg",
      title: "RELATIONS PUBLIQUES & MÉDIAS",
      description:
        "Gestion de votre image de marque et relations avec les médias pour optimiser votre visibilité.",
    },
  ];

  return (
     <section id="services" className="py-20  bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">UNE COMMUNICATION À 360°</h2>
          <p className="text-xl text-muted-foreground">POUR DONNER DE L'ÉLAN À VOS PROJETS</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-20 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="card glass text-white sm:max-w-sm bg-gradient-hero shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-xl overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <figure>
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body p-6">
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="mb-4 text-sm opacity-90 leading-relaxed">
                  {service.description}
                </p>
          
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
