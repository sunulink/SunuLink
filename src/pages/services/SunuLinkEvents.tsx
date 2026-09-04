import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Award, 
  Calendar, 
  CheckCircle, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  ChevronUp, 
  Clock, 
  Compass, 
  FileText, 
  Layers, 
  MapPin, 
  Megaphone, 
  Monitor, 
  Music, 
  Palette, 
  Play, 
  Send, 
  ShieldCheck, 
  Sparkles, 
  Star, 
  Target, 
  Upload, 
  Users, 
  Video, 
  X, 
  Zap,
  Loader2
} from 'lucide-react';

// Importation obligatoire de l'entête et du pied de page
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Type pour la gestion du formulaire
interface DevisFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  eventTypes: string[];
  participants: string;
  services: string[];
  desiredDate: string;
  location: string;
  description: string;
  files: File[];
}

export default function SunuLinkEventsPage() {
  const formRef = useRef<HTMLFormElement>(null);

  // États de l'application
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);
  const [activeGalleryFilter, setActiveGalleryFilter] = useState<string>('Tous');
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // États du traitement de l'envoi d'email
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // État du formulaire
  const [formData, setFormData] = useState<DevisFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventTypes: [],
    participants: '50 à 100',
    services: [],
    desiredDate: '',
    location: '',
    description: '',
    files: []
  });

  // Identifiants EmailJS issus de la configuration
  const EMAILJS_SERVICE_ID = 'service_hp5lf9h';
  const EMAILJS_TEMPLATE_CONTACT = 'template_5pljpzh';
  const EMAILJS_TEMPLATE_AUTOREPLY = 'template_clf4wp';
  const EMAILJS_PUBLIC_KEY = '1lk26ZAgIF5tij5ml'; // Remplacer par votre clé publique EmailJS (Account > Public Key)

  // Données - Domaines d'intervention
  const domainServices = [
    {
      id: 'conf',
      title: 'Conférences & Forums',
      desc: 'Organisation complète de conférences, colloques, panels, forums et rencontres professionnelles.',
      icon: <Users className="w-8 h-8 text-[#009CDE]" />,
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80',
      subServices: [
        'Coordination générale', 'Gestion des intervenants', 'Gestion des inscriptions',
        'Badges', 'Signalétique', 'Régie technique', 'Captation', 'Streaming', 'Accueil', 'Gestion protocolaire'
      ]
    },
    {
      id: 'seminaires',
      title: 'Séminaires d’entreprise',
      desc: 'Conception de séminaires favorisant la cohésion, la réflexion stratégique et le partage de connaissances.',
      icon: <Compass className="w-8 h-8 text-[#F6A61A]" />,
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80',
      subServices: [
        'Recherche de lieu', 'Hébergement', 'Transport', 'Pause café', 'Déjeuner', 'Supports', 'Coordination'
      ]
    },
    {
      id: 'lancements',
      title: 'Lancements de produits',
      desc: 'Créer un lancement spectaculaire qui attire l’attention de votre cible et des médias.',
      icon: <Zap className="w-8 h-8 text-[#009CDE]" />,
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80',
      subServices: [
        'Concept créatif', 'Mise en scène', 'Invitation', 'Presse', 'Influenceurs', 'Vidéo', 'Animation', 'Branding'
      ]
    },
    {
      id: 'galas',
      title: 'Galas & Remises de prix',
      desc: 'Organisation de cérémonies prestigieuses mettant en valeur les réussites et les talents.',
      icon: <Award className="w-8 h-8 text-[#F6A61A]" />,
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80',
      subServices: [
        'Décoration', 'Tapis rouge', 'Sonorisation', 'Éclairage', 'Animation', 'Présentateur', 'Captation vidéo', 'Photographie'
      ]
    },
    {
      id: 'team-building',
      title: 'Team Building',
      desc: 'Renforcez la cohésion de vos équipes grâce à des expériences engageantes.',
      icon: <Users className="w-8 h-8 text-[#009CDE]" />,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
      subServices: [
        'Jeux collaboratifs', 'Activités sportives', 'Challenges', 'Coaching', 'Animations', 'Soirée d’entreprise'
      ]
    },
    {
      id: 'salons',
      title: 'Salons & Expositions',
      desc: 'Conception et coordination de votre présence sur les salons professionnels.',
      icon: <Layers className="w-8 h-8 text-[#F6A61A]" />,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
      subServices: [
        'Stand', 'Habillage graphique', 'Signalétique', 'Hôtesses', 'Accueil', 'Mobilier', 'Audiovisuel'
      ]
    },
    {
      id: 'roadshows',
      title: 'Roadshows & Tournées',
      desc: 'Organisation de campagnes itinérantes dans plusieurs villes ou pays.',
      icon: <MapPin className="w-8 h-8 text-[#009CDE]" />,
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80',
      subServices: [
        'Logistique', 'Coordination', 'Véhicules', 'Planning', 'Autorisations', 'Promotion'
      ]
    },
    {
      id: 'brand-exp',
      title: 'Brand Experience',
      desc: 'Créer des expériences immersives qui renforcent l’attachement à votre marque.',
      icon: <Sparkles className="w-8 h-8 text-[#F6A61A]" />,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
      subServices: [
        'Activation de marque', 'Pop-up', 'Expériences interactives', 'Installations immersives', 'Animations digitales'
      ]
    },
    {
      id: 'hybrides',
      title: 'Événements hybrides & virtuels',
      desc: 'Production d’événements combinant présentiel et digital.',
      icon: <Monitor className="w-8 h-8 text-[#009CDE]" />,
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80',
      subServices: [
        'Plateforme de diffusion', 'Régie live', 'Streaming HD', 'Interactivité', 'Captation multicaméra'
      ]
    },
    {
      id: 'sceno',
      title: 'Décoration & Scénographie',
      desc: 'Création d’univers visuels adaptés à votre événement.',
      icon: <Palette className="w-8 h-8 text-[#F6A61A]" />,
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80',
      subServices: [
        'Design de scène', 'Décoration florale', 'Éclairage architectural', 'Mobilier', 'Signalétique', 'Photobooth'
      ]
    },
    {
      id: 'tech',
      title: 'Production technique',
      desc: 'Gestion complète de tous les aspects techniques.',
      icon: <Music className="w-8 h-8 text-[#009CDE]" />,
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80',
      subServices: [
        'Son', 'Lumière', 'LED', 'Écran géant', 'Vidéoprojection', 'Régie', 'Générateur', 'Internet'
      ]
    },
    {
      id: 'media',
      title: 'Couverture Média',
      desc: 'Immortalisez votre événement avec une couverture professionnelle.',
      icon: <Video className="w-8 h-8 text-[#F6A61A]" />,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80',
      subServices: [
        'Photographie', 'Vidéo', 'Drone', 'Interviews', 'Aftermovie', 'Reels', 'Live social media'
      ]
    }
  ];

  // Timeline - Notre Méthode
  const methodSteps = [
    { num: '01', title: 'Découverte', desc: 'Analyse initiale de vos objectifs, vos cibles et votre vision.' },
    { num: '02', title: 'Analyse', desc: 'Étude de faisabilité, contraintes budgétaires et logistiques.' },
    { num: '03', title: 'Concept créatif', desc: 'Élaboration de la ligne directrice, du thème et du storytelling.' },
    { num: '04', title: 'Planification', desc: 'Retroplanning détaillé, rétro-ingénierie et affectation des équipes.' },
    { num: '05', title: 'Préparation', desc: 'Réservations, design technique, prospection prestataires.' },
    { num: '06', title: 'Production', desc: 'Conception des éléments scénographiques et préparation des contenus.' },
    { num: '07', title: 'Coordination', desc: 'Montage, tests techniques et répétitions générales.' },
    { num: '08', title: 'Suivi en temps réel', desc: 'Régie direct le jour J, gestion protocolaire et logistique.' },
    { num: '09', title: 'Post-production', desc: 'Montage vidéo, retouches photos, revues médias.' },
    { num: '10', title: 'Bilan', desc: 'Rapport d’impact, retours participants et débrieffing client.' }
  ];

  // Pourquoi choisir SunuLink Events
  const whyUs = [
    { title: 'Approche stratégique', desc: 'Chaque événement est pensé comme un levier de croissance et de notoriété pour votre marque.' },
    { title: 'Créativité', desc: 'Des concepts uniques et sur mesure qui captivent et marquent les esprits de vos invités.' },
    { title: 'Excellence opérationnelle', desc: 'Une exécution rigoureuse sans compromis sur la qualité et la sécurité.' },
    { title: 'Équipe expérimentée', desc: 'Des experts passionnés du secteur événementiel et de la régie technique.' },
    { title: 'Solutions sur mesure', desc: 'Une adaptabilité totale à votre cahier des charges et à vos contraintes.' },
    { title: 'Respect des délais', desc: 'Rigueur absolue dans le calendrier de déploiement et la livraison des prestations.' }
  ];

  // Galerie
  const galleryItems = [
    { id: 1, title: 'Forum Économique', category: 'Conférences', img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80' },
    { id: 2, title: 'Soirée de Gala Annuelle', category: 'Gala', img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80' },
    { id: 3, title: 'Lancement Tech Innovation', category: 'Lancement', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80' },
    { id: 4, title: 'Séminaire Leadership', category: 'Séminaires', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80' },
    { id: 5, title: 'Team Building Nature', category: 'Team Building', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80' },
    { id: 6, title: 'Convention Corporate', category: 'Corporate', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80' }
  ];

  const galleryFilters = ['Tous', 'Corporate', 'Conférences', 'Séminaires', 'Gala', 'Lancement', 'Team Building'];

  const filteredGallery = activeGalleryFilter === 'Tous' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeGalleryFilter);

  // Témoignages
  const testimonials = [
    {
      name: 'Fatou Sow',
      role: 'Directrice Communication',
      company: 'TechCorp Africa',
      text: 'SunuLink a métamorphosé notre vision en une réalité époustouflante. L’organisation était d’une précision chirurgicale.'
    },
    {
      name: 'Ousmane Diallo',
      role: 'Chef de Projet Événementiel',
      company: 'Banque Régionale',
      text: 'Un partenaire de confiance absolu. La régie technique et la scénographie ont impressionné l’ensemble de nos invités VIP.'
    },
    {
      name: 'Aïssatou Ba',
      role: 'Responsable RSE',
      company: 'Groupement Industriel',
      text: 'Excellence, réactivité et créativité. SunuLink Events a su gérer notre forum international avec un professionnalisme remarquable.'
    }
  ];

  // FAQ
  const faqs = [
    { q: 'Proposez-vous une organisation complète de A à Z ?', a: 'Oui, nous gérons la totalité de votre événement : de la réflexion stratégique initiale, la scénographie, jusqu’à la régie technique et la post-production.' },
    { q: 'Intervenez-vous partout au Sénégal ?', a: 'Absolument. Nos équipes logistiques et techniques se déplacent sur l’ensemble du territoire national (Dakar, Thiès, Saint-Louis, Saly, Ziguinchor, etc.).' },
    { q: 'Organisez-vous des événements internationaux ?', a: 'Oui, nous accompagnons les organisations internationales et entreprises dans la sous-région et au-delà grâce à notre réseau de partenaires certifiés.' },
    { q: 'Quels sont vos délais de prise en charge ?', a: 'Bien que nous recommandions un délai de 2 à 3 mois pour les grands forums, nos équipes sont capables de déployer des événements en urgence sous 2 à 3 semaines.' },
    { q: 'Gérez-vous le protocole et les invités de marque (VIP) ?', a: 'Oui, nous disposons d’une équipe dédiée à l’accueil protocolaire, aux invitations personnalisées et à la sécurité des personnalités hautes autorités.' },
    { q: 'La production audiovisuelle est-elle incluse dans vos offres ?', a: 'Oui, nous disposons de nos propres équipements de captation, régies multicaméras HD/4K, écrans LED et drones.' },
    { q: 'Assurez-vous la communication média autour de l’événement ?', a: 'En lien étroit avec la branche SunuLink Consulting, nous élaborons le plan média, les relations presse, la gestion des réseaux sociaux et le live streaming.' }
  ];

  // Listes d'options pour le formulaire
  const allEventTypes = [
    'Conférence', 'Forum', 'Séminaire', 'Gala', 'Lancement de produit',
    'Salon', 'Exposition', 'Team Building', 'Roadshow', 'Activité RSE',
    'Soirée d’entreprise', 'Assemblée générale', 'Cérémonie officielle',
    'Festival', 'Événement sportif', 'Événement culturel', 'Mariage premium',
    'Anniversaire VIP', 'Autre'
  ];

  const allServicesOptions = [
    'Organisation complète', 'Coordination le jour J', 'Recherche de lieu', 'Décoration',
    'Scénographie', 'Mobilier', 'Sonorisation', 'Éclairage', 'Écrans LED',
    'Captation photo', 'Captation vidéo', 'Drone', 'Streaming', 'Animation',
    'Maître de cérémonie', 'Hôtesses d’accueil', 'Sécurité', 'Restauration',
    'Signalétique', 'Impression des supports', 'Cadeaux personnalisés',
    'Communication de l’événement', 'Gestion des invitations', 'Gestion des inscriptions', 'Autre'
  ];

  // Handlers du formulaire
  const handleEventTypeToggle = (type: string) => {
    setFormData(prev => ({
      ...prev,
      eventTypes: prev.eventTypes.includes(type)
        ? prev.eventTypes.filter(t => t !== type)
        : [...prev.eventTypes, type]
    }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFormData(prev => ({ ...prev, files: [...prev.files, ...newFiles] }));
    }
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  // Traitement et soumission du formulaire via EmailJS
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Éviter les doubles soumissions
  if (isSubmitting) return;

  setIsSubmitting(true);
  setSubmitStatus({
    type: null,
    message: ''
  });

  const templateParams = {
    // Informations du client
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    company: formData.company || 'Non renseignée',

    // Informations événement
    event_types:
      formData.eventTypes.length > 0
        ? formData.eventTypes.join(', ')
        : 'Non spécifié',

    participants: formData.participants,

    services:
      formData.services.length > 0
        ? formData.services.join(', ')
        : 'Non spécifié',

    desired_date: formData.desiredDate || 'Non communiquée',
    location: formData.location || 'Non précisé',

    // Message
    message: formData.description || 'Aucune description fournie',

    // Destinataires
    to_email: formData.email,
    admin_email: 'contact@sunulink.sn'
  };

  try {
    /*
     * =========================================================
     * 1. NOTIFICATION INTERNE
     * =========================================================
     *
     * Cette notification est envoyée à :
     * contact@sunulink.sn
     */
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_CONTACT,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('✅ Notification interne envoyée avec succès');
    } catch (notificationError) {
      console.error(
        '❌ Erreur notification interne EmailJS :',
        notificationError
      );

      throw new Error(
        'La notification destinée à SunuLink n’a pas pu être envoyée.'
      );
    }

    /*
     * =========================================================
     * 2. ACCUSÉ DE RÉCEPTION CLIENT
     * =========================================================
     *
     * Cette réponse est envoyée à :
     * l'adresse email saisie par le client
     */
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_AUTOREPLY,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('✅ Accusé de réception envoyé au client');
    } catch (autoReplyError) {
      console.error(
        '❌ Erreur accusé de réception EmailJS :',
        autoReplyError
      );

      /*
       * La demande interne a déjà été reçue.
       * On informe donc l'utilisateur que sa demande est bien
       * partie, même si l'accusé automatique a échoué.
       */
      setSubmitStatus({
        type: 'success',
        message:
          'Votre demande a bien été transmise à l’équipe SunuLink Events. Un accusé de réception vous a également été envoyé. Si vous ne le voyez pas, merci de bien verifier votre spam avant de nous le signaler !'
      });

      return;
    }

    /*
     * =========================================================
     * 3. SUCCÈS COMPLET
     * =========================================================
     */
    setSubmitStatus({
      type: 'success',
      message:
        'Votre demande de devis a bien été transmise à l’équipe SunuLink Events. Un accusé de réception vous a également été envoyé.'
    });

    /*
     * =========================================================
     * 4. RÉINITIALISATION DU FORMULAIRE
     * =========================================================
     */
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      eventTypes: [],
      participants: '50 à 100',
      services: [],
      desiredDate: '',
      location: '',
      description: '',
      files: []
    });

  } catch (error) {
    console.error('❌ Erreur lors de l’envoi EmailJS :', error);

    setSubmitStatus({
      type: 'error',
      message:
        'Une erreur est survenue lors de l’envoi de votre demande. Veuillez réessayer ou nous contacter directement.'
    });

  } finally {
    setIsSubmitting(false);
  }
};
  // Fin ConstHundleSubmit

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0B1220] text-[#EAEAEA] font-['Lato',sans-serif] min-h-screen selection:bg-[#009CDE] selection:text-white">
      {/* Header */}
      <Header />

      {/* ==========================================
          HERO SECTION
      ========================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-stage-lights-and-a-crowd-at-a-concert-42828-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0B1220]/60 backdrop-blur-[1px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center py-20 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0071BC]/30 border border-[#009CDE]/40 backdrop-blur-md mb-8 animate-pulse">
            <Sparkles className="w-4 h-4 text-[#F6A61A]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#EAEAEA]">
              Organisation • Production • Expérience
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-['Balgor',serif] uppercase tracking-tight text-white leading-tight mb-6">
            L'ART DE <br className="hidden sm:inline" />
            <span className="text-[#009CDE]">L'ÉVÉNEMENT </span>
            <span className="text-[#F6A61A]">CORPORATE</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Nous imaginons, concevons et réalisons des événements qui valorisent votre image, fédèrent vos publics et créent des expériences mémorables. De la stratégie à l’exécution, nous transformons chaque projet en un moment d’exception.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('devis')}
              className="w-full sm:w-auto px-8 py-4 bg-[#F6A61A] hover:bg-[#0071BC] text-white font-bold uppercase tracking-wider rounded-full shadow-lg hover:shadow-[#F6A61A]/30 transition-all duration-300 text-sm"
            >
              Demander un devis
            </button>
            <button
              onClick={() => scrollToSection('realisations')}
              className="w-full sm:w-auto px-8 py-4 border border-white/30 bg-black/30 hover:bg-white/10 text-white font-bold uppercase tracking-wider rounded-full backdrop-blur-md transition-all duration-300 text-sm flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-[#F6A61A]" /> Voir nos réalisations
            </button>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION : NOTRE VISION
      ========================================== */}
      <section className="py-24 px-6 bg-[#111827] border-t border-white/5">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#009CDE] font-bold text-xs uppercase tracking-widest block mb-2">Notre Vision</span>
            <h2 className="text-3xl sm:text-5xl font-['Balgor',serif] font-black uppercase text-white mb-6 leading-tight">
              Créer des événements qui marquent les esprits.
            </h2>
            <div className="space-y-4 text-gray-300 text-base leading-relaxed">
              <p>
                Chaque événement est une opportunité unique de raconter votre histoire, de valoriser votre identité et de renforcer votre notoriété.
              </p>
              <p>
                Chez <strong className="text-white">SunuLink Events</strong>, nous réunissons stratégie, créativité, production et excellence opérationnelle afin de concevoir des expériences qui génèrent de l’émotion, de l’engagement et des résultats durables.
              </p>
              <p className="border-l-4 border-[#F6A61A] pl-4 text-white font-medium italic">
                Notre ambition est de transformer chaque événement en un véritable levier de communication et de développement.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80"
              alt="Réunion d'équipe planification événement"
              className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[#F6A61A] text-xs font-bold uppercase tracking-widest block">Stratégie & Rigueur</span>
              <p className="text-white font-serif text-lg">Conception & organisation au millimètre près.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION : NOS DOMAINES D'INTERVENTION
      ========================================== */}
      <section className="py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#F6A61A] font-bold text-xs uppercase tracking-widest">Savoir-Faire Complète</span>
            <h2 className="text-3xl sm:text-5xl font-['Balgor',serif] font-black uppercase text-white mt-2">
              Nos Domaines d'Intervention
            </h2>
            <p className="text-gray-400 mt-4">Des prestations globales adaptées aux exigences des institutions, entreprises et grands groupes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domainServices.map((domain) => (
              <div
                key={domain.id}
                className="bg-[#111827] border border-white/10 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-[#009CDE]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={domain.image}
                      alt={domain.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent" />
                    <div className="absolute top-4 left-4 bg-[#0B1220]/80 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                      {domain.icon}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold font-['Balgor',serif] text-white mb-2">{domain.title}</h3>
                    <p className="text-sm text-gray-400 mb-6">{domain.desc}</p>

                    <div className="border-t border-white/5 pt-4">
                      <span className="text-xs font-bold uppercase text-[#009CDE] block mb-3">Sous-services inclus :</span>
                      <ul className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                        {domain.subServices.map((sub, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle className="w-3 h-3 text-[#F6A61A] shrink-0" />
                            <span className="truncate">{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => scrollToSection('devis')}
                    className="w-full py-3 rounded-xl bg-white/5 hover:bg-[#0071BC] text-white font-bold text-xs uppercase tracking-wider transition-colors border border-white/10"
                  >
                    En savoir plus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION : NOTRE MÉTHODE (Timeline)
      ========================================== */}
      <section className="py-24 px-6 bg-[#111827] border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#009CDE] font-bold text-xs uppercase tracking-widest">Processus Qualité</span>
            <h2 className="text-3xl sm:text-5xl font-['Balgor',serif] font-black uppercase text-white mt-2">
              Notre Méthode
            </h2>
            <p className="text-gray-400 mt-4">Une méthodologie structurée en 10 étapes clés pour garantir la réussite totale de votre événement.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {methodSteps.map((step) => (
              <div
                key={step.num}
                className="bg-[#0B1220] border border-white/10 p-6 rounded-2xl relative hover:border-[#F6A61A] transition-all group"
              >
                <span className="text-3xl font-black font-['Balgor',serif] text-[#F6A61A] block mb-2">{step.num}</span>
                <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION : POURQUOI CHOISIR SUNULINK EVENTS ?
      ========================================== */}
      <section className="py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#F6A61A] font-bold text-xs uppercase tracking-widest">Nos Atouts</span>
            <h2 className="text-3xl sm:text-5xl font-['Balgor',serif] font-black uppercase text-white mt-2">
              Pourquoi choisir SunuLink Events ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#111827] border border-white/10 hover:border-[#009CDE] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0071BC]/20 flex items-center justify-center text-[#009CDE] mb-6">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-['Balgor',serif] text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION : CHIFFRES CLÉS
      ========================================== */}
      <section className="py-16 px-6 bg-[#0071BC] text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl sm:text-6xl font-black font-['Balgor',serif] text-[#F6A61A] mb-2">15+</p>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/90">Événements</p>
            </div>
            <div>
              <p className="text-4xl sm:text-6xl font-black font-['Balgor',serif] text-[#F6A61A] mb-2">10+</p>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/90">Clients</p>
            </div>
            <div>
              <p className="text-4xl sm:text-6xl font-black font-['Balgor',serif] text-[#F6A61A] mb-2">350h</p>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/90">Heures Produites</p>
            </div>
            <div>
              <p className="text-4xl sm:text-6xl font-black font-['Balgor',serif] text-[#F6A61A] mb-2">100%</p>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/90">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION : GALERIE
      ========================================== */}
      <section id="realisations" className="py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#009CDE] font-bold text-xs uppercase tracking-widest">Portfolio</span>
            <h2 className="text-3xl sm:text-5xl font-['Balgor',serif] font-black uppercase text-white mt-2">
              Galerie nos Réalisations
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {galleryFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveGalleryFilter(filter)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeGalleryFilter === filter
                    ? 'bg-[#F6A61A] text-white shadow-lg'
                    : 'bg-[#111827] text-gray-400 hover:text-white border border-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedGalleryImg(item.img)}
                className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer border border-white/10 shadow-lg hover:border-[#009CDE]/50 transition-all"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/30 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs font-bold uppercase text-[#F6A61A] mb-1">{item.category}</span>
                  <h4 className="text-lg font-['Balgor',serif] font-bold text-white">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>

          {selectedGalleryImg && (
            <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
              <button
                onClick={() => setSelectedGalleryImg(null)}
                className="absolute top-6 right-6 text-white hover:text-[#F6A61A] transition-colors p-2 bg-white/10 rounded-full"
              >
                <X className="w-7 h-7" />
              </button>
              <img
                src={selectedGalleryImg}
                alt="Agrandissement"
                className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/20"
              />
            </div>
          )}
        </div>
      </section>

      {/* ==========================================
          SECTION : VIDÉO DÉMONSTRATION
      ========================================== */}
      <section className="py-24 px-6 bg-[#111827] border-t border-white/5">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="text-[#F6A61A] font-bold text-xs uppercase tracking-widest">Immersion</span>
          <h2 className="text-3xl sm:text-5xl font-['Balgor',serif] font-black uppercase text-white mt-2 mb-12">
            Découvrez l’expérience SunuLink Events
          </h2>

          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B1220] aspect-video">
            <video
              controls
              poster="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80"
              className="w-full h-full object-cover"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-stage-lights-and-a-crowd-at-a-concert-42828-large.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas le lecteur vidéo.
            </video>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION : TÉMOIGNAGES
      ========================================== */}
      <section className="py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-[#009CDE] font-bold text-xs uppercase tracking-widest block mb-2">Avis Clients</span>
          <h2 className="text-3xl sm:text-5xl font-['Balgor',serif] font-black uppercase text-white mb-16">
            ILS NOUS FONT CONFIANCE
          </h2>

          <div className="relative bg-[#111827] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="flex gap-1 text-[#F6A61A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="text-lg sm:text-2xl italic text-gray-200 leading-relaxed font-serif max-w-2xl">
                "{testimonials[currentTestimonial].text}"
              </p>

              <div>
                <h4 className="text-xl font-bold text-white font-['Balgor',serif]">{testimonials[currentTestimonial].name}</h4>
                <p className="text-sm text-[#009CDE] font-medium">
                  {testimonials[currentTestimonial].role} — <span className="text-gray-400">{testimonials[currentTestimonial].company}</span>
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center absolute inset-x-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <button
                onClick={() => setCurrentTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="pointer-events-auto p-3 bg-white/10 hover:bg-[#0071BC] text-white rounded-full backdrop-blur-md transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setCurrentTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="pointer-events-auto p-3 bg-white/10 hover:bg-[#0071BC] text-white rounded-full backdrop-blur-md transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION : FAQ INTERACTIVE
      ========================================== */}
      <section className="py-24 px-6 bg-[#111827] border-t border-white/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-[#F6A61A] font-bold text-xs uppercase tracking-widest">Questions Fréquentes</span>
            <h2 className="text-3xl sm:text-5xl font-['Balgor',serif] font-black uppercase text-white mt-2">
              Faq
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-[#0B1220] border border-white/10 rounded-2xl overflow-hidden transition-all">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 hover:text-[#009CDE] transition-colors"
                  >
                    <span className="font-['Balgor',serif] font-bold text-lg text-white">{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#F6A61A] shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-gray-300 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION : FORMULAIRE DE DEVIS SUR MESURE
      ========================================== */}
      <section id="devis" className="py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-[#F6A61A] font-bold text-xs uppercase tracking-widest">Sur Mesure</span>
            <h2 className="text-3xl sm:text-5xl font-['Balgor',serif] font-black uppercase text-white mt-2">
              DEMANDER UN DEVIS EVENTS
            </h2>
            <p className="text-gray-400 mt-4">Complétez vos besoins spécifiques pour recevoir une proposition détaillée sous 24h.</p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="bg-[#111827] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-10">
            {/* Notification d'état de la soumission */}
            {submitStatus.type && (
              <div
                className={`p-4 rounded-xl border text-sm font-medium ${
                  submitStatus.type === 'success'
                    ? 'bg-green-500/10 border-green-500/30 text-green-400'
                    : 'bg-red-500/10 border-red-500/30 text-red-400'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-300 mb-2">NOM COMPLET *</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0B1220] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#009CDE]"
                  placeholder="Ex: Birahim BASSE"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-300 mb-2">EMAIL *</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#0B1220] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#009CDE]"
                  placeholder="Ex: contact@sunulink.sn"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-300 mb-2">TÉLÉPHONE *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#0B1220] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#009CDE]"
                  placeholder="Ex: +221 71 008 59 15"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-300 mb-2">ENTREPRISE / ORGANISATION</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-[#0B1220] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#009CDE]"
                  placeholder="Nom de votre structure"
                />
              </div>
            </div>

            {/* Type d'événement */}
            <div>
              <label className="block text-xs font-bold uppercase text-[#F6A61A] mb-4">TYPE D'ÉVÉNEMENT</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {allEventTypes.map((type) => {
                  const isChecked = formData.eventTypes.includes(type);
                  return (
                    <button
                      type="button"
                      key={type}
                      onClick={() => handleEventTypeToggle(type)}
                      className={`p-3 rounded-xl border text-xs font-medium text-left transition-all ${
                        isChecked
                          ? 'bg-[#0071BC] border-[#009CDE] text-white'
                          : 'bg-[#0B1220] border-white/10 text-gray-400 hover:border-white/30'
                      }`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Nombre de participants */}
            <div>
              <label className="block text-xs font-bold uppercase text-gray-300 mb-3">NOMBRE DE PARTICIPANTS</label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {['Moins de 50', '50 à 100', '100 à 300', '300 à 500', 'Plus de 1000'].map((p) => (
                  <button
                    type="button"
                    key={p}
                    onClick={() => setFormData({ ...formData, participants: p })}
                    className={`py-3 px-2 rounded-xl border text-xs font-bold transition-all text-center ${
                      formData.participants === p
                        ? 'bg-[#F6A61A] border-[#F6A61A] text-white'
                        : 'bg-[#0B1220] border-white/10 text-gray-400 hover:border-white/30'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Prestations souhaitées */}
            <div>
              <label className="block text-xs font-bold uppercase text-[#F6A61A] mb-4">PRESTATIONS SOUHAITÉES</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {allServicesOptions.map((serv) => {
                  const isChecked = formData.services.includes(serv);
                  return (
                    <button
                      type="button"
                      key={serv}
                      onClick={() => handleServiceToggle(serv)}
                      className={`p-3 rounded-xl border text-xs font-medium text-left transition-all ${
                        isChecked
                          ? 'bg-[#009CDE] border-[#009CDE] text-white'
                          : 'bg-[#0B1220] border-white/10 text-gray-400 hover:border-white/30'
                      }`}
                    >
                      {serv}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Date et Lieu */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-300 mb-2">DATE SOUHAITÉE</label>
                <input
                  type="date"
                  name="desired_date"
                  value={formData.desiredDate}
                  onChange={(e) => setFormData({ ...formData, desiredDate: e.target.value })}
                  className="w-full bg-[#0B1220] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#009CDE]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-300 mb-2">LIEU ENVISAGÉ</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-[#0B1220] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#009CDE]"
                  placeholder="Ex: Dakar, Saly, Saint-Louis..."
                />
              </div>
            </div>

            {/* Description du projet */}
            <div>
              <label className="block text-xs font-bold uppercase text-gray-300 mb-2">DESCRIPTION DU PROJET</label>
              <textarea
                name="message"
                rows={5}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-[#0B1220] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#009CDE] text-sm"
                placeholder="Décrivez vos besoins spécifiques, vos enjeux, votre public cible..."
              />
            </div>

            {/* Upload Fichiers */}
            <div>
              <label className="block text-xs font-bold uppercase text-gray-300 mb-2">PIÈCES JOINTES (Cahier des charges, brief...)</label>
              <div className="border-2 border-dashed border-white/10 hover:border-[#009CDE] rounded-2xl p-6 text-center bg-[#0B1220] cursor-pointer relative transition-colors">
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-300 font-medium">Glissez-déposez vos fichiers ici ou cliquez pour parcourir</p>
                <p className="text-xs text-gray-500 mt-1">Formats acceptés : PDF, WORD, EXCEL, POWERPOINT, ZIP, IMAGES</p>
              </div>

              {formData.files.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {formData.files.map((file, i) => (
                    <li key={i} className="flex items-center justify-between text-xs bg-[#0B1220] px-4 py-2 rounded-lg border border-white/10">
                      <span className="truncate text-gray-300">{file.name}</span>
                      <button type="button" onClick={() => removeFile(i)} className="text-red-400 hover:text-red-300 ml-2">
                        <X className="w-4 h-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#F6A61A] hover:bg-[#0071BC] disabled:opacity-50 disabled:cursor-not-allowed text-white font-black py-5 rounded-2xl text-base uppercase tracking-wider transition-all shadow-xl shadow-[#F6A61A]/20 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" /> Envoyer la demande de devis
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* ==========================================
          SECTION : CTA FINAL
      ========================================== */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#0071BC] to-[#009CDE] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto max-w-4xl relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-['Balgor',serif] font-black uppercase tracking-tight">
            Transformons votre prochain événement en une expérience inoubliable.
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
            De la première idée au dernier applaudissement, SunuLink Events met son expertise au service de votre réussite.
          </p>
          <div className="pt-4">
            <button
              onClick={() => scrollToSection('devis')}
              className="bg-[#F6A61A] hover:bg-[#0B1220] text-white font-bold px-10 py-5 rounded-full text-sm uppercase tracking-wider shadow-2xl transition-all border border-white/20"
            >
              Demander un devis
            </button>
          </div>
        </div>
      </section>

      {/* Footer Wrapper */}
      <div className="w-full bg-white text-gray-800 border-t border-gray-200">
        <Footer />
      </div>
    </div>
  );
}
