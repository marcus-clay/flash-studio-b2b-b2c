"use client"

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useCallback } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: "Marie Laurent",
    role: "Directrice Marketing",
    company: "Tech Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    content: "Grâce à FlashStudio, j'ai multiplié par 3 mes opportunités sur LinkedIn. Mon nouveau portrait professionnel a vraiment fait la différence dans ma recherche d'emploi.",
    rating: 5
  },
  {
    name: "Thomas Dubois",
    role: "Consultant Senior",
    company: "Deloitte",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
    content: "Investir dans un portrait professionnel avec FlashStudio a été l'un des meilleurs choix pour ma carrière. J'ai décroché un poste avec +30% de salaire !",
    rating: 5
  },
  {
    name: "Sophie Martin",
    role: "Product Manager",
    company: "Amazon",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    content: "La qualité des portraits est impressionnante. Mes collègues m'ont tous demandé où j'avais fait faire mes photos. Le ROI est indéniable.",
    rating: 5
  },
  {
    name: "Pierre Moreau",
    role: "Développeur Senior",
    company: "Microsoft",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
    content: "Le processus est simple et rapide. Les résultats sont au-delà de mes attentes. Un vrai plus pour mon personal branding.",
    rating: 5
  },
  {
    name: "Claire Dubois",
    role: "Architecte",
    company: "Foster + Partners",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop",
    content: "La qualité studio sans le studio ! Les portraits sont d'une qualité exceptionnelle et le service est impeccable.",
    rating: 5
  },
  {
    name: "Marc Leroy",
    role: "Avocat",
    company: "Cabinet Leroy",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
    content: "Un service qui comprend parfaitement les besoins des professionnels. Résultat impeccable du premier coup.",
    rating: 5
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<null | typeof testimonials[0]>(null);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (isAnimating) return;

    setIsAnimating(true);
    const totalTestimonials = testimonials.length;
    
    setCurrentIndex(prevIndex => {
      let newIndex;
      if (direction === 'left') {
        newIndex = prevIndex === 0 ? totalTestimonials - 3 : prevIndex - 3;
      } else {
        newIndex = prevIndex === totalTestimonials - 3 ? 0 : prevIndex + 3;
      }
      return newIndex;
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  }, [isAnimating]);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium mb-4">
            Rejoignez plus de 50 000 professionnels satisfaits
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-600">4.9/5 basé sur plus de 50 000 avis</span>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex transition-all duration-300 ease-in-out"
              initial={false}
              animate={{ x: `-${currentIndex * (100 / 3)}%` }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="w-1/3 flex-shrink-0 px-3"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedTestimonial(testimonial)}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 cursor-pointer">
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                        <div className="flex mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <p className="text-sm mb-4 line-clamp-3">
                          "{testimonial.content}"
                        </p>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-gray-300">
                            {testimonial.role} • {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                className="bg-white hover:bg-white/90 shadow-lg rounded-full w-12 h-12 flex items-center justify-center"
                onClick={() => scroll('left')}
                disabled={isAnimating}
                aria-label="Témoignages précédents"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </motion.div>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                className="bg-white hover:bg-white/90 shadow-lg rounded-full w-12 h-12 flex items-center justify-center"
                onClick={() => scroll('right')}
                disabled={isAnimating}
                aria-label="Témoignages suivants"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Ne laissez pas une photo amateur limiter vos opportunités professionnelles. 
            <span className="text-[#0A66C2] font-medium"> 76% des recruteurs</span> rejettent des candidats à cause d'une photo de profil non professionnelle.
          </p>
          <Link href="/auth/login">
            <Button 
              size="lg"
              className="rounded-[1000px] px-8 py-6 bg-gradient-to-r from-[#0A66C2] to-[#0077B5] hover:from-[#004182] hover:to-[#005885] text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300"
            >
              Créer mon portrait professionnel
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>

      <Dialog open={!!selectedTestimonial} onOpenChange={() => setSelectedTestimonial(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Témoignage</DialogTitle>
          </DialogHeader>
          {selectedTestimonial && (
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={selectedTestimonial.image}
                    alt={selectedTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{selectedTestimonial.name}</h3>
                  <p className="text-sm text-gray-500">
                    {selectedTestimonial.role} • {selectedTestimonial.company}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(selectedTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">"{selectedTestimonial.content}"</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}