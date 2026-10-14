import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from "lucide-react";

const FAQ_HERO_IMAGE =
  "https://images.unsplash.com/photo-1651848894662-5245755aea8e?auto=format&fit=crop&w=1800&q=85";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quels services proposez-vous ?",
      answer:
        "Nous proposons tous les services listés sur notre page Services : stratégie & consulting, branding & identité visuelle, communication visuelle & contenus, digital, web & SEO, développement commercial, événementiel, et IA & automatisation.",
    },
    {
      question: "Comment se déroule une collaboration ?",
      answer:
        "Notre processus est simple et transparent : Diagnostic → Proposition / Devis → Validation → Exécution → Livraison → Suivi. Chaque étape est formalisée pour garantir la qualité et votre satisfaction.",
    },
    {
      question: "Travaillez-vous à distance ?",
      answer:
        "Oui. Nous opérons depuis Dakar et travaillons avec des clients locaux et internationaux à distance, grâce à des outils de collaboration modernes et efficaces.",
    },
    {
      question: "Quels sont vos tarifs ?",
      answer:
        "Nous proposons des packs standard (Teranga, Xeewal, Buur) pour la gestion de communication, ainsi que des devis sur mesure pour tous nos autres services. Contactez-nous pour une estimation personnalisée.",
    },
    {
      question: "Proposez-vous des paiements échelonnés ?",
      answer:
        "Oui. Nos modalités incluent généralement un acompte de 50% à la commande et le solde à la livraison. Des options de mensualisation sont possibles selon le projet.",
    },
    {
      question: "Quels délais pour une création de logo ?",
      answer:
        "Entre 7 et 15 jours ouvrés selon la complexité du projet et le nombre de retours nécessaires.",
    },
    {
      question: "Combien de temps pour un site web ?",
      answer:
        "Un site vitrine simple prend entre 2 et 4 semaines. Un site e-commerce ou plus complexe nécessite entre 6 et 10 semaines.",
    },
    {
      question: "Livrez-vous les fichiers sources ?",
      answer:
        "Oui, après paiement final, vous recevrez les fichiers finaux (PNG, SVG, PDF, sources Adobe/Figma selon accord).",
    },
    {
      question: "Offrez-vous une maintenance web ?",
      answer:
        "Oui, nous proposons des services de maintenance et des SLA (Service Level Agreement) disponibles en option.",
    },
    {
      question: "Faites-vous de la publicité (Facebook/Google) ?",
      answer:
        "Oui, nous concevons, gérons et optimisons des campagnes payantes sur Facebook, Instagram, Google et LinkedIn.",
    },
    {
      question: "Pouvez-vous gérer nos réseaux sociaux ?",
      answer:
        "Oui — nous proposons des services complets incluant la stratégie, la création de contenus, le community management et le reporting.",
    },
    {
      question: "Quels résultats puis-je attendre ?",
      answer:
        "Les résultats varient selon vos objectifs. Nous définissons des KPI clairs dès le départ et produisons des reportings réguliers pour mesurer les performances.",
    },
    {
      question: "Travaillez-vous avec des start-ups ?",
      answer:
        "Oui, nous accompagnons start-ups et PME à tous les stades de leur développement.",
    },
    {
      question: "Acceptez-vous des appels d'offres publics ?",
      answer:
        "Oui — contactez notre équipe commerciale pour les dossiers d'appels d'offres.",
    },
    {
      question: "Offrez-vous des formations ?",
      answer:
        "Oui, nous proposons des ateliers et formations en stratégie digitale, social media, commercial et IA.",
    },
    {
      question: "À qui appartient le design final ?",
      answer:
        "La cession des droits s'opère après paiement complet, selon les termes du contrat.",
    },
    {
      question: "Avez-vous des références ?",
      answer:
        "Oui — consultez notre page Réalisations et nos études de cas pour découvrir nos projets.",
    },
    {
      question: "Comment faire un brief efficace ?",
      answer:
        "Indiquez vos objectifs, votre cible, votre budget, vos délais et des exemples de références visuelles. Nous fournissons un template de brief sur demande.",
    },
    {
      question: "Proposez-vous des services pro bono ou réduits ?",
      answer:
        "Occasionnellement pour des projets à impact social — à discuter selon le contexte.",
    },
    {
      question: "Combien de révisions sont incluses ?",
      answer:
        "Cela varie selon l'offre ; le standard inclut 2 à 3 séries de corrections. Les packs premium incluent des validations illimitées sous conditions.",
    },
    {
      question: "Faites-vous du SEO multilingue ?",
      answer:
        "Oui, nous pouvons structurer des sites et contenus multilingues pour améliorer votre référencement international.",
    },
    {
      question: "Quels outils utilisez-vous ?",
      answer:
        "Suite Adobe, Figma, Google Analytics, Google Tag Manager, outils d'automatisation (Zapier/Make), et outils IA pour la production de contenus.",
    },
    {
      question: "Livrez-vous des rapports ?",
      answer:
        "Oui, nous fournissons des reportings mensuels et des dashboards KPI selon l'accord établi.",
    },
    {
      question: "Pouvez-vous intégrer un paiement en ligne ?",
      answer:
        "Oui, nous intégrons des solutions de paiement adaptées (transferts, mobile money, cartes bancaires).",
    },
    {
      question: "Comment marche votre pack IA ?",
      answer:
        "Audit de vos processus → Proposition d'automatisation → Déploiement de chatbot/workflow → Formation & Suivi.",
    },
    {
      question: "Quels sont vos horaires ?",
      answer:
        "Lundi–Vendredi 9h–18h (heure de Dakar). Support hors horaires disponible sur demande.",
    },
    {
      question: "Combien de temps avant que vous commenciez ?",
      answer:
        "Nous démarrons dès réception du devis signé et de l'acompte. Le délai de démarrage est précisé dans chaque devis.",
    },
    {
      question: "Proposez-vous des workshops stratégiques ?",
      answer:
        "Oui, nous organisons des workshops d'une demi-journée ou d'une journée complète, en présentiel ou à distance.",
    },
    {
      question: "Que se passe-t-il si je suis insatisfait ?",
      answer:
        "Nous avons un processus de validation formalisé et cherchons toujours une solution (révisions, ajustements). La clause de réclamation est décrite dans nos CGV.",
    },
    {
      question: "Comment puis-je obtenir un devis ?",
      answer:
        "Via le bouton 'Demander un devis' sur notre site ou en envoyant un email à . Nous revenons sous 48h.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16 md:pt-28 md:pb-20">
        {/* HERO FAQ : image, léger dégradé et identité SunuLink */}
        <section className="relative isolate flex min-h-[390px] items-center overflow-hidden bg-white sm:min-h-[420px] md:min-h-[460px]">
          {/* Image Unsplash en arrière-plan */}
          <img
            src={FAQ_HERO_IMAGE}
            alt=""
            aria-hidden="true"
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[65%_center] md:left-auto md:w-[58%]"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          {/* Dégradé clair pour préserver la lisibilité du texte */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/70 md:bg-gradient-to-r md:from-white md:via-white/95 md:to-white/10"
            aria-hidden="true"
          />

          {/* Léger accent de couleur sur la photo */}
          <div
            className="absolute inset-y-0 right-0 hidden w-[18%] bg-gradient-to-l from-[#F59C27]/15 to-transparent md:block"
            aria-hidden="true"
          />

          {/* Contenu du héros */}
          <div className="container relative z-10 mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 md:py-16">
            <div
              className="mx-auto max-w-3xl text-center md:mx-0 md:text-left"
              data-aos="fade-up"
            >
              <div className="mb-5 flex justify-center md:justify-start">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1178B7] text-[#F59C27] shadow-md">
                  <HelpCircle className="h-8 w-8" />
                </span>
              </div>

              <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-[#F59C27] sm:text-base">
                Nous sommes là pour vous aider
              </p>

              <h1 className="mb-5 text-4xl font-black leading-tight text-[#1178B7] sm:text-5xl md:text-6xl">
                Foire Aux{" "}
                <span className="text-[#F59C27]">Questions</span>
              </h1>

              <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg md:mx-0 md:text-xl">
                Vous avez des questions ? Nous avons les réponses.
                Découvrez tout ce que vous devez savoir sur nos services,
                notre processus et nos tarifs.
              </p>

              <a
                href="#faq-questions"
                className="group mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#1178B7]/15 bg-white/90 px-5 py-3 font-bold text-[#1178B7] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F59C27] hover:bg-[#1178B7] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#F59C27]/40 sm:px-6"
              >
                Parcourir les questions fréquentes
                <ArrowRight
                  size={18}
                  className="text-[#F59C27] transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Filet de couleur au bas du héros */}
          <div
            className="absolute bottom-0 left-0 h-1.5 w-28 bg-[#F59C27] sm:w-44"
            aria-hidden="true"
          />
        </section>

        {/* LISTE DES QUESTIONS */}
        <section
          id="faq-questions"
          className="scroll-mt-24 bg-white px-4 py-12 sm:px-6 md:py-20"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#F59C27] sm:text-sm">
                Toutes les réponses utiles
              </p>

              <h2 className="text-2xl font-black text-[#1178B7] sm:text-3xl md:text-4xl">
                Vos questions, nos réponses.
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const answerId = `faq-answer-${index}`;

                return (
                  <div
                    key={index}
                    className={`overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                      isOpen
                        ? "border-[#F59C27] shadow-md shadow-[#F59C27]/10"
                        : "border-slate-200 hover:border-[#1178B7]/40"
                    }`}
                    data-aos="fade-up"
                    data-aos-delay={Math.min(index * 20, 180)}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      className="flex w-full items-center justify-between gap-4 bg-white p-4 text-left transition-colors duration-200 hover:bg-[#1178B7]/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#F59C27]/30 sm:p-6"
                    >
                      <div className="flex min-w-0 flex-1 items-start gap-3 sm:gap-4">
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white transition-colors duration-300 ${
                            isOpen
                              ? "bg-[#F59C27]"
                              : "bg-[#1178B7]"
                          }`}
                        >
                          {index + 1}
                        </span>

                        <h3 className="flex-1 pt-1 text-base font-bold leading-relaxed text-slate-800 sm:text-lg">
                          {faq.question}
                        </h3>
                      </div>

                      <span className="shrink-0">
                        {isOpen ? (
                          <ChevronUp
                            className="h-5 w-5 text-[#F59C27] sm:h-6 sm:w-6"
                          />
                        ) : (
                          <ChevronDown
                            className="h-5 w-5 text-[#1178B7] sm:h-6 sm:w-6"
                          />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        id={answerId}
                        className="border-t border-slate-100 bg-slate-50/70 px-5 py-5 sm:px-8 sm:py-6"
                      >
                        <p className="leading-relaxed text-slate-700">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* APPEL À L'ACTION */}
        <section className="bg-gradient-to-b from-slate-50 to-white px-4 py-12 sm:px-6 md:py-16">
          <div className="container mx-auto max-w-4xl">
            <div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1178B7] to-[#1178B7] p-6 text-center text-white shadow-2xl sm:p-10 md:p-12"
              data-aos="fade-up"
            >
              <div
                className="absolute right-0 top-0 h-2 w-28 bg-[#F59C27] sm:w-40"
                aria-hidden="true"
              />

              <h2 className="mb-5 text-2xl font-black sm:text-3xl md:text-4xl">
                Vous ne trouvez pas votre réponse ?
              </h2>

              <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
                Notre équipe est là pour répondre à toutes vos questions
                spécifiques.
              </p>

              <a
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F59C27] px-8 py-4 text-base font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#1178B7] focus:outline-none focus:ring-4 focus:ring-white/40 sm:px-10 sm:text-lg"
              >
                Contactez-nous
                <ArrowRight size={19} />
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
