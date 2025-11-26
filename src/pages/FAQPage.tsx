import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quels services proposez-vous ?",
      answer: "Nous proposons tous les services listés sur notre page Services : stratégie & consulting, branding & identité visuelle, communication visuelle & contenus, digital, web & SEO, développement commercial, événementiel, et IA & automatisation."
    },
    {
      question: "Comment se déroule une collaboration ?",
      answer: "Notre processus est simple et transparent : Diagnostic → Proposition / Devis → Validation → Exécution → Livraison → Suivi. Chaque étape est formalisée pour garantir la qualité et votre satisfaction."
    },
    {
      question: "Travaillez-vous à distance ?",
      answer: "Oui. Nous opérons depuis Dakar et travaillons avec des clients locaux et internationaux à distance, grâce à des outils de collaboration modernes et efficaces."
    },
    {
      question: "Quels sont vos tarifs ?",
      answer: "Nous proposons des packs standard (Teranga, Xeewal, Buur) pour la gestion de communication, ainsi que des devis sur mesure pour tous nos autres services. Contactez-nous pour une estimation personnalisée."
    },
    {
      question: "Proposez-vous des paiements échelonnés ?",
      answer: "Oui. Nos modalités incluent généralement un acompte de 50% à la commande et le solde à la livraison. Des options de mensualisation sont possibles selon le projet."
    },
    {
      question: "Quels délais pour une création de logo ?",
      answer: "Entre 7 et 15 jours ouvrés selon la complexité du projet et le nombre de retours nécessaires."
    },
    {
      question: "Combien de temps pour un site web ?",
      answer: "Un site vitrine simple prend entre 2 et 4 semaines. Un site e-commerce ou plus complexe nécessite entre 6 et 10 semaines."
    },
    {
      question: "Livrez-vous les fichiers sources ?",
      answer: "Oui, après paiement final, vous recevrez les fichiers finaux (PNG, SVG, PDF, sources Adobe/Figma selon accord)."
    },
    {
      question: "Offrez-vous une maintenance web ?",
      answer: "Oui, nous proposons des services de maintenance et des SLA (Service Level Agreement) disponibles en option."
    },
    {
      question: "Faites-vous de la publicité (Facebook/Google) ?",
      answer: "Oui, nous concevons, gérons et optimisons des campagnes payantes sur Facebook, Instagram, Google et LinkedIn."
    },
    {
      question: "Pouvez-vous gérer nos réseaux sociaux ?",
      answer: "Oui — nous proposons des services complets incluant la stratégie, la création de contenus, le community management et le reporting."
    },
    {
      question: "Quels résultats puis-je attendre ?",
      answer: "Les résultats varient selon vos objectifs. Nous définissons des KPI clairs dès le départ et produisons des reportings réguliers pour mesurer les performances."
    },
    {
      question: "Travaillez-vous avec des start-ups ?",
      answer: "Oui, nous accompagnons start-ups et PME à tous les stades de leur développement."
    },
    {
      question: "Acceptez-vous des appels d'offres publics ?",
      answer: "Oui — contactez notre équipe commerciale pour les dossiers d'appels d'offres."
    },
    {
      question: "Offrez-vous des formations ?",
      answer: "Oui, nous proposons des ateliers et formations en stratégie digitale, social media, commercial et IA."
    },
    {
      question: "À qui appartient le design final ?",
      answer: "La cession des droits s'opère après paiement complet, selon les termes du contrat."
    },
    {
      question: "Avez-vous des références ?",
      answer: "Oui — consultez notre page Réalisations et nos études de cas pour découvrir nos projets."
    },
    {
      question: "Comment faire un brief efficace ?",
      answer: "Indiquez vos objectifs, votre cible, votre budget, vos délais et des exemples de références visuelles. Nous fournissons un template de brief sur demande."
    },
    {
      question: "Proposez-vous des services pro bono ou réduits ?",
      answer: "Occasionnellement pour des projets à impact social — à discuter selon le contexte."
    },
    {
      question: "Combien de révisions sont incluses ?",
      answer: "Cela varie selon l'offre ; le standard inclut 2 à 3 séries de corrections. Les packs premium incluent des validations illimitées sous conditions."
    },
    {
      question: "Faites-vous du SEO multilingue ?",
      answer: "Oui, nous pouvons structurer des sites et contenus multilingues pour améliorer votre référencement international."
    },
    {
      question: "Quels outils utilisez-vous ?",
      answer: "Suite Adobe, Figma, Google Analytics, Google Tag Manager, outils d'automatisation (Zapier/Make), et outils IA pour la production de contenus."
    },
    {
      question: "Livrez-vous des rapports ?",
      answer: "Oui, nous fournissons des reportings mensuels et des dashboards KPI selon l'accord établi."
    },
    {
      question: "Pouvez-vous intégrer un paiement en ligne ?",
      answer: "Oui, nous intégrons des solutions de paiement adaptées (transferts, mobile money, cartes bancaires)."
    },
    {
      question: "Comment marche votre pack IA ?",
      answer: "Audit de vos processus → Proposition d'automatisation → Déploiement de chatbot/workflow → Formation & Suivi."
    },
    {
      question: "Quels sont vos horaires ?",
      answer: "Lundi–Vendredi 9h–18h (heure de Dakar). Support hors horaires disponible sur demande."
    },
    {
      question: "Combien de temps avant que vous commenciez ?",
      answer: "Nous démarrons dès réception du devis signé et de l'acompte. Le délai de démarrage est précisé dans chaque devis."
    },
    {
      question: "Proposez-vous des workshops stratégiques ?",
      answer: "Oui, nous organisons des workshops d'une demi-journée ou d'une journée complète, en présentiel ou à distance."
    },
    {
      question: "Que se passe-t-il si je suis insatisfait ?",
      answer: "Nous avons un processus de validation formalisé et cherchons toujours une solution (révisions, ajustements). La clause de réclamation est décrite dans nos CGV."
    },
    {
      question: "Comment puis-je obtenir un devis ?",
      answer: "Via le bouton 'Demander un devis' sur notre site ou en envoyant un email à contact@sunulink.sn. Nous revenons sous 48h."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-white to-sunuGray/20">
          <div className="container mx-auto max-w-5xl text-center">
            <div className="flex items-center justify-center mb-6" data-aos="fade-up">
              <HelpCircle className="w-16 h-16 text-sunuOrange" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-800" data-aos="fade-up">
              Foire Aux <span className="text-sunuOrange">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Vous avez des questions ? Nous avons les réponses. Découvrez tout ce que vous devez savoir sur nos services, notre processus et nos tarifs.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-2 border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-sunuOrange"
                  data-aos="fade-up"
                  data-aos-delay={index * 20}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-sunuGray/10 transition-colors duration-200"
                  >
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="bg-sunuBlue text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 flex-1">{faq.question}</h3>
                    </div>
                    <div className="ml-4">
                      {openIndex === index ? (
                        <ChevronUp className="w-6 h-6 text-sunuOrange" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="p-6 pt-0 pl-16 bg-sunuGray/5">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-sunuGray/20 to-white">
          <div className="container mx-auto max-w-4xl">
            <div className="grain-texture bg-gradient-to-r from-sunuBlue to-sunuCyan text-white rounded-3xl p-12 text-center shadow-2xl" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Vous ne trouvez pas votre réponse ?
              </h2>
              <p className="text-xl mb-8 opacity-95">
                Notre équipe est là pour répondre à toutes vos questions spécifiques.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-sunuBlue px-10 py-4 rounded-full font-bold text-lg hover:bg-sunuOrange hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;
