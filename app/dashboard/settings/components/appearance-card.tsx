"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface AppearanceSettingsProps {
  onSettingsChange: (settings: AppearanceSettings) => void;
}

export interface AppearanceSettings {
  theme: string;
}

export function AppearanceCard({ onSettingsChange }: AppearanceSettingsProps) {
  const [settings, setSettings] = useState<AppearanceSettings>({
    theme: 'light',
  });

  const handleChange = (value: string) => {
    const newSettings = {
      ...settings,
      theme: value,
    };
    setSettings(newSettings);
    onSettingsChange(newSettings);
  };

  return (
    <motion.div variants={fadeInUp}>
      <Card className="overflow-hidden border border-gray-100 shadow-sm">
        <CardHeader className="flex flex-row items-center gap-4 px-6 py-4 bg-gray-50/50">
          <Palette className="w-5 h-5 text-gray-500" />
          <div>
            <h3 className="text-sm font-medium text-gray-900">Apparence</h3>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-900">Thème</Label>
            <p className="text-xs text-gray-500 mb-3">Personnalisez l'apparence de l'application</p>
            <Select value={settings.theme} onValueChange={handleChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionnez un thème" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Clair</SelectItem>
                <SelectItem value="dark">Sombre</SelectItem>
                <SelectItem value="system">Système</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}