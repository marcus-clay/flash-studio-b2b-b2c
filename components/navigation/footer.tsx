"use client"

import { Bolt } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-medium mb-4">FlashStudio</h4>
            <div className="flex items-center mb-4">
              <Bolt className="h-6 w-6 text-[#0A66C2]" />
              <span className="ml-2 text-lg font-medium">FlashStudio</span>
            </div>
            <p className="text-sm text-gray-600">
              Portraits professionnels de qualité studio
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Nos Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/photos/portrait-professionnel">Portrait Professionnel</Link></li>
              <li><Link href="/photos/photo-cv">Photo CV</Link></li>
              <li><Link href="/photos/photo-linkedin">Photo LinkedIn</Link></li>
              <li><Link href="/tarifs">Tarifs</Link></li>
              <li><Link href="/entreprises">Solutions Entreprises</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/blog">Guide du portrait</Link></li>
              <li><Link href="/blog">Actualités</Link></li>
              <li><Link href="/blog">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/contact">Support</Link></li>
              <li>contact@flashstudio.fr</li>
              <li>01 23 45 67 89</li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-sm text-gray-600">
          © 2024 FlashStudio. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}