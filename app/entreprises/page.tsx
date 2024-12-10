"use client"

import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/navigation/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Zap, Shield, Phone, Sparkles, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '@/lib/animations';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';

const benefits = {
  agency: [
    {
      title: "Réduction du temps de placement de 40%",
      description: "Accélérez vos processus de recrutement",
      icon: Zap
    },
    {
      title: "Augmentation du taux de conversion des CV de 35%",
      description: "Maximisez l'impact de vos candidatures",
      icon: Users
    },
    {
      title: "Économisez jusqu'à 80% sur vos frais de photographie",
      description: "Optimisez votre budget recrutement",
      icon: Shield
    }
  ],
  candidates: [
    {
      title: "Portraits professionnels en 5 minutes",
      description: "Un processus simple et rapide",
      icon: Zap
    },
    {
      title: "+45% de visibilité sur LinkedIn",
      description: "Augmentez l'impact des profils",
      icon: Star
    },
    {
      title: "Taux de réponse aux candidatures multiplié par 3",
      description: "Des résultats concrets",
      icon: Users
    }
  ]
};

const pricingPlans = [
  {
    name: "Pack Essentiel",
    price: "299€",
    promo: "149€",
    period: "/mois",
    description: "Idéal pour les petites agences",
    features: [
      "50 portraits/mois",
      "Support prioritaire",
      "Formation de votre équipe",
      "Tableau de bord dédié"
    ]
  },
  {
    name: "Pack Business",
    price: "799€",
    promo: "399€",
    period: "/mois",
    description: "Pour les agences en croissance",
    features: [
      "200 portraits/mois",
      "Support prioritaire 24/7",
      "Formation personnalisée",
      "API disponible"
    ]
  },
  {
    name: "Pack Enterprise",
    price: "Sur devis",
    description: "Pour les grands groupes",
    features: [
      "Portraits illimités",
      "Account manager dédié",
      "Formation sur site",
      "Intégration sur mesure"
    ]
  }
];

const faqs = [
  {
    question: "Comment fonctionne le processus de génération ?",
    answer: "Notre technologie d'IA analyse les photos de vos candidats et génère des portraits professionnels optimisés en quelques minutes. Le processus est entièrement automatisé et ne nécessite aucune expertise technique."
  },
  {
    question: "Quels sont les délais de mise en place ?",
    answer: "La mise en place est immédiate. Après la création de votre compte, vous pouvez commencer à générer des portraits instantanément. La formation de votre équipe peut être planifiée dans les 48h."
  },
  {
    question: "Puis-je tester le service avant de m'engager ?",
    answer: "Oui, nous proposons un essai gratuit de 14 jours avec 20 portraits inclus. Vous pourrez ainsi tester la qualité de notre service sans engagement."
  }
];

