"use client"

import { ProfilePhoto } from './components/profile-photo';
import { ProfileForm } from './components/profile-form';
import { motion } from 'framer-motion';
import { staggerChildren } from '@/lib/animations';

export default function ProfilePage() {
  return (
    <motion.div 
      className="max-w-3xl mx-auto space-y-6"
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
    >
      <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
        <h2 className="text-lg font-medium tracking-tight text-gray-900">Mon Profil</h2>
        <p className="text-sm text-gray-500">
          Gérez vos informations personnelles et professionnelles
        </p>
      </motion.div>

      <div className="space-y-6">
        <ProfilePhoto />
        <ProfileForm />
      </div>
    </motion.div>
  );
}