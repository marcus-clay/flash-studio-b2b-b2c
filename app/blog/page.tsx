"use client"

import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/navigation/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    title: "Comment réussir sa photo LinkedIn en 2024",
    description: "Guide complet pour optimiser votre présence professionnelle sur LinkedIn",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    category: "LinkedIn",
    link: "/photos/photo-linkedin"
  },
  {
    title: "Les erreurs à éviter sur votre CV",
    description: "Les 5 erreurs de photo CV qui peuvent vous coûter un entretien",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    category: "CV",
    link: "/photos/photo-cv"
  },
  {
    title: "Portrait professionnel : l'atout séduction",
    description: "Comment un portrait professionnel peut transformer votre carrière",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    category: "Portrait",
    link: "/photos/portrait-professionnel"
  },
  {
    title: "L'impact des photos professionnelles sur le recrutement",
    description: "Étude : l'influence des photos sur les décisions de recrutement",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    category: "Études",
    link: "/blog"
  },
  {
    title: "Tendances photo professionnelle 2024",
    description: "Les nouvelles tendances en matière de portrait business",
    image: "https://images.unsplash.com/photo-1551836022-4c4c79cca48d",
    category: "Tendances",
    link: "/blog"
  },
  {
    title: "Optimiser son personal branding",
    description: "Comment construire une image professionnelle cohérente",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    category: "Conseils",
    link: "/blog"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-medium text-black mb-6">Blog FlashStudio</h1>
          <p className="text-xl text-gray-600 mb-12">
            Conseils et actualités pour optimiser votre image professionnelle
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Link href={article.link} key={index}>
                <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-[#0A66C2] font-medium">
                      {article.category}
                    </span>
                    <h2 className="text-xl font-medium mt-2 mb-3">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">
                      {article.description}
                    </p>
                    <Button variant="ghost" className="text-[#0A66C2] p-0 hover:bg-transparent hover:text-[#004182]">
                      Lire l'article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}