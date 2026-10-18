import React, { useState } from 'react';
import {
  User,
  Briefcase,
  Building2,
  Compass,
  MessageSquare,
  ShieldCheck,
  Send,
  Info,
  X,
  Mail,
} from 'lucide-react';
import emailjs from '@emailjs/browser';

interface IFormulaireProps {
  onClose?: () => void;
}

interface ITemoignageForm {
  prenom: string;
  nom: string;
  email: string;
  fonction: string;
  entreprise: string;
  secteurActivite: string;
  sourceDecouverte: string;
  besoinInitial: string;
  solutionApportee: string;
  resultatsConstates: string;
  recommandation: string;
  autorisationPublication: boolean;
}

const FormulaireTemoignage = ({ onClose }: IFormulaireProps) => {
  const [formData, setFormData] = useState<ITemoignageForm>({
    prenom: '',
    nom: '',
    email: '',
    fonction: '',
    entreprise: '',
    secteurActivite: '',
    sourceDecouverte: '',
    besoinInitial: '',
    solutionApportee: '',
    resultatsConstates: '',
    recommandation: '',
    autorisationPublication: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'success' | 'error' | null
  >(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.autorisationPublication) {
      alert(
        "Veuillez cocher la case d'autorisation pour soumettre votre témoignage.",
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Préparation des métadonnées pour l'envoi d'e-mails.
    const fullData = {
      ...formData,
      statut: 'En attente',
      date: new Date().toLocaleDateString('fr-FR'),
    };

    // Structure ordonnée pour Google Sheets (colonnes A à L).
    // L'adresse e-mail est volontairement exclue de ce payload.
    const orderedPayload = {
      prenom: formData.prenom,
      nom: formData.nom,
      fonction: formData.fonction,
      entreprise: formData.entreprise,
      secteurActivite: formData.secteurActivite,
      sourceDecouverte: formData.sourceDecouverte,
      besoinInitial: formData.besoinInitial,
      solutionApportee: formData.solutionApportee,
      resultatsConstates: formData.resultatsConstates,
      recommandation: formData.recommandation,
      statut: 'En attente',
      date: fullData.date,
    };

    try {
      // Envoi vers Google Sheets.
      await fetch(
        'https://script.google.com/macros/s/AKfycbxuYFqc86JT3ftortzM4hWoKIYzzw7qhyf0giTDw_UnmN1o_0tylRNyG0udX6pPnRI/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain',
          },
          body: JSON.stringify(orderedPayload),
        },
      );

      // Notification e-mail à l'équipe SunuLink.
      await emailjs.send(
        'service_gs6odis',
        'template_z95c4wg',
        fullData as any,
        'sIGXDASzNfWYK5wfK',
      );

      // Accusé de réception automatique au client.
      await emailjs.send(
        'service_gs6odis',
        'template_8vqzelm',
        fullData as any,
        'sIGXDASzNfWYK5wfK',
      );

      setSubmitStatus('success');

      setFormData({
        prenom: '',
        nom: '',
        email: '',
        fonction: '',
        entreprise: '',
        secteurActivite: '',
        sourceDecouverte: '',
        besoinInitial: '',
        solutionApportee: '',
        resultatsConstates: '',
        recommandation: '',
        autorisationPublication: false,
      });

      if (onClose) {
        setTimeout(() => onClose(), 3500);
      }
    } catch (error) {
      console.error('Erreur soumission témoignage:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full rounded-xl border border-[#1178B7]/15 bg-white px-4 py-3 text-xs font-semibold text-slate-900 shadow-inner outline-none transition-all placeholder:font-normal placeholder:text-slate-400 focus:border-[#F59C27] focus:ring-2 focus:ring-[#F59C27]/40 sm:text-sm';

  const labelClass =
    'mb-2 block text-xs font-bold text-white/95 sm:text-sm';

  const labelIconClass = 'h-3.5 w-3.5 text-[#FFC36E]';

  const sectionTitleClass =
    'flex items-center gap-2 border-b border-white/20 pb-3 text-sm font-bold uppercase tracking-wider text-[#F59C27] sm:text-base';

  return (
    <div className="relative mx-auto max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-[#F59C27]/40 bg-gradient-to-br from-[#1178B7] via-[#0E669B] to-[#094C75] p-6 shadow-2xl backdrop-blur-xl custom-scrollbar sm:p-10 md:max-h-[88vh] md:p-12">
      {/* Bouton de fermeture */}
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-50 cursor-pointer rounded-full border border-white/20 p-2.5 text-white/85 transition-all hover:bg-white/15 hover:text-[#FFC36E] active:bg-white/20"
          aria-label="Fermer la fenêtre"
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      )}

      {/* En-tête SunuLink */}
      <div className="mb-10 text-center md:mb-12">
        <h2 className="mb-3 text-2xl font-black tracking-tight text-white sm:mb-4 sm:text-3xl md:text-4xl">
          Votre expérience{' '}
          <span className="text-white">SUNULINK</span>{' '}
          <span className="text-[#F59C27]">CONSULTING</span>
        </h2>

        <p className="mx-auto max-w-xl px-2 text-xs font-medium leading-relaxed text-white/90 sm:text-sm md:text-base">
          Votre retour est précieux. Aidez-nous à valoriser notre collaboration
          en partageant votre avis.
        </p>
      </div>

      {/* Messages d'état */}
      {submitStatus === 'success' && (
        <div className="animate-fadeIn mb-8 flex items-start gap-3.5 rounded-2xl border border-emerald-300/40 bg-emerald-950/20 p-5 text-emerald-50 backdrop-blur-md sm:p-6">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-200 sm:h-6 sm:w-6" />

          <div>
            <h4 className="text-base font-bold text-white sm:text-lg">
              Merci pour votre témoignage !
            </h4>

            <p className="mt-1 text-xs text-emerald-50/90 sm:text-sm">
              Il a bien été enregistré. Un e-mail de confirmation vous a été
              envoyé et l'équipe va analyser votre retour avant sa mise en
              ligne officielle.
            </p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="animate-fadeIn mb-8 rounded-xl border border-red-300/40 bg-red-950/20 p-4 text-xs font-medium text-red-50 sm:text-sm">
          Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous
          contacter directement.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
        {/* SECTION 1 : INFORMATIONS GÉNÉRALES */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className={sectionTitleClass}>
            <User className="h-4 w-4 sm:h-5 sm:w-5" />
            1. Informations Générales
          </h3>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
            <div>
              <label className={labelClass}>Prénom *</label>
              <input
                required
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                className={inputClass}
                placeholder="Ex: Birahim"
              />
            </div>

            <div>
              <label className={labelClass}>Nom *</label>
              <input
                required
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className={inputClass}
                placeholder="Ex: BASSE"
              />
            </div>

            <div className="md:col-span-2">
              <label className={`${labelClass} flex items-center gap-1.5`}>
                <Mail className={labelIconClass} />
                Adresse E-mail Professionnelle *
              </label>

              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                placeholder="Ex: client@entreprise.com"
              />
            </div>

            <div>
              <label className={`${labelClass} flex items-center gap-1.5`}>
                <Briefcase className={labelIconClass} />
                Fonction *
              </label>

              <input
                required
                type="text"
                name="fonction"
                value={formData.fonction}
                onChange={handleChange}
                className={inputClass}
                placeholder="Ex: Directeur Marketing"
              />
            </div>

            <div>
              <label className={`${labelClass} flex items-center gap-1.5`}>
                <Building2 className={labelIconClass} />
                Entreprise *
              </label>

              <input
                required
                type="text"
                name="entreprise"
                value={formData.entreprise}
                onChange={handleChange}
                className={inputClass}
                placeholder="Ex: Entreprise partenaire"
              />
            </div>

            <div className="md:col-span-2">
              <label className={`${labelClass} flex items-center gap-1.5`}>
                <Compass className={labelIconClass} />
                Secteur d’activité *
              </label>

              <input
                required
                type="text"
                name="secteurActivite"
                value={formData.secteurActivite}
                onChange={handleChange}
                className={inputClass}
                placeholder="Ex: Technologie, Agroalimentaire, Énergie..."
              />
            </div>
          </div>
        </div>

        {/* SECTION 2 : LE TÉMOIGNAGE */}
        <div className="space-y-4 pt-2 sm:space-y-6">
          <h3 className={sectionTitleClass}>
            <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
            2. Votre Témoignage
          </h3>

          <div className="space-y-5">
            <div>
              <label className={labelClass}>
                Comment avez-vous connu SUNULINK CONSULTING ? *
              </label>

              <textarea
                required
                name="sourceDecouverte"
                value={formData.sourceDecouverte}
                onChange={handleChange}
                rows={2}
                className={`${inputClass} resize-none`}
                placeholder="Recommandation, Réseaux sociaux, Recherche..."
              />
            </div>

            <div>
              <label className={labelClass}>
                Quel était votre besoin ou problématique initiale ? *
              </label>

              <textarea
                required
                name="besoinInitial"
                value={formData.besoinInitial}
                onChange={handleChange}
                rows={2}
                className={`${inputClass} resize-none`}
                placeholder="Décrivez les défis auxquels vous faisiez face..."
              />
            </div>

            <div>
              <label className={labelClass}>
                Quelle solution SUNULINK CONSULTING vous a-t-elle proposée ? *
              </label>

              <textarea
                required
                name="solutionApportee"
                value={formData.solutionApportee}
                onChange={handleChange}
                rows={2}
                className={`${inputClass} resize-none`}
                placeholder="L'accompagnement, la stratégie ou les outils mis en place..."
              />
            </div>

            <div>
              <label className={labelClass}>
                Quels résultats ou améliorations concrètes avez-vous constatés ? *
              </label>

              <textarea
                required
                name="resultatsConstates"
                value={formData.resultatsConstates}
                onChange={handleChange}
                rows={2}
                className={`${inputClass} resize-none`}
                placeholder="Chiffres clés, gains de temps, visibilité accrue..."
              />
            </div>

            <div>
              <label className={labelClass}>
                Recommanderiez-vous SUNULINK CONSULTING ? Pourquoi ? *
              </label>

              <textarea
                required
                name="recommandation"
                value={formData.recommandation}
                onChange={handleChange}
                rows={2}
                className={`${inputClass} resize-none`}
                placeholder="Vos raisons principales de recommandation..."
              />
            </div>
          </div>
        </div>

        {/* SECTION 3 : AUTORISATION ET ENVOI */}
        <div className="space-y-4 rounded-2xl border border-white/20 bg-white/10 p-4 pt-5 backdrop-blur-md sm:p-6">
          <div className="flex items-start gap-3">
            <input
              required
              type="checkbox"
              id="autorisationPublication"
              name="autorisationPublication"
              checked={formData.autorisationPublication}
              onChange={handleChange}
              className="mt-0.5 h-4 w-4 cursor-pointer rounded border-white/30 bg-white accent-[#F59C27] transition-all focus:ring-2 focus:ring-[#F59C27] sm:h-5 sm:w-5"
            />

            <label
              htmlFor="autorisationPublication"
              className="cursor-pointer select-none text-xs font-medium leading-relaxed text-white/95 sm:text-sm"
            >
              J’autorise{' '}
              <strong className="font-bold text-[#FFC36E]">
                SUNULINK CONSULTING
              </strong>{' '}
              à publier mon témoignage sur son site web et ses supports
              commerciaux.
            </label>
          </div>

          <div className="flex flex-col items-center justify-between gap-5 border-t border-white/20 pt-4 text-[11px] font-medium text-white/80 sm:flex-row sm:text-xs">
            <span className="flex items-center gap-1.5 text-center text-white/90 sm:text-left">
              <Info className="h-4 w-4 shrink-0 text-[#FFC36E]" />
              Vos données professionnelles restent protégées.
            </span>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full transform cursor-pointer items-center justify-center gap-2 rounded-full bg-[#F59C27] px-8 py-3.5 text-xs font-bold text-white shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#1178B7] focus:outline-none focus:ring-4 focus:ring-white/40 disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-white/70 sm:w-auto sm:text-sm"
            >
              {isSubmitting
                ? 'Envoi en cours...'
                : 'Soumettre mon témoignage'}

              <Send className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormulaireTemoignage;
