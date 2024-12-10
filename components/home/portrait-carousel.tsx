"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp, staggerChildren } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const portraits = [
  {
    id: 1,
    title: "Portrait LinkedIn",
    description: "Optimisé pour maximiser votre impact professionnel sur LinkedIn",
    stats: "+45% de visibilité sur votre profil",
    before: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=800&fit=crop",
    after: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop",
  },
  {
    id: 2,
    title: "Portrait Professionnel",
    description: "La qualité studio pour tous vos besoins professionnels",
    stats: "93% de satisfaction client",
    before: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=800&fit=crop",
    after: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=800&fit=crop",
  },
  {
    id: 3,
    title: "Portrait CV",
    description: "L'atout séduction pour votre candidature",
    stats: "3x plus de réponses positives",
    before: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=800&fit=crop",
    after: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop",
  }
];

export function PortraitCarousel() {
  return (
    <section className="py-16 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.h2 
            className="text-3xl font-medium mb-4"
            variants={fadeInUp}
          >
            Transformez vos photos en portraits professionnels
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Une technologie d'IA avancée pour des résultats exceptionnels
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid gap-20"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portraits.map((portrait, index) => (
            <motion.div
              key={portrait.id}
              className="relative"
              variants={fadeInUp}
            >
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 text-left">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl font-medium mb-3">{portrait.title}</h3>
                    <p className="text-gray-600 mb-4">{portrait.description}</p>
                    <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-[#0A66C2] rounded-full text-sm font-medium mb-8">
                      ⚡️ {portrait.stats}
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="relative aspect-square rounded-xl overflow-hidden shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={portrait.before}
                      alt={`Avant ${portrait.title}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                    <span className="absolute bottom-4 left-4 text-white text-sm font-medium px-3 py-1 bg-black/30 rounded-full">
                      Avant
                    </span>
                  </motion.div>
                </div>

                <div className="hidden md:flex w-16 h-16 rounded-full bg-[#0A66C2] items-center justify-center text-white text-2xl transform hover:scale-110 transition-transform">
                  →
                </div>

                <div className="flex-1">
                  <motion.div 
                    className="relative aspect-square rounded-xl overflow-hidden shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={portrait.after}
                      alt={`Après ${portrait.title}`}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-4 right-4 text-white text-sm font-medium px-3 py-1 bg-[#0A66C2]/80 rounded-full">
                      Après
                    </span>
                  </motion.div>
                </div>
              </div>

              {index < portraits.length - 1 && (
                <div className="absolute -left-8 right-8 -bottom-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link href="/auth/login">
            <Button 
              size="lg"
              className="rounded-[1000px] px-8 py-6 bg-gradient-to-r from-[#0A66C2] to-[#0077B5] hover:from-[#004182] hover:to-[#005885] text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
            >
              Créer mon portrait professionnel
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-sm text-[#0A66C2] animate-pulse mt-4">
            ⏰ Plus que 47 portraits gratuits disponibles
          </p>
        </motion.div>
      </div>
    </section>
  );
}