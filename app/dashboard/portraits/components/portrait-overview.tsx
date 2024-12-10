"use client"

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { Camera, Upload, Palette } from 'lucide-react';

export function PortraitOverview() {
  const stats = [
    {
      icon: Camera,
      label: 'Portraits générés',
      value: '12',
      href: '/dashboard/portraits/generated'
    },
    {
      icon: Upload,
      label: 'Photos uploadées',
      value: '24',
      href: '/dashboard/portraits/uploaded'
    },
    {
      icon: Palette,
      label: 'Styles disponibles',
      value: '8',
      href: '/dashboard/portraits/styles'
    }
  ];

  return (
    <motion.div 
      className="grid gap-4 md:grid-cols-3"
      variants={fadeInUp}
    >
      {stats.map((stat, index) => (
        <motion.a
          key={stat.label}
          href={stat.href}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="block"
        >
          <Card className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <stat.icon className="h-5 w-5 text-gray-500" />
              <div>
                <div className="text-2xl font-semibold">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            </div>
          </Card>
        </motion.a>
      ))}
    </motion.div>
  );
}