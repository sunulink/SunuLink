import React, { useState } from 'react';
import { User, Briefcase, Building2, Compass, MessageSquare, ShieldCheck, Send, Info, X, Mail } from 'lucide-react';
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

    // 1. Préparation des métadonnées pour l'envoi d'e-mails (EmailJS)
    const fullData = {
      ...formData,
      statut: 'En attente',
      date: new Date().toLocaleDateString('fr-FR'),
    };

    // 2. Alignement structurel strict et ordonné pour Google Sheets (Colonnes A à L)
    // On exclut volontairement l'email ici pour ne pas impacter le tableau Google Sheets
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
      statut: 'En attente', // Fixé rigoureusement en avant-dernière position (Colonne K)
      date: fullData.date,  // Fixé rigoureusement en dernière position (Colonne L)
    };

    try {
      // Envoi ordonné vers Google Sheets
      await fetch('https://script.google.com/macros/s/AKfycbxuYFqc86JT3ftortzM4hWoKIYzzw7qhyf0giTDw_UnmN1o_0tylRNyG0udX6pPnRI/exec', {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 
          'Content-Type': 'text/plain' 
        },
        body: JSON.stringify(orderedPayload), // Envoi du payload structuré sans décalage
      });

      // Envoi de la notification e-mail à l'équipe SUNULINK
      await emailjs.send(
        'service_gs6odis', 
        'template_z95c4wg', 
        fullData as any, 
        'sIGXDASzNfWYK5wfK'
      );
      
      // Envoi de l'accusé de réception automatique au client
      await emailjs.send(
        'service_gs6odis', 
        'template_8vqzelm', 
        fullData as any, 
        'sIGXDASzNfWYK5wfK'
      );
      
      setSubmitStatus('success');
      
      setFormData({
        prenom: '', nom: '', email: '', fonction: '', entreprise: '', secteurActivite: '',
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
    <div className="relative w-full max-w-4xl mx-auto p-6 sm:p-10 md:p-12 bg-gradient-to-br from-slate-950 via-sunuBlue/20 to-slate-950 border border-white/10 rounded-3xl shadow-2xl max-h-[92vh] md:max-h-[88vh] overflow-y-auto custom-scrollbar backdrop-blur-xl">
      
      {/* Bouton de Fermeture Modale */}
      {onClose && (
        <button 
          onClick={onClose} 
          className="absolute top-5 right-5 p-2.5 rounded-full text-slate-400 hover:text-sunuOrange hover:bg-white/5 active:bg-white/10 transition-all cursor-pointer z-50 border border-white/5"
          aria-label="Fermer la fenêtre"
        >
          <X className="w-5 h-5 sm:w-6 h-6" />
        </button>
      )}

      {/* En-tête Identité SunuLink */}
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mb-3 sm:mb-4">
          Votre expérience <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunuBlue to-sunuCyan">SUNULINK</span> <span className="text-sunuOrange">CONSULTING</span>
        </h2>
        <p className="text-slate-300 max-w-xl mx-auto font-medium text-xs sm:text-sm md:text-base px-2 leading-relaxed">
          Votre retour est précieux. Aidez-nous à valoriser notre collaboration en partageant votre avis.
        </p>
      </div>

      {/* Messages d'état */}
      {submitStatus === 'success' && (
        <div className="mb-8 p-5 sm:p-6 bg-emerald-500/10 text-emerald-200 rounded-2xl border border-emerald-500/30 flex items-start gap-3.5 animate-fadeIn backdrop-blur-md">
          <ShieldCheck className="w-5 h-5 sm:w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-base sm:text-lg text-white">Merci pour votre témoignage !</h4>
            <p className="text-xs sm:text-sm text-emerald-300/90 mt-1">
              Il a bien été enregistré. Un e-mail de confirmation vous a été envoyé et l'équipe va analyser votre retour avant sa mise en ligne officielle.
            </p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-8 p-4 bg-red-500/10 text-red-200 rounded-xl border border-red-500/30 text-xs sm:text-sm font-medium animate-fadeIn">
          Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
        
        {/* SECTION 1 : INFORMATIONS GÉNÉRALES */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-sm sm:text-base font-bold tracking-wider uppercase flex items-center gap-2 border-b border-white/10 pb-3 text-sunuCyan">
            <User className="w-4 h-4 sm:w-5 h-5" /> 1. Informations Générales
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <div>
              <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-2">Prénom *</label>
              <input required type="text" name="prenom" value={formData.prenom} onChange={handleChange} className="w-full px-4 py-3 bg-white/95 border border-transparent rounded-xl focus:ring-2 focus:ring-sunuOrange outline-none text-xs sm:text-sm text-slate-900 font-semibold shadow-inner transition-all" placeholder="Ex: Birahim" />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-2">Nom *</label>
              <input required type="text" name="nom" value={formData.nom} onChange={handleChange} className="w-full px-4 py-3 bg-white/95 border border-transparent rounded-xl focus:ring-2 focus:ring-sunuOrange outline-none text-xs sm:text-sm text-slate-900 font-semibold shadow-inner transition-all" placeholder="Ex: BASSE" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-2 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" /> Adresse E-mail Professionnelle *
              </label>
              <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-white/95 border border-transparent rounded-xl focus:ring-2 focus:ring-sunuOrange outline-none text-xs sm:text-sm text-slate-900 font-semibold shadow-inner transition-all" placeholder="Ex: client@entreprise.com" />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-2 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-slate-400" /> Fonction *
              </label>
              <input required type="text" name="fonction" value={formData.fonction} onChange={handleChange} className="w-full px-4 py-3 bg-white/95 border border-transparent rounded-xl focus:ring-2 focus:ring-sunuBlue outline-none text-xs sm:text-sm text-slate-900 font-semibold shadow-inner transition-all" placeholder="Ex: Directeur Marketing" />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-2 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-slate-400" /> Entreprise *
              </label>
              <input required type="text" name="entreprise" value={formData.entreprise} onChange={handleChange} className="w-full px-4 py-3 bg-white/95 border border-transparent rounded-xl focus:ring-2 focus:ring-sunuBlue outline-none text-xs sm:text-sm text-slate-900 font-semibold shadow-inner transition-all" placeholder="Ex: Entreprise partenaire" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-2 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-slate-400" /> Secteur d’activité *
              </label>
              <input required type="text" name="secteurActivite" value={formData.secteurActivite} onChange={handleChange} className="w-full px-4 py-3 bg-white/95 border border-transparent rounded-xl focus:ring-2 focus:ring-sunuCyan outline-none text-xs sm:text-sm text-slate-900 font-semibold shadow-inner transition-all" placeholder="Ex: Technologie, Agroalimentaire, Énergie..." />
            </div>
          </div>
        </div>

        {/* SECTION 2 : LE TÉMOIGNAGE */}
        <div className="space-y-4 sm:space-y-6 pt-2">
          <h3 className="text-sm sm:text-base font-bold tracking-wider uppercase flex items-center gap-2 border-b border-white/10 pb-3 text-sunuCyan">
            <MessageSquare className="w-4 h-4 sm:w-5 h-5" /> 2. Votre Témoignage
          </h3>
          <div className="space-y-5">
            <div>
              <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-2">Comment avez-vous connu SUNULINK CONSULTING ? *</label>
              <textarea required name="sourceDecouverte" value={formData.sourceDecouverte} onChange={handleChange} rows={2} className="w-full px-4 py-3 bg-white/95 border border-transparent rounded-xl focus:ring-2 focus:ring-sunuBlue outline-none text-xs sm:text-sm text-slate-900 font-semibold resize-none shadow-inner transition-all" placeholder="Recommandation, Réseaux sociaux, Recherche..." />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-2">Quel était votre besoin ou problématique initiale ? *</label>
              <textarea required name="besoinInitial" value={formData.besoinInitial} onChange={handleChange} rows={2} className="w-full px-4 py-3 bg-white/95 border border-transparent rounded-xl focus:ring-2 focus:ring-sunuOrange outline-none text-xs sm:text-sm text-slate-900 font-semibold resize-none shadow-inner transition-all" placeholder="Décrivez les défis auxquels vous faisiez face..." />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-2">Quelle solution SUNULINK CONSULTING vous a-t-elle proposée ? *</label>
              <textarea required name="solutionApportee" value={formData.solutionApportee} onChange={handleChange} rows={2} className="w-full px-4 py-3 bg-white/95 border border-transparent rounded-xl focus:ring-2 focus:ring-sunuBlue outline-none text-xs sm:text-sm text-slate-900 font-semibold resize-none shadow-inner transition-all" placeholder="L'accompagnement, la stratégie ou les outils mis en place..." />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-2">Quels résultats ou améliorations concrètes avez-vous constatés ? *</label>
              <textarea required name="resultatsConstates" value={formData.resultatsConstates} onChange={handleChange} rows={2} className="w-full px-4 py-3 bg-white/95 border border-transparent rounded-xl focus:ring-2 focus:ring-sunuOrange outline-none text-xs sm:text-sm text-slate-900 font-semibold resize-none shadow-inner transition-all" placeholder="Chiffres clés, gains de temps, visibilité accrue..." />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-2">Recommanderiez-vous SUNULINK CONSULTING ? Pourquoi ? *</label>
              <textarea required name="recommandation" value={formData.recommandation} onChange={handleChange} rows={2} className="w-full px-4 py-3 bg-white/95 border border-transparent rounded-xl focus:ring-2 focus:ring-sunuCyan outline-none text-xs sm:text-sm text-slate-900 font-semibold resize-none shadow-inner transition-all" placeholder="Vos raisons principales de recommandation..." />
            </div>
          </div>
        </div>

        {/* SECTION 3 : AUTORISATION & BOUTON D'ENVOI */}
        <div className="pt-5 bg-white/5 p-4 sm:p-6 rounded-2xl border border-white/10 space-y-4 backdrop-blur-md">
          <div className="flex items-start gap-3">
            <input 
              required 
              type="checkbox" 
              id="autorisationPublication" 
              name="autorisationPublication" 
              checked={formData.autorisationPublication} 
              onChange={handleChange} 
              className="w-4 h-4 sm:w-5 h-5 rounded text-sunuOrange focus:ring-sunuOrange border-white/20 bg-transparent mt-0.5 cursor-pointer transition-all" 
            />
            <label htmlFor="autorisationPublication" className="text-xs sm:text-sm text-slate-200 font-medium cursor-pointer select-none leading-relaxed">
              J’autorise <strong className="font-bold text-sunuCyan">SUNULINK CONSULTING</strong> à publier mon témoignage sur son site web et ses supports commerciaux.
            </label>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-4 border-t border-white/10 text-[11px] sm:text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5 text-center sm:text-left text-slate-300">
              <Info className="w-4 h-4 text-sunuCyan flex-shrink-0" /> Vos données professionnelles restent protégées.
            </span>
            
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full sm:w-auto bg-sunuOrange hover:bg-sunuBlue text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-xl shadow-sunuOrange/20 hover:shadow-sunuBlue/20 disabled:bg-slate-700 disabled:text-slate-400 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Soumettre mon témoignage'}
              <Send className="w-3.5 h-3.5 sm:w-4 h-4 flex-shrink-0" />
            </button>
          </div>
        </div>

      </form>
    </div>
  );
};

export default FormulaireTemoignage;
