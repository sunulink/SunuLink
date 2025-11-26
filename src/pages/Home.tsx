import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LogoCarousel from "@/components/LogoCarousel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Mail, Phone, Send, Star, Eye, Sparkles, Crown, Check, Monitor } from "lucide-react";
import emailjs from "emailjs-com";
import "../components/Hero_2.css";

const images = [
  {
    src: "/img/IA.jpg",
    alt: "Intelligence Artificielle",
    type: "cover",
    text: "Nous intégrons l'IA au service de votre efficacité et créativité. Nos solutions intelligentes optimisent vos performances et enrichissent votre stratégie.",
  },
];

// Services data avec images et textes
const services = [
  {
    id: 1,
    title: "Stratégie & Conseil",
    image: "/img/strategie.jpg",
    description: "Nous construisons avec vous une vision claire et durable de votre communication. De l'analyse à l'action, nous transformons vos ambitions en plans stratégiques mesurables."
  },
  {
    id: 2,
    title: "Création Visuelle & Contenus",
    image: "/img/graphism.jpg",
    description: "Nous donnons forme et émotion à vos idées. Chaque visuel, chaque mot et chaque concept sont pensés pour captiver, inspirer et engager."
  },
  {
    id: 3,
    title: "Branding & Positionnement",
    image: "/img/strategie.jpg",
    description: "Nous révélons la force émotionnelle et stratégique de votre marque. De la conception à la mise en œuvre, nous façonnons une identité cohérente et différenciante."
  },
  {
    id: 4,
    title: "Digital, Réseaux & SEO",
    image: "/img/graphism.jpg",
    description: "Nous façonnons votre présence digitale avec méthode, créativité et performance. De la conception web à la gestion de vos réseaux, nous bâtissons votre empreinte numérique."
  },
  {
    id: 5,
    title: "Développement Commercial & Partenariats",
    image: "/img/strategie.jpg",
    description: "Nous transformons vos opportunités en résultats concrets. Nos experts développent des stratégies qui renforcent vos ventes et partenariats."
  },
  {
    id: 6,
    title: "Événementiel & Expérientiel",
    image: "/img/evenmentiel.jpg",
    description: "Nous créons des événements qui racontent votre histoire et laissent une empreinte durable dans les esprits. De la conception à la mise en scène, chaque détail compte."
  }
];

// Contact info data
const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@sunulink.sn",
    link: "mailto:contact@sunulink.sn",
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "+221 78 593 83 69",
    link: "tel:+221785938369",
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "+221 76 726 38 42",
    link: "tel:+221767263842",
  },
];

// Composant FlipCard
const FlipCard: React.FC<{ front: React.ReactNode; back: React.ReactNode }> = ({
  front,
  back,
}) => (
  <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">{front}</div>
      <div className="flip-card-back">{back}</div>
    </div>
  </div>
);

