"use client"

import { Button } from '@/components/ui/button';
import { AppIcon } from '@/components/ui/app-icon';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from 'framer-motion';

export function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-200/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <AppIcon />
            <span className="ml-2 text-xl font-medium text-black">
              FlashStudio
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-[1000px] px-4">
                  Type de photos
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/photos/portrait-professionnel">Portrait Professionnel</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/photos/photo-cv">Photo CV</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/photos/photo-linkedin">Photo LinkedIn</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link href="/tarifs">
              <Button variant="ghost" className="rounded-[1000px] px-4">
                Tarifs
              </Button>
            </Link>
            
            <Link href="/entreprises">
              <Button variant="ghost" className="rounded-[1000px] px-4">
                Entreprises
              </Button>
            </Link>

            <Link href="/blog">
              <Button variant="ghost" className="rounded-[1000px] px-4">
                Blog
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/auth/login">
            <Button variant="ghost" className="rounded-[1000px] px-6">
              Se connecter
            </Button>
          </Link>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/auth/login">
              <Button 
                className="rounded-[1000px] px-6 bg-gradient-to-r from-[#0A66C2] to-[#0077B5] hover:from-[#004182] hover:to-[#005885] text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300"
              >
                Créer mon portrait professionnel
              </Button>
            </Link>
          </motion.div>
        </div>
      </nav>
    </header>
  );
}