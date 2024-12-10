"use client"

import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export function CTASection() {
  return (
    <section className="relative py-48">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A66C2] via-[#0077B5] to-[#0052CC]" />
      </div>
      
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-medium text-white mb-8 [text-wrap:balance] max-w-4xl mx-auto"
          variants={fadeInUp}
        >
          Prêt à booster votre carrière ?
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          Rejoignez plus de 50 000 professionnels qui ont déjà transformé leur image et multiplié leurs opportunités
        </motion.p>
        <motion.div 
          className="flex flex-col items-center gap-6"
          variants={fadeInUp}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/auth/login">
              <Button 
                size="lg" 
                variant="secondary" 
                className="rounded-[1000px] px-8 py-6 bg-white hover:bg-white/90 text-[#0A66C2] hover:text-[#0A66C2] border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Créez votre portrait professionnel
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
          <span className="text-white/80 flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            Plus de 8 millions de portraits générés
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}