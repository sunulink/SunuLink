import React, { useState } from 'react';
import { User, Briefcase, Building2, Compass, MessageSquare, ShieldCheck, Send, Info, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface IFormulaireProps {
  onClose?: () => void;
}

interface ITemoignageForm {
  prenom: string;
  nom: string;
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
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.autorisationPublication) {
      alert("Veuillez cocher la case d'autorisation pour soumettre votre témoignage.");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    const dataToSave = {
      ...formData,
      statut: 'En attente',
      date: new Date().toLocaleDateString('fr-FR'),
    };

    try {
      // 1. ENVOI VERS GOOGLE SHEETS
      const sheetResponse = await fetch('URL_DE_TON_API_GOOGLE_SHEETS', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSave),
      });

      if (!sheetResponse.ok) throw new Error("Erreur Google Sheets");

      // 2. ENVOI DE LA NOTIFICATION EMAIL
      await emailjs.send(
        'VOTRE_NOUVEAU_SERVICE_ID', 
        'VOTRE_NOUVEAU_TEMPLATE_ID', 
        dataToSave as any, 
        'VOTRE_NOUVELLE_PUBLIC_KEY'
      );
      
      setSubmitStatus('success');
      
      setFormData({
        prenom: '', nom: '', fonction: '', entreprise: '', secteurActivite: '',
        sourceDecouverte: '', besoinInitial: '', solutionApportee: '',
        resultatsConstates: '', recommandation: '', autorisationPublication: false
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

  return (
    <div className="relative w-full max-w-4xl mx-auto p-5 sm:p-8 md:p-10 bg-white border border-gray-100 rounded-2xl sm:rounded-[2rem] shadow-2xl max-h-[92vh] md:max-h-[88vh] overflow-y-auto custom-scrollbar">
      
      {/* Bouton de Fermeture Modale */}
      {onClose && (
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 p-2.5 rounded-full text-gray-400 hover:text-sunuBlue hover:bg-sunuBlue/5 active:bg-sunuBlue/10 transition-all cursor-pointer z-50"
          aria-label="Fermer la fenêtre"
        >
          <X className="w-5 h-5 sm:w-6 h-6" />
        </button>
      )}

      {/* En-tête */}
      <div className="text-center mb-8 sm:mb-10 pr-4 sm:pr-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-2 sm:mb-3">
          Votre expérience <span className="text-sunuBlue">SUNULINK</span> <span className="text-sunuOrange">CONSULTING</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto font-medium text-xs sm:text-sm px-2">
          Votre retour est précieux. Aidez-nous à valoriser notre collaboration en partageant votre avis.
        </p>
      </div>

      {/* Messages d'état */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 sm:p-6 bg-green-50 text-green-800 rounded-xl sm:rounded-2xl border border-green-200 flex items-start gap-3 animate-fadeIn">
          <ShieldCheck className="w-5 h-5 sm:w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-base sm:text-lg">Merci pour votre témoignage !</h4>
            <p className="text-xs sm:text-sm text-green-700 mt-1">
              Il a bien été enregistré. L'équipe va analyser votre retour avant sa mise en ligne officielle.
            </p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-xl border border-red-200 text-xs sm:text-sm font-medium animate-fadeIn">
          Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
        
        {/* SECTION 1 : INFORMATIONS GÉNÉRALES */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-base sm:text-lg font-black text-gray-800 flex items-center gap-2 border-b border-gray-100 pb-2.5">
            <User className="w-4 h-4 sm:w-5 h-5 text-sunuOrange" /> 1. Informations Générales
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5 sm:mb-2">Prénom *</label>
              <input required type="text" name="prenom" value={formData.prenom} onChange={handleChange} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sunuOrange focus:border-transparent outline-none text-xs sm:text-sm text-gray-800 transition-all" placeholder="Ex: Birahim" />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5 sm:mb-2">Nom *</label>
              <input required type="text" name="nom" value={formData.nom} onChange={handleChange} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sunuOrange focus:border-transparent outline-none text-xs sm:text-sm text-gray-800 transition-all" placeholder="Ex: BASSE" />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5 sm:mb-2 flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5 text-gray-400" /> Fonction *
              </label>
              <input required type="text" name="fonction" value={formData.fonction} onChange={handleChange} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sunuBlue focus:border-transparent outline-none text-xs sm:text-sm text-gray-800 transition-all" placeholder="Ex: Directeur Marketing" />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5 sm:mb-2 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-gray-400" /> Entreprise *
              </label>
              <input required type="text" name="entreprise" value={formData.entreprise} onChange={handleChange} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sunuBlue focus:border-transparent outline-none text-xs sm:text-sm text-gray-800 transition-all" placeholder="Ex: SUNULINK CONSULTING" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5 sm:mb-2 flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-gray-400" /> Secteur d’activité *
              </label>
              <input required type="text" name="secteurActivite" value={formData.secteurActivite} onChange={handleChange} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sunuCyan focus:border-transparent outline-none text-xs sm:text-sm text-gray-800 transition-all" placeholder="Ex: Technologie, Agroalimentaire, Énergie..." />
            </div>
          </div>
        </div>

        {/* SECTION 2 : LE TÉMOIGNAGE */}
        <div className="space-y-4 sm:space-y-6 pt-2">
          <h3 className="text-base sm:text-lg font-black text-gray-800 flex items-center gap-2 border-b border-gray-100 pb-2.5">
            <MessageSquare className="w-4 h-4 sm:w-5 h-5 text-sunuBlue" /> 2. Votre Témoignage
          </h3>
          <div className="space-y-4 sm:space-y-5">
            <div>
              <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5">Comment avez-vous connu SUNULINK CONSULTING ? *</label>
              <textarea required name="sourceDecouverte" value={formData.sourceDecouverte} onChange={handleChange} rows={2} className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sunuBlue focus:border-transparent outline-none text-xs sm:text-sm text-gray-800 resize-none transition-all" placeholder="Recommandation, Réseaux sociaux, Recherche..." />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5">Quel était votre besoin ou problématique initiale ? *</label>
              <textarea required name="besoinInitial" value={formData.besoinInitial} onChange={handleChange} rows={2} className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sunuOrange focus:border-transparent outline-none text-xs sm:text-sm text-gray-800 resize-none transition-all" placeholder="Décrivez les défis auxquels vous faisiez face..." />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5">Quelle solution SUNULINK CONSULTING vous a-t-elle proposée ? *</label>
              <textarea required name="solutionApportee" value={formData.solutionApportee} onChange={handleChange} rows={2} className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sunuBlue focus:border-transparent outline-none text-xs sm:text-sm text-gray-800 resize-none transition-all" placeholder="L'accompagnement, la stratégie ou les outils mis en place..." />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5">Quels résultats ou améliorations concrètes avez-vous constatés ? *</label>
              <textarea required name="resultatsConstates" value={formData.resultatsConstates} onChange={handleChange} rows={2} className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sunuOrange focus:border-transparent outline-none text-xs sm:text-sm text-gray-800 resize-none transition-all" placeholder="Chiffres clés, gains de temps, visibilité accrue..." />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5">Recommanderiez-vous SUNULINK CONSULTING ? Pourquoi ? *</label>
              <textarea required name="recommandation" value={formData.recommandation} onChange={handleChange} rows={2} className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sunuCyan focus:border-transparent outline-none text-xs sm:text-sm text-gray-800 resize-none transition-all" placeholder="Vos raisons principales de recommandation..." />
            </div>
          </div>
        </div>

        {/* SECTION 3 : AUTORISATION & BOUTON SOUMISSION */}
        <div className="pt-4 bg-gray-50 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-gray-100 space-y-4">
          <div className="flex items-start gap-2.5 sm:gap-3">
            <input 
              required 
              type="checkbox" 
              id="autorisationPublication" 
              name="autorisationPublication" 
              checked={formData.autorisationPublication} 
              onChange={handleChange} 
              className="w-4 h-4 sm:w-5 h-5 rounded text-sunuOrange focus:ring-sunuOrange border-gray-300 mt-0.5 cursor-pointer" 
            />
            <label htmlFor="autorisationPublication" className="text-xs sm:text-sm text-gray-700 font-medium cursor-pointer select-none leading-relaxed">
              J’autorise <strong className="font-bold text-sunuBlue">SUNULINK CONSULTING</strong> à publier mon témoignage sur son site web et ses supports commerciaux.
            </label>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-gray-200 text-[11px] sm:text-xs text-gray-400 font-medium">
            <span className="flex items-center gap-1 text-center sm:text-left">
              <Info className="w-3.5 h-3.5 text-sunuBlue flex-shrink-0" /> Vos données professionnelles restent protégées.
            </span>
            {/* Bouton mis à jour en jaune-500 et hover en sunuBlue */}
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full sm:w-auto bg-yellow-500 text-white px-6 sm:px-8 py-3 rounded-full font-bold text-xs sm:text-sm hover:bg-sunuBlue disabled:bg-gray-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 cursor-pointer"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Soumettre mon témoignage'}
              <Send className="w-3.5 h-3.5 sm:w-4 h-4" />
            </button>
          </div>
        </div>

      </form>
    </div>
  );
};

export default FormulaireTemoignage;
