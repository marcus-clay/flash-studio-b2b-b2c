"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export function ProfilePhoto() {
  return (
    <motion.div variants={fadeInUp}>
      <Card className="overflow-hidden border border-gray-100 shadow-sm">
        <CardHeader className="flex flex-row items-center gap-4 px-6 py-4 bg-gray-50/50">
          <Camera className="w-5 h-5 text-gray-500" />
          <h3 className="text-sm font-medium text-gray-900">Photo de profil</h3>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-center gap-6">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring" }}>
              <Avatar className="h-24 w-24">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" 
                  alt="Photo de profil"
                  className="object-cover"
                  style={{ aspectRatio: "1/1" }}
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" className="gap-2 rounded-[1000px]">
                <Camera className="h-4 w-4" />
                Changer la photo
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}