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
    <section className="py-16 px-6 bg-gradient-to-b from-sunuGray/10 to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-3">
            CE QU'ILS DISENT <span className="text-sunuOrange">DE NOUS</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Découvrez les témoignages de nos clients satisfaits
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link to="/contact">
              <Button className="grain-texture bg-gradient-to-br from-sunuBlue to-sunuCyan text-white hover:from-sunuOrange hover:to-yellow-500 font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Laisser un avis
              </Button>
            </Link>
            <Link to="/realisations">
              <Button className="grain-texture bg-gradient-to-br from-sunuOrange to-yellow-500 text-white hover:from-sunuBlue hover:to-sunuCyan font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Nos réalisations
              </Button>
            </Link>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="mt-8">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-sunuOrange fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="font-bold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
