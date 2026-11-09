import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight, Eye, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/homeData";

export const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
      {/* Décor discret aux couleurs de SunuLink */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sunuBlue/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-sunuOrange/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* En-tête */}
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 md:flex-row md:items-end md:justify-between" data-aos="fade-up">
          <div className="max-w-2xl">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-sunuOrange/20 bg-sunuOrange/10 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-sunuOrange sm:text-xs">
              <Quote className="h-3.5 w-3.5" /> Paroles de clients
            </span>
            <h2 className="text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
              CE QU'ILS DISENT <span className="text-sunuOrange">DE NOUS</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
              Découvrez les expériences et retours de celles et ceux qui nous font confiance.
            </p>
          </div>

          {/* Le lien vers les réalisations est conservé ; le bouton « Laisser un avis » est retiré. */}
          <Link
            to="/realisations"
            className="group inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-full border border-sunuBlue/20 bg-white px-5 py-2.5 text-sm font-bold text-sunuBlue shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sunuBlue hover:bg-sunuBlue hover:text-white hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-sunuBlue/20"
          >
            <Eye className="h-4 w-4" />
            Nos réalisations
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Carrousel des témoignages */}
        <div className="relative px-0 sm:px-3 md:px-5" data-aos="fade-up" data-aos-delay="100">
          <Carousel
            opts={{
              loop: testimonials.length > 1,
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 sm:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={`${testimonial.name}-${index}`}
                  className="basis-full pl-3 sm:basis-1/2 sm:pl-4 xl:basis-1/3"
                >
                  <article className="group relative flex h-full min-h-[270px] flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-sunuBlue/30 hover:shadow-[0_18px_42px_rgba(17,120,183,0.12)] sm:rounded-3xl sm:p-6">
                    {/* Accent supérieur */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sunuBlue via-sunuCyan to-sunuOrange" />

                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-1" aria-label={`Note : ${testimonial.rating} sur 5`}>
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating
                                ? "fill-sunuOrange text-sunuOrange"
                                : "fill-slate-100 text-slate-200"
                            }`}
                          />
                        ))}
                      </div>
                      <Quote className="h-8 w-8 flex-shrink-0 text-sunuBlue/15 transition-colors duration-300 group-hover:text-sunuOrange/30" />
                    </div>

                    <blockquote className="mb-7 flex-1 text-sm leading-7 text-slate-600 sm:text-[15px]">
                      “{testimonial.text}”
                    </blockquote>

                    <div className="mt-auto border-t border-slate-100 pt-4">
                      <p className="font-extrabold tracking-tight text-slate-900">
                        {testimonial.name}
                      </p>
                      <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                        {testimonial.company}
                      </p>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            {testimonials.length > 1 && (
              <>
                <CarouselPrevious
                  aria-label="Témoignages précédents"
                  className="-left-2 hidden border-slate-200 bg-white text-sunuBlue shadow-md transition-colors hover:border-sunuOrange hover:bg-sunuOrange hover:text-white sm:flex lg:-left-5"
                />
                <CarouselNext
                  aria-label="Témoignages suivants"
                  className="-right-2 hidden border-slate-200 bg-white text-sunuBlue shadow-md transition-colors hover:border-sunuOrange hover:bg-sunuOrange hover:text-white sm:flex lg:-right-5"
                />
              </>
            )}
          </Carousel>
        </div>

        {testimonials.length === 0 && (
          <p className="rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-10 text-center text-sm text-slate-500">
            Les témoignages seront bientôt disponibles.
          </p>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
