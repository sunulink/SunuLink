import { useState, useEffect, useRef, ChangeEvent, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  ChevronUp, 
  X, 
  Play, 
  CheckCircle2, 
  Upload, 
  Calendar, 
  Users, 
  Sparkles, 
  Star, 
  Award, 
  Clock, 
  Target, 
  ShieldCheck, 
  Layers, 
  Video, 
  Mic, 
  Palette, 
  Wrench, 
  Tv, 
  ChevronLeft, 
  ChevronRight,
  ArrowRight
} from "lucide-react";

// ==========================================
// COMPOSANT COMPTEUR ANIMÉ (Back-office prêt)
// ==========================================
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) setIsVisible(true);
    }, { threshold: 0.1 });
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={counterRef}>{count}{suffix}</span>;
};

// ==========================================
// DATA DES DOMAINES D'INTERVENTION (12 items)
// ==========================================
const servicesData = [
  {
    id: "conf-forums",
    title: "Conférences & Forums",
    desc: "Organisation complète de conférences, colloques, panels, forums et rencontres professionnelles.",
    icon: Mic,
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
    subServices: ["Coordination générale", "Gestion des intervenants", "Gestion des inscriptions", "Badges", "Signalétique", "Régie technique", "Captation", "Streaming", "Accueil", "Gestion protocolaire"]
  },
  {
    id: "seminaires",
    title: "Séminaires d’entreprise",
    desc: "Conception de séminaires favorisant la cohésion, la réflexion stratégique et le partage de connaissances.",
    icon: Users,
    img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800",
    subServices: ["Recherche de lieu", "Hébergement", "Transport", "Pause café", "Déjeuner", "Supports", "Coordination"]
  },
  {
    id: "lancements",
    title: "Lancements de produits",
    desc: "Créer un lancement spectaculaire qui attire l’attention de votre cible et des médias.",
    icon: Sparkles,
    img: "https://images.unsplash.com/photo-1505232458627-467264a36934?auto=format&fit=crop&q=80&w=800",
    subServices: ["Concept créatif", "Mise en scène", "Invitation", "Presse", "Influenceurs", "Vidéo", "Animation", "Branding"]
  },
  {
    id: "galas",
    title: "Galas & Remises de prix",
    desc: "Organisation de cérémonies prestigieuses mettant en valeur les réussites et les talents.",
    icon: Award,
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    subServices: ["Décoration", "Tapis rouge", "Sonorisation", "Éclairage", "Animation", "Présentateur", "Captation vidéo", "Photographie"]
  },
  {
    id: "teambuilding",
    title: "Team Building",
    desc: "Renforcez la cohésion de vos équipes grâce à des expériences engageantes.",
    icon: Users,
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    subServices: ["Jeux collaboratifs", "Activités sportives", "Challenges", "Coaching", "Animations", "Soirée d’entreprise"]
  },
  {
    id: "salons",
    title: "Salons & Expositions",
    desc: "Conception et coordination de votre présence sur les salons professionnels.",
    icon: Layers,
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
    subServices: ["Stand", "Habillage graphique", "Signalétique", "Hôtesses", "Accueil", "Mobilier", "Audiovisuel"]
  },
  {
    id: "roadshows",
    title: "Roadshows & Tournées",
    desc: "Organisation de campagnes itinérantes dans plusieurs villes ou pays.",
    icon: Target,
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
    subServices: ["Logistique", "Coordination", "Véhicules", "Planning", "Autorisations", "Promotion"]
  },
  {
    id: "brand-exp",
    title: "Brand Experience",
    desc: "Créer des expériences immersives qui renforcent l’attachement à votre marque.",
    icon: Sparkles,
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
    subServices: ["Activation de marque", "Pop-up", "Expériences interactives", "Installations immersives", "Animations digitales"]
  },
  {
    id: "hybrides",
    title: "Événements hybrides & virtuels",
    desc: "Production d’événements combinant présentiel et digital.",
    icon: Video,
    img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=800",
    subServices: ["Plateforme de diffusion", "Régie live", "Streaming HD", "Interactivité", "Captation multicaméra"]
  },
  {
    id: "scenographie",
    title: "Décoration & Scénographie",
    desc: "Création d’univers visuels adaptés à votre événement.",
    icon: Palette,
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800",
    subServices: ["Design de scène", "Décoration florale", "Éclairage architectural", "Mobilier", "Signalétique", "Photobooth"]
  },
  {
    id: "technique",
    title: "Production technique",
    desc: "Gestion complète de tous les aspects techniques.",
    icon: Wrench,
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
    subServices: ["Son", "Lumière", "LED", "Écran géant", "Vidéoprojection", "Régie", "Générateur", "Internet"]
  },
  {
    id: "media",
    title: "Couverture Média",
    desc: "Immortalisez votre événement avec une couverture professionnelle.",
    icon: Tv,
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
    subServices: ["Photographie", "Vidéo", "Drone", "Interviews", "Aftermovie", "Reels", "Live social media"]
  }
];

