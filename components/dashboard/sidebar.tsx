"use client"

import { Button } from '@/components/ui/button';
import { 
  Camera,
  History,
  BookOpen,
  PlusCircle,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { UploadDialog } from './upload/upload-dialog';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      href: '/dashboard',
      icon: Camera,
      label: 'Portraits',
      exact: true
    },
    {
      href: '/dashboard/history',
      icon: History,
      label: 'Historique'
    },
    {
      href: '/dashboard/guide',
      icon: BookOpen,
      label: 'Guide et conseils'
    }
  ];

  const isActive = (href: string, exact = false) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="w-64 bg-white border-r min-h-[calc(100vh-4rem)] p-4">
      <div className="mb-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            className="w-full justify-start bg-[#0162C1] hover:bg-[#0152A1] text-white rounded-[1000px] gap-2"
            onClick={() => setUploadDialogOpen(true)}
          >
            <PlusCircle className="h-5 w-5" />
            Nouveau portrait
          </Button>
        </motion.div>
      </div>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="ghost" 
                className={cn(
                  "w-full justify-start rounded-[1000px] relative overflow-hidden",
                  isActive(item.href, item.exact) 
                    ? "bg-gray-200 text-gray-900 hover:bg-gray-200/90" 
                    : "hover:bg-gray-50"
                )}
              >
                {isActive(item.href, item.exact) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gray-200"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30
                    }}
                  />
                )}
                <span className="relative flex items-center">
                  <item.icon className="mr-2 h-5 w-5" />
                  {item.label}
                </span>
              </Button>
            </motion.div>
          </Link>
        ))}
      </nav>

      <UploadDialog 
        open={uploadDialogOpen}
        onOpenChange={setUploadDialogOpen}
      />
    </div>
  );
}