export default function EntreprisesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <motion.section 
          className="relative pt-32 pb-20"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <div className="absolute inset-0 bg-[#F6F9FC]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.span 
              className="inline-block text-sm text-red-500 animate-pulse font-medium mb-8"
              variants={fadeInUp}
            >
              🔥 Offre de lancement : -50% sur tous nos packs entreprise jusqu'au 31 décembre
            </motion.span>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <h1 className="text-4xl md:text-5xl font-medium text-black mb-6">
                  Transformez vos candidats en talents incontournables
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Plus de 500 agences de recrutement font déjà confiance à FlashStudio pour valoriser leurs candidats
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/auth/login">
                    <Button 
                      size="lg"
                      className="rounded-[1000px] px-8 py-6 bg-gradient-to-r from-[#0A66C2] to-[#0077B5] hover:from-[#004182] hover:to-[#005885] text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                    >
                      Démarrer votre essai gratuit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="rounded-[1000px] px-8 py-6"
                  >
                    Planifier une démo
                  </Button>
                </div>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                className="relative"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=900&fit=crop"
                    alt="Équipe de recrutement"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-xl p-4 max-w-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-medium">93% de satisfaction client</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    "FlashStudio a révolutionné notre processus de recrutement"
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Social Proof Section */}
        <motion.section 
          className="py-20 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="text-center"
                variants={fadeInUp}
              >
                <div className="text-3xl font-bold text-[#0A66C2] mb-2">12</div>
                <p className="text-gray-600">nouvelles agences cette semaine</p>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={fadeInUp}
              >
                <div className="text-3xl font-bold text-[#0A66C2] mb-2">93%</div>
                <p className="text-gray-600">des candidats contactés en 30 jours</p>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={fadeInUp}
              >
                <div className="text-3xl font-bold text-[#0A66C2] mb-2">50k+</div>
                <p className="text-gray-600">portraits générés pour des cabinets</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section 
          className="py-20 bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-medium mb-8">Pour votre agence</h3>
                <div className="space-y-8">
                  {benefits.agency.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                          <benefit.icon className="h-6 w-6 text-[#0A66C2]" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-medium mb-8">Pour vos candidats</h3>
                <div className="space-y-8">
                  {benefits.candidates.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                          <benefit.icon className="h-6 w-6 text-[#0A66C2]" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section 
          className="py-20 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-medium mb-4">Des forfaits adaptés à vos besoins</h2>
              <p className="text-xl text-gray-600">Choisissez le plan qui correspond à votre activité</p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={fadeInUp}
            >
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="mb-8">
                    <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-gray-500">{plan.period}</span>}
                    </div>
                    {plan.promo && (
                      <div className="mt-2">
                        <span className="text-sm text-[#0A66C2] bg-blue-50 px-2 py-1 rounded-full">
                          ⚡️ Promotion : {plan.promo}/mois pendant 3 mois
                        </span>
                      </div>
                    )}
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-[#0A66C2]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full rounded-[1000px] bg-gradient-to-r from-[#0A66C2] to-[#0077B5] hover:from-[#004182] hover:to-[#005885] text-white"
                  >
                    Choisir {plan.name}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          className="py-20 bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              variants={fadeInUp}
            >
              <div className="flex justify-center mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop"
                  alt="Marie D."
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <blockquote className="text-2xl font-medium mb-6">
                "Depuis que nous utilisons FlashStudio, nos candidats sont contactés 2 fois plus rapidement"
              </blockquote>
              <cite className="text-gray-600 not-italic">
                Marie D., Directrice Adecco Lyon
              </cite>
            </motion.div>
          </div>
        </motion.section>

        {/* Guarantees Section */}
        <motion.section 
          className="py-20 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid md:grid-cols-4 gap-8"
              variants={fadeInUp}
            >
              {[
                { icon: Zap, text: "Essai gratuit de 14 jours" },
                { icon: Shield, text: "Satisfaction garantie ou remboursé" },
                { icon: Phone, text: "Support dédié par téléphone" },
                { icon: Users, text: "Formation gratuite de votre équipe" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-[#0A66C2]" />
                  </div>
                  <p className="font-medium">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section 
          className="py-20 bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-3xl font-medium mb-12 text-center"
              variants={fadeInUp}
            >
              Questions fréquentes
            </motion.h2>
            <motion.div variants={fadeInUp}>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-white rounded-lg border border-gray-200"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="relative py-48 bg-gradient-to-br from-[#0A66C2] via-[#0077B5] to-[#0052CC]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              className="text-4xl font-medium text-white mb-8"
              variants={fadeInUp}
            >
              Prêt à transformer vos candidats en talents ?
            </motion.h2>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={fadeInUp}
            >
              <Button 
                size="lg"
                className="rounded-[1000px] px-8 py-6 bg-white text-[#0A66C2] hover:bg-white/90 min-w-[250px]"
              >
                Démarrer votre essai gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="rounded-[1000px] px-8 py-6 text-white border-white hover:bg-white/10 min-w-[200px]"
              >
                Planifier une démo
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}