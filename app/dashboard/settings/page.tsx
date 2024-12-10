"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { NotificationsCard } from './components/notifications-card';
import { AppearanceCard } from './components/appearance-card';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '@/lib/animations';

interface Settings {
  notifications: NotificationSettings;
  appearance: AppearanceSettings;
}

export default function SettingsPage() {
  const { toast } = useToast();
  const [hasChanges, setHasChanges] = useState(false);
  const [settings, setSettings] = useState<Settings>({
    notifications: {
      email: true,
      marketing: false,
      updates: true,
    },
    appearance: {
      theme: 'light',
    },
  });

  const handleNotificationsChange = (notificationSettings: NotificationSettings) => {
    setSettings(prev => ({
      ...prev,
      notifications: notificationSettings,
    }));
    setHasChanges(true);
  };

  const handleAppearanceChange = (appearanceSettings: AppearanceSettings) => {
    setSettings(prev => ({
      ...prev,
      appearance: appearanceSettings,
    }));
    setHasChanges(true);
  };

  const handleSave = () => {
    toast({
      title: "Paramètres sauvegardés",
      description: "Vos préférences ont été mises à jour avec succès.",
    });
    setHasChanges(false);
  };

  return (
    <motion.div 
      className="max-w-3xl mx-auto space-y-6"
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
    >
      <motion.div 
        className="flex justify-between items-center"
        variants={fadeInUp}
      >
        <div>
          <h2 className="text-lg font-medium tracking-tight text-gray-900">Paramètres</h2>
          <p className="text-sm text-gray-500">
            Gérez vos préférences et personnalisez votre expérience
          </p>
        </div>
        {hasChanges && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <Button 
              onClick={handleSave}
              className="bg-[#0162C1] hover:bg-[#0152A1] rounded-[1000px] shadow-sm"
            >
              Sauvegarder les modifications
            </Button>
          </motion.div>
        )}
      </motion.div>

      <motion.div 
        className="grid gap-6"
        variants={fadeInUp}
      >
        <NotificationsCard onSettingsChange={handleNotificationsChange} />
        <AppearanceCard onSettingsChange={handleAppearanceChange} />
      </motion.div>
    </motion.div>
  );
}