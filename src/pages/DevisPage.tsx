import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  User,
  Briefcase,
  FileText,
  Layers,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Send,
} from "lucide-react";
import emailjs from "emailjs-com";

// Types
interface FormData {
  civilite: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  adresse: string;
  projets: string[];
  descriptionProjet: string;
  dateDebutSouhaitee: string;
  deadline: string;
  contenus: string[];
  autresInformations: string;
  consentement: boolean;
}

// Données des catégories de projets
const categoriesProjets = {
  "Digital & Web": [
    "Création d'un nouveau site internet",
    "Refonte d'un site existant",
    "Application mobile",
    "SEO / SEA",
    "Stratégie digitale & marketing en ligne",
    "Veille et e-réputation",
    "Couverture digitale / Emailing",
  ],
  "Branding & Communication": [
    "Branding & identité visuelle complète",
    "Charte graphique & déclinaison supports",
    "Création de contenus visuels et vidéos",
    "Copywriting & storytelling",
    "Relations presse & communication institutionnelle",
  ],
  "Réseaux sociaux & Publicité": [
    "Gestion des réseaux sociaux (Facebook, Instagram, LinkedIn…)",
    "Création et animation de contenus pour réseaux sociaux",
    "Publicité payante (Meta Ads, Google Ads…)",
    "Campagnes influenceurs & partenariats",
  ],
  "Événementiel & Activation": [
    "Organisation d'événements corporates ou grand public",
    "Lancements de produits / services",
    "Activations de marque et expériences clients",
  ],
  "Développement commercial": [
    "Prospection digitale & génération de leads",
    "Développement commercial B2B ou B2C",
    "CRM et automatisation commerciale",
  ],
  "Audit & Stratégie": [
    "Audit marketing complet",
    "Diagnostic de marque et positionnement",
    "Stratégie de communication globale 360°",
    "Gestion de crise & plan de communication institutionnelle",
  ],
};

const contenusSupports = [
  "Posts réseaux sociaux",
  "Stories / Reels / Shorts",
  "Vidéos promotionnelles",
  "Infographies & illustrations",
  "Supports print : flyers, brochures, affiches…",
  "Templates / modèles pour communication interne ou externe",
];

const etapes = [
  { numero: 1, titre: "Informations", icon: User },
  { numero: 2, titre: "Projet", icon: Briefcase },
  { numero: 3, titre: "Détails", icon: FileText },
  { numero: 4, titre: "Contenus", icon: Layers },
  { numero: 5, titre: "Validation", icon: CheckCircle },
];

