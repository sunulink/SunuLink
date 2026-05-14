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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  User,
  Briefcase,
  FileText,
  Layers,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Send,
  Calendar,
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

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto max-w-3xl px-6">
            <div className="grain-texture bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-12 text-center text-white shadow-2xl">
              <CheckCircle className="w-20 h-20 mx-auto mb-6" />
              <h1 className="text-4xl font-black mb-4">Demande envoyée !</h1>
              <p className="text-xl opacity-90 mb-8">
                Merci {formData.prenom} ! Votre demande de devis a bien été transmise.
                <br />
                Nous vous recontacterons dans les plus brefs délais.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8">
                <p className="font-semibold">Un email de confirmation vous a été envoyé à :</p>
                <p className="text-lg">{formData.email}</p>
              </div>
              <Button
                onClick={() => window.location.href = "/"}
                className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl text-lg"
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
      <main className="pt-32 pb-20">
        <section className="py-12 px-6 bg-gradient-to-b from-white to-sunuGray/20 text-center">
          <div className="container mx-auto max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-800">
              DEMANDEZ VOTRE <span className="text-sunuOrange">DEVIS PERSONNALISÉ</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Décrivez votre projet et recevez une proposition adaptée à vos besoins.
            </p>
          </div>
        </section>

        <section className="py-8 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center justify-between mb-8">
              {etapes.map((etape, index) => (
                <div key={etape.numero} className="flex items-center">
                  <div
                    className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${etapeActuelle >= etape.numero ? "text-sunuBlue" : "text-gray-400"}`}
                    onClick={() => etape.numero < etapeActuelle && setEtapeActuelle(etape.numero)}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${etapeActuelle >= etape.numero ? "bg-gradient-to-br from-sunuBlue to-sunuCyan text-white shadow-lg" : "bg-gray-200 text-gray-500"}`}>
                      <etape.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs mt-2 font-semibold hidden sm:block">{etape.titre}</span>
                  </div>
                  {index < etapes.length - 1 && (
                    <div className={`w-8 sm:w-16 md:w-24 h-1 mx-2 rounded transition-all duration-300 ${etapeActuelle > etape.numero ? "bg-gradient-to-r from-sunuBlue to-sunuCyan" : "bg-gray-200"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={formSectionRef} className="px-6 pb-16 scroll-mt-32">
          <div className="container mx-auto max-w-4xl">
            <form onSubmit={envoyerDevis}>
              {/* Etape 1 */}
              {etapeActuelle === 1 && (
                <div className="grain-texture bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuBlue rounded-3xl p-8 md:p-10 shadow-2xl">
                  <h2 className="text-2xl font-black mb-6 text-white flex items-center gap-3"><User /> Informations personnelles</h2>
                  <div className="space-y-6">
                    <div>
                      <Label className="text-white mb-3 block font-semibold">Civilité *</Label>
                      <RadioGroup value={formData.civilite} onValueChange={(v) => setFormData(p => ({...p, civilite: v}))} className="flex gap-4">
                        {["Monsieur", "Madame", "Mademoiselle"].map(opt => (
                          <div key={opt} className="flex items-center space-x-2">
                            <RadioGroupItem value={opt} id={opt} className="border-white text-white" />
                            <Label htmlFor={opt} className="text-white">{opt}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input name="nom" value={formData.nom} onChange={handleInputChange} placeholder="Nom *" className="bg-white/10 border-white/30 text-white placeholder:text-white/70 h-12" required />
                      <Input name="prenom" value={formData.prenom} onChange={handleInputChange} placeholder="Prénom *" className="bg-white/10 border-white/30 text-white placeholder:text-white/70 h-12" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Email *" className="bg-white/10 border-white/30 text-white placeholder:text-white/70 h-12" required />
                      <Input name="telephone" type="tel" value={formData.telephone} onChange={handleInputChange} placeholder="Téléphone *" className="bg-white/10 border-white/30 text-white placeholder:text-white/70 h-12" required />
                    </div>
                  </div>
                </div>
              )}

              {/* Etape 2 */}
              {etapeActuelle === 2 && (
                <div className="grain-texture bg-gradient-to-br from-sunuOrange via-yellow-500 to-sunuOrange rounded-3xl p-8 md:p-10 shadow-2xl">
                  <h2 className="text-2xl font-black mb-6 text-white flex items-center gap-3"><Briefcase /> Sélection du projet *</h2>
                  <div className="space-y-8">
                    {Object.entries(categoriesProjets).map(([cat, services]) => (
                      <div key={cat}>
                        <h3 className="text-lg font-bold text-white mb-3 border-b border-white/30 pb-2">{cat}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {services.map(s => (
                            <label key={s} className="flex items-start space-x-3 bg-white/10 rounded-lg p-3 cursor-pointer">
                              <Checkbox checked={formData.projets.includes(s)} onCheckedChange={() => handleCheckboxChange("projets", s)} className="border-white" />
                              <span className="text-white text-sm">{s}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Etape 3 */}
              {etapeActuelle === 3 && (
                <div className="grain-texture bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 rounded-3xl p-8 md:p-10 shadow-2xl">
                  <h2 className="text-2xl font-black mb-6 text-white flex items-center gap-3"><FileText /> Détails du projet</h2>
                  <div className="space-y-6">
                    <Textarea name="descriptionProjet" value={formData.descriptionProjet} onChange={handleInputChange} placeholder="Description et objectifs *" rows={6} className="bg-white/10 border-white/30 text-white" required />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input name="dateDebutSouhaitee" type="date" value={formData.dateDebutSouhaitee} onChange={handleInputChange} className="bg-white/10 text-white" />
                      <Input name="deadline" type="date" value={formData.deadline} onChange={handleInputChange} className="bg-white/10 text-white" />
                    </div>
                  </div>
                </div>
              )}

              {/* Etape 4 */}
              {etapeActuelle === 4 && (
                <div className="grain-texture bg-gradient-to-br from-teal-500 via-cyan-500 to-teal-600 rounded-3xl p-8 md:p-10 shadow-2xl">
                  <h2 className="text-2xl font-black mb-6 text-white flex items-center gap-3"><Layers /> Supports</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {contenusSupports.map(c => (
                      <label key={c} className="flex items-start space-x-3 bg-white/10 rounded-lg p-4 cursor-pointer">
                        <Checkbox checked={formData.contenus.includes(c)} onCheckedChange={() => handleCheckboxChange("contenus", c)} className="border-white" />
                        <span className="text-white">{c}</span>
                      </label>
                    ))}
                  </div>
                  <Textarea name="autresInformations" value={formData.autresInformations} onChange={handleInputChange} placeholder="Autres précisions..." className="bg-white/10 text-white" />
                </div>
              )}

              {/* Etape 5 */}
              {etapeActuelle === 5 && (
                <div className="grain-texture bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuBlue rounded-3xl p-8 md:p-10 shadow-2xl text-white">
                  <h2 className="text-2xl font-black mb-6 flex items-center gap-3"><CheckCircle /> Validation</h2>
                  <div className="bg-white/10 rounded-2xl p-6 mb-6 space-y-4">
                    <p><strong>Contact :</strong> {formData.prenom} {formData.nom} ({formData.email})</p>
                    <p><strong>Services :</strong> {formData.projets.length} sélectionnés</p>
                  </div>
                  <label className="flex items-start space-x-3 bg-white/10 rounded-xl p-4 cursor-pointer">
                    <Checkbox id="consentement" checked={formData.consentement} onCheckedChange={(v) => setFormData(p => ({...p, consentement: v as boolean}))} className="border-white" />
                    <span className="text-sm">J'accepte que SUNULINK CONSULTING utilise ces informations pour mon devis. *</span>
                  </label>
                </div>
              )}

              <div className="flex justify-between mt-8">
                {etapeActuelle > 1 ? (
                  <Button type="button" onClick={precedent} variant="outline" className="px-6 rounded-xl font-bold"><ArrowLeft className="mr-2" /> Précédent</Button>
                ) : <div />}

                {etapeActuelle < 5 ? (
                  <Button type="button" onClick={suivant} disabled={!validateEtape(etapeActuelle)} className="bg-sunuBlue text-white px-8 rounded-xl font-bold">Suivant <ArrowRight className="ml-2" /></Button>
                ) : (
                  <Button type="submit" disabled={!formData.consentement || isSubmitting} className="bg-sunuOrange text-white px-8 rounded-xl font-bold">
                    {isSubmitting ? "Envoi..." : "Demander mon devis"} <Send className="ml-2" />
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
