import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

const testimonials = [
  {
    author: "Fatou S.",
    text: "Service rapide, équipe à l'écoute et résultat au top ! Je recommande vivement.",
  },
  {
    author: "Mamadou D.",
    text: "Une expérience client exceptionnelle, du début à la fin. Merci SunuLink !",
  },
  {
    author: "Awa N.",
    text: "Leur professionnalisme et leur créativité ont dépassé nos attentes.",
  },
  {
    author: "Ibrahima T.",
    text: "Très satisfait du suivi et de la qualité du projet livré.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:px-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          <div>
            <h2 className="text-4xl font-bold mb-8">CE QU'ILS DISENT<br />DE NOUS</h2>
            <Card className="bg-gray-200 p-8 border-0 mb-8 min-h-[8rem] flex flex-col justify-center transition-all duration-500">
              <div className="h-24 flex flex-col items-center justify-center text-gray-700 text-lg text-center">
                <span className="mb-2 italic">"{testimonials[current].text}"</span>
                <span className="mt-2 font-semibold text-primary">- {testimonials[current].author}</span>
              </div>
              <div className="flex justify-center mt-4 gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2.5 h-2.5 rounded-full ${idx === current ? "bg-primary" : "bg-gray-400"}`}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Voir le témoignage ${idx + 1}`}
                  />
                ))}
              </div>
            </Card>
          </div>
          
          <Card className="bg-gradient-hero p-10 md:mt-20 text-white border-0 shadow-elegant relative  overflow-hidden">
   
            <div className="mb-0">
              <h3 className="text-2xl font-bold mb-4">DES COLLABORATIONS<br />FRUCTUEUSES</h3>
              <p className="opacity-90">Découvrez et re-visitez nos partenaires.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;