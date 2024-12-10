"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface ProfileData {
  name: string;
  email: string;
  title: string;
  company: string;
  phone: string;
  location: string;
}

export function ProfileForm() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<ProfileData>({
    name: 'Jean Dupont',
    email: 'jean.dupont@exemple.fr',
    title: 'Directeur Marketing',
    company: 'Tech Solutions',
    phone: '+33 6 12 34 56 78',
    location: 'Paris, France'
  });

  const handleChange = (key: keyof ProfileData, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <motion.div variants={fadeInUp}>
      <Card className="overflow-hidden border border-gray-100 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between px-6 py-4 bg-gray-50/50">
          <div className="flex items-center gap-4">
            <User className="w-5 h-5 text-gray-500" />
            <h3 className="text-sm font-medium text-gray-900">Informations personnelles</h3>
          </div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button 
              variant="ghost"
              onClick={() => setIsEditing(!isEditing)}
              className="text-sm rounded-[1000px]"
            >
              {isEditing ? 'Annuler' : 'Modifier'}
            </Button>
          </motion.div>
        </CardHeader>
        <CardContent className="p-6">
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { key: 'name', label: 'Nom complet', type: 'text' },
                { key: 'email', label: 'Email', type: 'email' },
                { key: 'title', label: 'Titre professionnel', type: 'text' },
                { key: 'company', label: 'Entreprise', type: 'text' },
                { key: 'phone', label: 'Téléphone', type: 'tel' },
                { key: 'location', label: 'Localisation', type: 'text' }
              ].map(({ key, label, type }) => (
                <div key={key} className="space-y-2">
                  <Label htmlFor={key} className="text-sm font-medium text-gray-900">
                    {label}
                  </Label>
                  <Input
                    id={key}
                    type={type}
                    value={formData[key as keyof ProfileData]}
                    onChange={(e) => handleChange(key as keyof ProfileData, e.target.value)}
                    disabled={!isEditing}
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
            {isEditing && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <Button 
                  type="submit"
                  className="bg-[#0162C1] hover:bg-[#0152A1] rounded-[1000px]"
                >
                  Enregistrer les modifications
                </Button>
              </motion.div>
            )}
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}