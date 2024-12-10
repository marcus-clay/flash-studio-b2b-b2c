"use client"

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { BookOpen, Camera, Users, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageContainer } from '@/components/dashboard/page-container';
import { fadeInUp } from '@/lib/animations';

const guides = [
  {
    icon: Camera,
    title: "La photo parfaite",
    items: [
      "Choisissez un fond neutre et uni",
      "Portez une tenue professionnelle",
      "Assurez un bon éclairage naturel",
      "Adoptez une posture droite et assurée"
    ]
  },
  {
    icon: Users,
    title: "Impact professionnel",
    items: [
      "Augmentez votre visibilité sur LinkedIn",
      "Renforcez votre crédibilité",
      "Démarquez-vous des autres candidats",
      "Créez une première impression positive"
    ]
  },
  {
    icon: BookOpen,
    title: "Conseils d'experts",
    items: [
      "Adaptez votre photo à votre secteur",
      "Optimisez pour chaque plateforme",
      "Suivez les tendances actuelles",
      "Mettez à jour régulièrement"
    ]
  },
  {
    icon: Shield,
    title: "Bonnes pratiques",
    items: [
      "Évitez les selfies",
      "Pas de photos de groupe",
      "Restez authentique",
      "Gardez un style cohérent"
    ]
  }
];

export default function GuidePage() {
  return (
    <PageContainer
      title="Guide et conseils"
      description="Découvrez nos conseils pour réussir vos portraits professionnels"
    >
      <motion.div 
        className="grid gap-6 md:grid-cols-2"
        variants={fadeInUp}
      >
        {guides.map((guide, index) => (
          <motion.div
            key={guide.title}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full border border-gray-100 shadow-sm overflow-hidden">
              <CardHeader className="flex flex-row items-center gap-4 px-6 py-4 bg-gray-50/50">
                <guide.icon className="w-5 h-5 text-gray-500" />
                <h3 className="text-sm font-medium text-gray-900">{guide.title}</h3>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {guide.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="flex items-start gap-3 text-sm text-gray-600"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                    >
                      <span className="text-[#0162C1] select-none">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </PageContainer>
  );
}