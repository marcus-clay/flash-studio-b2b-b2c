"use client"

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import Image from 'next/image';

export function PortraitStyles() {
  const styles = [
    {
      name: 'Studio Pro',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      description: 'Style professionnel avec éclairage studio'
    },
    {
      name: 'Natural Light',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      description: 'Portrait en lumière naturelle'
    },
    {
      name: 'Corporate',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
      description: 'Style corporate et business'
    }
  ];

  return (
    <motion.div variants={fadeInUp}>
      <Card className="p-6">
        <h3 className="text-sm font-medium mb-4">Styles disponibles</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {styles.map((style, index) => (
            <motion.div
              key={style.name}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                <Image
                  src={style.image}
                  alt={style.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-medium text-sm mb-1">{style.name}</h4>
              <p className="text-sm text-gray-500">{style.description}</p>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}