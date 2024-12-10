"use client"

import { Shield, Zap, Target, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

const guarantees = [
  { 
    icon: Shield, 
    text: "Satisfait ou remboursé sous 7 jours",
    description: "Garantie sans condition"
  },
  { 
    icon: Zap, 
    text: "Support client réactif",
    description: "Réponse en moins de 2h"
  },
  { 
    icon: Target, 
    text: "Confidentialité garantie",
    description: "Données sécurisées"
  },
  { 
    icon: Camera, 
    text: "Résultats en 5 minutes",
    description: "Ou moins"
  }
];

interface TrustIndicatorsProps {
  variant?: 'light' | 'dark';
  showDescription?: boolean;
}

export function TrustIndicators({ variant = 'light', showDescription = false }: TrustIndicatorsProps) {
  const baseTextColor = variant === 'light' ? 'text-gray-600' : 'text-white/80';
  const baseIconColor = variant === 'light' ? 'text-[#0A66C2]' : 'text-white';
  const baseIconBg = variant === 'light' ? 'bg-blue-50' : 'bg-white/10';

  return (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-4 gap-6"
      variants={fadeInUp}
    >
      {guarantees.map((guarantee, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className={`w-12 h-12 rounded-full ${baseIconBg} flex items-center justify-center mb-3`}>
            <guarantee.icon className={`h-6 w-6 ${baseIconColor}`} />
          </div>
          <p className={`font-medium text-sm ${variant === 'light' ? 'text-gray-900' : 'text-white'}`}>
            {guarantee.text}
          </p>
          {showDescription && (
            <p className={`text-xs mt-1 ${baseTextColor}`}>
              {guarantee.description}
            </p>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}