// ==========================================
// TIMELINE DE LA MÉTHODE (10 étapes)
// ==========================================
const methodSteps = [
  { step: "01", title: "Découverte", desc: "Compréhension fine de vos objectifs, vos cibles et vos exigences." },
  { step: "02", title: "Analyse", desc: "Étude de faisabilité, cadrage budgétaire et analyse de l'environnement." },
  { step: "03", title: "Concept créatif", desc: "Élaboration du storytelling, du thème visuel et de l'expérience globale." },
  { step: "04", title: "Planification", desc: "Rétroplanning détaillé, allocation des ressources et gestion des risques." },
  { step: "05", title: "Préparation", desc: "Réservations, production des supports, repérages techniques et scénographie." },
  { step: "06", title: "Production", desc: "Fabrication, personnalisation, montage technique et répétitions générales." },
  { step: "07", title: "Coordination", desc: "Pilotage complet du jour J par une régie dédiée et synchronisée." },
  { step: "08", title: "Suivi en temps réel", desc: "Contrôle continu des flux, de la sécurité et du bien-être des invités." },
  { step: "09", title: "Post-production", desc: "Montage vidéo aftermovie, retouche photo et diffusion des contenus." },
  { step: "10", title: "Bilan", desc: "Analyse des retours, rapport de performance et debriefing complet." }
];

// ==========================================
// PORQUOI CHOISIR (6 cartes)
// ==========================================
const whyUsData = [
  { title: "Approche stratégique", desc: "Chaque événement est pensé comme un levier direct pour votre image de marque et vos objectifs d'affaires." },
  { title: "Créativité", desc: "Des scénographies immersives et des concepts innovants qui émerveillent et marquent durablement." },
  { title: "Excellence opérationnelle", desc: "Une rigueur millimétrée dans la logistique, la régie et le respect strict du cahier des charges." },
  { title: "Équipe expérimentée", desc: "Des professionnels passionnés, experts du secteur événementiel institutionnel et corporate." },
  { title: "Solutions sur mesure", desc: "Adaptabilité totale à vos enjeux, contraintes d'espace, de temps et d'identité de marque." },
  { title: "Respect des délais", desc: "Une maîtrise parfaite du temps et une planification rigoureuse pour une sérénité garantie." }
];

