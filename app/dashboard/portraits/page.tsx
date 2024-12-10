"use client"

import { PortraitOverview } from './components/portrait-overview';
import { PortraitGrid } from './components/portrait-grid';
import { PortraitStyles } from './components/portrait-styles';
import { PortraitLightbox } from './components/portrait-lightbox';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerChildren } from '@/lib/animations';

export default function PortraitsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <motion.div 
      className="max-w-5xl mx-auto space-y-6"
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
    >
      <div className="space-y-1">
        <h2 className="text-lg font-medium tracking-tight text-gray-900">Portraits</h2>
        <p className="text-sm text-gray-500">
          Gérez vos portraits et photos
        </p>
      </div>

      <PortraitOverview />
      <PortraitGrid onImageClick={(image) => {
        setSelectedImage(image);
        setLightboxOpen(true);
      }} />
      <PortraitStyles />

      <PortraitLightbox
        image={selectedImage}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </motion.div>
  );
}