"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Bell } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface NotificationsSettingsProps {
  onSettingsChange: (settings: NotificationSettings) => void;
}

export interface NotificationSettings {
  email: boolean;
  marketing: boolean;
  updates: boolean;
}

export function NotificationsCard({ onSettingsChange }: NotificationsSettingsProps) {
  const [settings, setSettings] = useState<NotificationSettings>({
    email: true,
    marketing: false,
    updates: true,
  });

  const handleChange = (key: keyof NotificationSettings) => {
    const newSettings = {
      ...settings,
      [key]: !settings[key],
    };
    setSettings(newSettings);
    onSettingsChange(newSettings);
  };

  return (
    <motion.div variants={fadeInUp}>
      <Card className="overflow-hidden border border-gray-100 shadow-sm">
        <CardHeader className="flex flex-row items-center gap-4 px-6 py-4 bg-gray-50/50">
          <Bell className="w-5 h-5 text-gray-500" />
          <div>
            <h3 className="text-sm font-medium text-gray-900">Notifications</h3>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          {[
            { key: 'email', label: 'Notifications par email', description: 'Recevez des mises à jour importantes par email' },
            { key: 'marketing', label: 'Communications marketing', description: 'Restez informé de nos dernières offres' },
            { key: 'updates', label: 'Mises à jour produit', description: 'Soyez notifié des nouvelles fonctionnalités' }
          ].map(({ key, label, description }) => (
            <div key={key} className="flex items-start justify-between">
              <div className="space-y-1">
                <Label htmlFor={`notifications-${key}`} className="text-sm font-medium text-gray-900">
                  {label}
                </Label>
                <p className="text-xs text-gray-500">{description}</p>
              </div>
              <Switch
                id={`notifications-${key}`}
                checked={settings[key as keyof NotificationSettings]}
                onCheckedChange={() => handleChange(key as keyof NotificationSettings)}
                className="data-[state=checked]:bg-[#0162C1]"
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}