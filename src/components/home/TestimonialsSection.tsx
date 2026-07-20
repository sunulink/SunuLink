import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Eye, Loader2 } from "lucide-react";

interface GoogleSheetTestimonial {
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
  statut: string;
  date: string;
}

export const TestimonialsSection = () => {
  const [dynamicTestimonials, setDynamicTestimonials] = useState<GoogleSheetTestimonial[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const targetUrl = "https://script.google.com/macros/s/AKfycbxuYFqc86JT3ftortzM4hWoKIYzzw7qhyf0giTDw_UnmN1o_0tylRNyG0udX6pPnRI/exec";
        
        // Utilisation du proxy AllOrigins pour contourner les blocages de redirection/CORS de Google Script
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`);
        const jsonWrapper = await response.json();
        
        // AllOrigins renvoie le résultat dans une chaîne de caractères sous la clé .contents
        const result = JSON.parse(jsonWrapper.contents);

        if (result && Array.isArray(result.data)) {
          // Filtrage strict : on affiche uniquement si le statut est "Validé"
          const valides = result.data.filter(
            (t: GoogleSheetTestimonial) => t.statut === "Validé"
          );
          setDynamicTestimonials(valides);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des témoignages :", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-b from-sunuGray/10 to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-12 px-2" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-3 leading-tight">
            CE QU'ILS DISENT <span className="text-sunuOrange">DE NOUS</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6 md:mb-8">
            Découvrez les témoignages de nos clients satisfaits
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-4 md:mt-6">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto grain-texture bg-gradient-to-br from-sunuBlue to-sunuCyan text-white hover:from-sunuOrange hover:to-yellow-500 font-bold px-5 sm:px-6 py-3 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5" />
                Laisser un avis
              </Button>
            </Link>
            <Link to="/realisations" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto grain-texture bg-gradient-to-br from-sunuOrange to-yellow-500 text-white hover:from-sunuBlue hover:to-sunuCyan font-bold px-5 sm:px-6 py-3 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                Nos réalisations
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-6 md:mt-8">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12 text-gray-500 gap-3">
              <Loader2 className="w-8 h-8 animate-spin text-sunuOrange" />
              <p className="text-sm font-medium">Chargement des témoignages...</p>
            </div>
          ) : dynamicTestimonials.length === 0 ? (
            <div className="text-center py-12 text-gray-500 italic text-sm sm:text-base">
              Aucun témoignage n'a encore été publié.
            </div>
          ) : (
            <Carousel
              opts={{
                loop: true,
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 sm:-ml-4">
                {dynamicTestimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 sm:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex mb-3 sm:mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-sunuOrange fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 italic">
                          "{testimonial.recommandation || testimonial.solutionApportee}"
                        </p>
                      </div>
                      
                      <div className="border-t border-gray-200 pt-3 sm:pt-4">
                        <p className="font-bold text-sm sm:text-base text-gray-800">
                          {testimonial.prenom} {testimonial.nom}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {testimonial.fonction} chez <span className="font-semibold text-sunuBlue">{testimonial.entreprise}</span>
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 hidden md:flex" />
              <CarouselNext className="right-0 hidden md:flex" />
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
