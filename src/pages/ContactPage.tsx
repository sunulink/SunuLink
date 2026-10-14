import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowDown, ArrowRight, Mail, PhoneCall, Users } from "lucide-react";

const CONTACT_HERO_IMAGE =
  "/img/contact-hero.jpg";

const ContactPage = () => {
  const scrollToContact = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-800">
      <Header />

      <main className="pt-20">
        {/* HERO CONTACT : photo, dégradé et identité SunuLink */}
        <section className="relative isolate flex min-h-[390px] items-center overflow-hidden bg-[#1178B7] sm:min-h-[420px] lg:min-h-[460px]">
          <img
            src={CONTACT_HERO_IMAGE}
            alt=""
            aria-hidden="true"
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[65%_center]"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          {/* Dégradé pour garantir la lisibilité des textes */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#1178B7]/95 via-[#1178B7]/85 to-[#1178B7]/40"
            aria-hidden="true"
          />

          {/* Accent orange de la marque */}
          <div
            className="absolute bottom-0 left-0 h-1.5 w-28 bg-[#F59C27] sm:w-44"
            aria-hidden="true"
          />

          <div className="container relative z-10 mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:py-16">
            <div className="max-w-3xl" data-aos="fade-up">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:text-sm">
                <Mail size={16} className="text-[#F59C27]" />
                Restons en contact
              </div>

              <h1 className="mb-5 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                ÉCRIVEZ-NOUS,
                <br />
                APPELEZ-NOUS,
                <br />
                <span className="text-[#F59C27]">
                  RETROUVEZ-NOUS.
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg md:text-xl">
                Une question, une idée, un besoin en communication ou un
                projet à concrétiser ? Parlons-en. L’équipe SunuLink est
                prête à échanger avec vous pour identifier la solution
                adaptée à vos objectifs.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F59C27] px-7 py-3 font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#1178B7] hover:ring-2 hover:ring-[#F59C27] focus:outline-none focus:ring-4 focus:ring-white/40 motion-reduce:transform-none"
                >
                  Nous contacter
                  <ArrowDown size={18} />
                </button>

                <a
                  href="#partenaires"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-[#F59C27] bg-[#1178B7] px-7 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F59C27] focus:outline-none focus:ring-4 focus:ring-white/40 motion-reduce:transform-none"
                >
                  Nos collaborations
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/95">
                <span className="inline-flex items-center gap-2">
                  <Mail size={17} className="text-[#F59C27]" />
                  Échangeons sur vos idées
                </span>

                <span className="inline-flex items-center gap-2">
                  <PhoneCall size={17} className="text-[#F59C27]" />
                  Construisons ensemble
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* PARTENAIRES */}
        <section
          id="partenaires"
          className="scroll-mt-24 bg-white px-5 py-12 sm:px-6 md:py-16"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1178B7] to-[#F59C27] p-6 shadow-xl sm:p-10 md:p-12">
              {/* Élément graphique décoratif */}
              <div
                className="absolute -right-12 -top-16 h-40 w-40 rounded-full border-[18px] border-white/15 sm:h-56 sm:w-56"
                aria-hidden="true"
              />

              <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/15">
                  <Users size={28} />
                </div>

                <h2 className="mb-4 text-2xl font-black leading-tight sm:text-3xl md:text-4xl">
                  DES COLLABORATIONS FRUCTUEUSES
                </h2>

                <p className="mx-auto mb-7 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg">
                  Les meilleures idées prennent de l’ampleur grâce aux
                  bonnes rencontres. Découvrons ensemble les possibilités
                  de collaboration et de partenariat.
                </p>

                <button
                  type="button"
                  onClick={scrollToContact}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-[#1178B7] px-6 py-3 text-base font-extrabold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-[#F59C27] focus:outline-none focus:ring-4 focus:ring-white/40 motion-reduce:transform-none sm:px-8 sm:text-lg"
                >
                  Un partenariat ? Contactez-nous
                  <ArrowRight size={19} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Le Footer conserve le formulaire de contact existant. */}
      <Footer />
    </div>
  );
};

export default ContactPage;