// ==========================================
// GALERIE MASONRY FILTRABLE
// ==========================================
const galleryData = [
  { id: 1, category: "Corporate", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1000", title: "Sommet annuel de l'Innovation" },
  { id: 2, category: "Conférences", img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1000", title: "Conférence Internationale Dakar" },
  { id: 3, category: "Gala", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000", title: "Gala Prestige RSE" },
  { id: 4, category: "Lancement", img: "https://images.unsplash.com/photo-1505232458627-467264a36934?auto=format&fit=crop&q=80&w=1000", title: "Reveal Automobile VIP" },
  { id: 5, category: "Séminaires", img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=1000", title: "Séminaire de Direction" },
  { id: 6, category: "Team Building", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000", title: "Challenge Inter-entreprises" },
  { id: 7, category: "Gala", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000", title: "Cérémonie d'Excellence" },
  { id: 8, category: "Conférences", img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=1000", title: "Forum Économique Hybride" }
];

// ==========================================
// TÉMOIGNAGES
// ==========================================
const testimonialsData = [
  {
    name: "Aminata Diallo",
    role: "Directrice de la Communication",
    company: "Groupement Bancaire Régional",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    text: "SunuLink Events a orchestré notre sommet annuel avec une précision chirurgicale. La scènographie LED et la gestion de nos 400 délégués VIP étaient irréprochables."
  },
  {
    name: "Jean-Michel Dupont",
    role: "CEO West Africa",
    company: "Tech Global Solutions",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    text: "Pour le lancement de notre nouvelle filiale à Dakar, la création du concept et la couverture média ont dépassé toutes nos attentes. Un partenaire véritablement haut de gamme."
  },
  {
    name: "Ousmane Sarr",
    role: "Président du Comité d'Organisation",
    company: "Forum National de l'Énergie",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    text: "Une rigueur absolue du cadrage stratégique jusqu'au bilan final. La régie technique et le streaming HD ont permis d'engager plus de 3000 participants en ligne."
  }
];

// ==========================================
// FAQ
// ==========================================
const faqData = [
  { q: "Proposez-vous une organisation complète de l'événement ?", a: "Oui, SunuLink Events assure la gestion globale 'clé en main' : conception, logistique, réservation des lieux, scénographie, régie technique, accueil et suivi post-événement." },
  { q: "Intervenez-vous partout au Sénégal ?", a: "Absolument. Nous déployons nos équipes et nos équipements de pointe sur l'ensemble du territoire sénégalais (Dakar, Saly, Saint-Louis, Ziguinchor, etc.)." },
  { q: "Pouvez-vous organiser des événements internationaux ?", a: "Tout à fait. Nous accompagnons nos clients institutionnels et corporate sur toute la région Ouest-Africaine et gérons la logistique internationale (intervenants, interprétation, protocoles)." },
  { q: "Quels sont vos délais pour la planification d'un événement ?", a: "Les délais varient selon l'envergure. Nous recommandons un délai de 2 à 3 mois pour les grands forums/galas, mais notre réactivité nous permet d'orchestrer des événements sous quelques semaines en cas d'urgence." },
  { q: "Comment gérez-vous l'accueil et le suivi des invités ?", a: "Nous mettons en place des plateformes de réservation en ligne, la gestion des invitations personnalisées, le badgeage QR code, l'accueil protocolaire et des hôtesses qualifiées." },
  { q: "La production audiovisuelle est-elle incluse ?", a: "Oui, nous disposons d'une pôle audiovisuel interne (captation 4K, drones, régie multi-caméras, streaming HD, montage aftermovie et reels)." },
  { q: "Proposez-vous un accompagnement en communication événementielle ?", a: "En tant que département de Sunu Link Consulting, nous concevons toute la stratégie média, le branding, les relations presse et la campagne digitale avant, pendant et après l'événement." }
];

export default function SunuLinkEvents() {
  // États pour les composants interactifs
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // État du formulaire Devis
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    eventTypes: [] as string[],
    participants: "",
    services: [] as string[],
    desiredDate: "",
    location: "",
    description: "",
    files: [] as File[]
  });

  // Filtrage de la galerie
  const filteredGallery = activeFilter === "Tous" 
    ? galleryData 
    : galleryData.filter(item => item.category.toLowerCase() === activeFilter.toLowerCase());

  // Navigation Témoignages
  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);

  // Gestionnaires du formulaire Devis
  const handleCheckboxChange = (category: 'eventTypes' | 'services', value: string) => {
    setFormData(prev => {
      const list = prev[category];
      if (list.includes(value)) {
        return { ...prev, [category]: list.filter(item => item !== value) };
      } else {
        return { ...prev, [category]: [...list, value] };
      }
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, files: [...prev.files, ...Array.from(e.target.files!)] }));
    }
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({ ...prev, files: prev.files.filter((_, i) => i !== index) }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Votre demande de devis sur mesure a été transmise avec succès à l'équipe SunuLink Events.");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0B1220] text-white font-['Lato',sans-serif] overflow-x-hidden">
      <Header />

      {/* ==========================================
          HERO SECTION
      ========================================== */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
        {/* Vidéo Fond avec Overlay Sombre 60% */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1920"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-stage-lights-and-crowd-at-a-concert-41355-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0B1220]/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Gauche : Textes & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-[#0071BC]/30 border border-[#009CDE]/50 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider text-[#F6A61A] uppercase backdrop-blur-md">
              <Sparkles size={16} />
              <span>Organisation • Production • Expérience</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-serif font-black tracking-tight text-white uppercase leading-none">
              SunuLink <span className="text-[#009CDE]">Events</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 font-light leading-relaxed max-w-2xl">
              Nous imaginons, concevons et réalisons des événements qui valorisent votre image, fédèrent vos publics et créent des expériences mémorables. De la stratégie à l’exécution, nous transformons chaque projet en un moment d’exception.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={() => scrollToSection("devis")}
                className="bg-[#F6A61A] hover:bg-[#0071BC] text-white font-bold px-8 py-6 rounded-full text-base transition-all transform hover:-translate-y-1 shadow-lg shadow-[#F6A61A]/20"
              >
                Demander un devis
              </Button>
              <Button 
                onClick={() => scrollToSection("galerie")}
                variant="outline"
                className="border-2 border-white/80 hover:border-[#009CDE] text-white bg-white/10 hover:bg-[#009CDE]/20 font-bold px-8 py-6 rounded-full text-base backdrop-blur-md transition-all"
              >
                Voir nos réalisations
              </Button>
            </div>
          </div>

          {/* Droite : Vidéo/Photo Premium secondaire */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl shadow-[#0071BC]/30 group">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800" 
                alt="SunuLink Events Experience" 
                className="w-full h-[380px] sm:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15">
                <p className="text-xs font-bold uppercase tracking-widest text-[#F6A61A]">Excellence Événementielle</p>
                <p className="text-sm text-white font-medium">Création d'espaces immersifs & scénographies sur mesure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION : NOTRE VISION (Fond Clair)
      ========================================== */}
      <section className="py-24 px-6 bg-[#EAEAEA] text-[#111827]">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block bg-[#0071BC]/10 text-[#0071BC] font-extrabold text-xs uppercase px-3 py-1 rounded-full">
              Notre Vision
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight leading-tight text-[#0B1220]">
              Créer des événements qui marquent les esprits.
            </h2>
            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                Chaque événement est une opportunité unique de raconter votre histoire, de valoriser votre identité et de renforcer votre notoriété.
              </p>
              <p>
                Chez <strong>SunuLink Events</strong>, nous réunissons stratégie, créativité, production et excellence opérationnelle afin de concevoir des expériences qui génèrent de l’émotion, de l’engagement et des résultats durables.
              </p>
              <p className="font-semibold text-[#0071BC]">
                Notre ambition est de transformer chaque événement en un véritable levier de communication et de développement.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Réunion d'équipe devant un plan d'événement" 
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-[#0071BC]/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION : NOS DOMAINES D'INTERVENTION (12 Cartes)
      ========================================== */}
      <section className="py-24 px-6 bg-[#0B1220] text-white">
        <div className="container mx-auto max-w-7xl text-center mb-16">
          <span className="text-[#F6A61A] font-bold text-xs uppercase tracking-widest">Savoir-Faire Global</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black uppercase mt-2">Nos Domaines d’Intervention</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">Une expertise intégrée pour répondre à toutes les exigences événementielles.</p>
        </div>

        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
            const isExpanded = expandedCard === service.id;

            return (
              <div 
                key={service.id}
                className="bg-[#111827] border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:border-[#009CDE]/50 transition-all flex flex-col group hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-[#0071BC] p-3 rounded-2xl shadow-lg">
                    <Icon className="text-white" size={24} />
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.desc}</p>

                    {/* Zone Sous-services dépliable */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-white/10 animate-in fade-in duration-300">
                        <p className="text-xs font-bold uppercase text-[#F6A61A] mb-2">Sous-services inclus :</p>
                        <ul className="grid grid-cols-1 gap-1.5 text-xs text-gray-300">
                          {service.subServices.map((sub, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle2 size={12} className="text-[#009CDE] flex-shrink-0" />
                              <span>{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => setExpandedCard(isExpanded ? null : service.id)}
                    className="mt-6 flex items-center justify-between text-sm font-bold text-[#009CDE] hover:text-[#F6A61A] transition-colors pt-2"
                  >
                    <span>{isExpanded ? "Voir moins" : "En savoir plus"}</span>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==========================================
          SECTION : NOTRE MÉTHODE (Timeline 10 étapes)
      ========================================== */}
      <section className="py-24 px-6 bg-[#111827] text-white border-t border-white/5">
        <div className="container mx-auto max-w-7xl text-center mb-16">
          <span className="text-[#009CDE] font-bold text-xs uppercase tracking-widest">Processus d'Excellence</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black uppercase mt-2">Notre Méthode</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">10 étapes structurées pour une exécution fluide et sans imprévu.</p>
        </div>

        <div className="container mx-auto max-w-5xl">
          <div className="relative border-l-2 border-[#0071BC]/40 ml-4 md:ml-32 space-y-12">
            {methodSteps.map((stepItem, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                {/* Pastille Numéro */}
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#0071BC] text-white font-black text-xs flex items-center justify-center border-4 border-[#111827] group-hover:bg-[#F6A61A] transition-colors">
                  {stepItem.step}
                </div>

                <div className="bg-[#0B1220] border border-white/10 p-6 rounded-2xl hover:border-[#009CDE]/50 transition-all">
                  <h3 className="text-lg font-serif font-bold text-[#009CDE] mb-1">{stepItem.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{stepItem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION : POURQUOI CHOISIR SUNULINK EVENTS ?
      ========================================== */}
      <section className="py-24 px-6 bg-[#EAEAEA] text-[#111827]">
        <div className="container mx-auto max-w-7xl text-center mb-16">
          <span className="text-[#0071BC] font-extrabold text-xs uppercase tracking-widest">Atouts Clés</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#0B1220] uppercase mt-2">Pourquoi Choisir SunuLink Events ?</h2>
        </div>

        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUsData.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#0071BC]/10 text-[#0071BC] flex items-center justify-center font-bold text-xl mb-6">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-serif font-bold text-[#0B1220] mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          SECTION : CHIFFRES CLÉS (Compteurs Animés)
      ========================================== */}
      <section className="py-20 px-6 bg-[#0071BC] text-white">
        <div className="container mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <h3 className="text-4xl sm:text-6xl font-serif font-black text-[#F6A61A] mb-2">
              <AnimatedCounter end={120} suffix="+" />
            </h3>
            <p className="text-sm font-bold uppercase tracking-wider text-gray-100">Événements organisés</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl sm:text-6xl font-serif font-black text-[#F6A61A] mb-2">
              <AnimatedCounter end={85} suffix="+" />
            </h3>
            <p className="text-sm font-bold uppercase tracking-wider text-gray-100">Clients accompagnés</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl sm:text-6xl font-serif font-black text-[#F6A61A] mb-2">
              <AnimatedCounter end={4500} suffix="h" />
            </h3>
            <p className="text-sm font-bold uppercase tracking-wider text-gray-100">Heures de production</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl sm:text-6xl font-serif font-black text-[#F6A61A] mb-2">
              <AnimatedCounter end={99} suffix="%" />
            </h3>
            <p className="text-sm font-bold uppercase tracking-wider text-gray-100">Taux de satisfaction</p>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION : GALERIE (Masonry & Lightbox)
      ========================================== */}
      <section id="galerie" className="py-24 px-6 bg-[#0B1220] text-white">
        <div className="container mx-auto max-w-7xl text-center mb-12">
          <span className="text-[#F6A61A] font-bold text-xs uppercase tracking-widest">Portfolio Premium</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black uppercase mt-2">Galerie de Réalisations</h2>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["Tous", "Corporate", "Conférences", "Séminaires", "Gala", "Lancement", "Team Building"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  activeFilter === filter 
                    ? "bg-[#009CDE] text-white shadow-lg shadow-[#009CDE]/30" 
                    : "bg-[#111827] text-gray-400 hover:bg-white/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grille Galerie */}
        <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedGalleryImg(item.img)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-[#111827]"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#F6A61A] bg-black/40 px-2 py-1 rounded-md backdrop-blur-sm">
                  {item.category}
                </span>
                <h4 className="text-white text-base font-bold mt-2 font-serif">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedGalleryImg && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md animate-in fade-in"
            onClick={() => setSelectedGalleryImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white bg-[#F6A61A] p-3 rounded-full hover:bg-white hover:text-[#0B1220] transition-all"
              onClick={() => setSelectedGalleryImg(null)}
            >
              <X size={28} />
            </button>
            <img 
              src={selectedGalleryImg} 
              alt="Zoom Réalisation" 
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl border border-white/20 object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </section>

      {/* ==========================================
          SECTION : VIDÉO DE PRÉSENTATION
      ========================================== */}
      <section className="py-24 px-6 bg-[#111827] text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="text-[#009CDE] font-bold text-xs uppercase tracking-widest">Immersion Totale</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black uppercase mt-2 mb-12">
            Découvrez l’expérience SunuLink Events
          </h2>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video bg-black">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0" 
              title="SunuLink Events Presentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION : TÉMOIGNAGES (Slider)
      ========================================== */}
      <section className="py-24 px-6 bg-[#EAEAEA] text-[#111827]">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-[#0071BC] font-extrabold text-xs uppercase tracking-widest">Avis Clients</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#0B1220] uppercase mt-2 mb-12">Ils Nous Font Confiance</h2>

          <div className="relative bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-200">
            <div className="flex justify-center mb-6 text-[#F6A61A]">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#F6A61A" />)}
            </div>

            <p className="text-gray-700 text-lg sm:text-xl italic mb-8 leading-relaxed">
              "{testimonialsData[currentTestimonial].text}"
            </p>

            <div className="flex items-center justify-center gap-4">
              <img 
                src={testimonialsData[currentTestimonial].photo} 
                alt={testimonialsData[currentTestimonial].name} 
                className="w-14 h-14 rounded-full object-cover border-2 border-[#0071BC]"
              />
              <div className="text-left">
                <h4 className="font-serif font-bold text-[#0B1220] text-base">{testimonialsData[currentTestimonial].name}</h4>
                <p className="text-xs text-gray-500">{testimonialsData[currentTestimonial].role} - <span className="text-[#0071BC] font-semibold">{testimonialsData[currentTestimonial].company}</span></p>
              </div>
            </div>

            {/* Controls Slider */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
              <button onClick={prevTestimonial} className="p-3 bg-gray-100 rounded-full hover:bg-[#0071BC] hover:text-white transition-all">
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {testimonialsData.map((_, i) => (
                  <span 
                    key={i} 
                    className={`h-2 rounded-full transition-all ${i === currentTestimonial ? "w-8 bg-[#0071BC]" : "w-2 bg-gray-300"}`}
                  ></span>
                ))}
              </div>
              <button onClick={nextTestimonial} className="p-3 bg-gray-100 rounded-full hover:bg-[#0071BC] hover:text-white transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION : FAQ
      ========================================== */}
      <section className="py-24 px-6 bg-[#0B1220] text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-[#F6A61A] font-bold text-xs uppercase tracking-widest">Foire Aux Questions</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-black uppercase mt-2">Questions Fréquentes</h2>
          </div>

          <div className="space-y-4">
            {faqData.map((item, idx) => (
              <div key={idx} className="bg-[#111827] border border-white/10 rounded-2xl overflow-hidden transition-all">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left font-serif font-bold text-lg flex items-center justify-between text-white hover:text-[#009CDE] transition-colors"
                >
                  <span>{item.q}</span>
                  {openFaq === idx ? <ChevronUp size={20} className="text-[#F6A61A]" /> : <ChevronDown size={20} />}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-gray-300 border-t border-white/5 pt-4 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION : DEMANDE DE DEVIS COMPLÈTE
      ========================================== */}
      <section id="devis" className="py-24 px-6 bg-[#111827] text-white">
        <div className="container mx-auto max-w-5xl bg-[#0B1220] border border-white/10 p-8 sm:p-12 rounded-3xl shadow-2xl">
          <div className="text-center mb-12">
            <span className="text-[#F6A61A] font-bold text-xs uppercase tracking-widest">Sur Mesure</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-black uppercase mt-2">Demander un Devis Events</h2>
            <p className="text-gray-400 text-sm mt-2">Complétez vos besoins spécifiques pour recevoir une proposition détaillée.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Informations de contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-300 mb-2">Nom complet *</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#111827] border border-white/15 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#009CDE]"
                  placeholder="Ex: Babacar Diop"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-300 mb-2">Email *</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#111827] border border-white/15 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#009CDE]"
                  placeholder="Ex: contact@entreprise.sn"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-300 mb-2">Téléphone *</label>
                <input 
                  type="tel" 
                  required 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-[#111827] border border-white/15 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#009CDE]"
                  placeholder="+221 77 000 00 00"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-300 mb-2">Entreprise / Organisation</label>
                <input 
                  type="text" 
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full bg-[#111827] border border-white/15 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#009CDE]"
                  placeholder="Nom de votre structure"
                />
              </div>
            </div>

            {/* Pochette Type d’événement */}
            <div>
              <label className="block text-sm font-serif font-bold text-[#F6A61A] mb-4 uppercase">Type d’événement (Cochez)</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  "Conférence", "Forum", "Séminaire", "Gala", "Lancement de produit", "Salon", "Exposition", "Team Building", "Roadshow", "Activité RSE", "Soirée d’entreprise", "Assemblée générale", "Cérémonie officielle", "Festival", "Événement sportif", "Événement culturel", "Mariage premium", "Anniversaire VIP", "Autre"
                ].map((type) => (
                  <label key={type} className="flex items-center gap-2 bg-[#111827] p-3 rounded-xl border border-white/5 cursor-pointer hover:border-[#009CDE] text-xs">
                    <input 
                      type="checkbox" 
                      checked={formData.eventTypes.includes(type)}
                      onChange={() => handleCheckboxChange('eventTypes', type)}
                      className="accent-[#0071BC]"
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Nombre de participants */}
            <div>
              <label className="block text-sm font-serif font-bold text-[#F6A61A] mb-4 uppercase">Nombre de participants</label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {["Moins de 50", "50 à 100", "100 à 300", "300 à 500", "Plus de 1000"].map((range) => (
                  <label key={range} className={`p-3 rounded-xl border cursor-pointer text-center text-xs font-bold transition-all ${
                    formData.participants === range 
                      ? "bg-[#0071BC] border-[#009CDE] text-white" 
                      : "bg-[#111827] border-white/5 text-gray-300 hover:border-white/20"
                  }`}>
                    <input 
                      type="radio" 
                      name="participants" 
                      value={range} 
                      onChange={(e) => setFormData({...formData, participants: e.target.value})}
                      className="hidden" 
                    />
                    <span>{range}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Prestations souhaitées */}
            <div>
              <label className="block text-sm font-serif font-bold text-[#F6A61A] mb-4 uppercase">Prestations souhaitées</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  "Organisation complète", "Coordination le jour J", "Recherche de lieu", "Décoration", "Scénographie", "Mobilier", "Sonorisation", "Éclairage", "Écrans LED", "Captation photo", "Captation vidéo", "Drone", "Streaming", "Animation", "Maître de cérémonie", "Hôtesses d’accueil", "Sécurité", "Restauration", "Signalétique", "Impression des supports", "Cadeaux personnalisés", "Communication de l’événement", "Gestion des invitations", "Gestion des inscriptions", "Autre"
                ].map((service) => (
                  <label key={service} className="flex items-center gap-2 bg-[#111827] p-3 rounded-xl border border-white/5 cursor-pointer hover:border-[#009CDE] text-xs">
                    <input 
                      type="checkbox" 
                      checked={formData.services.includes(service)}
                      onChange={() => handleCheckboxChange('services', service)}
                      className="accent-[#0071BC]"
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Date et Lieu */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-300 mb-2">Date souhaitée</label>
                <input 
                  type="date" 
                  value={formData.desiredDate}
                  onChange={(e) => setFormData({...formData, desiredDate: e.target.value})}
                  className="w-full bg-[#111827] border border-white/15 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#009CDE]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-300 mb-2">Lieu pressenti</label>
                <input 
                  type="text" 
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full bg-[#111827] border border-white/15 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#009CDE]"
                  placeholder="Ex: Dakar, Saly, Hôtel Terrou-Bi..."
                />
              </div>
            </div>

            {/* Description du projet */}
            <div>
              <label className="block text-xs font-bold uppercase text-gray-300 mb-2">Description du projet</label>
              <textarea 
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full bg-[#111827] border border-white/15 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#009CDE]"
                placeholder="Détaillez vos attentes, objectifs et contraintes..."
              ></textarea>
            </div>

            {/* Pièces jointes multi-fichiers */}
            <div>
              <label className="block text-xs font-bold uppercase text-gray-300 mb-2">Pièces jointes (PDF, Word, Excel, PPT, ZIP, Images)</label>
              <div className="border-2 border-dashed border-white/15 rounded-2xl p-6 text-center bg-[#111827] hover:border-[#009CDE] transition-colors relative cursor-pointer">
                <input 
                  type="file" 
                  multiple 
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip,image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <Upload className="mx-auto text-[#009CDE] mb-2" size={32} />
                <p className="text-xs text-gray-400">Cliquez ou glissez vos fichiers ici</p>
              </div>

              {formData.files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {formData.files.map((file, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-[#111827] p-3 rounded-lg text-xs border border-white/10">
                      <span className="truncate max-w-xs">{file.name}</span>
                      <button type="button" onClick={() => removeFile(idx)} className="text-red-400 hover:text-red-600">
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bouton de soumission */}
            <Button 
              type="submit" 
              className="w-full bg-[#F6A61A] hover:bg-[#0071BC] text-white font-bold py-6 rounded-2xl text-lg shadow-xl shadow-[#F6A61A]/20 transition-all"
            >
              Envoyer ma demande de devis
            </Button>
          </form>
        </div>
      </section>

      {/* ==========================================
          CTA FINAL
      ========================================== */}
      <section className="relative py-24 px-6 bg-[#0071BC] text-white overflow-hidden">
        {/* Effet lumineux discret */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#009CDE]/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#F6A61A]/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10 space-y-8">
          <h2 className="text-4xl sm:text-6xl font-serif font-black uppercase leading-tight">
            Transformons votre prochain événement en une expérience inoubliable.
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 font-light max-w-2xl mx-auto">
            De la première idée au dernier applaudissement, SunuLink Events met son expertise au service de votre réussite.
          </p>
          <div>
            <Button 
              onClick={() => scrollToSection("devis")}
              className="bg-[#F6A61A] hover:bg-white hover:text-[#0B1220] text-white font-bold px-10 py-6 rounded-full text-lg shadow-2xl transition-all transform hover:-translate-y-1"
            >
              Demander un devis
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
