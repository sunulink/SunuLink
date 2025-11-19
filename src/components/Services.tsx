import { Briefcase, Megaphone, Calendar, Globe, Video, Brain, CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Cabinet de Conseil",
      color: "bg-sunuBlue",
      offerings: [
        "Diagnostic stratégique & organisationnel",
        "Plans de développement & accompagnement managérial",
        "Audit de communication et transformation digitale",
        "Coaching d'équipes dirigeantes & formations",
      ],
    },
    {
      icon: Megaphone,
      title: "Agence de Communication 360°",
      color: "bg-sunuOrange",
      offerings: [
        "Campagnes multicanal (digital, print, terrain)",
        "Création de contenus & storytelling de marque",
        "Stratégie de marque & positionnement",
        "Identité visuelle et charte graphique",
      ],
    },
    {
      icon: Calendar,
      title: "Service Événementiel",
      color: "bg-sunuCyan",
      offerings: [
        "Organisation d'événements corporate, institutionnels ou culturels",
        "Conception, logistique, production sur-mesure",
        "Coordination d'équipes techniques et scénographie",
        "Gestion complète de A à Z",
      ],
    },
    {
      icon: Globe,
      title: "Pôle Digital & SEO",
      color: "bg-sunuBlue",
      offerings: [
        "Création & refonte de sites web",
        "Référencement naturel et payant (SEO/SEA)",
        "Campagnes sponsorisées (Meta Ads, Google Ads)",
        "Automatisation marketing & CRM",
      ],
    },
    {
      icon: Video,
      title: "Production de Contenus",
      color: "bg-sunuOrange",
      offerings: [
        "Photos, vidéos, motion design, capsules brandées",
        "Rédaction & copywriting optimisés pour les réseaux",
        "Podcasts, webinaires, formats immersifs",
        "Contenus engageants et performants",
      ],
    },
    {
      icon: Brain,
      title: "Pôle IA & Innovation",
      color: "bg-sunuCyan",
      offerings: [
        "Intégration d'outils IA dans les stratégies client",
        "Formation à l'usage stratégique de l'IA",
        "Outils d'automatisation, reporting IA",
        "Création assistée par intelligence artificielle",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-sunuBlue">
            Nos <span className="text-sunuOrange">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une communication à 360° pour donner de l'élan à vos projets
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-sunuOrange hover:-translate-y-2"
            >
              <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-800 group-hover:text-sunuOrange transition-colors">
                {service.title}
              </h3>
              <ul className="space-y-3">
                {service.offerings.map((offering, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-sunuCyan flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{offering}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-sunuBlue to-sunuCyan rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-black mb-8 text-center">Notre Processus</h3>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-white/10 backdrop-blur-sm rounded-xl px-6 border-none">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">
                1. Audit & Recommandation Stratégique
              </AccordionTrigger>
              <AccordionContent className="text-white/90">
                Nous analysons votre situation actuelle, vos objectifs et votre marché pour élaborer une stratégie sur-mesure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/10 backdrop-blur-sm rounded-xl px-6 border-none">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">
                2. Co-construction & Planification
              </AccordionTrigger>
              <AccordionContent className="text-white/90">
                Nous travaillons avec vous pour définir le plan d'action, le rétroplanning et les livrables attendus.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white/10 backdrop-blur-sm rounded-xl px-6 border-none">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">
                3. Exécution & Suivi
              </AccordionTrigger>
              <AccordionContent className="text-white/90">
                Mise en œuvre de la stratégie avec des points de suivi réguliers et ajustements si nécessaire.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white/10 backdrop-blur-sm rounded-xl px-6 border-none">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">
                4. Rapport Final & Évaluation
              </AccordionTrigger>
              <AccordionContent className="text-white/90">
                Livraison des résultats, rapport détaillé et évaluation post-mission pour mesurer l'impact.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Services;
