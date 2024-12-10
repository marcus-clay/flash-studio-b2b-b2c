"use client"

import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/navigation/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '@/lib/animations';
import { HeroBackground } from '@/components/home/hero-background';
import { PortraitCarousel } from '@/components/home/portrait-carousel';
import { HowItWorks } from '@/components/home/how-it-works';
import { PricingSection } from '@/components/home/pricing-section';
import { CTASection } from '@/components/home/cta-section';
import { Testimonials } from '@/components/testimonials';
import { TrustIndicators } from '@/components/ui/trust-indicators';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <motion.section 
          className="relative pt-32 pb-20"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <HeroBackground />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.span 
              className="inline-block text-sm text-[#0A66C2] animate-pulse font-medium mb-8"
              variants={fadeInUp}
            >
              🔥 Offre limitée : Les 100 premiers portraits gratuits
            </motion.span>
            
            <motion.h1 
              className="text-black mb-6 max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              Des portraits professionnels d'exception en 5 minutes
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Démarquez-vous sur LinkedIn et attirez l'attention des recruteurs avec un portrait qui fait la différence.
            </motion.p>
            <motion.div 
              className="flex flex-col items-center gap-6"
              variants={fadeInUp}
            >
              <Link href="/auth/login">
                <Button 
                  size="lg" 
                  className="rounded-[1000px] px-8 py-6 bg-gradient-to-r from-[#0A66C2] to-[#0077B5] hover:from-[#004182] hover:to-[#005885] text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Créez votre portrait professionnel
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-gray-600">4.9/5 basé sur plus de 50 000 avis</span>
              </div>
            </motion.div>

            <motion.div 
              className="mt-12"
              variants={fadeInUp}
            >
              <TrustIndicators />
            </motion.div>
          </div>
        </motion.section>

        {/* Portrait Carousel */}
        <PortraitCarousel />

        {/* How It Works */}
        <HowItWorks />

        {/* Social Proof */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">4.9/5 basé sur plus de 50 000 avis</span>
            </div>
            <h2 className="text-3xl font-medium mb-8">8 452 825 portraits professionnels créés</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
              <div className="h-8">Tesla</div>
              <div className="h-8">Amazon</div>
              <div className="h-8">Goldman Sachs</div>
              <div className="h-8">Harvard</div>
              <div className="h-8">Booking</div>
              <div className="h-8">Texas University</div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Pricing */}
        <PricingSection />

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}