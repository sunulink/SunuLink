import React, { useState } from 'react';
import { 
  X, ChevronLeft, ChevronRight, Star, ChevronUp, ChevronDown, 
  Upload, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Play
} from 'lucide-react';

// ==========================================
// COMPOSANT FOOTER
// ==========================================
function Footer() {
  return (
    <footer className="bg-[#0B1220] border-t border-white/10 pt-20 pb-8 text-gray-400 font-sans">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-black text-white tracking-wider">
              SUNULINK <span className="text-[#009CDE]">CONSULTING</span>
            </h3>
            <p className="text-sm leading-relaxed">
              L'excellence dans la gestion de projets, le conseil stratégique et l'organisation d'événements professionnels sur mesure.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center hover:bg-[#0071BC] hover:text-white transition-all border border-white/5">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center hover:bg-[#0071BC] hover:text-white transition-all border border-white/5">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center hover:bg-[#0071BC] hover:text-white transition-all border border-white/5">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center hover:bg-[#0071BC] hover:text-white transition-all border border-white/5">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-l-2 border-[#F6A61A] pl-3">
              Liens Rapides
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#accueil" className="hover:text-[#009CDE] transition-colors">Accueil</a></li>
              <li><a href="#services" className="hover:text-[#009CDE] transition-colors">Nos Services</a></li>
              <li><a href="#galerie" className="hover:text-[#009CDE] transition-colors">Portfolio</a></li>
              <li><a href="#temoignages" className="hover:text-[#009CDE] transition-colors">Témoignages</a></li>
              <li><a href="#devis" className="hover:text-[#009CDE] transition-colors">Demander un Devis</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-l-2 border-[#F6A61A] pl-3">
              Expertises
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#009CDE] transition-colors">Événements Corporate</a></li>
              <li><a href="#" className="hover:text-[#009CDE] transition-colors">Lancements de Produits</a></li>
              <li><a href="#" className="hover:text-[#009CDE] transition-colors">Séminaires & Formations</a></li>
              <li><a href="#" className="hover:text-[#009CDE] transition-colors">Développement Web & IT</a></li>
              <li><a href="#" className="hover:text-[#009CDE] transition-colors">Data Analysis & BI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-l-2 border-[#F6A61A] pl-3">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#009CDE] shrink-0 mt-0.5" />
                <span>Dakar, Sénégal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#009CDE] shrink-0" />
                <a href="tel:+2210000000" className="hover:text-white transition-colors">+221 77 000 00 00</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#009CDE] shrink-0" />
                <a href="mailto:contact@sunulink.sn" className="hover:text-white transition-colors">contact@sunulink.sn</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>
            &copy; {new Date().getFullYear()} SUNULINK CONSULTING. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ==========================================
// COMPOSANT PRINCIPAL DE LA PAGE
// ==========================================
export default function SunuLinkEventsPage() {
  // --- ÉTATS ---
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [selectedGalleryImg, setSelectedGalleryImg] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '',
    eventTypes: [], participants: '', services: [],
    desiredDate: '', location: '', description: '', files: []
  });

  // --- DONNÉES FACTICES ---
  const methodSteps = [
    { step: '01', title: 'Cadrage & Brief', desc: 'Analyse approfondie de vos objectifs, de votre cible et définition du budget.' },
    { step: '02', title: 'Conception Stratégique', desc: 'Élaboration du concept créatif et de la ligne directrice de l’événement.' },
    { step: '03', title: 'Planification', desc: 'Création d’un rétroplanning détaillé et répartition des tâches.' },
    { step: '04', title: 'Recherche de prestataires', desc: 'Sélection des meilleurs partenaires (lieu, traiteur, technique, animation).' },
    { step: '05', title: 'Logistique & Technique', desc: 'Gestion des équipements, de la sonorisation, de la lumière et des flux.' },
    { step: '06', title: 'Communication', desc: 'Création des supports visuels, invitations et plan média si nécessaire.' },
    { step: '07', title: 'Répétitions & Tests', desc: 'Vérification complète de tous les dispositifs avant le jour J.' },
    { step: '08', title: 'Coordination Jour J', desc: 'Pilotage sur le terrain par nos équipes pour un déroulement sans accroc.' },
    { step: '09', title: 'Démontage & Clôture', desc: 'Gestion fluide de la fin de l’événement et remise en état des lieux.' },
    { step: '10', title: 'Bilan & Analyse', desc: 'Reporting post-événement, analyse des KPI et recueil des feedbacks.' }
  ];

  const whyUsData = [
    { title: 'Excellence Opérationnelle', desc: 'Une rigueur absolue dans l\'exécution pour garantir une expérience fluide et mémorable.' },
    { title: 'Accompagnement Sur Mesure', desc: 'Chaque événement est pensé et conçu spécifiquement pour répondre à votre ADN.' },
    { title: 'Technologies Modernes', desc: 'Utilisation des derniers outils numériques pour la gestion et l\'immersion de vos invités.' }
  ];

  const filteredGallery = [
    { id: 1, img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Conférences', title: 'Sommet Tech 2025' },
    { id: 2, img: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Team Building', title: 'Retraite Exécutive' },
    { id: 3, img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Gala', title: 'Soirée Annuelle' },
    { id: 4, img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Corporate', title: 'Lancement Produit' }
  ];

  const testimonialsData = [
    { text: 'SunuLink a métamorphosé notre vision en une réalité époustouflante. L\'organisation était d\'une précision chirurgicale.', name: 'Fatou Sow', role: 'Directrice Communication', company: 'TechCorp Africa', photo: 'https://i.pravatar.cc/150?img=5' },
    { text: 'Un partenaire de confiance qui comprend l\'urgence et l\'exigence du monde corporate. Nous les recommandons les yeux fermés.', name: 'Moussa Diop', role: 'CEO', company: 'Innovate SN', photo: 'https://i.pravatar.cc/150?img=11' }
  ];

  const faqData = [
    { q: 'Quels types d\'événements organisez-vous ?', a: 'Nous couvrons un large spectre : séminaires d\'entreprise, lancements de produits, soirées de gala, conférences internationales, et team buildings sur mesure.' },
    { q: 'Comment obtenir un devis personnalisé ?', a: 'Il vous suffit de remplir le formulaire détaillé situé en bas de cette page. Notre équipe vous recontactera sous 24h avec une proposition adaptée.' },
    { q: 'Gérez-vous la partie technique (son, lumière, vidéo) ?', a: 'Absolument. Nous disposons d\'un réseau de partenaires techniques premium pour assurer une captation et une diffusion de très haute qualité.' }
  ];

  // --- COMPOSANTS UTILITAIRES ---
  const AnimatedCounter = ({ end, suffix }) => <span>{end}{suffix}</span>;
  const Button = ({ children, className, onClick, type = "button" }) => (
    <button type={type} onClick={onClick} className={className}>{children}</button>
  );

  // --- FONCTIONS LOGIQUES ---
  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));

  const handleCheckboxChange = (group, value) => {
    setFormData(prev => {
      const current = prev[group];
      const updated = current.includes(value) ? current.filter(item => item !== value) : [...current, value];
      return { ...prev, [group]: updated };
    });
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFormData(prev => ({ ...prev, files: [...prev.files, ...newFiles] }));
  };

  const removeFile = (idx) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== idx)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis :", formData);
    alert("Votre demande de devis a été envoyée avec succès !");
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans min-h-screen bg-[#0B1220] text-white">
      
      {/* ==========================================
          HERO SECTION (Vidéographique)
      ========================================== */}
      <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Arrière-plan Vidéo */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="object-cover w-full h-full opacity-40"
          >
            {/* Remplacez par le lien de votre vraie vidéo */}
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>
          {/* Overlay dégradé pour améliorer la lisibilité du texte */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220]/80 via-[#0B1220]/50 to-[#0B1220]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-5xl text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-[#009CDE] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            Créateurs d'expériences
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-black uppercase leading-tight mb-6">
            L'Art de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009CDE] to-[#F6A61A]">l'Événement</span> Corporate
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
            De la conception stratégique à la réalisation technique, nous concevons des événements immersifs qui marquent les esprits et propulsent votre marque.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={() => scrollToSection("devis")}
              className="w-full sm:w-auto bg-[#F6A61A] hover:bg-white hover:text-[#0B1220] text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all"
            >
              Demander un devis
            </Button>
            <Button 
              onClick={() => scrollToSection("galerie")}
              className="w-full sm:w-auto bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <Play size={16} /> Voir nos réalisations
            </Button>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION : NOTRE MÉTHODE (Timeline 10 étapes)
      ========================================== */}
      <section id="services" className="py-24 px-6 bg-[#111827] border-t border-white/5">
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
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#0B1220] uppercase mt-2">Pourquoi nous choisir ?</h2>
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
          SECTION : CHIFFRES CLÉS
      ========================================== */}
      <section className="py-20 px-6 bg-[#0071BC] text-white">
        <div className="container mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <h3 className="text-4xl sm:text-6xl font-serif font-black text-[#F6A61A] mb-2">
              <AnimatedCounter end={120} suffix="+" />
            </h3>
            <p className="text-sm font-bold uppercase tracking-wider text-gray-100">Événements</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl sm:text-6xl font-serif font-black text-[#F6A61A] mb-2">
              <AnimatedCounter end={85} suffix="+" />
            </h3>
            <p className="text-sm font-bold uppercase tracking-wider text-gray-100">Clients</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl sm:text-6xl font-serif font-black text-[#F6A61A] mb-2">
              <AnimatedCounter end={4500} suffix="h" />
            </h3>
            <p className="text-sm font-bold uppercase tracking-wider text-gray-100">Heures produites</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl sm:text-6xl font-serif font-black text-[#F6A61A] mb-2">
              <AnimatedCounter end={99} suffix="%" />
            </h3>
            <p className="text-sm font-bold uppercase tracking-wider text-gray-100">Satisfaction</p>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION : GALERIE
      ========================================== */}
      <section id="galerie" className="py-24 px-6 bg-[#0B1220]">
        <div className="container mx-auto max-w-7xl text-center mb-12">
          <span className="text-[#F6A61A] font-bold text-xs uppercase tracking-widest">Portfolio Premium</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black uppercase mt-2">Galerie de Réalisations</h2>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["Tous", "Corporate", "Conférences", "Team Building", "Gala"].map((filter) => (
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

        <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery
            .filter(item => activeFilter === "Tous" || item.category === activeFilter)
            .map((item) => (
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
          SECTION : TÉMOIGNAGES (Slider)
      ========================================== */}
      <section id="temoignages" className="py-24 px-6 bg-[#EAEAEA] text-[#111827]">
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
      <section className="py-24 px-6 bg-[#0B1220]">
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
      <section id="devis" className="py-24 px-6 bg-[#111827]">
        <div className="container mx-auto max-w-5xl bg-[#0B1220] border border-white/10 p-8 sm:p-12 rounded-3xl shadow-2xl">
          <div className="text-center mb-12">
            <span className="text-[#F6A61A] font-bold text-xs uppercase tracking-widest">Sur Mesure</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-black uppercase mt-2">Demander un Devis Events</h2>
            <p className="text-gray-400 text-sm mt-2">Complétez vos besoins spécifiques pour recevoir une proposition détaillée.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-300 mb-2">Nom complet *</label>
                <input 
                  type="text" required 
                  value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#111827] border border-white/15 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#009CDE]"
                  placeholder="Ex: Babacar Diop"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-300 mb-2">Email *</label>
                <input 
                  type="email" required 
                  value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#111827] border border-white/15 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#009CDE]"
                  placeholder="Ex: contact@entreprise.sn"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-300 mb-2">Téléphone *</label>
                <input 
                  type="tel" required 
                  value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-[#111827] border border-white/15 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#009CDE]"
                  placeholder="+221 77 000 00 00"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-300 mb-2">Entreprise / Organisation</label>
                <input 
                  type="text" 
                  value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full bg-[#111827] border border-white/15 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#009CDE]"
                  placeholder="Nom de votre structure"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-serif font-bold text-[#F6A61A] mb-4 uppercase">Type d’événement</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {["Conférence", "Séminaire", "Gala", "Lancement", "Team Building", "Exposition", "Autre"].map((type) => (
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

            <div>
              <label className="block text-sm font-serif font-bold text-[#F6A61A] mb-4 uppercase">Nombre de participants</label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {["< 50", "50 à 100", "100 à 300", "300 à 500", "> 500"].map((range) => (
                  <label key={range} className={`p-3 rounded-xl border cursor-pointer text-center text-xs font-bold transition-all ${
                    formData.participants === range ? "bg-[#0071BC] border-[#009CDE] text-white" : "bg-[#111827] border-white/5 text-gray-300 hover:border-white/20"
                  }`}>
                    <input 
                      type="radio" name="participants" value={range} 
                      onChange={(e) => setFormData({...formData, participants: e.target.value})}
                      className="hidden" 
                    />
                    <span>{range}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-300 mb-2">Date souhaitée</label>
                <input 
                  type="date" 
                  value={formData.desiredDate} onChange={(e) => setFormData({...formData, desiredDate: e.target.value})}
                  className="w-full bg-[#111827] border border-white/15 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#009CDE]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-300 mb-2">Lieu pressenti</label>
                <input 
                  type="text" 
                  value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full bg-[#111827] border border-white/15 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#009CDE]"
                  placeholder="Ex: Dakar, Saly..."
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-300 mb-2">Description du projet</label>
              <textarea 
                rows={4}
                value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full bg-[#111827] border border-white/15 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#009CDE]"
                placeholder="Détaillez vos attentes..."
              ></textarea>
            </div>

            <Button type="submit" className="w-full bg-[#F6A61A] hover:bg-[#0071BC] text-white font-bold py-6 rounded-2xl text-lg shadow-xl shadow-[#F6A61A]/20 transition-all">
              Envoyer ma demande de devis
            </Button>
          </form>
        </div>
      </section>

      {/* ==========================================
          CTA FINAL
      ========================================== */}
      <section className="relative py-24 px-6 bg-[#0071BC] overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#009CDE]/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#F6A61A]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10 space-y-8">
          <h2 className="text-4xl sm:text-6xl font-serif font-black uppercase leading-tight">
            Transformons votre événement en une expérience inoubliable.
          </h2>
          <div>
            <Button onClick={() => scrollToSection("devis")} className="bg-[#F6A61A] hover:bg-white hover:text-[#0B1220] text-white font-bold px-10 py-6 rounded-full text-lg shadow-2xl transition-all transform hover:-translate-y-1">
              Démarrer un projet
            </Button>
          </div>
        </div>
      </section>

      {/* PIED DE PAGE */}
      <Footer />

    </div>
  );
}