const DevisPage = () => {
  const [etapeActuelle, setEtapeActuelle] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    civilite: "",
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    adresse: "",
    projets: [],
    descriptionProjet: "",
    dateDebutSouhaitee: "",
    deadline: "",
    contenus: [],
    autresInformations: "",
    consentement: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (field: "projets" | "contenus", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const validateEtape = (etape: number): boolean => {
    switch (etape) {
      case 1:
        return !!(
          formData.civilite &&
          formData.nom &&
          formData.prenom &&
          formData.email &&
          formData.telephone
        );
      case 2:
        return formData.projets.length > 0;
      case 3:
        return !!formData.descriptionProjet;
      case 4:
        return true; 
      case 5:
        return formData.consentement;
      default:
        return true;
    }
  };

  const scrollToForm = () => {
    setTimeout(() => {
      formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const suivant = () => {
    if (validateEtape(etapeActuelle) && etapeActuelle < 5) {
      setEtapeActuelle(etapeActuelle + 1);
      scrollToForm();
    }
  };

  const precedent = () => {
    if (etapeActuelle > 1) {
      setEtapeActuelle(etapeActuelle - 1);
      scrollToForm();
    }
  };

  const envoyerDevis = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEtape(5)) {
      alert("Veuillez accepter les conditions pour continuer.");
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      civilite: formData.civilite,
      nom: formData.nom,
      prenom: formData.prenom,
      email: formData.email,
      telephone: formData.telephone,
      adresse: formData.adresse || "Non renseignée",
      projets: formData.projets.join("\n• "),
      description_projet: formData.descriptionProjet,
      date_debut: formData.dateDebutSouhaitee || "Non précisée",
      deadline: formData.deadline || "Non précisée",
      contenus: formData.contenus.length > 0 ? formData.contenus.join("\n• ") : "Aucun sélectionné",
      autres_informations: formData.autresInformations || "Aucune",
    };

    try {
      await emailjs.send(
        "service_04lmrjh",
        "template_cqv61zn",
        templateParams,
        "ShXDBB_RTc_F-EWm1"
      );
      setIsSuccess(true);
    } catch (error) {
      console.error("Erreur envoi:", error);
      alert("Erreur lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Classe utilitaire pour harmoniser les inputs avec texte blanc
  const inputStyle = "w-full bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/60 text-base py-6 rounded-xl transition-all";

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-24 md:pt-32 pb-20">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6">
            <div className="grain-texture bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 sm:p-12 text-center text-white shadow-2xl">
              <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6" />
              <h1 className="text-3xl sm:text-4xl font-black mb-4">Demande envoyée !</h1>
              <p className="text-lg sm:text-xl opacity-90 mb-8">
                Merci {formData.prenom} ! Votre demande a bien été transmise à SUNULINK CONSULTING.
              </p>
              <Button
                onClick={() => window.location.href = "/"}
                className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl text-lg w-full sm:w-auto"
              >
                Retour à l'accueil
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 md:pt-32 pb-20">
        <section className="py-8 sm:py-12 px-4 sm:px-6 bg-gradient-to-b from-white to-sunuGray/20 text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">
            DEMANDEZ VOTRE <span className="text-sunuOrange">DEVIS PERSONNALISÉ</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Décrivez votre projet et recevez une proposition adaptée de la part de SUNULINK CONSULTING.
          </p>
        </section>

        {/* Stepper horizontal - responsive */}
        <section className="py-4 sm:py-8 px-4 sm:px-6 overflow-x-auto select-none">
          <div className="container mx-auto max-w-4xl min-w-[320px]">
            <div className="flex items-center justify-between gap-1 sm:gap-2">
              {etapes.map((etape, index) => (
                <div key={etape.numero} className="flex items-center flex-1 last:flex-initial">
                  <div
                    className={`flex flex-col items-center cursor-pointer transition-colors duration-300 ${
                      etapeActuelle >= etape.numero ? "text-sunuBlue" : "text-gray-400"
                    }`}
                    onClick={() => etape.numero < etapeActuelle && setEtapeActuelle(etape.numero)}
                  >
                    <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all ${
                        etapeActuelle >= etape.numero ? "bg-gradient-to-br from-sunuBlue to-sunuCyan text-white shadow-md scale-105" : "bg-gray-200 text-gray-500"
                      }`}>
                      <etape.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[10px] sm:text-xs mt-2 font-bold hidden xs:block whitespace-nowrap">{etape.titre}</span>
                  </div>
                  {index < etapes.length - 1 && (
                    <div className={`h-[3px] mx-1 sm:mx-2 rounded flex-1 transition-all duration-500 ${
                        etapeActuelle > etape.numero ? "bg-gradient-to-r from-sunuBlue to-sunuCyan" : "bg-gray-200"
                      }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Formulaire principale - Pleine largeur mobile */}
        <section ref={formSectionRef} className="px-4 sm:px-6 pb-16 scroll-mt-24">
          <div className="container mx-auto max-w-4xl">
            <form ref={formRef} onSubmit={envoyerDevis} className="w-full">
              
              {/* ÉTAPE 1: Informations personnelles */}
              {etapeActuelle === 1 && (
                <div className="grain-texture bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuBlue rounded-3xl p-5 sm:p-10 shadow-2xl transition-all">
                  <h2 className="text-xl sm:text-2xl font-black mb-6 text-white flex items-center gap-3">
                    <User className="w-6 sm:w-7 sm:h-7 h-6" /> Informations personnelles
                  </h2>
                  <div className="space-y-5">
                    <RadioGroup 
                      value={formData.civilite} 
                      onValueChange={(v) => setFormData(p => ({...p, civilite: v}))} 
                      className="flex flex-wrap gap-x-6 gap-y-3"
                    >
                      {["Monsieur", "Madame", "Mademoiselle"].map(o => (
                        <div key={o} className="flex items-center space-x-2">
                          <RadioGroupItem value={o} id={o} className="border-white text-white bg-transparent focus:ring-offset-0 focus:ring-transparent" />
                          <Label htmlFor={o} className="text-white font-medium text-base cursor-pointer select-none">{o}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input name="nom" value={formData.nom} onChange={handleInputChange} placeholder="Nom" className={inputStyle} required />
                      <Input name="prenom" value={formData.prenom} onChange={handleInputChange} placeholder="Prénom" className={inputStyle} required />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className={inputStyle} required />
                      <Input name="telephone" type="tel" value={formData.telephone} onChange={handleInputChange} placeholder="Téléphone" className={inputStyle} required />
                    </div>
                    
                    <Input name="adresse" value={formData.adresse} onChange={handleInputChange} placeholder="Adresse (optionnel)" className={inputStyle} />
                  </div>
                </div>
              )}

              {/* ÉTAPE 2: Sélection du projet */}
              {etapeActuelle === 2 && (
                <div className="grain-texture bg-gradient-to-br from-sunuOrange via-yellow-500 to-sunuOrange rounded-3xl p-5 sm:p-10 shadow-2xl transition-all">
                  <h2 className="text-xl sm:text-2xl font-black mb-6 text-white flex items-center gap-3">
                    <Briefcase className="w-6 sm:w-7 sm:h-7 h-6" /> Sélection du projet
                  </h2>
                  <div className="space-y-8">
                    {Object.entries(categoriesProjets).map(([cat, svcs]) => (
                      <div key={cat} className="space-y-3">
                        <h3 className="text-base sm:text-lg font-bold text-white border-b border-white/20 pb-2">{cat}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {svcs.map(s => (
                            <label key={s} className="flex items-start space-x-3 bg-white/10 hover:bg-white/20 rounded-xl p-4 cursor-pointer transition-all border border-white/5 active:scale-[0.99]">
                              <Checkbox checked={formData.projets.includes(s)} onCheckedChange={() => handleCheckboxChange("projets", s)} className="border-white data-[state=checked]:bg-white data-[state=checked]:text-sunuOrange mt-0.5" />
                              <span className="text-white text-sm font-medium leading-snug">{s}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ÉTAPE 3: Détails du projet */}
              {etapeActuelle === 3 && (
                <div className="grain-texture bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 rounded-3xl p-5 sm:p-10 shadow-2xl transition-all">
                  <h2 className="text-xl sm:text-2xl font-black mb-6 text-white flex items-center gap-3">
                    <FileText className="w-6 sm:w-7 sm:h-7 h-6" /> Détails du projet
                  </h2>
                  <div className="space-y-5">
                    <Textarea name="descriptionProjet" value={formData.descriptionProjet} onChange={handleInputChange} placeholder="Décrivez vos besoins précis..." rows={6} className="w-full bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/60 text-base rounded-xl p-4 transition-all" required />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-white text-sm font-semibold pl-1">Date de début souhaitée</label>
                        <Input name="dateDebutSouhaitee" type="date" value={formData.dateDebutSouhaitee} onChange={handleInputChange} className={inputStyle} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-white text-sm font-semibold pl-1">Date limite (Deadline)</label>
                        <Input name="deadline" type="date" value={formData.deadline} onChange={handleInputChange} className={inputStyle} />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ÉTAPE 4: Contenus & supports */}
              {etapeActuelle === 4 && (
                <div className="grain-texture bg-gradient-to-br from-teal-500 via-cyan-500 to-teal-600 rounded-3xl p-5 sm:p-10 shadow-2xl transition-all">
                  <h2 className="text-xl sm:text-2xl font-black mb-6 text-white flex items-center gap-3">
                    <Layers className="w-6 sm:w-7 sm:h-7 h-6" /> Contenus et supports
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {contenusSupports.map(c => (
                      <label key={c} className="flex items-start space-x-3 bg-white/10 hover:bg-white/20 rounded-xl p-4 cursor-pointer transition-all border border-white/5">
                        <Checkbox checked={formData.contenus.includes(c)} onCheckedChange={() => handleCheckboxChange("contenus", c)} className="border-white data-[state=checked]:bg-white data-[state=checked]:text-teal-600 mt-0.5" />
                        <span className="text-white text-sm font-medium">{c}</span>
                      </label>
                    ))}
                  </div>
                  <Textarea name="autresInformations" value={formData.autresInformations} onChange={handleInputChange} placeholder="Autres demandes ou précisions utiles..." rows={4} className="w-full bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/60 text-base rounded-xl p-4 transition-all" />
                </div>
              )}

              {/* ÉTAPE 5: Récapitulatif et Validation */}
              {etapeActuelle === 5 && (
                <div className="grain-texture bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuBlue rounded-3xl p-5 sm:p-10 shadow-2xl transition-all">
                  <h2 className="text-xl sm:text-2xl font-black mb-6 text-white flex items-center gap-3">
                    <CheckCircle className="w-6 sm:w-7 sm:h-7 h-6" /> Validation
                  </h2>
                  
                  <div className="bg-white/10 border border-white/10 rounded-2xl p-5 mb-6 text-white space-y-3 text-sm sm:text-base">
                    <p className="break-words"><strong>Contact :</strong> {formData.prenom} {formData.nom} ({formData.email})</p>
                    <p><strong>Téléphone :</strong> {formData.telephone}</p>
                    <p><strong>Services sélectionnés :</strong> {formData.projets.length} service(s)</p>
                  </div>
                  
                  <label className="flex items-start space-x-3 bg-white/10 hover:bg-white/20 rounded-xl p-4 cursor-pointer transition-all border border-white/5">
                    <Checkbox checked={formData.consentement} onCheckedChange={(c) => setFormData(p => ({...p, consentement: c as boolean}))} className="border-white data-[state=checked]:bg-white data-[state=checked]:text-sunuBlue mt-0.5" />
                    <span className="text-white text-xs sm:text-sm leading-normal">J'accepte que SUNULINK CONSULTING utilise ces informations pour traiter ma demande et générer mon devis. *</span>
                  </label>
                </div>
              )}

              {/* Boutons d'actions et de navigation bas */}
              <div className="flex justify-between items-center mt-6 gap-4">
                {etapeActuelle > 1 && (
                  <Button 
                    type="button" 
                    onClick={precedent} 
                    variant="outline" 
                    className="px-5 py-6 rounded-xl font-bold border-gray-300 text-gray-700 hover:bg-gray-50 flex-1 sm:flex-initial"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Précédent
                  </Button>
                )}
                
                {etapeActuelle < 5 ? (
                  <Button 
                    type="button" 
                    onClick={suivant} 
                    disabled={!validateEtape(etapeActuelle)} 
                    className="ml-auto bg-sunuBlue text-white hover:bg-sunuBlue/90 px-6 py-6 rounded-xl font-bold flex-1 sm:flex-initial shadow-md"
                  >
                    Suivant <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button 
                    type="submit" 
                    disabled={!formData.consentement || isSubmitting} 
                    className="ml-auto bg-sunuOrange text-white hover:bg-sunuOrange/90 px-6 py-6 rounded-xl font-bold flex-1 sm:flex-initial shadow-lg transition-transform active:scale-95"
                  >
                    {isSubmitting ? "Envoi..." : "Demander mon devis"} <Send className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DevisPage;
