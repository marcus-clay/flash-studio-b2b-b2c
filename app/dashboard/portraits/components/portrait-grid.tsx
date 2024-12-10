"use client"

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import Image from 'next/image';

interface PortraitGridProps {
  onImageClick: (image: string) => void;
}

export function PortraitGrid({ onImageClick }: PortraitGridProps) {
  const recentPhotos = [
    'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
  ];

  return (
    <motion.div variants={fadeInUp}>
      <Card className="p-6">
        <h3 className="text-sm font-medium mb-4">Photos récentes</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {recentPhotos.map((photo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onImageClick(photo)}
              className="cursor-pointer"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src={photo}
                  alt={`Photo récente ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}