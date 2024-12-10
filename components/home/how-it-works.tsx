"use client"

import { Button } from '@/components/ui/button';
import { ArrowRight, Upload, Zap, Star, Clock } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '@/lib/animations';
import { TrustIndicators } from '@/components/ui/trust-indicators';

const steps = [
  {
    title: "Téléchargez vos selfies",
    duration: "2 min",
    icon: Upload,
    description: "Prenez quelques selfies avec votre téléphone",
    highlight: "🎯 94% de réussite dès la première tentative",
    social: "38 personnes téléchargent en ce moment"
  },
  {
    title: "Notre IA analyse vos photos",
    duration: "2 min",
    icon: Zap,
    description: "Création de portraits naturels et professionnels",
    highlight: "⚡️ Technologie utilisée par +500 entreprises",
    social: "152 portraits générés aujourd'hui"
  },
  {
    title: "Recevez vos portraits",
    duration: "1 min",
    icon: Star,
    description: "Portraits optimisés pour LinkedIn et CV",
    highlight: "🌟 Satisfaction garantie ou remboursé",
    social: "12 portraits livrés dans les 5 dernières minutes"
  }
];

const trustSignals = [
  { value: "50k+", label: "Professionnels satisfaits" },
  { value: "+89%", label: "De visites LinkedIn" },
  { value: "x3", label: "Plus de réponses" },
  { value: "78%", label: "Décrochent un entretien" }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 text-[#0A66C2] bg-blue-50 px-4 py-2 rounded-full mb-6">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">Prêt en 5 minutes</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl font-medium mb-4"
            variants={fadeInUp}
          >
            3 étapes simples pour transformer votre image
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid gap-8 mb-16"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 rounded-2xl p-6 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-50 to-transparent w-1/3 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex items-center gap-6 relative z-10">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-[#0A66C2]" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-medium">{step.title}</h3>
                    <span className="text-sm text-[#0A66C2] bg-blue-50 px-2 py-0.5 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[#0A66C2] text-sm font-medium">
                      {step.highlight}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {step.social}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {trustSignals.map((signal, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center p-4 bg-gray-50 rounded-xl"
            >
              <div className="text-2xl font-bold text-[#0A66C2] mb-1">{signal.value}</div>
              <p className="text-sm text-gray-600">{signal.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
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