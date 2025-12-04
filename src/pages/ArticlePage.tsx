import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  BookmarkPlus,
  Share2,
  Download,
} from "lucide-react";
import { communication360Guide } from "@/data/communication360Guide";
import { charteGraphiqueGuide } from "@/data/charteGraphiqueGuide";
import { brandingPositionnementGuide } from "@/data/brandingPositionnementGuide";
import { strategieDigitaleSeoGuide } from "@/data/strategieDigitaleSeoGuide";
import { reseauxSociauxGuide } from "@/data/reseauxSociauxGuide";

// Map des articles disponibles
const articlesData: Record<string, any> = {
  "guide-complet-communication-360": communication360Guide,
  "charte-graphique-bonnes-pratiques": charteGraphiqueGuide,
  "branding-positionnement-marque": brandingPositionnementGuide,
  "strategie-digitale-seo-guide": strategieDigitaleSeoGuide,
  "reseaux-sociaux-strategies-contenus": reseauxSociauxGuide,
};

const ArticlePage = () => {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  const article = articleSlug ? articlesData[articleSlug] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-black mb-6 text-gray-800">Article non trouvé</h1>
            <Link
              to="/ressources"
              className="inline-flex items-center gap-2 text-sunuOrange hover:text-sunuBlue font-bold"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour aux ressources
            </Link>
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
        {/* Breadcrumb & Back Button */}
        <section className="py-6 px-6 bg-gray-50 border-b">
          <div className="container mx-auto max-w-7xl">
            <Link
              to={`/ressources/${article.category}`}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-sunuOrange font-semibold transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour à la catégorie
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12 px-6 bg-gradient-to-b from-sunuOrange/10 to-white">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-800" data-aos="fade-up">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="100">
              {article.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-sunuOrange" />
                <span className="font-semibold">{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-sunuOrange" />
                <span>{new Date(article.publishedDate).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-sunuOrange" />
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="300">
              <button className="inline-flex items-center gap-2 bg-sunuOrange text-white px-6 py-3 rounded-full font-bold hover:bg-sunuBlue transition-all duration-300 shadow-md hover:shadow-lg">
                <BookmarkPlus className="w-5 h-5" />
                Enregistrer
              </button>
              <button className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-all duration-300">
                <Share2 className="w-5 h-5" />
                Partager
              </button>
              <button className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-all duration-300">
                <Download className="w-5 h-5" />
                Télécharger PDF
              </button>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <article>
              <div className="prose prose-lg max-w-none">
                {article.sections.map((section: any, index: number) => (
                  <div
                    key={section.id}
                    className="mb-16"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                      <h2 className="text-3xl font-black mb-6 text-gray-800 border-b-4 border-sunuOrange pb-3">
                        {section.title}
                      </h2>

                      {section.content && (
                        <div className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
                          {section.content.split('\n\n').map((paragraph: string, pIndex: number) => {
                            // Handle bold text
                            const formattedParagraph = paragraph.split('**').map((part, i) =>
                              i % 2 === 1 ? <strong key={i} className="text-gray-900 font-bold">{part}</strong> : part
                            );

                            // Check if it's a list item
                            if (paragraph.trim().startsWith('-') || paragraph.trim().startsWith('☑') || paragraph.trim().startsWith('✅')) {
                              return (
                                <div key={pIndex} className="flex gap-3 mb-3">
                                  <span className="text-sunuOrange font-bold flex-shrink-0">•</span>
                                  <span>{formattedParagraph}</span>
                                </div>
                              );
                            }

                            // Regular paragraph
                            return (
                              <p key={pIndex} className="mb-4">
                                {formattedParagraph}
                              </p>
                            );
                          })}
                        </div>
                      )}

                      {section.subsections && (
                        <div className="space-y-8 pl-6 border-l-4 border-sunuOrange/30">
                          {section.subsections.map((subsection: any, subIndex: number) => (
                            <div key={subIndex} className="pl-4">
                              <h3 className="text-2xl font-black mb-4 text-gray-800">
                                {subsection.title}
                              </h3>
                              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {subsection.content.split('\n').map((line: string, lineIndex: number) => {
                                  // Handle bold text
                                  const formattedLine = line.split('**').map((part, i) =>
                                    i % 2 === 1 ? <strong key={i} className="text-gray-900 font-bold">{part}</strong> : part
                                  );

                                  // Check if it's a list item
                                  if (line.trim().startsWith('-') || line.trim().startsWith('☑') || line.trim().startsWith('✅')) {
                                    return (
                                      <div key={lineIndex} className="flex gap-3 mb-2">
                                        <span className="text-sunuOrange font-bold flex-shrink-0">•</span>
                                        <span>{formattedLine}</span>
                                      </div>
                                    );
                                  }

                                  // Regular line
                                  return line.trim() ? (
                                    <p key={lineIndex} className="mb-3">
                                      {formattedLine}
                                    </p>
                                  ) : null;
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                    )}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-white to-sunuOrange/10">
          <div className="container mx-auto max-w-4xl">
            <div className="grain-texture bg-gradient-to-r from-sunuBlue to-sunuOrange rounded-3xl p-12 text-white text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Besoin d'aide pour mettre en pratique ?
              </h2>
              <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
                Notre équipe d'experts peut vous accompagner dans la mise en œuvre de ces stratégies pour votre entreprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-block bg-white text-sunuBlue px-10 py-4 rounded-full font-bold text-lg hover:bg-sunuOrange hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Contactez-nous
                </Link>
                <Link
                  to="/ressources"
                  className="inline-block bg-white/20 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-sunuBlue transition-all duration-300"
                >
                  Voir d'autres ressources
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
