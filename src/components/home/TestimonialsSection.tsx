import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Eye } from "lucide-react";
import { testimonials } from "@/data/homeData";

export const TestimonialsSection = () => {
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

        {/* Testimonials Carousel */}
        <div className="mt-6 md:mt-8">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 sm:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                    <div className="flex mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-sunuOrange fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 italic">"{testimonial.text}"</p>
                    <div className="border-t border-gray-200 pt-3 sm:pt-4">
                      <p className="font-bold text-sm sm:text-base text-gray-800">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 hidden md:flex" />
            <CarouselNext className="right-0 hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
