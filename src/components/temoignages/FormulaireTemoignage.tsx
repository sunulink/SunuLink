import React, { useState } from 'react';
import { User, Briefcase, Building2, Compass, MessageSquare, ShieldCheck, Send, Info } from 'lucide-react';
import emailjs from '@emailjs/browser';

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

const FormulaireTemoignage = () => {
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

    // Préparation des données pour le stockage (Statut par défaut + date automatique)
    const dataToSave = {
      ...formData,
      statut: 'En attente',
      date: new Date().toLocaleDateString('fr-FR'),
    };

    try {
      // 1. ENVOI VERS GOOGLE SHEETS
      const sheetResponse = await fetch('URL_DE_TON_API_GOOGLE_SHEETS', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSave),
      });

      if (!sheetResponse.ok) throw new Error("Erreur lors de l'enregistrement dans Google Sheets");

      // 2. ENVOI DE LA NOTIFICATION EMAIL VIA LE NOUVEAU COMPTE EMAILJS
      await emailjs.send(
        'VOTRE_NOUVEAU_SERVICE_ID', 
        'VOTRE_NOUVEAU_TEMPLATE_ID', 
        dataToSave as any, 
        'VOTRE_NOUVELLE_PUBLIC_KEY'
      );
      
      setSubmitStatus('success');
      
      // Réinitialisation complète du formulaire après succès
      setFormData({
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
        autorisationPublication: false
      });
    } catch (error) {
      console.error('Erreur soumission témoignage:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 bg-white border border-gray-100 rounded-[2rem] shadow-xl my-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black text-gray-900 mb-3">Votre expérience SUNULINK CONSULTING</h2>
        <p className="text-gray-500 max-w-xl mx-auto font-medium text-sm md:text-base">
          Votre retour est précieux. Aidez-nous à valoriser notre collaboration en partageant votre avis.
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-8 p-6 bg-green-50 text-green-800 rounded-2xl border border-green-200 flex items-start gap-3">
          <ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-lg">Merci pour votre témoignage !</h4>
            <p className="text-sm text-green-700 mt-1">
              Il a bien été enregistré. L'équipe étudiera votre retour avant sa mise en ligne officielle sur le site.
            </p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-8 p-6 bg-red-50 text-red-800 rounded-2xl border border-red-200">
          <p className="font-bold">Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* SECTION 1 : INFORMATIONS GÉNÉRALES */}
        <div className="space-y-6">
          <h3 className="text-xl font-black text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
            <User className="w-5 h-5 text-orange-500" /> 1. Informations Générales
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Prénom *</label>
              <input required type="text" name="prenom" value={formData.prenom} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm text-gray-800" placeholder="Ex: Birahim" />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Nom *</label>
              <input required type="text" name="nom" value={formData.nom} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm text-gray-800" placeholder="Ex: Diop" />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-1">
                <Briefcase className="w-4 h-4 text-gray-400" /> Fonction *
              </label>
              <input required type="text" name="fonction" value={formData.fonction} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm text-gray-800" placeholder="Ex: Directeur Marketing" />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-1">
                <Building2 className="w-4 h-4 text-gray-400" /> Entreprise *
              </label>
              <input required type="text" name="entreprise" value={formData.entreprise} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm text-gray-800" placeholder="Ex: Nema Firm" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-1">
                <Compass className="w-4 h-4 text-gray-400" /> Secteur d’activité *
              </label>
              <input required type="text" name="secteurActivite" value={formData.secteurActivite} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm text-gray-800" placeholder="Ex: Technologie, Agroalimentaire, Énergie..." />
            </div>
          </div>
        </div>

        {/* SECTION 2 : LE TÉMOIGNAGE */}
        <div className="space-y-6 pt-4">
          <h3 className="text-xl font-black text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
            <MessageSquare className="w-5 h-5 text-blue-600" /> 2. Votre Témoignage
          </h3>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Comment avez-vous connu SUNULINK CONSULTING ? *</label>
              <textarea required name="sourceDecouverte" value={formData.sourceDecouverte} onChange={handleChange} rows={3} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm text-gray-800 resize-none" placeholder="Recommandation, Réseaux sociaux, Moteur de recherche..." />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Quel était votre besoin ou problématique initiale ? *</label>
              <textarea required name="besoinInitial" value={formData.besoinInitial} onChange={handleChange} rows={3} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm text-gray-800 resize-none" placeholder="Décrivez les défis auxquels votre entreprise faisait face..." />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Quelle solution SUNULINK CONSULTING vous a-t-elle proposée ? *</label>
              <textarea required name="solutionApportee" value={formData.solutionApportee} onChange={handleChange} rows={3} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm text-gray-800 resize-none" placeholder="L'accompagnement, la stratégie ou les outils mis en place..." />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Quels résultats ou améliorations concrètes avez-vous constatés ? *</label>
              <textarea required name="resultatsConstates" value={formData.resultatsConstates} onChange={handleChange} rows={3} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm text-gray-800 resize-none" placeholder="Chiffres clés, gains de temps, visibilité accrue..." />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Recommanderiez-vous SUNULINK CONSULTING ? Pourquoi ? *</label>
              <textarea required name="recommandation" value={formData.recommandation} onChange={handleChange} rows={3} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm text-gray-800 resize-none" placeholder="Vos raisons principales de recommandation..." />
            </div>
          </div>
        </div>

        {/* SECTION 3 : AUTORISATION & BOUTON D'ENVOI */}
        <div className="pt-6 bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-6">
          <div className="flex items-start gap-3">
            <input required type="checkbox" id="autorisationPublication" name="autorisationPublication" checked={formData.autorisationPublication} onChange={handleChange} className="w-5 h-5 rounded text-orange-500 focus:ring-orange-500 border-gray-300 mt-0.5 cursor-pointer" />
            <label htmlFor="autorisationPublication" className="text-sm text-gray-700 font-medium cursor-pointer select-none leading-relaxed">
              J’autorise <strong className="font-bold">SUNULINK CONSULTING</strong> à publier mon témoignage sur son site web et ses supports de communication commerciale.
            </label>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-gray-200/60 text-xs text-gray-400 font-medium">
            <span className="flex items-center gap-1">
              <Info className="w-4 h-4 text-blue-600" /> Vos données professionnelles restent protégées.
            </span>
            <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto bg-orange-500 text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-blue-600 disabled:bg-gray-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-600/10 cursor-pointer">
              {isSubmitting ? 'Envoi en cours...' : 'Soumettre mon témoignage'}
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

      </form>
    </div>
  );
};

export default FormulaireTemoignage;
