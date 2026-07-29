import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  X, Play, Video, Film, Sparkles, Sliders, Clapperboard, 
  Megaphone, Calendar, Share2, Mic, MoveRight, Radio,
  Tv, Eye, ShieldCheck, Award, Zap, HeartHandshake,
  Layers, ChevronDown, CheckSquare, Upload, Camera, Send
} from "lucide-react";

const SunuLinkProd = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form states
  const [selectedProjectTypes, setSelectedProjectTypes] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const cacheBuster = new Date().getTime();

  useEffect(() => {
    document.body.style.overflow = selectedVideo ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedVideo]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleCheckboxChange = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, item: string) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  // 9 Services du cahier des charges
  const services = [
    {
      id: "corporate",
      title: "Film Corporate & Institutionnel",
      icon: <Film className="text-[#F6A61A]" size={32} />,
      description: "Présentez votre entreprise, vos valeurs et vos réalisations grâce à des films professionnels qui renforcent votre crédibilité.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
      subServices: [
        "Film d’entreprise",
        "Film institutionnel",
        "Présentation organisationnelle",
        "Portrait dirigeant",
        "Témoignages clients",
        "Films internes"
      ]
    },
    {
      id: "publicite",
      title: "Publicité & Brand Content",
      icon: <Megaphone className="text-[#F6A61A]" size={32} />,
      description: "Création de contenus publicitaires créatifs destinés à développer votre visibilité et votre impact commercial.",
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
      subServices: [
        "Spots publicitaires",
        "Vidéos produits",
        "Campagnes digitales",
        "Storytelling de marque",
        "Concepts créatifs",
        "Adaptation réseaux sociaux"
      ]
    },
    {
      id: "evenementiel",
      title: "Production événementielle",
      icon: <Calendar className="text-[#F6A61A]" size={32} />,
      description: "Immortalisation professionnelle de vos événements et moments importants.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
      subServices: [
        "Captation événementielle",
        "Aftermovie",
        "Interviews sur événement",
        "Best moments",
        "Vidéos récapitulatives"
      ]
    },
    {
      id: "socials",
      title: "Contenus réseaux sociaux",
      icon: <Share2 className="text-[#F6A61A]" size={32} />,
      description: "Des contenus courts, dynamiques et adaptés aux plateformes digitales.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      subServices: [
        "Reels Instagram",
        "TikTok",
        "Shorts YouTube",
        "LinkedIn vidéo",
        "Capsules professionnelles",
        "Série de contenus"
      ]
    },
    {
      id: "audio",
      title: "Voix Off & Production Audio",
      icon: <Mic className="text-[#F6A61A]" size={32} />,
      description: "Donnez une identité sonore forte à vos contenus grâce à des solutions audio professionnelles.",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800",
      subServices: [
        "Voix masculine",
        "Voix féminine",
        "Français",
        "Anglais",
        "Wolof",
        "Sound design",
        "Jingles",
        "Habillage sonore"
      ]
    },
    {
      id: "motion",
      title: "Motion Design & Animation",
      icon: <Sparkles className="text-[#F6A61A]" size={32} />,
      description: "Expliquez vos idées grâce à des animations modernes et impactantes.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
      subServices: [
        "Motion graphique",
        "Animation logo",
        "Vidéo explicative",
        "Infographie animée",
        "Présentation animée"
      ]
    },
    {
      id: "drone",
      title: "Production Drone",
      icon: <Video className="text-[#F6A61A]" size={32} />,
      description: "Des prises de vue aériennes pour révéler vos projets sous un nouvel angle.",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800",
      subServices: [
        "Immobilier",
        "Événementiel",
        "Industrie",
        "Tourisme",
        "Entreprises"
      ]
    },
    {
      id: "postprod",
      title: "Post-production",
      icon: <Sliders className="text-[#F6A61A]" size={32} />,
      description: "Une finition professionnelle qui transforme une vidéo en véritable contenu premium.",
      image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&q=80&w=800",
      subServices: [
        "Montage professionnel",
        "Color grading",
        "Correction image",
        "Mixage audio",
        "Sous-titrage",
        "Export multi-formats"
      ]
    },
    {
      id: "podcast",
      title: "Podcast Studio",
      icon: <Radio className="text-[#F6A61A]" size={32} />,
      description: "Création de podcasts professionnels pour développer votre communication et votre expertise.",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800",
      subServices: [
        "Installation studio",
        "Enregistrement audio",
        "Podcast vidéo",
        "Montage",
        "Publication digitale"
      ]
    }
  ];

  // Timeline Méthodologie
  const steps = [
    {
      number: "01",
      title: "Analyse & stratégie",
      description: "Compréhension de votre objectif, votre audience et votre message."
    },
    {
      number: "02",
      title: "Conception créative",
      description: "Création du concept, scénario et direction artistique."
    },
    {
      number: "03",
      title: "Pré-production",
      description: "Organisation du tournage, planning, équipe et préparation technique."
    },
    {
      number: "04",
      title: "Production",
      description: "Tournage professionnel avec équipe technique adaptée."
    },
    {
      number: "05",
      title: "Post-production",
      description: "Montage, son, effets visuels et optimisation."
    },
    {
      number: "06",
      title: "Livraison & diffusion",
      description: "Formats adaptés aux plateformes choisies."
    }
  ];

  // 6 Forces
  const forces = [
    {
      icon: <Zap className="text-[#F6A61A]" size={28} />,
      title: "Vision stratégique",
      description: "Chaque contenu répond à un objectif de communication."
    },
    {
      icon: <Sparkles className="text-[#F6A61A]" size={28} />,
      title: "Direction artistique",
      description: "Une identité visuelle cohérente et professionnelle."
    },
    {
      icon: <Award className="text-[#F6A61A]" size={28} />,
      title: "Qualité technique",
      description: "Image, son et montage aux standards professionnels."
    },
    {
      icon: <Eye className="text-[#F6A61A]" size={28} />,
      title: "Storytelling",
      description: "Des histoires capables de créer une connexion émotionnelle."
    },
    {
      icon: <ShieldCheck className="text-[#F6A61A]" size={28} />,
      title: "Production complète",
      description: "Un accompagnement de l’idée à la diffusion."
    },
    {
      icon: <Layers className="text-[#F6A61A]" size={28} />,
      title: "Adaptation digitale",
      description: "Des formats pensés pour chaque canal."
    }
  ];

  // Portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: "Corporate Showcase & Branding",
      client: "SunuLink",
      category: "Corporate",
      thumbnail: `https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800&v=${cacheBuster}`,
      videoPath: `/portfolio/video-corporate.mp4?v=${cacheBuster}`
    },
    {
      id: 2,
      title: "Animation Graphic Nataa",
      client: "Nataa",
      category: "Motion Design",
      thumbnail: `/portfolio/video-anime-nataa-thumb.png?v=${cacheBuster}`,
      videoPath: `/portfolio/video-anime-nataa.mp4?v=${cacheBuster}`
    },
    {
      id: 3,
      title: "Campagne Pub Produit",
      client: "Brand X",
      category: "Publicité",
      thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
      videoPath: `/portfolio/video-corporate.mp4?v=${cacheBuster}`
    },
    {
      id: 4,
      title: "Captation Forum Économique",
      client: "Global Business",
      category: "Événement",
      thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
      videoPath: `/portfolio/video-corporate.mp4?v=${cacheBuster}`
    },
    {
      id: 5,
      title: "Série Reels Immersive",
      client: "Digital Agency",
      category: "Réseaux sociaux",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      videoPath: `/portfolio/video-corporate.mp4?v=${cacheBuster}`
    },
    {
      id: 6,
      title: "Podcast Talk Tech",
      client: "Innovators",
      category: "Podcast",
      thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800",
      videoPath: `/portfolio/video-corporate.mp4?v=${cacheBuster}`
    }
  ];

  const categories = ["Tous", "Corporate", "Publicité", "Événement", "Réseaux sociaux", "Motion Design", "Podcast"];

  const filteredPortfolio = activeCategory === "Tous" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  // Témoignages
  const testimonials = [
    {
      name: "Amadou Diallo",
      function: "Directeur de Communication",
      company: "Senegal Tech Group",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      text: "SunuLink Prod a su capter l'essence même de notre vision d'entreprise. Leur professionnalisme sur le plateau et la qualité cinématographique du film corporate livré dépassent largement nos attentes."
    },
    {
      name: "Fatou Sow",
      function: "Fondatrice & CEO",
      company: "Moda Eco",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      text: "Grâce aux spots pub et aux déclinaisons pour réseaux sociaux réalisées par SunuLink Prod, notre dernière campagne digitale a généré un engagement record. Une direction artistique exceptionnelle."
    }
  ];

  // FAQ Items
  const faqItems = [
    {
      q: "Quels types de productions réalisez-vous ?",
      a: "Nous réalisons des films corporate & institutionnels, des spots publicitaires, des captations événementielles, des séries de vidéos pour réseaux sociaux, des animations en Motion Design, des productions audio & voix off, des prises de vue par drone et la création de podcasts."
    },
    {
      q: "Travaillez-vous avec les entreprises et institutions ?",
      a: "Oui, nous accompagnons aussi bien les PME, les grandes entreprises, les multinationales que les institutions publiques et organisations internationales."
    },
    {
      q: "Pouvez-vous gérer un projet de A à Z ?",
      a: "Absolument. Nous prenons en charge l'intégralité du processus : étude stratégique, rédaction de script/scénario, pré-production, tournage, post-production (montage, étalonnage, sound design) jusqu'à la livraison multi-format."
    },
    {
      q: "Fournissez-vous les scripts ?",
      a: "Tout à fait. Notre équipe créative rédige les pitchs, scripts, scénarios et storyboards sur-mesure adaptés à votre objectif."
    },
    {
      q: "Proposez-vous des voix off ?",
      a: "Oui, nous disposons d'un catalogue de voix off professionnelles masculines et féminines en plusieurs langues (Français, Anglais, Wolof, etc.)."
    },
    {
      q: "Réalisez-vous des tournages en dehors de Dakar ?",
      a: "Oui, nos équipes techniques se déplacent dans toutes les régions du Sénégal ainsi qu'à l'international selon les exigences de votre projet."
    },
    {
      q: "Quels formats livrez-vous ?",
      a: "Nous livrons vos fichiers dans les formats maîtres (Master HD / 4K) ainsi que toutes les déclinaisons optimisées pour le web, la TV et les réseaux sociaux (16/9ème, 9/16ème, 1/1)."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B1220] text-white font-['Lato'] overflow-x-hidden flex flex-col selection:bg-[#F6A61A] selection:text-black">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400&display=swap');
        
        h1, h2, h3, h4, h5, h6, .font-balgor {
          font-family: 'Balgor', 'Lato', sans-serif;
          font-weight: 800;
        }
      `}</style>

      <Header />

      <main className="flex-grow pt-20">
        
        {/* ================= 7. HERO SECTION ================= */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1920"
            >
              <source src="/portfolio/video-corporate.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[#0B1220]/60 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-[#0B1220]/40" />
          </div>

          <div className="container mx-auto max-w-6xl text-center relative z-10 pt-16">
            <div className="inline-flex items-center gap-2 bg-[#0071BC]/20 border border-[#009CDE]/40 backdrop-blur-md px-5 py-2 rounded-full mb-8 shadow-[0_0_30px_rgba(0,113,188,0.3)]">
              <Sparkles className="text-[#F6A61A]" size={16} />
              <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-white">
                Production audiovisuelle • Création • Storytelling
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tight text-white drop-shadow-lg">
              SunuLink <span className="text-[#F6A61A]">Prod</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto font-normal leading-relaxed mb-10 drop-shadow">
              Nous créons des productions audiovisuelles puissantes qui donnent vie à vos idées, valorisent votre marque et captivent votre audience.
            </p>

            {/* CORRECTION 1 : Bouton secondaire avec texte bien lisible */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a href="#devis">
                <Button className="w-full sm:w-auto bg-[#F6A61A] hover:bg-[#e09310] text-[#0B1220] font-black px-8 py-6 text-lg rounded-full shadow-[0_10px_30px_rgba(246,166,26,0.3)] transition-all transform hover:-translate-y-1">
                  Demander un devis
                </Button>
              </a>
              <a href="#portfolio">
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/40 text-white font-bold px-8 py-6 text-lg rounded-full backdrop-blur-md transition-all shadow-md"
                >
                  Voir nos réalisations
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ================= 8. SECTION PRÉSENTATION ================= */}
        <section className="py-24 px-6 bg-[#111827] relative border-y border-white/5">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#009CDE] font-bold text-sm tracking-widest uppercase block mb-3">À Propos</span>
                <h2 className="text-3xl md:text-5xl font-black mb-6 text-white leading-tight">
                  L’image raconte. <br/><span className="text-[#F6A61A]">L’émotion connecte.</span>
                </h2>
                <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
                  <p>
                    Chez <strong>SunuLink Prod</strong>, nous transformons vos messages en expériences audiovisuelles mémorables.
                  </p>
                  <p>
                    Notre approche combine stratégie, créativité et expertise technique pour produire des contenus adaptés aux entreprises, institutions, marques et organisations.
                  </p>
                  <p>
                    De la conception du scénario jusqu’à la livraison finale, nous vous accompagnons à chaque étape pour créer des contenus qui renforcent votre communication.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0071BC] to-[#F6A61A] rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0B1220]">
                  <img 
                    src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=1000" 
                    alt="Équipe créative en studio" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0B1220]/80 backdrop-blur-md rounded-xl border border-white/10">
                    <p className="text-sm font-semibold text-white">Studio de Production & Réalisation</p>
                    <p className="text-xs text-gray-400">Une équipe passionnée au service de votre image.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 9. SECTION NOS SERVICES ================= */}
        <section id="services" className="py-24 px-6 bg-[#0B1220] relative">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#009CDE] font-bold text-sm tracking-widest uppercase block mb-2">Nos Domaines d'Expertise</span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase">Nos Services</h2>
              <div className="w-20 h-1 bg-[#F6A61A] mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="bg-[#111827] rounded-2xl overflow-hidden border border-white/5 hover:border-[#009CDE]/40 transition-all duration-300 shadow-xl flex flex-col group hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent" />
                    <div className="absolute top-4 left-4 p-3 bg-[#0B1220]/80 backdrop-blur-md rounded-xl border border-white/10">
                      {service.icon}
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#F6A61A] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-4">
                      <span className="text-xs font-bold uppercase text-[#009CDE] block mb-2">Prestations incluses :</span>
                      <ul className="grid grid-cols-2 gap-1.5">
                        {service.subServices.map((sub, idx) => (
                          <li key={idx} className="text-xs text-gray-300 flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 bg-[#F6A61A] rounded-full" />
                            {sub}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 10. SECTION NOTRE MÉTHODE ================= */}
        <section className="py-24 px-6 bg-[#111827] relative border-y border-white/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#009CDE] font-bold text-sm tracking-widest uppercase block mb-2">Processus de création</span>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase">Notre Méthode</h2>
              <p className="text-gray-400 mt-3">Une approche structurée de l'idée jusqu'à l’impact final.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, idx) => (
                <div key={idx} className="relative bg-[#0B1220] p-8 rounded-2xl border border-white/5 hover:border-[#F6A61A]/40 transition-all">
                  {/* CORRECTION 2 : Chiffres en bleu officiel SunuLink (#0071BC) */}
                  <div className="text-5xl font-black text-[#0071BC] mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 11. SECTION NOS FORCES ================= */}
        <section className="py-24 px-6 bg-[#0B1220] relative">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#009CDE] font-bold text-sm tracking-widest uppercase block mb-2">Pourquoi nous choisir</span>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase">Nos Forces</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {forces.map((force, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-[#111827] border border-white/5 hover:border-[#0071BC] transition-all flex items-start gap-5">
                  <div className="p-3 bg-[#0B1220] rounded-xl border border-white/10 flex-shrink-0">
                    {force.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{force.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{force.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 12. SECTION ÉQUIPEMENTS & EXPERTISE ================= */}
        <section className="py-24 px-6 bg-[#111827] relative border-y border-white/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">Équipements & Expertise</h2>
              <p className="text-xl text-[#F6A61A] font-semibold">
                Une production réussie repose sur la créativité, la technologie et la maîtrise technique.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { title: "Caméra Cinéma", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400" },
                { title: "Drone 4K", img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=400" },
                { title: "Microphone Studio", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=400" },
                { title: "Station Montage", img: "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&q=80&w=400" },
                { title: "Éclairage Pro", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400" },
              ].map((eq, idx) => (
                <div key={idx} className="relative rounded-2xl overflow-hidden h-44 group border border-white/10">
                  <img src={eq.img} alt={eq.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-3">
                    <span className="text-xs font-bold text-white uppercase">{eq.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 13. SECTION PORTFOLIO ================= */}
        <section id="portfolio" className="py-24 px-6 bg-[#0B1220]">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[#009CDE] font-bold text-sm tracking-widest uppercase block mb-2">Galerie Vidéo</span>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase">Nos Réalisations</h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat 
                      ? "bg-[#F6A61A] text-[#0B1220] shadow-[0_0_20px_rgba(246,166,26,0.4)]" 
                      : "bg-[#111827] text-gray-300 hover:bg-white/10 border border-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPortfolio.map((item) => (
                <div 
                  key={item.id}
                  className="group relative rounded-2xl overflow-hidden bg-[#111827] border border-white/5 hover:border-[#009CDE]/50 transition-all cursor-pointer"
                  onClick={() => setSelectedVideo(item.videoPath)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                      <div className="w-16 h-16 bg-[#F6A61A] text-[#0B1220] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <Play size={28} fill="#0B1220" className="ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-[#009CDE] text-xs font-bold uppercase tracking-wider">{item.category} • {item.client}</span>
                    <h3 className="text-lg font-bold text-white mt-1 group-hover:text-[#F6A61A] transition-colors">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 14. SECTION SHOWREEL ================= */}
        <section className="py-24 px-6 bg-[#111827] border-y border-white/5">
          <div className="container mx-auto max-w-5xl text-center">
            <span className="text-[#009CDE] font-bold text-sm tracking-widest uppercase block mb-2">Aperçu rapide</span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-8">Découvrez notre univers audiovisuel</h2>
            
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer" onClick={() => setSelectedVideo('/portfolio/video-corporate.mp4')}>
              <img 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200" 
                alt="Showreel SunuLink Prod" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-[#F6A61A] text-[#0B1220] rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform mb-4">
                  <Play size={40} fill="#0B1220" className="ml-1.5" />
                </div>
                <span className="text-white font-bold text-xl uppercase tracking-widest">Voir le Showreel (90 sec)</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 15. SECTION TÉMOIGNAGES ================= */}
        <section className="py-24 px-6 bg-[#0B1220]">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#009CDE] font-bold text-sm tracking-widest uppercase block mb-2">Avis clients</span>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase">Ce qu'ils disent de nous</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-[#111827] p-8 rounded-3xl border border-white/5 relative flex flex-col justify-between">
                  <p className="text-gray-300 italic text-base leading-relaxed mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    {/* Les images ont été retirées ici si besoin inserer les ici directement */}
                    <div>
                      <h3 className="text-white font-bold">{t.name}</h3>
                      <p className="text-xs text-gray-400">{t.function} — <span className="text-[#009CDE]">{t.company}</span></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 16. FORMULAIRE DE DEVIS ================= */}
        <section id="devis" className="py-24 px-6 bg-[#111827] border-t border-white/5 relative">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#009CDE] font-bold text-sm tracking-widest uppercase block mb-2">Demande de cotation</span>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase">Formulaire de Devis</h2>
              <p className="text-gray-400 mt-2">Configurez votre projet audiovisuel sur-mesure.</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="bg-[#0B1220] p-8 md:p-12 rounded-3xl border border-white/10 space-y-10 shadow-2xl">
              
              {/* Type de projet */}
              <div>
                <label className="text-lg font-bold text-white block mb-4 border-l-4 border-[#F6A61A] pl-3">
                  Type de projet (Cases à cocher)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    "Film corporate", "Film institutionnel", "Publicité", "Brand Content",
                    "Interview", "Vidéo événementielle", "Réseaux sociaux", "Motion Design",
                    "Podcast", "Voix Off", "Drone", "Autre"
                  ].map((item) => (
                    <label 
                      key={item} 
                      className={`flex items-center gap-2 p-3 rounded-xl border text-sm cursor-pointer transition-all ${
                        selectedProjectTypes.includes(item) 
                          ? "border-[#F6A61A] bg-[#F6A61A]/10 text-white" 
                          : "border-white/10 bg-[#111827] text-gray-400 hover:border-white/20"
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={selectedProjectTypes.includes(item)}
                        onChange={() => handleCheckboxChange(selectedProjectTypes, setSelectedProjectTypes, item)}
                      />
                      <CheckSquare size={16} className={selectedProjectTypes.includes(item) ? "text-[#F6A61A]" : "text-gray-600"} />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Objectif */}
              <div>
                <label className="text-lg font-bold text-white block mb-4 border-l-4 border-[#009CDE] pl-3">
                  Objectif du projet
                </label>
                <select className="w-full bg-[#111827] border border-white/10 rounded-xl p-4 text-white focus:border-[#009CDE] outline-none">
                  <option value="">Sélectionnez un objectif principal</option>
                  <option value="présenter">Présenter mon entreprise</option>
                  <option value="promouvoir">Promouvoir un produit</option>
                  <option value="visibilité">Développer ma visibilité</option>
                  <option value="interne">Communication interne</option>
                  <option value="campagne">Campagne digitale</option>
                  <option value="formation">Formation</option>
                  <option value="sensibilisation">Sensibilisation</option>
                </select>
              </div>

              {/* Prestations souhaitées */}
              <div>
                <label className="text-lg font-bold text-white block mb-4 border-l-4 border-[#F6A61A] pl-3">
                  Prestations souhaitées
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    "Concept créatif", "Script", "Storyboard", "Direction artistique",
                    "Tournage", "Drone", "Montage", "Motion Design", "Voix Off",
                    "Sound Design", "Sous-titres", "Traduction", "Livraison formats réseaux sociaux"
                  ].map((item) => (
                    <label 
                      key={item} 
                      className={`flex items-center gap-2 p-3 rounded-xl border text-sm cursor-pointer transition-all ${
                        selectedServices.includes(item) 
                          ? "border-[#009CDE] bg-[#009CDE]/10 text-white" 
                          : "border-white/10 bg-[#111827] text-gray-400 hover:border-white/20"
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={selectedServices.includes(item)}
                        onChange={() => handleCheckboxChange(selectedServices, setSelectedServices, item)}
                      />
                      <CheckSquare size={16} className={selectedServices.includes(item) ? "text-[#009CDE]" : "text-gray-600"} />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Style souhaité & Diffusion */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-lg font-bold text-white block mb-4 border-l-4 border-[#0071BC] pl-3">
                    Style souhaité
                  </label>
                  <select className="w-full bg-[#111827] border border-white/10 rounded-xl p-4 text-white focus:border-[#0071BC] outline-none">
                    <option value="">Choisir un style visuel</option>
                    <option value="cinematographique">Cinématographique</option>
                    <option value="corporate">Corporate</option>
                    <option value="moderne">Moderne</option>
                    <option value="dynamique">Dynamique</option>
                    <option value="emotionnel">Émotionnel</option>
                    <option value="storytelling">Storytelling</option>
                    <option value="recommander">À recommander par SunuLink</option>
                  </select>
                </div>

                <div>
                  <label className="text-lg font-bold text-white block mb-4 border-l-4 border-[#0071BC] pl-3">
                    Diffusion prévue
                  </label>
                  <select className="w-full bg-[#111827] border border-white/10 rounded-xl p-4 text-white focus:border-[#0071BC] outline-none">
                    <option value="">Sélectionnez le canal de diffusion</option>
                    <option value="web">Site web</option>
                    <option value="reseaux">Réseaux sociaux</option>
                    <option value="tv">Télévision</option>
                    <option value="evenement">Événement</option>
                    <option value="interne">Présentation interne</option>
                    <option value="pub">Publicité digitale</option>
                  </select>
                </div>
              </div>

              {/* Informations projet */}
              <div>
                <label className="text-lg font-bold text-white block mb-4 border-l-4 border-[#F6A61A] pl-3">
                  Informations projet
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <input type="date" placeholder="Date souhaitée" className="bg-[#111827] border border-white/10 rounded-xl p-4 text-white focus:border-[#F6A61A] outline-none" />
                  <input type="text" placeholder="Lieu (ex: Dakar, Thiès...)" className="bg-[#111827] border border-white/10 rounded-xl p-4 text-white focus:border-[#F6A61A] outline-none" />
                  <input type="text" placeholder="Durée souhaitée (ex: 2 min)" className="bg-[#111827] border border-white/10 rounded-xl p-4 text-white focus:border-[#F6A61A] outline-none" />
                </div>
                <textarea 
                  rows={4} 
                  placeholder="Description détaillée de vos attentes..." 
                  className="w-full bg-[#111827] border border-white/10 rounded-xl p-4 text-white focus:border-[#F6A61A] outline-none mb-4"
                ></textarea>
                
                <div className="flex items-center gap-3 p-4 bg-[#111827] border border-dashed border-white/20 rounded-xl text-gray-400 hover:text-white cursor-pointer transition-colors">
                  <Upload size={20} className="text-[#009CDE]" />
                  <span className="text-sm">Ajouter des pièces jointes (cahier des charges, inspirations...)</span>
                </div>
              </div>

              <Button className="w-full bg-[#F6A61A] hover:bg-[#e09310] text-[#0B1220] font-black py-5 text-xl rounded-xl shadow-[0_10px_30px_rgba(246,166,26,0.3)] transition-all">
                Envoyer ma demande de devis
              </Button>

            </form>
          </div>
        </section>

        {/* ================= 17. FAQ ================= */}
        <section className="py-24 px-6 bg-[#0B1220] border-t border-white/5">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#009CDE] font-bold text-sm tracking-widest uppercase block mb-2">Questions fréquentes</span>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase">Faq</h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, idx) => (
                <div key={idx} className="bg-[#111827] rounded-2xl border border-white/5 overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between font-bold text-lg text-white hover:text-[#F6A61A] transition-colors"
                  >
                    <span>{item.q}</span>
                    <ChevronDown size={20} className={`transform transition-transform ${openFaq === idx ? "rotate-180 text-[#F6A61A]" : "text-gray-400"}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-gray-300 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 18. CTA FINAL ================= */}
        <section className="py-24 px-6 bg-[#0B1220] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,113,188,0.25)_0%,transparent_70%)]" />
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-6 leading-tight">
              Donnez une nouvelle dimension <br/>à votre communication.
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Notre équipe transforme vos idées en contenus audiovisuels professionnels, créatifs et impactants.
            </p>
            <a href="#devis">
              <Button className="bg-[#F6A61A] hover:bg-[#e09310] text-[#0B1220] font-black px-10 py-6 text-xl rounded-full shadow-[0_10px_40px_rgba(246,166,26,0.4)] transition-all transform hover:scale-105">
                Demander un devis
              </Button>
            </a>
          </div>
        </section>

        {/* MODAL LECTEUR VIDÉO LIGHTBOX */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedVideo(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-[#F6A61A] transition-colors">
              <X size={44} />
            </button>
            
            <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black" onClick={(e) => e.stopPropagation()}>
              <video 
                key={selectedVideo}
                className="w-full h-full" 
                controls 
                autoPlay 
                src={selectedVideo}
              >
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>
          </div>
        )}

      </main>

      {/* CORRECTION 3 : Footer ré-isolé dans un fond blanc uni pure */}
      <div className="bg-white text-gray-800">
        <Footer />
      </div>
    </div>
  );
};

export default SunuLinkProd;
