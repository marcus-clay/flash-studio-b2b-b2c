"use client"

import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '@/lib/animations';

const plans = [
  {
    name: "Découverte",
    price: "Gratuit",
    features: [
      "2 portraits gratuits",
      "Qualité standard",
      "Avec filigrane",
      "Prêt en 5 minutes"
    ],
    cta: "Commencer",
    href: "/auth/login",
    highlight: false
  },
  {
    name: "Premium",
    price: "29€",
    features: [
      "1 portrait premium",
      "3 styles",
      "Sans filigrane",
      "Prêt en 3 minutes",
      "Support prioritaire"
    ],
    cta: "Choisir Premium",
    href: "/auth/login",
    highlight: true
  },
  {
    name: "Business",
    price: "49€",
    features: [
      "3 portraits premium",
      "3 styles",
      "Sans filigrane",
      "Prêt en 10 minutes",
      "Support dédié"
    ],
    cta: "Choisir Business",
    href: "/auth/login",
    highlight: false
  }
];

export function PricingSection() {
  return (
    <motion.section 
      className="bg-gray-50 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-medium mb-4">10 fois mieux, 1/10 du prix</h2>
          <p className="text-xl text-gray-600">Des portraits professionnels, sans les coûts du studio</p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={fadeInUp}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative ${plan.highlight ? 'transform scale-105' : ''}`}
            >
              <div className={`bg-white p-8 rounded-xl shadow-lg ${plan.highlight ? 'border-2 border-[#0A66C2]' : ''}`}>
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#0A66C2] to-[#0077B5] text-white px-4 py-1 rounded-full text-sm">
                      Le plus populaire
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-6">{plan.price}</div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className={`h-5 w-5 ${plan.highlight ? 'text-[#0A66C2]' : 'text-green-500'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={plan.href}>
                  <Button 
                    className={`w-full rounded-[1000px] ${
                      plan.highlight 
                        ? 'bg-gradient-to-r from-[#0A66C2] to-[#0077B5] hover:from-[#004182] hover:to-[#005885] text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30' 
                        : 'bg-white hover:bg-gray-50'
                    }`}
                    variant={plan.highlight ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}