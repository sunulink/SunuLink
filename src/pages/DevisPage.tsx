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
        return true; // Optionnel
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

    // Préparer les données pour EmailJS
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
        "service_xgdluls",
        "template_5x9tqf8",
        templateParams,
        "KfF-FpO2K-0aYUFsS"
      );
      setIsSuccess(true);
    } catch (error) {
      console.error("Erreur envoi:", error);
      alert("Erreur lors de l'envoi. Veuillez réessayer ou nous contacter directement.");
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
            <div
              className="grain-texture bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-12 text-center text-white shadow-2xl"
              data-aos="zoom-in"
            >
              <CheckCircle className="w-20 h-20 mx-auto mb-6" />
              <h1 className="text-4xl font-black mb-4">Demande envoyée !</h1>
              <p className="text-xl opacity-90 mb-8">
                Merci {formData.prenom} ! Votre demande de devis a bien été transmise à notre équipe.
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
        {/* Hero Section */}
        <section className="py-12 px-6 bg-gradient-to-b from-white to-sunuGray/20">
          <div className="container mx-auto max-w-5xl text-center">
            <h1
              className="text-4xl md:text-5xl font-black mb-4 text-gray-800"
              data-aos="fade-up"
            >
              DEMANDEZ VOTRE{" "}
              <span className="text-sunuOrange">DEVIS PERSONNALISÉ</span>
            </h1>
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Décrivez votre projet et recevez une proposition adaptée à vos besoins
              et votre budget.
            </p>
          </div>
        </section>

        {/* Progress Bar */}
        <section className="py-8 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center justify-between mb-8" data-aos="fade-up">
              {etapes.map((etape, index) => (
                <div key={etape.numero} className="flex items-center">
                  <div
                    className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                      etapeActuelle >= etape.numero
                        ? "text-sunuBlue"
                        : "text-gray-400"
                    }`}
                    onClick={() => {
                      if (etape.numero < etapeActuelle) {
                        setEtapeActuelle(etape.numero);
                      }
                    }}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        etapeActuelle >= etape.numero
                          ? "bg-gradient-to-br from-sunuBlue to-sunuCyan text-white shadow-lg"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      <etape.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs mt-2 font-semibold hidden sm:block">
                      {etape.titre}
                    </span>
                  </div>
                  {index < etapes.length - 1 && (
                    <div
                      className={`w-8 sm:w-16 md:w-24 h-1 mx-2 rounded transition-all duration-300 ${
                        etapeActuelle > etape.numero
                          ? "bg-gradient-to-r from-sunuBlue to-sunuCyan"
                          : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section ref={formSectionRef} className="px-6 pb-16 scroll-mt-32">
          <div className="container mx-auto max-w-4xl">
            <form ref={formRef} onSubmit={envoyerDevis}>
              {/* Étape 1: Informations personnelles */}
              {etapeActuelle === 1 && (
                <div
                  className="grain-texture bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuBlue rounded-3xl p-8 md:p-10 shadow-2xl"
                  data-aos="fade-up"
                >
                  <h2 className="text-2xl font-black mb-6 text-white flex items-center gap-3">
                    <User className="w-7 h-7" />
                    Informations personnelles
                  </h2>

                  <div className="space-y-6">
                    {/* Civilité */}
                    <div>
                      <Label className="text-white mb-3 block font-semibold">
                        Civilité *
                      </Label>
                      <RadioGroup
                        value={formData.civilite}
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, civilite: value }))
                        }
                        className="flex flex-wrap gap-4"
                      >
                        {["Monsieur", "Madame", "Mademoiselle"].map((option) => (
                          <div key={option} className="flex items-center space-x-2">
                            <RadioGroupItem
                              value={option}
                              id={option}
                              className="border-white text-white"
                            />
                            <Label
                              htmlFor={option}
                              className="text-white cursor-pointer"
                            >
                              {option}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Nom & Prénom */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-white mb-2 block font-semibold">
                          Nom *
                        </Label>
                        <Input
                          name="nom"
                          value={formData.nom}
                          onChange={handleInputChange}
                          placeholder="Votre nom"
                          className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 h-12"
                          required
                        />
                      </div>
                      <div>
                        <Label className="text-white mb-2 block font-semibold">
                          Prénom *
                        </Label>
                        <Input
                          name="prenom"
                          value={formData.prenom}
                          onChange={handleInputChange}
                          placeholder="Votre prénom"
                          className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 h-12"
                          required
                        />
                      </div>
                    </div>

                    {/* Email & Téléphone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-white mb-2 block font-semibold">
                          Email *
                        </Label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="votre@email.com"
                          className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 h-12"
                          required
                        />
                      </div>
                      <div>
                        <Label className="text-white mb-2 block font-semibold">
                          Téléphone *
                        </Label>
                        <Input
                          name="telephone"
                          type="tel"
                          value={formData.telephone}
                          onChange={handleInputChange}
                          placeholder="+221 7X XXX XX XX"
                          className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 h-12"
                          required
                        />
                      </div>
                    </div>

                    {/* Adresse */}
                    <div>
                      <Label className="text-white mb-2 block font-semibold">
                        Adresse (optionnel)
                      </Label>
                      <Input
                        name="adresse"
                        value={formData.adresse}
                        onChange={handleInputChange}
                        placeholder="Votre adresse"
                        className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 h-12"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Étape 2: Sélection du projet */}
              {etapeActuelle === 2 && (
                <div
                  className="grain-texture bg-gradient-to-br from-sunuOrange via-yellow-500 to-sunuOrange rounded-3xl p-8 md:p-10 shadow-2xl"
                  data-aos="fade-up"
                >
                  <h2 className="text-2xl font-black mb-6 text-white flex items-center gap-3">
                    <Briefcase className="w-7 h-7" />
                    Sélection du projet *
                  </h2>
                  <p className="text-white/90 mb-6">
                    Cochez tous les services qui correspondent à votre besoin :
                  </p>

                  <div className="space-y-8">
                    {Object.entries(categoriesProjets).map(([categorie, services]) => (
                      <div key={categorie}>
                        <h3 className="text-lg font-bold text-white mb-3 border-b border-white/30 pb-2">
                          {categorie}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {services.map((service) => (
                            <label
                              key={service}
                              htmlFor={service}
                              className="flex items-start space-x-3 bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors cursor-pointer"
                            >
                              <Checkbox
                                id={service}
                                checked={formData.projets.includes(service)}
                                onCheckedChange={() =>
                                  handleCheckboxChange("projets", service)
                                }
                                className="border-white data-[state=checked]:bg-white data-[state=checked]:text-sunuOrange mt-0.5"
                              />
                              <span className="text-white text-sm leading-tight">
                                {service}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {formData.projets.length > 0 && (
                    <div className="mt-6 bg-white/20 rounded-xl p-4">
                      <p className="text-white font-semibold">
                        {formData.projets.length} service(s) sélectionné(s)
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Étape 3: Détails du projet */}
              {etapeActuelle === 3 && (
                <div
                  className="grain-texture bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 rounded-3xl p-8 md:p-10 shadow-2xl"
                  data-aos="fade-up"
                >
                  <h2 className="text-2xl font-black mb-6 text-white flex items-center gap-3">
                    <FileText className="w-7 h-7" />
                    Détails du projet
                  </h2>

                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <Label className="text-white mb-2 block font-semibold">
                        Description du projet / Objectifs *
                      </Label>
                      <p className="text-white/70 text-sm mb-3">
                        Décrivez vos besoins, contraintes, ambitions...
                      </p>
                      <Textarea
                        name="descriptionProjet"
                        value={formData.descriptionProjet}
                        onChange={handleInputChange}
                        placeholder="Ex: Nous souhaitons créer un site vitrine pour notre entreprise de construction. L'objectif est d'attirer de nouveaux clients et de présenter nos réalisations..."
                        rows={6}
                        className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 resize-none"
                        required
                      />
                    </div>

                    {/* Dates */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-white mb-2 block font-semibold flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Date de démarrage souhaitée
                        </Label>
                        <Input
                          name="dateDebutSouhaitee"
                          type="date"
                          value={formData.dateDebutSouhaitee}
                          onChange={handleInputChange}
                          className="bg-white/10 border-white/30 text-white focus:bg-white/20 h-12"
                        />
                      </div>
                      <div>
                        <Label className="text-white mb-2 block font-semibold flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Deadline ou événement clé
                        </Label>
                        <Input
                          name="deadline"
                          type="date"
                          value={formData.deadline}
                          onChange={handleInputChange}
                          className="bg-white/10 border-white/30 text-white focus:bg-white/20 h-12"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Étape 4: Contenus et supports */}
              {etapeActuelle === 4 && (
                <div
                  className="grain-texture bg-gradient-to-br from-teal-500 via-cyan-500 to-teal-600 rounded-3xl p-8 md:p-10 shadow-2xl"
                  data-aos="fade-up"
                >
                  <h2 className="text-2xl font-black mb-6 text-white flex items-center gap-3">
                    <Layers className="w-7 h-7" />
                    Contenus et supports spécifiques
                  </h2>
                  <p className="text-white/90 mb-6">
                    Sélectionnez les types de contenus dont vous avez besoin (optionnel) :
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {contenusSupports.map((contenu) => (
                      <label
                        key={contenu}
                        htmlFor={contenu}
                        className="flex items-start space-x-3 bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors cursor-pointer"
                      >
                        <Checkbox
                          id={contenu}
                          checked={formData.contenus.includes(contenu)}
                          onCheckedChange={() =>
                            handleCheckboxChange("contenus", contenu)
                          }
                          className="border-white data-[state=checked]:bg-white data-[state=checked]:text-teal-600 mt-0.5"
                        />
                        <span className="text-white">
                          {contenu}
                        </span>
                      </label>
                    ))}
                  </div>

                  {/* Autres informations */}
                  <div>
                    <Label className="text-white mb-2 block font-semibold">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Autres informations / demandes spécifiques
                    </Label>
                    <p className="text-white/70 text-sm mb-3">
                      Contraintes techniques, références visuelles, approbations internes...
                    </p>
                    <Textarea
                      name="autresInformations"
                      value={formData.autresInformations}
                      onChange={handleInputChange}
                      placeholder="Ex: Nous avons déjà un logo et une charte graphique à respecter. Nous souhaitons un design moderne et épuré..."
                      rows={4}
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Étape 5: Validation */}
              {etapeActuelle === 5 && (
                <div
                  className="grain-texture bg-gradient-to-br from-sunuBlue via-sunuCyan to-sunuBlue rounded-3xl p-8 md:p-10 shadow-2xl"
                  data-aos="fade-up"
                >
                  <h2 className="text-2xl font-black mb-6 text-white flex items-center gap-3">
                    <CheckCircle className="w-7 h-7" />
                    Récapitulatif et validation
                  </h2>

                  {/* Récapitulatif */}
                  <div className="bg-white/10 rounded-2xl p-6 mb-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-white/70 text-sm">Contact</p>
                        <p className="text-white font-semibold">
                          {formData.civilite} {formData.prenom} {formData.nom}
                        </p>
                        <p className="text-white">{formData.email}</p>
                        <p className="text-white">{formData.telephone}</p>
                      </div>
                      <div>
                        <p className="text-white/70 text-sm">Services sélectionnés</p>
                        <p className="text-white font-semibold">
                          {formData.projets.length} service(s)
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Description</p>
                      <p className="text-white line-clamp-3">
                        {formData.descriptionProjet}
                      </p>
                    </div>
                  </div>

                  {/* Consentement */}
                  <label
                    htmlFor="consentement"
                    className="flex items-start space-x-3 bg-white/10 rounded-xl p-4 cursor-pointer hover:bg-white/20 transition-colors"
                  >
                    <Checkbox
                      id="consentement"
                      checked={formData.consentement}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({
                          ...prev,
                          consentement: checked as boolean,
                        }))
                      }
                      className="border-white data-[state=checked]:bg-white data-[state=checked]:text-sunuBlue mt-1"
                    />
                    <span className="text-white text-sm leading-relaxed">
                      J'accepte que Sunu Link Consulting utilise ces informations pour
                      l'élaboration de mon devis et respecte la confidentialité de mes
                      données. *
                    </span>
                  </label>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {etapeActuelle > 1 ? (
                  <Button
                    type="button"
                    onClick={precedent}
                    variant="outline"
                    className="px-6 py-3 rounded-xl font-bold flex items-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Précédent
                  </Button>
                ) : (
                  <div />
                )}

                {etapeActuelle < 5 ? (
                  <Button
                    type="button"
                    onClick={suivant}
                    disabled={!validateEtape(etapeActuelle)}
                    className="bg-gradient-to-r from-sunuBlue to-sunuCyan text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
                  >
                    Suivant
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={!formData.consentement || isSubmitting}
                    className="bg-gradient-to-r from-sunuOrange to-yellow-500 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Demander mon devis
                        <Send className="w-5 h-5" />
                      </>
                    )}
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