// Composant pour le compteur animé
const AnimatedCounter: React.FC<{ end: number; duration?: number; suffix?: string }> = ({
  end,
  duration = 2000,
  suffix = ""
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-5xl md:text-6xl font-black">
      {count}{suffix}
    </div>
  );
};

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_xgdluls",
        "template_5x9tqf8",
        formRef.current,
        "KfF-FpO2K-0aYUFsS"
      )
      .then(
        () => {
          alert("Message envoyé avec succès ✅ Nous vous recontacterons bientôt !");
          formRef.current?.reset();
        },
        (error) => {
          alert("Erreur lors de l'envoi ❌ : " + error.text);
        }
      );
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {!showContent ? (
        <div className="text-center animate-fadeIn pt-32 py-20">
          <p className="text-lg text-gray-600 mb-2 animate-pulse">
            Préparation de votre expérience...
          </p>
          <h1 className="text-4xl font-bold text-orange-500 tracking-wide animate-pulse">
            Sunu<span className="text-orange-600">Link</span>
          </h1>
        </div>
      ) : (
        <div className="min-h-screen animate-fadeIn pt-[80px]">
          {/* Hero Section */}
          <section className="grain-texture relative md:grid md:grid-cols-2 gap-2 min-h-[500px] bg-gradient-hero overflow-hidden shadow-elegant" data-aos="fade-up">
              {/* Texte + CTA */}
                <div className="relative px-8 py-10 flex flex-col justify-between min-h-[500px]">
                <div className="max-w-xl text-white z-10">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    STRATÉGIE CRÉATIVITÉ{" "}
                    <span className="text-secondary">IMPACT</span>
                  </h1>
                  <p className="text-lg mb-8 opacity-90 leading-relaxed max-w-lg">
                    Nous vous aidons à développer une stratégie marketing complète, de
                    la création de votre identité visuelle à la mise en place
                    d&apos;une stratégie digitale.
                  </p>
                    {/* Boutons CTA - Revus */}
                  <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 mb-8">
                      <Link to="/contact">
                      <Button
                        size="lg"
                          className="bg-sunuOrange text-white hover:bg-sunuOrange/90 font-bold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all"
                      >
                          Parlons de votre projet
                      </Button>
                    </Link>
                      <Link to="/services">
                      <Button
                        variant="outline"
                        size="lg"
                          className="border-2 border-white text-sunuBlue font-bold px-8 py-6 text-lg rounded-xl"
                      >
                          Découvrir nos services
                      </Button>
                    </Link>
                  </div>

                  {/* Réseaux sociaux */}
                  <div className="flex items-center space-x-3">
                    <a
                      href="https://www.facebook.com/share/19oMyxQApw/?mibextid=LQQJ4d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-white hover:bg-white/30 transition-colors"
                      aria-label="Facebook"
                    >
                      <img
                        src="facebook-176-svgrepo-com.svg"
                        alt="Facebook"
                        className="w-4 h-4"
                      />
                    </a>

                    <a
                      href="https://www.linkedin.com/company/sunulink-consulting/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-white hover:bg-white/30 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <img
                        src="linkedin-svgrepo-com.svg"
                        alt="LinkedIn"
                        className="w-4 h-4"
                      />
                    </a>

                    <a
                      href="https://www.instagram.com/sunulink_consulting?igsh=MTh6dndrcGlja2lrNQ%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-white hover:bg-white/30 transition-colors"
                      aria-label="Instagram"
                    >
                      <img
                        src="instagram-svgrepo-com.svg"
                        alt="Instagram"
                        className="w-5 h-5"
                      />
                    </a>
                  </div>
                </div>

                  {/* Logo Carousel */}
                  <div className="mt-8 z-10">
                    <LogoCarousel />
                  </div>
                </div>
                {/* Carousel - Agrandi */}
              <div className="relative px-8 py-10 flex flex-col items-center justify-center min-h-[500px]">
                <Carousel
                  opts={{ loop: true }}
                    className="w-full max-w-lg relative"
                >
                  <CarouselContent>
                    {images.map((img, index) => (
                      <CarouselItem key={index}>
                        <div className="group relative w-full h-[480px] rounded-2xl shadow-2xl mx-auto overflow-hidden flex items-center justify-center">
                          <FlipCard
                            front={
                              <img
                                src={img.src}
                                alt={img.alt}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  display: "block",
                                  margin: 0,
                                  padding: 0,
                                }}
                              />
                            }
                            back={
                              <div
                                className="bg-gradient-to-br from-sunuBlue to-sunuOrange p-8 h-full flex items-center justify-center"
                                style={{
                                  fontWeight: 600,
                                  fontSize: "1.2rem",
                                }}
                              >
                                {img.text}
                              </div>
                            }
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </section>

            {/* Services Cards Section */}
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

            {/* Featured Cards - Projets & Portfolio */}
            <section className="py-16 px-6 bg-white">
              <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Carte PROJETS */}
                  <div className="grain-texture bg-gradient-to-br from-sunuOrange to-yellow-500 rounded-3xl p-8 shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 max-w-md mx-auto lg:mx-0 w-full" data-aos="fade-right">
                    <div className="text-center text-white">
                      <Monitor className="w-24 h-24 mx-auto mb-4 opacity-80" />
                      <AnimatedCounter end={150} suffix="+" />
                      <h3 className="text-3xl font-black mt-2">PROJETS</h3>
                      <p className="text-lg opacity-90">menés avec succès</p>
                    </div>
                  </div>

                  {/* Carte PORTFOLIO */}
                  <div className="grain-texture bg-gradient-to-br from-yellow-400 to-sunuOrange rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2" data-aos="fade-left">
                    <div className="h-full flex items-center justify-center p-12">
                      <div className="text-white text-center">
                        <p className="text-3xl font-black mb-4">Portfolio complet</p>
                        <p className="text-xl opacity-90 mb-6">Découvrez nos réalisations par catégorie</p>
                        <Link to="/realisations">
                          <Button className="bg-white text-sunuOrange hover:bg-sunuBlue hover:text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                            Voir nos réalisations
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Packs Section - Boost My Pub */}
            <section className="py-20 px-6 bg-white">
              <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12" data-aos="fade-up">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
                    BOOST <span className="text-sunuOrange">MY PUB</span>
                  </h2>
                  <p className="text-xl text-gray-600 mb-2">
                    Votre visibilité. Notre puissance.
                  </p>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Des packs sur mesure pour propulser votre communication et dominer votre marché
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {/* Pack Teranga */}
                  <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" data-aos="fade-up">
                    <div className="grain-texture bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-8">
                      <div className="flex items-center justify-center mb-6">
                        <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center">
                          <Sparkles className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <h3 className="text-3xl font-black text-center mb-2">PACK TERANGA</h3>
                      <p className="text-center text-lg font-semibold mb-4 opacity-90">3 mois</p>
                      <div className="text-center mb-4">
                        <p className="text-4xl font-black">450K Fcfa / mois</p>
                      </div>
                    </div>
                    <div className="bg-white p-6">
                      <p className="text-center text-gray-700 mb-6 italic font-semibold">
                        Lancer sa communication proprement
                      </p>
                      <div className="space-y-2 mb-6">
                        {[
                          "15 visuels premium / mois",
                          "4 vidéos courtes / mois",
                          "Stories quotidiennes",
                          "Gestion FB + IG",
                          "Reporting mensuel"
                        ].map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-2 text-sm">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pack Xeewal - Recommandé */}
                  <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 lg:-translate-y-4 lg:scale-105" data-aos="fade-up" data-aos-delay="100">
                    <div className="absolute top-0 right-0 bg-sunuOrange text-white px-6 py-2 font-bold text-sm rounded-bl-2xl z-10">
                      ⭐ Recommandé
                    </div>
                    <div className="grain-texture bg-gradient-to-br from-orange-500 to-yellow-500 text-white p-8">
                      <div className="flex items-center justify-center mb-6">
                        <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center">
                          <Star className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <h3 className="text-3xl font-black text-center mb-2">PACK XEEWAL</h3>
                      <p className="text-center text-lg font-semibold mb-4 opacity-90">6 mois</p>
                      <div className="text-center mb-4">
                        <p className="text-4xl font-black">750K Fcfa / mois</p>
                      </div>
                    </div>
                    <div className="bg-white p-6">
                      <p className="text-center text-gray-700 mb-6 italic font-semibold">
                        Accélérer sa croissance
                      </p>
                      <div className="space-y-2 mb-6">
                        {[
                          "30 visuels premium / mois",
                          "8 vidéos courtes / mois",
                          "1 vidéo pro / mois",
                          "Gestion multicanale",
                          "Boost sponsorisé"
                        ].map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-2 text-sm">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pack Buur */}
                  <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
                    <div className="grain-texture bg-gradient-to-br from-purple-600 to-pink-600 text-white p-8">
                      <div className="flex items-center justify-center mb-6">
                        <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center">
                          <Crown className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <h3 className="text-3xl font-black text-center mb-2">PACK BUUR</h3>
                      <p className="text-center text-lg font-semibold mb-4 opacity-90">1 an</p>
                      <div className="text-center mb-4">
                        <p className="text-4xl font-black">1.499K Fcfa / mois</p>
                      </div>
                    </div>
                    <div className="bg-white p-6">
                      <p className="text-center text-gray-700 mb-6 italic font-semibold">
                        Dominer son marché
                      </p>
                      <div className="space-y-2 mb-6">
                        {[
                          "60 visuels premium / mois",
                          "15 vidéos courtes / mois",
                          "2 vidéos pro / mois",
                          "Shooting trimestriel",
                          "Direction marketing"
                        ].map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-2 text-sm">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bouton Voir Plus */}
                <div className="text-center" data-aos="fade-up">
                  <Link to="/boost-my-pub">
                    <Button className="bg-gradient-to-r from-sunuOrange to-yellow-500 text-white hover:from-sunuBlue hover:to-sunuCyan font-bold px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                      Voir tous nos packs en détail
                    </Button>
                  </Link>
                </div>
              </div>
            </section>

            {/* Testimonials Section - Ce qu'ils disent de nous */}
            <section className="py-16 px-6 bg-gradient-to-b from-sunuGray/10 to-white">
              <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12" data-aos="fade-up">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-3">
                    CE QU'ILS DISENT <span className="text-sunuOrange">DE NOUS</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-8">
                    Découvrez les témoignages de nos clients satisfaits
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <Link to="/contact">
                      <Button className="grain-texture bg-gradient-to-br from-sunuBlue to-sunuCyan text-white hover:from-sunuOrange hover:to-yellow-500 font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                        <Star className="w-5 h-5" />
                        Laisser un avis
                      </Button>
                    </Link>
                    <Link to="/realisations">
                      <Button className="grain-texture bg-gradient-to-br from-sunuOrange to-yellow-500 text-white hover:from-sunuBlue hover:to-sunuCyan font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                        <Eye className="w-5 h-5" />
                        Nos réalisations
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Testimonials Carousel */}
                <div className="mt-8">
                  <Carousel
                    opts={{
                      loop: true,
                      align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                      {[
                        {
                          name: "Amadou Diallo",
                          company: "CEO, TechStart Sénégal",
                          text: "Sunu Link a transformé notre présence digitale. Leur approche stratégique et leur créativité ont dépassé nos attentes.",
                          rating: 5
                        },
                        {
                          name: "Fatou Seck",
                          company: "Directrice Marketing, Fashion Group",
                          text: "Une équipe professionnelle et réactive. Nos campagnes n'ont jamais eu autant d'impact depuis que nous travaillons avec eux.",
                          rating: 5
                        },
                        {
                          name: "Moussa Kane",
                          company: "Fondateur, EcoSolutions",
                          text: "Le meilleur investissement pour notre marque. Ils ont su comprendre notre vision et la traduire en résultats concrets.",
                          rating: 5
                        },
                        {
                          name: "Aïcha Ndiaye",
                          company: "Directrice, Innovation Hub",
                          text: "Un accompagnement exceptionnel du début à la fin. Leur expertise nous a permis de nous démarquer sur notre marché.",
                          rating: 5
                        },
                        {
                          name: "Ibrahima Sarr",
                          company: "Fondateur, Digital Solutions",
                          text: "Professionnalisme, créativité et résultats. Sunu Link dépasse constamment nos attentes.",
                          rating: 5
                        },
                        {
                          name: "Mariama Touré",
                          company: "DG, Retail Excellence",
                          text: "Grâce à Sunu Link, notre marque a gagné en visibilité et en crédibilité. Une vraie transformation !",
                          rating: 5
                        },
                        {
                          name: "Cheikh Mbaye",
                          company: "Directeur Commercial, FoodTech SA",
                          text: "Un accompagnement personnalisé et des résultats au-delà de nos espérances. Je recommande vivement !",
                          rating: 5
                        },
                        {
                          name: "Khadija Diop",
                          company: "Fondatrice, Beauty & Wellness",
                          text: "Leur créativité et leur sens du détail ont fait toute la différence pour notre lancement. Merci Sunu Link !",
                          rating: 5
                        },
                        {
                          name: "Ousmane Ba",
                          company: "CEO, Tech Innovations",
                          text: "Une équipe dynamique qui comprend vraiment les enjeux du digital. Nos ventes ont triplé en 6 mois !",
                          rating: 5
                        },
                        {
                          name: "Ndeye Fall",
                          company: "Directrice, Event Masters",
                          text: "Sunu Link a révolutionné notre communication événementielle. Chaque projet est un succès garanti !",
                          rating: 5
                        },
                        {
                          name: "Mamadou Sow",
                          company: "Président, Export Group",
                          text: "Un partenaire fiable qui nous aide à conquérir de nouveaux marchés avec une stratégie claire et efficace.",
                          rating: 5
                        },
                        {
                          name: "Awa Diagne",
                          company: "CEO, Fashion Forward",
                          text: "Ils ont su capturer l'essence de notre marque et la traduire en visuels percutants. Un travail remarquable !",
                          rating: 5
                        },
                        {
                          name: "Boubacar Niang",
                          company: "Fondateur, Agro Business",
                          text: "Leur expertise en digital et en stratégie nous a permis de nous positionner comme leader de notre secteur.",
                          rating: 5
                        },
                        {
                          name: "Coumba Cissé",
                          company: "DG, Health Plus",
                          text: "Un accompagnement de qualité du début à la fin. Nos campagnes n'ont jamais été aussi performantes !",
                          rating: 5
                        },
                        {
                          name: "Modou Gueye",
                          company: "Directeur, Edu Solutions",
                          text: "Sunu Link a transformé notre image de marque et boosté notre notoriété. Des professionnels à l'écoute !",
                          rating: 5
                        }
                      ].map((testimonial, index) => (
                        <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                            <div className="flex mb-4">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-sunuOrange fill-current" viewBox="0 0 20 20">
                                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                </svg>
                              ))}
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                            <div className="border-t border-gray-200 pt-4">
                              <p className="font-bold text-gray-800">{testimonial.name}</p>
                              <p className="text-sm text-gray-600">{testimonial.company}</p>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-0" />
                    <CarouselNext className="right-0" />
                  </Carousel>
                </div>
              </div>
            </section>

            {/* Partners Section - Collaborations fructueuses */}
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

                  {/* Partners Logos Carousel */}
                  <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm p-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                      {[
                        "Partenaire 1",
                        "Partenaire 2",
                        "Partenaire 3",
                        "Partenaire 4",
                        "Partenaire 5",
                        "Partenaire 6"
                      ].map((partner, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-xl p-6 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300 shadow-md"
                          data-aos="zoom-in"
                          data-aos-delay={index * 100}
                        >
                          <div className="text-center">
                            <p className="text-sunuBlue font-bold text-sm">{partner}</p>
                            {/* Remplacez par <img src="/logos/partner.png" alt={partner} /> */}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section - Écrivez-nous, Appelez-nous */}
            <section className="py-16 px-6 bg-gradient-to-b from-sunuGray/10 to-white">
              <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left Column - Info */}
                  <div className="space-y-8">
                    <div data-aos="fade-right">
                      <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-800">
                        <span className="text-sunuOrange">ÉCRIVEZ-NOUS,</span><br />
                        <span className="text-sunuBlue">APPELEZ-NOUS</span>
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Que vous soyez une entreprise, une institution ou un entrepreneur, nous sommes là
                        pour donner vie à vos ambitions stratégiques, digitales et créatives.
                      </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="space-y-4">
                      {contactInfo.map((info, index) => (
                        <a
                          key={index}
                          href={info.link}
                          target={info.link.startsWith("http") ? "_blank" : undefined}
                          rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="grain-texture flex items-start space-x-4 p-6 bg-gradient-to-br from-sunuBlue to-sunuCyan text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                          data-aos="fade-right"
                          data-aos-delay={index * 100}
                        >
                          <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold mb-1 text-lg">{info.title}</h4>
                            <p className="opacity-90">{info.value}</p>
                          </div>
                        </a>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="grain-texture bg-gradient-to-br from-sunuOrange to-yellow-500 rounded-2xl p-6 text-white" data-aos="fade-right" data-aos-delay="400">
                      <h4 className="font-bold mb-4 text-lg">Suivez-nous sur les réseaux sociaux</h4>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href="https://www.facebook.com/share/19oMyxQApw/?mibextid=LQQJ4d"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-white/20 hover:bg-white hover:text-sunuOrange flex items-center justify-center transition-all duration-300"
                          aria-label="Facebook"
                        >
                          <img src="/facebook-176-svgrepo-com.svg" alt="Facebook" className="w-6 h-6" />
                        </a>
                        <a
                          href="https://www.linkedin.com/company/sunulink-consulting/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-white/20 hover:bg-white hover:text-sunuOrange flex items-center justify-center transition-all duration-300"
                          aria-label="LinkedIn"
                        >
                          <img src="/linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-6 h-6" />
                        </a>
                        <a
                          href="https://www.instagram.com/sunulink_consulting?igsh=MTh6dndrcGlja2lrNQ%3D%3D&utm_source=qr"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-white/20 hover:bg-white hover:text-sunuOrange flex items-center justify-center transition-all duration-300"
                          aria-label="Instagram"
                        >
                          <img src="/instagram-svgrepo-com.svg" alt="Instagram" className="w-7 h-7" />
                        </a>
                        <a
                          href="https://wa.me/221767263842"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-white/20 hover:bg-white hover:text-sunuOrange flex items-center justify-center transition-all duration-300"
                          aria-label="WhatsApp"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                          </svg>
                        </a>
                        <a
                          href="https://www.tiktok.com/@sunulink.consulting?_t=zm-8zc2czdhhc9&_r=1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-white/20 hover:bg-white hover:text-sunuOrange flex items-center justify-center transition-all duration-300"
                          aria-label="TikTok"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Form */}
                  <div className="grain-texture bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuBlue rounded-3xl p-10 shadow-2xl" data-aos="fade-left">
                    <h3 className="text-3xl font-black mb-8 text-white">Envoyez-nous un message</h3>
                    <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Input
                            name="prenom"
                            placeholder="Prénom*"
                            className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 h-12"
                            required
                          />
                        </div>
                        <div>
                          <Input
                            name="nom"
                            placeholder="Nom*"
                            className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 h-12"
                            required
                          />
                        </div>
                      </div>

                      <Input
                        name="email"
                        placeholder="E-mail*"
                        type="email"
                        className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 h-12"
                        required
                      />

                      <Input
                        name="telephone"
                        placeholder="Téléphone*"
                        type="tel"
                        className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 h-12"
                        required
                      />

                      <Textarea
                        name="message"
                        placeholder="Commentaire ou message"
                        rows={6}
                        className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 resize-none"
                        required
                      />

                      <Button
                        type="submit"
                        className="w-full bg-white text-sunuBlue hover:bg-sunuOrange hover:text-white font-bold py-6 text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                      >
                        Envoyer
                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
